console.log('starting browser name 2 = ' + window.navigator.userAgent);
function bootstrapApp(m) {
    m.initialize();
}
System.import('lib/jquery/jquery.js');
System.import('index')
    .catch(function (error) { return console.error('Error: index loading with System:', error.toString()); })
    .then(bootstrapApp)
    .catch(function (error) { return console.error('Error: Boostrapping', error.toString()); });
//# sourceMappingURL=start.js.map