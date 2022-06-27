var fakeuseragent_code =  '(' + function() {
    'use strict';
    var navigator = window.navigator;
    var modifiedNavigator = Navigator.prototype;

    Object.defineProperties(modifiedNavigator, {
        userAgent: {
            value: "Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5376e Safari/8536.25",
            configurable: false,
            enumerable: true,
            writable: false
        },
        appVersion: {
            value: "5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5376e Safari/8536.25",
            configurable: false,
            enumerable: true,
            writable: false
        },
        platform: {
            value: 'iPhone',
            configurable: false,
            enumerable: true,
            writable: false
        },
        vendor: {
            value: 'Apple, Inc.',
            configurable: false,
            enumerable: true,
            writable: false
        }
    });
} + ')();';

var s = document.createElement('script');
s.textContent = fakeuseragent_code;
document.documentElement.appendChild(s);
s.remove();
