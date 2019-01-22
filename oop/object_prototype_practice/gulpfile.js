'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
//var nodemon = require('gulp-nodemon');


gulp.task('default', function () {
	browserSync.init({
        server: {
            baseDir: "./"
        },
        middleware: function (req, res, next) {
            res.setHeader("Content-Security-Policy", "base-uri 'self'; connect-src 'self'; default-src 'self'; font-src 'self'; frame-ancestors 'self'; frame-src 'self'; img-src 'self' 'unsafe-inline'; manifest-src 'self'; media-src 'self'; object-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self'");
            res.setHeader("X-Content-Security-Policy", "base-uri 'self'; connect-src 'self'; default-src 'self'; font-src 'self'; frame-ancestors 'self'; frame-src 'self'; img-src 'self' 'unsafe-inline'; manifest-src 'self'; media-src 'self'; object-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self'");
            next();
        }
    });
    gulp.watch("src/*.js", ['sync']);
    gulp.watch("test/*.js", ['sync']);
});

gulp.task('sync', function() {
    browserSync.reload();
});