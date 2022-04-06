(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/_app"],{

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./src/analytics/index.js":
/*!********************************!*\
  !*** ./src/analytics/index.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initGA": function() { return /* binding */ initGA; },
/* harmony export */   "logPageView": function() { return /* binding */ logPageView; },
/* harmony export */   "logEvent": function() { return /* binding */ logEvent; },
/* harmony export */   "logException": function() { return /* binding */ logException; }
/* harmony export */ });
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var initGA = function initGA() {
  console.log('GA init');
  react_ga__WEBPACK_IMPORTED_MODULE_0__.default.initialize('UA-xxxxxxxxx-1');
};
var logPageView = function logPageView() {
  console.log("Logging pageview for ".concat(window.location.pathname));
  react_ga__WEBPACK_IMPORTED_MODULE_0__.default.set({
    page: window.location.pathname
  });
  react_ga__WEBPACK_IMPORTED_MODULE_0__.default.pageview(window.location.pathname);
};
var logEvent = function logEvent() {
  var category = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (category && action) {
    react_ga__WEBPACK_IMPORTED_MODULE_0__.default.event({
      category: category,
      action: action
    });
  }
};
var logException = function logException() {
  var description = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var fatal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (description) {
    react_ga__WEBPACK_IMPORTED_MODULE_0__.default.exception({
      description: description,
      fatal: fatal
    });
  }
};

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CustomApp; }
/* harmony export */ });
/* harmony import */ var C_Users_g1ama_Desktop_Dev_startup_agency_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var analytics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! analytics */ "./src/analytics/index.js");
/* harmony import */ var rc_tabs_assets_index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rc-tabs/assets/index.css */ "./node_modules/rc-tabs/assets/index.css");
/* harmony import */ var rc_tabs_assets_index_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rc_tabs_assets_index_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var swiper_swiper_bundle_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/swiper-bundle.min.css */ "./node_modules/swiper/swiper-bundle.min.css");
/* harmony import */ var swiper_swiper_bundle_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(swiper_swiper_bundle_min_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rc_drawer_assets_index_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rc-drawer/assets/index.css */ "./node_modules/rc-drawer/assets/index.css");
/* harmony import */ var rc_drawer_assets_index_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rc_drawer_assets_index_css__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\g1ama\\Desktop\\Dev\\startup-agency-next\\src\\pages\\_app.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_g1ama_Desktop_Dev_startup_agency_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







function CustomApp(_ref) {
  _s();

  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    (0,analytics__WEBPACK_IMPORTED_MODULE_4__.initGA)();
    (0,analytics__WEBPACK_IMPORTED_MODULE_4__.logPageView)();
    next_router__WEBPACK_IMPORTED_MODULE_3___default().events.on('routeChangeComplete', analytics__WEBPACK_IMPORTED_MODULE_4__.logPageView);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 10
  }, this);
}

_s(CustomApp, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = CustomApp;

var _c;

$RefreshReg$(_c, "CustomApp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js! ***!
  \**********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_app",
      function () {
        return __webpack_require__(/*! private-next-pages/_app.js */ "./src/pages/_app.js");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/rc-drawer/assets/index.css":
/*!*************************************************!*\
  !*** ./node_modules/rc-drawer/assets/index.css ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!../../next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./index.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/rc-drawer/assets/index.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../../next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!../../next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./index.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/rc-drawer/assets/index.css",
      function () {
        content = __webpack_require__(/*! !!../../next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!../../next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./index.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/rc-drawer/assets/index.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/rc-tabs/assets/index.css":
/*!***********************************************!*\
  !*** ./node_modules/rc-tabs/assets/index.css ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!../../next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./index.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/rc-tabs/assets/index.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../../next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!../../next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./index.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/rc-tabs/assets/index.css",
      function () {
        content = __webpack_require__(/*! !!../../next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!../../next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./index.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/rc-tabs/assets/index.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/swiper/swiper-bundle.min.css":
/*!***************************************************!*\
  !*** ./node_modules/swiper/swiper-bundle.min.css ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!../next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./swiper-bundle.min.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/swiper/swiper-bundle.min.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!../next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./swiper-bundle.min.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/swiper/swiper-bundle.min.css",
      function () {
        content = __webpack_require__(/*! !!../next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!../next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./swiper-bundle.min.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/swiper/swiper-bundle.min.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js ***!
  \************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
const isOldIE=function isOldIE(){let memo;return function memorize(){if(typeof memo==='undefined'){// Test for IE <= 9 as proposed by Browserhacks
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// Tests for existence of standard globals is to allow style-loader
// to operate correctly into non-standard environments
// @see https://github.com/webpack-contrib/style-loader/issues/177
memo=Boolean(window&&document&&document.all&&!window.atob);}return memo;};}();const getTarget=function getTarget(){const memo={};return function memorize(target){if(typeof memo[target]==='undefined'){let styleTarget=document.querySelector(target);// Special case to return head of iframe instead of iframe itself
if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement){try{// This will throw an exception if access to iframe is blocked
// due to cross-origin restrictions
styleTarget=styleTarget.contentDocument.head;}catch(e){// istanbul ignore next
styleTarget=null;}}memo[target]=styleTarget;}return memo[target];};}();const stylesInDom=[];function getIndexByIdentifier(identifier){let result=-1;for(let i=0;i<stylesInDom.length;i++){if(stylesInDom[i].identifier===identifier){result=i;break;}}return result;}function modulesToDom(list,options){const idCountMap={};const identifiers=[];for(let i=0;i<list.length;i++){const item=list[i];const id=options.base?item[0]+options.base:item[0];const count=idCountMap[id]||0;const identifier=id+' '+count.toString();idCountMap[id]=count+1;const index=getIndexByIdentifier(identifier);const obj={css:item[1],media:item[2],sourceMap:item[3]};if(index!==-1){stylesInDom[index].references++;stylesInDom[index].updater(obj);}else{stylesInDom.push({identifier:identifier,updater:addStyle(obj,options),references:1});}identifiers.push(identifier);}return identifiers;}function insertStyleElement(options){const style=document.createElement('style');const attributes=options.attributes||{};if(typeof attributes.nonce==='undefined'){const nonce=// eslint-disable-next-line no-undef
 true?__webpack_require__.nc:0;if(nonce){attributes.nonce=nonce;}}Object.keys(attributes).forEach(function(key){style.setAttribute(key,attributes[key]);});if(typeof options.insert==='function'){options.insert(style);}else{const target=getTarget(options.insert||'head');if(!target){throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");}target.appendChild(style);}return style;}function removeStyleElement(style){// istanbul ignore if
if(style.parentNode===null){return false;}style.parentNode.removeChild(style);}/* istanbul ignore next  */const replaceText=function replaceText(){const textStore=[];return function replace(index,replacement){textStore[index]=replacement;return textStore.filter(Boolean).join('\n');};}();function applyToSingletonTag(style,index,remove,obj){const css=remove?'':obj.media?'@media '+obj.media+' {'+obj.css+'}':obj.css;// For old IE
/* istanbul ignore if  */if(style.styleSheet){style.styleSheet.cssText=replaceText(index,css);}else{const cssNode=document.createTextNode(css);const childNodes=style.childNodes;if(childNodes[index]){style.removeChild(childNodes[index]);}if(childNodes.length){style.insertBefore(cssNode,childNodes[index]);}else{style.appendChild(cssNode);}}}function applyToTag(style,options,obj){let css=obj.css;const media=obj.media;const sourceMap=obj.sourceMap;if(media){style.setAttribute('media',media);}else{style.removeAttribute('media');}if(sourceMap&&typeof btoa!=='undefined'){css+='\n/*# sourceMappingURL=data:application/json;base64,'+btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))+' */';}// For old IE
/* istanbul ignore if  */if(style.styleSheet){style.styleSheet.cssText=css;}else{while(style.firstChild){style.removeChild(style.firstChild);}style.appendChild(document.createTextNode(css));}}let singleton=null;let singletonCounter=0;function addStyle(obj,options){let style;let update;let remove;if(options.singleton){const styleIndex=singletonCounter++;style=singleton||(singleton=insertStyleElement(options));update=applyToSingletonTag.bind(null,style,styleIndex,false);remove=applyToSingletonTag.bind(null,style,styleIndex,true);}else{style=insertStyleElement(options);update=applyToTag.bind(null,style,options);remove=function(){removeStyleElement(style);};}update(obj);return function updateStyle(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap){return;}update(obj=newObj);}else{remove();}};}module.exports=function(list,options){options=options||{};// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
if(!options.singleton&&typeof options.singleton!=='boolean'){options.singleton=isOldIE();}list=list||[];let lastIdentifiers=modulesToDom(list,options);return function update(newList){newList=newList||[];if(Object.prototype.toString.call(newList)!=='[object Array]'){return;}for(let i=0;i<lastIdentifiers.length;i++){const identifier=lastIdentifiers[i];const index=getIndexByIdentifier(identifier);stylesInDom[index].references--;}const newLastIdentifiers=modulesToDom(newList,options);for(let i=0;i<lastIdentifiers.length;i++){const identifier=lastIdentifiers[i];const index=getIndexByIdentifier(identifier);if(stylesInDom[index].references===0){stylesInDom[index].updater();stylesInDom.splice(index,1);}}lastIdentifiers=newLastIdentifiers;};};
//# sourceMappingURL=injectStylesIntoStyleTag.js.map

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/api.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/api.js ***!
  \***********************************************************/
/***/ (function(module) {

var __dirname = "/";
module.exports=function(){"use strict";var n={762:function(n){n.exports=function(n){var t=[];t.toString=function toString(){return this.map(function(t){var r=cssWithMappingToString(t,n);if(t[2]){return"@media ".concat(t[2]," {").concat(r,"}")}return r}).join("")};t.i=function(n,r,o){if(typeof n==="string"){n=[[null,n,""]]}var e={};if(o){for(var a=0;a<this.length;a++){var c=this[a][0];if(c!=null){e[c]=true}}}for(var i=0;i<n.length;i++){var u=[].concat(n[i]);if(o&&e[u[0]]){continue}if(r){if(!u[2]){u[2]=r}else{u[2]="".concat(r," and ").concat(u[2])}}t.push(u)}};return t};function cssWithMappingToString(n,t){var r=n[1]||"";var o=n[3];if(!o){return r}if(t&&typeof btoa==="function"){var e=toComment(o);var a=o.sources.map(function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")});return[r].concat(a).concat([e]).join("\n")}return[r].join("\n")}function toComment(n){var t=btoa(unescape(encodeURIComponent(JSON.stringify(n))));var r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(r," */")}}};var t={};function __nccwpck_require__(r){if(t[r]){return t[r].exports}var o=t[r]={exports:{}};var e=true;try{n[r](o,o.exports,__nccwpck_require__);e=false}finally{if(e)delete t[r]}return o.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(762)}();

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/rc-drawer/assets/index.css":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/rc-drawer/assets/index.css ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".drawer {\n  position: fixed;\n  z-index: 9999;\n  -webkit-transition: width 0s ease 0.3s, height 0s ease 0.3s, -webkit-transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n  transition: width 0s ease 0.3s, height 0s ease 0.3s, -webkit-transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n  transition: width 0s ease 0.3s, height 0s ease 0.3s, transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n  transition: width 0s ease 0.3s, height 0s ease 0.3s, transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86), -webkit-transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n}\n.drawer > * {\n  -webkit-transition: opacity 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86), -webkit-transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86), -webkit-box-shadow 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n  transition: opacity 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86), -webkit-transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86), -webkit-box-shadow 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n  transition: transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86), opacity 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86), box-shadow 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n  transition: transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86), opacity 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86), box-shadow 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86), -webkit-transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86), -webkit-box-shadow 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n}\n.drawer.drawer-open {\n  -webkit-transition: -webkit-transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n  transition: -webkit-transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n  transition: transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n  transition: transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86), -webkit-transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n}\n.drawer .drawer-mask {\n  background: #000;\n  opacity: 0;\n  width: 100%;\n  height: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-transition: opacity 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86), height 0s ease 0.3s;\n  transition: opacity 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86), height 0s ease 0.3s;\n}\n.drawer-content-wrapper {\n  position: absolute;\n  background: #fff;\n}\n.drawer-content {\n  overflow: auto;\n  z-index: 1;\n  position: relative;\n}\n.drawer-handle {\n  position: absolute;\n  top: 72px;\n  width: 41px;\n  height: 40px;\n  cursor: pointer;\n  z-index: 0;\n  text-align: center;\n  line-height: 40px;\n  font-size: 16px;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-justify-content: center;\n          justify-content: center;\n  -webkit-align-items: center;\n          align-items: center;\n  background: #fff;\n}\n.drawer-handle-icon {\n  width: 14px;\n  height: 2px;\n  background: #333;\n  position: relative;\n  -webkit-transition: background 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n  transition: background 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n}\n.drawer-handle-icon:before,\n.drawer-handle-icon:after {\n  content: '';\n  display: block;\n  position: absolute;\n  background: #333;\n  width: 100%;\n  height: 2px;\n  -webkit-transition: -webkit-transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n  transition: -webkit-transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n  transition: transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n  transition: transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86), -webkit-transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n}\n.drawer-handle-icon:before {\n  top: -5px;\n}\n.drawer-handle-icon:after {\n  top: 5px;\n}\n.drawer-left,\n.drawer-right {\n  width: 0%;\n  height: 100%;\n}\n.drawer-left .drawer-content-wrapper,\n.drawer-right .drawer-content-wrapper,\n.drawer-left .drawer-content,\n.drawer-right .drawer-content {\n  height: 100%;\n}\n.drawer-left.drawer-open,\n.drawer-right.drawer-open {\n  width: 100%;\n}\n.drawer-left.drawer-open.no-mask,\n.drawer-right.drawer-open.no-mask {\n  width: 0%;\n}\n.drawer-left {\n  top: 0;\n  left: 0;\n}\n.drawer-left .drawer-handle {\n  right: -40px;\n  -webkit-box-shadow: 2px 0 8px rgba(0, 0, 0, 0.15);\n          box-shadow: 2px 0 8px rgba(0, 0, 0, 0.15);\n  border-radius: 0 4px 4px 0;\n}\n.drawer-left.drawer-open .drawer-content-wrapper {\n  -webkit-box-shadow: 2px 0 8px rgba(0, 0, 0, 0.15);\n          box-shadow: 2px 0 8px rgba(0, 0, 0, 0.15);\n}\n.drawer-right {\n  top: 0;\n  right: 0;\n}\n.drawer-right .drawer-content-wrapper {\n  right: 0;\n}\n.drawer-right .drawer-handle {\n  left: -40px;\n  -webkit-box-shadow: -2px 0 8px rgba(0, 0, 0, 0.15);\n          box-shadow: -2px 0 8px rgba(0, 0, 0, 0.15);\n  border-radius: 4px 0 0 4px;\n}\n.drawer-right.drawer-open .drawer-content-wrapper {\n  -webkit-box-shadow: -2px 0 8px rgba(0, 0, 0, 0.15);\n          box-shadow: -2px 0 8px rgba(0, 0, 0, 0.15);\n}\n.drawer-right.drawer-open.no-mask {\n  right: 1px;\n  -webkit-transform: translateX(1px);\n          transform: translateX(1px);\n}\n.drawer-top,\n.drawer-bottom {\n  width: 100%;\n  height: 0%;\n}\n.drawer-top .drawer-content-wrapper,\n.drawer-bottom .drawer-content-wrapper,\n.drawer-top .drawer-content,\n.drawer-bottom .drawer-content {\n  width: 100%;\n}\n.drawer-top .drawer-content,\n.drawer-bottom .drawer-content {\n  height: 100%;\n}\n.drawer-top.drawer-open,\n.drawer-bottom.drawer-open {\n  height: 100%;\n}\n.drawer-top.drawer-open.no-mask,\n.drawer-bottom.drawer-open.no-mask {\n  height: 0%;\n}\n.drawer-top .drawer-handle,\n.drawer-bottom .drawer-handle {\n  left: 50%;\n  margin-left: -20px;\n}\n.drawer-top {\n  top: 0;\n  left: 0;\n}\n.drawer-top .drawer-handle {\n  top: auto;\n  bottom: -40px;\n  -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  border-radius: 0 0 4px 4px;\n}\n.drawer-top.drawer-open .drawer-content-wrapper {\n  -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n}\n.drawer-bottom {\n  bottom: 0;\n  left: 0;\n}\n.drawer-bottom .drawer-content-wrapper {\n  bottom: 0;\n}\n.drawer-bottom .drawer-handle {\n  top: -40px;\n  -webkit-box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.15);\n          box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.15);\n  border-radius: 4px 4px 0 0;\n}\n.drawer-bottom.drawer-open .drawer-content-wrapper {\n  -webkit-box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.15);\n          box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.15);\n}\n.drawer-bottom.drawer-open.no-mask {\n  bottom: 1px;\n  -webkit-transform: translateY(1px);\n          transform: translateY(1px);\n}\n.drawer.drawer-open .drawer-mask {\n  opacity: 0.3;\n  height: 100%;\n  -webkit-transition: opacity 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n  transition: opacity 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n}\n.drawer.drawer-open .drawer-handle-icon {\n  background: transparent;\n}\n.drawer.drawer-open .drawer-handle-icon:before {\n  -webkit-transform: translateY(5px) rotate(45deg);\n          transform: translateY(5px) rotate(45deg);\n}\n.drawer.drawer-open .drawer-handle-icon:after {\n  -webkit-transform: translateY(-5px) rotate(-45deg);\n          transform: translateY(-5px) rotate(-45deg);\n}\n", "",{"version":3,"sources":["webpack://node_modules/rc-drawer/assets/index.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,aAAa;EACb,wHAAwG;EAAxG,gHAAwG;EAAxG,wGAAwG;EAAxG,qKAAwG;AAC1G;AACA;EACE,gMAAwK;EAAxK,wLAAwK;EAAxK,wKAAwK;EAAxK,mSAAwK;AAC1K;AACA;EACE,+EAA+D;EAA/D,uEAA+D;EAA/D,+DAA+D;EAA/D,4HAA+D;AACjE;AACA;EACE,gBAAgB;EAChB,UAAU;EACV,WAAW;EACX,SAAS;EACT,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,0FAAkF;EAAlF,kFAAkF;AACpF;AACA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,cAAc;EACd,UAAU;EACV,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,YAAY;EACZ,eAAe;EACf,UAAU;EACV,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,qBAAa;EAAb,aAAa;EACb,+BAAuB;UAAvB,uBAAuB;EACvB,2BAAmB;UAAnB,mBAAmB;EACnB,gBAAgB;AAClB;AACA;EACE,WAAW;EACX,WAAW;EACX,gBAAgB;EAChB,kBAAkB;EAClB,wEAAgE;EAAhE,gEAAgE;AAClE;AACA;;EAEE,WAAW;EACX,cAAc;EACd,kBAAkB;EAClB,gBAAgB;EAChB,WAAW;EACX,WAAW;EACX,+EAA+D;EAA/D,uEAA+D;EAA/D,+DAA+D;EAA/D,4HAA+D;AACjE;AACA;EACE,SAAS;AACX;AACA;EACE,QAAQ;AACV;AACA;;EAEE,SAAS;EACT,YAAY;AACd;AACA;;;;EAIE,YAAY;AACd;AACA;;EAEE,WAAW;AACb;AACA;;EAEE,SAAS;AACX;AACA;EACE,MAAM;EACN,OAAO;AACT;AACA;EACE,YAAY;EACZ,iDAAyC;UAAzC,yCAAyC;EACzC,0BAA0B;AAC5B;AACA;EACE,iDAAyC;UAAzC,yCAAyC;AAC3C;AACA;EACE,MAAM;EACN,QAAQ;AACV;AACA;EACE,QAAQ;AACV;AACA;EACE,WAAW;EACX,kDAA0C;UAA1C,0CAA0C;EAC1C,0BAA0B;AAC5B;AACA;EACE,kDAA0C;UAA1C,0CAA0C;AAC5C;AACA;EACE,UAAU;EACV,kCAA0B;UAA1B,0BAA0B;AAC5B;AACA;;EAEE,WAAW;EACX,UAAU;AACZ;AACA;;;;EAIE,WAAW;AACb;AACA;;EAEE,YAAY;AACd;AACA;;EAEE,YAAY;AACd;AACA;;EAEE,UAAU;AACZ;AACA;;EAEE,SAAS;EACT,kBAAkB;AACpB;AACA;EACE,MAAM;EACN,OAAO;AACT;AACA;EACE,SAAS;EACT,aAAa;EACb,iDAAyC;UAAzC,yCAAyC;EACzC,0BAA0B;AAC5B;AACA;EACE,iDAAyC;UAAzC,yCAAyC;AAC3C;AACA;EACE,SAAS;EACT,OAAO;AACT;AACA;EACE,SAAS;AACX;AACA;EACE,UAAU;EACV,kDAA0C;UAA1C,0CAA0C;EAC1C,0BAA0B;AAC5B;AACA;EACE,kDAA0C;UAA1C,0CAA0C;AAC5C;AACA;EACE,WAAW;EACX,kCAA0B;UAA1B,0BAA0B;AAC5B;AACA;EACE,YAAY;EACZ,YAAY;EACZ,qEAA6D;EAA7D,6DAA6D;AAC/D;AACA;EACE,uBAAuB;AACzB;AACA;EACE,gDAAwC;UAAxC,wCAAwC;AAC1C;AACA;EACE,kDAA0C;UAA1C,0CAA0C;AAC5C","sourcesContent":[".drawer {\n  position: fixed;\n  z-index: 9999;\n  transition: width 0s ease 0.3s, height 0s ease 0.3s, transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n}\n.drawer > * {\n  transition: transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86), opacity 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86), box-shadow 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n}\n.drawer.drawer-open {\n  transition: transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n}\n.drawer .drawer-mask {\n  background: #000;\n  opacity: 0;\n  width: 100%;\n  height: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  transition: opacity 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86), height 0s ease 0.3s;\n}\n.drawer-content-wrapper {\n  position: absolute;\n  background: #fff;\n}\n.drawer-content {\n  overflow: auto;\n  z-index: 1;\n  position: relative;\n}\n.drawer-handle {\n  position: absolute;\n  top: 72px;\n  width: 41px;\n  height: 40px;\n  cursor: pointer;\n  z-index: 0;\n  text-align: center;\n  line-height: 40px;\n  font-size: 16px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #fff;\n}\n.drawer-handle-icon {\n  width: 14px;\n  height: 2px;\n  background: #333;\n  position: relative;\n  transition: background 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n}\n.drawer-handle-icon:before,\n.drawer-handle-icon:after {\n  content: '';\n  display: block;\n  position: absolute;\n  background: #333;\n  width: 100%;\n  height: 2px;\n  transition: transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n}\n.drawer-handle-icon:before {\n  top: -5px;\n}\n.drawer-handle-icon:after {\n  top: 5px;\n}\n.drawer-left,\n.drawer-right {\n  width: 0%;\n  height: 100%;\n}\n.drawer-left .drawer-content-wrapper,\n.drawer-right .drawer-content-wrapper,\n.drawer-left .drawer-content,\n.drawer-right .drawer-content {\n  height: 100%;\n}\n.drawer-left.drawer-open,\n.drawer-right.drawer-open {\n  width: 100%;\n}\n.drawer-left.drawer-open.no-mask,\n.drawer-right.drawer-open.no-mask {\n  width: 0%;\n}\n.drawer-left {\n  top: 0;\n  left: 0;\n}\n.drawer-left .drawer-handle {\n  right: -40px;\n  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.15);\n  border-radius: 0 4px 4px 0;\n}\n.drawer-left.drawer-open .drawer-content-wrapper {\n  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.15);\n}\n.drawer-right {\n  top: 0;\n  right: 0;\n}\n.drawer-right .drawer-content-wrapper {\n  right: 0;\n}\n.drawer-right .drawer-handle {\n  left: -40px;\n  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.15);\n  border-radius: 4px 0 0 4px;\n}\n.drawer-right.drawer-open .drawer-content-wrapper {\n  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.15);\n}\n.drawer-right.drawer-open.no-mask {\n  right: 1px;\n  transform: translateX(1px);\n}\n.drawer-top,\n.drawer-bottom {\n  width: 100%;\n  height: 0%;\n}\n.drawer-top .drawer-content-wrapper,\n.drawer-bottom .drawer-content-wrapper,\n.drawer-top .drawer-content,\n.drawer-bottom .drawer-content {\n  width: 100%;\n}\n.drawer-top .drawer-content,\n.drawer-bottom .drawer-content {\n  height: 100%;\n}\n.drawer-top.drawer-open,\n.drawer-bottom.drawer-open {\n  height: 100%;\n}\n.drawer-top.drawer-open.no-mask,\n.drawer-bottom.drawer-open.no-mask {\n  height: 0%;\n}\n.drawer-top .drawer-handle,\n.drawer-bottom .drawer-handle {\n  left: 50%;\n  margin-left: -20px;\n}\n.drawer-top {\n  top: 0;\n  left: 0;\n}\n.drawer-top .drawer-handle {\n  top: auto;\n  bottom: -40px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  border-radius: 0 0 4px 4px;\n}\n.drawer-top.drawer-open .drawer-content-wrapper {\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n}\n.drawer-bottom {\n  bottom: 0;\n  left: 0;\n}\n.drawer-bottom .drawer-content-wrapper {\n  bottom: 0;\n}\n.drawer-bottom .drawer-handle {\n  top: -40px;\n  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.15);\n  border-radius: 4px 4px 0 0;\n}\n.drawer-bottom.drawer-open .drawer-content-wrapper {\n  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.15);\n}\n.drawer-bottom.drawer-open.no-mask {\n  bottom: 1px;\n  transform: translateY(1px);\n}\n.drawer.drawer-open .drawer-mask {\n  opacity: 0.3;\n  height: 100%;\n  transition: opacity 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n}\n.drawer.drawer-open .drawer-handle-icon {\n  background: transparent;\n}\n.drawer.drawer-open .drawer-handle-icon:before {\n  transform: translateY(5px) rotate(45deg);\n}\n.drawer.drawer-open .drawer-handle-icon:after {\n  transform: translateY(-5px) rotate(-45deg);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/rc-tabs/assets/index.css":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/rc-tabs/assets/index.css ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".rc-tabs-dropdown {\n  position: absolute;\n  background: #fefefe;\n  border: 1px solid black;\n  max-height: 200px;\n  overflow: auto;\n}\n.rc-tabs-dropdown-hidden {\n  display: none;\n}\n.rc-tabs-dropdown-menu {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.rc-tabs-dropdown-menu-item {\n  padding: 4px 8px;\n}\n.rc-tabs-dropdown-menu-item-selected {\n  background: red;\n}\n.rc-tabs-dropdown-menu-item-disabled {\n  opacity: 0.3;\n  cursor: not-allowed;\n}\n.rc-tabs-content {\n  display: -webkit-flex;\n  display: flex;\n  width: 100%;\n}\n.rc-tabs-content-holder {\n  -webkit-flex: auto;\n          flex: auto;\n}\n.rc-tabs-content-animated {\n  -webkit-transition: margin 0.3s;\n  transition: margin 0.3s;\n}\n.rc-tabs-tabpane {\n  width: 100%;\n  -webkit-flex: none;\n          flex: none;\n}\n.rc-tabs {\n  display: -webkit-flex;\n  display: flex;\n}\n.rc-tabs-top,\n.rc-tabs-bottom {\n  -webkit-flex-direction: column;\n          flex-direction: column;\n}\n.rc-tabs-top .rc-tabs-ink-bar,\n.rc-tabs-bottom .rc-tabs-ink-bar {\n  height: 3px;\n}\n.rc-tabs-top .rc-tabs-ink-bar {\n  bottom: 0;\n}\n.rc-tabs-bottom .rc-tabs-nav {\n  -webkit-order: 1;\n          order: 1;\n}\n.rc-tabs-bottom .rc-tabs-content {\n  -webkit-order: 0;\n          order: 0;\n}\n.rc-tabs-bottom .rc-tabs-ink-bar {\n  top: 0;\n}\n.rc-tabs-left.rc-tabs-editable .rc-tabs-tab,\n.rc-tabs-right.rc-tabs-editable .rc-tabs-tab {\n  padding-right: 32px;\n}\n.rc-tabs-left .rc-tabs-nav-wrap,\n.rc-tabs-right .rc-tabs-nav-wrap {\n  -webkit-flex-direction: column;\n          flex-direction: column;\n}\n.rc-tabs-left .rc-tabs-ink-bar,\n.rc-tabs-right .rc-tabs-ink-bar {\n  width: 3px;\n}\n.rc-tabs-left .rc-tabs-nav,\n.rc-tabs-right .rc-tabs-nav {\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  min-width: 50px;\n}\n.rc-tabs-left .rc-tabs-nav-list,\n.rc-tabs-right .rc-tabs-nav-list,\n.rc-tabs-left .rc-tabs-nav-operations,\n.rc-tabs-right .rc-tabs-nav-operations {\n  -webkit-flex: 1 0 auto;\n          flex: 1 0 auto;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n}\n.rc-tabs-left .rc-tabs-ink-bar {\n  right: 0;\n}\n.rc-tabs-right .rc-tabs-nav {\n  -webkit-order: 1;\n          order: 1;\n}\n.rc-tabs-right .rc-tabs-content {\n  -webkit-order: 0;\n          order: 0;\n}\n.rc-tabs-right .rc-tabs-ink-bar {\n  left: 0;\n}\n.rc-tabs-rtl {\n  direction: rtl;\n}\n.rc-tabs-dropdown-rtl {\n  direction: rtl;\n}\n.rc-tabs {\n  border: 1px solid gray;\n  font-size: 14px;\n  overflow: hidden;\n}\n.rc-tabs-nav {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex: none;\n          flex: none;\n  position: relative;\n}\n.rc-tabs-nav-measure,\n.rc-tabs-nav-wrap {\n  -webkit-transform: translate(0);\n          transform: translate(0);\n  position: relative;\n  display: inline-block;\n  -webkit-flex: auto;\n          flex: auto;\n  white-space: nowrap;\n  overflow: hidden;\n  display: -webkit-flex;\n  display: flex;\n}\n.rc-tabs-nav-measure-ping-left::before,\n.rc-tabs-nav-wrap-ping-left::before,\n.rc-tabs-nav-measure-ping-right::after,\n.rc-tabs-nav-wrap-ping-right::after {\n  content: '';\n  position: absolute;\n  top: 0;\n  bottom: 0;\n}\n.rc-tabs-nav-measure-ping-left::before,\n.rc-tabs-nav-wrap-ping-left::before {\n  left: 0;\n  border-left: 1px solid red;\n}\n.rc-tabs-nav-measure-ping-right::after,\n.rc-tabs-nav-wrap-ping-right::after {\n  right: 0;\n  border-right: 1px solid red;\n}\n.rc-tabs-nav-measure-ping-top::before,\n.rc-tabs-nav-wrap-ping-top::before,\n.rc-tabs-nav-measure-ping-bottom::after,\n.rc-tabs-nav-wrap-ping-bottom::after {\n  content: '';\n  position: absolute;\n  left: 0;\n  right: 0;\n}\n.rc-tabs-nav-measure-ping-top::before,\n.rc-tabs-nav-wrap-ping-top::before {\n  top: 0;\n  border-top: 1px solid red;\n}\n.rc-tabs-nav-measure-ping-bottom::after,\n.rc-tabs-nav-wrap-ping-bottom::after {\n  bottom: 0;\n  border-top: 1px solid red;\n}\n.rc-tabs-nav-list {\n  display: -webkit-flex;\n  display: flex;\n  position: relative;\n  -webkit-transition: -webkit-transform 0.3s;\n  transition: -webkit-transform 0.3s;\n  transition: transform 0.3s;\n  transition: transform 0.3s, -webkit-transform 0.3s;\n}\n.rc-tabs-nav-operations {\n  display: -webkit-flex;\n  display: flex;\n}\n.rc-tabs-nav-operations-hidden {\n  position: absolute;\n  visibility: hidden;\n  pointer-events: none;\n}\n.rc-tabs-nav-more {\n  border: 1px solid blue;\n  background: rgba(255, 0, 0, 0.1);\n}\n.rc-tabs-nav-add {\n  border: 1px solid green;\n  background: rgba(0, 255, 0, 0.1);\n}\n.rc-tabs-tab {\n  border: 0;\n  font-size: 20px;\n  background: rgba(255, 255, 255, 0.5);\n  margin: 0;\n  display: -webkit-flex;\n  display: flex;\n  outline: none;\n  cursor: pointer;\n  position: relative;\n  font-weight: lighter;\n  -webkit-align-items: center;\n          align-items: center;\n}\n.rc-tabs-tab-btn,\n.rc-tabs-tab-remove {\n  border: 0;\n  background: transparent;\n}\n.rc-tabs-tab-btn {\n  font-weight: inherit;\n  line-height: 32px;\n}\n.rc-tabs-tab-remove:hover {\n  color: red;\n}\n.rc-tabs-tab-active {\n  font-weight: bolder;\n}\n.rc-tabs-ink-bar {\n  position: absolute;\n  background: red;\n  pointer-events: none;\n}\n.rc-tabs-ink-bar-animated {\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.rc-tabs-extra-content {\n  -webkit-flex: none;\n          flex: none;\n}\n", "",{"version":3,"sources":["webpack://node_modules/rc-tabs/assets/index.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,uBAAuB;EACvB,iBAAiB;EACjB,cAAc;AAChB;AACA;EACE,aAAa;AACf;AACA;EACE,SAAS;EACT,UAAU;EACV,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,eAAe;AACjB;AACA;EACE,YAAY;EACZ,mBAAmB;AACrB;AACA;EACE,qBAAa;EAAb,aAAa;EACb,WAAW;AACb;AACA;EACE,kBAAU;UAAV,UAAU;AACZ;AACA;EACE,+BAAuB;EAAvB,uBAAuB;AACzB;AACA;EACE,WAAW;EACX,kBAAU;UAAV,UAAU;AACZ;AACA;EACE,qBAAa;EAAb,aAAa;AACf;AACA;;EAEE,8BAAsB;UAAtB,sBAAsB;AACxB;AACA;;EAEE,WAAW;AACb;AACA;EACE,SAAS;AACX;AACA;EACE,gBAAQ;UAAR,QAAQ;AACV;AACA;EACE,gBAAQ;UAAR,QAAQ;AACV;AACA;EACE,MAAM;AACR;AACA;;EAEE,mBAAmB;AACrB;AACA;;EAEE,8BAAsB;UAAtB,sBAAsB;AACxB;AACA;;EAEE,UAAU;AACZ;AACA;;EAEE,8BAAsB;UAAtB,sBAAsB;EACtB,eAAe;AACjB;AACA;;;;EAIE,sBAAc;UAAd,cAAc;EACd,8BAAsB;UAAtB,sBAAsB;AACxB;AACA;EACE,QAAQ;AACV;AACA;EACE,gBAAQ;UAAR,QAAQ;AACV;AACA;EACE,gBAAQ;UAAR,QAAQ;AACV;AACA;EACE,OAAO;AACT;AACA;EACE,cAAc;AAChB;AACA;EACE,cAAc;AAChB;AACA;EACE,sBAAsB;EACtB,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,qBAAa;EAAb,aAAa;EACb,kBAAU;UAAV,UAAU;EACV,kBAAkB;AACpB;AACA;;EAEE,+BAAuB;UAAvB,uBAAuB;EACvB,kBAAkB;EAClB,qBAAqB;EACrB,kBAAU;UAAV,UAAU;EACV,mBAAmB;EACnB,gBAAgB;EAChB,qBAAa;EAAb,aAAa;AACf;AACA;;;;EAIE,WAAW;EACX,kBAAkB;EAClB,MAAM;EACN,SAAS;AACX;AACA;;EAEE,OAAO;EACP,0BAA0B;AAC5B;AACA;;EAEE,QAAQ;EACR,2BAA2B;AAC7B;AACA;;;;EAIE,WAAW;EACX,kBAAkB;EAClB,OAAO;EACP,QAAQ;AACV;AACA;;EAEE,MAAM;EACN,yBAAyB;AAC3B;AACA;;EAEE,SAAS;EACT,yBAAyB;AAC3B;AACA;EACE,qBAAa;EAAb,aAAa;EACb,kBAAkB;EAClB,0CAA0B;EAA1B,kCAA0B;EAA1B,0BAA0B;EAA1B,kDAA0B;AAC5B;AACA;EACE,qBAAa;EAAb,aAAa;AACf;AACA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,oBAAoB;AACtB;AACA;EACE,sBAAsB;EACtB,gCAAgC;AAClC;AACA;EACE,uBAAuB;EACvB,gCAAgC;AAClC;AACA;EACE,SAAS;EACT,eAAe;EACf,oCAAoC;EACpC,SAAS;EACT,qBAAa;EAAb,aAAa;EACb,aAAa;EACb,eAAe;EACf,kBAAkB;EAClB,oBAAoB;EACpB,2BAAmB;UAAnB,mBAAmB;AACrB;AACA;;EAEE,SAAS;EACT,uBAAuB;AACzB;AACA;EACE,oBAAoB;EACpB,iBAAiB;AACnB;AACA;EACE,UAAU;AACZ;AACA;EACE,mBAAmB;AACrB;AACA;EACE,kBAAkB;EAClB,eAAe;EACf,oBAAoB;AACtB;AACA;EACE,4BAAoB;EAApB,oBAAoB;AACtB;AACA;EACE,kBAAU;UAAV,UAAU;AACZ","sourcesContent":[".rc-tabs-dropdown {\n  position: absolute;\n  background: #fefefe;\n  border: 1px solid black;\n  max-height: 200px;\n  overflow: auto;\n}\n.rc-tabs-dropdown-hidden {\n  display: none;\n}\n.rc-tabs-dropdown-menu {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.rc-tabs-dropdown-menu-item {\n  padding: 4px 8px;\n}\n.rc-tabs-dropdown-menu-item-selected {\n  background: red;\n}\n.rc-tabs-dropdown-menu-item-disabled {\n  opacity: 0.3;\n  cursor: not-allowed;\n}\n.rc-tabs-content {\n  display: flex;\n  width: 100%;\n}\n.rc-tabs-content-holder {\n  flex: auto;\n}\n.rc-tabs-content-animated {\n  transition: margin 0.3s;\n}\n.rc-tabs-tabpane {\n  width: 100%;\n  flex: none;\n}\n.rc-tabs {\n  display: flex;\n}\n.rc-tabs-top,\n.rc-tabs-bottom {\n  flex-direction: column;\n}\n.rc-tabs-top .rc-tabs-ink-bar,\n.rc-tabs-bottom .rc-tabs-ink-bar {\n  height: 3px;\n}\n.rc-tabs-top .rc-tabs-ink-bar {\n  bottom: 0;\n}\n.rc-tabs-bottom .rc-tabs-nav {\n  order: 1;\n}\n.rc-tabs-bottom .rc-tabs-content {\n  order: 0;\n}\n.rc-tabs-bottom .rc-tabs-ink-bar {\n  top: 0;\n}\n.rc-tabs-left.rc-tabs-editable .rc-tabs-tab,\n.rc-tabs-right.rc-tabs-editable .rc-tabs-tab {\n  padding-right: 32px;\n}\n.rc-tabs-left .rc-tabs-nav-wrap,\n.rc-tabs-right .rc-tabs-nav-wrap {\n  flex-direction: column;\n}\n.rc-tabs-left .rc-tabs-ink-bar,\n.rc-tabs-right .rc-tabs-ink-bar {\n  width: 3px;\n}\n.rc-tabs-left .rc-tabs-nav,\n.rc-tabs-right .rc-tabs-nav {\n  flex-direction: column;\n  min-width: 50px;\n}\n.rc-tabs-left .rc-tabs-nav-list,\n.rc-tabs-right .rc-tabs-nav-list,\n.rc-tabs-left .rc-tabs-nav-operations,\n.rc-tabs-right .rc-tabs-nav-operations {\n  flex: 1 0 auto;\n  flex-direction: column;\n}\n.rc-tabs-left .rc-tabs-ink-bar {\n  right: 0;\n}\n.rc-tabs-right .rc-tabs-nav {\n  order: 1;\n}\n.rc-tabs-right .rc-tabs-content {\n  order: 0;\n}\n.rc-tabs-right .rc-tabs-ink-bar {\n  left: 0;\n}\n.rc-tabs-rtl {\n  direction: rtl;\n}\n.rc-tabs-dropdown-rtl {\n  direction: rtl;\n}\n.rc-tabs {\n  border: 1px solid gray;\n  font-size: 14px;\n  overflow: hidden;\n}\n.rc-tabs-nav {\n  display: flex;\n  flex: none;\n  position: relative;\n}\n.rc-tabs-nav-measure,\n.rc-tabs-nav-wrap {\n  transform: translate(0);\n  position: relative;\n  display: inline-block;\n  flex: auto;\n  white-space: nowrap;\n  overflow: hidden;\n  display: flex;\n}\n.rc-tabs-nav-measure-ping-left::before,\n.rc-tabs-nav-wrap-ping-left::before,\n.rc-tabs-nav-measure-ping-right::after,\n.rc-tabs-nav-wrap-ping-right::after {\n  content: '';\n  position: absolute;\n  top: 0;\n  bottom: 0;\n}\n.rc-tabs-nav-measure-ping-left::before,\n.rc-tabs-nav-wrap-ping-left::before {\n  left: 0;\n  border-left: 1px solid red;\n}\n.rc-tabs-nav-measure-ping-right::after,\n.rc-tabs-nav-wrap-ping-right::after {\n  right: 0;\n  border-right: 1px solid red;\n}\n.rc-tabs-nav-measure-ping-top::before,\n.rc-tabs-nav-wrap-ping-top::before,\n.rc-tabs-nav-measure-ping-bottom::after,\n.rc-tabs-nav-wrap-ping-bottom::after {\n  content: '';\n  position: absolute;\n  left: 0;\n  right: 0;\n}\n.rc-tabs-nav-measure-ping-top::before,\n.rc-tabs-nav-wrap-ping-top::before {\n  top: 0;\n  border-top: 1px solid red;\n}\n.rc-tabs-nav-measure-ping-bottom::after,\n.rc-tabs-nav-wrap-ping-bottom::after {\n  bottom: 0;\n  border-top: 1px solid red;\n}\n.rc-tabs-nav-list {\n  display: flex;\n  position: relative;\n  transition: transform 0.3s;\n}\n.rc-tabs-nav-operations {\n  display: flex;\n}\n.rc-tabs-nav-operations-hidden {\n  position: absolute;\n  visibility: hidden;\n  pointer-events: none;\n}\n.rc-tabs-nav-more {\n  border: 1px solid blue;\n  background: rgba(255, 0, 0, 0.1);\n}\n.rc-tabs-nav-add {\n  border: 1px solid green;\n  background: rgba(0, 255, 0, 0.1);\n}\n.rc-tabs-tab {\n  border: 0;\n  font-size: 20px;\n  background: rgba(255, 255, 255, 0.5);\n  margin: 0;\n  display: flex;\n  outline: none;\n  cursor: pointer;\n  position: relative;\n  font-weight: lighter;\n  align-items: center;\n}\n.rc-tabs-tab-btn,\n.rc-tabs-tab-remove {\n  border: 0;\n  background: transparent;\n}\n.rc-tabs-tab-btn {\n  font-weight: inherit;\n  line-height: 32px;\n}\n.rc-tabs-tab-remove:hover {\n  color: red;\n}\n.rc-tabs-tab-active {\n  font-weight: bolder;\n}\n.rc-tabs-ink-bar {\n  position: absolute;\n  background: red;\n  pointer-events: none;\n}\n.rc-tabs-ink-bar-animated {\n  transition: all 0.3s;\n}\n.rc-tabs-extra-content {\n  flex: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/swiper/swiper-bundle.min.css":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/swiper/swiper-bundle.min.css ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/**\n * Swiper 6.8.4\n * Most modern mobile touch slider and framework with hardware accelerated transitions\n * https://swiperjs.com\n *\n * Copyright 2014-2021 Vladimir Kharlampidi\n *\n * Released under the MIT License\n *\n * Released on: August 23, 2021\n */\n\n@font-face{font-family:swiper-icons;src:url('data:application/font-woff;charset=utf-8;base64, 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') format('woff');font-weight:400;font-style:normal}:root{--swiper-theme-color:#007aff}.swiper-container{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}.swiper-container-vertical>.swiper-wrapper{-webkit-flex-direction:column;flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:-webkit-flex;display:flex;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}.swiper-container-android .swiper-slide,.swiper-wrapper{-webkit-transform:translate3d(0px,0,0);transform:translate3d(0px,0,0)}.swiper-container-multirow>.swiper-wrapper{-webkit-flex-wrap:wrap;flex-wrap:wrap}.swiper-container-multirow-column>.swiper-wrapper{-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-flex-direction:column;flex-direction:column}.swiper-container-free-mode>.swiper-wrapper{-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;margin:0 auto}.swiper-container-pointer-events{touch-action:pan-y}.swiper-container-pointer-events.swiper-container-vertical{touch-action:pan-x}.swiper-slide{-webkit-flex-shrink:0;flex-shrink:0;width:100%;height:100%;position:relative;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform}.swiper-slide-invisible-blank{visibility:hidden}.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide{height:auto}.swiper-container-autoheight .swiper-wrapper{-webkit-align-items:flex-start;align-items:flex-start;-webkit-transition-property:height,-webkit-transform;transition-property:height,-webkit-transform;transition-property:transform,height;transition-property:transform,height,-webkit-transform}.swiper-container-3d{-webkit-perspective:1200px;perspective:1200px}.swiper-container-3d .swiper-cube-shadow,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-wrapper{-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-container-3d .swiper-slide-shadow-left{background-image:-webkit-gradient(linear,right top, left top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:-webkit-linear-gradient(right,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-right{background-image:-webkit-gradient(linear,left top, right top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:-webkit-linear-gradient(left,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-top{background-image:-webkit-gradient(linear,left bottom, left top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:-webkit-linear-gradient(bottom,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-bottom{background-image:-webkit-gradient(linear,left top, left bottom,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:-webkit-linear-gradient(top,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-container-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-container-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-container-horizontal.swiper-container-css-mode>.swiper-wrapper{-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory}.swiper-container-vertical.swiper-container-css-mode>.swiper-wrapper{-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory}:root{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;width:-webkit-calc(var(--swiper-navigation-size)/ 44 * 27);width:calc(var(--swiper-navigation-size)/ 44 * 27);height:var(--swiper-navigation-size);margin-top:-webkit-calc(0px - (var(--swiper-navigation-size)/ 2));margin-top:calc(0px - (var(--swiper-navigation-size)/ 2));z-index:10;cursor:pointer;display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;-webkit-justify-content:center;justify-content:center;color:var(--swiper-navigation-color,var(--swiper-theme-color))}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-next:after,.swiper-button-prev:after{font-family:swiper-icons;font-size:var(--swiper-navigation-size);text-transform:none!important;letter-spacing:0;text-transform:none;-webkit-font-feature-settings:normal, ;-moz-font-feature-settings:normal, ;font-feature-settings:normal, ;font-variant:normal;font-variant:initial;line-height:1}.swiper-button-prev,.swiper-container-rtl .swiper-button-next{left:10px;right:auto}.swiper-button-prev:after,.swiper-container-rtl .swiper-button-next:after{content:'prev'}.swiper-button-next,.swiper-container-rtl .swiper-button-prev{right:10px;left:auto}.swiper-button-next:after,.swiper-container-rtl .swiper-button-prev:after{content:'next'}.swiper-button-next.swiper-button-white,.swiper-button-prev.swiper-button-white{--swiper-navigation-color:#ffffff}.swiper-button-next.swiper-button-black,.swiper-button-prev.swiper-button-black{--swiper-navigation-color:#000000}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;-webkit-transition:.3s opacity;transition:.3s opacity;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-container-horizontal>.swiper-pagination-bullets,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transform:scale(.33);transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active{-webkit-transform:scale(1);transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{-webkit-transform:scale(1);transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{-webkit-transform:scale(.66);transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{-webkit-transform:scale(.33);transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{-webkit-transform:scale(.66);transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{-webkit-transform:scale(.33);transform:scale(.33)}.swiper-pagination-bullet{width:8px;height:8px;display:inline-block;border-radius:50%;background:#000;opacity:.2}button.swiper-pagination-bullet{border:none;margin:0;padding:0;-webkit-box-shadow:none;box-shadow:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet:only-child{display:none!important}.swiper-pagination-bullet-active{opacity:1;background:var(--swiper-pagination-color,var(--swiper-theme-color))}.swiper-container-vertical>.swiper-pagination-bullets{right:10px;top:50%;-webkit-transform:translate3d(0px,-50%,0);transform:translate3d(0px,-50%,0)}.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:6px 0;display:block}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:8px}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;-webkit-transition:.2s transform,.2s top;transition:.2s transform,.2s top}.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 4px}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);white-space:nowrap}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transition:.2s transform,.2s left;transition:.2s transform,.2s left}.swiper-container-horizontal.swiper-container-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transition:.2s transform,.2s right;transition:.2s transform,.2s right}.swiper-pagination-progressbar{background:rgba(0,0,0,.25);position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color,var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:left top;transform-origin:left top}.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{-webkit-transform-origin:right top;transform-origin:right top}.swiper-container-horizontal>.swiper-pagination-progressbar,.swiper-container-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:4px;left:0;top:0}.swiper-container-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-container-vertical>.swiper-pagination-progressbar{width:4px;height:100%;left:0;top:0}.swiper-pagination-white{--swiper-pagination-color:#ffffff}.swiper-pagination-black{--swiper-pagination-color:#000000}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:rgba(0,0,0,.1)}.swiper-container-horizontal>.swiper-scrollbar{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}.swiper-container-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:rgba(0,0,0,.5);border-radius:10px;left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}.swiper-zoom-container{width:100%;height:100%;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;-webkit-align-items:center;align-items:center;text-align:center}.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg{max-width:100%;max-height:100%;object-fit:contain}.swiper-slide-zoomed{cursor:move}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;-webkit-transform-origin:50%;transform-origin:50%;-webkit-animation:swiper-preloader-spin 1s infinite linear;animation:swiper-preloader-spin 1s infinite linear;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-radius:50%;border-top-color:transparent}.swiper-lazy-preloader-white{--swiper-preloader-color:#fff}.swiper-lazy-preloader-black{--swiper-preloader-color:#000}@-webkit-keyframes swiper-preloader-spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes swiper-preloader-spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.swiper-container .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-container-fade.swiper-container-free-mode .swiper-slide{-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out}.swiper-container-fade .swiper-slide{pointer-events:none;-webkit-transition-property:opacity;transition-property:opacity}.swiper-container-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-fade .swiper-slide-active,.swiper-container-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube{overflow:visible}.swiper-container-cube .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;-webkit-transform-origin:0 0;transform-origin:0 0;width:100%;height:100%}.swiper-container-cube .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-cube.swiper-container-rtl .swiper-slide{-webkit-transform-origin:100% 0;transform-origin:100% 0}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-next,.swiper-container-cube .swiper-slide-next+.swiper-slide,.swiper-container-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-container-cube .swiper-slide-shadow-bottom,.swiper-container-cube .swiper-slide-shadow-left,.swiper-container-cube .swiper-slide-shadow-right,.swiper-container-cube .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-container-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0px;width:100%;height:100%;opacity:.6;z-index:0}.swiper-container-cube .swiper-cube-shadow:before{content:'';background:#000;position:absolute;left:0;top:0;bottom:0;right:0;-webkit-filter:blur(50px);filter:blur(50px)}.swiper-container-flip{overflow:visible}.swiper-container-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-container-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-flip .swiper-slide-active,.swiper-container-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-flip .swiper-slide-shadow-bottom,.swiper-container-flip .swiper-slide-shadow-left,.swiper-container-flip .swiper-slide-shadow-right,.swiper-container-flip .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}", "",{"version":3,"sources":["webpack://node_modules/swiper/swiper-bundle.min.css"],"names":[],"mappings":"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","sourcesContent":["/**\n * Swiper 6.8.4\n * Most modern mobile touch slider and framework with hardware accelerated transitions\n * https://swiperjs.com\n *\n * Copyright 2014-2021 Vladimir Kharlampidi\n *\n * Released under the MIT License\n *\n * Released on: August 23, 2021\n */\n\n@font-face{font-family:swiper-icons;src:url('data:application/font-woff;charset=utf-8;base64, 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') format('woff');font-weight:400;font-style:normal}:root{--swiper-theme-color:#007aff}.swiper-container{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}.swiper-container-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;box-sizing:content-box}.swiper-container-android .swiper-slide,.swiper-wrapper{transform:translate3d(0px,0,0)}.swiper-container-multirow>.swiper-wrapper{flex-wrap:wrap}.swiper-container-multirow-column>.swiper-wrapper{flex-wrap:wrap;flex-direction:column}.swiper-container-free-mode>.swiper-wrapper{transition-timing-function:ease-out;margin:0 auto}.swiper-container-pointer-events{touch-action:pan-y}.swiper-container-pointer-events.swiper-container-vertical{touch-action:pan-x}.swiper-slide{flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform}.swiper-slide-invisible-blank{visibility:hidden}.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide{height:auto}.swiper-container-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-container-3d{perspective:1200px}.swiper-container-3d .swiper-cube-shadow,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-container-3d .swiper-slide-shadow-left{background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-right{background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-top{background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-container-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-container-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-container-horizontal.swiper-container-css-mode>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-container-vertical.swiper-container-css-mode>.swiper-wrapper{scroll-snap-type:y mandatory}:root{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;width:calc(var(--swiper-navigation-size)/ 44 * 27);height:var(--swiper-navigation-size);margin-top:calc(0px - (var(--swiper-navigation-size)/ 2));z-index:10;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--swiper-navigation-color,var(--swiper-theme-color))}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-next:after,.swiper-button-prev:after{font-family:swiper-icons;font-size:var(--swiper-navigation-size);text-transform:none!important;letter-spacing:0;text-transform:none;font-variant:initial;line-height:1}.swiper-button-prev,.swiper-container-rtl .swiper-button-next{left:10px;right:auto}.swiper-button-prev:after,.swiper-container-rtl .swiper-button-next:after{content:'prev'}.swiper-button-next,.swiper-container-rtl .swiper-button-prev{right:10px;left:auto}.swiper-button-next:after,.swiper-container-rtl .swiper-button-prev:after{content:'next'}.swiper-button-next.swiper-button-white,.swiper-button-prev.swiper-button-white{--swiper-navigation-color:#ffffff}.swiper-button-next.swiper-button-black,.swiper-button-prev.swiper-button-black{--swiper-navigation-color:#000000}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;transition:.3s opacity;transform:translate3d(0,0,0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-container-horizontal>.swiper-pagination-bullets,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{width:8px;height:8px;display:inline-block;border-radius:50%;background:#000;opacity:.2}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet:only-child{display:none!important}.swiper-pagination-bullet-active{opacity:1;background:var(--swiper-pagination-color,var(--swiper-theme-color))}.swiper-container-vertical>.swiper-pagination-bullets{right:10px;top:50%;transform:translate3d(0px,-50%,0)}.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:6px 0;display:block}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:.2s transform,.2s top}.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 4px}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translateX(-50%);white-space:nowrap}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s left}.swiper-container-horizontal.swiper-container-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s right}.swiper-pagination-progressbar{background:rgba(0,0,0,.25);position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color,var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-container-horizontal>.swiper-pagination-progressbar,.swiper-container-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:4px;left:0;top:0}.swiper-container-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-container-vertical>.swiper-pagination-progressbar{width:4px;height:100%;left:0;top:0}.swiper-pagination-white{--swiper-pagination-color:#ffffff}.swiper-pagination-black{--swiper-pagination-color:#000000}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:rgba(0,0,0,.1)}.swiper-container-horizontal>.swiper-scrollbar{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}.swiper-container-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:rgba(0,0,0,.5);border-radius:10px;left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}.swiper-zoom-container{width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center}.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg{max-width:100%;max-height:100%;object-fit:contain}.swiper-slide-zoomed{cursor:move}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;animation:swiper-preloader-spin 1s infinite linear;box-sizing:border-box;border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-radius:50%;border-top-color:transparent}.swiper-lazy-preloader-white{--swiper-preloader-color:#fff}.swiper-lazy-preloader-black{--swiper-preloader-color:#000}@keyframes swiper-preloader-spin{100%{transform:rotate(360deg)}}.swiper-container .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-container-fade.swiper-container-free-mode .swiper-slide{transition-timing-function:ease-out}.swiper-container-fade .swiper-slide{pointer-events:none;transition-property:opacity}.swiper-container-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-fade .swiper-slide-active,.swiper-container-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube{overflow:visible}.swiper-container-cube .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;transform-origin:0 0;width:100%;height:100%}.swiper-container-cube .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-cube.swiper-container-rtl .swiper-slide{transform-origin:100% 0}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-next,.swiper-container-cube .swiper-slide-next+.swiper-slide,.swiper-container-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-container-cube .swiper-slide-shadow-bottom,.swiper-container-cube .swiper-slide-shadow-left,.swiper-container-cube .swiper-slide-shadow-right,.swiper-container-cube .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-container-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0px;width:100%;height:100%;opacity:.6;z-index:0}.swiper-container-cube .swiper-cube-shadow:before{content:'';background:#000;position:absolute;left:0;top:0;bottom:0;right:0;filter:blur(50px)}.swiper-container-flip{overflow:visible}.swiper-container-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-container-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-flip .swiper-slide-active,.swiper-container-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-flip .swiper-slide-shadow-bottom,.swiper-container-flip .swiper-slide-shadow-left,.swiper-container-flip .swiper-slide-shadow-right,.swiper-container-flip .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) { /**/ }
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data: {};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
          {expectedType: expectedType}
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
    );
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/***/ (function(module) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/prop-types/lib/has.js":
/*!********************************************!*\
  !*** ./node_modules/prop-types/lib/has.js ***!
  \********************************************/
/***/ (function(module) {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/react-ga/dist/esm/components/OutboundLink.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/components/OutboundLink.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ OutboundLink; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_console_warn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/console/warn */ "./node_modules/react-ga/dist/esm/utils/console/warn.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var NEWTAB = '_blank';
var MIDDLECLICK = 1;

var OutboundLink = /*#__PURE__*/function (_Component) {
  _inherits(OutboundLink, _Component);

  var _super = _createSuper(OutboundLink);

  function OutboundLink() {
    var _this;

    _classCallCheck(this, OutboundLink);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (event) {
      var _this$props = _this.props,
          target = _this$props.target,
          eventLabel = _this$props.eventLabel,
          to = _this$props.to,
          onClick = _this$props.onClick,
          trackerNames = _this$props.trackerNames;
      var eventMeta = {
        label: eventLabel
      };
      var sameTarget = target !== NEWTAB;
      var normalClick = !(event.ctrlKey || event.shiftKey || event.metaKey || event.button === MIDDLECLICK);

      if (sameTarget && normalClick) {
        event.preventDefault();
        OutboundLink.trackLink(eventMeta, function () {
          window.location.href = to;
        }, trackerNames);
      } else {
        OutboundLink.trackLink(eventMeta, function () {}, trackerNames);
      }

      if (onClick) {
        onClick(event);
      }
    });

    return _this;
  }

  _createClass(OutboundLink, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          href = _this$props2.to,
          target = _this$props2.target,
          oldProps = _objectWithoutProperties(_this$props2, ["to", "target"]);

      var props = _objectSpread(_objectSpread({}, oldProps), {}, {
        target: target,
        href: href,
        onClick: this.handleClick
      });

      if (target === NEWTAB) {
        props.rel = "".concat(props.rel ? props.rel : '', " noopener noreferrer").trim();
      }

      delete props.eventLabel;
      delete props.trackerNames;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement('a', props);
    }
  }]);

  return OutboundLink;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

_defineProperty(OutboundLink, "trackLink", function () {
  (0,_utils_console_warn__WEBPACK_IMPORTED_MODULE_1__.default)('ga tracking not enabled');
});


OutboundLink.propTypes = {
  eventLabel: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
  target: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  to: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  trackerNames: prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_2___default().string))
};
OutboundLink.defaultProps = {
  target: null,
  to: null,
  onClick: null,
  trackerNames: null
};

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/core.js":
/*!************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/core.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTrackers": function() { return /* binding */ addTrackers; },
/* harmony export */   "initialize": function() { return /* binding */ initialize; },
/* harmony export */   "ga": function() { return /* binding */ ga; },
/* harmony export */   "set": function() { return /* binding */ set; },
/* harmony export */   "send": function() { return /* binding */ send; },
/* harmony export */   "pageview": function() { return /* binding */ pageview; },
/* harmony export */   "modalview": function() { return /* binding */ modalview; },
/* harmony export */   "timing": function() { return /* binding */ timing; },
/* harmony export */   "event": function() { return /* binding */ event; },
/* harmony export */   "exception": function() { return /* binding */ exception; },
/* harmony export */   "plugin": function() { return /* binding */ plugin; },
/* harmony export */   "outboundLink": function() { return /* binding */ outboundLink; },
/* harmony export */   "testModeAPI": function() { return /* binding */ testModeAPI; }
/* harmony export */ });
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/format */ "./node_modules/react-ga/dist/esm/utils/format.js");
/* harmony import */ var _utils_removeLeadingSlash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/removeLeadingSlash */ "./node_modules/react-ga/dist/esm/utils/removeLeadingSlash.js");
/* harmony import */ var _utils_trim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/trim */ "./node_modules/react-ga/dist/esm/utils/trim.js");
/* harmony import */ var _utils_loadGA__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/loadGA */ "./node_modules/react-ga/dist/esm/utils/loadGA.js");
/* harmony import */ var _utils_console_warn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/console/warn */ "./node_modules/react-ga/dist/esm/utils/console/warn.js");
/* harmony import */ var _utils_console_log__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/console/log */ "./node_modules/react-ga/dist/esm/utils/console/log.js");
/* harmony import */ var _utils_testModeAPI__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/testModeAPI */ "./node_modules/react-ga/dist/esm/utils/testModeAPI.js");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * React Google Analytics Module
 *
 * @package react-ga
 * @author  Adam Lofting <adam@mozillafoundation.org>
 *          Atul Varma <atul@mozillafoundation.org>
 */

/**
 * Utilities
 */








var _isNotBrowser = typeof window === 'undefined' || typeof document === 'undefined';

var _debug = false;
var _titleCase = true;
var _testMode = false;
var _alwaysSendToDefaultTracker = true;
var _redactEmail = true;

var internalGa = function internalGa() {
  var _window;

  if (_testMode) return _utils_testModeAPI__WEBPACK_IMPORTED_MODULE_6__.default.ga.apply(_utils_testModeAPI__WEBPACK_IMPORTED_MODULE_6__.default, arguments);
  if (_isNotBrowser) return false;
  if (!window.ga) return (0,_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__.default)('ReactGA.initialize must be called first or GoogleAnalytics should be loaded manually');
  return (_window = window).ga.apply(_window, arguments);
};

function _format(s) {
  return (0,_utils_format__WEBPACK_IMPORTED_MODULE_0__.default)(s, _titleCase, _redactEmail);
}

function _gaCommand(trackerNames) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var command = args[0];

  if (typeof internalGa === 'function') {
    if (typeof command !== 'string') {
      (0,_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__.default)('ga command must be a string');
      return;
    }

    if (_alwaysSendToDefaultTracker || !Array.isArray(trackerNames)) internalGa.apply(void 0, args);

    if (Array.isArray(trackerNames)) {
      trackerNames.forEach(function (name) {
        internalGa.apply(void 0, _toConsumableArray(["".concat(name, ".").concat(command)].concat(args.slice(1))));
      });
    }
  }
}

function _initialize(gaTrackingID, options) {
  if (!gaTrackingID) {
    (0,_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__.default)('gaTrackingID is required in initialize()');
    return;
  }

  if (options) {
    if (options.debug && options.debug === true) {
      _debug = true;
    }

    if (options.titleCase === false) {
      _titleCase = false;
    }

    if (options.redactEmail === false) {
      _redactEmail = false;
    }

    if (options.useExistingGa) {
      return;
    }
  }

  if (options && options.gaOptions) {
    internalGa('create', gaTrackingID, options.gaOptions);
  } else {
    internalGa('create', gaTrackingID, 'auto');
  }
}

function addTrackers(configsOrTrackingId, options) {
  if (Array.isArray(configsOrTrackingId)) {
    configsOrTrackingId.forEach(function (config) {
      if (_typeof(config) !== 'object') {
        (0,_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__.default)('All configs must be an object');
        return;
      }

      _initialize(config.trackingId, config);
    });
  } else {
    _initialize(configsOrTrackingId, options);
  }

  return true;
}
function initialize(configsOrTrackingId, options) {
  if (options && options.testMode === true) {
    _testMode = true;
  } else {
    if (_isNotBrowser) {
      return;
    }

    if (!options || options.standardImplementation !== true) (0,_utils_loadGA__WEBPACK_IMPORTED_MODULE_3__.default)(options);
  }

  _alwaysSendToDefaultTracker = options && typeof options.alwaysSendToDefaultTracker === 'boolean' ? options.alwaysSendToDefaultTracker : true;
  addTrackers(configsOrTrackingId, options);
}
/**
 * ga:
 * Returns the original GA object.
 */

function ga() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  if (args.length > 0) {
    internalGa.apply(void 0, args);

    if (_debug) {
      (0,_utils_console_log__WEBPACK_IMPORTED_MODULE_5__.default)("called ga('arguments');");
      (0,_utils_console_log__WEBPACK_IMPORTED_MODULE_5__.default)("with arguments: ".concat(JSON.stringify(args)));
    }
  }

  return window.ga;
}
/**
 * set:
 * GA tracker set method
 * @param {Object} fieldsObject - a field/value pair or a group of field/value pairs on the tracker
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */

function set(fieldsObject, trackerNames) {
  if (!fieldsObject) {
    (0,_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__.default)('`fieldsObject` is required in .set()');
    return;
  }

  if (_typeof(fieldsObject) !== 'object') {
    (0,_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__.default)('Expected `fieldsObject` arg to be an Object');
    return;
  }

  if (Object.keys(fieldsObject).length === 0) {
    (0,_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__.default)('empty `fieldsObject` given to .set()');
  }

  _gaCommand(trackerNames, 'set', fieldsObject);

  if (_debug) {
    (0,_utils_console_log__WEBPACK_IMPORTED_MODULE_5__.default)("called ga('set', fieldsObject);");
    (0,_utils_console_log__WEBPACK_IMPORTED_MODULE_5__.default)("with fieldsObject: ".concat(JSON.stringify(fieldsObject)));
  }
}
/**
 * send:
 * Clone of the low level `ga.send` method
 * WARNING: No validations will be applied to this
 * @param  {Object} fieldObject - field object for tracking different analytics
 * @param  {Array} trackerNames - trackers to send the command to
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */

function send(fieldObject, trackerNames) {
  _gaCommand(trackerNames, 'send', fieldObject);

  if (_debug) {
    (0,_utils_console_log__WEBPACK_IMPORTED_MODULE_5__.default)("called ga('send', fieldObject);");
    (0,_utils_console_log__WEBPACK_IMPORTED_MODULE_5__.default)("with fieldObject: ".concat(JSON.stringify(fieldObject)));
    (0,_utils_console_log__WEBPACK_IMPORTED_MODULE_5__.default)("with trackers: ".concat(JSON.stringify(trackerNames)));
  }
}
/**
 * pageview:
 * Basic GA pageview tracking
 * @param  {String} path - the current page page e.g. '/about'
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 * @param {String} title - (optional) the page title e. g. 'My Website'
 */

function pageview(rawPath, trackerNames, title) {
  if (!rawPath) {
    (0,_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__.default)('path is required in .pageview()');
    return;
  }

  var path = (0,_utils_trim__WEBPACK_IMPORTED_MODULE_2__.default)(rawPath);

  if (path === '') {
    (0,_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__.default)('path cannot be an empty string in .pageview()');
    return;
  }

  var extraFields = {};

  if (title) {
    extraFields.title = title;
  }

  if (typeof ga === 'function') {
    _gaCommand(trackerNames, 'send', _objectSpread({
      hitType: 'pageview',
      page: path
    }, extraFields));

    if (_debug) {
      (0,_utils_console_log__WEBPACK_IMPORTED_MODULE_5__.default)("called ga('send', 'pageview', path);");
      var extraLog = '';

      if (title) {
        extraLog = " and title: ".concat(title);
      }

      (0,_utils_console_log__WEBPACK_IMPORTED_MODULE_5__.default)("with path: ".concat(path).concat(extraLog));
    }
  }
}
/**
 * modalview:
 * a proxy to basic GA pageview tracking to consistently track
 * modal views that are an equivalent UX to a traditional pageview
 * @param  {String} modalName e.g. 'add-or-edit-club'
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */

function modalview(rawModalName, trackerNames) {
  if (!rawModalName) {
    (0,_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__.default)('modalName is required in .modalview(modalName)');
    return;
  }

  var modalName = (0,_utils_removeLeadingSlash__WEBPACK_IMPORTED_MODULE_1__.default)((0,_utils_trim__WEBPACK_IMPORTED_MODULE_2__.default)(rawModalName));

  if (modalName === '') {
    (0,_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__.default)('modalName cannot be an empty string or a single / in .modalview()');
    return;
  }

  if (typeof ga === 'function') {
    var path = "/modal/".concat(modalName);

    _gaCommand(trackerNames, 'send', 'pageview', path);

    if (_debug) {
      (0,_utils_console_log__WEBPACK_IMPORTED_MODULE_5__.default)("called ga('send', 'pageview', path);");
      (0,_utils_console_log__WEBPACK_IMPORTED_MODULE_5__.default)("with path: ".concat(path));
    }
  }
}
/**
 * timing:
 * GA timing
 * @param args.category {String} required
 * @param args.variable {String} required
 * @param args.value  {Int}  required
 * @param args.label  {String} required
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */

function timing() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      category = _ref.category,
      variable = _ref.variable,
      value = _ref.value,
      label = _ref.label;

  var trackerNames = arguments.length > 1 ? arguments[1] : undefined;

  if (typeof ga === 'function') {
    if (!category || !variable || typeof value !== 'number') {
      (0,_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__.default)('args.category, args.variable ' + 'AND args.value are required in timing() ' + 'AND args.value has to be a number');
      return;
    } // Required Fields


    var fieldObject = {
      hitType: 'timing',
      timingCategory: _format(category),
      timingVar: _format(variable),
      timingValue: value
    };

    if (label) {
      fieldObject.timingLabel = _format(label);
    }

    send(fieldObject, trackerNames);
  }
}
/**
 * event:
 * GA event tracking
 * @param args.category {String} required
 * @param args.action {String} required
 * @param args.label {String} optional
 * @param args.value {Int} optional
 * @param args.nonInteraction {boolean} optional
 * @param args.transport {string} optional
 * @param {{action: string, category: string}} trackerNames - (optional) a list of extra trackers to run the command on
 */

function event() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      category = _ref2.category,
      action = _ref2.action,
      label = _ref2.label,
      value = _ref2.value,
      nonInteraction = _ref2.nonInteraction,
      transport = _ref2.transport,
      args = _objectWithoutProperties(_ref2, ["category", "action", "label", "value", "nonInteraction", "transport"]);

  var trackerNames = arguments.length > 1 ? arguments[1] : undefined;

  if (typeof ga === 'function') {
    // Simple Validation
    if (!category || !action) {
      (0,_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__.default)('args.category AND args.action are required in event()');
      return;
    } // Required Fields


    var fieldObject = {
      hitType: 'event',
      eventCategory: _format(category),
      eventAction: _format(action)
    }; // Optional Fields

    if (label) {
      fieldObject.eventLabel = _format(label);
    }

    if (typeof value !== 'undefined') {
      if (typeof value !== 'number') {
        (0,_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__.default)('Expected `args.value` arg to be a Number.');
      } else {
        fieldObject.eventValue = value;
      }
    }

    if (typeof nonInteraction !== 'undefined') {
      if (typeof nonInteraction !== 'boolean') {
        (0,_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__.default)('`args.nonInteraction` must be a boolean.');
      } else {
        fieldObject.nonInteraction = nonInteraction;
      }
    }

    if (typeof transport !== 'undefined') {
      if (typeof transport !== 'string') {
        (0,_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__.default)('`args.transport` must be a string.');
      } else {
        if (['beacon', 'xhr', 'image'].indexOf(transport) === -1) {
          (0,_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__.default)('`args.transport` must be either one of these values: `beacon`, `xhr` or `image`');
        }

        fieldObject.transport = transport;
      }
    }

    Object.keys(args).filter(function (key) {
      return key.substr(0, 'dimension'.length) === 'dimension';
    }).forEach(function (key) {
      fieldObject[key] = args[key];
    });
    Object.keys(args).filter(function (key) {
      return key.substr(0, 'metric'.length) === 'metric';
    }).forEach(function (key) {
      fieldObject[key] = args[key];
    }); // Send to GA

    send(fieldObject, trackerNames);
  }
}
/**
 * exception:
 * GA exception tracking
 * @param args.description {String} optional
 * @param args.fatal {boolean} optional
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */

function exception(_ref3, trackerNames) {
  var description = _ref3.description,
      fatal = _ref3.fatal;

  if (typeof ga === 'function') {
    // Required Fields
    var fieldObject = {
      hitType: 'exception'
    }; // Optional Fields

    if (description) {
      fieldObject.exDescription = _format(description);
    }

    if (typeof fatal !== 'undefined') {
      if (typeof fatal !== 'boolean') {
        (0,_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__.default)('`args.fatal` must be a boolean.');
      } else {
        fieldObject.exFatal = fatal;
      }
    } // Send to GA


    send(fieldObject, trackerNames);
  }
}
var plugin = {
  /**
   * require:
   * GA requires a plugin
   * @param name {String} e.g. 'ecommerce' or 'myplugin'
   * @param options {Object} optional e.g {path: '/log', debug: true}
   * @param trackerName {String} optional e.g 'trackerName'
   */
  require: function require(rawName, options, trackerName) {
    if (typeof ga === 'function') {
      // Required Fields
      if (!rawName) {
        (0,_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__.default)('`name` is required in .require()');
        return;
      }

      var name = (0,_utils_trim__WEBPACK_IMPORTED_MODULE_2__.default)(rawName);

      if (name === '') {
        (0,_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__.default)('`name` cannot be an empty string in .require()');
        return;
      }

      var requireString = trackerName ? "".concat(trackerName, ".require") : 'require'; // Optional Fields

      if (options) {
        if (_typeof(options) !== 'object') {
          (0,_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__.default)('Expected `options` arg to be an Object');
          return;
        }

        if (Object.keys(options).length === 0) {
          (0,_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__.default)('Empty `options` given to .require()');
        }

        ga(requireString, name, options);

        if (_debug) {
          (0,_utils_console_log__WEBPACK_IMPORTED_MODULE_5__.default)("called ga('require', '".concat(name, "', ").concat(JSON.stringify(options)));
        }
      } else {
        ga(requireString, name);

        if (_debug) {
          (0,_utils_console_log__WEBPACK_IMPORTED_MODULE_5__.default)("called ga('require', '".concat(name, "');"));
        }
      }
    }
  },

  /**
   * execute:
   * GA execute action for plugin
   * Takes variable number of arguments
   * @param pluginName {String} e.g. 'ecommerce' or 'myplugin'
   * @param action {String} e.g. 'addItem' or 'myCustomAction'
   * @param actionType {String} optional e.g. 'detail'
   * @param payload {Object} optional e.g { id: '1x5e', name : 'My product to track' }
   */
  execute: function execute(pluginName, action) {
    var payload;
    var actionType;

    for (var _len3 = arguments.length, args = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
      args[_key3 - 2] = arguments[_key3];
    }

    if (args.length === 1) {
      payload = args[0];
    } else {
      actionType = args[0];
      payload = args[1];
    }

    if (typeof ga === 'function') {
      if (typeof pluginName !== 'string') {
        (0,_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__.default)('Expected `pluginName` arg to be a String.');
      } else if (typeof action !== 'string') {
        (0,_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__.default)('Expected `action` arg to be a String.');
      } else {
        var command = "".concat(pluginName, ":").concat(action);
        payload = payload || null;

        if (actionType && payload) {
          ga(command, actionType, payload);

          if (_debug) {
            (0,_utils_console_log__WEBPACK_IMPORTED_MODULE_5__.default)("called ga('".concat(command, "');"));
            (0,_utils_console_log__WEBPACK_IMPORTED_MODULE_5__.default)("actionType: \"".concat(actionType, "\" with payload: ").concat(JSON.stringify(payload)));
          }
        } else if (payload) {
          ga(command, payload);

          if (_debug) {
            (0,_utils_console_log__WEBPACK_IMPORTED_MODULE_5__.default)("called ga('".concat(command, "');"));
            (0,_utils_console_log__WEBPACK_IMPORTED_MODULE_5__.default)("with payload: ".concat(JSON.stringify(payload)));
          }
        } else {
          ga(command);

          if (_debug) {
            (0,_utils_console_log__WEBPACK_IMPORTED_MODULE_5__.default)("called ga('".concat(command, "');"));
          }
        }
      }
    }
  }
};
/**
 * outboundLink:
 * GA outboundLink tracking
 * @param args.label {String} e.g. url, or 'Create an Account'
 * @param {function} hitCallback - Called after processing a hit.
 */

function outboundLink(args, hitCallback, trackerNames) {
  if (typeof hitCallback !== 'function') {
    (0,_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__.default)('hitCallback function is required');
    return;
  }

  if (typeof ga === 'function') {
    // Simple Validation
    if (!args || !args.label) {
      (0,_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__.default)('args.label is required in outboundLink()');
      return;
    } // Required Fields


    var fieldObject = {
      hitType: 'event',
      eventCategory: 'Outbound',
      eventAction: 'Click',
      eventLabel: _format(args.label)
    };
    var safetyCallbackCalled = false;

    var safetyCallback = function safetyCallback() {
      // This prevents a delayed response from GA
      // causing hitCallback from being fired twice
      safetyCallbackCalled = true;
      hitCallback();
    }; // Using a timeout to ensure the execution of critical application code
    // in the case when the GA server might be down
    // or an ad blocker prevents sending the data
    // register safety net timeout:


    var t = setTimeout(safetyCallback, 250);

    var clearableCallbackForGA = function clearableCallbackForGA() {
      clearTimeout(t);

      if (!safetyCallbackCalled) {
        hitCallback();
      }
    };

    fieldObject.hitCallback = clearableCallbackForGA; // Send to GA

    send(fieldObject, trackerNames);
  } else {
    // if ga is not defined, return the callback so the application
    // continues to work as expected
    setTimeout(hitCallback, 0);
  }
}
var testModeAPI = _utils_testModeAPI__WEBPACK_IMPORTED_MODULE_6__.default;
/* harmony default export */ __webpack_exports__["default"] = ({
  initialize: initialize,
  ga: ga,
  set: set,
  send: send,
  pageview: pageview,
  modalview: modalview,
  timing: timing,
  event: event,
  exception: exception,
  plugin: plugin,
  outboundLink: outboundLink,
  testModeAPI: _utils_testModeAPI__WEBPACK_IMPORTED_MODULE_6__.default
});

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/index.js":
/*!*************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/index.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialize": function() { return /* binding */ initialize; },
/* harmony export */   "addTrackers": function() { return /* binding */ addTrackers; },
/* harmony export */   "ga": function() { return /* binding */ ga; },
/* harmony export */   "set": function() { return /* binding */ set; },
/* harmony export */   "send": function() { return /* binding */ send; },
/* harmony export */   "pageview": function() { return /* binding */ pageview; },
/* harmony export */   "modalview": function() { return /* binding */ modalview; },
/* harmony export */   "timing": function() { return /* binding */ timing; },
/* harmony export */   "event": function() { return /* binding */ event; },
/* harmony export */   "exception": function() { return /* binding */ exception; },
/* harmony export */   "plugin": function() { return /* binding */ plugin; },
/* harmony export */   "outboundLink": function() { return /* binding */ outboundLink; },
/* harmony export */   "testModeAPI": function() { return /* binding */ testModeAPI; },
/* harmony export */   "OutboundLink": function() { return /* binding */ OutboundLink; }
/* harmony export */ });
/* harmony import */ var _components_OutboundLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/OutboundLink */ "./node_modules/react-ga/dist/esm/components/OutboundLink.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core */ "./node_modules/react-ga/dist/esm/core.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var initialize = _core__WEBPACK_IMPORTED_MODULE_1__.initialize;

var addTrackers = _core__WEBPACK_IMPORTED_MODULE_1__.addTrackers;

var ga = _core__WEBPACK_IMPORTED_MODULE_1__.ga;

var set = _core__WEBPACK_IMPORTED_MODULE_1__.set;

var send = _core__WEBPACK_IMPORTED_MODULE_1__.send;

var pageview = _core__WEBPACK_IMPORTED_MODULE_1__.pageview;

var modalview = _core__WEBPACK_IMPORTED_MODULE_1__.modalview;

var timing = _core__WEBPACK_IMPORTED_MODULE_1__.timing;

var event = _core__WEBPACK_IMPORTED_MODULE_1__.event;

var exception = _core__WEBPACK_IMPORTED_MODULE_1__.exception;

var plugin = _core__WEBPACK_IMPORTED_MODULE_1__.plugin;

var outboundLink = _core__WEBPACK_IMPORTED_MODULE_1__.outboundLink;

var testModeAPI = _core__WEBPACK_IMPORTED_MODULE_1__.testModeAPI;

_components_OutboundLink__WEBPACK_IMPORTED_MODULE_0__.default.origTrackLink = _components_OutboundLink__WEBPACK_IMPORTED_MODULE_0__.default.trackLink;
_components_OutboundLink__WEBPACK_IMPORTED_MODULE_0__.default.trackLink = _core__WEBPACK_IMPORTED_MODULE_1__.outboundLink;
var OutboundLink = _components_OutboundLink__WEBPACK_IMPORTED_MODULE_0__.default;
/* harmony default export */ __webpack_exports__["default"] = (_objectSpread(_objectSpread({}, _core__WEBPACK_IMPORTED_MODULE_1__), {}, {
  OutboundLink: OutboundLink
}));

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/utils/console/log.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/console/log.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ log; }
/* harmony export */ });
function log(s) {
  console.info('[react-ga]', s);
}

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/utils/console/warn.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/console/warn.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ warn; }
/* harmony export */ });
function warn(s) {
  console.warn('[react-ga]', s);
}

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/utils/format.js":
/*!********************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/format.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ format; }
/* harmony export */ });
/* harmony import */ var _redactEmail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redactEmail */ "./node_modules/react-ga/dist/esm/utils/redactEmail.js");
/* harmony import */ var _toTitleCase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toTitleCase */ "./node_modules/react-ga/dist/esm/utils/toTitleCase.js");


function format() {
  var s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var titleCase = arguments.length > 1 ? arguments[1] : undefined;
  var redactingEmail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  var _str = s || '';

  if (titleCase) {
    _str = (0,_toTitleCase__WEBPACK_IMPORTED_MODULE_1__.default)(s);
  }

  if (redactingEmail) {
    _str = (0,_redactEmail__WEBPACK_IMPORTED_MODULE_0__.default)(_str);
  }

  return _str;
}

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/utils/loadGA.js":
/*!********************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/loadGA.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
var isLoaded = false;
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(options) {
  if (isLoaded) return;
  isLoaded = true;
  var gaAddress = 'https://www.google-analytics.com/analytics.js';

  if (options && options.gaAddress) {
    gaAddress = options.gaAddress;
  } else if (options && options.debug) {
    gaAddress = 'https://www.google-analytics.com/analytics_debug.js';
  }

  var onerror = options && options.onerror; // https://developers.google.com/analytics/devguides/collection/analyticsjs/

  /* eslint-disable */

  (function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
      (i[r].q = i[r].q || []).push(arguments);
    }, i[r].l = 1 * new Date();
    a = s.createElement(o), m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    a.onerror = onerror;
    m.parentNode.insertBefore(a, m);
  })(window, document, 'script', gaAddress, 'ga');
  /* eslint-enable */

}

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/utils/mightBeEmail.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/mightBeEmail.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ mightBeEmail; }
/* harmony export */ });
// See if s could be an email address. We don't want to send personal data like email.
// https://support.google.com/analytics/answer/2795983?hl=en
function mightBeEmail(s) {
  // There's no point trying to validate rfc822 fully, just look for ...@...
  return typeof s === 'string' && s.indexOf('@') !== -1;
}

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/utils/redactEmail.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/redactEmail.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ redactEmail; }
/* harmony export */ });
/* harmony import */ var _console_warn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./console/warn */ "./node_modules/react-ga/dist/esm/utils/console/warn.js");
/* harmony import */ var _mightBeEmail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mightBeEmail */ "./node_modules/react-ga/dist/esm/utils/mightBeEmail.js");


var redacted = 'REDACTED (Potential Email Address)';
function redactEmail(string) {
  if ((0,_mightBeEmail__WEBPACK_IMPORTED_MODULE_1__.default)(string)) {
    (0,_console_warn__WEBPACK_IMPORTED_MODULE_0__.default)('This arg looks like an email address, redacting.');
    return redacted;
  }

  return string;
}

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/utils/removeLeadingSlash.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/removeLeadingSlash.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ removeLeadingSlash; }
/* harmony export */ });
function removeLeadingSlash(string) {
  if (string.substring(0, 1) === '/') {
    return string.substring(1);
  }

  return string;
}

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/utils/testModeAPI.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/testModeAPI.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gaCalls": function() { return /* binding */ gaCalls; }
/* harmony export */ });
var gaCalls = [];
/* harmony default export */ __webpack_exports__["default"] = ({
  calls: gaCalls,
  ga: function ga() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    gaCalls.push([].concat(args));
  },
  resetCalls: function resetCalls() {
    gaCalls.length = 0;
  }
});

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/utils/toTitleCase.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/toTitleCase.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ toTitleCase; }
/* harmony export */ });
/* harmony import */ var _trim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trim */ "./node_modules/react-ga/dist/esm/utils/trim.js");
/**
 * To Title Case 2.1 - http://individed.com/code/to-title-case/
 * Copyright 2008-2013 David Gouch. Licensed under the MIT License.
 * https://github.com/gouch/to-title-case
 */

var smallWords = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i; // test

function toTitleCase(string) {
  return (0,_trim__WEBPACK_IMPORTED_MODULE_0__.default)(string).replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, function (match, index, title) {
    if (index > 0 && index + match.length !== title.length && match.search(smallWords) > -1 && title.charAt(index - 2) !== ':' && (title.charAt(index + match.length) !== '-' || title.charAt(index - 1) === '-') && title.charAt(index - 1).search(/[^\s-]/) < 0) {
      return match.toLowerCase();
    }

    if (match.substr(1).search(/[A-Z]|\../) > -1) {
      return match;
    }

    return match.charAt(0).toUpperCase() + match.substr(1);
  });
}

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/utils/trim.js":
/*!******************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/trim.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ trim; }
/* harmony export */ });
// GA strings need to have leading/trailing whitespace trimmed, and not all
// browsers have String.prototoype.trim().
function trim(s) {
  return s && s.toString().replace(/^\s+|\s+$/g, '');
}

/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-dev-runtime.development.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentName(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (Array.isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (Array.isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    if (type === exports.Fragment) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev

var jsxDEV$1 =  jsxWithValidation ;

exports.jsxDEV = jsxDEV$1;
  })();
}


/***/ }),

/***/ "./node_modules/react/jsx-dev-runtime.js":
/*!***********************************************!*\
  !*** ./node_modules/react/jsx-dev-runtime.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-dev-runtime.development.js */ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js");
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ // runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!"), __webpack_exec__("./node_modules/next/dist/client/router.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvYW5hbHl0aWNzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9fTl9FLyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLWRyYXdlci9hc3NldHMvaW5kZXguY3NzP2RmOTUiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy10YWJzL2Fzc2V0cy9pbmRleC5jc3M/ZTgyNiIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3N3aXBlci9zd2lwZXItYnVuZGxlLm1pbi5jc3M/NzFlZSIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1kcmF3ZXIvYXNzZXRzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXRhYnMvYXNzZXRzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3N3aXBlci9zd2lwZXItYnVuZGxlLm1pbi5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL2hhcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWdhL2Rpc3QvZXNtL2NvbXBvbmVudHMvT3V0Ym91bmRMaW5rLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtZ2EvZGlzdC9lc20vY29yZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWdhL2Rpc3QvZXNtL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtZ2EvZGlzdC9lc20vdXRpbHMvY29uc29sZS9sb2cuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1nYS9kaXN0L2VzbS91dGlscy9jb25zb2xlL3dhcm4uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1nYS9kaXN0L2VzbS91dGlscy9mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1nYS9kaXN0L2VzbS91dGlscy9sb2FkR0EuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1nYS9kaXN0L2VzbS91dGlscy9taWdodEJlRW1haWwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1nYS9kaXN0L2VzbS91dGlscy9yZWRhY3RFbWFpbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWdhL2Rpc3QvZXNtL3V0aWxzL3JlbW92ZUxlYWRpbmdTbGFzaC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWdhL2Rpc3QvZXNtL3V0aWxzL3Rlc3RNb2RlQVBJLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtZ2EvZGlzdC9lc20vdXRpbHMvdG9UaXRsZUNhc2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1nYS9kaXN0L2VzbS91dGlscy90cmltLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QvY2pzL3JlYWN0LWpzeC1kZXYtcnVudGltZS5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2pzeC1kZXYtcnVudGltZS5qcyJdLCJuYW1lcyI6WyJpbml0R0EiLCJjb25zb2xlIiwibG9nIiwiUmVhY3RHQSIsImxvZ1BhZ2VWaWV3Iiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsInBhZ2UiLCJsb2dFdmVudCIsImNhdGVnb3J5IiwiYWN0aW9uIiwibG9nRXhjZXB0aW9uIiwiZGVzY3JpcHRpb24iLCJmYXRhbCIsIkN1c3RvbUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInVzZUVmZmVjdCIsIlJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUVPLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDMUJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVo7QUFDQUMsMERBQUEsQ0FBbUIsZ0JBQW5CO0FBQ0QsQ0FITTtBQUtBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDL0JILFNBQU8sQ0FBQ0MsR0FBUixnQ0FBb0NHLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsUUFBcEQ7QUFDQUosbURBQUEsQ0FBWTtBQUFFSyxRQUFJLEVBQUVILE1BQU0sQ0FBQ0MsUUFBUCxDQUFn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QUNBO0FBQ0EsMENBQTBDOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsNkJBQTZCO0FBQzdCLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixLQUFLO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsNEJBQTRCO0FBQzVCLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLElBQXFDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsVUFBVSxLQUFxQztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHNCQUFzQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVUsSUFBcUM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsMkJBQTJCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTSxLQUFxQyw0RkFBNEYsQ0FBTTtBQUM3STtBQUNBOztBQUVBLG1CQUFtQixnQ0FBZ0M7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsZ0NBQWdDO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnSEFBZ0g7QUFDaEg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Q0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLDhGQUE4RixlQUFlO0FBQzdHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSyxFQUFFOztBQUVQLGlEQUFpRDtBQUNqRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSwyQkFBMkI7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7O0FBRVI7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQSxTQUFTO0FBQ1Qsd0JBQXdCO0FBQ3hCO0FBQ0EsU0FBUztBQUNULHdCQUF3QjtBQUN4QjtBQUNBLFNBQVM7QUFDVCx5QkFBeUI7QUFDekI7QUFDQSxTQUFTO0FBQ1QseUJBQXlCO0FBQ3pCO0FBQ0EsU0FBUztBQUNULGtDQUFrQztBQUNsQztBQUNBLFNBQVM7QUFDVCw0QkFBNEI7QUFDNUI7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwREFBMEQ7O0FBRTFEO0FBQ0E7O0FBRUE7QUFDQSx3REFBd0Q7QUFDeEQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7OztBQUdSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVksa0JBQWtCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOzs7QUFHakI7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwSEFBMEg7QUFDMUg7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxtRUFBbUU7O0FBRW5FO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2IsV0FBVyxjQUFjO0FBQ3pCLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2I7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssRUFBRTs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxFQUFFO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLFdBQVcsT0FBTztBQUNsQixXQUFXLE9B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OztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixxQkFBcUI7QUFDaEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUEsY0FBYztBQUNkLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7O0FDbHJDYTs7QUFFYixJQUFJLEtBQXFDLEVBQUUsRUFFMUM7QUFDRCxFQUFFLHVKQUFzRTtBQUN4RSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzL3BhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0iLCJpbXBvcnQgUmVhY3RHQSBmcm9tICdyZWFjdC1nYSc7XG5cbmV4cG9ydCBjb25zdCBpbml0R0EgPSAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdHQSBpbml0Jyk7XG4gIFJlYWN0R0EuaW5pdGlhbGl6ZSgnVUEteHh4eHh4eHh4LTEnKTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2dQYWdlVmlldyA9ICgpID0+IHtcbiAgY29uc29sZS5sb2coYExvZ2dpbmcgcGFnZXZpZXcgZm9yICR7d2luZG93LmxvY2F0aW9uLnBhdGhuYW1lfWApO1xuICBSZWFjdEdBLnNldCh7IHBhZ2U6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSB9KTtcbiAgUmVhY3RHQS5wYWdldmlldyh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvZ0V2ZW50ID0gKGNhdGVnb3J5ID0gJycsIGFjdGlvbiA9ICcnKSA9PiB7XG4gIGlmIChjYXRlZ29yeSAmJiBhY3Rpb24pIHtcbiAgICBSZWFjdEdBLmV2ZW50KHsgY2F0ZWdvcnksIGFjdGlvbiB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGxvZ0V4Y2VwdGlvbiA9IChkZXNjcmlwdGlvbiA9ICcnLCBmYXRhbCA9IGZhbHNlKSA9PiB7XG4gIGlmIChkZXNjcmlwdGlvbikge1xuICAgIFJlYWN0R0EuZXhjZXB0aW9uKHsgZGVzY3JpcHRpb24sIGZhdGFsIH0pO1xuICB9XG59O1xuIiwiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBpbml0R0EsIGxvZ1BhZ2VWaWV3IH0gZnJvbSAnYW5hbHl0aWNzJztcbmltcG9ydCAncmMtdGFicy9hc3NldHMvaW5kZXguY3NzJztcbmltcG9ydCAnc3dpcGVyL3N3aXBlci1idW5kbGUubWluLmNzcyc7XG5pbXBvcnQgJ3JjLWRyYXdlci9hc3NldHMvaW5kZXguY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3VzdG9tQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGluaXRHQSgpO1xuICAgIGxvZ1BhZ2VWaWV3KCk7XG4gICAgUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsIGxvZ1BhZ2VWaWV3KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+O1xufVxuIiwiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi9fYXBwXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwicHJpdmF0ZS1uZXh0LXBhZ2VzL19hcHAuanNcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMV0hLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMl0hLi9pbmRleC5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVsxXSEuLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVsyXSEuL2luZGV4LmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVsxXSEuLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVsyXSEuL2luZGV4LmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzFdIS4uLy4uL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzJdIS4vaW5kZXguY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMV0hLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMl0hLi9pbmRleC5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMV0hLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMl0hLi9pbmRleC5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVsxXSEuLi9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVsyXSEuL3N3aXBlci1idW5kbGUubWluLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzFdIS4uL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzJdIS4vc3dpcGVyLWJ1bmRsZS5taW4uY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzFdIS4uL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzJdIS4vc3dpcGVyLWJ1bmRsZS5taW4uY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO2NvbnN0IGlzT2xkSUU9ZnVuY3Rpb24gaXNPbGRJRSgpe2xldCBtZW1vO3JldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpe2lmKHR5cGVvZiBtZW1vPT09J3VuZGVmaW5lZCcpey8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4vLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4vLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4vLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbi8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xubWVtbz1Cb29sZWFuKHdpbmRvdyYmZG9jdW1lbnQmJmRvY3VtZW50LmFsbCYmIXdpbmRvdy5hdG9iKTt9cmV0dXJuIG1lbW87fTt9KCk7Y29uc3QgZ2V0VGFyZ2V0PWZ1bmN0aW9uIGdldFRhcmdldCgpe2NvbnN0IG1lbW89e307cmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCl7aWYodHlwZW9mIG1lbW9bdGFyZ2V0XT09PSd1bmRlZmluZWQnKXtsZXQgc3R5bGVUYXJnZXQ9ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOy8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5pZih3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQmJnN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KXt0cnl7Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbi8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5zdHlsZVRhcmdldD1zdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDt9Y2F0Y2goZSl7Ly8gaXN0YW5idWwgaWdub3JlIG5leHRcbnN0eWxlVGFyZ2V0PW51bGw7fX1tZW1vW3RhcmdldF09c3R5bGVUYXJnZXQ7fXJldHVybiBtZW1vW3RhcmdldF07fTt9KCk7Y29uc3Qgc3R5bGVzSW5Eb209W107ZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcil7bGV0IHJlc3VsdD0tMTtmb3IobGV0IGk9MDtpPHN0eWxlc0luRG9tLmxlbmd0aDtpKyspe2lmKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXI9PT1pZGVudGlmaWVyKXtyZXN1bHQ9aTticmVhazt9fXJldHVybiByZXN1bHQ7fWZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LG9wdGlvbnMpe2NvbnN0IGlkQ291bnRNYXA9e307Y29uc3QgaWRlbnRpZmllcnM9W107Zm9yKGxldCBpPTA7aTxsaXN0Lmxlbmd0aDtpKyspe2NvbnN0IGl0ZW09bGlzdFtpXTtjb25zdCBpZD1vcHRpb25zLmJhc2U/aXRlbVswXStvcHRpb25zLmJhc2U6aXRlbVswXTtjb25zdCBjb3VudD1pZENvdW50TWFwW2lkXXx8MDtjb25zdCBpZGVudGlmaWVyPWlkKycgJytjb3VudC50b1N0cmluZygpO2lkQ291bnRNYXBbaWRdPWNvdW50KzE7Y29uc3QgaW5kZXg9Z2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7Y29uc3Qgb2JqPXtjc3M6aXRlbVsxXSxtZWRpYTppdGVtWzJdLHNvdXJjZU1hcDppdGVtWzNdfTtpZihpbmRleCE9PS0xKXtzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO3N0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7fWVsc2V7c3R5bGVzSW5Eb20ucHVzaCh7aWRlbnRpZmllcjppZGVudGlmaWVyLHVwZGF0ZXI6YWRkU3R5bGUob2JqLG9wdGlvbnMpLHJlZmVyZW5jZXM6MX0pO31pZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO31yZXR1cm4gaWRlbnRpZmllcnM7fWZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKXtjb25zdCBzdHlsZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO2NvbnN0IGF0dHJpYnV0ZXM9b3B0aW9ucy5hdHRyaWJ1dGVzfHx7fTtpZih0eXBlb2YgYXR0cmlidXRlcy5ub25jZT09PSd1bmRlZmluZWQnKXtjb25zdCBub25jZT0vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbnR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyE9PSd1bmRlZmluZWQnP19fd2VicGFja19ub25jZV9fOm51bGw7aWYobm9uY2Upe2F0dHJpYnV0ZXMubm9uY2U9bm9uY2U7fX1PYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSl7c3R5bGUuc2V0QXR0cmlidXRlKGtleSxhdHRyaWJ1dGVzW2tleV0pO30pO2lmKHR5cGVvZiBvcHRpb25zLmluc2VydD09PSdmdW5jdGlvbicpe29wdGlvbnMuaW5zZXJ0KHN0eWxlKTt9ZWxzZXtjb25zdCB0YXJnZXQ9Z2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0fHwnaGVhZCcpO2lmKCF0YXJnZXQpe3Rocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7fXRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7fXJldHVybiBzdHlsZTt9ZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKXsvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbmlmKHN0eWxlLnBhcmVudE5vZGU9PT1udWxsKXtyZXR1cm4gZmFsc2U7fXN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO30vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9jb25zdCByZXBsYWNlVGV4dD1mdW5jdGlvbiByZXBsYWNlVGV4dCgpe2NvbnN0IHRleHRTdG9yZT1bXTtyZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCxyZXBsYWNlbWVudCl7dGV4dFN0b3JlW2luZGV4XT1yZXBsYWNlbWVudDtyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTt9O30oKTtmdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLGluZGV4LHJlbW92ZSxvYmope2NvbnN0IGNzcz1yZW1vdmU/Jyc6b2JqLm1lZGlhPydAbWVkaWEgJytvYmoubWVkaWErJyB7JytvYmouY3NzKyd9JzpvYmouY3NzOy8vIEZvciBvbGQgSUVcbi8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9pZihzdHlsZS5zdHlsZVNoZWV0KXtzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQ9cmVwbGFjZVRleHQoaW5kZXgsY3NzKTt9ZWxzZXtjb25zdCBjc3NOb2RlPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7Y29uc3QgY2hpbGROb2Rlcz1zdHlsZS5jaGlsZE5vZGVzO2lmKGNoaWxkTm9kZXNbaW5kZXhdKXtzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7fWlmKGNoaWxkTm9kZXMubGVuZ3RoKXtzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSxjaGlsZE5vZGVzW2luZGV4XSk7fWVsc2V7c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7fX19ZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSxvcHRpb25zLG9iail7bGV0IGNzcz1vYmouY3NzO2NvbnN0IG1lZGlhPW9iai5tZWRpYTtjb25zdCBzb3VyY2VNYXA9b2JqLnNvdXJjZU1hcDtpZihtZWRpYSl7c3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsbWVkaWEpO31lbHNle3N0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTt9aWYoc291cmNlTWFwJiZ0eXBlb2YgYnRvYSE9PSd1bmRlZmluZWQnKXtjc3MrPSdcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LCcrYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSsnICovJzt9Ly8gRm9yIG9sZCBJRVxuLyogaXN0YW5idWwgaWdub3JlIGlmICAqL2lmKHN0eWxlLnN0eWxlU2hlZXQpe3N0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dD1jc3M7fWVsc2V7d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCl7c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7fXN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO319bGV0IHNpbmdsZXRvbj1udWxsO2xldCBzaW5nbGV0b25Db3VudGVyPTA7ZnVuY3Rpb24gYWRkU3R5bGUob2JqLG9wdGlvbnMpe2xldCBzdHlsZTtsZXQgdXBkYXRlO2xldCByZW1vdmU7aWYob3B0aW9ucy5zaW5nbGV0b24pe2NvbnN0IHN0eWxlSW5kZXg9c2luZ2xldG9uQ291bnRlcisrO3N0eWxlPXNpbmdsZXRvbnx8KHNpbmdsZXRvbj1pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO3VwZGF0ZT1hcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCxzdHlsZSxzdHlsZUluZGV4LGZhbHNlKTtyZW1vdmU9YXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsc3R5bGUsc3R5bGVJbmRleCx0cnVlKTt9ZWxzZXtzdHlsZT1pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7dXBkYXRlPWFwcGx5VG9UYWcuYmluZChudWxsLHN0eWxlLG9wdGlvbnMpO3JlbW92ZT1mdW5jdGlvbigpe3JlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7fTt9dXBkYXRlKG9iaik7cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iail7aWYobmV3T2JqKXtpZihuZXdPYmouY3NzPT09b2JqLmNzcyYmbmV3T2JqLm1lZGlhPT09b2JqLm1lZGlhJiZuZXdPYmouc291cmNlTWFwPT09b2JqLnNvdXJjZU1hcCl7cmV0dXJuO311cGRhdGUob2JqPW5ld09iaik7fWVsc2V7cmVtb3ZlKCk7fX07fW1vZHVsZS5leHBvcnRzPWZ1bmN0aW9uKGxpc3Qsb3B0aW9ucyl7b3B0aW9ucz1vcHRpb25zfHx7fTsvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbi8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcbmlmKCFvcHRpb25zLnNpbmdsZXRvbiYmdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uIT09J2Jvb2xlYW4nKXtvcHRpb25zLnNpbmdsZXRvbj1pc09sZElFKCk7fWxpc3Q9bGlzdHx8W107bGV0IGxhc3RJZGVudGlmaWVycz1tb2R1bGVzVG9Eb20obGlzdCxvcHRpb25zKTtyZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3Qpe25ld0xpc3Q9bmV3TGlzdHx8W107aWYoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpIT09J1tvYmplY3QgQXJyYXldJyl7cmV0dXJuO31mb3IobGV0IGk9MDtpPGxhc3RJZGVudGlmaWVycy5sZW5ndGg7aSsrKXtjb25zdCBpZGVudGlmaWVyPWxhc3RJZGVudGlmaWVyc1tpXTtjb25zdCBpbmRleD1nZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO31jb25zdCBuZXdMYXN0SWRlbnRpZmllcnM9bW9kdWxlc1RvRG9tKG5ld0xpc3Qsb3B0aW9ucyk7Zm9yKGxldCBpPTA7aTxsYXN0SWRlbnRpZmllcnMubGVuZ3RoO2krKyl7Y29uc3QgaWRlbnRpZmllcj1sYXN0SWRlbnRpZmllcnNbaV07Y29uc3QgaW5kZXg9Z2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7aWYoc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXM9PT0wKXtzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcigpO3N0eWxlc0luRG9tLnNwbGljZShpbmRleCwxKTt9fWxhc3RJZGVudGlmaWVycz1uZXdMYXN0SWRlbnRpZmllcnM7fTt9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzPWZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49ezc2MjpmdW5jdGlvbihuKXtuLmV4cG9ydHM9ZnVuY3Rpb24obil7dmFyIHQ9W107dC50b1N0cmluZz1mdW5jdGlvbiB0b1N0cmluZygpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbih0KXt2YXIgcj1jc3NXaXRoTWFwcGluZ1RvU3RyaW5nKHQsbik7aWYodFsyXSl7cmV0dXJuXCJAbWVkaWEgXCIuY29uY2F0KHRbMl0sXCIge1wiKS5jb25jYXQocixcIn1cIil9cmV0dXJuIHJ9KS5qb2luKFwiXCIpfTt0Lmk9ZnVuY3Rpb24obixyLG8pe2lmKHR5cGVvZiBuPT09XCJzdHJpbmdcIil7bj1bW251bGwsbixcIlwiXV19dmFyIGU9e307aWYobyl7Zm9yKHZhciBhPTA7YTx0aGlzLmxlbmd0aDthKyspe3ZhciBjPXRoaXNbYV1bMF07aWYoYyE9bnVsbCl7ZVtjXT10cnVlfX19Zm9yKHZhciBpPTA7aTxuLmxlbmd0aDtpKyspe3ZhciB1PVtdLmNvbmNhdChuW2ldKTtpZihvJiZlW3VbMF1dKXtjb250aW51ZX1pZihyKXtpZighdVsyXSl7dVsyXT1yfWVsc2V7dVsyXT1cIlwiLmNvbmNhdChyLFwiIGFuZCBcIikuY29uY2F0KHVbMl0pfX10LnB1c2godSl9fTtyZXR1cm4gdH07ZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhuLHQpe3ZhciByPW5bMV18fFwiXCI7dmFyIG89blszXTtpZighbyl7cmV0dXJuIHJ9aWYodCYmdHlwZW9mIGJ0b2E9PT1cImZ1bmN0aW9uXCIpe3ZhciBlPXRvQ29tbWVudChvKTt2YXIgYT1vLnNvdXJjZXMubWFwKGZ1bmN0aW9uKG4pe3JldHVyblwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoby5zb3VyY2VSb290fHxcIlwiKS5jb25jYXQobixcIiAqL1wiKX0pO3JldHVybltyXS5jb25jYXQoYSkuY29uY2F0KFtlXSkuam9pbihcIlxcblwiKX1yZXR1cm5bcl0uam9pbihcIlxcblwiKX1mdW5jdGlvbiB0b0NvbW1lbnQobil7dmFyIHQ9YnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkobikpKSk7dmFyIHI9XCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQodCk7cmV0dXJuXCIvKiMgXCIuY29uY2F0KHIsXCIgKi9cIil9fX07dmFyIHQ9e307ZnVuY3Rpb24gX19uY2N3cGNrX3JlcXVpcmVfXyhyKXtpZih0W3JdKXtyZXR1cm4gdFtyXS5leHBvcnRzfXZhciBvPXRbcl09e2V4cG9ydHM6e319O3ZhciBlPXRydWU7dHJ5e25bcl0obyxvLmV4cG9ydHMsX19uY2N3cGNrX3JlcXVpcmVfXyk7ZT1mYWxzZX1maW5hbGx5e2lmKGUpZGVsZXRlIHRbcl19cmV0dXJuIG8uZXhwb3J0c31fX25jY3dwY2tfcmVxdWlyZV9fLmFiPV9fZGlybmFtZStcIi9cIjtyZXR1cm4gX19uY2N3cGNrX3JlcXVpcmVfXyg3NjIpfSgpOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmRyYXdlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiA5OTk5O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB3aWR0aCAwcyBlYXNlIDAuM3MsIGhlaWdodCAwcyBlYXNlIDAuM3MsIC13ZWJraXQtdHJhbnNmb3JtIDAuM3MgY3ViaWMtYmV6aWVyKDAuNzgsIDAuMTQsIDAuMTUsIDAuODYpO1xcbiAgdHJhbnNpdGlvbjogd2lkdGggMHMgZWFzZSAwLjNzLCBoZWlnaHQgMHMgZWFzZSAwLjNzLCAtd2Via2l0LXRyYW5zZm9ybSAwLjNzIGN1YmljLWJlemllcigwLjc4LCAwLjE0LCAwLjE1LCAwLjg2KTtcXG4gIHRyYW5zaXRpb246IHdpZHRoIDBzIGVhc2UgMC4zcywgaGVpZ2h0IDBzIGVhc2UgMC4zcywgdHJhbnNmb3JtIDAuM3MgY3ViaWMtYmV6aWVyKDAuNzgsIDAuMTQsIDAuMTUsIDAuODYpO1xcbiAgdHJhbnNpdGlvbjogd2lkdGggMHMgZWFzZSAwLjNzLCBoZWlnaHQgMHMgZWFzZSAwLjNzLCB0cmFuc2Zvcm0gMC4zcyBjdWJpYy1iZXppZXIoMC43OCwgMC4xNCwgMC4xNSwgMC44NiksIC13ZWJraXQtdHJhbnNmb3JtIDAuM3MgY3ViaWMtYmV6aWVyKDAuNzgsIDAuMTQsIDAuMTUsIDAuODYpO1xcbn1cXG4uZHJhd2VyID4gKiB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBjdWJpYy1iZXppZXIoMC43OCwgMC4xNCwgMC4xNSwgMC44NiksIC13ZWJraXQtdHJhbnNmb3JtIDAuM3MgY3ViaWMtYmV6aWVyKDAuNzgsIDAuMTQsIDAuMTUsIDAuODYpLCAtd2Via2l0LWJveC1zaGFkb3cgMC4zcyBjdWJpYy1iZXppZXIoMC43OCwgMC4xNCwgMC4xNSwgMC44Nik7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgY3ViaWMtYmV6aWVyKDAuNzgsIDAuMTQsIDAuMTUsIDAuODYpLCAtd2Via2l0LXRyYW5zZm9ybSAwLjNzIGN1YmljLWJlemllcigwLjc4LCAwLjE0LCAwLjE1LCAwLjg2KSwgLXdlYmtpdC1ib3gtc2hhZG93IDAuM3MgY3ViaWMtYmV6aWVyKDAuNzgsIDAuMTQsIDAuMTUsIDAuODYpO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgY3ViaWMtYmV6aWVyKDAuNzgsIDAuMTQsIDAuMTUsIDAuODYpLCBvcGFjaXR5IDAuM3MgY3ViaWMtYmV6aWVyKDAuNzgsIDAuMTQsIDAuMTUsIDAuODYpLCBib3gtc2hhZG93IDAuM3MgY3ViaWMtYmV6aWVyKDAuNzgsIDAuMTQsIDAuMTUsIDAuODYpO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgY3ViaWMtYmV6aWVyKDAuNzgsIDAuMTQsIDAuMTUsIDAuODYpLCBvcGFjaXR5IDAuM3MgY3ViaWMtYmV6aWVyKDAuNzgsIDAuMTQsIDAuMTUsIDAuODYpLCBib3gtc2hhZG93IDAuM3MgY3ViaWMtYmV6aWVyKDAuNzgsIDAuMTQsIDAuMTUsIDAuODYpLCAtd2Via2l0LXRyYW5zZm9ybSAwLjNzIGN1YmljLWJlemllcigwLjc4LCAwLjE0LCAwLjE1LCAwLjg2KSwgLXdlYmtpdC1ib3gtc2hhZG93IDAuM3MgY3ViaWMtYmV6aWVyKDAuNzgsIDAuMTQsIDAuMTUsIDAuODYpO1xcbn1cXG4uZHJhd2VyLmRyYXdlci1vcGVuIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4zcyBjdWJpYy1iZXppZXIoMC43OCwgMC4xNCwgMC4xNSwgMC44Nik7XFxuICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjNzIGN1YmljLWJlemllcigwLjc4LCAwLjE0LCAwLjE1LCAwLjg2KTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGN1YmljLWJlemllcigwLjc4LCAwLjE0LCAwLjE1LCAwLjg2KTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGN1YmljLWJlemllcigwLjc4LCAwLjE0LCAwLjE1LCAwLjg2KSwgLXdlYmtpdC10cmFuc2Zvcm0gMC4zcyBjdWJpYy1iZXppZXIoMC43OCwgMC4xNCwgMC4xNSwgMC44Nik7XFxufVxcbi5kcmF3ZXIgLmRyYXdlci1tYXNrIHtcXG4gIGJhY2tncm91bmQ6ICMwMDA7XFxuICBvcGFjaXR5OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgY3ViaWMtYmV6aWVyKDAuNzgsIDAuMTQsIDAuMTUsIDAuODYpLCBoZWlnaHQgMHMgZWFzZSAwLjNzO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGN1YmljLWJlemllcigwLjc4LCAwLjE0LCAwLjE1LCAwLjg2KSwgaGVpZ2h0IDBzIGVhc2UgMC4zcztcXG59XFxuLmRyYXdlci1jb250ZW50LXdyYXBwZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG59XFxuLmRyYXdlci1jb250ZW50IHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgei1pbmRleDogMTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmRyYXdlci1oYW5kbGUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA3MnB4O1xcbiAgd2lkdGg6IDQxcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB6LWluZGV4OiAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbn1cXG4uZHJhd2VyLWhhbmRsZS1pY29uIHtcXG4gIHdpZHRoOiAxNHB4O1xcbiAgaGVpZ2h0OiAycHg7XFxuICBiYWNrZ3JvdW5kOiAjMzMzO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgY3ViaWMtYmV6aWVyKDAuNzgsIDAuMTQsIDAuMTUsIDAuODYpO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGN1YmljLWJlemllcigwLjc4LCAwLjE0LCAwLjE1LCAwLjg2KTtcXG59XFxuLmRyYXdlci1oYW5kbGUtaWNvbjpiZWZvcmUsXFxuLmRyYXdlci1oYW5kbGUtaWNvbjphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZDogIzMzMztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAycHg7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuM3MgY3ViaWMtYmV6aWVyKDAuNzgsIDAuMTQsIDAuMTUsIDAuODYpO1xcbiAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4zcyBjdWJpYy1iZXppZXIoMC43OCwgMC4xNCwgMC4xNSwgMC44Nik7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBjdWJpYy1iZXppZXIoMC43OCwgMC4xNCwgMC4xNSwgMC44Nik7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBjdWJpYy1iZXppZXIoMC43OCwgMC4xNCwgMC4xNSwgMC44NiksIC13ZWJraXQtdHJhbnNmb3JtIDAuM3MgY3ViaWMtYmV6aWVyKDAuNzgsIDAuMTQsIDAuMTUsIDAuODYpO1xcbn1cXG4uZHJhd2VyLWhhbmRsZS1pY29uOmJlZm9yZSB7XFxuICB0b3A6IC01cHg7XFxufVxcbi5kcmF3ZXItaGFuZGxlLWljb246YWZ0ZXIge1xcbiAgdG9wOiA1cHg7XFxufVxcbi5kcmF3ZXItbGVmdCxcXG4uZHJhd2VyLXJpZ2h0IHtcXG4gIHdpZHRoOiAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLmRyYXdlci1sZWZ0IC5kcmF3ZXItY29udGVudC13cmFwcGVyLFxcbi5kcmF3ZXItcmlnaHQgLmRyYXdlci1jb250ZW50LXdyYXBwZXIsXFxuLmRyYXdlci1sZWZ0IC5kcmF3ZXItY29udGVudCxcXG4uZHJhd2VyLXJpZ2h0IC5kcmF3ZXItY29udGVudCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5kcmF3ZXItbGVmdC5kcmF3ZXItb3BlbixcXG4uZHJhd2VyLXJpZ2h0LmRyYXdlci1vcGVuIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uZHJhd2VyLWxlZnQuZHJhd2VyLW9wZW4ubm8tbWFzayxcXG4uZHJhd2VyLXJpZ2h0LmRyYXdlci1vcGVuLm5vLW1hc2sge1xcbiAgd2lkdGg6IDAlO1xcbn1cXG4uZHJhd2VyLWxlZnQge1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG59XFxuLmRyYXdlci1sZWZ0IC5kcmF3ZXItaGFuZGxlIHtcXG4gIHJpZ2h0OiAtNDBweDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDAgOHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IDJweCAwIDhweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbiAgYm9yZGVyLXJhZGl1czogMCA0cHggNHB4IDA7XFxufVxcbi5kcmF3ZXItbGVmdC5kcmF3ZXItb3BlbiAuZHJhd2VyLWNvbnRlbnQtd3JhcHBlciB7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCAwIDhweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAycHggMCA4cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG59XFxuLmRyYXdlci1yaWdodCB7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG59XFxuLmRyYXdlci1yaWdodCAuZHJhd2VyLWNvbnRlbnQtd3JhcHBlciB7XFxuICByaWdodDogMDtcXG59XFxuLmRyYXdlci1yaWdodCAuZHJhd2VyLWhhbmRsZSB7XFxuICBsZWZ0OiAtNDBweDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogLTJweCAwIDhweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAtMnB4IDAgOHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcXG59XFxuLmRyYXdlci1yaWdodC5kcmF3ZXItb3BlbiAuZHJhd2VyLWNvbnRlbnQtd3JhcHBlciB7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IC0ycHggMCA4cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogLTJweCAwIDhweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbn1cXG4uZHJhd2VyLXJpZ2h0LmRyYXdlci1vcGVuLm5vLW1hc2sge1xcbiAgcmlnaHQ6IDFweDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDFweCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxcHgpO1xcbn1cXG4uZHJhd2VyLXRvcCxcXG4uZHJhd2VyLWJvdHRvbSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMCU7XFxufVxcbi5kcmF3ZXItdG9wIC5kcmF3ZXItY29udGVudC13cmFwcGVyLFxcbi5kcmF3ZXItYm90dG9tIC5kcmF3ZXItY29udGVudC13cmFwcGVyLFxcbi5kcmF3ZXItdG9wIC5kcmF3ZXItY29udGVudCxcXG4uZHJhd2VyLWJvdHRvbSAuZHJhd2VyLWNvbnRlbnQge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5kcmF3ZXItdG9wIC5kcmF3ZXItY29udGVudCxcXG4uZHJhd2VyLWJvdHRvbSAuZHJhd2VyLWNvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uZHJhd2VyLXRvcC5kcmF3ZXItb3BlbixcXG4uZHJhd2VyLWJvdHRvbS5kcmF3ZXItb3BlbiB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5kcmF3ZXItdG9wLmRyYXdlci1vcGVuLm5vLW1hc2ssXFxuLmRyYXdlci1ib3R0b20uZHJhd2VyLW9wZW4ubm8tbWFzayB7XFxuICBoZWlnaHQ6IDAlO1xcbn1cXG4uZHJhd2VyLXRvcCAuZHJhd2VyLWhhbmRsZSxcXG4uZHJhd2VyLWJvdHRvbSAuZHJhd2VyLWhhbmRsZSB7XFxuICBsZWZ0OiA1MCU7XFxuICBtYXJnaW4tbGVmdDogLTIwcHg7XFxufVxcbi5kcmF3ZXItdG9wIHtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxufVxcbi5kcmF3ZXItdG9wIC5kcmF3ZXItaGFuZGxlIHtcXG4gIHRvcDogYXV0bztcXG4gIGJvdHRvbTogLTQwcHg7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCA0cHggNHB4O1xcbn1cXG4uZHJhd2VyLXRvcC5kcmF3ZXItb3BlbiAuZHJhd2VyLWNvbnRlbnQtd3JhcHBlciB7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG59XFxuLmRyYXdlci1ib3R0b20ge1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG59XFxuLmRyYXdlci1ib3R0b20gLmRyYXdlci1jb250ZW50LXdyYXBwZXIge1xcbiAgYm90dG9tOiAwO1xcbn1cXG4uZHJhd2VyLWJvdHRvbSAuZHJhd2VyLWhhbmRsZSB7XFxuICB0b3A6IC00MHB4O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIC0ycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgLTJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweCA0cHggMCAwO1xcbn1cXG4uZHJhd2VyLWJvdHRvbS5kcmF3ZXItb3BlbiAuZHJhd2VyLWNvbnRlbnQtd3JhcHBlciB7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgLTJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAtMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbn1cXG4uZHJhd2VyLWJvdHRvbS5kcmF3ZXItb3Blbi5uby1tYXNrIHtcXG4gIGJvdHRvbTogMXB4O1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXB4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7XFxufVxcbi5kcmF3ZXIuZHJhd2VyLW9wZW4gLmRyYXdlci1tYXNrIHtcXG4gIG9wYWNpdHk6IDAuMztcXG4gIGhlaWdodDogMTAwJTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGN1YmljLWJlemllcigwLjc4LCAwLjE0LCAwLjE1LCAwLjg2KTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBjdWJpYy1iZXppZXIoMC43OCwgMC4xNCwgMC4xNSwgMC44Nik7XFxufVxcbi5kcmF3ZXIuZHJhd2VyLW9wZW4gLmRyYXdlci1oYW5kbGUtaWNvbiB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG59XFxuLmRyYXdlci5kcmF3ZXItb3BlbiAuZHJhd2VyLWhhbmRsZS1pY29uOmJlZm9yZSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cHgpIHJvdGF0ZSg0NWRlZyk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cHgpIHJvdGF0ZSg0NWRlZyk7XFxufVxcbi5kcmF3ZXIuZHJhd2VyLW9wZW4gLmRyYXdlci1oYW5kbGUtaWNvbjphZnRlciB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KSByb3RhdGUoLTQ1ZGVnKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpIHJvdGF0ZSgtNDVkZWcpO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vbm9kZV9tb2R1bGVzL3JjLWRyYXdlci9hc3NldHMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYix3SEFBd0c7RUFBeEcsZ0hBQXdHO0VBQXhHLHdHQUF3RztFQUF4RyxxS0FBd0c7QUFDMUc7QUFDQTtFQUNFLGdNQUF3SztFQUF4Syx3TEFBd0s7RUFBeEssd0tBQXdLO0VBQXhLLG1TQUF3SztBQUMxSztBQUNBO0VBQ0UsK0VBQStEO0VBQS9ELHVFQUErRDtFQUEvRCwrREFBK0Q7RUFBL0QsNEhBQStEO0FBQ2pFO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsMEZBQWtGO0VBQWxGLGtGQUFrRjtBQUNwRjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsY0FBYztFQUNkLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHFCQUFhO0VBQWIsYUFBYTtFQUNiLCtCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsMkJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix3RUFBZ0U7RUFBaEUsZ0VBQWdFO0FBQ2xFO0FBQ0E7O0VBRUUsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsK0VBQStEO0VBQS9ELHVFQUErRDtFQUEvRCwrREFBK0Q7RUFBL0QsNEhBQStEO0FBQ2pFO0FBQ0E7RUFDRSxTQUFTO0FBQ1g7QUFDQTtFQUNFLFFBQVE7QUFDVjtBQUNBOztFQUVFLFNBQVM7RUFDVCxZQUFZO0FBQ2Q7QUFDQTs7OztFQUlFLFlBQVk7QUFDZDtBQUNBOztFQUVFLFdBQVc7QUFDYjtBQUNBOztFQUVFLFNBQVM7QUFDWDtBQUNBO0VBQ0UsTUFBTTtFQUNOLE9BQU87QUFDVDtBQUNBO0VBQ0UsWUFBWTtFQUNaLGlEQUF5QztVQUF6Qyx5Q0FBeUM7RUFDekMsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSxpREFBeUM7VUFBekMseUNBQXlDO0FBQzNDO0FBQ0E7RUFDRSxNQUFNO0VBQ04sUUFBUTtBQUNWO0FBQ0E7RUFDRSxRQUFRO0FBQ1Y7QUFDQTtFQUNFLFdBQVc7RUFDWCxrREFBMEM7VUFBMUMsMENBQTBDO0VBQzFDLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0Usa0RBQTBDO1VBQTFDLDBDQUEwQztBQUM1QztBQUNBO0VBQ0UsVUFBVTtFQUNWLGtDQUEwQjtVQUExQiwwQkFBMEI7QUFDNUI7QUFDQTs7RUFFRSxXQUFXO0VBQ1gsVUFBVTtBQUNaO0FBQ0E7Ozs7RUFJRSxXQUFXO0FBQ2I7QUFDQTs7RUFFRSxZQUFZO0FBQ2Q7QUFDQTs7RUFFRSxZQUFZO0FBQ2Q7QUFDQTs7RUFFRSxVQUFVO0FBQ1o7QUFDQTs7RUFFRSxTQUFTO0VBQ1Qsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxNQUFNO0VBQ04sT0FBTztBQUNUO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsYUFBYTtFQUNiLGlEQUF5QztVQUF6Qyx5Q0FBeUM7RUFDekMsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSxpREFBeUM7VUFBekMseUNBQXlDO0FBQzNDO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsT0FBTztBQUNUO0FBQ0E7RUFDRSxTQUFTO0FBQ1g7QUFDQTtFQUNFLFVBQVU7RUFDVixrREFBMEM7VUFBMUMsMENBQTBDO0VBQzFDLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0Usa0RBQTBDO1VBQTFDLDBDQUEwQztBQUM1QztBQUNBO0VBQ0UsV0FBVztFQUNYLGtDQUEwQjtVQUExQiwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1oscUVBQTZEO0VBQTdELDZEQUE2RDtBQUMvRDtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxnREFBd0M7VUFBeEMsd0NBQXdDO0FBQzFDO0FBQ0E7RUFDRSxrREFBMEM7VUFBMUMsMENBQTBDO0FBQzVDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5kcmF3ZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogOTk5OTtcXG4gIHRyYW5zaXRpb246IHdpZHRoIDBzIGVhc2UgMC4zcywgaGVpZ2h0IDBzIGVhc2UgMC4zcywgdHJhbnNmb3JtIDAuM3MgY3ViaWMtYmV6aWVyKDAuNzgsIDAuMTQsIDAuMTUsIDAuODYpO1xcbn1cXG4uZHJhd2VyID4gKiB7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBjdWJpYy1iZXppZXIoMC43OCwgMC4xNCwgMC4xNSwgMC44NiksIG9wYWNpdHkgMC4zcyBjdWJpYy1iZXppZXIoMC43OCwgMC4xNCwgMC4xNSwgMC44NiksIGJveC1zaGFkb3cgMC4zcyBjdWJpYy1iZXppZXIoMC43OCwgMC4xNCwgMC4xNSwgMC44Nik7XFxufVxcbi5kcmF3ZXIuZHJhd2VyLW9wZW4ge1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgY3ViaWMtYmV6aWVyKDAuNzgsIDAuMTQsIDAuMTUsIDAuODYpO1xcbn1cXG4uZHJhd2VyIC5kcmF3ZXItbWFzayB7XFxuICBiYWNrZ3JvdW5kOiAjMDAwO1xcbiAgb3BhY2l0eTogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBjdWJpYy1iZXppZXIoMC43OCwgMC4xNCwgMC4xNSwgMC44NiksIGhlaWdodCAwcyBlYXNlIDAuM3M7XFxufVxcbi5kcmF3ZXItY29udGVudC13cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxufVxcbi5kcmF3ZXItY29udGVudCB7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIHotaW5kZXg6IDE7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5kcmF3ZXItaGFuZGxlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNzJweDtcXG4gIHdpZHRoOiA0MXB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgei1pbmRleDogMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxufVxcbi5kcmF3ZXItaGFuZGxlLWljb24ge1xcbiAgd2lkdGg6IDE0cHg7XFxuICBoZWlnaHQ6IDJweDtcXG4gIGJhY2tncm91bmQ6ICMzMzM7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgY3ViaWMtYmV6aWVyKDAuNzgsIDAuMTQsIDAuMTUsIDAuODYpO1xcbn1cXG4uZHJhd2VyLWhhbmRsZS1pY29uOmJlZm9yZSxcXG4uZHJhd2VyLWhhbmRsZS1pY29uOmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kOiAjMzMzO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDJweDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGN1YmljLWJlemllcigwLjc4LCAwLjE0LCAwLjE1LCAwLjg2KTtcXG59XFxuLmRyYXdlci1oYW5kbGUtaWNvbjpiZWZvcmUge1xcbiAgdG9wOiAtNXB4O1xcbn1cXG4uZHJhd2VyLWhhbmRsZS1pY29uOmFmdGVyIHtcXG4gIHRvcDogNXB4O1xcbn1cXG4uZHJhd2VyLWxlZnQsXFxuLmRyYXdlci1yaWdodCB7XFxuICB3aWR0aDogMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5kcmF3ZXItbGVmdCAuZHJhd2VyLWNvbnRlbnQtd3JhcHBlcixcXG4uZHJhd2VyLXJpZ2h0IC5kcmF3ZXItY29udGVudC13cmFwcGVyLFxcbi5kcmF3ZXItbGVmdCAuZHJhd2VyLWNvbnRlbnQsXFxuLmRyYXdlci1yaWdodCAuZHJhd2VyLWNvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uZHJhd2VyLWxlZnQuZHJhd2VyLW9wZW4sXFxuLmRyYXdlci1yaWdodC5kcmF3ZXItb3BlbiB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmRyYXdlci1sZWZ0LmRyYXdlci1vcGVuLm5vLW1hc2ssXFxuLmRyYXdlci1yaWdodC5kcmF3ZXItb3Blbi5uby1tYXNrIHtcXG4gIHdpZHRoOiAwJTtcXG59XFxuLmRyYXdlci1sZWZ0IHtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxufVxcbi5kcmF3ZXItbGVmdCAuZHJhd2VyLWhhbmRsZSB7XFxuICByaWdodDogLTQwcHg7XFxuICBib3gtc2hhZG93OiAycHggMCA4cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDAgNHB4IDRweCAwO1xcbn1cXG4uZHJhd2VyLWxlZnQuZHJhd2VyLW9wZW4gLmRyYXdlci1jb250ZW50LXdyYXBwZXIge1xcbiAgYm94LXNoYWRvdzogMnB4IDAgOHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxufVxcbi5kcmF3ZXItcmlnaHQge1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxufVxcbi5kcmF3ZXItcmlnaHQgLmRyYXdlci1jb250ZW50LXdyYXBwZXIge1xcbiAgcmlnaHQ6IDA7XFxufVxcbi5kcmF3ZXItcmlnaHQgLmRyYXdlci1oYW5kbGUge1xcbiAgbGVmdDogLTQwcHg7XFxuICBib3gtc2hhZG93OiAtMnB4IDAgOHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcXG59XFxuLmRyYXdlci1yaWdodC5kcmF3ZXItb3BlbiAuZHJhd2VyLWNvbnRlbnQtd3JhcHBlciB7XFxuICBib3gtc2hhZG93OiAtMnB4IDAgOHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxufVxcbi5kcmF3ZXItcmlnaHQuZHJhd2VyLW9wZW4ubm8tbWFzayB7XFxuICByaWdodDogMXB4O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDFweCk7XFxufVxcbi5kcmF3ZXItdG9wLFxcbi5kcmF3ZXItYm90dG9tIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAwJTtcXG59XFxuLmRyYXdlci10b3AgLmRyYXdlci1jb250ZW50LXdyYXBwZXIsXFxuLmRyYXdlci1ib3R0b20gLmRyYXdlci1jb250ZW50LXdyYXBwZXIsXFxuLmRyYXdlci10b3AgLmRyYXdlci1jb250ZW50LFxcbi5kcmF3ZXItYm90dG9tIC5kcmF3ZXItY29udGVudCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmRyYXdlci10b3AgLmRyYXdlci1jb250ZW50LFxcbi5kcmF3ZXItYm90dG9tIC5kcmF3ZXItY29udGVudCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5kcmF3ZXItdG9wLmRyYXdlci1vcGVuLFxcbi5kcmF3ZXItYm90dG9tLmRyYXdlci1vcGVuIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLmRyYXdlci10b3AuZHJhd2VyLW9wZW4ubm8tbWFzayxcXG4uZHJhd2VyLWJvdHRvbS5kcmF3ZXItb3Blbi5uby1tYXNrIHtcXG4gIGhlaWdodDogMCU7XFxufVxcbi5kcmF3ZXItdG9wIC5kcmF3ZXItaGFuZGxlLFxcbi5kcmF3ZXItYm90dG9tIC5kcmF3ZXItaGFuZGxlIHtcXG4gIGxlZnQ6IDUwJTtcXG4gIG1hcmdpbi1sZWZ0OiAtMjBweDtcXG59XFxuLmRyYXdlci10b3Age1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG59XFxuLmRyYXdlci10b3AgLmRyYXdlci1oYW5kbGUge1xcbiAgdG9wOiBhdXRvO1xcbiAgYm90dG9tOiAtNDBweDtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbiAgYm9yZGVyLXJhZGl1czogMCAwIDRweCA0cHg7XFxufVxcbi5kcmF3ZXItdG9wLmRyYXdlci1vcGVuIC5kcmF3ZXItY29udGVudC13cmFwcGVyIHtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbn1cXG4uZHJhd2VyLWJvdHRvbSB7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbn1cXG4uZHJhd2VyLWJvdHRvbSAuZHJhd2VyLWNvbnRlbnQtd3JhcHBlciB7XFxuICBib3R0b206IDA7XFxufVxcbi5kcmF3ZXItYm90dG9tIC5kcmF3ZXItaGFuZGxlIHtcXG4gIHRvcDogLTQwcHg7XFxuICBib3gtc2hhZG93OiAwIC0ycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcXG59XFxuLmRyYXdlci1ib3R0b20uZHJhd2VyLW9wZW4gLmRyYXdlci1jb250ZW50LXdyYXBwZXIge1xcbiAgYm94LXNoYWRvdzogMCAtMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbn1cXG4uZHJhd2VyLWJvdHRvbS5kcmF3ZXItb3Blbi5uby1tYXNrIHtcXG4gIGJvdHRvbTogMXB4O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7XFxufVxcbi5kcmF3ZXIuZHJhd2VyLW9wZW4gLmRyYXdlci1tYXNrIHtcXG4gIG9wYWNpdHk6IDAuMztcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBjdWJpYy1iZXppZXIoMC43OCwgMC4xNCwgMC4xNSwgMC44Nik7XFxufVxcbi5kcmF3ZXIuZHJhd2VyLW9wZW4gLmRyYXdlci1oYW5kbGUtaWNvbiB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG59XFxuLmRyYXdlci5kcmF3ZXItb3BlbiAuZHJhd2VyLWhhbmRsZS1pY29uOmJlZm9yZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXB4KSByb3RhdGUoNDVkZWcpO1xcbn1cXG4uZHJhd2VyLmRyYXdlci1vcGVuIC5kcmF3ZXItaGFuZGxlLWljb246YWZ0ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpIHJvdGF0ZSgtNDVkZWcpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIucmMtdGFicy1kcm9wZG93biB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kOiAjZmVmZWZlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBtYXgtaGVpZ2h0OiAyMDBweDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG4ucmMtdGFicy1kcm9wZG93bi1oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnJjLXRhYnMtZHJvcGRvd24tbWVudSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuLnJjLXRhYnMtZHJvcGRvd24tbWVudS1pdGVtIHtcXG4gIHBhZGRpbmc6IDRweCA4cHg7XFxufVxcbi5yYy10YWJzLWRyb3Bkb3duLW1lbnUtaXRlbS1zZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kOiByZWQ7XFxufVxcbi5yYy10YWJzLWRyb3Bkb3duLW1lbnUtaXRlbS1kaXNhYmxlZCB7XFxuICBvcGFjaXR5OiAwLjM7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG4ucmMtdGFicy1jb250ZW50IHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnJjLXRhYnMtY29udGVudC1ob2xkZXIge1xcbiAgLXdlYmtpdC1mbGV4OiBhdXRvO1xcbiAgICAgICAgICBmbGV4OiBhdXRvO1xcbn1cXG4ucmMtdGFicy1jb250ZW50LWFuaW1hdGVkIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogbWFyZ2luIDAuM3M7XFxuICB0cmFuc2l0aW9uOiBtYXJnaW4gMC4zcztcXG59XFxuLnJjLXRhYnMtdGFicGFuZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIC13ZWJraXQtZmxleDogbm9uZTtcXG4gICAgICAgICAgZmxleDogbm9uZTtcXG59XFxuLnJjLXRhYnMge1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLnJjLXRhYnMtdG9wLFxcbi5yYy10YWJzLWJvdHRvbSB7XFxuICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5yYy10YWJzLXRvcCAucmMtdGFicy1pbmstYmFyLFxcbi5yYy10YWJzLWJvdHRvbSAucmMtdGFicy1pbmstYmFyIHtcXG4gIGhlaWdodDogM3B4O1xcbn1cXG4ucmMtdGFicy10b3AgLnJjLXRhYnMtaW5rLWJhciB7XFxuICBib3R0b206IDA7XFxufVxcbi5yYy10YWJzLWJvdHRvbSAucmMtdGFicy1uYXYge1xcbiAgLXdlYmtpdC1vcmRlcjogMTtcXG4gICAgICAgICAgb3JkZXI6IDE7XFxufVxcbi5yYy10YWJzLWJvdHRvbSAucmMtdGFicy1jb250ZW50IHtcXG4gIC13ZWJraXQtb3JkZXI6IDA7XFxuICAgICAgICAgIG9yZGVyOiAwO1xcbn1cXG4ucmMtdGFicy1ib3R0b20gLnJjLXRhYnMtaW5rLWJhciB7XFxuICB0b3A6IDA7XFxufVxcbi5yYy10YWJzLWxlZnQucmMtdGFicy1lZGl0YWJsZSAucmMtdGFicy10YWIsXFxuLnJjLXRhYnMtcmlnaHQucmMtdGFicy1lZGl0YWJsZSAucmMtdGFicy10YWIge1xcbiAgcGFkZGluZy1yaWdodDogMzJweDtcXG59XFxuLnJjLXRhYnMtbGVmdCAucmMtdGFicy1uYXYtd3JhcCxcXG4ucmMtdGFicy1yaWdodCAucmMtdGFicy1uYXYtd3JhcCB7XFxuICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5yYy10YWJzLWxlZnQgLnJjLXRhYnMtaW5rLWJhcixcXG4ucmMtdGFicy1yaWdodCAucmMtdGFicy1pbmstYmFyIHtcXG4gIHdpZHRoOiAzcHg7XFxufVxcbi5yYy10YWJzLWxlZnQgLnJjLXRhYnMtbmF2LFxcbi5yYy10YWJzLXJpZ2h0IC5yYy10YWJzLW5hdiB7XFxuICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtaW4td2lkdGg6IDUwcHg7XFxufVxcbi5yYy10YWJzLWxlZnQgLnJjLXRhYnMtbmF2LWxpc3QsXFxuLnJjLXRhYnMtcmlnaHQgLnJjLXRhYnMtbmF2LWxpc3QsXFxuLnJjLXRhYnMtbGVmdCAucmMtdGFicy1uYXYtb3BlcmF0aW9ucyxcXG4ucmMtdGFicy1yaWdodCAucmMtdGFicy1uYXYtb3BlcmF0aW9ucyB7XFxuICAtd2Via2l0LWZsZXg6IDEgMCBhdXRvO1xcbiAgICAgICAgICBmbGV4OiAxIDAgYXV0bztcXG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLnJjLXRhYnMtbGVmdCAucmMtdGFicy1pbmstYmFyIHtcXG4gIHJpZ2h0OiAwO1xcbn1cXG4ucmMtdGFicy1yaWdodCAucmMtdGFicy1uYXYge1xcbiAgLXdlYmtpdC1vcmRlcjogMTtcXG4gICAgICAgICAgb3JkZXI6IDE7XFxufVxcbi5yYy10YWJzLXJpZ2h0IC5yYy10YWJzLWNvbnRlbnQge1xcbiAgLXdlYmtpdC1vcmRlcjogMDtcXG4gICAgICAgICAgb3JkZXI6IDA7XFxufVxcbi5yYy10YWJzLXJpZ2h0IC5yYy10YWJzLWluay1iYXIge1xcbiAgbGVmdDogMDtcXG59XFxuLnJjLXRhYnMtcnRsIHtcXG4gIGRpcmVjdGlvbjogcnRsO1xcbn1cXG4ucmMtdGFicy1kcm9wZG93bi1ydGwge1xcbiAgZGlyZWN0aW9uOiBydGw7XFxufVxcbi5yYy10YWJzIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4ucmMtdGFicy1uYXYge1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtZmxleDogbm9uZTtcXG4gICAgICAgICAgZmxleDogbm9uZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnJjLXRhYnMtbmF2LW1lYXN1cmUsXFxuLnJjLXRhYnMtbmF2LXdyYXAge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAtd2Via2l0LWZsZXg6IGF1dG87XFxuICAgICAgICAgIGZsZXg6IGF1dG87XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5yYy10YWJzLW5hdi1tZWFzdXJlLXBpbmctbGVmdDo6YmVmb3JlLFxcbi5yYy10YWJzLW5hdi13cmFwLXBpbmctbGVmdDo6YmVmb3JlLFxcbi5yYy10YWJzLW5hdi1tZWFzdXJlLXBpbmctcmlnaHQ6OmFmdGVyLFxcbi5yYy10YWJzLW5hdi13cmFwLXBpbmctcmlnaHQ6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbn1cXG4ucmMtdGFicy1uYXYtbWVhc3VyZS1waW5nLWxlZnQ6OmJlZm9yZSxcXG4ucmMtdGFicy1uYXYtd3JhcC1waW5nLWxlZnQ6OmJlZm9yZSB7XFxuICBsZWZ0OiAwO1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZWQ7XFxufVxcbi5yYy10YWJzLW5hdi1tZWFzdXJlLXBpbmctcmlnaHQ6OmFmdGVyLFxcbi5yYy10YWJzLW5hdi13cmFwLXBpbmctcmlnaHQ6OmFmdGVyIHtcXG4gIHJpZ2h0OiAwO1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmVkO1xcbn1cXG4ucmMtdGFicy1uYXYtbWVhc3VyZS1waW5nLXRvcDo6YmVmb3JlLFxcbi5yYy10YWJzLW5hdi13cmFwLXBpbmctdG9wOjpiZWZvcmUsXFxuLnJjLXRhYnMtbmF2LW1lYXN1cmUtcGluZy1ib3R0b206OmFmdGVyLFxcbi5yYy10YWJzLW5hdi13cmFwLXBpbmctYm90dG9tOjphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG59XFxuLnJjLXRhYnMtbmF2LW1lYXN1cmUtcGluZy10b3A6OmJlZm9yZSxcXG4ucmMtdGFicy1uYXYtd3JhcC1waW5nLXRvcDo6YmVmb3JlIHtcXG4gIHRvcDogMDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZWQ7XFxufVxcbi5yYy10YWJzLW5hdi1tZWFzdXJlLXBpbmctYm90dG9tOjphZnRlcixcXG4ucmMtdGFicy1uYXYtd3JhcC1waW5nLWJvdHRvbTo6YWZ0ZXIge1xcbiAgYm90dG9tOiAwO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJlZDtcXG59XFxuLnJjLXRhYnMtbmF2LWxpc3Qge1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4zcztcXG4gIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuM3M7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzLCAtd2Via2l0LXRyYW5zZm9ybSAwLjNzO1xcbn1cXG4ucmMtdGFicy1uYXYtb3BlcmF0aW9ucyB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4ucmMtdGFicy1uYXYtb3BlcmF0aW9ucy1oaWRkZW4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbi5yYy10YWJzLW5hdi1tb3JlIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMCwgMCwgMC4xKTtcXG59XFxuLnJjLXRhYnMtbmF2LWFkZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMjU1LCAwLCAwLjEpO1xcbn1cXG4ucmMtdGFicy10YWIge1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbiAgbWFyZ2luOiAwO1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmb250LXdlaWdodDogbGlnaHRlcjtcXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnJjLXRhYnMtdGFiLWJ0bixcXG4ucmMtdGFicy10YWItcmVtb3ZlIHtcXG4gIGJvcmRlcjogMDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbn1cXG4ucmMtdGFicy10YWItYnRuIHtcXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcbiAgbGluZS1oZWlnaHQ6IDMycHg7XFxufVxcbi5yYy10YWJzLXRhYi1yZW1vdmU6aG92ZXIge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuLnJjLXRhYnMtdGFiLWFjdGl2ZSB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG4ucmMtdGFicy1pbmstYmFyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQ6IHJlZDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG4ucmMtdGFicy1pbmstYmFyLWFuaW1hdGVkIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG59XFxuLnJjLXRhYnMtZXh0cmEtY29udGVudCB7XFxuICAtd2Via2l0LWZsZXg6IG5vbmU7XFxuICAgICAgICAgIGZsZXg6IG5vbmU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9ub2RlX21vZHVsZXMvcmMtdGFicy9hc3NldHMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UscUJBQWE7RUFBYixhQUFhO0VBQ2IsV0FBVztBQUNiO0FBQ0E7RUFDRSxrQkFBVTtVQUFWLFVBQVU7QUFDWjtBQUNBO0VBQ0UsK0JBQXVCO0VBQXZCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFVO1VBQVYsVUFBVTtBQUNaO0FBQ0E7RUFDRSxxQkFBYTtFQUFiLGFBQWE7QUFDZjtBQUNBOztFQUVFLDhCQUFzQjtVQUF0QixzQkFBc0I7QUFDeEI7QUFDQTs7RUFFRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLFNBQVM7QUFDWDtBQUNBO0VBQ0UsZ0JBQVE7VUFBUixRQUFRO0FBQ1Y7QUFDQTtFQUNFLGdCQUFRO1VBQVIsUUFBUTtBQUNWO0FBQ0E7RUFDRSxNQUFNO0FBQ1I7QUFDQTs7RUFFRSxtQkFBbUI7QUFDckI7QUFDQTs7RUFFRSw4QkFBc0I7VUFBdEIsc0JBQXNCO0FBQ3hCO0FBQ0E7O0VBRUUsVUFBVTtBQUNaO0FBQ0E7O0VBRUUsOEJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QixlQUFlO0FBQ2pCO0FBQ0E7Ozs7RUFJRSxzQkFBYztVQUFkLGNBQWM7RUFDZCw4QkFBc0I7VUFBdEIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxRQUFRO0FBQ1Y7QUFDQTtFQUNFLGdCQUFRO1VBQVIsUUFBUTtBQUNWO0FBQ0E7RUFDRSxnQkFBUTtVQUFSLFFBQVE7QUFDVjtBQUNBO0VBQ0UsT0FBTztBQUNUO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UscUJBQWE7RUFBYixhQUFhO0VBQ2Isa0JBQVU7VUFBVixVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCO0FBQ0E7O0VBRUUsK0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGtCQUFVO1VBQVYsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIscUJBQWE7RUFBYixhQUFhO0FBQ2Y7QUFDQTs7OztFQUlFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFNBQVM7QUFDWDtBQUNBOztFQUVFLE9BQU87RUFDUCwwQkFBMEI7QUFDNUI7QUFDQTs7RUFFRSxRQUFRO0VBQ1IsMkJBQTJCO0FBQzdCO0FBQ0E7Ozs7RUFJRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxRQUFRO0FBQ1Y7QUFDQTs7RUFFRSxNQUFNO0VBQ04seUJBQXlCO0FBQzNCO0FBQ0E7O0VBRUUsU0FBUztFQUNULHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UscUJBQWE7RUFBYixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLDBDQUEwQjtFQUExQixrQ0FBMEI7RUFBMUIsMEJBQTBCO0VBQTFCLGtEQUEwQjtBQUM1QjtBQUNBO0VBQ0UscUJBQWE7RUFBYixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsZ0NBQWdDO0FBQ2xDO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsZ0NBQWdDO0FBQ2xDO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsZUFBZTtFQUNmLG9DQUFvQztFQUNwQyxTQUFTO0VBQ1QscUJBQWE7RUFBYixhQUFhO0VBQ2IsYUFBYTtFQUNiLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLDJCQUFtQjtVQUFuQixtQkFBbUI7QUFDckI7QUFDQTs7RUFFRSxTQUFTO0VBQ1QsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLDRCQUFvQjtFQUFwQixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGtCQUFVO1VBQVYsVUFBVTtBQUNaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5yYy10YWJzLWRyb3Bkb3duIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQ6ICNmZWZlZmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcbi5yYy10YWJzLWRyb3Bkb3duLWhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ucmMtdGFicy1kcm9wZG93bi1tZW51IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG4ucmMtdGFicy1kcm9wZG93bi1tZW51LWl0ZW0ge1xcbiAgcGFkZGluZzogNHB4IDhweDtcXG59XFxuLnJjLXRhYnMtZHJvcGRvd24tbWVudS1pdGVtLXNlbGVjdGVkIHtcXG4gIGJhY2tncm91bmQ6IHJlZDtcXG59XFxuLnJjLXRhYnMtZHJvcGRvd24tbWVudS1pdGVtLWRpc2FibGVkIHtcXG4gIG9wYWNpdHk6IDAuMztcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcbi5yYy10YWJzLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ucmMtdGFicy1jb250ZW50LWhvbGRlciB7XFxuICBmbGV4OiBhdXRvO1xcbn1cXG4ucmMtdGFicy1jb250ZW50LWFuaW1hdGVkIHtcXG4gIHRyYW5zaXRpb246IG1hcmdpbiAwLjNzO1xcbn1cXG4ucmMtdGFicy10YWJwYW5lIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZmxleDogbm9uZTtcXG59XFxuLnJjLXRhYnMge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLnJjLXRhYnMtdG9wLFxcbi5yYy10YWJzLWJvdHRvbSB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4ucmMtdGFicy10b3AgLnJjLXRhYnMtaW5rLWJhcixcXG4ucmMtdGFicy1ib3R0b20gLnJjLXRhYnMtaW5rLWJhciB7XFxuICBoZWlnaHQ6IDNweDtcXG59XFxuLnJjLXRhYnMtdG9wIC5yYy10YWJzLWluay1iYXIge1xcbiAgYm90dG9tOiAwO1xcbn1cXG4ucmMtdGFicy1ib3R0b20gLnJjLXRhYnMtbmF2IHtcXG4gIG9yZGVyOiAxO1xcbn1cXG4ucmMtdGFicy1ib3R0b20gLnJjLXRhYnMtY29udGVudCB7XFxuICBvcmRlcjogMDtcXG59XFxuLnJjLXRhYnMtYm90dG9tIC5yYy10YWJzLWluay1iYXIge1xcbiAgdG9wOiAwO1xcbn1cXG4ucmMtdGFicy1sZWZ0LnJjLXRhYnMtZWRpdGFibGUgLnJjLXRhYnMtdGFiLFxcbi5yYy10YWJzLXJpZ2h0LnJjLXRhYnMtZWRpdGFibGUgLnJjLXRhYnMtdGFiIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDMycHg7XFxufVxcbi5yYy10YWJzLWxlZnQgLnJjLXRhYnMtbmF2LXdyYXAsXFxuLnJjLXRhYnMtcmlnaHQgLnJjLXRhYnMtbmF2LXdyYXAge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLnJjLXRhYnMtbGVmdCAucmMtdGFicy1pbmstYmFyLFxcbi5yYy10YWJzLXJpZ2h0IC5yYy10YWJzLWluay1iYXIge1xcbiAgd2lkdGg6IDNweDtcXG59XFxuLnJjLXRhYnMtbGVmdCAucmMtdGFicy1uYXYsXFxuLnJjLXRhYnMtcmlnaHQgLnJjLXRhYnMtbmF2IHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtaW4td2lkdGg6IDUwcHg7XFxufVxcbi5yYy10YWJzLWxlZnQgLnJjLXRhYnMtbmF2LWxpc3QsXFxuLnJjLXRhYnMtcmlnaHQgLnJjLXRhYnMtbmF2LWxpc3QsXFxuLnJjLXRhYnMtbGVmdCAucmMtdGFicy1uYXYtb3BlcmF0aW9ucyxcXG4ucmMtdGFicy1yaWdodCAucmMtdGFicy1uYXYtb3BlcmF0aW9ucyB7XFxuICBmbGV4OiAxIDAgYXV0bztcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5yYy10YWJzLWxlZnQgLnJjLXRhYnMtaW5rLWJhciB7XFxuICByaWdodDogMDtcXG59XFxuLnJjLXRhYnMtcmlnaHQgLnJjLXRhYnMtbmF2IHtcXG4gIG9yZGVyOiAxO1xcbn1cXG4ucmMtdGFicy1yaWdodCAucmMtdGFicy1jb250ZW50IHtcXG4gIG9yZGVyOiAwO1xcbn1cXG4ucmMtdGFicy1yaWdodCAucmMtdGFicy1pbmstYmFyIHtcXG4gIGxlZnQ6IDA7XFxufVxcbi5yYy10YWJzLXJ0bCB7XFxuICBkaXJlY3Rpb246IHJ0bDtcXG59XFxuLnJjLXRhYnMtZHJvcGRvd24tcnRsIHtcXG4gIGRpcmVjdGlvbjogcnRsO1xcbn1cXG4ucmMtdGFicyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLnJjLXRhYnMtbmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiBub25lO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ucmMtdGFicy1uYXYtbWVhc3VyZSxcXG4ucmMtdGFicy1uYXYtd3JhcCB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZsZXg6IGF1dG87XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5yYy10YWJzLW5hdi1tZWFzdXJlLXBpbmctbGVmdDo6YmVmb3JlLFxcbi5yYy10YWJzLW5hdi13cmFwLXBpbmctbGVmdDo6YmVmb3JlLFxcbi5yYy10YWJzLW5hdi1tZWFzdXJlLXBpbmctcmlnaHQ6OmFmdGVyLFxcbi5yYy10YWJzLW5hdi13cmFwLXBpbmctcmlnaHQ6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbn1cXG4ucmMtdGFicy1uYXYtbWVhc3VyZS1waW5nLWxlZnQ6OmJlZm9yZSxcXG4ucmMtdGFicy1uYXYtd3JhcC1waW5nLWxlZnQ6OmJlZm9yZSB7XFxuICBsZWZ0OiAwO1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZWQ7XFxufVxcbi5yYy10YWJzLW5hdi1tZWFzdXJlLXBpbmctcmlnaHQ6OmFmdGVyLFxcbi5yYy10YWJzLW5hdi13cmFwLXBpbmctcmlnaHQ6OmFmdGVyIHtcXG4gIHJpZ2h0OiAwO1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmVkO1xcbn1cXG4ucmMtdGFicy1uYXYtbWVhc3VyZS1waW5nLXRvcDo6YmVmb3JlLFxcbi5yYy10YWJzLW5hdi13cmFwLXBpbmctdG9wOjpiZWZvcmUsXFxuLnJjLXRhYnMtbmF2LW1lYXN1cmUtcGluZy1ib3R0b206OmFmdGVyLFxcbi5yYy10YWJzLW5hdi13cmFwLXBpbmctYm90dG9tOjphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG59XFxuLnJjLXRhYnMtbmF2LW1lYXN1cmUtcGluZy10b3A6OmJlZm9yZSxcXG4ucmMtdGFicy1uYXYtd3JhcC1waW5nLXRvcDo6YmVmb3JlIHtcXG4gIHRvcDogMDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZWQ7XFxufVxcbi5yYy10YWJzLW5hdi1tZWFzdXJlLXBpbmctYm90dG9tOjphZnRlcixcXG4ucmMtdGFicy1uYXYtd3JhcC1waW5nLWJvdHRvbTo6YWZ0ZXIge1xcbiAgYm90dG9tOiAwO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJlZDtcXG59XFxuLnJjLXRhYnMtbmF2LWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xcbn1cXG4ucmMtdGFicy1uYXYtb3BlcmF0aW9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4ucmMtdGFicy1uYXYtb3BlcmF0aW9ucy1oaWRkZW4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbi5yYy10YWJzLW5hdi1tb3JlIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMCwgMCwgMC4xKTtcXG59XFxuLnJjLXRhYnMtbmF2LWFkZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMjU1LCAwLCAwLjEpO1xcbn1cXG4ucmMtdGFicy10YWIge1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbiAgbWFyZ2luOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmb250LXdlaWdodDogbGlnaHRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5yYy10YWJzLXRhYi1idG4sXFxuLnJjLXRhYnMtdGFiLXJlbW92ZSB7XFxuICBib3JkZXI6IDA7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG59XFxuLnJjLXRhYnMtdGFiLWJ0biB7XFxuICBmb250LXdlaWdodDogaW5oZXJpdDtcXG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xcbn1cXG4ucmMtdGFicy10YWItcmVtb3ZlOmhvdmVyIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcbi5yYy10YWJzLXRhYi1hY3RpdmUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuLnJjLXRhYnMtaW5rLWJhciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kOiByZWQ7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuLnJjLXRhYnMtaW5rLWJhci1hbmltYXRlZCB7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG59XFxuLnJjLXRhYnMtZXh0cmEtY29udGVudCB7XFxuICBmbGV4OiBub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKipcXG4gKiBTd2lwZXIgNi44LjRcXG4gKiBNb3N0IG1vZGVybiBtb2JpbGUgdG91Y2ggc2xpZGVyIGFuZCBmcmFtZXdvcmsgd2l0aCBoYXJkd2FyZSBhY2NlbGVyYXRlZCB0cmFuc2l0aW9uc1xcbiAqIGh0dHBzOi8vc3dpcGVyanMuY29tXFxuICpcXG4gKiBDb3B5cmlnaHQgMjAxNC0yMDIxIFZsYWRpbWlyIEtoYXJsYW1waWRpXFxuICpcXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2VcXG4gKlxcbiAqIFJlbGVhc2VkIG9uOiBBdWd1c3QgMjMsIDIwMjFcXG4gKi9cXG5cXG5AZm9udC1mYWNle2ZvbnQtZmFtaWx5OnN3aXBlci1pY29ucztzcmM6dXJsKCdkYXRhOmFwcGxpY2F0aW9uL2ZvbnQtd29mZjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwgZDA5R1JnQUJBQUFBQUFaZ0FCQUFBQUFBREFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUJHUmxSTkFBQUdSQUFBQUJvQUFBQWNpNnFIa1VkRVJVWUFBQVdnQUFBQUl3QUFBQ1FBWUFCWFIxQlBVd0FBQmhRQUFBQXVBQUFBTnVBWTcreEhVMVZDQUFBRnhBQUFBRkFBQUFCbTJmUGN6VTlUTHpJQUFBSGNBQUFBU2dBQUFHQlA5VjVSWTIxaGNBQUFBa1FBQUFDSUFBQUJZdDZGMGNCamRuUWdBQUFDekFBQUFBUUFBQUFFQUJFQlJHZGhjM0FBQUFXWUFBQUFDQUFBQUFqLy93QURaMng1WmdBQUF5d0FBQURNQUFBRDJNSHRyeVZvWldGa0FBQUJiQUFBQURBQUFBQTJFMitlb1dob1pXRUFBQUdjQUFBQUh3QUFBQ1FDOWdEemFHMTBlQUFBQWlnQUFBQVpBQUFBcmdKa0FCRnNiMk5oQUFBQzBBQUFBRm9BQUFCYUZRQVVHRzFoZUhBQUFBRzhBQUFBSHdBQUFDQUFjQUJBYm1GdFpRQUFBL2dBQUFFNUFBQUNYdkZkQndsd2IzTjBBQUFGTkFBQUFHSUFBQUNFNXM3NGhYamFZMkJrWUdBQVlwZjVIdS9qK1cyK01uQXpNWURBemFYNlFqRDYvNC8vQnhqNUdBOEF1UndNWUdrQVB5d0wxM2phWTJCa1lHQTg4UDhBZ3g0aisvOGZRRFlmQTFBRUJXZ0RBSUIyQk9vQWVOcGpZR1JnWU5CaDRHZGdZZ0FCRU1uSUFCSnpZTkFEQ1FBQUNXZ0FzUUI0Mm1OZ1lmekNPSUdCbFlHQjBZY3hqWUdCd1IxS2YyV1FaR2hoWUdCaVlHVm1nQUZHQmlRUWtPYWF3dERBb01CUXhYamcvd0VHUGNZRERBNHdOVUEyQ0Nnd3NBQUFPNEVMNmdBQWVOcGoyTTBneUFBQ3F4Z0dOV0JrWjJENC93TUEreGtEZGdBQUFIamFZMkJnWUdhQVlCa0dSZ1lRaUFIeUdNRjhGZ1lISU0zRHdNSEFCR1FyTU9neVdETEVNMVQ5L3c4VUJmRU1nTHpFLy8vL1AvNS8vZi9WL3h2K3I0ZWFBQWVNYkF4d0lVWW1JTUhFZ0tZQVlqVWNzREF3c0xLeGMzQnljZlB3OGpFUUEvZ1pCQVNGaEVWRXhjUWxKS1drWldUbDVCVVVsWlJWVk5YVU5UUVpCZ01BQU1SK0UrZ0FFUUZFQUFBQUtnQXFBQ29BTkFBK0FFZ0FVZ0JjQUdZQWNBQjZBSVFBamdDWUFLSUFyQUMyQU1BQXlnRFVBTjRBNkFEeUFQd0JCZ0VRQVJvQkpBRXVBVGdCUWdGTUFWWUJZQUZxQVhRQmZnR0lBWklCbkFHbUFiSUJ6Z0hzQUFCNDJ1Mk5NUTZDVUF5R1c1Njh4OUFuZVlZZ200TUpiaEtGYUV4SU9BVlg4QXBld1N0NEJpYzRBZmVBaWQzVk9CaXhEeGZQWUV6YTVPK1hmaTA0WUFEZ2dpVUlVTEN1RUpLOFZoTzRiU3ZwZG5rdEhJNVFDWXRkaTJzbDhablhhSGxxVXJOS3pkS2NUOGNqbHErcndaU3ZJVmN6TmllenNmblAvdXpubWZQRkJOT0RNMks3TVRRNDVZRUFacUdQODFBbUdHY0YzaVBxT29wMHIxU1BUYVRiVmtmVWU0SFhqOTd3WUUreU53V1l4d1d1NHYxdWdXSGdvM1MxWGRaRVZxV003RVQwY2ZuTEd4V2ZrZ1I0Mm8yUHZXckRNQlNGai9JSExhRjB6S2pSZ2RpVk13U2NOUkFvV1VvSDc4WTJpY0IveUlZMDlBbjZBSDJCZHUvVUIreXhvcFlzaFFpRXZudnUwZFVSZ0R0OFFlQzhQRHc3RnBqaTNmRUE0ei9QRUo2WU9CNWhLaDRkajNFdlhoeFBxSC9TS1VZM3JKN3NyWjRGWm5oMVBNQXRQaHdQNmZsMlBNSk1QRGdlUTRyWThZVDZHemFvMGVBRUE0MDlEdWdnbVRuRm5PY1NDaUVpTE1neENpVEk2Q3E1RFpVZDNRbXAxMHZPMExhTFRkMmNqTjRmT3VtbGM3bFVZYlNRY1pGa3V0Ukc3ZzZKS1pLeTBSbWRMWTY4MENEbkVKK1VNa3BGRmUxUk43bnhkVnBYckM0YVR0bmF1ck9uWWVyY1pnMllWbUxOL2QvZ2N6ZkVpbXJFL2ZzL2JPdXEyOVptbjh0bG9PUmFYZ1pnR2E3OHlPOS9jblhtMkJwYUd2cTI1RHY5UzRFOSs1U0ljOVBxdXBKS2hZRlNTbDQ3K1FjcjFtWU5BQUFBZU5wdHcwY0t3a0FBQU1EWkpBOFE3T1VKdmtMc1BmWjZ6RlZFUlB5OHFIaDJZRVIrM2kvQlA4M3ZJQkxMeVNzb0tpbXJxS3FwYTJocDYranE2UnNZR2htYm1KcVpTeTBzcmF4dGJPM3NIUnlkbkVNVTR1UjZ5eDdKSlh2ZVA3V3JEeWNBQUFBQUFBSC8vd0FDZU5wallHUmdZT0FCWWhrZ1pnSkNaZ1pOQmtZR0xRWnRJSnNGTE1ZQUFBdzNBTGdBZU5vbGl6RUtnREFRQkNjaFJiQzJzRkVSMFlENnFWUWlCQ3YvSDllekdJNlo1WEJBdzhDQksvbTVpUVFWYXVWYlhMbk9yTVp2Mm9MZEtGYThQanVydTJoSnpHYWJtT1NMek5NenZ1dHBCM040Mm1OZ1pHQmc0R0tRWXpCaFlNeEpMTWxqNEdCZ0FZb3cvUC9QQUpKaExNNnNTb1dLZldDQUF3REFqZ2JSQUFCNDJtTmdZR0JrQUlJYkNabzVJUHJtVW4waEdBMEFPOEVGVFFBQScpIGZvcm1hdCgnd29mZicpO2ZvbnQtd2VpZ2h0OjQwMDtmb250LXN0eWxlOm5vcm1hbH06cm9vdHstLXN3aXBlci10aGVtZS1jb2xvcjojMDA3YWZmfS5zd2lwZXItY29udGFpbmVye21hcmdpbi1sZWZ0OmF1dG87bWFyZ2luLXJpZ2h0OmF1dG87cG9zaXRpb246cmVsYXRpdmU7b3ZlcmZsb3c6aGlkZGVuO2xpc3Qtc3R5bGU6bm9uZTtwYWRkaW5nOjA7ei1pbmRleDoxfS5zd2lwZXItY29udGFpbmVyLXZlcnRpY2FsPi5zd2lwZXItd3JhcHBlcnstd2Via2l0LWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW59LnN3aXBlci13cmFwcGVye3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7ei1pbmRleDoxO2Rpc3BsYXk6LXdlYmtpdC1mbGV4O2Rpc3BsYXk6ZmxleDstd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6LXdlYmtpdC10cmFuc2Zvcm07dHJhbnNpdGlvbi1wcm9wZXJ0eTotd2Via2l0LXRyYW5zZm9ybTt0cmFuc2l0aW9uLXByb3BlcnR5OnRyYW5zZm9ybTt0cmFuc2l0aW9uLXByb3BlcnR5OnRyYW5zZm9ybSwgLXdlYmtpdC10cmFuc2Zvcm07LXdlYmtpdC1ib3gtc2l6aW5nOmNvbnRlbnQtYm94Oy1tb3otYm94LXNpemluZzpjb250ZW50LWJveDtib3gtc2l6aW5nOmNvbnRlbnQtYm94fS5zd2lwZXItY29udGFpbmVyLWFuZHJvaWQgLnN3aXBlci1zbGlkZSwuc3dpcGVyLXdyYXBwZXJ7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMHB4LDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDBweCwwLDApfS5zd2lwZXItY29udGFpbmVyLW11bHRpcm93Pi5zd2lwZXItd3JhcHBlcnstd2Via2l0LWZsZXgtd3JhcDp3cmFwO2ZsZXgtd3JhcDp3cmFwfS5zd2lwZXItY29udGFpbmVyLW11bHRpcm93LWNvbHVtbj4uc3dpcGVyLXdyYXBwZXJ7LXdlYmtpdC1mbGV4LXdyYXA6d3JhcDtmbGV4LXdyYXA6d3JhcDstd2Via2l0LWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW59LnN3aXBlci1jb250YWluZXItZnJlZS1tb2RlPi5zd2lwZXItd3JhcHBlcnstd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2Utb3V0O3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2Utb3V0O21hcmdpbjowIGF1dG99LnN3aXBlci1jb250YWluZXItcG9pbnRlci1ldmVudHN7dG91Y2gtYWN0aW9uOnBhbi15fS5zd2lwZXItY29udGFpbmVyLXBvaW50ZXItZXZlbnRzLnN3aXBlci1jb250YWluZXItdmVydGljYWx7dG91Y2gtYWN0aW9uOnBhbi14fS5zd2lwZXItc2xpZGV7LXdlYmtpdC1mbGV4LXNocmluazowO2ZsZXgtc2hyaW5rOjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtwb3NpdGlvbjpyZWxhdGl2ZTstd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6LXdlYmtpdC10cmFuc2Zvcm07dHJhbnNpdGlvbi1wcm9wZXJ0eTotd2Via2l0LXRyYW5zZm9ybTt0cmFuc2l0aW9uLXByb3BlcnR5OnRyYW5zZm9ybTt0cmFuc2l0aW9uLXByb3BlcnR5OnRyYW5zZm9ybSwgLXdlYmtpdC10cmFuc2Zvcm19LnN3aXBlci1zbGlkZS1pbnZpc2libGUtYmxhbmt7dmlzaWJpbGl0eTpoaWRkZW59LnN3aXBlci1jb250YWluZXItYXV0b2hlaWdodCwuc3dpcGVyLWNvbnRhaW5lci1hdXRvaGVpZ2h0IC5zd2lwZXItc2xpZGV7aGVpZ2h0OmF1dG99LnN3aXBlci1jb250YWluZXItYXV0b2hlaWdodCAuc3dpcGVyLXdyYXBwZXJ7LXdlYmtpdC1hbGlnbi1pdGVtczpmbGV4LXN0YXJ0O2FsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7LXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OmhlaWdodCwtd2Via2l0LXRyYW5zZm9ybTt0cmFuc2l0aW9uLXByb3BlcnR5OmhlaWdodCwtd2Via2l0LXRyYW5zZm9ybTt0cmFuc2l0aW9uLXByb3BlcnR5OnRyYW5zZm9ybSxoZWlnaHQ7dHJhbnNpdGlvbi1wcm9wZXJ0eTp0cmFuc2Zvcm0saGVpZ2h0LC13ZWJraXQtdHJhbnNmb3JtfS5zd2lwZXItY29udGFpbmVyLTNkey13ZWJraXQtcGVyc3BlY3RpdmU6MTIwMHB4O3BlcnNwZWN0aXZlOjEyMDBweH0uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLWN1YmUtc2hhZG93LC5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUsLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tLC5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnQsLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQsLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9wLC5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItd3JhcHBlcnstd2Via2l0LXRyYW5zZm9ybS1zdHlsZTpwcmVzZXJ2ZS0zZDt0cmFuc2Zvcm0tc3R5bGU6cHJlc2VydmUtM2R9LnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tLC5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnQsLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQsLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9we3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDt0b3A6MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3BvaW50ZXItZXZlbnRzOm5vbmU7ei1pbmRleDoxMH0uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0e2JhY2tncm91bmQtaW1hZ2U6LXdlYmtpdC1ncmFkaWVudChsaW5lYXIscmlnaHQgdG9wLCBsZWZ0IHRvcCxmcm9tKHJnYmEoMCwwLDAsLjUpKSx0byhyZ2JhKDAsMCwwLDApKSk7YmFja2dyb3VuZC1pbWFnZTotd2Via2l0LWxpbmVhci1ncmFkaWVudChyaWdodCxyZ2JhKDAsMCwwLC41KSxyZ2JhKDAsMCwwLDApKTtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0byBsZWZ0LHJnYmEoMCwwLDAsLjUpLHJnYmEoMCwwLDAsMCkpfS5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0e2JhY2tncm91bmQtaW1hZ2U6LXdlYmtpdC1ncmFkaWVudChsaW5lYXIsbGVmdCB0b3AsIHJpZ2h0IHRvcCxmcm9tKHJnYmEoMCwwLDAsLjUpKSx0byhyZ2JhKDAsMCwwLDApKSk7YmFja2dyb3VuZC1pbWFnZTotd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LHJnYmEoMCwwLDAsLjUpLHJnYmEoMCwwLDAsMCkpO2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LHJnYmEoMCwwLDAsLjUpLHJnYmEoMCwwLDAsMCkpfS5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LXRvcHtiYWNrZ3JvdW5kLWltYWdlOi13ZWJraXQtZ3JhZGllbnQobGluZWFyLGxlZnQgYm90dG9tLCBsZWZ0IHRvcCxmcm9tKHJnYmEoMCwwLDAsLjUpKSx0byhyZ2JhKDAsMCwwLDApKSk7YmFja2dyb3VuZC1pbWFnZTotd2Via2l0LWxpbmVhci1ncmFkaWVudChib3R0b20scmdiYSgwLDAsMCwuNSkscmdiYSgwLDAsMCwwKSk7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQodG8gdG9wLHJnYmEoMCwwLDAsLjUpLHJnYmEoMCwwLDAsMCkpfS5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbXtiYWNrZ3JvdW5kLWltYWdlOi13ZWJraXQtZ3JhZGllbnQobGluZWFyLGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSxmcm9tKHJnYmEoMCwwLDAsLjUpKSx0byhyZ2JhKDAsMCwwLDApKSk7YmFja2dyb3VuZC1pbWFnZTotd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AscmdiYSgwLDAsMCwuNSkscmdiYSgwLDAsMCwwKSk7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLHJnYmEoMCwwLDAsLjUpLHJnYmEoMCwwLDAsMCkpfS5zd2lwZXItY29udGFpbmVyLWNzcy1tb2RlPi5zd2lwZXItd3JhcHBlcntvdmVyZmxvdzphdXRvO3Njcm9sbGJhci13aWR0aDpub25lOy1tcy1vdmVyZmxvdy1zdHlsZTpub25lfS5zd2lwZXItY29udGFpbmVyLWNzcy1tb2RlPi5zd2lwZXItd3JhcHBlcjo6LXdlYmtpdC1zY3JvbGxiYXJ7ZGlzcGxheTpub25lfS5zd2lwZXItY29udGFpbmVyLWNzcy1tb2RlPi5zd2lwZXItd3JhcHBlcj4uc3dpcGVyLXNsaWRle3Njcm9sbC1zbmFwLWFsaWduOnN0YXJ0IHN0YXJ0fS5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWwuc3dpcGVyLWNvbnRhaW5lci1jc3MtbW9kZT4uc3dpcGVyLXdyYXBwZXJ7LW1zLXNjcm9sbC1zbmFwLXR5cGU6eCBtYW5kYXRvcnk7c2Nyb2xsLXNuYXAtdHlwZTp4IG1hbmRhdG9yeX0uc3dpcGVyLWNvbnRhaW5lci12ZXJ0aWNhbC5zd2lwZXItY29udGFpbmVyLWNzcy1tb2RlPi5zd2lwZXItd3JhcHBlcnstbXMtc2Nyb2xsLXNuYXAtdHlwZTp5IG1hbmRhdG9yeTtzY3JvbGwtc25hcC10eXBlOnkgbWFuZGF0b3J5fTpyb290ey0tc3dpcGVyLW5hdmlnYXRpb24tc2l6ZTo0NHB4fS5zd2lwZXItYnV0dG9uLW5leHQsLnN3aXBlci1idXR0b24tcHJldntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NTAlO3dpZHRoOi13ZWJraXQtY2FsYyh2YXIoLS1zd2lwZXItbmF2aWdhdGlvbi1zaXplKS8gNDQgKiAyNyk7d2lkdGg6Y2FsYyh2YXIoLS1zd2lwZXItbmF2aWdhdGlvbi1zaXplKS8gNDQgKiAyNyk7aGVpZ2h0OnZhcigtLXN3aXBlci1uYXZpZ2F0aW9uLXNpemUpO21hcmdpbi10b3A6LXdlYmtpdC1jYWxjKDBweCAtICh2YXIoLS1zd2lwZXItbmF2aWdhdGlvbi1zaXplKS8gMikpO21hcmdpbi10b3A6Y2FsYygwcHggLSAodmFyKC0tc3dpcGVyLW5hdmlnYXRpb24tc2l6ZSkvIDIpKTt6LWluZGV4OjEwO2N1cnNvcjpwb2ludGVyO2Rpc3BsYXk6LXdlYmtpdC1mbGV4O2Rpc3BsYXk6ZmxleDstd2Via2l0LWFsaWduLWl0ZW1zOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7Y29sb3I6dmFyKC0tc3dpcGVyLW5hdmlnYXRpb24tY29sb3IsdmFyKC0tc3dpcGVyLXRoZW1lLWNvbG9yKSl9LnN3aXBlci1idXR0b24tbmV4dC5zd2lwZXItYnV0dG9uLWRpc2FibGVkLC5zd2lwZXItYnV0dG9uLXByZXYuc3dpcGVyLWJ1dHRvbi1kaXNhYmxlZHtvcGFjaXR5Oi4zNTtjdXJzb3I6YXV0bztwb2ludGVyLWV2ZW50czpub25lfS5zd2lwZXItYnV0dG9uLW5leHQ6YWZ0ZXIsLnN3aXBlci1idXR0b24tcHJldjphZnRlcntmb250LWZhbWlseTpzd2lwZXItaWNvbnM7Zm9udC1zaXplOnZhcigtLXN3aXBlci1uYXZpZ2F0aW9uLXNpemUpO3RleHQtdHJhbnNmb3JtOm5vbmUhaW1wb3J0YW50O2xldHRlci1zcGFjaW5nOjA7dGV4dC10cmFuc2Zvcm06bm9uZTstd2Via2l0LWZvbnQtZmVhdHVyZS1zZXR0aW5nczpub3JtYWwsIDstbW96LWZvbnQtZmVhdHVyZS1zZXR0aW5nczpub3JtYWwsIDtmb250LWZlYXR1cmUtc2V0dGluZ3M6bm9ybWFsLCA7Zm9udC12YXJpYW50Om5vcm1hbDtmb250LXZhcmlhbnQ6aW5pdGlhbDtsaW5lLWhlaWdodDoxfS5zd2lwZXItYnV0dG9uLXByZXYsLnN3aXBlci1jb250YWluZXItcnRsIC5zd2lwZXItYnV0dG9uLW5leHR7bGVmdDoxMHB4O3JpZ2h0OmF1dG99LnN3aXBlci1idXR0b24tcHJldjphZnRlciwuc3dpcGVyLWNvbnRhaW5lci1ydGwgLnN3aXBlci1idXR0b24tbmV4dDphZnRlcntjb250ZW50OidwcmV2J30uc3dpcGVyLWJ1dHRvbi1uZXh0LC5zd2lwZXItY29udGFpbmVyLXJ0bCAuc3dpcGVyLWJ1dHRvbi1wcmV2e3JpZ2h0OjEwcHg7bGVmdDphdXRvfS5zd2lwZXItYnV0dG9uLW5leHQ6YWZ0ZXIsLnN3aXBlci1jb250YWluZXItcnRsIC5zd2lwZXItYnV0dG9uLXByZXY6YWZ0ZXJ7Y29udGVudDonbmV4dCd9LnN3aXBlci1idXR0b24tbmV4dC5zd2lwZXItYnV0dG9uLXdoaXRlLC5zd2lwZXItYnV0dG9uLXByZXYuc3dpcGVyLWJ1dHRvbi13aGl0ZXstLXN3aXBlci1uYXZpZ2F0aW9uLWNvbG9yOiNmZmZmZmZ9LnN3aXBlci1idXR0b24tbmV4dC5zd2lwZXItYnV0dG9uLWJsYWNrLC5zd2lwZXItYnV0dG9uLXByZXYuc3dpcGVyLWJ1dHRvbi1ibGFja3stLXN3aXBlci1uYXZpZ2F0aW9uLWNvbG9yOiMwMDAwMDB9LnN3aXBlci1idXR0b24tbG9ja3tkaXNwbGF5Om5vbmV9LnN3aXBlci1wYWdpbmF0aW9ue3Bvc2l0aW9uOmFic29sdXRlO3RleHQtYWxpZ246Y2VudGVyOy13ZWJraXQtdHJhbnNpdGlvbjouM3Mgb3BhY2l0eTt0cmFuc2l0aW9uOi4zcyBvcGFjaXR5Oy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO3otaW5kZXg6MTB9LnN3aXBlci1wYWdpbmF0aW9uLnN3aXBlci1wYWdpbmF0aW9uLWhpZGRlbntvcGFjaXR5OjB9LnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbD4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cywuc3dpcGVyLXBhZ2luYXRpb24tY3VzdG9tLC5zd2lwZXItcGFnaW5hdGlvbi1mcmFjdGlvbntib3R0b206MTBweDtsZWZ0OjA7d2lkdGg6MTAwJX0uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWlje292ZXJmbG93OmhpZGRlbjtmb250LXNpemU6MH0uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXR7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjMzKTt0cmFuc2Zvcm06c2NhbGUoLjMzKTtwb3NpdGlvbjpyZWxhdGl2ZX0uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX0uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlLW1haW57LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfS5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUtcHJldnstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNjYpO3RyYW5zZm9ybTpzY2FsZSguNjYpfS5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUtcHJldi1wcmV2ey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC4zMyk7dHJhbnNmb3JtOnNjYWxlKC4zMyl9LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZS1uZXh0ey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC42Nik7dHJhbnNmb3JtOnNjYWxlKC42Nil9LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZS1uZXh0LW5leHR7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjMzKTt0cmFuc2Zvcm06c2NhbGUoLjMzKX0uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0e3dpZHRoOjhweDtoZWlnaHQ6OHB4O2Rpc3BsYXk6aW5saW5lLWJsb2NrO2JvcmRlci1yYWRpdXM6NTAlO2JhY2tncm91bmQ6IzAwMDtvcGFjaXR5Oi4yfWJ1dHRvbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXR7Ym9yZGVyOm5vbmU7bWFyZ2luOjA7cGFkZGluZzowOy13ZWJraXQtYm94LXNoYWRvdzpub25lO2JveC1zaGFkb3c6bm9uZTstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstbW96LWFwcGVhcmFuY2U6bm9uZTthcHBlYXJhbmNlOm5vbmV9LnN3aXBlci1wYWdpbmF0aW9uLWNsaWNrYWJsZSAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0e2N1cnNvcjpwb2ludGVyfS5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQ6b25seS1jaGlsZHtkaXNwbGF5Om5vbmUhaW1wb3J0YW50fS5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZle29wYWNpdHk6MTtiYWNrZ3JvdW5kOnZhcigtLXN3aXBlci1wYWdpbmF0aW9uLWNvbG9yLHZhcigtLXN3aXBlci10aGVtZS1jb2xvcikpfS5zd2lwZXItY29udGFpbmVyLXZlcnRpY2FsPi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRze3JpZ2h0OjEwcHg7dG9wOjUwJTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwcHgsLTUwJSwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMHB4LC01MCUsMCl9LnN3aXBlci1jb250YWluZXItdmVydGljYWw+LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHttYXJnaW46NnB4IDA7ZGlzcGxheTpibG9ja30uc3dpcGVyLWNvbnRhaW5lci12ZXJ0aWNhbD4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWN7dG9wOjUwJTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpO3dpZHRoOjhweH0uc3dpcGVyLWNvbnRhaW5lci12ZXJ0aWNhbD4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHtkaXNwbGF5OmlubGluZS1ibG9jazstd2Via2l0LXRyYW5zaXRpb246LjJzIHRyYW5zZm9ybSwuMnMgdG9wO3RyYW5zaXRpb246LjJzIHRyYW5zZm9ybSwuMnMgdG9wfS5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWw+LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHttYXJnaW46MCA0cHh9LnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbD4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWN7bGVmdDo1MCU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKTt3aGl0ZS1zcGFjZTpub3dyYXB9LnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbD4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHstd2Via2l0LXRyYW5zaXRpb246LjJzIHRyYW5zZm9ybSwuMnMgbGVmdDt0cmFuc2l0aW9uOi4ycyB0cmFuc2Zvcm0sLjJzIGxlZnR9LnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbC5zd2lwZXItY29udGFpbmVyLXJ0bD4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXR7LXdlYmtpdC10cmFuc2l0aW9uOi4ycyB0cmFuc2Zvcm0sLjJzIHJpZ2h0O3RyYW5zaXRpb246LjJzIHRyYW5zZm9ybSwuMnMgcmlnaHR9LnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFye2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMjUpO3Bvc2l0aW9uOmFic29sdXRlfS5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2JhciAuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXItZmlsbHtiYWNrZ3JvdW5kOnZhcigtLXN3aXBlci1wYWdpbmF0aW9uLWNvbG9yLHZhcigtLXN3aXBlci10aGVtZS1jb2xvcikpO3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDt0b3A6MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDApO3RyYW5zZm9ybTpzY2FsZSgwKTstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46bGVmdCB0b3A7dHJhbnNmb3JtLW9yaWdpbjpsZWZ0IHRvcH0uc3dpcGVyLWNvbnRhaW5lci1ydGwgLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyIC5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci1maWxsey13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpyaWdodCB0b3A7dHJhbnNmb3JtLW9yaWdpbjpyaWdodCB0b3B9LnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbD4uc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXIsLnN3aXBlci1jb250YWluZXItdmVydGljYWw+LnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLW9wcG9zaXRle3dpZHRoOjEwMCU7aGVpZ2h0OjRweDtsZWZ0OjA7dG9wOjB9LnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbD4uc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXIuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXItb3Bwb3NpdGUsLnN3aXBlci1jb250YWluZXItdmVydGljYWw+LnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFye3dpZHRoOjRweDtoZWlnaHQ6MTAwJTtsZWZ0OjA7dG9wOjB9LnN3aXBlci1wYWdpbmF0aW9uLXdoaXRley0tc3dpcGVyLXBhZ2luYXRpb24tY29sb3I6I2ZmZmZmZn0uc3dpcGVyLXBhZ2luYXRpb24tYmxhY2t7LS1zd2lwZXItcGFnaW5hdGlvbi1jb2xvcjojMDAwMDAwfS5zd2lwZXItcGFnaW5hdGlvbi1sb2Nre2Rpc3BsYXk6bm9uZX0uc3dpcGVyLXNjcm9sbGJhcntib3JkZXItcmFkaXVzOjEwcHg7cG9zaXRpb246cmVsYXRpdmU7LW1zLXRvdWNoLWFjdGlvbjpub25lO2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMSl9LnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbD4uc3dpcGVyLXNjcm9sbGJhcntwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjElO2JvdHRvbTozcHg7ei1pbmRleDo1MDtoZWlnaHQ6NXB4O3dpZHRoOjk4JX0uc3dpcGVyLWNvbnRhaW5lci12ZXJ0aWNhbD4uc3dpcGVyLXNjcm9sbGJhcntwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDozcHg7dG9wOjElO3otaW5kZXg6NTA7d2lkdGg6NXB4O2hlaWdodDo5OCV9LnN3aXBlci1zY3JvbGxiYXItZHJhZ3toZWlnaHQ6MTAwJTt3aWR0aDoxMDAlO3Bvc2l0aW9uOnJlbGF0aXZlO2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuNSk7Ym9yZGVyLXJhZGl1czoxMHB4O2xlZnQ6MDt0b3A6MH0uc3dpcGVyLXNjcm9sbGJhci1jdXJzb3ItZHJhZ3tjdXJzb3I6bW92ZX0uc3dpcGVyLXNjcm9sbGJhci1sb2Nre2Rpc3BsYXk6bm9uZX0uc3dpcGVyLXpvb20tY29udGFpbmVye3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7ZGlzcGxheTotd2Via2l0LWZsZXg7ZGlzcGxheTpmbGV4Oy13ZWJraXQtanVzdGlmeS1jb250ZW50OmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOy13ZWJraXQtYWxpZ24taXRlbXM6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjt0ZXh0LWFsaWduOmNlbnRlcn0uc3dpcGVyLXpvb20tY29udGFpbmVyPmNhbnZhcywuc3dpcGVyLXpvb20tY29udGFpbmVyPmltZywuc3dpcGVyLXpvb20tY29udGFpbmVyPnN2Z3ttYXgtd2lkdGg6MTAwJTttYXgtaGVpZ2h0OjEwMCU7b2JqZWN0LWZpdDpjb250YWlufS5zd2lwZXItc2xpZGUtem9vbWVke2N1cnNvcjptb3ZlfS5zd2lwZXItbGF6eS1wcmVsb2FkZXJ7d2lkdGg6NDJweDtoZWlnaHQ6NDJweDtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjUwJTt0b3A6NTAlO21hcmdpbi1sZWZ0Oi0yMXB4O21hcmdpbi10b3A6LTIxcHg7ei1pbmRleDoxMDstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46NTAlO3RyYW5zZm9ybS1vcmlnaW46NTAlOy13ZWJraXQtYW5pbWF0aW9uOnN3aXBlci1wcmVsb2FkZXItc3BpbiAxcyBpbmZpbml0ZSBsaW5lYXI7YW5pbWF0aW9uOnN3aXBlci1wcmVsb2FkZXItc3BpbiAxcyBpbmZpbml0ZSBsaW5lYXI7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7LW1vei1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94O2JvcmRlcjo0cHggc29saWQgdmFyKC0tc3dpcGVyLXByZWxvYWRlci1jb2xvcix2YXIoLS1zd2lwZXItdGhlbWUtY29sb3IpKTtib3JkZXItcmFkaXVzOjUwJTtib3JkZXItdG9wLWNvbG9yOnRyYW5zcGFyZW50fS5zd2lwZXItbGF6eS1wcmVsb2FkZXItd2hpdGV7LS1zd2lwZXItcHJlbG9hZGVyLWNvbG9yOiNmZmZ9LnN3aXBlci1sYXp5LXByZWxvYWRlci1ibGFja3stLXN3aXBlci1wcmVsb2FkZXItY29sb3I6IzAwMH1ALXdlYmtpdC1rZXlmcmFtZXMgc3dpcGVyLXByZWxvYWRlci1zcGluezEwMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX1Aa2V5ZnJhbWVzIHN3aXBlci1wcmVsb2FkZXItc3BpbnsxMDAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKX19LnN3aXBlci1jb250YWluZXIgLnN3aXBlci1ub3RpZmljYXRpb257cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO3RvcDowO3BvaW50ZXItZXZlbnRzOm5vbmU7b3BhY2l0eTowO3otaW5kZXg6LTEwMDB9LnN3aXBlci1jb250YWluZXItZmFkZS5zd2lwZXItY29udGFpbmVyLWZyZWUtbW9kZSAuc3dpcGVyLXNsaWRley13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1vdXQ7dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1vdXR9LnN3aXBlci1jb250YWluZXItZmFkZSAuc3dpcGVyLXNsaWRle3BvaW50ZXItZXZlbnRzOm5vbmU7LXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5Om9wYWNpdHk7dHJhbnNpdGlvbi1wcm9wZXJ0eTpvcGFjaXR5fS5zd2lwZXItY29udGFpbmVyLWZhZGUgLnN3aXBlci1zbGlkZSAuc3dpcGVyLXNsaWRle3BvaW50ZXItZXZlbnRzOm5vbmV9LnN3aXBlci1jb250YWluZXItZmFkZSAuc3dpcGVyLXNsaWRlLWFjdGl2ZSwuc3dpcGVyLWNvbnRhaW5lci1mYWRlIC5zd2lwZXItc2xpZGUtYWN0aXZlIC5zd2lwZXItc2xpZGUtYWN0aXZle3BvaW50ZXItZXZlbnRzOmF1dG99LnN3aXBlci1jb250YWluZXItY3ViZXtvdmVyZmxvdzp2aXNpYmxlfS5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZXtwb2ludGVyLWV2ZW50czpub25lOy13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW47YmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW47ei1pbmRleDoxO3Zpc2liaWxpdHk6aGlkZGVuOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjowIDA7dHJhbnNmb3JtLW9yaWdpbjowIDA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJX0uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUgLnN3aXBlci1zbGlkZXtwb2ludGVyLWV2ZW50czpub25lfS5zd2lwZXItY29udGFpbmVyLWN1YmUuc3dpcGVyLWNvbnRhaW5lci1ydGwgLnN3aXBlci1zbGlkZXstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46MTAwJSAwO3RyYW5zZm9ybS1vcmlnaW46MTAwJSAwfS5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZS1hY3RpdmUsLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlLWFjdGl2ZSAuc3dpcGVyLXNsaWRlLWFjdGl2ZXtwb2ludGVyLWV2ZW50czphdXRvfS5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZS1hY3RpdmUsLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlLW5leHQsLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlLW5leHQrLnN3aXBlci1zbGlkZSwuc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtcHJldntwb2ludGVyLWV2ZW50czphdXRvO3Zpc2liaWxpdHk6dmlzaWJsZX0uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbSwuc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnQsLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCwuc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtc2hhZG93LXRvcHt6LWluZGV4OjA7LXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbjtiYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbn0uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItY3ViZS1zaGFkb3d7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO2JvdHRvbTowcHg7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtvcGFjaXR5Oi42O3otaW5kZXg6MH0uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItY3ViZS1zaGFkb3c6YmVmb3Jle2NvbnRlbnQ6Jyc7YmFja2dyb3VuZDojMDAwO3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDt0b3A6MDtib3R0b206MDtyaWdodDowOy13ZWJraXQtZmlsdGVyOmJsdXIoNTBweCk7ZmlsdGVyOmJsdXIoNTBweCl9LnN3aXBlci1jb250YWluZXItZmxpcHtvdmVyZmxvdzp2aXNpYmxlfS5zd2lwZXItY29udGFpbmVyLWZsaXAgLnN3aXBlci1zbGlkZXtwb2ludGVyLWV2ZW50czpub25lOy13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW47YmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW47ei1pbmRleDoxfS5zd2lwZXItY29udGFpbmVyLWZsaXAgLnN3aXBlci1zbGlkZSAuc3dpcGVyLXNsaWRle3BvaW50ZXItZXZlbnRzOm5vbmV9LnN3aXBlci1jb250YWluZXItZmxpcCAuc3dpcGVyLXNsaWRlLWFjdGl2ZSwuc3dpcGVyLWNvbnRhaW5lci1mbGlwIC5zd2lwZXItc2xpZGUtYWN0aXZlIC5zd2lwZXItc2xpZGUtYWN0aXZle3BvaW50ZXItZXZlbnRzOmF1dG99LnN3aXBlci1jb250YWluZXItZmxpcCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20sLnN3aXBlci1jb250YWluZXItZmxpcCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0LC5zd2lwZXItY29udGFpbmVyLWZsaXAgLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQsLnN3aXBlci1jb250YWluZXItZmxpcCAuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3B7ei1pbmRleDowOy13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW47YmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL25vZGVfbW9kdWxlcy9zd2lwZXIvc3dpcGVyLWJ1bmRsZS5taW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7Ozs7O0VBVUU7O0FBRUYsV0FBVyx3QkFBd0IsQ0FBQywyc0VBQTJzRSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLDRCQUE0QixDQUFDLGtCQUFrQixnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsMkNBQTJDLDZCQUFvQixDQUFwQixxQkFBcUIsQ0FBQyxnQkFBZ0IsaUJBQWlCLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsb0JBQVksQ0FBWixZQUFZLENBQUMsNkNBQTZCLENBQTdCLHFDQUE2QixDQUE3Qiw2QkFBNkIsQ0FBN0IsZ0RBQTZCLENBQUMsOEJBQXFC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QVMsQ0FBQyxhQUFhLENBQUMsZ0VBQWdFLDJDQUFrQyxDQUFsQyxtQ0FBbUMsQ0FBQyxxQ0FBcUMsbUJBQW1CLENBQUMsbUNBQTBCLENBQTFCLDJCQUEyQixDQUFDLG1EQUFtRCxtQkFBbUIsQ0FBQyw2R0FBNkcsbUJBQW1CLENBQUMsdUJBQXVCLGdCQUFnQixDQUFDLHFDQUFxQyxtQkFBbUIsQ0FBQyxrQ0FBa0MsQ0FBQywwQkFBMEIsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsNEJBQW9CLENBQXBCLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsbURBQW1ELG1CQUFtQixDQUFDLDBEQUEwRCwrQkFBc0IsQ0FBdEIsdUJBQXVCLENBQUMsNkdBQTZHLG1CQUFtQixDQUFDLHdMQUF3TCxtQkFBbUIsQ0FBQyxrQkFBa0IsQ0FBQyxzTUFBc00sU0FBUyxDQUFDLGtDQUFrQyxDQUFDLDBCQUEwQixDQUFDLDJDQUEyQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxrREFBa0QsVUFBVSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMseUJBQWdCLENBQWhCLGlCQUFpQixDQUFDLHVCQUF1QixnQkFBZ0IsQ0FBQyxxQ0FBcUMsbUJBQW1CLENBQUMsa0NBQWtDLENBQUMsMEJBQTBCLENBQUMsU0FBUyxDQUFDLG1EQUFtRCxtQkFBbUIsQ0FBQyw2R0FBNkcsbUJBQW1CLENBQUMsc01BQXNNLFNBQVMsQ0FBQyxrQ0FBa0MsQ0FBQywwQkFBMEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyoqXFxuICogU3dpcGVyIDYuOC40XFxuICogTW9zdCBtb2Rlcm4gbW9iaWxlIHRvdWNoIHNsaWRlciBhbmQgZnJhbWV3b3JrIHdpdGggaGFyZHdhcmUgYWNjZWxlcmF0ZWQgdHJhbnNpdGlvbnNcXG4gKiBodHRwczovL3N3aXBlcmpzLmNvbVxcbiAqXFxuICogQ29weXJpZ2h0IDIwMTQtMjAyMSBWbGFkaW1pciBLaGFybGFtcGlkaVxcbiAqXFxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlXFxuICpcXG4gKiBSZWxlYXNlZCBvbjogQXVndXN0IDIzLCAyMDIxXFxuICovXFxuXFxuQGZvbnQtZmFjZXtmb250LWZhbWlseTpzd2lwZXItaWNvbnM7c3JjOnVybCgnZGF0YTphcHBsaWNhdGlvbi9mb250LXdvZmY7Y2hhcnNldD11dGYtODtiYXNlNjQsIGQwOUdSZ0FCQUFBQUFBWmdBQkFBQUFBQURBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCR1JsUk5BQUFHUkFBQUFCb0FBQUFjaTZxSGtVZEVSVVlBQUFXZ0FBQUFJd0FBQUNRQVlBQlhSMUJQVXdBQUJoUUFBQUF1QUFBQU51QVk3K3hIVTFWQ0FBQUZ4QUFBQUZBQUFBQm0yZlBjelU5VEx6SUFBQUhjQUFBQVNnQUFBR0JQOVY1UlkyMWhjQUFBQWtRQUFBQ0lBQUFCWXQ2RjBjQmpkblFnQUFBQ3pBQUFBQVFBQUFBRUFCRUJSR2RoYzNBQUFBV1lBQUFBQ0FBQUFBai8vd0FEWjJ4NVpnQUFBeXdBQUFETUFBQUQyTUh0cnlWb1pXRmtBQUFCYkFBQUFEQUFBQUEyRTIrZW9XaG9aV0VBQUFHY0FBQUFId0FBQUNRQzlnRHphRzEwZUFBQUFpZ0FBQUFaQUFBQXJnSmtBQkZzYjJOaEFBQUMwQUFBQUZvQUFBQmFGUUFVR0cxaGVIQUFBQUc4QUFBQUh3QUFBQ0FBY0FCQWJtRnRaUUFBQS9nQUFBRTVBQUFDWHZGZEJ3bHdiM04wQUFBRk5BQUFBR0lBQUFDRTVzNzRoWGphWTJCa1lHQUFZcGY1SHUvaitXMitNbkF6TVlEQXphWDZRakQ2LzQvL0J4ajVHQThBdVJ3TVlHa0FQeXdMMTNqYVkyQmtZR0E4OFA4QWd4NGorLzhmUURZZkExQUVCV2dEQUlCMkJPb0FlTnBqWUdSZ1lOQmg0R2RnWWdBQkVNbklBQkp6WU5BRENRQUFDV2dBc1FCNDJtTmdZZnpDT0lHQmxZR0IwWWN4allHQndSMUtmMldRWkdoaFlHQmlZR1ZtZ0FGR0JpUVFrT2Fhd3REQW9NQlF4WGpnL3dFR1BjWUREQTR3TlVBMkNDZ3dzQUFBTzRFTDZnQUFlTnBqMk0wZ3lBQUNxeGdHTldCa1oyRDQvd01BK3hrRGRnQUFBSGphWTJCZ1lHYUFZQmtHUmdZUWlBSHlHTUY4RmdZSElNM0R3TUhBQkdRck1PZ3lXRExFTTFUOS93OFVCZkVNZ0x6RS8vLy9QLzUvL2YvVi94dityNGVhQUFlTWJBeHdJVVltSU1IRWdLWUFZalVjc0RBd3NMS3hjM0J5Y2ZQdzhqRVFBL2daQkFTRmhFVkV4Y1FsSktXa1pXVGw1QlVVbFpSVlZOWFVOVFFaQmdNQUFNUitFK2dBRVFGRUFBQUFLZ0FxQUNvQU5BQStBRWdBVWdCY0FHWUFjQUI2QUlRQWpnQ1lBS0lBckFDMkFNQUF5Z0RVQU40QTZBRHlBUHdCQmdFUUFSb0JKQUV1QVRnQlFnRk1BVllCWUFGcUFYUUJmZ0dJQVpJQm5BR21BYklCemdIc0FBQjQydTJOTVE2Q1VBeUdXNTY4eDlBbmVZWWdtNE1KYmhLRmFFeElPQVZYOEFwZXdTdDRCaWM0QWZlQWlkM1ZPQml4RHhmUFlFemE1TytYZmkwNFlBRGdnaVVJVUxDdUVKSzhWaE80YlN2cGRua3RISTVRQ1l0ZGkyc2w4Wm5YYUhscVVyTkt6ZEtjVDhjamxxK3J3WlN2SVZjek5pZXpzZm5QL3V6bm1mUEZCTk9ETTJLN01UUTQ1WUVBWnFHUDgxQW1HR2NGM2lQcU9vcDByMVNQVGFUYlZrZlVlNEhYajk3d1lFK3lOd1dZeHdXdTR2MXVnV0hnbzNTMVhkWkVWcVdNN0VUMGNmbkxHeFdma2dSNDJvMlB2V3JETUJTRmovSUhMYUYwektqUmdkaVZNd1NjTlJBb1dVb0g3OFkyaWNCL3lJWTA5QW42QUgyQmR1L1VCK3l4b3BZc2hRaUV2bnZ1MGRVUmdEdDhRZUM4UER3N0ZwamkzZkVBNHovUEVKNllPQjVoS2g0ZGozRXZYaHhQcUgvU0tVWTNySjdzclo0RlpuaDFQTUF0UGh3UDZmbDJQTUpNUERnZVE0clk4WVQ2R3phbzBlQUVBNDA5RHVnZ21UbkZuT2NTQ2lFaUxNZ3hDaVRJNkNxNURaVWQzUW1wMTB2TzBMYUxUZDJjak40Zk91bWxjN2xVWWJTUWNaRmt1dFJHN2c2SktaS3kwUm1kTFk2ODBDRG5FSitVTWtwRkZlMVJON254ZFZwWHJDNGFUdG5hdXJPblllcmNaZzJZVm1MTi9kL2djemZFaW1yRS9mcy9iT3VxMjlabW44dGxvT1JhWGdaZ0dhNzh5TzkvY25YbTJCcGFHdnEyNUR2OVM0RTkrNVNJYzlQcXVwSktoWUZTU2w0NytRY3IxbVlOQUFBQWVOcHR3MGNLd2tBQUFNRFpKQThRN09VSnZrTHNQZlo2ekZWRVJQeThxSGgyWUVSKzNpL0JQODN2SUJMTHlTc29LaW1ycUtxcGEyaHA2K2pxNlJzWUdobWJtSnFaU3kwc3JheHRiTzNzSFJ5ZG5FTVU0dVI2eXg3SkpYdmVQN1dyRHljQUFBQUFBQUgvL3dBQ2VOcGpZR1JnWU9BQlloa2daZ0pDWmdaTkJrWUdMUVp0SUpzRkxNWUFBQXczQUxnQWVOb2xpekVLZ0RBUUJDY2hSYkMyc0ZFUjBZRDZxVlFpQkN2L0g5ZXpHSTZaNVhCQXc4Q0JLL201aVFRVmF1VmJYTG5Pck1adjJvTGRLRmE4UGp1cnUyaEp6R2FibU9TTHpOTXp2dXRwQjNONDJtTmdaR0JnNEdLUVl6QmhZTXhKTE1sajRHQmdBWW93L1AvUEFKSmhMTTZzU29XS2ZXQ0FBd0RBamdiUkFBQjQybU5nWUdCa0FJSWJDWm81SVBybVVuMGhHQTBBTzhFRlRRQUEnKSBmb3JtYXQoJ3dvZmYnKTtmb250LXdlaWdodDo0MDA7Zm9udC1zdHlsZTpub3JtYWx9OnJvb3R7LS1zd2lwZXItdGhlbWUtY29sb3I6IzAwN2FmZn0uc3dpcGVyLWNvbnRhaW5lcnttYXJnaW4tbGVmdDphdXRvO21hcmdpbi1yaWdodDphdXRvO3Bvc2l0aW9uOnJlbGF0aXZlO292ZXJmbG93OmhpZGRlbjtsaXN0LXN0eWxlOm5vbmU7cGFkZGluZzowO3otaW5kZXg6MX0uc3dpcGVyLWNvbnRhaW5lci12ZXJ0aWNhbD4uc3dpcGVyLXdyYXBwZXJ7ZmxleC1kaXJlY3Rpb246Y29sdW1ufS5zd2lwZXItd3JhcHBlcntwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3otaW5kZXg6MTtkaXNwbGF5OmZsZXg7dHJhbnNpdGlvbi1wcm9wZXJ0eTp0cmFuc2Zvcm07Ym94LXNpemluZzpjb250ZW50LWJveH0uc3dpcGVyLWNvbnRhaW5lci1hbmRyb2lkIC5zd2lwZXItc2xpZGUsLnN3aXBlci13cmFwcGVye3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwcHgsMCwwKX0uc3dpcGVyLWNvbnRhaW5lci1tdWx0aXJvdz4uc3dpcGVyLXdyYXBwZXJ7ZmxleC13cmFwOndyYXB9LnN3aXBlci1jb250YWluZXItbXVsdGlyb3ctY29sdW1uPi5zd2lwZXItd3JhcHBlcntmbGV4LXdyYXA6d3JhcDtmbGV4LWRpcmVjdGlvbjpjb2x1bW59LnN3aXBlci1jb250YWluZXItZnJlZS1tb2RlPi5zd2lwZXItd3JhcHBlcnt0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dDttYXJnaW46MCBhdXRvfS5zd2lwZXItY29udGFpbmVyLXBvaW50ZXItZXZlbnRze3RvdWNoLWFjdGlvbjpwYW4teX0uc3dpcGVyLWNvbnRhaW5lci1wb2ludGVyLWV2ZW50cy5zd2lwZXItY29udGFpbmVyLXZlcnRpY2Fse3RvdWNoLWFjdGlvbjpwYW4teH0uc3dpcGVyLXNsaWRle2ZsZXgtc2hyaW5rOjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtwb3NpdGlvbjpyZWxhdGl2ZTt0cmFuc2l0aW9uLXByb3BlcnR5OnRyYW5zZm9ybX0uc3dpcGVyLXNsaWRlLWludmlzaWJsZS1ibGFua3t2aXNpYmlsaXR5OmhpZGRlbn0uc3dpcGVyLWNvbnRhaW5lci1hdXRvaGVpZ2h0LC5zd2lwZXItY29udGFpbmVyLWF1dG9oZWlnaHQgLnN3aXBlci1zbGlkZXtoZWlnaHQ6YXV0b30uc3dpcGVyLWNvbnRhaW5lci1hdXRvaGVpZ2h0IC5zd2lwZXItd3JhcHBlcnthbGlnbi1pdGVtczpmbGV4LXN0YXJ0O3RyYW5zaXRpb24tcHJvcGVydHk6dHJhbnNmb3JtLGhlaWdodH0uc3dpcGVyLWNvbnRhaW5lci0zZHtwZXJzcGVjdGl2ZToxMjAwcHh9LnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1jdWJlLXNoYWRvdywuc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLC5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbSwuc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0LC5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0LC5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LXRvcCwuc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXdyYXBwZXJ7dHJhbnNmb3JtLXN0eWxlOnByZXNlcnZlLTNkfS5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbSwuc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0LC5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0LC5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LXRvcHtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7dG9wOjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtwb2ludGVyLWV2ZW50czpub25lO3otaW5kZXg6MTB9LnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdHtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0byBsZWZ0LHJnYmEoMCwwLDAsLjUpLHJnYmEoMCwwLDAsMCkpfS5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0e2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LHJnYmEoMCwwLDAsLjUpLHJnYmEoMCwwLDAsMCkpfS5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LXRvcHtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0byB0b3AscmdiYSgwLDAsMCwuNSkscmdiYSgwLDAsMCwwKSl9LnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9te2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSxyZ2JhKDAsMCwwLC41KSxyZ2JhKDAsMCwwLDApKX0uc3dpcGVyLWNvbnRhaW5lci1jc3MtbW9kZT4uc3dpcGVyLXdyYXBwZXJ7b3ZlcmZsb3c6YXV0bztzY3JvbGxiYXItd2lkdGg6bm9uZTstbXMtb3ZlcmZsb3ctc3R5bGU6bm9uZX0uc3dpcGVyLWNvbnRhaW5lci1jc3MtbW9kZT4uc3dpcGVyLXdyYXBwZXI6Oi13ZWJraXQtc2Nyb2xsYmFye2Rpc3BsYXk6bm9uZX0uc3dpcGVyLWNvbnRhaW5lci1jc3MtbW9kZT4uc3dpcGVyLXdyYXBwZXI+LnN3aXBlci1zbGlkZXtzY3JvbGwtc25hcC1hbGlnbjpzdGFydCBzdGFydH0uc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsLnN3aXBlci1jb250YWluZXItY3NzLW1vZGU+LnN3aXBlci13cmFwcGVye3Njcm9sbC1zbmFwLXR5cGU6eCBtYW5kYXRvcnl9LnN3aXBlci1jb250YWluZXItdmVydGljYWwuc3dpcGVyLWNvbnRhaW5lci1jc3MtbW9kZT4uc3dpcGVyLXdyYXBwZXJ7c2Nyb2xsLXNuYXAtdHlwZTp5IG1hbmRhdG9yeX06cm9vdHstLXN3aXBlci1uYXZpZ2F0aW9uLXNpemU6NDRweH0uc3dpcGVyLWJ1dHRvbi1uZXh0LC5zd2lwZXItYnV0dG9uLXByZXZ7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTt3aWR0aDpjYWxjKHZhcigtLXN3aXBlci1uYXZpZ2F0aW9uLXNpemUpLyA0NCAqIDI3KTtoZWlnaHQ6dmFyKC0tc3dpcGVyLW5hdmlnYXRpb24tc2l6ZSk7bWFyZ2luLXRvcDpjYWxjKDBweCAtICh2YXIoLS1zd2lwZXItbmF2aWdhdGlvbi1zaXplKS8gMikpO3otaW5kZXg6MTA7Y3Vyc29yOnBvaW50ZXI7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2NvbG9yOnZhcigtLXN3aXBlci1uYXZpZ2F0aW9uLWNvbG9yLHZhcigtLXN3aXBlci10aGVtZS1jb2xvcikpfS5zd2lwZXItYnV0dG9uLW5leHQuc3dpcGVyLWJ1dHRvbi1kaXNhYmxlZCwuc3dpcGVyLWJ1dHRvbi1wcmV2LnN3aXBlci1idXR0b24tZGlzYWJsZWR7b3BhY2l0eTouMzU7Y3Vyc29yOmF1dG87cG9pbnRlci1ldmVudHM6bm9uZX0uc3dpcGVyLWJ1dHRvbi1uZXh0OmFmdGVyLC5zd2lwZXItYnV0dG9uLXByZXY6YWZ0ZXJ7Zm9udC1mYW1pbHk6c3dpcGVyLWljb25zO2ZvbnQtc2l6ZTp2YXIoLS1zd2lwZXItbmF2aWdhdGlvbi1zaXplKTt0ZXh0LXRyYW5zZm9ybTpub25lIWltcG9ydGFudDtsZXR0ZXItc3BhY2luZzowO3RleHQtdHJhbnNmb3JtOm5vbmU7Zm9udC12YXJpYW50OmluaXRpYWw7bGluZS1oZWlnaHQ6MX0uc3dpcGVyLWJ1dHRvbi1wcmV2LC5zd2lwZXItY29udGFpbmVyLXJ0bCAuc3dpcGVyLWJ1dHRvbi1uZXh0e2xlZnQ6MTBweDtyaWdodDphdXRvfS5zd2lwZXItYnV0dG9uLXByZXY6YWZ0ZXIsLnN3aXBlci1jb250YWluZXItcnRsIC5zd2lwZXItYnV0dG9uLW5leHQ6YWZ0ZXJ7Y29udGVudDoncHJldid9LnN3aXBlci1idXR0b24tbmV4dCwuc3dpcGVyLWNvbnRhaW5lci1ydGwgLnN3aXBlci1idXR0b24tcHJldntyaWdodDoxMHB4O2xlZnQ6YXV0b30uc3dpcGVyLWJ1dHRvbi1uZXh0OmFmdGVyLC5zd2lwZXItY29udGFpbmVyLXJ0bCAuc3dpcGVyLWJ1dHRvbi1wcmV2OmFmdGVye2NvbnRlbnQ6J25leHQnfS5zd2lwZXItYnV0dG9uLW5leHQuc3dpcGVyLWJ1dHRvbi13aGl0ZSwuc3dpcGVyLWJ1dHRvbi1wcmV2LnN3aXBlci1idXR0b24td2hpdGV7LS1zd2lwZXItbmF2aWdhdGlvbi1jb2xvcjojZmZmZmZmfS5zd2lwZXItYnV0dG9uLW5leHQuc3dpcGVyLWJ1dHRvbi1ibGFjaywuc3dpcGVyLWJ1dHRvbi1wcmV2LnN3aXBlci1idXR0b24tYmxhY2t7LS1zd2lwZXItbmF2aWdhdGlvbi1jb2xvcjojMDAwMDAwfS5zd2lwZXItYnV0dG9uLWxvY2t7ZGlzcGxheTpub25lfS5zd2lwZXItcGFnaW5hdGlvbntwb3NpdGlvbjphYnNvbHV0ZTt0ZXh0LWFsaWduOmNlbnRlcjt0cmFuc2l0aW9uOi4zcyBvcGFjaXR5O3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCk7ei1pbmRleDoxMH0uc3dpcGVyLXBhZ2luYXRpb24uc3dpcGVyLXBhZ2luYXRpb24taGlkZGVue29wYWNpdHk6MH0uc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsPi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLC5zd2lwZXItcGFnaW5hdGlvbi1jdXN0b20sLnN3aXBlci1wYWdpbmF0aW9uLWZyYWN0aW9ue2JvdHRvbToxMHB4O2xlZnQ6MDt3aWR0aDoxMDAlfS5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWN7b3ZlcmZsb3c6aGlkZGVuO2ZvbnQtc2l6ZTowfS5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHt0cmFuc2Zvcm06c2NhbGUoLjMzKTtwb3NpdGlvbjpyZWxhdGl2ZX0uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZle3RyYW5zZm9ybTpzY2FsZSgxKX0uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlLW1haW57dHJhbnNmb3JtOnNjYWxlKDEpfS5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUtcHJldnt0cmFuc2Zvcm06c2NhbGUoLjY2KX0uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlLXByZXYtcHJldnt0cmFuc2Zvcm06c2NhbGUoLjMzKX0uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlLW5leHR7dHJhbnNmb3JtOnNjYWxlKC42Nil9LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZS1uZXh0LW5leHR7dHJhbnNmb3JtOnNjYWxlKC4zMyl9LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHt3aWR0aDo4cHg7aGVpZ2h0OjhweDtkaXNwbGF5OmlubGluZS1ibG9jaztib3JkZXItcmFkaXVzOjUwJTtiYWNrZ3JvdW5kOiMwMDA7b3BhY2l0eTouMn1idXR0b24uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0e2JvcmRlcjpub25lO21hcmdpbjowO3BhZGRpbmc6MDtib3gtc2hhZG93Om5vbmU7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7YXBwZWFyYW5jZTpub25lfS5zd2lwZXItcGFnaW5hdGlvbi1jbGlja2FibGUgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHtjdXJzb3I6cG9pbnRlcn0uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0Om9ubHktY2hpbGR7ZGlzcGxheTpub25lIWltcG9ydGFudH0uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZXtvcGFjaXR5OjE7YmFja2dyb3VuZDp2YXIoLS1zd2lwZXItcGFnaW5hdGlvbi1jb2xvcix2YXIoLS1zd2lwZXItdGhlbWUtY29sb3IpKX0uc3dpcGVyLWNvbnRhaW5lci12ZXJ0aWNhbD4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0c3tyaWdodDoxMHB4O3RvcDo1MCU7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDBweCwtNTAlLDApfS5zd2lwZXItY29udGFpbmVyLXZlcnRpY2FsPi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXR7bWFyZ2luOjZweCAwO2Rpc3BsYXk6YmxvY2t9LnN3aXBlci1jb250YWluZXItdmVydGljYWw+LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWlje3RvcDo1MCU7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSk7d2lkdGg6OHB4fS5zd2lwZXItY29udGFpbmVyLXZlcnRpY2FsPi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0e2Rpc3BsYXk6aW5saW5lLWJsb2NrO3RyYW5zaXRpb246LjJzIHRyYW5zZm9ybSwuMnMgdG9wfS5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWw+LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHttYXJnaW46MCA0cHh9LnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbD4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWN7bGVmdDo1MCU7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSk7d2hpdGUtc3BhY2U6bm93cmFwfS5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWw+LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXR7dHJhbnNpdGlvbjouMnMgdHJhbnNmb3JtLC4ycyBsZWZ0fS5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWwuc3dpcGVyLWNvbnRhaW5lci1ydGw+LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0e3RyYW5zaXRpb246LjJzIHRyYW5zZm9ybSwuMnMgcmlnaHR9LnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFye2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMjUpO3Bvc2l0aW9uOmFic29sdXRlfS5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2JhciAuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXItZmlsbHtiYWNrZ3JvdW5kOnZhcigtLXN3aXBlci1wYWdpbmF0aW9uLWNvbG9yLHZhcigtLXN3aXBlci10aGVtZS1jb2xvcikpO3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDt0b3A6MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3RyYW5zZm9ybTpzY2FsZSgwKTt0cmFuc2Zvcm0tb3JpZ2luOmxlZnQgdG9wfS5zd2lwZXItY29udGFpbmVyLXJ0bCAuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXIgLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLWZpbGx7dHJhbnNmb3JtLW9yaWdpbjpyaWdodCB0b3B9LnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbD4uc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXIsLnN3aXBlci1jb250YWluZXItdmVydGljYWw+LnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLW9wcG9zaXRle3dpZHRoOjEwMCU7aGVpZ2h0OjRweDtsZWZ0OjA7dG9wOjB9LnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbD4uc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXIuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXItb3Bwb3NpdGUsLnN3aXBlci1jb250YWluZXItdmVydGljYWw+LnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFye3dpZHRoOjRweDtoZWlnaHQ6MTAwJTtsZWZ0OjA7dG9wOjB9LnN3aXBlci1wYWdpbmF0aW9uLXdoaXRley0tc3dpcGVyLXBhZ2luYXRpb24tY29sb3I6I2ZmZmZmZn0uc3dpcGVyLXBhZ2luYXRpb24tYmxhY2t7LS1zd2lwZXItcGFnaW5hdGlvbi1jb2xvcjojMDAwMDAwfS5zd2lwZXItcGFnaW5hdGlvbi1sb2Nre2Rpc3BsYXk6bm9uZX0uc3dpcGVyLXNjcm9sbGJhcntib3JkZXItcmFkaXVzOjEwcHg7cG9zaXRpb246cmVsYXRpdmU7LW1zLXRvdWNoLWFjdGlvbjpub25lO2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMSl9LnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbD4uc3dpcGVyLXNjcm9sbGJhcntwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjElO2JvdHRvbTozcHg7ei1pbmRleDo1MDtoZWlnaHQ6NXB4O3dpZHRoOjk4JX0uc3dpcGVyLWNvbnRhaW5lci12ZXJ0aWNhbD4uc3dpcGVyLXNjcm9sbGJhcntwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDozcHg7dG9wOjElO3otaW5kZXg6NTA7d2lkdGg6NXB4O2hlaWdodDo5OCV9LnN3aXBlci1zY3JvbGxiYXItZHJhZ3toZWlnaHQ6MTAwJTt3aWR0aDoxMDAlO3Bvc2l0aW9uOnJlbGF0aXZlO2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuNSk7Ym9yZGVyLXJhZGl1czoxMHB4O2xlZnQ6MDt0b3A6MH0uc3dpcGVyLXNjcm9sbGJhci1jdXJzb3ItZHJhZ3tjdXJzb3I6bW92ZX0uc3dpcGVyLXNjcm9sbGJhci1sb2Nre2Rpc3BsYXk6bm9uZX0uc3dpcGVyLXpvb20tY29udGFpbmVye3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO3RleHQtYWxpZ246Y2VudGVyfS5zd2lwZXItem9vbS1jb250YWluZXI+Y2FudmFzLC5zd2lwZXItem9vbS1jb250YWluZXI+aW1nLC5zd2lwZXItem9vbS1jb250YWluZXI+c3Zne21heC13aWR0aDoxMDAlO21heC1oZWlnaHQ6MTAwJTtvYmplY3QtZml0OmNvbnRhaW59LnN3aXBlci1zbGlkZS16b29tZWR7Y3Vyc29yOm1vdmV9LnN3aXBlci1sYXp5LXByZWxvYWRlcnt3aWR0aDo0MnB4O2hlaWdodDo0MnB4O3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6NTAlO3RvcDo1MCU7bWFyZ2luLWxlZnQ6LTIxcHg7bWFyZ2luLXRvcDotMjFweDt6LWluZGV4OjEwO3RyYW5zZm9ybS1vcmlnaW46NTAlO2FuaW1hdGlvbjpzd2lwZXItcHJlbG9hZGVyLXNwaW4gMXMgaW5maW5pdGUgbGluZWFyO2JveC1zaXppbmc6Ym9yZGVyLWJveDtib3JkZXI6NHB4IHNvbGlkIHZhcigtLXN3aXBlci1wcmVsb2FkZXItY29sb3IsdmFyKC0tc3dpcGVyLXRoZW1lLWNvbG9yKSk7Ym9yZGVyLXJhZGl1czo1MCU7Ym9yZGVyLXRvcC1jb2xvcjp0cmFuc3BhcmVudH0uc3dpcGVyLWxhenktcHJlbG9hZGVyLXdoaXRley0tc3dpcGVyLXByZWxvYWRlci1jb2xvcjojZmZmfS5zd2lwZXItbGF6eS1wcmVsb2FkZXItYmxhY2t7LS1zd2lwZXItcHJlbG9hZGVyLWNvbG9yOiMwMDB9QGtleWZyYW1lcyBzd2lwZXItcHJlbG9hZGVyLXNwaW57MTAwJXt0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyl9fS5zd2lwZXItY29udGFpbmVyIC5zd2lwZXItbm90aWZpY2F0aW9ue3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDt0b3A6MDtwb2ludGVyLWV2ZW50czpub25lO29wYWNpdHk6MDt6LWluZGV4Oi0xMDAwfS5zd2lwZXItY29udGFpbmVyLWZhZGUuc3dpcGVyLWNvbnRhaW5lci1mcmVlLW1vZGUgLnN3aXBlci1zbGlkZXt0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dH0uc3dpcGVyLWNvbnRhaW5lci1mYWRlIC5zd2lwZXItc2xpZGV7cG9pbnRlci1ldmVudHM6bm9uZTt0cmFuc2l0aW9uLXByb3BlcnR5Om9wYWNpdHl9LnN3aXBlci1jb250YWluZXItZmFkZSAuc3dpcGVyLXNsaWRlIC5zd2lwZXItc2xpZGV7cG9pbnRlci1ldmVudHM6bm9uZX0uc3dpcGVyLWNvbnRhaW5lci1mYWRlIC5zd2lwZXItc2xpZGUtYWN0aXZlLC5zd2lwZXItY29udGFpbmVyLWZhZGUgLnN3aXBlci1zbGlkZS1hY3RpdmUgLnN3aXBlci1zbGlkZS1hY3RpdmV7cG9pbnRlci1ldmVudHM6YXV0b30uc3dpcGVyLWNvbnRhaW5lci1jdWJle292ZXJmbG93OnZpc2libGV9LnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRle3BvaW50ZXItZXZlbnRzOm5vbmU7LXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbjtiYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbjt6LWluZGV4OjE7dmlzaWJpbGl0eTpoaWRkZW47dHJhbnNmb3JtLW9yaWdpbjowIDA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJX0uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUgLnN3aXBlci1zbGlkZXtwb2ludGVyLWV2ZW50czpub25lfS5zd2lwZXItY29udGFpbmVyLWN1YmUuc3dpcGVyLWNvbnRhaW5lci1ydGwgLnN3aXBlci1zbGlkZXt0cmFuc2Zvcm0tb3JpZ2luOjEwMCUgMH0uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtYWN0aXZlLC5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZS1hY3RpdmUgLnN3aXBlci1zbGlkZS1hY3RpdmV7cG9pbnRlci1ldmVudHM6YXV0b30uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtYWN0aXZlLC5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZS1uZXh0LC5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZS1uZXh0Ky5zd2lwZXItc2xpZGUsLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlLXByZXZ7cG9pbnRlci1ldmVudHM6YXV0bzt2aXNpYmlsaXR5OnZpc2libGV9LnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20sLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0LC5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQsLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3B7ei1pbmRleDowOy13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW47YmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW59LnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLWN1YmUtc2hhZG93e3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDtib3R0b206MHB4O3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7b3BhY2l0eTouNjt6LWluZGV4OjB9LnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLWN1YmUtc2hhZG93OmJlZm9yZXtjb250ZW50OicnO2JhY2tncm91bmQ6IzAwMDtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7dG9wOjA7Ym90dG9tOjA7cmlnaHQ6MDtmaWx0ZXI6Ymx1cig1MHB4KX0uc3dpcGVyLWNvbnRhaW5lci1mbGlwe292ZXJmbG93OnZpc2libGV9LnN3aXBlci1jb250YWluZXItZmxpcCAuc3dpcGVyLXNsaWRle3BvaW50ZXItZXZlbnRzOm5vbmU7LXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbjtiYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbjt6LWluZGV4OjF9LnN3aXBlci1jb250YWluZXItZmxpcCAuc3dpcGVyLXNsaWRlIC5zd2lwZXItc2xpZGV7cG9pbnRlci1ldmVudHM6bm9uZX0uc3dpcGVyLWNvbnRhaW5lci1mbGlwIC5zd2lwZXItc2xpZGUtYWN0aXZlLC5zd2lwZXItY29udGFpbmVyLWZsaXAgLnN3aXBlci1zbGlkZS1hY3RpdmUgLnN3aXBlci1zbGlkZS1hY3RpdmV7cG9pbnRlci1ldmVudHM6YXV0b30uc3dpcGVyLWNvbnRhaW5lci1mbGlwIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbSwuc3dpcGVyLWNvbnRhaW5lci1mbGlwIC5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnQsLnN3aXBlci1jb250YWluZXItZmxpcCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCwuc3dpcGVyLWNvbnRhaW5lci1mbGlwIC5zd2lwZXItc2xpZGUtc2hhZG93LXRvcHt6LWluZGV4OjA7LXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbjtiYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuICB2YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG4gIHZhciBoYXMgPSByZXF1aXJlKCcuL2xpYi9oYXMnKTtcblxuICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIHRleHQ7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkgeyAvKiovIH1cbiAgfTtcbn1cblxuLyoqXG4gKiBBc3NlcnQgdGhhdCB0aGUgdmFsdWVzIG1hdGNoIHdpdGggdGhlIHR5cGUgc3BlY3MuXG4gKiBFcnJvciBtZXNzYWdlcyBhcmUgbWVtb3JpemVkIGFuZCB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdHlwZVNwZWNzIE1hcCBvZiBuYW1lIHRvIGEgUmVhY3RQcm9wVHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHZhbHVlcyBSdW50aW1lIHZhbHVlcyB0aGF0IG5lZWQgdG8gYmUgdHlwZS1jaGVja2VkXG4gKiBAcGFyYW0ge3N0cmluZ30gbG9jYXRpb24gZS5nLiBcInByb3BcIiwgXCJjb250ZXh0XCIsIFwiY2hpbGQgY29udGV4dFwiXG4gKiBAcGFyYW0ge3N0cmluZ30gY29tcG9uZW50TmFtZSBOYW1lIG9mIHRoZSBjb21wb25lbnQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICogQHBhcmFtIHs/RnVuY3Rpb259IGdldFN0YWNrIFJldHVybnMgdGhlIGNvbXBvbmVudCBzdGFjay5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZ2V0U3RhY2spIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3I7XG4gICAgICAgIC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoXG4gICAgICAgICAgICAgIChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArXG4gICAgICAgICAgICAgICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLicgK1xuICAgICAgICAgICAgICAnVGhpcyBvZnRlbiBoYXBwZW5zIGJlY2F1c2Ugb2YgdHlwb3Mgc3VjaCBhcyBgUHJvcFR5cGVzLmZ1bmN0aW9uYCBpbnN0ZWFkIG9mIGBQcm9wVHlwZXMuZnVuY2AuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlcnJvciA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yID0gZXg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yICYmICEoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAnICtcbiAgICAgICAgICAgIGxvY2F0aW9uICsgJyBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArXG4gICAgICAgICAgICAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJyArIHR5cGVvZiBlcnJvciArICcuICcgK1xuICAgICAgICAgICAgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgK1xuICAgICAgICAgICAgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArXG4gICAgICAgICAgICAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLidcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IubWVzc2FnZV0gPSB0cnVlO1xuXG4gICAgICAgICAgdmFyIHN0YWNrID0gZ2V0U3RhY2sgPyBnZXRTdGFjaygpIDogJyc7XG5cbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAnRmFpbGVkICcgKyBsb2NhdGlvbiArICcgdHlwZTogJyArIGVycm9yLm1lc3NhZ2UgKyAoc3RhY2sgIT0gbnVsbCA/IHN0YWNrIDogJycpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFJlc2V0cyB3YXJuaW5nIGNhY2hlIHdoZW4gdGVzdGluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5jaGVja1Byb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZSA9IGZ1bmN0aW9uKCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2hlY2tQcm9wVHlwZXM7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL2xpYi9oYXMnKTtcbnZhciBjaGVja1Byb3BUeXBlcyA9IHJlcXVpcmUoJy4vY2hlY2tQcm9wVHlwZXMnKTtcblxudmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgdGV4dDtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xufVxuXG5mdW5jdGlvbiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsKCkge1xuICByZXR1cm4gbnVsbDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpc1ZhbGlkRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuICAvKiBnbG9iYWwgU3ltYm9sICovXG4gIHZhciBJVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbiAgdmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InOyAvLyBCZWZvcmUgU3ltYm9sIHNwZWMuXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGl0ZXJhdG9yIG1ldGhvZCBmdW5jdGlvbiBjb250YWluZWQgb24gdGhlIGl0ZXJhYmxlIG9iamVjdC5cbiAgICpcbiAgICogQmUgc3VyZSB0byBpbnZva2UgdGhlIGZ1bmN0aW9uIHdpdGggdGhlIGl0ZXJhYmxlIGFzIGNvbnRleHQ6XG4gICAqXG4gICAqICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obXlJdGVyYWJsZSk7XG4gICAqICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgKiAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobXlJdGVyYWJsZSk7XG4gICAqICAgICAgIC4uLlxuICAgKiAgICAgfVxuICAgKlxuICAgKiBAcGFyYW0gez9vYmplY3R9IG1heWJlSXRlcmFibGVcbiAgICogQHJldHVybiB7P2Z1bmN0aW9ufVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBtYXliZUl0ZXJhYmxlICYmIChJVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtJVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdKTtcbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBpdGVyYXRvckZuO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDb2xsZWN0aW9uIG9mIG1ldGhvZHMgdGhhdCBhbGxvdyBkZWNsYXJhdGlvbiBhbmQgdmFsaWRhdGlvbiBvZiBwcm9wcyB0aGF0IGFyZVxuICAgKiBzdXBwbGllZCB0byBSZWFjdCBjb21wb25lbnRzLiBFeGFtcGxlIHVzYWdlOlxuICAgKlxuICAgKiAgIHZhciBQcm9wcyA9IHJlcXVpcmUoJ1JlYWN0UHJvcFR5cGVzJyk7XG4gICAqICAgdmFyIE15QXJ0aWNsZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgIHByb3BUeXBlczoge1xuICAgKiAgICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgcHJvcCBuYW1lZCBcImRlc2NyaXB0aW9uXCIuXG4gICAqICAgICAgIGRlc2NyaXB0aW9uOiBQcm9wcy5zdHJpbmcsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcmVxdWlyZWQgZW51bSBwcm9wIG5hbWVkIFwiY2F0ZWdvcnlcIi5cbiAgICogICAgICAgY2F0ZWdvcnk6IFByb3BzLm9uZU9mKFsnTmV3cycsJ1Bob3RvcyddKS5pc1JlcXVpcmVkLFxuICAgKlxuICAgKiAgICAgICAvLyBBIHByb3AgbmFtZWQgXCJkaWFsb2dcIiB0aGF0IHJlcXVpcmVzIGFuIGluc3RhbmNlIG9mIERpYWxvZy5cbiAgICogICAgICAgZGlhbG9nOiBQcm9wcy5pbnN0YW5jZU9mKERpYWxvZykuaXNSZXF1aXJlZFxuICAgKiAgICAgfSxcbiAgICogICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7IC4uLiB9XG4gICAqICAgfSk7XG4gICAqXG4gICAqIEEgbW9yZSBmb3JtYWwgc3BlY2lmaWNhdGlvbiBvZiBob3cgdGhlc2UgbWV0aG9kcyBhcmUgdXNlZDpcbiAgICpcbiAgICogICB0eXBlIDo9IGFycmF5fGJvb2x8ZnVuY3xvYmplY3R8bnVtYmVyfHN0cmluZ3xvbmVPZihbLi4uXSl8aW5zdGFuY2VPZiguLi4pXG4gICAqICAgZGVjbCA6PSBSZWFjdFByb3BUeXBlcy57dHlwZX0oLmlzUmVxdWlyZWQpP1xuICAgKlxuICAgKiBFYWNoIGFuZCBldmVyeSBkZWNsYXJhdGlvbiBwcm9kdWNlcyBhIGZ1bmN0aW9uIHdpdGggdGhlIHNhbWUgc2lnbmF0dXJlLiBUaGlzXG4gICAqIGFsbG93cyB0aGUgY3JlYXRpb24gb2YgY3VzdG9tIHZhbGlkYXRpb24gZnVuY3Rpb25zLiBGb3IgZXhhbXBsZTpcbiAgICpcbiAgICogIHZhciBNeUxpbmsgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAqICAgIHByb3BUeXBlczoge1xuICAgKiAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBvciBVUkkgcHJvcCBuYW1lZCBcImhyZWZcIi5cbiAgICogICAgICBocmVmOiBmdW5jdGlvbihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICogICAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAqICAgICAgICBpZiAocHJvcFZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHByb3BWYWx1ZSAhPT0gJ3N0cmluZycgJiZcbiAgICogICAgICAgICAgICAhKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFVSSSkpIHtcbiAgICogICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICogICAgICAgICAgICAnRXhwZWN0ZWQgYSBzdHJpbmcgb3IgYW4gVVJJIGZvciAnICsgcHJvcE5hbWUgKyAnIGluICcgK1xuICAgKiAgICAgICAgICAgIGNvbXBvbmVudE5hbWVcbiAgICogICAgICAgICAgKTtcbiAgICogICAgICAgIH1cbiAgICogICAgICB9XG4gICAqICAgIH0sXG4gICAqICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7Li4ufVxuICAgKiAgfSk7XG4gICAqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cblxuICB2YXIgQU5PTllNT1VTID0gJzw8YW5vbnltb3VzPj4nO1xuXG4gIC8vIEltcG9ydGFudCFcbiAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanNgLlxuICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgYXJyYXk6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdhcnJheScpLFxuICAgIGJpZ2ludDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2JpZ2ludCcpLFxuICAgIGJvb2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdib29sZWFuJyksXG4gICAgZnVuYzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Z1bmN0aW9uJyksXG4gICAgbnVtYmVyOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignbnVtYmVyJyksXG4gICAgb2JqZWN0OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignb2JqZWN0JyksXG4gICAgc3RyaW5nOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignc3RyaW5nJyksXG4gICAgc3ltYm9sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignc3ltYm9sJyksXG5cbiAgICBhbnk6IGNyZWF0ZUFueVR5cGVDaGVja2VyKCksXG4gICAgYXJyYXlPZjogY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyLFxuICAgIGVsZW1lbnQ6IGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpLFxuICAgIGVsZW1lbnRUeXBlOiBjcmVhdGVFbGVtZW50VHlwZVR5cGVDaGVja2VyKCksXG4gICAgaW5zdGFuY2VPZjogY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcixcbiAgICBub2RlOiBjcmVhdGVOb2RlQ2hlY2tlcigpLFxuICAgIG9iamVjdE9mOiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyLFxuICAgIG9uZU9mOiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIsXG4gICAgb25lT2ZUeXBlOiBjcmVhdGVVbmlvblR5cGVDaGVja2VyLFxuICAgIHNoYXBlOiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyLFxuICAgIGV4YWN0OiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyLFxuICB9O1xuXG4gIC8qKlxuICAgKiBpbmxpbmVkIE9iamVjdC5pcyBwb2x5ZmlsbCB0byBhdm9pZCByZXF1aXJpbmcgY29uc3VtZXJzIHNoaXAgdGhlaXIgb3duXG4gICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9pc1xuICAgKi9cbiAgLyplc2xpbnQtZGlzYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuICBmdW5jdGlvbiBpcyh4LCB5KSB7XG4gICAgLy8gU2FtZVZhbHVlIGFsZ29yaXRobVxuICAgIGlmICh4ID09PSB5KSB7XG4gICAgICAvLyBTdGVwcyAxLTUsIDctMTBcbiAgICAgIC8vIFN0ZXBzIDYuYi02LmU6ICswICE9IC0wXG4gICAgICByZXR1cm4geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFN0ZXAgNi5hOiBOYU4gPT0gTmFOXG4gICAgICByZXR1cm4geCAhPT0geCAmJiB5ICE9PSB5O1xuICAgIH1cbiAgfVxuICAvKmVzbGludC1lbmFibGUgbm8tc2VsZi1jb21wYXJlKi9cblxuICAvKipcbiAgICogV2UgdXNlIGFuIEVycm9yLWxpa2Ugb2JqZWN0IGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IGFzIHBlb3BsZSBtYXkgY2FsbFxuICAgKiBQcm9wVHlwZXMgZGlyZWN0bHkgYW5kIGluc3BlY3QgdGhlaXIgb3V0cHV0LiBIb3dldmVyLCB3ZSBkb24ndCB1c2UgcmVhbFxuICAgKiBFcnJvcnMgYW55bW9yZS4gV2UgZG9uJ3QgaW5zcGVjdCB0aGVpciBzdGFjayBhbnl3YXksIGFuZCBjcmVhdGluZyB0aGVtXG4gICAqIGlzIHByb2hpYml0aXZlbHkgZXhwZW5zaXZlIGlmIHRoZXkgYXJlIGNyZWF0ZWQgdG9vIG9mdGVuLCBzdWNoIGFzIHdoYXRcbiAgICogaGFwcGVucyBpbiBvbmVPZlR5cGUoKSBmb3IgYW55IHR5cGUgYmVmb3JlIHRoZSBvbmUgdGhhdCBtYXRjaGVkLlxuICAgKi9cbiAgZnVuY3Rpb24gUHJvcFR5cGVFcnJvcihtZXNzYWdlLCBkYXRhKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLmRhdGEgPSBkYXRhICYmIHR5cGVvZiBkYXRhID09PSAnb2JqZWN0JyA/IGRhdGE6IHt9O1xuICAgIHRoaXMuc3RhY2sgPSAnJztcbiAgfVxuICAvLyBNYWtlIGBpbnN0YW5jZW9mIEVycm9yYCBzdGlsbCB3b3JrIGZvciByZXR1cm5lZCBlcnJvcnMuXG4gIFByb3BUeXBlRXJyb3IucHJvdG90eXBlID0gRXJyb3IucHJvdG90eXBlO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZSA9IHt9O1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50ID0gMDtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2hlY2tUeXBlKGlzUmVxdWlyZWQsIHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICBwcm9wRnVsbE5hbWUgPSBwcm9wRnVsbE5hbWUgfHwgcHJvcE5hbWU7XG5cbiAgICAgIGlmIChzZWNyZXQgIT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAgIGlmICh0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gICAgICAgICAgLy8gTmV3IGJlaGF2aW9yIG9ubHkgZm9yIHVzZXJzIG9mIGBwcm9wLXR5cGVzYCBwYWNrYWdlXG4gICAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcihcbiAgICAgICAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICAgICAgICdVc2UgYFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpYCB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgICAgICAgKTtcbiAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAvLyBPbGQgYmVoYXZpb3IgZm9yIHBlb3BsZSB1c2luZyBSZWFjdC5Qcm9wVHlwZXNcbiAgICAgICAgICB2YXIgY2FjaGVLZXkgPSBjb21wb25lbnROYW1lICsgJzonICsgcHJvcE5hbWU7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIW1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSAmJlxuICAgICAgICAgICAgLy8gQXZvaWQgc3BhbW1pbmcgdGhlIGNvbnNvbGUgYmVjYXVzZSB0aGV5IGFyZSBvZnRlbiBub3QgYWN0aW9uYWJsZSBleGNlcHQgZm9yIGxpYiBhdXRob3JzXG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA8IDNcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICAgJ1lvdSBhcmUgbWFudWFsbHkgY2FsbGluZyBhIFJlYWN0LlByb3BUeXBlcyB2YWxpZGF0aW9uICcgK1xuICAgICAgICAgICAgICAnZnVuY3Rpb24gZm9yIHRoZSBgJyArIHByb3BGdWxsTmFtZSArICdgIHByb3Agb24gYCcgKyBjb21wb25lbnROYW1lICsgJ2AuIFRoaXMgaXMgZGVwcmVjYXRlZCAnICtcbiAgICAgICAgICAgICAgJ2FuZCB3aWxsIHRocm93IGluIHRoZSBzdGFuZGFsb25lIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICAgICAgICAgJ1lvdSBtYXkgYmUgc2VlaW5nIHRoaXMgd2FybmluZyBkdWUgdG8gYSB0aGlyZC1wYXJ0eSBQcm9wVHlwZXMgJyArXG4gICAgICAgICAgICAgICdsaWJyYXJ5LiBTZWUgaHR0cHM6Ly9mYi5tZS9yZWFjdC13YXJuaW5nLWRvbnQtY2FsbC1wcm9wdHlwZXMgJyArICdmb3IgZGV0YWlscy4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldID0gdHJ1ZTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50Kys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09IG51bGwpIHtcbiAgICAgICAgaWYgKGlzUmVxdWlyZWQpIHtcbiAgICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkICcgKyAoJ2luIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGBudWxsYC4nKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgaW4gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYHVuZGVmaW5lZGAuJykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGNoYWluZWRDaGVja1R5cGUgPSBjaGVja1R5cGUuYmluZChudWxsLCBmYWxzZSk7XG4gICAgY2hhaW5lZENoZWNrVHlwZS5pc1JlcXVpcmVkID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgdHJ1ZSk7XG5cbiAgICByZXR1cm4gY2hhaW5lZENoZWNrVHlwZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKGV4cGVjdGVkVHlwZSkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gZXhwZWN0ZWRUeXBlKSB7XG4gICAgICAgIC8vIGBwcm9wVmFsdWVgIGJlaW5nIGluc3RhbmNlIG9mLCBzYXksIGRhdGUvcmVnZXhwLCBwYXNzIHRoZSAnb2JqZWN0J1xuICAgICAgICAvLyBjaGVjaywgYnV0IHdlIGNhbiBvZmZlciBhIG1vcmUgcHJlY2lzZSBlcnJvciBtZXNzYWdlIGhlcmUgcmF0aGVyIHRoYW5cbiAgICAgICAgLy8gJ29mIHR5cGUgYG9iamVjdGAnLlxuICAgICAgICB2YXIgcHJlY2lzZVR5cGUgPSBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcihcbiAgICAgICAgICAnSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByZWNpc2VUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdgJyArIGV4cGVjdGVkVHlwZSArICdgLicpLFxuICAgICAgICAgIHtleHBlY3RlZFR5cGU6IGV4cGVjdGVkVHlwZX1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQW55VHlwZUNoZWNrZXIoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGwpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIGFycmF5T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gYXJyYXkuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBpLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJ1snICsgaSArICddJywgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgc2luZ2xlIFJlYWN0RWxlbWVudC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlVHlwZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFSZWFjdElzLmlzVmFsaWRFbGVtZW50VHlwZShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgc2luZ2xlIFJlYWN0RWxlbWVudCB0eXBlLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcihleHBlY3RlZENsYXNzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIShwcm9wc1twcm9wTmFtZV0gaW5zdGFuY2VvZiBleHBlY3RlZENsYXNzKSkge1xuICAgICAgICB2YXIgZXhwZWN0ZWRDbGFzc05hbWUgPSBleHBlY3RlZENsYXNzLm5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgICB2YXIgYWN0dWFsQ2xhc3NOYW1lID0gZ2V0Q2xhc3NOYW1lKHByb3BzW3Byb3BOYW1lXSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIGFjdHVhbENsYXNzTmFtZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnaW5zdGFuY2Ugb2YgYCcgKyBleHBlY3RlZENsYXNzTmFtZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRW51bVR5cGVDaGVja2VyKGV4cGVjdGVkVmFsdWVzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGV4cGVjdGVkVmFsdWVzKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgJ0ludmFsaWQgYXJndW1lbnRzIHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBhcnJheSwgZ290ICcgKyBhcmd1bWVudHMubGVuZ3RoICsgJyBhcmd1bWVudHMuICcgK1xuICAgICAgICAgICAgJ0EgY29tbW9uIG1pc3Rha2UgaXMgdG8gd3JpdGUgb25lT2YoeCwgeSwgeikgaW5zdGVhZCBvZiBvbmVPZihbeCwgeSwgel0pLidcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByaW50V2FybmluZygnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZiwgZXhwZWN0ZWQgYW4gYXJyYXkuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXhwZWN0ZWRWYWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGlzKHByb3BWYWx1ZSwgZXhwZWN0ZWRWYWx1ZXNbaV0pKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHZhbHVlc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGV4cGVjdGVkVmFsdWVzLCBmdW5jdGlvbiByZXBsYWNlcihrZXksIHZhbHVlKSB7XG4gICAgICAgIHZhciB0eXBlID0gZ2V0UHJlY2lzZVR5cGUodmFsdWUpO1xuICAgICAgICBpZiAodHlwZSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgICAgICByZXR1cm4gU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdmFsdWUgYCcgKyBTdHJpbmcocHJvcFZhbHVlKSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBvbmUgb2YgJyArIHZhbHVlc1N0cmluZyArICcuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBvYmplY3RPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBvYmplY3QuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHByb3BWYWx1ZSkge1xuICAgICAgICBpZiAoaGFzKHByb3BWYWx1ZSwga2V5KSkge1xuICAgICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlVW5pb25UeXBlQ2hlY2tlcihhcnJheU9mVHlwZUNoZWNrZXJzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5T2ZUeXBlQ2hlY2tlcnMpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gcHJpbnRXYXJuaW5nKCdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZSwgZXhwZWN0ZWQgYW4gaW5zdGFuY2Ugb2YgYXJyYXkuJykgOiB2b2lkIDA7XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgIGlmICh0eXBlb2YgY2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLiBFeHBlY3RlZCBhbiBhcnJheSBvZiBjaGVjayBmdW5jdGlvbnMsIGJ1dCAnICtcbiAgICAgICAgICAncmVjZWl2ZWQgJyArIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyhjaGVja2VyKSArICcgYXQgaW5kZXggJyArIGkgKyAnLidcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgZXhwZWN0ZWRUeXBlcyA9IFtdO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgICAgdmFyIGNoZWNrZXJSZXN1bHQgPSBjaGVja2VyKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoY2hlY2tlclJlc3VsdCA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoZWNrZXJSZXN1bHQuZGF0YSAmJiBoYXMoY2hlY2tlclJlc3VsdC5kYXRhLCAnZXhwZWN0ZWRUeXBlJykpIHtcbiAgICAgICAgICBleHBlY3RlZFR5cGVzLnB1c2goY2hlY2tlclJlc3VsdC5kYXRhLmV4cGVjdGVkVHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZhciBleHBlY3RlZFR5cGVzTWVzc2FnZSA9IChleHBlY3RlZFR5cGVzLmxlbmd0aCA+IDApID8gJywgZXhwZWN0ZWQgb25lIG9mIHR5cGUgWycgKyBleHBlY3RlZFR5cGVzLmpvaW4oJywgJykgKyAnXSc6ICcnO1xuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCcgKyBleHBlY3RlZFR5cGVzTWVzc2FnZSArICcuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlTm9kZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIWlzTm9kZShwcm9wc1twcm9wTmFtZV0pKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgUmVhY3ROb2RlLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaW52YWxpZFZhbGlkYXRvckVycm9yKGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIGtleSwgdHlwZSkge1xuICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcihcbiAgICAgIChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5ICsgJ2AgaXMgaW52YWxpZDsgJyArXG4gICAgICAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlICsgJ2AuJ1xuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gc2hhcGVUeXBlcykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcmV0dXJuIGludmFsaWRWYWxpZGF0b3JFcnJvcihjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBrZXksIGdldFByZWNpc2VUeXBlKGNoZWNrZXIpKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyb3IgPSBjaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICAvLyBXZSBuZWVkIHRvIGNoZWNrIGFsbCBrZXlzIGluIGNhc2Ugc29tZSBhcmUgcmVxdWlyZWQgYnV0IG1pc3NpbmcgZnJvbSBwcm9wcy5cbiAgICAgIHZhciBhbGxLZXlzID0gYXNzaWduKHt9LCBwcm9wc1twcm9wTmFtZV0sIHNoYXBlVHlwZXMpO1xuICAgICAgZm9yICh2YXIga2V5IGluIGFsbEtleXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmIChoYXMoc2hhcGVUeXBlcywga2V5KSAmJiB0eXBlb2YgY2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHJldHVybiBpbnZhbGlkVmFsaWRhdG9yRXJyb3IoY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwga2V5LCBnZXRQcmVjaXNlVHlwZShjaGVja2VyKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFxuICAgICAgICAgICAgJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGtleSBgJyArIGtleSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLicgK1xuICAgICAgICAgICAgJ1xcbkJhZCBvYmplY3Q6ICcgKyBKU09OLnN0cmluZ2lmeShwcm9wc1twcm9wTmFtZV0sIG51bGwsICcgICcpICtcbiAgICAgICAgICAgICdcXG5WYWxpZCBrZXlzOiAnICsgSlNPTi5zdHJpbmdpZnkoT2JqZWN0LmtleXMoc2hhcGVUeXBlcyksIG51bGwsICcgICcpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyb3IgPSBjaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzTm9kZShwcm9wVmFsdWUpIHtcbiAgICBzd2l0Y2ggKHR5cGVvZiBwcm9wVmFsdWUpIHtcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgY2FzZSAndW5kZWZpbmVkJzpcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgcmV0dXJuICFwcm9wVmFsdWU7XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3BWYWx1ZS5ldmVyeShpc05vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wVmFsdWUgPT09IG51bGwgfHwgaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKHByb3BWYWx1ZSk7XG4gICAgICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKHByb3BWYWx1ZSk7XG4gICAgICAgICAgdmFyIHN0ZXA7XG4gICAgICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IHByb3BWYWx1ZS5lbnRyaWVzKSB7XG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIGlmICghaXNOb2RlKHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEl0ZXJhdG9yIHdpbGwgcHJvdmlkZSBlbnRyeSBbayx2XSB0dXBsZXMgcmF0aGVyIHRoYW4gdmFsdWVzLlxuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICB2YXIgZW50cnkgPSBzdGVwLnZhbHVlO1xuICAgICAgICAgICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzTm9kZShlbnRyeVsxXSkpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkge1xuICAgIC8vIE5hdGl2ZSBTeW1ib2wuXG4gICAgaWYgKHByb3BUeXBlID09PSAnc3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gZmFsc3kgdmFsdWUgY2FuJ3QgYmUgYSBTeW1ib2xcbiAgICBpZiAoIXByb3BWYWx1ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ10gPT09ICdTeW1ib2wnXG4gICAgaWYgKHByb3BWYWx1ZVsnQEB0b1N0cmluZ1RhZyddID09PSAnU3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gRmFsbGJhY2sgZm9yIG5vbi1zcGVjIGNvbXBsaWFudCBTeW1ib2xzIHdoaWNoIGFyZSBwb2x5ZmlsbGVkLlxuICAgIGlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHByb3BWYWx1ZSBpbnN0YW5jZW9mIFN5bWJvbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gRXF1aXZhbGVudCBvZiBgdHlwZW9mYCBidXQgd2l0aCBzcGVjaWFsIGhhbmRsaW5nIGZvciBhcnJheSBhbmQgcmVnZXhwLlxuICBmdW5jdGlvbiBnZXRQcm9wVHlwZShwcm9wVmFsdWUpIHtcbiAgICB2YXIgcHJvcFR5cGUgPSB0eXBlb2YgcHJvcFZhbHVlO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnYXJyYXknO1xuICAgIH1cbiAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAvLyBPbGQgd2Via2l0cyAoYXQgbGVhc3QgdW50aWwgQW5kcm9pZCA0LjApIHJldHVybiAnZnVuY3Rpb24nIHJhdGhlciB0aGFuXG4gICAgICAvLyAnb2JqZWN0JyBmb3IgdHlwZW9mIGEgUmVnRXhwLiBXZSdsbCBub3JtYWxpemUgdGhpcyBoZXJlIHNvIHRoYXQgL2JsYS9cbiAgICAgIC8vIHBhc3NlcyBQcm9wVHlwZXMub2JqZWN0LlxuICAgICAgcmV0dXJuICdvYmplY3QnO1xuICAgIH1cbiAgICBpZiAoaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnc3ltYm9sJztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gVGhpcyBoYW5kbGVzIG1vcmUgdHlwZXMgdGhhbiBgZ2V0UHJvcFR5cGVgLiBPbmx5IHVzZWQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICAvLyBTZWUgYGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyYC5cbiAgZnVuY3Rpb24gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiBwcm9wVmFsdWUgPT09ICd1bmRlZmluZWQnIHx8IHByb3BWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuICcnICsgcHJvcFZhbHVlO1xuICAgIH1cbiAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgIGlmIChwcm9wVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHJldHVybiAnZGF0ZSc7XG4gICAgICB9IGVsc2UgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgICByZXR1cm4gJ3JlZ2V4cCc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyBwb3N0Zml4ZWQgdG8gYSB3YXJuaW5nIGFib3V0IGFuIGludmFsaWQgdHlwZS5cbiAgLy8gRm9yIGV4YW1wbGUsIFwidW5kZWZpbmVkXCIgb3IgXCJvZiB0eXBlIGFycmF5XCJcbiAgZnVuY3Rpb24gZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKHZhbHVlKSB7XG4gICAgdmFyIHR5cGUgPSBnZXRQcmVjaXNlVHlwZSh2YWx1ZSk7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdhcnJheSc6XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICByZXR1cm4gJ2FuICcgKyB0eXBlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICBjYXNlICdkYXRlJzpcbiAgICAgIGNhc2UgJ3JlZ2V4cCc6XG4gICAgICAgIHJldHVybiAnYSAnICsgdHlwZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgIH1cbiAgfVxuXG4gIC8vIFJldHVybnMgY2xhc3MgbmFtZSBvZiB0aGUgb2JqZWN0LCBpZiBhbnkuXG4gIGZ1bmN0aW9uIGdldENsYXNzTmFtZShwcm9wVmFsdWUpIHtcbiAgICBpZiAoIXByb3BWYWx1ZS5jb25zdHJ1Y3RvciB8fCAhcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWUpIHtcbiAgICAgIHJldHVybiBBTk9OWU1PVVM7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZTtcbiAgfVxuXG4gIFJlYWN0UHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gY2hlY2tQcm9wVHlwZXM7XG4gIFJlYWN0UHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlID0gY2hlY2tQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGU7XG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcblxuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBkZXZlbG9wbWVudCBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICB2YXIgdGhyb3dPbkRpcmVjdEFjY2VzcyA9IHRydWU7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFR5cGVDaGVja2VycycpKFJlYWN0SXMuaXNFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKTtcbn0gZWxzZSB7XG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IHByb2R1Y3Rpb24gYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcycpKCk7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJztcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFByb3BUeXBlc1NlY3JldDtcbiIsIm1vZHVsZS5leHBvcnRzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuIiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHsgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307IHZhciB0YXJnZXQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTsgdmFyIGtleSwgaTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHsgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307IHZhciB0YXJnZXQgPSB7fTsgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpOyB2YXIga2V5LCBpOyBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykgeyBrZXkgPSBzb3VyY2VLZXlzW2ldOyBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlOyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgd2FybiBmcm9tICcuLi91dGlscy9jb25zb2xlL3dhcm4nO1xudmFyIE5FV1RBQiA9ICdfYmxhbmsnO1xudmFyIE1JRERMRUNMSUNLID0gMTtcblxudmFyIE91dGJvdW5kTGluayA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoT3V0Ym91bmRMaW5rLCBfQ29tcG9uZW50KTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKE91dGJvdW5kTGluayk7XG5cbiAgZnVuY3Rpb24gT3V0Ym91bmRMaW5rKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBPdXRib3VuZExpbmspO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwuYXBwbHkoX3N1cGVyLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJoYW5kbGVDbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIHRhcmdldCA9IF90aGlzJHByb3BzLnRhcmdldCxcbiAgICAgICAgICBldmVudExhYmVsID0gX3RoaXMkcHJvcHMuZXZlbnRMYWJlbCxcbiAgICAgICAgICB0byA9IF90aGlzJHByb3BzLnRvLFxuICAgICAgICAgIG9uQ2xpY2sgPSBfdGhpcyRwcm9wcy5vbkNsaWNrLFxuICAgICAgICAgIHRyYWNrZXJOYW1lcyA9IF90aGlzJHByb3BzLnRyYWNrZXJOYW1lcztcbiAgICAgIHZhciBldmVudE1ldGEgPSB7XG4gICAgICAgIGxhYmVsOiBldmVudExhYmVsXG4gICAgICB9O1xuICAgICAgdmFyIHNhbWVUYXJnZXQgPSB0YXJnZXQgIT09IE5FV1RBQjtcbiAgICAgIHZhciBub3JtYWxDbGljayA9ICEoZXZlbnQuY3RybEtleSB8fCBldmVudC5zaGlmdEtleSB8fCBldmVudC5tZXRhS2V5IHx8IGV2ZW50LmJ1dHRvbiA9PT0gTUlERExFQ0xJQ0spO1xuXG4gICAgICBpZiAoc2FtZVRhcmdldCAmJiBub3JtYWxDbGljaykge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBPdXRib3VuZExpbmsudHJhY2tMaW5rKGV2ZW50TWV0YSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdG87XG4gICAgICAgIH0sIHRyYWNrZXJOYW1lcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBPdXRib3VuZExpbmsudHJhY2tMaW5rKGV2ZW50TWV0YSwgZnVuY3Rpb24gKCkge30sIHRyYWNrZXJOYW1lcyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvbkNsaWNrKSB7XG4gICAgICAgIG9uQ2xpY2soZXZlbnQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE91dGJvdW5kTGluaywgW3tcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGhyZWYgPSBfdGhpcyRwcm9wczIudG8sXG4gICAgICAgICAgdGFyZ2V0ID0gX3RoaXMkcHJvcHMyLnRhcmdldCxcbiAgICAgICAgICBvbGRQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfdGhpcyRwcm9wczIsIFtcInRvXCIsIFwidGFyZ2V0XCJdKTtcblxuICAgICAgdmFyIHByb3BzID0gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBvbGRQcm9wcyksIHt9LCB7XG4gICAgICAgIHRhcmdldDogdGFyZ2V0LFxuICAgICAgICBocmVmOiBocmVmLFxuICAgICAgICBvbkNsaWNrOiB0aGlzLmhhbmRsZUNsaWNrXG4gICAgICB9KTtcblxuICAgICAgaWYgKHRhcmdldCA9PT0gTkVXVEFCKSB7XG4gICAgICAgIHByb3BzLnJlbCA9IFwiXCIuY29uY2F0KHByb3BzLnJlbCA/IHByb3BzLnJlbCA6ICcnLCBcIiBub29wZW5lciBub3JlZmVycmVyXCIpLnRyaW0oKTtcbiAgICAgIH1cblxuICAgICAgZGVsZXRlIHByb3BzLmV2ZW50TGFiZWw7XG4gICAgICBkZWxldGUgcHJvcHMudHJhY2tlck5hbWVzO1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KCdhJywgcHJvcHMpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBPdXRib3VuZExpbms7XG59KENvbXBvbmVudCk7XG5cbl9kZWZpbmVQcm9wZXJ0eShPdXRib3VuZExpbmssIFwidHJhY2tMaW5rXCIsIGZ1bmN0aW9uICgpIHtcbiAgd2FybignZ2EgdHJhY2tpbmcgbm90IGVuYWJsZWQnKTtcbn0pO1xuXG5leHBvcnQgeyBPdXRib3VuZExpbmsgYXMgZGVmYXVsdCB9O1xuT3V0Ym91bmRMaW5rLnByb3BUeXBlcyA9IHtcbiAgZXZlbnRMYWJlbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB0YXJnZXQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRvOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgdHJhY2tlck5hbWVzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKVxufTtcbk91dGJvdW5kTGluay5kZWZhdWx0UHJvcHMgPSB7XG4gIHRhcmdldDogbnVsbCxcbiAgdG86IG51bGwsXG4gIG9uQ2xpY2s6IG51bGwsXG4gIHRyYWNrZXJOYW1lczogbnVsbFxufTsiLCJmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpOyB2YXIga2V5LCBpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IHt9OyB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IHZhciBrZXksIGk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZUtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IHJldHVybiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5KGFycikgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgX25vbkl0ZXJhYmxlU3ByZWFkKCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7IGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KGFycik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbi8qKlxuICogUmVhY3QgR29vZ2xlIEFuYWx5dGljcyBNb2R1bGVcbiAqXG4gKiBAcGFja2FnZSByZWFjdC1nYVxuICogQGF1dGhvciAgQWRhbSBMb2Z0aW5nIDxhZGFtQG1vemlsbGFmb3VuZGF0aW9uLm9yZz5cbiAqICAgICAgICAgIEF0dWwgVmFybWEgPGF0dWxAbW96aWxsYWZvdW5kYXRpb24ub3JnPlxuICovXG5cbi8qKlxuICogVXRpbGl0aWVzXG4gKi9cbmltcG9ydCBmb3JtYXQgZnJvbSAnLi91dGlscy9mb3JtYXQnO1xuaW1wb3J0IHJlbW92ZUxlYWRpbmdTbGFzaCBmcm9tICcuL3V0aWxzL3JlbW92ZUxlYWRpbmdTbGFzaCc7XG5pbXBvcnQgdHJpbSBmcm9tICcuL3V0aWxzL3RyaW0nO1xuaW1wb3J0IGxvYWRHQSBmcm9tICcuL3V0aWxzL2xvYWRHQSc7XG5pbXBvcnQgd2FybiBmcm9tICcuL3V0aWxzL2NvbnNvbGUvd2Fybic7XG5pbXBvcnQgbG9nIGZyb20gJy4vdXRpbHMvY29uc29sZS9sb2cnO1xuaW1wb3J0IFRlc3RNb2RlQVBJIGZyb20gJy4vdXRpbHMvdGVzdE1vZGVBUEknO1xuXG52YXIgX2lzTm90QnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCc7XG5cbnZhciBfZGVidWcgPSBmYWxzZTtcbnZhciBfdGl0bGVDYXNlID0gdHJ1ZTtcbnZhciBfdGVzdE1vZGUgPSBmYWxzZTtcbnZhciBfYWx3YXlzU2VuZFRvRGVmYXVsdFRyYWNrZXIgPSB0cnVlO1xudmFyIF9yZWRhY3RFbWFpbCA9IHRydWU7XG5cbnZhciBpbnRlcm5hbEdhID0gZnVuY3Rpb24gaW50ZXJuYWxHYSgpIHtcbiAgdmFyIF93aW5kb3c7XG5cbiAgaWYgKF90ZXN0TW9kZSkgcmV0dXJuIFRlc3RNb2RlQVBJLmdhLmFwcGx5KFRlc3RNb2RlQVBJLCBhcmd1bWVudHMpO1xuICBpZiAoX2lzTm90QnJvd3NlcikgcmV0dXJuIGZhbHNlO1xuICBpZiAoIXdpbmRvdy5nYSkgcmV0dXJuIHdhcm4oJ1JlYWN0R0EuaW5pdGlhbGl6ZSBtdXN0IGJlIGNhbGxlZCBmaXJzdCBvciBHb29nbGVBbmFseXRpY3Mgc2hvdWxkIGJlIGxvYWRlZCBtYW51YWxseScpO1xuICByZXR1cm4gKF93aW5kb3cgPSB3aW5kb3cpLmdhLmFwcGx5KF93aW5kb3csIGFyZ3VtZW50cyk7XG59O1xuXG5mdW5jdGlvbiBfZm9ybWF0KHMpIHtcbiAgcmV0dXJuIGZvcm1hdChzLCBfdGl0bGVDYXNlLCBfcmVkYWN0RW1haWwpO1xufVxuXG5mdW5jdGlvbiBfZ2FDb21tYW5kKHRyYWNrZXJOYW1lcykge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB2YXIgY29tbWFuZCA9IGFyZ3NbMF07XG5cbiAgaWYgKHR5cGVvZiBpbnRlcm5hbEdhID09PSAnZnVuY3Rpb24nKSB7XG4gICAgaWYgKHR5cGVvZiBjb21tYW5kICE9PSAnc3RyaW5nJykge1xuICAgICAgd2FybignZ2EgY29tbWFuZCBtdXN0IGJlIGEgc3RyaW5nJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKF9hbHdheXNTZW5kVG9EZWZhdWx0VHJhY2tlciB8fCAhQXJyYXkuaXNBcnJheSh0cmFja2VyTmFtZXMpKSBpbnRlcm5hbEdhLmFwcGx5KHZvaWQgMCwgYXJncyk7XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh0cmFja2VyTmFtZXMpKSB7XG4gICAgICB0cmFja2VyTmFtZXMuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICBpbnRlcm5hbEdhLmFwcGx5KHZvaWQgMCwgX3RvQ29uc3VtYWJsZUFycmF5KFtcIlwiLmNvbmNhdChuYW1lLCBcIi5cIikuY29uY2F0KGNvbW1hbmQpXS5jb25jYXQoYXJncy5zbGljZSgxKSkpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBfaW5pdGlhbGl6ZShnYVRyYWNraW5nSUQsIG9wdGlvbnMpIHtcbiAgaWYgKCFnYVRyYWNraW5nSUQpIHtcbiAgICB3YXJuKCdnYVRyYWNraW5nSUQgaXMgcmVxdWlyZWQgaW4gaW5pdGlhbGl6ZSgpJyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucy5kZWJ1ZyAmJiBvcHRpb25zLmRlYnVnID09PSB0cnVlKSB7XG4gICAgICBfZGVidWcgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLnRpdGxlQ2FzZSA9PT0gZmFsc2UpIHtcbiAgICAgIF90aXRsZUNhc2UgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5yZWRhY3RFbWFpbCA9PT0gZmFsc2UpIHtcbiAgICAgIF9yZWRhY3RFbWFpbCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLnVzZUV4aXN0aW5nR2EpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmdhT3B0aW9ucykge1xuICAgIGludGVybmFsR2EoJ2NyZWF0ZScsIGdhVHJhY2tpbmdJRCwgb3B0aW9ucy5nYU9wdGlvbnMpO1xuICB9IGVsc2Uge1xuICAgIGludGVybmFsR2EoJ2NyZWF0ZScsIGdhVHJhY2tpbmdJRCwgJ2F1dG8nKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkVHJhY2tlcnMoY29uZmlnc09yVHJhY2tpbmdJZCwgb3B0aW9ucykge1xuICBpZiAoQXJyYXkuaXNBcnJheShjb25maWdzT3JUcmFja2luZ0lkKSkge1xuICAgIGNvbmZpZ3NPclRyYWNraW5nSWQuZm9yRWFjaChmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICBpZiAoX3R5cGVvZihjb25maWcpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICB3YXJuKCdBbGwgY29uZmlncyBtdXN0IGJlIGFuIG9iamVjdCcpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIF9pbml0aWFsaXplKGNvbmZpZy50cmFja2luZ0lkLCBjb25maWcpO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIF9pbml0aWFsaXplKGNvbmZpZ3NPclRyYWNraW5nSWQsIG9wdGlvbnMpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZShjb25maWdzT3JUcmFja2luZ0lkLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMudGVzdE1vZGUgPT09IHRydWUpIHtcbiAgICBfdGVzdE1vZGUgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGlmIChfaXNOb3RCcm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFvcHRpb25zIHx8IG9wdGlvbnMuc3RhbmRhcmRJbXBsZW1lbnRhdGlvbiAhPT0gdHJ1ZSkgbG9hZEdBKG9wdGlvbnMpO1xuICB9XG5cbiAgX2Fsd2F5c1NlbmRUb0RlZmF1bHRUcmFja2VyID0gb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5hbHdheXNTZW5kVG9EZWZhdWx0VHJhY2tlciA9PT0gJ2Jvb2xlYW4nID8gb3B0aW9ucy5hbHdheXNTZW5kVG9EZWZhdWx0VHJhY2tlciA6IHRydWU7XG4gIGFkZFRyYWNrZXJzKGNvbmZpZ3NPclRyYWNraW5nSWQsIG9wdGlvbnMpO1xufVxuLyoqXG4gKiBnYTpcbiAqIFJldHVybnMgdGhlIG9yaWdpbmFsIEdBIG9iamVjdC5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZ2EoKSB7XG4gIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgfVxuXG4gIGlmIChhcmdzLmxlbmd0aCA+IDApIHtcbiAgICBpbnRlcm5hbEdhLmFwcGx5KHZvaWQgMCwgYXJncyk7XG5cbiAgICBpZiAoX2RlYnVnKSB7XG4gICAgICBsb2coXCJjYWxsZWQgZ2EoJ2FyZ3VtZW50cycpO1wiKTtcbiAgICAgIGxvZyhcIndpdGggYXJndW1lbnRzOiBcIi5jb25jYXQoSlNPTi5zdHJpbmdpZnkoYXJncykpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gd2luZG93LmdhO1xufVxuLyoqXG4gKiBzZXQ6XG4gKiBHQSB0cmFja2VyIHNldCBtZXRob2RcbiAqIEBwYXJhbSB7T2JqZWN0fSBmaWVsZHNPYmplY3QgLSBhIGZpZWxkL3ZhbHVlIHBhaXIgb3IgYSBncm91cCBvZiBmaWVsZC92YWx1ZSBwYWlycyBvbiB0aGUgdHJhY2tlclxuICogQHBhcmFtIHtBcnJheX0gdHJhY2tlck5hbWVzIC0gKG9wdGlvbmFsKSBhIGxpc3Qgb2YgZXh0cmEgdHJhY2tlcnMgdG8gcnVuIHRoZSBjb21tYW5kIG9uXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHNldChmaWVsZHNPYmplY3QsIHRyYWNrZXJOYW1lcykge1xuICBpZiAoIWZpZWxkc09iamVjdCkge1xuICAgIHdhcm4oJ2BmaWVsZHNPYmplY3RgIGlzIHJlcXVpcmVkIGluIC5zZXQoKScpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChfdHlwZW9mKGZpZWxkc09iamVjdCkgIT09ICdvYmplY3QnKSB7XG4gICAgd2FybignRXhwZWN0ZWQgYGZpZWxkc09iamVjdGAgYXJnIHRvIGJlIGFuIE9iamVjdCcpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChPYmplY3Qua2V5cyhmaWVsZHNPYmplY3QpLmxlbmd0aCA9PT0gMCkge1xuICAgIHdhcm4oJ2VtcHR5IGBmaWVsZHNPYmplY3RgIGdpdmVuIHRvIC5zZXQoKScpO1xuICB9XG5cbiAgX2dhQ29tbWFuZCh0cmFja2VyTmFtZXMsICdzZXQnLCBmaWVsZHNPYmplY3QpO1xuXG4gIGlmIChfZGVidWcpIHtcbiAgICBsb2coXCJjYWxsZWQgZ2EoJ3NldCcsIGZpZWxkc09iamVjdCk7XCIpO1xuICAgIGxvZyhcIndpdGggZmllbGRzT2JqZWN0OiBcIi5jb25jYXQoSlNPTi5zdHJpbmdpZnkoZmllbGRzT2JqZWN0KSkpO1xuICB9XG59XG4vKipcbiAqIHNlbmQ6XG4gKiBDbG9uZSBvZiB0aGUgbG93IGxldmVsIGBnYS5zZW5kYCBtZXRob2RcbiAqIFdBUk5JTkc6IE5vIHZhbGlkYXRpb25zIHdpbGwgYmUgYXBwbGllZCB0byB0aGlzXG4gKiBAcGFyYW0gIHtPYmplY3R9IGZpZWxkT2JqZWN0IC0gZmllbGQgb2JqZWN0IGZvciB0cmFja2luZyBkaWZmZXJlbnQgYW5hbHl0aWNzXG4gKiBAcGFyYW0gIHtBcnJheX0gdHJhY2tlck5hbWVzIC0gdHJhY2tlcnMgdG8gc2VuZCB0aGUgY29tbWFuZCB0b1xuICogQHBhcmFtIHtBcnJheX0gdHJhY2tlck5hbWVzIC0gKG9wdGlvbmFsKSBhIGxpc3Qgb2YgZXh0cmEgdHJhY2tlcnMgdG8gcnVuIHRoZSBjb21tYW5kIG9uXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHNlbmQoZmllbGRPYmplY3QsIHRyYWNrZXJOYW1lcykge1xuICBfZ2FDb21tYW5kKHRyYWNrZXJOYW1lcywgJ3NlbmQnLCBmaWVsZE9iamVjdCk7XG5cbiAgaWYgKF9kZWJ1Zykge1xuICAgIGxvZyhcImNhbGxlZCBnYSgnc2VuZCcsIGZpZWxkT2JqZWN0KTtcIik7XG4gICAgbG9nKFwid2l0aCBmaWVsZE9iamVjdDogXCIuY29uY2F0KEpTT04uc3RyaW5naWZ5KGZpZWxkT2JqZWN0KSkpO1xuICAgIGxvZyhcIndpdGggdHJhY2tlcnM6IFwiLmNvbmNhdChKU09OLnN0cmluZ2lmeSh0cmFja2VyTmFtZXMpKSk7XG4gIH1cbn1cbi8qKlxuICogcGFnZXZpZXc6XG4gKiBCYXNpYyBHQSBwYWdldmlldyB0cmFja2luZ1xuICogQHBhcmFtICB7U3RyaW5nfSBwYXRoIC0gdGhlIGN1cnJlbnQgcGFnZSBwYWdlIGUuZy4gJy9hYm91dCdcbiAqIEBwYXJhbSB7QXJyYXl9IHRyYWNrZXJOYW1lcyAtIChvcHRpb25hbCkgYSBsaXN0IG9mIGV4dHJhIHRyYWNrZXJzIHRvIHJ1biB0aGUgY29tbWFuZCBvblxuICogQHBhcmFtIHtTdHJpbmd9IHRpdGxlIC0gKG9wdGlvbmFsKSB0aGUgcGFnZSB0aXRsZSBlLiBnLiAnTXkgV2Vic2l0ZSdcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcGFnZXZpZXcocmF3UGF0aCwgdHJhY2tlck5hbWVzLCB0aXRsZSkge1xuICBpZiAoIXJhd1BhdGgpIHtcbiAgICB3YXJuKCdwYXRoIGlzIHJlcXVpcmVkIGluIC5wYWdldmlldygpJyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHBhdGggPSB0cmltKHJhd1BhdGgpO1xuXG4gIGlmIChwYXRoID09PSAnJykge1xuICAgIHdhcm4oJ3BhdGggY2Fubm90IGJlIGFuIGVtcHR5IHN0cmluZyBpbiAucGFnZXZpZXcoKScpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBleHRyYUZpZWxkcyA9IHt9O1xuXG4gIGlmICh0aXRsZSkge1xuICAgIGV4dHJhRmllbGRzLnRpdGxlID0gdGl0bGU7XG4gIH1cblxuICBpZiAodHlwZW9mIGdhID09PSAnZnVuY3Rpb24nKSB7XG4gICAgX2dhQ29tbWFuZCh0cmFja2VyTmFtZXMsICdzZW5kJywgX29iamVjdFNwcmVhZCh7XG4gICAgICBoaXRUeXBlOiAncGFnZXZpZXcnLFxuICAgICAgcGFnZTogcGF0aFxuICAgIH0sIGV4dHJhRmllbGRzKSk7XG5cbiAgICBpZiAoX2RlYnVnKSB7XG4gICAgICBsb2coXCJjYWxsZWQgZ2EoJ3NlbmQnLCAncGFnZXZpZXcnLCBwYXRoKTtcIik7XG4gICAgICB2YXIgZXh0cmFMb2cgPSAnJztcblxuICAgICAgaWYgKHRpdGxlKSB7XG4gICAgICAgIGV4dHJhTG9nID0gXCIgYW5kIHRpdGxlOiBcIi5jb25jYXQodGl0bGUpO1xuICAgICAgfVxuXG4gICAgICBsb2coXCJ3aXRoIHBhdGg6IFwiLmNvbmNhdChwYXRoKS5jb25jYXQoZXh0cmFMb2cpKTtcbiAgICB9XG4gIH1cbn1cbi8qKlxuICogbW9kYWx2aWV3OlxuICogYSBwcm94eSB0byBiYXNpYyBHQSBwYWdldmlldyB0cmFja2luZyB0byBjb25zaXN0ZW50bHkgdHJhY2tcbiAqIG1vZGFsIHZpZXdzIHRoYXQgYXJlIGFuIGVxdWl2YWxlbnQgVVggdG8gYSB0cmFkaXRpb25hbCBwYWdldmlld1xuICogQHBhcmFtICB7U3RyaW5nfSBtb2RhbE5hbWUgZS5nLiAnYWRkLW9yLWVkaXQtY2x1YidcbiAqIEBwYXJhbSB7QXJyYXl9IHRyYWNrZXJOYW1lcyAtIChvcHRpb25hbCkgYSBsaXN0IG9mIGV4dHJhIHRyYWNrZXJzIHRvIHJ1biB0aGUgY29tbWFuZCBvblxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBtb2RhbHZpZXcocmF3TW9kYWxOYW1lLCB0cmFja2VyTmFtZXMpIHtcbiAgaWYgKCFyYXdNb2RhbE5hbWUpIHtcbiAgICB3YXJuKCdtb2RhbE5hbWUgaXMgcmVxdWlyZWQgaW4gLm1vZGFsdmlldyhtb2RhbE5hbWUpJyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIG1vZGFsTmFtZSA9IHJlbW92ZUxlYWRpbmdTbGFzaCh0cmltKHJhd01vZGFsTmFtZSkpO1xuXG4gIGlmIChtb2RhbE5hbWUgPT09ICcnKSB7XG4gICAgd2FybignbW9kYWxOYW1lIGNhbm5vdCBiZSBhbiBlbXB0eSBzdHJpbmcgb3IgYSBzaW5nbGUgLyBpbiAubW9kYWx2aWV3KCknKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAodHlwZW9mIGdhID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHBhdGggPSBcIi9tb2RhbC9cIi5jb25jYXQobW9kYWxOYW1lKTtcblxuICAgIF9nYUNvbW1hbmQodHJhY2tlck5hbWVzLCAnc2VuZCcsICdwYWdldmlldycsIHBhdGgpO1xuXG4gICAgaWYgKF9kZWJ1Zykge1xuICAgICAgbG9nKFwiY2FsbGVkIGdhKCdzZW5kJywgJ3BhZ2V2aWV3JywgcGF0aCk7XCIpO1xuICAgICAgbG9nKFwid2l0aCBwYXRoOiBcIi5jb25jYXQocGF0aCkpO1xuICAgIH1cbiAgfVxufVxuLyoqXG4gKiB0aW1pbmc6XG4gKiBHQSB0aW1pbmdcbiAqIEBwYXJhbSBhcmdzLmNhdGVnb3J5IHtTdHJpbmd9IHJlcXVpcmVkXG4gKiBAcGFyYW0gYXJncy52YXJpYWJsZSB7U3RyaW5nfSByZXF1aXJlZFxuICogQHBhcmFtIGFyZ3MudmFsdWUgIHtJbnR9ICByZXF1aXJlZFxuICogQHBhcmFtIGFyZ3MubGFiZWwgIHtTdHJpbmd9IHJlcXVpcmVkXG4gKiBAcGFyYW0ge0FycmF5fSB0cmFja2VyTmFtZXMgLSAob3B0aW9uYWwpIGEgbGlzdCBvZiBleHRyYSB0cmFja2VycyB0byBydW4gdGhlIGNvbW1hbmQgb25cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gdGltaW5nKCkge1xuICB2YXIgX3JlZiA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge30sXG4gICAgICBjYXRlZ29yeSA9IF9yZWYuY2F0ZWdvcnksXG4gICAgICB2YXJpYWJsZSA9IF9yZWYudmFyaWFibGUsXG4gICAgICB2YWx1ZSA9IF9yZWYudmFsdWUsXG4gICAgICBsYWJlbCA9IF9yZWYubGFiZWw7XG5cbiAgdmFyIHRyYWNrZXJOYW1lcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkO1xuXG4gIGlmICh0eXBlb2YgZ2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICBpZiAoIWNhdGVnb3J5IHx8ICF2YXJpYWJsZSB8fCB0eXBlb2YgdmFsdWUgIT09ICdudW1iZXInKSB7XG4gICAgICB3YXJuKCdhcmdzLmNhdGVnb3J5LCBhcmdzLnZhcmlhYmxlICcgKyAnQU5EIGFyZ3MudmFsdWUgYXJlIHJlcXVpcmVkIGluIHRpbWluZygpICcgKyAnQU5EIGFyZ3MudmFsdWUgaGFzIHRvIGJlIGEgbnVtYmVyJyk7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBSZXF1aXJlZCBGaWVsZHNcblxuXG4gICAgdmFyIGZpZWxkT2JqZWN0ID0ge1xuICAgICAgaGl0VHlwZTogJ3RpbWluZycsXG4gICAgICB0aW1pbmdDYXRlZ29yeTogX2Zvcm1hdChjYXRlZ29yeSksXG4gICAgICB0aW1pbmdWYXI6IF9mb3JtYXQodmFyaWFibGUpLFxuICAgICAgdGltaW5nVmFsdWU6IHZhbHVlXG4gICAgfTtcblxuICAgIGlmIChsYWJlbCkge1xuICAgICAgZmllbGRPYmplY3QudGltaW5nTGFiZWwgPSBfZm9ybWF0KGxhYmVsKTtcbiAgICB9XG5cbiAgICBzZW5kKGZpZWxkT2JqZWN0LCB0cmFja2VyTmFtZXMpO1xuICB9XG59XG4vKipcbiAqIGV2ZW50OlxuICogR0EgZXZlbnQgdHJhY2tpbmdcbiAqIEBwYXJhbSBhcmdzLmNhdGVnb3J5IHtTdHJpbmd9IHJlcXVpcmVkXG4gKiBAcGFyYW0gYXJncy5hY3Rpb24ge1N0cmluZ30gcmVxdWlyZWRcbiAqIEBwYXJhbSBhcmdzLmxhYmVsIHtTdHJpbmd9IG9wdGlvbmFsXG4gKiBAcGFyYW0gYXJncy52YWx1ZSB7SW50fSBvcHRpb25hbFxuICogQHBhcmFtIGFyZ3Mubm9uSW50ZXJhY3Rpb24ge2Jvb2xlYW59IG9wdGlvbmFsXG4gKiBAcGFyYW0gYXJncy50cmFuc3BvcnQge3N0cmluZ30gb3B0aW9uYWxcbiAqIEBwYXJhbSB7e2FjdGlvbjogc3RyaW5nLCBjYXRlZ29yeTogc3RyaW5nfX0gdHJhY2tlck5hbWVzIC0gKG9wdGlvbmFsKSBhIGxpc3Qgb2YgZXh0cmEgdHJhY2tlcnMgdG8gcnVuIHRoZSBjb21tYW5kIG9uXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGV2ZW50KCkge1xuICB2YXIgX3JlZjIgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9LFxuICAgICAgY2F0ZWdvcnkgPSBfcmVmMi5jYXRlZ29yeSxcbiAgICAgIGFjdGlvbiA9IF9yZWYyLmFjdGlvbixcbiAgICAgIGxhYmVsID0gX3JlZjIubGFiZWwsXG4gICAgICB2YWx1ZSA9IF9yZWYyLnZhbHVlLFxuICAgICAgbm9uSW50ZXJhY3Rpb24gPSBfcmVmMi5ub25JbnRlcmFjdGlvbixcbiAgICAgIHRyYW5zcG9ydCA9IF9yZWYyLnRyYW5zcG9ydCxcbiAgICAgIGFyZ3MgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZjIsIFtcImNhdGVnb3J5XCIsIFwiYWN0aW9uXCIsIFwibGFiZWxcIiwgXCJ2YWx1ZVwiLCBcIm5vbkludGVyYWN0aW9uXCIsIFwidHJhbnNwb3J0XCJdKTtcblxuICB2YXIgdHJhY2tlck5hbWVzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQ7XG5cbiAgaWYgKHR5cGVvZiBnYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIFNpbXBsZSBWYWxpZGF0aW9uXG4gICAgaWYgKCFjYXRlZ29yeSB8fCAhYWN0aW9uKSB7XG4gICAgICB3YXJuKCdhcmdzLmNhdGVnb3J5IEFORCBhcmdzLmFjdGlvbiBhcmUgcmVxdWlyZWQgaW4gZXZlbnQoKScpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gUmVxdWlyZWQgRmllbGRzXG5cblxuICAgIHZhciBmaWVsZE9iamVjdCA9IHtcbiAgICAgIGhpdFR5cGU6ICdldmVudCcsXG4gICAgICBldmVudENhdGVnb3J5OiBfZm9ybWF0KGNhdGVnb3J5KSxcbiAgICAgIGV2ZW50QWN0aW9uOiBfZm9ybWF0KGFjdGlvbilcbiAgICB9OyAvLyBPcHRpb25hbCBGaWVsZHNcblxuICAgIGlmIChsYWJlbCkge1xuICAgICAgZmllbGRPYmplY3QuZXZlbnRMYWJlbCA9IF9mb3JtYXQobGFiZWwpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnbnVtYmVyJykge1xuICAgICAgICB3YXJuKCdFeHBlY3RlZCBgYXJncy52YWx1ZWAgYXJnIHRvIGJlIGEgTnVtYmVyLicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmllbGRPYmplY3QuZXZlbnRWYWx1ZSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygbm9uSW50ZXJhY3Rpb24gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBpZiAodHlwZW9mIG5vbkludGVyYWN0aW9uICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgd2FybignYGFyZ3Mubm9uSW50ZXJhY3Rpb25gIG11c3QgYmUgYSBib29sZWFuLicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmllbGRPYmplY3Qubm9uSW50ZXJhY3Rpb24gPSBub25JbnRlcmFjdGlvbjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHRyYW5zcG9ydCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGlmICh0eXBlb2YgdHJhbnNwb3J0ICE9PSAnc3RyaW5nJykge1xuICAgICAgICB3YXJuKCdgYXJncy50cmFuc3BvcnRgIG11c3QgYmUgYSBzdHJpbmcuJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoWydiZWFjb24nLCAneGhyJywgJ2ltYWdlJ10uaW5kZXhPZih0cmFuc3BvcnQpID09PSAtMSkge1xuICAgICAgICAgIHdhcm4oJ2BhcmdzLnRyYW5zcG9ydGAgbXVzdCBiZSBlaXRoZXIgb25lIG9mIHRoZXNlIHZhbHVlczogYGJlYWNvbmAsIGB4aHJgIG9yIGBpbWFnZWAnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZpZWxkT2JqZWN0LnRyYW5zcG9ydCA9IHRyYW5zcG9ydDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyhhcmdzKS5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIGtleS5zdWJzdHIoMCwgJ2RpbWVuc2lvbicubGVuZ3RoKSA9PT0gJ2RpbWVuc2lvbic7XG4gICAgfSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBmaWVsZE9iamVjdFtrZXldID0gYXJnc1trZXldO1xuICAgIH0pO1xuICAgIE9iamVjdC5rZXlzKGFyZ3MpLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4ga2V5LnN1YnN0cigwLCAnbWV0cmljJy5sZW5ndGgpID09PSAnbWV0cmljJztcbiAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGZpZWxkT2JqZWN0W2tleV0gPSBhcmdzW2tleV07XG4gICAgfSk7IC8vIFNlbmQgdG8gR0FcblxuICAgIHNlbmQoZmllbGRPYmplY3QsIHRyYWNrZXJOYW1lcyk7XG4gIH1cbn1cbi8qKlxuICogZXhjZXB0aW9uOlxuICogR0EgZXhjZXB0aW9uIHRyYWNraW5nXG4gKiBAcGFyYW0gYXJncy5kZXNjcmlwdGlvbiB7U3RyaW5nfSBvcHRpb25hbFxuICogQHBhcmFtIGFyZ3MuZmF0YWwge2Jvb2xlYW59IG9wdGlvbmFsXG4gKiBAcGFyYW0ge0FycmF5fSB0cmFja2VyTmFtZXMgLSAob3B0aW9uYWwpIGEgbGlzdCBvZiBleHRyYSB0cmFja2VycyB0byBydW4gdGhlIGNvbW1hbmQgb25cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZXhjZXB0aW9uKF9yZWYzLCB0cmFja2VyTmFtZXMpIHtcbiAgdmFyIGRlc2NyaXB0aW9uID0gX3JlZjMuZGVzY3JpcHRpb24sXG4gICAgICBmYXRhbCA9IF9yZWYzLmZhdGFsO1xuXG4gIGlmICh0eXBlb2YgZ2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBSZXF1aXJlZCBGaWVsZHNcbiAgICB2YXIgZmllbGRPYmplY3QgPSB7XG4gICAgICBoaXRUeXBlOiAnZXhjZXB0aW9uJ1xuICAgIH07IC8vIE9wdGlvbmFsIEZpZWxkc1xuXG4gICAgaWYgKGRlc2NyaXB0aW9uKSB7XG4gICAgICBmaWVsZE9iamVjdC5leERlc2NyaXB0aW9uID0gX2Zvcm1hdChkZXNjcmlwdGlvbik7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBmYXRhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGlmICh0eXBlb2YgZmF0YWwgIT09ICdib29sZWFuJykge1xuICAgICAgICB3YXJuKCdgYXJncy5mYXRhbGAgbXVzdCBiZSBhIGJvb2xlYW4uJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmaWVsZE9iamVjdC5leEZhdGFsID0gZmF0YWw7XG4gICAgICB9XG4gICAgfSAvLyBTZW5kIHRvIEdBXG5cblxuICAgIHNlbmQoZmllbGRPYmplY3QsIHRyYWNrZXJOYW1lcyk7XG4gIH1cbn1cbmV4cG9ydCB2YXIgcGx1Z2luID0ge1xuICAvKipcbiAgICogcmVxdWlyZTpcbiAgICogR0EgcmVxdWlyZXMgYSBwbHVnaW5cbiAgICogQHBhcmFtIG5hbWUge1N0cmluZ30gZS5nLiAnZWNvbW1lcmNlJyBvciAnbXlwbHVnaW4nXG4gICAqIEBwYXJhbSBvcHRpb25zIHtPYmplY3R9IG9wdGlvbmFsIGUuZyB7cGF0aDogJy9sb2cnLCBkZWJ1ZzogdHJ1ZX1cbiAgICogQHBhcmFtIHRyYWNrZXJOYW1lIHtTdHJpbmd9IG9wdGlvbmFsIGUuZyAndHJhY2tlck5hbWUnXG4gICAqL1xuICByZXF1aXJlOiBmdW5jdGlvbiByZXF1aXJlKHJhd05hbWUsIG9wdGlvbnMsIHRyYWNrZXJOYW1lKSB7XG4gICAgaWYgKHR5cGVvZiBnYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gUmVxdWlyZWQgRmllbGRzXG4gICAgICBpZiAoIXJhd05hbWUpIHtcbiAgICAgICAgd2FybignYG5hbWVgIGlzIHJlcXVpcmVkIGluIC5yZXF1aXJlKCknKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgbmFtZSA9IHRyaW0ocmF3TmFtZSk7XG5cbiAgICAgIGlmIChuYW1lID09PSAnJykge1xuICAgICAgICB3YXJuKCdgbmFtZWAgY2Fubm90IGJlIGFuIGVtcHR5IHN0cmluZyBpbiAucmVxdWlyZSgpJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlcXVpcmVTdHJpbmcgPSB0cmFja2VyTmFtZSA/IFwiXCIuY29uY2F0KHRyYWNrZXJOYW1lLCBcIi5yZXF1aXJlXCIpIDogJ3JlcXVpcmUnOyAvLyBPcHRpb25hbCBGaWVsZHNcblxuICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKF90eXBlb2Yob3B0aW9ucykgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgd2FybignRXhwZWN0ZWQgYG9wdGlvbnNgIGFyZyB0byBiZSBhbiBPYmplY3QnKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoT2JqZWN0LmtleXMob3B0aW9ucykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgd2FybignRW1wdHkgYG9wdGlvbnNgIGdpdmVuIHRvIC5yZXF1aXJlKCknKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdhKHJlcXVpcmVTdHJpbmcsIG5hbWUsIG9wdGlvbnMpO1xuXG4gICAgICAgIGlmIChfZGVidWcpIHtcbiAgICAgICAgICBsb2coXCJjYWxsZWQgZ2EoJ3JlcXVpcmUnLCAnXCIuY29uY2F0KG5hbWUsIFwiJywgXCIpLmNvbmNhdChKU09OLnN0cmluZ2lmeShvcHRpb25zKSkpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBnYShyZXF1aXJlU3RyaW5nLCBuYW1lKTtcblxuICAgICAgICBpZiAoX2RlYnVnKSB7XG4gICAgICAgICAgbG9nKFwiY2FsbGVkIGdhKCdyZXF1aXJlJywgJ1wiLmNvbmNhdChuYW1lLCBcIicpO1wiKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIGV4ZWN1dGU6XG4gICAqIEdBIGV4ZWN1dGUgYWN0aW9uIGZvciBwbHVnaW5cbiAgICogVGFrZXMgdmFyaWFibGUgbnVtYmVyIG9mIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gcGx1Z2luTmFtZSB7U3RyaW5nfSBlLmcuICdlY29tbWVyY2UnIG9yICdteXBsdWdpbidcbiAgICogQHBhcmFtIGFjdGlvbiB7U3RyaW5nfSBlLmcuICdhZGRJdGVtJyBvciAnbXlDdXN0b21BY3Rpb24nXG4gICAqIEBwYXJhbSBhY3Rpb25UeXBlIHtTdHJpbmd9IG9wdGlvbmFsIGUuZy4gJ2RldGFpbCdcbiAgICogQHBhcmFtIHBheWxvYWQge09iamVjdH0gb3B0aW9uYWwgZS5nIHsgaWQ6ICcxeDVlJywgbmFtZSA6ICdNeSBwcm9kdWN0IHRvIHRyYWNrJyB9XG4gICAqL1xuICBleGVjdXRlOiBmdW5jdGlvbiBleGVjdXRlKHBsdWdpbk5hbWUsIGFjdGlvbikge1xuICAgIHZhciBwYXlsb2FkO1xuICAgIHZhciBhY3Rpb25UeXBlO1xuXG4gICAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4zID4gMiA/IF9sZW4zIC0gMiA6IDApLCBfa2V5MyA9IDI7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcbiAgICAgIGFyZ3NbX2tleTMgLSAyXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gICAgfVxuXG4gICAgaWYgKGFyZ3MubGVuZ3RoID09PSAxKSB7XG4gICAgICBwYXlsb2FkID0gYXJnc1swXTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWN0aW9uVHlwZSA9IGFyZ3NbMF07XG4gICAgICBwYXlsb2FkID0gYXJnc1sxXTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGdhID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHBsdWdpbk5hbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHdhcm4oJ0V4cGVjdGVkIGBwbHVnaW5OYW1lYCBhcmcgdG8gYmUgYSBTdHJpbmcuJyk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBhY3Rpb24gIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHdhcm4oJ0V4cGVjdGVkIGBhY3Rpb25gIGFyZyB0byBiZSBhIFN0cmluZy4nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBjb21tYW5kID0gXCJcIi5jb25jYXQocGx1Z2luTmFtZSwgXCI6XCIpLmNvbmNhdChhY3Rpb24pO1xuICAgICAgICBwYXlsb2FkID0gcGF5bG9hZCB8fCBudWxsO1xuXG4gICAgICAgIGlmIChhY3Rpb25UeXBlICYmIHBheWxvYWQpIHtcbiAgICAgICAgICBnYShjb21tYW5kLCBhY3Rpb25UeXBlLCBwYXlsb2FkKTtcblxuICAgICAgICAgIGlmIChfZGVidWcpIHtcbiAgICAgICAgICAgIGxvZyhcImNhbGxlZCBnYSgnXCIuY29uY2F0KGNvbW1hbmQsIFwiJyk7XCIpKTtcbiAgICAgICAgICAgIGxvZyhcImFjdGlvblR5cGU6IFxcXCJcIi5jb25jYXQoYWN0aW9uVHlwZSwgXCJcXFwiIHdpdGggcGF5bG9hZDogXCIpLmNvbmNhdChKU09OLnN0cmluZ2lmeShwYXlsb2FkKSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChwYXlsb2FkKSB7XG4gICAgICAgICAgZ2EoY29tbWFuZCwgcGF5bG9hZCk7XG5cbiAgICAgICAgICBpZiAoX2RlYnVnKSB7XG4gICAgICAgICAgICBsb2coXCJjYWxsZWQgZ2EoJ1wiLmNvbmNhdChjb21tYW5kLCBcIicpO1wiKSk7XG4gICAgICAgICAgICBsb2coXCJ3aXRoIHBheWxvYWQ6IFwiLmNvbmNhdChKU09OLnN0cmluZ2lmeShwYXlsb2FkKSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBnYShjb21tYW5kKTtcblxuICAgICAgICAgIGlmIChfZGVidWcpIHtcbiAgICAgICAgICAgIGxvZyhcImNhbGxlZCBnYSgnXCIuY29uY2F0KGNvbW1hbmQsIFwiJyk7XCIpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG4vKipcbiAqIG91dGJvdW5kTGluazpcbiAqIEdBIG91dGJvdW5kTGluayB0cmFja2luZ1xuICogQHBhcmFtIGFyZ3MubGFiZWwge1N0cmluZ30gZS5nLiB1cmwsIG9yICdDcmVhdGUgYW4gQWNjb3VudCdcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGhpdENhbGxiYWNrIC0gQ2FsbGVkIGFmdGVyIHByb2Nlc3NpbmcgYSBoaXQuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIG91dGJvdW5kTGluayhhcmdzLCBoaXRDYWxsYmFjaywgdHJhY2tlck5hbWVzKSB7XG4gIGlmICh0eXBlb2YgaGl0Q2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICB3YXJuKCdoaXRDYWxsYmFjayBmdW5jdGlvbiBpcyByZXF1aXJlZCcpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZ2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBTaW1wbGUgVmFsaWRhdGlvblxuICAgIGlmICghYXJncyB8fCAhYXJncy5sYWJlbCkge1xuICAgICAgd2FybignYXJncy5sYWJlbCBpcyByZXF1aXJlZCBpbiBvdXRib3VuZExpbmsoKScpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gUmVxdWlyZWQgRmllbGRzXG5cblxuICAgIHZhciBmaWVsZE9iamVjdCA9IHtcbiAgICAgIGhpdFR5cGU6ICdldmVudCcsXG4gICAgICBldmVudENhdGVnb3J5OiAnT3V0Ym91bmQnLFxuICAgICAgZXZlbnRBY3Rpb246ICdDbGljaycsXG4gICAgICBldmVudExhYmVsOiBfZm9ybWF0KGFyZ3MubGFiZWwpXG4gICAgfTtcbiAgICB2YXIgc2FmZXR5Q2FsbGJhY2tDYWxsZWQgPSBmYWxzZTtcblxuICAgIHZhciBzYWZldHlDYWxsYmFjayA9IGZ1bmN0aW9uIHNhZmV0eUNhbGxiYWNrKCkge1xuICAgICAgLy8gVGhpcyBwcmV2ZW50cyBhIGRlbGF5ZWQgcmVzcG9uc2UgZnJvbSBHQVxuICAgICAgLy8gY2F1c2luZyBoaXRDYWxsYmFjayBmcm9tIGJlaW5nIGZpcmVkIHR3aWNlXG4gICAgICBzYWZldHlDYWxsYmFja0NhbGxlZCA9IHRydWU7XG4gICAgICBoaXRDYWxsYmFjaygpO1xuICAgIH07IC8vIFVzaW5nIGEgdGltZW91dCB0byBlbnN1cmUgdGhlIGV4ZWN1dGlvbiBvZiBjcml0aWNhbCBhcHBsaWNhdGlvbiBjb2RlXG4gICAgLy8gaW4gdGhlIGNhc2Ugd2hlbiB0aGUgR0Egc2VydmVyIG1pZ2h0IGJlIGRvd25cbiAgICAvLyBvciBhbiBhZCBibG9ja2VyIHByZXZlbnRzIHNlbmRpbmcgdGhlIGRhdGFcbiAgICAvLyByZWdpc3RlciBzYWZldHkgbmV0IHRpbWVvdXQ6XG5cblxuICAgIHZhciB0ID0gc2V0VGltZW91dChzYWZldHlDYWxsYmFjaywgMjUwKTtcblxuICAgIHZhciBjbGVhcmFibGVDYWxsYmFja0ZvckdBID0gZnVuY3Rpb24gY2xlYXJhYmxlQ2FsbGJhY2tGb3JHQSgpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0KTtcblxuICAgICAgaWYgKCFzYWZldHlDYWxsYmFja0NhbGxlZCkge1xuICAgICAgICBoaXRDYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmaWVsZE9iamVjdC5oaXRDYWxsYmFjayA9IGNsZWFyYWJsZUNhbGxiYWNrRm9yR0E7IC8vIFNlbmQgdG8gR0FcblxuICAgIHNlbmQoZmllbGRPYmplY3QsIHRyYWNrZXJOYW1lcyk7XG4gIH0gZWxzZSB7XG4gICAgLy8gaWYgZ2EgaXMgbm90IGRlZmluZWQsIHJldHVybiB0aGUgY2FsbGJhY2sgc28gdGhlIGFwcGxpY2F0aW9uXG4gICAgLy8gY29udGludWVzIHRvIHdvcmsgYXMgZXhwZWN0ZWRcbiAgICBzZXRUaW1lb3V0KGhpdENhbGxiYWNrLCAwKTtcbiAgfVxufVxuZXhwb3J0IHZhciB0ZXN0TW9kZUFQSSA9IFRlc3RNb2RlQVBJO1xuZXhwb3J0IGRlZmF1bHQge1xuICBpbml0aWFsaXplOiBpbml0aWFsaXplLFxuICBnYTogZ2EsXG4gIHNldDogc2V0LFxuICBzZW5kOiBzZW5kLFxuICBwYWdldmlldzogcGFnZXZpZXcsXG4gIG1vZGFsdmlldzogbW9kYWx2aWV3LFxuICB0aW1pbmc6IHRpbWluZyxcbiAgZXZlbnQ6IGV2ZW50LFxuICBleGNlcHRpb246IGV4Y2VwdGlvbixcbiAgcGx1Z2luOiBwbHVnaW4sXG4gIG91dGJvdW5kTGluazogb3V0Ym91bmRMaW5rLFxuICB0ZXN0TW9kZUFQSTogVGVzdE1vZGVBUElcbn07IiwiZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmltcG9ydCBVbmJvdW5kT3V0Ym91bmRMaW5rIGZyb20gJy4vY29tcG9uZW50cy9PdXRib3VuZExpbmsnO1xuaW1wb3J0ICogYXMgRGVmYXVsdHMgZnJvbSAnLi9jb3JlJztcbnZhciBpbml0aWFsaXplID0gRGVmYXVsdHMuaW5pdGlhbGl6ZTtcbmV4cG9ydCB7IGluaXRpYWxpemUgfTtcbnZhciBhZGRUcmFja2VycyA9IERlZmF1bHRzLmFkZFRyYWNrZXJzO1xuZXhwb3J0IHsgYWRkVHJhY2tlcnMgfTtcbnZhciBnYSA9IERlZmF1bHRzLmdhO1xuZXhwb3J0IHsgZ2EgfTtcbnZhciBzZXQgPSBEZWZhdWx0cy5zZXQ7XG5leHBvcnQgeyBzZXQgfTtcbnZhciBzZW5kID0gRGVmYXVsdHMuc2VuZDtcbmV4cG9ydCB7IHNlbmQgfTtcbnZhciBwYWdldmlldyA9IERlZmF1bHRzLnBhZ2V2aWV3O1xuZXhwb3J0IHsgcGFnZXZpZXcgfTtcbnZhciBtb2RhbHZpZXcgPSBEZWZhdWx0cy5tb2RhbHZpZXc7XG5leHBvcnQgeyBtb2RhbHZpZXcgfTtcbnZhciB0aW1pbmcgPSBEZWZhdWx0cy50aW1pbmc7XG5leHBvcnQgeyB0aW1pbmcgfTtcbnZhciBldmVudCA9IERlZmF1bHRzLmV2ZW50O1xuZXhwb3J0IHsgZXZlbnQgfTtcbnZhciBleGNlcHRpb24gPSBEZWZhdWx0cy5leGNlcHRpb247XG5leHBvcnQgeyBleGNlcHRpb24gfTtcbnZhciBwbHVnaW4gPSBEZWZhdWx0cy5wbHVnaW47XG5leHBvcnQgeyBwbHVnaW4gfTtcbnZhciBvdXRib3VuZExpbmsgPSBEZWZhdWx0cy5vdXRib3VuZExpbms7XG5leHBvcnQgeyBvdXRib3VuZExpbmsgfTtcbnZhciB0ZXN0TW9kZUFQSSA9IERlZmF1bHRzLnRlc3RNb2RlQVBJO1xuZXhwb3J0IHsgdGVzdE1vZGVBUEkgfTtcblVuYm91bmRPdXRib3VuZExpbmsub3JpZ1RyYWNrTGluayA9IFVuYm91bmRPdXRib3VuZExpbmsudHJhY2tMaW5rO1xuVW5ib3VuZE91dGJvdW5kTGluay50cmFja0xpbmsgPSBEZWZhdWx0cy5vdXRib3VuZExpbms7XG5leHBvcnQgdmFyIE91dGJvdW5kTGluayA9IFVuYm91bmRPdXRib3VuZExpbms7XG5leHBvcnQgZGVmYXVsdCBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIERlZmF1bHRzKSwge30sIHtcbiAgT3V0Ym91bmRMaW5rOiBPdXRib3VuZExpbmtcbn0pOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvZyhzKSB7XG4gIGNvbnNvbGUuaW5mbygnW3JlYWN0LWdhXScsIHMpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdhcm4ocykge1xuICBjb25zb2xlLndhcm4oJ1tyZWFjdC1nYV0nLCBzKTtcbn0iLCJpbXBvcnQgcmVkYWN0RW1haWwgZnJvbSAnLi9yZWRhY3RFbWFpbCc7XG5pbXBvcnQgdG9UaXRsZUNhc2UgZnJvbSAnLi90b1RpdGxlQ2FzZSc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXQoKSB7XG4gIHZhciBzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAnJztcbiAgdmFyIHRpdGxlQ2FzZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkO1xuICB2YXIgcmVkYWN0aW5nRW1haWwgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHRydWU7XG5cbiAgdmFyIF9zdHIgPSBzIHx8ICcnO1xuXG4gIGlmICh0aXRsZUNhc2UpIHtcbiAgICBfc3RyID0gdG9UaXRsZUNhc2Uocyk7XG4gIH1cblxuICBpZiAocmVkYWN0aW5nRW1haWwpIHtcbiAgICBfc3RyID0gcmVkYWN0RW1haWwoX3N0cik7XG4gIH1cblxuICByZXR1cm4gX3N0cjtcbn0iLCJ2YXIgaXNMb2FkZWQgPSBmYWxzZTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gIGlmIChpc0xvYWRlZCkgcmV0dXJuO1xuICBpc0xvYWRlZCA9IHRydWU7XG4gIHZhciBnYUFkZHJlc3MgPSAnaHR0cHM6Ly93d3cuZ29vZ2xlLWFuYWx5dGljcy5jb20vYW5hbHl0aWNzLmpzJztcblxuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmdhQWRkcmVzcykge1xuICAgIGdhQWRkcmVzcyA9IG9wdGlvbnMuZ2FBZGRyZXNzO1xuICB9IGVsc2UgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5kZWJ1Zykge1xuICAgIGdhQWRkcmVzcyA9ICdodHRwczovL3d3dy5nb29nbGUtYW5hbHl0aWNzLmNvbS9hbmFseXRpY3NfZGVidWcuanMnO1xuICB9XG5cbiAgdmFyIG9uZXJyb3IgPSBvcHRpb25zICYmIG9wdGlvbnMub25lcnJvcjsgLy8gaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vYW5hbHl0aWNzL2Rldmd1aWRlcy9jb2xsZWN0aW9uL2FuYWx5dGljc2pzL1xuXG4gIC8qIGVzbGludC1kaXNhYmxlICovXG5cbiAgKGZ1bmN0aW9uIChpLCBzLCBvLCBnLCByLCBhLCBtKSB7XG4gICAgaVsnR29vZ2xlQW5hbHl0aWNzT2JqZWN0J10gPSByO1xuICAgIGlbcl0gPSBpW3JdIHx8IGZ1bmN0aW9uICgpIHtcbiAgICAgIChpW3JdLnEgPSBpW3JdLnEgfHwgW10pLnB1c2goYXJndW1lbnRzKTtcbiAgICB9LCBpW3JdLmwgPSAxICogbmV3IERhdGUoKTtcbiAgICBhID0gcy5jcmVhdGVFbGVtZW50KG8pLCBtID0gcy5nZXRFbGVtZW50c0J5VGFnTmFtZShvKVswXTtcbiAgICBhLmFzeW5jID0gMTtcbiAgICBhLnNyYyA9IGc7XG4gICAgYS5vbmVycm9yID0gb25lcnJvcjtcbiAgICBtLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGEsIG0pO1xuICB9KSh3aW5kb3csIGRvY3VtZW50LCAnc2NyaXB0JywgZ2FBZGRyZXNzLCAnZ2EnKTtcbiAgLyogZXNsaW50LWVuYWJsZSAqL1xuXG59IiwiLy8gU2VlIGlmIHMgY291bGQgYmUgYW4gZW1haWwgYWRkcmVzcy4gV2UgZG9uJ3Qgd2FudCB0byBzZW5kIHBlcnNvbmFsIGRhdGEgbGlrZSBlbWFpbC5cbi8vIGh0dHBzOi8vc3VwcG9ydC5nb29nbGUuY29tL2FuYWx5dGljcy9hbnN3ZXIvMjc5NTk4Mz9obD1lblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWlnaHRCZUVtYWlsKHMpIHtcbiAgLy8gVGhlcmUncyBubyBwb2ludCB0cnlpbmcgdG8gdmFsaWRhdGUgcmZjODIyIGZ1bGx5LCBqdXN0IGxvb2sgZm9yIC4uLkAuLi5cbiAgcmV0dXJuIHR5cGVvZiBzID09PSAnc3RyaW5nJyAmJiBzLmluZGV4T2YoJ0AnKSAhPT0gLTE7XG59IiwiaW1wb3J0IHdhcm4gZnJvbSAnLi9jb25zb2xlL3dhcm4nO1xuaW1wb3J0IG1pZ2h0QmVFbWFpbCBmcm9tICcuL21pZ2h0QmVFbWFpbCc7XG52YXIgcmVkYWN0ZWQgPSAnUkVEQUNURUQgKFBvdGVudGlhbCBFbWFpbCBBZGRyZXNzKSc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWRhY3RFbWFpbChzdHJpbmcpIHtcbiAgaWYgKG1pZ2h0QmVFbWFpbChzdHJpbmcpKSB7XG4gICAgd2FybignVGhpcyBhcmcgbG9va3MgbGlrZSBhbiBlbWFpbCBhZGRyZXNzLCByZWRhY3RpbmcuJyk7XG4gICAgcmV0dXJuIHJlZGFjdGVkO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZztcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW1vdmVMZWFkaW5nU2xhc2goc3RyaW5nKSB7XG4gIGlmIChzdHJpbmcuc3Vic3RyaW5nKDAsIDEpID09PSAnLycpIHtcbiAgICByZXR1cm4gc3RyaW5nLnN1YnN0cmluZygxKTtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmc7XG59IiwiZXhwb3J0IHZhciBnYUNhbGxzID0gW107XG5leHBvcnQgZGVmYXVsdCB7XG4gIGNhbGxzOiBnYUNhbGxzLFxuICBnYTogZnVuY3Rpb24gZ2EoKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIGdhQ2FsbHMucHVzaChbXS5jb25jYXQoYXJncykpO1xuICB9LFxuICByZXNldENhbGxzOiBmdW5jdGlvbiByZXNldENhbGxzKCkge1xuICAgIGdhQ2FsbHMubGVuZ3RoID0gMDtcbiAgfVxufTsiLCIvKipcbiAqIFRvIFRpdGxlIENhc2UgMi4xIC0gaHR0cDovL2luZGl2aWRlZC5jb20vY29kZS90by10aXRsZS1jYXNlL1xuICogQ29weXJpZ2h0IDIwMDgtMjAxMyBEYXZpZCBHb3VjaC4gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9naXRodWIuY29tL2dvdWNoL3RvLXRpdGxlLWNhc2VcbiAqL1xuaW1wb3J0IHRyaW0gZnJvbSAnLi90cmltJztcbnZhciBzbWFsbFdvcmRzID0gL14oYXxhbnxhbmR8YXN8YXR8YnV0fGJ5fGVufGZvcnxpZnxpbnxub3J8b2Z8b258b3J8cGVyfHRoZXx0b3x2cz9cXC4/fHZpYSkkL2k7IC8vIHRlc3RcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9UaXRsZUNhc2Uoc3RyaW5nKSB7XG4gIHJldHVybiB0cmltKHN0cmluZykucmVwbGFjZSgvW0EtWmEtejAtOVxcdTAwQzAtXFx1MDBGRl0rW15cXHMtXSovZywgZnVuY3Rpb24gKG1hdGNoLCBpbmRleCwgdGl0bGUpIHtcbiAgICBpZiAoaW5kZXggPiAwICYmIGluZGV4ICsgbWF0Y2gubGVuZ3RoICE9PSB0aXRsZS5sZW5ndGggJiYgbWF0Y2guc2VhcmNoKHNtYWxsV29yZHMpID4gLTEgJiYgdGl0bGUuY2hhckF0KGluZGV4IC0gMikgIT09ICc6JyAmJiAodGl0bGUuY2hhckF0KGluZGV4ICsgbWF0Y2gubGVuZ3RoKSAhPT0gJy0nIHx8IHRpdGxlLmNoYXJBdChpbmRleCAtIDEpID09PSAnLScpICYmIHRpdGxlLmNoYXJBdChpbmRleCAtIDEpLnNlYXJjaCgvW15cXHMtXS8pIDwgMCkge1xuICAgICAgcmV0dXJuIG1hdGNoLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgaWYgKG1hdGNoLnN1YnN0cigxKS5zZWFyY2goL1tBLVpdfFxcLi4vKSA+IC0xKSB7XG4gICAgICByZXR1cm4gbWF0Y2g7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbWF0Y2guc3Vic3RyKDEpO1xuICB9KTtcbn0iLCIvLyBHQSBzdHJpbmdzIG5lZWQgdG8gaGF2ZSBsZWFkaW5nL3RyYWlsaW5nIHdoaXRlc3BhY2UgdHJpbW1lZCwgYW5kIG5vdCBhbGxcbi8vIGJyb3dzZXJzIGhhdmUgU3RyaW5nLnByb3RvdG95cGUudHJpbSgpLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdHJpbShzKSB7XG4gIHJldHVybiBzICYmIHMudG9TdHJpbmcoKS5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJyk7XG59IiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNy4wLjJcbiAqIHJlYWN0LWpzeC1kZXYtcnVudGltZS5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxuLy8gQVRURU5USU9OXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXG4vLyBQbGVhc2UgY29uc2lkZXIgYWxzbyBhZGRpbmcgdG8gJ3JlYWN0LWRldnRvb2xzLXNoYXJlZC9zcmMvYmFja2VuZC9SZWFjdFN5bWJvbHMnXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IDB4ZWFjYTtcbmV4cG9ydHMuRnJhZ21lbnQgPSAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gMHhlYWNlO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gMHhlYWQ5O1xudmFyIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gMHhlYWRhO1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSAweGVhZDU7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IDB4ZWFkNztcbnZhciBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IDB4ZWFlMDtcbnZhciBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IDB4ZWFlMTtcbnZhciBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IDB4ZWFlMjtcbnZhciBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSAweGVhZTM7XG5cbmlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3IpIHtcbiAgdmFyIHN5bWJvbEZvciA9IFN5bWJvbC5mb3I7XG4gIFJFQUNUX0VMRU1FTlRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZWxlbWVudCcpO1xuICBSRUFDVF9QT1JUQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucG9ydGFsJyk7XG4gIGV4cG9ydHMuRnJhZ21lbnQgPSBzeW1ib2xGb3IoJ3JlYWN0LmZyYWdtZW50Jyk7XG4gIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN0cmljdF9tb2RlJyk7XG4gIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb2ZpbGVyJyk7XG4gIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb3ZpZGVyJyk7XG4gIFJFQUNUX0NPTlRFWFRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuY29udGV4dCcpO1xuICBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpO1xuICBSRUFDVF9TVVNQRU5TRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZScpO1xuICBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKTtcbiAgUkVBQ1RfTUVNT19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5tZW1vJyk7XG4gIFJFQUNUX0xBWllfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGF6eScpO1xuICBSRUFDVF9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5ibG9jaycpO1xuICBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2VydmVyLmJsb2NrJyk7XG4gIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJyk7XG4gIFJFQUNUX1NDT1BFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNjb3BlJyk7XG4gIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vcGFxdWUuaWQnKTtcbiAgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmRlYnVnX3RyYWNlX21vZGUnKTtcbiAgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9mZnNjcmVlbicpO1xuICBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxlZ2FjeV9oaWRkZW4nKTtcbn1cblxudmFyIE1BWUJFX0lURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xudmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InO1xuZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gIGlmIChtYXliZUl0ZXJhYmxlID09PSBudWxsIHx8IHR5cGVvZiBtYXliZUl0ZXJhYmxlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIG1heWJlSXRlcmF0b3IgPSBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtNQVlCRV9JVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdO1xuXG4gIGlmICh0eXBlb2YgbWF5YmVJdGVyYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBtYXliZUl0ZXJhdG9yO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBSZWFjdFNoYXJlZEludGVybmFscyA9IFJlYWN0Ll9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEO1xuXG5mdW5jdGlvbiBlcnJvcihmb3JtYXQpIHtcbiAge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHByaW50V2FybmluZygnZXJyb3InLCBmb3JtYXQsIGFyZ3MpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHByaW50V2FybmluZyhsZXZlbCwgZm9ybWF0LCBhcmdzKSB7XG4gIC8vIFdoZW4gY2hhbmdpbmcgdGhpcyBsb2dpYywgeW91IG1pZ2h0IHdhbnQgdG8gYWxzb1xuICAvLyB1cGRhdGUgY29uc29sZVdpdGhTdGFja0Rldi53d3cuanMgYXMgd2VsbC5cbiAge1xuICAgIHZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbiAgICB2YXIgc3RhY2sgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0oKTtcblxuICAgIGlmIChzdGFjayAhPT0gJycpIHtcbiAgICAgIGZvcm1hdCArPSAnJXMnO1xuICAgICAgYXJncyA9IGFyZ3MuY29uY2F0KFtzdGFja10pO1xuICAgIH1cblxuICAgIHZhciBhcmdzV2l0aEZvcm1hdCA9IGFyZ3MubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gJycgKyBpdGVtO1xuICAgIH0pOyAvLyBDYXJlZnVsOiBSTiBjdXJyZW50bHkgZGVwZW5kcyBvbiB0aGlzIHByZWZpeFxuXG4gICAgYXJnc1dpdGhGb3JtYXQudW5zaGlmdCgnV2FybmluZzogJyArIGZvcm1hdCk7IC8vIFdlIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIHNwcmVhZCAob3IgLmFwcGx5KSBkaXJlY3RseSBiZWNhdXNlIGl0XG4gICAgLy8gYnJlYWtzIElFOTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xMzYxMFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmdcblxuICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGNvbnNvbGVbbGV2ZWxdLCBjb25zb2xlLCBhcmdzV2l0aEZvcm1hdCk7XG4gIH1cbn1cblxuLy8gRmlsdGVyIGNlcnRhaW4gRE9NIGF0dHJpYnV0ZXMgKGUuZy4gc3JjLCBocmVmKSBpZiB0aGVpciB2YWx1ZXMgYXJlIGVtcHR5IHN0cmluZ3MuXG5cbnZhciBlbmFibGVTY29wZUFQSSA9IGZhbHNlOyAvLyBFeHBlcmltZW50YWwgQ3JlYXRlIEV2ZW50IEhhbmRsZSBBUEkuXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBOb3RlOiB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyAoZS5nLiBpZiBpdCdzIGEgcG9seWZpbGwpLlxuXG5cbiAgaWYgKHR5cGUgPT09IGV4cG9ydHMuRnJhZ21lbnQgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSB8fCBlbmFibGVTY29wZUFQSSApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCkge1xuICAgIGlmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFIHx8IHR5cGVbMF0gPT09IFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldFdyYXBwZWROYW1lKG91dGVyVHlwZSwgaW5uZXJUeXBlLCB3cmFwcGVyTmFtZSkge1xuICB2YXIgZnVuY3Rpb25OYW1lID0gaW5uZXJUeXBlLmRpc3BsYXlOYW1lIHx8IGlubmVyVHlwZS5uYW1lIHx8ICcnO1xuICByZXR1cm4gb3V0ZXJUeXBlLmRpc3BsYXlOYW1lIHx8IChmdW5jdGlvbk5hbWUgIT09ICcnID8gd3JhcHBlck5hbWUgKyBcIihcIiArIGZ1bmN0aW9uTmFtZSArIFwiKVwiIDogd3JhcHBlck5hbWUpO1xufVxuXG5mdW5jdGlvbiBnZXRDb250ZXh0TmFtZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8ICdDb250ZXh0Jztcbn1cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKSB7XG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICAvLyBIb3N0IHJvb3QsIHRleHQgbm9kZSBvciBqdXN0IGludmFsaWQgdHlwZS5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHtcbiAgICBpZiAodHlwZW9mIHR5cGUudGFnID09PSAnbnVtYmVyJykge1xuICAgICAgZXJyb3IoJ1JlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgb2JqZWN0IGluIGdldENvbXBvbmVudE5hbWUoKS4gJyArICdUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8IG51bGw7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIGV4cG9ydHMuRnJhZ21lbnQ6XG4gICAgICByZXR1cm4gJ0ZyYWdtZW50JztcblxuICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICByZXR1cm4gJ1BvcnRhbCc7XG5cbiAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICByZXR1cm4gJ1Byb2ZpbGVyJztcblxuICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgIHJldHVybiAnU3RyaWN0TW9kZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZUxpc3QnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgIHZhciBjb250ZXh0ID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKGNvbnRleHQpICsgJy5Db25zdW1lcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgdmFyIHByb3ZpZGVyID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKHByb3ZpZGVyLl9jb250ZXh0KSArICcuUHJvdmlkZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRXcmFwcGVkTmFtZSh0eXBlLCB0eXBlLnJlbmRlciwgJ0ZvcndhcmRSZWYnKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHR5cGUudHlwZSk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfQkxPQ0tfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS5fcmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZShpbml0KHBheWxvYWQpKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuLy8gSGVscGVycyB0byBwYXRjaCBjb25zb2xlLmxvZ3MgdG8gYXZvaWQgbG9nZ2luZyBkdXJpbmcgc2lkZS1lZmZlY3QgZnJlZVxuLy8gcmVwbGF5aW5nIG9uIHJlbmRlciBmdW5jdGlvbi4gVGhpcyBjdXJyZW50bHkgb25seSBwYXRjaGVzIHRoZSBvYmplY3Rcbi8vIGxhemlseSB3aGljaCB3b24ndCBjb3ZlciBpZiB0aGUgbG9nIGZ1bmN0aW9uIHdhcyBleHRyYWN0ZWQgZWFnZXJseS5cbi8vIFdlIGNvdWxkIGFsc28gZWFnZXJseSBwYXRjaCB0aGUgbWV0aG9kLlxudmFyIGRpc2FibGVkRGVwdGggPSAwO1xudmFyIHByZXZMb2c7XG52YXIgcHJldkluZm87XG52YXIgcHJldldhcm47XG52YXIgcHJldkVycm9yO1xudmFyIHByZXZHcm91cDtcbnZhciBwcmV2R3JvdXBDb2xsYXBzZWQ7XG52YXIgcHJldkdyb3VwRW5kO1xuXG5mdW5jdGlvbiBkaXNhYmxlZExvZygpIHt9XG5cbmRpc2FibGVkTG9nLl9fcmVhY3REaXNhYmxlZExvZyA9IHRydWU7XG5mdW5jdGlvbiBkaXNhYmxlTG9ncygpIHtcbiAge1xuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHByZXZMb2cgPSBjb25zb2xlLmxvZztcbiAgICAgIHByZXZJbmZvID0gY29uc29sZS5pbmZvO1xuICAgICAgcHJldldhcm4gPSBjb25zb2xlLndhcm47XG4gICAgICBwcmV2RXJyb3IgPSBjb25zb2xlLmVycm9yO1xuICAgICAgcHJldkdyb3VwID0gY29uc29sZS5ncm91cDtcbiAgICAgIHByZXZHcm91cENvbGxhcHNlZCA9IGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQ7XG4gICAgICBwcmV2R3JvdXBFbmQgPSBjb25zb2xlLmdyb3VwRW5kOyAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzE5MDk5XG5cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogZGlzYWJsZWRMb2csXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGluZm86IHByb3BzLFxuICAgICAgICBsb2c6IHByb3BzLFxuICAgICAgICB3YXJuOiBwcm9wcyxcbiAgICAgICAgZXJyb3I6IHByb3BzLFxuICAgICAgICBncm91cDogcHJvcHMsXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBFbmQ6IHByb3BzXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgZGlzYWJsZWREZXB0aCsrO1xuICB9XG59XG5mdW5jdGlvbiByZWVuYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBkaXNhYmxlZERlcHRoLS07XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgbG9nOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2TG9nXG4gICAgICAgIH0pLFxuICAgICAgICBpbmZvOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2SW5mb1xuICAgICAgICB9KSxcbiAgICAgICAgd2FybjogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldldhcm5cbiAgICAgICAgfSksXG4gICAgICAgIGVycm9yOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2RXJyb3JcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBDb2xsYXBzZWRcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwRW5kOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBFbmRcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA8IDApIHtcbiAgICAgIGVycm9yKCdkaXNhYmxlZERlcHRoIGZlbGwgYmVsb3cgemVyby4gJyArICdUaGlzIGlzIGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudERpc3BhdGNoZXIgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnREaXNwYXRjaGVyO1xudmFyIHByZWZpeDtcbmZ1bmN0aW9uIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUsIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgaWYgKHByZWZpeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBFeHRyYWN0IHRoZSBWTSBzcGVjaWZpYyBwcmVmaXggdXNlZCBieSBlYWNoIGxpbmUuXG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICB2YXIgbWF0Y2ggPSB4LnN0YWNrLnRyaW0oKS5tYXRjaCgvXFxuKCAqKGF0ICk/KS8pO1xuICAgICAgICBwcmVmaXggPSBtYXRjaCAmJiBtYXRjaFsxXSB8fCAnJztcbiAgICAgIH1cbiAgICB9IC8vIFdlIHVzZSB0aGUgcHJlZml4IHRvIGVuc3VyZSBvdXIgc3RhY2tzIGxpbmUgdXAgd2l0aCBuYXRpdmUgc3RhY2sgZnJhbWVzLlxuXG5cbiAgICByZXR1cm4gJ1xcbicgKyBwcmVmaXggKyBuYW1lO1xuICB9XG59XG52YXIgcmVlbnRyeSA9IGZhbHNlO1xudmFyIGNvbXBvbmVudEZyYW1lQ2FjaGU7XG5cbntcbiAgdmFyIFBvc3NpYmx5V2Vha01hcCA9IHR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nID8gV2Vha01hcCA6IE1hcDtcbiAgY29tcG9uZW50RnJhbWVDYWNoZSA9IG5ldyBQb3NzaWJseVdlYWtNYXAoKTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgY29uc3RydWN0KSB7XG4gIC8vIElmIHNvbWV0aGluZyBhc2tlZCBmb3IgYSBzdGFjayBpbnNpZGUgYSBmYWtlIHJlbmRlciwgaXQgc2hvdWxkIGdldCBpZ25vcmVkLlxuICBpZiAoIWZuIHx8IHJlZW50cnkpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICB7XG4gICAgdmFyIGZyYW1lID0gY29tcG9uZW50RnJhbWVDYWNoZS5nZXQoZm4pO1xuXG4gICAgaWYgKGZyYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmcmFtZTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29udHJvbDtcbiAgcmVlbnRyeSA9IHRydWU7XG4gIHZhciBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlID0gRXJyb3IucHJlcGFyZVN0YWNrVHJhY2U7IC8vICRGbG93Rml4TWUgSXQgZG9lcyBhY2NlcHQgdW5kZWZpbmVkLlxuXG4gIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gdW5kZWZpbmVkO1xuICB2YXIgcHJldmlvdXNEaXNwYXRjaGVyO1xuXG4gIHtcbiAgICBwcmV2aW91c0Rpc3BhdGNoZXIgPSBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQ7IC8vIFNldCB0aGUgZGlzcGF0Y2hlciBpbiBERVYgYmVjYXVzZSB0aGlzIG1pZ2h0IGJlIGNhbGwgaW4gdGhlIHJlbmRlciBmdW5jdGlvblxuICAgIC8vIGZvciB3YXJuaW5ncy5cblxuICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudCA9IG51bGw7XG4gICAgZGlzYWJsZUxvZ3MoKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8gVGhpcyBzaG91bGQgdGhyb3cuXG4gICAgaWYgKGNvbnN0cnVjdCkge1xuICAgICAgLy8gU29tZXRoaW5nIHNob3VsZCBiZSBzZXR0aW5nIHRoZSBwcm9wcyBpbiB0aGUgY29uc3RydWN0b3IuXG4gICAgICB2YXIgRmFrZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH07IC8vICRGbG93Rml4TWVcblxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmFrZS5wcm90b3R5cGUsICdwcm9wcycsIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gV2UgdXNlIGEgdGhyb3dpbmcgc2V0dGVyIGluc3RlYWQgb2YgZnJvemVuIG9yIG5vbi13cml0YWJsZSBwcm9wc1xuICAgICAgICAgIC8vIGJlY2F1c2UgdGhhdCB3b24ndCB0aHJvdyBpbiBhIG5vbi1zdHJpY3QgbW9kZSBmdW5jdGlvbi5cbiAgICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSAnb2JqZWN0JyAmJiBSZWZsZWN0LmNvbnN0cnVjdCkge1xuICAgICAgICAvLyBXZSBjb25zdHJ1Y3QgYSBkaWZmZXJlbnQgY29udHJvbCBmb3IgdGhpcyBjYXNlIHRvIGluY2x1ZGUgYW55IGV4dHJhXG4gICAgICAgIC8vIGZyYW1lcyBhZGRlZCBieSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoRmFrZSwgW10pO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChmbiwgW10sIEZha2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBGYWtlLmNhbGwoKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgZm4uY2FsbChGYWtlLnByb3RvdHlwZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgfVxuXG4gICAgICBmbigpO1xuICAgIH1cbiAgfSBjYXRjaCAoc2FtcGxlKSB7XG4gICAgLy8gVGhpcyBpcyBpbmxpbmVkIG1hbnVhbGx5IGJlY2F1c2UgY2xvc3VyZSBkb2Vzbid0IGRvIGl0IGZvciB1cy5cbiAgICBpZiAoc2FtcGxlICYmIGNvbnRyb2wgJiYgdHlwZW9mIHNhbXBsZS5zdGFjayA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIFRoaXMgZXh0cmFjdHMgdGhlIGZpcnN0IGZyYW1lIGZyb20gdGhlIHNhbXBsZSB0aGF0IGlzbid0IGFsc28gaW4gdGhlIGNvbnRyb2wuXG4gICAgICAvLyBTa2lwcGluZyBvbmUgZnJhbWUgdGhhdCB3ZSBhc3N1bWUgaXMgdGhlIGZyYW1lIHRoYXQgY2FsbHMgdGhlIHR3by5cbiAgICAgIHZhciBzYW1wbGVMaW5lcyA9IHNhbXBsZS5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgY29udHJvbExpbmVzID0gY29udHJvbC5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgcyA9IHNhbXBsZUxpbmVzLmxlbmd0aCAtIDE7XG4gICAgICB2YXIgYyA9IGNvbnRyb2xMaW5lcy5sZW5ndGggLSAxO1xuXG4gICAgICB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCAmJiBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgIC8vIFdlIGV4cGVjdCBhdCBsZWFzdCBvbmUgc3RhY2sgZnJhbWUgdG8gYmUgc2hhcmVkLlxuICAgICAgICAvLyBUeXBpY2FsbHkgdGhpcyB3aWxsIGJlIHRoZSByb290IG1vc3Qgb25lLiBIb3dldmVyLCBzdGFjayBmcmFtZXMgbWF5IGJlXG4gICAgICAgIC8vIGN1dCBvZmYgZHVlIHRvIG1heGltdW0gc3RhY2sgbGltaXRzLiBJbiB0aGlzIGNhc2UsIG9uZSBtYXliZSBjdXQgb2ZmXG4gICAgICAgIC8vIGVhcmxpZXIgdGhhbiB0aGUgb3RoZXIuIFdlIGFzc3VtZSB0aGF0IHRoZSBzYW1wbGUgaXMgbG9uZ2VyIG9yIHRoZSBzYW1lXG4gICAgICAgIC8vIGFuZCB0aGVyZSBmb3IgY3V0IG9mZiBlYXJsaWVyLiBTbyB3ZSBzaG91bGQgZmluZCB0aGUgcm9vdCBtb3N0IGZyYW1lIGluXG4gICAgICAgIC8vIHRoZSBzYW1wbGUgc29tZXdoZXJlIGluIHRoZSBjb250cm9sLlxuICAgICAgICBjLS07XG4gICAgICB9XG5cbiAgICAgIGZvciAoOyBzID49IDEgJiYgYyA+PSAwOyBzLS0sIGMtLSkge1xuICAgICAgICAvLyBOZXh0IHdlIGZpbmQgdGhlIGZpcnN0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHdoaWNoIHNob3VsZCBiZSB0aGVcbiAgICAgICAgLy8gZnJhbWUgdGhhdCBjYWxsZWQgb3VyIHNhbXBsZSBmdW5jdGlvbiBhbmQgdGhlIGNvbnRyb2wuXG4gICAgICAgIGlmIChzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgLy8gSW4gVjgsIHRoZSBmaXJzdCBsaW5lIGlzIGRlc2NyaWJpbmcgdGhlIG1lc3NhZ2UgYnV0IG90aGVyIFZNcyBkb24ndC5cbiAgICAgICAgICAvLyBJZiB3ZSdyZSBhYm91dCB0byByZXR1cm4gdGhlIGZpcnN0IGxpbmUsIGFuZCB0aGUgY29udHJvbCBpcyBhbHNvIG9uIHRoZSBzYW1lXG4gICAgICAgICAgLy8gbGluZSwgdGhhdCdzIGEgcHJldHR5IGdvb2QgaW5kaWNhdG9yIHRoYXQgb3VyIHNhbXBsZSB0aHJldyBhdCBzYW1lIGxpbmUgYXNcbiAgICAgICAgICAvLyB0aGUgY29udHJvbC4gSS5lLiBiZWZvcmUgd2UgZW50ZXJlZCB0aGUgc2FtcGxlIGZyYW1lLiBTbyB3ZSBpZ25vcmUgdGhpcyByZXN1bHQuXG4gICAgICAgICAgLy8gVGhpcyBjYW4gaGFwcGVuIGlmIHlvdSBwYXNzZWQgYSBjbGFzcyB0byBmdW5jdGlvbiBjb21wb25lbnQsIG9yIG5vbi1mdW5jdGlvbi5cbiAgICAgICAgICBpZiAocyAhPT0gMSB8fCBjICE9PSAxKSB7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgIHMtLTtcbiAgICAgICAgICAgICAgYy0tOyAvLyBXZSBtYXkgc3RpbGwgaGF2ZSBzaW1pbGFyIGludGVybWVkaWF0ZSBmcmFtZXMgZnJvbSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgICAgICAgIC8vIFRoZSBuZXh0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHNob3VsZCBiZSBvdXIgbWF0Y2ggdGhvdWdoLlxuXG4gICAgICAgICAgICAgIGlmIChjIDwgMCB8fCBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgICAgICAgLy8gVjggYWRkcyBhIFwibmV3XCIgcHJlZml4IGZvciBuYXRpdmUgY2xhc3Nlcy4gTGV0J3MgcmVtb3ZlIGl0IHRvIG1ha2UgaXQgcHJldHRpZXIuXG4gICAgICAgICAgICAgICAgdmFyIF9mcmFtZSA9ICdcXG4nICsgc2FtcGxlTGluZXNbc10ucmVwbGFjZSgnIGF0IG5ldyAnLCAnIGF0ICcpO1xuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgX2ZyYW1lKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IC8vIFJldHVybiB0aGUgbGluZSB3ZSBmb3VuZC5cblxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9mcmFtZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZmluYWxseSB7XG4gICAgcmVlbnRyeSA9IGZhbHNlO1xuXG4gICAge1xuICAgICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50ID0gcHJldmlvdXNEaXNwYXRjaGVyO1xuICAgICAgcmVlbmFibGVMb2dzKCk7XG4gICAgfVxuXG4gICAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlO1xuICB9IC8vIEZhbGxiYWNrIHRvIGp1c3QgdXNpbmcgdGhlIG5hbWUgaWYgd2UgY291bGRuJ3QgbWFrZSBpdCB0aHJvdy5cblxuXG4gIHZhciBuYW1lID0gZm4gPyBmbi5kaXNwbGF5TmFtZSB8fCBmbi5uYW1lIDogJyc7XG4gIHZhciBzeW50aGV0aWNGcmFtZSA9IG5hbWUgPyBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lKSA6ICcnO1xuXG4gIHtcbiAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgc3ludGhldGljRnJhbWUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzeW50aGV0aWNGcmFtZTtcbn1cbmZ1bmN0aW9uIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZShmbiwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgZmFsc2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3VsZENvbnN0cnVjdChDb21wb25lbnQpIHtcbiAgdmFyIHByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG4gIHJldHVybiAhIShwcm90b3R5cGUgJiYgcHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZSwgc291cmNlLCBvd25lckZuKSB7XG5cbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHtcbiAgICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKHR5cGUsIHNob3VsZENvbnN0cnVjdCh0eXBlKSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSh0eXBlKTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2UnKTtcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZUxpc3QnKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSh0eXBlLnJlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAvLyBNZW1vIG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUudHlwZSwgc291cmNlLCBvd25lckZuKTtcblxuICAgICAgY2FzZSBSRUFDVF9CTE9DS19UWVBFOlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKHR5cGUuX3JlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gTGF6eSBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoaW5pdChwYXlsb2FkKSwgc291cmNlLCBvd25lckZuKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7fVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG52YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGVsZW1lbnQpIHtcbiAge1xuICAgIC8vICRGbG93Rml4TWUgVGhpcyBpcyBva2F5IGJ1dCBGbG93IGRvZXNuJ3Qga25vdyBpdC5cbiAgICB2YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuXG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKGhhcyh0eXBlU3BlY3MsIHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yJDEgPSB2b2lkIDA7IC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGlmICh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcigoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7ICcgKyAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyAnYC4nICsgJ1RoaXMgb2Z0ZW4gaGFwcGVucyBiZWNhdXNlIG9mIHR5cG9zIHN1Y2ggYXMgYFByb3BUeXBlcy5mdW5jdGlvbmAgaW5zdGVhZCBvZiBgUHJvcFR5cGVzLmZ1bmNgLicpO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZXJyb3IkMSA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJyk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IkMSA9IGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgJiYgIShlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignJXM6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAlcycgKyAnIGAlc2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICsgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICVzLiAnICsgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgKyAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICsgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiBlcnJvciQxKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yJDEubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IkMS5tZXNzYWdlXSA9IHRydWU7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignRmFpbGVkICVzIHR5cGU6ICVzJywgbG9jYXRpb24sIGVycm9yJDEubWVzc2FnZSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50T3duZXIgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnRPd25lcjtcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgUkVTRVJWRURfUFJPUFMgPSB7XG4gIGtleTogdHJ1ZSxcbiAgcmVmOiB0cnVlLFxuICBfX3NlbGY6IHRydWUsXG4gIF9fc291cmNlOiB0cnVlXG59O1xudmFyIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duO1xudmFyIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duO1xudmFyIGRpZFdhcm5BYm91dFN0cmluZ1JlZnM7XG5cbntcbiAgZGlkV2FybkFib3V0U3RyaW5nUmVmcyA9IHt9O1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZFJlZihjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ3JlZicpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdyZWYnKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLnJlZiAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZEtleShjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ2tleScpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdrZXknKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLmtleSAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnLCBzZWxmKSB7XG4gIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5yZWYgPT09ICdzdHJpbmcnICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQgJiYgc2VsZiAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnN0YXRlTm9kZSAhPT0gc2VsZikge1xuICAgICAgdmFyIGNvbXBvbmVudE5hbWUgPSBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmICghZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSkge1xuICAgICAgICBlcnJvcignQ29tcG9uZW50IFwiJXNcIiBjb250YWlucyB0aGUgc3RyaW5nIHJlZiBcIiVzXCIuICcgKyAnU3VwcG9ydCBmb3Igc3RyaW5nIHJlZnMgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuICcgKyAnVGhpcyBjYXNlIGNhbm5vdCBiZSBhdXRvbWF0aWNhbGx5IGNvbnZlcnRlZCB0byBhbiBhcnJvdyBmdW5jdGlvbi4gJyArICdXZSBhc2sgeW91IHRvIG1hbnVhbGx5IGZpeCB0aGlzIGNhc2UgYnkgdXNpbmcgdXNlUmVmKCkgb3IgY3JlYXRlUmVmKCkgaW5zdGVhZC4gJyArICdMZWFybiBtb3JlIGFib3V0IHVzaW5nIHJlZnMgc2FmZWx5IGhlcmU6ICcgKyAnaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3N0cmljdC1tb2RlLXN0cmluZy1yZWYnLCBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSksIGNvbmZpZy5yZWYpO1xuXG4gICAgICAgIGRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAge1xuICAgIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGBrZXlgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdhcm5BYm91dEFjY2Vzc2luZ0tleS5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAna2V5Jywge1xuICAgICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdLZXksXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAge1xuICAgIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGByZWZgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdhcm5BYm91dEFjY2Vzc2luZ1JlZi5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAncmVmJywge1xuICAgICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxufVxuLyoqXG4gKiBGYWN0b3J5IG1ldGhvZCB0byBjcmVhdGUgYSBuZXcgUmVhY3QgZWxlbWVudC4gVGhpcyBubyBsb25nZXIgYWRoZXJlcyB0b1xuICogdGhlIGNsYXNzIHBhdHRlcm4sIHNvIGRvIG5vdCB1c2UgbmV3IHRvIGNhbGwgaXQuIEFsc28sIGluc3RhbmNlb2YgY2hlY2tcbiAqIHdpbGwgbm90IHdvcmsuIEluc3RlYWQgdGVzdCAkJHR5cGVvZiBmaWVsZCBhZ2FpbnN0IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSB0byBjaGVja1xuICogaWYgc29tZXRoaW5nIGlzIGEgUmVhY3QgRWxlbWVudC5cbiAqXG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7Kn0gcHJvcHNcbiAqIEBwYXJhbSB7Kn0ga2V5XG4gKiBAcGFyYW0ge3N0cmluZ3xvYmplY3R9IHJlZlxuICogQHBhcmFtIHsqfSBvd25lclxuICogQHBhcmFtIHsqfSBzZWxmIEEgKnRlbXBvcmFyeSogaGVscGVyIHRvIGRldGVjdCBwbGFjZXMgd2hlcmUgYHRoaXNgIGlzXG4gKiBkaWZmZXJlbnQgZnJvbSB0aGUgYG93bmVyYCB3aGVuIFJlYWN0LmNyZWF0ZUVsZW1lbnQgaXMgY2FsbGVkLCBzbyB0aGF0IHdlXG4gKiBjYW4gd2Fybi4gV2Ugd2FudCB0byBnZXQgcmlkIG9mIG93bmVyIGFuZCByZXBsYWNlIHN0cmluZyBgcmVmYHMgd2l0aCBhcnJvd1xuICogZnVuY3Rpb25zLCBhbmQgYXMgbG9uZyBhcyBgdGhpc2AgYW5kIG93bmVyIGFyZSB0aGUgc2FtZSwgdGhlcmUgd2lsbCBiZSBub1xuICogY2hhbmdlIGluIGJlaGF2aW9yLlxuICogQHBhcmFtIHsqfSBzb3VyY2UgQW4gYW5ub3RhdGlvbiBvYmplY3QgKGFkZGVkIGJ5IGEgdHJhbnNwaWxlciBvciBvdGhlcndpc2UpXG4gKiBpbmRpY2F0aW5nIGZpbGVuYW1lLCBsaW5lIG51bWJlciwgYW5kL29yIG90aGVyIGluZm9ybWF0aW9uLlxuICogQGludGVybmFsXG4gKi9cblxuXG52YXIgUmVhY3RFbGVtZW50ID0gZnVuY3Rpb24gKHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcykge1xuICB2YXIgZWxlbWVudCA9IHtcbiAgICAvLyBUaGlzIHRhZyBhbGxvd3MgdXMgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyBhcyBhIFJlYWN0IEVsZW1lbnRcbiAgICAkJHR5cGVvZjogUkVBQ1RfRUxFTUVOVF9UWVBFLFxuICAgIC8vIEJ1aWx0LWluIHByb3BlcnRpZXMgdGhhdCBiZWxvbmcgb24gdGhlIGVsZW1lbnRcbiAgICB0eXBlOiB0eXBlLFxuICAgIGtleToga2V5LFxuICAgIHJlZjogcmVmLFxuICAgIHByb3BzOiBwcm9wcyxcbiAgICAvLyBSZWNvcmQgdGhlIGNvbXBvbmVudCByZXNwb25zaWJsZSBmb3IgY3JlYXRpbmcgdGhpcyBlbGVtZW50LlxuICAgIF9vd25lcjogb3duZXJcbiAgfTtcblxuICB7XG4gICAgLy8gVGhlIHZhbGlkYXRpb24gZmxhZyBpcyBjdXJyZW50bHkgbXV0YXRpdmUuIFdlIHB1dCBpdCBvblxuICAgIC8vIGFuIGV4dGVybmFsIGJhY2tpbmcgc3RvcmUgc28gdGhhdCB3ZSBjYW4gZnJlZXplIHRoZSB3aG9sZSBvYmplY3QuXG4gICAgLy8gVGhpcyBjYW4gYmUgcmVwbGFjZWQgd2l0aCBhIFdlYWtNYXAgb25jZSB0aGV5IGFyZSBpbXBsZW1lbnRlZCBpblxuICAgIC8vIGNvbW1vbmx5IHVzZWQgZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzLlxuICAgIGVsZW1lbnQuX3N0b3JlID0ge307IC8vIFRvIG1ha2UgY29tcGFyaW5nIFJlYWN0RWxlbWVudHMgZWFzaWVyIGZvciB0ZXN0aW5nIHB1cnBvc2VzLCB3ZSBtYWtlXG4gICAgLy8gdGhlIHZhbGlkYXRpb24gZmxhZyBub24tZW51bWVyYWJsZSAod2hlcmUgcG9zc2libGUsIHdoaWNoIHNob3VsZFxuICAgIC8vIGluY2x1ZGUgZXZlcnkgZW52aXJvbm1lbnQgd2UgcnVuIHRlc3RzIGluKSwgc28gdGhlIHRlc3QgZnJhbWV3b3JrXG4gICAgLy8gaWdub3JlcyBpdC5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50Ll9zdG9yZSwgJ3ZhbGlkYXRlZCcsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IGZhbHNlXG4gICAgfSk7IC8vIHNlbGYgYW5kIHNvdXJjZSBhcmUgREVWIG9ubHkgcHJvcGVydGllcy5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NlbGYnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc2VsZlxuICAgIH0pOyAvLyBUd28gZWxlbWVudHMgY3JlYXRlZCBpbiB0d28gZGlmZmVyZW50IHBsYWNlcyBzaG91bGQgYmUgY29uc2lkZXJlZFxuICAgIC8vIGVxdWFsIGZvciB0ZXN0aW5nIHB1cnBvc2VzIGFuZCB0aGVyZWZvcmUgd2UgaGlkZSBpdCBmcm9tIGVudW1lcmF0aW9uLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc291cmNlJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNvdXJjZVxuICAgIH0pO1xuXG4gICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudC5wcm9wcyk7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufTtcbi8qKlxuICogaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0anMvcmZjcy9wdWxsLzEwN1xuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqL1xuXG5mdW5jdGlvbiBqc3hERVYodHlwZSwgY29uZmlnLCBtYXliZUtleSwgc291cmNlLCBzZWxmKSB7XG4gIHtcbiAgICB2YXIgcHJvcE5hbWU7IC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcblxuICAgIHZhciBwcm9wcyA9IHt9O1xuICAgIHZhciBrZXkgPSBudWxsO1xuICAgIHZhciByZWYgPSBudWxsOyAvLyBDdXJyZW50bHksIGtleSBjYW4gYmUgc3ByZWFkIGluIGFzIGEgcHJvcC4gVGhpcyBjYXVzZXMgYSBwb3RlbnRpYWxcbiAgICAvLyBpc3N1ZSBpZiBrZXkgaXMgYWxzbyBleHBsaWNpdGx5IGRlY2xhcmVkIChpZS4gPGRpdiB7Li4ucHJvcHN9IGtleT1cIkhpXCIgLz5cbiAgICAvLyBvciA8ZGl2IGtleT1cIkhpXCIgey4uLnByb3BzfSAvPiApLiBXZSB3YW50IHRvIGRlcHJlY2F0ZSBrZXkgc3ByZWFkLFxuICAgIC8vIGJ1dCBhcyBhbiBpbnRlcm1lZGlhcnkgc3RlcCwgd2Ugd2lsbCB1c2UganN4REVWIGZvciBldmVyeXRoaW5nIGV4Y2VwdFxuICAgIC8vIDxkaXYgey4uLnByb3BzfSBrZXk9XCJIaVwiIC8+LCBiZWNhdXNlIHdlIGFyZW4ndCBjdXJyZW50bHkgYWJsZSB0byB0ZWxsIGlmXG4gICAgLy8ga2V5IGlzIGV4cGxpY2l0bHkgZGVjbGFyZWQgdG8gYmUgdW5kZWZpbmVkIG9yIG5vdC5cblxuICAgIGlmIChtYXliZUtleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBrZXkgPSAnJyArIG1heWJlS2V5O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG4gICAgICB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnLCBzZWxmKTtcbiAgICB9IC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIGFyZSBhZGRlZCB0byBhIG5ldyBwcm9wcyBvYmplY3RcblxuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9IC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuXG5cbiAgICBpZiAodHlwZSAmJiB0eXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgdmFyIGRlZmF1bHRQcm9wcyA9IHR5cGUuZGVmYXVsdFByb3BzO1xuXG4gICAgICBmb3IgKHByb3BOYW1lIGluIGRlZmF1bHRQcm9wcykge1xuICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGtleSB8fCByZWYpIHtcbiAgICAgIHZhciBkaXNwbGF5TmFtZSA9IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nID8gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgJ1Vua25vd24nIDogdHlwZTtcblxuICAgICAgaWYgKGtleSkge1xuICAgICAgICBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVmKSB7XG4gICAgICAgIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0RWxlbWVudCh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LCBwcm9wcyk7XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudE93bmVyJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnRPd25lcjtcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duO1xuXG57XG4gIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gZmFsc2U7XG59XG4vKipcbiAqIFZlcmlmaWVzIHRoZSBvYmplY3QgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2lzdmFsaWRlbGVtZW50XG4gKiBAcGFyYW0gez9vYmplY3R9IG9iamVjdFxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBgb2JqZWN0YCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIEBmaW5hbFxuICovXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50KG9iamVjdCkge1xuICB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKSB7XG4gIHtcbiAgICBpZiAoUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50KSB7XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50LnR5cGUpO1xuXG4gICAgICBpZiAobmFtZSkge1xuICAgICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHRoZSByZW5kZXIgbWV0aG9kIG9mIGAnICsgbmFtZSArICdgLic7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHNvdXJjZSkge1xuICB7XG4gICAgaWYgKHNvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgZmlsZU5hbWUgPSBzb3VyY2UuZmlsZU5hbWUucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpO1xuICAgICAgdmFyIGxpbmVOdW1iZXIgPSBzb3VyY2UubGluZU51bWJlcjtcbiAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgeW91ciBjb2RlIGF0ICcgKyBmaWxlTmFtZSArICc6JyArIGxpbmVOdW1iZXIgKyAnLic7XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlcmUncyBubyBrZXkgZXhwbGljaXRseSBzZXQgb24gZHluYW1pYyBhcnJheXMgb2YgY2hpbGRyZW4gb3JcbiAqIG9iamVjdCBrZXlzIGFyZSBub3QgdmFsaWQuIFRoaXMgYWxsb3dzIHVzIHRvIGtlZXAgdHJhY2sgb2YgY2hpbGRyZW4gYmV0d2VlblxuICogdXBkYXRlcy5cbiAqL1xuXG5cbnZhciBvd25lckhhc0tleVVzZVdhcm5pbmcgPSB7fTtcblxuZnVuY3Rpb24gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICB2YXIgaW5mbyA9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuXG4gICAgaWYgKCFpbmZvKSB7XG4gICAgICB2YXIgcGFyZW50TmFtZSA9IHR5cGVvZiBwYXJlbnRUeXBlID09PSAnc3RyaW5nJyA/IHBhcmVudFR5cGUgOiBwYXJlbnRUeXBlLmRpc3BsYXlOYW1lIHx8IHBhcmVudFR5cGUubmFtZTtcblxuICAgICAgaWYgKHBhcmVudE5hbWUpIHtcbiAgICAgICAgaW5mbyA9IFwiXFxuXFxuQ2hlY2sgdGhlIHRvcC1sZXZlbCByZW5kZXIgY2FsbCB1c2luZyA8XCIgKyBwYXJlbnROYW1lICsgXCI+LlwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbmZvO1xuICB9XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIGFuIGV4cGxpY2l0IGtleSBhc3NpZ25lZCB0byBpdC5cbiAqIFRoaXMgZWxlbWVudCBpcyBpbiBhbiBhcnJheS4gVGhlIGFycmF5IGNvdWxkIGdyb3cgYW5kIHNocmluayBvciBiZVxuICogcmVvcmRlcmVkLiBBbGwgY2hpbGRyZW4gdGhhdCBoYXZlbid0IGFscmVhZHkgYmVlbiB2YWxpZGF0ZWQgYXJlIHJlcXVpcmVkIHRvXG4gKiBoYXZlIGEgXCJrZXlcIiBwcm9wZXJ0eSBhc3NpZ25lZCB0byBpdC4gRXJyb3Igc3RhdHVzZXMgYXJlIGNhY2hlZCBzbyBhIHdhcm5pbmdcbiAqIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnQgRWxlbWVudCB0aGF0IHJlcXVpcmVzIGEga2V5LlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIGVsZW1lbnQncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVFeHBsaWNpdEtleShlbGVtZW50LCBwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICBpZiAoIWVsZW1lbnQuX3N0b3JlIHx8IGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCB8fCBlbGVtZW50LmtleSAhPSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICB2YXIgY3VycmVudENvbXBvbmVudEVycm9ySW5mbyA9IGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSk7XG5cbiAgICBpZiAob3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgb3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dID0gdHJ1ZTsgLy8gVXN1YWxseSB0aGUgY3VycmVudCBvd25lciBpcyB0aGUgb2ZmZW5kZXIsIGJ1dCBpZiBpdCBhY2NlcHRzIGNoaWxkcmVuIGFzIGFcbiAgICAvLyBwcm9wZXJ0eSwgaXQgbWF5IGJlIHRoZSBjcmVhdG9yIG9mIHRoZSBjaGlsZCB0aGF0J3MgcmVzcG9uc2libGUgZm9yXG4gICAgLy8gYXNzaWduaW5nIGl0IGEga2V5LlxuXG4gICAgdmFyIGNoaWxkT3duZXIgPSAnJztcblxuICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQuX293bmVyICYmIGVsZW1lbnQuX293bmVyICE9PSBSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQpIHtcbiAgICAgIC8vIEdpdmUgdGhlIGNvbXBvbmVudCB0aGF0IG9yaWdpbmFsbHkgY3JlYXRlZCB0aGlzIGNoaWxkLlxuICAgICAgY2hpbGRPd25lciA9IFwiIEl0IHdhcyBwYXNzZWQgYSBjaGlsZCBmcm9tIFwiICsgZ2V0Q29tcG9uZW50TmFtZShlbGVtZW50Ll9vd25lci50eXBlKSArIFwiLlwiO1xuICAgIH1cblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCk7XG5cbiAgICBlcnJvcignRWFjaCBjaGlsZCBpbiBhIGxpc3Qgc2hvdWxkIGhhdmUgYSB1bmlxdWUgXCJrZXlcIiBwcm9wLicgKyAnJXMlcyBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3dhcm5pbmcta2V5cyBmb3IgbW9yZSBpbmZvcm1hdGlvbi4nLCBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvLCBjaGlsZE93bmVyKTtcblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gIH1cbn1cbi8qKlxuICogRW5zdXJlIHRoYXQgZXZlcnkgZWxlbWVudCBlaXRoZXIgaXMgcGFzc2VkIGluIGEgc3RhdGljIGxvY2F0aW9uLCBpbiBhblxuICogYXJyYXkgd2l0aCBhbiBleHBsaWNpdCBrZXlzIHByb3BlcnR5IGRlZmluZWQsIG9yIGluIGFuIG9iamVjdCBsaXRlcmFsXG4gKiB3aXRoIHZhbGlkIGtleSBwcm9wZXJ0eS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3ROb2RlfSBub2RlIFN0YXRpY2FsbHkgcGFzc2VkIGNoaWxkIG9mIGFueSB0eXBlLlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIG5vZGUncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVDaGlsZEtleXMobm9kZSwgcGFyZW50VHlwZSkge1xuICB7XG4gICAgaWYgKHR5cGVvZiBub2RlICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KG5vZGUpKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoaWxkID0gbm9kZVtpXTtcblxuICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShjaGlsZCwgcGFyZW50VHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzVmFsaWRFbGVtZW50KG5vZGUpKSB7XG4gICAgICAvLyBUaGlzIGVsZW1lbnQgd2FzIHBhc3NlZCBpbiBhIHZhbGlkIGxvY2F0aW9uLlxuICAgICAgaWYgKG5vZGUuX3N0b3JlKSB7XG4gICAgICAgIG5vZGUuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChub2RlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obm9kZSk7XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBFbnRyeSBpdGVyYXRvcnMgdXNlZCB0byBwcm92aWRlIGltcGxpY2l0IGtleXMsXG4gICAgICAgIC8vIGJ1dCBub3cgd2UgcHJpbnQgYSBzZXBhcmF0ZSB3YXJuaW5nIGZvciB0aGVtIGxhdGVyLlxuICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gbm9kZS5lbnRyaWVzKSB7XG4gICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG5vZGUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuXG4gICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoc3RlcC52YWx1ZSwgcGFyZW50VHlwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGFuIGVsZW1lbnQsIHZhbGlkYXRlIHRoYXQgaXRzIHByb3BzIGZvbGxvdyB0aGUgcHJvcFR5cGVzIGRlZmluaXRpb24sXG4gKiBwcm92aWRlZCBieSB0aGUgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCkge1xuICB7XG4gICAgdmFyIHR5cGUgPSBlbGVtZW50LnR5cGU7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCB8fCB0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHByb3BUeXBlcztcblxuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgLy8gTm90ZTogTWVtbyBvbmx5IGNoZWNrcyBvdXRlciBwcm9wcyBoZXJlLlxuICAgIC8vIElubmVyIHByb3BzIGFyZSBjaGVja2VkIGluIHRoZSByZWNvbmNpbGVyLlxuICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSkpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHByb3BUeXBlcykge1xuICAgICAgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKTtcbiAgICAgIGNoZWNrUHJvcFR5cGVzKHByb3BUeXBlcywgZWxlbWVudC5wcm9wcywgJ3Byb3AnLCBuYW1lLCBlbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKHR5cGUuUHJvcFR5cGVzICE9PSB1bmRlZmluZWQgJiYgIXByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duKSB7XG4gICAgICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IHRydWU7IC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG5cbiAgICAgIHZhciBfbmFtZSA9IGdldENvbXBvbmVudE5hbWUodHlwZSk7XG5cbiAgICAgIGVycm9yKCdDb21wb25lbnQgJXMgZGVjbGFyZWQgYFByb3BUeXBlc2AgaW5zdGVhZCBvZiBgcHJvcFR5cGVzYC4gRGlkIHlvdSBtaXNzcGVsbCB0aGUgcHJvcGVydHkgYXNzaWdubWVudD8nLCBfbmFtZSB8fCAnVW5rbm93bicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdHlwZS5nZXREZWZhdWx0UHJvcHMgPT09ICdmdW5jdGlvbicgJiYgIXR5cGUuZ2V0RGVmYXVsdFByb3BzLmlzUmVhY3RDbGFzc0FwcHJvdmVkKSB7XG4gICAgICBlcnJvcignZ2V0RGVmYXVsdFByb3BzIGlzIG9ubHkgdXNlZCBvbiBjbGFzc2ljIFJlYWN0LmNyZWF0ZUNsYXNzICcgKyAnZGVmaW5pdGlvbnMuIFVzZSBhIHN0YXRpYyBwcm9wZXJ0eSBuYW1lZCBgZGVmYXVsdFByb3BzYCBpbnN0ZWFkLicpO1xuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhIGZyYWdtZW50LCB2YWxpZGF0ZSB0aGF0IGl0IGNhbiBvbmx5IGJlIHByb3ZpZGVkIHdpdGggZnJhZ21lbnQgcHJvcHNcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBmcmFnbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVGcmFnbWVudFByb3BzKGZyYWdtZW50KSB7XG4gIHtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGZyYWdtZW50LnByb3BzKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmIChrZXkgIT09ICdjaGlsZHJlbicgJiYga2V5ICE9PSAna2V5Jykge1xuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgICBlcnJvcignSW52YWxpZCBwcm9wIGAlc2Agc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4gJyArICdSZWFjdC5GcmFnbWVudCBjYW4gb25seSBoYXZlIGBrZXlgIGFuZCBgY2hpbGRyZW5gIHByb3BzLicsIGtleSk7XG5cbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZyYWdtZW50LnJlZiAhPT0gbnVsbCkge1xuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgIGVycm9yKCdJbnZhbGlkIGF0dHJpYnV0ZSBgcmVmYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLicpO1xuXG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBqc3hXaXRoVmFsaWRhdGlvbih0eXBlLCBwcm9wcywga2V5LCBpc1N0YXRpY0NoaWxkcmVuLCBzb3VyY2UsIHNlbGYpIHtcbiAge1xuICAgIHZhciB2YWxpZFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSk7IC8vIFdlIHdhcm4gaW4gdGhpcyBjYXNlIGJ1dCBkb24ndCB0aHJvdy4gV2UgZXhwZWN0IHRoZSBlbGVtZW50IGNyZWF0aW9uIHRvXG4gICAgLy8gc3VjY2VlZCBhbmQgdGhlcmUgd2lsbCBsaWtlbHkgYmUgZXJyb3JzIGluIHJlbmRlci5cblxuICAgIGlmICghdmFsaWRUeXBlKSB7XG4gICAgICB2YXIgaW5mbyA9ICcnO1xuXG4gICAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmIE9iamVjdC5rZXlzKHR5cGUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBpbmZvICs9ICcgWW91IGxpa2VseSBmb3Jnb3QgdG8gZXhwb3J0IHlvdXIgY29tcG9uZW50IGZyb20gdGhlIGZpbGUgJyArIFwiaXQncyBkZWZpbmVkIGluLCBvciB5b3UgbWlnaHQgaGF2ZSBtaXhlZCB1cCBkZWZhdWx0IGFuZCBuYW1lZCBpbXBvcnRzLlwiO1xuICAgICAgfVxuXG4gICAgICB2YXIgc291cmNlSW5mbyA9IGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHNvdXJjZSk7XG5cbiAgICAgIGlmIChzb3VyY2VJbmZvKSB7XG4gICAgICAgIGluZm8gKz0gc291cmNlSW5mbztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZm8gKz0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG4gICAgICB9XG5cbiAgICAgIHZhciB0eXBlU3RyaW5nO1xuXG4gICAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgICB0eXBlU3RyaW5nID0gJ251bGwnO1xuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHR5cGUpKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSAnYXJyYXknO1xuICAgICAgfSBlbHNlIGlmICh0eXBlICE9PSB1bmRlZmluZWQgJiYgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSBcIjxcIiArIChnZXRDb21wb25lbnROYW1lKHR5cGUudHlwZSkgfHwgJ1Vua25vd24nKSArIFwiIC8+XCI7XG4gICAgICAgIGluZm8gPSAnIERpZCB5b3UgYWNjaWRlbnRhbGx5IGV4cG9ydCBhIEpTWCBsaXRlcmFsIGluc3RlYWQgb2YgYSBjb21wb25lbnQ/JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSB0eXBlb2YgdHlwZTtcbiAgICAgIH1cblxuICAgICAgZXJyb3IoJ1JlYWN0LmpzeDogdHlwZSBpcyBpbnZhbGlkIC0tIGV4cGVjdGVkIGEgc3RyaW5nIChmb3IgJyArICdidWlsdC1pbiBjb21wb25lbnRzKSBvciBhIGNsYXNzL2Z1bmN0aW9uIChmb3IgY29tcG9zaXRlICcgKyAnY29tcG9uZW50cykgYnV0IGdvdDogJXMuJXMnLCB0eXBlU3RyaW5nLCBpbmZvKTtcbiAgICB9XG5cbiAgICB2YXIgZWxlbWVudCA9IGpzeERFVih0eXBlLCBwcm9wcywga2V5LCBzb3VyY2UsIHNlbGYpOyAvLyBUaGUgcmVzdWx0IGNhbiBiZSBudWxsaXNoIGlmIGEgbW9jayBvciBhIGN1c3RvbSBmdW5jdGlvbiBpcyB1c2VkLlxuICAgIC8vIFRPRE86IERyb3AgdGhpcyB3aGVuIHRoZXNlIGFyZSBubyBsb25nZXIgYWxsb3dlZCBhcyB0aGUgdHlwZSBhcmd1bWVudC5cblxuICAgIGlmIChlbGVtZW50ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH0gLy8gU2tpcCBrZXkgd2FybmluZyBpZiB0aGUgdHlwZSBpc24ndCB2YWxpZCBzaW5jZSBvdXIga2V5IHZhbGlkYXRpb24gbG9naWNcbiAgICAvLyBkb2Vzbid0IGV4cGVjdCBhIG5vbi1zdHJpbmcvZnVuY3Rpb24gdHlwZSBhbmQgY2FuIHRocm93IGNvbmZ1c2luZyBlcnJvcnMuXG4gICAgLy8gV2UgZG9uJ3Qgd2FudCBleGNlcHRpb24gYmVoYXZpb3IgdG8gZGlmZmVyIGJldHdlZW4gZGV2IGFuZCBwcm9kLlxuICAgIC8vIChSZW5kZXJpbmcgd2lsbCB0aHJvdyB3aXRoIGEgaGVscGZ1bCBtZXNzYWdlIGFuZCBhcyBzb29uIGFzIHRoZSB0eXBlIGlzXG4gICAgLy8gZml4ZWQsIHRoZSBrZXkgd2FybmluZ3Mgd2lsbCBhcHBlYXIuKVxuXG5cbiAgICBpZiAodmFsaWRUeXBlKSB7XG4gICAgICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjtcblxuICAgICAgaWYgKGNoaWxkcmVuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGlzU3RhdGljQ2hpbGRyZW4pIHtcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGVDaGlsZEtleXMoY2hpbGRyZW5baV0sIHR5cGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgICAgICAgICBPYmplY3QuZnJlZXplKGNoaWxkcmVuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXJyb3IoJ1JlYWN0LmpzeDogU3RhdGljIGNoaWxkcmVuIHNob3VsZCBhbHdheXMgYmUgYW4gYXJyYXkuICcgKyAnWW91IGFyZSBsaWtlbHkgZXhwbGljaXRseSBjYWxsaW5nIFJlYWN0LmpzeHMgb3IgUmVhY3QuanN4REVWLiAnICsgJ1VzZSB0aGUgQmFiZWwgdHJhbnNmb3JtIGluc3RlYWQuJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGNoaWxkcmVuLCB0eXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlID09PSBleHBvcnRzLkZyYWdtZW50KSB7XG4gICAgICB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59IC8vIFRoZXNlIHR3byBmdW5jdGlvbnMgZXhpc3QgdG8gc3RpbGwgZ2V0IGNoaWxkIHdhcm5pbmdzIGluIGRldlxuXG52YXIganN4REVWJDEgPSAganN4V2l0aFZhbGlkYXRpb24gO1xuXG5leHBvcnRzLmpzeERFViA9IGpzeERFViQxO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWpzeC1kZXYtcnVudGltZS5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1qc3gtZGV2LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=