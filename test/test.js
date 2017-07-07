const gulp = require('gulp');
const through = require('through2');
const javascriptObfuscator = require('../');

describe('gulp-javascript-obfuscator', function () {

	describe('javascriptObfuscator()', function () {
		it('should succeed', (done) => {
			let count = 0;
			const stream = gulp.src(['test/fixtures/simple.js']).pipe(javascriptObfuscator());
			stream.on('error', done);

			stream.on('data', (file) => ++count);

			stream.on('end', function () {
				expect(count).toBe(1);
				done.apply(this, arguments);
			});
		});
	});
});