"use strict";

var angular = require("angular");
var angularRoute = require("angular-route");
var angularResource = require("angular-resource");

// module that'll store our app singletons
var ng = require("./ng");

// our code that exposes controllers, directives etc
var deps = [
  require("./eventManagement/eventManagement"),
  require("./home/home"),
  require("./events/eventsShow"),
];

var lazy = [
  require("./eventStats/lazy"),
];

// the sole time we call 'angular.module' in our app
angular.module("events", ["ngRoute", "ngResource"])
.config(function(
  $locationProvider
  , $routeProvider
) {

  // use push-state for routing
  $locationProvider.html5Mode(true); 

  $routeProvider.otherwise({
    template: require("./errors/404.html"),
  });

})
.config(function($controllerProvider, $compileProvider, $routeProvider) { 

  // expose all of the providers so we can register functionality later
  ng.set({
    $controllerProvider: $controllerProvider,
    $compileProvider: $compileProvider,
    $routeProvider: $routeProvider,
  });

  deps.concat(lazy).forEach(ng.registerModule);

})
.run(function($resource, $compile, $rootScope, $rootElement, $timeout, $location, $q) {
  ng.set({
    '$resource': $resource,
    '$rootScope': $rootScope,
    '$rootElement' : $rootElement,
    '$timeout' : $timeout,
    '$location' : $location,
    '$compile': $compile,
    '$q' : $q,
  });
});


