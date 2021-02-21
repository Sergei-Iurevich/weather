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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ \"./src/weather.js\");\n\nObject(_weather__WEBPACK_IMPORTED_MODULE_0__[\"run\"])();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/*! exports provided: run */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"run\", function() { return run; });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction run() {\n  _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {\n    var appID, mapKey, data, form, listEl, items, getCity, _getCity, getWeather, _getWeather, drawWeather, drawMap, _drawMap, readList, _readList, saveList, drawList;\n\n    return regeneratorRuntime.wrap(function _callee7$(_context7) {\n      while (1) {\n        switch (_context7.prev = _context7.next) {\n          case 0:\n            drawList = function _drawList(el, items) {\n              el.innerHTML = \"<ol>\".concat(items.map(function (el) {\n                return \"<li><a href=\\\"#\\\">\".concat(el, \"</a></li>\");\n              }).join(\"\"), \"</ol>\");\n            };\n\n            saveList = function _saveList(items) {\n              localStorage.setItem(\"items\", JSON.stringify(items));\n            };\n\n            _readList = function _readList3() {\n              _readList = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {\n                return regeneratorRuntime.wrap(function _callee6$(_context6) {\n                  while (1) {\n                    switch (_context6.prev = _context6.next) {\n                      case 0:\n                        return _context6.abrupt(\"return\", JSON.parse(localStorage.getItem(\"items\")) || []);\n\n                      case 1:\n                      case \"end\":\n                        return _context6.stop();\n                    }\n                  }\n                }, _callee6);\n              }));\n              return _readList.apply(this, arguments);\n            };\n\n            readList = function _readList2() {\n              return _readList.apply(this, arguments);\n            };\n\n            _drawMap = function _drawMap3() {\n              _drawMap = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(city) {\n                var el, url;\n                return regeneratorRuntime.wrap(function _callee5$(_context5) {\n                  while (1) {\n                    switch (_context5.prev = _context5.next) {\n                      case 0:\n                        el = document.querySelector(\"#map\");\n                        url = \"https://maps.googleapis.com/maps/api/staticmap?center=\".concat(city, \"&size=500x500&key=\").concat(mapKey);\n                        el.innerHTML = \"<img src=\".concat(url, \">\");\n\n                      case 3:\n                      case \"end\":\n                        return _context5.stop();\n                    }\n                  }\n                }, _callee5);\n              }));\n              return _drawMap.apply(this, arguments);\n            };\n\n            drawMap = function _drawMap2(_x2) {\n              return _drawMap.apply(this, arguments);\n            };\n\n            drawWeather = function _drawWeather(el, data) {\n              el.innerHTML = \"        \\n        <span>\".concat(data.name, \"</span>\\n        <span>\").concat(data.main.temp, \"</span>        \\n        <img src=\\\"http://openweathermap.org/img/wn/\").concat(data.weather[0].icon, \"@2x.png\\\">\\n        \");\n            };\n\n            _getWeather = function _getWeather3() {\n              _getWeather = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(cityName) {\n                var url, response, data;\n                return regeneratorRuntime.wrap(function _callee4$(_context4) {\n                  while (1) {\n                    switch (_context4.prev = _context4.next) {\n                      case 0:\n                        url = \"https://api.openweathermap.org/data/2.5/weather?units=metric&q=\".concat(cityName, \"&appid=\").concat(appID);\n                        _context4.next = 3;\n                        return fetch(url);\n\n                      case 3:\n                        response = _context4.sent;\n                        _context4.next = 6;\n                        return response.json();\n\n                      case 6:\n                        data = _context4.sent;\n                        return _context4.abrupt(\"return\", data);\n\n                      case 8:\n                      case \"end\":\n                        return _context4.stop();\n                    }\n                  }\n                }, _callee4);\n              }));\n              return _getWeather.apply(this, arguments);\n            };\n\n            getWeather = function _getWeather2(_x) {\n              return _getWeather.apply(this, arguments);\n            };\n\n            _getCity = function _getCity3() {\n              _getCity = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {\n                var url, response, objJSON;\n                return regeneratorRuntime.wrap(function _callee3$(_context3) {\n                  while (1) {\n                    switch (_context3.prev = _context3.next) {\n                      case 0:\n                        url = \"https://get.geojs.io/v1/ip/geo.json\";\n                        _context3.next = 3;\n                        return fetch(url);\n\n                      case 3:\n                        response = _context3.sent;\n                        _context3.next = 6;\n                        return response.json();\n\n                      case 6:\n                        objJSON = _context3.sent;\n                        return _context3.abrupt(\"return\", objJSON.city);\n\n                      case 8:\n                      case \"end\":\n                        return _context3.stop();\n                    }\n                  }\n                }, _callee3);\n              }));\n              return _getCity.apply(this, arguments);\n            };\n\n            getCity = function _getCity2() {\n              return _getCity.apply(this, arguments);\n            };\n\n            appID = \"6483f07f86904206d5977c6c6ae4e4e1\";\n            mapKey = \"AIzaSyDANLeEnr2Wf05hG0wxHA0Ucqz5CeZF_Cw\";\n            _context7.t0 = getWeather;\n            _context7.next = 16;\n            return getCity();\n\n          case 16:\n            _context7.t1 = _context7.sent;\n            _context7.next = 19;\n            return (0, _context7.t0)(_context7.t1);\n\n          case 19:\n            data = _context7.sent;\n            drawWeather(document.querySelector(\".container\"), data);\n            _context7.t2 = drawMap;\n            _context7.next = 24;\n            return getCity();\n\n          case 24:\n            _context7.t3 = _context7.sent;\n            _context7.next = 27;\n            return (0, _context7.t2)(_context7.t3);\n\n          case 27:\n            // Получаем указатели на нужные элементы\n            form = document.querySelector(\"form\");\n            listEl = document.querySelector(\"#list\"); // Читаем список при старте\n\n            _context7.next = 31;\n            return readList();\n\n          case 31:\n            items = _context7.sent;\n            // и отрисовываем список\n            drawList(listEl, items);\n            listEl.addEventListener(\"click\", /*#__PURE__*/function () {\n              var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ev) {\n                var liElement, city, data;\n                return regeneratorRuntime.wrap(function _callee$(_context) {\n                  while (1) {\n                    switch (_context.prev = _context.next) {\n                      case 0:\n                        liElement = ev.target;\n                        city = liElement.innerText;\n                        _context.next = 4;\n                        return getWeather(city);\n\n                      case 4:\n                        data = _context.sent;\n                        drawWeather(document.querySelector(\".container\"), data);\n                        _context.next = 8;\n                        return drawMap(city);\n\n                      case 8:\n                      case \"end\":\n                        return _context.stop();\n                    }\n                  }\n                }, _callee);\n              }));\n\n              return function (_x3) {\n                return _ref2.apply(this, arguments);\n              };\n            }());\n            form.addEventListener(\"submit\", /*#__PURE__*/function () {\n              var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(ev) {\n                var formElement, input, value, city, data;\n                return regeneratorRuntime.wrap(function _callee2$(_context2) {\n                  while (1) {\n                    switch (_context2.prev = _context2.next) {\n                      case 0:\n                        // чтобы не перезагружать страницу\n                        ev.preventDefault(); // читаем значение из формы\n\n                        formElement = ev.target;\n                        input = formElement.querySelector(\"input\");\n                        value = input.value;\n                        input.value = \"\";\n                        city = value;\n                        _context2.next = 8;\n                        return getWeather(city);\n\n                      case 8:\n                        data = _context2.sent;\n                        drawWeather(document.querySelector(\".container\"), data);\n                        _context2.next = 12;\n                        return drawMap(city);\n\n                      case 12:\n                        // добавляем элемент в список\n                        items.push(value);\n\n                        if (items.length > 10) {\n                          items.splice(0, 1);\n                        } // обновляем список\n\n\n                        drawList(listEl, items); // сохраняем список\n\n                        saveList(items);\n\n                      case 16:\n                      case \"end\":\n                        return _context2.stop();\n                    }\n                  }\n                }, _callee2);\n              }));\n\n              return function (_x4) {\n                return _ref3.apply(this, arguments);\n              };\n            }());\n\n          case 35:\n          case \"end\":\n            return _context7.stop();\n        }\n      }\n    }, _callee7);\n  }))();\n}\n\n//# sourceURL=webpack:///./src/weather.js?");

/***/ })

/******/ });