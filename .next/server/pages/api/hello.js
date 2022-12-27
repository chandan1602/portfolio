"use strict";
(() => {
var exports = {};
exports.id = 453;
exports.ids = [453];
exports.modules = {

/***/ 881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler),
  "getStaticPaths": () => (/* binding */ getStaticPaths)
});

;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
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
    return {
        data: null,
        error: true
    };
};

;// CONCATENATED MODULE: ./api/axios.config.js


let axios_config_Axios =  false ? 0 : external_axios_default().create({
    baseURL: "http://ec2-3-110-191-56.ap-south-1.compute.amazonaws.com:3000"
});
// console.log('ENV : ', process.env.NODE_ENV)
axios_config_Axios.interceptors.response.use((response)=>{
    const { data  } = response;
    return {
        data: data === null || data === void 0 ? void 0 : data.data,
        error: false
    };
}, (error)=>{
    console.log("ERROR : ", error.config.url);
    return dummyData(error.config.url);
});
/* harmony default export */ const axios_config = (axios_config_Axios);

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
    Axios.post("/comment", data);
};

;// CONCATENATED MODULE: ./api/auth.js

const login = (data)=>Axios.post("/manage/api/v1/signin", data)
;
const validate = (data)=>Axios.post("/manage/api/v1/validateRequest", data, {
        headers: {
            'Authorization': 'Bearer ' + data
        }
    })
;

;// CONCATENATED MODULE: ./api/index.js




;// CONCATENATED MODULE: ./pages/api/hello.js
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

function handler(req, res) {
    res.status(200).json({
        name: 'John Doe'
    });
};
async function getStaticPaths() {
    const { data , error  } = await getBlogs();
    if (!error) {
        const paths = data.map((blog)=>({
                params: {
                    slug: blog.slug,
                    title: blog.title,
                    description: blog.description
                }
            })
        );
        return {
            paths,
            fallback: false
        };
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(881));
module.exports = __webpack_exports__;

})();