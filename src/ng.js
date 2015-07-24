"use strict";

var _ = require("lodash");

var ng = exports;

exports.set = function(kvs) {
  Object.keys(kvs).forEach(function(k) {
    exports[k] = kvs[k]; 
  });
}

exports.registerModule = function(module) {
  _.each(module.controllers, function(controller, name) {
    ng.$controllerProvider.register(name, controller);
  });

  _.each(module.directives, function(directive, name) {
    ng.$compileProvider.directive(name, directive);
  });

  _.each(module.routes, function(route, path) {
    ng.$routeProvider.when(path, route);
  });
}

exports.load = function() {
  var modules = arguments;

  return ng.$q(function(resolve, reject) {
    loadjs(modules, function() {
      _.each(arguments, ng.registerModule);
      resolve();
    });
  });
}

