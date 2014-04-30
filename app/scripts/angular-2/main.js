var demoApp = angular.module('demoApp', []);

var controllers = {};

controllers.oneController = function($scope) { 
    $scope.customers = [
        {
            name: 'john gomez',
            phone: 571-323-4455,
            city: 'fallen',
            state: 'Fl',
        },
         {
            name: 'rupert martin',
            phone: 571-323-4455,
            city: 'fallen',
            state: 'md',
        },
         {
            name: 'sori johnson',
            phone: 571-323-4455,
            city: 'fallen',
            state: 'id',
        },
        {
            name: 'ali baba',
            phone: 571-323-4455,
            city: 'fallen',
            state: 'id',
        },
        {
            name: 'dobfrey fronson',
            phone: 571-323-4455,
            city: 'fallen',
            state: 'id',
        }
    ]   
}

demoApp.controller(controllers);