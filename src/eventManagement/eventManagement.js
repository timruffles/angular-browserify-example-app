/**
 * event CRUD for organisers
 */
"use strict"

var Event = require("../events/events");
  
exports.controllers = {
  EventCrudCtrl: EventCrudCtrl,
}

exports.routes = {
  "/events/create": {
    template: require("./eventManagement.html"),
    controller: "EventCrudCtrl",
    controllerAs: "ctrl",
  },
}

function EventCrudCtrl(
  $scope
) {
  
  var self = this;

  resetForm();

  self.events = Event.query();

  self.creating = false;

  self.remove = function(event) {
    event.$delete()
     .then(function() {
       var index = self.events.indexOf(event); 
       self.events.splice(index, 1);
     })
  }

  self.create = function(event) {
    event.preventDefault();

    self.creating = true;

    self.newEvent.$save()
      .then(function() {
        self.events.push(self.newEvent); 
        resetForm();
      });
  }

  function resetForm() {
    if($scope.createEvent) {
      $scope.createEvent.$setPristine();
    }

    self.newEvent = Event.build();
  }

}
