// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ngResource', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
    .state('app.disambiguation', {
      url: '/drugs/disambiguation/:VPID',
      views: {
        'menuContent': {
          templateUrl: 'templates/disambiguation.html',
          controller: 'disambiguationCtrl'
        }
      }
    })
    .state('app.drugs', {
      url: '/drugs',
      views: {
        'menuContent': {
          templateUrl: 'templates/drugs.html',
          controller: 'drugsCtrl'
        }
      }
    })

  .state('app.drug', {
    url: '/drugs/:VPID/:APID?',
    views: {
      'menuContent': {
        templateUrl: 'templates/drug.html',
        controller: 'drugCtrl'
      }
    }
  })
  
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/drugs');
    
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});
