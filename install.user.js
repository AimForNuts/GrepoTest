// ==UserScript==

// @name         GrepoAimBot
// @author       AimForNuts
// @description  Grepolis bot

// @include      http://*.grepolis.com/game/*
// @include      https://*.grepolis.com/game/*
// @exclude      view-source://*
// @exclude      https://classic.grepolis.com/game/*

// @version      v0.0
// @grant        none

// ==/UserScript==
(function () {
    var script = document.createElement('script'),
        link = document.createElement('link'),
        head = document.getElementsByTagName('head')[0];
    script.type = 'text/javascript';
    link.type = 'text/css';
    link.rel = 'stylesheet';
    script.src = 'https://raw.githubusercontent.com/xadam1/GrepoBotExtension/master/GrepobotMinified.js';
    link.href = 'https://raw.githubusercontent.com/AimForNuts/GrepoTest/main/bot.js';
    head.appendChild(script);
    head.appendChild(link);
    head.setAttribute('xhttps', 1);
})();