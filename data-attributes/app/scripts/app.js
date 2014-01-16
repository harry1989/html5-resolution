'use strict';

angular.module('dataAttributesApp', [])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/how', {
          templateUrl: 'views/how.html'
      })
      .when('/future', {
          templateUrl: 'views/future.html'
      })
      .when('/resources', {
          templateUrl: 'views/resources.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });


var app = angular.module('dataAttributesApp');



app.directive('navTabs', ['$location', function(location) {
    return {
        restrict: 'A',
        link: function(scope, element) {
            var $ul = $(element);
          
            var $tabs = $ul.children();
            var tabMap = {};
            $tabs.each(function() {
              var $li = $(this);
              //Substring 1 to remove the # at the beginning (because location.path() below does not return the #)
              tabMap[$li.find('a').attr('href').substring(1)] = $li;
            });

            scope.location = location;
            scope.$watch('location.path()', function(path) {
                $tabs.removeClass("active");
                var newPath = tabMap[path]
                if(newPath)
                {
                  newPath.addClass("active");
                }
            });
        }
    };    
}]);