// import {enableDebugTools} from 'angular2/platform/browser';
// Used to demonstrate external module is loading and the function is called.

import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './app/app.component';
import {AudioHandler} from './app/audio/audiohandler';

export function appExternalModuleTest(): void {
    // Bootstrap Angular2 
    bootstrap(AppComponent);

    // Test if Howler has loaded correctly by playing audio.
    let testAudio: AudioHandler = new AudioHandler();
    testAudio.playAudio(['../audio/audiocheck.net_linearfrequencytest.mp3', '../audio/audiocheck.net_linearfrequencytest.ogg']);

    //enable angular2 debug tools
    //bootstrap(AppComponent).then((appRef) => { enableDebugTools(appRef); });
}