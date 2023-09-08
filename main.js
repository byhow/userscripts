// ==UserScript==
// @name         twitter-follow-switch.js
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Switch user profiles when follow people on twitter
// @author       byhow
// @match        https:/twitter.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=www.twitter.com
// @grant        none
// @license      MIT
// ==/UserScript==

const filterDropdownTitleElement = document.querySelector(
  "#btnFlagFilter_Options .title"
);