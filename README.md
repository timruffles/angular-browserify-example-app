# angular-browserify-example

This is a demonstration of using Angular with browserify.

It is a very opinionated use of AngularJS! I love it because:

- it's simple: one module system to rule them all
- very easy reuse on server-side
- I prefer CommonJS & browserify to Anguar's module system

## How it works

You write your code as Angular modules, and export routes, controllers, filters and directives. All other code that would normally live in services etc can be `require()`ed in just like in Node.

For instance, below is a module exporting a controller and its route. It's loading in the `Event` active-record object to load in events.

```javascript
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
```

See [src/main.js] for how the app is booted.

### Lazy-loading

This is achieved with the standard browserify stack, and our `ng.loadModule()` function again.

## Viewing the demo

Download or clone and run:

```sh
npm install
npm run build
npm start
```

and visit `localhost:8080`.



