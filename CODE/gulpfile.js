'use strict';
var gulp = require('gulp');
var tsd = require('gulp-tsd');
var tslint = require('gulp-tslint');
var browserSync = require('browser-sync');

gulp.task('install.tsd.files', function (callback) {
    tsd({
        command: 'reinstall',
        config: '.tsd.json'
    }, callback);
});

gulp.task('tslint', function () {
    var tslintConfig = {
        "rules": {
            "semicolon": true,
            "requireReturnType": true,
            "requireParameterType": true,
            "jsdoc-format": true,
            "quotemark": [true, "single"],
            "variable-name": [true, "allow-leading-underscore"]
        }
    };

    return gulp.src(['scripts/**/*.ts', '!scripts/typings/**'])
        //Custom rules can be added to configuration.  rulesDirectory: 'folder/folder'
      .pipe(tslint({ configuration: tslintConfig }))
      .pipe(tslint.report('verbose', { emitError: true, reportLimit: 0 }));

});


//gulp.task('copy.htmlfiles.www', function () {
    //gulp.src(['./scripts/test/cssbutton/components/**/*.html', './scripts/test/md-to-html/**/*.html'])
    //.pipe(gulp.dest('./www/components/'));
//});

//gulp.task('browser.sync.js-watch', ['js'], browserSync.reload);

gulp.task('browser.sync', function () {
    browserSync.init({
        server: {
            baseDir: "./www/"
        }
    });
    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    //gulp.watch("js/*.js", ['browser.sync.js-watch']);
});