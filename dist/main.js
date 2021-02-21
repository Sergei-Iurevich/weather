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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ \"./src/weather.js\");\n\r\n\r\nObject(_weather__WEBPACK_IMPORTED_MODULE_0__[\"run\"])();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/*! exports provided: run */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"run\", function() { return run; });\nfunction run() {\r\n    (async function () {\r\n        const appID = \"6483f07f86904206d5977c6c6ae4e4e1\";\r\n        const mapKey = \"AIzaSyDANLeEnr2Wf05hG0wxHA0Ucqz5CeZF_Cw\";\r\n\r\n        let data = await getWeather(await getCity());\r\n        drawWeather(document.querySelector(\".container\"), data);\r\n        await drawMap(await getCity());\r\n\r\n        // Получаем указатели на нужные элементы\r\n        const form = document.querySelector(\"form\");\r\n        const listEl = document.querySelector(\"#list\");\r\n\r\n\r\n        // Читаем список при старте\r\n        const items = await readList();\r\n\r\n        // и отрисовываем список\r\n        drawList(listEl, items);\r\n\r\n        async function getCity() {\r\n            const url = \"https://get.geojs.io/v1/ip/geo.json\";\r\n            let response = await fetch(url);\r\n            let objJSON = await response.json();\r\n            return objJSON.city;\r\n        }\r\n\r\n        async function getWeather(cityName) {\r\n            const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${appID}`;\r\n            let response = await fetch(url);\r\n            let data = await response.json();\r\n            return data;\r\n        }\r\n\r\n        function drawWeather(el, data) {\r\n            el.innerHTML = `        \r\n        <span>${data.name}</span>\r\n        <span>${data.main.temp}</span>        \r\n        <img src=\\\"http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png\\\">\r\n        `;\r\n        }\r\n\r\n        async function drawMap(city) {\r\n            let el = document.querySelector(\"#map\");\r\n            let url = `https://maps.googleapis.com/maps/api/staticmap?center=${city}&size=500x500&key=${mapKey}`;\r\n            el.innerHTML = `<img src=${url}>`;\r\n        }\r\n\r\n        async function readList() {\r\n            return JSON.parse(localStorage.getItem(\"items\")) || [];\r\n        }\r\n\r\n        // Сохраняет список\r\n        function saveList(items) {\r\n            localStorage.setItem(\"items\", JSON.stringify(items));\r\n        }\r\n\r\n        function drawList(el, items) {\r\n            el.innerHTML = `<ol>${items.map((el) => `<li><a href=\"#\">${el}</a></li>`).join(\"\")}</ol>`;\r\n        }\r\n\r\n        listEl.addEventListener(\"click\", async (ev) => {\r\n            let liElement = ev.target;\r\n            let city = liElement.innerText;\r\n            let data = await getWeather(city);\r\n            drawWeather(document.querySelector(\".container\"), data);\r\n            await drawMap(city);\r\n\r\n        });\r\n\r\n        form.addEventListener(\"submit\", async (ev) => {\r\n            // чтобы не перезагружать страницу\r\n            ev.preventDefault();\r\n\r\n            // читаем значение из формы\r\n            const formElement = ev.target;\r\n            const input = formElement.querySelector(\"input\");\r\n            const value = input.value;\r\n            input.value = \"\";\r\n\r\n            let city = value;\r\n            let data = await getWeather(city);\r\n            drawWeather(document.querySelector(\".container\"), data);\r\n            await drawMap(city);\r\n\r\n            // добавляем элемент в список\r\n            items.push(value);\r\n\r\n            if (items.length > 10) {\r\n                items.splice(0, 1);\r\n            }\r\n\r\n            // обновляем список\r\n            drawList(listEl, items);\r\n\r\n            // сохраняем список\r\n            saveList(items);\r\n        });\r\n\r\n    }());\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/weather.js?");

/***/ })

/******/ });