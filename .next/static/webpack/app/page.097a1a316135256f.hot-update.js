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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const actualType = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    console.log(input.split(\" \"));\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"click\", ()=>{\n            var _inputRef_current;\n            (_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.focus();\n        });\n    }, []);\n    const testText = \"hello world how are you doing today\";\n    const compareTexts = (text1, text2)=>{\n        const wrongIndeces = [];\n        for(let i = 0; i < text1.length; i++){\n            if (text1[i] !== text2[i]) {\n                wrongIndeces.push(i);\n            }\n        }\n        return wrongIndeces;\n    };\n    let correct = [];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center items-center h-screen w-screen\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col w-1/2 h-1/2\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-white text-7xl w-full text-center mb-4\",\n                    children: \"Typers\"\n                }, void 0, false, {\n                    fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-gray-300 w-full h-full p-12 relative\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"absolute opacity-75\",\n                            children: testText.split(\" \").map((el, key)=>{\n                                if (input.split(\" \")[key] === el) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-green-500\",\n                                        children: [\n                                            el,\n                                            \" \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 22\n                                    }, this);\n                                } else if (input.split(\" \")[key] === undefined || input.split(\" \")[key] === \"\" || testText.match(input.split(\" \")[key])) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-gray-500\",\n                                        children: [\n                                            el,\n                                            \" \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 22\n                                    }, this);\n                                } else {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-red-500\",\n                                        children: [\n                                            el,\n                                            \" \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 22\n                                    }, this);\n                                }\n                            })\n                        }, void 0, false, {\n                            fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"absolute z-10\",\n                            ref: actualType,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"opacity-0\"\n                                }, void 0, false, {\n                                    fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 57\n                                }, this),\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-yellow-500 bg-gray-300\",\n                                    children: input.split(\" \").findLast(()=>true)\n                                }, void 0, false, {\n                                    fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 93\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    ref: inputRef,\n                    onChange: (e)=>setInput(e.target.value),\n                    className: \"opacity-0 absolute\"\n                }, void 0, false, {\n                    fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/jakub/Documents/webProjects/+CURRENT/typingtest/app/page.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"UQyPuHS4UDj3AuT04d8eZrkG+YQ=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFbUQ7QUFFcEMsU0FBU0c7O0lBQ3RCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHSCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNSSxXQUFXTCw2Q0FBTUEsQ0FBbUI7SUFDMUMsTUFBTU0sYUFBYU4sNkNBQU1BLENBQXVCO0lBR2hETyxRQUFRQyxHQUFHLENBQUNMLE1BQU1NLEtBQUssQ0FBQztJQUV4QlYsZ0RBQVNBLENBQUM7UUFDUlcsT0FBT0MsZ0JBQWdCLENBQUMsU0FBUztnQkFDL0JOO2FBQUFBLG9CQUFBQSxTQUFTTyxPQUFPLGNBQWhCUCx3Q0FBQUEsa0JBQWtCUSxLQUFLO1FBQ3pCO0lBRUYsR0FBRyxFQUFFO0lBQ0wsTUFBTUMsV0FBVztJQUVqQixNQUFNQyxlQUFlLENBQUNDLE9BQWlCQztRQUNyQyxNQUFNQyxlQUFlLEVBQUU7UUFDdkIsSUFBSyxJQUFJQyxJQUFJLEdBQUdBLElBQUlILE1BQU1JLE1BQU0sRUFBRUQsSUFBSztZQUNyQyxJQUFJSCxLQUFLLENBQUNHLEVBQUUsS0FBS0YsS0FBSyxDQUFDRSxFQUFFLEVBQUU7Z0JBQ3pCRCxhQUFhRyxJQUFJLENBQUNGO1lBQ3BCO1FBQ0Y7UUFDQSxPQUFPRDtJQUNUO0lBRUEsSUFBSUksVUFBVSxFQUFFO0lBRWhCLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0M7b0JBQUdELFdBQVU7OEJBQThDOzs7Ozs7OEJBQzVELDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNFOzRCQUFFRixXQUFVO3NDQUF1QlYsU0FBU0wsS0FBSyxDQUFDLEtBQUtrQixHQUFHLENBQUMsQ0FBQ0MsSUFBSUM7Z0NBQy9ELElBQUkxQixNQUFNTSxLQUFLLENBQUMsSUFBSSxDQUFDb0IsSUFBSSxLQUFLRCxJQUFJO29DQUNoQyxxQkFBTyw4REFBQ0U7d0NBQUtOLFdBQVU7OzRDQUFrQkk7NENBQUc7Ozs7Ozs7Z0NBQzlDLE9BQU8sSUFBSXpCLE1BQU1NLEtBQUssQ0FBQyxJQUFJLENBQUNvQixJQUFJLEtBQUtFLGFBQWE1QixNQUFNTSxLQUFLLENBQUMsSUFBSSxDQUFDb0IsSUFBSSxLQUFLLE1BQU1mLFNBQVNrQixLQUFLLENBQUM3QixNQUFNTSxLQUFLLENBQUMsSUFBSSxDQUFDb0IsSUFBSSxHQUFHO29DQUN2SCxxQkFBTyw4REFBQ0M7d0NBQUtOLFdBQVU7OzRDQUFpQkk7NENBQUc7Ozs7Ozs7Z0NBQzdDLE9BQU87b0NBQ0wscUJBQU8sOERBQUNFO3dDQUFLTixXQUFVOzs0Q0FBZ0JJOzRDQUFHOzs7Ozs7O2dDQUM1Qzs0QkFDRjs7Ozs7O3NDQUNBLDhEQUFDRjs0QkFBRUYsV0FBVTs0QkFBZ0JTLEtBQUszQjs7OENBQVksOERBQUN3QjtvQ0FBS04sV0FBVTs7Ozs7O2dDQUFtQjs4Q0FBQyw4REFBQ007b0NBQUtOLFdBQVU7OENBQStCckIsTUFBTU0sS0FBSyxDQUFDLEtBQUt5QixRQUFRLENBQUMsSUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUtuSyw4REFBQy9CO29CQUFNOEIsS0FBSzVCO29CQUFVOEIsVUFBVSxDQUFDQyxJQUFNaEMsU0FBU2dDLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztvQkFBR2QsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJbkY7R0FuRHdCdEI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UudHN4Pzc2MDMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKVxuICBjb25zdCBhY3R1YWxUeXBlID0gdXNlUmVmPEhUTUxQYXJhZ3JhcGhFbGVtZW50PihudWxsKVxuXG5cbiAgY29uc29sZS5sb2coaW5wdXQuc3BsaXQoXCIgXCIpKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBpbnB1dFJlZi5jdXJyZW50Py5mb2N1cygpXG4gICAgfVxuICAgIClcbiAgfSwgW10pXG4gIGNvbnN0IHRlc3RUZXh0ID0gXCJoZWxsbyB3b3JsZCBob3cgYXJlIHlvdSBkb2luZyB0b2RheVwiXG5cbiAgY29uc3QgY29tcGFyZVRleHRzID0gKHRleHQxOiBzdHJpbmdbXSwgdGV4dDI6IHN0cmluZ1tdKSA9PiB7XG4gICAgY29uc3Qgd3JvbmdJbmRlY2VzID0gW11cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRleHQxLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGV4dDFbaV0gIT09IHRleHQyW2ldKSB7XG4gICAgICAgIHdyb25nSW5kZWNlcy5wdXNoKGkpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB3cm9uZ0luZGVjZXNcbiAgfVxuXG4gIGxldCBjb3JyZWN0ID0gW11cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBoLXNjcmVlbiB3LXNjcmVlbic+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCB3LTEvMiBoLTEvMic+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtd2hpdGUgdGV4dC03eGwgdy1mdWxsIHRleHQtY2VudGVyIG1iLTQnPlR5cGVyczwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiZy1ncmF5LTMwMCB3LWZ1bGwgaC1mdWxsIHAtMTIgcmVsYXRpdmUnPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0nYWJzb2x1dGUgb3BhY2l0eS03NSc+e3Rlc3RUZXh0LnNwbGl0KFwiIFwiKS5tYXAoKGVsLCBrZXkpID0+IHtcbiAgICAgICAgICAgIGlmIChpbnB1dC5zcGxpdChcIiBcIilba2V5XSA9PT0gZWwpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1ncmVlbi01MDAnPntlbH0gPC9zcGFuPlxuICAgICAgICAgICAgfSBlbHNlIGlmIChpbnB1dC5zcGxpdChcIiBcIilba2V5XSA9PT0gdW5kZWZpbmVkIHx8IGlucHV0LnNwbGl0KFwiIFwiKVtrZXldID09PSBcIlwiIHx8IHRlc3RUZXh0Lm1hdGNoKGlucHV0LnNwbGl0KFwiIFwiKVtrZXldKSkge1xuICAgICAgICAgICAgICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LWdyYXktNTAwJz57ZWx9IDwvc3Bhbj4gXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LXJlZC01MDAnPntlbH0gPC9zcGFuPlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pfTwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9J2Fic29sdXRlIHotMTAnIHJlZj17YWN0dWFsVHlwZX0+PHNwYW4gY2xhc3NOYW1lPSdvcGFjaXR5LTAnPjwvc3Bhbj4gPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LXllbGxvdy01MDAgYmctZ3JheS0zMDAnPntpbnB1dC5zcGxpdChcIiBcIikuZmluZExhc3QoKCkgPT4gdHJ1ZSl9PC9zcGFuPjwvcD5cbiAgICAgICAgPC9kaXY+XG5cblxuXG4gICAgICAgIDxpbnB1dCByZWY9e2lucHV0UmVmfSBvbkNoYW5nZT17KGUpID0+IHNldElucHV0KGUudGFyZ2V0LnZhbHVlKX0gY2xhc3NOYW1lPSdvcGFjaXR5LTAgYWJzb2x1dGUnLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJIb21lIiwiaW5wdXQiLCJzZXRJbnB1dCIsImlucHV0UmVmIiwiYWN0dWFsVHlwZSIsImNvbnNvbGUiLCJsb2ciLCJzcGxpdCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjdXJyZW50IiwiZm9jdXMiLCJ0ZXN0VGV4dCIsImNvbXBhcmVUZXh0cyIsInRleHQxIiwidGV4dDIiLCJ3cm9uZ0luZGVjZXMiLCJpIiwibGVuZ3RoIiwicHVzaCIsImNvcnJlY3QiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInAiLCJtYXAiLCJlbCIsImtleSIsInNwYW4iLCJ1bmRlZmluZWQiLCJtYXRjaCIsInJlZiIsImZpbmRMYXN0Iiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});