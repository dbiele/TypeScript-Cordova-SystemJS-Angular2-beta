// import {enableDebugTools} from 'angular2/platform/browser';
// Used to demonstrate external module is loading and the function is called.

import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './app/app.component';
import {AudioHandler} from './app/audio/audiohandler';
import {HockeyAppServices} from './util/hockeyappservices';

/**
 * Fires when the cordova deviceready event is fired.
 * Or, when cordova does not exist and deviceready is automatically called.
 */
export function appExternalModuleTest(): void {
    // Bootstrap Angular2 
    bootstrap(AppComponent);

    // Initialize soundJS
    let testAudio: AudioHandler = new AudioHandler();
    testAudio.playAudio(['audio/audiocheck.net_linearfrequencytest.mp3']);

    //enable angular2 debug tools
    //bootstrap(AppComponent).then((appRef) => { enableDebugTools(appRef); });

    let hockeyapp = new HockeyAppServices();
}