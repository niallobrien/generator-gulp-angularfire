# generator-gulp-angularfire [![Build Status](https://secure.travis-ci.org/Swiip/generator-gulp-angular.svg?branch=master)](http://travis-ci.org/Swiip/generator-gulp-angular)

Offers you a Yeoman generator to initiate a Web application with the following workflow:

<img height="100" align="left" src="https://raw.githubusercontent.com/yeoman/yeoman.io/master/app/assets/img/bullet-yo.gif">

<img height="100" align="left" src="https://raw.github.com/gulpjs/artwork/master/gulp.png">

<img height="100" align="left" src="http://bower.io/img/bower-logo.png">

<img height="100" align="left" src="https://s3.amazonaws.com/media-p.slid.es/uploads/hugojosefson/images/86267/angularjs-logo.png">

<img height="100" align="left" src="https://d1qb2nb5cznatu.cloudfront.net/startups/i/13274-1e708e28fa58694493de9b2f3bf08a11-medium_jpg.jpg?buster=1334550800">
	
  
## Why generator-gulp-angularfire ?

This generator combines the best features of other generators like [generator-gulp-angular](https://github.com/Swiip/generator-gulp-angular), [generator-angular](https://github.com/yeoman/generator-angular), [ngTailor](https://github.com/lauterry/generator-ngtailor) and [generator-gulp-webapp](https://github.com/yeoman/generator-gulp-webapp) into an optimal workflow for starting applications with AngularJS powered by Gulp & Firebase!

generator-gulp-angularfire scaffolds an Angularfire application with a full-featured gulpfile.js, giving you immediate out-of-the-box access to all tasks for modern web development with Firebase.


My intention is to create a generator that gives users total control over their development toolbox so they can immediately start projects with their preferred tools, such as specific UI frameworks or JavaScript preprocessors.

## Usage

### Create your project

Install the required tools: `yo`, `gulp`, `bower`
```
npm install -g yo gulp bower
```

Install `generator-gulp-angularfire`:
```
npm install -g generator-gulp-angularfire
```

Make a new directory, and `cd` into it:
```
mkdir my-new-project && cd $_
```

Run `yo gulp-angularfire`, optionally passing an app name:
```
yo gulp-angularfire [app-name]
```

### Use Gulp tasks

* `gulp` or `gulp build` to build an optimized version of your application in `/dist`
* `gulp serve` to launch a browser sync server on your source files
* `gulp serve:dist` to launch a server on your optimized application
* `gulp wiredep` to fill bower dependencies in your `.html` file(s)
* `gulp test` to launch your unit tests with Karma
* `gulp protractor` to launch your e2e tests with Protractor
* `gulp protractor:dist` to launch your e2e tests with Protractor on the dist files

## Directory structure

[Best Practice Recommendations for Angular App Structure](https://docs.google.com/document/d/1XXMvReO8-Awi1EZXAXS4PzDzdNvV6pGcuaF4Q9821Es/pub)

But I recommend keeping to a division by file type: scripts, styles, partials.

## Features included in the gulpfile
* *useref* : allow configuration of your files in comments of your HTML file
* *ngMin* : convert simple injection to complete syntax to be minification proof
* *uglify* : optimize all your JavaScript
* *csso* : optimize all your CSS
* *rev* : add a hash in the file names to prevent browser cache problems
* *watch* : watch your source files and recompile them automatically
* *jshint* : JavaScript code linter
* *imagemin* : all your images will be optimized at build
* *Unit test (karma)* : out of the box unit test configuration with karma
* *e2e test (protractor)* : out of the box e2e test configuration with protractor
* *browser sync* : full-featured development web server with livereload and devices sync
* *ngHtml2js* : all HTML partials will be converted to JS to be bundled in the application
* **TODO** lazy : don't process files which haven't changed when possible

## Questions the generator will ask
* *jQuery*: jQuery 1.x, 2.x, Zepto, none
* *Angular modules*: animate, cookies, touch, sanitize
* *Resource handler*: ngResource, Restangular, none
* *Router*: ngRoute, UI Router, none
* *UI Framework*: Bootstrap, Foundation, none (depends on the chosen CSS preprocessor)
* **TODO** Bootstrap directives : UI Bootstrap, Angular Strap, none (only if you chose Bootstrap)
* **TODO** CSS preprocessor: less, sass, none
* **TODO** JS preprocessor: CoffeeScript, TypeScript, ECMAScript6 (Traceur)
* **TODO** HTML preprocessor: Jade ?
* **TODO** Script loader: Require, Browserify, ES6 with Require?, none
* **TODO** Test framework: Jasmine, Mocha, Qunit

## Known issue

Protractor tests are not stable with PhantomJS, at least not on my Mac. I'm getting unpredictable disconnections between webdriverjs and phantomjs.

I tried many configurations for Protractor without success, any hint would be appreciated.

## Changelog

### 0.0.2
* Improves scaffolded code.


### 0.0.1

* Initial commit
* Scaffolds a working Angularfire application

## Thanks
@Swiip and his [generator-gulp-angular](https://github.com/Swiip/generator-gulp-angular) project.

## License

MIT
