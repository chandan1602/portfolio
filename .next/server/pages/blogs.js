"use strict";
(() => {
var exports = {};
exports.id = 55;
exports.ids = [55];
exports.modules = {

/***/ 427:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_blogs)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: ./api/index.js + 5 modules
var api = __webpack_require__(171);
// EXTERNAL MODULE: ./components/Blog/Item.js + 2 modules
var Item = __webpack_require__(20);
// EXTERNAL MODULE: ./styles/blogs.module.css
var blogs_module = __webpack_require__(519);
var blogs_module_default = /*#__PURE__*/__webpack_require__.n(blogs_module);
;// CONCATENATED MODULE: ./components/Blog/Listing.js



const Listing = ({ id , title  })=>{
    const { 0: isLoading , 1: setIsLoading  } = (0,external_react_.useState)(false);
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (blogs_module_default()).listingBox,
        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
            children: title
        })
    }, id));
};
/* harmony default export */ const Blog_Listing = (Listing);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(853);
;// CONCATENATED MODULE: ./pages/blogs.js








const blogs = ({ data  })=>{
    const router = (0,router_.useRouter)();
    const { 0: isLoading , 1: setIsLoading  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        console.log(data);
    // setIsLoading(false);
    }, []);
    const redirectToSlug = (e, slug)=>{
        router.push("/blog/" + slug);
    };
    // data.map(item => console.log("IN BLOGS.JS, the blogs :", item)) 
    const changeActiveTab = (type)=>{
        if (type == "private") {
            document.getElementById("public").classList.remove("active");
            document.getElementById("publictab").classList.remove("active");
        } else {
            document.getElementById("private").classList.remove("active");
            document.getElementById("privatetab").classList.remove("active");
        }
        document.getElementById(type).classList.add("active");
        document.getElementById(`${type}tab`).classList.add("active");
    };
    if (isLoading) {
        return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (blogs_module_default()).loading,
            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Spinner, {
                animation: "grow"
            })
        }));
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: `container ${(blogs_module_default()).blogs_main}`,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    className: `nav nav-tabs`,
                    id: "myTab",
                    role: "tablist",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "nav-item",
                            role: "presentation",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "nav-link active",
                                id: "public",
                                "data-bs-toggle": "tab",
                                "data-bs-target": "#home",
                                type: "button",
                                role: "tab",
                                "aria-controls": "home",
                                "aria-selected": "true",
                                onClick: ()=>changeActiveTab("public")
                                ,
                                children: "Public"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "nav-item",
                            role: "presentation",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "nav-link",
                                id: "private",
                                "data-bs-toggle": "tab",
                                "data-bs-target": "#profile",
                                type: "button",
                                role: "tab",
                                "aria-controls": "profile",
                                "aria-selected": "false",
                                onClick: ()=>changeActiveTab("private")
                                ,
                                children: "Private"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "tab-content",
                    id: "myTabContent",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "tab-pane fade show active",
                            id: "publictab",
                            role: "tabpanel",
                            "aria-labelledby": "public",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (blogs_module_default()).bl,
                                children: data.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        onClick: (e)=>redirectToSlug(e, item.slug)
                                        ,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Blog_Listing, {
                                            id: item.slug,
                                            title: item.title
                                        })
                                    }, item.slug)
                                )
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "tab-pane fade show",
                            id: "privatetab",
                            role: "tabpanel",
                            "aria-labelledby": "private",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `jumbotron ${(blogs_module_default()).bl}`,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    style: {
                                        "textAlign": 'center'
                                    },
                                    children: "No Private Blogs Yet."
                                })
                            })
                        })
                    ]
                })
            ]
        })
    }));
};
blogs.getInitialProps = async (request)=>{
    const { data  } = await api/* blogService.getListings */.wS.getListings();
    // console.log("SERVER DATA : ", data)
    return {
        data
    };
};
/* harmony default export */ const pages_blogs = (blogs);


/***/ }),

/***/ 167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 358:
/***/ ((module) => {

module.exports = require("react-bootstrap");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [171,20], () => (__webpack_exec__(427)));
module.exports = __webpack_exports__;

})();