//var isMobile = navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i);
/** 
 * es6-shim is necessary for all browsers.  This was a problem with previous versions on Angular2.
 */
//if (isMobile != null) {
    console.log('add es6shim');
    var scriptElem = document.createElement('script');
    scriptElem.setAttribute('src', 'scripts/lib/es6-shim/es6-shim.js');
    if (document.body) {
        document.body.appendChild(scriptElem);
    } else {
        document.head.appendChild(scriptElem);
    }
//}