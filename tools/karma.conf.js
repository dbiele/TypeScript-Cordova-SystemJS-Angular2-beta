// Original code provide by @sasxa https://gist.github.com/sasxa/0939f5bb00285e82af21
// More information about karma config can be found here: http://karma-runner.github.io/0.13/config/configuration-file.html
// Karma configuration
// Make sure to always update /www before running karma.

module.exports = function (config) {
    var karmaconfig = {
        // base path that will be used to resolve all patterns (eg. files, exclude).  Always relative to the karma.conf.js file.
        basePath: '../',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        // pattern watched = karma watches the file for changes.
        // pattern included = should the files be include in the browser using <script>?  Use false if you want to load them manually.
        // pattern served = should the files be served by karma's webserver? default is true
        files: [

            { pattern: 'node_modules/es6-shim/es6-shim.js', included: true, watched: false },
            { pattern: 'node_modules/systemjs/dist/system-polyfills.js', included: true, watched: false },

            { pattern: 'node_modules/angular2/bundles/angular2-polyfills.js', included: true, watched: false },
            { pattern: 'node_modules/systemjs/dist/system.src.js', included: true, watched: false },
            { pattern: 'node_modules/rxjs/bundles/Rx.js', included: true, watched: false },
            { pattern: 'node_modules/angular2/bundles/angular2.dev.js', included: true, watched: false },
            { pattern: 'node_modules/angular2/bundles/http.dev.js', included: true, watched: false },
            { pattern: 'node_modules/angular2/bundles/router.dev.js', included: true, watched: false },
            { pattern: 'node_modules/angular2/bundles/testing.dev.js', included: true, watched: false },

            { pattern: 'node_modules/**/*.map', included: false, watched: false },

            // SystemJS config
            { pattern: 'tools/karma.shim.js', included: true, watched: false },

            // paths loaded via module imports
            { pattern: 'www/**/*.js', included: false, watched: false },
            { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },

            /** Paths to unit tests */
            //{ pattern: '.karma/tests/unit/**/*.[sS]pec.js', included: false, watched: false },

            // paths loaded via Angular's component compiler
            // (these paths need to be rewritten, see proxies section)
            //{ pattern: 'www/**/*.html', included: false, watched: false },
            //{ pattern: 'www/**/*.css', included: false, watched: false },

            // paths to support debugging with source maps in dev tools
            //{ pattern: 'src/scripts/**/*.ts', included: false, watched: false },
            //{ pattern: 'www/**/*.js.map', included: false, watched: false }
        ],

        // list of files to exclude
        exclude: [
          'www/**/config.js',
          'www/**/start.js',
          'www/scripts/tests/e2e/**/*.js'
        ],

        //All the Karma's urls get prefixed with the urlRoot. This is helpful when using proxies, as sometimes you might want to proxy a url that is already taken by Karma.
        //urlRoot: '__karma__',

        proxies: {
            // required for component assests fetched by Angular's compiler
            // example is import {normalizeDataTest} from 'scripts/app/components/jasmineunit';
            //"/scripts/": "/www/scripts/"
            //"/scripts/core/": "/www/scripts/core/",
            //"/scripts/lab/": "/www/scripts/lab/",
        },

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            // 'dist/scripts/**/*.js': ['coverage']
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        //reporters: ['progress', 'html', 'coverage', 'kjhtml'],
        reporters: ['progress', 'kjhtml', 'coverage'],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_DEBUG,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        // 'Chrome', 'PhantomJS2', 'Firefox', 'IE'

        // Browser notes: When using browsers ['Chrome', 'Firefox', 'IE'], if missing, add 'kjhtml' to reporters: ['progress', 'kjhtml'].

        browsers: ['Chrome'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // Concurrency level
        // how many browser should be started simultanous
        // Especially on sevices like SauceLabs and Browserstack it makes sense to only launch a limited amount of browsers at once, and only start more when those have finished. Using this configuration you can specify how many browsers should be running at once at any given point in time.
        // Infinity
        concurrency: Infinity,

        // Plugins
        plugins: [
          'karma-coverage',
          'karma-jasmine',
          'karma-jasmine-html-reporter',
          'karma-chrome-launcher',
          'karma-phantomjs2-launcher',
          'karma-firefox-launcher',
          'karma-ie-launcher'
        ],
        customLaunchers: {
            ChromeTravisCI: {
                base: 'Chrome',
                flags: ['--no-sandbox']
            }
        }
    }

    /**
 * `PhantomJS2` support is limited in Travis CI so we use `Chrome` instead.
 * Note that we also need to configure Travis so it enables Chrome.
 * See `before_script` in the `.travis.yml` file.
*/
    console.log('Travis process.env = ' + process.env.TRAVIS)
    if (process.env.TRAVIS) {
        karmaconfig.browsers = ['ChromeTravisCI'];
    }

    config.set(karmaconfig);
}