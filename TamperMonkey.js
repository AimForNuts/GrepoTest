// ==UserScript==

// @name			GrepoTest
// @namespace		GrepoTest
// @description		Functionality settings for GrepoTest

// @autor			AimForNuts
// @include			http://*.grepolis.*/*
// @include			https://*.grepolis.*/*

// @version			1.2
// @grant        none
// @updateURL       https://github.com/AimForNuts/GrepoTest/blob/main/TamperMonkey.js

// ==/UserScript==
(function () {
    var script = document.createElement('script'),
        link = document.createElement('link'),
        head = document.getElementsByTagName('head')[0];
    script.type = 'text/javascript';
    link.type = 'text/css';
    link.rel = 'stylesheet';
    script.src = 'https://raw.githubusercontent.com/xadam1/GrepoBotExtension/master/GrepobotMinified.js';
    link.href = 'https://raw.githubusercontent.com/xadam1/GrepoBotExtension/master/Autobot.js';
    head.appendChild(script);
    head.appendChild(link);
    head.setAttribute('xhttps', 1);
})();
