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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const actualType = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [testText, setTestText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"click\", ()=>{\n            var _inputRef_current;\n            (_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.focus();\n        });\n        const typing_test_words = \"apple banana cat dog egg fish goat hat ice jeep kite lemon moon nest owl pear quack rain sun tree umbrella violin water xylophone yak zebra add bake call dive eat find go help itch jump kick look meet nap open play quiet run sing talk use visit walk xerox yawn zip admire blink clap dance enjoy float grow hop imagine joke knit laugh mimic nap operate paint quack read smile tease unwrap visit whistle x-ray yodel zero applaud balance carve dash explore fly glide hide invent jog knead leap march nibble observe paddle quench race sew tiptoe uncover vault wiggle yank zipline abound balance camp dart excite flicker gallop hurry ignite juggle kayak linger meander nestle occupy prance question revive sneak tickle unravel vacate wander yell zestful\";\n        const textGen = ()=>{\n            const random = Array.from({\n                length: 40\n            }, ()=>typing_test_words.split(\" \")[Math.floor(Math.random() * 100) + 1]);\n            return random.join(\" \");\n        };\n        setTestText(textGen());\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center items-center h-screen w-screen\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col w-1/2 h-1/2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-white text-xl roboto mb-1\",\n                            children: \"TypeElegance\"\n                        }, void 0, false, {\n                            fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"background w-full h-full p-16 relative flex justify-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"absolute opacity-75 w-4/5\",\n                                    children: testText.split(\" \").map((el, key)=>{\n                                        if (input.split(\" \")[key] === el) {\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.span, {\n                                                initial: {\n                                                    x: -100\n                                                },\n                                                animate: {\n                                                    x: 0\n                                                },\n                                                transition: {\n                                                    duration: 4\n                                                },\n                                                className: \"text-right\",\n                                                children: [\n                                                    el,\n                                                    \" \"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                                lineNumber: 35,\n                                                columnNumber: 25\n                                            }, this);\n                                        } else if (input.split(\" \")[key] === undefined || input.split(\" \")[key] === \"\" || testText.includes(input.split(\" \")[key]) && input.split(\" \").length == key + 1) {\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"text-background\",\n                                                children: [\n                                                    el,\n                                                    \" \"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                                lineNumber: 41,\n                                                columnNumber: 24\n                                            }, this);\n                                        } else {\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"text-wrong\",\n                                                children: [\n                                                    el,\n                                                    \" \"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                                lineNumber: 43,\n                                                columnNumber: 24\n                                            }, this);\n                                        }\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"absolute z-10 w-4/5\",\n                                    ref: actualType,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"opacity-0\",\n                                            children: testText.split(\" \").slice(0, input.split(\" \").length - 1).join(\" \")\n                                        }, void 0, false, {\n                                            fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                            lineNumber: 46,\n                                            columnNumber: 65\n                                        }, this),\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-gray-400 bg-secondary\",\n                                            children: input.split(\" \").findLast(()=>true)\n                                        }, void 0, false, {\n                                            fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                            lineNumber: 46,\n                                            columnNumber: 170\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            ref: inputRef,\n                            onChange: (e)=>setInput(e.target.value),\n                            className: \"opacity-0 absolute\"\n                        }, void 0, false, {\n                            fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute top-0 right-72\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"/background.svg\"\n                }, void 0, false, {\n                    fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"1f8t2krokaeZD8U4nRXtW9ldy4w=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OzBCQUNiLDRFQUFDcUI7b0JBQUlDLEtBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWpCO0dBcER3QjVDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLnRzeD83NjAzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1vdGlvbiBhcyBtIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgaW5wdXRSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbClcbiAgY29uc3QgYWN0dWFsVHlwZSA9IHVzZVJlZjxIVE1MUGFyYWdyYXBoRWxlbWVudD4obnVsbClcbiAgY29uc3QgW3Rlc3RUZXh0LCBzZXRUZXN0VGV4dF0gPSB1c2VTdGF0ZSgnJylcblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBpbnB1dFJlZi5jdXJyZW50Py5mb2N1cygpXG4gICAgfSlcbiAgICBjb25zdCB0eXBpbmdfdGVzdF93b3JkcyA9IFwiYXBwbGUgYmFuYW5hIGNhdCBkb2cgZWdnIGZpc2ggZ29hdCBoYXQgaWNlIGplZXAga2l0ZSBsZW1vbiBtb29uIG5lc3Qgb3dsIHBlYXIgcXVhY2sgcmFpbiBzdW4gdHJlZSB1bWJyZWxsYSB2aW9saW4gd2F0ZXIgeHlsb3Bob25lIHlhayB6ZWJyYSBhZGQgYmFrZSBjYWxsIGRpdmUgZWF0IGZpbmQgZ28gaGVscCBpdGNoIGp1bXAga2ljayBsb29rIG1lZXQgbmFwIG9wZW4gcGxheSBxdWlldCBydW4gc2luZyB0YWxrIHVzZSB2aXNpdCB3YWxrIHhlcm94IHlhd24gemlwIGFkbWlyZSBibGluayBjbGFwIGRhbmNlIGVuam95IGZsb2F0IGdyb3cgaG9wIGltYWdpbmUgam9rZSBrbml0IGxhdWdoIG1pbWljIG5hcCBvcGVyYXRlIHBhaW50IHF1YWNrIHJlYWQgc21pbGUgdGVhc2UgdW53cmFwIHZpc2l0IHdoaXN0bGUgeC1yYXkgeW9kZWwgemVybyBhcHBsYXVkIGJhbGFuY2UgY2FydmUgZGFzaCBleHBsb3JlIGZseSBnbGlkZSBoaWRlIGludmVudCBqb2cga25lYWQgbGVhcCBtYXJjaCBuaWJibGUgb2JzZXJ2ZSBwYWRkbGUgcXVlbmNoIHJhY2Ugc2V3IHRpcHRvZSB1bmNvdmVyIHZhdWx0IHdpZ2dsZSB5YW5rIHppcGxpbmUgYWJvdW5kIGJhbGFuY2UgY2FtcCBkYXJ0IGV4Y2l0ZSBmbGlja2VyIGdhbGxvcCBodXJyeSBpZ25pdGUganVnZ2xlIGtheWFrIGxpbmdlciBtZWFuZGVyIG5lc3RsZSBvY2N1cHkgcHJhbmNlIHF1ZXN0aW9uIHJldml2ZSBzbmVhayB0aWNrbGUgdW5yYXZlbCB2YWNhdGUgd2FuZGVyIHllbGwgemVzdGZ1bFwiXG4gICAgY29uc3QgdGV4dEdlbiA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHJhbmRvbSA9IEFycmF5LmZyb20oe2xlbmd0aDogNDB9LCAoKSA9PiB0eXBpbmdfdGVzdF93b3Jkcy5zcGxpdChcIiBcIilbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKSArIDFdKTtcbiAgICAgIHJldHVybiByYW5kb20uam9pbihcIiBcIilcbiAgICB9XG5cbiAgICBzZXRUZXN0VGV4dCh0ZXh0R2VuKCkpXG4gIH0sIFtdKVxuICBcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdyZWxhdGl2ZSc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC1zY3JlZW4gdy1zY3JlZW4nPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCB3LTEvMiBoLTEvMic+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC13aGl0ZSB0ZXh0LXhsIHJvYm90byBtYi0xJz5UeXBlRWxlZ2FuY2U8L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiYWNrZ3JvdW5kIHctZnVsbCBoLWZ1bGwgcC0xNiByZWxhdGl2ZSBmbGV4IGp1c3RpZnktY2VudGVyJz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nYWJzb2x1dGUgb3BhY2l0eS03NSB3LTQvNSc+e3Rlc3RUZXh0LnNwbGl0KFwiIFwiKS5tYXAoKGVsLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGlucHV0LnNwbGl0KFwiIFwiKVtrZXldID09PSBlbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoPG0uc3BhblxuICAgICAgICAgICAgICAgICAgaW5pdGlhbD17e3g6IC0xMDB9fVxuICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17e3g6IDB9fVxuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17e2R1cmF0aW9uOiA0fX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndGV4dC1yaWdodCc+e2VsfSA8L20uc3Bhbj4pXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5wdXQuc3BsaXQoXCIgXCIpW2tleV0gPT09IHVuZGVmaW5lZCB8fCBpbnB1dC5zcGxpdChcIiBcIilba2V5XSA9PT0gXCJcIiB8fCAodGVzdFRleHQuaW5jbHVkZXMoaW5wdXQuc3BsaXQoXCIgXCIpW2tleV0pICYmIGlucHV0LnNwbGl0KFwiIFwiKS5sZW5ndGggPT0ga2V5ICsgMSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LWJhY2tncm91bmQnPntlbH0gPC9zcGFuPiBcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LXdyb25nJz57ZWx9IDwvc3Bhbj5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSl9PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdhYnNvbHV0ZSB6LTEwIHctNC81JyByZWY9e2FjdHVhbFR5cGV9PjxzcGFuIGNsYXNzTmFtZT0nb3BhY2l0eS0wJz57dGVzdFRleHQuc3BsaXQoXCIgXCIpLnNsaWNlKDAsIGlucHV0LnNwbGl0KFwiIFwiKS5sZW5ndGggLSAxKS5qb2luKFwiIFwiKX08L3NwYW4+IDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1ncmF5LTQwMCBiZy1zZWNvbmRhcnknPntpbnB1dC5zcGxpdChcIiBcIikuZmluZExhc3QoKCkgPT4gdHJ1ZSl9PC9zcGFuPjwvcD5cbiAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgPGlucHV0IHJlZj17aW5wdXRSZWZ9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0SW5wdXQoZS50YXJnZXQudmFsdWUpfSBjbGFzc05hbWU9J29wYWNpdHktMCBhYnNvbHV0ZScvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Fic29sdXRlIHRvcC0wIHJpZ2h0LTcyJz5cbiAgICAgICAgPGltZyBzcmM9Jy9iYWNrZ3JvdW5kLnN2ZycgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJtb3Rpb24iLCJtIiwiSG9tZSIsImlucHV0Iiwic2V0SW5wdXQiLCJpbnB1dFJlZiIsImFjdHVhbFR5cGUiLCJ0ZXN0VGV4dCIsInNldFRlc3RUZXh0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImN1cnJlbnQiLCJmb2N1cyIsInR5cGluZ190ZXN0X3dvcmRzIiwidGV4dEdlbiIsInJhbmRvbSIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsInNwbGl0IiwiTWF0aCIsImZsb29yIiwiam9pbiIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwicCIsIm1hcCIsImVsIiwia2V5Iiwic3BhbiIsImluaXRpYWwiLCJ4IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsInVuZGVmaW5lZCIsImluY2x1ZGVzIiwicmVmIiwic2xpY2UiLCJmaW5kTGFzdCIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaW1nIiwic3JjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});