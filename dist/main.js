/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ \"./src/weather.js\");\n\r\n\r\n(0,_weather__WEBPACK_IMPORTED_MODULE_0__.run)();\n\n//# sourceURL=webpack://dz4/./src/index.js?");

/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"run\": () => (/* binding */ run)\n/* harmony export */ });\nfunction run() {\r\n    (async function () {\r\n        const appID = \"6483f07f86904206d5977c6c6ae4e4e1\";\r\n        const mapKey = \"AIzaSyDANLeEnr2Wf05hG0wxHA0Ucqz5CeZF_Cw\";\r\n        console.log(\"Work!!!\");\r\n\r\n        let data = await getWeather(await getCity());\r\n        drawWeather(document.querySelector(\".container\"), data);\r\n        await drawMap(await getCity());\r\n\r\n        // Получаем указатели на нужные элементы\r\n        const form = document.querySelector(\"form\");\r\n        const listEl = document.querySelector(\"#list\");\r\n\r\n\r\n        // Читаем список при старте\r\n        const items = await readList();\r\n\r\n        // и отрисовываем список\r\n        drawList(listEl, items);\r\n\r\n        async function getCity() {\r\n            const url = \"https://get.geojs.io/v1/ip/geo.json\";\r\n            let response = await fetch(url);\r\n            let objJSON = await response.json();\r\n            return objJSON.city;\r\n        }\r\n\r\n        async function getWeather(cityName) {\r\n            const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${appID}`;\r\n            let response = await fetch(url);\r\n            let data = await response.json();\r\n            return data;\r\n        }\r\n\r\n        function drawWeather(el, data) {\r\n            el.innerHTML = `        \r\n        <span>${data.name}</span>\r\n        <span>${data.main.temp}</span>        \r\n        <img src=\\\"http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png\\\">\r\n        `;\r\n        }\r\n\r\n        async function drawMap(city) {\r\n            let el = document.querySelector(\"#map\");\r\n            let url = `https://maps.googleapis.com/maps/api/staticmap?center=${city}&size=500x500&key=${mapKey}`;\r\n            el.innerHTML = `<img src=${url}>`;\r\n        }\r\n\r\n        async function readList() {\r\n            return JSON.parse(localStorage.getItem(\"items\")) || [];\r\n        }\r\n\r\n        // Сохраняет список\r\n        function saveList(items) {\r\n            localStorage.setItem(\"items\", JSON.stringify(items));\r\n        }\r\n\r\n        function drawList(el, items) {\r\n            el.innerHTML = `<ol>${items.map((el) => `<li><a href=\"#\">${el}</a></li>`).join(\"\")}</ol>`;\r\n        }\r\n\r\n        listEl.addEventListener(\"click\", async (ev) => {\r\n            let liElement = ev.target;\r\n            let city = liElement.innerText;\r\n            let data = await getWeather(city);\r\n            drawWeather(document.querySelector(\".container\"), data);\r\n            await drawMap(city);\r\n\r\n        });\r\n\r\n        form.addEventListener(\"submit\", async (ev) => {\r\n            // чтобы не перезагружать страницу\r\n            ev.preventDefault();\r\n\r\n            // читаем значение из формы\r\n            const formElement = ev.target;\r\n            const input = formElement.querySelector(\"input\");\r\n            const value = input.value;\r\n            input.value = \"\";\r\n\r\n            let city = value;\r\n            let data = await getWeather(city);\r\n            drawWeather(document.querySelector(\".container\"), data);\r\n            await drawMap(city);\r\n\r\n            // добавляем элемент в список\r\n            items.push(value);\r\n\r\n            if (items.length > 10) {\r\n                items.splice(0, 1);\r\n            }\r\n\r\n            // обновляем список\r\n            drawList(listEl, items);\r\n\r\n            // сохраняем список\r\n            saveList(items);\r\n        });\r\n\r\n    }());\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://dz4/./src/weather.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;