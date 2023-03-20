/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/factories/gamboardClass.js":
/*!****************************************!*\
  !*** ./src/factories/gamboardClass.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/factories/ship.js");

class Gameboard {
  constructor() {
    this.board = [
      ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
      ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
      ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
      ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
      ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
      ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
      ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
      ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
      ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
      ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ]; //default board
    this.shipsArray = []; // array will be filled with each ship and it's coordonates
    this.hitCoords = [];
  }

  placeShip(l, x, y, d) {
    if (d === "V") {
      let columnValid = true;
      for (let i = x; i < x + l; i++) {
        if (this.board[i][y] !== "o") {
          columnValid = false;
          break;
        }
      }
      if (columnValid) {
        let coordPairs = [];
        let pushedShip = new _ship__WEBPACK_IMPORTED_MODULE_0__["default"](l);
        this.shipsArray.push({
          ship: pushedShip,
          coordPairs: coordPairs,
        });
        while (l !== 0 && l < 6 && x + l < 11 && y + l < 11) {
          this.board[x][y] = "V";
          coordPairs.push({ x, y });
          x++;
          l--;
        }

        return this.board;
      }
    } else if (d === "H") {
      let rowValid = true;
      for (let j = y; j < y + l; j++) {
        if (this.board[x][j] !== "o") {
          rowValid = false;
          break;
        }
      }
      if (rowValid) {
        let coordPairs = [];
        let pushedShip = new _ship__WEBPACK_IMPORTED_MODULE_0__["default"](l);
        this.shipsArray.push({
          ship: pushedShip,
          coordPairs: coordPairs,
        });
        while (l !== 0 && l < 6 && x + l < 11 && y + l < 11) {
          this.board[x][y] = "H";
          coordPairs.push({ x, y });
          y++;
          l--;
        }
        return this.board;
      }
    }
  }
  receiveAttack(xHit, yHit) {
    let allowedHit = false;
    // i see if it has an attack already
    if (this.board[xHit][yHit] !== "x") {
      allowedHit = true;
    }
    console.log("My hit coords are:", {xHit,yHit})
    // i check if the actual hit is also a ship
    this.shipsArray.forEach((oneShip) => {
      for (let i = 0; i < oneShip.coordPairs.length; i++) {
        console.log(oneShip.coordPairs[i])
        if (oneShip.coordPairs[i].x == xHit && oneShip.coordPairs[i].y == yHit) {
            console.log('yes')
            oneShip.ship.hit()
          //  checkSunk()
        }
      }
    });

    if (allowedHit) {
      this.board[xHit][yHit] = "x";
      this.hitCoords.push({ xHit, yHit }); //store the hit pair
    }
  }
}

//Gameboards should keep track of missed attacks so they can display them properly.

//Gameboards should be able to report whether or not all of their ships have been sunk.


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
  constructor(length, hits = 0) {
    this.length = length;
    this.hits = hits;
    this.sunk = false;
  }
  hit() {
    if (this.hits === this.length) {
      return;
    }
    else return this.hits++;
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
/* harmony import */ var _factories_gamboardClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories/gamboardClass */ "./src/factories/gamboardClass.js");

let testBoard = new _factories_gamboardClass__WEBPACK_IMPORTED_MODULE_0__["default"]();
testBoard.placeShip(5, 0, 5, "H");
testBoard.placeShip(4, 1, 5, "V");
testBoard.receiveAttack(0, 0);
testBoard.receiveAttack(0, 5);
console.log(testBoard);
console.log("meows");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDWDtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCwwQkFBMEI7QUFDMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsV0FBVztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qiw2Q0FBSTtBQUNqQztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLDRCQUE0QixNQUFNO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0Esc0JBQXNCLFdBQVc7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsNkNBQUk7QUFDakM7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSw0QkFBNEIsTUFBTTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxVQUFVO0FBQ2pEO0FBQ0E7QUFDQSxzQkFBc0IsK0JBQStCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsNEJBQTRCLFlBQVksR0FBRztBQUMzQztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ2pHZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7Ozs7OztVQ2pCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmtEO0FBQ2xELG9CQUFvQixnRUFBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ZhY3Rvcmllcy9nYW1ib2FyZENsYXNzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZmFjdG9yaWVzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNoaXAgZnJvbSBcIi4vc2hpcFwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZWJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5ib2FyZCA9IFtcbiAgICAgIFtcIm9cIiwgXCJvXCIsIFwib1wiLCBcIm9cIiwgXCJvXCIsIFwib1wiLCBcIm9cIiwgXCJvXCIsIFwib1wiLCBcIm9cIl0sXG4gICAgICBbXCJvXCIsIFwib1wiLCBcIm9cIiwgXCJvXCIsIFwib1wiLCBcIm9cIiwgXCJvXCIsIFwib1wiLCBcIm9cIiwgXCJvXCJdLFxuICAgICAgW1wib1wiLCBcIm9cIiwgXCJvXCIsIFwib1wiLCBcIm9cIiwgXCJvXCIsIFwib1wiLCBcIm9cIiwgXCJvXCIsIFwib1wiXSxcbiAgICAgIFtcIm9cIiwgXCJvXCIsIFwib1wiLCBcIm9cIiwgXCJvXCIsIFwib1wiLCBcIm9cIiwgXCJvXCIsIFwib1wiLCBcIm9cIl0sXG4gICAgICBbXCJvXCIsIFwib1wiLCBcIm9cIiwgXCJvXCIsIFwib1wiLCBcIm9cIiwgXCJvXCIsIFwib1wiLCBcIm9cIiwgXCJvXCJdLFxuICAgICAgW1wib1wiLCBcIm9cIiwgXCJvXCIsIFwib1wiLCBcIm9cIiwgXCJvXCIsIFwib1wiLCBcIm9cIiwgXCJvXCIsIFwib1wiXSxcbiAgICAgIFtcIm9cIiwgXCJvXCIsIFwib1wiLCBcIm9cIiwgXCJvXCIsIFwib1wiLCBcIm9cIiwgXCJvXCIsIFwib1wiLCBcIm9cIl0sXG4gICAgICBbXCJvXCIsIFwib1wiLCBcIm9cIiwgXCJvXCIsIFwib1wiLCBcIm9cIiwgXCJvXCIsIFwib1wiLCBcIm9cIiwgXCJvXCJdLFxuICAgICAgW1wib1wiLCBcIm9cIiwgXCJvXCIsIFwib1wiLCBcIm9cIiwgXCJvXCIsIFwib1wiLCBcIm9cIiwgXCJvXCIsIFwib1wiXSxcbiAgICAgIFtcIm9cIiwgXCJvXCIsIFwib1wiLCBcIm9cIiwgXCJvXCIsIFwib1wiLCBcIm9cIiwgXCJvXCIsIFwib1wiLCBcIm9cIl0sXG4gICAgXTsgLy9kZWZhdWx0IGJvYXJkXG4gICAgdGhpcy5zaGlwc0FycmF5ID0gW107IC8vIGFycmF5IHdpbGwgYmUgZmlsbGVkIHdpdGggZWFjaCBzaGlwIGFuZCBpdCdzIGNvb3Jkb25hdGVzXG4gICAgdGhpcy5oaXRDb29yZHMgPSBbXTtcbiAgfVxuXG4gIHBsYWNlU2hpcChsLCB4LCB5LCBkKSB7XG4gICAgaWYgKGQgPT09IFwiVlwiKSB7XG4gICAgICBsZXQgY29sdW1uVmFsaWQgPSB0cnVlO1xuICAgICAgZm9yIChsZXQgaSA9IHg7IGkgPCB4ICsgbDsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLmJvYXJkW2ldW3ldICE9PSBcIm9cIikge1xuICAgICAgICAgIGNvbHVtblZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChjb2x1bW5WYWxpZCkge1xuICAgICAgICBsZXQgY29vcmRQYWlycyA9IFtdO1xuICAgICAgICBsZXQgcHVzaGVkU2hpcCA9IG5ldyBTaGlwKGwpO1xuICAgICAgICB0aGlzLnNoaXBzQXJyYXkucHVzaCh7XG4gICAgICAgICAgc2hpcDogcHVzaGVkU2hpcCxcbiAgICAgICAgICBjb29yZFBhaXJzOiBjb29yZFBhaXJzLFxuICAgICAgICB9KTtcbiAgICAgICAgd2hpbGUgKGwgIT09IDAgJiYgbCA8IDYgJiYgeCArIGwgPCAxMSAmJiB5ICsgbCA8IDExKSB7XG4gICAgICAgICAgdGhpcy5ib2FyZFt4XVt5XSA9IFwiVlwiO1xuICAgICAgICAgIGNvb3JkUGFpcnMucHVzaCh7IHgsIHkgfSk7XG4gICAgICAgICAgeCsrO1xuICAgICAgICAgIGwtLTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmJvYXJkO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZCA9PT0gXCJIXCIpIHtcbiAgICAgIGxldCByb3dWYWxpZCA9IHRydWU7XG4gICAgICBmb3IgKGxldCBqID0geTsgaiA8IHkgKyBsOyBqKyspIHtcbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbeF1bal0gIT09IFwib1wiKSB7XG4gICAgICAgICAgcm93VmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHJvd1ZhbGlkKSB7XG4gICAgICAgIGxldCBjb29yZFBhaXJzID0gW107XG4gICAgICAgIGxldCBwdXNoZWRTaGlwID0gbmV3IFNoaXAobCk7XG4gICAgICAgIHRoaXMuc2hpcHNBcnJheS5wdXNoKHtcbiAgICAgICAgICBzaGlwOiBwdXNoZWRTaGlwLFxuICAgICAgICAgIGNvb3JkUGFpcnM6IGNvb3JkUGFpcnMsXG4gICAgICAgIH0pO1xuICAgICAgICB3aGlsZSAobCAhPT0gMCAmJiBsIDwgNiAmJiB4ICsgbCA8IDExICYmIHkgKyBsIDwgMTEpIHtcbiAgICAgICAgICB0aGlzLmJvYXJkW3hdW3ldID0gXCJIXCI7XG4gICAgICAgICAgY29vcmRQYWlycy5wdXNoKHsgeCwgeSB9KTtcbiAgICAgICAgICB5Kys7XG4gICAgICAgICAgbC0tO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmJvYXJkO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZWNlaXZlQXR0YWNrKHhIaXQsIHlIaXQpIHtcbiAgICBsZXQgYWxsb3dlZEhpdCA9IGZhbHNlO1xuICAgIC8vIGkgc2VlIGlmIGl0IGhhcyBhbiBhdHRhY2sgYWxyZWFkeVxuICAgIGlmICh0aGlzLmJvYXJkW3hIaXRdW3lIaXRdICE9PSBcInhcIikge1xuICAgICAgYWxsb3dlZEhpdCA9IHRydWU7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKFwiTXkgaGl0IGNvb3JkcyBhcmU6XCIsIHt4SGl0LHlIaXR9KVxuICAgIC8vIGkgY2hlY2sgaWYgdGhlIGFjdHVhbCBoaXQgaXMgYWxzbyBhIHNoaXBcbiAgICB0aGlzLnNoaXBzQXJyYXkuZm9yRWFjaCgob25lU2hpcCkgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvbmVTaGlwLmNvb3JkUGFpcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc29sZS5sb2cob25lU2hpcC5jb29yZFBhaXJzW2ldKVxuICAgICAgICBpZiAob25lU2hpcC5jb29yZFBhaXJzW2ldLnggPT0geEhpdCAmJiBvbmVTaGlwLmNvb3JkUGFpcnNbaV0ueSA9PSB5SGl0KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygneWVzJylcbiAgICAgICAgICAgIG9uZVNoaXAuc2hpcC5oaXQoKVxuICAgICAgICAgIC8vICBjaGVja1N1bmsoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoYWxsb3dlZEhpdCkge1xuICAgICAgdGhpcy5ib2FyZFt4SGl0XVt5SGl0XSA9IFwieFwiO1xuICAgICAgdGhpcy5oaXRDb29yZHMucHVzaCh7IHhIaXQsIHlIaXQgfSk7IC8vc3RvcmUgdGhlIGhpdCBwYWlyXG4gICAgfVxuICB9XG59XG5cbi8vR2FtZWJvYXJkcyBzaG91bGQga2VlcCB0cmFjayBvZiBtaXNzZWQgYXR0YWNrcyBzbyB0aGV5IGNhbiBkaXNwbGF5IHRoZW0gcHJvcGVybHkuXG5cbi8vR2FtZWJvYXJkcyBzaG91bGQgYmUgYWJsZSB0byByZXBvcnQgd2hldGhlciBvciBub3QgYWxsIG9mIHRoZWlyIHNoaXBzIGhhdmUgYmVlbiBzdW5rLlxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKGxlbmd0aCwgaGl0cyA9IDApIHtcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICB0aGlzLmhpdHMgPSBoaXRzO1xuICAgIHRoaXMuc3VuayA9IGZhbHNlO1xuICB9XG4gIGhpdCgpIHtcbiAgICBpZiAodGhpcy5oaXRzID09PSB0aGlzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbHNlIHJldHVybiB0aGlzLmhpdHMrKztcbiAgfVxuICBpc1N1bmsoKSB7XG4gICAgaWYgKHRoaXMubGVuZ3RoID09PSB0aGlzLmhpdHMpIHtcbiAgICAgIHJldHVybiAodGhpcy5zdW5rID0gdHJ1ZSk7XG4gICAgfSBlbHNlIHJldHVybiAodGhpcy5zdW5rID0gZmFsc2UpO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vZmFjdG9yaWVzL2dhbWJvYXJkQ2xhc3NcIjtcbmxldCB0ZXN0Qm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG50ZXN0Qm9hcmQucGxhY2VTaGlwKDUsIDAsIDUsIFwiSFwiKTtcbnRlc3RCb2FyZC5wbGFjZVNoaXAoNCwgMSwgNSwgXCJWXCIpO1xudGVzdEJvYXJkLnJlY2VpdmVBdHRhY2soMCwgMCk7XG50ZXN0Qm9hcmQucmVjZWl2ZUF0dGFjaygwLCA1KTtcbmNvbnNvbGUubG9nKHRlc3RCb2FyZCk7XG5jb25zb2xlLmxvZyhcIm1lb3dzXCIpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9