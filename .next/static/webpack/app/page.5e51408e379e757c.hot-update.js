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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @phosphor-icons/react */ \"(app-pages-browser)/./node_modules/@phosphor-icons/react/dist/csr/Keyboard.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const actualType = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [testText, setTestText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [wordCount, setWordCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(15);\n    const [startTime, setStartTime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    // const [endTime, setEndTime] = useState<Date>()\n    const [wpm, setWpm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const typing_test_words = \"apple banana cat dog egg fish goat hat ice jeep kite lemon moon nest owl pear quack rain sun tree umbrella violin water xylophone yak zebra add bake call dive eat find go help itch jump kick look meet nap open play quiet run sing talk use visit walk xerox yawn zip admire blink clap dance enjoy float grow hop imagine joke knit laugh mimic nap operate paint quack read smile tease unwrap visit whistle x-ray yodel zero applaud balance carve dash explore fly glide hide invent jog knead leap march nibble observe paddle quench race sew tiptoe uncover vault wiggle yank zipline abound balance camp dart excite flicker gallop hurry ignite juggle kayak linger meander nestle occupy prance question revive sneak tickle unravel vacate wander yell zestful\";\n    const textGen = (count)=>{\n        const random = Array.from({\n            length: count\n        }, ()=>typing_test_words.split(\" \")[Math.floor(Math.random() * 100) + 1]);\n        setInput(\"\");\n        return random.join(\" \");\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (input.length == 1) {\n            setStartTime(new Date());\n            console.log(startTime);\n        } else if (input.split(\" \").length == testText.split(\" \").length && input != \"\" && input.split(\" \")[input.split(\" \").length - 1] == testText.split(\" \")[testText.split(\" \").length - 1]) {\n            let endTime = new Date();\n            const wordsDone = testText.split(\"\").filter((el, key)=>el == input[key]).length / 5;\n            console.log(wordsDone);\n            var timeDiff = (endTime.getTime() - startTime.getTime()) / 1000;\n            setWpm(Math.round(wordsDone / (timeDiff / 60)));\n        }\n    }, [\n        input\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"click\", ()=>{\n            var _inputRef_current;\n            (_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.focus();\n        });\n        window.addEventListener(\"keydown\", (e)=>{\n            if (e.key === \"Escape\") {\n                setTestText(textGen(wordCount));\n            }\n        });\n        setTestText(textGen(wordCount));\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setTestText(textGen(wordCount));\n    }, [\n        wordCount\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative h-screen w-screen overflow-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center items-center h-screen w-screen\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col w-2/3 h-1/2 z-10\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex mb-1 w-full relative items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-white text-xl roboto\",\n                                    children: \"TypeElegance\"\n                                }, void 0, false, {\n                                    fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"absolute right-0 flex items-center gap-1\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_phosphor_icons_react__WEBPACK_IMPORTED_MODULE_2__.Keyboard, {\n                                            size: 32,\n                                            color: \"#fff\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                            lineNumber: 67,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"roboto text-white\",\n                                            children: \"130\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                            lineNumber: 68,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"background rounded-lg w-full h-full p-16 relative flex justify-center roboto\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"absolute opacity-75 w-11/12 text-2xl\",\n                                    children: testText.split(\" \").map((el, key)=>{\n                                        if (input.split(\" \")[key] === el) {\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.span, {\n                                                initial: {\n                                                    x: -100\n                                                },\n                                                animate: {\n                                                    x: 0\n                                                },\n                                                transition: {\n                                                    duration: 4\n                                                },\n                                                className: \"text-white\",\n                                                children: [\n                                                    el,\n                                                    \" \"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                                lineNumber: 74,\n                                                columnNumber: 25\n                                            }, this);\n                                        } else if (input.split(\" \")[key] === undefined || input.split(\" \")[key] === \"\" || testText.includes(input.split(\" \")[key]) && input.split(\" \").length == key + 1) {\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"text-background\",\n                                                children: [\n                                                    el,\n                                                    \" \"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                                lineNumber: 80,\n                                                columnNumber: 24\n                                            }, this);\n                                        } else {\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"text-wrong\",\n                                                children: [\n                                                    el,\n                                                    \" \"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                                lineNumber: 82,\n                                                columnNumber: 24\n                                            }, this);\n                                        }\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"absolute z-10 w-11/12 text-2xl\",\n                                    ref: actualType,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"opacity-0\",\n                                            children: testText.split(\" \").slice(0, input.split(\" \").length - 1).join(\" \")\n                                        }, void 0, false, {\n                                            fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                            lineNumber: 85,\n                                            columnNumber: 76\n                                        }, this),\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-white\",\n                                            children: input.split(\" \").findLast(()=>true)\n                                        }, void 0, false, {\n                                            fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                            lineNumber: 85,\n                                            columnNumber: 181\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex relative mt-4 items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex background p-2 gap-4 rounded-lg\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: ()=>setWordCount(15),\n                                            className: \"p-1 background text-white roboto rounded-md px-6 \".concat(wordCount == 15 ? \"shadow-lg\" : \"\", \" transition-all\"),\n                                            children: \"15\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                            lineNumber: 89,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: ()=>setWordCount(30),\n                                            className: \"p-1 background text-white roboto rounded-md px-6 \".concat(wordCount == 30 ? \"shadow-lg\" : \"\", \" transition-all\"),\n                                            children: \"30\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                            lineNumber: 90,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: ()=>setWordCount(60),\n                                            className: \"p-1 background text-white roboto rounded-md px-6 \".concat(wordCount == 60 ? \"shadow-lg\" : \"\", \" transition-all\"),\n                                            children: \"60\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                            lineNumber: 91,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>setTestText(textGen(wordCount)),\n                                    className: \"background absolute right-0 rounded-lg text-white roboto p-3 px-12\",\n                                    children: \"Restart\"\n                                }, void 0, false, {\n                                    fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                    lineNumber: 93,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            ref: inputRef,\n                            onChange: (e)=>setInput(e.target.value),\n                            className: \"opacity-0 absolute\"\n                        }, void 0, false, {\n                            fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                            lineNumber: 96,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute -top-32 right-12\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"/background.svg\",\n                    draggable: \"false\"\n                }, void 0, false, {\n                    fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                    lineNumber: 100,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                lineNumber: 99,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"DiDVXi6m9JwBpJFzph3aenf7ASk=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qyw4REFBQ3dCOzRDQUFLTixXQUFVO3NEQUFjeEMsTUFBTW1CLEtBQUssQ0FBQyxLQUFLcUMsUUFBUSxDQUFDLElBQU07Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FFeE8sOERBQUNqQjs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNEO29DQUFJQyxXQUFVOztzREFDYiw4REFBQ2lCOzRDQUFPQyxTQUFTLElBQU1uRCxhQUFhOzRDQUFLaUMsV0FBVyxvREFBdUYsT0FBbkNsQyxhQUFhLEtBQUssY0FBYyxJQUFHO3NEQUFrQjs7Ozs7O3NEQUM3Siw4REFBQ21EOzRDQUFPQyxTQUFTLElBQU1uRCxhQUFhOzRDQUFLaUMsV0FBVyxvREFBdUYsT0FBbkNsQyxhQUFhLEtBQUssY0FBYyxJQUFHO3NEQUFrQjs7Ozs7O3NEQUM3Siw4REFBQ21EOzRDQUFPQyxTQUFTLElBQU1uRCxhQUFhOzRDQUFLaUMsV0FBVyxvREFBdUYsT0FBbkNsQyxhQUFhLEtBQUssY0FBYyxJQUFHO3NEQUFrQjs7Ozs7Ozs7Ozs7OzhDQUUvSiw4REFBQ21EO29DQUFPQyxTQUFTLElBQU1yRCxZQUFZUSxRQUFRUDtvQ0FBYWtDLFdBQVU7OENBQXFFOzs7Ozs7Ozs7Ozs7c0NBR3pJLDhEQUFDeEM7NEJBQU1zRCxLQUFLcEQ7NEJBQVV5RCxVQUFVLENBQUNyQixJQUFNckMsU0FBU3FDLEVBQUVzQixNQUFNLENBQUNDLEtBQUs7NEJBQUdyQixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFHL0UsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDc0I7b0JBQUlDLEtBQUk7b0JBQWtCQyxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OztBQUk3QztHQWpHd0JqRTtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS50c3g/NzYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtb3Rpb24gYXMgbSB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5pbXBvcnQgeyBLZXlib2FyZCB9IGZyb20gJ0BwaG9zcGhvci1pY29ucy9yZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgaW5wdXRSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbClcbiAgY29uc3QgYWN0dWFsVHlwZSA9IHVzZVJlZjxIVE1MUGFyYWdyYXBoRWxlbWVudD4obnVsbClcbiAgY29uc3QgW3Rlc3RUZXh0LCBzZXRUZXN0VGV4dF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKVxuICBjb25zdCBbd29yZENvdW50LCBzZXRXb3JkQ291bnRdID0gdXNlU3RhdGUoMTUpXG5cbiAgY29uc3QgW3N0YXJ0VGltZSwgc2V0U3RhcnRUaW1lXSA9IHVzZVN0YXRlPERhdGU+KClcbiAgLy8gY29uc3QgW2VuZFRpbWUsIHNldEVuZFRpbWVdID0gdXNlU3RhdGU8RGF0ZT4oKVxuICBjb25zdCBbd3BtLCBzZXRXcG1dID0gdXNlU3RhdGU8bnVtYmVyPigpXG5cblxuICBjb25zdCB0eXBpbmdfdGVzdF93b3JkcyA9IFwiYXBwbGUgYmFuYW5hIGNhdCBkb2cgZWdnIGZpc2ggZ29hdCBoYXQgaWNlIGplZXAga2l0ZSBsZW1vbiBtb29uIG5lc3Qgb3dsIHBlYXIgcXVhY2sgcmFpbiBzdW4gdHJlZSB1bWJyZWxsYSB2aW9saW4gd2F0ZXIgeHlsb3Bob25lIHlhayB6ZWJyYSBhZGQgYmFrZSBjYWxsIGRpdmUgZWF0IGZpbmQgZ28gaGVscCBpdGNoIGp1bXAga2ljayBsb29rIG1lZXQgbmFwIG9wZW4gcGxheSBxdWlldCBydW4gc2luZyB0YWxrIHVzZSB2aXNpdCB3YWxrIHhlcm94IHlhd24gemlwIGFkbWlyZSBibGluayBjbGFwIGRhbmNlIGVuam95IGZsb2F0IGdyb3cgaG9wIGltYWdpbmUgam9rZSBrbml0IGxhdWdoIG1pbWljIG5hcCBvcGVyYXRlIHBhaW50IHF1YWNrIHJlYWQgc21pbGUgdGVhc2UgdW53cmFwIHZpc2l0IHdoaXN0bGUgeC1yYXkgeW9kZWwgemVybyBhcHBsYXVkIGJhbGFuY2UgY2FydmUgZGFzaCBleHBsb3JlIGZseSBnbGlkZSBoaWRlIGludmVudCBqb2cga25lYWQgbGVhcCBtYXJjaCBuaWJibGUgb2JzZXJ2ZSBwYWRkbGUgcXVlbmNoIHJhY2Ugc2V3IHRpcHRvZSB1bmNvdmVyIHZhdWx0IHdpZ2dsZSB5YW5rIHppcGxpbmUgYWJvdW5kIGJhbGFuY2UgY2FtcCBkYXJ0IGV4Y2l0ZSBmbGlja2VyIGdhbGxvcCBodXJyeSBpZ25pdGUganVnZ2xlIGtheWFrIGxpbmdlciBtZWFuZGVyIG5lc3RsZSBvY2N1cHkgcHJhbmNlIHF1ZXN0aW9uIHJldml2ZSBzbmVhayB0aWNrbGUgdW5yYXZlbCB2YWNhdGUgd2FuZGVyIHllbGwgemVzdGZ1bFwiXG4gIGNvbnN0IHRleHRHZW4gPSAoY291bnQ6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHJhbmRvbSA9IEFycmF5LmZyb20oe2xlbmd0aDogY291bnR9LCAoKSA9PiB0eXBpbmdfdGVzdF93b3Jkcy5zcGxpdChcIiBcIilbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKSArIDFdKTtcbiAgICBzZXRJbnB1dCgnJylcbiAgICByZXR1cm4gcmFuZG9tLmpvaW4oXCIgXCIpXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpbnB1dC5sZW5ndGggPT0gMSkge1xuICAgICAgc2V0U3RhcnRUaW1lKG5ldyBEYXRlKCkpXG4gICAgICBjb25zb2xlLmxvZyhzdGFydFRpbWUpXG4gICAgfSBlbHNlIGlmIChpbnB1dC5zcGxpdChcIiBcIikubGVuZ3RoID09IHRlc3RUZXh0LnNwbGl0KFwiIFwiKS5sZW5ndGggJiYgaW5wdXQgIT0gXCJcIiAmJiBpbnB1dC5zcGxpdChcIiBcIilbaW5wdXQuc3BsaXQoXCIgXCIpLmxlbmd0aCAtIDFdID09IHRlc3RUZXh0LnNwbGl0KFwiIFwiKVt0ZXN0VGV4dC5zcGxpdChcIiBcIikubGVuZ3RoIC0gMV0pIHtcbiAgICAgIGxldCBlbmRUaW1lID0gbmV3IERhdGUoKVxuICAgICAgXG4gICAgICBjb25zdCB3b3Jkc0RvbmUgPSAodGVzdFRleHQuc3BsaXQoXCJcIikuZmlsdGVyKChlbCwga2V5KSA9PiBlbCA9PSBpbnB1dFtrZXldKS5sZW5ndGgpIC8gNVxuICAgICAgY29uc29sZS5sb2cod29yZHNEb25lKVxuICAgICAgdmFyIHRpbWVEaWZmID0gKGVuZFRpbWUuZ2V0VGltZSgpIC0gc3RhcnRUaW1lLmdldFRpbWUoKSkgLyAxMDAwXG4gICAgICBzZXRXcG0oTWF0aC5yb3VuZCh3b3Jkc0RvbmUgLyAodGltZURpZmYgLyA2MCkpKVxuICAgIH1cbiAgfSwgW2lucHV0XSlcblxuICBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGlucHV0UmVmLmN1cnJlbnQ/LmZvY3VzKClcbiAgICB9KVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgICAgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICAgIHNldFRlc3RUZXh0KHRleHRHZW4od29yZENvdW50KSlcbiAgICAgIH1cbiAgICB9KVxuICAgIFxuICAgIHNldFRlc3RUZXh0KHRleHRHZW4od29yZENvdW50KSlcbiAgfSwgW10pXG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFRlc3RUZXh0KHRleHRHZW4od29yZENvdW50KSlcbiAgfSwgW3dvcmRDb3VudF0pXG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdyZWxhdGl2ZSBoLXNjcmVlbiB3LXNjcmVlbiBvdmVyZmxvdy1oaWRkZW4nPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGgtc2NyZWVuIHctc2NyZWVuJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgdy0yLzMgaC0xLzIgei0xMCc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggbWItMSB3LWZ1bGwgcmVsYXRpdmUgaXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtd2hpdGUgdGV4dC14bCByb2JvdG8nPlR5cGVFbGVnYW5jZTwvaDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWJzb2x1dGUgcmlnaHQtMCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSc+XG4gICAgICAgICAgICAgIDxLZXlib2FyZCBzaXplPXszMn0gY29sb3I9JyNmZmYnIC8+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ncm9ib3RvIHRleHQtd2hpdGUnPjEzMDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiYWNrZ3JvdW5kIHJvdW5kZWQtbGcgdy1mdWxsIGgtZnVsbCBwLTE2IHJlbGF0aXZlIGZsZXgganVzdGlmeS1jZW50ZXIgcm9ib3RvJz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nYWJzb2x1dGUgb3BhY2l0eS03NSB3LTExLzEyIHRleHQtMnhsJz57dGVzdFRleHQuc3BsaXQoXCIgXCIpLm1hcCgoZWwsIGtleSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoaW5wdXQuc3BsaXQoXCIgXCIpW2tleV0gPT09IGVsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICg8bS5zcGFuXG4gICAgICAgICAgICAgICAgICBpbml0aWFsPXt7eDogLTEwMH19XG4gICAgICAgICAgICAgICAgICBhbmltYXRlPXt7eDogMH19XG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7ZHVyYXRpb246IDR9fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlJz57ZWx9IDwvbS5zcGFuPilcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChpbnB1dC5zcGxpdChcIiBcIilba2V5XSA9PT0gdW5kZWZpbmVkIHx8IGlucHV0LnNwbGl0KFwiIFwiKVtrZXldID09PSBcIlwiIHx8ICh0ZXN0VGV4dC5pbmNsdWRlcyhpbnB1dC5zcGxpdChcIiBcIilba2V5XSkgJiYgaW5wdXQuc3BsaXQoXCIgXCIpLmxlbmd0aCA9PSBrZXkgKyAxKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9J3RleHQtYmFja2dyb3VuZCc+e2VsfSA8L3NwYW4+IFxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9J3RleHQtd3JvbmcnPntlbH0gPC9zcGFuPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KX08L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J2Fic29sdXRlIHotMTAgdy0xMS8xMiB0ZXh0LTJ4bCcgcmVmPXthY3R1YWxUeXBlfT48c3BhbiBjbGFzc05hbWU9J29wYWNpdHktMCc+e3Rlc3RUZXh0LnNwbGl0KFwiIFwiKS5zbGljZSgwLCBpbnB1dC5zcGxpdChcIiBcIikubGVuZ3RoIC0gMSkuam9pbihcIiBcIil9PC9zcGFuPiA8c3BhbiBjbGFzc05hbWU9J3RleHQtd2hpdGUnPntpbnB1dC5zcGxpdChcIiBcIikuZmluZExhc3QoKCkgPT4gdHJ1ZSl9PC9zcGFuPjwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCByZWxhdGl2ZSBtdC00IGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBiYWNrZ3JvdW5kIHAtMiBnYXAtNCByb3VuZGVkLWxnJz5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRXb3JkQ291bnQoMTUpfSBjbGFzc05hbWU9e2BwLTEgYmFja2dyb3VuZCB0ZXh0LXdoaXRlIHJvYm90byByb3VuZGVkLW1kIHB4LTYgJHt3b3JkQ291bnQgPT0gMTUgPyBcInNoYWRvdy1sZ1wiIDogXCJcIn0gdHJhbnNpdGlvbi1hbGxgfT4xNTwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFdvcmRDb3VudCgzMCl9IGNsYXNzTmFtZT17YHAtMSBiYWNrZ3JvdW5kIHRleHQtd2hpdGUgcm9ib3RvIHJvdW5kZWQtbWQgcHgtNiAke3dvcmRDb3VudCA9PSAzMCA/IFwic2hhZG93LWxnXCIgOiBcIlwifSB0cmFuc2l0aW9uLWFsbGB9PjMwPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0V29yZENvdW50KDYwKX0gY2xhc3NOYW1lPXtgcC0xIGJhY2tncm91bmQgdGV4dC13aGl0ZSByb2JvdG8gcm91bmRlZC1tZCBweC02ICR7d29yZENvdW50ID09IDYwID8gXCJzaGFkb3ctbGdcIiA6IFwiXCJ9IHRyYW5zaXRpb24tYWxsYH0+NjA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRUZXN0VGV4dCh0ZXh0R2VuKHdvcmRDb3VudCkpfSBjbGFzc05hbWU9J2JhY2tncm91bmQgYWJzb2x1dGUgcmlnaHQtMCByb3VuZGVkLWxnIHRleHQtd2hpdGUgcm9ib3RvIHAtMyBweC0xMic+UmVzdGFydDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGlucHV0IHJlZj17aW5wdXRSZWZ9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0SW5wdXQoZS50YXJnZXQudmFsdWUpfSBjbGFzc05hbWU9J29wYWNpdHktMCBhYnNvbHV0ZScvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Fic29sdXRlIC10b3AtMzIgcmlnaHQtMTInPlxuICAgICAgICA8aW1nIHNyYz0nL2JhY2tncm91bmQuc3ZnJyBkcmFnZ2FibGU9J2ZhbHNlJyAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIm1vdGlvbiIsIm0iLCJLZXlib2FyZCIsIkhvbWUiLCJpbnB1dCIsInNldElucHV0IiwiaW5wdXRSZWYiLCJhY3R1YWxUeXBlIiwidGVzdFRleHQiLCJzZXRUZXN0VGV4dCIsIndvcmRDb3VudCIsInNldFdvcmRDb3VudCIsInN0YXJ0VGltZSIsInNldFN0YXJ0VGltZSIsIndwbSIsInNldFdwbSIsInR5cGluZ190ZXN0X3dvcmRzIiwidGV4dEdlbiIsImNvdW50IiwicmFuZG9tIiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwic3BsaXQiLCJNYXRoIiwiZmxvb3IiLCJqb2luIiwiRGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJlbmRUaW1lIiwid29yZHNEb25lIiwiZmlsdGVyIiwiZWwiLCJrZXkiLCJ0aW1lRGlmZiIsImdldFRpbWUiLCJyb3VuZCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjdXJyZW50IiwiZm9jdXMiLCJlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJzaXplIiwiY29sb3IiLCJwIiwibWFwIiwic3BhbiIsImluaXRpYWwiLCJ4IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsInVuZGVmaW5lZCIsImluY2x1ZGVzIiwicmVmIiwic2xpY2UiLCJmaW5kTGFzdCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJvbkNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwiaW1nIiwic3JjIiwiZHJhZ2dhYmxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});