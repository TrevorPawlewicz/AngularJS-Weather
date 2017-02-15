// SERVICES: a Singleton object that will contain properties and Functions.

// Pull things out of Controllers and put them into Services!!!!!!!!!!!!!!!!!!

weatherApp.service('cityService', function(){

    this.city = "Philadelphia, PA"; // default
});
//----------------------------------------------------------------------------

weatherApp.service('weatherService', ['$resource', function($resource){
    var myWeatherKey = config.MY_KEY_WEATHER_API;

    this.GetWeather = function(city, days) {

        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=" + myWeatherKey, {
                callback: "JSON_CALLBACK"
            },
            {
                get: { method: "JSONP" }
            }
        );

        // get city and num of days from JSON data LIST
        return weatherAPI.get({ q: city, cnt: days});

    };

}]);
