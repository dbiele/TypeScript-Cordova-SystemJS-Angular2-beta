// Karma configuration
// Generated on Thu Dec 24 2015 20:24:55 GMT+0100 (Central Europe Standard Time)

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '../',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
                // {pattern: 'node_modules/traceur/bin/traceur.js', included: true, watched: false},
          { pattern: 'node_modules/systemjs/dist/system-polyfills.js', included: true, watched: false },
          { pattern: 'node_modules/angular2/bundles/angular2-polyfills.js', included: true, watched: false },
          { pattern: 'node_modules/systemjs/dist/system.js', included: true, watched: false },
          { pattern: 'node_modules/rxjs/bundles/Rx.js', included: true, watched: false },
          { pattern: 'node_modules/angular2/bundles/angular2.dev.js', included: true, watched: false },
          { pattern: 'node_modules/angular2/bundles/http.dev.js', included: true, watched: false },
          { pattern: 'node_modules/angular2/bundles/router.dev.js', included: true, watched: false },
          { pattern: 'node_modules/angular2/bundles/testing.dev.js', included: true, watched: false },

          { pattern: 'node_modules/**/*.map', included: false, watched: false },

          // paths loaded via module imports
          { pattern: 'www/scripts/**/*.js', included: false, watched: false },
          { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },

          /** Paths to unit tests */
          { pattern: '.karma/tests/unit/**/*.[sS]pec.js', included: false },

          // SystemJS config
          { pattern: 'tools/karma.shim.js', included: true, watched: false },

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
          'www/scripts/**/config.js',
          'www/scripts/tests/**/*.js'
        ],


        // urlRoot: '__karma__',


        proxies: {
            // required for component assests fetched by Angular's compiler
            "/scripts/lib/": ""/base/www/scripts/lib/"
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
        //reporters: ['progress', 'html', 'coverage'],
        reporters: ['progress'],


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
        browsers: ['PhantomJS'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,


        // Concurrency level
        // how many browser should be started simultanous
        concurrency: Infinity,


        // Plugins
        plugins: [
          'karma-coverage',
          'karma-jasmine',
          'karma-jasmine-html-reporter',
          'karma-chrome-launcher',
          'karma-phantomjs-launcher',
        ]

    })
}

