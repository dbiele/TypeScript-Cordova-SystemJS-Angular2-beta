var isMobile = navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i);
/**
 * Need to disable adding es6-shim.js for Windows 10 mobile devices.  Let merges folder handle android, ios and windows additions.
 * Error occurs in Windows Phone Universal when es6-shim.js is linked.
 * es6-shim is necessary for all browsers.
 */
if (isMobile == null) {
    var scriptElem = document.createElement('script');
    scriptElem.setAttribute('src', 'scripts/lib/es6-shim/es6-shim.js');
    if (document.body) {
        document.body.appendChild(scriptElem);
    }
    else {
        document.head.appendChild(scriptElem);
    }
}
//# sourceMappingURL=mobiledeviceoverride.js.map