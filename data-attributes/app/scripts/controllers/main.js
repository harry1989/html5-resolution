'use strict';

angular.module('dataAttributesApp')
  .controller('MainCtrl', function ($scope) {
    $scope.quotes = [
      {
      	'quote' : 'Custom data attributes are intended to store custom data private to the page or application, for which there are no more appropriate attributes or elements',
      	'author': 'W3.org',
      	'author_link': 'http://www.w3.org/html/wg/drafts/html/master/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes'
      },
      {	
      	'quote': 'A way to associate properties of a element within the markup',
      	'author': '@harry_sistalam',
      	'author_link': 'https://twitter.com/harry_sistalam'
      }
    ];
  });
