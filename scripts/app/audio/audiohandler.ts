/**
 * This class is used to test systemjs and it's ability to import external .js files.
 * SoundJS is loaded in start.ts and used here. System.import('soundjs')
 * Info = http://www.createjs.com/soundjs
 */
export class AudioHandler {
    constructor() {
        //, createjs.CordovaAudioPlugin
        createjs.Sound.registerPlugins([createjs.WebAudioPlugin, createjs.HTMLAudioPlugin, createjs.CordovaAudioPlugin]);
        createjs.Sound.alternateExtensions = ['mp3'];
        createjs.Sound.on('fileload', this.loadHandler, this);

    }

    public playAudio(audioFiles: Array<string>): void {
        // this is just for testing.
        createjs.Sound.registerSound(audioFiles[0], 'soundID');
    }

    private loadHandler(event: Event) {
        console.log('this is a test' + event);
        // This is fired for each sound that is registered.
        console.log('play audio');
        let instance = createjs.Sound.play('soundID');  // play using id.  Could also use full source path or event.src.
        instance.on('complete', this.handleComplete, this);
        instance.volume = 0.5;
    }

    private handleComplete(event: Event) {
        console.log('handle complete');
    }
}