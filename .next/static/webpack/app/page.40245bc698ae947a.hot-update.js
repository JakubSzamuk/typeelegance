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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const actualType = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    console.log(input.split(\" \"));\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"click\", ()=>{\n            var _inputRef_current;\n            (_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.focus();\n        });\n    }, []);\n    const testText = \"hello world how are you doing today\";\n    const compareTexts = (text1, text2)=>{\n        const wrongIndeces = [];\n        for(let i = 0; i < text1.length; i++){\n            if (text1[i] !== text2[i]) {\n                wrongIndeces.push(i);\n            }\n        }\n        return wrongIndeces;\n    };\n    let correct = [];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center items-center h-screen w-screen\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col w-1/2 h-1/2\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-white text-7xl w-full text-center mb-4\",\n                    children: \"Typers\"\n                }, void 0, false, {\n                    fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-gray-300 w-full h-full p-12 relative\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"absolute opacity-75\",\n                            children: testText.split(\" \").map((el, key)=>{\n                                if (input.split(\" \")[key] === el) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-green-500\",\n                                        children: [\n                                            el,\n                                            \" \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 22\n                                    }, this);\n                                } else if (input.split(\" \")[key] === undefined || input.split(\" \")[key] === \"\") {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-gray-500\",\n                                        children: [\n                                            el,\n                                            \" \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 22\n                                    }, this);\n                                } else {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-red-500\",\n                                        children: [\n                                            el,\n                                            \" \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 22\n                                    }, this);\n                                }\n                            })\n                        }, void 0, false, {\n                            fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"absolute z-10\",\n                            ref: actualType,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"opacity-0\",\n                                    children: input.split(\" \").slice(0, -1).join(\" \")\n                                }, void 0, false, {\n                                    fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 57\n                                }, this),\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-yellow-500 bg-gray-300\",\n                                    children: input.split(\" \").findLast(()=>true)\n                                }, void 0, false, {\n                                    fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 134\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    ref: inputRef,\n                    onChange: (e)=>setInput(e.target.value),\n                    className: \"opacity-0 absolute\"\n                }, void 0, false, {\n                    fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"UQyPuHS4UDj3AuT04d8eZrkG+YQ=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFbUQ7QUFFcEMsU0FBU0c7O0lBQ3RCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHSCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNSSxXQUFXTCw2Q0FBTUEsQ0FBbUI7SUFDMUMsTUFBTU0sYUFBYU4sNkNBQU1BLENBQXVCO0lBR2hETyxRQUFRQyxHQUFHLENBQUNMLE1BQU1NLEtBQUssQ0FBQztJQUV4QlYsZ0RBQVNBLENBQUM7UUFDUlcsT0FBT0MsZ0JBQWdCLENBQUMsU0FBUztnQkFDL0JOO2FBQUFBLG9CQUFBQSxTQUFTTyxPQUFPLGNBQWhCUCx3Q0FBQUEsa0JBQWtCUSxLQUFLO1FBQ3pCO0lBRUYsR0FBRyxFQUFFO0lBQ0wsTUFBTUMsV0FBVztJQUVqQixNQUFNQyxlQUFlLENBQUNDLE9BQWlCQztRQUNyQyxNQUFNQyxlQUFlLEVBQUU7UUFDdkIsSUFBSyxJQUFJQyxJQUFJLEdBQUdBLElBQUlILE1BQU1JLE1BQU0sRUFBRUQsSUFBSztZQUNyQyxJQUFJSCxLQUFLLENBQUNHLEVBQUUsS0FBS0YsS0FBSyxDQUFDRSxFQUFFLEVBQUU7Z0JBQ3pCRCxhQUFhRyxJQUFJLENBQUNGO1lBQ3BCO1FBQ0Y7UUFDQSxPQUFPRDtJQUNUO0lBRUEsSUFBSUksVUFBVSxFQUFFO0lBRWhCLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0M7b0JBQUdELFdBQVU7OEJBQThDOzs7Ozs7OEJBQzVELDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNFOzRCQUFFRixXQUFVO3NDQUF1QlYsU0FBU0wsS0FBSyxDQUFDLEtBQUtrQixHQUFHLENBQUMsQ0FBQ0MsSUFBSUM7Z0NBQy9ELElBQUkxQixNQUFNTSxLQUFLLENBQUMsSUFBSSxDQUFDb0IsSUFBSSxLQUFLRCxJQUFJO29DQUNoQyxxQkFBTyw4REFBQ0U7d0NBQUtOLFdBQVU7OzRDQUFrQkk7NENBQUc7Ozs7Ozs7Z0NBQzlDLE9BQU8sSUFBSXpCLE1BQU1NLEtBQUssQ0FBQyxJQUFJLENBQUNvQixJQUFJLEtBQUtFLGFBQWE1QixNQUFNTSxLQUFLLENBQUMsSUFBSSxDQUFDb0IsSUFBSSxLQUFLLElBQUk7b0NBQzlFLHFCQUFPLDhEQUFDQzt3Q0FBS04sV0FBVTs7NENBQWlCSTs0Q0FBRzs7Ozs7OztnQ0FDN0MsT0FBUTtvQ0FDTixxQkFBTyw4REFBQ0U7d0NBQUtOLFdBQVU7OzRDQUFnQkk7NENBQUc7Ozs7Ozs7Z0NBQzVDOzRCQUNGOzs7Ozs7c0NBQ0EsOERBQUNGOzRCQUFFRixXQUFVOzRCQUFnQlEsS0FBSzFCOzs4Q0FBWSw4REFBQ3dCO29DQUFLTixXQUFVOzhDQUFhckIsTUFBTU0sS0FBSyxDQUFDLEtBQUt3QixLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUdDLElBQUksQ0FBQzs7Ozs7O2dDQUFZOzhDQUFDLDhEQUFDSjtvQ0FBS04sV0FBVTs4Q0FBK0JyQixNQUFNTSxLQUFLLENBQUMsS0FBSzBCLFFBQVEsQ0FBQyxJQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBSzVNLDhEQUFDaEM7b0JBQU02QixLQUFLM0I7b0JBQVUrQixVQUFVLENBQUNDLElBQU1qQyxTQUFTaUMsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO29CQUFHZixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OztBQUluRjtHQW5Ed0J0QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS50c3g/NzYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpXG4gIGNvbnN0IGFjdHVhbFR5cGUgPSB1c2VSZWY8SFRNTFBhcmFncmFwaEVsZW1lbnQ+KG51bGwpXG5cblxuICBjb25zb2xlLmxvZyhpbnB1dC5zcGxpdChcIiBcIikpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGlucHV0UmVmLmN1cnJlbnQ/LmZvY3VzKClcbiAgICB9XG4gICAgKVxuICB9LCBbXSlcbiAgY29uc3QgdGVzdFRleHQgPSBcImhlbGxvIHdvcmxkIGhvdyBhcmUgeW91IGRvaW5nIHRvZGF5XCJcblxuICBjb25zdCBjb21wYXJlVGV4dHMgPSAodGV4dDE6IHN0cmluZ1tdLCB0ZXh0Mjogc3RyaW5nW10pID0+IHtcbiAgICBjb25zdCB3cm9uZ0luZGVjZXMgPSBbXVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGV4dDEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0ZXh0MVtpXSAhPT0gdGV4dDJbaV0pIHtcbiAgICAgICAgd3JvbmdJbmRlY2VzLnB1c2goaSlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHdyb25nSW5kZWNlc1xuICB9XG5cbiAgbGV0IGNvcnJlY3QgPSBbXVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGgtc2NyZWVuIHctc2NyZWVuJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIHctMS8yIGgtMS8yJz5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC13aGl0ZSB0ZXh0LTd4bCB3LWZ1bGwgdGV4dC1jZW50ZXIgbWItNCc+VHlwZXJzPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JnLWdyYXktMzAwIHctZnVsbCBoLWZ1bGwgcC0xMiByZWxhdGl2ZSc+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSdhYnNvbHV0ZSBvcGFjaXR5LTc1Jz57dGVzdFRleHQuc3BsaXQoXCIgXCIpLm1hcCgoZWwsIGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKGlucHV0LnNwbGl0KFwiIFwiKVtrZXldID09PSBlbCkge1xuICAgICAgICAgICAgICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LWdyZWVuLTUwMCc+e2VsfSA8L3NwYW4+XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlucHV0LnNwbGl0KFwiIFwiKVtrZXldID09PSB1bmRlZmluZWQgfHwgaW5wdXQuc3BsaXQoXCIgXCIpW2tleV0gPT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1ncmF5LTUwMCc+e2VsfSA8L3NwYW4+IFxuICAgICAgICAgICAgfSAgZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9J3RleHQtcmVkLTUwMCc+e2VsfSA8L3NwYW4+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSl9PC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0nYWJzb2x1dGUgei0xMCcgcmVmPXthY3R1YWxUeXBlfT48c3BhbiBjbGFzc05hbWU9J29wYWNpdHktMCc+e2lucHV0LnNwbGl0KFwiIFwiKS5zbGljZSgwLCAtMSkuam9pbihcIiBcIil9PC9zcGFuPiA8c3BhbiBjbGFzc05hbWU9J3RleHQteWVsbG93LTUwMCBiZy1ncmF5LTMwMCc+e2lucHV0LnNwbGl0KFwiIFwiKS5maW5kTGFzdCgoKSA9PiB0cnVlKX08L3NwYW4+PC9wPlxuICAgICAgICA8L2Rpdj5cblxuXG5cbiAgICAgICAgPGlucHV0IHJlZj17aW5wdXRSZWZ9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0SW5wdXQoZS50YXJnZXQudmFsdWUpfSBjbGFzc05hbWU9J29wYWNpdHktMCBhYnNvbHV0ZScvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkhvbWUiLCJpbnB1dCIsInNldElucHV0IiwiaW5wdXRSZWYiLCJhY3R1YWxUeXBlIiwiY29uc29sZSIsImxvZyIsInNwbGl0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImN1cnJlbnQiLCJmb2N1cyIsInRlc3RUZXh0IiwiY29tcGFyZVRleHRzIiwidGV4dDEiLCJ0ZXh0MiIsIndyb25nSW5kZWNlcyIsImkiLCJsZW5ndGgiLCJwdXNoIiwiY29ycmVjdCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwicCIsIm1hcCIsImVsIiwia2V5Iiwic3BhbiIsInVuZGVmaW5lZCIsInJlZiIsInNsaWNlIiwiam9pbiIsImZpbmRMYXN0Iiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});