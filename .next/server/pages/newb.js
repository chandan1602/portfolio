(() => {
var exports = {};
exports.id = 223;
exports.ids = [223];
exports.modules = {

/***/ 218:
/***/ ((module) => {

// Exports
module.exports = {
	"MainContainer": "dash_MainContainer__U42_1",
	"loading": "dash_loading__Yv37S"
};


/***/ }),

/***/ 673:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Header = (props)=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                style: {
                    "textAlign": "center"
                },
                children: props.title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
            })
        ]
    }));
};


/***/ }),

/***/ 796:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ newb)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: ./styles/dash.module.css
var dash_module = __webpack_require__(218);
var dash_module_default = /*#__PURE__*/__webpack_require__.n(dash_module);
// EXTERNAL MODULE: ./api/index.js + 5 modules
var api = __webpack_require__(171);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(853);
;// CONCATENATED MODULE: external "draft-js"
const external_draft_js_namespaceObject = require("draft-js");
;// CONCATENATED MODULE: external "draft-convert"
const external_draft_convert_namespaceObject = require("draft-convert");
// EXTERNAL MODULE: ./util/constants/LocalStorageKeys.js
var LocalStorageKeys = __webpack_require__(845);
var LocalStorageKeys_default = /*#__PURE__*/__webpack_require__.n(LocalStorageKeys);
// EXTERNAL MODULE: ./util/constants/Config.js
var Config = __webpack_require__(437);
var Config_default = /*#__PURE__*/__webpack_require__.n(Config);
;// CONCATENATED MODULE: ./components/RichTextEditor/Editor.js






class RichTextEditor extends (external_react_default()).Component {
    constructor(props1){
        super(props1);
        this.state = {
            editorState: external_draft_js_namespaceObject.EditorState.createEmpty(),
            typing: false,
            typingTimeout: 0
        };
        // this.state = {editorState: convertToRaw(ContentState.createFromText("Sample Text.."))};
        this.focus = ()=>this.refs.editor.focus()
        ;
        this.onChange = (editorState)=>{
            const self = this;
            if (self.state.typingTimeout) {
                clearTimeout(self.state.typingTimeout);
            }
            self.setState({
                editorState,
                typing: false,
                typingTimeout: setTimeout(function() {
                    localStorage.setItem((LocalStorageKeys_default()).BLOG, (0,external_draft_convert_namespaceObject.convertToHTML)(this.state.editorState.getCurrentContent()));
                }, (Config_default()).TYPING_TIMEOUT_FOR_BLOG)
            });
        // this.setState({editorState}); 
        // localStorage.setItem(LocalStorageKeys.BLOG, convertToHTML(this.state.editorState.getCurrentContent()));
        };
        this.handleKeyCommand = this._handleKeyCommand.bind(this);
        this.mapKeyToEditorCommand = this._mapKeyToEditorCommand.bind(this);
        this.toggleBlockType = this._toggleBlockType.bind(this);
        this.toggleInlineStyle = this._toggleInlineStyle.bind(this);
    }
    _handleKeyCommand(command, editorState1) {
        const newState = external_draft_js_namespaceObject.RichUtils.handleKeyCommand(editorState1, command);
        if (newState) {
            this.onChange(newState);
            return true;
        }
        return false;
    }
    _mapKeyToEditorCommand(e1) {
        if (e1.keyCode === 9 /* TAB */ ) {
            const newEditorState = external_draft_js_namespaceObject.RichUtils.onTab(e1, this.state.editorState, 4);
            if (newEditorState !== this.state.editorState) {
                this.onChange(newEditorState);
            }
            return;
        }
        return (0,external_draft_js_namespaceObject.getDefaultKeyBinding)(e1);
    }
    _toggleBlockType(blockType1) {
        this.onChange(external_draft_js_namespaceObject.RichUtils.toggleBlockType(this.state.editorState, blockType1));
    }
    _toggleInlineStyle(inlineStyle) {
        this.onChange(external_draft_js_namespaceObject.RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle));
    }
    render() {
        const { editorState  } = this.state;
        // If the user changes block type before entering any text, we can
        // either style the placeholder or hide it. Let's just hide it now.
        let className = 'RichEditor-editor';
        var contentState = editorState.getCurrentContent();
        if (!contentState.hasText()) {
            if (contentState.getBlockMap().first().getType() !== 'unstyled') {
                className += ' RichEditor-hidePlaceholder';
            }
        }
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "RichEditor-root",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(BlockStyleControls, {
                    editorState: editorState,
                    onToggle: this.toggleBlockType
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(InlineStyleControls, {
                    editorState: editorState,
                    onToggle: this.toggleInlineStyle
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: className,
                    onClick: this.focus,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_draft_js_namespaceObject.Editor, {
                        blockStyleFn: getBlockStyle,
                        customStyleMap: styleMap,
                        editorState: editorState,
                        handleKeyCommand: this.handleKeyCommand,
                        keyBindingFn: this.mapKeyToEditorCommand,
                        onChange: this.onChange,
                        placeholder: "Tell a story...",
                        ref: "editor",
                        spellCheck: true
                    })
                })
            ]
        }));
    }
}
// Custom overrides for "code" style.
const styleMap = {
    CODE: {
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
        fontSize: 16,
        padding: 2
    }
};
function getBlockStyle(block) {
    switch(block.getType()){
        case 'blockquote':
            return 'RichEditor-blockquote';
        default:
            return null;
    }
}
class StyleButton extends (external_react_default()).Component {
    constructor(){
        super();
        this.onToggle = (e)=>{
            e.preventDefault();
            this.props.onToggle(this.props.style);
        };
    }
    render() {
        let className = 'RichEditor-styleButton';
        if (this.props.active) {
            className += ' RichEditor-activeButton';
        }
        return(/*#__PURE__*/ jsx_runtime_.jsx("span", {
            className: className,
            onMouseDown: this.onToggle,
            children: this.props.label
        }));
    }
}
const BLOCK_TYPES = [
    {
        label: 'H1',
        style: 'header-one'
    },
    {
        label: 'H2',
        style: 'header-two'
    },
    {
        label: 'H3',
        style: 'header-three'
    },
    {
        label: 'H4',
        style: 'header-four'
    },
    {
        label: 'H5',
        style: 'header-five'
    },
    {
        label: 'H6',
        style: 'header-six'
    },
    {
        label: 'Blockquote',
        style: 'blockquote'
    },
    {
        label: 'UL',
        style: 'unordered-list-item'
    },
    {
        label: 'OL',
        style: 'ordered-list-item'
    },
    {
        label: 'Code Block',
        style: 'code-block'
    }, 
];
const BlockStyleControls = (props)=>{
    const { editorState  } = props;
    const selection = editorState.getSelection();
    const blockType = editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType();
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "RichEditor-controls",
        children: BLOCK_TYPES.map((type)=>/*#__PURE__*/ jsx_runtime_.jsx(StyleButton, {
                active: type.style === blockType,
                label: type.label,
                onToggle: props.onToggle,
                style: type.style
            }, type.label)
        )
    }));
};
var INLINE_STYLES = [
    {
        label: 'Bold',
        style: 'BOLD'
    },
    {
        label: 'Italic',
        style: 'ITALIC'
    },
    {
        label: 'Underline',
        style: 'UNDERLINE'
    },
    {
        label: 'Monospace',
        style: 'CODE'
    }, 
];
const InlineStyleControls = (props)=>{
    const currentStyle = props.editorState.getCurrentInlineStyle();
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "RichEditor-controls",
        children: INLINE_STYLES.map((type)=>/*#__PURE__*/ jsx_runtime_.jsx(StyleButton, {
                active: currentStyle.has(type.style),
                label: type.label,
                onToggle: props.onToggle,
                style: type.style
            }, type.label)
        )
    }));
};
/* harmony default export */ const Editor = (RichTextEditor);

// EXTERNAL MODULE: ./components/Header.js
var Header = __webpack_require__(673);
;// CONCATENATED MODULE: ./pages/newb.js


// import axios from 'axios'









const NewB = ()=>{
    const router = (0,router_.useRouter)();
    const { 0: token , 1: setToken  } = (0,external_react_.useState)("");
    const { 0: pageLoaded , 1: setPageLoaded  } = (0,external_react_.useState)(true);
    const { 0: isLoading , 1: setIsLoading  } = (0,external_react_.useState)(true);
    const { 0: title , 1: setTitle  } = (0,external_react_.useState)("");
    const onSubmit = async (e)=>{
        if (title !== "") {
            let res = prompt("Proceed with the Blog? (yes/y)");
            if (res === "yes" || res === "y") {
                try {
                    setIsLoading(true);
                    const { error  } = await api/* blogService.postBlog */.wS.postBlog({
                        description: localStorage.getItem((LocalStorageKeys_default()).BLOG),
                        title,
                        token
                    });
                    if (error) {
                        alert("Error! User auth failure.");
                    }
                    setIsLoading(false);
                    console.log("Now is Loading is " + isLoading);
                } catch (error) {
                    alert("Request Failed. Probable Reason : Network Problem!");
                    setIsLoading(false);
                }
            }
        }
    };
    (0,external_react_.useEffect)(async ()=>{
        setPageLoaded(false);
        return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        }));
    }, []);
    (0,external_react_.useEffect)(async ()=>{
        if (pageLoaded === false) {
            const { error  } = await api/* authService.validate */.ON.validate(localStorage.getItem((LocalStorageKeys_default()).JSON_WEB_TOKEN));
            if (error) {
                alert("You must be logged in");
                router.push("/signin");
                return;
            }
            setToken(localStorage.getItem((LocalStorageKeys_default()).JSON_WEB_TOKEN));
            setIsLoading(false);
            setPageLoaded(true);
        }
    }, [
        pageLoaded
    ]);
    const titleHandler = (e)=>{
        setTitle(e.target.value);
    };
    if (isLoading) {
        return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (dash_module_default()).loading,
            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Spinner, {
                animation: "grow"
            })
        }));
    } else return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "container",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("br", {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Header/* Header */.h, {
                title: "Create Blog"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form, {
                onSubmit: (e)=>onSubmit(e)
                ,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.FormGroup, {
                        controlId: "formBasicTitle",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.FormControl, {
                                placeholder: "Title",
                                onChange: (e)=>titleHandler(e)
                                ,
                                value: title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Text, {
                                className: "text-muted"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Editor, {
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Button, {
                        variant: "primary",
                        type: "submit",
                        children: "Submit"
                    })
                ]
            }),
            typeof localStorage !== "undefined" && localStorage.getItem((LocalStorageKeys_default()).BLOG) && localStorage.getItem((LocalStorageKeys_default()).BLOG) !== "<p></p>" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "jumbotron",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                children: "Previous Blog detected"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                dangerouslySetInnerHTML: {
                                    __html: localStorage.getItem((LocalStorageKeys_default()).BLOG)
                                }
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const newb = (NewB);


/***/ }),

/***/ 437:
/***/ ((module) => {

"use strict";

module.exports = {
    TYPING_TIMEOUT_FOR_BLOG: 5000
};


/***/ }),

/***/ 845:
/***/ ((module) => {

"use strict";

module.exports = {
    JSON_WEB_TOKEN: "jwtToken",
    BLOG: "blog",
    EMAIL: "email"
};


/***/ }),

/***/ 167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 358:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [171], () => (__webpack_exec__(796)));
module.exports = __webpack_exports__;

})();