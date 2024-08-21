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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_JishoDefinitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/JishoDefinitions */ \"(app-client)/./utils/JishoDefinitions.js\");\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/api */ \"(app-client)/./utils/api.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst ClickableWords = (param)=>{\n    let { words  } = param;\n    _s();\n    //const [popupInfo, setPopupInfo] = useState({ word: null, definitions: [], position: { top: 0, left: 0 } });\n    const [word, setWord] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [definitions, setDefinitions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [readings, setReadings] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [position, setPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        top: 0,\n        left: 0\n    });\n    const handleClick = async (inputWord, event)=>{\n        console.log(\"Clicked on: \".concat(inputWord));\n        const rect = event.target.getBoundingClientRect();\n        setPopupPosition({\n            top: rect.bottom + window.scrollY,\n            left: rect.left + window.scrollX\n        });\n        setWord(inputWord);\n        let defResults = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_3__.getDefinition)(inputWord);\n        let parsedResults = (0,_utils_JishoDefinitions__WEBPACK_IMPORTED_MODULE_2__.JishoDefinitions)(defResults);\n        let readingsResults = (0,_utils_JishoDefinitions__WEBPACK_IMPORTED_MODULE_2__.JishoReadings)(defResults);\n        setDefinitions(parsedResults);\n        setReadings(readingsResults);\n    };\n    const handleClosePopup = ()=>{\n        setWord(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative\",\n        style: {\n            minHeight: \"200px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap gap-2\",\n                children: words.map((word, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: (e)=>handleClick(word, e),\n                        className: \"px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300\",\n                        children: word\n                    }, index, false, {\n                        fileName: \"/Users/etorun/WebstormProjects/Refactor_attempt_1/nextjs-flask/components/ClickableWords.js\",\n                        lineNumber: 41,\n                        columnNumber: 21\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/etorun/WebstormProjects/Refactor_attempt_1/nextjs-flask/components/ClickableWords.js\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, undefined),\n            word && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"popup-container absolute bg-gray-200 border border-gray-300 rounded shadow-lg p-4\",\n                style: {\n                    top: \"\".concat(popupPosition.top, \"px\"),\n                    left: \"\".concat(popupPosition.left, \"px\"),\n                    width: \"300px\",\n                    maxHeight: \"400px\",\n                    overflowY: \"auto\",\n                    zIndex: 1000\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between items-center mb-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"font-bold text-lg\",\n                                children: word\n                            }, void 0, false, {\n                                fileName: \"/Users/etorun/WebstormProjects/Refactor_attempt_1/nextjs-flask/components/ClickableWords.js\",\n                                lineNumber: 63,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleClosePopup,\n                                className: \"text-gray-500 hover:text-gray-700 text-2xl\",\n                                children: \"\\xd7\"\n                            }, void 0, false, {\n                                fileName: \"/Users/etorun/WebstormProjects/Refactor_attempt_1/nextjs-flask/components/ClickableWords.js\",\n                                lineNumber: 64,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/etorun/WebstormProjects/Refactor_attempt_1/nextjs-flask/components/ClickableWords.js\",\n                        lineNumber: 62,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"border-t pt-2\",\n                        children: readings.map((def, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"mb-2\",\n                                children: [\n                                    index + 1,\n                                    \". \",\n                                    def\n                                ]\n                            }, index, true, {\n                                fileName: \"/Users/etorun/WebstormProjects/Refactor_attempt_1/nextjs-flask/components/ClickableWords.js\",\n                                lineNumber: 70,\n                                columnNumber: 29\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/etorun/WebstormProjects/Refactor_attempt_1/nextjs-flask/components/ClickableWords.js\",\n                        lineNumber: 68,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"border-t pt-2\",\n                        children: definitions.map((def, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"mb-2\",\n                                children: [\n                                    index + 1,\n                                    \". \",\n                                    def\n                                ]\n                            }, index, true, {\n                                fileName: \"/Users/etorun/WebstormProjects/Refactor_attempt_1/nextjs-flask/components/ClickableWords.js\",\n                                lineNumber: 75,\n                                columnNumber: 29\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/etorun/WebstormProjects/Refactor_attempt_1/nextjs-flask/components/ClickableWords.js\",\n                        lineNumber: 73,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/etorun/WebstormProjects/Refactor_attempt_1/nextjs-flask/components/ClickableWords.js\",\n                lineNumber: 51,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/etorun/WebstormProjects/Refactor_attempt_1/nextjs-flask/components/ClickableWords.js\",\n        lineNumber: 38,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ClickableWords, \"nMbves1GCT+acrlefBvDnRzFeIo=\");\n_c = ClickableWords;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ClickableWords);\nvar _c;\n$RefreshReg$(_c, \"ClickableWords\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9DbGlja2FibGVXb3Jkcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF3QztBQUNpQztBQUMvQjtBQUUxQyxNQUFNSyxpQkFBaUIsU0FBYztRQUFiLEVBQUVDLE1BQUssRUFBRTs7SUFFN0IsNkdBQTZHO0lBQzdHLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNRLGFBQWFDLGVBQWUsR0FBR1QsK0NBQVFBLENBQUMsRUFBRTtJQUNqRCxNQUFNLENBQUNVLFVBQVVDLFlBQVksR0FBR1gsK0NBQVFBLENBQUMsRUFBRTtJQUMzQyxNQUFNLENBQUNZLFVBQVVDLFlBQVksR0FBRWIsK0NBQVFBLENBQUM7UUFBRWMsS0FBSztRQUFHQyxNQUFNO0lBQUU7SUFFMUQsTUFBTUMsY0FBYyxPQUFPQyxXQUFXQyxRQUFVO1FBQzVDQyxRQUFRQyxHQUFHLENBQUMsZUFBeUIsT0FBVkg7UUFFM0IsTUFBTUksT0FBT0gsTUFBTUksTUFBTSxDQUFDQyxxQkFBcUI7UUFFL0NDLGlCQUFpQjtZQUNiVixLQUFLTyxLQUFLSSxNQUFNLEdBQUdDLE9BQU9DLE9BQU87WUFDakNaLE1BQU1NLEtBQUtOLElBQUksR0FBR1csT0FBT0UsT0FBTztRQUNwQztRQUVBckIsUUFBUVU7UUFFUixJQUFJWSxhQUFhLE1BQU0xQix5REFBYUEsQ0FBQ2M7UUFDckMsSUFBSWEsZ0JBQWdCN0IseUVBQWdCQSxDQUFDNEI7UUFDckMsSUFBSUUsa0JBQWtCN0Isc0VBQWFBLENBQUMyQjtRQUVwQ3BCLGVBQWVxQjtRQUNmbkIsWUFBWW9CO0lBQ2hCO0lBRUEsTUFBTUMsbUJBQW1CLElBQU07UUFDM0J6QixRQUFRO0lBQ1o7SUFFQSxxQkFDSSw4REFBQzBCO1FBQUlDLFdBQVU7UUFBV0MsT0FBTztZQUFFQyxXQUFXO1FBQVE7OzBCQUNsRCw4REFBQ0g7Z0JBQUlDLFdBQVU7MEJBQ1Y3QixNQUFNZ0MsR0FBRyxDQUFDLENBQUMvQixNQUFNZ0Msc0JBQ2QsOERBQUNDO3dCQUVHQyxTQUFTLENBQUNDLElBQU16QixZQUFZVixNQUFNbUM7d0JBQ2xDUCxXQUFVO2tDQUVUNUI7dUJBSklnQzs7Ozs7Ozs7OztZQVFoQmhDLHNCQUNHLDhEQUFDMkI7Z0JBQ0dDLFdBQVU7Z0JBQ1ZDLE9BQU87b0JBQ0hyQixLQUFLLEdBQXFCLE9BQWxCNEIsY0FBYzVCLEdBQUcsRUFBQztvQkFDMUJDLE1BQU0sR0FBc0IsT0FBbkIyQixjQUFjM0IsSUFBSSxFQUFDO29CQUM1QjRCLE9BQU87b0JBQ1BDLFdBQVc7b0JBQ1hDLFdBQVc7b0JBQ1hDLFFBQVE7Z0JBQ1o7O2tDQUVBLDhEQUFDYjt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNhO2dDQUFHYixXQUFVOzBDQUFxQjVCOzs7Ozs7MENBQ25DLDhEQUFDaUM7Z0NBQU9DLFNBQVNSO2dDQUFrQkUsV0FBVTswQ0FBNkM7Ozs7Ozs7Ozs7OztrQ0FJOUYsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNWeEIsU0FBUzJCLEdBQUcsQ0FBQyxDQUFDVyxLQUFLVixzQkFDaEIsOERBQUNXO2dDQUFjZixXQUFVOztvQ0FBUUksUUFBUTtvQ0FBRTtvQ0FBR1U7OytCQUF0Q1Y7Ozs7Ozs7Ozs7a0NBR2hCLDhEQUFDTDt3QkFBSUMsV0FBVTtrQ0FDVjFCLFlBQVk2QixHQUFHLENBQUMsQ0FBQ1csS0FBS1Ysc0JBQ25CLDhEQUFDVztnQ0FBY2YsV0FBVTs7b0NBQVFJLFFBQVE7b0NBQUU7b0NBQUdVOzsrQkFBdENWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3BDO0dBN0VNbEM7S0FBQUE7QUE4RU4sK0RBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DbGlja2FibGVXb3Jkcy5qcz83NmM5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7SmlzaG9EZWZpbml0aW9ucywgSmlzaG9SZWFkaW5nc30gZnJvbSBcIkAvdXRpbHMvSmlzaG9EZWZpbml0aW9uc1wiO1xuaW1wb3J0IHtnZXREZWZpbml0aW9ufSBmcm9tIFwiQC91dGlscy9hcGlcIjtcblxuY29uc3QgQ2xpY2thYmxlV29yZHMgPSAoeyB3b3JkcyB9KSA9PntcblxuICAgIC8vY29uc3QgW3BvcHVwSW5mbywgc2V0UG9wdXBJbmZvXSA9IHVzZVN0YXRlKHsgd29yZDogbnVsbCwgZGVmaW5pdGlvbnM6IFtdLCBwb3NpdGlvbjogeyB0b3A6IDAsIGxlZnQ6IDAgfSB9KTtcbiAgICBjb25zdCBbd29yZCwgc2V0V29yZF0gPSB1c2VTdGF0ZSgnJylcbiAgICBjb25zdCBbZGVmaW5pdGlvbnMsIHNldERlZmluaXRpb25zXSA9IHVzZVN0YXRlKFtdKVxuICAgIGNvbnN0IFtyZWFkaW5ncywgc2V0UmVhZGluZ3NdID0gdXNlU3RhdGUoW10pXG4gICAgY29uc3QgW3Bvc2l0aW9uLCBzZXRQb3NpdGlvbl09IHVzZVN0YXRlKHsgdG9wOiAwLCBsZWZ0OiAwIH0pXG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9IGFzeW5jIChpbnB1dFdvcmQsIGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBDbGlja2VkIG9uOiAke2lucHV0V29yZH1gKTtcblxuICAgICAgICBjb25zdCByZWN0ID0gZXZlbnQudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgIHNldFBvcHVwUG9zaXRpb24oe1xuICAgICAgICAgICAgdG9wOiByZWN0LmJvdHRvbSArIHdpbmRvdy5zY3JvbGxZLFxuICAgICAgICAgICAgbGVmdDogcmVjdC5sZWZ0ICsgd2luZG93LnNjcm9sbFhcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2V0V29yZChpbnB1dFdvcmQpXG5cbiAgICAgICAgbGV0IGRlZlJlc3VsdHMgPSBhd2FpdCBnZXREZWZpbml0aW9uKGlucHV0V29yZCk7XG4gICAgICAgIGxldCBwYXJzZWRSZXN1bHRzID0gSmlzaG9EZWZpbml0aW9ucyhkZWZSZXN1bHRzKVxuICAgICAgICBsZXQgcmVhZGluZ3NSZXN1bHRzID0gSmlzaG9SZWFkaW5ncyhkZWZSZXN1bHRzKVxuXG4gICAgICAgIHNldERlZmluaXRpb25zKHBhcnNlZFJlc3VsdHMpO1xuICAgICAgICBzZXRSZWFkaW5ncyhyZWFkaW5nc1Jlc3VsdHMpXG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUNsb3NlUG9wdXAgPSAoKSA9PiB7XG4gICAgICAgIHNldFdvcmQoJycpXG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIiBzdHlsZT17eyBtaW5IZWlnaHQ6ICcyMDBweCcgfX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAge3dvcmRzLm1hcCgod29yZCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVDbGljayh3b3JkLCBlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTIgcHktMSBiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHJvdW5kZWQgaG92ZXI6YmctYmx1ZS02MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWJsdWUtMzAwXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3dvcmR9XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7d29yZCAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwb3B1cC1jb250YWluZXIgYWJzb2x1dGUgYmctZ3JheS0yMDAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkIHNoYWRvdy1sZyBwLTRcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBgJHtwb3B1cFBvc2l0aW9uLnRvcH1weGAsXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBgJHtwb3B1cFBvc2l0aW9uLmxlZnR9cHhgLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICczMDBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6ICc0MDBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvd1k6ICdhdXRvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHpJbmRleDogMTAwMFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWxnXCI+e3dvcmR9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2VQb3B1cH0gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCBob3Zlcjp0ZXh0LWdyYXktNzAwIHRleHQtMnhsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgw5dcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItdCBwdC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cmVhZGluZ3MubWFwKChkZWYsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwibWItMlwiPntpbmRleCArIDF9LiB7ZGVmfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItdCBwdC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGVmaW5pdGlvbnMubWFwKChkZWYsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwibWItMlwiPntpbmRleCArIDF9LiB7ZGVmfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQ2xpY2thYmxlV29yZHM7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJKaXNob0RlZmluaXRpb25zIiwiSmlzaG9SZWFkaW5ncyIsImdldERlZmluaXRpb24iLCJDbGlja2FibGVXb3JkcyIsIndvcmRzIiwid29yZCIsInNldFdvcmQiLCJkZWZpbml0aW9ucyIsInNldERlZmluaXRpb25zIiwicmVhZGluZ3MiLCJzZXRSZWFkaW5ncyIsInBvc2l0aW9uIiwic2V0UG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiaGFuZGxlQ2xpY2siLCJpbnB1dFdvcmQiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJyZWN0IiwidGFyZ2V0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwic2V0UG9wdXBQb3NpdGlvbiIsImJvdHRvbSIsIndpbmRvdyIsInNjcm9sbFkiLCJzY3JvbGxYIiwiZGVmUmVzdWx0cyIsInBhcnNlZFJlc3VsdHMiLCJyZWFkaW5nc1Jlc3VsdHMiLCJoYW5kbGVDbG9zZVBvcHVwIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJtaW5IZWlnaHQiLCJtYXAiLCJpbmRleCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJlIiwicG9wdXBQb3NpdGlvbiIsIndpZHRoIiwibWF4SGVpZ2h0Iiwib3ZlcmZsb3dZIiwiekluZGV4IiwiaDMiLCJkZWYiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./components/ClickableWords.js\n"));

/***/ })

});