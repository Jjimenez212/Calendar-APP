app.factory('events', ['$http', function($http) { 
    return $http.get('https://content.codecademy.com/courses/ltp4/events-api/events.json') 
              .success(function(data) { 
                return data; 
              }) 
              .error(function(err) { 
                return err; 
              }); 
  }]);