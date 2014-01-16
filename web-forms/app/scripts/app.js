'use strict';

angular.module('webFormsApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/types', {
          templateUrl: 'views/types.html'
      })
      .when('/actions', {
          templateUrl: 'views/actions.html'
      })
      .when('/resources', {
          templateUrl: 'views/resources.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

var app = angular.module('webFormsApp');

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