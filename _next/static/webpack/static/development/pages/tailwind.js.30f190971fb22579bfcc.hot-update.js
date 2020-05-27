webpackHotUpdate("static/development/pages/tailwind.js",{

/***/ "./components/resume/Header.js":
/*!*************************************!*\
  !*** ./components/resume/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _profile_Headings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../profile/Headings */ \"./components/profile/Headings.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/evsasse/code/personal/profile/components/resume/Header.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\nvar Header = function Header(_ref) {\n  var headings = _ref.headings;\n  return __jsx(\"header\", {\n    className: \"text-right dont-page-break\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 3\n    }\n  }, __jsx(_profile_Headings__WEBPACK_IMPORTED_MODULE_2__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, headings, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  })), site && __jsx(\"p\", {\n    className: \"text-base\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }\n  }, __jsx(\"a\", {\n    target: \"_blank\",\n    rel: \"noopener\",\n    href: \"https://evandro.sasse.it\",\n    className: \"link\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 9\n    }\n  }, \"evandro.sasse.it\")), github && __jsx(\"p\", {\n    className: \"text-base\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }\n  }, __jsx(\"a\", {\n    target: \"_blank\",\n    rel: \"noopener\",\n    href: \"https://github.com/evsasse\",\n    className: \"link\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }\n  }, \"github.com/evsasse\")), linkedin && __jsx(\"p\", {\n    className: \"text-base\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }, __jsx(\"a\", {\n    target: \"_blank\",\n    rel: \"noopener\",\n    href: \"https://github.com/evsasse\",\n    className: \"link\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }\n  }, \"linkedin.com/in/evsasse\")), location && __jsx(\"p\", {\n    className: \"text-muted text-base\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }\n  }, \"Brazil, Florian\\xF3polis (UTC-3)\"), phone && __jsx(\"p\", {\n    className: \"text-muted text-base\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }\n  }, \"+55 48 99155-3535\"), email && __jsx(\"p\", {\n    className: \"text-muted text-base\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }\n  }, \"evandro@sasse.it\"));\n};\n\n_c = Header;\nHeader.defaultProps = {\n  headings: {},\n  info: {\n    site: true,\n    github: true,\n    linkedin: true,\n    location: true,\n    phone: true,\n    email: true\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Jlc3VtZS9IZWFkZXIuanM/MTBhNyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJoZWFkaW5ncyIsInNpdGUiLCJnaXRodWIiLCJsaW5rZWRpbiIsImxvY2F0aW9uIiwicGhvbmUiLCJlbWFpbCIsImRlZmF1bHRQcm9wcyIsImluZm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUztBQUFBLE1BQUdDLFFBQUgsUUFBR0EsUUFBSDtBQUFBLFNBQ2I7QUFBUSxhQUFTLEVBQUMsNEJBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHlEQUFELHlGQUFjQSxRQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERixFQUdJQyxJQUFJLElBQ0o7QUFBRyxhQUFTLEVBQUMsV0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxVQUFNLEVBQUMsUUFBVjtBQUFtQixPQUFHLEVBQUMsVUFBdkI7QUFBa0MsUUFBSSxFQUFDLDBCQUF2QztBQUFrRSxhQUFTLEVBQUMsTUFBNUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERixDQUpKLEVBV0lDLE1BQU0sSUFDTjtBQUFHLGFBQVMsRUFBQyxXQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFVBQU0sRUFBQyxRQUFWO0FBQW1CLE9BQUcsRUFBQyxVQUF2QjtBQUFrQyxRQUFJLEVBQUMsNEJBQXZDO0FBQW9FLGFBQVMsRUFBQyxNQUE5RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURGLENBWkosRUFtQklDLFFBQVEsSUFDUjtBQUFHLGFBQVMsRUFBQyxXQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFVBQU0sRUFBQyxRQUFWO0FBQW1CLE9BQUcsRUFBQyxVQUF2QjtBQUFrQyxRQUFJLEVBQUMsNEJBQXZDO0FBQW9FLGFBQVMsRUFBQyxNQUE5RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURGLENBcEJKLEVBMkJJQyxRQUFRLElBQ1I7QUFBRyxhQUFTLEVBQUMsc0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3Q0E1QkosRUErQklDLEtBQUssSUFDTDtBQUFHLGFBQVMsRUFBQyxzQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQWhDSixFQW1DSUMsS0FBSyxJQUNMO0FBQUcsYUFBUyxFQUFDLHNCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBcENKLENBRGE7QUFBQSxDQUFmOztLQUFNUCxNO0FBMENOQSxNQUFNLENBQUNRLFlBQVAsR0FBc0I7QUFDcEJQLFVBQVEsRUFBRSxFQURVO0FBRXBCUSxNQUFJLEVBQUU7QUFDSlAsUUFBSSxFQUFFLElBREY7QUFFSkMsVUFBTSxFQUFFLElBRko7QUFHSkMsWUFBUSxFQUFFLElBSE47QUFJSkMsWUFBUSxFQUFFLElBSk47QUFLSkMsU0FBSyxFQUFFLElBTEg7QUFNSkMsU0FBSyxFQUFFO0FBTkg7QUFGYyxDQUF0QjtBQVllUCxxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvcmVzdW1lL0hlYWRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IEhlYWRpbmdzIGZyb20gXCIuLi9wcm9maWxlL0hlYWRpbmdzXCI7XG5cbmNvbnN0IEhlYWRlciA9ICh7IGhlYWRpbmdzIH0pID0+IChcbiAgPGhlYWRlciBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0IGRvbnQtcGFnZS1icmVha1wiPlxuICAgIDxIZWFkaW5ncyB7Li4uaGVhZGluZ3N9IC8+XG5cbiAgICB7IHNpdGUgJiZcbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZVwiPlxuICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lclwiIGhyZWY9XCJodHRwczovL2V2YW5kcm8uc2Fzc2UuaXRcIiBjbGFzc05hbWU9XCJsaW5rXCI+XG4gICAgICAgICAgZXZhbmRyby5zYXNzZS5pdFxuICAgICAgICA8L2E+XG4gICAgICA8L3A+XG4gICAgfVxuXG4gICAgeyBnaXRodWIgJiYgKFxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlXCI+XG4gICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9ldnNhc3NlXCIgY2xhc3NOYW1lPVwibGlua1wiPlxuICAgICAgICAgIGdpdGh1Yi5jb20vZXZzYXNzZVxuICAgICAgICA8L2E+XG4gICAgICA8L3A+XG4gICAgKX1cblxuICAgIHsgbGlua2VkaW4gJiYgKFxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlXCI+XG4gICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9ldnNhc3NlXCIgY2xhc3NOYW1lPVwibGlua1wiPlxuICAgICAgICAgIGxpbmtlZGluLmNvbS9pbi9ldnNhc3NlXG4gICAgICAgIDwvYT5cbiAgICAgIDwvcD5cbiAgICApfVxuXG4gICAgeyBsb2NhdGlvbiAmJiAoXG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkIHRleHQtYmFzZVwiPkJyYXppbCwgRmxvcmlhbsOzcG9saXMgKFVUQy0zKTwvcD5cbiAgICApfVxuXG4gICAgeyBwaG9uZSAmJiAoXG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkIHRleHQtYmFzZVwiPis1NSA0OCA5OTE1NS0zNTM1PC9wPlxuICAgICl9XG5cbiAgICB7IGVtYWlsICYmIChcbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQgdGV4dC1iYXNlXCI+ZXZhbmRyb0BzYXNzZS5pdDwvcD5cbiAgICApfVxuICA8L2hlYWRlcj5cbik7XG5cbkhlYWRlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGhlYWRpbmdzOiB7fSxcbiAgaW5mbzoge1xuICAgIHNpdGU6IHRydWUsXG4gICAgZ2l0aHViOiB0cnVlLFxuICAgIGxpbmtlZGluOiB0cnVlLFxuICAgIGxvY2F0aW9uOiB0cnVlLFxuICAgIHBob25lOiB0cnVlLFxuICAgIGVtYWlsOiB0cnVlLFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/resume/Header.js\n");

/***/ })

})