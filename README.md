# TypeScript-Cordova-SystemJS-Angular2-beta
VS2015 project created using TypeScript, Cordova, SystemJS, Angular beta

Please follow the directions on [https://github.com/dbiele/TypeScript-Cordova-SystemJS_no-JSPM](https://github.com/dbiele/TypeScript-Cordova-SystemJS_no-JSPM) I will be updating the file shortly.

I used the angular example from [https://angular.io/](https://angular.io/)


## Note: I made the following changes to the original project: ##

- Add angular2 using NPM and not using TSD to manage d.ts files
- Add gulpfile with common tasks
- copy the angular bundles and platform folder from node_modues to www/scripts/lib/angular2 folder.  Maybe add a build step?
- Add the angular code to index.html
- Changed tsconfig.json to use filesGlob instead of exclude
- Use Cordova CLI 5.3.3.  Cordova CLI greater than 5.3.3 seems to cause problems with Emulators.

    ,
      "exclude": [
    "../node_modules",
    "../www"
      ]
    
Problem running into using Angular2 and Jquery.  d.ts files appear to be the problem.
https://github.com/typings/typings -- a TSD replacement.

