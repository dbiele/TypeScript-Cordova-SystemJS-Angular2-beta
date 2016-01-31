// based on this demo
// https://github.com/juliemr/protractor-demo 
// Do not use imports.  It will cause errors
// import {it, describe, expect, beforeEach} from 'angular2/testing';
//import {verifyNoBrowserErrors} from '../e2e_util';

describe('Hello World', () => {
    describe(' > e2e Example', () => {
        //beforeEach(() => {
        browser.get('/');
        browser.waitForAngular();
        //});
        it(' > The App Title', () => {
            expect(browser.getTitle()).toEqual('Cordova Angular2 Starter Kit');
        });
        it(' > Check content on screen', () => {
            var headElement = element.all(by.css('#h1Element')).first();
            expect(headElement.getInnerHtml()).toContain('My First Angular2 App');
        });
    });
});