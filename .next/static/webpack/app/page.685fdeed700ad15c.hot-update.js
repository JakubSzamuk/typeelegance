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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const actualType = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [testText, setTestText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"click\", ()=>{\n            var _inputRef_current;\n            (_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.focus();\n        });\n        const typing_test_words = \"apple banana cat dog egg fish goat hat ice jeep kite lemon moon nest owl pear quack rain sun tree umbrella violin water xylophone yak zebra add bake call dive eat find go help itch jump kick look meet nap open play quiet run sing talk use visit walk xerox yawn zip admire blink clap dance enjoy float grow hop imagine joke knit laugh mimic nap operate paint quack read smile tease unwrap visit whistle x-ray yodel zero applaud balance carve dash explore fly glide hide invent jog knead leap march nibble observe paddle quench race sew tiptoe uncover vault wiggle yank zipline abound balance camp dart excite flicker gallop hurry ignite juggle kayak linger meander nestle occupy prance question revive sneak tickle unravel vacate wander yell zestful\";\n        const textGen = ()=>{\n            const random = Array.from({\n                length: 40\n            }, ()=>typing_test_words.split(\" \")[Math.floor(Math.random() * 100) + 1]);\n            return random.join(\" \");\n        };\n        setTestText(textGen());\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative h-screen w-screen overflow-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center items-center h-screen w-screen\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col w-1/2 h-1/2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-white text-xl roboto mb-1\",\n                            children: \"TypeElegance\"\n                        }, void 0, false, {\n                            fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"background rounded-lg w-full h-full p-16 relative flex justify-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"absolute opacity-75 w-4/5\",\n                                    children: testText.split(\" \").map((el, key)=>{\n                                        if (input.split(\" \")[key] === el) {\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.span, {\n                                                initial: {\n                                                    x: -100\n                                                },\n                                                animate: {\n                                                    x: 0\n                                                },\n                                                transition: {\n                                                    duration: 4\n                                                },\n                                                className: \"text-right\",\n                                                children: [\n                                                    el,\n                                                    \" \"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                                lineNumber: 35,\n                                                columnNumber: 25\n                                            }, this);\n                                        } else if (input.split(\" \")[key] === undefined || input.split(\" \")[key] === \"\" || testText.includes(input.split(\" \")[key]) && input.split(\" \").length == key + 1) {\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"text-background\",\n                                                children: [\n                                                    el,\n                                                    \" \"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                                lineNumber: 41,\n                                                columnNumber: 24\n                                            }, this);\n                                        } else {\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"text-wrong\",\n                                                children: [\n                                                    el,\n                                                    \" \"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                                lineNumber: 43,\n                                                columnNumber: 24\n                                            }, this);\n                                        }\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"absolute z-10 w-4/5\",\n                                    ref: actualType,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"opacity-0\",\n                                            children: testText.split(\" \").slice(0, input.split(\" \").length - 1).join(\" \")\n                                        }, void 0, false, {\n                                            fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                            lineNumber: 46,\n                                            columnNumber: 65\n                                        }, this),\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-gray-400 bg-secondary\",\n                                            children: input.split(\" \").findLast(()=>true)\n                                        }, void 0, false, {\n                                            fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                            lineNumber: 46,\n                                            columnNumber: 170\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            ref: inputRef,\n                            onChange: (e)=>setInput(e.target.value),\n                            className: \"opacity-0 absolute\"\n                        }, void 0, false, {\n                            fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute -top-32 right-12 z-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"/background.svg\",\n                    draggable: \"false\"\n                }, void 0, false, {\n                    fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"1f8t2krokaeZD8U4nRXtW9ldy4w=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OzBCQUNiLDRFQUFDcUI7b0JBQUlDLEtBQUk7b0JBQWtCQyxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OztBQUk3QztHQXBEd0I3QztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS50c3g/NzYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtb3Rpb24gYXMgbSB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpXG4gIGNvbnN0IGFjdHVhbFR5cGUgPSB1c2VSZWY8SFRNTFBhcmFncmFwaEVsZW1lbnQ+KG51bGwpXG4gIGNvbnN0IFt0ZXN0VGV4dCwgc2V0VGVzdFRleHRdID0gdXNlU3RhdGUoJycpXG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaW5wdXRSZWYuY3VycmVudD8uZm9jdXMoKVxuICAgIH0pXG4gICAgY29uc3QgdHlwaW5nX3Rlc3Rfd29yZHMgPSBcImFwcGxlIGJhbmFuYSBjYXQgZG9nIGVnZyBmaXNoIGdvYXQgaGF0IGljZSBqZWVwIGtpdGUgbGVtb24gbW9vbiBuZXN0IG93bCBwZWFyIHF1YWNrIHJhaW4gc3VuIHRyZWUgdW1icmVsbGEgdmlvbGluIHdhdGVyIHh5bG9waG9uZSB5YWsgemVicmEgYWRkIGJha2UgY2FsbCBkaXZlIGVhdCBmaW5kIGdvIGhlbHAgaXRjaCBqdW1wIGtpY2sgbG9vayBtZWV0IG5hcCBvcGVuIHBsYXkgcXVpZXQgcnVuIHNpbmcgdGFsayB1c2UgdmlzaXQgd2FsayB4ZXJveCB5YXduIHppcCBhZG1pcmUgYmxpbmsgY2xhcCBkYW5jZSBlbmpveSBmbG9hdCBncm93IGhvcCBpbWFnaW5lIGpva2Uga25pdCBsYXVnaCBtaW1pYyBuYXAgb3BlcmF0ZSBwYWludCBxdWFjayByZWFkIHNtaWxlIHRlYXNlIHVud3JhcCB2aXNpdCB3aGlzdGxlIHgtcmF5IHlvZGVsIHplcm8gYXBwbGF1ZCBiYWxhbmNlIGNhcnZlIGRhc2ggZXhwbG9yZSBmbHkgZ2xpZGUgaGlkZSBpbnZlbnQgam9nIGtuZWFkIGxlYXAgbWFyY2ggbmliYmxlIG9ic2VydmUgcGFkZGxlIHF1ZW5jaCByYWNlIHNldyB0aXB0b2UgdW5jb3ZlciB2YXVsdCB3aWdnbGUgeWFuayB6aXBsaW5lIGFib3VuZCBiYWxhbmNlIGNhbXAgZGFydCBleGNpdGUgZmxpY2tlciBnYWxsb3AgaHVycnkgaWduaXRlIGp1Z2dsZSBrYXlhayBsaW5nZXIgbWVhbmRlciBuZXN0bGUgb2NjdXB5IHByYW5jZSBxdWVzdGlvbiByZXZpdmUgc25lYWsgdGlja2xlIHVucmF2ZWwgdmFjYXRlIHdhbmRlciB5ZWxsIHplc3RmdWxcIlxuICAgIGNvbnN0IHRleHRHZW4gPSAoKSA9PiB7XG4gICAgICBjb25zdCByYW5kb20gPSBBcnJheS5mcm9tKHtsZW5ndGg6IDQwfSwgKCkgPT4gdHlwaW5nX3Rlc3Rfd29yZHMuc3BsaXQoXCIgXCIpW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCkgKyAxXSk7XG4gICAgICByZXR1cm4gcmFuZG9tLmpvaW4oXCIgXCIpXG4gICAgfVxuXG4gICAgc2V0VGVzdFRleHQodGV4dEdlbigpKVxuICB9LCBbXSlcbiAgXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0ncmVsYXRpdmUgaC1zY3JlZW4gdy1zY3JlZW4gb3ZlcmZsb3ctaGlkZGVuJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBoLXNjcmVlbiB3LXNjcmVlbic+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIHctMS8yIGgtMS8yJz5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlIHRleHQteGwgcm9ib3RvIG1iLTEnPlR5cGVFbGVnYW5jZTwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JhY2tncm91bmQgcm91bmRlZC1sZyB3LWZ1bGwgaC1mdWxsIHAtMTYgcmVsYXRpdmUgZmxleCBqdXN0aWZ5LWNlbnRlcic+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J2Fic29sdXRlIG9wYWNpdHktNzUgdy00LzUnPnt0ZXN0VGV4dC5zcGxpdChcIiBcIikubWFwKChlbCwga2V5KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChpbnB1dC5zcGxpdChcIiBcIilba2V5XSA9PT0gZWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKDxtLnNwYW5cbiAgICAgICAgICAgICAgICAgIGluaXRpYWw9e3t4OiAtMTAwfX1cbiAgICAgICAgICAgICAgICAgIGFuaW1hdGU9e3t4OiAwfX1cbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3tkdXJhdGlvbjogNH19XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3RleHQtcmlnaHQnPntlbH0gPC9tLnNwYW4+KVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlucHV0LnNwbGl0KFwiIFwiKVtrZXldID09PSB1bmRlZmluZWQgfHwgaW5wdXQuc3BsaXQoXCIgXCIpW2tleV0gPT09IFwiXCIgfHwgKHRlc3RUZXh0LmluY2x1ZGVzKGlucHV0LnNwbGl0KFwiIFwiKVtrZXldKSAmJiBpbnB1dC5zcGxpdChcIiBcIikubGVuZ3RoID09IGtleSArIDEpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1iYWNrZ3JvdW5kJz57ZWx9IDwvc3Bhbj4gXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC13cm9uZyc+e2VsfSA8L3NwYW4+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pfTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nYWJzb2x1dGUgei0xMCB3LTQvNScgcmVmPXthY3R1YWxUeXBlfT48c3BhbiBjbGFzc05hbWU9J29wYWNpdHktMCc+e3Rlc3RUZXh0LnNwbGl0KFwiIFwiKS5zbGljZSgwLCBpbnB1dC5zcGxpdChcIiBcIikubGVuZ3RoIC0gMSkuam9pbihcIiBcIil9PC9zcGFuPiA8c3BhbiBjbGFzc05hbWU9J3RleHQtZ3JheS00MDAgYmctc2Vjb25kYXJ5Jz57aW5wdXQuc3BsaXQoXCIgXCIpLmZpbmRMYXN0KCgpID0+IHRydWUpfTwvc3Bhbj48L3A+XG4gICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgIDxpbnB1dCByZWY9e2lucHV0UmVmfSBvbkNoYW5nZT17KGUpID0+IHNldElucHV0KGUudGFyZ2V0LnZhbHVlKX0gY2xhc3NOYW1lPSdvcGFjaXR5LTAgYWJzb2x1dGUnLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdhYnNvbHV0ZSAtdG9wLTMyIHJpZ2h0LTEyIHotMCc+XG4gICAgICAgIDxpbWcgc3JjPScvYmFja2dyb3VuZC5zdmcnIGRyYWdnYWJsZT0nZmFsc2UnIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwibW90aW9uIiwibSIsIkhvbWUiLCJpbnB1dCIsInNldElucHV0IiwiaW5wdXRSZWYiLCJhY3R1YWxUeXBlIiwidGVzdFRleHQiLCJzZXRUZXN0VGV4dCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjdXJyZW50IiwiZm9jdXMiLCJ0eXBpbmdfdGVzdF93b3JkcyIsInRleHRHZW4iLCJyYW5kb20iLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJzcGxpdCIsIk1hdGgiLCJmbG9vciIsImpvaW4iLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInAiLCJtYXAiLCJlbCIsImtleSIsInNwYW4iLCJpbml0aWFsIiwieCIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJ1bmRlZmluZWQiLCJpbmNsdWRlcyIsInJlZiIsInNsaWNlIiwiZmluZExhc3QiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImltZyIsInNyYyIsImRyYWdnYWJsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});