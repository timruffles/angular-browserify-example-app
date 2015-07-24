"use strict";

var Event = require("../events/events");

var d3 = require("d3");

exports.controllers = {
  EventStatsCtrl: EventStatsCtrl,
}

exports.directives = {
  "demoDirective": circle, 
};

function EventStatsCtrl(
  $routeParams
) {
  
  var self = this;

  self.event = Event.build({
    id: $routeParams.id,
  });

  self.event.$get()
}

function circle() {
  return {
    restrict: "E",
    link: function(scope, el, attrs) {

      d3.select(el[0])
        .append("svg")
        .append("circle")
        .attr("r", 25)
        .attr("cx", 150)
        .attr("cy", 75)
    }
  }
}
