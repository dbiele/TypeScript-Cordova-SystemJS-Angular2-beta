'use strict';


var gulp = require('gulp');
var tsd = require('gulp-tsd');
var tslint = require('gulp-tslint');
var browserSync = require('browser-sync');
var del = require('del');
var plugins = require('gulp-load-plugins')();
var tsrequire = require('gulp-typescript');
var karma = require('karma');
var sourceMaps = require('gulp-sourcemaps');

gulp.task('NPM+NODE.version', function (done) {
    // adding require here so it doesn't run every time the gulpfile.js is loaded and run.
    var checkEnvironment = require('./tools/check-environment.js');
    checkEnvironment({ requiredNpmVersion: '>=2.14.7 <3.0.0', requiredNodeVersion: '>=4.2.1 <5.0.0' }, done);
});

gulp.task('install.tsd.files', function (callback) {
    tsd({
        command: 'reinstall',
        config: '.tsd.json'
    }, callback);
});

gulp.task('lint.typescript', function () {
    // Rules can be found here
    // https://github.com/palantir/tslint#supported-rules
    // Microsoft Rules = https://github.com/Microsoft/tslint-microsoft-contrib/blob/master/tslint.json
    var tslintConfig = require('./tools/tslint.json');
    return gulp.src(['scripts/**/*.ts', '!scripts/typings/**'])
        //Custom rules can be added to configuration.  rulesDirectory: 'folder/folder'
      .pipe(tslint({
          configuration: tslintConfig
      }))
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
    //gulp.watch("./www/scripts/*.js", ['browser.sync.js-watch']);
});

// remove the karma folder.
function karmaClean() {
    //You can use multiple globbing patterns as you would with `gulp.src`
    //If you are using del 2.0 or above, return its promise
    return del(['.karma']);
}

function karmaTsSpec() {
    // takes the .ts files from .karma/unit and converts to .js
    return karmaTs('scripts/tests/unit');
}

function ts(filesRoot, filesGlob, filesDest, project) {
    //return gulp.src(filesRoot+'/**/*.ts')
    //.pipe(tsrequire({
    //    noImplicitAny: true,
    //}))
    //.pipe(gulp.dest(filesDest));

    var results = gulp.src(filesGlob)
        .pipe(plugins.sourcemaps.init())
		.pipe(plugins.typescript(project))

    return results.js
        .pipe(plugins.sourcemaps.write())
        .pipe(gulp.dest(filesDest))
}

function karmaTs(root) {
    var project = plugins.typescript.createProject('./scripts/tsconfig.json', {
        outDir: '.karma'
    });

    var filesRoot = root;
    var filesDest = '.karma';
    var filesGlob = [
		root + '/**/*.ts'
    ];
    return ts(filesRoot, filesGlob, filesDest, project);
}

function karmaRun(done) {
    return new karma.Server({
        configFile: __dirname + '/tools/karma.conf.js'
    }, done).start();
}

gulp.task('unit.test.karma', gulp.series(
    // Remember take in a callback or return a promise or event stream to avoid gulp 'The following tasks did not complete.'
    //clear the karma folder
    //karmaClean,
    // convert the .ts files to .js and save in karma folder
    //karmaTsSpec,
    // run the karma server
    karmaRun
));