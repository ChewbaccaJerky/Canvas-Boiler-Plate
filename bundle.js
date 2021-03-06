/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _randomize_util = __webpack_require__(2);

var RandomizeUtil = _interopRequireWildcard(_randomize_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

//set height and width
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// mouse
var mouse = {
    x: undefined,
    y: undefined
};

// base event listeners
window.addEventListener('mousemove', function (e) {
    mouse.x = e.x;
    mouse.y = e.y;
    console.log(mouse);
});

window.addEventListener('resize', function (e) {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
});

// implementations
var objects = [];
var init = function init() {
    objects = [];

    for (var i = 0; i < 100; i++) {
        // objects.push();
    }
};

var animate = function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillText('CANVAS BOILER PLATE!', mouse.x, mouse.y);
    // objects.forEach(object => {
    //     object.draw();
    // });
};

init();
animate();

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

// random position
var randomPosition = exports.randomPosition = function randomPosition() {
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;

    return { x: x, y: y };
};

// random color
var randomColor = exports.randomColor = function randomColor(COLOR_ARRAY) {
    var idx = Math.floor(Math.random() * COLOR_ARRAY.length);
    return COLOR_ARRAY[idx];
};

// random number by range
var randomIntFromRange = exports.randomIntFromRange = function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map