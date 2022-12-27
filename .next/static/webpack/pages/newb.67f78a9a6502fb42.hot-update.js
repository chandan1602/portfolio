"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/newb",{

/***/ "./pages/newb.js":
/*!***********************!*\
  !*** ./pages/newb.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_chandanbansal_portfolio_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_chandanbansal_portfolio_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_chandanbansal_portfolio_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _styles_dash_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../styles/dash.module.css */ \"./styles/dash.module.css\");\n/* harmony import */ var _styles_dash_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_dash_module_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api */ \"./api/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_RichTextEditor_Editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/RichTextEditor/Editor */ \"./components/RichTextEditor/Editor.js\");\n/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! draft-js */ \"./node_modules/draft-js/lib/Draft.js\");\n/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var draft_convert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! draft-convert */ \"./node_modules/draft-convert/esm/index.js\");\n/* harmony import */ var _util_constants_LocalStorageKeys__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util/constants/LocalStorageKeys */ \"./util/constants/LocalStorageKeys.js\");\n/* harmony import */ var _util_constants_LocalStorageKeys__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_util_constants_LocalStorageKeys__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n// import axios from 'axios'\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar NewB = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), token = ref4[0], setToken = ref4[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), pageLoaded = ref1[0], setPageLoaded = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), isLoading = ref2[0], setIsLoading = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), title = ref3[0], setTitle = ref3[1];\n    var onSubmit = _asyncToGenerator(_Users_chandanbansal_portfolio_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n        var res1, ref, data, error;\n        return _Users_chandanbansal_portfolio_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    if (!(title !== \"\")) {\n                        _ctx.next = 18;\n                        break;\n                    }\n                    res1 = prompt(\"Proceed with the Blog? (yes/y)\");\n                    if (!(res1 === \"yes\" || res1 === \"y\")) {\n                        _ctx.next = 18;\n                        break;\n                    }\n                    _ctx.prev = 3;\n                    setIsLoading(true);\n                    _ctx.next = 7;\n                    return _api__WEBPACK_IMPORTED_MODULE_3__.blogService.postBlog({\n                        description: localStorage.getItem((_util_constants_LocalStorageKeys__WEBPACK_IMPORTED_MODULE_8___default().BLOG)),\n                        title: title,\n                        token: token\n                    }).then(function(res) {\n                        console.log(res);\n                        setIsLoading(false);\n                    });\n                case 7:\n                    ref = _ctx.sent;\n                    data = ref.data;\n                    error = ref.error;\n                    if (error) {\n                        alert(\"Error! User auth failure.\");\n                    }\n                    console.log(\"Now is Loading is \" + isLoading);\n                    _ctx.next = 18;\n                    break;\n                case 14:\n                    _ctx.prev = 14;\n                    _ctx.t0 = _ctx[\"catch\"](3);\n                    alert(\"Request Failed. Probable Reason : Network Problem!\");\n                    setIsLoading(false);\n                case 18:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                3,\n                14\n            ]\n        ]);\n    }));\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(_asyncToGenerator(_Users_chandanbansal_portfolio_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        return _Users_chandanbansal_portfolio_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    setPageLoaded(false);\n                    return _ctx.abrupt(\"return\", /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                        __source: {\n                            fileName: \"/Users/chandanbansal/portfolio/pages/newb.js\",\n                            lineNumber: 49,\n                            columnNumber: 16\n                        },\n                        __self: this\n                    }));\n                case 2:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, this);\n    }).bind(_this)).bind(_this), []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(_asyncToGenerator(_Users_chandanbansal_portfolio_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var error;\n        return _Users_chandanbansal_portfolio_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    if (!(pageLoaded === false)) {\n                        _ctx.next = 11;\n                        break;\n                    }\n                    _ctx.next = 3;\n                    return _api__WEBPACK_IMPORTED_MODULE_3__.authService.validate(localStorage.getItem((_util_constants_LocalStorageKeys__WEBPACK_IMPORTED_MODULE_8___default().JSON_WEB_TOKEN)));\n                case 3:\n                    error = _ctx.sent.error;\n                    if (!error) {\n                        _ctx.next = 8;\n                        break;\n                    }\n                    alert(\"You must be logged in\");\n                    router.push(\"/signin\");\n                    return _ctx.abrupt(\"return\");\n                case 8:\n                    setToken(localStorage.getItem((_util_constants_LocalStorageKeys__WEBPACK_IMPORTED_MODULE_8___default().JSON_WEB_TOKEN)));\n                    setIsLoading(false);\n                    setPageLoaded(true);\n                case 11:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    })), [\n        pageLoaded\n    ]);\n    var titleHandler = function(e) {\n        setTitle(e.target.value);\n    };\n    if (isLoading) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n            className: (_styles_dash_module_css__WEBPACK_IMPORTED_MODULE_10___default().loading),\n            __source: {\n                fileName: \"/Users/chandanbansal/portfolio/pages/newb.js\",\n                lineNumber: 74,\n                columnNumber: 13\n            },\n            __self: _this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__.Spinner, {\n                animation: \"grow\",\n                __source: {\n                    fileName: \"/Users/chandanbansal/portfolio/pages/newb.js\",\n                    lineNumber: 75,\n                    columnNumber: 17\n                },\n                __self: _this\n            })\n        }));\n    } else return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n        className: \"container\",\n        __source: {\n            fileName: \"/Users/chandanbansal/portfolio/pages/newb.js\",\n            lineNumber: 79,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"br\", {\n                __source: {\n                    fileName: \"/Users/chandanbansal/portfolio/pages/newb.js\",\n                    lineNumber: 80,\n                    columnNumber: 13\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_Header__WEBPACK_IMPORTED_MODULE_9__.Header, {\n                title: \"Create Blog\",\n                __source: {\n                    fileName: \"/Users/chandanbansal/portfolio/pages/newb.js\",\n                    lineNumber: 81,\n                    columnNumber: 13\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__.Form, {\n                onSubmit: function(e) {\n                    return onSubmit(e);\n                },\n                __source: {\n                    fileName: \"/Users/chandanbansal/portfolio/pages/newb.js\",\n                    lineNumber: 82,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__.FormGroup, {\n                        controlId: \"formBasicTitle\",\n                        __source: {\n                            fileName: \"/Users/chandanbansal/portfolio/pages/newb.js\",\n                            lineNumber: 83,\n                            columnNumber: 17\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__.FormControl, {\n                                placeholder: \"Title\",\n                                onChange: function(e) {\n                                    return titleHandler(e);\n                                },\n                                value: title,\n                                __source: {\n                                    fileName: \"/Users/chandanbansal/portfolio/pages/newb.js\",\n                                    lineNumber: 84,\n                                    columnNumber: 21\n                                },\n                                __self: _this\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__.Form.Text, {\n                                className: \"text-muted\",\n                                __source: {\n                                    fileName: \"/Users/chandanbansal/portfolio/pages/newb.js\",\n                                    lineNumber: 89,\n                                    columnNumber: 21\n                                },\n                                __self: _this\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_RichTextEditor_Editor__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        __source: {\n                            fileName: \"/Users/chandanbansal/portfolio/pages/newb.js\",\n                            lineNumber: 94,\n                            columnNumber: 17\n                        },\n                        __self: _this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"br\", {\n                        __source: {\n                            fileName: \"/Users/chandanbansal/portfolio/pages/newb.js\",\n                            lineNumber: 95,\n                            columnNumber: 17\n                        },\n                        __self: _this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__.Button, {\n                        variant: \"primary\",\n                        type: \"submit\",\n                        __source: {\n                            fileName: \"/Users/chandanbansal/portfolio/pages/newb.js\",\n                            lineNumber: 96,\n                            columnNumber: 17\n                        },\n                        __self: _this,\n                        children: \"Submit\"\n                    })\n                ]\n            }),\n            typeof localStorage !== \"undefined\" && localStorage.getItem((_util_constants_LocalStorageKeys__WEBPACK_IMPORTED_MODULE_8___default().BLOG)) && localStorage.getItem((_util_constants_LocalStorageKeys__WEBPACK_IMPORTED_MODULE_8___default().BLOG)) !== \"<p></p>\" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                className: \"container\",\n                __source: {\n                    fileName: \"/Users/chandanbansal/portfolio/pages/newb.js\",\n                    lineNumber: 105,\n                    columnNumber: 17\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"hr\", {\n                        __source: {\n                            fileName: \"/Users/chandanbansal/portfolio/pages/newb.js\",\n                            lineNumber: 106,\n                            columnNumber: 21\n                        },\n                        __self: _this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                        className: \"jumbotron\",\n                        __source: {\n                            fileName: \"/Users/chandanbansal/portfolio/pages/newb.js\",\n                            lineNumber: 107,\n                            columnNumber: 21\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h4\", {\n                                __source: {\n                                    fileName: \"/Users/chandanbansal/portfolio/pages/newb.js\",\n                                    lineNumber: 108,\n                                    columnNumber: 25\n                                },\n                                __self: _this,\n                                children: \"Previous Blog detected\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"p\", {\n                                dangerouslySetInnerHTML: {\n                                    __html: localStorage.getItem((_util_constants_LocalStorageKeys__WEBPACK_IMPORTED_MODULE_8___default().BLOG))\n                                },\n                                __source: {\n                                    fileName: \"/Users/chandanbansal/portfolio/pages/newb.js\",\n                                    lineNumber: 109,\n                                    columnNumber: 25\n                                },\n                                __self: _this\n                            })\n                        ]\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_s(NewB, \"h2ofSUvWSY1low4W7zbkfqjjchE=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = NewB;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewB);\nvar _c;\n$RefreshReg$(_c, \"NewB\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WSxLQUFLLENBQVcsY0FBSUEsWUFBWSxDQUFDQyxPQUFPLENBQUNyQiw4RUFBcUIsS0FBS29CLFlBQVksQ0FBQ0MsT0FBTyxDQUFDckIsOEVBQXFCLE1BQU0sQ0FBUyxrRkFDM0kyQixDQUFHO2dCQUFDTyxTQUFTLEVBQUMsQ0FBVzs7Ozs7Ozs7eUZBQ3JCVSxDQUFFOzs7Ozs7OzswRkFDRmpCLENBQUc7d0JBQUNPLFNBQVMsRUFBQyxDQUFXOzs7Ozs7OztpR0FDckJXLENBQUU7Ozs7Ozs7MENBQUMsQ0FBc0I7O2lHQUN6QkMsQ0FBQztnQ0FBQ0MsdUJBQXVCLEVBQUUsQ0FBQztvQ0FBQ0MsTUFBTSxFQUFFNUIsWUFBWSxDQUFDQyxPQUFPLENBQUNyQiw4RUFBcUI7Z0NBQUUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUFNM0csQ0FBQztHQXRHS0UsSUFBSTs7UUFDU1Asa0RBQVM7OztLQUR0Qk8sSUFBSTtBQXdHViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL25ld2IuanM/OGRiNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuLy8gaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgRm9ybSwgQnV0dG9uLCBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBGb3JtTGFiZWwsIFNwaW5uZXIsIEFsZXJ0IH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLy4uL3N0eWxlcy9kYXNoLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyBhdXRoU2VydmljZSwgYmxvZ1NlcnZpY2UgfSBmcm9tICcuLi9hcGknXG5pbXBvcnQgeyB1c2VSb3V0ZXIsIHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBSaWNoVGV4dEVkaXRvciBmcm9tICcuLi9jb21wb25lbnRzL1JpY2hUZXh0RWRpdG9yL0VkaXRvcidcbmltcG9ydCB7IEVkaXRvclN0YXRlIH0gZnJvbSAnZHJhZnQtanMnO1xuaW1wb3J0IHsgY29udmVydFRvSFRNTCB9IGZyb20gJ2RyYWZ0LWNvbnZlcnQnXG5pbXBvcnQgTG9jYWxTdG9yYWdlS2V5cyBmcm9tICcuLi91dGlsL2NvbnN0YW50cy9Mb2NhbFN0b3JhZ2VLZXlzJ1xuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInXG5cbmNvbnN0IE5ld0IgPSAoKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgW3Rva2VuLCBzZXRUb2tlbl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbcGFnZUxvYWRlZCwgc2V0UGFnZUxvYWRlZF0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gICAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAgIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcbiAgICAgICAgaWYgKHRpdGxlICE9PSBcIlwiKSB7XG4gICAgICAgICAgICBsZXQgcmVzID0gcHJvbXB0KFwiUHJvY2VlZCB3aXRoIHRoZSBCbG9nPyAoeWVzL3kpXCIpO1xuICAgICAgICAgICAgaWYgKHJlcyA9PT0gXCJ5ZXNcIiB8fCByZXMgPT09IFwieVwiKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBibG9nU2VydmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgLnBvc3RCbG9nKHsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGxvY2FsU3RvcmFnZS5nZXRJdGVtKExvY2FsU3RvcmFnZUtleXMuQkxPRyksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbiB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJFcnJvciEgVXNlciBhdXRoIGZhaWx1cmUuXCIpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJOb3cgaXMgTG9hZGluZyBpcyBcIiArIGlzTG9hZGluZyk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJSZXF1ZXN0IEZhaWxlZC4gUHJvYmFibGUgUmVhc29uIDogTmV0d29yayBQcm9ibGVtIVwiKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xuICAgICAgICBzZXRQYWdlTG9hZGVkKGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIDxkaXY+PC9kaXY+O1xuICAgIH0sIFtdKTtcblxuICAgIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XG4gICAgICAgIGlmIChwYWdlTG9hZGVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgYXV0aFNlcnZpY2UudmFsaWRhdGUobG9jYWxTdG9yYWdlLmdldEl0ZW0oTG9jYWxTdG9yYWdlS2V5cy5KU09OX1dFQl9UT0tFTikpO1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJZb3UgbXVzdCBiZSBsb2dnZWQgaW5cIik7XG4gICAgICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvc2lnbmluXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldFRva2VuKGxvY2FsU3RvcmFnZS5nZXRJdGVtKExvY2FsU3RvcmFnZUtleXMuSlNPTl9XRUJfVE9LRU4pKTtcbiAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSlcbiAgICAgICAgICAgIHNldFBhZ2VMb2FkZWQodHJ1ZSlcbiAgICAgICAgfVxuXG4gICAgfSwgW3BhZ2VMb2FkZWRdKVxuXG4gICAgY29uc3QgdGl0bGVIYW5kbGVyID0gKGUpID0+IHtcbiAgICAgICAgc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpO1xuICAgIH1cblxuXG4gICAgaWYgKGlzTG9hZGluZykge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2FkaW5nfT5cbiAgICAgICAgICAgICAgICA8U3Bpbm5lciBhbmltYXRpb249XCJncm93XCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfSBlbHNlIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxIZWFkZXIgdGl0bGU9XCJDcmVhdGUgQmxvZ1wiIC8+XG4gICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17KGUpID0+IG9uU3VibWl0KGUpfT5cbiAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwIGNvbnRyb2xJZD1cImZvcm1CYXNpY1RpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUaXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aXRsZUhhbmRsZXIoZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLlRleHQgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5UZXh0PlxuICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuXG4gICAgICAgICAgICAgICAgPFJpY2hUZXh0RWRpdG9yIC8+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0Zvcm0+XG5cbiAgICAgICAgICAgIHt0eXBlb2YgbG9jYWxTdG9yYWdlICE9PSBcInVuZGVmaW5lZFwiICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKExvY2FsU3RvcmFnZUtleXMuQkxPRykgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oTG9jYWxTdG9yYWdlS2V5cy5CTE9HKSAhPT0gXCI8cD48L3A+XCIgJiZcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdqdW1ib3Ryb24nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlByZXZpb3VzIEJsb2cgZGV0ZWN0ZWQ8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShMb2NhbFN0b3JhZ2VLZXlzLkJMT0cpIH19PjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmV3QjsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkZvcm0iLCJCdXR0b24iLCJGb3JtR3JvdXAiLCJGb3JtQ29udHJvbCIsIkZvcm1MYWJlbCIsIlNwaW5uZXIiLCJBbGVydCIsInN0eWxlcyIsImF1dGhTZXJ2aWNlIiwiYmxvZ1NlcnZpY2UiLCJ1c2VSb3V0ZXIiLCJ3aXRoUm91dGVyIiwiUmljaFRleHRFZGl0b3IiLCJFZGl0b3JTdGF0ZSIsImNvbnZlcnRUb0hUTUwiLCJMb2NhbFN0b3JhZ2VLZXlzIiwiSGVhZGVyIiwiTmV3QiIsInJvdXRlciIsInRva2VuIiwic2V0VG9rZW4iLCJwYWdlTG9hZGVkIiwic2V0UGFnZUxvYWRlZCIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInRpdGxlIiwic2V0VGl0bGUiLCJvblN1Ym1pdCIsImUiLCJyZXMiLCJkYXRhIiwiZXJyb3IiLCJwcm9tcHQiLCJwb3N0QmxvZyIsImRlc2NyaXB0aW9uIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkJMT0ciLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsImFsZXJ0IiwiZGl2IiwidmFsaWRhdGUiLCJKU09OX1dFQl9UT0tFTiIsInB1c2giLCJ0aXRsZUhhbmRsZXIiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNsYXNzTmFtZSIsImxvYWRpbmciLCJhbmltYXRpb24iLCJiciIsImNvbnRyb2xJZCIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJUZXh0IiwidmFyaWFudCIsInR5cGUiLCJociIsImg0IiwicCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/newb.js\n");

/***/ })

});