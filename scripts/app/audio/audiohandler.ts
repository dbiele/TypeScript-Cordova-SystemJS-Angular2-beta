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
        createjs.Sound.on("fileload", this.loadHandler, this);
        
    }

    public playAudio(audioFiles: Array<string>): void {
        createjs.Sound.registerSound('audio/sound.mp3', 'sound');
    }

    private loadHandler(event) {
        // This is fired for each sound that is registered.
        console.log('play audio');
        let instance = createjs.Sound.play('sound');  // play using id.  Could also use full source path or event.src.
        instance.on("complete", this.handleComplete, this);
        instance.volume = 0.5;
    }

    private handleComplete(event) {
        console.log('handle complete');
    }
}