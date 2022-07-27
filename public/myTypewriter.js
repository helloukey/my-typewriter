/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "typeWriter": () => (/* binding */ typeWriter)
/* harmony export */ });
var textContainer = document.querySelector("#my-typewriter");
var count = 0;
var index = 0;
var currentText = "";
var containerText = "";
var direction = true;

var typeWriter = function typeWriter(_ref) {
  var texts = _ref.texts,
      _ref$letterPause = _ref.letterPause,
      letterPause = _ref$letterPause === void 0 ? 1200 : _ref$letterPause,
      _ref$typeSpeed = _ref.typeSpeed,
      typeSpeed = _ref$typeSpeed === void 0 ? 0 : _ref$typeSpeed,
      _ref$eraseSpeed = _ref.eraseSpeed,
      eraseSpeed = _ref$eraseSpeed === void 0 ? 100 : _ref$eraseSpeed,
      _ref$blinkSpeed = _ref.blinkSpeed,
      blinkSpeed = _ref$blinkSpeed === void 0 ? 300 : _ref$blinkSpeed,
      _ref$speed = _ref.speed,
      speed = _ref$speed === void 0 ? 200 : _ref$speed;
  // Blink Cursor
  var blinkCursor = document.createElement("span");
  blinkCursor.textContent = "|";
  setInterval(function () {
    blinkCursor.style.opacity = blinkCursor.style.opacity == 0 ? 1 : 0;
  }, blinkSpeed);

  var typing = function typing() {
    // Reset count after loop
    if (count === texts.length) {
      count = 0;
    } // Grab current text from array


    currentText = texts[count]; // Start erasing when all letters completed

    if (containerText.length === currentText.length) {
      direction = false;
    } // Start typing when letter length equals 1


    if (containerText.length === 1) {
      direction = true;
    }

    if (direction) {
      // typing speed if available
      if (typeSpeed > 0) {
        speed = typeSpeed;
      }

      containerText = currentText.slice(0, index++);
      textContainer.textContent = containerText;
      textContainer.appendChild(blinkCursor);

      if (containerText.length === currentText.length) {
        // If letterPause if defined
        if (letterPause > 0) {
          // Pause at last letter
          speed = letterPause;
        }
      }
    } else {
      // Erase speed if available
      if (eraseSpeed > 0) {
        // change speed to eraseSpeed
        speed = eraseSpeed;
      }

      containerText = currentText.slice(0, currentText.length - index++);
      textContainer.textContent = containerText;
      textContainer.appendChild(blinkCursor); // Move to next word when completed

      if (containerText.length === 1) {
        count++;
        index = 0;
        direction = true;
      }
    }

    setTimeout(typing, speed);
  };

  typing();
};


/******/ })()
;