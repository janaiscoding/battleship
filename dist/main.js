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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/assets/Inder/Inder-Regular.ttf */ "./src/assets/Inder/Inder-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"Inder\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-style: normal;\n}\n\n:root {\n  font-family: \"Inder\";\n  --primary-blue: #181823;\n  --primary-purple: #4a4182;\n  --primary-pink: #f2dede;\n  --primary-red: #964848;\n  --nautical-blue: #1a5091;\n}\n\n*,\n*::after,\n*::before {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background-color: var(--primary-purple);\n}\n\n/*HEADER*/\n.navbar {\n  display: flex;\n  justify-content: space-around;\n  gap: 100px;\n  align-items: center;\n  padding: 0px 100px;\n  background-color: var(--primary-blue);\n  height: 10vh;\n  -webkit-box-shadow: 0px 5px 17px -6px rgba(0, 0, 0, 0.54);\n  box-shadow: 0px 5px 17px -6px rgba(0, 0, 0, 0.54);\n}\n\n/* MAIN CONTENT */\n.content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0px 100px;\n  height: 85vh;\n}\n.new-game {\n  cursor: pointer;\n}\n.new-game:hover {\n  transform: scale(1.05);\n}\n.info-panel {\n  font-size: 24px;\n  color: var(--primary-pink);\n}\n.bottom-side-wrapper {\n  display: flex;\n  justify-content: center;\n  gap: 100px;\n}\n\n/* GAME CONTENT*/\n.player-board,\n.numbers-column,\n.letters-row,\n.computer-board {\n  display: flex;\n}\n.numbers-column {\n  flex-direction: column;\n  margin-top: 30px;\n}\n.letter {\n  height: 30px;\n  width: 50px;\n  font-size: 24px;\n  text-align: center;\n  color: var(--primary-pink);\n}\n.number {\n  height: 50px;\n  width: 30px;\n  font-size: 24px;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  color: var(--primary-pink);\n}\n.gameboard {\n  box-sizing: border-box;\n  display: grid;\n  grid-template-columns: repeat(10, 50px);\n  grid-template-rows: repeat(10, 50px);\n  background-color: var(--primary-pink);\n  border: solid 1px black;\n}\n\n.cell,\n.row {\n  box-sizing: border-box;\n  border: 1px solid rgba(24, 3, 3, 0.018);\n  width: 50px;\n  height: 50px;\n}\n\n.cell {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.cell:hover {\n  background-color: rgba(128, 128, 128, 0.212);\n}\n.player-panel {\n  box-sizing: border-box;\n  border: 1px solid var(--primary-blue);\n  background-color: var(--primary-pink);\n  padding: 15px 0px;\n}\n.player-ships,\n.player-control {\n  display: flex;\n  font-size: 24px;\n  padding: 0px 15px;\n}\n\n.player-control {\n  justify-content: space-between;\n  height: 40px;\n  margin-top: 15px;\n}\n.player-ships {\n  justify-content: space-between;\n  height: 30px;\n}\n.player-direction {\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  color: white;\n  border-radius: 2px;\n  background-color: var(--primary-red);\n  border: 1px solid var(--primary-blue);\n}\n.player-name {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.length-selector {\n  box-sizing: border-box;\n  border-radius: 2px;\n  border: 1px solid var(--primary-blue);\n  background-color: var(--nautical-blue);\n  color: white;\n  text-align: center;\n}\n.player-carrier {\n  width: 160px;\n}\n.player-battleship {\n  width: 120px;\n}\n.player-destroyer {\n  width: 90px;\n}\n.player-submarine {\n  width: 60px;\n}\n.player-patrol-boat {\n  width: 30px;\n}\n.unclickable {\n  pointer-events: none;\n}\n\n.ship-style {\n  box-sizing: border-box;\n  background-color: var(--nautical-blue);\n  border: 1px solid var(--primary-blue);\n  color: white;\n}\n.fa-circle-xmark {\n  color: white;\n}\n.invalid-placement:hover {\n  background-color: rgba(201, 23, 23, 0.767);\n}\n.can-start {\n  display: none;\n}\n.length-selector:hover,\n.player-direction:hover {\n  cursor: pointer;\n}\n\n/*FOOTER*/\nfooter {\n  background-color: var(--primary-blue);\n  -webkit-box-shadow: 0px -5px 10px -4px rgba(0, 0, 0, 0.2);\n  box-shadow: 0px -5px 10px -4px rgba(0, 0, 0, 0.2);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 5vh;\n  color: var(--primary-pink);\n}\n.footer-link {\n  color: white;\n}\n/* GLOBAL SETTINGS */\na,\na:visited,\na:focus {\n  text-decoration: none;\n  color: var(--primary-pink);\n}\n\ninput:focus,\ninput:active {\n  border-color: transparent;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,oBAAoB;EACpB,4CAA6C;EAC7C,kBAAkB;AACpB;;AAEA;EACE,oBAAoB;EACpB,uBAAuB;EACvB,yBAAyB;EACzB,uBAAuB;EACvB,sBAAsB;EACtB,wBAAwB;AAC1B;;AAEA;;;EAGE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,uCAAuC;AACzC;;AAEA,SAAS;AACT;EACE,aAAa;EACb,6BAA6B;EAC7B,UAAU;EACV,mBAAmB;EACnB,kBAAkB;EAClB,qCAAqC;EACrC,YAAY;EACZ,yDAAyD;EACzD,iDAAiD;AACnD;;AAEA,iBAAiB;AACjB;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,kBAAkB;EAClB,YAAY;AACd;AACA;EACE,eAAe;AACjB;AACA;EACE,sBAAsB;AACxB;AACA;EACE,eAAe;EACf,0BAA0B;AAC5B;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,UAAU;AACZ;;AAEA,gBAAgB;AAChB;;;;EAIE,aAAa;AACf;AACA;EACE,sBAAsB;EACtB,gBAAgB;AAClB;AACA;EACE,YAAY;EACZ,WAAW;EACX,eAAe;EACf,kBAAkB;EAClB,0BAA0B;AAC5B;AACA;EACE,YAAY;EACZ,WAAW;EACX,eAAe;EACf,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,0BAA0B;AAC5B;AACA;EACE,sBAAsB;EACtB,aAAa;EACb,uCAAuC;EACvC,oCAAoC;EACpC,qCAAqC;EACrC,uBAAuB;AACzB;;AAEA;;EAEE,sBAAsB;EACtB,uCAAuC;EACvC,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,4CAA4C;AAC9C;AACA;EACE,sBAAsB;EACtB,qCAAqC;EACrC,qCAAqC;EACrC,iBAAiB;AACnB;AACA;;EAEE,aAAa;EACb,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,8BAA8B;EAC9B,YAAY;EACZ,gBAAgB;AAClB;AACA;EACE,8BAA8B;EAC9B,YAAY;AACd;AACA;EACE,sBAAsB;EACtB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,oCAAoC;EACpC,qCAAqC;AACvC;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,qCAAqC;EACrC,sCAAsC;EACtC,YAAY;EACZ,kBAAkB;AACpB;AACA;EACE,YAAY;AACd;AACA;EACE,YAAY;AACd;AACA;EACE,WAAW;AACb;AACA;EACE,WAAW;AACb;AACA;EACE,WAAW;AACb;AACA;EACE,oBAAoB;AACtB;;AAEA;EACE,sBAAsB;EACtB,sCAAsC;EACtC,qCAAqC;EACrC,YAAY;AACd;AACA;EACE,YAAY;AACd;AACA;EACE,0CAA0C;AAC5C;AACA;EACE,aAAa;AACf;AACA;;EAEE,eAAe;AACjB;;AAEA,SAAS;AACT;EACE,qCAAqC;EACrC,yDAAyD;EACzD,iDAAiD;EACjD,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,0BAA0B;AAC5B;AACA;EACE,YAAY;AACd;AACA,oBAAoB;AACpB;;;EAGE,qBAAqB;EACrB,0BAA0B;AAC5B;;AAEA;;EAEE,yBAAyB;AAC3B","sourcesContent":["@font-face {\n  font-family: \"Inder\";\n  src: url(/src/assets/Inder/Inder-Regular.ttf);\n  font-style: normal;\n}\n\n:root {\n  font-family: \"Inder\";\n  --primary-blue: #181823;\n  --primary-purple: #4a4182;\n  --primary-pink: #f2dede;\n  --primary-red: #964848;\n  --nautical-blue: #1a5091;\n}\n\n*,\n*::after,\n*::before {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background-color: var(--primary-purple);\n}\n\n/*HEADER*/\n.navbar {\n  display: flex;\n  justify-content: space-around;\n  gap: 100px;\n  align-items: center;\n  padding: 0px 100px;\n  background-color: var(--primary-blue);\n  height: 10vh;\n  -webkit-box-shadow: 0px 5px 17px -6px rgba(0, 0, 0, 0.54);\n  box-shadow: 0px 5px 17px -6px rgba(0, 0, 0, 0.54);\n}\n\n/* MAIN CONTENT */\n.content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0px 100px;\n  height: 85vh;\n}\n.new-game {\n  cursor: pointer;\n}\n.new-game:hover {\n  transform: scale(1.05);\n}\n.info-panel {\n  font-size: 24px;\n  color: var(--primary-pink);\n}\n.bottom-side-wrapper {\n  display: flex;\n  justify-content: center;\n  gap: 100px;\n}\n\n/* GAME CONTENT*/\n.player-board,\n.numbers-column,\n.letters-row,\n.computer-board {\n  display: flex;\n}\n.numbers-column {\n  flex-direction: column;\n  margin-top: 30px;\n}\n.letter {\n  height: 30px;\n  width: 50px;\n  font-size: 24px;\n  text-align: center;\n  color: var(--primary-pink);\n}\n.number {\n  height: 50px;\n  width: 30px;\n  font-size: 24px;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  color: var(--primary-pink);\n}\n.gameboard {\n  box-sizing: border-box;\n  display: grid;\n  grid-template-columns: repeat(10, 50px);\n  grid-template-rows: repeat(10, 50px);\n  background-color: var(--primary-pink);\n  border: solid 1px black;\n}\n\n.cell,\n.row {\n  box-sizing: border-box;\n  border: 1px solid rgba(24, 3, 3, 0.018);\n  width: 50px;\n  height: 50px;\n}\n\n.cell {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.cell:hover {\n  background-color: rgba(128, 128, 128, 0.212);\n}\n.player-panel {\n  box-sizing: border-box;\n  border: 1px solid var(--primary-blue);\n  background-color: var(--primary-pink);\n  padding: 15px 0px;\n}\n.player-ships,\n.player-control {\n  display: flex;\n  font-size: 24px;\n  padding: 0px 15px;\n}\n\n.player-control {\n  justify-content: space-between;\n  height: 40px;\n  margin-top: 15px;\n}\n.player-ships {\n  justify-content: space-between;\n  height: 30px;\n}\n.player-direction {\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  color: white;\n  border-radius: 2px;\n  background-color: var(--primary-red);\n  border: 1px solid var(--primary-blue);\n}\n.player-name {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.length-selector {\n  box-sizing: border-box;\n  border-radius: 2px;\n  border: 1px solid var(--primary-blue);\n  background-color: var(--nautical-blue);\n  color: white;\n  text-align: center;\n}\n.player-carrier {\n  width: 160px;\n}\n.player-battleship {\n  width: 120px;\n}\n.player-destroyer {\n  width: 90px;\n}\n.player-submarine {\n  width: 60px;\n}\n.player-patrol-boat {\n  width: 30px;\n}\n.unclickable {\n  pointer-events: none;\n}\n\n.ship-style {\n  box-sizing: border-box;\n  background-color: var(--nautical-blue);\n  border: 1px solid var(--primary-blue);\n  color: white;\n}\n.fa-circle-xmark {\n  color: white;\n}\n.invalid-placement:hover {\n  background-color: rgba(201, 23, 23, 0.767);\n}\n.can-start {\n  display: none;\n}\n.length-selector:hover,\n.player-direction:hover {\n  cursor: pointer;\n}\n\n/*FOOTER*/\nfooter {\n  background-color: var(--primary-blue);\n  -webkit-box-shadow: 0px -5px 10px -4px rgba(0, 0, 0, 0.2);\n  box-shadow: 0px -5px 10px -4px rgba(0, 0, 0, 0.2);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 5vh;\n  color: var(--primary-pink);\n}\n.footer-link {\n  color: white;\n}\n/* GLOBAL SETTINGS */\na,\na:visited,\na:focus {\n  text-decoration: none;\n  color: var(--primary-pink);\n}\n\ninput:focus,\ninput:active {\n  border-color: transparent;\n}\n"],"sourceRoot":""}]);
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
  return response;
};

// ATTACKING AN ENEMY, BEING ATTACKED BY COMPUTER, AND CHECKING FOR WIN CONDITION
const attackEvent = (e) => {
  let x = parseInt(e.target.getAttribute("data-x"));
  let y = parseInt(e.target.getAttribute("data-y"));
  let canAttack = checkPlayerShips();
  if (canAttack) {
    // PLAYER TURN
    player.playerShot(computer, x, y);
    if (computer.playerBoard.allSunk) {
      endGame(player);
    }
    // AI TURN
    computer.computerShot(player);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpREFBaUQsVUFBVTtBQUMzRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mYWN0b3JpZXMvQUkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mYWN0b3JpZXMvZ2FtYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mYWN0b3JpZXMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZmFjdG9yaWVzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9JbmRlci9JbmRlci1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJbmRlclxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbjpyb290IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSW5kZXJcXFwiO1xcbiAgLS1wcmltYXJ5LWJsdWU6ICMxODE4MjM7XFxuICAtLXByaW1hcnktcHVycGxlOiAjNGE0MTgyO1xcbiAgLS1wcmltYXJ5LXBpbms6ICNmMmRlZGU7XFxuICAtLXByaW1hcnktcmVkOiAjOTY0ODQ4O1xcbiAgLS1uYXV0aWNhbC1ibHVlOiAjMWE1MDkxO1xcbn1cXG5cXG4qLFxcbio6OmFmdGVyLFxcbio6OmJlZm9yZSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LXB1cnBsZSk7XFxufVxcblxcbi8qSEVBREVSKi9cXG4ubmF2YmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGdhcDogMTAwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMHB4IDEwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1ibHVlKTtcXG4gIGhlaWdodDogMTB2aDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDVweCAxN3B4IC02cHggcmdiYSgwLCAwLCAwLCAwLjU0KTtcXG4gIGJveC1zaGFkb3c6IDBweCA1cHggMTdweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC41NCk7XFxufVxcblxcbi8qIE1BSU4gQ09OVEVOVCAqL1xcbi5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwcHggMTAwcHg7XFxuICBoZWlnaHQ6IDg1dmg7XFxufVxcbi5uZXctZ2FtZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5uZXctZ2FtZTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG4uaW5mby1wYW5lbCB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1waW5rKTtcXG59XFxuLmJvdHRvbS1zaWRlLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMDBweDtcXG59XFxuXFxuLyogR0FNRSBDT05URU5UKi9cXG4ucGxheWVyLWJvYXJkLFxcbi5udW1iZXJzLWNvbHVtbixcXG4ubGV0dGVycy1yb3csXFxuLmNvbXB1dGVyLWJvYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5udW1iZXJzLWNvbHVtbiB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG59XFxuLmxldHRlciB7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogNTBweDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXBpbmspO1xcbn1cXG4ubnVtYmVyIHtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1waW5rKTtcXG59XFxuLmdhbWVib2FyZCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCA1MHB4KTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCA1MHB4KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktcGluayk7XFxuICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG59XFxuXFxuLmNlbGwsXFxuLnJvdyB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNCwgMywgMywgMC4wMTgpO1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcbi5jZWxsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5jZWxsOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4yMTIpO1xcbn1cXG4ucGxheWVyLXBhbmVsIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWJsdWUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1waW5rKTtcXG4gIHBhZGRpbmc6IDE1cHggMHB4O1xcbn1cXG4ucGxheWVyLXNoaXBzLFxcbi5wbGF5ZXItY29udHJvbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgcGFkZGluZzogMHB4IDE1cHg7XFxufVxcblxcbi5wbGF5ZXItY29udHJvbCB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbn1cXG4ucGxheWVyLXNoaXBzIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuLnBsYXllci1kaXJlY3Rpb24ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogNDBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktcmVkKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktYmx1ZSk7XFxufVxcbi5wbGF5ZXItbmFtZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4ubGVuZ3RoLXNlbGVjdG9yIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWJsdWUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF1dGljYWwtYmx1ZSk7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5wbGF5ZXItY2FycmllciB7XFxuICB3aWR0aDogMTYwcHg7XFxufVxcbi5wbGF5ZXItYmF0dGxlc2hpcCB7XFxuICB3aWR0aDogMTIwcHg7XFxufVxcbi5wbGF5ZXItZGVzdHJveWVyIHtcXG4gIHdpZHRoOiA5MHB4O1xcbn1cXG4ucGxheWVyLXN1Ym1hcmluZSB7XFxuICB3aWR0aDogNjBweDtcXG59XFxuLnBsYXllci1wYXRyb2wtYm9hdCB7XFxuICB3aWR0aDogMzBweDtcXG59XFxuLnVuY2xpY2thYmxlIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uc2hpcC1zdHlsZSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF1dGljYWwtYmx1ZSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWJsdWUpO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4uZmEtY2lyY2xlLXhtYXJrIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmludmFsaWQtcGxhY2VtZW50OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAxLCAyMywgMjMsIDAuNzY3KTtcXG59XFxuLmNhbi1zdGFydCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ubGVuZ3RoLXNlbGVjdG9yOmhvdmVyLFxcbi5wbGF5ZXItZGlyZWN0aW9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLypGT09URVIqL1xcbmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWJsdWUpO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggLTVweCAxMHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgYm94LXNoYWRvdzogMHB4IC01cHggMTBweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDV2aDtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXBpbmspO1xcbn1cXG4uZm9vdGVyLWxpbmsge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4vKiBHTE9CQUwgU0VUVElOR1MgKi9cXG5hLFxcbmE6dmlzaXRlZCxcXG5hOmZvY3VzIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXBpbmspO1xcbn1cXG5cXG5pbnB1dDpmb2N1cyxcXG5pbnB1dDphY3RpdmUge1xcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG9CQUFvQjtFQUNwQiw0Q0FBNkM7RUFDN0Msa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0Qix3QkFBd0I7QUFDMUI7O0FBRUE7OztFQUdFLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsdUNBQXVDO0FBQ3pDOztBQUVBLFNBQVM7QUFDVDtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIscUNBQXFDO0VBQ3JDLFlBQVk7RUFDWix5REFBeUQ7RUFDekQsaURBQWlEO0FBQ25EOztBQUVBLGlCQUFpQjtBQUNqQjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsZUFBZTtFQUNmLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixVQUFVO0FBQ1o7O0FBRUEsZ0JBQWdCO0FBQ2hCOzs7O0VBSUUsYUFBYTtBQUNmO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsdUNBQXVDO0VBQ3ZDLG9DQUFvQztFQUNwQyxxQ0FBcUM7RUFDckMsdUJBQXVCO0FBQ3pCOztBQUVBOztFQUVFLHNCQUFzQjtFQUN0Qix1Q0FBdUM7RUFDdkMsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSw0Q0FBNEM7QUFDOUM7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixxQ0FBcUM7RUFDckMscUNBQXFDO0VBQ3JDLGlCQUFpQjtBQUNuQjtBQUNBOztFQUVFLGFBQWE7RUFDYixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLDhCQUE4QjtFQUM5QixZQUFZO0FBQ2Q7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMscUNBQXFDO0FBQ3ZDO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixxQ0FBcUM7RUFDckMsc0NBQXNDO0VBQ3RDLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsc0NBQXNDO0VBQ3RDLHFDQUFxQztFQUNyQyxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsMENBQTBDO0FBQzVDO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTs7RUFFRSxlQUFlO0FBQ2pCOztBQUVBLFNBQVM7QUFDVDtFQUNFLHFDQUFxQztFQUNyQyx5REFBeUQ7RUFDekQsaURBQWlEO0VBQ2pELGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBLG9CQUFvQjtBQUNwQjs7O0VBR0UscUJBQXFCO0VBQ3JCLDBCQUEwQjtBQUM1Qjs7QUFFQTs7RUFFRSx5QkFBeUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkluZGVyXFxcIjtcXG4gIHNyYzogdXJsKC9zcmMvYXNzZXRzL0luZGVyL0luZGVyLVJlZ3VsYXIudHRmKTtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJbmRlclxcXCI7XFxuICAtLXByaW1hcnktYmx1ZTogIzE4MTgyMztcXG4gIC0tcHJpbWFyeS1wdXJwbGU6ICM0YTQxODI7XFxuICAtLXByaW1hcnktcGluazogI2YyZGVkZTtcXG4gIC0tcHJpbWFyeS1yZWQ6ICM5NjQ4NDg7XFxuICAtLW5hdXRpY2FsLWJsdWU6ICMxYTUwOTE7XFxufVxcblxcbiosXFxuKjo6YWZ0ZXIsXFxuKjo6YmVmb3JlIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktcHVycGxlKTtcXG59XFxuXFxuLypIRUFERVIqL1xcbi5uYXZiYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgZ2FwOiAxMDBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwcHggMTAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWJsdWUpO1xcbiAgaGVpZ2h0OiAxMHZoO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDE3cHggLTZweCByZ2JhKDAsIDAsIDAsIDAuNTQpO1xcbiAgYm94LXNoYWRvdzogMHB4IDVweCAxN3B4IC02cHggcmdiYSgwLCAwLCAwLCAwLjU0KTtcXG59XFxuXFxuLyogTUFJTiBDT05URU5UICovXFxuLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDBweCAxMDBweDtcXG4gIGhlaWdodDogODV2aDtcXG59XFxuLm5ldy1nYW1lIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm5ldy1nYW1lOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcbi5pbmZvLXBhbmVsIHtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXBpbmspO1xcbn1cXG4uYm90dG9tLXNpZGUtd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwMHB4O1xcbn1cXG5cXG4vKiBHQU1FIENPTlRFTlQqL1xcbi5wbGF5ZXItYm9hcmQsXFxuLm51bWJlcnMtY29sdW1uLFxcbi5sZXR0ZXJzLXJvdyxcXG4uY29tcHV0ZXItYm9hcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLm51bWJlcnMtY29sdW1uIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbn1cXG4ubGV0dGVyIHtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktcGluayk7XFxufVxcbi5udW1iZXIge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXBpbmspO1xcbn1cXG4uZ2FtZWJvYXJkIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDUwcHgpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDUwcHgpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1waW5rKTtcXG4gIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcbn1cXG5cXG4uY2VsbCxcXG4ucm93IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI0LCAzLCAzLCAwLjAxOCk7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG59XFxuXFxuLmNlbGwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmNlbGw6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjIxMik7XFxufVxcbi5wbGF5ZXItcGFuZWwge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktYmx1ZSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LXBpbmspO1xcbiAgcGFkZGluZzogMTVweCAwcHg7XFxufVxcbi5wbGF5ZXItc2hpcHMsXFxuLnBsYXllci1jb250cm9sIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBwYWRkaW5nOiAwcHggMTVweDtcXG59XFxuXFxuLnBsYXllci1jb250cm9sIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGhlaWdodDogNDBweDtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxufVxcbi5wbGF5ZXItc2hpcHMge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG4ucGxheWVyLWRpcmVjdGlvbiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1yZWQpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1ibHVlKTtcXG59XFxuLnBsYXllci1uYW1lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5sZW5ndGgtc2VsZWN0b3Ige1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktYmx1ZSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXV0aWNhbC1ibHVlKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnBsYXllci1jYXJyaWVyIHtcXG4gIHdpZHRoOiAxNjBweDtcXG59XFxuLnBsYXllci1iYXR0bGVzaGlwIHtcXG4gIHdpZHRoOiAxMjBweDtcXG59XFxuLnBsYXllci1kZXN0cm95ZXIge1xcbiAgd2lkdGg6IDkwcHg7XFxufVxcbi5wbGF5ZXItc3VibWFyaW5lIHtcXG4gIHdpZHRoOiA2MHB4O1xcbn1cXG4ucGxheWVyLXBhdHJvbC1ib2F0IHtcXG4gIHdpZHRoOiAzMHB4O1xcbn1cXG4udW5jbGlja2FibGUge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5zaGlwLXN0eWxlIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXV0aWNhbC1ibHVlKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktYmx1ZSk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5mYS1jaXJjbGUteG1hcmsge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4uaW52YWxpZC1wbGFjZW1lbnQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDEsIDIzLCAyMywgMC43NjcpO1xcbn1cXG4uY2FuLXN0YXJ0IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5sZW5ndGgtc2VsZWN0b3I6aG92ZXIsXFxuLnBsYXllci1kaXJlY3Rpb246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKkZPT1RFUiovXFxuZm9vdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktYmx1ZSk7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAtNXB4IDEwcHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICBib3gtc2hhZG93OiAwcHggLTVweCAxMHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogNXZoO1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktcGluayk7XFxufVxcbi5mb290ZXItbGluayB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi8qIEdMT0JBTCBTRVRUSU5HUyAqL1xcbmEsXFxuYTp2aXNpdGVkLFxcbmE6Zm9jdXMge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktcGluayk7XFxufVxcblxcbmlucHV0OmZvY3VzLFxcbmlucHV0OmFjdGl2ZSB7XFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vZ2FtYm9hcmRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQUkge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnBsYXllckJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICAgIHRoaXMuQUlQYXN0U2hvdHMgPSBbXTtcbiAgICB0aGlzLnBsYWNlUmFuZG9tU2hpcHMoKTtcbiAgfVxuICBnZXRSYW5kb21YKCkge1xuICAgIGxldCB4UmFuID0gdGhpcy5nZXRSYW5kb21OdW0oKTtcbiAgICByZXR1cm4geFJhbjtcbiAgfVxuICBnZXRSYW5kb21ZKCkge1xuICAgIGxldCB5UmFuID0gdGhpcy5nZXRSYW5kb21OdW0oKTtcbiAgICByZXR1cm4geVJhbjtcbiAgfVxuICBnZXRSYW5kb21OdW0oKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgfVxuICBnZXRSYW5kb21EaXJlY3Rpb24oKSB7XG4gICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgPCAwLjUgPyBcIlZcIiA6IFwiSFwiO1xuICB9XG4gIHBsYWNlUmFuZG9tU2hpcHMoKSB7XG4gICAgbGV0IHRhcmdldEFycmF5ID0gdGhpcy5wbGF5ZXJCb2FyZC5zaGlwc0FycmF5O1xuICAgIHRhcmdldEFycmF5LmZvckVhY2goKGN1cnJlbnRTaGlwKSA9PiB7XG4gICAgICBsZXQgaXNTaGlwUGxhY2VkID0gY3VycmVudFNoaXAuY29vcmRQYWlycy5sZW5ndGg7XG4gICAgICB3aGlsZSAoaXNTaGlwUGxhY2VkID09PSAwKSB7XG4gICAgICAgIGxldCByYW5kb21EaXJlY3Rpb24gPSB0aGlzLmdldFJhbmRvbURpcmVjdGlvbigpO1xuICAgICAgICBsZXQgcmFuWCA9IHRoaXMuZ2V0UmFuZG9tWCgpO1xuICAgICAgICBsZXQgcmFuWSA9IHRoaXMuZ2V0UmFuZG9tWSgpO1xuICAgICAgICBsZXQgcHVzaExlbmd0aCA9IGN1cnJlbnRTaGlwLnNoaXAubGVuZ3RoO1xuICAgICAgICB0aGlzLnBsYXllckJvYXJkLnBsYWNlU2hpcChwdXNoTGVuZ3RoLCByYW5YLCByYW5ZLCByYW5kb21EaXJlY3Rpb24pO1xuICAgICAgICBpc1NoaXBQbGFjZWQgPSBjdXJyZW50U2hpcC5jb29yZFBhaXJzLmxlbmd0aDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBjb21wdXRlclNob3QobXlUYXJnZXQpIHtcbiAgICBsZXQgc2hvdEV4aXN0cyA9IGZhbHNlO1xuICAgIGxldCBoaXRYID0gdGhpcy5nZXRSYW5kb21OdW0oKTtcbiAgICBsZXQgaGl0WSA9IHRoaXMuZ2V0UmFuZG9tTnVtKCk7XG4gICAgbGV0IHBhaXJPZlNob3QgPSBbaGl0WCwgaGl0WV07XG4gICAgaWYgKHRoaXMuQUlQYXN0U2hvdHMuaW5jbHVkZXMocGFpck9mU2hvdCkpIHtcbiAgICAgIHNob3RFeGlzdHMgPSB0cnVlO1xuICAgICAgaGl0WCA9IHRoaXMuZ2V0UmFuZG9tTnVtKCk7XG4gICAgICBoaXRZID0gdGhpcy5nZXRSYW5kb21OdW0oKTtcbiAgICAgIHBhaXJPZlNob3QgPSBbaGl0WCwgaGl0WV07XG4gICAgfVxuICAgIGlmICghc2hvdEV4aXN0cykge1xuICAgICAgbXlUYXJnZXQucGxheWVyQm9hcmQucmVjZWl2ZUF0dGFjayhoaXRYLCBoaXRZKTtcbiAgICAgIHRoaXMuQUlQYXN0U2hvdHMucHVzaChwYWlyT2ZTaG90KTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXBcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVib2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYm9hcmQgPSB0aGlzLmNyZWF0ZUJvYXJkKDEwKTsgLy9kZWZhdWx0IGJvYXJkXG4gICAgdGhpcy5zaGlwc0FycmF5ID0gW1xuICAgICAge1xuICAgICAgICBzaGlwOiBuZXcgU2hpcCgxLCBcIlBhdHJvbC1ib2F0XCIpLFxuICAgICAgICBjb29yZFBhaXJzOiBbXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNoaXA6IG5ldyBTaGlwKDIsIFwiU3VibWFyaW5lXCIpLFxuICAgICAgICBjb29yZFBhaXJzOiBbXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNoaXA6IG5ldyBTaGlwKDMsIFwiRGVzdHJveWVyXCIpLFxuICAgICAgICBjb29yZFBhaXJzOiBbXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNoaXA6IG5ldyBTaGlwKDQsIFwiQmF0dGxlc2hpcFwiKSxcbiAgICAgICAgY29vcmRQYWlyczogW10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzaGlwOiBuZXcgU2hpcCg1LCBcIkNhcnJpZXJcIiksXG4gICAgICAgIGNvb3JkUGFpcnM6IFtdLFxuICAgICAgfSxcbiAgICBdOyAvLyBhcnJheSB3aWxsIGJlIGZpbGxlZCB3aXRoIGVhY2ggc2hpcCBhbmQgaXQncyBjb29yZG9uYXRlc1xuICAgIHRoaXMuaGl0Q29vcmRzID0ge1xuICAgICAgbWlzc2VkSGl0czogW10sXG4gICAgICBzaGlwSGl0czogW10sXG4gICAgfTtcbiAgICB0aGlzLmFsbFN1bmsgPSBmYWxzZTtcbiAgfVxuICBjcmVhdGVCb2FyZChzaXplKSB7XG4gICAgbGV0IGJvYXJkID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgIGJvYXJkW2ldID0gW107XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNpemU7IGorKykge1xuICAgICAgICBib2FyZFtpXVtqXSA9IFwib1wiO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYm9hcmQ7XG4gIH1cbiAgcGxhY2VTaGlwKGwsIHgsIHksIGQpIHtcbiAgICBpZiAoZCA9PT0gXCJIXCIpIHtcbiAgICAgIGxldCBjb2x1bW5WYWxpZCA9IHRydWU7XG4gICAgICBmb3IgKGxldCBpID0geDsgaSA8IHggKyBsOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbaV1beV0gIT09IFwib1wiIHx8IHggKyBsID4gMTApIHtcbiAgICAgICAgICBjb2x1bW5WYWxpZCA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoY29sdW1uVmFsaWQpIHtcbiAgICAgICAgaWYgKGwgPT09IDEgJiYgdGhpcy5zaGlwc0FycmF5WzBdLmNvb3JkUGFpcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgd2hpbGUgKGwgIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2hpcHNBcnJheVswXS5jb29yZFBhaXJzLnB1c2goeyB4LCB5IH0pO1xuICAgICAgICAgICAgdGhpcy5ib2FyZFt4XVt5XSA9IFwiSFwiO1xuICAgICAgICAgICAgeCsrO1xuICAgICAgICAgICAgbC0tO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhpcy5ib2FyZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAobCA9PT0gMiAmJiB0aGlzLnNoaXBzQXJyYXlbMV0uY29vcmRQYWlycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB3aGlsZSAobCAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5zaGlwc0FycmF5WzFdLmNvb3JkUGFpcnMucHVzaCh7IHgsIHkgfSk7XG4gICAgICAgICAgICB0aGlzLmJvYXJkW3hdW3ldID0gXCJIXCI7XG4gICAgICAgICAgICB4Kys7XG4gICAgICAgICAgICBsLS07XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aGlzLmJvYXJkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsID09PSAzICYmIHRoaXMuc2hpcHNBcnJheVsyXS5jb29yZFBhaXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHdoaWxlIChsICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnNoaXBzQXJyYXlbMl0uY29vcmRQYWlycy5wdXNoKHsgeCwgeSB9KTtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbeF1beV0gPSBcIkhcIjtcbiAgICAgICAgICAgIHgrKztcbiAgICAgICAgICAgIGwtLTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGwgPT09IDQgJiYgdGhpcy5zaGlwc0FycmF5WzNdLmNvb3JkUGFpcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgd2hpbGUgKGwgIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2hpcHNBcnJheVszXS5jb29yZFBhaXJzLnB1c2goeyB4LCB5IH0pO1xuICAgICAgICAgICAgdGhpcy5ib2FyZFt4XVt5XSA9IFwiSFwiO1xuICAgICAgICAgICAgeCsrO1xuICAgICAgICAgICAgbC0tO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhpcy5ib2FyZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAobCA9PT0gNSAmJiB0aGlzLnNoaXBzQXJyYXlbNF0uY29vcmRQYWlycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB3aGlsZSAobCAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5zaGlwc0FycmF5WzRdLmNvb3JkUGFpcnMucHVzaCh7IHgsIHkgfSk7XG4gICAgICAgICAgICB0aGlzLmJvYXJkW3hdW3ldID0gXCJIXCI7XG4gICAgICAgICAgICB4Kys7XG4gICAgICAgICAgICBsLS07XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aGlzLmJvYXJkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChkID09PSBcIlZcIikge1xuICAgICAgbGV0IHJvd1ZhbGlkID0gdHJ1ZTtcbiAgICAgIGZvciAobGV0IGogPSB5OyBqIDwgeSArIGw7IGorKykge1xuICAgICAgICBpZiAodGhpcy5ib2FyZFt4XVtqXSAhPT0gXCJvXCIgfHwgeSArIGwgPiAxMCkge1xuICAgICAgICAgIHJvd1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChyb3dWYWxpZCkge1xuICAgICAgICBpZiAobCA9PT0gMSAmJiB0aGlzLnNoaXBzQXJyYXlbMF0uY29vcmRQYWlycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB3aGlsZSAobCAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5zaGlwc0FycmF5WzBdLmNvb3JkUGFpcnMucHVzaCh7IHgsIHkgfSk7XG4gICAgICAgICAgICB0aGlzLmJvYXJkW3hdW3ldID0gXCJWXCI7XG4gICAgICAgICAgICB5Kys7XG4gICAgICAgICAgICBsLS07XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aGlzLmJvYXJkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsID09PSAyICYmIHRoaXMuc2hpcHNBcnJheVsxXS5jb29yZFBhaXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHdoaWxlIChsICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnNoaXBzQXJyYXlbMV0uY29vcmRQYWlycy5wdXNoKHsgeCwgeSB9KTtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbeF1beV0gPSBcIlZcIjtcbiAgICAgICAgICAgIHkrKztcbiAgICAgICAgICAgIGwtLTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGwgPT09IDMgJiYgdGhpcy5zaGlwc0FycmF5WzJdLmNvb3JkUGFpcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgd2hpbGUgKGwgIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2hpcHNBcnJheVsyXS5jb29yZFBhaXJzLnB1c2goeyB4LCB5IH0pO1xuICAgICAgICAgICAgdGhpcy5ib2FyZFt4XVt5XSA9IFwiVlwiO1xuICAgICAgICAgICAgeSsrO1xuICAgICAgICAgICAgbC0tO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhpcy5ib2FyZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAobCA9PT0gNCAmJiB0aGlzLnNoaXBzQXJyYXlbM10uY29vcmRQYWlycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB3aGlsZSAobCAhPT0gMCAmJiB4ICsgbCA8IDExICYmIHkgKyBsIDwgMTEpIHtcbiAgICAgICAgICAgIHRoaXMuc2hpcHNBcnJheVszXS5jb29yZFBhaXJzLnB1c2goeyB4LCB5IH0pO1xuICAgICAgICAgICAgdGhpcy5ib2FyZFt4XVt5XSA9IFwiVlwiO1xuICAgICAgICAgICAgeSsrO1xuICAgICAgICAgICAgbC0tO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhpcy5ib2FyZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAobCA9PT0gNSAmJiB0aGlzLnNoaXBzQXJyYXlbNF0uY29vcmRQYWlycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB3aGlsZSAobCAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5zaGlwc0FycmF5WzRdLmNvb3JkUGFpcnMucHVzaCh7IHgsIHkgfSk7XG4gICAgICAgICAgICB0aGlzLmJvYXJkW3hdW3ldID0gXCJWXCI7XG4gICAgICAgICAgICB5Kys7XG4gICAgICAgICAgICBsLS07XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aGlzLmJvYXJkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVjZWl2ZUF0dGFjayh4SGl0LCB5SGl0KSB7XG4gICAgLy8gaGFuZGxlIGZvciBwdXNoaW5nIGFsbCB0aGUgaGl0c1xuICAgIGxldCBhbGxvd2VkSGl0ID0gZmFsc2U7XG4gICAgbGV0IHNoaXBIaXQgPSBmYWxzZTsgLy8gY2hlY2tpbmcgZm9yIHNoaXAgc3BlY2lmaWMgaGl0XG4gICAgLy8gaSBzZWUgaWYgaXQgaGFzIGFuIGF0dGFjayBhbHJlYWR5XG4gICAgaWYgKHRoaXMuYm9hcmRbeEhpdF1beUhpdF0gIT09IFwieFwiICYmIHRoaXMuYm9hcmRbeEhpdF1beUhpdF0gIT09IFwicy14XCIpIHtcbiAgICAgIC8vaWYgaGl0IGlzIGVtcHR5XG4gICAgICBhbGxvd2VkSGl0ID0gdHJ1ZTtcbiAgICB9XG4gICAgLy8gaSBjaGVjayBpZiB0aGUgYWN0dWFsIGhpdCBpcyBhbHNvIGEgc2hpcCAtPiBtYXJrZWQgd2l0aCBzLXhcbiAgICB0aGlzLnNoaXBzQXJyYXkuZm9yRWFjaCgob25lU2hpcCkgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvbmVTaGlwLmNvb3JkUGFpcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIG9uZVNoaXAuY29vcmRQYWlyc1tpXS54ID09IHhIaXQgJiZcbiAgICAgICAgICBvbmVTaGlwLmNvb3JkUGFpcnNbaV0ueSA9PSB5SGl0XG4gICAgICAgICkge1xuICAgICAgICAgIHNoaXBIaXQgPSB0cnVlO1xuICAgICAgICAgIC8vIHllcyB0aGF0J3MgYSBob3QgYXNzIGhpdCBiYWJ5IVxuICAgICAgICAgIG9uZVNoaXAuc2hpcC5oaXQoKTtcbiAgICAgICAgICBvbmVTaGlwLnNoaXAuaXNTdW5rKCk7XG4gICAgICAgICAgdGhpcy5jaGVja0FsbFN1bmsoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChzaGlwSGl0ICYmIGFsbG93ZWRIaXQpIHtcbiAgICAgIHRoaXMuYm9hcmRbeEhpdF1beUhpdF0gPSBcInMteFwiO1xuICAgICAgdGhpcy5oaXRDb29yZHMuc2hpcEhpdHMucHVzaCh7IHhIaXQsIHlIaXQgfSk7XG4gICAgfVxuICAgIGlmICghc2hpcEhpdCAmJiBhbGxvd2VkSGl0KSB7XG4gICAgICAvL3N0b3JlIHRoZSBoaXQgcGFpclxuICAgICAgdGhpcy5ib2FyZFt4SGl0XVt5SGl0XSA9IFwieFwiO1xuICAgICAgdGhpcy5oaXRDb29yZHMubWlzc2VkSGl0cy5wdXNoKHsgeEhpdCwgeUhpdCB9KTtcbiAgICB9XG4gIH1cbiAgY2hlY2tBbGxTdW5rKCkge1xuICAgIGxldCBhbGxTdW5rID0gdHJ1ZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2hpcHNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IG9ubHlFeGlzdGluZ1NoaXBzID0gdGhpcy5zaGlwc0FycmF5W2ldLmNvb3JkUGFpcnMubGVuZ3RoO1xuICAgICAgaWYgKG9ubHlFeGlzdGluZ1NoaXBzID4gMCkge1xuICAgICAgICBpZiAodGhpcy5zaGlwc0FycmF5W2ldLnNoaXAuc3VuayA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBhbGxTdW5rID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGFsbFN1bmspIHtcbiAgICAgIHRoaXMuYWxsU3VuayA9IHRydWU7XG4gICAgfVxuICB9XG59XG5cbi8vR2FtZWJvYXJkcyBzaG91bGQga2VlcCB0cmFjayBvZiBtaXNzZWQgYXR0YWNrcyBzbyB0aGV5IGNhbiBkaXNwbGF5IHRoZW0gcHJvcGVybHkuXG4vLyBNYXJraW5nIG1pc3NlZCBoaXQgd2l0aCB4IGFuZCBzaGlwIGhpdCB3aXRoIHMteFxuXG4vL0dhbWVib2FyZHMgc2hvdWxkIGJlIGFibGUgdG8gcmVwb3J0IHdoZXRoZXIgb3Igbm90IGFsbCBvZiB0aGVpciBzaGlwcyBoYXZlIGJlZW4gc3Vuay5cbi8vRXZlcnl0aW1lIGkgaGl0IGEgc2hpcCwgaSB3aWxsIGNoZWNrIGlmIGl0J3Mgc3VuaywgYW5kIHRoZW4gaWYgYWxsIG9mIHRoZW0gYXJlIHN1bmtcbiIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vZ2FtYm9hcmRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5wbGF5ZXJCb2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgfVxuICBwbGFjZVBsYXllclNoaXAobmV3TCwgbmV3WCwgbmV3WSwgbmV3RCkge1xuICAgIHRoaXMucGxheWVyQm9hcmQucGxhY2VTaGlwKG5ld0wsIG5ld1gsIG5ld1ksIG5ld0QpO1xuICB9XG4gIHBsYXllclNob3QobXlUYXJnZXQsIG15WCwgbXlZKSB7XG4gICAgbXlUYXJnZXQucGxheWVyQm9hcmQucmVjZWl2ZUF0dGFjayhteVgsIG15WSk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXAge1xuICBjb25zdHJ1Y3RvcihsZW5ndGgsIG5hbWUsIGhpdHMgPSAwKSB7XG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmhpdHMgPSBoaXRzO1xuICAgIHRoaXMuc3VuayA9IGZhbHNlO1xuICB9XG4gIGhpdCgpIHtcbiAgICBpZiAodGhpcy5oaXRzID09PSB0aGlzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSByZXR1cm4gdGhpcy5oaXRzKys7XG4gIH1cbiAgaXNTdW5rKCkge1xuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gdGhpcy5oaXRzKSB7XG4gICAgICByZXR1cm4gKHRoaXMuc3VuayA9IHRydWUpO1xuICAgIH0gZWxzZSByZXR1cm4gKHRoaXMuc3VuayA9IGZhbHNlKTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IEFJIGZyb20gXCIuL2ZhY3Rvcmllcy9BSVwiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9mYWN0b3JpZXMvcGxheWVyXCI7XG5jb25zdCBjb21wdXRlckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb21wdXRlci1hcnJheVwiKTtcbmNvbnN0IHBsYXllckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItYXJyYXlcIik7XG5jb25zdCBwbGFjZVNoaXBzSW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxhY2Utc2hpcHMtaW5mb1wiKTtcbmNvbnN0IGNhblN0YXJ0R2FtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FuLXN0YXJ0XCIpO1xuY29uc3Qgd2lubmVyTGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbm5lclwiKTtcblxubGV0IHBsYXllciA9IG5ldyBQbGF5ZXIoXCJwbGF5ZXJcIik7XG5sZXQgY29tcHV0ZXIgPSBuZXcgQUkoXCJjb21wdXRlclwiKTtcbmxldCBzaGlwTGVuZ3RoID0gbnVsbDtcbmxldCBzaGlwRGlyZWN0aW9uID0gXCJWXCI7XG5cbmNvbnN0IGdhbWUgPSAoKSA9PiB7XG4gIHBsYXllciA9IG5ldyBQbGF5ZXIoXCJwbGF5ZXJcIik7XG4gIGNvbXB1dGVyID0gbmV3IEFJKFwiY29tcHV0ZXJcIik7XG4gIGdhbWVTdGFydCgpO1xufTtcblxuY29uc3QgZ2FtZVN0YXJ0ID0gKCkgPT4ge1xuICBjbGVhckJvYXJkKHBsYXllcik7XG4gIHJlbmRlckJvYXJkKHBsYXllcik7XG4gIGNsZWFyQm9hcmQoY29tcHV0ZXIpO1xuICByZW5kZXJCb2FyZChjb21wdXRlcik7XG59O1xuXG5jb25zdCByZW5kZXJCb2FyZCA9IChib2FyZE5hbWUpID0+IHtcbiAgbGV0IHRhcmdldEFycmF5ID0gYm9hcmROYW1lLnBsYXllckJvYXJkLmJvYXJkO1xuICBjb25zdCB0YXJnZXRBcHBlbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtib2FyZE5hbWUubmFtZX0tYXJyYXlgKTtcbiAgdGFyZ2V0QXJyYXkuZm9yRWFjaCgocm93LCByb3dJbmRleCkgPT4ge1xuICAgIGNvbnN0IG15Um93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBteVJvdy5jbGFzc0xpc3QuYWRkKFwicm93XCIpO1xuICAgIHJvdy5mb3JFYWNoKChjZWxsLCBjb2x1bW5JbmRleCkgPT4ge1xuICAgICAgY29uc3QgbXlDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIG15Q2VsbC5jbGFzc0xpc3QuYWRkKFwiY2VsbFwiKTtcbiAgICAgIG15Q2VsbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXhcIiwgcm93SW5kZXgpO1xuICAgICAgbXlDZWxsLnNldEF0dHJpYnV0ZShcImRhdGEteVwiLCBjb2x1bW5JbmRleCk7XG4gICAgICBsZXQgdGhpc0NlbGwgPSB0YXJnZXRBcnJheVtyb3dJbmRleF1bY29sdW1uSW5kZXhdO1xuICAgICAgaWYgKHRoaXNDZWxsID09PSBcInhcIikge1xuICAgICAgICBteUNlbGwuY2xhc3NMaXN0LmFkZChcInVuY2xpY2thYmxlXCIpO1xuICAgICAgICBteUNlbGwuY2xhc3NMaXN0LmFkZChcIm1pc3NlZC1oaXRcIik7XG4gICAgICAgIG15Q2VsbC5jbGFzc0xpc3QuYWRkKFwiZmEtcmVndWxhclwiKTtcbiAgICAgICAgbXlDZWxsLmNsYXNzTGlzdC5hZGQoXCJmYS14XCIpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzQ2VsbCA9PT0gXCJzLXhcIikge1xuICAgICAgICBteUNlbGwuY2xhc3NMaXN0LmFkZChcInVuY2xpY2thYmxlXCIpO1xuICAgICAgICBteUNlbGwuY2xhc3NMaXN0LmFkZChcImNvcnJlY3QtaGl0XCIpO1xuICAgICAgICBteUNlbGwuY2xhc3NMaXN0LmFkZChcImZhLXJlZ3VsYXJcIik7XG4gICAgICAgIG15Q2VsbC5jbGFzc0xpc3QuYWRkKFwiZmEteFwiKTtcbiAgICAgICAgbXlDZWxsLmNsYXNzTGlzdC5hZGQoXCJzaGlwLXN0eWxlXCIpO1xuICAgICAgfVxuICAgICAgbXlSb3cuYXBwZW5kQ2hpbGQobXlDZWxsKTtcbiAgICAgIGlmIChib2FyZE5hbWUubmFtZSA9PT0gXCJjb21wdXRlclwiKSB7XG4gICAgICAgIG15Q2VsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICBpZiAodGhpc0NlbGwgIT09IFwieFwiIHx8IHRoaXNDZWxsICE9PSBcInMteFwiKSB7XG4gICAgICAgICAgICBhdHRhY2tFdmVudChlKTtcbiAgICAgICAgICAgIHVwZGF0ZUJvYXJkKGJvYXJkTmFtZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChib2FyZE5hbWUubmFtZSA9PT0gXCJwbGF5ZXJcIikge1xuICAgICAgICBpZiAodGhpc0NlbGwgPT09IFwiSFwiKSB7XG4gICAgICAgICAgbXlDZWxsLmNsYXNzTGlzdC5hZGQoXCJzaGlwLXN0eWxlXCIpO1xuICAgICAgICAgIG15Q2VsbC5jbGFzc0xpc3QuYWRkKFwiaW52YWxpZC1wbGFjZW1lbnRcIik7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpc0NlbGwgPT09IFwiVlwiKSB7XG4gICAgICAgICAgbXlDZWxsLmNsYXNzTGlzdC5hZGQoXCJzaGlwLXN0eWxlXCIpO1xuICAgICAgICAgIG15Q2VsbC5jbGFzc0xpc3QuYWRkKFwiaW52YWxpZC1wbGFjZW1lbnRcIik7XG4gICAgICAgIH1cbiAgICAgICAgbXlDZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBwbGFjZVNoaXBFdmVudChlKTtcbiAgICAgICAgICB1cGRhdGVCb2FyZChib2FyZE5hbWUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0YXJnZXRBcHBlbmQuYXBwZW5kQ2hpbGQobXlSb3cpO1xuICB9KTtcbn07XG5cbi8vIENIRUNLSU5HIElGIEFMTCBTSElQUyBXRVJFIFBMQUNFRCBTTyBXRSBDQU4gU1RBUlQgQVRUQUNLSU5HXG5jb25zdCBjaGVja1BsYXllclNoaXBzID0gKCkgPT4ge1xuICBsZXQgdGFyZ2V0Q2hlY2sgPSBwbGF5ZXIucGxheWVyQm9hcmQuc2hpcHNBcnJheTtcbiAgbGV0IHJlc3BvbnNlID0gdGFyZ2V0Q2hlY2suZXZlcnkoKHNoaXApID0+IHNoaXAuY29vcmRQYWlycy5sZW5ndGggPiAwKTtcbiAgcmV0dXJuIHJlc3BvbnNlO1xufTtcblxuLy8gQVRUQUNLSU5HIEFOIEVORU1ZLCBCRUlORyBBVFRBQ0tFRCBCWSBDT01QVVRFUiwgQU5EIENIRUNLSU5HIEZPUiBXSU4gQ09ORElUSU9OXG5jb25zdCBhdHRhY2tFdmVudCA9IChlKSA9PiB7XG4gIGxldCB4ID0gcGFyc2VJbnQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS14XCIpKTtcbiAgbGV0IHkgPSBwYXJzZUludChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXlcIikpO1xuICBsZXQgY2FuQXR0YWNrID0gY2hlY2tQbGF5ZXJTaGlwcygpO1xuICBpZiAoY2FuQXR0YWNrKSB7XG4gICAgLy8gUExBWUVSIFRVUk5cbiAgICBwbGF5ZXIucGxheWVyU2hvdChjb21wdXRlciwgeCwgeSk7XG4gICAgaWYgKGNvbXB1dGVyLnBsYXllckJvYXJkLmFsbFN1bmspIHtcbiAgICAgIGVuZEdhbWUocGxheWVyKTtcbiAgICB9XG4gICAgLy8gQUkgVFVSTlxuICAgIGNvbXB1dGVyLmNvbXB1dGVyU2hvdChwbGF5ZXIpO1xuICAgIHVwZGF0ZUJvYXJkKHBsYXllcik7XG4gICAgaWYgKHBsYXllci5wbGF5ZXJCb2FyZC5hbGxTdW5rKSB7XG4gICAgICBlbmRHYW1lKGNvbXB1dGVyKTtcbiAgICB9XG4gIH1cbn07XG5cbi8vIEVORCBHQU1FIChNQVlCRSBBREQgXCJQTEFZIEFHQUlOP1wiKVxuY29uc3QgZW5kR2FtZSA9ICh3aW5uZXJOYW1lKSA9PiB7XG4gIGNvbXB1dGVyQm9hcmQuY2xhc3NMaXN0LmFkZChcInVuY2xpY2thYmxlXCIpO1xuICBjYW5TdGFydEdhbWUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB3aW5uZXJMYWJlbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICBpZiAod2lubmVyTmFtZS5uYW1lID09PSBcInBsYXllclwiKSB7XG4gICAgd2lubmVyTGFiZWwuaW5uZXJUZXh0ID0gYFlvdSBXb24hYDtcbiAgfSBlbHNlIHdpbm5lckxhYmVsLmlubmVyVGV4dCA9IGBZb3UgTG9zdCEgVHJ5IGFnYWluPyAtPmA7XG59O1xuXG4vLyBQTEFDSU5HIFBMQVlFUiBTSElQIE9OIENMSUNLXG5jb25zdCBwbGFjZVNoaXBFdmVudCA9IChlKSA9PiB7XG4gIGxldCB4ID0gcGFyc2VJbnQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS14XCIpKTtcbiAgbGV0IHkgPSBwYXJzZUludChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXlcIikpO1xuICBwbGF5ZXIucGxhY2VQbGF5ZXJTaGlwKHNoaXBMZW5ndGgsIHgsIHksIHNoaXBEaXJlY3Rpb24pO1xuICBsZXQgYWxsU2hpcHNQbGFjZWQgPSBjaGVja1BsYXllclNoaXBzKCk7XG4gIGlmIChhbGxTaGlwc1BsYWNlZCkge1xuICAgIHBsYWNlU2hpcHNJbmZvLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBjYW5TdGFydEdhbWUuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBjb21wdXRlckJvYXJkLmNsYXNzTGlzdC5yZW1vdmUoXCJ1bmNsaWNrYWJsZVwiKTtcbiAgICBwbGF5ZXJCb2FyZC5jbGFzc0xpc3QuYWRkKFwidW5jbGlja2FibGVcIik7XG4gICAgZGlyZWN0aW9uU2VsZWN0b3IuY2xhc3NMaXN0LmFkZChcInVuY2xpY2thYmxlXCIpO1xuICB9XG4gIHNoaXBMZW5ndGggPSBudWxsO1xufTtcblxuY29uc3QgY2xlYXJCb2FyZCA9IChib2FyZCkgPT4ge1xuICBjb25zdCB0YXJnZXREaXYgPSBib2FyZC5uYW1lO1xuICBjb25zdCB0YXJnZXRDbGVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RhcmdldERpdn0tYXJyYXlgKTtcbiAgdGFyZ2V0Q2xlYXIuaW5uZXJIVE1MID0gXCJcIjtcbn07XG5cbmNvbnN0IHVwZGF0ZUJvYXJkID0gKGJvYXJkKSA9PiB7XG4gIGNsZWFyQm9hcmQoYm9hcmQpO1xuICByZW5kZXJCb2FyZChib2FyZCk7XG59O1xuXG4vLyBORVcgR0FNRSBCVVRUT05cbmxldCBuZXdHYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctZ2FtZVwiKTtcbm5ld0dhbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgcGxhY2VTaGlwc0luZm8uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgY2FuU3RhcnRHYW1lLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgd2lubmVyTGFiZWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBwbGF5ZXJCb2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwidW5jbGlja2FibGVcIik7XG4gIGdhbWUoKTtcbn0pO1xuXG4vLyBET00gVE9HR0xFIFNISVBTIFNFTEVDVE9SU1xuY29uc3QgbGVuZ3RoU2VsZWN0b3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5sZW5ndGgtc2VsZWN0b3JcIik7XG5sZW5ndGhTZWxlY3RvcnMuZm9yRWFjaCgoc2VsZWN0b3IpID0+IHtcbiAgc2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgc2hpcExlbmd0aCA9IHBhcnNlSW50KGUudGFyZ2V0LmlkKTtcbiAgfSk7XG59KTtcblxuLy8gRE9NIFRPR0dMRSBESVJFQ1RJT05cbmNvbnN0IGRpcmVjdGlvblNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItZGlyZWN0aW9uXCIpO1xuZGlyZWN0aW9uU2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgaWYgKGRpcmVjdGlvblNlbGVjdG9yLmlubmVyVGV4dCA9PT0gXCJIXCIpIHtcbiAgICBzaGlwRGlyZWN0aW9uID0gXCJWXCI7XG4gICAgZGlyZWN0aW9uU2VsZWN0b3IuaW5uZXJUZXh0ID0gXCJWXCI7XG4gIH0gZWxzZSBpZiAoZGlyZWN0aW9uU2VsZWN0b3IuaW5uZXJUZXh0ID09PSBcIlZcIikge1xuICAgIHNoaXBEaXJlY3Rpb24gPSBcIkhcIjtcbiAgICBkaXJlY3Rpb25TZWxlY3Rvci5pbm5lclRleHQgPSBcIkhcIjtcbiAgfVxufSk7XG5cbmdhbWUoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==