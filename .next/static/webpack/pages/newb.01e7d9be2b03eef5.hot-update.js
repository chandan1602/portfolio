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

/***/ "./components/RichTextEditor/Editor.js":
/*!*********************************************!*\
  !*** ./components/RichTextEditor/Editor.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! draft-js */ \"./node_modules/draft-js/lib/Draft.js\");\n/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var draft_convert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! draft-convert */ \"./node_modules/draft-convert/esm/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _getPrototypeOf(o) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o, p) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o, p);\n}\nvar _typeof = function(obj) {\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {\n        }));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\nvar _this1 = undefined;\nvar RichTextEditor = /*#__PURE__*/ function(_Component) {\n    \"use strict\";\n    _inherits(RichTextEditor, _Component);\n    var _super = _createSuper(RichTextEditor);\n    function RichTextEditor(props) {\n        _classCallCheck(this, RichTextEditor);\n        var _this;\n        _this = _super.call(this, props);\n        _this.state = {\n            editorState: draft_js__WEBPACK_IMPORTED_MODULE_2__.EditorState.createEmpty()\n        };\n        // this.state = {editorState: convertToRaw(ContentState.createFromText(\"Sample Text..\"))};\n        _this.focus = function() {\n            return _this.refs.editor.focus();\n        };\n        _this.onChange = function(editorState) {\n            _this.setState({\n                editorState: editorState\n            });\n            localStorage.setItem(\"blog\", (0,draft_convert__WEBPACK_IMPORTED_MODULE_3__.convertToHTML)(_this.state.editorState.getCurrentContent()));\n        };\n        _this.handleKeyCommand = _this._handleKeyCommand.bind(_assertThisInitialized(_this));\n        _this.mapKeyToEditorCommand = _this._mapKeyToEditorCommand.bind(_assertThisInitialized(_this));\n        _this.toggleBlockType = _this._toggleBlockType.bind(_assertThisInitialized(_this));\n        _this.toggleInlineStyle = _this._toggleInlineStyle.bind(_assertThisInitialized(_this));\n        return _this;\n    }\n    _createClass(RichTextEditor, [\n        {\n            key: \"_handleKeyCommand\",\n            value: function _handleKeyCommand(command, editorState) {\n                var newState = draft_js__WEBPACK_IMPORTED_MODULE_2__.RichUtils.handleKeyCommand(editorState, command);\n                if (newState) {\n                    this.onChange(newState);\n                    return true;\n                }\n                return false;\n            }\n        },\n        {\n            key: \"_mapKeyToEditorCommand\",\n            value: function _mapKeyToEditorCommand(e) {\n                if (e.keyCode === 9 /* TAB */ ) {\n                    var newEditorState = draft_js__WEBPACK_IMPORTED_MODULE_2__.RichUtils.onTab(e, this.state.editorState, 4);\n                    if (newEditorState !== this.state.editorState) {\n                        this.onChange(newEditorState);\n                    }\n                    return;\n                }\n                return (0,draft_js__WEBPACK_IMPORTED_MODULE_2__.getDefaultKeyBinding)(e);\n            }\n        },\n        {\n            key: \"_toggleBlockType\",\n            value: function _toggleBlockType(blockType) {\n                this.onChange(draft_js__WEBPACK_IMPORTED_MODULE_2__.RichUtils.toggleBlockType(this.state.editorState, blockType));\n            }\n        },\n        {\n            key: \"_toggleInlineStyle\",\n            value: function _toggleInlineStyle(inlineStyle) {\n                this.onChange(draft_js__WEBPACK_IMPORTED_MODULE_2__.RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle));\n            }\n        },\n        {\n            key: \"render\",\n            value: function render() {\n                var editorState = this.state.editorState;\n                // If the user changes block type before entering any text, we can\n                // either style the placeholder or hide it. Let's just hide it now.\n                var className = 'RichEditor-editor';\n                var contentState = editorState.getCurrentContent();\n                if (!contentState.hasText()) {\n                    if (contentState.getBlockMap().first().getType() !== 'unstyled') {\n                        className += ' RichEditor-hidePlaceholder';\n                    }\n                }\n                return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    className: \"RichEditor-root\",\n                    __source: {\n                        fileName: \"/Users/chandanbansal/portfolio/components/RichTextEditor/Editor.js\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BlockStyleControls, {\n                            editorState: editorState,\n                            onToggle: this.toggleBlockType,\n                            __source: {\n                                fileName: \"/Users/chandanbansal/portfolio/components/RichTextEditor/Editor.js\",\n                                lineNumber: 82,\n                                columnNumber: 11\n                            },\n                            __self: this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InlineStyleControls, {\n                            editorState: editorState,\n                            onToggle: this.toggleInlineStyle,\n                            __source: {\n                                fileName: \"/Users/chandanbansal/portfolio/components/RichTextEditor/Editor.js\",\n                                lineNumber: 86,\n                                columnNumber: 11\n                            },\n                            __self: this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            className: className,\n                            onClick: this.focus,\n                            __source: {\n                                fileName: \"/Users/chandanbansal/portfolio/components/RichTextEditor/Editor.js\",\n                                lineNumber: 90,\n                                columnNumber: 11\n                            },\n                            __self: this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(draft_js__WEBPACK_IMPORTED_MODULE_2__.Editor, {\n                                blockStyleFn: getBlockStyle,\n                                customStyleMap: styleMap,\n                                editorState: editorState,\n                                handleKeyCommand: this.handleKeyCommand,\n                                keyBindingFn: this.mapKeyToEditorCommand,\n                                onChange: this.onChange,\n                                placeholder: \"Tell a story...\",\n                                ref: \"editor\",\n                                spellCheck: true,\n                                __source: {\n                                    fileName: \"/Users/chandanbansal/portfolio/components/RichTextEditor/Editor.js\",\n                                    lineNumber: 91,\n                                    columnNumber: 13\n                                },\n                                __self: this\n                            })\n                        })\n                    ]\n                }));\n            }\n        }\n    ]);\n    return RichTextEditor;\n}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));\n// Custom overrides for \"code\" style.\nvar styleMap = {\n    CODE: {\n        backgroundColor: 'rgba(0, 0, 0, 0.05)',\n        fontFamily: '\"Inconsolata\", \"Menlo\", \"Consolas\", monospace',\n        fontSize: 16,\n        padding: 2\n    }\n};\nfunction getBlockStyle(block) {\n    switch(block.getType()){\n        case 'blockquote':\n            return 'RichEditor-blockquote';\n        default:\n            return null;\n    }\n}\nvar StyleButton = /*#__PURE__*/ function(_Component) {\n    \"use strict\";\n    _inherits(StyleButton, _Component);\n    var _super = _createSuper(StyleButton);\n    function StyleButton() {\n        _classCallCheck(this, StyleButton);\n        var _this;\n        _this = _super.call(this);\n        _this.onToggle = function(e) {\n            e.preventDefault();\n            _this.props.onToggle(_this.props.style);\n        };\n        return _this;\n    }\n    _createClass(StyleButton, [\n        {\n            key: \"render\",\n            value: function render() {\n                var className = 'RichEditor-styleButton';\n                if (this.props.active) {\n                    className += ' RichEditor-activeButton';\n                }\n                return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                    className: className,\n                    onMouseDown: this.onToggle,\n                    __source: {\n                        fileName: \"/Users/chandanbansal/portfolio/components/RichTextEditor/Editor.js\",\n                        lineNumber: 141,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: this.props.label\n                }));\n            }\n        }\n    ]);\n    return StyleButton;\n}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));\nvar BLOCK_TYPES = [\n    {\n        label: 'H1',\n        style: 'header-one'\n    },\n    {\n        label: 'H2',\n        style: 'header-two'\n    },\n    {\n        label: 'H3',\n        style: 'header-three'\n    },\n    {\n        label: 'H4',\n        style: 'header-four'\n    },\n    {\n        label: 'H5',\n        style: 'header-five'\n    },\n    {\n        label: 'H6',\n        style: 'header-six'\n    },\n    {\n        label: 'Blockquote',\n        style: 'blockquote'\n    },\n    {\n        label: 'UL',\n        style: 'unordered-list-item'\n    },\n    {\n        label: 'OL',\n        style: 'ordered-list-item'\n    },\n    {\n        label: 'Code Block',\n        style: 'code-block'\n    }, \n];\nvar BlockStyleControls = function(props) {\n    var _this = _this1;\n    var editorState = props.editorState;\n    var selection = editorState.getSelection();\n    var blockType = editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType();\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        className: \"RichEditor-controls\",\n        __source: {\n            fileName: \"/Users/chandanbansal/portfolio/components/RichTextEditor/Editor.js\",\n            lineNumber: 170,\n            columnNumber: 7\n        },\n        __self: _this1,\n        children: BLOCK_TYPES.map(function(type) {\n            /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyleButton, {\n                active: type.style === blockType,\n                label: type.label,\n                onToggle: props.onToggle,\n                style: type.style,\n                __source: {\n                    fileName: \"/Users/chandanbansal/portfolio/components/RichTextEditor/Editor.js\",\n                    lineNumber: 172,\n                    columnNumber: 11\n                },\n                __self: _this\n            }, type.label);\n        })\n    }));\n};\n_c = BlockStyleControls;\nvar INLINE_STYLES = [\n    {\n        label: 'Bold',\n        style: 'BOLD'\n    },\n    {\n        label: 'Italic',\n        style: 'ITALIC'\n    },\n    {\n        label: 'Underline',\n        style: 'UNDERLINE'\n    },\n    {\n        label: 'Monospace',\n        style: 'CODE'\n    }, \n];\nvar InlineStyleControls = function(props) {\n    var _this = _this1;\n    var currentStyle = props.editorState.getCurrentInlineStyle();\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        className: \"RichEditor-controls\",\n        __source: {\n            fileName: \"/Users/chandanbansal/portfolio/components/RichTextEditor/Editor.js\",\n            lineNumber: 195,\n            columnNumber: 7\n        },\n        __self: _this1,\n        children: INLINE_STYLES.map(function(type) {\n            /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyleButton, {\n                active: currentStyle.has(type.style),\n                label: type.label,\n                onToggle: props.onToggle,\n                style: type.style,\n                __source: {\n                    fileName: \"/Users/chandanbansal/portfolio/components/RichTextEditor/Editor.js\",\n                    lineNumber: 197,\n                    columnNumber: 11\n                },\n                __self: _this\n            }, type.label);\n        })\n    }));\n};\n_c1 = InlineStyleControls;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RichTextEditor);\nvar _c, _c1;\n$RefreshReg$(_c, \"BlockStyleControls\");\n$RefreshReg$(_c1, \"InlineStyleControls\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1JpY2hUZXh0RWRpdG9yL0VkaXRvci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXlCO0FBQ2tGO0FBQzlEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFdkNRLGNBQWMsaUJBQXBCLFFBQVE7O2NBQUZBLGNBQWM7OEJBQWRBLGNBQWM7YUFBZEEsY0FBYyxDQUNKQyxLQUFLOzhCQURmRCxjQUFjOztrQ0FFUkMsS0FBSztjQUNOQyxLQUFLLEdBQUcsQ0FBQ0M7WUFBQUEsV0FBVyxFQUFFVCw2REFBdUI7UUFBRSxDQUFDO1FBQ3ZELEVBQTBGO2NBR25GVyxLQUFLLEdBQUcsUUFBUTtZQUFGLE1BQU0sT0FBREMsSUFBSSxDQUFDQyxNQUFNLENBQUNGLEtBQUs7O2NBQ3BDRyxRQUFRLEdBQUcsUUFBUSxDQUFQTCxXQUFXLEVBQUssQ0FBQztrQkFDM0JNLFFBQVEsQ0FBQyxDQUFDTjtnQkFBQUEsV0FBVyxFQUFYQSxXQUFXO1lBQUEsQ0FBQztZQUMzQk8sWUFBWSxDQUFDQyxPQUFPLENBQUMsQ0FBTSxPQUFFWiw0REFBYSxPQUFNRyxLQUFLLENBQUNDLFdBQVcsQ0FBQ1MsaUJBQWlCO1FBQ3JGLENBQUM7Y0FFSUMsZ0JBQWdCLFNBQVFDLGlCQUFpQixDQUFDQyxJQUFJO2NBQzlDQyxxQkFBcUIsU0FBUUMsc0JBQXNCLENBQUNGLElBQUk7Y0FDeERHLGVBQWUsU0FBUUMsZ0JBQWdCLENBQUNKLElBQUk7Y0FDNUNLLGlCQUFpQixTQUFRQyxrQkFBa0IsQ0FBQ04sSUFBSTs7O2lCQWhCckRmLGNBQWM7O1lBb0JoQmMsR0FBaUIsRUFBakJBLENBQWlCO21CQUFqQkEsUUFBUSxDQUFSQSxpQkFBaUIsQ0FBQ1EsT0FBTyxFQUFFbkIsV0FBVyxFQUFFLENBQUM7Z0JBQ3ZDLEdBQUssQ0FBQ29CLFFBQVEsR0FBRzNCLGdFQUEwQixD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QyxDQUFxQjs7Ozs7OztrQkFDakN3QyxhQUFhLENBQUNGLEdBQUcsQ0FBQyxRQUFRLENBQVBDLElBQUk7MEJBQ3RCLE1BQU0sd0RBQUxiLFdBQVc7Z0JBRVZHLE1BQU0sRUFBRVksWUFBWSxDQUFDRSxHQUFHLENBQUNKLElBQUksQ0FBQ1gsS0FBSztnQkFDbkNJLEtBQUssRUFBRU8sSUFBSSxDQUFDUCxLQUFLO2dCQUNqQnhCLFFBQVEsRUFBRXRDLEtBQUssQ0FBQ3NDLFFBQVE7Z0JBQ3hCb0IsS0FBSyxFQUFFVyxJQUFJLENBQUNYLEtBQUs7Ozs7Ozs7ZUFKWlcsSUFBSSxDQUFDUCxLQUFLOzs7QUFTekIsQ0FBQztNQWhCS3ZCLG1CQUFtQjtBQWtCekIsK0RBQWV4QyxjQUFjLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SaWNoVGV4dEVkaXRvci9FZGl0b3IuanM/NTNiYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBFZGl0b3IsIEVkaXRvclN0YXRlLCBnZXREZWZhdWx0S2V5QmluZGluZywgUmljaFV0aWxzLCBDb250ZW50U3RhdGUsIGNvbnZlcnRUb1JhdyB9IGZyb20gJ2RyYWZ0LWpzJ1xuaW1wb3J0IHsgY29udmVydFRvSFRNTCB9IGZyb20gXCJkcmFmdC1jb252ZXJ0XCI7XG5cbmNsYXNzIFJpY2hUZXh0RWRpdG9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgdGhpcy5zdGF0ZSA9IHtlZGl0b3JTdGF0ZTogRWRpdG9yU3RhdGUuY3JlYXRlRW1wdHkoKX07XG4gICAgLy8gdGhpcy5zdGF0ZSA9IHtlZGl0b3JTdGF0ZTogY29udmVydFRvUmF3KENvbnRlbnRTdGF0ZS5jcmVhdGVGcm9tVGV4dChcIlNhbXBsZSBUZXh0Li5cIikpfTtcblxuXG4gICAgICB0aGlzLmZvY3VzID0gKCkgPT4gdGhpcy5yZWZzLmVkaXRvci5mb2N1cygpO1xuICAgICAgdGhpcy5vbkNoYW5nZSA9IChlZGl0b3JTdGF0ZSkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtlZGl0b3JTdGF0ZX0pOyBcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJibG9nXCIsIGNvbnZlcnRUb0hUTUwodGhpcy5zdGF0ZS5lZGl0b3JTdGF0ZS5nZXRDdXJyZW50Q29udGVudCgpKSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaGFuZGxlS2V5Q29tbWFuZCA9IHRoaXMuX2hhbmRsZUtleUNvbW1hbmQuYmluZCh0aGlzKTtcbiAgICAgIHRoaXMubWFwS2V5VG9FZGl0b3JDb21tYW5kID0gdGhpcy5fbWFwS2V5VG9FZGl0b3JDb21tYW5kLmJpbmQodGhpcyk7XG4gICAgICB0aGlzLnRvZ2dsZUJsb2NrVHlwZSA9IHRoaXMuX3RvZ2dsZUJsb2NrVHlwZS5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy50b2dnbGVJbmxpbmVTdHlsZSA9IHRoaXMuX3RvZ2dsZUlubGluZVN0eWxlLmJpbmQodGhpcyk7XG4gICAgfVxuXG5cbiAgICBfaGFuZGxlS2V5Q29tbWFuZChjb21tYW5kLCBlZGl0b3JTdGF0ZSkge1xuICAgICAgY29uc3QgbmV3U3RhdGUgPSBSaWNoVXRpbHMuaGFuZGxlS2V5Q29tbWFuZChlZGl0b3JTdGF0ZSwgY29tbWFuZCk7XG4gICAgICBpZiAobmV3U3RhdGUpIHtcbiAgICAgICAgdGhpcy5vbkNoYW5nZShuZXdTdGF0ZSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIF9tYXBLZXlUb0VkaXRvckNvbW1hbmQoZSkge1xuICAgICAgaWYgKGUua2V5Q29kZSA9PT0gOSAvKiBUQUIgKi8pIHtcbiAgICAgICAgY29uc3QgbmV3RWRpdG9yU3RhdGUgPSBSaWNoVXRpbHMub25UYWIoXG4gICAgICAgICAgZSxcbiAgICAgICAgICB0aGlzLnN0YXRlLmVkaXRvclN0YXRlLFxuICAgICAgICAgIDQsIC8qIG1heERlcHRoICovXG4gICAgICAgICk7XG4gICAgICAgIGlmIChuZXdFZGl0b3JTdGF0ZSAhPT0gdGhpcy5zdGF0ZS5lZGl0b3JTdGF0ZSkge1xuICAgICAgICAgIHRoaXMub25DaGFuZ2UobmV3RWRpdG9yU3RhdGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBnZXREZWZhdWx0S2V5QmluZGluZyhlKTtcbiAgICB9XG5cbiAgICBfdG9nZ2xlQmxvY2tUeXBlKGJsb2NrVHlwZSkge1xuICAgICAgdGhpcy5vbkNoYW5nZShcbiAgICAgICAgUmljaFV0aWxzLnRvZ2dsZUJsb2NrVHlwZShcbiAgICAgICAgICB0aGlzLnN0YXRlLmVkaXRvclN0YXRlLFxuICAgICAgICAgIGJsb2NrVHlwZVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cblxuICAgIF90b2dnbGVJbmxpbmVTdHlsZShpbmxpbmVTdHlsZSkge1xuICAgICAgdGhpcy5vbkNoYW5nZShcbiAgICAgICAgUmljaFV0aWxzLnRvZ2dsZUlubGluZVN0eWxlKFxuICAgICAgICAgIHRoaXMuc3RhdGUuZWRpdG9yU3RhdGUsXG4gICAgICAgICAgaW5saW5lU3R5bGVcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7ZWRpdG9yU3RhdGV9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgLy8gSWYgdGhlIHVzZXIgY2hhbmdlcyBibG9jayB0eXBlIGJlZm9yZSBlbnRlcmluZyBhbnkgdGV4dCwgd2UgY2FuXG4gICAgICAvLyBlaXRoZXIgc3R5bGUgdGhlIHBsYWNlaG9sZGVyIG9yIGhpZGUgaXQuIExldCdzIGp1c3QgaGlkZSBpdCBub3cuXG4gICAgICBsZXQgY2xhc3NOYW1lID0gJ1JpY2hFZGl0b3ItZWRpdG9yJztcbiAgICAgIHZhciBjb250ZW50U3RhdGUgPSBlZGl0b3JTdGF0ZS5nZXRDdXJyZW50Q29udGVudCgpO1xuICAgICAgaWYgKCFjb250ZW50U3RhdGUuaGFzVGV4dCgpKSB7XG4gICAgICAgIGlmIChjb250ZW50U3RhdGUuZ2V0QmxvY2tNYXAoKS5maXJzdCgpLmdldFR5cGUoKSAhPT0gJ3Vuc3R5bGVkJykge1xuICAgICAgICAgIGNsYXNzTmFtZSArPSAnIFJpY2hFZGl0b3ItaGlkZVBsYWNlaG9sZGVyJztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlJpY2hFZGl0b3Itcm9vdFwiPlxuICAgICAgICAgIDxCbG9ja1N0eWxlQ29udHJvbHNcbiAgICAgICAgICAgIGVkaXRvclN0YXRlPXtlZGl0b3JTdGF0ZX1cbiAgICAgICAgICAgIG9uVG9nZ2xlPXt0aGlzLnRvZ2dsZUJsb2NrVHlwZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxJbmxpbmVTdHlsZUNvbnRyb2xzXG4gICAgICAgICAgICBlZGl0b3JTdGF0ZT17ZWRpdG9yU3RhdGV9XG4gICAgICAgICAgICBvblRvZ2dsZT17dGhpcy50b2dnbGVJbmxpbmVTdHlsZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9IG9uQ2xpY2s9e3RoaXMuZm9jdXN9PlxuICAgICAgICAgICAgPEVkaXRvclxuICAgICAgICAgICAgICBibG9ja1N0eWxlRm49e2dldEJsb2NrU3R5bGV9XG4gICAgICAgICAgICAgIGN1c3RvbVN0eWxlTWFwPXtzdHlsZU1hcH1cbiAgICAgICAgICAgICAgZWRpdG9yU3RhdGU9e2VkaXRvclN0YXRlfVxuICAgICAgICAgICAgICBoYW5kbGVLZXlDb21tYW5kPXt0aGlzLmhhbmRsZUtleUNvbW1hbmR9XG4gICAgICAgICAgICAgIGtleUJpbmRpbmdGbj17dGhpcy5tYXBLZXlUb0VkaXRvckNvbW1hbmR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRlbGwgYSBzdG9yeS4uLlwiXG4gICAgICAgICAgICAgIHJlZj1cImVkaXRvclwiXG4gICAgICAgICAgICAgIHNwZWxsQ2hlY2s9e3RydWV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLy8gQ3VzdG9tIG92ZXJyaWRlcyBmb3IgXCJjb2RlXCIgc3R5bGUuXG4gIGNvbnN0IHN0eWxlTWFwID0ge1xuICAgIENPREU6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC4wNSknLFxuICAgICAgZm9udEZhbWlseTogJ1wiSW5jb25zb2xhdGFcIiwgXCJNZW5sb1wiLCBcIkNvbnNvbGFzXCIsIG1vbm9zcGFjZScsXG4gICAgICBmb250U2l6ZTogMTYsXG4gICAgICBwYWRkaW5nOiAyLFxuICAgIH0sXG4gIH07XG5cbiAgZnVuY3Rpb24gZ2V0QmxvY2tTdHlsZShibG9jaykge1xuICAgIHN3aXRjaCAoYmxvY2suZ2V0VHlwZSgpKSB7XG4gICAgICBjYXNlICdibG9ja3F1b3RlJzogcmV0dXJuICdSaWNoRWRpdG9yLWJsb2NrcXVvdGUnO1xuICAgICAgZGVmYXVsdDogcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgY2xhc3MgU3R5bGVCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIHRoaXMub25Ub2dnbGUgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMucHJvcHMub25Ub2dnbGUodGhpcy5wcm9wcy5zdHlsZSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGxldCBjbGFzc05hbWUgPSAnUmljaEVkaXRvci1zdHlsZUJ1dHRvbic7XG4gICAgICBpZiAodGhpcy5wcm9wcy5hY3RpdmUpIHtcbiAgICAgICAgY2xhc3NOYW1lICs9ICcgUmljaEVkaXRvci1hY3RpdmVCdXR0b24nO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gb25Nb3VzZURvd249e3RoaXMub25Ub2dnbGV9PlxuICAgICAgICAgIHt0aGlzLnByb3BzLmxhYmVsfVxuICAgICAgICA8L3NwYW4+XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IEJMT0NLX1RZUEVTID0gW1xuICAgIHtsYWJlbDogJ0gxJywgc3R5bGU6ICdoZWFkZXItb25lJ30sXG4gICAge2xhYmVsOiAnSDInLCBzdHlsZTogJ2hlYWRlci10d28nfSxcbiAgICB7bGFiZWw6ICdIMycsIHN0eWxlOiAnaGVhZGVyLXRocmVlJ30sXG4gICAge2xhYmVsOiAnSDQnLCBzdHlsZTogJ2hlYWRlci1mb3VyJ30sXG4gICAge2xhYmVsOiAnSDUnLCBzdHlsZTogJ2hlYWRlci1maXZlJ30sXG4gICAge2xhYmVsOiAnSDYnLCBzdHlsZTogJ2hlYWRlci1zaXgnfSxcbiAgICB7bGFiZWw6ICdCbG9ja3F1b3RlJywgc3R5bGU6ICdibG9ja3F1b3RlJ30sXG4gICAge2xhYmVsOiAnVUwnLCBzdHlsZTogJ3Vub3JkZXJlZC1saXN0LWl0ZW0nfSxcbiAgICB7bGFiZWw6ICdPTCcsIHN0eWxlOiAnb3JkZXJlZC1saXN0LWl0ZW0nfSxcbiAgICB7bGFiZWw6ICdDb2RlIEJsb2NrJywgc3R5bGU6ICdjb2RlLWJsb2NrJ30sXG4gIF07XG5cbiAgY29uc3QgQmxvY2tTdHlsZUNvbnRyb2xzID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3Qge2VkaXRvclN0YXRlfSA9IHByb3BzO1xuICAgIGNvbnN0IHNlbGVjdGlvbiA9IGVkaXRvclN0YXRlLmdldFNlbGVjdGlvbigpO1xuICAgIGNvbnN0IGJsb2NrVHlwZSA9IGVkaXRvclN0YXRlXG4gICAgICAuZ2V0Q3VycmVudENvbnRlbnQoKVxuICAgICAgLmdldEJsb2NrRm9yS2V5KHNlbGVjdGlvbi5nZXRTdGFydEtleSgpKVxuICAgICAgLmdldFR5cGUoKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlJpY2hFZGl0b3ItY29udHJvbHNcIj5cbiAgICAgICAge0JMT0NLX1RZUEVTLm1hcCgodHlwZSkgPT5cbiAgICAgICAgICA8U3R5bGVCdXR0b25cbiAgICAgICAgICAgIGtleT17dHlwZS5sYWJlbH1cbiAgICAgICAgICAgIGFjdGl2ZT17dHlwZS5zdHlsZSA9PT0gYmxvY2tUeXBlfVxuICAgICAgICAgICAgbGFiZWw9e3R5cGUubGFiZWx9XG4gICAgICAgICAgICBvblRvZ2dsZT17cHJvcHMub25Ub2dnbGV9XG4gICAgICAgICAgICBzdHlsZT17dHlwZS5zdHlsZX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcblxuICB2YXIgSU5MSU5FX1NUWUxFUyA9IFtcbiAgICB7bGFiZWw6ICdCb2xkJywgc3R5bGU6ICdCT0xEJ30sXG4gICAge2xhYmVsOiAnSXRhbGljJywgc3R5bGU6ICdJVEFMSUMnfSxcbiAgICB7bGFiZWw6ICdVbmRlcmxpbmUnLCBzdHlsZTogJ1VOREVSTElORSd9LFxuICAgIHtsYWJlbDogJ01vbm9zcGFjZScsIHN0eWxlOiAnQ09ERSd9LFxuICBdO1xuXG4gIGNvbnN0IElubGluZVN0eWxlQ29udHJvbHMgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBjdXJyZW50U3R5bGUgPSBwcm9wcy5lZGl0b3JTdGF0ZS5nZXRDdXJyZW50SW5saW5lU3R5bGUoKTtcbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJSaWNoRWRpdG9yLWNvbnRyb2xzXCI+XG4gICAgICAgIHtJTkxJTkVfU1RZTEVTLm1hcCgodHlwZSkgPT5cbiAgICAgICAgICA8U3R5bGVCdXR0b25cbiAgICAgICAgICAgIGtleT17dHlwZS5sYWJlbH1cbiAgICAgICAgICAgIGFjdGl2ZT17Y3VycmVudFN0eWxlLmhhcyh0eXBlLnN0eWxlKX1cbiAgICAgICAgICAgIGxhYmVsPXt0eXBlLmxhYmVsfVxuICAgICAgICAgICAgb25Ub2dnbGU9e3Byb3BzLm9uVG9nZ2xlfVxuICAgICAgICAgICAgc3R5bGU9e3R5cGUuc3R5bGV9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG5cbiAgZXhwb3J0IGRlZmF1bHQgUmljaFRleHRFZGl0b3I7Il0sIm5hbWVzIjpbIlJlYWN0IiwiRWRpdG9yIiwiRWRpdG9yU3RhdGUiLCJnZXREZWZhdWx0S2V5QmluZGluZyIsIlJpY2hVdGlscyIsIkNvbnRlbnRTdGF0ZSIsImNvbnZlcnRUb1JhdyIsImNvbnZlcnRUb0hUTUwiLCJSaWNoVGV4dEVkaXRvciIsInByb3BzIiwic3RhdGUiLCJlZGl0b3JTdGF0ZSIsImNyZWF0ZUVtcHR5IiwiZm9jdXMiLCJyZWZzIiwiZWRpdG9yIiwib25DaGFuZ2UiLCJzZXRTdGF0ZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJnZXRDdXJyZW50Q29udGVudCIsImhhbmRsZUtleUNvbW1hbmQiLCJfaGFuZGxlS2V5Q29tbWFuZCIsImJpbmQiLCJtYXBLZXlUb0VkaXRvckNvbW1hbmQiLCJfbWFwS2V5VG9FZGl0b3JDb21tYW5kIiwidG9nZ2xlQmxvY2tUeXBlIiwiX3RvZ2dsZUJsb2NrVHlwZSIsInRvZ2dsZUlubGluZVN0eWxlIiwiX3RvZ2dsZUlubGluZVN0eWxlIiwiY29tbWFuZCIsIm5ld1N0YXRlIiwiZSIsImtleUNvZGUiLCJuZXdFZGl0b3JTdGF0ZSIsIm9uVGFiIiwiYmxvY2tUeXBlIiwiaW5saW5lU3R5bGUiLCJyZW5kZXIiLCJjbGFzc05hbWUiLCJjb250ZW50U3RhdGUiLCJoYXNUZXh0IiwiZ2V0QmxvY2tNYXAiLCJmaXJzdCIsImdldFR5cGUiLCJkaXYiLCJCbG9ja1N0eWxlQ29udHJvbHMiLCJvblRvZ2dsZSIsIklubGluZVN0eWxlQ29udHJvbHMiLCJvbkNsaWNrIiwiYmxvY2tTdHlsZUZuIiwiZ2V0QmxvY2tTdHlsZSIsImN1c3RvbVN0eWxlTWFwIiwic3R5bGVNYXAiLCJrZXlCaW5kaW5nRm4iLCJwbGFjZWhvbGRlciIsInJlZiIsInNwZWxsQ2hlY2siLCJDb21wb25lbnQiLCJDT0RFIiwiYmFja2dyb3VuZENvbG9yIiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwicGFkZGluZyIsImJsb2NrIiwiU3R5bGVCdXR0b24iLCJwcmV2ZW50RGVmYXVsdCIsInN0eWxlIiwiYWN0aXZlIiwic3BhbiIsIm9uTW91c2VEb3duIiwibGFiZWwiLCJCTE9DS19UWVBFUyIsInNlbGVjdGlvbiIsImdldFNlbGVjdGlvbiIsImdldEJsb2NrRm9yS2V5IiwiZ2V0U3RhcnRLZXkiLCJtYXAiLCJ0eXBlIiwiSU5MSU5FX1NUWUxFUyIsImN1cnJlbnRTdHlsZSIsImdldEN1cnJlbnRJbmxpbmVTdHlsZSIsImhhcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/RichTextEditor/Editor.js\n");

/***/ })

});