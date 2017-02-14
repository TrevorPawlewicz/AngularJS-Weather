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
weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', function($scope, $resource, $routeParams, cityService){
    var myWeatherKey = config.MY_KEY_WEATHER_API;

    $scope.city = cityService.city;
    $scope.days = $routeParams.days || 2;

    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=" + myWeatherKey, {
            callback: "JSON_CALLBACK"
        },
        {
            get: { method: "JSONP" }
        }
    );

    // get city and num of days from JSON data LIST
    $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days});

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
