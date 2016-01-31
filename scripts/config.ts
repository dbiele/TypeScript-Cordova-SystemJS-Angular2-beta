System.config({
    baseURL: './scripts',
    defaultJSExtensions: true,
    transpiler: 'none',
    map: {
        // The js files need to be located in the root /www/ folder.
        // For this project, the scripts are located in /www/scripts/lib
        soundJS: './scripts/lib/createjs/soundjs-0.6.2.combined.js'
        //webgl_heatmap: './scripts/webgl-heatmap.js',
        //d3: './node_modules/d3/d3.js'
    }
});