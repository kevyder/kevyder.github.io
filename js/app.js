window.addEventListener('load', function() {
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
});