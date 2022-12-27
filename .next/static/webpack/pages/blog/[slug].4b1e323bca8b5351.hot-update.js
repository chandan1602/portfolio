"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blog/[slug]",{

/***/ "./pages/blog/[slug].js":
/*!******************************!*\
  !*** ./pages/blog/[slug].js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_chandanbansal_portfolio_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_chandanbansal_portfolio_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_chandanbansal_portfolio_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api */ \"./api/index.js\");\n/* harmony import */ var _components_Blog_Item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Blog/Item */ \"./components/Blog/Item.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Blog = function(param) {\n    var props = param.props;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    // if(props.hasError) {\n    //     return <div>Blog Does not Exist...</div>\n    // }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        console.log(props);\n    });\n    if (router.isFallback) return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h1\", {\n        __source: {\n            fileName: \"/Users/chandanbansal/portfolio/pages/blog/[slug].js\",\n            lineNumber: 14,\n            columnNumber: 35\n        },\n        __self: _this,\n        children: \"Loading...\"\n    }));\n    console.log(props);\n    return(// <Item\n    //     key={props.data._id}\n    //     id={props.data._id}\n    //     description={props.data.description}\n    //     comments={props.data.comments}\n    //     timestamp={props.data.createdAt}\n    // />\n    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"p\", {\n        __source: {\n            fileName: \"/Users/chandanbansal/portfolio/pages/blog/[slug].js\",\n            lineNumber: 24,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: \"Loading Blog...\"\n    }));\n};\n_s(Blog, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Blog;\nBlog.getStaticProps = _asyncToGenerator(_Users_chandanbansal_portfolio_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(context) {\n    var ref, slug, data, props;\n    return _Users_chandanbansal_portfolio_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                _ctx.prev = 0;\n                ;\n                slug = (ref = context.params) === null || ref === void 0 ? void 0 : ref.slug;\n                _ctx.next = 5;\n                return _api__WEBPACK_IMPORTED_MODULE_4__.blogService.getBlogBySlug(slug);\n            case 5:\n                data = _ctx.sent.data;\n                props = {\n                    props: {\n                        data: data\n                    }\n                };\n                return _ctx.abrupt(\"return\", props);\n            case 10:\n                _ctx.prev = 10;\n                _ctx.t0 = _ctx[\"catch\"](0);\n                console.log(_ctx.t0);\n                alert(\"Error Loading Blog. Internal Server Error!\");\n                return _ctx.abrupt(\"return\", {\n                    props: {\n                        hasError: true\n                    }\n                });\n            case 15:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee, null, [\n        [\n            0,\n            10\n        ]\n    ]);\n}));\nBlog.getStaticPaths = _asyncToGenerator(_Users_chandanbansal_portfolio_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n    var data, pathsWithParams;\n    return _Users_chandanbansal_portfolio_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                _ctx.next = 2;\n                return _api__WEBPACK_IMPORTED_MODULE_4__.blogService.getSlugs();\n            case 2:\n                data = _ctx.sent.data;\n                pathsWithParams = data.map(function(obj) {\n                    return {\n                        params: {\n                            slug: obj.slug\n                        }\n                    };\n                });\n                return _ctx.abrupt(\"return\", {\n                    paths: pathsWithParams,\n                    fallback: false\n                });\n            case 5:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog);\nvar _c;\n$RefreshReg$(_c, \"Blog\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9nL1tzbHVnXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFrRDtBQUNUO0FBQ1U7QUFDWjtBQUNBO0FBQ007Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdDLEdBQUssQ0FBQ1EsSUFBSSxHQUFHLFFBQVEsUUFBTyxDQUFDO1FBQWJDLEtBQUssU0FBTEEsS0FBSzs7SUFDakIsR0FBSyxDQUFDQyxNQUFNLEdBQUdMLHNEQUFTO0lBQ3hCLEVBQXVCO0lBQ3ZCLEVBQStDO0lBQy9DLEVBQUk7SUFDSkosZ0RBQVMsQ0FBQyxRQUFRLEdBQUYsQ0FBQ1U7UUFBQUEsT0FBTyxDQUFDQyxHQUFHLENBQUNILEtBQUs7SUFBQyxDQUFDO0lBQ3BDLEVBQUUsRUFBRUMsTUFBTSxDQUFDRyxVQUFVLEVBQUUsTUFBTSxzRUFBRUMsQ0FBRTs7Ozs7OztrQkFBQyxDQUFVOztJQUM1Q0gsT0FBTyxDQUFDQyxHQUFHLENBQUNILEtBQUs7SUFDakIsTUFBTSxDQUNGLEVBQVE7SUFDUixFQUEyQjtJQUMzQixFQUEwQjtJQUMxQixFQUEyQztJQUMzQyxFQUFxQztJQUNyQyxFQUF1QztJQUN2QyxFQUFLO3lFQUNKTSxDQUFDOzs7Ozs7O2tCQUFDLENBQWU7O0FBRTFCLENBQUM7R0FsQktQLElBQUk7O1FBQ1NILGtEQUFTOzs7S0FEdEJHLElBQUk7QUFvQlZBLElBQUksQ0FBQ1EsY0FBYyw0SUFBRyxRQUFRLFNBQURDLE9BQU8sRUFBSyxDQUFDO1FBRXJCQSxHQUFjLEVBQXJCQyxJQUFJLEVBQ0ZDLElBQUksRUFDUlYsS0FBSzs7Ozs7O2dCQUZIUyxJQUFJLElBQUdELEdBQWMsR0FBZEEsT0FBTyxDQUFDRyxNQUFNLGNBQWRILEdBQWMsS0FBZEEsSUFBSSxDQUFKQSxDQUFvQixHQUFwQkEsSUFBSSxDQUFKQSxDQUFvQixHQUFwQkEsR0FBYyxDQUFFQyxJQUFJOzt1QkFDVlosMkRBQXlCLENBQUNZLElBQUk7O2dCQUE3Q0MsSUFBSSxhQUFKQSxJQUFJO2dCQUNSVixLQUFLLEdBQUksQ0FBQztvQkFBQ0EsS0FBSyxFQUFFLENBQUM7d0JBQUNVLElBQUksRUFBSkEsSUFBSTtvQkFBQyxDQUFDO2dCQUFDLENBQUM7NkNBQ3pCVixLQUFLOzs7O2dCQUVaRSxPQUFPLENBQUNDLEdBQUc7Z0JBQ1hVLEtBQUssQ0FBQyxDQUE0Qzs2Q0FDM0MsQ0FBQztvQkFBQ2IsS0FBSyxFQUFFLENBQUM7d0JBQUNjLFFBQVEsRUFBRSxJQUFJO29CQUFDLENBQUM7Z0JBQUMsQ0FBQzs7Ozs7Ozs7Ozs7QUFFNUMsQ0FBQztBQUVEZixJQUFJLENBQUNnQixjQUFjLDRJQUFHLFFBQVEsV0FBSSxDQUFDO1FBQ3ZCTCxJQUFJLEVBQ05NLGVBQWU7Ozs7O3VCQURFbkIsc0RBQW9COztnQkFBbkNhLElBQUksYUFBSkEsSUFBSTtnQkFDTk0sZUFBZSxHQUFHTixJQUFJLENBQUNRLEdBQUcsQ0FBQyxRQUFRLENBQVBDLEdBQUc7b0JBQUssTUFBTSxDQUFMLENBQUM7d0JBQUNSLE1BQU0sRUFBRSxDQUFDOzRCQUFDRixJQUFJLEVBQUVVLEdBQUcsQ0FBQ1YsSUFBSTt3QkFBQyxDQUFDO29CQUFDLENBQUM7OzZDQUVsRSxDQUFDO29CQUNKVyxLQUFLLEVBQUVKLGVBQWU7b0JBQ3RCSyxRQUFRLEVBQUUsS0FBSztnQkFDbkIsQ0FBQzs7Ozs7O0FBQ0wsQ0FBQztBQUVELCtEQUFldEIsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ibG9nL1tzbHVnXS5qcz9mYTcwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBTcGlubmVyIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuaW1wb3J0IHN0eWxlIGZyb20gJy4vLi4vLi4vc3R5bGVzL2Jsb2dzLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBibG9nU2VydmljZSB9IGZyb20gJy4uLy4uL2FwaSdcbmltcG9ydCBJdGVtIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQmxvZy9JdGVtJztcblxuY29uc3QgQmxvZyA9ICh7IHByb3BzIH0pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICAvLyBpZihwcm9wcy5oYXNFcnJvcikge1xuICAgIC8vICAgICByZXR1cm4gPGRpdj5CbG9nIERvZXMgbm90IEV4aXN0Li4uPC9kaXY+XG4gICAgLy8gfVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7Y29uc29sZS5sb2cocHJvcHMpfSk7XG4gICAgaWYgKHJvdXRlci5pc0ZhbGxiYWNrKSByZXR1cm4gPGgxPkxvYWRpbmcuLi48L2gxPlxuICAgIGNvbnNvbGUubG9nKHByb3BzKVxuICAgIHJldHVybiAoXG4gICAgICAgIC8vIDxJdGVtXG4gICAgICAgIC8vICAgICBrZXk9e3Byb3BzLmRhdGEuX2lkfVxuICAgICAgICAvLyAgICAgaWQ9e3Byb3BzLmRhdGEuX2lkfVxuICAgICAgICAvLyAgICAgZGVzY3JpcHRpb249e3Byb3BzLmRhdGEuZGVzY3JpcHRpb259XG4gICAgICAgIC8vICAgICBjb21tZW50cz17cHJvcHMuZGF0YS5jb21tZW50c31cbiAgICAgICAgLy8gICAgIHRpbWVzdGFtcD17cHJvcHMuZGF0YS5jcmVhdGVkQXR9XG4gICAgICAgIC8vIC8+XG4gICAgICAgIDxwPkxvYWRpbmcgQmxvZy4uLjwvcD5cbiAgICApXG59XG5cbkJsb2cuZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHNsdWcgPSBjb250ZXh0LnBhcmFtcz8uc2x1ZztcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBibG9nU2VydmljZS5nZXRCbG9nQnlTbHVnKHNsdWcpO1xuICAgICAgICBsZXQgcHJvcHMgPSAgeyBwcm9wczogeyBkYXRhIH0gfTtcbiAgICAgICAgcmV0dXJuIHByb3BzO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgYWxlcnQoXCJFcnJvciBMb2FkaW5nIEJsb2cuIEludGVybmFsIFNlcnZlciBFcnJvciFcIik7XG4gICAgICAgIHJldHVybiB7IHByb3BzOiB7IGhhc0Vycm9yOiB0cnVlIH0gfTtcbiAgICB9XG59XG5cbkJsb2cuZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBibG9nU2VydmljZS5nZXRTbHVncygpO1xuICAgIGNvbnN0IHBhdGhzV2l0aFBhcmFtcyA9IGRhdGEubWFwKChvYmopID0+ICh7IHBhcmFtczogeyBzbHVnOiBvYmouc2x1ZyB9IH0pKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGF0aHM6IHBhdGhzV2l0aFBhcmFtcyxcbiAgICAgICAgZmFsbGJhY2s6IGZhbHNlXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9nICJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU3Bpbm5lciIsInN0eWxlIiwidXNlUm91dGVyIiwiYmxvZ1NlcnZpY2UiLCJJdGVtIiwiQmxvZyIsInByb3BzIiwicm91dGVyIiwiY29uc29sZSIsImxvZyIsImlzRmFsbGJhY2siLCJoMSIsInAiLCJnZXRTdGF0aWNQcm9wcyIsImNvbnRleHQiLCJzbHVnIiwiZGF0YSIsInBhcmFtcyIsImdldEJsb2dCeVNsdWciLCJhbGVydCIsImhhc0Vycm9yIiwiZ2V0U3RhdGljUGF0aHMiLCJwYXRoc1dpdGhQYXJhbXMiLCJnZXRTbHVncyIsIm1hcCIsIm9iaiIsInBhdGhzIiwiZmFsbGJhY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/blog/[slug].js\n");

/***/ })

});