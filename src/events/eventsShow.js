/**
 * viewing events
 */
"use strict"

var Event = require("./events");

exports.controllers = {
  EventsShowCtrl: EventsShowCtrl,
};

exports.routes = {
  "/events/:id": {
    template: require("./eventsShow.html"),
    controller: "EventsShowCtrl",
    controllerAs: "ctrl",
  },
};
  

function EventsShowCtrl(
  $routeParams
) {
  
  var self = this;

  self.event = Event.build({
    id: $routeParams.id,
  });

  self.event.$get()
    .then(function() {
      self.success = true; 
    }, function() {
      self.failure = true; 
    });
}

