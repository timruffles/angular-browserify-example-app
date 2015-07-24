/**
 * home page display - a listing of most recent events
 */
"use strict";

var Event = require("../events/events");
  
exports.controllers = {
  HomeCtrl: HomeCtrl,
}

exports.routes = {
  "/": {
    template: require("./home.html"),
    controller: "HomeCtrl",
    controllerAs: "ctrl",
  },
};


function HomeCtrl(
) {
  
  var self = this;

  self.events = Event.query();

}


