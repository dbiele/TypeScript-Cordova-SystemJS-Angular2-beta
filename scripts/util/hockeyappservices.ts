
declare var hockeyapp;
export class HockeyAppServices {
    private testService: any;
    private HOCKEY_APP_ID: string = '9ab0087d8f0444d5955e491c35c18936';
    private hasCordova: Cordova;
    constructor() {
        this.hasCordova = window.cordova;
        if (this.hasCordova) {
            this.testService = hockeyapp.start(this.onSuccessCallback, this.onErrorCallback, this.HOCKEY_APP_ID);
        }
    }



    /**
     * Display tester feedback user interface
     * @param msg
     */
    public displayFeedbackUI(msg: string) {
        if (this.hasCordova) {
            this.testService.feedback(this.success, this.error);
        }
    }


    /**
     * Check for a new version
     */
    public checkForUpdate() {
        if (this.hasCordova) {
            this.testService.checkForUpdate(this.success, this.error);
        }
    }

    /**
     * Force an app crash
     * @param data 
     */
    public forceCrash(data?: Object) {
        if (this.hasCordova) {
            if (data !== undefined) {
                this.testService.addMetaData(this.success, this.error, data);
            }
            this.testService.forceCrash();
        }
    }

    private success(): void {
        // nothing for now
    }

    private error(): void {
        // nothing for now
    }

    private onSuccessCallback(): void {
        // nothing for now
    }

    private onErrorCallback(): void {
        // nothing for now
    }
}