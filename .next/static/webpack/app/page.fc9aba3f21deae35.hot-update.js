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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst ClickableWords = (param)=>{\n    let { words  } = param;\n    _s();\n    //const [popupInfo, setPopupInfo] = useState({ word: null, definitions: [], position: { top: 0, left: 0 } });\n    const [word, setWord] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [definitions, setDefinitions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [position, setPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const handleClick = (inputWord, event)=>{\n        console.log(\"Clicked on: \".concat(inputWord));\n        setWord(inputWord);\n    //     const rect = event.currentTarget.getBoundingClientRect();\n    //     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;\n    //\n    //     setPopupInfo({\n    //         word,\n    //         definitions,\n    //         position: {\n    //             top: rect.bottom + scrollTop,\n    //             left: rect.left\n    //         }\n    //     });\n    //\n    };\n    const handleClosePopup = ()=>{\n        setWord(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative\",\n        style: {\n            minHeight: \"200px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap gap-2\",\n                children: words.map((word, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: (e)=>handleClick(word, e),\n                        className: \"px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300\",\n                        children: word\n                    }, index, false, {\n                        fileName: \"/Users/etorun/WebstormProjects/Refactor_attempt_1/nextjs-flask/components/ClickableWords.js\",\n                        lineNumber: 33,\n                        columnNumber: 21\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/etorun/WebstormProjects/Refactor_attempt_1/nextjs-flask/components/ClickableWords.js\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, undefined),\n            word && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"popup-container absolute bg-gray-200 border border-gray-300 rounded shadow-lg p-4\",\n                style: {\n                    top: 0,\n                    left: 0,\n                    width: \"300px\",\n                    maxHeight: \"400px\",\n                    overflowY: \"auto\",\n                    zIndex: 1000\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \" \",\n                            word,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/etorun/WebstormProjects/Refactor_attempt_1/nextjs-flask/components/ClickableWords.js\",\n                        lineNumber: 54,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between items-center mb-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"font-bold text-lg\",\n                                children: popupInfo.word\n                            }, void 0, false, {\n                                fileName: \"/Users/etorun/WebstormProjects/Refactor_attempt_1/nextjs-flask/components/ClickableWords.js\",\n                                lineNumber: 56,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleClosePopup,\n                                className: \"text-gray-500 hover:text-gray-700\",\n                                children: \"\\xd7\"\n                            }, void 0, false, {\n                                fileName: \"/Users/etorun/WebstormProjects/Refactor_attempt_1/nextjs-flask/components/ClickableWords.js\",\n                                lineNumber: 57,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/etorun/WebstormProjects/Refactor_attempt_1/nextjs-flask/components/ClickableWords.js\",\n                        lineNumber: 55,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"border-t pt-2\",\n                        children: popupInfo.definitions.map((def, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"mb-2\",\n                                children: [\n                                    index + 1,\n                                    \". \",\n                                    def\n                                ]\n                            }, index, true, {\n                                fileName: \"/Users/etorun/WebstormProjects/Refactor_attempt_1/nextjs-flask/components/ClickableWords.js\",\n                                lineNumber: 63,\n                                columnNumber: 29\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/etorun/WebstormProjects/Refactor_attempt_1/nextjs-flask/components/ClickableWords.js\",\n                        lineNumber: 61,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/etorun/WebstormProjects/Refactor_attempt_1/nextjs-flask/components/ClickableWords.js\",\n                lineNumber: 43,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/etorun/WebstormProjects/Refactor_attempt_1/nextjs-flask/components/ClickableWords.js\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ClickableWords, \"ZHRf+ZBC0bOjnO+eyQglf5VsFrk=\");\n_c = ClickableWords;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ClickableWords);\nvar _c;\n$RefreshReg$(_c, \"ClickableWords\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9DbGlja2FibGVXb3Jkcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBd0M7QUFDeEMsTUFBTUUsaUJBQWlCLFNBQWM7UUFBYixFQUFFQyxNQUFLLEVBQUU7O0lBRTdCLDZHQUE2RztJQUM3RyxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0osK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDSyxhQUFhQyxlQUFlLEdBQUdOLCtDQUFRQTtJQUM5QyxNQUFNLENBQUNPLFVBQVVDLFlBQVksR0FBRVIsK0NBQVFBO0lBRXZDLE1BQU1TLGNBQWMsQ0FBQ0MsV0FBVUMsUUFBVTtRQUNyQ0MsUUFBUUMsR0FBRyxDQUFDLGVBQXlCLE9BQVZIO1FBQzNCTixRQUFRTTtJQUNaLGdFQUFnRTtJQUNoRSxrRkFBa0Y7SUFDbEYsRUFBRTtJQUNGLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0Qiw0Q0FBNEM7SUFDNUMsOEJBQThCO0lBQzlCLFlBQVk7SUFDWixVQUFVO0lBQ1YsRUFBRTtJQUNGO0lBQ0EsTUFBTUksbUJBQW1CLElBQU07UUFDM0JWLFFBQVE7SUFDWjtJQUVBLHFCQUNJLDhEQUFDVztRQUFJQyxXQUFVO1FBQVdDLE9BQU87WUFBRUMsV0FBVztRQUFROzswQkFDbEQsOERBQUNIO2dCQUFJQyxXQUFVOzBCQUNWZCxNQUFNaUIsR0FBRyxDQUFDLENBQUNoQixNQUFNaUIsc0JBQ2QsOERBQUNDO3dCQUVHQyxTQUFTLENBQUNDLElBQU1kLFlBQVlOLE1BQU1vQjt3QkFDbENQLFdBQVU7a0NBRVRiO3VCQUpJaUI7Ozs7Ozs7Ozs7WUFRaEJqQixzQkFDRyw4REFBQ1k7Z0JBQ0dDLFdBQVU7Z0JBQ1ZDLE9BQU87b0JBQ0hPLEtBQUs7b0JBQ0xDLE1BQU07b0JBQ05DLE9BQU87b0JBQ1BDLFdBQVc7b0JBQ1hDLFdBQVc7b0JBQ1hDLFFBQVE7Z0JBQ1o7O2tDQUVBLDhEQUFDQzs7NEJBQUU7NEJBQUUzQjs0QkFBSzs7Ozs7OztrQ0FDViw4REFBQ1k7d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDZTtnQ0FBR2YsV0FBVTswQ0FBcUJnQixVQUFVN0IsSUFBSTs7Ozs7OzBDQUNqRCw4REFBQ2tCO2dDQUFPQyxTQUFTUjtnQ0FBa0JFLFdBQVU7MENBQW9DOzs7Ozs7Ozs7Ozs7a0NBSXJGLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDVmdCLFVBQVUzQixXQUFXLENBQUNjLEdBQUcsQ0FBQyxDQUFDYyxLQUFLYixzQkFDN0IsOERBQUNVO2dDQUFjZCxXQUFVOztvQ0FBUUksUUFBUTtvQ0FBRTtvQ0FBR2E7OytCQUF0Q2I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPcEM7R0FwRU1uQjtLQUFBQTtBQXFFTiwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NsaWNrYWJsZVdvcmRzLmpzPzc2YzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuY29uc3QgQ2xpY2thYmxlV29yZHMgPSAoeyB3b3JkcyB9KSA9PntcblxuICAgIC8vY29uc3QgW3BvcHVwSW5mbywgc2V0UG9wdXBJbmZvXSA9IHVzZVN0YXRlKHsgd29yZDogbnVsbCwgZGVmaW5pdGlvbnM6IFtdLCBwb3NpdGlvbjogeyB0b3A6IDAsIGxlZnQ6IDAgfSB9KTtcbiAgICBjb25zdCBbd29yZCwgc2V0V29yZF0gPSB1c2VTdGF0ZSgnJylcbiAgICBjb25zdCBbZGVmaW5pdGlvbnMsIHNldERlZmluaXRpb25zXSA9IHVzZVN0YXRlKClcbiAgICBjb25zdCBbcG9zaXRpb24sIHNldFBvc2l0aW9uXT0gdXNlU3RhdGUoKVxuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoaW5wdXRXb3JkLGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBDbGlja2VkIG9uOiAke2lucHV0V29yZH1gKTtcbiAgICAgICAgc2V0V29yZChpbnB1dFdvcmQpXG4gICAgLy8gICAgIGNvbnN0IHJlY3QgPSBldmVudC5jdXJyZW50VGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIC8vICAgICBjb25zdCBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICAvL1xuICAgIC8vICAgICBzZXRQb3B1cEluZm8oe1xuICAgIC8vICAgICAgICAgd29yZCxcbiAgICAvLyAgICAgICAgIGRlZmluaXRpb25zLFxuICAgIC8vICAgICAgICAgcG9zaXRpb246IHtcbiAgICAvLyAgICAgICAgICAgICB0b3A6IHJlY3QuYm90dG9tICsgc2Nyb2xsVG9wLFxuICAgIC8vICAgICAgICAgICAgIGxlZnQ6IHJlY3QubGVmdFxuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9KTtcbiAgICAvL1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlQ2xvc2VQb3B1cCA9ICgpID0+IHtcbiAgICAgICAgc2V0V29yZCgnJylcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiIHN0eWxlPXt7IG1pbkhlaWdodDogJzIwMHB4JyB9fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICB7d29yZHMubWFwKCh3b3JkLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGhhbmRsZUNsaWNrKHdvcmQsIGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtMiBweS0xIGJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcm91bmRlZCBob3ZlcjpiZy1ibHVlLTYwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctYmx1ZS0zMDBcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7d29yZH1cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHt3b3JkICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBvcHVwLWNvbnRhaW5lciBhYnNvbHV0ZSBiZy1ncmF5LTIwMCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQgc2hhZG93LWxnIHAtNFwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICczMDBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6ICc0MDBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvd1k6ICdhdXRvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHpJbmRleDogMTAwMFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHA+IHt3b3JkfSA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1sZ1wiPntwb3B1cEluZm8ud29yZH08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZVBvcHVwfSBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIGhvdmVyOnRleHQtZ3JheS03MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDDl1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci10IHB0LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwb3B1cEluZm8uZGVmaW5pdGlvbnMubWFwKChkZWYsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwibWItMlwiPntpbmRleCArIDF9LiB7ZGVmfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQ2xpY2thYmxlV29yZHM7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJDbGlja2FibGVXb3JkcyIsIndvcmRzIiwid29yZCIsInNldFdvcmQiLCJkZWZpbml0aW9ucyIsInNldERlZmluaXRpb25zIiwicG9zaXRpb24iLCJzZXRQb3NpdGlvbiIsImhhbmRsZUNsaWNrIiwiaW5wdXRXb3JkIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2xvc2VQb3B1cCIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwibWluSGVpZ2h0IiwibWFwIiwiaW5kZXgiLCJidXR0b24iLCJvbkNsaWNrIiwiZSIsInRvcCIsImxlZnQiLCJ3aWR0aCIsIm1heEhlaWdodCIsIm92ZXJmbG93WSIsInpJbmRleCIsInAiLCJoMyIsInBvcHVwSW5mbyIsImRlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./components/ClickableWords.js\n"));

/***/ })

});