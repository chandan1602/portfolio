(() => {
var exports = {};
exports.id = 176;
exports.ids = [176];
exports.modules = {

/***/ 989:
/***/ ((module) => {

// Exports
module.exports = {
	"MainContainer": "formContainer_MainContainer__EC2o9",
	"loading": "formContainer_loading___5kXk"
};


/***/ }),

/***/ 413:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "textButton_main__ICKye",
	"text": "textButton_text___CRoX"
};


/***/ }),

/***/ 313:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ signin)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: ./styles/formContainer.module.css
var formContainer_module = __webpack_require__(989);
var formContainer_module_default = /*#__PURE__*/__webpack_require__.n(formContainer_module);
;// CONCATENATED MODULE: external "react-router-dom"
const external_react_router_dom_namespaceObject = require("react-router-dom");
// EXTERNAL MODULE: ./styles/textButton.module.css
var textButton_module = __webpack_require__(413);
var textButton_module_default = /*#__PURE__*/__webpack_require__.n(textButton_module);
;// CONCATENATED MODULE: ./components/TextButton/button.js




const TextButton = (props)=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (textButton_module_default()).main,
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            href: props.path,
            className: (textButton_module_default()).text,
            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: props.Name
            })
        })
    }));
};
/* harmony default export */ const TextButton_button = (TextButton);

// EXTERNAL MODULE: ./api/index.js + 5 modules
var api = __webpack_require__(171);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(853);
// EXTERNAL MODULE: ./util/constants/LocalStorageKeys.js
var LocalStorageKeys = __webpack_require__(845);
var LocalStorageKeys_default = /*#__PURE__*/__webpack_require__.n(LocalStorageKeys);
;// CONCATENATED MODULE: ./pages/signin.js


// import axios from 'axios'






const Login = ()=>{
    const router = (0,router_.useRouter)();
    // const emailRegex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    const { 0: email , 1: setEmail  } = (0,external_react_.useState)("");
    const { 0: password , 1: setPassword  } = (0,external_react_.useState)("");
    const { 0: isLoading , 1: setIsLoading  } = (0,external_react_.useState)(false);
    const emailHandler = (e)=>{
        setEmail(e.target.value);
    };
    const passwordHandler = (e)=>{
        setPassword(e.target.value);
    };
    const onSubmit = async (event)=>{
        try {
            event.preventDefault();
            if (email === "" || password === "") {
                alert("Missing Fields");
                return;
            }
            setIsLoading(true);
            localStorage.setItem((LocalStorageKeys_default()).EMAIL, email);
            let { data , error  } = await api/* authService.login */.ON.login({
                name: email,
                password
            });
            setIsLoading(false);
            if (error) {
                alert("Invalid Email or Password");
                setIsLoading(false);
                return;
            }
            localStorage.setItem((LocalStorageKeys_default()).JSON_WEB_TOKEN, data);
            router.push({
                pathname: "/dashboard"
            });
        } catch (error) {
            alert(error);
            console.error(error);
            setIsLoading(false);
        }
    };
    if (isLoading) return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (formContainer_module_default()).loading,
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Spinner, {
            animation: "grow"
        })
    }));
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (formContainer_module_default()).MainContainer,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: "Authenticate"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form, {
                onSubmit: (e)=>onSubmit(e)
                ,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.FormGroup, {
                        controlId: "formBasicEmail",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.FormControl, {
                                placeholder: "Enter email",
                                onChange: (e)=>emailHandler(e)
                                ,
                                value: email
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Text, {
                                className: "text-muted"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.FormGroup, {
                        controlId: "formBasicPassword",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.FormControl, {
                            type: "password",
                            placeholder: "Password",
                            onChange: (e)=>passwordHandler(e)
                            ,
                            value: password
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Button, {
                        variant: "primary",
                        type: "submit",
                        children: "Submit"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "buttonGroups",
                children: /*#__PURE__*/ jsx_runtime_.jsx(TextButton_button, {
                    path: "/forgot-password",
                    Name: 'RESET PASSWORD'
                })
            })
        ]
    }));
};
/* harmony default export */ const signin = (Login);


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
var __webpack_exports__ = __webpack_require__.X(0, [171], () => (__webpack_exec__(313)));
module.exports = __webpack_exports__;

})();