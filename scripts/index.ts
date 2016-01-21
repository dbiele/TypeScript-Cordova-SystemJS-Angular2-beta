import {appExternalModuleTest} from './app';

/**
 * Called from start.ts after systemjs bootstap
 */
export function initialize(): void {
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

function onDeviceReady(): void {
    console.log('Cordova: on device ready');
    appExternalModuleTest();
}