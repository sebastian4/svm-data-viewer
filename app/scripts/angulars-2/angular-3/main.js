var demoApp = angular.module('demoApp', []);

demoApp.config(function ($routeProvider){
    $routeProvider
        .when('/',
            {
                controller: 'oneController',
                templateUrl: 'views/view1.html'
            })
        .when('/side2',
            {
                controller: 'twoController',
                templateUrl: 'views/view2.html' 
            })
        .otherwise({ redirectTo: '/'});   
});

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

controllers.twoController = function($scope) { 
    $scope.cars = [
        {
            car: 'toyota',
            color: 'blue',          
        },
        {
            car: 'honda',
            color: 'red',          
        },
        {
            car: 'ford',
            color: 'black',          
        },        
    ]   
}

demoApp.controller(controllers);