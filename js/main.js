(function() {
    var ipb = angular.module('ipb', ['ui.bootstrap', 'socialLogin']);
    ipb.controller('MainController', ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http) {
        $scope.message = "Loading...";
        $scope.articlesURL = 'https://script.google.com/macros/s/AKfycbwI04gbnD_WGUgl3oMC_nR1omjahZqmkL2gbaUp-ku7rCqoBDI/exec?action=getArticles&category=Technology';        

        $http({
          method: 'GET',
          url: $scope.articlesURL
        }).then(function successCallback(response) {
            $scope.message = '';
            console.log(response.data.articles);
            $scope.articles = response.data.articles;
          }, function errorCallback(response) {
            $scope.message = 'Failed';
          });
    }]);        
})();