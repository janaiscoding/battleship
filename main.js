/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/factories/gameboard.js":
/*!************************************!*\
  !*** ./src/factories/gameboard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createBoard": () => (/* binding */ createBoard),
/* harmony export */   "placeShip": () => (/* binding */ placeShip)
/* harmony export */ });
// Gameboard Factory
const createBoard = (size) => {
  let board = [];
  for (let i = 0; i < size; i++) {
    board[i] = [];
    for (let j = 0; j < size; j++) {
      board[i][j] = "o";
    }
  }
  return board;
};

//2. Gameboards should be able to place ships at specific coordinates by calling the ship factory function.
//saved old
const placeShip2 = (b, l, x, y, d) => {
  // b = board, l = ship length, x = vertical coord, y = horizontal coord, d = direction
  while (l !== 0 && l < 6 && x + l < 11 && y + l < 11) {
    //does not go overboard
    if (d === "V") {
      // v is vertical, modifies x
      b[x][y] = "V";
      x++;
    } else if (d === "H") {
      //h is horizontal, modifies y
      b[x][y] = "H";
      y++;
    }
    l--;
  }
  return b;
};

// refactor
const placeShip = (b, l, x, y, d) => {
  if (d === "V") {
    for (let i = x; i < x + l; i++) {
      if (b[i][y] === "H" || b[i][y] === "V") console.log("brick");
    }

    while (l !== 0 && l < 6 && x + l < 11 && y + l < 11) {
      b[x][y] = "V";
      x++;
    }
    l--;
  } else if (d === "H") {
    for (let j = y; j < y + l; j++) {
      if (b[x][j] === "H" || b[x][j] === "V") console.log("brick");
    }
    while (l !== 0 && l < 6 && x + l < 11 && y + l < 11) {
      b[x][y] = "H";
      y++;
    }
    l--;
  }
  return b;
};
//Gameboards should have a receiveAttack function that takes a pair of coordinates, determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot.
const receiveAttack = (b, x, y, h) => {};
//Gameboards should keep track of missed attacks so they can display them properly.

//Gameboards should be able to report whether or not all of their ships have been sunk.



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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _factories_gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories/gameboard */ "./src/factories/gameboard.js");

let testBoard = (0,_factories_gameboard__WEBPACK_IMPORTED_MODULE_0__.createBoard)(10);
console.log(testBoard);
console.log('meows')
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsVUFBVTtBQUM1QjtBQUNBLG9CQUFvQixVQUFVO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsV0FBVztBQUMvQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osb0JBQW9CLFdBQVc7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDa0M7Ozs7Ozs7VUM3RGxDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOK0Q7QUFDL0QsZ0JBQWdCLGlFQUFXO0FBQzNCO0FBQ0Esb0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ZhY3Rvcmllcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gR2FtZWJvYXJkIEZhY3RvcnlcbmNvbnN0IGNyZWF0ZUJvYXJkID0gKHNpemUpID0+IHtcbiAgbGV0IGJvYXJkID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgYm9hcmRbaV0gPSBbXTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNpemU7IGorKykge1xuICAgICAgYm9hcmRbaV1bal0gPSBcIm9cIjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGJvYXJkO1xufTtcblxuLy8yLiBHYW1lYm9hcmRzIHNob3VsZCBiZSBhYmxlIHRvIHBsYWNlIHNoaXBzIGF0IHNwZWNpZmljIGNvb3JkaW5hdGVzIGJ5IGNhbGxpbmcgdGhlIHNoaXAgZmFjdG9yeSBmdW5jdGlvbi5cbi8vc2F2ZWQgb2xkXG5jb25zdCBwbGFjZVNoaXAyID0gKGIsIGwsIHgsIHksIGQpID0+IHtcbiAgLy8gYiA9IGJvYXJkLCBsID0gc2hpcCBsZW5ndGgsIHggPSB2ZXJ0aWNhbCBjb29yZCwgeSA9IGhvcml6b250YWwgY29vcmQsIGQgPSBkaXJlY3Rpb25cbiAgd2hpbGUgKGwgIT09IDAgJiYgbCA8IDYgJiYgeCArIGwgPCAxMSAmJiB5ICsgbCA8IDExKSB7XG4gICAgLy9kb2VzIG5vdCBnbyBvdmVyYm9hcmRcbiAgICBpZiAoZCA9PT0gXCJWXCIpIHtcbiAgICAgIC8vIHYgaXMgdmVydGljYWwsIG1vZGlmaWVzIHhcbiAgICAgIGJbeF1beV0gPSBcIlZcIjtcbiAgICAgIHgrKztcbiAgICB9IGVsc2UgaWYgKGQgPT09IFwiSFwiKSB7XG4gICAgICAvL2ggaXMgaG9yaXpvbnRhbCwgbW9kaWZpZXMgeVxuICAgICAgYlt4XVt5XSA9IFwiSFwiO1xuICAgICAgeSsrO1xuICAgIH1cbiAgICBsLS07XG4gIH1cbiAgcmV0dXJuIGI7XG59O1xuXG4vLyByZWZhY3RvclxuY29uc3QgcGxhY2VTaGlwID0gKGIsIGwsIHgsIHksIGQpID0+IHtcbiAgaWYgKGQgPT09IFwiVlwiKSB7XG4gICAgZm9yIChsZXQgaSA9IHg7IGkgPCB4ICsgbDsgaSsrKSB7XG4gICAgICBpZiAoYltpXVt5XSA9PT0gXCJIXCIgfHwgYltpXVt5XSA9PT0gXCJWXCIpIGNvbnNvbGUubG9nKFwiYnJpY2tcIik7XG4gICAgfVxuXG4gICAgd2hpbGUgKGwgIT09IDAgJiYgbCA8IDYgJiYgeCArIGwgPCAxMSAmJiB5ICsgbCA8IDExKSB7XG4gICAgICBiW3hdW3ldID0gXCJWXCI7XG4gICAgICB4Kys7XG4gICAgfVxuICAgIGwtLTtcbiAgfSBlbHNlIGlmIChkID09PSBcIkhcIikge1xuICAgIGZvciAobGV0IGogPSB5OyBqIDwgeSArIGw7IGorKykge1xuICAgICAgaWYgKGJbeF1bal0gPT09IFwiSFwiIHx8IGJbeF1bal0gPT09IFwiVlwiKSBjb25zb2xlLmxvZyhcImJyaWNrXCIpO1xuICAgIH1cbiAgICB3aGlsZSAobCAhPT0gMCAmJiBsIDwgNiAmJiB4ICsgbCA8IDExICYmIHkgKyBsIDwgMTEpIHtcbiAgICAgIGJbeF1beV0gPSBcIkhcIjtcbiAgICAgIHkrKztcbiAgICB9XG4gICAgbC0tO1xuICB9XG4gIHJldHVybiBiO1xufTtcbi8vR2FtZWJvYXJkcyBzaG91bGQgaGF2ZSBhIHJlY2VpdmVBdHRhY2sgZnVuY3Rpb24gdGhhdCB0YWtlcyBhIHBhaXIgb2YgY29vcmRpbmF0ZXMsIGRldGVybWluZXMgd2hldGhlciBvciBub3QgdGhlIGF0dGFjayBoaXQgYSBzaGlwIGFuZCB0aGVuIHNlbmRzIHRoZSDigJhoaXTigJkgZnVuY3Rpb24gdG8gdGhlIGNvcnJlY3Qgc2hpcCwgb3IgcmVjb3JkcyB0aGUgY29vcmRpbmF0ZXMgb2YgdGhlIG1pc3NlZCBzaG90LlxuY29uc3QgcmVjZWl2ZUF0dGFjayA9IChiLCB4LCB5LCBoKSA9PiB7fTtcbi8vR2FtZWJvYXJkcyBzaG91bGQga2VlcCB0cmFjayBvZiBtaXNzZWQgYXR0YWNrcyBzbyB0aGV5IGNhbiBkaXNwbGF5IHRoZW0gcHJvcGVybHkuXG5cbi8vR2FtZWJvYXJkcyBzaG91bGQgYmUgYWJsZSB0byByZXBvcnQgd2hldGhlciBvciBub3QgYWxsIG9mIHRoZWlyIHNoaXBzIGhhdmUgYmVlbiBzdW5rLlxuZXhwb3J0IHsgY3JlYXRlQm9hcmQsIHBsYWNlU2hpcCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBjcmVhdGVCb2FyZCwgcGxhY2VTaGlwIH0gZnJvbSBcIi4vZmFjdG9yaWVzL2dhbWVib2FyZFwiO1xubGV0IHRlc3RCb2FyZCA9IGNyZWF0ZUJvYXJkKDEwKTtcbmNvbnNvbGUubG9nKHRlc3RCb2FyZCk7XG5jb25zb2xlLmxvZygnbWVvd3MnKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==