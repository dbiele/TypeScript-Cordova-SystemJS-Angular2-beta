/**
 * Used to demonstrate external module is loading and function is called.
 */

import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './app/app.component';

export function appExternalModuleTest(): void {
    console.log('testmodules called in testExternalModules');
    bootstrap(AppComponent);
}