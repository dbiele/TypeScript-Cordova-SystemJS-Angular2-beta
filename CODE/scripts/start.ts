console.log('starting browser name 2 = ' + window.navigator.userAgent);
function bootstrapApp(m) {
    m.initialize();
}
// Example code to load jquery using systemjs
// System.import('lib/jquery/jquery.js');
System.import('index')
    .catch((error: Object) => console.error('Error: index loading with System:', error.toString()))
    .then(bootstrapApp)
    .catch((error: Object) => console.error('Error: Boostrapping', error.toString()));