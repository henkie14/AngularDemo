'use strict';

angular.module('myApp.view2', ['ui.router'])

    .config(['$stateProvider', function($stateProvider) {
      $stateProvider
        // HOME STATES AND NESTED VIEWS ========================================
          .state('view2', {
            url: '/view2',
            templateUrl: 'view2/view2.html'
          })
    }])

.controller('View2Ctrl', [function() {

}]);