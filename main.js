/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/assets/Inder/Inder-Regular.ttf */ "./src/assets/Inder/Inder-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"Inder\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-style: normal;\n}\n\n:root {\n  font-family: \"Inder\";\n  --primary-blue: #181823;\n  --primary-purple: #4a4182;\n  --primary-pink: #f2dede;\n  --primary-red: #964848;\n  --nautical-blue: #1a5091;\n}\n\n*,\n*::after,\n*::before {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background-color: var(--primary-purple);\n}\n\n/*HEADER*/\n.navbar {\n  display: flex;\n  justify-content: space-around;\n  gap: 100px;\n  align-items: center;\n  padding: 0px 100px;\n  background-color: var(--primary-blue);\n  height: 10vh;\n  -webkit-box-shadow: 0px 5px 17px -6px rgba(0, 0, 0, 0.54);\n  box-shadow: 0px 5px 17px -6px rgba(0, 0, 0, 0.54);\n}\n\n/* MAIN CONTENT */\n.content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0px 100px;\n  min-height: 85vh;\n}\n.new-game {\n  cursor: pointer;\n}\n.new-game:hover {\n  transform: scale(1.05);\n}\n.info-panel {\n  font-size: 24px;\n  color: var(--primary-pink);\n}\n.bottom-side-wrapper {\n  display: flex;\n  justify-content: center;\n  gap: 100px;\n}\n\n/* GAME CONTENT*/\n.player-board,\n.numbers-column,\n.letters-row,\n.computer-board {\n  display: flex;\n}\n.numbers-column {\n  flex-direction: column;\n  margin-top: 30px;\n}\n.letter {\n  height: 30px;\n  width: 50px;\n  font-size: 24px;\n  text-align: center;\n  color: var(--primary-pink);\n}\n.number {\n  height: 50px;\n  width: 30px;\n  font-size: 24px;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  color: var(--primary-pink);\n}\n.gameboard {\n  box-sizing: border-box;\n  display: grid;\n  grid-template-columns: repeat(10, 50px);\n  grid-template-rows: repeat(10, 50px);\n  background-color: var(--primary-pink);\n  border: solid 1px black;\n}\n\n.cell,\n.row {\n  box-sizing: border-box;\n  border: 1px solid rgba(24, 3, 3, 0.018);\n  width: 50px;\n  height: 50px;\n}\n\n.cell {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.cell:hover {\n  background-color: rgba(128, 128, 128, 0.212);\n}\n.player-panel {\n  box-sizing: border-box;\n  border: 1px solid var(--primary-blue);\n  background-color: var(--primary-pink);\n  padding: 15px 0px;\n}\n.player-ships,\n.player-control {\n  display: flex;\n  font-size: 24px;\n  padding: 0px 15px;\n}\n\n.player-control {\n  justify-content: space-between;\n  height: 40px;\n  margin-top: 15px;\n}\n.player-ships {\n  justify-content: space-between;\n  height: 30px;\n}\n.player-direction {\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  color: white;\n  border-radius: 2px;\n  background-color: var(--primary-red);\n  border: 1px solid var(--primary-blue);\n}\n.player-name {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.length-selector {\n  box-sizing: border-box;\n  border-radius: 2px;\n  border: 1px solid var(--primary-blue);\n  background-color: var(--nautical-blue);\n  color: white;\n  text-align: center;\n}\n.player-carrier {\n  width: 160px;\n}\n.player-battleship {\n  width: 120px;\n}\n.player-destroyer {\n  width: 90px;\n}\n.player-submarine {\n  width: 60px;\n}\n.player-patrol-boat {\n  width: 30px;\n}\n.unclickable {\n  pointer-events: none;\n}\n\n.ship-style {\n  box-sizing: border-box;\n  background-color: var(--nautical-blue);\n  border: 1px solid var(--primary-blue);\n  color: white;\n}\n.fa-circle-xmark {\n  color: white;\n}\n.invalid-placement:hover {\n  background-color: rgba(201, 23, 23, 0.767);\n}\n.can-start {\n  display: none;\n}\n.length-selector:hover,\n.player-direction:hover {\n  cursor: pointer;\n}\n\n/*FOOTER*/\nfooter {\n  background-color: var(--primary-blue);\n  -webkit-box-shadow: 0px -5px 10px -4px rgba(0, 0, 0, 0.2);\n  box-shadow: 0px -5px 10px -4px rgba(0, 0, 0, 0.2);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 5vh;\n  color: var(--primary-pink);\n}\n.footer-link {\n  color: white;\n}\n/* GLOBAL SETTINGS */\na,\na:visited,\na:focus {\n  text-decoration: none;\n  color: var(--primary-pink);\n}\n\ninput:focus,\ninput:active {\n  border-color: transparent;\n}\n\n@media (max-width: 600px) {\n  .hide-on-mobile {\n    display: none;\n  }\n  .display-on-mobile {\n    display: flex;\n  }\n  .navbar {\n    gap: 1rem;\n    padding: 0px 1rem;\n  }\n  .content {\n    flex-direction: row;\n    justify-content: flex-start;\n    margin:10px;\n    padding: 5px;\n  }\n  .bottom-side-wrapper {\n    flex-direction: column;\n    justify-content: flex-start;\n    gap: 10px;\n  }\n  .gameboard,\n  .player-board,\n  .computer-board {\n    grid-template-columns: repeat(10, 30px);\n    grid-template-rows: repeat(10, 30px);\n    max-width: 300px;\n  }\n  .number {\n    height: 30px;\n    width: 30px;\n    font-size: 18px;\n  }\n  .letter {\n    height: 30px;\n    width: 30px;\n    font-size: 18px;\n  }\n\n  .cell,\n  .row {\n    width: 30px;\n    height: 30px;\n  }\n  .player-panel {\n    padding: 5px;\n  }\n  .player-ships {\n    flex-wrap: wrap;\n    justify-content: center;\n    padding: 5px;\n  }\n  .length-selector {\n    height: 32px;\n  }\n  .player-control {\n    font-size: 18px;\n    padding: 5px;\n    margin-top: 4rem;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,oBAAoB;EACpB,4CAA6C;EAC7C,kBAAkB;AACpB;;AAEA;EACE,oBAAoB;EACpB,uBAAuB;EACvB,yBAAyB;EACzB,uBAAuB;EACvB,sBAAsB;EACtB,wBAAwB;AAC1B;;AAEA;;;EAGE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,uCAAuC;AACzC;;AAEA,SAAS;AACT;EACE,aAAa;EACb,6BAA6B;EAC7B,UAAU;EACV,mBAAmB;EACnB,kBAAkB;EAClB,qCAAqC;EACrC,YAAY;EACZ,yDAAyD;EACzD,iDAAiD;AACnD;;AAEA,iBAAiB;AACjB;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,eAAe;AACjB;AACA;EACE,sBAAsB;AACxB;AACA;EACE,eAAe;EACf,0BAA0B;AAC5B;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,UAAU;AACZ;;AAEA,gBAAgB;AAChB;;;;EAIE,aAAa;AACf;AACA;EACE,sBAAsB;EACtB,gBAAgB;AAClB;AACA;EACE,YAAY;EACZ,WAAW;EACX,eAAe;EACf,kBAAkB;EAClB,0BAA0B;AAC5B;AACA;EACE,YAAY;EACZ,WAAW;EACX,eAAe;EACf,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,0BAA0B;AAC5B;AACA;EACE,sBAAsB;EACtB,aAAa;EACb,uCAAuC;EACvC,oCAAoC;EACpC,qCAAqC;EACrC,uBAAuB;AACzB;;AAEA;;EAEE,sBAAsB;EACtB,uCAAuC;EACvC,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,4CAA4C;AAC9C;AACA;EACE,sBAAsB;EACtB,qCAAqC;EACrC,qCAAqC;EACrC,iBAAiB;AACnB;AACA;;EAEE,aAAa;EACb,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,8BAA8B;EAC9B,YAAY;EACZ,gBAAgB;AAClB;AACA;EACE,8BAA8B;EAC9B,YAAY;AACd;AACA;EACE,sBAAsB;EACtB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,oCAAoC;EACpC,qCAAqC;AACvC;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,qCAAqC;EACrC,sCAAsC;EACtC,YAAY;EACZ,kBAAkB;AACpB;AACA;EACE,YAAY;AACd;AACA;EACE,YAAY;AACd;AACA;EACE,WAAW;AACb;AACA;EACE,WAAW;AACb;AACA;EACE,WAAW;AACb;AACA;EACE,oBAAoB;AACtB;;AAEA;EACE,sBAAsB;EACtB,sCAAsC;EACtC,qCAAqC;EACrC,YAAY;AACd;AACA;EACE,YAAY;AACd;AACA;EACE,0CAA0C;AAC5C;AACA;EACE,aAAa;AACf;AACA;;EAEE,eAAe;AACjB;;AAEA,SAAS;AACT;EACE,qCAAqC;EACrC,yDAAyD;EACzD,iDAAiD;EACjD,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,0BAA0B;AAC5B;AACA;EACE,YAAY;AACd;AACA,oBAAoB;AACpB;;;EAGE,qBAAqB;EACrB,0BAA0B;AAC5B;;AAEA;;EAEE,yBAAyB;AAC3B;;AAEA;EACE;IACE,aAAa;EACf;EACA;IACE,aAAa;EACf;EACA;IACE,SAAS;IACT,iBAAiB;EACnB;EACA;IACE,mBAAmB;IACnB,2BAA2B;IAC3B,WAAW;IACX,YAAY;EACd;EACA;IACE,sBAAsB;IACtB,2BAA2B;IAC3B,SAAS;EACX;EACA;;;IAGE,uCAAuC;IACvC,oCAAoC;IACpC,gBAAgB;EAClB;EACA;IACE,YAAY;IACZ,WAAW;IACX,eAAe;EACjB;EACA;IACE,YAAY;IACZ,WAAW;IACX,eAAe;EACjB;;EAEA;;IAEE,WAAW;IACX,YAAY;EACd;EACA;IACE,YAAY;EACd;EACA;IACE,eAAe;IACf,uBAAuB;IACvB,YAAY;EACd;EACA;IACE,YAAY;EACd;EACA;IACE,eAAe;IACf,YAAY;IACZ,gBAAgB;EAClB;AACF","sourcesContent":["@font-face {\n  font-family: \"Inder\";\n  src: url(/src/assets/Inder/Inder-Regular.ttf);\n  font-style: normal;\n}\n\n:root {\n  font-family: \"Inder\";\n  --primary-blue: #181823;\n  --primary-purple: #4a4182;\n  --primary-pink: #f2dede;\n  --primary-red: #964848;\n  --nautical-blue: #1a5091;\n}\n\n*,\n*::after,\n*::before {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background-color: var(--primary-purple);\n}\n\n/*HEADER*/\n.navbar {\n  display: flex;\n  justify-content: space-around;\n  gap: 100px;\n  align-items: center;\n  padding: 0px 100px;\n  background-color: var(--primary-blue);\n  height: 10vh;\n  -webkit-box-shadow: 0px 5px 17px -6px rgba(0, 0, 0, 0.54);\n  box-shadow: 0px 5px 17px -6px rgba(0, 0, 0, 0.54);\n}\n\n/* MAIN CONTENT */\n.content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0px 100px;\n  min-height: 85vh;\n}\n.new-game {\n  cursor: pointer;\n}\n.new-game:hover {\n  transform: scale(1.05);\n}\n.info-panel {\n  font-size: 24px;\n  color: var(--primary-pink);\n}\n.bottom-side-wrapper {\n  display: flex;\n  justify-content: center;\n  gap: 100px;\n}\n\n/* GAME CONTENT*/\n.player-board,\n.numbers-column,\n.letters-row,\n.computer-board {\n  display: flex;\n}\n.numbers-column {\n  flex-direction: column;\n  margin-top: 30px;\n}\n.letter {\n  height: 30px;\n  width: 50px;\n  font-size: 24px;\n  text-align: center;\n  color: var(--primary-pink);\n}\n.number {\n  height: 50px;\n  width: 30px;\n  font-size: 24px;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  color: var(--primary-pink);\n}\n.gameboard {\n  box-sizing: border-box;\n  display: grid;\n  grid-template-columns: repeat(10, 50px);\n  grid-template-rows: repeat(10, 50px);\n  background-color: var(--primary-pink);\n  border: solid 1px black;\n}\n\n.cell,\n.row {\n  box-sizing: border-box;\n  border: 1px solid rgba(24, 3, 3, 0.018);\n  width: 50px;\n  height: 50px;\n}\n\n.cell {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.cell:hover {\n  background-color: rgba(128, 128, 128, 0.212);\n}\n.player-panel {\n  box-sizing: border-box;\n  border: 1px solid var(--primary-blue);\n  background-color: var(--primary-pink);\n  padding: 15px 0px;\n}\n.player-ships,\n.player-control {\n  display: flex;\n  font-size: 24px;\n  padding: 0px 15px;\n}\n\n.player-control {\n  justify-content: space-between;\n  height: 40px;\n  margin-top: 15px;\n}\n.player-ships {\n  justify-content: space-between;\n  height: 30px;\n}\n.player-direction {\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  color: white;\n  border-radius: 2px;\n  background-color: var(--primary-red);\n  border: 1px solid var(--primary-blue);\n}\n.player-name {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.length-selector {\n  box-sizing: border-box;\n  border-radius: 2px;\n  border: 1px solid var(--primary-blue);\n  background-color: var(--nautical-blue);\n  color: white;\n  text-align: center;\n}\n.player-carrier {\n  width: 160px;\n}\n.player-battleship {\n  width: 120px;\n}\n.player-destroyer {\n  width: 90px;\n}\n.player-submarine {\n  width: 60px;\n}\n.player-patrol-boat {\n  width: 30px;\n}\n.unclickable {\n  pointer-events: none;\n}\n\n.ship-style {\n  box-sizing: border-box;\n  background-color: var(--nautical-blue);\n  border: 1px solid var(--primary-blue);\n  color: white;\n}\n.fa-circle-xmark {\n  color: white;\n}\n.invalid-placement:hover {\n  background-color: rgba(201, 23, 23, 0.767);\n}\n.can-start {\n  display: none;\n}\n.length-selector:hover,\n.player-direction:hover {\n  cursor: pointer;\n}\n\n/*FOOTER*/\nfooter {\n  background-color: var(--primary-blue);\n  -webkit-box-shadow: 0px -5px 10px -4px rgba(0, 0, 0, 0.2);\n  box-shadow: 0px -5px 10px -4px rgba(0, 0, 0, 0.2);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 5vh;\n  color: var(--primary-pink);\n}\n.footer-link {\n  color: white;\n}\n/* GLOBAL SETTINGS */\na,\na:visited,\na:focus {\n  text-decoration: none;\n  color: var(--primary-pink);\n}\n\ninput:focus,\ninput:active {\n  border-color: transparent;\n}\n\n@media (max-width: 600px) {\n  .hide-on-mobile {\n    display: none;\n  }\n  .display-on-mobile {\n    display: flex;\n  }\n  .navbar {\n    gap: 1rem;\n    padding: 0px 1rem;\n  }\n  .content {\n    flex-direction: row;\n    justify-content: flex-start;\n    margin:10px;\n    padding: 5px;\n  }\n  .bottom-side-wrapper {\n    flex-direction: column;\n    justify-content: flex-start;\n    gap: 10px;\n  }\n  .gameboard,\n  .player-board,\n  .computer-board {\n    grid-template-columns: repeat(10, 30px);\n    grid-template-rows: repeat(10, 30px);\n    max-width: 300px;\n  }\n  .number {\n    height: 30px;\n    width: 30px;\n    font-size: 18px;\n  }\n  .letter {\n    height: 30px;\n    width: 30px;\n    font-size: 18px;\n  }\n\n  .cell,\n  .row {\n    width: 30px;\n    height: 30px;\n  }\n  .player-panel {\n    padding: 5px;\n  }\n  .player-ships {\n    flex-wrap: wrap;\n    justify-content: center;\n    padding: 5px;\n  }\n  .length-selector {\n    height: 32px;\n  }\n  .player-control {\n    font-size: 18px;\n    padding: 5px;\n    margin-top: 4rem;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/Inder/Inder-Regular.ttf":
/*!********************************************!*\
  !*** ./src/assets/Inder/Inder-Regular.ttf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8a2461b6d08b6710e6f8.ttf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './factories/AI'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './factories/player'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



const computerBoard = document.querySelector(".computer-array");
const playerBoard = document.querySelector(".player-array");
const placeShipsInfo = document.querySelector(".place-ships-info");
const canStartGame = document.querySelector(".can-start");
const winnerLabel = document.querySelector(".winner");
const playerPanel = document.querySelector(".player-board");
const computerPanel = document.querySelector(".computer-board");

let player = new Object(function webpackMissingModule() { var e = new Error("Cannot find module './factories/player'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("player");
let computer = new Object(function webpackMissingModule() { var e = new Error("Cannot find module './factories/AI'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("computer");
let shipLength = null;
let shipDirection = "V";

const game = () => {
  player = new Object(function webpackMissingModule() { var e = new Error("Cannot find module './factories/player'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("player");
  computer = new Object(function webpackMissingModule() { var e = new Error("Cannot find module './factories/AI'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("computer");
  gameStart();
};

const gameStart = () => {
  clearBoard(player);
  renderBoard(player);
  clearBoard(computer);
  renderBoard(computer);
};

const renderBoard = (boardName) => {
  let targetArray = boardName.playerBoard.board;
  const targetAppend = document.querySelector(`.${boardName.name}-array`);
  targetArray.forEach((row, rowIndex) => {
    const myRow = document.createElement("div");
    myRow.classList.add("row");
    row.forEach((cell, columnIndex) => {
      const myCell = document.createElement("div");
      myCell.classList.add("cell");
      myCell.setAttribute("data-x", rowIndex);
      myCell.setAttribute("data-y", columnIndex);
      let thisCell = targetArray[rowIndex][columnIndex];
      if (thisCell === "x") {
        myCell.classList.add("unclickable");
        myCell.classList.add("missed-hit");
        myCell.classList.add("fa-regular");
        myCell.classList.add("fa-x");
      } else if (thisCell === "s-x") {
        myCell.classList.add("unclickable");
        myCell.classList.add("correct-hit");
        myCell.classList.add("fa-regular");
        myCell.classList.add("fa-x");
        myCell.classList.add("ship-style");
      }
      myRow.appendChild(myCell);
      if (boardName.name === "computer") {
        myCell.addEventListener("click", (e) => {
          if (thisCell !== "x" || thisCell !== "s-x") {
            attackEvent(e);
            updateBoard(boardName);
          }
        });
      }
      if (boardName.name === "player") {
        if (thisCell === "H") {
          myCell.classList.add("ship-style");
          myCell.classList.add("invalid-placement");
        } else if (thisCell === "V") {
          myCell.classList.add("ship-style");
          myCell.classList.add("invalid-placement");
        }
        myCell.addEventListener("click", (e) => {
          e.preventDefault();
          placeShipEvent(e);
          updateBoard(boardName);
        });
      }
    });
    targetAppend.appendChild(myRow);
  });
};

// CHECKING IF ALL SHIPS WERE PLACED SO WE CAN START ATTACKING
const checkPlayerShips = () => {
  let targetCheck = player.playerBoard.shipsArray;
  let response = targetCheck.every((ship) => ship.coordPairs.length > 0);

  if (response) {
    //when you place all ships, hide my panel
    playerPanel.classList.add("hide-on-mobile");
    // display the comp panel for first move
    computerPanel.classList.remove("hide-on-mobile");
  }
  return response;
};

// ATTACKING AN ENEMY, BEING ATTACKED BY COMPUTER, AND CHECKING FOR WIN CONDITION
const attackEvent = (e) => {
  let x = parseInt(e.target.getAttribute("data-x"));
  let y = parseInt(e.target.getAttribute("data-y"));
  let canAttack = checkPlayerShips();
  if (canAttack) {
    // PLAYER TURN
    // when player's turn is on, i already see the comp panel
    //i attack
    player.playerShot(computer, x, y);
    setTimeout(() => {
      // after attack, i hide the comp board and display mine
      computerPanel.classList.remove("display-on-mobile");
      computerPanel.classList.add("hide-on-mobile");
      playerPanel.classList.remove("hide-on-mobile");
      playerPanel.classList.add("display-on-mobile");
      console.log("hiding the computer board after my attack and showing mine");
    }, 300);
    if (computer.playerBoard.allSunk) {
      endGame(player);
    }
    // AI TURN
    computer.computerShot(player);
    setTimeout(() => {
      playerPanel.classList.remove("display-on-mobile");
      playerPanel.classList.add("hide-on-mobile");
      computerPanel.classList.remove("hide-on-mobile");
      computerPanel.classList.add("display-on-mobile");
    }, 1000);
    updateBoard(player);
    if (player.playerBoard.allSunk) {
      endGame(computer);
    }
  }
};

// END GAME (MAYBE ADD "PLAY AGAIN?")
const endGame = (winnerName) => {
  computerBoard.classList.add("unclickable");
  canStartGame.style.display = "none";
  winnerLabel.style.display = "block";
  if (winnerName.name === "player") {
    winnerLabel.innerText = `You Won!`;
  } else winnerLabel.innerText = `You Lost! Try again? ->`;
};

// PLACING PLAYER SHIP ON CLICK
const placeShipEvent = (e) => {
  let x = parseInt(e.target.getAttribute("data-x"));
  let y = parseInt(e.target.getAttribute("data-y"));
  player.placePlayerShip(shipLength, x, y, shipDirection);
  let allShipsPlaced = checkPlayerShips();
  if (allShipsPlaced) {
    placeShipsInfo.style.display = "none";
    canStartGame.style.display = "block";
    computerBoard.classList.remove("unclickable");
    playerBoard.classList.add("unclickable");
    directionSelector.classList.add("unclickable");
  }
  shipLength = null;
};

const clearBoard = (board) => {
  const targetDiv = board.name;
  const targetClear = document.querySelector(`.${targetDiv}-array`);
  targetClear.innerHTML = "";
};

const updateBoard = (board) => {
  clearBoard(board);
  renderBoard(board);
};

// NEW GAME BUTTON
let newGame = document.querySelector(".new-game");
newGame.addEventListener("click", () => {
  placeShipsInfo.style.display = "block";
  canStartGame.style.display = "none";
  winnerLabel.style.display = "none";
  playerBoard.classList.remove("unclickable");
  game();
});

// DOM TOGGLE SHIPS SELECTORS
const lengthSelectors = document.querySelectorAll(".length-selector");
lengthSelectors.forEach((selector) => {
  selector.addEventListener("click", (e) => {
    shipLength = parseInt(e.target.id);
  });
});

// DOM TOGGLE DIRECTION
const directionSelector = document.querySelector(".player-direction");
directionSelector.addEventListener("click", () => {
  if (directionSelector.innerText === "H") {
    shipDirection = "V";
    directionSelector.innerText = "V";
  } else if (directionSelector.innerText === "V") {
    shipDirection = "H";
    directionSelector.innerText = "H";
  }
});

game();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFtQix1QkFBdUIsS0FBSyxHQUFHLFNBQVMsZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE9BQU8sWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxVQUFVLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sWUFBWSxTQUFTLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxZ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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpREFBaUQsVUFBVTtBQUMzRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9JbmRlci9JbmRlci1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJbmRlclxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbjpyb290IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSW5kZXJcXFwiO1xcbiAgLS1wcmltYXJ5LWJsdWU6ICMxODE4MjM7XFxuICAtLXByaW1hcnktcHVycGxlOiAjNGE0MTgyO1xcbiAgLS1wcmltYXJ5LXBpbms6ICNmMmRlZGU7XFxuICAtLXByaW1hcnktcmVkOiAjOTY0ODQ4O1xcbiAgLS1uYXV0aWNhbC1ibHVlOiAjMWE1MDkxO1xcbn1cXG5cXG4qLFxcbio6OmFmdGVyLFxcbio6OmJlZm9yZSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LXB1cnBsZSk7XFxufVxcblxcbi8qSEVBREVSKi9cXG4ubmF2YmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGdhcDogMTAwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMHB4IDEwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1ibHVlKTtcXG4gIGhlaWdodDogMTB2aDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDVweCAxN3B4IC02cHggcmdiYSgwLCAwLCAwLCAwLjU0KTtcXG4gIGJveC1zaGFkb3c6IDBweCA1cHggMTdweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC41NCk7XFxufVxcblxcbi8qIE1BSU4gQ09OVEVOVCAqL1xcbi5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwcHggMTAwcHg7XFxuICBtaW4taGVpZ2h0OiA4NXZoO1xcbn1cXG4ubmV3LWdhbWUge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubmV3LWdhbWU6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuLmluZm8tcGFuZWwge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktcGluayk7XFxufVxcbi5ib3R0b20tc2lkZS13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMTAwcHg7XFxufVxcblxcbi8qIEdBTUUgQ09OVEVOVCovXFxuLnBsYXllci1ib2FyZCxcXG4ubnVtYmVycy1jb2x1bW4sXFxuLmxldHRlcnMtcm93LFxcbi5jb21wdXRlci1ib2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4ubnVtYmVycy1jb2x1bW4ge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxufVxcbi5sZXR0ZXIge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDUwcHg7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1waW5rKTtcXG59XFxuLm51bWJlciB7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogMzBweDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktcGluayk7XFxufVxcbi5nYW1lYm9hcmQge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgNTBweCk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgNTBweCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LXBpbmspO1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxufVxcblxcbi5jZWxsLFxcbi5yb3cge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjQsIDMsIDMsIDAuMDE4KTtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4uY2VsbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uY2VsbDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMjEyKTtcXG59XFxuLnBsYXllci1wYW5lbCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1ibHVlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktcGluayk7XFxuICBwYWRkaW5nOiAxNXB4IDBweDtcXG59XFxuLnBsYXllci1zaGlwcyxcXG4ucGxheWVyLWNvbnRyb2wge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIHBhZGRpbmc6IDBweCAxNXB4O1xcbn1cXG5cXG4ucGxheWVyLWNvbnRyb2wge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG59XFxuLnBsYXllci1zaGlwcyB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBoZWlnaHQ6IDMwcHg7XFxufVxcbi5wbGF5ZXItZGlyZWN0aW9uIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDQwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LXJlZCk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWJsdWUpO1xcbn1cXG4ucGxheWVyLW5hbWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmxlbmd0aC1zZWxlY3RvciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1ibHVlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdXRpY2FsLWJsdWUpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ucGxheWVyLWNhcnJpZXIge1xcbiAgd2lkdGg6IDE2MHB4O1xcbn1cXG4ucGxheWVyLWJhdHRsZXNoaXAge1xcbiAgd2lkdGg6IDEyMHB4O1xcbn1cXG4ucGxheWVyLWRlc3Ryb3llciB7XFxuICB3aWR0aDogOTBweDtcXG59XFxuLnBsYXllci1zdWJtYXJpbmUge1xcbiAgd2lkdGg6IDYwcHg7XFxufVxcbi5wbGF5ZXItcGF0cm9sLWJvYXQge1xcbiAgd2lkdGg6IDMwcHg7XFxufVxcbi51bmNsaWNrYWJsZSB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLnNoaXAtc3R5bGUge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdXRpY2FsLWJsdWUpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1ibHVlKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmZhLWNpcmNsZS14bWFyayB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5pbnZhbGlkLXBsYWNlbWVudDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwMSwgMjMsIDIzLCAwLjc2Nyk7XFxufVxcbi5jYW4tc3RhcnQge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmxlbmd0aC1zZWxlY3Rvcjpob3ZlcixcXG4ucGxheWVyLWRpcmVjdGlvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qRk9PVEVSKi9cXG5mb290ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1ibHVlKTtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IC01cHggMTBweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIGJveC1zaGFkb3c6IDBweCAtNXB4IDEwcHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA1dmg7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1waW5rKTtcXG59XFxuLmZvb3Rlci1saW5rIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLyogR0xPQkFMIFNFVFRJTkdTICovXFxuYSxcXG5hOnZpc2l0ZWQsXFxuYTpmb2N1cyB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1waW5rKTtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMsXFxuaW5wdXQ6YWN0aXZlIHtcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLmhpZGUtb24tbW9iaWxlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIC5kaXNwbGF5LW9uLW1vYmlsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICB9XFxuICAubmF2YmFyIHtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAwcHggMXJlbTtcXG4gIH1cXG4gIC5jb250ZW50IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBtYXJnaW46MTBweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgfVxcbiAgLmJvdHRvbS1zaWRlLXdyYXBwZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogMTBweDtcXG4gIH1cXG4gIC5nYW1lYm9hcmQsXFxuICAucGxheWVyLWJvYXJkLFxcbiAgLmNvbXB1dGVyLWJvYXJkIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDMwcHgpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMzBweCk7XFxuICAgIG1heC13aWR0aDogMzAwcHg7XFxuICB9XFxuICAubnVtYmVyIHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgfVxcbiAgLmxldHRlciB7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gIH1cXG5cXG4gIC5jZWxsLFxcbiAgLnJvdyB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICB9XFxuICAucGxheWVyLXBhbmVsIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgfVxcbiAgLnBsYXllci1zaGlwcyB7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gIH1cXG4gIC5sZW5ndGgtc2VsZWN0b3Ige1xcbiAgICBoZWlnaHQ6IDMycHg7XFxuICB9XFxuICAucGxheWVyLWNvbnRyb2wge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgbWFyZ2luLXRvcDogNHJlbTtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG9CQUFvQjtFQUNwQiw0Q0FBNkM7RUFDN0Msa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0Qix3QkFBd0I7QUFDMUI7O0FBRUE7OztFQUdFLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsdUNBQXVDO0FBQ3pDOztBQUVBLFNBQVM7QUFDVDtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIscUNBQXFDO0VBQ3JDLFlBQVk7RUFDWix5REFBeUQ7RUFDekQsaURBQWlEO0FBQ25EOztBQUVBLGlCQUFpQjtBQUNqQjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsZUFBZTtFQUNmLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixVQUFVO0FBQ1o7O0FBRUEsZ0JBQWdCO0FBQ2hCOzs7O0VBSUUsYUFBYTtBQUNmO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsdUNBQXVDO0VBQ3ZDLG9DQUFvQztFQUNwQyxxQ0FBcUM7RUFDckMsdUJBQXVCO0FBQ3pCOztBQUVBOztFQUVFLHNCQUFzQjtFQUN0Qix1Q0FBdUM7RUFDdkMsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSw0Q0FBNEM7QUFDOUM7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixxQ0FBcUM7RUFDckMscUNBQXFDO0VBQ3JDLGlCQUFpQjtBQUNuQjtBQUNBOztFQUVFLGFBQWE7RUFDYixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLDhCQUE4QjtFQUM5QixZQUFZO0FBQ2Q7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMscUNBQXFDO0FBQ3ZDO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixxQ0FBcUM7RUFDckMsc0NBQXNDO0VBQ3RDLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsc0NBQXNDO0VBQ3RDLHFDQUFxQztFQUNyQyxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsMENBQTBDO0FBQzVDO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTs7RUFFRSxlQUFlO0FBQ2pCOztBQUVBLFNBQVM7QUFDVDtFQUNFLHFDQUFxQztFQUNyQyx5REFBeUQ7RUFDekQsaURBQWlEO0VBQ2pELGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBLG9CQUFvQjtBQUNwQjs7O0VBR0UscUJBQXFCO0VBQ3JCLDBCQUEwQjtBQUM1Qjs7QUFFQTs7RUFFRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxTQUFTO0lBQ1QsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7RUFDQTtJQUNFLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsU0FBUztFQUNYO0VBQ0E7OztJQUdFLHVDQUF1QztJQUN2QyxvQ0FBb0M7SUFDcEMsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7RUFDakI7RUFDQTtJQUNFLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtFQUNqQjs7RUFFQTs7SUFFRSxXQUFXO0lBQ1gsWUFBWTtFQUNkO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsWUFBWTtFQUNkO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGVBQWU7SUFDZixZQUFZO0lBQ1osZ0JBQWdCO0VBQ2xCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkluZGVyXFxcIjtcXG4gIHNyYzogdXJsKC9zcmMvYXNzZXRzL0luZGVyL0luZGVyLVJlZ3VsYXIudHRmKTtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJbmRlclxcXCI7XFxuICAtLXByaW1hcnktYmx1ZTogIzE4MTgyMztcXG4gIC0tcHJpbWFyeS1wdXJwbGU6ICM0YTQxODI7XFxuICAtLXByaW1hcnktcGluazogI2YyZGVkZTtcXG4gIC0tcHJpbWFyeS1yZWQ6ICM5NjQ4NDg7XFxuICAtLW5hdXRpY2FsLWJsdWU6ICMxYTUwOTE7XFxufVxcblxcbiosXFxuKjo6YWZ0ZXIsXFxuKjo6YmVmb3JlIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktcHVycGxlKTtcXG59XFxuXFxuLypIRUFERVIqL1xcbi5uYXZiYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgZ2FwOiAxMDBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwcHggMTAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWJsdWUpO1xcbiAgaGVpZ2h0OiAxMHZoO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDE3cHggLTZweCByZ2JhKDAsIDAsIDAsIDAuNTQpO1xcbiAgYm94LXNoYWRvdzogMHB4IDVweCAxN3B4IC02cHggcmdiYSgwLCAwLCAwLCAwLjU0KTtcXG59XFxuXFxuLyogTUFJTiBDT05URU5UICovXFxuLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDBweCAxMDBweDtcXG4gIG1pbi1oZWlnaHQ6IDg1dmg7XFxufVxcbi5uZXctZ2FtZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5uZXctZ2FtZTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG4uaW5mby1wYW5lbCB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1waW5rKTtcXG59XFxuLmJvdHRvbS1zaWRlLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMDBweDtcXG59XFxuXFxuLyogR0FNRSBDT05URU5UKi9cXG4ucGxheWVyLWJvYXJkLFxcbi5udW1iZXJzLWNvbHVtbixcXG4ubGV0dGVycy1yb3csXFxuLmNvbXB1dGVyLWJvYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5udW1iZXJzLWNvbHVtbiB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG59XFxuLmxldHRlciB7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogNTBweDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXBpbmspO1xcbn1cXG4ubnVtYmVyIHtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1waW5rKTtcXG59XFxuLmdhbWVib2FyZCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCA1MHB4KTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCA1MHB4KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktcGluayk7XFxuICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG59XFxuXFxuLmNlbGwsXFxuLnJvdyB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNCwgMywgMywgMC4wMTgpO1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcbi5jZWxsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5jZWxsOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4yMTIpO1xcbn1cXG4ucGxheWVyLXBhbmVsIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWJsdWUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1waW5rKTtcXG4gIHBhZGRpbmc6IDE1cHggMHB4O1xcbn1cXG4ucGxheWVyLXNoaXBzLFxcbi5wbGF5ZXItY29udHJvbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgcGFkZGluZzogMHB4IDE1cHg7XFxufVxcblxcbi5wbGF5ZXItY29udHJvbCB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbn1cXG4ucGxheWVyLXNoaXBzIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuLnBsYXllci1kaXJlY3Rpb24ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogNDBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktcmVkKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktYmx1ZSk7XFxufVxcbi5wbGF5ZXItbmFtZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4ubGVuZ3RoLXNlbGVjdG9yIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWJsdWUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF1dGljYWwtYmx1ZSk7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5wbGF5ZXItY2FycmllciB7XFxuICB3aWR0aDogMTYwcHg7XFxufVxcbi5wbGF5ZXItYmF0dGxlc2hpcCB7XFxuICB3aWR0aDogMTIwcHg7XFxufVxcbi5wbGF5ZXItZGVzdHJveWVyIHtcXG4gIHdpZHRoOiA5MHB4O1xcbn1cXG4ucGxheWVyLXN1Ym1hcmluZSB7XFxuICB3aWR0aDogNjBweDtcXG59XFxuLnBsYXllci1wYXRyb2wtYm9hdCB7XFxuICB3aWR0aDogMzBweDtcXG59XFxuLnVuY2xpY2thYmxlIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uc2hpcC1zdHlsZSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF1dGljYWwtYmx1ZSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWJsdWUpO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4uZmEtY2lyY2xlLXhtYXJrIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmludmFsaWQtcGxhY2VtZW50OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAxLCAyMywgMjMsIDAuNzY3KTtcXG59XFxuLmNhbi1zdGFydCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ubGVuZ3RoLXNlbGVjdG9yOmhvdmVyLFxcbi5wbGF5ZXItZGlyZWN0aW9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLypGT09URVIqL1xcbmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWJsdWUpO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggLTVweCAxMHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgYm94LXNoYWRvdzogMHB4IC01cHggMTBweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDV2aDtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXBpbmspO1xcbn1cXG4uZm9vdGVyLWxpbmsge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4vKiBHTE9CQUwgU0VUVElOR1MgKi9cXG5hLFxcbmE6dmlzaXRlZCxcXG5hOmZvY3VzIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXBpbmspO1xcbn1cXG5cXG5pbnB1dDpmb2N1cyxcXG5pbnB1dDphY3RpdmUge1xcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAuaGlkZS1vbi1tb2JpbGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgLmRpc3BsYXktb24tbW9iaWxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIH1cXG4gIC5uYXZiYXIge1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHBhZGRpbmc6IDBweCAxcmVtO1xcbiAgfVxcbiAgLmNvbnRlbnQge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIG1hcmdpbjoxMHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICB9XFxuICAuYm90dG9tLXNpZGUtd3JhcHBlciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgfVxcbiAgLmdhbWVib2FyZCxcXG4gIC5wbGF5ZXItYm9hcmQsXFxuICAuY29tcHV0ZXItYm9hcmQge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMzBweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAzMHB4KTtcXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcXG4gIH1cXG4gIC5udW1iZXIge1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICB9XFxuICAubGV0dGVyIHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgfVxcblxcbiAgLmNlbGwsXFxuICAucm93IHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gIH1cXG4gIC5wbGF5ZXItcGFuZWwge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICB9XFxuICAucGxheWVyLXNoaXBzIHtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgfVxcbiAgLmxlbmd0aC1zZWxlY3RvciB7XFxuICAgIGhlaWdodDogMzJweDtcXG4gIH1cXG4gIC5wbGF5ZXItY29udHJvbCB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBtYXJnaW4tdG9wOiA0cmVtO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBBSSBmcm9tIFwiLi9mYWN0b3JpZXMvQUlcIjtcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vZmFjdG9yaWVzL3BsYXllclwiO1xuY29uc3QgY29tcHV0ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29tcHV0ZXItYXJyYXlcIik7XG5jb25zdCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLWFycmF5XCIpO1xuY29uc3QgcGxhY2VTaGlwc0luZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYWNlLXNoaXBzLWluZm9cIik7XG5jb25zdCBjYW5TdGFydEdhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhbi1zdGFydFwiKTtcbmNvbnN0IHdpbm5lckxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aW5uZXJcIik7XG5jb25zdCBwbGF5ZXJQYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLWJvYXJkXCIpO1xuY29uc3QgY29tcHV0ZXJQYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29tcHV0ZXItYm9hcmRcIik7XG5cbmxldCBwbGF5ZXIgPSBuZXcgUGxheWVyKFwicGxheWVyXCIpO1xubGV0IGNvbXB1dGVyID0gbmV3IEFJKFwiY29tcHV0ZXJcIik7XG5sZXQgc2hpcExlbmd0aCA9IG51bGw7XG5sZXQgc2hpcERpcmVjdGlvbiA9IFwiVlwiO1xuXG5jb25zdCBnYW1lID0gKCkgPT4ge1xuICBwbGF5ZXIgPSBuZXcgUGxheWVyKFwicGxheWVyXCIpO1xuICBjb21wdXRlciA9IG5ldyBBSShcImNvbXB1dGVyXCIpO1xuICBnYW1lU3RhcnQoKTtcbn07XG5cbmNvbnN0IGdhbWVTdGFydCA9ICgpID0+IHtcbiAgY2xlYXJCb2FyZChwbGF5ZXIpO1xuICByZW5kZXJCb2FyZChwbGF5ZXIpO1xuICBjbGVhckJvYXJkKGNvbXB1dGVyKTtcbiAgcmVuZGVyQm9hcmQoY29tcHV0ZXIpO1xufTtcblxuY29uc3QgcmVuZGVyQm9hcmQgPSAoYm9hcmROYW1lKSA9PiB7XG4gIGxldCB0YXJnZXRBcnJheSA9IGJvYXJkTmFtZS5wbGF5ZXJCb2FyZC5ib2FyZDtcbiAgY29uc3QgdGFyZ2V0QXBwZW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Ym9hcmROYW1lLm5hbWV9LWFycmF5YCk7XG4gIHRhcmdldEFycmF5LmZvckVhY2goKHJvdywgcm93SW5kZXgpID0+IHtcbiAgICBjb25zdCBteVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbXlSb3cuY2xhc3NMaXN0LmFkZChcInJvd1wiKTtcbiAgICByb3cuZm9yRWFjaCgoY2VsbCwgY29sdW1uSW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IG15Q2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBteUNlbGwuY2xhc3NMaXN0LmFkZChcImNlbGxcIik7XG4gICAgICBteUNlbGwuc2V0QXR0cmlidXRlKFwiZGF0YS14XCIsIHJvd0luZGV4KTtcbiAgICAgIG15Q2VsbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXlcIiwgY29sdW1uSW5kZXgpO1xuICAgICAgbGV0IHRoaXNDZWxsID0gdGFyZ2V0QXJyYXlbcm93SW5kZXhdW2NvbHVtbkluZGV4XTtcbiAgICAgIGlmICh0aGlzQ2VsbCA9PT0gXCJ4XCIpIHtcbiAgICAgICAgbXlDZWxsLmNsYXNzTGlzdC5hZGQoXCJ1bmNsaWNrYWJsZVwiKTtcbiAgICAgICAgbXlDZWxsLmNsYXNzTGlzdC5hZGQoXCJtaXNzZWQtaGl0XCIpO1xuICAgICAgICBteUNlbGwuY2xhc3NMaXN0LmFkZChcImZhLXJlZ3VsYXJcIik7XG4gICAgICAgIG15Q2VsbC5jbGFzc0xpc3QuYWRkKFwiZmEteFwiKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpc0NlbGwgPT09IFwicy14XCIpIHtcbiAgICAgICAgbXlDZWxsLmNsYXNzTGlzdC5hZGQoXCJ1bmNsaWNrYWJsZVwiKTtcbiAgICAgICAgbXlDZWxsLmNsYXNzTGlzdC5hZGQoXCJjb3JyZWN0LWhpdFwiKTtcbiAgICAgICAgbXlDZWxsLmNsYXNzTGlzdC5hZGQoXCJmYS1yZWd1bGFyXCIpO1xuICAgICAgICBteUNlbGwuY2xhc3NMaXN0LmFkZChcImZhLXhcIik7XG4gICAgICAgIG15Q2VsbC5jbGFzc0xpc3QuYWRkKFwic2hpcC1zdHlsZVwiKTtcbiAgICAgIH1cbiAgICAgIG15Um93LmFwcGVuZENoaWxkKG15Q2VsbCk7XG4gICAgICBpZiAoYm9hcmROYW1lLm5hbWUgPT09IFwiY29tcHV0ZXJcIikge1xuICAgICAgICBteUNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXNDZWxsICE9PSBcInhcIiB8fCB0aGlzQ2VsbCAhPT0gXCJzLXhcIikge1xuICAgICAgICAgICAgYXR0YWNrRXZlbnQoZSk7XG4gICAgICAgICAgICB1cGRhdGVCb2FyZChib2FyZE5hbWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoYm9hcmROYW1lLm5hbWUgPT09IFwicGxheWVyXCIpIHtcbiAgICAgICAgaWYgKHRoaXNDZWxsID09PSBcIkhcIikge1xuICAgICAgICAgIG15Q2VsbC5jbGFzc0xpc3QuYWRkKFwic2hpcC1zdHlsZVwiKTtcbiAgICAgICAgICBteUNlbGwuY2xhc3NMaXN0LmFkZChcImludmFsaWQtcGxhY2VtZW50XCIpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXNDZWxsID09PSBcIlZcIikge1xuICAgICAgICAgIG15Q2VsbC5jbGFzc0xpc3QuYWRkKFwic2hpcC1zdHlsZVwiKTtcbiAgICAgICAgICBteUNlbGwuY2xhc3NMaXN0LmFkZChcImludmFsaWQtcGxhY2VtZW50XCIpO1xuICAgICAgICB9XG4gICAgICAgIG15Q2VsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgcGxhY2VTaGlwRXZlbnQoZSk7XG4gICAgICAgICAgdXBkYXRlQm9hcmQoYm9hcmROYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGFyZ2V0QXBwZW5kLmFwcGVuZENoaWxkKG15Um93KTtcbiAgfSk7XG59O1xuXG4vLyBDSEVDS0lORyBJRiBBTEwgU0hJUFMgV0VSRSBQTEFDRUQgU08gV0UgQ0FOIFNUQVJUIEFUVEFDS0lOR1xuY29uc3QgY2hlY2tQbGF5ZXJTaGlwcyA9ICgpID0+IHtcbiAgbGV0IHRhcmdldENoZWNrID0gcGxheWVyLnBsYXllckJvYXJkLnNoaXBzQXJyYXk7XG4gIGxldCByZXNwb25zZSA9IHRhcmdldENoZWNrLmV2ZXJ5KChzaGlwKSA9PiBzaGlwLmNvb3JkUGFpcnMubGVuZ3RoID4gMCk7XG5cbiAgaWYgKHJlc3BvbnNlKSB7XG4gICAgLy93aGVuIHlvdSBwbGFjZSBhbGwgc2hpcHMsIGhpZGUgbXkgcGFuZWxcbiAgICBwbGF5ZXJQYW5lbC5jbGFzc0xpc3QuYWRkKFwiaGlkZS1vbi1tb2JpbGVcIik7XG4gICAgLy8gZGlzcGxheSB0aGUgY29tcCBwYW5lbCBmb3IgZmlyc3QgbW92ZVxuICAgIGNvbXB1dGVyUGFuZWwuY2xhc3NMaXN0LnJlbW92ZShcImhpZGUtb24tbW9iaWxlXCIpO1xuICB9XG4gIHJldHVybiByZXNwb25zZTtcbn07XG5cbi8vIEFUVEFDS0lORyBBTiBFTkVNWSwgQkVJTkcgQVRUQUNLRUQgQlkgQ09NUFVURVIsIEFORCBDSEVDS0lORyBGT1IgV0lOIENPTkRJVElPTlxuY29uc3QgYXR0YWNrRXZlbnQgPSAoZSkgPT4ge1xuICBsZXQgeCA9IHBhcnNlSW50KGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEteFwiKSk7XG4gIGxldCB5ID0gcGFyc2VJbnQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS15XCIpKTtcbiAgbGV0IGNhbkF0dGFjayA9IGNoZWNrUGxheWVyU2hpcHMoKTtcbiAgaWYgKGNhbkF0dGFjaykge1xuICAgIC8vIFBMQVlFUiBUVVJOXG4gICAgLy8gd2hlbiBwbGF5ZXIncyB0dXJuIGlzIG9uLCBpIGFscmVhZHkgc2VlIHRoZSBjb21wIHBhbmVsXG4gICAgLy9pIGF0dGFja1xuICAgIHBsYXllci5wbGF5ZXJTaG90KGNvbXB1dGVyLCB4LCB5KTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIC8vIGFmdGVyIGF0dGFjaywgaSBoaWRlIHRoZSBjb21wIGJvYXJkIGFuZCBkaXNwbGF5IG1pbmVcbiAgICAgIGNvbXB1dGVyUGFuZWwuY2xhc3NMaXN0LnJlbW92ZShcImRpc3BsYXktb24tbW9iaWxlXCIpO1xuICAgICAgY29tcHV0ZXJQYW5lbC5jbGFzc0xpc3QuYWRkKFwiaGlkZS1vbi1tb2JpbGVcIik7XG4gICAgICBwbGF5ZXJQYW5lbC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZS1vbi1tb2JpbGVcIik7XG4gICAgICBwbGF5ZXJQYW5lbC5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheS1vbi1tb2JpbGVcIik7XG4gICAgICBjb25zb2xlLmxvZyhcImhpZGluZyB0aGUgY29tcHV0ZXIgYm9hcmQgYWZ0ZXIgbXkgYXR0YWNrIGFuZCBzaG93aW5nIG1pbmVcIik7XG4gICAgfSwgMzAwKTtcbiAgICBpZiAoY29tcHV0ZXIucGxheWVyQm9hcmQuYWxsU3Vuaykge1xuICAgICAgZW5kR2FtZShwbGF5ZXIpO1xuICAgIH1cbiAgICAvLyBBSSBUVVJOXG4gICAgY29tcHV0ZXIuY29tcHV0ZXJTaG90KHBsYXllcik7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBwbGF5ZXJQYW5lbC5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzcGxheS1vbi1tb2JpbGVcIik7XG4gICAgICBwbGF5ZXJQYW5lbC5jbGFzc0xpc3QuYWRkKFwiaGlkZS1vbi1tb2JpbGVcIik7XG4gICAgICBjb21wdXRlclBhbmVsLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlLW9uLW1vYmlsZVwiKTtcbiAgICAgIGNvbXB1dGVyUGFuZWwuY2xhc3NMaXN0LmFkZChcImRpc3BsYXktb24tbW9iaWxlXCIpO1xuICAgIH0sIDEwMDApO1xuICAgIHVwZGF0ZUJvYXJkKHBsYXllcik7XG4gICAgaWYgKHBsYXllci5wbGF5ZXJCb2FyZC5hbGxTdW5rKSB7XG4gICAgICBlbmRHYW1lKGNvbXB1dGVyKTtcbiAgICB9XG4gIH1cbn07XG5cbi8vIEVORCBHQU1FIChNQVlCRSBBREQgXCJQTEFZIEFHQUlOP1wiKVxuY29uc3QgZW5kR2FtZSA9ICh3aW5uZXJOYW1lKSA9PiB7XG4gIGNvbXB1dGVyQm9hcmQuY2xhc3NMaXN0LmFkZChcInVuY2xpY2thYmxlXCIpO1xuICBjYW5TdGFydEdhbWUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB3aW5uZXJMYWJlbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICBpZiAod2lubmVyTmFtZS5uYW1lID09PSBcInBsYXllclwiKSB7XG4gICAgd2lubmVyTGFiZWwuaW5uZXJUZXh0ID0gYFlvdSBXb24hYDtcbiAgfSBlbHNlIHdpbm5lckxhYmVsLmlubmVyVGV4dCA9IGBZb3UgTG9zdCEgVHJ5IGFnYWluPyAtPmA7XG59O1xuXG4vLyBQTEFDSU5HIFBMQVlFUiBTSElQIE9OIENMSUNLXG5jb25zdCBwbGFjZVNoaXBFdmVudCA9IChlKSA9PiB7XG4gIGxldCB4ID0gcGFyc2VJbnQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS14XCIpKTtcbiAgbGV0IHkgPSBwYXJzZUludChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXlcIikpO1xuICBwbGF5ZXIucGxhY2VQbGF5ZXJTaGlwKHNoaXBMZW5ndGgsIHgsIHksIHNoaXBEaXJlY3Rpb24pO1xuICBsZXQgYWxsU2hpcHNQbGFjZWQgPSBjaGVja1BsYXllclNoaXBzKCk7XG4gIGlmIChhbGxTaGlwc1BsYWNlZCkge1xuICAgIHBsYWNlU2hpcHNJbmZvLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBjYW5TdGFydEdhbWUuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBjb21wdXRlckJvYXJkLmNsYXNzTGlzdC5yZW1vdmUoXCJ1bmNsaWNrYWJsZVwiKTtcbiAgICBwbGF5ZXJCb2FyZC5jbGFzc0xpc3QuYWRkKFwidW5jbGlja2FibGVcIik7XG4gICAgZGlyZWN0aW9uU2VsZWN0b3IuY2xhc3NMaXN0LmFkZChcInVuY2xpY2thYmxlXCIpO1xuICB9XG4gIHNoaXBMZW5ndGggPSBudWxsO1xufTtcblxuY29uc3QgY2xlYXJCb2FyZCA9IChib2FyZCkgPT4ge1xuICBjb25zdCB0YXJnZXREaXYgPSBib2FyZC5uYW1lO1xuICBjb25zdCB0YXJnZXRDbGVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RhcmdldERpdn0tYXJyYXlgKTtcbiAgdGFyZ2V0Q2xlYXIuaW5uZXJIVE1MID0gXCJcIjtcbn07XG5cbmNvbnN0IHVwZGF0ZUJvYXJkID0gKGJvYXJkKSA9PiB7XG4gIGNsZWFyQm9hcmQoYm9hcmQpO1xuICByZW5kZXJCb2FyZChib2FyZCk7XG59O1xuXG4vLyBORVcgR0FNRSBCVVRUT05cbmxldCBuZXdHYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctZ2FtZVwiKTtcbm5ld0dhbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgcGxhY2VTaGlwc0luZm8uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgY2FuU3RhcnRHYW1lLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgd2lubmVyTGFiZWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBwbGF5ZXJCb2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwidW5jbGlja2FibGVcIik7XG4gIGdhbWUoKTtcbn0pO1xuXG4vLyBET00gVE9HR0xFIFNISVBTIFNFTEVDVE9SU1xuY29uc3QgbGVuZ3RoU2VsZWN0b3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5sZW5ndGgtc2VsZWN0b3JcIik7XG5sZW5ndGhTZWxlY3RvcnMuZm9yRWFjaCgoc2VsZWN0b3IpID0+IHtcbiAgc2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgc2hpcExlbmd0aCA9IHBhcnNlSW50KGUudGFyZ2V0LmlkKTtcbiAgfSk7XG59KTtcblxuLy8gRE9NIFRPR0dMRSBESVJFQ1RJT05cbmNvbnN0IGRpcmVjdGlvblNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItZGlyZWN0aW9uXCIpO1xuZGlyZWN0aW9uU2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgaWYgKGRpcmVjdGlvblNlbGVjdG9yLmlubmVyVGV4dCA9PT0gXCJIXCIpIHtcbiAgICBzaGlwRGlyZWN0aW9uID0gXCJWXCI7XG4gICAgZGlyZWN0aW9uU2VsZWN0b3IuaW5uZXJUZXh0ID0gXCJWXCI7XG4gIH0gZWxzZSBpZiAoZGlyZWN0aW9uU2VsZWN0b3IuaW5uZXJUZXh0ID09PSBcIlZcIikge1xuICAgIHNoaXBEaXJlY3Rpb24gPSBcIkhcIjtcbiAgICBkaXJlY3Rpb25TZWxlY3Rvci5pbm5lclRleHQgPSBcIkhcIjtcbiAgfVxufSk7XG5cbmdhbWUoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==