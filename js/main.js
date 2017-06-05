var app = angular.module("app", []);

app.controller("AppCtrl", function($scope, $http) {
  $http.get("https://api.github.com/users/kevyder/repos?per_page=50").
  success(function(data) {
    var repos = [];
    data.forEach(function(record) {
      if (!(record.fork)) {
        repos.push(record);
      }
    });
    $scope.github = repos;
    var options = [];
    data.forEach(function(record) {
      if (options.indexOf(record.language) === -1 && record.language) {
        options.push(record.language);
      }
    });
    $scope.options = options;
  }).error(function(data) {
    // log error
  });
});
