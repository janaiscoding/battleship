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
    this.hitCoords = {
      missedHits: [],
      shipHits: [],
    };
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
        console.log(oneShip.coordPairs[i]);
        if (
          oneShip.coordPairs[i].x == xHit &&
          oneShip.coordPairs[i].y == yHit
        ) {
          shipHit = true;
          // yes that's a hot ass hit baby!
          oneShip.ship.hit();
          //  checkSunk()
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
}

//Gameboards should keep track of missed attacks so they can display them properly. peepoChecked. - marked with x

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDWDtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsV0FBVztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qiw2Q0FBSTtBQUNqQztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLDRCQUE0QixNQUFNO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0Esc0JBQXNCLFdBQVc7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsNkNBQUk7QUFDakM7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSw0QkFBNEIsTUFBTTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsK0JBQStCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHFDQUFxQyxZQUFZO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLFlBQVk7QUFDbkQ7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUMvR2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7Ozs7Ozs7VUNqQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05rRDtBQUNsRCxvQkFBb0IsZ0VBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mYWN0b3JpZXMvZ2FtYm9hcmRDbGFzcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ZhY3Rvcmllcy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXBcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVib2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYm9hcmQgPSBbXG4gICAgICBbXCJvXCIsIFwib1wiLCBcIm9cIiwgXCJvXCIsIFwib1wiLCBcIm9cIiwgXCJvXCIsIFwib1wiLCBcIm9cIiwgXCJvXCJdLFxuICAgICAgW1wib1wiLCBcIm9cIiwgXCJvXCIsIFwib1wiLCBcIm9cIiwgXCJvXCIsIFwib1wiLCBcIm9cIiwgXCJvXCIsIFwib1wiXSxcbiAgICAgIFtcIm9cIiwgXCJvXCIsIFwib1wiLCBcIm9cIiwgXCJvXCIsIFwib1wiLCBcIm9cIiwgXCJvXCIsIFwib1wiLCBcIm9cIl0sXG4gICAgICBbXCJvXCIsIFwib1wiLCBcIm9cIiwgXCJvXCIsIFwib1wiLCBcIm9cIiwgXCJvXCIsIFwib1wiLCBcIm9cIiwgXCJvXCJdLFxuICAgICAgW1wib1wiLCBcIm9cIiwgXCJvXCIsIFwib1wiLCBcIm9cIiwgXCJvXCIsIFwib1wiLCBcIm9cIiwgXCJvXCIsIFwib1wiXSxcbiAgICAgIFtcIm9cIiwgXCJvXCIsIFwib1wiLCBcIm9cIiwgXCJvXCIsIFwib1wiLCBcIm9cIiwgXCJvXCIsIFwib1wiLCBcIm9cIl0sXG4gICAgICBbXCJvXCIsIFwib1wiLCBcIm9cIiwgXCJvXCIsIFwib1wiLCBcIm9cIiwgXCJvXCIsIFwib1wiLCBcIm9cIiwgXCJvXCJdLFxuICAgICAgW1wib1wiLCBcIm9cIiwgXCJvXCIsIFwib1wiLCBcIm9cIiwgXCJvXCIsIFwib1wiLCBcIm9cIiwgXCJvXCIsIFwib1wiXSxcbiAgICAgIFtcIm9cIiwgXCJvXCIsIFwib1wiLCBcIm9cIiwgXCJvXCIsIFwib1wiLCBcIm9cIiwgXCJvXCIsIFwib1wiLCBcIm9cIl0sXG4gICAgICBbXCJvXCIsIFwib1wiLCBcIm9cIiwgXCJvXCIsIFwib1wiLCBcIm9cIiwgXCJvXCIsIFwib1wiLCBcIm9cIiwgXCJvXCJdLFxuICAgIF07IC8vZGVmYXVsdCBib2FyZFxuICAgIHRoaXMuc2hpcHNBcnJheSA9IFtdOyAvLyBhcnJheSB3aWxsIGJlIGZpbGxlZCB3aXRoIGVhY2ggc2hpcCBhbmQgaXQncyBjb29yZG9uYXRlc1xuICAgIHRoaXMuaGl0Q29vcmRzID0ge1xuICAgICAgbWlzc2VkSGl0czogW10sXG4gICAgICBzaGlwSGl0czogW10sXG4gICAgfTtcbiAgfVxuXG4gIHBsYWNlU2hpcChsLCB4LCB5LCBkKSB7XG4gICAgaWYgKGQgPT09IFwiVlwiKSB7XG4gICAgICBsZXQgY29sdW1uVmFsaWQgPSB0cnVlO1xuICAgICAgZm9yIChsZXQgaSA9IHg7IGkgPCB4ICsgbDsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLmJvYXJkW2ldW3ldICE9PSBcIm9cIikge1xuICAgICAgICAgIGNvbHVtblZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChjb2x1bW5WYWxpZCkge1xuICAgICAgICBsZXQgY29vcmRQYWlycyA9IFtdO1xuICAgICAgICBsZXQgcHVzaGVkU2hpcCA9IG5ldyBTaGlwKGwpO1xuICAgICAgICB0aGlzLnNoaXBzQXJyYXkucHVzaCh7XG4gICAgICAgICAgc2hpcDogcHVzaGVkU2hpcCxcbiAgICAgICAgICBjb29yZFBhaXJzOiBjb29yZFBhaXJzLFxuICAgICAgICB9KTtcbiAgICAgICAgd2hpbGUgKGwgIT09IDAgJiYgbCA8IDYgJiYgeCArIGwgPCAxMSAmJiB5ICsgbCA8IDExKSB7XG4gICAgICAgICAgdGhpcy5ib2FyZFt4XVt5XSA9IFwiVlwiO1xuICAgICAgICAgIGNvb3JkUGFpcnMucHVzaCh7IHgsIHkgfSk7XG4gICAgICAgICAgeCsrO1xuICAgICAgICAgIGwtLTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmJvYXJkO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZCA9PT0gXCJIXCIpIHtcbiAgICAgIGxldCByb3dWYWxpZCA9IHRydWU7XG4gICAgICBmb3IgKGxldCBqID0geTsgaiA8IHkgKyBsOyBqKyspIHtcbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbeF1bal0gIT09IFwib1wiKSB7XG4gICAgICAgICAgcm93VmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHJvd1ZhbGlkKSB7XG4gICAgICAgIGxldCBjb29yZFBhaXJzID0gW107XG4gICAgICAgIGxldCBwdXNoZWRTaGlwID0gbmV3IFNoaXAobCk7XG4gICAgICAgIHRoaXMuc2hpcHNBcnJheS5wdXNoKHtcbiAgICAgICAgICBzaGlwOiBwdXNoZWRTaGlwLFxuICAgICAgICAgIGNvb3JkUGFpcnM6IGNvb3JkUGFpcnMsXG4gICAgICAgIH0pO1xuICAgICAgICB3aGlsZSAobCAhPT0gMCAmJiBsIDwgNiAmJiB4ICsgbCA8IDExICYmIHkgKyBsIDwgMTEpIHtcbiAgICAgICAgICB0aGlzLmJvYXJkW3hdW3ldID0gXCJIXCI7XG4gICAgICAgICAgY29vcmRQYWlycy5wdXNoKHsgeCwgeSB9KTtcbiAgICAgICAgICB5Kys7XG4gICAgICAgICAgbC0tO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmJvYXJkO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlY2VpdmVBdHRhY2soeEhpdCwgeUhpdCkge1xuICAgIC8vIGhhbmRsZSBmb3IgcHVzaGluZyBhbGwgdGhlIGhpdHNcbiAgICBsZXQgYWxsb3dlZEhpdCA9IGZhbHNlO1xuICAgIGxldCBzaGlwSGl0ID0gZmFsc2U7IC8vIGNoZWNraW5nIGZvciBzaGlwIHNwZWNpZmljIGhpdFxuICAgIC8vIGkgc2VlIGlmIGl0IGhhcyBhbiBhdHRhY2sgYWxyZWFkeVxuICAgIGlmICh0aGlzLmJvYXJkW3hIaXRdW3lIaXRdICE9PSBcInhcIiAmJiB0aGlzLmJvYXJkW3hIaXRdW3lIaXRdICE9PSBcInMteFwiKSB7XG4gICAgICAvL2lmIGhpdCBpcyBlbXB0eVxuICAgICAgYWxsb3dlZEhpdCA9IHRydWU7XG4gICAgfVxuICAgIC8vIGkgY2hlY2sgaWYgdGhlIGFjdHVhbCBoaXQgaXMgYWxzbyBhIHNoaXAgLT4gbWFya2VkIHdpdGggcy14XG4gICAgdGhpcy5zaGlwc0FycmF5LmZvckVhY2goKG9uZVNoaXApID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb25lU2hpcC5jb29yZFBhaXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKG9uZVNoaXAuY29vcmRQYWlyc1tpXSk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBvbmVTaGlwLmNvb3JkUGFpcnNbaV0ueCA9PSB4SGl0ICYmXG4gICAgICAgICAgb25lU2hpcC5jb29yZFBhaXJzW2ldLnkgPT0geUhpdFxuICAgICAgICApIHtcbiAgICAgICAgICBzaGlwSGl0ID0gdHJ1ZTtcbiAgICAgICAgICAvLyB5ZXMgdGhhdCdzIGEgaG90IGFzcyBoaXQgYmFieSFcbiAgICAgICAgICBvbmVTaGlwLnNoaXAuaGl0KCk7XG4gICAgICAgICAgLy8gIGNoZWNrU3VuaygpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoc2hpcEhpdCAmJiBhbGxvd2VkSGl0KSB7XG4gICAgICB0aGlzLmJvYXJkW3hIaXRdW3lIaXRdID0gXCJzLXhcIjtcbiAgICAgIHRoaXMuaGl0Q29vcmRzLnNoaXBIaXRzLnB1c2goeyB4SGl0LCB5SGl0IH0pO1xuICAgIH1cbiAgICBpZiAoIXNoaXBIaXQgJiYgYWxsb3dlZEhpdCkge1xuICAgICAgLy9zdG9yZSB0aGUgaGl0IHBhaXJcbiAgICAgIHRoaXMuYm9hcmRbeEhpdF1beUhpdF0gPSBcInhcIjtcbiAgICAgIHRoaXMuaGl0Q29vcmRzLm1pc3NlZEhpdHMucHVzaCh7IHhIaXQsIHlIaXQgfSk7XG4gICAgfVxuICB9XG59XG5cbi8vR2FtZWJvYXJkcyBzaG91bGQga2VlcCB0cmFjayBvZiBtaXNzZWQgYXR0YWNrcyBzbyB0aGV5IGNhbiBkaXNwbGF5IHRoZW0gcHJvcGVybHkuIHBlZXBvQ2hlY2tlZC4gLSBtYXJrZWQgd2l0aCB4XG5cbi8vR2FtZWJvYXJkcyBzaG91bGQgYmUgYWJsZSB0byByZXBvcnQgd2hldGhlciBvciBub3QgYWxsIG9mIHRoZWlyIHNoaXBzIGhhdmUgYmVlbiBzdW5rLlxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKGxlbmd0aCwgaGl0cyA9IDApIHtcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICB0aGlzLmhpdHMgPSBoaXRzO1xuICAgIHRoaXMuc3VuayA9IGZhbHNlO1xuICB9XG4gIGhpdCgpIHtcbiAgICBpZiAodGhpcy5oaXRzID09PSB0aGlzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbHNlIHJldHVybiB0aGlzLmhpdHMrKztcbiAgfVxuICBpc1N1bmsoKSB7XG4gICAgaWYgKHRoaXMubGVuZ3RoID09PSB0aGlzLmhpdHMpIHtcbiAgICAgIHJldHVybiAodGhpcy5zdW5rID0gdHJ1ZSk7XG4gICAgfSBlbHNlIHJldHVybiAodGhpcy5zdW5rID0gZmFsc2UpO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vZmFjdG9yaWVzL2dhbWJvYXJkQ2xhc3NcIjtcbmxldCB0ZXN0Qm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG50ZXN0Qm9hcmQucGxhY2VTaGlwKDUsIDAsIDUsIFwiSFwiKTtcbnRlc3RCb2FyZC5wbGFjZVNoaXAoNCwgMSwgNSwgXCJWXCIpO1xudGVzdEJvYXJkLnJlY2VpdmVBdHRhY2soMCwgMCk7XG50ZXN0Qm9hcmQucmVjZWl2ZUF0dGFjaygwLCA1KTtcbmNvbnNvbGUubG9nKHRlc3RCb2FyZCk7XG5jb25zb2xlLmxvZyhcIm1lb3dzXCIpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9