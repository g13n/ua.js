/*jslint browser: true, regexp: true, maxerr: 50, indent: 4 */
/**
 * https://github.com/g13n/ua.js
 *
 * A UserAgent detection library.
 *
 * This library relies on the navigator.userAgent property and hence does not
 * work for custom UserAgent settings.
 *
 * Apart from supporting detection of major browser vendors, the library also
 * supports detection of various devices.
 *
 * Copyright (c) 2012-2013, Gopalarathnam Venkatesan
 * All rights reserved.
 *
 * @module UA
 */

UA = (function (window, navigator) {
    "use strict";

    var ua = (window.navigator && navigator.userAgent) || "";

    function detect(pattern) {
        return function () {
            return (pattern).test(ua);
        };
    }

    return {
        /**
         * Return true if the browser is Chrome or compatible.
         *
         * @method isChrome
         */
        isChrome: detect(/webkit\W.*(chrome|chromium)\W/i),

        /**
         * Return true if the browser is Firefox.
         *
         * @method isFirefox
         */
        isFirefox: detect(/mozilla.*\Wfirefox\W/i),

        /**
         * Return true if the browser is using the Gecko engine.
         *
         * This is probably a better way to identify Firefox and other browsers
         * that use XulRunner.
         *
         * @method isGecko
         */
        isGecko: detect(/mozilla(?!.*webkit).*\Wgecko\W/i),

        /**
         * Return true if the browser is Internet Explorer.
         *
         * @method isIE
         */
        isIE: function () {
            return navigator.appName === "Microsoft Internet Explorer";
        } || detect(/MSIE/),

        /**
         * Return true if the browser is Internet Explorer 7.
         *
         * @method isIE7
         */
        isIE7 : detect(/MSIE 7/),

        /**
         * Return true if the browser is Internet Explorer 8.
         *
         * @method isIE8
         */
        isIE8 : detect(/MSIE 8/),

        /**
         * Return true if the browser is Internet Explorer 9.
         *
         * @method isIE9
         */
        isIE9 : detect(/MSIE 9/),

        /**
         * Return true if the browser is Internet Explorer 10.
         *
         * @method isIE10
         */
        isIE10 : detect(/MSIE 10/),

        /**
         * Return true if the browser is running on Kindle.
         *
         * @method isKindle
         */
        isKindle: detect(/\W(kindle|silk)\W/i),

        /**
         * Return true if the browser is running on a mobile device.
         *
         * @method isMobile
         */
        isMobile: detect(/(iphone|ipod|((?:android)?.*?mobile)|blackberry|nokia)/i),

        /**
         * Return true if we are running on Opera.
         *
         * @method isOpera
         */
        isOpera: detect(/opera.*\Wpresto\W/i),

        /**
         * Return true if the browser is Safari.
         *
         * @method isSafari
         */
        isSafari: detect(/webkit\W(?!.*chrome).*safari\W/i),

        /**
         * Return true if the browser is running on a tablet.
         *
         * One way to distinguish Android mobiles from tablets is that the
         * mobiles contain the string "mobile" in their UserAgent string.
         * If the word "Android" isn't followed by "mobile" then its a
         * tablet.
         *
         * @method isTablet
         */
        isTablet: detect(/(ipad|android(?!.*mobile))/i),

        /**
         * Return true if the browser is running on a TV!
         *
         * @method isTV
         */
        isTV: detect(/googletv|sonydtv/i),

        /**
         * Return true if the browser is running on a WebKit browser.
         *
         * @method isWebKit
         */
        isWebKit: detect(/webkit\W/i),

        /**
         * Return true if the browser is running on an Android browser.
         *
         * @method isAndroid
         */
        isAndroid: detect(/android/i),

        /**
         * Return true if the browser is running on any iOS device.
         *
         * @method isIOS
         */
        isIOS: detect(/(ipad|iphone|ipod)/i),

        /**
         * Return true if the browser is running on an iPad.
         *
         * @method isIPad
         */
        isIPad: detect(/ipad/i),

        /**
         * Return true if the browser is running on an iPhone.
         *
         * @method isIPhone
         */
        isIPhone: detect(/iphone/i),

        /**
         * Return true if the browser is running on an iPod touch.
         *
         * @method isIPod
         */
        isIPod: detect(/ipod/i),

        /**
         * Return the complete UserAgent string verbatim.
         *
         * @method whoami
         */
        whoami: function () {
            return ua;
        }
    };
}(window, navigator));
