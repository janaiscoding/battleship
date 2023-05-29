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

/***/ "./src/factories/AI.js":
/*!*****************************!*\
  !*** ./src/factories/AI.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AI)
/* harmony export */ });
/* harmony import */ var _gamboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gamboard */ "./src/factories/gamboard.js");


class AI {
  constructor(name) {
    this.name = name;
    this.playerBoard = new _gamboard__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.AIPastShots = [];
    this.placeRandomShips();
  }
  getRandomX() {
    let xRan = this.getRandomNum();
    return xRan;
  }
  getRandomY() {
    let yRan = this.getRandomNum();
    return yRan;
  }
  getRandomNum() {
    return Math.floor(Math.random() * 10);
  }
  getRandomDirection() {
    return Math.random() < 0.5 ? "V" : "H";
  }
  placeRandomShips() {
    let targetArray = this.playerBoard.shipsArray;
    targetArray.forEach((currentShip) => {
      let isShipPlaced = currentShip.coordPairs.length;
      while (isShipPlaced === 0) {
        let randomDirection = this.getRandomDirection();
        let ranX = this.getRandomX();
        let ranY = this.getRandomY();
        let pushLength = currentShip.ship.length;
        this.playerBoard.placeShip(pushLength, ranX, ranY, randomDirection);
        isShipPlaced = currentShip.coordPairs.length;
      }
    });
  }
  computerShot(myTarget) {
    let shotExists = false;
    let hitX = this.getRandomNum();
    let hitY = this.getRandomNum();
    let pairOfShot = [hitX, hitY];
    if (this.AIPastShots.includes(pairOfShot)) {
      shotExists = true;
      hitX = this.getRandomNum();
      hitY = this.getRandomNum();
      pairOfShot = [hitX, hitY];
    }
    if (!shotExists) {
      myTarget.playerBoard.receiveAttack(hitX, hitY);
      this.AIPastShots.push(pairOfShot);
    }
  }
}


/***/ }),

/***/ "./src/factories/gamboard.js":
/*!***********************************!*\
  !*** ./src/factories/gamboard.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/factories/ship.js");

class Gameboard {
  constructor() {
    this.board = this.createBoard(10); //default board
    this.shipsArray = [
      {
        ship: new _ship__WEBPACK_IMPORTED_MODULE_0__["default"](1, "Patrol-boat"),
        coordPairs: [],
      },
      {
        ship: new _ship__WEBPACK_IMPORTED_MODULE_0__["default"](2, "Submarine"),
        coordPairs: [],
      },
      {
        ship: new _ship__WEBPACK_IMPORTED_MODULE_0__["default"](3, "Destroyer"),
        coordPairs: [],
      },
      {
        ship: new _ship__WEBPACK_IMPORTED_MODULE_0__["default"](4, "Battleship"),
        coordPairs: [],
      },
      {
        ship: new _ship__WEBPACK_IMPORTED_MODULE_0__["default"](5, "Carrier"),
        coordPairs: [],
      },
    ]; // array will be filled with each ship and it's coordonates
    this.hitCoords = {
      missedHits: [],
      shipHits: [],
    };
    this.allSunk = false;
  }
  createBoard(size) {
    let board = [];
    for (let i = 0; i < size; i++) {
      board[i] = [];
      for (let j = 0; j < size; j++) {
        board[i][j] = "o";
      }
    }
    return board;
  }
  placeShip(l, x, y, d) {
    if (d === "H") {
      let columnValid = true;
      for (let i = x; i < x + l; i++) {
        if (this.board[i][y] !== "o" || x + l > 10) {
          columnValid = false;
          break;
        }
      }
      if (columnValid) {
        if (l === 1 && this.shipsArray[0].coordPairs.length === 0) {
          while (l !== 0) {
            this.shipsArray[0].coordPairs.push({ x, y });
            this.board[x][y] = "H";
            x++;
            l--;
          }
          return this.board;
        }
        if (l === 2 && this.shipsArray[1].coordPairs.length === 0) {
          while (l !== 0) {
            this.shipsArray[1].coordPairs.push({ x, y });
            this.board[x][y] = "H";
            x++;
            l--;
          }
          return this.board;
        }
        if (l === 3 && this.shipsArray[2].coordPairs.length === 0) {
          while (l !== 0) {
            this.shipsArray[2].coordPairs.push({ x, y });
            this.board[x][y] = "H";
            x++;
            l--;
          }
          return this.board;
        }
        if (l === 4 && this.shipsArray[3].coordPairs.length === 0) {
          while (l !== 0) {
            this.shipsArray[3].coordPairs.push({ x, y });
            this.board[x][y] = "H";
            x++;
            l--;
          }
          return this.board;
        }
        if (l === 5 && this.shipsArray[4].coordPairs.length === 0) {
          while (l !== 0) {
            this.shipsArray[4].coordPairs.push({ x, y });
            this.board[x][y] = "H";
            x++;
            l--;
          }
          return this.board;
        }
      }
    } else if (d === "V") {
      let rowValid = true;
      for (let j = y; j < y + l; j++) {
        if (this.board[x][j] !== "o" || y + l > 10) {
          rowValid = false;
          break;
        }
      }
      if (rowValid) {
        if (l === 1 && this.shipsArray[0].coordPairs.length === 0) {
          while (l !== 0) {
            this.shipsArray[0].coordPairs.push({ x, y });
            this.board[x][y] = "V";
            y++;
            l--;
          }
          return this.board;
        }
        if (l === 2 && this.shipsArray[1].coordPairs.length === 0) {
          while (l !== 0) {
            this.shipsArray[1].coordPairs.push({ x, y });
            this.board[x][y] = "V";
            y++;
            l--;
          }
          return this.board;
        }
        if (l === 3 && this.shipsArray[2].coordPairs.length === 0) {
          while (l !== 0) {
            this.shipsArray[2].coordPairs.push({ x, y });
            this.board[x][y] = "V";
            y++;
            l--;
          }
          return this.board;
        }
        if (l === 4 && this.shipsArray[3].coordPairs.length === 0) {
          while (l !== 0 && x + l < 11 && y + l < 11) {
            this.shipsArray[3].coordPairs.push({ x, y });
            this.board[x][y] = "V";
            y++;
            l--;
          }
          return this.board;
        }
        if (l === 5 && this.shipsArray[4].coordPairs.length === 0) {
          while (l !== 0) {
            this.shipsArray[4].coordPairs.push({ x, y });
            this.board[x][y] = "V";
            y++;
            l--;
          }
          return this.board;
        }
      }
    }
  }

  receiveAttack(xHit, yHit) {
    // handle for pushing all the hits
    let allowedHit = false;
    let shipHit = false; // checking for ship specific hit
    // i see if it has an attack already
    if (this.board[xHit][yHit] !== "x" && this.board[xHit][yHit] !== "s-x") {
      //if hit is empty
      allowedHit = true;
    }
    // i check if the actual hit is also a ship -> marked with s-x
    this.shipsArray.forEach((oneShip) => {
      for (let i = 0; i < oneShip.coordPairs.length; i++) {
        if (
          oneShip.coordPairs[i].x == xHit &&
          oneShip.coordPairs[i].y == yHit
        ) {
          shipHit = true;
          // yes that's a hot ass hit baby!
          oneShip.ship.hit();
          oneShip.ship.isSunk();
          this.checkAllSunk();
        }
      }
    });
    if (shipHit && allowedHit) {
      this.board[xHit][yHit] = "s-x";
      this.hitCoords.shipHits.push({ xHit, yHit });
    }
    if (!shipHit && allowedHit) {
      //store the hit pair
      this.board[xHit][yHit] = "x";
      this.hitCoords.missedHits.push({ xHit, yHit });
    }
  }
  checkAllSunk() {
    let allSunk = true;
    for (let i = 0; i < this.shipsArray.length; i++) {
      let onlyExistingShips = this.shipsArray[i].coordPairs.length;
      if (onlyExistingShips > 0) {
        if (this.shipsArray[i].ship.sunk === false) {
          allSunk = false;
          break;
        }
      }
    }
    if (allSunk) {
      this.allSunk = true;
    }
  }
}

//Gameboards should keep track of missed attacks so they can display them properly.
// Marking missed hit with x and ship hit with s-x

//Gameboards should be able to report whether or not all of their ships have been sunk.
//Everytime i hit a ship, i will check if it's sunk, and then if all of them are sunk


/***/ }),

/***/ "./src/factories/player.js":
/*!*********************************!*\
  !*** ./src/factories/player.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gamboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gamboard */ "./src/factories/gamboard.js");


class Player {
  constructor(name) {
    this.name = name;
    this.playerBoard = new _gamboard__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }
  placePlayerShip(newL, newX, newY, newD) {
    this.playerBoard.placeShip(newL, newX, newY, newD);
    let placedShips = this.playerBoard.shipsArray.filter(
      (ship) => ship.coordPairs.length > 0
    );
    placedShips.forEach((ship) => {
      document.getElementById(ship.coordPairs.length).style.backgroundColor = "#70717c";
      console.log("here");
    });

    console.log(this.playerBoard.shipsArray);
  }
  playerShot(myTarget, myX, myY) {
    myTarget.playerBoard.receiveAttack(myX, myY);
  }
}


/***/ }),

/***/ "./src/factories/ship.js":
/*!*******************************!*\
  !*** ./src/factories/ship.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
  constructor(length, name, hits = 0) {
    this.length = length;
    this.name = name;
    this.hits = hits;
    this.sunk = false;
  }
  hit() {
    if (this.hits === this.length) {
      return;
    } else return this.hits++;
  }
  isSunk() {
    if (this.length === this.hits) {
      return (this.sunk = true);
    } else return (this.sunk = false);
  }
}


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
/* harmony import */ var _factories_AI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factories/AI */ "./src/factories/AI.js");
/* harmony import */ var _factories_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factories/player */ "./src/factories/player.js");



const computerBoard = document.querySelector(".computer-array");
const playerBoard = document.querySelector(".player-array");
const placeShipsInfo = document.querySelector(".place-ships-info");
const canStartGame = document.querySelector(".can-start");
const winnerLabel = document.querySelector(".winner");
const playerPanel = document.querySelector(".player-board");
const computerPanel = document.querySelector(".computer-board");

let player = new _factories_player__WEBPACK_IMPORTED_MODULE_2__["default"]("player");
let computer = new _factories_AI__WEBPACK_IMPORTED_MODULE_1__["default"]("computer");
let shipLength = null;
let shipDirection = "V";

const game = () => {
  player = new _factories_player__WEBPACK_IMPORTED_MODULE_2__["default"]("player");
  computer = new _factories_AI__WEBPACK_IMPORTED_MODULE_1__["default"]("computer");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFtQix1QkFBdUIsS0FBSyxHQUFHLFNBQVMsZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE9BQU8sWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxVQUFVLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sWUFBWSxTQUFTLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxZ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O0FBQ25CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrREFBa0QsZUFBZTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlEQUFpRCxVQUFVO0FBQzNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ZhY3Rvcmllcy9BSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ZhY3Rvcmllcy9nYW1ib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ZhY3Rvcmllcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mYWN0b3JpZXMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL0luZGVyL0luZGVyLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkluZGVyXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJbmRlclxcXCI7XFxuICAtLXByaW1hcnktYmx1ZTogIzE4MTgyMztcXG4gIC0tcHJpbWFyeS1wdXJwbGU6ICM0YTQxODI7XFxuICAtLXByaW1hcnktcGluazogI2YyZGVkZTtcXG4gIC0tcHJpbWFyeS1yZWQ6ICM5NjQ4NDg7XFxuICAtLW5hdXRpY2FsLWJsdWU6ICMxYTUwOTE7XFxufVxcblxcbiosXFxuKjo6YWZ0ZXIsXFxuKjo6YmVmb3JlIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktcHVycGxlKTtcXG59XFxuXFxuLypIRUFERVIqL1xcbi5uYXZiYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgZ2FwOiAxMDBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwcHggMTAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWJsdWUpO1xcbiAgaGVpZ2h0OiAxMHZoO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDE3cHggLTZweCByZ2JhKDAsIDAsIDAsIDAuNTQpO1xcbiAgYm94LXNoYWRvdzogMHB4IDVweCAxN3B4IC02cHggcmdiYSgwLCAwLCAwLCAwLjU0KTtcXG59XFxuXFxuLyogTUFJTiBDT05URU5UICovXFxuLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDBweCAxMDBweDtcXG4gIG1pbi1oZWlnaHQ6IDg1dmg7XFxufVxcbi5uZXctZ2FtZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5uZXctZ2FtZTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG4uaW5mby1wYW5lbCB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1waW5rKTtcXG59XFxuLmJvdHRvbS1zaWRlLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMDBweDtcXG59XFxuXFxuLyogR0FNRSBDT05URU5UKi9cXG4ucGxheWVyLWJvYXJkLFxcbi5udW1iZXJzLWNvbHVtbixcXG4ubGV0dGVycy1yb3csXFxuLmNvbXB1dGVyLWJvYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5udW1iZXJzLWNvbHVtbiB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG59XFxuLmxldHRlciB7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogNTBweDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXBpbmspO1xcbn1cXG4ubnVtYmVyIHtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1waW5rKTtcXG59XFxuLmdhbWVib2FyZCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCA1MHB4KTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCA1MHB4KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktcGluayk7XFxuICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG59XFxuXFxuLmNlbGwsXFxuLnJvdyB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNCwgMywgMywgMC4wMTgpO1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcbi5jZWxsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5jZWxsOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4yMTIpO1xcbn1cXG4ucGxheWVyLXBhbmVsIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWJsdWUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1waW5rKTtcXG4gIHBhZGRpbmc6IDE1cHggMHB4O1xcbn1cXG4ucGxheWVyLXNoaXBzLFxcbi5wbGF5ZXItY29udHJvbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgcGFkZGluZzogMHB4IDE1cHg7XFxufVxcblxcbi5wbGF5ZXItY29udHJvbCB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbn1cXG4ucGxheWVyLXNoaXBzIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuLnBsYXllci1kaXJlY3Rpb24ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogNDBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktcmVkKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktYmx1ZSk7XFxufVxcbi5wbGF5ZXItbmFtZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4ubGVuZ3RoLXNlbGVjdG9yIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWJsdWUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF1dGljYWwtYmx1ZSk7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5wbGF5ZXItY2FycmllciB7XFxuICB3aWR0aDogMTYwcHg7XFxufVxcbi5wbGF5ZXItYmF0dGxlc2hpcCB7XFxuICB3aWR0aDogMTIwcHg7XFxufVxcbi5wbGF5ZXItZGVzdHJveWVyIHtcXG4gIHdpZHRoOiA5MHB4O1xcbn1cXG4ucGxheWVyLXN1Ym1hcmluZSB7XFxuICB3aWR0aDogNjBweDtcXG59XFxuLnBsYXllci1wYXRyb2wtYm9hdCB7XFxuICB3aWR0aDogMzBweDtcXG59XFxuLnVuY2xpY2thYmxlIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uc2hpcC1zdHlsZSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF1dGljYWwtYmx1ZSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWJsdWUpO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4uZmEtY2lyY2xlLXhtYXJrIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmludmFsaWQtcGxhY2VtZW50OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAxLCAyMywgMjMsIDAuNzY3KTtcXG59XFxuLmNhbi1zdGFydCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ubGVuZ3RoLXNlbGVjdG9yOmhvdmVyLFxcbi5wbGF5ZXItZGlyZWN0aW9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLypGT09URVIqL1xcbmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWJsdWUpO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggLTVweCAxMHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgYm94LXNoYWRvdzogMHB4IC01cHggMTBweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDV2aDtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXBpbmspO1xcbn1cXG4uZm9vdGVyLWxpbmsge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4vKiBHTE9CQUwgU0VUVElOR1MgKi9cXG5hLFxcbmE6dmlzaXRlZCxcXG5hOmZvY3VzIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXBpbmspO1xcbn1cXG5cXG5pbnB1dDpmb2N1cyxcXG5pbnB1dDphY3RpdmUge1xcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAuaGlkZS1vbi1tb2JpbGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgLmRpc3BsYXktb24tbW9iaWxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIH1cXG4gIC5uYXZiYXIge1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHBhZGRpbmc6IDBweCAxcmVtO1xcbiAgfVxcbiAgLmNvbnRlbnQge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIG1hcmdpbjoxMHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICB9XFxuICAuYm90dG9tLXNpZGUtd3JhcHBlciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgfVxcbiAgLmdhbWVib2FyZCxcXG4gIC5wbGF5ZXItYm9hcmQsXFxuICAuY29tcHV0ZXItYm9hcmQge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMzBweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAzMHB4KTtcXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcXG4gIH1cXG4gIC5udW1iZXIge1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICB9XFxuICAubGV0dGVyIHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgfVxcblxcbiAgLmNlbGwsXFxuICAucm93IHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gIH1cXG4gIC5wbGF5ZXItcGFuZWwge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICB9XFxuICAucGxheWVyLXNoaXBzIHtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgfVxcbiAgLmxlbmd0aC1zZWxlY3RvciB7XFxuICAgIGhlaWdodDogMzJweDtcXG4gIH1cXG4gIC5wbGF5ZXItY29udHJvbCB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBtYXJnaW4tdG9wOiA0cmVtO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usb0JBQW9CO0VBQ3BCLDRDQUE2QztFQUM3QyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6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QUMzQjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLFNBQVM7SUFDVCxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsV0FBVztJQUNYLFlBQVk7RUFDZDtFQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixTQUFTO0VBQ1g7RUFDQTs7O0lBR0UsdUNBQXVDO0lBQ3ZDLG9DQUFvQztJQUNwQyxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0VBQ2pCOztFQUVBOztJQUVFLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7RUFDQTtJQUNFLFlBQVk7RUFDZDtFQUNBO0lBQ0UsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixZQUFZO0VBQ2Q7RUFDQTtJQUNFLFlBQVk7RUFDZDtFQUNBO0lBQ0UsZUFBZTtJQUNmLFlBQVk7SUFDWixnQkFBZ0I7RUFDbEI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSW5kZXJcXFwiO1xcbiAgc3JjOiB1cmwoL3NyYy9hc3NldHMvSW5kZXIvSW5kZXItUmVndWxhci50dGYpO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG46cm9vdCB7XFxuICBmb250LWZhbWlseTogXFxcIkluZGVyXFxcIjtcXG4gIC0tcHJpbWFyeS1ibHVlOiAjMTgxODIzO1xcbiAgLS1wcmltYXJ5LXB1cnBsZTogIzRhNDE4MjtcXG4gIC0tcHJpbWFyeS1waW5rOiAjZjJkZWRlO1xcbiAgLS1wcmltYXJ5LXJlZDogIzk2NDg0ODtcXG4gIC0tbmF1dGljYWwtYmx1ZTogIzFhNTA5MTtcXG59XFxuXFxuKixcXG4qOjphZnRlcixcXG4qOjpiZWZvcmUge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1wdXJwbGUpO1xcbn1cXG5cXG4vKkhFQURFUiovXFxuLm5hdmJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBnYXA6IDEwMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDBweCAxMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktYmx1ZSk7XFxuICBoZWlnaHQ6IDEwdmg7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA1cHggMTdweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC41NCk7XFxuICBib3gtc2hhZG93OiAwcHggNXB4IDE3cHggLTZweCByZ2JhKDAsIDAsIDAsIDAuNTQpO1xcbn1cXG5cXG4vKiBNQUlOIENPTlRFTlQgKi9cXG4uY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMHB4IDEwMHB4O1xcbiAgbWluLWhlaWdodDogODV2aDtcXG59XFxuLm5ldy1nYW1lIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm5ldy1nYW1lOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcbi5pbmZvLXBhbmVsIHtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXBpbmspO1xcbn1cXG4uYm90dG9tLXNpZGUtd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwMHB4O1xcbn1cXG5cXG4vKiBHQU1FIENPTlRFTlQqL1xcbi5wbGF5ZXItYm9hcmQsXFxuLm51bWJlcnMtY29sdW1uLFxcbi5sZXR0ZXJzLXJvdyxcXG4uY29tcHV0ZXItYm9hcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLm51bWJlcnMtY29sdW1uIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbn1cXG4ubGV0dGVyIHtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktcGluayk7XFxufVxcbi5udW1iZXIge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXBpbmspO1xcbn1cXG4uZ2FtZWJvYXJkIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDUwcHgpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDUwcHgpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1waW5rKTtcXG4gIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcbn1cXG5cXG4uY2VsbCxcXG4ucm93IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI0LCAzLCAzLCAwLjAxOCk7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG59XFxuXFxuLmNlbGwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmNlbGw6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjIxMik7XFxufVxcbi5wbGF5ZXItcGFuZWwge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktYmx1ZSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LXBpbmspO1xcbiAgcGFkZGluZzogMTVweCAwcHg7XFxufVxcbi5wbGF5ZXItc2hpcHMsXFxuLnBsYXllci1jb250cm9sIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBwYWRkaW5nOiAwcHggMTVweDtcXG59XFxuXFxuLnBsYXllci1jb250cm9sIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGhlaWdodDogNDBweDtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxufVxcbi5wbGF5ZXItc2hpcHMge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG4ucGxheWVyLWRpcmVjdGlvbiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1yZWQpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1ibHVlKTtcXG59XFxuLnBsYXllci1uYW1lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5sZW5ndGgtc2VsZWN0b3Ige1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktYmx1ZSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXV0aWNhbC1ibHVlKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnBsYXllci1jYXJyaWVyIHtcXG4gIHdpZHRoOiAxNjBweDtcXG59XFxuLnBsYXllci1iYXR0bGVzaGlwIHtcXG4gIHdpZHRoOiAxMjBweDtcXG59XFxuLnBsYXllci1kZXN0cm95ZXIge1xcbiAgd2lkdGg6IDkwcHg7XFxufVxcbi5wbGF5ZXItc3VibWFyaW5lIHtcXG4gIHdpZHRoOiA2MHB4O1xcbn1cXG4ucGxheWVyLXBhdHJvbC1ib2F0IHtcXG4gIHdpZHRoOiAzMHB4O1xcbn1cXG4udW5jbGlja2FibGUge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5zaGlwLXN0eWxlIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXV0aWNhbC1ibHVlKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktYmx1ZSk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5mYS1jaXJjbGUteG1hcmsge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4uaW52YWxpZC1wbGFjZW1lbnQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDEsIDIzLCAyMywgMC43NjcpO1xcbn1cXG4uY2FuLXN0YXJ0IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5sZW5ndGgtc2VsZWN0b3I6aG92ZXIsXFxuLnBsYXllci1kaXJlY3Rpb246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKkZPT1RFUiovXFxuZm9vdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktYmx1ZSk7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAtNXB4IDEwcHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICBib3gtc2hhZG93OiAwcHggLTVweCAxMHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogNXZoO1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktcGluayk7XFxufVxcbi5mb290ZXItbGluayB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi8qIEdMT0JBTCBTRVRUSU5HUyAqL1xcbmEsXFxuYTp2aXNpdGVkLFxcbmE6Zm9jdXMge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktcGluayk7XFxufVxcblxcbmlucHV0OmZvY3VzLFxcbmlucHV0OmFjdGl2ZSB7XFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5oaWRlLW9uLW1vYmlsZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAuZGlzcGxheS1vbi1tb2JpbGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgfVxcbiAgLm5hdmJhciB7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgcGFkZGluZzogMHB4IDFyZW07XFxuICB9XFxuICAuY29udGVudCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgbWFyZ2luOjEwcHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gIH1cXG4gIC5ib3R0b20tc2lkZS13cmFwcGVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDEwcHg7XFxuICB9XFxuICAuZ2FtZWJvYXJkLFxcbiAgLnBsYXllci1ib2FyZCxcXG4gIC5jb21wdXRlci1ib2FyZCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAzMHB4KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDMwcHgpO1xcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xcbiAgfVxcbiAgLm51bWJlciB7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gIH1cXG4gIC5sZXR0ZXIge1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICB9XFxuXFxuICAuY2VsbCxcXG4gIC5yb3cge1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgfVxcbiAgLnBsYXllci1wYW5lbCB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gIH1cXG4gIC5wbGF5ZXItc2hpcHMge1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICB9XFxuICAubGVuZ3RoLXNlbGVjdG9yIHtcXG4gICAgaGVpZ2h0OiAzMnB4O1xcbiAgfVxcbiAgLnBsYXllci1jb250cm9sIHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIG1hcmdpbi10b3A6IDRyZW07XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi9nYW1ib2FyZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBSSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMucGxheWVyQm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgdGhpcy5BSVBhc3RTaG90cyA9IFtdO1xuICAgIHRoaXMucGxhY2VSYW5kb21TaGlwcygpO1xuICB9XG4gIGdldFJhbmRvbVgoKSB7XG4gICAgbGV0IHhSYW4gPSB0aGlzLmdldFJhbmRvbU51bSgpO1xuICAgIHJldHVybiB4UmFuO1xuICB9XG4gIGdldFJhbmRvbVkoKSB7XG4gICAgbGV0IHlSYW4gPSB0aGlzLmdldFJhbmRvbU51bSgpO1xuICAgIHJldHVybiB5UmFuO1xuICB9XG4gIGdldFJhbmRvbU51bSgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICB9XG4gIGdldFJhbmRvbURpcmVjdGlvbigpIHtcbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKSA8IDAuNSA/IFwiVlwiIDogXCJIXCI7XG4gIH1cbiAgcGxhY2VSYW5kb21TaGlwcygpIHtcbiAgICBsZXQgdGFyZ2V0QXJyYXkgPSB0aGlzLnBsYXllckJvYXJkLnNoaXBzQXJyYXk7XG4gICAgdGFyZ2V0QXJyYXkuZm9yRWFjaCgoY3VycmVudFNoaXApID0+IHtcbiAgICAgIGxldCBpc1NoaXBQbGFjZWQgPSBjdXJyZW50U2hpcC5jb29yZFBhaXJzLmxlbmd0aDtcbiAgICAgIHdoaWxlIChpc1NoaXBQbGFjZWQgPT09IDApIHtcbiAgICAgICAgbGV0IHJhbmRvbURpcmVjdGlvbiA9IHRoaXMuZ2V0UmFuZG9tRGlyZWN0aW9uKCk7XG4gICAgICAgIGxldCByYW5YID0gdGhpcy5nZXRSYW5kb21YKCk7XG4gICAgICAgIGxldCByYW5ZID0gdGhpcy5nZXRSYW5kb21ZKCk7XG4gICAgICAgIGxldCBwdXNoTGVuZ3RoID0gY3VycmVudFNoaXAuc2hpcC5sZW5ndGg7XG4gICAgICAgIHRoaXMucGxheWVyQm9hcmQucGxhY2VTaGlwKHB1c2hMZW5ndGgsIHJhblgsIHJhblksIHJhbmRvbURpcmVjdGlvbik7XG4gICAgICAgIGlzU2hpcFBsYWNlZCA9IGN1cnJlbnRTaGlwLmNvb3JkUGFpcnMubGVuZ3RoO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGNvbXB1dGVyU2hvdChteVRhcmdldCkge1xuICAgIGxldCBzaG90RXhpc3RzID0gZmFsc2U7XG4gICAgbGV0IGhpdFggPSB0aGlzLmdldFJhbmRvbU51bSgpO1xuICAgIGxldCBoaXRZID0gdGhpcy5nZXRSYW5kb21OdW0oKTtcbiAgICBsZXQgcGFpck9mU2hvdCA9IFtoaXRYLCBoaXRZXTtcbiAgICBpZiAodGhpcy5BSVBhc3RTaG90cy5pbmNsdWRlcyhwYWlyT2ZTaG90KSkge1xuICAgICAgc2hvdEV4aXN0cyA9IHRydWU7XG4gICAgICBoaXRYID0gdGhpcy5nZXRSYW5kb21OdW0oKTtcbiAgICAgIGhpdFkgPSB0aGlzLmdldFJhbmRvbU51bSgpO1xuICAgICAgcGFpck9mU2hvdCA9IFtoaXRYLCBoaXRZXTtcbiAgICB9XG4gICAgaWYgKCFzaG90RXhpc3RzKSB7XG4gICAgICBteVRhcmdldC5wbGF5ZXJCb2FyZC5yZWNlaXZlQXR0YWNrKGhpdFgsIGhpdFkpO1xuICAgICAgdGhpcy5BSVBhc3RTaG90cy5wdXNoKHBhaXJPZlNob3QpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IFNoaXAgZnJvbSBcIi4vc2hpcFwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZWJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5ib2FyZCA9IHRoaXMuY3JlYXRlQm9hcmQoMTApOyAvL2RlZmF1bHQgYm9hcmRcbiAgICB0aGlzLnNoaXBzQXJyYXkgPSBbXG4gICAgICB7XG4gICAgICAgIHNoaXA6IG5ldyBTaGlwKDEsIFwiUGF0cm9sLWJvYXRcIiksXG4gICAgICAgIGNvb3JkUGFpcnM6IFtdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2hpcDogbmV3IFNoaXAoMiwgXCJTdWJtYXJpbmVcIiksXG4gICAgICAgIGNvb3JkUGFpcnM6IFtdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2hpcDogbmV3IFNoaXAoMywgXCJEZXN0cm95ZXJcIiksXG4gICAgICAgIGNvb3JkUGFpcnM6IFtdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2hpcDogbmV3IFNoaXAoNCwgXCJCYXR0bGVzaGlwXCIpLFxuICAgICAgICBjb29yZFBhaXJzOiBbXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNoaXA6IG5ldyBTaGlwKDUsIFwiQ2FycmllclwiKSxcbiAgICAgICAgY29vcmRQYWlyczogW10sXG4gICAgICB9LFxuICAgIF07IC8vIGFycmF5IHdpbGwgYmUgZmlsbGVkIHdpdGggZWFjaCBzaGlwIGFuZCBpdCdzIGNvb3Jkb25hdGVzXG4gICAgdGhpcy5oaXRDb29yZHMgPSB7XG4gICAgICBtaXNzZWRIaXRzOiBbXSxcbiAgICAgIHNoaXBIaXRzOiBbXSxcbiAgICB9O1xuICAgIHRoaXMuYWxsU3VuayA9IGZhbHNlO1xuICB9XG4gIGNyZWF0ZUJvYXJkKHNpemUpIHtcbiAgICBsZXQgYm9hcmQgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgYm9hcmRbaV0gPSBbXTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2l6ZTsgaisrKSB7XG4gICAgICAgIGJvYXJkW2ldW2pdID0gXCJvXCI7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBib2FyZDtcbiAgfVxuICBwbGFjZVNoaXAobCwgeCwgeSwgZCkge1xuICAgIGlmIChkID09PSBcIkhcIikge1xuICAgICAgbGV0IGNvbHVtblZhbGlkID0gdHJ1ZTtcbiAgICAgIGZvciAobGV0IGkgPSB4OyBpIDwgeCArIGw7IGkrKykge1xuICAgICAgICBpZiAodGhpcy5ib2FyZFtpXVt5XSAhPT0gXCJvXCIgfHwgeCArIGwgPiAxMCkge1xuICAgICAgICAgIGNvbHVtblZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChjb2x1bW5WYWxpZCkge1xuICAgICAgICBpZiAobCA9PT0gMSAmJiB0aGlzLnNoaXBzQXJyYXlbMF0uY29vcmRQYWlycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB3aGlsZSAobCAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5zaGlwc0FycmF5WzBdLmNvb3JkUGFpcnMucHVzaCh7IHgsIHkgfSk7XG4gICAgICAgICAgICB0aGlzLmJvYXJkW3hdW3ldID0gXCJIXCI7XG4gICAgICAgICAgICB4Kys7XG4gICAgICAgICAgICBsLS07XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aGlzLmJvYXJkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsID09PSAyICYmIHRoaXMuc2hpcHNBcnJheVsxXS5jb29yZFBhaXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHdoaWxlIChsICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnNoaXBzQXJyYXlbMV0uY29vcmRQYWlycy5wdXNoKHsgeCwgeSB9KTtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbeF1beV0gPSBcIkhcIjtcbiAgICAgICAgICAgIHgrKztcbiAgICAgICAgICAgIGwtLTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGwgPT09IDMgJiYgdGhpcy5zaGlwc0FycmF5WzJdLmNvb3JkUGFpcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgd2hpbGUgKGwgIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2hpcHNBcnJheVsyXS5jb29yZFBhaXJzLnB1c2goeyB4LCB5IH0pO1xuICAgICAgICAgICAgdGhpcy5ib2FyZFt4XVt5XSA9IFwiSFwiO1xuICAgICAgICAgICAgeCsrO1xuICAgICAgICAgICAgbC0tO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhpcy5ib2FyZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAobCA9PT0gNCAmJiB0aGlzLnNoaXBzQXJyYXlbM10uY29vcmRQYWlycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB3aGlsZSAobCAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5zaGlwc0FycmF5WzNdLmNvb3JkUGFpcnMucHVzaCh7IHgsIHkgfSk7XG4gICAgICAgICAgICB0aGlzLmJvYXJkW3hdW3ldID0gXCJIXCI7XG4gICAgICAgICAgICB4Kys7XG4gICAgICAgICAgICBsLS07XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aGlzLmJvYXJkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsID09PSA1ICYmIHRoaXMuc2hpcHNBcnJheVs0XS5jb29yZFBhaXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHdoaWxlIChsICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnNoaXBzQXJyYXlbNF0uY29vcmRQYWlycy5wdXNoKHsgeCwgeSB9KTtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbeF1beV0gPSBcIkhcIjtcbiAgICAgICAgICAgIHgrKztcbiAgICAgICAgICAgIGwtLTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGQgPT09IFwiVlwiKSB7XG4gICAgICBsZXQgcm93VmFsaWQgPSB0cnVlO1xuICAgICAgZm9yIChsZXQgaiA9IHk7IGogPCB5ICsgbDsgaisrKSB7XG4gICAgICAgIGlmICh0aGlzLmJvYXJkW3hdW2pdICE9PSBcIm9cIiB8fCB5ICsgbCA+IDEwKSB7XG4gICAgICAgICAgcm93VmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHJvd1ZhbGlkKSB7XG4gICAgICAgIGlmIChsID09PSAxICYmIHRoaXMuc2hpcHNBcnJheVswXS5jb29yZFBhaXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHdoaWxlIChsICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnNoaXBzQXJyYXlbMF0uY29vcmRQYWlycy5wdXNoKHsgeCwgeSB9KTtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbeF1beV0gPSBcIlZcIjtcbiAgICAgICAgICAgIHkrKztcbiAgICAgICAgICAgIGwtLTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGwgPT09IDIgJiYgdGhpcy5zaGlwc0FycmF5WzFdLmNvb3JkUGFpcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgd2hpbGUgKGwgIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2hpcHNBcnJheVsxXS5jb29yZFBhaXJzLnB1c2goeyB4LCB5IH0pO1xuICAgICAgICAgICAgdGhpcy5ib2FyZFt4XVt5XSA9IFwiVlwiO1xuICAgICAgICAgICAgeSsrO1xuICAgICAgICAgICAgbC0tO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhpcy5ib2FyZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAobCA9PT0gMyAmJiB0aGlzLnNoaXBzQXJyYXlbMl0uY29vcmRQYWlycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB3aGlsZSAobCAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5zaGlwc0FycmF5WzJdLmNvb3JkUGFpcnMucHVzaCh7IHgsIHkgfSk7XG4gICAgICAgICAgICB0aGlzLmJvYXJkW3hdW3ldID0gXCJWXCI7XG4gICAgICAgICAgICB5Kys7XG4gICAgICAgICAgICBsLS07XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aGlzLmJvYXJkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsID09PSA0ICYmIHRoaXMuc2hpcHNBcnJheVszXS5jb29yZFBhaXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHdoaWxlIChsICE9PSAwICYmIHggKyBsIDwgMTEgJiYgeSArIGwgPCAxMSkge1xuICAgICAgICAgICAgdGhpcy5zaGlwc0FycmF5WzNdLmNvb3JkUGFpcnMucHVzaCh7IHgsIHkgfSk7XG4gICAgICAgICAgICB0aGlzLmJvYXJkW3hdW3ldID0gXCJWXCI7XG4gICAgICAgICAgICB5Kys7XG4gICAgICAgICAgICBsLS07XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aGlzLmJvYXJkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsID09PSA1ICYmIHRoaXMuc2hpcHNBcnJheVs0XS5jb29yZFBhaXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHdoaWxlIChsICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnNoaXBzQXJyYXlbNF0uY29vcmRQYWlycy5wdXNoKHsgeCwgeSB9KTtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbeF1beV0gPSBcIlZcIjtcbiAgICAgICAgICAgIHkrKztcbiAgICAgICAgICAgIGwtLTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZWNlaXZlQXR0YWNrKHhIaXQsIHlIaXQpIHtcbiAgICAvLyBoYW5kbGUgZm9yIHB1c2hpbmcgYWxsIHRoZSBoaXRzXG4gICAgbGV0IGFsbG93ZWRIaXQgPSBmYWxzZTtcbiAgICBsZXQgc2hpcEhpdCA9IGZhbHNlOyAvLyBjaGVja2luZyBmb3Igc2hpcCBzcGVjaWZpYyBoaXRcbiAgICAvLyBpIHNlZSBpZiBpdCBoYXMgYW4gYXR0YWNrIGFscmVhZHlcbiAgICBpZiAodGhpcy5ib2FyZFt4SGl0XVt5SGl0XSAhPT0gXCJ4XCIgJiYgdGhpcy5ib2FyZFt4SGl0XVt5SGl0XSAhPT0gXCJzLXhcIikge1xuICAgICAgLy9pZiBoaXQgaXMgZW1wdHlcbiAgICAgIGFsbG93ZWRIaXQgPSB0cnVlO1xuICAgIH1cbiAgICAvLyBpIGNoZWNrIGlmIHRoZSBhY3R1YWwgaGl0IGlzIGFsc28gYSBzaGlwIC0+IG1hcmtlZCB3aXRoIHMteFxuICAgIHRoaXMuc2hpcHNBcnJheS5mb3JFYWNoKChvbmVTaGlwKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9uZVNoaXAuY29vcmRQYWlycy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgb25lU2hpcC5jb29yZFBhaXJzW2ldLnggPT0geEhpdCAmJlxuICAgICAgICAgIG9uZVNoaXAuY29vcmRQYWlyc1tpXS55ID09IHlIaXRcbiAgICAgICAgKSB7XG4gICAgICAgICAgc2hpcEhpdCA9IHRydWU7XG4gICAgICAgICAgLy8geWVzIHRoYXQncyBhIGhvdCBhc3MgaGl0IGJhYnkhXG4gICAgICAgICAgb25lU2hpcC5zaGlwLmhpdCgpO1xuICAgICAgICAgIG9uZVNoaXAuc2hpcC5pc1N1bmsoKTtcbiAgICAgICAgICB0aGlzLmNoZWNrQWxsU3VuaygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHNoaXBIaXQgJiYgYWxsb3dlZEhpdCkge1xuICAgICAgdGhpcy5ib2FyZFt4SGl0XVt5SGl0XSA9IFwicy14XCI7XG4gICAgICB0aGlzLmhpdENvb3Jkcy5zaGlwSGl0cy5wdXNoKHsgeEhpdCwgeUhpdCB9KTtcbiAgICB9XG4gICAgaWYgKCFzaGlwSGl0ICYmIGFsbG93ZWRIaXQpIHtcbiAgICAgIC8vc3RvcmUgdGhlIGhpdCBwYWlyXG4gICAgICB0aGlzLmJvYXJkW3hIaXRdW3lIaXRdID0gXCJ4XCI7XG4gICAgICB0aGlzLmhpdENvb3Jkcy5taXNzZWRIaXRzLnB1c2goeyB4SGl0LCB5SGl0IH0pO1xuICAgIH1cbiAgfVxuICBjaGVja0FsbFN1bmsoKSB7XG4gICAgbGV0IGFsbFN1bmsgPSB0cnVlO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaGlwc0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgb25seUV4aXN0aW5nU2hpcHMgPSB0aGlzLnNoaXBzQXJyYXlbaV0uY29vcmRQYWlycy5sZW5ndGg7XG4gICAgICBpZiAob25seUV4aXN0aW5nU2hpcHMgPiAwKSB7XG4gICAgICAgIGlmICh0aGlzLnNoaXBzQXJyYXlbaV0uc2hpcC5zdW5rID09PSBmYWxzZSkge1xuICAgICAgICAgIGFsbFN1bmsgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoYWxsU3Vuaykge1xuICAgICAgdGhpcy5hbGxTdW5rID0gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cblxuLy9HYW1lYm9hcmRzIHNob3VsZCBrZWVwIHRyYWNrIG9mIG1pc3NlZCBhdHRhY2tzIHNvIHRoZXkgY2FuIGRpc3BsYXkgdGhlbSBwcm9wZXJseS5cbi8vIE1hcmtpbmcgbWlzc2VkIGhpdCB3aXRoIHggYW5kIHNoaXAgaGl0IHdpdGggcy14XG5cbi8vR2FtZWJvYXJkcyBzaG91bGQgYmUgYWJsZSB0byByZXBvcnQgd2hldGhlciBvciBub3QgYWxsIG9mIHRoZWlyIHNoaXBzIGhhdmUgYmVlbiBzdW5rLlxuLy9FdmVyeXRpbWUgaSBoaXQgYSBzaGlwLCBpIHdpbGwgY2hlY2sgaWYgaXQncyBzdW5rLCBhbmQgdGhlbiBpZiBhbGwgb2YgdGhlbSBhcmUgc3Vua1xuIiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi9nYW1ib2FyZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnBsYXllckJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICB9XG4gIHBsYWNlUGxheWVyU2hpcChuZXdMLCBuZXdYLCBuZXdZLCBuZXdEKSB7XG4gICAgdGhpcy5wbGF5ZXJCb2FyZC5wbGFjZVNoaXAobmV3TCwgbmV3WCwgbmV3WSwgbmV3RCk7XG4gICAgbGV0IHBsYWNlZFNoaXBzID0gdGhpcy5wbGF5ZXJCb2FyZC5zaGlwc0FycmF5LmZpbHRlcihcbiAgICAgIChzaGlwKSA9PiBzaGlwLmNvb3JkUGFpcnMubGVuZ3RoID4gMFxuICAgICk7XG4gICAgcGxhY2VkU2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2hpcC5jb29yZFBhaXJzLmxlbmd0aCkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjNzA3MTdjXCI7XG4gICAgICBjb25zb2xlLmxvZyhcImhlcmVcIik7XG4gICAgfSk7XG5cbiAgICBjb25zb2xlLmxvZyh0aGlzLnBsYXllckJvYXJkLnNoaXBzQXJyYXkpO1xuICB9XG4gIHBsYXllclNob3QobXlUYXJnZXQsIG15WCwgbXlZKSB7XG4gICAgbXlUYXJnZXQucGxheWVyQm9hcmQucmVjZWl2ZUF0dGFjayhteVgsIG15WSk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXAge1xuICBjb25zdHJ1Y3RvcihsZW5ndGgsIG5hbWUsIGhpdHMgPSAwKSB7XG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmhpdHMgPSBoaXRzO1xuICAgIHRoaXMuc3VuayA9IGZhbHNlO1xuICB9XG4gIGhpdCgpIHtcbiAgICBpZiAodGhpcy5oaXRzID09PSB0aGlzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSByZXR1cm4gdGhpcy5oaXRzKys7XG4gIH1cbiAgaXNTdW5rKCkge1xuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gdGhpcy5oaXRzKSB7XG4gICAgICByZXR1cm4gKHRoaXMuc3VuayA9IHRydWUpO1xuICAgIH0gZWxzZSByZXR1cm4gKHRoaXMuc3VuayA9IGZhbHNlKTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IEFJIGZyb20gXCIuL2ZhY3Rvcmllcy9BSVwiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9mYWN0b3JpZXMvcGxheWVyXCI7XG5jb25zdCBjb21wdXRlckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb21wdXRlci1hcnJheVwiKTtcbmNvbnN0IHBsYXllckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItYXJyYXlcIik7XG5jb25zdCBwbGFjZVNoaXBzSW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxhY2Utc2hpcHMtaW5mb1wiKTtcbmNvbnN0IGNhblN0YXJ0R2FtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FuLXN0YXJ0XCIpO1xuY29uc3Qgd2lubmVyTGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbm5lclwiKTtcbmNvbnN0IHBsYXllclBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItYm9hcmRcIik7XG5jb25zdCBjb21wdXRlclBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb21wdXRlci1ib2FyZFwiKTtcblxubGV0IHBsYXllciA9IG5ldyBQbGF5ZXIoXCJwbGF5ZXJcIik7XG5sZXQgY29tcHV0ZXIgPSBuZXcgQUkoXCJjb21wdXRlclwiKTtcbmxldCBzaGlwTGVuZ3RoID0gbnVsbDtcbmxldCBzaGlwRGlyZWN0aW9uID0gXCJWXCI7XG5cbmNvbnN0IGdhbWUgPSAoKSA9PiB7XG4gIHBsYXllciA9IG5ldyBQbGF5ZXIoXCJwbGF5ZXJcIik7XG4gIGNvbXB1dGVyID0gbmV3IEFJKFwiY29tcHV0ZXJcIik7XG4gIGdhbWVTdGFydCgpO1xufTtcblxuY29uc3QgZ2FtZVN0YXJ0ID0gKCkgPT4ge1xuICBjbGVhckJvYXJkKHBsYXllcik7XG4gIHJlbmRlckJvYXJkKHBsYXllcik7XG4gIGNsZWFyQm9hcmQoY29tcHV0ZXIpO1xuICByZW5kZXJCb2FyZChjb21wdXRlcik7XG59O1xuXG5jb25zdCByZW5kZXJCb2FyZCA9IChib2FyZE5hbWUpID0+IHtcbiAgbGV0IHRhcmdldEFycmF5ID0gYm9hcmROYW1lLnBsYXllckJvYXJkLmJvYXJkO1xuICBjb25zdCB0YXJnZXRBcHBlbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtib2FyZE5hbWUubmFtZX0tYXJyYXlgKTtcbiAgdGFyZ2V0QXJyYXkuZm9yRWFjaCgocm93LCByb3dJbmRleCkgPT4ge1xuICAgIGNvbnN0IG15Um93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBteVJvdy5jbGFzc0xpc3QuYWRkKFwicm93XCIpO1xuICAgIHJvdy5mb3JFYWNoKChjZWxsLCBjb2x1bW5JbmRleCkgPT4ge1xuICAgICAgY29uc3QgbXlDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIG15Q2VsbC5jbGFzc0xpc3QuYWRkKFwiY2VsbFwiKTtcbiAgICAgIG15Q2VsbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXhcIiwgcm93SW5kZXgpO1xuICAgICAgbXlDZWxsLnNldEF0dHJpYnV0ZShcImRhdGEteVwiLCBjb2x1bW5JbmRleCk7XG4gICAgICBsZXQgdGhpc0NlbGwgPSB0YXJnZXRBcnJheVtyb3dJbmRleF1bY29sdW1uSW5kZXhdO1xuICAgICAgaWYgKHRoaXNDZWxsID09PSBcInhcIikge1xuICAgICAgICBteUNlbGwuY2xhc3NMaXN0LmFkZChcInVuY2xpY2thYmxlXCIpO1xuICAgICAgICBteUNlbGwuY2xhc3NMaXN0LmFkZChcIm1pc3NlZC1oaXRcIik7XG4gICAgICAgIG15Q2VsbC5jbGFzc0xpc3QuYWRkKFwiZmEtcmVndWxhclwiKTtcbiAgICAgICAgbXlDZWxsLmNsYXNzTGlzdC5hZGQoXCJmYS14XCIpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzQ2VsbCA9PT0gXCJzLXhcIikge1xuICAgICAgICBteUNlbGwuY2xhc3NMaXN0LmFkZChcInVuY2xpY2thYmxlXCIpO1xuICAgICAgICBteUNlbGwuY2xhc3NMaXN0LmFkZChcImNvcnJlY3QtaGl0XCIpO1xuICAgICAgICBteUNlbGwuY2xhc3NMaXN0LmFkZChcImZhLXJlZ3VsYXJcIik7XG4gICAgICAgIG15Q2VsbC5jbGFzc0xpc3QuYWRkKFwiZmEteFwiKTtcbiAgICAgICAgbXlDZWxsLmNsYXNzTGlzdC5hZGQoXCJzaGlwLXN0eWxlXCIpO1xuICAgICAgfVxuICAgICAgbXlSb3cuYXBwZW5kQ2hpbGQobXlDZWxsKTtcbiAgICAgIGlmIChib2FyZE5hbWUubmFtZSA9PT0gXCJjb21wdXRlclwiKSB7XG4gICAgICAgIG15Q2VsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICBpZiAodGhpc0NlbGwgIT09IFwieFwiIHx8IHRoaXNDZWxsICE9PSBcInMteFwiKSB7XG4gICAgICAgICAgICBhdHRhY2tFdmVudChlKTtcbiAgICAgICAgICAgIHVwZGF0ZUJvYXJkKGJvYXJkTmFtZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChib2FyZE5hbWUubmFtZSA9PT0gXCJwbGF5ZXJcIikge1xuICAgICAgICBpZiAodGhpc0NlbGwgPT09IFwiSFwiKSB7XG4gICAgICAgICAgbXlDZWxsLmNsYXNzTGlzdC5hZGQoXCJzaGlwLXN0eWxlXCIpO1xuICAgICAgICAgIG15Q2VsbC5jbGFzc0xpc3QuYWRkKFwiaW52YWxpZC1wbGFjZW1lbnRcIik7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpc0NlbGwgPT09IFwiVlwiKSB7XG4gICAgICAgICAgbXlDZWxsLmNsYXNzTGlzdC5hZGQoXCJzaGlwLXN0eWxlXCIpO1xuICAgICAgICAgIG15Q2VsbC5jbGFzc0xpc3QuYWRkKFwiaW52YWxpZC1wbGFjZW1lbnRcIik7XG4gICAgICAgIH1cbiAgICAgICAgbXlDZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBwbGFjZVNoaXBFdmVudChlKTtcbiAgICAgICAgICB1cGRhdGVCb2FyZChib2FyZE5hbWUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0YXJnZXRBcHBlbmQuYXBwZW5kQ2hpbGQobXlSb3cpO1xuICB9KTtcbn07XG5cbi8vIENIRUNLSU5HIElGIEFMTCBTSElQUyBXRVJFIFBMQUNFRCBTTyBXRSBDQU4gU1RBUlQgQVRUQUNLSU5HXG5jb25zdCBjaGVja1BsYXllclNoaXBzID0gKCkgPT4ge1xuICBsZXQgdGFyZ2V0Q2hlY2sgPSBwbGF5ZXIucGxheWVyQm9hcmQuc2hpcHNBcnJheTtcbiAgbGV0IHJlc3BvbnNlID0gdGFyZ2V0Q2hlY2suZXZlcnkoKHNoaXApID0+IHNoaXAuY29vcmRQYWlycy5sZW5ndGggPiAwKTtcblxuICBpZiAocmVzcG9uc2UpIHtcbiAgICAvL3doZW4geW91IHBsYWNlIGFsbCBzaGlwcywgaGlkZSBteSBwYW5lbFxuICAgIHBsYXllclBhbmVsLmNsYXNzTGlzdC5hZGQoXCJoaWRlLW9uLW1vYmlsZVwiKTtcbiAgICAvLyBkaXNwbGF5IHRoZSBjb21wIHBhbmVsIGZvciBmaXJzdCBtb3ZlXG4gICAgY29tcHV0ZXJQYW5lbC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZS1vbi1tb2JpbGVcIik7XG4gIH1cbiAgcmV0dXJuIHJlc3BvbnNlO1xufTtcblxuLy8gQVRUQUNLSU5HIEFOIEVORU1ZLCBCRUlORyBBVFRBQ0tFRCBCWSBDT01QVVRFUiwgQU5EIENIRUNLSU5HIEZPUiBXSU4gQ09ORElUSU9OXG5jb25zdCBhdHRhY2tFdmVudCA9IChlKSA9PiB7XG4gIGxldCB4ID0gcGFyc2VJbnQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS14XCIpKTtcbiAgbGV0IHkgPSBwYXJzZUludChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXlcIikpO1xuICBsZXQgY2FuQXR0YWNrID0gY2hlY2tQbGF5ZXJTaGlwcygpO1xuICBpZiAoY2FuQXR0YWNrKSB7XG4gICAgLy8gUExBWUVSIFRVUk5cbiAgICAvLyB3aGVuIHBsYXllcidzIHR1cm4gaXMgb24sIGkgYWxyZWFkeSBzZWUgdGhlIGNvbXAgcGFuZWxcbiAgICAvL2kgYXR0YWNrXG4gICAgcGxheWVyLnBsYXllclNob3QoY29tcHV0ZXIsIHgsIHkpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgLy8gYWZ0ZXIgYXR0YWNrLCBpIGhpZGUgdGhlIGNvbXAgYm9hcmQgYW5kIGRpc3BsYXkgbWluZVxuICAgICAgY29tcHV0ZXJQYW5lbC5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzcGxheS1vbi1tb2JpbGVcIik7XG4gICAgICBjb21wdXRlclBhbmVsLmNsYXNzTGlzdC5hZGQoXCJoaWRlLW9uLW1vYmlsZVwiKTtcbiAgICAgIHBsYXllclBhbmVsLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlLW9uLW1vYmlsZVwiKTtcbiAgICAgIHBsYXllclBhbmVsLmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5LW9uLW1vYmlsZVwiKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiaGlkaW5nIHRoZSBjb21wdXRlciBib2FyZCBhZnRlciBteSBhdHRhY2sgYW5kIHNob3dpbmcgbWluZVwiKTtcbiAgICB9LCAzMDApO1xuICAgIGlmIChjb21wdXRlci5wbGF5ZXJCb2FyZC5hbGxTdW5rKSB7XG4gICAgICBlbmRHYW1lKHBsYXllcik7XG4gICAgfVxuICAgIC8vIEFJIFRVUk5cbiAgICBjb21wdXRlci5jb21wdXRlclNob3QocGxheWVyKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHBsYXllclBhbmVsLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNwbGF5LW9uLW1vYmlsZVwiKTtcbiAgICAgIHBsYXllclBhbmVsLmNsYXNzTGlzdC5hZGQoXCJoaWRlLW9uLW1vYmlsZVwiKTtcbiAgICAgIGNvbXB1dGVyUGFuZWwuY2xhc3NMaXN0LnJlbW92ZShcImhpZGUtb24tbW9iaWxlXCIpO1xuICAgICAgY29tcHV0ZXJQYW5lbC5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheS1vbi1tb2JpbGVcIik7XG4gICAgfSwgMTAwMCk7XG4gICAgdXBkYXRlQm9hcmQocGxheWVyKTtcbiAgICBpZiAocGxheWVyLnBsYXllckJvYXJkLmFsbFN1bmspIHtcbiAgICAgIGVuZEdhbWUoY29tcHV0ZXIpO1xuICAgIH1cbiAgfVxufTtcblxuLy8gRU5EIEdBTUUgKE1BWUJFIEFERCBcIlBMQVkgQUdBSU4/XCIpXG5jb25zdCBlbmRHYW1lID0gKHdpbm5lck5hbWUpID0+IHtcbiAgY29tcHV0ZXJCb2FyZC5jbGFzc0xpc3QuYWRkKFwidW5jbGlja2FibGVcIik7XG4gIGNhblN0YXJ0R2FtZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIHdpbm5lckxhYmVsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIGlmICh3aW5uZXJOYW1lLm5hbWUgPT09IFwicGxheWVyXCIpIHtcbiAgICB3aW5uZXJMYWJlbC5pbm5lclRleHQgPSBgWW91IFdvbiFgO1xuICB9IGVsc2Ugd2lubmVyTGFiZWwuaW5uZXJUZXh0ID0gYFlvdSBMb3N0ISBUcnkgYWdhaW4/IC0+YDtcbn07XG5cbi8vIFBMQUNJTkcgUExBWUVSIFNISVAgT04gQ0xJQ0tcbmNvbnN0IHBsYWNlU2hpcEV2ZW50ID0gKGUpID0+IHtcbiAgbGV0IHggPSBwYXJzZUludChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXhcIikpO1xuICBsZXQgeSA9IHBhcnNlSW50KGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEteVwiKSk7XG4gIHBsYXllci5wbGFjZVBsYXllclNoaXAoc2hpcExlbmd0aCwgeCwgeSwgc2hpcERpcmVjdGlvbik7XG4gIGxldCBhbGxTaGlwc1BsYWNlZCA9IGNoZWNrUGxheWVyU2hpcHMoKTtcbiAgaWYgKGFsbFNoaXBzUGxhY2VkKSB7XG4gICAgcGxhY2VTaGlwc0luZm8uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGNhblN0YXJ0R2FtZS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIGNvbXB1dGVyQm9hcmQuY2xhc3NMaXN0LnJlbW92ZShcInVuY2xpY2thYmxlXCIpO1xuICAgIHBsYXllckJvYXJkLmNsYXNzTGlzdC5hZGQoXCJ1bmNsaWNrYWJsZVwiKTtcbiAgICBkaXJlY3Rpb25TZWxlY3Rvci5jbGFzc0xpc3QuYWRkKFwidW5jbGlja2FibGVcIik7XG4gIH1cbiAgc2hpcExlbmd0aCA9IG51bGw7XG59O1xuXG5jb25zdCBjbGVhckJvYXJkID0gKGJvYXJkKSA9PiB7XG4gIGNvbnN0IHRhcmdldERpdiA9IGJvYXJkLm5hbWU7XG4gIGNvbnN0IHRhcmdldENsZWFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGFyZ2V0RGl2fS1hcnJheWApO1xuICB0YXJnZXRDbGVhci5pbm5lckhUTUwgPSBcIlwiO1xufTtcblxuY29uc3QgdXBkYXRlQm9hcmQgPSAoYm9hcmQpID0+IHtcbiAgY2xlYXJCb2FyZChib2FyZCk7XG4gIHJlbmRlckJvYXJkKGJvYXJkKTtcbn07XG5cbi8vIE5FVyBHQU1FIEJVVFRPTlxubGV0IG5ld0dhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ldy1nYW1lXCIpO1xubmV3R2FtZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBwbGFjZVNoaXBzSW5mby5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICBjYW5TdGFydEdhbWUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB3aW5uZXJMYWJlbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIHBsYXllckJvYXJkLmNsYXNzTGlzdC5yZW1vdmUoXCJ1bmNsaWNrYWJsZVwiKTtcbiAgZ2FtZSgpO1xufSk7XG5cbi8vIERPTSBUT0dHTEUgU0hJUFMgU0VMRUNUT1JTXG5jb25zdCBsZW5ndGhTZWxlY3RvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxlbmd0aC1zZWxlY3RvclwiKTtcbmxlbmd0aFNlbGVjdG9ycy5mb3JFYWNoKChzZWxlY3RvcikgPT4ge1xuICBzZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBzaGlwTGVuZ3RoID0gcGFyc2VJbnQoZS50YXJnZXQuaWQpO1xuICB9KTtcbn0pO1xuXG4vLyBET00gVE9HR0xFIERJUkVDVElPTlxuY29uc3QgZGlyZWN0aW9uU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci1kaXJlY3Rpb25cIik7XG5kaXJlY3Rpb25TZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBpZiAoZGlyZWN0aW9uU2VsZWN0b3IuaW5uZXJUZXh0ID09PSBcIkhcIikge1xuICAgIHNoaXBEaXJlY3Rpb24gPSBcIlZcIjtcbiAgICBkaXJlY3Rpb25TZWxlY3Rvci5pbm5lclRleHQgPSBcIlZcIjtcbiAgfSBlbHNlIGlmIChkaXJlY3Rpb25TZWxlY3Rvci5pbm5lclRleHQgPT09IFwiVlwiKSB7XG4gICAgc2hpcERpcmVjdGlvbiA9IFwiSFwiO1xuICAgIGRpcmVjdGlvblNlbGVjdG9yLmlubmVyVGV4dCA9IFwiSFwiO1xuICB9XG59KTtcblxuZ2FtZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9