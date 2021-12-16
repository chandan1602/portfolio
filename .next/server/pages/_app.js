"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 324:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./components/Header.js


const Header = ()=>{
    return(/*#__PURE__*/ _jsx("div", {
        children: /*#__PURE__*/ _jsx("p", {
            children: "Header"
        })
    }));
};

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./components/Meta.js


const Meta = ({ title , keywords , description  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                "http-equiv": "X-UA-Compatible",
                content: "ie=edge"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "keywords",
                content: keywords
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "description",
                content: description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                charSet: "utf-8"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "icon",
                href: "/favicon.ico"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: title
            })
        ]
    }));
};
Meta.defaultProps = {
    title: 'Chandan Bansal',
    keywords: 'computer engineer, programming, web developer, software engineer',
    description: 'Get to know the developer'
};
/* harmony default export */ const components_Meta = (Meta);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(853);
;// CONCATENATED MODULE: ./components/Nav.js





const Nav = ()=>{
    let trans = ()=>{
        document.documentElement.classList.add('transition');
        window.setTimeout(()=>{
            document.documentElement.classList.remove('transition');
        }, 0);
    };
    (0,external_react_.useEffect)(()=>{
        var checkbox = document.querySelector('input[name=mode]');
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                trans();
                document.documentElement.setAttribute('data-theme', 'dartheme');
            } else {
                trans();
                document.documentElement.setAttribute('data-theme', 'lighttheme');
            }
        });
    });
    const router = (0,router_.useRouter)();
    const redirectToPage = (page)=>{
        router.push(page);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",
                        integrity: "sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh",
                        crossorigin: "anonymous"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                className: "navbar navbar-expand-lg navbar-dark bg-dark",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "navbar-brand",
                        "data-toggle": "collapse",
                        role: "button",
                        "aria-expanded": "false",
                        href: "#details",
                        "aria-controls": "collapseExample",
                        style: {
                            cursor: 'pointer'
                        },
                        children: "Chandan Bansal"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "navbar-toggler",
                        type: "button",
                        "data-toggle": "collapse",
                        "data-target": "#navbarNav",
                        "aria-controls": "navbarNav",
                        "aria-expanded": "false",
                        "aria-label": "Toggle navigation",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "navbar-toggler-icon"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "collapse navbar-collapse",
                        id: "navbarNav",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "navbar-nav",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "nav-item",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "nav-link",
                                        style: {
                                            cursor: 'pointer'
                                        },
                                        onClick: ()=>redirectToPage('/#education')
                                        ,
                                        children: "Education"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "nav-item",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "nav-link",
                                        style: {
                                            cursor: 'pointer'
                                        },
                                        onClick: ()=>redirectToPage('/#skills')
                                        ,
                                        children: "Skills"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "nav-item",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "nav-link",
                                        style: {
                                            cursor: 'pointer'
                                        },
                                        onClick: ()=>redirectToPage('/#internships')
                                        ,
                                        children: "Internships"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "nav-item",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "nav-link",
                                        style: {
                                            cursor: 'pointer'
                                        },
                                        onClick: ()=>redirectToPage('/#projects')
                                        ,
                                        children: "Projects"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "nav-item",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "nav-link",
                                        style: {
                                            cursor: 'pointer'
                                        },
                                        onClick: ()=>redirectToPage('/blogs')
                                        ,
                                        children: "Blogs"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: "nav-item darkmode_toggler",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            className: "container_toggle",
                                            type: "checkbox",
                                            id: "switch",
                                            name: "mode"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                            for: "switch",
                                            children: "Toggle"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./components/Layout.js




const Layout = ({ children  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Meta, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Nav, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("main", {
                    children: children
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("script", {
                src: "https://code.jquery.com/jquery-3.4.1.slim.min.js",
                integrity: "sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n",
                crossorigin: "anonymous"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("script", {
                src: "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js",
                integrity: "sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo",
                crossorigin: "anonymous"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("script", {
                src: "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js",
                integrity: "sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6",
                crossorigin: "anonymous"
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./pages/_app.js



function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(Layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_exports__ = (__webpack_exec__(324));
module.exports = __webpack_exports__;

})();