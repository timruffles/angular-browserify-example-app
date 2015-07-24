"use strict";

exports.routes = {
  "/lazy": {
    template: '<h1>Hi</h1>' +
'',
    controller: "EventCrudCtrl",
    controllerAs: "ctrl",
    resolve: {
      eventStats: function() { return ng.load('eventStats'); },
    },
  },
}
