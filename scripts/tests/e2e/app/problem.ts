// I don't know why, but an import needs to be in this folder to prevent errors with protractor
// Adding a systemjs import in the spec.ts file seems to break because of the system.register
import {it, describe, expect, beforeEach} from 'angular2/testing';
