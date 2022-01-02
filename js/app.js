var app = angular.module('CalendarApp', ['ngRoute']);
app.config(function ($routeProvider) { 
  $routeProvider
  .when('/', { 
      controller: 'DayController', 
      templateUrl: 'views/day.html' 
    }) 
    .when('/:id', {
      controller: 'DayController',
      templateUrl: 'views/event.html'
    })
    .otherwise({ 
      redirectTo: '/' 
    })
    
}); 

  