gulp-javascript-obfuscator
==========================

Gulp plugin for [javascript-obfuscator](https://github.com/javascript-obfuscator/javascript-obfuscator).

## Installation

Install the package with NPM:

`npm install --save gulp-javascript-obfuscator`

## Usage

```javascript
var gulp = require('gulp'),
    javascriptObfuscator = require('gulp-javascript-obfuscator');


gulp.src('file.js')
    .pipe(javascriptObfuscator())
    .pipe(gulp.dest('dist'));
```


## Options

[Pass any options available in the obfuscator](https://github.com/javascript-obfuscator/javascript-obfuscator#javascript-obfuscator-options).

```javascript
gulp.src('file.js')
    .pipe(javascriptObfuscator({
        compact:true
        sourceMap: true
    }))
    .pipe(gulp.dest('dist'));
```

Using **sourceMap** option with value set to **true** will also output a _.map_ file to Gulp stream.

