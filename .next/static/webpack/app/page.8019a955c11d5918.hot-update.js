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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @phosphor-icons/react */ \"(app-pages-browser)/./node_modules/@phosphor-icons/react/dist/csr/Keyboard.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const actualType = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [testText, setTestText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"click\", ()=>{\n            var _inputRef_current;\n            (_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.focus();\n        });\n        const typing_test_words = \"apple banana cat dog egg fish goat hat ice jeep kite lemon moon nest owl pear quack rain sun tree umbrella violin water xylophone yak zebra add bake call dive eat find go help itch jump kick look meet nap open play quiet run sing talk use visit walk xerox yawn zip admire blink clap dance enjoy float grow hop imagine joke knit laugh mimic nap operate paint quack read smile tease unwrap visit whistle x-ray yodel zero applaud balance carve dash explore fly glide hide invent jog knead leap march nibble observe paddle quench race sew tiptoe uncover vault wiggle yank zipline abound balance camp dart excite flicker gallop hurry ignite juggle kayak linger meander nestle occupy prance question revive sneak tickle unravel vacate wander yell zestful\";\n        const textGen = ()=>{\n            const random = Array.from({\n                length: 40\n            }, ()=>typing_test_words.split(\" \")[Math.floor(Math.random() * 100) + 1]);\n            return random.join(\" \");\n        };\n        setTestText(textGen());\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative h-screen w-screen overflow-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center items-center h-screen w-screen\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col w-2/3 h-1/2 z-10\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex mb-1 w-full relative items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-white text-xl roboto\",\n                                    children: \"TypeElegance\"\n                                }, void 0, false, {\n                                    fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"absolute right-0 flex items-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_phosphor_icons_react__WEBPACK_IMPORTED_MODULE_2__.Keyboard, {\n                                            size: 32,\n                                            color: \"rgba(29, 36, 44, 0.50)\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                            lineNumber: 35,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"roboto textBg\",\n                                            children: \"130\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                            lineNumber: 36,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"background rounded-lg w-full h-full p-16 relative flex justify-center roboto\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"absolute opacity-75 w-5/6 text-2xl\",\n                                    children: testText.split(\" \").map((el, key)=>{\n                                        if (input.split(\" \")[key] === el) {\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.span, {\n                                                initial: {\n                                                    x: -100\n                                                },\n                                                animate: {\n                                                    x: 0\n                                                },\n                                                transition: {\n                                                    duration: 4\n                                                },\n                                                className: \"text-white\",\n                                                children: [\n                                                    el,\n                                                    \" \"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                                lineNumber: 42,\n                                                columnNumber: 25\n                                            }, this);\n                                        } else if (input.split(\" \")[key] === undefined || input.split(\" \")[key] === \"\" || testText.includes(input.split(\" \")[key]) && input.split(\" \").length == key + 1) {\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"text-background\",\n                                                children: [\n                                                    el,\n                                                    \" \"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                                lineNumber: 48,\n                                                columnNumber: 24\n                                            }, this);\n                                        } else {\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"text-wrong\",\n                                                children: [\n                                                    el,\n                                                    \" \"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                                lineNumber: 50,\n                                                columnNumber: 24\n                                            }, this);\n                                        }\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"absolute z-10 w-5/6 text-2xl\",\n                                    ref: actualType,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"opacity-0\",\n                                            children: testText.split(\" \").slice(0, input.split(\" \").length - 1).join(\" \")\n                                        }, void 0, false, {\n                                            fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                            lineNumber: 53,\n                                            columnNumber: 74\n                                        }, this),\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-white\",\n                                            children: input.split(\" \").findLast(()=>true)\n                                        }, void 0, false, {\n                                            fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                            lineNumber: 53,\n                                            columnNumber: 179\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex relative\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex background\"\n                            }, void 0, false, {\n                                fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            ref: inputRef,\n                            onChange: (e)=>setInput(e.target.value),\n                            className: \"opacity-0 absolute\"\n                        }, void 0, false, {\n                            fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute -top-32 right-12\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"/background.svg\",\n                    draggable: \"false\"\n                }, void 0, false, {\n                    fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"1f8t2krokaeZD8U4nRXtW9ldy4w=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBRXRPLDhEQUFDbkI7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUNEO2dDQUFJQyxXQUFVOzs7Ozs7Ozs7OztzQ0FLakIsOERBQUNyQjs0QkFBTXFDLEtBQUtuQzs0QkFBVXNDLFVBQVUsQ0FBQ0MsSUFBTXhDLFNBQVN3QyxFQUFFQyxNQUFNLENBQUNDLEtBQUs7NEJBQUd0QixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFHL0UsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDdUI7b0JBQUlDLEtBQUk7b0JBQWtCQyxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OztBQUk3QztHQTlEd0IvQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS50c3g/NzYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtb3Rpb24gYXMgbSB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5pbXBvcnQgeyBLZXlib2FyZCB9IGZyb20gJ0BwaG9zcGhvci1pY29ucy9yZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgaW5wdXRSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbClcbiAgY29uc3QgYWN0dWFsVHlwZSA9IHVzZVJlZjxIVE1MUGFyYWdyYXBoRWxlbWVudD4obnVsbClcbiAgY29uc3QgW3Rlc3RUZXh0LCBzZXRUZXN0VGV4dF0gPSB1c2VTdGF0ZSgnJylcblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBpbnB1dFJlZi5jdXJyZW50Py5mb2N1cygpXG4gICAgfSlcbiAgICBjb25zdCB0eXBpbmdfdGVzdF93b3JkcyA9IFwiYXBwbGUgYmFuYW5hIGNhdCBkb2cgZWdnIGZpc2ggZ29hdCBoYXQgaWNlIGplZXAga2l0ZSBsZW1vbiBtb29uIG5lc3Qgb3dsIHBlYXIgcXVhY2sgcmFpbiBzdW4gdHJlZSB1bWJyZWxsYSB2aW9saW4gd2F0ZXIgeHlsb3Bob25lIHlhayB6ZWJyYSBhZGQgYmFrZSBjYWxsIGRpdmUgZWF0IGZpbmQgZ28gaGVscCBpdGNoIGp1bXAga2ljayBsb29rIG1lZXQgbmFwIG9wZW4gcGxheSBxdWlldCBydW4gc2luZyB0YWxrIHVzZSB2aXNpdCB3YWxrIHhlcm94IHlhd24gemlwIGFkbWlyZSBibGluayBjbGFwIGRhbmNlIGVuam95IGZsb2F0IGdyb3cgaG9wIGltYWdpbmUgam9rZSBrbml0IGxhdWdoIG1pbWljIG5hcCBvcGVyYXRlIHBhaW50IHF1YWNrIHJlYWQgc21pbGUgdGVhc2UgdW53cmFwIHZpc2l0IHdoaXN0bGUgeC1yYXkgeW9kZWwgemVybyBhcHBsYXVkIGJhbGFuY2UgY2FydmUgZGFzaCBleHBsb3JlIGZseSBnbGlkZSBoaWRlIGludmVudCBqb2cga25lYWQgbGVhcCBtYXJjaCBuaWJibGUgb2JzZXJ2ZSBwYWRkbGUgcXVlbmNoIHJhY2Ugc2V3IHRpcHRvZSB1bmNvdmVyIHZhdWx0IHdpZ2dsZSB5YW5rIHppcGxpbmUgYWJvdW5kIGJhbGFuY2UgY2FtcCBkYXJ0IGV4Y2l0ZSBmbGlja2VyIGdhbGxvcCBodXJyeSBpZ25pdGUganVnZ2xlIGtheWFrIGxpbmdlciBtZWFuZGVyIG5lc3RsZSBvY2N1cHkgcHJhbmNlIHF1ZXN0aW9uIHJldml2ZSBzbmVhayB0aWNrbGUgdW5yYXZlbCB2YWNhdGUgd2FuZGVyIHllbGwgemVzdGZ1bFwiXG4gICAgY29uc3QgdGV4dEdlbiA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHJhbmRvbSA9IEFycmF5LmZyb20oe2xlbmd0aDogNDB9LCAoKSA9PiB0eXBpbmdfdGVzdF93b3Jkcy5zcGxpdChcIiBcIilbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKSArIDFdKTtcbiAgICAgIHJldHVybiByYW5kb20uam9pbihcIiBcIilcbiAgICB9XG5cbiAgICBzZXRUZXN0VGV4dCh0ZXh0R2VuKCkpXG4gIH0sIFtdKVxuICBcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdyZWxhdGl2ZSBoLXNjcmVlbiB3LXNjcmVlbiBvdmVyZmxvdy1oaWRkZW4nPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGgtc2NyZWVuIHctc2NyZWVuJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgdy0yLzMgaC0xLzIgei0xMCc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggbWItMSB3LWZ1bGwgcmVsYXRpdmUgaXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtd2hpdGUgdGV4dC14bCByb2JvdG8nPlR5cGVFbGVnYW5jZTwvaDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWJzb2x1dGUgcmlnaHQtMCBmbGV4IGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgIDxLZXlib2FyZCBzaXplPXszMn0gY29sb3I9J3JnYmEoMjksIDM2LCA0NCwgMC41MCknIC8+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ncm9ib3RvIHRleHRCZyc+MTMwPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JhY2tncm91bmQgcm91bmRlZC1sZyB3LWZ1bGwgaC1mdWxsIHAtMTYgcmVsYXRpdmUgZmxleCBqdXN0aWZ5LWNlbnRlciByb2JvdG8nPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdhYnNvbHV0ZSBvcGFjaXR5LTc1IHctNS82IHRleHQtMnhsJz57dGVzdFRleHQuc3BsaXQoXCIgXCIpLm1hcCgoZWwsIGtleSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoaW5wdXQuc3BsaXQoXCIgXCIpW2tleV0gPT09IGVsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICg8bS5zcGFuXG4gICAgICAgICAgICAgICAgICBpbml0aWFsPXt7eDogLTEwMH19XG4gICAgICAgICAgICAgICAgICBhbmltYXRlPXt7eDogMH19XG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7ZHVyYXRpb246IDR9fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlJz57ZWx9IDwvbS5zcGFuPilcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChpbnB1dC5zcGxpdChcIiBcIilba2V5XSA9PT0gdW5kZWZpbmVkIHx8IGlucHV0LnNwbGl0KFwiIFwiKVtrZXldID09PSBcIlwiIHx8ICh0ZXN0VGV4dC5pbmNsdWRlcyhpbnB1dC5zcGxpdChcIiBcIilba2V5XSkgJiYgaW5wdXQuc3BsaXQoXCIgXCIpLmxlbmd0aCA9PSBrZXkgKyAxKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9J3RleHQtYmFja2dyb3VuZCc+e2VsfSA8L3NwYW4+IFxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9J3RleHQtd3JvbmcnPntlbH0gPC9zcGFuPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KX08L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J2Fic29sdXRlIHotMTAgdy01LzYgdGV4dC0yeGwnIHJlZj17YWN0dWFsVHlwZX0+PHNwYW4gY2xhc3NOYW1lPSdvcGFjaXR5LTAnPnt0ZXN0VGV4dC5zcGxpdChcIiBcIikuc2xpY2UoMCwgaW5wdXQuc3BsaXQoXCIgXCIpLmxlbmd0aCAtIDEpLmpvaW4oXCIgXCIpfTwvc3Bhbj4gPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LXdoaXRlJz57aW5wdXQuc3BsaXQoXCIgXCIpLmZpbmRMYXN0KCgpID0+IHRydWUpfTwvc3Bhbj48L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggcmVsYXRpdmUnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggYmFja2dyb3VuZCc+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGlucHV0IHJlZj17aW5wdXRSZWZ9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0SW5wdXQoZS50YXJnZXQudmFsdWUpfSBjbGFzc05hbWU9J29wYWNpdHktMCBhYnNvbHV0ZScvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Fic29sdXRlIC10b3AtMzIgcmlnaHQtMTInPlxuICAgICAgICA8aW1nIHNyYz0nL2JhY2tncm91bmQuc3ZnJyBkcmFnZ2FibGU9J2ZhbHNlJyAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIm1vdGlvbiIsIm0iLCJLZXlib2FyZCIsIkhvbWUiLCJpbnB1dCIsInNldElucHV0IiwiaW5wdXRSZWYiLCJhY3R1YWxUeXBlIiwidGVzdFRleHQiLCJzZXRUZXN0VGV4dCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjdXJyZW50IiwiZm9jdXMiLCJ0eXBpbmdfdGVzdF93b3JkcyIsInRleHRHZW4iLCJyYW5kb20iLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJzcGxpdCIsIk1hdGgiLCJmbG9vciIsImpvaW4iLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInNpemUiLCJjb2xvciIsInAiLCJtYXAiLCJlbCIsImtleSIsInNwYW4iLCJpbml0aWFsIiwieCIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJ1bmRlZmluZWQiLCJpbmNsdWRlcyIsInJlZiIsInNsaWNlIiwiZmluZExhc3QiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImltZyIsInNyYyIsImRyYWdnYWJsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});