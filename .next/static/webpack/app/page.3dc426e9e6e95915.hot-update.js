"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @phosphor-icons/react */ \"(app-pages-browser)/./node_modules/@phosphor-icons/react/dist/csr/Keyboard.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const actualType = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [testText, setTestText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [wordCount, setWordCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(15);\n    const typing_test_words = \"apple banana cat dog egg fish goat hat ice jeep kite lemon moon nest owl pear quack rain sun tree umbrella violin water xylophone yak zebra add bake call dive eat find go help itch jump kick look meet nap open play quiet run sing talk use visit walk xerox yawn zip admire blink clap dance enjoy float grow hop imagine joke knit laugh mimic nap operate paint quack read smile tease unwrap visit whistle x-ray yodel zero applaud balance carve dash explore fly glide hide invent jog knead leap march nibble observe paddle quench race sew tiptoe uncover vault wiggle yank zipline abound balance camp dart excite flicker gallop hurry ignite juggle kayak linger meander nestle occupy prance question revive sneak tickle unravel vacate wander yell zestful\";\n    const textGen = (count)=>{\n        const random = Array.from({\n            length: count\n        }, ()=>typing_test_words.split(\" \")[Math.floor(Math.random() * 100) + 1]);\n        return random.join(\" \");\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"click\", ()=>{\n            var _inputRef_current;\n            (_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.focus();\n        });\n        window.addEventListener(\"keydown\", (e)=>{\n            console.log(wordCount);\n            if (e.key === \"Escape\") {\n                setTestText(textGen(wordCount));\n            }\n        });\n        setTestText(textGen(wordCount));\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setTestText(textGen(wordCount));\n    }, [\n        wordCount\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative h-screen w-screen overflow-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center items-center h-screen w-screen\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col w-2/3 h-1/2 z-10\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex mb-1 w-full relative items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-white text-xl roboto\",\n                                    children: \"TypeElegance\"\n                                }, void 0, false, {\n                                    fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"absolute right-0 flex items-center gap-1\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_phosphor_icons_react__WEBPACK_IMPORTED_MODULE_2__.Keyboard, {\n                                            size: 32,\n                                            color: \"#fff\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                            lineNumber: 47,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"roboto text-white\",\n                                            children: \"130\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                            lineNumber: 48,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"background rounded-lg w-full h-full p-16 relative flex justify-center roboto\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"absolute opacity-75 w-11/12 text-2xl\",\n                                    children: testText.split(\" \").map((el, key)=>{\n                                        if (input.split(\" \")[key] === el) {\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.span, {\n                                                initial: {\n                                                    x: -100\n                                                },\n                                                animate: {\n                                                    x: 0\n                                                },\n                                                transition: {\n                                                    duration: 4\n                                                },\n                                                className: \"text-white\",\n                                                children: [\n                                                    el,\n                                                    \" \"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                                lineNumber: 54,\n                                                columnNumber: 25\n                                            }, this);\n                                        } else if (input.split(\" \")[key] === undefined || input.split(\" \")[key] === \"\" || testText.includes(input.split(\" \")[key]) && input.split(\" \").length == key + 1) {\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"text-background\",\n                                                children: [\n                                                    el,\n                                                    \" \"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                                lineNumber: 60,\n                                                columnNumber: 24\n                                            }, this);\n                                        } else {\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"text-wrong\",\n                                                children: [\n                                                    el,\n                                                    \" \"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                                lineNumber: 62,\n                                                columnNumber: 24\n                                            }, this);\n                                        }\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"absolute z-10 w-11/12 text-2xl\",\n                                    ref: actualType,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"opacity-0\",\n                                            children: testText.split(\" \").slice(0, input.split(\" \").length - 1).join(\" \")\n                                        }, void 0, false, {\n                                            fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                            lineNumber: 65,\n                                            columnNumber: 76\n                                        }, this),\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-white\",\n                                            children: input.split(\" \").findLast(()=>true)\n                                        }, void 0, false, {\n                                            fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                            lineNumber: 65,\n                                            columnNumber: 181\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex relative mt-4 items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex background p-2 gap-4 rounded-lg\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: ()=>setWordCount(15),\n                                            className: \"p-1 background text-white roboto rounded-md px-6 \".concat(wordCount == 15 ? \"shadow-lg\" : \"\", \" transition-all\"),\n                                            children: \"15\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                            lineNumber: 69,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: ()=>setWordCount(30),\n                                            className: \"p-1 background text-white roboto rounded-md px-6 \".concat(wordCount == 30 ? \"shadow-lg\" : \"\", \" transition-all\"),\n                                            children: \"30\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                            lineNumber: 70,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: ()=>setWordCount(60),\n                                            className: \"p-1 background text-white roboto rounded-md px-6 \".concat(wordCount == 60 ? \"shadow-lg\" : \"\", \" transition-all\"),\n                                            children: \"60\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                            lineNumber: 71,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>setTestText(textGen(wordCount)),\n                                    className: \"background absolute right-0 rounded-lg text-white roboto p-3 px-12\",\n                                    children: \"Restart\"\n                                }, void 0, false, {\n                                    fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            ref: inputRef,\n                            onChange: (e)=>setInput(e.target.value),\n                            className: \"opacity-0 absolute\"\n                        }, void 0, false, {\n                            fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute -top-32 right-12\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"/background.svg\",\n                    draggable: \"false\"\n                }, void 0, false, {\n                    fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                    lineNumber: 80,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"GWsY+PWBQBAaTxyRarwBvFxNY2A=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0E3RXdCdEQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UudHN4Pzc2MDMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbW90aW9uIGFzIG0gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuaW1wb3J0IHsgS2V5Ym9hcmQgfSBmcm9tICdAcGhvc3Bob3ItaWNvbnMvcmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpXG4gIGNvbnN0IGFjdHVhbFR5cGUgPSB1c2VSZWY8SFRNTFBhcmFncmFwaEVsZW1lbnQ+KG51bGwpXG4gIGNvbnN0IFt0ZXN0VGV4dCwgc2V0VGVzdFRleHRdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFt3b3JkQ291bnQsIHNldFdvcmRDb3VudF0gPSB1c2VTdGF0ZSgxNSlcblxuICBjb25zdCB0eXBpbmdfdGVzdF93b3JkcyA9IFwiYXBwbGUgYmFuYW5hIGNhdCBkb2cgZWdnIGZpc2ggZ29hdCBoYXQgaWNlIGplZXAga2l0ZSBsZW1vbiBtb29uIG5lc3Qgb3dsIHBlYXIgcXVhY2sgcmFpbiBzdW4gdHJlZSB1bWJyZWxsYSB2aW9saW4gd2F0ZXIgeHlsb3Bob25lIHlhayB6ZWJyYSBhZGQgYmFrZSBjYWxsIGRpdmUgZWF0IGZpbmQgZ28gaGVscCBpdGNoIGp1bXAga2ljayBsb29rIG1lZXQgbmFwIG9wZW4gcGxheSBxdWlldCBydW4gc2luZyB0YWxrIHVzZSB2aXNpdCB3YWxrIHhlcm94IHlhd24gemlwIGFkbWlyZSBibGluayBjbGFwIGRhbmNlIGVuam95IGZsb2F0IGdyb3cgaG9wIGltYWdpbmUgam9rZSBrbml0IGxhdWdoIG1pbWljIG5hcCBvcGVyYXRlIHBhaW50IHF1YWNrIHJlYWQgc21pbGUgdGVhc2UgdW53cmFwIHZpc2l0IHdoaXN0bGUgeC1yYXkgeW9kZWwgemVybyBhcHBsYXVkIGJhbGFuY2UgY2FydmUgZGFzaCBleHBsb3JlIGZseSBnbGlkZSBoaWRlIGludmVudCBqb2cga25lYWQgbGVhcCBtYXJjaCBuaWJibGUgb2JzZXJ2ZSBwYWRkbGUgcXVlbmNoIHJhY2Ugc2V3IHRpcHRvZSB1bmNvdmVyIHZhdWx0IHdpZ2dsZSB5YW5rIHppcGxpbmUgYWJvdW5kIGJhbGFuY2UgY2FtcCBkYXJ0IGV4Y2l0ZSBmbGlja2VyIGdhbGxvcCBodXJyeSBpZ25pdGUganVnZ2xlIGtheWFrIGxpbmdlciBtZWFuZGVyIG5lc3RsZSBvY2N1cHkgcHJhbmNlIHF1ZXN0aW9uIHJldml2ZSBzbmVhayB0aWNrbGUgdW5yYXZlbCB2YWNhdGUgd2FuZGVyIHllbGwgemVzdGZ1bFwiXG4gIGNvbnN0IHRleHRHZW4gPSAoY291bnQ6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHJhbmRvbSA9IEFycmF5LmZyb20oe2xlbmd0aDogY291bnR9LCAoKSA9PiB0eXBpbmdfdGVzdF93b3Jkcy5zcGxpdChcIiBcIilbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKSArIDFdKTtcbiAgICByZXR1cm4gcmFuZG9tLmpvaW4oXCIgXCIpXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaW5wdXRSZWYuY3VycmVudD8uZm9jdXMoKVxuICAgIH0pXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyh3b3JkQ291bnQpXG4gICAgICBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgICAgc2V0VGVzdFRleHQodGV4dEdlbih3b3JkQ291bnQpKVxuICAgICAgfVxuICAgIH0pXG4gICAgXG4gICAgc2V0VGVzdFRleHQodGV4dEdlbih3b3JkQ291bnQpKVxuICB9LCBbXSlcblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VGVzdFRleHQodGV4dEdlbih3b3JkQ291bnQpKVxuICB9LCBbd29yZENvdW50XSlcblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3JlbGF0aXZlIGgtc2NyZWVuIHctc2NyZWVuIG92ZXJmbG93LWhpZGRlbic+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC1zY3JlZW4gdy1zY3JlZW4nPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCB3LTIvMyBoLTEvMiB6LTEwJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBtYi0xIHctZnVsbCByZWxhdGl2ZSBpdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC13aGl0ZSB0ZXh0LXhsIHJvYm90byc+VHlwZUVsZWdhbmNlPC9oMT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhYnNvbHV0ZSByaWdodC0wIGZsZXggaXRlbXMtY2VudGVyIGdhcC0xJz5cbiAgICAgICAgICAgICAgPEtleWJvYXJkIHNpemU9ezMyfSBjb2xvcj0nI2ZmZicgLz5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdyb2JvdG8gdGV4dC13aGl0ZSc+MTMwPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JhY2tncm91bmQgcm91bmRlZC1sZyB3LWZ1bGwgaC1mdWxsIHAtMTYgcmVsYXRpdmUgZmxleCBqdXN0aWZ5LWNlbnRlciByb2JvdG8nPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdhYnNvbHV0ZSBvcGFjaXR5LTc1IHctMTEvMTIgdGV4dC0yeGwnPnt0ZXN0VGV4dC5zcGxpdChcIiBcIikubWFwKChlbCwga2V5KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChpbnB1dC5zcGxpdChcIiBcIilba2V5XSA9PT0gZWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKDxtLnNwYW5cbiAgICAgICAgICAgICAgICAgIGluaXRpYWw9e3t4OiAtMTAwfX1cbiAgICAgICAgICAgICAgICAgIGFuaW1hdGU9e3t4OiAwfX1cbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3tkdXJhdGlvbjogNH19XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3RleHQtd2hpdGUnPntlbH0gPC9tLnNwYW4+KVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlucHV0LnNwbGl0KFwiIFwiKVtrZXldID09PSB1bmRlZmluZWQgfHwgaW5wdXQuc3BsaXQoXCIgXCIpW2tleV0gPT09IFwiXCIgfHwgKHRlc3RUZXh0LmluY2x1ZGVzKGlucHV0LnNwbGl0KFwiIFwiKVtrZXldKSAmJiBpbnB1dC5zcGxpdChcIiBcIikubGVuZ3RoID09IGtleSArIDEpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1iYWNrZ3JvdW5kJz57ZWx9IDwvc3Bhbj4gXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC13cm9uZyc+e2VsfSA8L3NwYW4+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pfTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nYWJzb2x1dGUgei0xMCB3LTExLzEyIHRleHQtMnhsJyByZWY9e2FjdHVhbFR5cGV9PjxzcGFuIGNsYXNzTmFtZT0nb3BhY2l0eS0wJz57dGVzdFRleHQuc3BsaXQoXCIgXCIpLnNsaWNlKDAsIGlucHV0LnNwbGl0KFwiIFwiKS5sZW5ndGggLSAxKS5qb2luKFwiIFwiKX08L3NwYW4+IDxzcGFuIGNsYXNzTmFtZT0ndGV4dC13aGl0ZSc+e2lucHV0LnNwbGl0KFwiIFwiKS5maW5kTGFzdCgoKSA9PiB0cnVlKX08L3NwYW4+PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IHJlbGF0aXZlIG10LTQgaXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGJhY2tncm91bmQgcC0yIGdhcC00IHJvdW5kZWQtbGcnPlxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFdvcmRDb3VudCgxNSl9IGNsYXNzTmFtZT17YHAtMSBiYWNrZ3JvdW5kIHRleHQtd2hpdGUgcm9ib3RvIHJvdW5kZWQtbWQgcHgtNiAke3dvcmRDb3VudCA9PSAxNSA/IFwic2hhZG93LWxnXCIgOiBcIlwifSB0cmFuc2l0aW9uLWFsbGB9PjE1PC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0V29yZENvdW50KDMwKX0gY2xhc3NOYW1lPXtgcC0xIGJhY2tncm91bmQgdGV4dC13aGl0ZSByb2JvdG8gcm91bmRlZC1tZCBweC02ICR7d29yZENvdW50ID09IDMwID8gXCJzaGFkb3ctbGdcIiA6IFwiXCJ9IHRyYW5zaXRpb24tYWxsYH0+MzA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRXb3JkQ291bnQoNjApfSBjbGFzc05hbWU9e2BwLTEgYmFja2dyb3VuZCB0ZXh0LXdoaXRlIHJvYm90byByb3VuZGVkLW1kIHB4LTYgJHt3b3JkQ291bnQgPT0gNjAgPyBcInNoYWRvdy1sZ1wiIDogXCJcIn0gdHJhbnNpdGlvbi1hbGxgfT42MDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFRlc3RUZXh0KHRleHRHZW4od29yZENvdW50KSl9IGNsYXNzTmFtZT0nYmFja2dyb3VuZCBhYnNvbHV0ZSByaWdodC0wIHJvdW5kZWQtbGcgdGV4dC13aGl0ZSByb2JvdG8gcC0zIHB4LTEyJz5SZXN0YXJ0PC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8aW5wdXQgcmVmPXtpbnB1dFJlZn0gb25DaGFuZ2U9eyhlKSA9PiBzZXRJbnB1dChlLnRhcmdldC52YWx1ZSl9IGNsYXNzTmFtZT0nb3BhY2l0eS0wIGFic29sdXRlJy8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYWJzb2x1dGUgLXRvcC0zMiByaWdodC0xMic+XG4gICAgICAgIDxpbWcgc3JjPScvYmFja2dyb3VuZC5zdmcnIGRyYWdnYWJsZT0nZmFsc2UnIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwibW90aW9uIiwibSIsIktleWJvYXJkIiwiSG9tZSIsImlucHV0Iiwic2V0SW5wdXQiLCJpbnB1dFJlZiIsImFjdHVhbFR5cGUiLCJ0ZXN0VGV4dCIsInNldFRlc3RUZXh0Iiwid29yZENvdW50Iiwic2V0V29yZENvdW50IiwidHlwaW5nX3Rlc3Rfd29yZHMiLCJ0ZXh0R2VuIiwiY291bnQiLCJyYW5kb20iLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJzcGxpdCIsIk1hdGgiLCJmbG9vciIsImpvaW4iLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiY3VycmVudCIsImZvY3VzIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJrZXkiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInNpemUiLCJjb2xvciIsInAiLCJtYXAiLCJlbCIsInNwYW4iLCJpbml0aWFsIiwieCIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJ1bmRlZmluZWQiLCJpbmNsdWRlcyIsInJlZiIsInNsaWNlIiwiZmluZExhc3QiLCJidXR0b24iLCJvbkNsaWNrIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsImltZyIsInNyYyIsImRyYWdnYWJsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});