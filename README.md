# angular-browserify-example

This is a demonstration of using Angular with browserify.

It is a very opinionated use of AngularJS! It provides the following benefits:

- simplicity: one module system to rule them all
- lazy-loading
- great code reuse on server-side
- easy to test code in node
- browerify's simple workflow
- can ignore Angular's module system while writing apps

## Viewing the demo

Either [see here](, or download and run:

```sh
npm install
npm run build
npm start
```

and visit `localhost:8080`.

## Why?

- I really like browserify
- I really don't like Angular's modules
  - DI is overkill for dynamic languages
  - doesn't provide module-loading for production/test, i.e you have to maintain a list of files
  - makes lazy-loading a nightmare
  - is over complex for most people (i.e they worry about factory vs service)
- I like Angular, and I like Node, so making them as similar to write as possible is good
- module systems are boring, learning fewer is better
- no grunt etc required for template loading, minification etc 

