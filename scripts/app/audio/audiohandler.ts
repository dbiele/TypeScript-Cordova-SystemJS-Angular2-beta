/**
 * This class is used to test systemjs and it's ability to import external .js files.
 * Howler is loaded in start.ts and used here. System.import('howler')
 * Info = http://goldfirestudios.com/blog/104/howler.js-Modern-Web-Audio-Javascript-Library
 */
export class AudioHandler {

    public playAudio(audioFiles: Array<string>): void {
        let sound = new Howl({
            urls: audioFiles
        }).play();
    }
}