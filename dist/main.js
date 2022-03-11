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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css-reset.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css-reset.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html,\\nbody,\\ndiv,\\nspan,\\napplet,\\nobject,\\niframe,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\np,\\nblockquote,\\npre,\\na,\\nabbr,\\nacronym,\\naddress,\\nbig,\\ncite,\\ncode,\\ndel,\\ndfn,\\nem,\\nimg,\\nins,\\nkbd,\\nq,\\ns,\\nsamp,\\nsmall,\\nstrike,\\nstrong,\\nsub,\\nsup,\\ntt,\\nvar,\\nb,\\nu,\\ni,\\ncenter,\\ndl,\\ndt,\\ndd,\\nol,\\nul,\\nli,\\nfieldset,\\nform,\\nlabel,\\nlegend,\\ntable,\\ncaption,\\ntbody,\\ntfoot,\\nthead,\\ntr,\\nth,\\ntd,\\narticle,\\naside,\\ncanvas,\\ndetails,\\nembed,\\nfigure,\\nfigcaption,\\nfooter,\\nheader,\\nhgroup,\\nmenu,\\nnav,\\noutput,\\nruby,\\nsection,\\nsummary,\\ntime,\\nmark,\\naudio,\\nvideo {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  vertical-align: baseline;\\n}\\n\\nul {\\n  list-style: none;\\n}\\n\\nbutton {\\n  border: none;\\n  background: transparent;\\n}\\n\\na {\\n  text-decoration: none;\\n  color: inherit;\\n}\\n\\n* {\\n  box-sizing: border-box;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://leaderboard-api/./src/css-reset.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/popup-sttyling.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/popup-sttyling.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".popup {\\n  display: none;\\n  position: fixed;\\n  top: 0;\\n  padding-top: 80px;\\n  width: 100%;\\n  height: 100%;\\n  overflow: auto;\\n  background: rgba(0, 0, 0, 0.4);\\n  z-index: 2;\\n}\\n\\n.bxs-heart {\\n  color: red;\\n}\\n\\n.modal-content {\\n  position: relative;\\n  background-color: #fefefe;\\n  margin: 0 10vw;\\n  border: 1px solid #888;\\n  width: 80%;\\n  height: 90%;\\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\\n  overflow: hidden;\\n  border-radius: 20px;\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.close {\\n  color: #fefefe;\\n  font-size: 20px;\\n}\\n\\n.close:hover,\\n.close:focus {\\n  color: #000;\\n  text-decoration: none;\\n  cursor: pointer;\\n}\\n\\n.modal-header {\\n  padding: 10px 16px;\\n  background-color: #08d9d6;\\n  color: white;\\n  width: 100%;\\n  position: absolute;\\n  display: flex;\\n  justify-content: flex-end;\\n  align-items: center;\\n  top: 0;\\n  z-index: 5;\\n}\\n\\n.modal-body {\\n  padding-top: 41px;\\n  height: 200vh;\\n  width: 100%;\\n  overflow-y: auto;\\n}\\n\\n.popup-animation {\\n  -webkit-animation: fadein 0.5s ease-in;\\n  -moz-animation: fadein 0.5s ease-in;\\n  -ms-animation: fadein 0.5s ease-in;\\n  -o-animation: fadein 0.5s ease-in;\\n  animation: fadein 0.5s ease-in;\\n}\\n\\n.popup-close-animation {\\n  -webkit-animation: fadeout 0.5s ease-in;\\n  -moz-animation: fadeout 0.5s ease-in;\\n  -ms-animation: fadeout 0.5s ease-in;\\n  -o-animation: fadeout 0.5s ease-in;\\n  animation: fadeout 0.5s ease-in;\\n}\\n\\n@keyframes fadein {\\n  from {\\n    opacity: 0;\\n  }\\n\\n  to {\\n    opacity: 1;\\n  }\\n}\\n\\n@-moz-keyframes fadein {\\n  from {\\n    opacity: 0;\\n  }\\n\\n  to {\\n    opacity: 1;\\n  }\\n}\\n\\n@-webkit-keyframes fadein {\\n  from {\\n    opacity: 0;\\n  }\\n\\n  to {\\n    opacity: 1;\\n  }\\n}\\n\\n@-ms-keyframes fadein {\\n  from {\\n    opacity: 0;\\n  }\\n\\n  to {\\n    opacity: 1;\\n  }\\n}\\n\\n@keyframes fadeout {\\n  from {\\n    opacity: 1;\\n  }\\n\\n  to {\\n    opacity: 0;\\n  }\\n}\\n\\n@-moz-keyframes fadeout {\\n  from {\\n    opacity: 1;\\n  }\\n\\n  to {\\n    opacity: 0;\\n  }\\n}\\n\\n@-webkit-keyframes fadeout {\\n  from {\\n    opacity: 1;\\n  }\\n\\n  to {\\n    opacity: 0;\\n  }\\n}\\n\\n@-ms-keyframes fadeout {\\n  from {\\n    opacity: 1;\\n  }\\n\\n  to {\\n    opacity: 0;\\n  }\\n}\\n\\n.item-container {\\n  display: flex;\\n  flex-direction: row;\\n  position: relative;\\n  background-color: rgb(33, 31, 31);\\n  height: auto;\\n  min-height: 100%;\\n}\\n\\n.item-img {\\n  position: absolute;\\n  top: 0;\\n  right: 0;\\n  width: 50%;\\n  max-height: 750px;\\n}\\n\\n.item-img img {\\n  width: 100%;\\n}\\n\\n.item-description-container {\\n  width: 100%;\\n  background: linear-gradient(to left, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 1));\\n  z-index: 4;\\n  color: white;\\n  padding: 30px 20px 20px;\\n  min-height: 58vw;\\n  overflow: hidden;\\n}\\n\\n.item-description {\\n  display: flex;\\n  flex-direction: column;\\n  width: 50%;\\n  height: 100%;\\n}\\n\\n.company-likes-container {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.company-likes {\\n  display: flex;\\n  flex-direction: row;\\n  align-items: flex-end;\\n  width: 100%;\\n}\\n\\n.company {\\n  font-size: 18px;\\n}\\n\\n.likes {\\n  margin-right: 20px;\\n}\\n\\n.item-title {\\n  font-size: 70px;\\n  text-transform: uppercase;\\n}\\n\\n.item-title a:hover {\\n  color: #ff2e63;\\n}\\n\\n.item-genres,\\n.item-details {\\n  display: flex;\\n  flex-wrap: wrap;\\n  margin: 5px 0;\\n}\\n\\n.item-details,\\n.item-summary {\\n  min-width: 100%;\\n  max-width: 70vw;\\n}\\n\\n.genre {\\n  padding: 1px 6px 2px;\\n  background-color: #08d9d6;\\n  margin: 5px 15px 5px 0;\\n  border-radius: 5px;\\n  color: #000;\\n  font-size: 11px;\\n}\\n\\n.started,\\n.status,\\n.item-details-container {\\n  width: fit-content;\\n  font-size: 11px;\\n  margin: 5px 15px 5px 0;\\n  padding: 1px 4px 2px 0;\\n}\\n\\n.rating-container {\\n  width: 100%;\\n  display: flex;\\n  flex-wrap: wrap;\\n  align-items: center;\\n}\\n\\n.rating-container li {\\n  margin-right: 5px;\\n  font-size: 11px;\\n}\\n\\n.item-rating i {\\n  color: #fd4;\\n}\\n\\n.item-rating {\\n  min-width: 50px;\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.item-rating,\\n.user-rating,\\n.item-summary {\\n  margin: 5px 15px 5px 0;\\n}\\n\\n.imdb {\\n  padding-bottom: 5px;\\n}\\n\\n.star-rating {\\n  position: relative;\\n  min-width: 110px;\\n  border-radius: 5px;\\n  justify-content: center;\\n  padding: 3px 3px 3px 0;\\n  display: flex;\\n  align-items: center;\\n  flex-direction: row;\\n}\\n\\n.stars-container label {\\n  min-height: 12px;\\n  color: #666;\\n  padding: 0 5px;\\n  float: right;\\n  transition: all 0.2s ease;\\n}\\n\\n.star-rating .post {\\n  display: none;\\n}\\n\\n.star-rating .rating-feedback-text {\\n  color: #666;\\n  font-weight: 500;\\n}\\n\\n.user-review {\\n  padding-bottom: 7px;\\n}\\n\\n.star-rating .stars-container input {\\n  display: none;\\n}\\n\\ninput:checked ~ .staring-label {\\n  color: #fd4;\\n  text-shadow: 0 0 20px #fd4;\\n}\\n\\ninput:not(:checked) ~ .staring-label:hover,\\ninput:not(:checked) ~ .staring-label:hover ~ .staring-label {\\n  color: rgb(255, 68, 93);\\n}\\n\\ninput#r-1 ~ .staring-label {\\n  padding-left: 0;\\n}\\n\\n.res-form-btn,\\n.com-form-btn {\\n  background-color: white;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://leaderboard-api/./src/popup-sttyling.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  font-family: \\\"Segoe UI\\\", Tahoma, Geneva, Verdana, sans-serif;\\n  font-weight: 500;\\n  display: flex;\\n  flex-direction: column;\\n  min-height: 100vh;\\n}\\n\\n.header {\\n  width: 100%;\\n}\\n\\n.top-nav {\\n  position: absolute;\\n  top: 0;\\n  width: 100%;\\n  height: 80px;\\n  display: flex;\\n  justify-content: space-between;\\n  background: #08d9d6;\\n  align-items: center;\\n  padding: 20px 40px;\\n}\\n\\nfooter {\\n  position: fixed;\\n  bottom: 0;\\n  width: 100%;\\n  height: 40px;\\n  padding: 10px 40px;\\n  background-color: #08d9d6;\\n}\\n\\n.items {\\n  display: grid;\\n  grid-template-columns: 1fr;\\n  width: 90%;\\n  margin: 2rem auto;\\n}\\n\\n.items > div {\\n  margin: 1rem 0;\\n  text-align: center;\\n  justify-content: center;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://leaderboard-api/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://leaderboard-api/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://leaderboard-api/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css-reset.css":
/*!***************************!*\
  !*** ./src/css-reset.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_css_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./css-reset.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css-reset.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_css_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_css_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_css_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_css_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://leaderboard-api/./src/css-reset.css?");

/***/ }),

/***/ "./src/popup-sttyling.css":
/*!********************************!*\
  !*** ./src/popup-sttyling.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_popup_sttyling_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./popup-sttyling.css */ \"./node_modules/css-loader/dist/cjs.js!./src/popup-sttyling.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_popup_sttyling_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_popup_sttyling_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_popup_sttyling_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_popup_sttyling_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://leaderboard-api/./src/popup-sttyling.css?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://leaderboard-api/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://leaderboard-api/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://leaderboard-api/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://leaderboard-api/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://leaderboard-api/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://leaderboard-api/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://leaderboard-api/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css-reset.css */ \"./src/css-reset.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _popup_sttyling_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popup-sttyling.css */ \"./src/popup-sttyling.css\");\n/* harmony import */ var _modules_getShows_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/getShows.js */ \"./src/modules/getShows.js\");\n/* harmony import */ var _modules_buildShows_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/buildShows.js */ \"./src/modules/buildShows.js\");\n/* harmony import */ var _modules_counters_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/counters.js */ \"./src/modules/counters.js\");\n/* harmony import */ var _modules_item_eventlistener_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/item-eventlistener.js */ \"./src/modules/item-eventlistener.js\");\n\n\n\n\n\n\n\n\nconst itemsTitle = document.querySelector('.items-title');\nconst items = document.querySelector('.items');\nconst popupContainer = document.querySelector('.popup');\nconst modalContainer = document.querySelector('.modal-body');\nconst closePopup = document.querySelector('.close');\nconst modalContent = document.querySelector('.modal-content');\nconst popupCloseIcon = document.querySelector('.close-icon');\n\nwindow.onclick = (e) => {\n  if (\n    e.target === popupContainer\n    || e.target === closePopup\n    || e.target === popupCloseIcon\n  ) {\n    modalContent.classList.remove('popup-animation');\n    modalContent.classList.add('popup-close-animation');\n    setTimeout(() => {\n      popupContainer.style.display = 'none';\n      modalContent.classList.remove('popup-close-animation');\n      modalContent.classList.add('popup-animation');\n    }, 500);\n  }\n};\n\nwindow.addEventListener('DOMContentLoaded', async () => {\n  const shows = await (0,_modules_getShows_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  const sixShows = shows.slice(0, 6);\n\n  itemsTitle.innerHTML = `TV SHOWS (${(0,_modules_counters_js__WEBPACK_IMPORTED_MODULE_5__.showsCount)(sixShows)})`;\n  await (0,_modules_buildShows_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(sixShows, items);\n  (0,_modules_item_eventlistener_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(popupContainer, modalContainer, sixShows, 'comment-btn');\n});\n\n\n//# sourceURL=webpack://leaderboard-api/./src/index.js?");

/***/ }),

/***/ "./src/modules/api-comment/add-com-listener.js":
/*!*****************************************************!*\
  !*** ./src/modules/api-comment/add-com-listener.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _post_comment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post-comment.js */ \"./src/modules/api-comment/post-comment.js\");\n\n\nconst addCommentListener = (\n  containerClass,\n  updateComments,\n  url,\n  id,\n  itemID,\n  formClass,\n  commentContainer,\n) => {\n  const form = document.querySelector(`.${formClass}`);\n  form.addEventListener('submit', async (event) => {\n    event.preventDefault();\n    const name = event.target[0].value;\n    const comment = event.target[1].value;\n    await (0,_post_comment_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(url, id, itemID, name, comment);\n    await updateComments(\n      containerClass,\n      url,\n      id,\n      itemID,\n      commentContainer,\n    );\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addCommentListener);\n\n\n//# sourceURL=webpack://leaderboard-api/./src/modules/api-comment/add-com-listener.js?");

/***/ }),

/***/ "./src/modules/api-comment/comment-count.js":
/*!**************************************************!*\
  !*** ./src/modules/api-comment/comment-count.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst commentCount = (commentContainer, arr) => {\n  const count = arr.length;\n  commentContainer.innerHTML = count;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentCount);\n\n\n//# sourceURL=webpack://leaderboard-api/./src/modules/api-comment/comment-count.js?");

/***/ }),

/***/ "./src/modules/api-comment/comments-build.js":
/*!***************************************************!*\
  !*** ./src/modules/api-comment/comments-build.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _get_comments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-comments.js */ \"./src/modules/api-comment/get-comments.js\");\n/* harmony import */ var _comment_count_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comment-count.js */ \"./src/modules/api-comment/comment-count.js\");\n\n\n\nconst commentBuild = async (containerClass, url, id, itemID, commentCountContainer) => {\n  const container = document.querySelector(`.${containerClass}`);\n\n  const data = await (0,_get_comments_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(url, id, itemID);\n\n  if (data.length === 0 || data.length === undefined) {\n    container.innerHTML = '<span class=\"com-item-default\">no comment history!</span>';\n    (0,_comment_count_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(commentCountContainer, []);\n  } else {\n    (0,_comment_count_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(commentCountContainer, data);\n    container.innerHTML = '';\n    data.forEach((item) => {\n      const div = document.createElement('div');\n      div.classList.add('com-item-group');\n      div.innerHTML += `<span class=\"com-item-name\">${item.username}:</span>\n            <span class=\"com-item-message\"> ${item.comment}</span>\n            <span class=\"com-item-history\">${item.creation_date}</span>`;\n      container.appendChild(div);\n    });\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentBuild);\n\n//# sourceURL=webpack://leaderboard-api/./src/modules/api-comment/comments-build.js?");

/***/ }),

/***/ "./src/modules/api-comment/get-comments.js":
/*!*************************************************!*\
  !*** ./src/modules/api-comment/get-comments.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getcomments = async (url, id, itemID) => {\n  const response = await fetch(`${url}${id}/comments?item_id=${itemID}`);\n\n  const data = await response.json();\n  if (data.error) {\n    return [];\n  } return data;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getcomments);\n\n\n//# sourceURL=webpack://leaderboard-api/./src/modules/api-comment/get-comments.js?");

/***/ }),

/***/ "./src/modules/api-comment/post-comment.js":
/*!*************************************************!*\
  !*** ./src/modules/api-comment/post-comment.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst postComment = async (url, id, itemID, name, comment) => {\n  await fetch(`${url}${id}/comments`, {\n    method: 'POST',\n    body: JSON.stringify({\n      item_id: `${itemID}`,\n      username: `${name}`,\n      comment: `${comment}`,\n    }),\n    headers: {\n      'Content-type': 'application/json; Charset=UTF-8',\n    },\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postComment);\n\n\n//# sourceURL=webpack://leaderboard-api/./src/modules/api-comment/post-comment.js?");

/***/ }),

/***/ "./src/modules/api-reservation/add-res-listener.js":
/*!*********************************************************!*\
  !*** ./src/modules/api-reservation/add-res-listener.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _post_reservation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post-reservation.js */ \"./src/modules/api-reservation/post-reservation.js\");\n\n\nconst addReservationListener = (\n  containerClass,\n  updateReservations,\n  url,\n  id,\n  itemID,\n  formClass,\n  reservationContainer,\n) => {\n  const form = document.querySelector(`.${formClass}`);\n  form.addEventListener('submit', async (event) => {\n    event.preventDefault();\n    const name = event.target[0].value;\n    const startDate = event.target[1].value;\n    const endDate = event.target[2].value;\n    await (0,_post_reservation_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(url, id, itemID, name, startDate, endDate);\n    await updateReservations(\n      containerClass,\n      url,\n      id,\n      itemID,\n      reservationContainer,\n    );\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addReservationListener);\n\n\n//# sourceURL=webpack://leaderboard-api/./src/modules/api-reservation/add-res-listener.js?");

/***/ }),

/***/ "./src/modules/api-reservation/get-reservations.js":
/*!*********************************************************!*\
  !*** ./src/modules/api-reservation/get-reservations.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getreservations = async (url, id, itemID) => {\n  const response = await fetch(`${url}${id}/reservations?item_id=${itemID}`);\n  const data = await response.json();\n  if (data.error) {\n    return [];\n  } return data;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getreservations);\n\n\n//# sourceURL=webpack://leaderboard-api/./src/modules/api-reservation/get-reservations.js?");

/***/ }),

/***/ "./src/modules/api-reservation/post-reservation.js":
/*!*********************************************************!*\
  !*** ./src/modules/api-reservation/post-reservation.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst postreservation = async (url, id, itemID, name, startDate, endDate) => {\n  await fetch(`${url}${id}/reservations/`, {\n    method: 'POST',\n    body: JSON.stringify({\n      item_id: `${itemID}`,\n      username: `${name}`,\n      date_start: `${startDate}`,\n      date_end: `${endDate}`,\n    }),\n    headers: {\n      'Content-type': 'application/json; Charset=UTF-8',\n    },\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postreservation);\n\n\n//# sourceURL=webpack://leaderboard-api/./src/modules/api-reservation/post-reservation.js?");

/***/ }),

/***/ "./src/modules/api-reservation/reservation-count.js":
/*!**********************************************************!*\
  !*** ./src/modules/api-reservation/reservation-count.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst reservationCount = (reservationContainer, arr) => {\n  const count = arr.length;\n  reservationContainer.innerHTML = count;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reservationCount);\n\n//# sourceURL=webpack://leaderboard-api/./src/modules/api-reservation/reservation-count.js?");

/***/ }),

/***/ "./src/modules/api-reservation/reservations-build.js":
/*!***********************************************************!*\
  !*** ./src/modules/api-reservation/reservations-build.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _get_reservations_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-reservations.js */ \"./src/modules/api-reservation/get-reservations.js\");\n/* harmony import */ var _reservation_count_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reservation-count.js */ \"./src/modules/api-reservation/reservation-count.js\");\n\n\n\nconst reservationBuild = async (containerClass, url, id, itemID, reservationContainer) => {\n  const container = document.querySelector(`.${containerClass}`);\n\n  const data = await (0,_get_reservations_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(url, id, itemID);\n\n  if (data.length === 0) {\n    container.innerHTML = '<span class=\"res-item-default\">no reservations history!</span>';\n    (0,_reservation_count_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(reservationContainer, []);\n  } else {\n    (0,_reservation_count_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(reservationContainer, data);\n    container.innerHTML = '';\n    data.forEach((item) => {\n      const div = document.createElement('div');\n      div.classList.add('res-item-group');\n      div.innerHTML += `<span class=\"res-item-name\">${item.username} reserved this item</span>\n            <span class=\"res-item-startdate\">from: ${item.date_start}</span>\n            <span class=\"res-item-enddate\">to: ${item.date_end}</span>`;\n      container.appendChild(div);\n    });\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reservationBuild);\n\n\n//# sourceURL=webpack://leaderboard-api/./src/modules/api-reservation/reservations-build.js?");

/***/ }),

/***/ "./src/modules/buildShows.js":
/*!***********************************!*\
  !*** ./src/modules/buildShows.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _counters_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./counters.js */ \"./src/modules/counters.js\");\n/* harmony import */ var _getInvolvement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getInvolvement.js */ \"./src/modules/getInvolvement.js\");\n/* harmony import */ var _postInvolvement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./postInvolvement.js */ \"./src/modules/postInvolvement.js\");\n\n\n\n\nconst buildShows = async (showsList, container) => {\n  const listOfLikes = await (0,_getInvolvement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n  for (let i = 0; i <= showsList.length - 1; i += 1) {\n    const itemContainer = document.createElement('div');\n    itemContainer.id = `movie${showsList[i].id}`;\n\n    const img = document.createElement('img');\n    img.src = showsList[i].image.medium;\n    img.style.width = '20rem';\n    itemContainer.appendChild(img);\n\n    const titleLike = document.createElement('div');\n    titleLike.classList.add('like-wrap');\n    const title = document.createElement('h3');\n    const likeBtn = document.createElement('i');\n    const likeDisplay = document.createElement('span');\n    likeDisplay.innerHTML = '0 likes';\n\n    likeBtn.classList.add('bx');\n    likeBtn.classList.add('bx-heart');\n    likeBtn.classList.add('bx-sm');\n    likeBtn.style.cursor = 'pointer';\n\n    title.textContent = `${showsList[i].name}`;\n\n    titleLike.style.margin = '5px';\n    titleLike.style.textAlign = 'center';\n\n    titleLike.appendChild(title);\n    titleLike.appendChild(likeBtn);\n    titleLike.appendChild(likeDisplay);\n    itemContainer.append(title, titleLike);\n\n    const commentBtn = document.createElement('div');\n    commentBtn.innerHTML = `<button class=\"comment-btn\" item=\"${showsList[i].id}\">Comment</button>`;\n    itemContainer.appendChild(commentBtn);\n\n    container.appendChild(itemContainer);\n\n    (0,_counters_js__WEBPACK_IMPORTED_MODULE_0__.getLikesCount)(likeBtn, listOfLikes, likeDisplay);\n\n    likeBtn.addEventListener('click', async (e) => {\n      await (0,_postInvolvement_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(e.target.id);\n      const getReq = await (0,_getInvolvement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n      (0,_counters_js__WEBPACK_IMPORTED_MODULE_0__.getLikesCount)(e.target, getReq, likeDisplay);\n    });\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildShows);\n\n\n//# sourceURL=webpack://leaderboard-api/./src/modules/buildShows.js?");

/***/ }),

/***/ "./src/modules/counters.js":
/*!*********************************!*\
  !*** ./src/modules/counters.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLikesCount\": () => (/* binding */ getLikesCount),\n/* harmony export */   \"showsCount\": () => (/* binding */ showsCount)\n/* harmony export */ });\nconst getLikesCount = (target, likesArray, likesContainer) => {\n  for (let i = 0; i <= likesArray.length - 1; i += 1) {\n    if (likesArray[i].item_id === target.id) {\n      likesContainer.innerHTML = `${likesArray[i].likes} likes`;\n    }\n  }\n};\n\nconst showsCount = (showsList) => showsList.length;\n\n\n\n\n//# sourceURL=webpack://leaderboard-api/./src/modules/counters.js?");

/***/ }),

/***/ "./src/modules/getInvolvement.js":
/*!***************************************!*\
  !*** ./src/modules/getInvolvement.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getLikes = async () => {\n  const response = await fetch(\n    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/jOmvR28ksoZ7GUF5P2Cy/likes',\n  );\n  return response.json();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLikes);\n\n\n//# sourceURL=webpack://leaderboard-api/./src/modules/getInvolvement.js?");

/***/ }),

/***/ "./src/modules/getShows.js":
/*!*********************************!*\
  !*** ./src/modules/getShows.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getShows = async () => {\n  const response = await fetch('https://api.tvmaze.com/shows');\n  return response.json();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getShows);\n\n\n//# sourceURL=webpack://leaderboard-api/./src/modules/getShows.js?");

/***/ }),

/***/ "./src/modules/item-eventlistener.js":
/*!*******************************************!*\
  !*** ./src/modules/item-eventlistener.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _popup_build_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup-build.js */ \"./src/modules/popup-build.js\");\n\n\nconst itemListener = (popupContainer, modalContainer, dataArray, btnClass) => {\n  const btns = document.querySelectorAll(`.${btnClass}`);\n  btns.forEach((btn) => {\n    btn.addEventListener('click', (e) => {\n      const itemAttr = e.target.getAttribute('item');\n      (0,_popup_build_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\n        popupContainer,\n        modalContainer,\n        dataArray,\n        (btnClass = itemAttr),\n      );\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (itemListener);\n\n\n//# sourceURL=webpack://leaderboard-api/./src/modules/item-eventlistener.js?");

/***/ }),

/***/ "./src/modules/popup-build.js":
/*!************************************!*\
  !*** ./src/modules/popup-build.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _user_star_rating_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-star-rating.js */ \"./src/modules/user-star-rating.js\");\n/* harmony import */ var _api_comment_comments_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api-comment/comments-build.js */ \"./src/modules/api-comment/comments-build.js\");\n/* harmony import */ var _api_comment_add_com_listener_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api-comment/add-com-listener.js */ \"./src/modules/api-comment/add-com-listener.js\");\n/* harmony import */ var _api_reservation_add_res_listener_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api-reservation/add-res-listener.js */ \"./src/modules/api-reservation/add-res-listener.js\");\n/* harmony import */ var _api_reservation_reservations_build_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api-reservation/reservations-build.js */ \"./src/modules/api-reservation/reservations-build.js\");\n\n\n\n\n\n\nconst apiURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';\nconst sessionID = 'GPPQtj8HcYdkGNz2Bewy';\n\nconst insertPopup = async (\n  popupContainer,\n  modalContainer,\n  dataArray,\n  index,\n) => {\n  modalContainer.innerHTML = '';\n  const dataElement = dataArray[index - 1];\n  const modal = document.createElement('ul');\n  modal.classList.add('item-container');\n  modal.setAttribute('item', `${index}`);\n  modal.innerHTML = `<li class=\"item-description-container\">\n    <ul class=\"item-description\">\n      <li class=\"company-likes-container\">\n        <ul class=\"company-likes\">\n            <li class=\"likes\">\n              </li>\n            <li class=\"company\">${dataElement.network.name}</li>\n        </ul>\n      </li>\n      <li class=\"item-title\"><a href=\"${dataElement.url}\">${\n  dataElement.name\n}</a> </li>\n      <li class=\"item-genres-container\">\n        <ul class=\"item-genres\">\n        </ul>\n      </li>\n      <li class=\"item-details-container\">\n        <ul class=\"item-details\">\n          <li class=\"started\">Premiered: ${dataElement.premiered}</li>\n          <li class=\"status\">${dataElement.status} ${\n  dataElement.status === 'Ended' ? `: ${dataElement.ended}` : ''\n}</li>\n        </ul>\n        <ul class=\"rating-container\">\n            <li class=\"item-rating\"><span class=\"imdb\">IMDB: </span><span>(${\n  dataElement.rating.average / 2\n}<i class=\"fas fa-star\"></i>)</span></li>\n            <li class=\"user-rating\">\n              <div class=\"star-rating\">\n                <div class=\"post\">\n                  <div class=\"rating-feedback-text\">\n                    Thanks for your rating!\n                  </div>\n                </div>\n                <div class=\"stars-container\" item=\"${index}\">\n                    <p class=\"user-review\">Your review:</p>\n                  <input type=\"radio\" name=\"rating\" id=\"r-5\" />\n                  <label for=\"r-5\" class=\"fas fa-star staring-label\"></label>\n                  <input type=\"radio\" name=\"rating\" id=\"r-4\" />\n                  <label for=\"r-4\" class=\"fas fa-star staring-label\"></label>\n                  <input type=\"radio\" name=\"rating\" id=\"r-3\" />\n                  <label for=\"r-3\" class=\"fas fa-star staring-label\"></label>\n                  <input type=\"radio\" name=\"rating\" id=\"r-2\" />\n                  <label for=\"r-2\" class=\"fas fa-star staring-label\"></label>\n                  <input type=\"radio\" name=\"rating\" id=\"r-1\" />\n                  <label for=\"r-1\" class=\"fas fa-star staring-label\"></label>\n                </div>\n              </div>\n            </li>\n          </ul>\n      </li>\n      <li class=\"item-summary\">${dataElement.summary}</li>\n\n\n      <li class=\"com-res-container\">\n      <ul class=\"com-res\">\n      <li class=\"com-res-header-container\">\n        <ul class=\"com-res-header\">\n          <li class=\"com-header\"><i class='bx bx-tada-hover bx-xs bx-message-square-dots'></i> comments <span class=\"com-count\"></span></li>\n          <li class=\"res-header\"><i class='bx bx-tada-hover bx-task bx-xs' ></i> reservations <span class=\"res-count\"></span></li>\n        </ul>\n      </li>\n      <li class=\"com-container\">\n        <ul class=\"com\">\n          <li class=\"com-history-container\">\n            <ul class=\"com-history\">\n              <li class=\"com-item\">\n                \n              </li>\n            </ul>\n          </li>\n          <li class=\"com-add\">\n            <form action=\"#\" class=\"com-form\">\n              <input type=\"text\" name=\"name\" placeholder=\"Your name.\" required>\n              <input type=\"text\" name=\"message\"  rows=\"2\" placeholder=\"Leave a comment...\" required>\n              <button type=\"submit\" class=\"com-form-btn\">Comment</button>\n            </form>\n          </li>\n        </ul>\n      </li>\n      <li class=\"res-container\">\n        <ul class=\"res\">\n          <li class=\"res-history-container\">\n            <ul class=\"res-history\">\n              <li class=\"res-item\">\n              </li>\n            </ul>\n          </li>\n          <li class=\"res-add\">\n            <form action=\"#\" class=\"res-form\">\n              <input type=\"text\" name=\"name\" placeholder=\"Your name.\" required>\n              <label>\n    Start date:\n    <input type=\"date\" name=\"start-date\" value=\"2022-03-11\" required>\n  </label>\n  <label>\n  End date:\n  <input type=\"date\" name=\"end-date\" value=\"2022-03-12\" required>\n</label>\n              <button type=\"submit\" class=\"res-form-btn\">Reserve</button>\n            </form>\n          </li>\n        </ul>\n      </li>\n    </ul>\n    \n      </li>\n\n    </ul>\n  </li>\n  <li class=\"item-img\">\n    <img\n      src=\"${dataElement.image.original}\"\n      alt=\"show-poster\"\n    />\n  </li>\n `;\n\n  modalContainer.appendChild(modal);\n  popupContainer.style.display = 'block';\n\n  const stars = document.querySelector('.stars-container');\n  const post = document.querySelector('.post');\n  if (localStorage.getItem(index)) {\n    const selectedStar = document.querySelector(`#${(0,_user_star_rating_js__WEBPACK_IMPORTED_MODULE_0__.getStars)(index)}`);\n    selectedStar.checked = true;\n  }\n\n  const genresContainner = document.querySelector('.item-genres');\n  dataElement.genres.forEach((element) => {\n    genresContainner.innerHTML += `<li class=\"genre\">${element}</li>`;\n  });\n  (0,_user_star_rating_js__WEBPACK_IMPORTED_MODULE_0__.starRating)(stars, post, index);\n\n  const commentCount = document.querySelector('.com-count');\n  const reservationCount = document.querySelector('.res-count');\n\n  // insert comments\n  await (0,_api_comment_comments_build_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('com-item', apiURL, sessionID, dataElement.name, commentCount);\n\n  // insert reservations\n  await (0,_api_reservation_reservations_build_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('res-item', apiURL, sessionID, dataElement.name, reservationCount);\n\n  // comment event listener\n  await (0,_api_comment_add_com_listener_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n    'com-item',\n    _api_comment_comments_build_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    apiURL,\n    sessionID,\n    dataElement.name,\n    'com-form',\n    commentCount,\n  );\n\n  // reservation event listener\n  await (0,_api_reservation_add_res_listener_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n    'res-item',\n    _api_reservation_reservations_build_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    apiURL,\n    sessionID,\n    dataElement.name,\n    'res-form',\n    reservationCount,\n  );\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (insertPopup);\n\n\n//# sourceURL=webpack://leaderboard-api/./src/modules/popup-build.js?");

/***/ }),

/***/ "./src/modules/postInvolvement.js":
/*!****************************************!*\
  !*** ./src/modules/postInvolvement.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst postLikes = async (item) => {\n  const response = await fetch(\n    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/jOmvR28ksoZ7GUF5P2Cy/likes',\n    {\n      method: 'POST',\n      body: JSON.stringify({ item_id: item }),\n      headers: {\n        'Content-type': 'application/json; Charset=UTF-8',\n      },\n    },\n  );\n\n  return response.text();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postLikes);\n\n\n//# sourceURL=webpack://leaderboard-api/./src/modules/postInvolvement.js?");

/***/ }),

/***/ "./src/modules/user-star-rating.js":
/*!*****************************************!*\
  !*** ./src/modules/user-star-rating.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStars\": () => (/* binding */ getStars),\n/* harmony export */   \"starRating\": () => (/* binding */ starRating)\n/* harmony export */ });\nconst saveStars = (elementId, rate) => {\n  const stringfiedRate = JSON.stringify(rate);\n  localStorage.setItem(elementId, stringfiedRate);\n};\n\nconst getStars = (ElementId) => {\n  const parsedId = JSON.parse(localStorage.getItem(ElementId));\n  return parsedId;\n};\n\nconst starRating = (stars, post, id) => {\n  stars.onclick = async (e) => {\n    e.preventDefault();\n    const inputSelector = document.querySelector(\n      `#${e.target.getAttribute('for')}`,\n    );\n    inputSelector.checked = true;\n    saveStars(id, e.target.getAttribute('for'));\n\n    await setTimeout(() => {\n      stars.style.display = 'none';\n    }, 500);\n    setTimeout(() => {\n      post.style.display = 'block';\n    }, 500);\n\n    setTimeout(() => {\n      stars.style.display = 'block';\n      post.style.display = 'none';\n    }, 2000);\n  };\n};\n\n\n\n\n//# sourceURL=webpack://leaderboard-api/./src/modules/user-star-rating.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;