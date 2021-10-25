// ==UserScript==
// @name			GrepoTest
// @namespace		GrepoTest
// @description		Functionality settings for GrepoTest
// @autor			AimForNuts
// @verison			1.0
// @include			http://*.grepolis.*/*
// @include			https://*.grepolis.*/*
// @updateURL       https://github.com/AimForNuts/GrepoTest/blob/main/TamperMonkey.js
// ==/UserScript==
(function () {
    var script = document.createElement('script'),
        link = document.createElement('link'),
        head = document.getElementsByTagName('head')[0];
    script.type = 'text/javascript';
    link.type = 'text/css';
    link.rel = 'stylesheet';
    script.src = 'https://cdn.jsdelivr.net/gh/AimForNuts/GrepoTest@main/automation.js';
    link.href = 'https://cdn.jsdelivr.net/gh/Autarch-s/GrepoBot@master/Autobot.css';
    head.appendChild(script);
    head.appendChild(link);
    head.setAttribute('xhttps', 1);
})();