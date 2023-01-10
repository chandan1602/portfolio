exports.id = 20;
exports.ids = [20];
exports.modules = {

/***/ 519:
/***/ ((module) => {

// Exports
module.exports = {
	"loading": "blogs_loading__0M_cf",
	"blogs_main": "blogs_blogs_main__BiQLr",
	"blog": "blogs_blog__oeFX0",
	"commentDate": "blogs_commentDate__3lz6s",
	"bl": "blogs_bl__z1p3U",
	"bF": "blogs_bF__gSaq_",
	"created": "blogs_created__YGRcd",
	"cB": "blogs_cB__tZr8x",
	"cFM": "blogs_cFM__T4m6f",
	"fB": "blogs_fB__XYEcD",
	"listingBox": "blogs_listingBox__rOQXh"
};


/***/ }),

/***/ 20:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Blog_Item)
});

// NAMESPACE OBJECT: ./util/helperFunctions/blogItem.js
var blogItem_namespaceObject = {};
__webpack_require__.r(blogItem_namespaceObject);
__webpack_require__.d(blogItem_namespaceObject, {
  "getTimeStamp": () => (getTimeStamp)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./styles/blogs.module.css
var blogs_module = __webpack_require__(519);
var blogs_module_default = /*#__PURE__*/__webpack_require__.n(blogs_module);
// EXTERNAL MODULE: ./api/index.js + 5 modules
var api = __webpack_require__(171);
;// CONCATENATED MODULE: ./components/Blog/Comment.js

const Comment = ({ item , index , blogUtil , style  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `${style.cB} cB`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-9",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                            children: item.name
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `col-3 ${style.commentDate}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("abbr", {
                            title: item.createdAt,
                            className: style.created,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: blogUtil.getTimeStamp(item.createdAt)
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: `col-10`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: item.comment
                    })
                })
            })
        ]
    }, `comm${index}`));
};
/* harmony default export */ const Blog_Comment = (Comment);

;// CONCATENATED MODULE: ./util/helperFunctions/blogItem.js
const getTimeStamp = (org)=>{
    if (!org || org == "") return "just now";
    const curr = new Date();
    if (curr.getUTCFullYear() !== Number(org.slice(0, 4))) {
        let diff = curr.getFullYear() - Number(org.slice(0, 4));
        if (diff === 1) return '1 year ago';
        return `${diff} years ago`;
    } else if (curr.getUTCMonth() + 1 !== Number(org.slice(5, 7))) {
        let diff = curr.getMonth() + 1 - Number(org.slice(5, 7));
        if (diff === 1) return '1 month ago';
        return `${diff} months ago`;
    } else if (curr.getUTCDate() !== Number(org.slice(8, 10))) {
        let diff = curr.getDate() - Number(org.slice(8, 10));
        if (diff === 1) return '1 day ago';
        return `${diff} days ago`;
    } else if (curr.getUTCHours() !== Number(org.slice(11, 13))) {
        let diff = curr.getHours() - Number(org.slice(11, 13));
        if (diff === 1) return '1 hour ago';
        return `${diff} hours ago`;
    }
    return 'few minutes ago';
};

// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
;// CONCATENATED MODULE: ./components/Blog/Item.js







const Item = ({ id , index , description , timestamp , comments , title  })=>{
    const { 0: commentData , 1: setcommentData  } = (0,external_react_.useState)({
        name: "",
        description: ""
    });
    const { 0: allComments1 , 1: setAllComment  } = (0,external_react_.useState)([]);
    const { 0: isLoading , 1: setIsLoading  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        setAllComment([
            ...comments
        ]);
    }, []);
    const handleComment = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setcommentData({
            ...commentData,
            [name]: value
        });
    };
    const handleSubmit = async (e)=>{
        try {
            setIsLoading(true);
            e.preventDefault();
            const data = {
                id,
                name: commentData.name,
                comment: commentData.description
            };
            await api/* commentService.postComment */.a$.postComment(data);
            setAllComment((allComments)=>[
                    ...allComments,
                    data
                ]
            );
            setIsLoading(false);
        } catch (error) {
            alert("An error occured. Couldn't complete the transaction. Try again later.");
            console.log(error);
            setIsLoading(false);
        }
    };
    // if (isLoading) {
    //     return (
    //         <div className={style.loading}>
    //             <Spinner animation="grow" />
    //         </div>
    //     )
    // }
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "container",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("br", {
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `jumbotron ${(blogs_module_default()).blog}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "markupP",
                        dangerouslySetInnerHTML: {
                            __html: description
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (blogs_module_default()).bF,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    href: `#comments${index}`,
                                    "data-toggle": "collapse",
                                    role: "button",
                                    "aria-expanded": "false",
                                    "aria-controls": "collapseExample",
                                    style: {
                                        cursor: 'pointer'
                                    },
                                    children: [
                                        "Comments(",
                                        allComments1.length,
                                        ")"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("abbr", {
                                title: timestamp,
                                className: (blogs_module_default()).created,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    children: [
                                        "Blog posted ",
                                        getTimeStamp(timestamp)
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "collapse",
                        id: `comments${index}`,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                className: `row row-cols-lg-auto g-3 align-items-center ${(blogs_module_default()).cFM}`,
                                onSubmit: (e)=>handleSubmit(e)
                                ,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-12",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "input-group",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                type: "text",
                                                className: "form-control",
                                                id: "description",
                                                placeholder: "Make a comment...",
                                                name: "description",
                                                required: true,
                                                onChange: (e)=>handleComment(e)
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: `col-8 ${(blogs_module_default()).fB}`,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "input-group",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    type: "text",
                                                    className: "form-control",
                                                    id: "name",
                                                    placeholder: "Enter Name",
                                                    name: "name",
                                                    required: true,
                                                    onChange: (e)=>handleComment(e)
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    type: "submit",
                                                    className: "btn btn-secondary",
                                                    children: "Submit"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            allComments1.length !== 0 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: allComments1.map((item, i)=>/*#__PURE__*/ jsx_runtime_.jsx(Blog_Comment, {
                                        item: item,
                                        index: i,
                                        blogUtil: blogItem_namespaceObject,
                                        style: (blogs_module_default())
                                    })
                                )
                            })
                        ]
                    })
                ]
            })
        ]
    }, id));
};
/* harmony default export */ const Blog_Item = (Item);


/***/ })

};
;