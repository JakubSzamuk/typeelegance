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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @phosphor-icons/react */ \"(app-pages-browser)/./node_modules/@phosphor-icons/react/dist/csr/Keyboard.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const actualType = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [testText, setTestText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [wordCount, setWordCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(15);\n    console.log(wordCount);\n    const typing_test_words = \"apple banana cat dog egg fish goat hat ice jeep kite lemon moon nest owl pear quack rain sun tree umbrella violin water xylophone yak zebra add bake call dive eat find go help itch jump kick look meet nap open play quiet run sing talk use visit walk xerox yawn zip admire blink clap dance enjoy float grow hop imagine joke knit laugh mimic nap operate paint quack read smile tease unwrap visit whistle x-ray yodel zero applaud balance carve dash explore fly glide hide invent jog knead leap march nibble observe paddle quench race sew tiptoe uncover vault wiggle yank zipline abound balance camp dart excite flicker gallop hurry ignite juggle kayak linger meander nestle occupy prance question revive sneak tickle unravel vacate wander yell zestful\";\n    const textGen = (count)=>{\n        const random = Array.from({\n            length: count\n        }, ()=>typing_test_words.split(\" \")[Math.floor(Math.random() * 100) + 1]);\n        setInput(\"\");\n        return random.join(\" \");\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"click\", ()=>{\n            var _inputRef_current;\n            (_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.focus();\n        });\n        window.addEventListener(\"keydown\", (e)=>{\n            if (e.key === \"Escape\") {\n                setTestText(textGen(wordCount));\n            }\n        });\n        setTestText(textGen(wordCount));\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setTestText(textGen(wordCount));\n    }, [\n        wordCount\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative h-screen w-screen overflow-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center items-center h-screen w-screen\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col w-2/3 h-1/2 z-10\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex mb-1 w-full relative items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-white text-xl roboto\",\n                                    children: \"TypeElegance\"\n                                }, void 0, false, {\n                                    fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"absolute right-0 flex items-center gap-1\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_phosphor_icons_react__WEBPACK_IMPORTED_MODULE_2__.Keyboard, {\n                                            size: 32,\n                                            color: \"#fff\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                            lineNumber: 49,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"roboto text-white\",\n                                            children: \"130\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                            lineNumber: 50,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"background rounded-lg w-full h-full p-16 relative flex justify-center roboto\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"absolute opacity-75 w-11/12 text-2xl\",\n                                    children: testText.split(\" \").map((el, key)=>{\n                                        if (input.split(\" \")[key] === el) {\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.span, {\n                                                initial: {\n                                                    x: -100\n                                                },\n                                                animate: {\n                                                    x: 0\n                                                },\n                                                transition: {\n                                                    duration: 4\n                                                },\n                                                className: \"text-white\",\n                                                children: [\n                                                    el,\n                                                    \" \"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                                lineNumber: 56,\n                                                columnNumber: 25\n                                            }, this);\n                                        } else if (input.split(\" \")[key] === undefined || input.split(\" \")[key] === \"\" || testText.includes(input.split(\" \")[key]) && input.split(\" \").length == key + 1) {\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"text-background\",\n                                                children: [\n                                                    el,\n                                                    \" \"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                                lineNumber: 62,\n                                                columnNumber: 24\n                                            }, this);\n                                        } else {\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"text-wrong\",\n                                                children: [\n                                                    el,\n                                                    \" \"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                                lineNumber: 64,\n                                                columnNumber: 24\n                                            }, this);\n                                        }\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"absolute z-10 w-11/12 text-2xl\",\n                                    ref: actualType,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"opacity-0\",\n                                            children: testText.split(\" \").slice(0, input.split(\" \").length - 1).join(\" \")\n                                        }, void 0, false, {\n                                            fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                            lineNumber: 67,\n                                            columnNumber: 76\n                                        }, this),\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-white\",\n                                            children: input.split(\" \").findLast(()=>true)\n                                        }, void 0, false, {\n                                            fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                            lineNumber: 67,\n                                            columnNumber: 181\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex relative mt-4 items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex background p-2 gap-4 rounded-lg\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: ()=>setWordCount(15),\n                                            className: \"p-1 background text-white roboto rounded-md px-6 \".concat(wordCount == 15 ? \"shadow-lg\" : \"\", \" transition-all\"),\n                                            children: \"15\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                            lineNumber: 71,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: ()=>setWordCount(30),\n                                            className: \"p-1 background text-white roboto rounded-md px-6 \".concat(wordCount == 30 ? \"shadow-lg\" : \"\", \" transition-all\"),\n                                            children: \"30\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                            lineNumber: 72,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: ()=>setWordCount(60),\n                                            className: \"p-1 background text-white roboto rounded-md px-6 \".concat(wordCount == 60 ? \"shadow-lg\" : \"\", \" transition-all\"),\n                                            children: \"60\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                            lineNumber: 73,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>setTestText(textGen(wordCount)),\n                                    className: \"background absolute right-0 rounded-lg text-white roboto p-3 px-12\",\n                                    children: \"Restart\"\n                                }, void 0, false, {\n                                    fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            ref: inputRef,\n                            onChange: (e)=>setInput(e.target.value),\n                            className: \"opacity-0 absolute\"\n                        }, void 0, false, {\n                            fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute -top-32 right-12\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"/background.svg\",\n                    draggable: \"false\"\n                }, void 0, false, {\n                    fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                    lineNumber: 82,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"GWsY+PWBQBAaTxyRarwBvFxNY2A=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7QUFJN0M7R0EvRXdCdEQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UudHN4Pzc2MDMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbW90aW9uIGFzIG0gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuaW1wb3J0IHsgS2V5Ym9hcmQgfSBmcm9tICdAcGhvc3Bob3ItaWNvbnMvcmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpXG4gIGNvbnN0IGFjdHVhbFR5cGUgPSB1c2VSZWY8SFRNTFBhcmFncmFwaEVsZW1lbnQ+KG51bGwpXG4gIGNvbnN0IFt0ZXN0VGV4dCwgc2V0VGVzdFRleHRdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFt3b3JkQ291bnQsIHNldFdvcmRDb3VudF0gPSB1c2VTdGF0ZSgxNSlcblxuXG4gIGNvbnNvbGUubG9nKHdvcmRDb3VudClcbiAgY29uc3QgdHlwaW5nX3Rlc3Rfd29yZHMgPSBcImFwcGxlIGJhbmFuYSBjYXQgZG9nIGVnZyBmaXNoIGdvYXQgaGF0IGljZSBqZWVwIGtpdGUgbGVtb24gbW9vbiBuZXN0IG93bCBwZWFyIHF1YWNrIHJhaW4gc3VuIHRyZWUgdW1icmVsbGEgdmlvbGluIHdhdGVyIHh5bG9waG9uZSB5YWsgemVicmEgYWRkIGJha2UgY2FsbCBkaXZlIGVhdCBmaW5kIGdvIGhlbHAgaXRjaCBqdW1wIGtpY2sgbG9vayBtZWV0IG5hcCBvcGVuIHBsYXkgcXVpZXQgcnVuIHNpbmcgdGFsayB1c2UgdmlzaXQgd2FsayB4ZXJveCB5YXduIHppcCBhZG1pcmUgYmxpbmsgY2xhcCBkYW5jZSBlbmpveSBmbG9hdCBncm93IGhvcCBpbWFnaW5lIGpva2Uga25pdCBsYXVnaCBtaW1pYyBuYXAgb3BlcmF0ZSBwYWludCBxdWFjayByZWFkIHNtaWxlIHRlYXNlIHVud3JhcCB2aXNpdCB3aGlzdGxlIHgtcmF5IHlvZGVsIHplcm8gYXBwbGF1ZCBiYWxhbmNlIGNhcnZlIGRhc2ggZXhwbG9yZSBmbHkgZ2xpZGUgaGlkZSBpbnZlbnQgam9nIGtuZWFkIGxlYXAgbWFyY2ggbmliYmxlIG9ic2VydmUgcGFkZGxlIHF1ZW5jaCByYWNlIHNldyB0aXB0b2UgdW5jb3ZlciB2YXVsdCB3aWdnbGUgeWFuayB6aXBsaW5lIGFib3VuZCBiYWxhbmNlIGNhbXAgZGFydCBleGNpdGUgZmxpY2tlciBnYWxsb3AgaHVycnkgaWduaXRlIGp1Z2dsZSBrYXlhayBsaW5nZXIgbWVhbmRlciBuZXN0bGUgb2NjdXB5IHByYW5jZSBxdWVzdGlvbiByZXZpdmUgc25lYWsgdGlja2xlIHVucmF2ZWwgdmFjYXRlIHdhbmRlciB5ZWxsIHplc3RmdWxcIlxuICBjb25zdCB0ZXh0R2VuID0gKGNvdW50OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCByYW5kb20gPSBBcnJheS5mcm9tKHtsZW5ndGg6IGNvdW50fSwgKCkgPT4gdHlwaW5nX3Rlc3Rfd29yZHMuc3BsaXQoXCIgXCIpW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCkgKyAxXSk7XG4gICAgc2V0SW5wdXQoJycpXG4gICAgcmV0dXJuIHJhbmRvbS5qb2luKFwiIFwiKVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGlucHV0UmVmLmN1cnJlbnQ/LmZvY3VzKClcbiAgICB9KVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgICAgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICAgIHNldFRlc3RUZXh0KHRleHRHZW4od29yZENvdW50KSlcbiAgICAgIH1cbiAgICB9KVxuICAgIFxuICAgIHNldFRlc3RUZXh0KHRleHRHZW4od29yZENvdW50KSlcbiAgfSwgW10pXG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFRlc3RUZXh0KHRleHRHZW4od29yZENvdW50KSlcbiAgfSwgW3dvcmRDb3VudF0pXG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdyZWxhdGl2ZSBoLXNjcmVlbiB3LXNjcmVlbiBvdmVyZmxvdy1oaWRkZW4nPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGgtc2NyZWVuIHctc2NyZWVuJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgdy0yLzMgaC0xLzIgei0xMCc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggbWItMSB3LWZ1bGwgcmVsYXRpdmUgaXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtd2hpdGUgdGV4dC14bCByb2JvdG8nPlR5cGVFbGVnYW5jZTwvaDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWJzb2x1dGUgcmlnaHQtMCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSc+XG4gICAgICAgICAgICAgIDxLZXlib2FyZCBzaXplPXszMn0gY29sb3I9JyNmZmYnIC8+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ncm9ib3RvIHRleHQtd2hpdGUnPjEzMDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiYWNrZ3JvdW5kIHJvdW5kZWQtbGcgdy1mdWxsIGgtZnVsbCBwLTE2IHJlbGF0aXZlIGZsZXgganVzdGlmeS1jZW50ZXIgcm9ib3RvJz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nYWJzb2x1dGUgb3BhY2l0eS03NSB3LTExLzEyIHRleHQtMnhsJz57dGVzdFRleHQuc3BsaXQoXCIgXCIpLm1hcCgoZWwsIGtleSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoaW5wdXQuc3BsaXQoXCIgXCIpW2tleV0gPT09IGVsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICg8bS5zcGFuXG4gICAgICAgICAgICAgICAgICBpbml0aWFsPXt7eDogLTEwMH19XG4gICAgICAgICAgICAgICAgICBhbmltYXRlPXt7eDogMH19XG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7ZHVyYXRpb246IDR9fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlJz57ZWx9IDwvbS5zcGFuPilcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChpbnB1dC5zcGxpdChcIiBcIilba2V5XSA9PT0gdW5kZWZpbmVkIHx8IGlucHV0LnNwbGl0KFwiIFwiKVtrZXldID09PSBcIlwiIHx8ICh0ZXN0VGV4dC5pbmNsdWRlcyhpbnB1dC5zcGxpdChcIiBcIilba2V5XSkgJiYgaW5wdXQuc3BsaXQoXCIgXCIpLmxlbmd0aCA9PSBrZXkgKyAxKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9J3RleHQtYmFja2dyb3VuZCc+e2VsfSA8L3NwYW4+IFxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9J3RleHQtd3JvbmcnPntlbH0gPC9zcGFuPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KX08L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J2Fic29sdXRlIHotMTAgdy0xMS8xMiB0ZXh0LTJ4bCcgcmVmPXthY3R1YWxUeXBlfT48c3BhbiBjbGFzc05hbWU9J29wYWNpdHktMCc+e3Rlc3RUZXh0LnNwbGl0KFwiIFwiKS5zbGljZSgwLCBpbnB1dC5zcGxpdChcIiBcIikubGVuZ3RoIC0gMSkuam9pbihcIiBcIil9PC9zcGFuPiA8c3BhbiBjbGFzc05hbWU9J3RleHQtd2hpdGUnPntpbnB1dC5zcGxpdChcIiBcIikuZmluZExhc3QoKCkgPT4gdHJ1ZSl9PC9zcGFuPjwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCByZWxhdGl2ZSBtdC00IGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBiYWNrZ3JvdW5kIHAtMiBnYXAtNCByb3VuZGVkLWxnJz5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRXb3JkQ291bnQoMTUpfSBjbGFzc05hbWU9e2BwLTEgYmFja2dyb3VuZCB0ZXh0LXdoaXRlIHJvYm90byByb3VuZGVkLW1kIHB4LTYgJHt3b3JkQ291bnQgPT0gMTUgPyBcInNoYWRvdy1sZ1wiIDogXCJcIn0gdHJhbnNpdGlvbi1hbGxgfT4xNTwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFdvcmRDb3VudCgzMCl9IGNsYXNzTmFtZT17YHAtMSBiYWNrZ3JvdW5kIHRleHQtd2hpdGUgcm9ib3RvIHJvdW5kZWQtbWQgcHgtNiAke3dvcmRDb3VudCA9PSAzMCA/IFwic2hhZG93LWxnXCIgOiBcIlwifSB0cmFuc2l0aW9uLWFsbGB9PjMwPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0V29yZENvdW50KDYwKX0gY2xhc3NOYW1lPXtgcC0xIGJhY2tncm91bmQgdGV4dC13aGl0ZSByb2JvdG8gcm91bmRlZC1tZCBweC02ICR7d29yZENvdW50ID09IDYwID8gXCJzaGFkb3ctbGdcIiA6IFwiXCJ9IHRyYW5zaXRpb24tYWxsYH0+NjA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRUZXN0VGV4dCh0ZXh0R2VuKHdvcmRDb3VudCkpfSBjbGFzc05hbWU9J2JhY2tncm91bmQgYWJzb2x1dGUgcmlnaHQtMCByb3VuZGVkLWxnIHRleHQtd2hpdGUgcm9ib3RvIHAtMyBweC0xMic+UmVzdGFydDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGlucHV0IHJlZj17aW5wdXRSZWZ9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0SW5wdXQoZS50YXJnZXQudmFsdWUpfSBjbGFzc05hbWU9J29wYWNpdHktMCBhYnNvbHV0ZScvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Fic29sdXRlIC10b3AtMzIgcmlnaHQtMTInPlxuICAgICAgICA8aW1nIHNyYz0nL2JhY2tncm91bmQuc3ZnJyBkcmFnZ2FibGU9J2ZhbHNlJyAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIm1vdGlvbiIsIm0iLCJLZXlib2FyZCIsIkhvbWUiLCJpbnB1dCIsInNldElucHV0IiwiaW5wdXRSZWYiLCJhY3R1YWxUeXBlIiwidGVzdFRleHQiLCJzZXRUZXN0VGV4dCIsIndvcmRDb3VudCIsInNldFdvcmRDb3VudCIsImNvbnNvbGUiLCJsb2ciLCJ0eXBpbmdfdGVzdF93b3JkcyIsInRleHRHZW4iLCJjb3VudCIsInJhbmRvbSIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsInNwbGl0IiwiTWF0aCIsImZsb29yIiwiam9pbiIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjdXJyZW50IiwiZm9jdXMiLCJlIiwia2V5IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJzaXplIiwiY29sb3IiLCJwIiwibWFwIiwiZWwiLCJzcGFuIiwiaW5pdGlhbCIsIngiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJyZWYiLCJzbGljZSIsImZpbmRMYXN0IiwiYnV0dG9uIiwib25DbGljayIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJpbWciLCJzcmMiLCJkcmFnZ2FibGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});