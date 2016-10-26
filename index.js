var through = require('through2'),
	gutil = require('gulp-util'),
	JavaScriptObfuscator = require('javascript-obfuscator'),
	PluginError = gutil.PluginError;

module.exports = function gulpJavaScriptObfuscator(options) {
	return through.obj(function (file, enc, cb) {
		var obfuscationResult;
		if (file.isNull()) {
			return cb(null, file);
		}

		if (file.isBuffer()) {
			try {
				obfuscationResult = JavaScriptObfuscator.obfuscate(String(file.contents), options);
				file.contents = new Buffer(obfuscationResult.getObfuscatedCode());
				cb(null, file);
			}
			catch (err) {
				throw new PluginError('gulp-javascript-obfuscator', err);
			}
		} else if (file.isStream()) {
			throw new PluginError('gulp-javascript-obfuscator', 'Streams are not supported!');
		}
	});
};