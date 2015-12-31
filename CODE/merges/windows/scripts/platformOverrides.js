(function () {
    // Append the safeHTML polyfill
    var scriptElem = document.createElement('script');
    var scriptElem2 = document.createElement('script');
    scriptElem.setAttribute('src', 'scripts/winstore-jscompat.js');
    scriptElem2.setAttribute('src', 'scripts/system-polyfills.js');
    if (document.body) {
        document.body.appendChild(scriptElem);
        document.body.appendChild(scriptElem2);
    } else {
        document.head.appendChild(scriptElem);
        document.head.appendChild(scriptElem2);
    }
}());
