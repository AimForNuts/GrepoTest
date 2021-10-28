// ==UserScript==

// @name         GrepoBot
// @author       aimfornuts
// @description  Grepolis automated bot, which helps you with some stuff!

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
    link.href = 'https://raw.githubusercontent.com/xadam1/GrepoBotExtension/master/Autobot.js';
    head.appendChild(script);
    head.appendChild(link);
    head.setAttribute('xhttps', 1);
})();