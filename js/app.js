// MODULE: where we write pieces of our Angular application.
//                              ng-app link,               gets data off internet
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);
//----------------------------------------------------------------------------


// ROUTES: links to ng-view in index.html
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
//----------------------------------------------------------------------------


// SERVICES: a Singleton object that will contain properties and Functions.
weatherApp.service('cityService', function(){

    this.city = "New York, NY"; // default
});
//----------------------------------------------------------------------------



// CONTROLLERS: where we define our app's' behavior by defining Functions and Values.
// for home.html
weatherApp.controller('homeController', ['$scope', 'cityService', function($scope, cityService){

    $scope.city = cityService.city;

    // watch triggers the Digest Loop "watching" for change of property
    $scope.$watch('city', function(){
        cityService.city = $scope.city;
    });
}]);

// for forecast.html
weatherApp.controller('forecastController', ['$scope', '$resource', 'cityService', function($scope, $resource, cityService){
    var myWeatherKey = config.MY_KEY_WEATHER_API;

    $scope.city = cityService.city;

    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=17456b502241b9ee322faae7e6e183f9", {
        callback: "JSON_CALLBACK"
    },
        {
            get: { method: "JSONP" }
        }
    );

    $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: 2});

    console.log($scope.weatherResult);
}]);
//----------------------------------------------------------------------------
