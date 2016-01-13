import {it, describe, expect} from 'angular2/testing';
import {normalizeDataTest} from '../../../../app/components/jasmineunit';
describe("normalizeData tests", function () {
    // First argument to "it" is the name of the specific test
    it("accepts golden path data", function () {
        // Use the unit being tested as necessary
        var json = '{"Name": "Maria", "PersonalIdentifier": 2111858}';
        var norm = normalizeDataTest(json);

        // Check the results; "expect" is a Jasmine method.
        expect(norm.name).toEqual("Maria");
        expect(norm.id).toEqual(2111858);
    });
});
