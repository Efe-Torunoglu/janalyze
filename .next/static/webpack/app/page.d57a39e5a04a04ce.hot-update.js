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

/***/ "(app-client)/./components/ClickableWords.js":
/*!**************************************!*\
  !*** ./components/ClickableWords.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_JishoDefinitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/JishoDefinitions */ \"(app-client)/./utils/JishoDefinitions.js\");\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/api */ \"(app-client)/./utils/api.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst ClickableWords = (param)=>{\n    let { words  } = param;\n    _s();\n    //const [popupInfo, setPopupInfo] = useState({ word: null, definitions: [], position: { top: 0, left: 0 } });\n    const [word, setWord] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [definitions, setDefinitions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [readings, setReadings] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleClick = async (inputWord, event)=>{\n        console.log(\"Clicked on: \".concat(inputWord));\n        const rect = event.target.getBoundingClientRect();\n        setWord(inputWord);\n        let defResults = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_3__.getDefinition)(inputWord);\n        let parsedResults = (0,_utils_JishoDefinitions__WEBPACK_IMPORTED_MODULE_2__.JishoDefinitions)(defResults);\n        let readingsResults = (0,_utils_JishoDefinitions__WEBPACK_IMPORTED_MODULE_2__.JishoReadings)(defResults);\n        setDefinitions(parsedResults);\n        setReadings(readingsResults);\n    };\n    const handleClosePopup = ()=>{\n        setWord(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative\",\n        style: {\n            minHeight: \"200px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap gap-2\",\n                children: words.map((word, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: (e)=>handleClick(word, e),\n                        className: \"px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300\",\n                        children: word\n                    }, index, false, {\n                        fileName: \"/Users/etorun/WebstormProjects/Refactor_attempt_1/nextjs-flask/components/ClickableWords.js\",\n                        lineNumber: 36,\n                        columnNumber: 21\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/etorun/WebstormProjects/Refactor_attempt_1/nextjs-flask/components/ClickableWords.js\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, undefined),\n            word && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full max-l: bg-gray-200 border border-gray-100 rounded shadow-lg p-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between items-center mb-2 y-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"font-bold text-lg\",\n                                children: word\n                            }, void 0, false, {\n                                fileName: \"/Users/etorun/WebstormProjects/Refactor_attempt_1/nextjs-flask/components/ClickableWords.js\",\n                                lineNumber: 51,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleClosePopup,\n                                className: \"text-gray-500 hover:text-gray-700 text-2xl\",\n                                children: \"\\xd7\"\n                            }, void 0, false, {\n                                fileName: \"/Users/etorun/WebstormProjects/Refactor_attempt_1/nextjs-flask/components/ClickableWords.js\",\n                                lineNumber: 52,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/etorun/WebstormProjects/Refactor_attempt_1/nextjs-flask/components/ClickableWords.js\",\n                        lineNumber: 50,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"border-t pt-2\",\n                        children: readings.map((def, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"mb-2\",\n                                children: [\n                                    index + 1,\n                                    \". \",\n                                    def\n                                ]\n                            }, index, true, {\n                                fileName: \"/Users/etorun/WebstormProjects/Refactor_attempt_1/nextjs-flask/components/ClickableWords.js\",\n                                lineNumber: 58,\n                                columnNumber: 29\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/etorun/WebstormProjects/Refactor_attempt_1/nextjs-flask/components/ClickableWords.js\",\n                        lineNumber: 56,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"border-t pt-2\",\n                        children: definitions.map((def, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"mb-2\",\n                                children: [\n                                    index + 1,\n                                    \". \",\n                                    def\n                                ]\n                            }, index, true, {\n                                fileName: \"/Users/etorun/WebstormProjects/Refactor_attempt_1/nextjs-flask/components/ClickableWords.js\",\n                                lineNumber: 63,\n                                columnNumber: 29\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/etorun/WebstormProjects/Refactor_attempt_1/nextjs-flask/components/ClickableWords.js\",\n                        lineNumber: 61,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/etorun/WebstormProjects/Refactor_attempt_1/nextjs-flask/components/ClickableWords.js\",\n                lineNumber: 46,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/etorun/WebstormProjects/Refactor_attempt_1/nextjs-flask/components/ClickableWords.js\",\n        lineNumber: 33,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ClickableWords, \"4EJB6kuKNYpX7IiVIHL9ai4lUMw=\");\n_c = ClickableWords;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ClickableWords);\nvar _c;\n$RefreshReg$(_c, \"ClickableWords\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9DbGlja2FibGVXb3Jkcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF3QztBQUNpQztBQUMvQjtBQUUxQyxNQUFNSyxpQkFBaUIsU0FBYztRQUFiLEVBQUVDLE1BQUssRUFBRTs7SUFFN0IsNkdBQTZHO0lBQzdHLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNRLGFBQWFDLGVBQWUsR0FBR1QsK0NBQVFBLENBQUMsRUFBRTtJQUNqRCxNQUFNLENBQUNVLFVBQVVDLFlBQVksR0FBR1gsK0NBQVFBLENBQUMsRUFBRTtJQUUzQyxNQUFNWSxjQUFjLE9BQU9DLFdBQVdDLFFBQVU7UUFDNUNDLFFBQVFDLEdBQUcsQ0FBQyxlQUF5QixPQUFWSDtRQUUzQixNQUFNSSxPQUFPSCxNQUFNSSxNQUFNLENBQUNDLHFCQUFxQjtRQUcvQ1osUUFBUU07UUFFUixJQUFJTyxhQUFhLE1BQU1qQix5REFBYUEsQ0FBQ1U7UUFDckMsSUFBSVEsZ0JBQWdCcEIseUVBQWdCQSxDQUFDbUI7UUFDckMsSUFBSUUsa0JBQWtCcEIsc0VBQWFBLENBQUNrQjtRQUVwQ1gsZUFBZVk7UUFDZlYsWUFBWVc7SUFDaEI7SUFFQSxNQUFNQyxtQkFBbUIsSUFBTTtRQUMzQmhCLFFBQVE7SUFDWjtJQUVBLHFCQUNJLDhEQUFDaUI7UUFBSUMsV0FBVTtRQUFXQyxPQUFPO1lBQUVDLFdBQVc7UUFBUTs7MEJBQ2xELDhEQUFDSDtnQkFBSUMsV0FBVTswQkFDVnBCLE1BQU11QixHQUFHLENBQUMsQ0FBQ3RCLE1BQU11QixzQkFDZCw4REFBQ0M7d0JBRUdDLFNBQVMsQ0FBQ0MsSUFBTXBCLFlBQVlOLE1BQU0wQjt3QkFDbENQLFdBQVU7a0NBRVRuQjt1QkFKSXVCOzs7Ozs7Ozs7O1lBUWhCdkIsc0JBQ0csOERBQUNrQjtnQkFDR0MsV0FBVTs7a0NBR1YsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ1E7Z0NBQUdSLFdBQVU7MENBQXFCbkI7Ozs7OzswQ0FDbkMsOERBQUN3QjtnQ0FBT0MsU0FBU1I7Z0NBQWtCRSxXQUFVOzBDQUE2Qzs7Ozs7Ozs7Ozs7O2tDQUk5Riw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ1ZmLFNBQVNrQixHQUFHLENBQUMsQ0FBQ00sS0FBS0wsc0JBQ2hCLDhEQUFDTTtnQ0FBY1YsV0FBVTs7b0NBQVFJLFFBQVE7b0NBQUU7b0NBQUdLOzsrQkFBdENMOzs7Ozs7Ozs7O2tDQUdoQiw4REFBQ0w7d0JBQUlDLFdBQVU7a0NBQ1ZqQixZQUFZb0IsR0FBRyxDQUFDLENBQUNNLEtBQUtMLHNCQUNuQiw4REFBQ007Z0NBQWNWLFdBQVU7O29DQUFRSSxRQUFRO29DQUFFO29DQUFHSzs7K0JBQXRDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9wQztHQWpFTXpCO0tBQUFBO0FBa0VOLCtEQUFlQSxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2xpY2thYmxlV29yZHMuanM/NzZjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0ppc2hvRGVmaW5pdGlvbnMsIEppc2hvUmVhZGluZ3N9IGZyb20gXCJAL3V0aWxzL0ppc2hvRGVmaW5pdGlvbnNcIjtcbmltcG9ydCB7Z2V0RGVmaW5pdGlvbn0gZnJvbSBcIkAvdXRpbHMvYXBpXCI7XG5cbmNvbnN0IENsaWNrYWJsZVdvcmRzID0gKHsgd29yZHMgfSkgPT57XG5cbiAgICAvL2NvbnN0IFtwb3B1cEluZm8sIHNldFBvcHVwSW5mb10gPSB1c2VTdGF0ZSh7IHdvcmQ6IG51bGwsIGRlZmluaXRpb25zOiBbXSwgcG9zaXRpb246IHsgdG9wOiAwLCBsZWZ0OiAwIH0gfSk7XG4gICAgY29uc3QgW3dvcmQsIHNldFdvcmRdID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3QgW2RlZmluaXRpb25zLCBzZXREZWZpbml0aW9uc10gPSB1c2VTdGF0ZShbXSlcbiAgICBjb25zdCBbcmVhZGluZ3MsIHNldFJlYWRpbmdzXSA9IHVzZVN0YXRlKFtdKVxuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSBhc3luYyAoaW5wdXRXb3JkLCBldmVudCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhgQ2xpY2tlZCBvbjogJHtpbnB1dFdvcmR9YCk7XG5cbiAgICAgICAgY29uc3QgcmVjdCA9IGV2ZW50LnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuXG4gICAgICAgIHNldFdvcmQoaW5wdXRXb3JkKVxuXG4gICAgICAgIGxldCBkZWZSZXN1bHRzID0gYXdhaXQgZ2V0RGVmaW5pdGlvbihpbnB1dFdvcmQpO1xuICAgICAgICBsZXQgcGFyc2VkUmVzdWx0cyA9IEppc2hvRGVmaW5pdGlvbnMoZGVmUmVzdWx0cylcbiAgICAgICAgbGV0IHJlYWRpbmdzUmVzdWx0cyA9IEppc2hvUmVhZGluZ3MoZGVmUmVzdWx0cylcblxuICAgICAgICBzZXREZWZpbml0aW9ucyhwYXJzZWRSZXN1bHRzKTtcbiAgICAgICAgc2V0UmVhZGluZ3MocmVhZGluZ3NSZXN1bHRzKVxuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVDbG9zZVBvcHVwID0gKCkgPT4ge1xuICAgICAgICBzZXRXb3JkKCcnKVxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCIgc3R5bGU9e3sgbWluSGVpZ2h0OiAnMjAwcHgnIH19PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBnYXAtMlwiPlxuICAgICAgICAgICAgICAgIHt3b3Jkcy5tYXAoKHdvcmQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlQ2xpY2sod29yZCwgZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC0yIHB5LTEgYmctYmx1ZS01MDAgdGV4dC13aGl0ZSByb3VuZGVkIGhvdmVyOmJnLWJsdWUtNjAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ibHVlLTMwMFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt3b3JkfVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge3dvcmQgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIG1heC1sOiBiZy1ncmF5LTIwMCBib3JkZXIgYm9yZGVyLWdyYXktMTAwXG4gICAgICAgICAgICAgICAgICAgICByb3VuZGVkIHNoYWRvdy1sZyBwLTRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgbWItMiB5LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1sZ1wiPnt3b3JkfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlUG9wdXB9IGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDAgaG92ZXI6dGV4dC1ncmF5LTcwMCB0ZXh0LTJ4bFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIMOXXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLXQgcHQtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3JlYWRpbmdzLm1hcCgoZGVmLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cIm1iLTJcIj57aW5kZXggKyAxfS4ge2RlZn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLXQgcHQtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2RlZmluaXRpb25zLm1hcCgoZGVmLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cIm1iLTJcIj57aW5kZXggKyAxfS4ge2RlZn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IENsaWNrYWJsZVdvcmRzOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiSmlzaG9EZWZpbml0aW9ucyIsIkppc2hvUmVhZGluZ3MiLCJnZXREZWZpbml0aW9uIiwiQ2xpY2thYmxlV29yZHMiLCJ3b3JkcyIsIndvcmQiLCJzZXRXb3JkIiwiZGVmaW5pdGlvbnMiLCJzZXREZWZpbml0aW9ucyIsInJlYWRpbmdzIiwic2V0UmVhZGluZ3MiLCJoYW5kbGVDbGljayIsImlucHV0V29yZCIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsInJlY3QiLCJ0YXJnZXQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJkZWZSZXN1bHRzIiwicGFyc2VkUmVzdWx0cyIsInJlYWRpbmdzUmVzdWx0cyIsImhhbmRsZUNsb3NlUG9wdXAiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsIm1pbkhlaWdodCIsIm1hcCIsImluZGV4IiwiYnV0dG9uIiwib25DbGljayIsImUiLCJoMyIsImRlZiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./components/ClickableWords.js\n"));

/***/ })

});