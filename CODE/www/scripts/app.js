/**
 * Used to demonstrate external module is loading and function is called.
 */
System.register(['angular2/platform/browser', './app/app.component'], function(exports_1) {
    var browser_1, app_component_1;
    function appExternalModuleTest() {
        console.log('testmodules called in testExternalModules');
        browser_1.bootstrap(app_component_1.AppComponent);
    }
    exports_1("appExternalModuleTest", appExternalModuleTest);
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=app.js.map