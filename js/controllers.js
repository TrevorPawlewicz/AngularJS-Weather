// CONTROLLERS: where we define our app's' behavior by defining Functions and Values.

// for home.html
weatherApp.controller('homeController', ['$scope', '$location', 'cityService', function($scope, $location, cityService){

    $scope.city = cityService.city;

    // watch triggers the Digest Loop "watching" for change of property
    $scope.$watch('city', function(){
        cityService.city = $scope.city;
    });

    //
    $scope.submitForm = function() {
        $location.path('/forecast');
    }
}]);

// for forecast.html
weatherApp.controller('forecastController', ['$scope', '$routeParams', 'cityService', 'weatherService', function($scope, $routeParams, cityService, weatherService){

    $scope.city = cityService.city;
    $scope.days = $routeParams.days || 2;

    $scope.weatherResult = weatherService.GetWeather($scope.city, $scope.days);

    // degK = result.temp.day passed in from forcast.html
    $scope.convertToFahrenheit = function(degK) {
        //
        return Math.round((1.8 * (degK - 273)) + 32);
    };

    // dt = result.dt passed in from forcast.html
    $scope.convertToDate = function(dt) {
        // convert from milliseconds
        return new Date(dt * 1000);
    };

}]);
//----------------------------------------------------------------------------
