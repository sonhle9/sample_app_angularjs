
//This controller retrieves data from the productsService and associates it with the $scope
//The $scope is ultimately bound to the products view
app.controller('AppController', function ($scope, appService, $http) {

  init();

  function init() {
      // productsService.getProducts().success(function(data){
      //     $scope.products = data;
      // });
  }

});