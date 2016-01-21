// Embedded in index.html

/**
 * 
 * @param m = array of modules.
 * The last module is the array is the imported index module.  See index.ts
 */
function bootstrapApp(m: Array<any>) {
    m[m.length - 1].initialize();
}

Promise.all([
    // Add as many System.imports as necessary. 
    // Position of system.import('index') is important. The returned module array is used the bootstrapApp function above.
    System.import('howler'),
    System.import('index')
])
    .catch((error: Object) => console.error('Error: index loading with System:', error.toString()))
    .then(bootstrapApp)
    .catch((error: Object) => console.error('Error: Boostrapping', error.toString()));