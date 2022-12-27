"use strict";
(() => {
var exports = {};
exports.id = 492;
exports.ids = [492];
exports.modules = {

/***/ 602:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(171);
/* harmony import */ var _components_Blog_Item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20);







const Blog = (props)=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    // if(props.hasError) {
    //     return <div>Blog Does not Exist...</div>
    // }
    if (router.isFallback) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
        children: "Loading..."
    }));
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Blog_Item__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
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
        const { data  } = await _api__WEBPACK_IMPORTED_MODULE_4__/* .blogService.getBlogBySlug */ .wS.getBlogBySlug(slug);
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
const getStaticPaths = async ()=>{
    const { data  } = await _api__WEBPACK_IMPORTED_MODULE_4__/* .blogService.getSlugs */ .wS.getSlugs();
    const pathsWithParams = data.map((obj)=>({
            params: {
                slug: obj.slug
            }
        })
    );
    return {
        paths: pathsWithParams,
        fallback: false
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blog);


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
var __webpack_exports__ = __webpack_require__.X(0, [171,20], () => (__webpack_exec__(602)));
module.exports = __webpack_exports__;

})();