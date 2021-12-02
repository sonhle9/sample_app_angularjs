
//This configures the routes and associates each route with a view and a controller
var app = angular.module('sampleApp', []);

app.controller('AppController', ['$scope', function ($scope) {

    $scope.name = "Manh";
    $scope.age = 26;

}]);

//This configures the routes and associates each route with a view and a controller
// app.config(function ($routeProvider) {
//     $routeProvider
//         .when('/',
//         {
//             controller: 'HomeController',
//             templateUrl: 'app/partials/home.html'
//         })
//         .otherwise({ redirectTo: '/' });
// });

