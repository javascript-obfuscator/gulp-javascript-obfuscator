# gulp-javascript-obfuscator

Gulp plugin for [javascript-obfuscator](https://github.com/javascript-obfuscator/javascript-obfuscator)

## Installation

Install the package with npm:

```bash
$ npm install --save gulp-javascript-obfuscator
```

## Usage

```javascript
const gulp = require('gulp');
const javascriptObfuscator = require('gulp-javascript-obfuscator');

gulp.src('file.js')
    .pipe(javascriptObfuscator())
    .pipe(gulp.dest('dist'));
```

## Options

[Pass any options available in the obfuscator](https://github.com/javascript-obfuscator/javascript-obfuscator#javascript-obfuscator-options)

```javascript
gulp.src('file.js')
    .pipe(javascriptObfuscator({
        compact: true
    }))
    .pipe(gulp.dest('dist'));
```

The only exception is obfuscator's `sourceMap` option which must not be set, as it will be handled automatically when using `gulp-sourcemaps`.

## Source Maps

`gulp-javascript-obfuscator` can be used in tandem with [gulp-sourcemaps](https://github.com/floridoo/gulp-sourcemaps) in order to generate source maps for your javascript files.

You will need to initialize gulp-sourcemaps prior to running gulp-javascript-obfuscator and write the source maps after, as such:

```javascript
const sourcemaps = require('gulp-sourcemaps');

gulp.src('file.js')
    .pipe(sourcemaps.init())
    .pipe(javascriptObfuscator({
        compact: true
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'));
```

This will output a `file.js.map` file to the **dist** directory.

You can chain other gulp plugins as well:

```javascript
const sourcemaps = require('gulp-sourcemaps');

gulp.src('file.js')
    .pipe(sourcemaps.init())
    // use babel to pre-process javascript files
    .pipe(babel({
        presets: ['@babel/preset-env']
    }))
    .pipe(javascriptObfuscator({
        compact: true
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'));
```
