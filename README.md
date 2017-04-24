# VueJS + SurveyJS/SurveyJS_Editor QuickStart Source
[![Build Status][travis-badge]][travis-badge-url]

This repository holds the source code of the [survey.io quickstart with Vue](https://surveyjs.io/) 
and potentially a good starting point for your application.

It's been extended with testing support so you can start writing tests immediately.

## Prerequisites

Node.js and npm are essential to Angular and SurveyJS development. 
    
<a href="https://docs.npmjs.com/getting-started/installing-node" target="_blank" title="Installing Node.js and updating npm">
Get it now</a> if it's not already installed on your machine.
 
**Verify that you are running at least node `v4.x.x` and npm `3.x.x`**
by running `node -v` and `npm -v` in a terminal/console window.
Older versions produce errors.

We recommend [nvm](https://github.com/creationix/nvm) for managing multiple versions of node and npm.

## Create a new project based on the QuickStart

Clone this repo into new project folder (e.g., `my-proj`).
```shell
git clone https://github.com/surveyjs/surveyjs_vue_quickstart my-proj
cd my-proj
```

## Install npm packages

> See npm and nvm version notes above

Install the npm packages described in the `package.json` and verify that it works:

```shell
npm install
npm start
```

>Doesn't work in _Bash for Windows_ which does not support servers as of January, 2017.

The `npm start` command first compiles the application, 
then simultaneously re-compiles and runs the server.
Both the compiler and the server watch for file changes.

Shut it down manually with `Ctrl-C`.

You're ready to write your application.

## npm scripts

We've captured many of the most useful commands in npm scripts defined in the `package.json`:

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

Runs the app in the development mode.<br>
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

[travis-badge]: https://travis-ci.org/sueveyjs/surveyjs_vue_quickstart.svg?branch=master
[travis-badge-url]: https://travis-ci.org/sueveyjs/surveyjs_vue_quickstart
