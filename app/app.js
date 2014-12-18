'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'ui.router',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]);


myApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/view1');

});
