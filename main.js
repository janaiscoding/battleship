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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"Inder\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-style: normal;\n}\n\n:root {\n  font-family: \"Inder\";\n  --primary-blue: #181823;\n  --primary-purple: #4a4182;\n  --primary-pink: #f2dede;\n  --primary-red: #964848;\n  --nautical-blue: #1a5091;\n}\n\n*,\n*::after,\n*::before {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background-color: var(--primary-purple);\n}\n\n/*HEADER*/\n.navbar {\n  display: flex;\n  justify-content: center;\n  gap: 2em;\n  align-items: center;\n  background-color: var(--primary-blue);\n  height: 10vh;\n  -webkit-box-shadow: 0px 5px 17px -6px rgba(0, 0, 0, 0.54);\n  box-shadow: 0px 5px 17px -6px rgba(0, 0, 0, 0.54);\n}\n\n.modal {\n  visibility: hidden;\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  top: 10%;\n  left: 30%;\n  max-width: 40%;\n  background-color: var(--primary-pink);\n  padding: 1em;\n  gap: 1em;\n  border-radius: 5px;\n  -webkit-box-shadow: 0px 5px 17px -6px rgba(0, 0, 0, 0.54);\n  box-shadow: 0px 5px 17px -6px rgba(0, 0, 0, 0.54);\n}\n\n.accent {\n  font-size: 24px;\n  font-weight: 600;\n  color: var(--nautical-blue);\n}\n/* MAIN CONTENT */\n.content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0px 100px;\n  min-height: 85vh;\n}\n.new-game {\n  cursor: pointer;\n  transition: all ease-in 0.2s;\n}\n.new-game:hover {\n  transform: scale(1.05);\n}\n.info-panel {\n  font-size: 24px;\n  color: var(--primary-pink);\n}\n.bottom-side-wrapper {\n  display: flex;\n  justify-content: center;\n  gap: 100px;\n}\n\n/* GAME CONTENT*/\n.player-board,\n.numbers-column,\n.letters-row,\n.computer-board {\n  display: flex;\n}\n.numbers-column {\n  flex-direction: column;\n  margin-top: 30px;\n}\n.letter {\n  height: 30px;\n  width: 50px;\n  font-size: 24px;\n  text-align: center;\n  color: var(--primary-pink);\n}\n.number {\n  height: 50px;\n  width: 30px;\n  font-size: 24px;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  color: var(--primary-pink);\n}\n.gameboard {\n  box-sizing: border-box;\n  display: grid;\n  grid-template-columns: repeat(10, 50px);\n  grid-template-rows: repeat(10, 50px);\n  background-color: var(--primary-pink);\n  border: solid 1px black;\n}\n\n.cell,\n.row {\n  box-sizing: border-box;\n  border: 1px solid rgba(24, 3, 3, 0.018);\n  width: 50px;\n  height: 50px;\n}\n\n.cell {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.cell:hover {\n  background-color: rgba(128, 128, 128, 0.212);\n}\n.player-panel {\n  box-sizing: border-box;\n  border: 1px solid var(--primary-blue);\n  background-color: var(--primary-pink);\n  padding: 15px 0px;\n}\n.player-ships,\n.player-control {\n  display: flex;\n  font-size: 24px;\n  padding: 0px 15px;\n}\n\n.player-control {\n  justify-content: space-between;\n  height: 40px;\n  margin-top: 15px;\n}\n.player-ships {\n  justify-content: space-between;\n  height: 30px;\n}\n.player-direction {\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  color: white;\n  border-radius: 2px;\n  background-color: var(--primary-red);\n  border: 1px solid var(--primary-blue);\n  transition: all ease-in 0.2s;\n}\n.player-name {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.length-selector {\n  box-sizing: border-box;\n  border-radius: 2px;\n  border: 1px solid var(--primary-blue);\n  background-color: var(--nautical-blue);\n  color: white;\n  text-align: center;\n  transition: all ease-in 0.2s;\n}\n.player-carrier {\n  width: 160px;\n}\n.player-battleship {\n  width: 120px;\n}\n.player-destroyer {\n  width: 90px;\n}\n.player-submarine {\n  width: 60px;\n}\n.player-patrol-boat {\n  width: 30px;\n}\n.unclickable {\n  pointer-events: none;\n}\n\n.ship-style {\n  box-sizing: border-box;\n  background-color: var(--nautical-blue);\n  border: 1px solid var(--primary-blue);\n  color: white;\n}\n.fa-circle-xmark {\n  color: white;\n}\n.invalid-placement:hover {\n  background-color: rgba(201, 23, 23, 0.767);\n}\n.can-start {\n  display: none;\n}\n.length-selector:hover,\n.player-direction:hover {\n  cursor: pointer;\n  transform: scale(1.02);\n}\n\n/*FOOTER*/\nfooter {\n  background-color: var(--primary-blue);\n  -webkit-box-shadow: 0px -5px 10px -4px rgba(0, 0, 0, 0.2);\n  box-shadow: 0px -5px 10px -4px rgba(0, 0, 0, 0.2);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 5vh;\n  color: var(--primary-pink);\n}\n.footer-link {\n  color: white;\n}\n/* GLOBAL SETTINGS */\na,\na:visited,\na:focus {\n  text-decoration: none;\n  color: var(--primary-pink);\n}\n\ninput:focus,\ninput:active {\n  border-color: transparent;\n}\n.place-ships-info:hover {\n  cursor: pointer;\n}\n@media (max-width: 800px) {\n  .hide-on-mobile {\n    display: none;\n  }\n  .display-on-mobile {\n    display: flex;\n  }\n  .navbar {\n    gap: 1rem;\n    padding: 0px 1rem;\n  }\n  .content {\n    flex-direction: row;\n    justify-content: flex-start;\n    margin: 10px;\n    padding: 5px;\n  }\n  .bottom-side-wrapper {\n    flex-direction: column;\n    justify-content: flex-start;\n    gap: 10px;\n  }\n  .gameboard,\n  .player-board,\n  .computer-board {\n    grid-template-columns: repeat(10, 30px);\n    grid-template-rows: repeat(10, 30px);\n    max-width: 300px;\n  }\n  .number {\n    height: 30px;\n    width: 30px;\n    font-size: 18px;\n  }\n  .letter {\n    height: 30px;\n    width: 30px;\n    font-size: 18px;\n  }\n\n  .cell,\n  .row {\n    width: 30px;\n    height: 30px;\n  }\n  .player-panel {\n    padding: 5px;\n  }\n  .player-ships {\n    flex-wrap: wrap;\n    justify-content: center;\n    padding: 5px;\n  }\n  .length-selector {\n    height: 32px;\n  }\n  .player-control {\n    font-size: 18px;\n    padding: 5px;\n    margin-top: 4rem;\n  }\n  .modal-mobile {\n    visibility: hidden;\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    top: 10%;\n    font-size:14px;\n    background-color: var(--primary-pink);\n    padding: 1em;\n    gap: 1em;\n    border-radius: 5px;\n    -webkit-box-shadow: 0px 5px 17px -6px rgba(0, 0, 0, 0.54);\n    box-shadow: 0px 5px 17px -6px rgba(0, 0, 0, 0.54);\n  }\n  .modal-mobile > button {\n    box-sizing: border-box;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 1em;\n    color: white;\n    border-radius: 2px;\n    background-color: var(--primary-red);\n    border: 1px solid var(--primary-blue);\n    transition: all ease-in 0.2s;\n  }\n}\n@media (min-width: 800px) {\n  .modal-mobile {\n    display: none;\n    visibility: hidden;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,oBAAoB;EACpB,4CAA6C;EAC7C,kBAAkB;AACpB;;AAEA;EACE,oBAAoB;EACpB,uBAAuB;EACvB,yBAAyB;EACzB,uBAAuB;EACvB,sBAAsB;EACtB,wBAAwB;AAC1B;;AAEA;;;EAGE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,uCAAuC;AACzC;;AAEA,SAAS;AACT;EACE,aAAa;EACb,uBAAuB;EACvB,QAAQ;EACR,mBAAmB;EACnB,qCAAqC;EACrC,YAAY;EACZ,yDAAyD;EACzD,iDAAiD;AACnD;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,QAAQ;EACR,SAAS;EACT,cAAc;EACd,qCAAqC;EACrC,YAAY;EACZ,QAAQ;EACR,kBAAkB;EAClB,yDAAyD;EACzD,iDAAiD;AACnD;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,2BAA2B;AAC7B;AACA,iBAAiB;AACjB;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,eAAe;EACf,4BAA4B;AAC9B;AACA;EACE,sBAAsB;AACxB;AACA;EACE,eAAe;EACf,0BAA0B;AAC5B;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,UAAU;AACZ;;AAEA,gBAAgB;AAChB;;;;EAIE,aAAa;AACf;AACA;EACE,sBAAsB;EACtB,gBAAgB;AAClB;AACA;EACE,YAAY;EACZ,WAAW;EACX,eAAe;EACf,kBAAkB;EAClB,0BAA0B;AAC5B;AACA;EACE,YAAY;EACZ,WAAW;EACX,eAAe;EACf,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,0BAA0B;AAC5B;AACA;EACE,sBAAsB;EACtB,aAAa;EACb,uCAAuC;EACvC,oCAAoC;EACpC,qCAAqC;EACrC,uBAAuB;AACzB;;AAEA;;EAEE,sBAAsB;EACtB,uCAAuC;EACvC,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,4CAA4C;AAC9C;AACA;EACE,sBAAsB;EACtB,qCAAqC;EACrC,qCAAqC;EACrC,iBAAiB;AACnB;AACA;;EAEE,aAAa;EACb,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,8BAA8B;EAC9B,YAAY;EACZ,gBAAgB;AAClB;AACA;EACE,8BAA8B;EAC9B,YAAY;AACd;AACA;EACE,sBAAsB;EACtB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,oCAAoC;EACpC,qCAAqC;EACrC,4BAA4B;AAC9B;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,qCAAqC;EACrC,sCAAsC;EACtC,YAAY;EACZ,kBAAkB;EAClB,4BAA4B;AAC9B;AACA;EACE,YAAY;AACd;AACA;EACE,YAAY;AACd;AACA;EACE,WAAW;AACb;AACA;EACE,WAAW;AACb;AACA;EACE,WAAW;AACb;AACA;EACE,oBAAoB;AACtB;;AAEA;EACE,sBAAsB;EACtB,sCAAsC;EACtC,qCAAqC;EACrC,YAAY;AACd;AACA;EACE,YAAY;AACd;AACA;EACE,0CAA0C;AAC5C;AACA;EACE,aAAa;AACf;AACA;;EAEE,eAAe;EACf,sBAAsB;AACxB;;AAEA,SAAS;AACT;EACE,qCAAqC;EACrC,yDAAyD;EACzD,iDAAiD;EACjD,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,0BAA0B;AAC5B;AACA;EACE,YAAY;AACd;AACA,oBAAoB;AACpB;;;EAGE,qBAAqB;EACrB,0BAA0B;AAC5B;;AAEA;;EAEE,yBAAyB;AAC3B;AACA;EACE,eAAe;AACjB;AACA;EACE;IACE,aAAa;EACf;EACA;IACE,aAAa;EACf;EACA;IACE,SAAS;IACT,iBAAiB;EACnB;EACA;IACE,mBAAmB;IACnB,2BAA2B;IAC3B,YAAY;IACZ,YAAY;EACd;EACA;IACE,sBAAsB;IACtB,2BAA2B;IAC3B,SAAS;EACX;EACA;;;IAGE,uCAAuC;IACvC,oCAAoC;IACpC,gBAAgB;EAClB;EACA;IACE,YAAY;IACZ,WAAW;IACX,eAAe;EACjB;EACA;IACE,YAAY;IACZ,WAAW;IACX,eAAe;EACjB;;EAEA;;IAEE,WAAW;IACX,YAAY;EACd;EACA;IACE,YAAY;EACd;EACA;IACE,eAAe;IACf,uBAAuB;IACvB,YAAY;EACd;EACA;IACE,YAAY;EACd;EACA;IACE,eAAe;IACf,YAAY;IACZ,gBAAgB;EAClB;EACA;IACE,kBAAkB;IAClB,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,QAAQ;IACR,cAAc;IACd,qCAAqC;IACrC,YAAY;IACZ,QAAQ;IACR,kBAAkB;IAClB,yDAAyD;IACzD,iDAAiD;EACnD;EACA;IACE,sBAAsB;IACtB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,oCAAoC;IACpC,qCAAqC;IACrC,4BAA4B;EAC9B;AACF;AACA;EACE;IACE,aAAa;IACb,kBAAkB;EACpB;AACF","sourcesContent":["@font-face {\n  font-family: \"Inder\";\n  src: url(/src/assets/Inder/Inder-Regular.ttf);\n  font-style: normal;\n}\n\n:root {\n  font-family: \"Inder\";\n  --primary-blue: #181823;\n  --primary-purple: #4a4182;\n  --primary-pink: #f2dede;\n  --primary-red: #964848;\n  --nautical-blue: #1a5091;\n}\n\n*,\n*::after,\n*::before {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background-color: var(--primary-purple);\n}\n\n/*HEADER*/\n.navbar {\n  display: flex;\n  justify-content: center;\n  gap: 2em;\n  align-items: center;\n  background-color: var(--primary-blue);\n  height: 10vh;\n  -webkit-box-shadow: 0px 5px 17px -6px rgba(0, 0, 0, 0.54);\n  box-shadow: 0px 5px 17px -6px rgba(0, 0, 0, 0.54);\n}\n\n.modal {\n  visibility: hidden;\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  top: 10%;\n  left: 30%;\n  max-width: 40%;\n  background-color: var(--primary-pink);\n  padding: 1em;\n  gap: 1em;\n  border-radius: 5px;\n  -webkit-box-shadow: 0px 5px 17px -6px rgba(0, 0, 0, 0.54);\n  box-shadow: 0px 5px 17px -6px rgba(0, 0, 0, 0.54);\n}\n\n.accent {\n  font-size: 24px;\n  font-weight: 600;\n  color: var(--nautical-blue);\n}\n/* MAIN CONTENT */\n.content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0px 100px;\n  min-height: 85vh;\n}\n.new-game {\n  cursor: pointer;\n  transition: all ease-in 0.2s;\n}\n.new-game:hover {\n  transform: scale(1.05);\n}\n.info-panel {\n  font-size: 24px;\n  color: var(--primary-pink);\n}\n.bottom-side-wrapper {\n  display: flex;\n  justify-content: center;\n  gap: 100px;\n}\n\n/* GAME CONTENT*/\n.player-board,\n.numbers-column,\n.letters-row,\n.computer-board {\n  display: flex;\n}\n.numbers-column {\n  flex-direction: column;\n  margin-top: 30px;\n}\n.letter {\n  height: 30px;\n  width: 50px;\n  font-size: 24px;\n  text-align: center;\n  color: var(--primary-pink);\n}\n.number {\n  height: 50px;\n  width: 30px;\n  font-size: 24px;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  color: var(--primary-pink);\n}\n.gameboard {\n  box-sizing: border-box;\n  display: grid;\n  grid-template-columns: repeat(10, 50px);\n  grid-template-rows: repeat(10, 50px);\n  background-color: var(--primary-pink);\n  border: solid 1px black;\n}\n\n.cell,\n.row {\n  box-sizing: border-box;\n  border: 1px solid rgba(24, 3, 3, 0.018);\n  width: 50px;\n  height: 50px;\n}\n\n.cell {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.cell:hover {\n  background-color: rgba(128, 128, 128, 0.212);\n}\n.player-panel {\n  box-sizing: border-box;\n  border: 1px solid var(--primary-blue);\n  background-color: var(--primary-pink);\n  padding: 15px 0px;\n}\n.player-ships,\n.player-control {\n  display: flex;\n  font-size: 24px;\n  padding: 0px 15px;\n}\n\n.player-control {\n  justify-content: space-between;\n  height: 40px;\n  margin-top: 15px;\n}\n.player-ships {\n  justify-content: space-between;\n  height: 30px;\n}\n.player-direction {\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  color: white;\n  border-radius: 2px;\n  background-color: var(--primary-red);\n  border: 1px solid var(--primary-blue);\n  transition: all ease-in 0.2s;\n}\n.player-name {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.length-selector {\n  box-sizing: border-box;\n  border-radius: 2px;\n  border: 1px solid var(--primary-blue);\n  background-color: var(--nautical-blue);\n  color: white;\n  text-align: center;\n  transition: all ease-in 0.2s;\n}\n.player-carrier {\n  width: 160px;\n}\n.player-battleship {\n  width: 120px;\n}\n.player-destroyer {\n  width: 90px;\n}\n.player-submarine {\n  width: 60px;\n}\n.player-patrol-boat {\n  width: 30px;\n}\n.unclickable {\n  pointer-events: none;\n}\n\n.ship-style {\n  box-sizing: border-box;\n  background-color: var(--nautical-blue);\n  border: 1px solid var(--primary-blue);\n  color: white;\n}\n.fa-circle-xmark {\n  color: white;\n}\n.invalid-placement:hover {\n  background-color: rgba(201, 23, 23, 0.767);\n}\n.can-start {\n  display: none;\n}\n.length-selector:hover,\n.player-direction:hover {\n  cursor: pointer;\n  transform: scale(1.02);\n}\n\n/*FOOTER*/\nfooter {\n  background-color: var(--primary-blue);\n  -webkit-box-shadow: 0px -5px 10px -4px rgba(0, 0, 0, 0.2);\n  box-shadow: 0px -5px 10px -4px rgba(0, 0, 0, 0.2);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 5vh;\n  color: var(--primary-pink);\n}\n.footer-link {\n  color: white;\n}\n/* GLOBAL SETTINGS */\na,\na:visited,\na:focus {\n  text-decoration: none;\n  color: var(--primary-pink);\n}\n\ninput:focus,\ninput:active {\n  border-color: transparent;\n}\n.place-ships-info:hover {\n  cursor: pointer;\n}\n@media (max-width: 800px) {\n  .hide-on-mobile {\n    display: none;\n  }\n  .display-on-mobile {\n    display: flex;\n  }\n  .navbar {\n    gap: 1rem;\n    padding: 0px 1rem;\n  }\n  .content {\n    flex-direction: row;\n    justify-content: flex-start;\n    margin: 10px;\n    padding: 5px;\n  }\n  .bottom-side-wrapper {\n    flex-direction: column;\n    justify-content: flex-start;\n    gap: 10px;\n  }\n  .gameboard,\n  .player-board,\n  .computer-board {\n    grid-template-columns: repeat(10, 30px);\n    grid-template-rows: repeat(10, 30px);\n    max-width: 300px;\n  }\n  .number {\n    height: 30px;\n    width: 30px;\n    font-size: 18px;\n  }\n  .letter {\n    height: 30px;\n    width: 30px;\n    font-size: 18px;\n  }\n\n  .cell,\n  .row {\n    width: 30px;\n    height: 30px;\n  }\n  .player-panel {\n    padding: 5px;\n  }\n  .player-ships {\n    flex-wrap: wrap;\n    justify-content: center;\n    padding: 5px;\n  }\n  .length-selector {\n    height: 32px;\n  }\n  .player-control {\n    font-size: 18px;\n    padding: 5px;\n    margin-top: 4rem;\n  }\n  .modal-mobile {\n    visibility: hidden;\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    top: 10%;\n    font-size:14px;\n    background-color: var(--primary-pink);\n    padding: 1em;\n    gap: 1em;\n    border-radius: 5px;\n    -webkit-box-shadow: 0px 5px 17px -6px rgba(0, 0, 0, 0.54);\n    box-shadow: 0px 5px 17px -6px rgba(0, 0, 0, 0.54);\n  }\n  .modal-mobile > button {\n    box-sizing: border-box;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 1em;\n    color: white;\n    border-radius: 2px;\n    background-color: var(--primary-red);\n    border: 1px solid var(--primary-blue);\n    transition: all ease-in 0.2s;\n  }\n}\n@media (min-width: 800px) {\n  .modal-mobile {\n    display: none;\n    visibility: hidden;\n  }\n}\n"],"sourceRoot":""}]);
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
// HOW TO PLAY TOGGLE
const modal = document.querySelector(".modal");

placeShipsInfo.addEventListener("mouseover", () => {
  modal.style.visibility = "visible";
});
modal.addEventListener("mouseout", () => {
  modal.style.visibility = "hidden";
});
modal.addEventListener("mouseover", () => {
  modal.style.visibility = "visible";
});
const modalMobile = document.querySelector(".modal-mobile");
const closeModalMobile = document.querySelector(".close-modal");
placeShipsInfo.addEventListener("click", () => {
  modalMobile.style.visibility = "visible";
});
closeModalMobile.addEventListener("click", () => {
  modalMobile.style.visibility = "hidden";
});
game();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxVQUFVLFlBQVksT0FBTyxVQUFVLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssWUFBWSxRQUFRLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxXQUFXLEtBQUssT0FBTyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFL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QTs7QUFFQTtBQUNBO0FBQ0EsaURBQWlELFVBQVU7QUFDM0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZmFjdG9yaWVzL0FJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZmFjdG9yaWVzL2dhbWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZmFjdG9yaWVzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ZhY3Rvcmllcy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL3NyYy9hc3NldHMvSW5kZXIvSW5kZXItUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSW5kZXJcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG46cm9vdCB7XFxuICBmb250LWZhbWlseTogXFxcIkluZGVyXFxcIjtcXG4gIC0tcHJpbWFyeS1ibHVlOiAjMTgxODIzO1xcbiAgLS1wcmltYXJ5LXB1cnBsZTogIzRhNDE4MjtcXG4gIC0tcHJpbWFyeS1waW5rOiAjZjJkZWRlO1xcbiAgLS1wcmltYXJ5LXJlZDogIzk2NDg0ODtcXG4gIC0tbmF1dGljYWwtYmx1ZTogIzFhNTA5MTtcXG59XFxuXFxuKixcXG4qOjphZnRlcixcXG4qOjpiZWZvcmUge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1wdXJwbGUpO1xcbn1cXG5cXG4vKkhFQURFUiovXFxuLm5hdmJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWJsdWUpO1xcbiAgaGVpZ2h0OiAxMHZoO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDE3cHggLTZweCByZ2JhKDAsIDAsIDAsIDAuNTQpO1xcbiAgYm94LXNoYWRvdzogMHB4IDVweCAxN3B4IC02cHggcmdiYSgwLCAwLCAwLCAwLjU0KTtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRvcDogMTAlO1xcbiAgbGVmdDogMzAlO1xcbiAgbWF4LXdpZHRoOiA0MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LXBpbmspO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgZ2FwOiAxZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA1cHggMTdweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC41NCk7XFxuICBib3gtc2hhZG93OiAwcHggNXB4IDE3cHggLTZweCByZ2JhKDAsIDAsIDAsIDAuNTQpO1xcbn1cXG5cXG4uYWNjZW50IHtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBjb2xvcjogdmFyKC0tbmF1dGljYWwtYmx1ZSk7XFxufVxcbi8qIE1BSU4gQ09OVEVOVCAqL1xcbi5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwcHggMTAwcHg7XFxuICBtaW4taGVpZ2h0OiA4NXZoO1xcbn1cXG4ubmV3LWdhbWUge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4gMC4ycztcXG59XFxuLm5ldy1nYW1lOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcbi5pbmZvLXBhbmVsIHtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXBpbmspO1xcbn1cXG4uYm90dG9tLXNpZGUtd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwMHB4O1xcbn1cXG5cXG4vKiBHQU1FIENPTlRFTlQqL1xcbi5wbGF5ZXItYm9hcmQsXFxuLm51bWJlcnMtY29sdW1uLFxcbi5sZXR0ZXJzLXJvdyxcXG4uY29tcHV0ZXItYm9hcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLm51bWJlcnMtY29sdW1uIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbn1cXG4ubGV0dGVyIHtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktcGluayk7XFxufVxcbi5udW1iZXIge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXBpbmspO1xcbn1cXG4uZ2FtZWJvYXJkIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDUwcHgpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDUwcHgpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1waW5rKTtcXG4gIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcbn1cXG5cXG4uY2VsbCxcXG4ucm93IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI0LCAzLCAzLCAwLjAxOCk7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG59XFxuXFxuLmNlbGwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmNlbGw6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjIxMik7XFxufVxcbi5wbGF5ZXItcGFuZWwge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktYmx1ZSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LXBpbmspO1xcbiAgcGFkZGluZzogMTVweCAwcHg7XFxufVxcbi5wbGF5ZXItc2hpcHMsXFxuLnBsYXllci1jb250cm9sIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBwYWRkaW5nOiAwcHggMTVweDtcXG59XFxuXFxuLnBsYXllci1jb250cm9sIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGhlaWdodDogNDBweDtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxufVxcbi5wbGF5ZXItc2hpcHMge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG4ucGxheWVyLWRpcmVjdGlvbiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1yZWQpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1ibHVlKTtcXG4gIHRyYW5zaXRpb246IGFsbCBlYXNlLWluIDAuMnM7XFxufVxcbi5wbGF5ZXItbmFtZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4ubGVuZ3RoLXNlbGVjdG9yIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWJsdWUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF1dGljYWwtYmx1ZSk7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbiAwLjJzO1xcbn1cXG4ucGxheWVyLWNhcnJpZXIge1xcbiAgd2lkdGg6IDE2MHB4O1xcbn1cXG4ucGxheWVyLWJhdHRsZXNoaXAge1xcbiAgd2lkdGg6IDEyMHB4O1xcbn1cXG4ucGxheWVyLWRlc3Ryb3llciB7XFxuICB3aWR0aDogOTBweDtcXG59XFxuLnBsYXllci1zdWJtYXJpbmUge1xcbiAgd2lkdGg6IDYwcHg7XFxufVxcbi5wbGF5ZXItcGF0cm9sLWJvYXQge1xcbiAgd2lkdGg6IDMwcHg7XFxufVxcbi51bmNsaWNrYWJsZSB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLnNoaXAtc3R5bGUge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdXRpY2FsLWJsdWUpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1ibHVlKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmZhLWNpcmNsZS14bWFyayB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5pbnZhbGlkLXBsYWNlbWVudDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwMSwgMjMsIDIzLCAwLjc2Nyk7XFxufVxcbi5jYW4tc3RhcnQge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmxlbmd0aC1zZWxlY3Rvcjpob3ZlcixcXG4ucGxheWVyLWRpcmVjdGlvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xcbn1cXG5cXG4vKkZPT1RFUiovXFxuZm9vdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktYmx1ZSk7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAtNXB4IDEwcHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICBib3gtc2hhZG93OiAwcHggLTVweCAxMHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogNXZoO1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktcGluayk7XFxufVxcbi5mb290ZXItbGluayB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi8qIEdMT0JBTCBTRVRUSU5HUyAqL1xcbmEsXFxuYTp2aXNpdGVkLFxcbmE6Zm9jdXMge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktcGluayk7XFxufVxcblxcbmlucHV0OmZvY3VzLFxcbmlucHV0OmFjdGl2ZSB7XFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG4ucGxhY2Utc2hpcHMtaW5mbzpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgLmhpZGUtb24tbW9iaWxlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIC5kaXNwbGF5LW9uLW1vYmlsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICB9XFxuICAubmF2YmFyIHtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAwcHggMXJlbTtcXG4gIH1cXG4gIC5jb250ZW50IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gIH1cXG4gIC5ib3R0b20tc2lkZS13cmFwcGVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDEwcHg7XFxuICB9XFxuICAuZ2FtZWJvYXJkLFxcbiAgLnBsYXllci1ib2FyZCxcXG4gIC5jb21wdXRlci1ib2FyZCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAzMHB4KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDMwcHgpO1xcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xcbiAgfVxcbiAgLm51bWJlciB7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gIH1cXG4gIC5sZXR0ZXIge1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICB9XFxuXFxuICAuY2VsbCxcXG4gIC5yb3cge1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgfVxcbiAgLnBsYXllci1wYW5lbCB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gIH1cXG4gIC5wbGF5ZXItc2hpcHMge1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICB9XFxuICAubGVuZ3RoLXNlbGVjdG9yIHtcXG4gICAgaGVpZ2h0OiAzMnB4O1xcbiAgfVxcbiAgLnBsYXllci1jb250cm9sIHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIG1hcmdpbi10b3A6IDRyZW07XFxuICB9XFxuICAubW9kYWwtbW9iaWxlIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRvcDogMTAlO1xcbiAgICBmb250LXNpemU6MTRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1waW5rKTtcXG4gICAgcGFkZGluZzogMWVtO1xcbiAgICBnYXA6IDFlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA1cHggMTdweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC41NCk7XFxuICAgIGJveC1zaGFkb3c6IDBweCA1cHggMTdweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC41NCk7XFxuICB9XFxuICAubW9kYWwtbW9iaWxlID4gYnV0dG9uIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktcmVkKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1ibHVlKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4gMC4ycztcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDgwMHB4KSB7XFxuICAubW9kYWwtbW9iaWxlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usb0JBQW9CO0VBQ3BCLDRDQUE2QztFQUM3QyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsdUJBQXVCO0VB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QjtJQUNsQix5REFBeUQ7SUFDekQsaURBQWlEO0VBQ25EO0VBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsb0NBQW9DO0lBQ3BDLHFDQUFxQztJQUNyQyw0QkFBNEI7RUFDOUI7QUFDRjtBQUNBO0VBQ0U7SUFDRSxhQUFhO0lBQ2Isa0JBQWtCO0VBQ3BCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkluZGVyXFxcIjtcXG4gIHNyYzogdXJsKC9zcmMvYXNzZXRzL0luZGVyL0luZGVyLVJlZ3VsYXIudHRmKTtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJbmRlclxcXCI7XFxuICAtLXByaW1hcnktYmx1ZTogIzE4MTgyMztcXG4gIC0tcHJpbWFyeS1wdXJwbGU6ICM0YTQxODI7XFxuICAtLXByaW1hcnktcGluazogI2YyZGVkZTtcXG4gIC0tcHJpbWFyeS1yZWQ6ICM5NjQ4NDg7XFxuICAtLW5hdXRpY2FsLWJsdWU6ICMxYTUwOTE7XFxufVxcblxcbiosXFxuKjo6YWZ0ZXIsXFxuKjo6YmVmb3JlIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktcHVycGxlKTtcXG59XFxuXFxuLypIRUFERVIqL1xcbi5uYXZiYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1ibHVlKTtcXG4gIGhlaWdodDogMTB2aDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDVweCAxN3B4IC02cHggcmdiYSgwLCAwLCAwLCAwLjU0KTtcXG4gIGJveC1zaGFkb3c6IDBweCA1cHggMTdweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC41NCk7XFxufVxcblxcbi5tb2RhbCB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0b3A6IDEwJTtcXG4gIGxlZnQ6IDMwJTtcXG4gIG1heC13aWR0aDogNDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1waW5rKTtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGdhcDogMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDE3cHggLTZweCByZ2JhKDAsIDAsIDAsIDAuNTQpO1xcbiAgYm94LXNoYWRvdzogMHB4IDVweCAxN3B4IC02cHggcmdiYSgwLCAwLCAwLCAwLjU0KTtcXG59XFxuXFxuLmFjY2VudCB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgY29sb3I6IHZhcigtLW5hdXRpY2FsLWJsdWUpO1xcbn1cXG4vKiBNQUlOIENPTlRFTlQgKi9cXG4uY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMHB4IDEwMHB4O1xcbiAgbWluLWhlaWdodDogODV2aDtcXG59XFxuLm5ldy1nYW1lIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCBlYXNlLWluIDAuMnM7XFxufVxcbi5uZXctZ2FtZTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG4uaW5mby1wYW5lbCB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1waW5rKTtcXG59XFxuLmJvdHRvbS1zaWRlLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMDBweDtcXG59XFxuXFxuLyogR0FNRSBDT05URU5UKi9cXG4ucGxheWVyLWJvYXJkLFxcbi5udW1iZXJzLWNvbHVtbixcXG4ubGV0dGVycy1yb3csXFxuLmNvbXB1dGVyLWJvYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5udW1iZXJzLWNvbHVtbiB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG59XFxuLmxldHRlciB7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogNTBweDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXBpbmspO1xcbn1cXG4ubnVtYmVyIHtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1waW5rKTtcXG59XFxuLmdhbWVib2FyZCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCA1MHB4KTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCA1MHB4KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktcGluayk7XFxuICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG59XFxuXFxuLmNlbGwsXFxuLnJvdyB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNCwgMywgMywgMC4wMTgpO1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcbi5jZWxsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5jZWxsOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4yMTIpO1xcbn1cXG4ucGxheWVyLXBhbmVsIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWJsdWUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1waW5rKTtcXG4gIHBhZGRpbmc6IDE1cHggMHB4O1xcbn1cXG4ucGxheWVyLXNoaXBzLFxcbi5wbGF5ZXItY29udHJvbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgcGFkZGluZzogMHB4IDE1cHg7XFxufVxcblxcbi5wbGF5ZXItY29udHJvbCB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbn1cXG4ucGxheWVyLXNoaXBzIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuLnBsYXllci1kaXJlY3Rpb24ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogNDBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktcmVkKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktYmx1ZSk7XFxuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbiAwLjJzO1xcbn1cXG4ucGxheWVyLW5hbWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmxlbmd0aC1zZWxlY3RvciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1ibHVlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdXRpY2FsLWJsdWUpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4gMC4ycztcXG59XFxuLnBsYXllci1jYXJyaWVyIHtcXG4gIHdpZHRoOiAxNjBweDtcXG59XFxuLnBsYXllci1iYXR0bGVzaGlwIHtcXG4gIHdpZHRoOiAxMjBweDtcXG59XFxuLnBsYXllci1kZXN0cm95ZXIge1xcbiAgd2lkdGg6IDkwcHg7XFxufVxcbi5wbGF5ZXItc3VibWFyaW5lIHtcXG4gIHdpZHRoOiA2MHB4O1xcbn1cXG4ucGxheWVyLXBhdHJvbC1ib2F0IHtcXG4gIHdpZHRoOiAzMHB4O1xcbn1cXG4udW5jbGlja2FibGUge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5zaGlwLXN0eWxlIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXV0aWNhbC1ibHVlKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktYmx1ZSk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5mYS1jaXJjbGUteG1hcmsge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4uaW52YWxpZC1wbGFjZW1lbnQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDEsIDIzLCAyMywgMC43NjcpO1xcbn1cXG4uY2FuLXN0YXJ0IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5sZW5ndGgtc2VsZWN0b3I6aG92ZXIsXFxuLnBsYXllci1kaXJlY3Rpb246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcXG59XFxuXFxuLypGT09URVIqL1xcbmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWJsdWUpO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggLTVweCAxMHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgYm94LXNoYWRvdzogMHB4IC01cHggMTBweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDV2aDtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXBpbmspO1xcbn1cXG4uZm9vdGVyLWxpbmsge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4vKiBHTE9CQUwgU0VUVElOR1MgKi9cXG5hLFxcbmE6dmlzaXRlZCxcXG5hOmZvY3VzIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXBpbmspO1xcbn1cXG5cXG5pbnB1dDpmb2N1cyxcXG5pbnB1dDphY3RpdmUge1xcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuLnBsYWNlLXNoaXBzLWluZm86aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcXG4gIC5oaWRlLW9uLW1vYmlsZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAuZGlzcGxheS1vbi1tb2JpbGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgfVxcbiAgLm5hdmJhciB7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgcGFkZGluZzogMHB4IDFyZW07XFxuICB9XFxuICAuY29udGVudCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICB9XFxuICAuYm90dG9tLXNpZGUtd3JhcHBlciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgfVxcbiAgLmdhbWVib2FyZCxcXG4gIC5wbGF5ZXItYm9hcmQsXFxuICAuY29tcHV0ZXItYm9hcmQge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMzBweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAzMHB4KTtcXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcXG4gIH1cXG4gIC5udW1iZXIge1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICB9XFxuICAubGV0dGVyIHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgfVxcblxcbiAgLmNlbGwsXFxuICAucm93IHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gIH1cXG4gIC5wbGF5ZXItcGFuZWwge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICB9XFxuICAucGxheWVyLXNoaXBzIHtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgfVxcbiAgLmxlbmd0aC1zZWxlY3RvciB7XFxuICAgIGhlaWdodDogMzJweDtcXG4gIH1cXG4gIC5wbGF5ZXItY29udHJvbCB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBtYXJnaW4tdG9wOiA0cmVtO1xcbiAgfVxcbiAgLm1vZGFsLW1vYmlsZSB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0b3A6IDEwJTtcXG4gICAgZm9udC1zaXplOjE0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktcGluayk7XFxuICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgZ2FwOiAxZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDE3cHggLTZweCByZ2JhKDAsIDAsIDAsIDAuNTQpO1xcbiAgICBib3gtc2hhZG93OiAwcHggNXB4IDE3cHggLTZweCByZ2JhKDAsIDAsIDAsIDAuNTQpO1xcbiAgfVxcbiAgLm1vZGFsLW1vYmlsZSA+IGJ1dHRvbiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LXJlZCk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktYmx1ZSk7XFxuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluIDAuMnM7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA4MDBweCkge1xcbiAgLm1vZGFsLW1vYmlsZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuL2dhbWJvYXJkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFJIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5wbGF5ZXJCb2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICB0aGlzLkFJUGFzdFNob3RzID0gW107XG4gICAgdGhpcy5wbGFjZVJhbmRvbVNoaXBzKCk7XG4gIH1cbiAgZ2V0UmFuZG9tWCgpIHtcbiAgICBsZXQgeFJhbiA9IHRoaXMuZ2V0UmFuZG9tTnVtKCk7XG4gICAgcmV0dXJuIHhSYW47XG4gIH1cbiAgZ2V0UmFuZG9tWSgpIHtcbiAgICBsZXQgeVJhbiA9IHRoaXMuZ2V0UmFuZG9tTnVtKCk7XG4gICAgcmV0dXJuIHlSYW47XG4gIH1cbiAgZ2V0UmFuZG9tTnVtKCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gIH1cbiAgZ2V0UmFuZG9tRGlyZWN0aW9uKCkge1xuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpIDwgMC41ID8gXCJWXCIgOiBcIkhcIjtcbiAgfVxuICBwbGFjZVJhbmRvbVNoaXBzKCkge1xuICAgIGxldCB0YXJnZXRBcnJheSA9IHRoaXMucGxheWVyQm9hcmQuc2hpcHNBcnJheTtcbiAgICB0YXJnZXRBcnJheS5mb3JFYWNoKChjdXJyZW50U2hpcCkgPT4ge1xuICAgICAgbGV0IGlzU2hpcFBsYWNlZCA9IGN1cnJlbnRTaGlwLmNvb3JkUGFpcnMubGVuZ3RoO1xuICAgICAgd2hpbGUgKGlzU2hpcFBsYWNlZCA9PT0gMCkge1xuICAgICAgICBsZXQgcmFuZG9tRGlyZWN0aW9uID0gdGhpcy5nZXRSYW5kb21EaXJlY3Rpb24oKTtcbiAgICAgICAgbGV0IHJhblggPSB0aGlzLmdldFJhbmRvbVgoKTtcbiAgICAgICAgbGV0IHJhblkgPSB0aGlzLmdldFJhbmRvbVkoKTtcbiAgICAgICAgbGV0IHB1c2hMZW5ndGggPSBjdXJyZW50U2hpcC5zaGlwLmxlbmd0aDtcbiAgICAgICAgdGhpcy5wbGF5ZXJCb2FyZC5wbGFjZVNoaXAocHVzaExlbmd0aCwgcmFuWCwgcmFuWSwgcmFuZG9tRGlyZWN0aW9uKTtcbiAgICAgICAgaXNTaGlwUGxhY2VkID0gY3VycmVudFNoaXAuY29vcmRQYWlycy5sZW5ndGg7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgY29tcHV0ZXJTaG90KG15VGFyZ2V0KSB7XG4gICAgbGV0IHNob3RFeGlzdHMgPSBmYWxzZTtcbiAgICBsZXQgaGl0WCA9IHRoaXMuZ2V0UmFuZG9tTnVtKCk7XG4gICAgbGV0IGhpdFkgPSB0aGlzLmdldFJhbmRvbU51bSgpO1xuICAgIGxldCBwYWlyT2ZTaG90ID0gW2hpdFgsIGhpdFldO1xuICAgIGlmICh0aGlzLkFJUGFzdFNob3RzLmluY2x1ZGVzKHBhaXJPZlNob3QpKSB7XG4gICAgICBzaG90RXhpc3RzID0gdHJ1ZTtcbiAgICAgIGhpdFggPSB0aGlzLmdldFJhbmRvbU51bSgpO1xuICAgICAgaGl0WSA9IHRoaXMuZ2V0UmFuZG9tTnVtKCk7XG4gICAgICBwYWlyT2ZTaG90ID0gW2hpdFgsIGhpdFldO1xuICAgIH1cbiAgICBpZiAoIXNob3RFeGlzdHMpIHtcbiAgICAgIG15VGFyZ2V0LnBsYXllckJvYXJkLnJlY2VpdmVBdHRhY2soaGl0WCwgaGl0WSk7XG4gICAgICB0aGlzLkFJUGFzdFNob3RzLnB1c2gocGFpck9mU2hvdCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgU2hpcCBmcm9tIFwiLi9zaGlwXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lYm9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJvYXJkID0gdGhpcy5jcmVhdGVCb2FyZCgxMCk7IC8vZGVmYXVsdCBib2FyZFxuICAgIHRoaXMuc2hpcHNBcnJheSA9IFtcbiAgICAgIHtcbiAgICAgICAgc2hpcDogbmV3IFNoaXAoMSwgXCJQYXRyb2wtYm9hdFwiKSxcbiAgICAgICAgY29vcmRQYWlyczogW10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzaGlwOiBuZXcgU2hpcCgyLCBcIlN1Ym1hcmluZVwiKSxcbiAgICAgICAgY29vcmRQYWlyczogW10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzaGlwOiBuZXcgU2hpcCgzLCBcIkRlc3Ryb3llclwiKSxcbiAgICAgICAgY29vcmRQYWlyczogW10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzaGlwOiBuZXcgU2hpcCg0LCBcIkJhdHRsZXNoaXBcIiksXG4gICAgICAgIGNvb3JkUGFpcnM6IFtdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2hpcDogbmV3IFNoaXAoNSwgXCJDYXJyaWVyXCIpLFxuICAgICAgICBjb29yZFBhaXJzOiBbXSxcbiAgICAgIH0sXG4gICAgXTsgLy8gYXJyYXkgd2lsbCBiZSBmaWxsZWQgd2l0aCBlYWNoIHNoaXAgYW5kIGl0J3MgY29vcmRvbmF0ZXNcbiAgICB0aGlzLmhpdENvb3JkcyA9IHtcbiAgICAgIG1pc3NlZEhpdHM6IFtdLFxuICAgICAgc2hpcEhpdHM6IFtdLFxuICAgIH07XG4gICAgdGhpcy5hbGxTdW5rID0gZmFsc2U7XG4gIH1cbiAgY3JlYXRlQm9hcmQoc2l6ZSkge1xuICAgIGxldCBib2FyZCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICBib2FyZFtpXSA9IFtdO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaXplOyBqKyspIHtcbiAgICAgICAgYm9hcmRbaV1bal0gPSBcIm9cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJvYXJkO1xuICB9XG4gIHBsYWNlU2hpcChsLCB4LCB5LCBkKSB7XG4gICAgaWYgKGQgPT09IFwiSFwiKSB7XG4gICAgICBsZXQgY29sdW1uVmFsaWQgPSB0cnVlO1xuICAgICAgZm9yIChsZXQgaSA9IHg7IGkgPCB4ICsgbDsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLmJvYXJkW2ldW3ldICE9PSBcIm9cIiB8fCB4ICsgbCA+IDEwKSB7XG4gICAgICAgICAgY29sdW1uVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGNvbHVtblZhbGlkKSB7XG4gICAgICAgIGlmIChsID09PSAxICYmIHRoaXMuc2hpcHNBcnJheVswXS5jb29yZFBhaXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHdoaWxlIChsICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnNoaXBzQXJyYXlbMF0uY29vcmRQYWlycy5wdXNoKHsgeCwgeSB9KTtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbeF1beV0gPSBcIkhcIjtcbiAgICAgICAgICAgIHgrKztcbiAgICAgICAgICAgIGwtLTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGwgPT09IDIgJiYgdGhpcy5zaGlwc0FycmF5WzFdLmNvb3JkUGFpcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgd2hpbGUgKGwgIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2hpcHNBcnJheVsxXS5jb29yZFBhaXJzLnB1c2goeyB4LCB5IH0pO1xuICAgICAgICAgICAgdGhpcy5ib2FyZFt4XVt5XSA9IFwiSFwiO1xuICAgICAgICAgICAgeCsrO1xuICAgICAgICAgICAgbC0tO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhpcy5ib2FyZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAobCA9PT0gMyAmJiB0aGlzLnNoaXBzQXJyYXlbMl0uY29vcmRQYWlycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB3aGlsZSAobCAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5zaGlwc0FycmF5WzJdLmNvb3JkUGFpcnMucHVzaCh7IHgsIHkgfSk7XG4gICAgICAgICAgICB0aGlzLmJvYXJkW3hdW3ldID0gXCJIXCI7XG4gICAgICAgICAgICB4Kys7XG4gICAgICAgICAgICBsLS07XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aGlzLmJvYXJkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsID09PSA0ICYmIHRoaXMuc2hpcHNBcnJheVszXS5jb29yZFBhaXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHdoaWxlIChsICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnNoaXBzQXJyYXlbM10uY29vcmRQYWlycy5wdXNoKHsgeCwgeSB9KTtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbeF1beV0gPSBcIkhcIjtcbiAgICAgICAgICAgIHgrKztcbiAgICAgICAgICAgIGwtLTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGwgPT09IDUgJiYgdGhpcy5zaGlwc0FycmF5WzRdLmNvb3JkUGFpcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgd2hpbGUgKGwgIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2hpcHNBcnJheVs0XS5jb29yZFBhaXJzLnB1c2goeyB4LCB5IH0pO1xuICAgICAgICAgICAgdGhpcy5ib2FyZFt4XVt5XSA9IFwiSFwiO1xuICAgICAgICAgICAgeCsrO1xuICAgICAgICAgICAgbC0tO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhpcy5ib2FyZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZCA9PT0gXCJWXCIpIHtcbiAgICAgIGxldCByb3dWYWxpZCA9IHRydWU7XG4gICAgICBmb3IgKGxldCBqID0geTsgaiA8IHkgKyBsOyBqKyspIHtcbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbeF1bal0gIT09IFwib1wiIHx8IHkgKyBsID4gMTApIHtcbiAgICAgICAgICByb3dWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocm93VmFsaWQpIHtcbiAgICAgICAgaWYgKGwgPT09IDEgJiYgdGhpcy5zaGlwc0FycmF5WzBdLmNvb3JkUGFpcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgd2hpbGUgKGwgIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2hpcHNBcnJheVswXS5jb29yZFBhaXJzLnB1c2goeyB4LCB5IH0pO1xuICAgICAgICAgICAgdGhpcy5ib2FyZFt4XVt5XSA9IFwiVlwiO1xuICAgICAgICAgICAgeSsrO1xuICAgICAgICAgICAgbC0tO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhpcy5ib2FyZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAobCA9PT0gMiAmJiB0aGlzLnNoaXBzQXJyYXlbMV0uY29vcmRQYWlycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB3aGlsZSAobCAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5zaGlwc0FycmF5WzFdLmNvb3JkUGFpcnMucHVzaCh7IHgsIHkgfSk7XG4gICAgICAgICAgICB0aGlzLmJvYXJkW3hdW3ldID0gXCJWXCI7XG4gICAgICAgICAgICB5Kys7XG4gICAgICAgICAgICBsLS07XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aGlzLmJvYXJkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsID09PSAzICYmIHRoaXMuc2hpcHNBcnJheVsyXS5jb29yZFBhaXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHdoaWxlIChsICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnNoaXBzQXJyYXlbMl0uY29vcmRQYWlycy5wdXNoKHsgeCwgeSB9KTtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbeF1beV0gPSBcIlZcIjtcbiAgICAgICAgICAgIHkrKztcbiAgICAgICAgICAgIGwtLTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGwgPT09IDQgJiYgdGhpcy5zaGlwc0FycmF5WzNdLmNvb3JkUGFpcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgd2hpbGUgKGwgIT09IDAgJiYgeCArIGwgPCAxMSAmJiB5ICsgbCA8IDExKSB7XG4gICAgICAgICAgICB0aGlzLnNoaXBzQXJyYXlbM10uY29vcmRQYWlycy5wdXNoKHsgeCwgeSB9KTtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbeF1beV0gPSBcIlZcIjtcbiAgICAgICAgICAgIHkrKztcbiAgICAgICAgICAgIGwtLTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGwgPT09IDUgJiYgdGhpcy5zaGlwc0FycmF5WzRdLmNvb3JkUGFpcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgd2hpbGUgKGwgIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2hpcHNBcnJheVs0XS5jb29yZFBhaXJzLnB1c2goeyB4LCB5IH0pO1xuICAgICAgICAgICAgdGhpcy5ib2FyZFt4XVt5XSA9IFwiVlwiO1xuICAgICAgICAgICAgeSsrO1xuICAgICAgICAgICAgbC0tO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhpcy5ib2FyZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlY2VpdmVBdHRhY2soeEhpdCwgeUhpdCkge1xuICAgIC8vIGhhbmRsZSBmb3IgcHVzaGluZyBhbGwgdGhlIGhpdHNcbiAgICBsZXQgYWxsb3dlZEhpdCA9IGZhbHNlO1xuICAgIGxldCBzaGlwSGl0ID0gZmFsc2U7IC8vIGNoZWNraW5nIGZvciBzaGlwIHNwZWNpZmljIGhpdFxuICAgIC8vIGkgc2VlIGlmIGl0IGhhcyBhbiBhdHRhY2sgYWxyZWFkeVxuICAgIGlmICh0aGlzLmJvYXJkW3hIaXRdW3lIaXRdICE9PSBcInhcIiAmJiB0aGlzLmJvYXJkW3hIaXRdW3lIaXRdICE9PSBcInMteFwiKSB7XG4gICAgICAvL2lmIGhpdCBpcyBlbXB0eVxuICAgICAgYWxsb3dlZEhpdCA9IHRydWU7XG4gICAgfVxuICAgIC8vIGkgY2hlY2sgaWYgdGhlIGFjdHVhbCBoaXQgaXMgYWxzbyBhIHNoaXAgLT4gbWFya2VkIHdpdGggcy14XG4gICAgdGhpcy5zaGlwc0FycmF5LmZvckVhY2goKG9uZVNoaXApID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb25lU2hpcC5jb29yZFBhaXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBvbmVTaGlwLmNvb3JkUGFpcnNbaV0ueCA9PSB4SGl0ICYmXG4gICAgICAgICAgb25lU2hpcC5jb29yZFBhaXJzW2ldLnkgPT0geUhpdFxuICAgICAgICApIHtcbiAgICAgICAgICBzaGlwSGl0ID0gdHJ1ZTtcbiAgICAgICAgICAvLyB5ZXMgdGhhdCdzIGEgaG90IGFzcyBoaXQgYmFieSFcbiAgICAgICAgICBvbmVTaGlwLnNoaXAuaGl0KCk7XG4gICAgICAgICAgb25lU2hpcC5zaGlwLmlzU3VuaygpO1xuICAgICAgICAgIHRoaXMuY2hlY2tBbGxTdW5rKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoc2hpcEhpdCAmJiBhbGxvd2VkSGl0KSB7XG4gICAgICB0aGlzLmJvYXJkW3hIaXRdW3lIaXRdID0gXCJzLXhcIjtcbiAgICAgIHRoaXMuaGl0Q29vcmRzLnNoaXBIaXRzLnB1c2goeyB4SGl0LCB5SGl0IH0pO1xuICAgIH1cbiAgICBpZiAoIXNoaXBIaXQgJiYgYWxsb3dlZEhpdCkge1xuICAgICAgLy9zdG9yZSB0aGUgaGl0IHBhaXJcbiAgICAgIHRoaXMuYm9hcmRbeEhpdF1beUhpdF0gPSBcInhcIjtcbiAgICAgIHRoaXMuaGl0Q29vcmRzLm1pc3NlZEhpdHMucHVzaCh7IHhIaXQsIHlIaXQgfSk7XG4gICAgfVxuICB9XG4gIGNoZWNrQWxsU3VuaygpIHtcbiAgICBsZXQgYWxsU3VuayA9IHRydWU7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNoaXBzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBvbmx5RXhpc3RpbmdTaGlwcyA9IHRoaXMuc2hpcHNBcnJheVtpXS5jb29yZFBhaXJzLmxlbmd0aDtcbiAgICAgIGlmIChvbmx5RXhpc3RpbmdTaGlwcyA+IDApIHtcbiAgICAgICAgaWYgKHRoaXMuc2hpcHNBcnJheVtpXS5zaGlwLnN1bmsgPT09IGZhbHNlKSB7XG4gICAgICAgICAgYWxsU3VuayA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChhbGxTdW5rKSB7XG4gICAgICB0aGlzLmFsbFN1bmsgPSB0cnVlO1xuICAgIH1cbiAgfVxufVxuXG4vL0dhbWVib2FyZHMgc2hvdWxkIGtlZXAgdHJhY2sgb2YgbWlzc2VkIGF0dGFja3Mgc28gdGhleSBjYW4gZGlzcGxheSB0aGVtIHByb3Blcmx5LlxuLy8gTWFya2luZyBtaXNzZWQgaGl0IHdpdGggeCBhbmQgc2hpcCBoaXQgd2l0aCBzLXhcblxuLy9HYW1lYm9hcmRzIHNob3VsZCBiZSBhYmxlIHRvIHJlcG9ydCB3aGV0aGVyIG9yIG5vdCBhbGwgb2YgdGhlaXIgc2hpcHMgaGF2ZSBiZWVuIHN1bmsuXG4vL0V2ZXJ5dGltZSBpIGhpdCBhIHNoaXAsIGkgd2lsbCBjaGVjayBpZiBpdCdzIHN1bmssIGFuZCB0aGVuIGlmIGFsbCBvZiB0aGVtIGFyZSBzdW5rXG4iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuL2dhbWJvYXJkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMucGxheWVyQm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gIH1cbiAgcGxhY2VQbGF5ZXJTaGlwKG5ld0wsIG5ld1gsIG5ld1ksIG5ld0QpIHtcbiAgICB0aGlzLnBsYXllckJvYXJkLnBsYWNlU2hpcChuZXdMLCBuZXdYLCBuZXdZLCBuZXdEKTtcbiAgICBsZXQgcGxhY2VkU2hpcHMgPSB0aGlzLnBsYXllckJvYXJkLnNoaXBzQXJyYXkuZmlsdGVyKFxuICAgICAgKHNoaXApID0+IHNoaXAuY29vcmRQYWlycy5sZW5ndGggPiAwXG4gICAgKTtcbiAgICBwbGFjZWRTaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzaGlwLmNvb3JkUGFpcnMubGVuZ3RoKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiM3MDcxN2NcIjtcbiAgICAgIGNvbnNvbGUubG9nKFwiaGVyZVwiKTtcbiAgICB9KTtcblxuICAgIGNvbnNvbGUubG9nKHRoaXMucGxheWVyQm9hcmQuc2hpcHNBcnJheSk7XG4gIH1cbiAgcGxheWVyU2hvdChteVRhcmdldCwgbXlYLCBteVkpIHtcbiAgICBteVRhcmdldC5wbGF5ZXJCb2FyZC5yZWNlaXZlQXR0YWNrKG15WCwgbXlZKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKGxlbmd0aCwgbmFtZSwgaGl0cyA9IDApIHtcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuaGl0cyA9IGhpdHM7XG4gICAgdGhpcy5zdW5rID0gZmFsc2U7XG4gIH1cbiAgaGl0KCkge1xuICAgIGlmICh0aGlzLmhpdHMgPT09IHRoaXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHJldHVybiB0aGlzLmhpdHMrKztcbiAgfVxuICBpc1N1bmsoKSB7XG4gICAgaWYgKHRoaXMubGVuZ3RoID09PSB0aGlzLmhpdHMpIHtcbiAgICAgIHJldHVybiAodGhpcy5zdW5rID0gdHJ1ZSk7XG4gICAgfSBlbHNlIHJldHVybiAodGhpcy5zdW5rID0gZmFsc2UpO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgQUkgZnJvbSBcIi4vZmFjdG9yaWVzL0FJXCI7XG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL2ZhY3Rvcmllcy9wbGF5ZXJcIjtcbmNvbnN0IGNvbXB1dGVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbXB1dGVyLWFycmF5XCIpO1xuY29uc3QgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci1hcnJheVwiKTtcbmNvbnN0IHBsYWNlU2hpcHNJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGFjZS1zaGlwcy1pbmZvXCIpO1xuY29uc3QgY2FuU3RhcnRHYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYW4tc3RhcnRcIik7XG5jb25zdCB3aW5uZXJMYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2lubmVyXCIpO1xuY29uc3QgcGxheWVyUGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci1ib2FyZFwiKTtcbmNvbnN0IGNvbXB1dGVyUGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbXB1dGVyLWJvYXJkXCIpO1xuXG5sZXQgcGxheWVyID0gbmV3IFBsYXllcihcInBsYXllclwiKTtcbmxldCBjb21wdXRlciA9IG5ldyBBSShcImNvbXB1dGVyXCIpO1xubGV0IHNoaXBMZW5ndGggPSBudWxsO1xubGV0IHNoaXBEaXJlY3Rpb24gPSBcIlZcIjtcblxuY29uc3QgZ2FtZSA9ICgpID0+IHtcbiAgcGxheWVyID0gbmV3IFBsYXllcihcInBsYXllclwiKTtcbiAgY29tcHV0ZXIgPSBuZXcgQUkoXCJjb21wdXRlclwiKTtcbiAgZ2FtZVN0YXJ0KCk7XG59O1xuXG5jb25zdCBnYW1lU3RhcnQgPSAoKSA9PiB7XG4gIGNsZWFyQm9hcmQocGxheWVyKTtcbiAgcmVuZGVyQm9hcmQocGxheWVyKTtcbiAgY2xlYXJCb2FyZChjb21wdXRlcik7XG4gIHJlbmRlckJvYXJkKGNvbXB1dGVyKTtcbn07XG5cbmNvbnN0IHJlbmRlckJvYXJkID0gKGJvYXJkTmFtZSkgPT4ge1xuICBsZXQgdGFyZ2V0QXJyYXkgPSBib2FyZE5hbWUucGxheWVyQm9hcmQuYm9hcmQ7XG4gIGNvbnN0IHRhcmdldEFwcGVuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2JvYXJkTmFtZS5uYW1lfS1hcnJheWApO1xuICB0YXJnZXRBcnJheS5mb3JFYWNoKChyb3csIHJvd0luZGV4KSA9PiB7XG4gICAgY29uc3QgbXlSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG15Um93LmNsYXNzTGlzdC5hZGQoXCJyb3dcIik7XG4gICAgcm93LmZvckVhY2goKGNlbGwsIGNvbHVtbkluZGV4KSA9PiB7XG4gICAgICBjb25zdCBteUNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbXlDZWxsLmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpO1xuICAgICAgbXlDZWxsLnNldEF0dHJpYnV0ZShcImRhdGEteFwiLCByb3dJbmRleCk7XG4gICAgICBteUNlbGwuc2V0QXR0cmlidXRlKFwiZGF0YS15XCIsIGNvbHVtbkluZGV4KTtcbiAgICAgIGxldCB0aGlzQ2VsbCA9IHRhcmdldEFycmF5W3Jvd0luZGV4XVtjb2x1bW5JbmRleF07XG4gICAgICBpZiAodGhpc0NlbGwgPT09IFwieFwiKSB7XG4gICAgICAgIG15Q2VsbC5jbGFzc0xpc3QuYWRkKFwidW5jbGlja2FibGVcIik7XG4gICAgICAgIG15Q2VsbC5jbGFzc0xpc3QuYWRkKFwibWlzc2VkLWhpdFwiKTtcbiAgICAgICAgbXlDZWxsLmNsYXNzTGlzdC5hZGQoXCJmYS1yZWd1bGFyXCIpO1xuICAgICAgICBteUNlbGwuY2xhc3NMaXN0LmFkZChcImZhLXhcIik7XG4gICAgICB9IGVsc2UgaWYgKHRoaXNDZWxsID09PSBcInMteFwiKSB7XG4gICAgICAgIG15Q2VsbC5jbGFzc0xpc3QuYWRkKFwidW5jbGlja2FibGVcIik7XG4gICAgICAgIG15Q2VsbC5jbGFzc0xpc3QuYWRkKFwiY29ycmVjdC1oaXRcIik7XG4gICAgICAgIG15Q2VsbC5jbGFzc0xpc3QuYWRkKFwiZmEtcmVndWxhclwiKTtcbiAgICAgICAgbXlDZWxsLmNsYXNzTGlzdC5hZGQoXCJmYS14XCIpO1xuICAgICAgICBteUNlbGwuY2xhc3NMaXN0LmFkZChcInNoaXAtc3R5bGVcIik7XG4gICAgICB9XG4gICAgICBteVJvdy5hcHBlbmRDaGlsZChteUNlbGwpO1xuICAgICAgaWYgKGJvYXJkTmFtZS5uYW1lID09PSBcImNvbXB1dGVyXCIpIHtcbiAgICAgICAgbXlDZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzQ2VsbCAhPT0gXCJ4XCIgfHwgdGhpc0NlbGwgIT09IFwicy14XCIpIHtcbiAgICAgICAgICAgIGF0dGFja0V2ZW50KGUpO1xuICAgICAgICAgICAgdXBkYXRlQm9hcmQoYm9hcmROYW1lKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKGJvYXJkTmFtZS5uYW1lID09PSBcInBsYXllclwiKSB7XG4gICAgICAgIGlmICh0aGlzQ2VsbCA9PT0gXCJIXCIpIHtcbiAgICAgICAgICBteUNlbGwuY2xhc3NMaXN0LmFkZChcInNoaXAtc3R5bGVcIik7XG4gICAgICAgICAgbXlDZWxsLmNsYXNzTGlzdC5hZGQoXCJpbnZhbGlkLXBsYWNlbWVudFwiKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzQ2VsbCA9PT0gXCJWXCIpIHtcbiAgICAgICAgICBteUNlbGwuY2xhc3NMaXN0LmFkZChcInNoaXAtc3R5bGVcIik7XG4gICAgICAgICAgbXlDZWxsLmNsYXNzTGlzdC5hZGQoXCJpbnZhbGlkLXBsYWNlbWVudFwiKTtcbiAgICAgICAgfVxuICAgICAgICBteUNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHBsYWNlU2hpcEV2ZW50KGUpO1xuICAgICAgICAgIHVwZGF0ZUJvYXJkKGJvYXJkTmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRhcmdldEFwcGVuZC5hcHBlbmRDaGlsZChteVJvdyk7XG4gIH0pO1xufTtcblxuLy8gQ0hFQ0tJTkcgSUYgQUxMIFNISVBTIFdFUkUgUExBQ0VEIFNPIFdFIENBTiBTVEFSVCBBVFRBQ0tJTkdcbmNvbnN0IGNoZWNrUGxheWVyU2hpcHMgPSAoKSA9PiB7XG4gIGxldCB0YXJnZXRDaGVjayA9IHBsYXllci5wbGF5ZXJCb2FyZC5zaGlwc0FycmF5O1xuICBsZXQgcmVzcG9uc2UgPSB0YXJnZXRDaGVjay5ldmVyeSgoc2hpcCkgPT4gc2hpcC5jb29yZFBhaXJzLmxlbmd0aCA+IDApO1xuXG4gIGlmIChyZXNwb25zZSkge1xuICAgIC8vd2hlbiB5b3UgcGxhY2UgYWxsIHNoaXBzLCBoaWRlIG15IHBhbmVsXG4gICAgcGxheWVyUGFuZWwuY2xhc3NMaXN0LmFkZChcImhpZGUtb24tbW9iaWxlXCIpO1xuICAgIC8vIGRpc3BsYXkgdGhlIGNvbXAgcGFuZWwgZm9yIGZpcnN0IG1vdmVcbiAgICBjb21wdXRlclBhbmVsLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlLW9uLW1vYmlsZVwiKTtcbiAgfVxuICByZXR1cm4gcmVzcG9uc2U7XG59O1xuXG4vLyBBVFRBQ0tJTkcgQU4gRU5FTVksIEJFSU5HIEFUVEFDS0VEIEJZIENPTVBVVEVSLCBBTkQgQ0hFQ0tJTkcgRk9SIFdJTiBDT05ESVRJT05cbmNvbnN0IGF0dGFja0V2ZW50ID0gKGUpID0+IHtcbiAgbGV0IHggPSBwYXJzZUludChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXhcIikpO1xuICBsZXQgeSA9IHBhcnNlSW50KGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEteVwiKSk7XG4gIGxldCBjYW5BdHRhY2sgPSBjaGVja1BsYXllclNoaXBzKCk7XG4gIGlmIChjYW5BdHRhY2spIHtcbiAgICAvLyBQTEFZRVIgVFVSTlxuICAgIC8vIHdoZW4gcGxheWVyJ3MgdHVybiBpcyBvbiwgaSBhbHJlYWR5IHNlZSB0aGUgY29tcCBwYW5lbFxuICAgIC8vaSBhdHRhY2tcbiAgICBwbGF5ZXIucGxheWVyU2hvdChjb21wdXRlciwgeCwgeSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAvLyBhZnRlciBhdHRhY2ssIGkgaGlkZSB0aGUgY29tcCBib2FyZCBhbmQgZGlzcGxheSBtaW5lXG4gICAgICBjb21wdXRlclBhbmVsLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNwbGF5LW9uLW1vYmlsZVwiKTtcbiAgICAgIGNvbXB1dGVyUGFuZWwuY2xhc3NMaXN0LmFkZChcImhpZGUtb24tbW9iaWxlXCIpO1xuICAgICAgcGxheWVyUGFuZWwuY2xhc3NMaXN0LnJlbW92ZShcImhpZGUtb24tbW9iaWxlXCIpO1xuICAgICAgcGxheWVyUGFuZWwuY2xhc3NMaXN0LmFkZChcImRpc3BsYXktb24tbW9iaWxlXCIpO1xuICAgICAgY29uc29sZS5sb2coXCJoaWRpbmcgdGhlIGNvbXB1dGVyIGJvYXJkIGFmdGVyIG15IGF0dGFjayBhbmQgc2hvd2luZyBtaW5lXCIpO1xuICAgIH0sIDMwMCk7XG4gICAgaWYgKGNvbXB1dGVyLnBsYXllckJvYXJkLmFsbFN1bmspIHtcbiAgICAgIGVuZEdhbWUocGxheWVyKTtcbiAgICB9XG4gICAgLy8gQUkgVFVSTlxuICAgIGNvbXB1dGVyLmNvbXB1dGVyU2hvdChwbGF5ZXIpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcGxheWVyUGFuZWwuY2xhc3NMaXN0LnJlbW92ZShcImRpc3BsYXktb24tbW9iaWxlXCIpO1xuICAgICAgcGxheWVyUGFuZWwuY2xhc3NMaXN0LmFkZChcImhpZGUtb24tbW9iaWxlXCIpO1xuICAgICAgY29tcHV0ZXJQYW5lbC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZS1vbi1tb2JpbGVcIik7XG4gICAgICBjb21wdXRlclBhbmVsLmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5LW9uLW1vYmlsZVwiKTtcbiAgICB9LCAxMDAwKTtcbiAgICB1cGRhdGVCb2FyZChwbGF5ZXIpO1xuICAgIGlmIChwbGF5ZXIucGxheWVyQm9hcmQuYWxsU3Vuaykge1xuICAgICAgZW5kR2FtZShjb21wdXRlcik7XG4gICAgfVxuICB9XG59O1xuXG4vLyBFTkQgR0FNRSAoTUFZQkUgQUREIFwiUExBWSBBR0FJTj9cIilcbmNvbnN0IGVuZEdhbWUgPSAod2lubmVyTmFtZSkgPT4ge1xuICBjb21wdXRlckJvYXJkLmNsYXNzTGlzdC5hZGQoXCJ1bmNsaWNrYWJsZVwiKTtcbiAgY2FuU3RhcnRHYW1lLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgd2lubmVyTGFiZWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgaWYgKHdpbm5lck5hbWUubmFtZSA9PT0gXCJwbGF5ZXJcIikge1xuICAgIHdpbm5lckxhYmVsLmlubmVyVGV4dCA9IGBZb3UgV29uIWA7XG4gIH0gZWxzZSB3aW5uZXJMYWJlbC5pbm5lclRleHQgPSBgWW91IExvc3QhIFRyeSBhZ2Fpbj8gLT5gO1xufTtcblxuLy8gUExBQ0lORyBQTEFZRVIgU0hJUCBPTiBDTElDS1xuY29uc3QgcGxhY2VTaGlwRXZlbnQgPSAoZSkgPT4ge1xuICBsZXQgeCA9IHBhcnNlSW50KGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEteFwiKSk7XG4gIGxldCB5ID0gcGFyc2VJbnQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS15XCIpKTtcbiAgcGxheWVyLnBsYWNlUGxheWVyU2hpcChzaGlwTGVuZ3RoLCB4LCB5LCBzaGlwRGlyZWN0aW9uKTtcbiAgbGV0IGFsbFNoaXBzUGxhY2VkID0gY2hlY2tQbGF5ZXJTaGlwcygpO1xuICBpZiAoYWxsU2hpcHNQbGFjZWQpIHtcbiAgICBwbGFjZVNoaXBzSW5mby5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgY2FuU3RhcnRHYW1lLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgY29tcHV0ZXJCb2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwidW5jbGlja2FibGVcIik7XG4gICAgcGxheWVyQm9hcmQuY2xhc3NMaXN0LmFkZChcInVuY2xpY2thYmxlXCIpO1xuICAgIGRpcmVjdGlvblNlbGVjdG9yLmNsYXNzTGlzdC5hZGQoXCJ1bmNsaWNrYWJsZVwiKTtcbiAgfVxuICBzaGlwTGVuZ3RoID0gbnVsbDtcbn07XG5cbmNvbnN0IGNsZWFyQm9hcmQgPSAoYm9hcmQpID0+IHtcbiAgY29uc3QgdGFyZ2V0RGl2ID0gYm9hcmQubmFtZTtcbiAgY29uc3QgdGFyZ2V0Q2xlYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0YXJnZXREaXZ9LWFycmF5YCk7XG4gIHRhcmdldENsZWFyLmlubmVySFRNTCA9IFwiXCI7XG59O1xuXG5jb25zdCB1cGRhdGVCb2FyZCA9IChib2FyZCkgPT4ge1xuICBjbGVhckJvYXJkKGJvYXJkKTtcbiAgcmVuZGVyQm9hcmQoYm9hcmQpO1xufTtcblxuLy8gTkVXIEdBTUUgQlVUVE9OXG5sZXQgbmV3R2FtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LWdhbWVcIik7XG5uZXdHYW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHBsYWNlU2hpcHNJbmZvLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIGNhblN0YXJ0R2FtZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIHdpbm5lckxhYmVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgcGxheWVyQm9hcmQuY2xhc3NMaXN0LnJlbW92ZShcInVuY2xpY2thYmxlXCIpO1xuICBnYW1lKCk7XG59KTtcblxuLy8gRE9NIFRPR0dMRSBTSElQUyBTRUxFQ1RPUlNcbmNvbnN0IGxlbmd0aFNlbGVjdG9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGVuZ3RoLXNlbGVjdG9yXCIpO1xubGVuZ3RoU2VsZWN0b3JzLmZvckVhY2goKHNlbGVjdG9yKSA9PiB7XG4gIHNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIHNoaXBMZW5ndGggPSBwYXJzZUludChlLnRhcmdldC5pZCk7XG4gIH0pO1xufSk7XG5cbi8vIERPTSBUT0dHTEUgRElSRUNUSU9OXG5jb25zdCBkaXJlY3Rpb25TZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLWRpcmVjdGlvblwiKTtcbmRpcmVjdGlvblNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGlmIChkaXJlY3Rpb25TZWxlY3Rvci5pbm5lclRleHQgPT09IFwiSFwiKSB7XG4gICAgc2hpcERpcmVjdGlvbiA9IFwiVlwiO1xuICAgIGRpcmVjdGlvblNlbGVjdG9yLmlubmVyVGV4dCA9IFwiVlwiO1xuICB9IGVsc2UgaWYgKGRpcmVjdGlvblNlbGVjdG9yLmlubmVyVGV4dCA9PT0gXCJWXCIpIHtcbiAgICBzaGlwRGlyZWN0aW9uID0gXCJIXCI7XG4gICAgZGlyZWN0aW9uU2VsZWN0b3IuaW5uZXJUZXh0ID0gXCJIXCI7XG4gIH1cbn0pO1xuLy8gSE9XIFRPIFBMQVkgVE9HR0xFXG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxcIik7XG5cbnBsYWNlU2hpcHNJbmZvLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xuICBtb2RhbC5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG59KTtcbm1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiB7XG4gIG1vZGFsLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xufSk7XG5tb2RhbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcbiAgbW9kYWwuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xufSk7XG5jb25zdCBtb2RhbE1vYmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtbW9iaWxlXCIpO1xuY29uc3QgY2xvc2VNb2RhbE1vYmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2UtbW9kYWxcIik7XG5wbGFjZVNoaXBzSW5mby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBtb2RhbE1vYmlsZS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG59KTtcbmNsb3NlTW9kYWxNb2JpbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgbW9kYWxNb2JpbGUuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG59KTtcbmdhbWUoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==