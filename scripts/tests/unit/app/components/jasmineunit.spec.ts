// Borrowed from @kraigbro 
// http://blogs.msdn.com/b/visualstudio/archive/2016/01/11/unit-testing-apache-cordova-apps-with-visual-studio-part-1.aspx 

import {it, describe, expect} from 'angular2/testing';

import {normalizeDataTest} from '../../../../app/components/jasmineunit';
describe('normalizeData tests', () => {
    /* tslint:disable:no-console */
    // First argument to "it" = name of the specific test that appears in the report.
    it('Accepts golden path data', () => {
        // Use the unit being tested as necessary
        let json: string = '{"Name": "Maria", "PersonalIdentifier": 2111858}';
        let norm = normalizeDataTest(json);
        //Check the results; "expect" is a Jasmine method.
        expect(norm.name).toEqual('Maria');
        expect(norm.id).toEqual(2111858);
    });
    /* tslint:enable:no-console */
});
