"use strict"

var ng = require("../ng");

var constructor;

// returns an instance of eent
exports.build = function(data) {
  return new (Event())(data);
}

exports.query = function() {
  return Event().query.apply(null, arguments); 
}

function Event() {
  constructor = constructor || ng.$resource("/api/event/:id", {
    id: "@id",
  });

  return constructor;
}


