"use strict";
(() => {
var exports = {};
exports.id = 492;
exports.ids = [492];
exports.modules = {

/***/ 793:
/***/ ((module) => {


let baseURL;
 false ? 0 : baseURL = "https://ec2-3-110-191-56.ap-south-1.compute.amazonaws.com:3000";
// export default function getBaseURL () {
//     let baseURL;
//     !process.env.NODE_ENV || process.env.NODE_ENV==='development' ? baseURL = process.env.DEV_URL : baseURL = process.env.SERVER_URL;
//     return baseURL;
// }
module.exports = {
    GET_SLUGS_URL: baseURL + "/slugs",
    GET_BLOG_BY_SLUG_URL: baseURL + "/blog/",
    GET_SLUG_TITLE_URL: baseURL + "/slugs-titles"
};


/***/ }),

/***/ 565:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _slug_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(853);
// EXTERNAL MODULE: ./api/index.js + 5 modules
var api = __webpack_require__(171);
// EXTERNAL MODULE: ./components/Blog/Item.js + 2 modules
var Item = __webpack_require__(20);
// EXTERNAL MODULE: ./api/CONSTANTS.js
var CONSTANTS = __webpack_require__(793);
var CONSTANTS_default = /*#__PURE__*/__webpack_require__.n(CONSTANTS);
;// CONCATENATED MODULE: external "https"
const external_https_namespaceObject = require("https");
var external_https_default = /*#__PURE__*/__webpack_require__.n(external_https_namespaceObject);
;// CONCATENATED MODULE: ./pages/blog/[slug].js









const Blog = (props)=>{
    const router = (0,router_.useRouter)();
    // if(props.hasError) {
    //     return <div>Blog Does not Exist...</div>
    // }
    if (router.isFallback) return(/*#__PURE__*/ jsx_runtime_.jsx("h1", {
        children: "Loading..."
    }));
    return(/*#__PURE__*/ jsx_runtime_.jsx(Item/* default */.Z, {
        id: props.data._id,
        description: props.data.description,
        comments: props.data.comments,
        timestamp: props.data.createdAt,
        title: props.data.title
    }, props.data._id));
};
const getStaticProps = async (context)=>{
    try {
        var ref;
        const slug = (ref = context.params) === null || ref === void 0 ? void 0 : ref.slug;
        const { data  } = await api/* blogService.getBlogBySlug */.wS.getBlogBySlug(slug);
        // let data  = await fetch(CONSTANTS.GET_BLOG_BY_SLUG_URL + slug)
        //     .then(data => data.json())
        //     .then(data => data.data);
        let props = {
            props: {
                data
            }
        };
        return props;
    } catch (error) {
        console.log(error);
        alert("Error Loading Blog. Internal Server Error!");
        return {
            props: {
                hasError: true
            }
        };
    }
};
async function getStaticPaths(context) {
    // const { data } = await blogService.getSlugs();
    const options = {
        agent: new (external_https_default()).Agent({
            rejectUnauthorized: false
        })
    };
    let data1 = await fetch((CONSTANTS_default()).GET_SLUGS_URL, options).then((data)=>data.json()
    ).then((data)=>data.data
    );
    // console.log("Blog slugs : ", data)
    const pathsWithParams = data1.map((obj)=>({
            params: {
                slug: obj.slug
            }
        })
    );
    return {
        paths: pathsWithParams,
        fallback: false
    };
}
/* harmony default export */ const _slug_ = (Blog);


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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [171,20], () => (__webpack_exec__(565)));
module.exports = __webpack_exports__;

})();