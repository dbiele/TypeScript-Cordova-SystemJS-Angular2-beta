System.register(['./app'], function(exports_1) {
    var app_1;
    /**
     * Called from start.ts
     */
    function initialize() {
        var aString = 'hello, World!';
        console.log('app.ts string =' + aString);
        initializeCordova();
    }
    exports_1("initialize", initialize);
    /**
     * Waits for Cordova or if not on a device and cordova is not needed, don't wait and call onDeviceReady.
     */
    function initializeCordova() {
        if (!window.cordova) {
            onDeviceReady();
        }
        else {
            document.addEventListener('deviceready', onDeviceReady, false);
        }
    }
    function onDeviceReady() {
        console.log('Cordova: on device ready');
        app_1.appExternalModuleTest();
    }
    return {
        setters:[
            function (app_1_1) {
                app_1 = app_1_1;
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=index.js.map