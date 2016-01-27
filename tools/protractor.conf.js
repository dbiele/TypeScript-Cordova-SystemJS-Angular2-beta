// more info about reflect-metadata
// https://www.npmjs.com/package/reflect-metadata
require('reflect-metadata');

exports.config = {

    baseUrl: 'http://localhost:8081/',

    // 'chrome', 'firefox', 'IE', 'safari', 'phantomjs'
    // More info: http://angular.github.io/protractor/#/browser-setup
    capabilities: {
        'browserName': 'chrome',
        'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
        build: process.env.TRAVIS_BUILD_NUMBER,
        name: 'Protractor Tests'
    },

    directConnect: true,

    allScriptsTimeout: 110000,
    getPageTimeout: 100000,

    framework: 'jasmine2',
    jasmineNodeOpts: {
        isVerbose: false,
        showColors: true,
        includeStackTrace: false,
        defaultTimeoutInterval: 400000
    },

    // Special option for Angular2, to test against all Angular2 applications
    // on the page. This means that Protractor will wait for every app to be
    // stable before each action, and search within all apps when finding
    // elements.
    useAllAngular2AppRoots: true,
    //sauceUser: process.env.SAUCE_USERNAME,
    //sauceKey: process.env.SAUCE_ACCESS_KEY
    //onPrepare: function () {
    //    browser.driver.get('http://localhost:8081/index.html');


    //    // Login takes some time, so wait until it's done.
    //    // For the test app's login, we know it's done when it redirects to
    //    // index.html.
    //    return browser.driver.wait(function () {
    //        //return browser.driver.getCurrentUrl().then(function (url) {
    //        //    return /index2/.test(url);
    //        //});
    //    }, 10000);
    //}
};