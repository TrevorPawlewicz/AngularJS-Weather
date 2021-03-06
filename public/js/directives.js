// DIRECTIVES: An instruction to AngularJS to manipulate a piece of the DOM.

weatherApp.directive('weatherReport', function(){
    return {
        restrict: 'E', // element
        templateUrl: 'directives/weatherReport.html',
        replace: true,
        scope: {
            weatherDay: "=", // object
            convertToStandard: "&", // function
            convertToDate: "&", // function
            dateFormat: "@" // string
        }
    }
});
