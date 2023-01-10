"use strict";
exports.id = 171;
exports.ids = [171];
exports.modules = {

/***/ 171:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ON": () => (/* reexport */ auth_namespaceObject),
  "wS": () => (/* reexport */ blog_namespaceObject),
  "a$": () => (/* reexport */ comment_namespaceObject)
});

// NAMESPACE OBJECT: ./api/blog.js
var blog_namespaceObject = {};
__webpack_require__.r(blog_namespaceObject);
__webpack_require__.d(blog_namespaceObject, {
  "getBlogBySlug": () => (getBlogBySlug),
  "getBlogs": () => (getBlogs),
  "getListings": () => (getListings),
  "getSlugs": () => (getSlugs),
  "postBlog": () => (postBlog)
});

// NAMESPACE OBJECT: ./api/comment.js
var comment_namespaceObject = {};
__webpack_require__.r(comment_namespaceObject);
__webpack_require__.d(comment_namespaceObject, {
  "postComment": () => (postComment)
});

// NAMESPACE OBJECT: ./api/auth.js
var auth_namespaceObject = {};
__webpack_require__.r(auth_namespaceObject);
__webpack_require__.d(auth_namespaceObject, {
  "login": () => (login),
  "validate": () => (validate)
});

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./api/dummy/index.js
const blogs = [
    {
        "createdAt": "THE BOT ERA",
        "description": "Cannot reach the server at this moment. Please try again later!",
        "comments": [
            {
                "name": "Server Bot",
                "comment": "Oh Snap! Server Under Maintainance!",
                "createdAt": "THE BOT ERA!"
            }, 
        ]
    }, 
];
const dummyData = (url = "")=>{
    if (url.includes("blogs")) {
        return {
            data: blogs
        };
    }
    if (url.includes("slug")) {
        return {
            data: [
                {
                    "slug": "loading",
                    "_id": "loading"
                }
            ]
        };
    }
    return {
        data: [
            {
            }
        ],
        error: true
    };
};

;// CONCATENATED MODULE: ./api/axios.config.js


let Axios =  false ? 0 : external_axios_default().create({
    baseURL: "https://ec2-3-110-191-56.ap-south-1.compute.amazonaws.com:3000"
});
// console.log('ENV : ', process.env.NODE_ENV)
Axios.interceptors.response.use((response)=>{
    const { data  } = response;
    return {
        data: data === null || data === void 0 ? void 0 : data.data,
        error: false
    };
}, (error)=>{
    console.log("ERROR : ", error.config.url);
    return dummyData(error.config.url);
});
/* harmony default export */ const axios_config = (Axios);

;// CONCATENATED MODULE: ./api/blog.js

const getBlogs = ()=>axios_config.get("/blogs")
;
const getListings = ()=>axios_config.get("/slugs-titles")
;
const getSlugs = ()=>axios_config.get("/slugs")
;
const postBlog = ({ description , title , token  })=>axios_config.post("/blogs", {
        description,
        title
    }, {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
;
const getBlogBySlug = (slug)=>axios_config.get("/blog/" + slug)
;

;// CONCATENATED MODULE: ./api/comment.js

const postComment = (data)=>{
    axios_config.post("/comment", data);
};

;// CONCATENATED MODULE: ./api/auth.js

const login = (data)=>axios_config.post("/manage/api/v1/signin", data)
;
const validate = (data)=>axios_config.post("/manage/api/v1/validateRequest", data, {
        headers: {
            'Authorization': 'Bearer ' + data
        }
    })
;

;// CONCATENATED MODULE: ./api/index.js





/***/ })

};
;