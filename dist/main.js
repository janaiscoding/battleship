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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".gameboard {\n  display: grid;\n  grid-template-columns: repeat(10, 60px);\n  grid-template-rows: repeat(10, 60px);\n  width: 600px;\n  height: 600px;\n  border: solid 1px black;\n  display: flex;\n}\n.content {\n  display: flex;\n}\n.cell,\n.row {\n  width: 60px;\n  height: 60px;\n}\n.cell {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.player-ships,\n.player-control{ \n  display: flex;\n  gap: 50px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,uCAAuC;EACvC,oCAAoC;EACpC,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,aAAa;AACf;AACA;EACE,aAAa;AACf;AACA;;EAEE,WAAW;EACX,YAAY;AACd;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;AACA;;EAEE,aAAa;EACb,SAAS;AACX","sourcesContent":[".gameboard {\n  display: grid;\n  grid-template-columns: repeat(10, 60px);\n  grid-template-rows: repeat(10, 60px);\n  width: 600px;\n  height: 600px;\n  border: solid 1px black;\n  display: flex;\n}\n.content {\n  display: flex;\n}\n.cell,\n.row {\n  width: 60px;\n  height: 60px;\n}\n.cell {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.player-ships,\n.player-control{ \n  display: flex;\n  gap: 50px;\n}\n"],"sourceRoot":""}]);
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
    targetArray.forEach((curentShip) => {
      while (curentShip.coordPairs.length === 0) {
        let randomDirection = this.getRandomDirection();
        let ranX = this.getRandomX();
        let ranY = this.getRandomY();
        let pushLength = curentShip.ship.length;
        this.playerBoard.placeShip(pushLength, ranX, ranY, randomDirection);
      }
    });
  }
  receiveShotFromPlayer(myTarget, myX, myY) {
    myTarget.playerBoard.receiveAttack(myX, myY);
  }

  shootEnemyRandom(myTarget) {
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

  receiveShotFromAI() {
    let hitX = this.getRandomNum();
    let hitY = this.getRandomNum();
    this.playerBoard.receiveAttack(hitX, hitY);
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
        ship: new _ship__WEBPACK_IMPORTED_MODULE_0__["default"](5, "Carrier"),
        coordPairs: [],
      },
      {
        ship: new _ship__WEBPACK_IMPORTED_MODULE_0__["default"](4, "Battleship"),
        coordPairs: [],
      },
      {
        ship: new _ship__WEBPACK_IMPORTED_MODULE_0__["default"](3, "Destroyer"),
        coordPairs: [],
      },
      {
        ship: new _ship__WEBPACK_IMPORTED_MODULE_0__["default"](2, "Submarine"),
        coordPairs: [],
      },
      {
        ship: new _ship__WEBPACK_IMPORTED_MODULE_0__["default"](1, "Patrol-boat"),
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
    if (d === "V") {
      let columnValid = true;
      for (let i = x; i < x + l; i++) {
        if (this.board[i][y] !== "o" || x + l > 10) {
          columnValid = false;
          break;
        }
      }
      if (columnValid) {
        if (l === 5 && this.shipsArray[0].coordPairs.length === 0) {
          while (l !== 0) {
            this.shipsArray[0].coordPairs.push({ x, y });
            this.board[x][y] = "V";
            x++;
            l--;
          }
          return this.board;
        }
        if (l === 4 && this.shipsArray[1].coordPairs.length === 0) {
          while (l !== 0) {
            this.shipsArray[1].coordPairs.push({ x, y });
            this.board[x][y] = "V";
            x++;
            l--;
          }
          return this.board;
        }
        if (l === 3 && this.shipsArray[2].coordPairs.length === 0) {
          while (l !== 0) {
            this.shipsArray[2].coordPairs.push({ x, y });
            this.board[x][y] = "V";
            x++;
            l--;
          }
          return this.board;
        }
        if (l === 2 && this.shipsArray[3].coordPairs.length === 0) {
          while (l !== 0) {
            this.shipsArray[3].coordPairs.push({ x, y });
            this.board[x][y] = "V";
            x++;
            l--;
          }
          return this.board;
        }
        if (l === 1 && this.shipsArray[4].coordPairs.length === 0) {
          while (l !== 0) {
            this.shipsArray[4].coordPairs.push({ x, y });
            this.board[x][y] = "V";
            x++;
            l--;
          }
          return this.board;
        }
      }
    } else if (d === "H") {
      let rowValid = true;
      for (let j = y; j < y + l; j++) {
        if (this.board[x][j] !== "o" || y + l > 10) {
          rowValid = false;
          break;
        }
      }
      if (rowValid) {
        if (l === 5 && this.shipsArray[0].coordPairs.length === 0) {
          while (l !== 0) {
            this.shipsArray[0].coordPairs.push({ x, y });
            this.board[x][y] = "H";
            y++;
            l--;
          }
          return this.board;
        }
        if (l === 4 && this.shipsArray[1].coordPairs.length === 0) {
          while (l !== 0) {
            this.shipsArray[1].coordPairs.push({ x, y });
            this.board[x][y] = "H";
            y++;
            l--;
          }
          return this.board;
        }
        if (l === 3 && this.shipsArray[2].coordPairs.length === 0) {
          while (l !== 0) {
            this.shipsArray[2].coordPairs.push({ x, y });
            this.board[x][y] = "H";
            y++;
            l--;
          }
          return this.board;
        }
        if (l === 2 && this.shipsArray[3].coordPairs.length === 0) {
          while (l !== 0 && x + l < 11 && y + l < 11) {
            this.shipsArray[3].coordPairs.push({ x, y });
            this.board[x][y] = "H";
            y++;
            l--;
          }
          return this.board;
        }
        if (l === 1 && this.shipsArray[4].coordPairs.length === 0) {
          while (l !== 0) {
            this.shipsArray[4].coordPairs.push({ x, y });
            this.board[x][y] = "H";
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
  // support for receiving random attack
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
  receiveShotFromAI() {
    let hitX = this.getRandomNum();
    let hitY = this.getRandomNum();
    this.playerBoard.receiveAttack(hitX, hitY);
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
//1. The game loop should set up a new game by creating Players and Gameboards.



let turn = "pT";

let shipLength = null;
let shipDirection = "H";

function game() {
  let player = new _factories_AI__WEBPACK_IMPORTED_MODULE_1__["default"]("player");
  let computer = new _factories_AI__WEBPACK_IMPORTED_MODULE_1__["default"]("computer");
  refreshGame(player, computer);
  renderAllBoards(player, computer);
  let isGameWon = checkIfWinner(player, computer);
  while (!isGameWon) {
    if (turn === "pT") {
      player.shootEnemyRandom(computer);
      swapTurn("pT");
    } else if (turn === "cT") {
      computer.shootEnemyRandom(player);
      swapTurn("cT");
    }
    refreshGame(player, computer);
    renderAllBoards(player, computer);
    isGameWon = checkIfWinner(player, computer);
  }
}

// BOARDING AROUND HERE
const renderBoard = (target, handleCellClicks) => {
  let targetArray = target.playerBoard.board;
  let targetString = target.name;
  const targetAppend = document.querySelector(`.${targetString}-array`);
  targetArray.forEach((row, rowIndex) => {
    const createdRow = document.createElement("div");
    createdRow.classList.add("row");
    row.forEach((cell, columnIndex) => {
      const createdCell = document.createElement("div");
      createdCell.innerText = cell;
      createdCell.classList.add("cell");
      createdCell.addEventListener("click", () => {
        let checkStatus = checkUserShips(target);
        if (checkStatus) {
          //game can start
        } else {
          handleCellClicks(target, rowIndex, columnIndex); // keep placing ships
        }
      });
      createdRow.appendChild(createdCell);
    });
    targetAppend.appendChild(createdRow);
  });
};

// Condition for knowing when i can start shooting
const checkUserShips = (target) => {
  let targetCheck = target.playerBoard.shipsArray;
  let response = targetCheck.every((ship) => ship.coordPairs.length > 0);
  return response;
};

// swap turns
const swapTurn = (myCurrent) => {
  if (myCurrent === "pT") {
    turn = "cT";
  } else if (myCurrent === "cT") {
    turn = "pT";
  }
  return turn;
};

// condition for ending the game -- if player will hit, it checks the enemy board and vice versa
const checkIfWinner = (player, computer) => {
  let gameOver = false;
  let playerHasLost = player.playerBoard.allSunk;
  let computerHasLost = computer.playerBoard.allSunk;
  if (playerHasLost && !computerHasLost) {
    gameOver = true;
    console.log("computer has won");
  } else if (computerHasLost && !playerHasLost) {
    gameOver = true;
    console.log("player has won");
  }
  return gameOver;
};

// handler for placing ships
const handleCellClicks = (target, rowIndex, columnIndex) => {
  if (shipLength !== null) {
    target.placePlayerShip(shipLength, rowIndex, columnIndex, shipDirection);
    clearBoard(target);
    renderBoard(target, handleCellClicks);
    shipLength = null;
  }
};

// calling the board render twice on each gamestart
const renderAllBoards = (target1, target2) => {
  renderBoard(target1, handleCellClicks);
  renderBoard(target2, handleCellClicks);
};

const clearBoard = (target) => {
  let targetString = target.name;
  const targetClear = document.querySelector(`.${targetString}-array`);
  targetClear.innerHTML = ""; //it will clear the dom
};

const refreshGame = (target1, target2) => {
  clearBoard(target1);
  clearBoard(target2);
};

game();

//new game
let newGame = document.querySelector(".new-game");
newGame.addEventListener("click", (e) => {
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
const playerDirection = document.querySelector(".player-direction");
playerDirection.addEventListener("click", () => {
  if (playerDirection.innerText === "H") {
    shipDirection = "V";
    playerDirection.innerText = "V";
  } else if (playerDirection.innerText === "V") {
    shipDirection = "H";
    playerDirection.innerText = "H";
  }
  console.log(shipDirection);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQSxrREFBa0QsYUFBYTtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLDJEQUEyRDtBQUMzRDtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpREFBaUQsYUFBYTtBQUM5RCw4QkFBOEI7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ZhY3Rvcmllcy9BSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ZhY3Rvcmllcy9nYW1ib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ZhY3Rvcmllcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mYWN0b3JpZXMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmdhbWVib2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDYwcHgpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDYwcHgpO1xcbiAgd2lkdGg6IDYwMHB4O1xcbiAgaGVpZ2h0OiA2MDBweDtcXG4gIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLmNlbGwsXFxuLnJvdyB7XFxuICB3aWR0aDogNjBweDtcXG4gIGhlaWdodDogNjBweDtcXG59XFxuLmNlbGwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLnBsYXllci1zaGlwcyxcXG4ucGxheWVyLWNvbnRyb2x7IFxcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNTBweDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYix1Q0FBdUM7RUFDdkMsb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7O0VBRUUsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7QUFDQTs7RUFFRSxhQUFhO0VBQ2IsU0FBUztBQUNYXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5nYW1lYm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCA2MHB4KTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCA2MHB4KTtcXG4gIHdpZHRoOiA2MDBweDtcXG4gIGhlaWdodDogNjAwcHg7XFxuICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5jZWxsLFxcbi5yb3cge1xcbiAgd2lkdGg6IDYwcHg7XFxuICBoZWlnaHQ6IDYwcHg7XFxufVxcbi5jZWxsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5wbGF5ZXItc2hpcHMsXFxuLnBsYXllci1jb250cm9seyBcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDUwcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuL2dhbWJvYXJkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFJIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5wbGF5ZXJCb2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICB0aGlzLkFJUGFzdFNob3RzID0gW107XG4gICAgdGhpcy5wbGFjZVJhbmRvbVNoaXBzKCk7XG4gIH1cbiAgZ2V0UmFuZG9tWCgpIHtcbiAgICBsZXQgeFJhbiA9IHRoaXMuZ2V0UmFuZG9tTnVtKCk7XG4gICAgcmV0dXJuIHhSYW47XG4gIH1cbiAgZ2V0UmFuZG9tWSgpIHtcbiAgICBsZXQgeVJhbiA9IHRoaXMuZ2V0UmFuZG9tTnVtKCk7XG4gICAgcmV0dXJuIHlSYW47XG4gIH1cbiAgZ2V0UmFuZG9tTnVtKCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gIH1cbiAgZ2V0UmFuZG9tRGlyZWN0aW9uKCkge1xuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpIDwgMC41ID8gXCJWXCIgOiBcIkhcIjtcbiAgfVxuICBwbGFjZVJhbmRvbVNoaXBzKCkge1xuICAgIGxldCB0YXJnZXRBcnJheSA9IHRoaXMucGxheWVyQm9hcmQuc2hpcHNBcnJheTtcbiAgICB0YXJnZXRBcnJheS5mb3JFYWNoKChjdXJlbnRTaGlwKSA9PiB7XG4gICAgICB3aGlsZSAoY3VyZW50U2hpcC5jb29yZFBhaXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBsZXQgcmFuZG9tRGlyZWN0aW9uID0gdGhpcy5nZXRSYW5kb21EaXJlY3Rpb24oKTtcbiAgICAgICAgbGV0IHJhblggPSB0aGlzLmdldFJhbmRvbVgoKTtcbiAgICAgICAgbGV0IHJhblkgPSB0aGlzLmdldFJhbmRvbVkoKTtcbiAgICAgICAgbGV0IHB1c2hMZW5ndGggPSBjdXJlbnRTaGlwLnNoaXAubGVuZ3RoO1xuICAgICAgICB0aGlzLnBsYXllckJvYXJkLnBsYWNlU2hpcChwdXNoTGVuZ3RoLCByYW5YLCByYW5ZLCByYW5kb21EaXJlY3Rpb24pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHJlY2VpdmVTaG90RnJvbVBsYXllcihteVRhcmdldCwgbXlYLCBteVkpIHtcbiAgICBteVRhcmdldC5wbGF5ZXJCb2FyZC5yZWNlaXZlQXR0YWNrKG15WCwgbXlZKTtcbiAgfVxuXG4gIHNob290RW5lbXlSYW5kb20obXlUYXJnZXQpIHtcbiAgICBsZXQgc2hvdEV4aXN0cyA9IGZhbHNlO1xuICAgIGxldCBoaXRYID0gdGhpcy5nZXRSYW5kb21OdW0oKTtcbiAgICBsZXQgaGl0WSA9IHRoaXMuZ2V0UmFuZG9tTnVtKCk7XG4gICAgbGV0IHBhaXJPZlNob3QgPSBbaGl0WCwgaGl0WV07XG4gICAgaWYgKHRoaXMuQUlQYXN0U2hvdHMuaW5jbHVkZXMocGFpck9mU2hvdCkpIHtcbiAgICAgIHNob3RFeGlzdHMgPSB0cnVlO1xuICAgICAgaGl0WCA9IHRoaXMuZ2V0UmFuZG9tTnVtKCk7XG4gICAgICBoaXRZID0gdGhpcy5nZXRSYW5kb21OdW0oKTtcbiAgICAgIHBhaXJPZlNob3QgPSBbaGl0WCwgaGl0WV07XG4gICAgfVxuICAgIGlmICghc2hvdEV4aXN0cykge1xuICAgICAgbXlUYXJnZXQucGxheWVyQm9hcmQucmVjZWl2ZUF0dGFjayhoaXRYLCBoaXRZKTtcbiAgICAgIHRoaXMuQUlQYXN0U2hvdHMucHVzaChwYWlyT2ZTaG90KTtcbiAgICB9XG4gIH1cblxuICByZWNlaXZlU2hvdEZyb21BSSgpIHtcbiAgICBsZXQgaGl0WCA9IHRoaXMuZ2V0UmFuZG9tTnVtKCk7XG4gICAgbGV0IGhpdFkgPSB0aGlzLmdldFJhbmRvbU51bSgpO1xuICAgIHRoaXMucGxheWVyQm9hcmQucmVjZWl2ZUF0dGFjayhoaXRYLCBoaXRZKTtcbiAgfVxufVxuIiwiaW1wb3J0IFNoaXAgZnJvbSBcIi4vc2hpcFwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZWJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5ib2FyZCA9IHRoaXMuY3JlYXRlQm9hcmQoMTApOyAvL2RlZmF1bHQgYm9hcmRcbiAgICB0aGlzLnNoaXBzQXJyYXkgPSBbXG4gICAgICB7XG4gICAgICAgIHNoaXA6IG5ldyBTaGlwKDUsIFwiQ2FycmllclwiKSxcbiAgICAgICAgY29vcmRQYWlyczogW10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzaGlwOiBuZXcgU2hpcCg0LCBcIkJhdHRsZXNoaXBcIiksXG4gICAgICAgIGNvb3JkUGFpcnM6IFtdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2hpcDogbmV3IFNoaXAoMywgXCJEZXN0cm95ZXJcIiksXG4gICAgICAgIGNvb3JkUGFpcnM6IFtdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2hpcDogbmV3IFNoaXAoMiwgXCJTdWJtYXJpbmVcIiksXG4gICAgICAgIGNvb3JkUGFpcnM6IFtdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2hpcDogbmV3IFNoaXAoMSwgXCJQYXRyb2wtYm9hdFwiKSxcbiAgICAgICAgY29vcmRQYWlyczogW10sXG4gICAgICB9LFxuICAgIF07IC8vIGFycmF5IHdpbGwgYmUgZmlsbGVkIHdpdGggZWFjaCBzaGlwIGFuZCBpdCdzIGNvb3Jkb25hdGVzXG4gICAgdGhpcy5oaXRDb29yZHMgPSB7XG4gICAgICBtaXNzZWRIaXRzOiBbXSxcbiAgICAgIHNoaXBIaXRzOiBbXSxcbiAgICB9O1xuICAgIHRoaXMuYWxsU3VuayA9IGZhbHNlO1xuICB9XG4gIGNyZWF0ZUJvYXJkKHNpemUpIHtcbiAgICBsZXQgYm9hcmQgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgYm9hcmRbaV0gPSBbXTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2l6ZTsgaisrKSB7XG4gICAgICAgIGJvYXJkW2ldW2pdID0gXCJvXCI7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBib2FyZDtcbiAgfVxuICBwbGFjZVNoaXAobCwgeCwgeSwgZCkge1xuICAgIGlmIChkID09PSBcIlZcIikge1xuICAgICAgbGV0IGNvbHVtblZhbGlkID0gdHJ1ZTtcbiAgICAgIGZvciAobGV0IGkgPSB4OyBpIDwgeCArIGw7IGkrKykge1xuICAgICAgICBpZiAodGhpcy5ib2FyZFtpXVt5XSAhPT0gXCJvXCIgfHwgeCArIGwgPiAxMCkge1xuICAgICAgICAgIGNvbHVtblZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChjb2x1bW5WYWxpZCkge1xuICAgICAgICBpZiAobCA9PT0gNSAmJiB0aGlzLnNoaXBzQXJyYXlbMF0uY29vcmRQYWlycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB3aGlsZSAobCAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5zaGlwc0FycmF5WzBdLmNvb3JkUGFpcnMucHVzaCh7IHgsIHkgfSk7XG4gICAgICAgICAgICB0aGlzLmJvYXJkW3hdW3ldID0gXCJWXCI7XG4gICAgICAgICAgICB4Kys7XG4gICAgICAgICAgICBsLS07XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aGlzLmJvYXJkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsID09PSA0ICYmIHRoaXMuc2hpcHNBcnJheVsxXS5jb29yZFBhaXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHdoaWxlIChsICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnNoaXBzQXJyYXlbMV0uY29vcmRQYWlycy5wdXNoKHsgeCwgeSB9KTtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbeF1beV0gPSBcIlZcIjtcbiAgICAgICAgICAgIHgrKztcbiAgICAgICAgICAgIGwtLTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGwgPT09IDMgJiYgdGhpcy5zaGlwc0FycmF5WzJdLmNvb3JkUGFpcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgd2hpbGUgKGwgIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2hpcHNBcnJheVsyXS5jb29yZFBhaXJzLnB1c2goeyB4LCB5IH0pO1xuICAgICAgICAgICAgdGhpcy5ib2FyZFt4XVt5XSA9IFwiVlwiO1xuICAgICAgICAgICAgeCsrO1xuICAgICAgICAgICAgbC0tO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhpcy5ib2FyZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAobCA9PT0gMiAmJiB0aGlzLnNoaXBzQXJyYXlbM10uY29vcmRQYWlycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB3aGlsZSAobCAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5zaGlwc0FycmF5WzNdLmNvb3JkUGFpcnMucHVzaCh7IHgsIHkgfSk7XG4gICAgICAgICAgICB0aGlzLmJvYXJkW3hdW3ldID0gXCJWXCI7XG4gICAgICAgICAgICB4Kys7XG4gICAgICAgICAgICBsLS07XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aGlzLmJvYXJkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsID09PSAxICYmIHRoaXMuc2hpcHNBcnJheVs0XS5jb29yZFBhaXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHdoaWxlIChsICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnNoaXBzQXJyYXlbNF0uY29vcmRQYWlycy5wdXNoKHsgeCwgeSB9KTtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbeF1beV0gPSBcIlZcIjtcbiAgICAgICAgICAgIHgrKztcbiAgICAgICAgICAgIGwtLTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGQgPT09IFwiSFwiKSB7XG4gICAgICBsZXQgcm93VmFsaWQgPSB0cnVlO1xuICAgICAgZm9yIChsZXQgaiA9IHk7IGogPCB5ICsgbDsgaisrKSB7XG4gICAgICAgIGlmICh0aGlzLmJvYXJkW3hdW2pdICE9PSBcIm9cIiB8fCB5ICsgbCA+IDEwKSB7XG4gICAgICAgICAgcm93VmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHJvd1ZhbGlkKSB7XG4gICAgICAgIGlmIChsID09PSA1ICYmIHRoaXMuc2hpcHNBcnJheVswXS5jb29yZFBhaXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHdoaWxlIChsICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnNoaXBzQXJyYXlbMF0uY29vcmRQYWlycy5wdXNoKHsgeCwgeSB9KTtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbeF1beV0gPSBcIkhcIjtcbiAgICAgICAgICAgIHkrKztcbiAgICAgICAgICAgIGwtLTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGwgPT09IDQgJiYgdGhpcy5zaGlwc0FycmF5WzFdLmNvb3JkUGFpcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgd2hpbGUgKGwgIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2hpcHNBcnJheVsxXS5jb29yZFBhaXJzLnB1c2goeyB4LCB5IH0pO1xuICAgICAgICAgICAgdGhpcy5ib2FyZFt4XVt5XSA9IFwiSFwiO1xuICAgICAgICAgICAgeSsrO1xuICAgICAgICAgICAgbC0tO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhpcy5ib2FyZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAobCA9PT0gMyAmJiB0aGlzLnNoaXBzQXJyYXlbMl0uY29vcmRQYWlycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB3aGlsZSAobCAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5zaGlwc0FycmF5WzJdLmNvb3JkUGFpcnMucHVzaCh7IHgsIHkgfSk7XG4gICAgICAgICAgICB0aGlzLmJvYXJkW3hdW3ldID0gXCJIXCI7XG4gICAgICAgICAgICB5Kys7XG4gICAgICAgICAgICBsLS07XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aGlzLmJvYXJkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsID09PSAyICYmIHRoaXMuc2hpcHNBcnJheVszXS5jb29yZFBhaXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHdoaWxlIChsICE9PSAwICYmIHggKyBsIDwgMTEgJiYgeSArIGwgPCAxMSkge1xuICAgICAgICAgICAgdGhpcy5zaGlwc0FycmF5WzNdLmNvb3JkUGFpcnMucHVzaCh7IHgsIHkgfSk7XG4gICAgICAgICAgICB0aGlzLmJvYXJkW3hdW3ldID0gXCJIXCI7XG4gICAgICAgICAgICB5Kys7XG4gICAgICAgICAgICBsLS07XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aGlzLmJvYXJkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsID09PSAxICYmIHRoaXMuc2hpcHNBcnJheVs0XS5jb29yZFBhaXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHdoaWxlIChsICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnNoaXBzQXJyYXlbNF0uY29vcmRQYWlycy5wdXNoKHsgeCwgeSB9KTtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbeF1beV0gPSBcIkhcIjtcbiAgICAgICAgICAgIHkrKztcbiAgICAgICAgICAgIGwtLTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZWNlaXZlQXR0YWNrKHhIaXQsIHlIaXQpIHtcbiAgICAvLyBoYW5kbGUgZm9yIHB1c2hpbmcgYWxsIHRoZSBoaXRzXG4gICAgbGV0IGFsbG93ZWRIaXQgPSBmYWxzZTtcbiAgICBsZXQgc2hpcEhpdCA9IGZhbHNlOyAvLyBjaGVja2luZyBmb3Igc2hpcCBzcGVjaWZpYyBoaXRcbiAgICAvLyBpIHNlZSBpZiBpdCBoYXMgYW4gYXR0YWNrIGFscmVhZHlcbiAgICBpZiAodGhpcy5ib2FyZFt4SGl0XVt5SGl0XSAhPT0gXCJ4XCIgJiYgdGhpcy5ib2FyZFt4SGl0XVt5SGl0XSAhPT0gXCJzLXhcIikge1xuICAgICAgLy9pZiBoaXQgaXMgZW1wdHlcbiAgICAgIGFsbG93ZWRIaXQgPSB0cnVlO1xuICAgIH1cbiAgICAvLyBpIGNoZWNrIGlmIHRoZSBhY3R1YWwgaGl0IGlzIGFsc28gYSBzaGlwIC0+IG1hcmtlZCB3aXRoIHMteFxuICAgIHRoaXMuc2hpcHNBcnJheS5mb3JFYWNoKChvbmVTaGlwKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9uZVNoaXAuY29vcmRQYWlycy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgb25lU2hpcC5jb29yZFBhaXJzW2ldLnggPT0geEhpdCAmJlxuICAgICAgICAgIG9uZVNoaXAuY29vcmRQYWlyc1tpXS55ID09IHlIaXRcbiAgICAgICAgKSB7XG4gICAgICAgICAgc2hpcEhpdCA9IHRydWU7XG4gICAgICAgICAgLy8geWVzIHRoYXQncyBhIGhvdCBhc3MgaGl0IGJhYnkhXG4gICAgICAgICAgb25lU2hpcC5zaGlwLmhpdCgpO1xuICAgICAgICAgIG9uZVNoaXAuc2hpcC5pc1N1bmsoKTtcbiAgICAgICAgICB0aGlzLmNoZWNrQWxsU3VuaygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHNoaXBIaXQgJiYgYWxsb3dlZEhpdCkge1xuICAgICAgdGhpcy5ib2FyZFt4SGl0XVt5SGl0XSA9IFwicy14XCI7XG4gICAgICB0aGlzLmhpdENvb3Jkcy5zaGlwSGl0cy5wdXNoKHsgeEhpdCwgeUhpdCB9KTtcbiAgICB9XG4gICAgaWYgKCFzaGlwSGl0ICYmIGFsbG93ZWRIaXQpIHtcbiAgICAgIC8vc3RvcmUgdGhlIGhpdCBwYWlyXG4gICAgICB0aGlzLmJvYXJkW3hIaXRdW3lIaXRdID0gXCJ4XCI7XG4gICAgICB0aGlzLmhpdENvb3Jkcy5taXNzZWRIaXRzLnB1c2goeyB4SGl0LCB5SGl0IH0pO1xuICAgIH1cbiAgfVxuICBjaGVja0FsbFN1bmsoKSB7XG4gICAgbGV0IGFsbFN1bmsgPSB0cnVlO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaGlwc0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgb25seUV4aXN0aW5nU2hpcHMgPSB0aGlzLnNoaXBzQXJyYXlbaV0uY29vcmRQYWlycy5sZW5ndGg7XG4gICAgICBpZiAob25seUV4aXN0aW5nU2hpcHMgPiAwKSB7XG4gICAgICAgIGlmICh0aGlzLnNoaXBzQXJyYXlbaV0uc2hpcC5zdW5rID09PSBmYWxzZSkge1xuICAgICAgICAgIGFsbFN1bmsgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoYWxsU3Vuaykge1xuICAgICAgdGhpcy5hbGxTdW5rID0gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cblxuLy9HYW1lYm9hcmRzIHNob3VsZCBrZWVwIHRyYWNrIG9mIG1pc3NlZCBhdHRhY2tzIHNvIHRoZXkgY2FuIGRpc3BsYXkgdGhlbSBwcm9wZXJseS5cbi8vIE1hcmtpbmcgbWlzc2VkIGhpdCB3aXRoIHggYW5kIHNoaXAgaGl0IHdpdGggcy14XG5cbi8vR2FtZWJvYXJkcyBzaG91bGQgYmUgYWJsZSB0byByZXBvcnQgd2hldGhlciBvciBub3QgYWxsIG9mIHRoZWlyIHNoaXBzIGhhdmUgYmVlbiBzdW5rLlxuLy9FdmVyeXRpbWUgaSBoaXQgYSBzaGlwLCBpIHdpbGwgY2hlY2sgaWYgaXQncyBzdW5rLCBhbmQgdGhlbiBpZiBhbGwgb2YgdGhlbSBhcmUgc3Vua1xuIiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi9nYW1ib2FyZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnBsYXllckJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICB9XG4gIHBsYWNlUGxheWVyU2hpcChuZXdMLCBuZXdYLCBuZXdZLCBuZXdEKSB7XG4gICAgdGhpcy5wbGF5ZXJCb2FyZC5wbGFjZVNoaXAobmV3TCwgbmV3WCwgbmV3WSwgbmV3RCk7XG4gIH1cbiAgLy8gc3VwcG9ydCBmb3IgcmVjZWl2aW5nIHJhbmRvbSBhdHRhY2tcbiAgZ2V0UmFuZG9tWCgpIHtcbiAgICBsZXQgeFJhbiA9IHRoaXMuZ2V0UmFuZG9tTnVtKCk7XG4gICAgcmV0dXJuIHhSYW47XG4gIH1cbiAgZ2V0UmFuZG9tWSgpIHtcbiAgICBsZXQgeVJhbiA9IHRoaXMuZ2V0UmFuZG9tTnVtKCk7XG4gICAgcmV0dXJuIHlSYW47XG4gIH1cbiAgZ2V0UmFuZG9tTnVtKCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gIH1cbiAgcmVjZWl2ZVNob3RGcm9tQUkoKSB7XG4gICAgbGV0IGhpdFggPSB0aGlzLmdldFJhbmRvbU51bSgpO1xuICAgIGxldCBoaXRZID0gdGhpcy5nZXRSYW5kb21OdW0oKTtcbiAgICB0aGlzLnBsYXllckJvYXJkLnJlY2VpdmVBdHRhY2soaGl0WCwgaGl0WSk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXAge1xuICBjb25zdHJ1Y3RvcihsZW5ndGgsIG5hbWUsIGhpdHMgPSAwKSB7XG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmhpdHMgPSBoaXRzO1xuICAgIHRoaXMuc3VuayA9IGZhbHNlO1xuICB9XG4gIGhpdCgpIHtcbiAgICBpZiAodGhpcy5oaXRzID09PSB0aGlzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSByZXR1cm4gdGhpcy5oaXRzKys7XG4gIH1cbiAgaXNTdW5rKCkge1xuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gdGhpcy5oaXRzKSB7XG4gICAgICByZXR1cm4gKHRoaXMuc3VuayA9IHRydWUpO1xuICAgIH0gZWxzZSByZXR1cm4gKHRoaXMuc3VuayA9IGZhbHNlKTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy8xLiBUaGUgZ2FtZSBsb29wIHNob3VsZCBzZXQgdXAgYSBuZXcgZ2FtZSBieSBjcmVhdGluZyBQbGF5ZXJzIGFuZCBHYW1lYm9hcmRzLlxuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBBSSBmcm9tIFwiLi9mYWN0b3JpZXMvQUlcIjtcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vZmFjdG9yaWVzL3BsYXllclwiO1xubGV0IHR1cm4gPSBcInBUXCI7XG5cbmxldCBzaGlwTGVuZ3RoID0gbnVsbDtcbmxldCBzaGlwRGlyZWN0aW9uID0gXCJIXCI7XG5cbmZ1bmN0aW9uIGdhbWUoKSB7XG4gIGxldCBwbGF5ZXIgPSBuZXcgQUkoXCJwbGF5ZXJcIik7XG4gIGxldCBjb21wdXRlciA9IG5ldyBBSShcImNvbXB1dGVyXCIpO1xuICByZWZyZXNoR2FtZShwbGF5ZXIsIGNvbXB1dGVyKTtcbiAgcmVuZGVyQWxsQm9hcmRzKHBsYXllciwgY29tcHV0ZXIpO1xuICBsZXQgaXNHYW1lV29uID0gY2hlY2tJZldpbm5lcihwbGF5ZXIsIGNvbXB1dGVyKTtcbiAgd2hpbGUgKCFpc0dhbWVXb24pIHtcbiAgICBpZiAodHVybiA9PT0gXCJwVFwiKSB7XG4gICAgICBwbGF5ZXIuc2hvb3RFbmVteVJhbmRvbShjb21wdXRlcik7XG4gICAgICBzd2FwVHVybihcInBUXCIpO1xuICAgIH0gZWxzZSBpZiAodHVybiA9PT0gXCJjVFwiKSB7XG4gICAgICBjb21wdXRlci5zaG9vdEVuZW15UmFuZG9tKHBsYXllcik7XG4gICAgICBzd2FwVHVybihcImNUXCIpO1xuICAgIH1cbiAgICByZWZyZXNoR2FtZShwbGF5ZXIsIGNvbXB1dGVyKTtcbiAgICByZW5kZXJBbGxCb2FyZHMocGxheWVyLCBjb21wdXRlcik7XG4gICAgaXNHYW1lV29uID0gY2hlY2tJZldpbm5lcihwbGF5ZXIsIGNvbXB1dGVyKTtcbiAgfVxufVxuXG4vLyBCT0FSRElORyBBUk9VTkQgSEVSRVxuY29uc3QgcmVuZGVyQm9hcmQgPSAodGFyZ2V0LCBoYW5kbGVDZWxsQ2xpY2tzKSA9PiB7XG4gIGxldCB0YXJnZXRBcnJheSA9IHRhcmdldC5wbGF5ZXJCb2FyZC5ib2FyZDtcbiAgbGV0IHRhcmdldFN0cmluZyA9IHRhcmdldC5uYW1lO1xuICBjb25zdCB0YXJnZXRBcHBlbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0YXJnZXRTdHJpbmd9LWFycmF5YCk7XG4gIHRhcmdldEFycmF5LmZvckVhY2goKHJvdywgcm93SW5kZXgpID0+IHtcbiAgICBjb25zdCBjcmVhdGVkUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjcmVhdGVkUm93LmNsYXNzTGlzdC5hZGQoXCJyb3dcIik7XG4gICAgcm93LmZvckVhY2goKGNlbGwsIGNvbHVtbkluZGV4KSA9PiB7XG4gICAgICBjb25zdCBjcmVhdGVkQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjcmVhdGVkQ2VsbC5pbm5lclRleHQgPSBjZWxsO1xuICAgICAgY3JlYXRlZENlbGwuY2xhc3NMaXN0LmFkZChcImNlbGxcIik7XG4gICAgICBjcmVhdGVkQ2VsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBsZXQgY2hlY2tTdGF0dXMgPSBjaGVja1VzZXJTaGlwcyh0YXJnZXQpO1xuICAgICAgICBpZiAoY2hlY2tTdGF0dXMpIHtcbiAgICAgICAgICAvL2dhbWUgY2FuIHN0YXJ0XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaGFuZGxlQ2VsbENsaWNrcyh0YXJnZXQsIHJvd0luZGV4LCBjb2x1bW5JbmRleCk7IC8vIGtlZXAgcGxhY2luZyBzaGlwc1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNyZWF0ZWRSb3cuYXBwZW5kQ2hpbGQoY3JlYXRlZENlbGwpO1xuICAgIH0pO1xuICAgIHRhcmdldEFwcGVuZC5hcHBlbmRDaGlsZChjcmVhdGVkUm93KTtcbiAgfSk7XG59O1xuXG4vLyBDb25kaXRpb24gZm9yIGtub3dpbmcgd2hlbiBpIGNhbiBzdGFydCBzaG9vdGluZ1xuY29uc3QgY2hlY2tVc2VyU2hpcHMgPSAodGFyZ2V0KSA9PiB7XG4gIGxldCB0YXJnZXRDaGVjayA9IHRhcmdldC5wbGF5ZXJCb2FyZC5zaGlwc0FycmF5O1xuICBsZXQgcmVzcG9uc2UgPSB0YXJnZXRDaGVjay5ldmVyeSgoc2hpcCkgPT4gc2hpcC5jb29yZFBhaXJzLmxlbmd0aCA+IDApO1xuICByZXR1cm4gcmVzcG9uc2U7XG59O1xuXG4vLyBzd2FwIHR1cm5zXG5jb25zdCBzd2FwVHVybiA9IChteUN1cnJlbnQpID0+IHtcbiAgaWYgKG15Q3VycmVudCA9PT0gXCJwVFwiKSB7XG4gICAgdHVybiA9IFwiY1RcIjtcbiAgfSBlbHNlIGlmIChteUN1cnJlbnQgPT09IFwiY1RcIikge1xuICAgIHR1cm4gPSBcInBUXCI7XG4gIH1cbiAgcmV0dXJuIHR1cm47XG59O1xuXG4vLyBjb25kaXRpb24gZm9yIGVuZGluZyB0aGUgZ2FtZSAtLSBpZiBwbGF5ZXIgd2lsbCBoaXQsIGl0IGNoZWNrcyB0aGUgZW5lbXkgYm9hcmQgYW5kIHZpY2UgdmVyc2FcbmNvbnN0IGNoZWNrSWZXaW5uZXIgPSAocGxheWVyLCBjb21wdXRlcikgPT4ge1xuICBsZXQgZ2FtZU92ZXIgPSBmYWxzZTtcbiAgbGV0IHBsYXllckhhc0xvc3QgPSBwbGF5ZXIucGxheWVyQm9hcmQuYWxsU3VuaztcbiAgbGV0IGNvbXB1dGVySGFzTG9zdCA9IGNvbXB1dGVyLnBsYXllckJvYXJkLmFsbFN1bms7XG4gIGlmIChwbGF5ZXJIYXNMb3N0ICYmICFjb21wdXRlckhhc0xvc3QpIHtcbiAgICBnYW1lT3ZlciA9IHRydWU7XG4gICAgY29uc29sZS5sb2coXCJjb21wdXRlciBoYXMgd29uXCIpO1xuICB9IGVsc2UgaWYgKGNvbXB1dGVySGFzTG9zdCAmJiAhcGxheWVySGFzTG9zdCkge1xuICAgIGdhbWVPdmVyID0gdHJ1ZTtcbiAgICBjb25zb2xlLmxvZyhcInBsYXllciBoYXMgd29uXCIpO1xuICB9XG4gIHJldHVybiBnYW1lT3Zlcjtcbn07XG5cbi8vIGhhbmRsZXIgZm9yIHBsYWNpbmcgc2hpcHNcbmNvbnN0IGhhbmRsZUNlbGxDbGlja3MgPSAodGFyZ2V0LCByb3dJbmRleCwgY29sdW1uSW5kZXgpID0+IHtcbiAgaWYgKHNoaXBMZW5ndGggIT09IG51bGwpIHtcbiAgICB0YXJnZXQucGxhY2VQbGF5ZXJTaGlwKHNoaXBMZW5ndGgsIHJvd0luZGV4LCBjb2x1bW5JbmRleCwgc2hpcERpcmVjdGlvbik7XG4gICAgY2xlYXJCb2FyZCh0YXJnZXQpO1xuICAgIHJlbmRlckJvYXJkKHRhcmdldCwgaGFuZGxlQ2VsbENsaWNrcyk7XG4gICAgc2hpcExlbmd0aCA9IG51bGw7XG4gIH1cbn07XG5cbi8vIGNhbGxpbmcgdGhlIGJvYXJkIHJlbmRlciB0d2ljZSBvbiBlYWNoIGdhbWVzdGFydFxuY29uc3QgcmVuZGVyQWxsQm9hcmRzID0gKHRhcmdldDEsIHRhcmdldDIpID0+IHtcbiAgcmVuZGVyQm9hcmQodGFyZ2V0MSwgaGFuZGxlQ2VsbENsaWNrcyk7XG4gIHJlbmRlckJvYXJkKHRhcmdldDIsIGhhbmRsZUNlbGxDbGlja3MpO1xufTtcblxuY29uc3QgY2xlYXJCb2FyZCA9ICh0YXJnZXQpID0+IHtcbiAgbGV0IHRhcmdldFN0cmluZyA9IHRhcmdldC5uYW1lO1xuICBjb25zdCB0YXJnZXRDbGVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RhcmdldFN0cmluZ30tYXJyYXlgKTtcbiAgdGFyZ2V0Q2xlYXIuaW5uZXJIVE1MID0gXCJcIjsgLy9pdCB3aWxsIGNsZWFyIHRoZSBkb21cbn07XG5cbmNvbnN0IHJlZnJlc2hHYW1lID0gKHRhcmdldDEsIHRhcmdldDIpID0+IHtcbiAgY2xlYXJCb2FyZCh0YXJnZXQxKTtcbiAgY2xlYXJCb2FyZCh0YXJnZXQyKTtcbn07XG5cbmdhbWUoKTtcblxuLy9uZXcgZ2FtZVxubGV0IG5ld0dhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ldy1nYW1lXCIpO1xubmV3R2FtZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgZ2FtZSgpO1xufSk7XG5cbi8vIERPTSBUT0dHTEUgU0hJUFMgU0VMRUNUT1JTXG5jb25zdCBsZW5ndGhTZWxlY3RvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxlbmd0aC1zZWxlY3RvclwiKTtcbmxlbmd0aFNlbGVjdG9ycy5mb3JFYWNoKChzZWxlY3RvcikgPT4ge1xuICBzZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBzaGlwTGVuZ3RoID0gcGFyc2VJbnQoZS50YXJnZXQuaWQpO1xuICB9KTtcbn0pO1xuXG4vLyBET00gVE9HR0xFIERJUkVDVElPTlxuY29uc3QgcGxheWVyRGlyZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItZGlyZWN0aW9uXCIpO1xucGxheWVyRGlyZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGlmIChwbGF5ZXJEaXJlY3Rpb24uaW5uZXJUZXh0ID09PSBcIkhcIikge1xuICAgIHNoaXBEaXJlY3Rpb24gPSBcIlZcIjtcbiAgICBwbGF5ZXJEaXJlY3Rpb24uaW5uZXJUZXh0ID0gXCJWXCI7XG4gIH0gZWxzZSBpZiAocGxheWVyRGlyZWN0aW9uLmlubmVyVGV4dCA9PT0gXCJWXCIpIHtcbiAgICBzaGlwRGlyZWN0aW9uID0gXCJIXCI7XG4gICAgcGxheWVyRGlyZWN0aW9uLmlubmVyVGV4dCA9IFwiSFwiO1xuICB9XG4gIGNvbnNvbGUubG9nKHNoaXBEaXJlY3Rpb24pO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=