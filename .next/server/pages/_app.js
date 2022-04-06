(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/analytics/index.js":
/*!********************************!*\
  !*** ./src/analytics/index.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initGA": function() { return /* binding */ initGA; },
/* harmony export */   "logPageView": function() { return /* binding */ logPageView; },
/* harmony export */   "logEvent": function() { return /* binding */ logEvent; },
/* harmony export */   "logException": function() { return /* binding */ logException; }
/* harmony export */ });
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-ga */ "react-ga");
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_0__);

const initGA = () => {
  console.log('GA init');
  react_ga__WEBPACK_IMPORTED_MODULE_0___default().initialize('UA-xxxxxxxxx-1');
};
const logPageView = () => {
  console.log(`Logging pageview for ${window.location.pathname}`);
  react_ga__WEBPACK_IMPORTED_MODULE_0___default().set({
    page: window.location.pathname
  });
  react_ga__WEBPACK_IMPORTED_MODULE_0___default().pageview(window.location.pathname);
};
const logEvent = (category = '', action = '') => {
  if (category && action) {
    react_ga__WEBPACK_IMPORTED_MODULE_0___default().event({
      category,
      action
    });
  }
};
const logException = (description = '', fatal = false) => {
  if (description) {
    react_ga__WEBPACK_IMPORTED_MODULE_0___default().exception({
      description,
      fatal
    });
  }
};

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CustomApp; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var analytics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! analytics */ "./src/analytics/index.js");
/* harmony import */ var rc_tabs_assets_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-tabs/assets/index.css */ "./node_modules/rc-tabs/assets/index.css");
/* harmony import */ var rc_tabs_assets_index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rc_tabs_assets_index_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swiper_swiper_bundle_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/swiper-bundle.min.css */ "./node_modules/swiper/swiper-bundle.min.css");
/* harmony import */ var swiper_swiper_bundle_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_swiper_bundle_min_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rc_drawer_assets_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rc-drawer/assets/index.css */ "./node_modules/rc-drawer/assets/index.css");
/* harmony import */ var rc_drawer_assets_index_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rc_drawer_assets_index_css__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\g1ama\\Desktop\\Dev\\startup-agency-next\\src\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function CustomApp({
  Component,
  pageProps
}) {
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    (0,analytics__WEBPACK_IMPORTED_MODULE_3__.initGA)();
    (0,analytics__WEBPACK_IMPORTED_MODULE_3__.logPageView)();
    next_router__WEBPACK_IMPORTED_MODULE_2___default().events.on('routeChangeComplete', analytics__WEBPACK_IMPORTED_MODULE_3__.logPageView);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 10
  }, this);
}

/***/ }),

/***/ "./node_modules/rc-drawer/assets/index.css":
/*!*************************************************!*\
  !*** ./node_modules/rc-drawer/assets/index.css ***!
  \*************************************************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/rc-tabs/assets/index.css":
/*!***********************************************!*\
  !*** ./node_modules/rc-tabs/assets/index.css ***!
  \***********************************************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/swiper/swiper-bundle.min.css":
/*!***************************************************!*\
  !*** ./node_modules/swiper/swiper-bundle.min.css ***!
  \***************************************************/
/***/ (function() {



/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-ga":
/*!***************************!*\
  !*** external "react-ga" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-ga");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AbGFuZGluZy8wMTMtbmV4dC8uL3NyYy9hbmFseXRpY3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGxhbmRpbmcvMDEzLW5leHQvLi9zcmMvcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9AbGFuZGluZy8wMTMtbmV4dC9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vQGxhbmRpbmcvMDEzLW5leHQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL0BsYW5kaW5nLzAxMy1uZXh0L2V4dGVybmFsIFwicmVhY3QtZ2FcIiIsIndlYnBhY2s6Ly9AbGFuZGluZy8wMTMtbmV4dC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbImluaXRHQSIsImNvbnNvbGUiLCJsb2ciLCJSZWFjdEdBIiwibG9nUGFnZVZpZXciLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwicGFnZSIsImxvZ0V2ZW50IiwiY2F0ZWdvcnkiLCJhY3Rpb24iLCJsb2dFeGNlcHRpb24iLCJkZXNjcmlwdGlvbiIsImZhdGFsIiwiQ3VzdG9tQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidXNlRWZmZWN0IiwiUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxNQUFNQSxNQUFNLEdBQUcsTUFBTTtBQUMxQkMsU0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWjtBQUNBQyw0REFBQSxDQUFtQixnQkFBbkI7QUFDRCxDQUhNO0FBS0EsTUFBTUMsV0FBVyxHQUFHLE1BQU07QUFDL0JILFNBQU8sQ0FBQ0MsR0FBUixDQUFhLHdCQUF1QkcsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxRQUFTLEVBQTdEO0FBQ0FKLHFEQUFBLENBQVk7QUFBRUssUUFBSSxFQUFFSCxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDO0FBQXhCLEdBQVo7QUFDQUosMERBQUEsQ0FBaUJFLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsUUFBakM7QUFDRCxDQUpNO0FBTUEsTUFBTUUsUUFBUSxHQUFHLENBQUNDLFFBQVEsR0FBRyxFQUFaLEVBQWdCQyxNQUFNLEdBQUcsRUFBekIsS0FBZ0M7QUFDdEQsTUFBSUQsUUFBUSxJQUFJQyxNQUFoQixFQUF3QjtBQUN0QlIseURBQUEsQ0FBYztBQUFFTyxjQUFGO0FBQVlDO0FBQVosS0FBZDtBQUNEO0FBQ0YsQ0FKTTtBQU1BLE1BQU1DLFlBQVksR0FBRyxDQUFDQyxXQUFXLEdBQUcsRUFBZixFQUFtQkMsS0FBSyxHQUFHLEtBQTNCLEtBQXFDO0FBQy9ELE1BQUlELFdBQUosRUFBaUI7QUFDZlYsNkRBQUEsQ0FBa0I7QUFBRVUsaUJBQUY7QUFBZUM7QUFBZixLQUFsQjtBQUNEO0FBQ0YsQ0FKTSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNDLFNBQVQsQ0FBbUI7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQW5CLEVBQTZDO0FBQzFEQyxrREFBUyxDQUFDLE1BQU07QUFDZGxCLHFEQUFNO0FBQ05JLDBEQUFXO0FBQ1hlLGdFQUFBLENBQWlCLHFCQUFqQixFQUF3Q2Ysa0RBQXhDO0FBQ0QsR0FKUSxFQUlOLEVBSk0sQ0FBVDtBQU1BLHNCQUFPLDhEQUFDLFNBQUQsb0JBQWVhLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmRCx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0R0EgZnJvbSAncmVhY3QtZ2EnO1xuXG5leHBvcnQgY29uc3QgaW5pdEdBID0gKCkgPT4ge1xuICBjb25zb2xlLmxvZygnR0EgaW5pdCcpO1xuICBSZWFjdEdBLmluaXRpYWxpemUoJ1VBLXh4eHh4eHh4eC0xJyk7XG59O1xuXG5leHBvcnQgY29uc3QgbG9nUGFnZVZpZXcgPSAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBMb2dnaW5nIHBhZ2V2aWV3IGZvciAke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX1gKTtcbiAgUmVhY3RHQS5zZXQoeyBwYWdlOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgfSk7XG4gIFJlYWN0R0EucGFnZXZpZXcod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2dFdmVudCA9IChjYXRlZ29yeSA9ICcnLCBhY3Rpb24gPSAnJykgPT4ge1xuICBpZiAoY2F0ZWdvcnkgJiYgYWN0aW9uKSB7XG4gICAgUmVhY3RHQS5ldmVudCh7IGNhdGVnb3J5LCBhY3Rpb24gfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBsb2dFeGNlcHRpb24gPSAoZGVzY3JpcHRpb24gPSAnJywgZmF0YWwgPSBmYWxzZSkgPT4ge1xuICBpZiAoZGVzY3JpcHRpb24pIHtcbiAgICBSZWFjdEdBLmV4Y2VwdGlvbih7IGRlc2NyaXB0aW9uLCBmYXRhbCB9KTtcbiAgfVxufTtcbiIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgaW5pdEdBLCBsb2dQYWdlVmlldyB9IGZyb20gJ2FuYWx5dGljcyc7XG5pbXBvcnQgJ3JjLXRhYnMvYXNzZXRzL2luZGV4LmNzcyc7XG5pbXBvcnQgJ3N3aXBlci9zd2lwZXItYnVuZGxlLm1pbi5jc3MnO1xuaW1wb3J0ICdyYy1kcmF3ZXIvYXNzZXRzL2luZGV4LmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1c3RvbUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpbml0R0EoKTtcbiAgICBsb2dQYWdlVmlldygpO1xuICAgIFJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBsb2dQYWdlVmlldyk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPjtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZ2FcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==