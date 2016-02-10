import * as webdriver from 'selenium-webdriver';
let globalKey: string = 'browser';
let global$: string = '$';
export var browser: protractor.IBrowser = global[globalKey];
export var $: cssSelectorHelper = global[global$];

export function clickAll(buttonSelectors: any) {
    buttonSelectors.forEach(function (selector: any) { $(selector).click(); });
}

export function verifyNoBrowserErrors() {
    // TODO(tbosch): Bug in ChromeDriver: Need to execute at least one command
    // so that the browser logs can be read out!
    browser.executeScript('1+1');
    browser.manage().logs().get('browser').then(function (browserLog: any) {
        var filteredLog = browserLog.filter(function (logEntry: any) {
            if (logEntry.level.value >= webdriver.logging.Level.INFO.value) {
                console.log('>> ' + logEntry.message);
            }
            return logEntry.level.value > webdriver.logging.Level.WARNING.value;
        });
        expect(filteredLog.length).toEqual(0);
    });
}
