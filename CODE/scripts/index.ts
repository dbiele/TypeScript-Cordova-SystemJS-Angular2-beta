import {appExternalModuleTest} from './app';

/**
 * Called from start.ts
 */
export function initialize():void {
    var aString: string = 'hello, World!';
    console.log('app.ts string =' + aString);
    initializeCordova();
}

/**
 * Waits for Cordova or if not on a device and cordova is not needed, don't wait and call onDeviceReady.
 */
function initializeCordova(): void {
    if (!window.cordova) {
        onDeviceReady();
    } else {
        document.addEventListener('deviceready', onDeviceReady, false);
    }
}

function onDeviceReady():void {
    console.log('Cordova: on device ready');
    appExternalModuleTest();
}