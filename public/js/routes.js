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
        .when('/forecast/:days', { // :days is ANY parameter entered
            templateUrl: 'pages/forecast.html',
            controller: 'forecastController'
        })
});
//----------------------------------------------------------------------------
