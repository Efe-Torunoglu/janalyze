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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst ClickableWords = (param)=>{\n    let { words  } = param;\n    _s();\n    //const [popupInfo, setPopupInfo] = useState({ word: null, definitions: [], position: { top: 0, left: 0 } });\n    const [word, setWord] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [definitions, setDefinitions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [position, setPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const handleClick = (inputWord, event)=>{\n        console.log(\"Clicked on: \".concat(inputWord));\n        setWord(inputWord);\n    //     const rect = event.currentTarget.getBoundingClientRect();\n    //     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;\n    //\n    //     setPopupInfo({\n    //         word,\n    //         definitions,\n    //         position: {\n    //             top: rect.bottom + scrollTop,\n    //             left: rect.left\n    //         }\n    //     });\n    //\n    };\n    const handleClosePopup = ()=>{\n        setWord(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative\",\n        style: {\n            minHeight: \"200px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap gap-2\",\n                children: words.map((word, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: (e)=>handleClick(word, e),\n                        className: \"px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300\",\n                        children: word\n                    }, index, false, {\n                        fileName: \"/Users/etorun/WebstormProjects/Refactor_attempt_1/nextjs-flask/components/ClickableWords.js\",\n                        lineNumber: 33,\n                        columnNumber: 21\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/etorun/WebstormProjects/Refactor_attempt_1/nextjs-flask/components/ClickableWords.js\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, undefined),\n            word && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"popup-container absolute bg-gray-200 border border-gray-300 rounded shadow-lg p-4\",\n                style: {\n                    top: \"\".concat(popupInfo.position.top, \"px\"),\n                    left: \"\".concat(popupInfo.position.left, \"px\"),\n                    width: \"300px\",\n                    maxHeight: \"400px\",\n                    overflowY: \"auto\",\n                    zIndex: 1000\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \" \",\n                            word,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/etorun/WebstormProjects/Refactor_attempt_1/nextjs-flask/components/ClickableWords.js\",\n                        lineNumber: 54,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between items-center mb-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"font-bold text-lg\",\n                                children: popupInfo.word\n                            }, void 0, false, {\n                                fileName: \"/Users/etorun/WebstormProjects/Refactor_attempt_1/nextjs-flask/components/ClickableWords.js\",\n                                lineNumber: 56,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleClosePopup,\n                                className: \"text-gray-500 hover:text-gray-700\",\n                                children: \"\\xd7\"\n                            }, void 0, false, {\n                                fileName: \"/Users/etorun/WebstormProjects/Refactor_attempt_1/nextjs-flask/components/ClickableWords.js\",\n                                lineNumber: 57,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/etorun/WebstormProjects/Refactor_attempt_1/nextjs-flask/components/ClickableWords.js\",\n                        lineNumber: 55,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"border-t pt-2\",\n                        children: popupInfo.definitions.map((def, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"mb-2\",\n                                children: [\n                                    index + 1,\n                                    \". \",\n                                    def\n                                ]\n                            }, index, true, {\n                                fileName: \"/Users/etorun/WebstormProjects/Refactor_attempt_1/nextjs-flask/components/ClickableWords.js\",\n                                lineNumber: 63,\n                                columnNumber: 29\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/etorun/WebstormProjects/Refactor_attempt_1/nextjs-flask/components/ClickableWords.js\",\n                        lineNumber: 61,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/etorun/WebstormProjects/Refactor_attempt_1/nextjs-flask/components/ClickableWords.js\",\n                lineNumber: 43,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/etorun/WebstormProjects/Refactor_attempt_1/nextjs-flask/components/ClickableWords.js\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ClickableWords, \"ZHRf+ZBC0bOjnO+eyQglf5VsFrk=\");\n_c = ClickableWords;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ClickableWords);\nvar _c;\n$RefreshReg$(_c, \"ClickableWords\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9DbGlja2FibGVXb3Jkcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBd0M7QUFDeEMsTUFBTUUsaUJBQWlCLFNBQWM7UUFBYixFQUFFQyxNQUFLLEVBQUU7O0lBRTdCLDZHQUE2RztJQUM3RyxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0osK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDSyxhQUFhQyxlQUFlLEdBQUdOLCtDQUFRQTtJQUM5QyxNQUFNLENBQUNPLFVBQVVDLFlBQVksR0FBRVIsK0NBQVFBO0lBRXZDLE1BQU1TLGNBQWMsQ0FBQ0MsV0FBVUMsUUFBVTtRQUNyQ0MsUUFBUUMsR0FBRyxDQUFDLGVBQXlCLE9BQVZIO1FBQzNCTixRQUFRTTtJQUNaLGdFQUFnRTtJQUNoRSxrRkFBa0Y7SUFDbEYsRUFBRTtJQUNGLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0Qiw0Q0FBNEM7SUFDNUMsOEJBQThCO0lBQzlCLFlBQVk7SUFDWixVQUFVO0lBQ1YsRUFBRTtJQUNGO0lBQ0EsTUFBTUksbUJBQW1CLElBQU07UUFDM0JWLFFBQVE7SUFDWjtJQUVBLHFCQUNJLDhEQUFDVztRQUFJQyxXQUFVO1FBQVdDLE9BQU87WUFBRUMsV0FBVztRQUFROzswQkFDbEQsOERBQUNIO2dCQUFJQyxXQUFVOzBCQUNWZCxNQUFNaUIsR0FBRyxDQUFDLENBQUNoQixNQUFNaUIsc0JBQ2QsOERBQUNDO3dCQUVHQyxTQUFTLENBQUNDLElBQU1kLFlBQVlOLE1BQU1vQjt3QkFDbENQLFdBQVU7a0NBRVRiO3VCQUpJaUI7Ozs7Ozs7Ozs7WUFRaEJqQixzQkFDRyw4REFBQ1k7Z0JBQ0dDLFdBQVU7Z0JBQ1ZDLE9BQU87b0JBQ0hPLEtBQUssR0FBMEIsT0FBdkJDLFVBQVVsQixRQUFRLENBQUNpQixHQUFHLEVBQUM7b0JBQy9CRSxNQUFNLEdBQTJCLE9BQXhCRCxVQUFVbEIsUUFBUSxDQUFDbUIsSUFBSSxFQUFDO29CQUNqQ0MsT0FBTztvQkFDUEMsV0FBVztvQkFDWEMsV0FBVztvQkFDWEMsUUFBUTtnQkFDWjs7a0NBRUEsOERBQUNDOzs0QkFBRTs0QkFBRTVCOzRCQUFLOzs7Ozs7O2tDQUNWLDhEQUFDWTt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNnQjtnQ0FBR2hCLFdBQVU7MENBQXFCUyxVQUFVdEIsSUFBSTs7Ozs7OzBDQUNqRCw4REFBQ2tCO2dDQUFPQyxTQUFTUjtnQ0FBa0JFLFdBQVU7MENBQW9DOzs7Ozs7Ozs7Ozs7a0NBSXJGLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDVlMsVUFBVXBCLFdBQVcsQ0FBQ2MsR0FBRyxDQUFDLENBQUNjLEtBQUtiLHNCQUM3Qiw4REFBQ1c7Z0NBQWNmLFdBQVU7O29DQUFRSSxRQUFRO29DQUFFO29DQUFHYTs7K0JBQXRDYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9wQztHQXBFTW5CO0tBQUFBO0FBcUVOLCtEQUFlQSxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2xpY2thYmxlV29yZHMuanM/NzZjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5jb25zdCBDbGlja2FibGVXb3JkcyA9ICh7IHdvcmRzIH0pID0+e1xuXG4gICAgLy9jb25zdCBbcG9wdXBJbmZvLCBzZXRQb3B1cEluZm9dID0gdXNlU3RhdGUoeyB3b3JkOiBudWxsLCBkZWZpbml0aW9uczogW10sIHBvc2l0aW9uOiB7IHRvcDogMCwgbGVmdDogMCB9IH0pO1xuICAgIGNvbnN0IFt3b3JkLCBzZXRXb3JkXSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IFtkZWZpbml0aW9ucywgc2V0RGVmaW5pdGlvbnNdID0gdXNlU3RhdGUoKVxuICAgIGNvbnN0IFtwb3NpdGlvbiwgc2V0UG9zaXRpb25dPSB1c2VTdGF0ZSgpXG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChpbnB1dFdvcmQsZXZlbnQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYENsaWNrZWQgb246ICR7aW5wdXRXb3JkfWApO1xuICAgICAgICBzZXRXb3JkKGlucHV0V29yZClcbiAgICAvLyAgICAgY29uc3QgcmVjdCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgLy8gICAgIGNvbnN0IHNjcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgIC8vXG4gICAgLy8gICAgIHNldFBvcHVwSW5mbyh7XG4gICAgLy8gICAgICAgICB3b3JkLFxuICAgIC8vICAgICAgICAgZGVmaW5pdGlvbnMsXG4gICAgLy8gICAgICAgICBwb3NpdGlvbjoge1xuICAgIC8vICAgICAgICAgICAgIHRvcDogcmVjdC5ib3R0b20gKyBzY3JvbGxUb3AsXG4gICAgLy8gICAgICAgICAgICAgbGVmdDogcmVjdC5sZWZ0XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH0pO1xuICAgIC8vXG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVDbG9zZVBvcHVwID0gKCkgPT4ge1xuICAgICAgICBzZXRXb3JkKCcnKVxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCIgc3R5bGU9e3sgbWluSGVpZ2h0OiAnMjAwcHgnIH19PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBnYXAtMlwiPlxuICAgICAgICAgICAgICAgIHt3b3Jkcy5tYXAoKHdvcmQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlQ2xpY2sod29yZCwgZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC0yIHB5LTEgYmctYmx1ZS01MDAgdGV4dC13aGl0ZSByb3VuZGVkIGhvdmVyOmJnLWJsdWUtNjAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ibHVlLTMwMFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt3b3JkfVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge3dvcmQgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicG9wdXAtY29udGFpbmVyIGFic29sdXRlIGJnLWdyYXktMjAwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZCBzaGFkb3ctbGcgcC00XCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogYCR7cG9wdXBJbmZvLnBvc2l0aW9uLnRvcH1weGAsXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBgJHtwb3B1cEluZm8ucG9zaXRpb24ubGVmdH1weGAsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzMwMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogJzQwMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93WTogJ2F1dG8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgekluZGV4OiAxMDAwXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8cD4ge3dvcmR9IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWxnXCI+e3BvcHVwSW5mby53b3JkfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlUG9wdXB9IGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDAgaG92ZXI6dGV4dC1ncmF5LTcwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIMOXXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLXQgcHQtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3BvcHVwSW5mby5kZWZpbml0aW9ucy5tYXAoKGRlZiwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJtYi0yXCI+e2luZGV4ICsgMX0uIHtkZWZ9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBDbGlja2FibGVXb3JkczsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkNsaWNrYWJsZVdvcmRzIiwid29yZHMiLCJ3b3JkIiwic2V0V29yZCIsImRlZmluaXRpb25zIiwic2V0RGVmaW5pdGlvbnMiLCJwb3NpdGlvbiIsInNldFBvc2l0aW9uIiwiaGFuZGxlQ2xpY2siLCJpbnB1dFdvcmQiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDbG9zZVBvcHVwIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJtaW5IZWlnaHQiLCJtYXAiLCJpbmRleCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJlIiwidG9wIiwicG9wdXBJbmZvIiwibGVmdCIsIndpZHRoIiwibWF4SGVpZ2h0Iiwib3ZlcmZsb3dZIiwiekluZGV4IiwicCIsImgzIiwiZGVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./components/ClickableWords.js\n"));

/***/ })

});