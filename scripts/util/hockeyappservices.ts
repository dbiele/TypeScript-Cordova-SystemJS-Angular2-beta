
declare var hockeyapp;
export class HockeyAppServices {
    private _testService: any;
    private HOCKEY_APP_ID: string = '9ab0087d8f0444d5955e491c35c18936';
    private _hasCordova: Cordova;
    private constuctor() {
        this._hasCordova = window.cordova;
        if (this._hasCordova) {
            this._testService = hockeyapp.start(this.onSuccessCallback, this.onErrorCallback, this.HOCKEY_APP_ID);
        }
    }



    /**
     * Display tester feedback user interface
     * @param msg
     */
    public displayFeedbackUI(msg: string) {
        if (this._hasCordova) {
            this._testService.feedback(this.success, this.error);
        }
    }


    /**
     * Check for a new version
     */
    public checkForUpdate() {
        if (this._hasCordova) {
            this._testService.checkForUpdate(this.success, this.error);
        }
    }

    /**
     * Force an app crash
     * @param data 
     */
    public forceCrash(data?: Object) {
        if (this._hasCordova) {
            if (data !== undefined) {
                this._testService.addMetaData(this.success, this.error, data);
            }
            this._testService.forceCrash();
        }
    }

    private success(): void {

    }

    private error(): void {

    }

    private onSuccessCallback(): void {

    }

    private onErrorCallback(): void {

    }
}