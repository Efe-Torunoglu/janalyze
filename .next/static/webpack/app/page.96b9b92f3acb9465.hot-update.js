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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_JishoDefinitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/JishoDefinitions */ \"(app-client)/./utils/JishoDefinitions.js\");\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/api */ \"(app-client)/./utils/api.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst ClickableWords = (param)=>{\n    let { words  } = param;\n    _s();\n    //const [popupInfo, setPopupInfo] = useState({ word: null, definitions: [], position: { top: 0, left: 0 } });\n    const [word, setWord] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [definitions, setDefinitions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [readings, setReadings] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [position, setPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const handleClick = async (inputWord, event)=>{\n        console.log(\"Clicked on: \".concat(inputWord));\n        setWord(inputWord);\n        let defResults = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_3__.getDefinition)(inputWord);\n        let parsedResults = (0,_utils_JishoDefinitions__WEBPACK_IMPORTED_MODULE_2__.JishoDefinitions)(defResults);\n        let readingsResults = (0,_utils_JishoDefinitions__WEBPACK_IMPORTED_MODULE_2__.JishoReadings)(defResults);\n        setDefinitions(parsedResults);\n        setReadings(readingsResults);\n    };\n    const handleClosePopup = ()=>{\n        setWord(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative\",\n        style: {\n            minHeight: \"200px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap gap-2\",\n                children: words.map((word, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: (e)=>handleClick(word, e),\n                        className: \"px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300\",\n                        children: word\n                    }, index, false, {\n                        fileName: \"/Users/etorun/WebstormProjects/Refactor_attempt_1/nextjs-flask/components/ClickableWords.js\",\n                        lineNumber: 34,\n                        columnNumber: 21\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/etorun/WebstormProjects/Refactor_attempt_1/nextjs-flask/components/ClickableWords.js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, undefined),\n            word && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"popup-container absolute bg-gray-200 border border-gray-300 rounded shadow-lg p-4\",\n                style: {\n                    top: 0,\n                    left: 0,\n                    width: \"300px\",\n                    maxHeight: \"400px\",\n                    overflowY: \"auto\",\n                    zIndex: 1000\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between items-center mb-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"font-bold text-lg\",\n                                children: word\n                            }, void 0, false, {\n                                fileName: \"/Users/etorun/WebstormProjects/Refactor_attempt_1/nextjs-flask/components/ClickableWords.js\",\n                                lineNumber: 56,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleClosePopup,\n                                className: \"text-gray-500 hover:text-gray-700 text-2xl\",\n                                children: \"\\xd7\"\n                            }, void 0, false, {\n                                fileName: \"/Users/etorun/WebstormProjects/Refactor_attempt_1/nextjs-flask/components/ClickableWords.js\",\n                                lineNumber: 57,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/etorun/WebstormProjects/Refactor_attempt_1/nextjs-flask/components/ClickableWords.js\",\n                        lineNumber: 55,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"border-t pt-2\",\n                        children: readings.map((def, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"mb-2\",\n                                children: [\n                                    index + 1,\n                                    \". \",\n                                    def\n                                ]\n                            }, index, true, {\n                                fileName: \"/Users/etorun/WebstormProjects/Refactor_attempt_1/nextjs-flask/components/ClickableWords.js\",\n                                lineNumber: 63,\n                                columnNumber: 29\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/etorun/WebstormProjects/Refactor_attempt_1/nextjs-flask/components/ClickableWords.js\",\n                        lineNumber: 61,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"border-t pt-2\",\n                        children: definitions.map((def, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"mb-2\",\n                                children: [\n                                    index + 1,\n                                    \". \",\n                                    def\n                                ]\n                            }, index, true, {\n                                fileName: \"/Users/etorun/WebstormProjects/Refactor_attempt_1/nextjs-flask/components/ClickableWords.js\",\n                                lineNumber: 68,\n                                columnNumber: 29\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/etorun/WebstormProjects/Refactor_attempt_1/nextjs-flask/components/ClickableWords.js\",\n                        lineNumber: 66,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/etorun/WebstormProjects/Refactor_attempt_1/nextjs-flask/components/ClickableWords.js\",\n                lineNumber: 44,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/etorun/WebstormProjects/Refactor_attempt_1/nextjs-flask/components/ClickableWords.js\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ClickableWords, \"cBP8KCVmqPTJTIQJNlSp/JQ/gp8=\");\n_c = ClickableWords;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ClickableWords);\nvar _c;\n$RefreshReg$(_c, \"ClickableWords\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9DbGlja2FibGVXb3Jkcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF3QztBQUNpQztBQUMvQjtBQUUxQyxNQUFNSyxpQkFBaUIsU0FBYztRQUFiLEVBQUVDLE1BQUssRUFBRTs7SUFFN0IsNkdBQTZHO0lBQzdHLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNRLGFBQWFDLGVBQWUsR0FBR1QsK0NBQVFBLENBQUMsRUFBRTtJQUNqRCxNQUFNLENBQUNVLFVBQVVDLFlBQVksR0FBR1gsK0NBQVFBLENBQUMsRUFBRTtJQUMzQyxNQUFNLENBQUNZLFVBQVVDLFlBQVksR0FBRWIsK0NBQVFBO0lBRXZDLE1BQU1jLGNBQWMsT0FBT0MsV0FBV0MsUUFBVTtRQUM1Q0MsUUFBUUMsR0FBRyxDQUFDLGVBQXlCLE9BQVZIO1FBRTNCUixRQUFRUTtRQUVSLElBQUlJLGFBQWEsTUFBTWhCLHlEQUFhQSxDQUFDWTtRQUNyQyxJQUFJSyxnQkFBZ0JuQix5RUFBZ0JBLENBQUNrQjtRQUNyQyxJQUFJRSxrQkFBa0JuQixzRUFBYUEsQ0FBQ2lCO1FBQ3BDVixlQUFlVztRQUVmVCxZQUFZVTtJQUNoQjtJQUVBLE1BQU1DLG1CQUFtQixJQUFNO1FBQzNCZixRQUFRO0lBQ1o7SUFFQSxxQkFDSSw4REFBQ2dCO1FBQUlDLFdBQVU7UUFBV0MsT0FBTztZQUFFQyxXQUFXO1FBQVE7OzBCQUNsRCw4REFBQ0g7Z0JBQUlDLFdBQVU7MEJBQ1ZuQixNQUFNc0IsR0FBRyxDQUFDLENBQUNyQixNQUFNc0Isc0JBQ2QsOERBQUNDO3dCQUVHQyxTQUFTLENBQUNDLElBQU1qQixZQUFZUixNQUFNeUI7d0JBQ2xDUCxXQUFVO2tDQUVUbEI7dUJBSklzQjs7Ozs7Ozs7OztZQVFoQnRCLHNCQUNHLDhEQUFDaUI7Z0JBQ0dDLFdBQVU7Z0JBQ1ZDLE9BQU87b0JBQ0hPLEtBQUs7b0JBQ0xDLE1BQU07b0JBQ05DLE9BQU87b0JBQ1BDLFdBQVc7b0JBQ1hDLFdBQVc7b0JBQ1hDLFFBQVE7Z0JBQ1o7O2tDQUVBLDhEQUFDZDt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNjO2dDQUFHZCxXQUFVOzBDQUFxQmxCOzs7Ozs7MENBQ25DLDhEQUFDdUI7Z0NBQU9DLFNBQVNSO2dDQUFrQkUsV0FBVTswQ0FBNkM7Ozs7Ozs7Ozs7OztrQ0FJOUYsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNWZCxTQUFTaUIsR0FBRyxDQUFDLENBQUNZLEtBQUtYLHNCQUNoQiw4REFBQ1k7Z0NBQWNoQixXQUFVOztvQ0FBUUksUUFBUTtvQ0FBRTtvQ0FBR1c7OytCQUF0Q1g7Ozs7Ozs7Ozs7a0NBR2hCLDhEQUFDTDt3QkFBSUMsV0FBVTtrQ0FDVmhCLFlBQVltQixHQUFHLENBQUMsQ0FBQ1ksS0FBS1gsc0JBQ25CLDhEQUFDWTtnQ0FBY2hCLFdBQVU7O29DQUFRSSxRQUFRO29DQUFFO29DQUFHVzs7K0JBQXRDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9wQztHQXRFTXhCO0tBQUFBO0FBdUVOLCtEQUFlQSxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2xpY2thYmxlV29yZHMuanM/NzZjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0ppc2hvRGVmaW5pdGlvbnMsIEppc2hvUmVhZGluZ3N9IGZyb20gXCJAL3V0aWxzL0ppc2hvRGVmaW5pdGlvbnNcIjtcbmltcG9ydCB7Z2V0RGVmaW5pdGlvbn0gZnJvbSBcIkAvdXRpbHMvYXBpXCI7XG5cbmNvbnN0IENsaWNrYWJsZVdvcmRzID0gKHsgd29yZHMgfSkgPT57XG5cbiAgICAvL2NvbnN0IFtwb3B1cEluZm8sIHNldFBvcHVwSW5mb10gPSB1c2VTdGF0ZSh7IHdvcmQ6IG51bGwsIGRlZmluaXRpb25zOiBbXSwgcG9zaXRpb246IHsgdG9wOiAwLCBsZWZ0OiAwIH0gfSk7XG4gICAgY29uc3QgW3dvcmQsIHNldFdvcmRdID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3QgW2RlZmluaXRpb25zLCBzZXREZWZpbml0aW9uc10gPSB1c2VTdGF0ZShbXSlcbiAgICBjb25zdCBbcmVhZGluZ3MsIHNldFJlYWRpbmdzXSA9IHVzZVN0YXRlKFtdKVxuICAgIGNvbnN0IFtwb3NpdGlvbiwgc2V0UG9zaXRpb25dPSB1c2VTdGF0ZSgpXG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9IGFzeW5jIChpbnB1dFdvcmQsIGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBDbGlja2VkIG9uOiAke2lucHV0V29yZH1gKTtcblxuICAgICAgICBzZXRXb3JkKGlucHV0V29yZClcblxuICAgICAgICBsZXQgZGVmUmVzdWx0cyA9IGF3YWl0IGdldERlZmluaXRpb24oaW5wdXRXb3JkKTtcbiAgICAgICAgbGV0IHBhcnNlZFJlc3VsdHMgPSBKaXNob0RlZmluaXRpb25zKGRlZlJlc3VsdHMpXG4gICAgICAgIGxldCByZWFkaW5nc1Jlc3VsdHMgPSBKaXNob1JlYWRpbmdzKGRlZlJlc3VsdHMpXG4gICAgICAgIHNldERlZmluaXRpb25zKHBhcnNlZFJlc3VsdHMpO1xuXG4gICAgICAgIHNldFJlYWRpbmdzKHJlYWRpbmdzUmVzdWx0cylcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlQ2xvc2VQb3B1cCA9ICgpID0+IHtcbiAgICAgICAgc2V0V29yZCgnJylcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiIHN0eWxlPXt7IG1pbkhlaWdodDogJzIwMHB4JyB9fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICB7d29yZHMubWFwKCh3b3JkLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGhhbmRsZUNsaWNrKHdvcmQsIGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtMiBweS0xIGJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcm91bmRlZCBob3ZlcjpiZy1ibHVlLTYwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctYmx1ZS0zMDBcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7d29yZH1cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHt3b3JkICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBvcHVwLWNvbnRhaW5lciBhYnNvbHV0ZSBiZy1ncmF5LTIwMCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQgc2hhZG93LWxnIHAtNFwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICczMDBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6ICc0MDBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvd1k6ICdhdXRvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHpJbmRleDogMTAwMFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWxnXCI+e3dvcmR9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2VQb3B1cH0gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCBob3Zlcjp0ZXh0LWdyYXktNzAwIHRleHQtMnhsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgw5dcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItdCBwdC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cmVhZGluZ3MubWFwKChkZWYsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwibWItMlwiPntpbmRleCArIDF9LiB7ZGVmfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItdCBwdC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGVmaW5pdGlvbnMubWFwKChkZWYsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwibWItMlwiPntpbmRleCArIDF9LiB7ZGVmfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQ2xpY2thYmxlV29yZHM7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJKaXNob0RlZmluaXRpb25zIiwiSmlzaG9SZWFkaW5ncyIsImdldERlZmluaXRpb24iLCJDbGlja2FibGVXb3JkcyIsIndvcmRzIiwid29yZCIsInNldFdvcmQiLCJkZWZpbml0aW9ucyIsInNldERlZmluaXRpb25zIiwicmVhZGluZ3MiLCJzZXRSZWFkaW5ncyIsInBvc2l0aW9uIiwic2V0UG9zaXRpb24iLCJoYW5kbGVDbGljayIsImlucHV0V29yZCIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsImRlZlJlc3VsdHMiLCJwYXJzZWRSZXN1bHRzIiwicmVhZGluZ3NSZXN1bHRzIiwiaGFuZGxlQ2xvc2VQb3B1cCIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwibWluSGVpZ2h0IiwibWFwIiwiaW5kZXgiLCJidXR0b24iLCJvbkNsaWNrIiwiZSIsInRvcCIsImxlZnQiLCJ3aWR0aCIsIm1heEhlaWdodCIsIm92ZXJmbG93WSIsInpJbmRleCIsImgzIiwiZGVmIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./components/ClickableWords.js\n"));

/***/ }),

/***/ "(app-client)/./utils/JishoDefinitions.js":
/*!***********************************!*\
  !*** ./utils/JishoDefinitions.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"JishoDefinitions\": function() { return /* binding */ JishoDefinitions; },\n/* harmony export */   \"JishoReadings\": function() { return /* binding */ JishoReadings; }\n/* harmony export */ });\nfunction JishoDefinitions(jishoData) {\n    if (!jishoData.data || jishoData.data.length === 0) {\n        console.log(\"No data returned from Jisho API\");\n        return \"No Jisho data found\";\n    }\n    const firstResult = jishoData.data[0];\n    // Get all senses with parts of speech and definitions\n    const sensesInfo = firstResult.senses.map((sense, index)=>{\n        const pos = sense.parts_of_speech.join(\", \") || \"N/A\";\n        const definitions = sense.english_definitions.join(\", \");\n        return \"\".concat(index + 1, \". (\").concat(pos, \") \").concat(definitions);\n    });\n    return sensesInfo;\n}\n_c = JishoDefinitions;\nfunction JishoReadings(jishoData) {\n    if (!jishoData.data || jishoData.data.length === 0) {\n        console.log(\"No data returned from Jisho API\");\n        return \"No Jisho data found\";\n    }\n    const firstResult = jishoData.data[0];\n    const readings = firstResult.japanese.map((item)=>\"\".concat(item.word || \"\", \" (\").concat(item.reading || \"\", \")\")).filter((reading)=>reading !== \" ()\");\n    return readings;\n}\n_c1 = JishoReadings;\n\nvar _c, _c1;\n$RefreshReg$(_c, \"JishoDefinitions\");\n$RefreshReg$(_c1, \"JishoReadings\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vdXRpbHMvSmlzaG9EZWZpbml0aW9ucy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLFNBQVNBLGlCQUFpQkMsU0FBUyxFQUFFO0lBQ2pDLElBQUksQ0FBQ0EsVUFBVUMsSUFBSSxJQUFJRCxVQUFVQyxJQUFJLENBQUNDLE1BQU0sS0FBSyxHQUFHO1FBQ2hEQyxRQUFRQyxHQUFHLENBQUM7UUFDWixPQUFPO0lBQ1gsQ0FBQztJQUNELE1BQU1DLGNBQWNMLFVBQVVDLElBQUksQ0FBQyxFQUFFO0lBRXJDLHNEQUFzRDtJQUN0RCxNQUFNSyxhQUFhRCxZQUFZRSxNQUFNLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxPQUFPQyxRQUFVO1FBQ3hELE1BQU1DLE1BQU1GLE1BQU1HLGVBQWUsQ0FBQ0MsSUFBSSxDQUFDLFNBQVM7UUFDaEQsTUFBTUMsY0FBY0wsTUFBTU0sbUJBQW1CLENBQUNGLElBQUksQ0FBQztRQUNuRCxPQUFPLEdBQWtCRixPQUFmRCxRQUFRLEdBQUUsT0FBYUksT0FBUkgsS0FBSSxNQUFnQixPQUFaRztJQUNyQztJQUNBLE9BQU9SO0FBQ1g7S0FkU1A7QUFnQlQsU0FBU2lCLGNBQWNoQixTQUFTLEVBQUU7SUFFOUIsSUFBSSxDQUFDQSxVQUFVQyxJQUFJLElBQUlELFVBQVVDLElBQUksQ0FBQ0MsTUFBTSxLQUFLLEdBQUc7UUFDaERDLFFBQVFDLEdBQUcsQ0FBQztRQUNaLE9BQU87SUFDWCxDQUFDO0lBQ0QsTUFBTUMsY0FBY0wsVUFBVUMsSUFBSSxDQUFDLEVBQUU7SUFFckMsTUFBTWdCLFdBQVdaLFlBQVlhLFFBQVEsQ0FDaENWLEdBQUcsQ0FBQ1csQ0FBQUEsT0FBUSxHQUF1QkEsT0FBcEJBLEtBQUtDLElBQUksSUFBSSxJQUFHLE1BQXVCLE9BQW5CRCxLQUFLRSxPQUFPLElBQUksSUFBRyxNQUN0REMsTUFBTSxDQUFDRCxDQUFBQSxVQUFXQSxZQUFZO0lBRW5DLE9BQU9KO0FBQ1g7TUFiU0Q7QUFlK0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvSmlzaG9EZWZpbml0aW9ucy5qcz80ZDA1Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIEppc2hvRGVmaW5pdGlvbnMoamlzaG9EYXRhKSB7XG4gICAgaWYgKCFqaXNob0RhdGEuZGF0YSB8fCBqaXNob0RhdGEuZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJObyBkYXRhIHJldHVybmVkIGZyb20gSmlzaG8gQVBJXCIpO1xuICAgICAgICByZXR1cm4gXCJObyBKaXNobyBkYXRhIGZvdW5kXCI7XG4gICAgfVxuICAgIGNvbnN0IGZpcnN0UmVzdWx0ID0gamlzaG9EYXRhLmRhdGFbMF07XG5cbiAgICAvLyBHZXQgYWxsIHNlbnNlcyB3aXRoIHBhcnRzIG9mIHNwZWVjaCBhbmQgZGVmaW5pdGlvbnNcbiAgICBjb25zdCBzZW5zZXNJbmZvID0gZmlyc3RSZXN1bHQuc2Vuc2VzLm1hcCgoc2Vuc2UsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHBvcyA9IHNlbnNlLnBhcnRzX29mX3NwZWVjaC5qb2luKCcsICcpIHx8ICdOL0EnO1xuICAgICAgICBjb25zdCBkZWZpbml0aW9ucyA9IHNlbnNlLmVuZ2xpc2hfZGVmaW5pdGlvbnMuam9pbignLCAnKTtcbiAgICAgICAgcmV0dXJuIGAke2luZGV4ICsgMX0uICgke3Bvc30pICR7ZGVmaW5pdGlvbnN9YDtcbiAgICB9KVxuICAgIHJldHVybiBzZW5zZXNJbmZvXG59XG5cbmZ1bmN0aW9uIEppc2hvUmVhZGluZ3MoamlzaG9EYXRhKSB7XG5cbiAgICBpZiAoIWppc2hvRGF0YS5kYXRhIHx8IGppc2hvRGF0YS5kYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk5vIGRhdGEgcmV0dXJuZWQgZnJvbSBKaXNobyBBUElcIik7XG4gICAgICAgIHJldHVybiBcIk5vIEppc2hvIGRhdGEgZm91bmRcIjtcbiAgICB9XG4gICAgY29uc3QgZmlyc3RSZXN1bHQgPSBqaXNob0RhdGEuZGF0YVswXTtcblxuICAgIGNvbnN0IHJlYWRpbmdzID0gZmlyc3RSZXN1bHQuamFwYW5lc2VcbiAgICAgICAgLm1hcChpdGVtID0+IGAke2l0ZW0ud29yZCB8fCAnJ30gKCR7aXRlbS5yZWFkaW5nIHx8ICcnfSlgKVxuICAgICAgICAuZmlsdGVyKHJlYWRpbmcgPT4gcmVhZGluZyAhPT0gJyAoKScpO1xuXG4gICAgcmV0dXJuIHJlYWRpbmdzXG59XG5cbmV4cG9ydCB7SmlzaG9EZWZpbml0aW9ucywgSmlzaG9SZWFkaW5nc30iXSwibmFtZXMiOlsiSmlzaG9EZWZpbml0aW9ucyIsImppc2hvRGF0YSIsImRhdGEiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiZmlyc3RSZXN1bHQiLCJzZW5zZXNJbmZvIiwic2Vuc2VzIiwibWFwIiwic2Vuc2UiLCJpbmRleCIsInBvcyIsInBhcnRzX29mX3NwZWVjaCIsImpvaW4iLCJkZWZpbml0aW9ucyIsImVuZ2xpc2hfZGVmaW5pdGlvbnMiLCJKaXNob1JlYWRpbmdzIiwicmVhZGluZ3MiLCJqYXBhbmVzZSIsIml0ZW0iLCJ3b3JkIiwicmVhZGluZyIsImZpbHRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./utils/JishoDefinitions.js\n"));

/***/ })

});