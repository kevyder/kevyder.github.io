window.addEventListener('load', function() {
  getRepos(null);
  var languageSelect = document.getElementById('language')
  languageSelect.addEventListener("change", function(){
    var value = languageSelect.options[languageSelect.selectedIndex].value;
    getRepos(value);
  });
});

function setSelectOptions(repos) {
  var languages = [];
  for (var key in repos) {
    if (repos[key].language)
      languages.push(repos[key].language);
  }
  languages = languages.filter(function(item, position) {
    return languages.indexOf(item) == position
  });

  var select = document.getElementById('language');
  select.options.length = 1;
  for (var i = 0; i < languages.length; i++) {
    var option = document.createElement('option');
    option.text = languages[i];
    option.value = languages[i];
    select.add(option, languages.length - 1);
  }
}

function getRepos(language) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", 'https://api.github.com/users/kevyder/repos?per_page=50', true);
  xhr.onload = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        var repos = JSON.parse(xhr.responseText).filter(function(repo) {
          return repo.fork !== true;
        }).sort(function(repo1, repo2) {
          return repo2.stargazers_count - repo1.stargazers_count
        });
        setSelectOptions(repos);
        if (language){
          repos = repos.filter(function(repo) {
            return repo.language === language
          });
          document.getElementById('language').value = language;
        }
        repoTemplate(repos);
      } else {
        console.error(xhr.statusText);
      }
    }
  };
  xhr.send(null);
}

function repoTemplate(repos) {
  repos = repos.slice(0, 5);
  var project = document.getElementById('project');
  project.innerHTML = null;
  var repoHTML = "";
  for (var key in repos) {
    repoHTML += `
    <a class="repo_link" href="${repos[key].html_url}" target="_blank">
      <div class="repo">
        <h3 class="repo_title">${repos[key].name}</h3>
        <p class="repo_description">${repos[key].description}</p>
      </div>
		</a>`;
  }
  project.innerHTML = repoHTML;
}

let mobileButton = document.querySelector('.mobile-button');

mobileButton.addEventListener('click', () => {
  let cO = document.querySelector('.container-options'),
      lines = mobileButton.children[0];
  if(cO.classList.contains('active-menu')){
    cO.classList.remove('active-menu');
    lines.classList.remove('close-lines');
  }else{
    cO.classList.add('active-menu');
    lines.classList.add('close-lines');
  }
});
