// module:                       ng-app link
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);








// CONTROLLERS:
// 
weatherApp.controller('homeController', ['$scope', function($scope){

}]);

//
weatherApp.controller('forecastController', ['$scope', function($scope){

}]);






// ROUTES:
weatherApp.config(function($routeProvider){

    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'homeController'
        })
        .when('/forecast', {
            templateUrl: 'pages/forecast.html',
            controller: 'forecastController'
        })
});
