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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const actualType = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [testText, setTestText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"click\", ()=>{\n            var _inputRef_current;\n            (_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.focus();\n        });\n        const typing_test_words = \"apple banana cat dog egg fish goat hat ice jeep kite lemon moon nest owl pear quack rain sun tree umbrella violin water xylophone yak zebra add bake call dive eat find go help itch jump kick look meet nap open play quiet run sing talk use visit walk xerox yawn zip admire blink clap dance enjoy float grow hop imagine joke knit laugh mimic nap operate paint quack read smile tease unwrap visit whistle x-ray yodel zero applaud balance carve dash explore fly glide hide invent jog knead leap march nibble observe paddle quench race sew tiptoe uncover vault wiggle yank zipline abound balance camp dart excite flicker gallop hurry ignite juggle kayak linger meander nestle occupy prance question revive sneak tickle unravel vacate wander yell zestful\";\n        const textGen = ()=>{\n            const random = Array.from({\n                length: 40\n            }, ()=>typing_test_words.split(\" \")[Math.floor(Math.random() * 100) + 1]);\n            return random.join(\" \");\n        };\n        setTestText(textGen());\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center items-center h-screen w-screen\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col w-1/2 h-1/2\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-white text-xl roboto text-center mb-4\",\n                    children: \"TypeElegance\"\n                }, void 0, false, {\n                    fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-secondary w-full h-full p-16 relative flex justify-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"absolute opacity-75 w-4/5\",\n                            children: testText.split(\" \").map((el, key)=>{\n                                if (input.split(\" \")[key] === el) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.span, {\n                                        initial: {\n                                            x: -100\n                                        },\n                                        animate: {\n                                            x: 0\n                                        },\n                                        transition: {\n                                            duration: 4\n                                        },\n                                        className: \"text-right\",\n                                        children: [\n                                            el,\n                                            \" \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                        lineNumber: 34,\n                                        columnNumber: 23\n                                    }, this);\n                                } else if (input.split(\" \")[key] === undefined || input.split(\" \")[key] === \"\" || testText.includes(input.split(\" \")[key]) && input.split(\" \").length == key + 1) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-background\",\n                                        children: [\n                                            el,\n                                            \" \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 22\n                                    }, this);\n                                } else {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-wrong\",\n                                        children: [\n                                            el,\n                                            \" \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 22\n                                    }, this);\n                                }\n                            })\n                        }, void 0, false, {\n                            fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"absolute z-10 w-4/5\",\n                            ref: actualType,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"opacity-0\",\n                                    children: testText.split(\" \").slice(0, input.split(\" \").length - 1).join(\" \")\n                                }, void 0, false, {\n                                    fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 63\n                                }, this),\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-gray-400 bg-secondary\",\n                                    children: input.split(\" \").findLast(()=>true)\n                                }, void 0, false, {\n                                    fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 168\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    ref: inputRef,\n                    onChange: (e)=>setInput(e.target.value),\n                    className: \"opacity-0 absolute\"\n                }, void 0, false, {\n                    fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"1f8t2krokaeZD8U4nRXtW9ldy4w=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cHAvcGFnZS50c3g/NzYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtb3Rpb24gYXMgbSB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpXG4gIGNvbnN0IGFjdHVhbFR5cGUgPSB1c2VSZWY8SFRNTFBhcmFncmFwaEVsZW1lbnQ+KG51bGwpXG4gIGNvbnN0IFt0ZXN0VGV4dCwgc2V0VGVzdFRleHRdID0gdXNlU3RhdGUoJycpXG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaW5wdXRSZWYuY3VycmVudD8uZm9jdXMoKVxuICAgIH0pXG4gICAgY29uc3QgdHlwaW5nX3Rlc3Rfd29yZHMgPSBcImFwcGxlIGJhbmFuYSBjYXQgZG9nIGVnZyBmaXNoIGdvYXQgaGF0IGljZSBqZWVwIGtpdGUgbGVtb24gbW9vbiBuZXN0IG93bCBwZWFyIHF1YWNrIHJhaW4gc3VuIHRyZWUgdW1icmVsbGEgdmlvbGluIHdhdGVyIHh5bG9waG9uZSB5YWsgemVicmEgYWRkIGJha2UgY2FsbCBkaXZlIGVhdCBmaW5kIGdvIGhlbHAgaXRjaCBqdW1wIGtpY2sgbG9vayBtZWV0IG5hcCBvcGVuIHBsYXkgcXVpZXQgcnVuIHNpbmcgdGFsayB1c2UgdmlzaXQgd2FsayB4ZXJveCB5YXduIHppcCBhZG1pcmUgYmxpbmsgY2xhcCBkYW5jZSBlbmpveSBmbG9hdCBncm93IGhvcCBpbWFnaW5lIGpva2Uga25pdCBsYXVnaCBtaW1pYyBuYXAgb3BlcmF0ZSBwYWludCBxdWFjayByZWFkIHNtaWxlIHRlYXNlIHVud3JhcCB2aXNpdCB3aGlzdGxlIHgtcmF5IHlvZGVsIHplcm8gYXBwbGF1ZCBiYWxhbmNlIGNhcnZlIGRhc2ggZXhwbG9yZSBmbHkgZ2xpZGUgaGlkZSBpbnZlbnQgam9nIGtuZWFkIGxlYXAgbWFyY2ggbmliYmxlIG9ic2VydmUgcGFkZGxlIHF1ZW5jaCByYWNlIHNldyB0aXB0b2UgdW5jb3ZlciB2YXVsdCB3aWdnbGUgeWFuayB6aXBsaW5lIGFib3VuZCBiYWxhbmNlIGNhbXAgZGFydCBleGNpdGUgZmxpY2tlciBnYWxsb3AgaHVycnkgaWduaXRlIGp1Z2dsZSBrYXlhayBsaW5nZXIgbWVhbmRlciBuZXN0bGUgb2NjdXB5IHByYW5jZSBxdWVzdGlvbiByZXZpdmUgc25lYWsgdGlja2xlIHVucmF2ZWwgdmFjYXRlIHdhbmRlciB5ZWxsIHplc3RmdWxcIlxuICAgIGNvbnN0IHRleHRHZW4gPSAoKSA9PiB7XG4gICAgICBjb25zdCByYW5kb20gPSBBcnJheS5mcm9tKHtsZW5ndGg6IDQwfSwgKCkgPT4gdHlwaW5nX3Rlc3Rfd29yZHMuc3BsaXQoXCIgXCIpW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCkgKyAxXSk7XG4gICAgICByZXR1cm4gcmFuZG9tLmpvaW4oXCIgXCIpXG4gICAgfVxuXG4gICAgc2V0VGVzdFRleHQodGV4dEdlbigpKVxuICB9LCBbXSlcbiAgXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC1zY3JlZW4gdy1zY3JlZW4nPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgdy0xLzIgaC0xLzInPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlIHRleHQteGwgcm9ib3RvIHRleHQtY2VudGVyIG1iLTQnPlR5cGVFbGVnYW5jZTwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiZy1zZWNvbmRhcnkgdy1mdWxsIGgtZnVsbCBwLTE2IHJlbGF0aXZlIGZsZXgganVzdGlmeS1jZW50ZXInPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0nYWJzb2x1dGUgb3BhY2l0eS03NSB3LTQvNSc+e3Rlc3RUZXh0LnNwbGl0KFwiIFwiKS5tYXAoKGVsLCBrZXkpID0+IHtcbiAgICAgICAgICAgIGlmIChpbnB1dC5zcGxpdChcIiBcIilba2V5XSA9PT0gZWwpIHtcbiAgICAgICAgICAgICAgcmV0dXJuICg8bS5zcGFuXG4gICAgICAgICAgICAgICAgaW5pdGlhbD17e3g6IC0xMDB9fVxuICAgICAgICAgICAgICAgIGFuaW1hdGU9e3t4OiAwfX1cbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7ZHVyYXRpb246IDR9fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndGV4dC1yaWdodCc+e2VsfSA8L20uc3Bhbj4pXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlucHV0LnNwbGl0KFwiIFwiKVtrZXldID09PSB1bmRlZmluZWQgfHwgaW5wdXQuc3BsaXQoXCIgXCIpW2tleV0gPT09IFwiXCIgfHwgKHRlc3RUZXh0LmluY2x1ZGVzKGlucHV0LnNwbGl0KFwiIFwiKVtrZXldKSAmJiBpbnB1dC5zcGxpdChcIiBcIikubGVuZ3RoID09IGtleSArIDEpKSB7XG4gICAgICAgICAgICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9J3RleHQtYmFja2dyb3VuZCc+e2VsfSA8L3NwYW4+IFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC13cm9uZyc+e2VsfSA8L3NwYW4+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSl9PC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0nYWJzb2x1dGUgei0xMCB3LTQvNScgcmVmPXthY3R1YWxUeXBlfT48c3BhbiBjbGFzc05hbWU9J29wYWNpdHktMCc+e3Rlc3RUZXh0LnNwbGl0KFwiIFwiKS5zbGljZSgwLCBpbnB1dC5zcGxpdChcIiBcIikubGVuZ3RoIC0gMSkuam9pbihcIiBcIil9PC9zcGFuPiA8c3BhbiBjbGFzc05hbWU9J3RleHQtZ3JheS00MDAgYmctc2Vjb25kYXJ5Jz57aW5wdXQuc3BsaXQoXCIgXCIpLmZpbmRMYXN0KCgpID0+IHRydWUpfTwvc3Bhbj48L3A+XG4gICAgICAgIDwvZGl2PlxuXG5cblxuICAgICAgICA8aW5wdXQgcmVmPXtpbnB1dFJlZn0gb25DaGFuZ2U9eyhlKSA9PiBzZXRJbnB1dChlLnRhcmdldC52YWx1ZSl9IGNsYXNzTmFtZT0nb3BhY2l0eS0wIGFic29sdXRlJy8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwibW90aW9uIiwibSIsIkhvbWUiLCJpbnB1dCIsInNldElucHV0IiwiaW5wdXRSZWYiLCJhY3R1YWxUeXBlIiwidGVzdFRleHQiLCJzZXRUZXN0VGV4dCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjdXJyZW50IiwiZm9jdXMiLCJ0eXBpbmdfdGVzdF93b3JkcyIsInRleHRHZW4iLCJyYW5kb20iLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJzcGxpdCIsIk1hdGgiLCJmbG9vciIsImpvaW4iLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInAiLCJtYXAiLCJlbCIsImtleSIsInNwYW4iLCJpbml0aWFsIiwieCIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJ1bmRlZmluZWQiLCJpbmNsdWRlcyIsInJlZiIsInNsaWNlIiwiZmluZExhc3QiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});