'use strict';

var ng = require("../ng");

exports.routes = {
  "/events/:id/stats": {
    template: require("./eventStats.html"),
    controller: "EventStatsCtrl",
    controllerAs: "ctrl",
    resolve: {
      eventStats: function() {
        return ng.load('./src/eventStats/eventStats.js');
      },
    },
  },
}
