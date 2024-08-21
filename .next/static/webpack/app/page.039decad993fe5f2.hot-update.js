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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_JishoDefinitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/JishoDefinitions */ \"(app-client)/./utils/JishoDefinitions.js\");\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/api */ \"(app-client)/./utils/api.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst ClickableWords = (param)=>{\n    let { words  } = param;\n    _s();\n    //const [popupInfo, setPopupInfo] = useState({ word: null, definitions: [], position: { top: 0, left: 0 } });\n    const [word, setWord] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [definitions, setDefinitions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [readings, setReadings] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [position, setPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const handleClick = async (inputWord, event)=>{\n        console.log(\"Clicked on: \".concat(inputWord));\n        setWord(inputWord);\n        let defResults = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_3__.getDefinition)(inputWord);\n        let parsedResults = (0,_utils_JishoDefinitions__WEBPACK_IMPORTED_MODULE_2__.JishoDefinitions)(defResults);\n        setDefinitions(parsedResults);\n    };\n    const handleClosePopup = ()=>{\n        setWord(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative\",\n        style: {\n            minHeight: \"200px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap gap-2\",\n                children: words.map((word, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: (e)=>handleClick(word, e),\n                        className: \"px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300\",\n                        children: word\n                    }, index, false, {\n                        fileName: \"/Users/etorun/WebstormProjects/Refactor_attempt_1/nextjs-flask/components/ClickableWords.js\",\n                        lineNumber: 31,\n                        columnNumber: 21\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/etorun/WebstormProjects/Refactor_attempt_1/nextjs-flask/components/ClickableWords.js\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, undefined),\n            word && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"popup-container absolute bg-gray-200 border border-gray-300 rounded shadow-lg p-4\",\n                style: {\n                    top: 0,\n                    left: 0,\n                    width: \"300px\",\n                    maxHeight: \"400px\",\n                    overflowY: \"auto\",\n                    zIndex: 1000\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between items-center mb-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"font-bold text-lg\",\n                                children: word\n                            }, void 0, false, {\n                                fileName: \"/Users/etorun/WebstormProjects/Refactor_attempt_1/nextjs-flask/components/ClickableWords.js\",\n                                lineNumber: 53,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleClosePopup,\n                                className: \"text-gray-500 hover:text-gray-700 text-2xl\",\n                                children: \"\\xd7\"\n                            }, void 0, false, {\n                                fileName: \"/Users/etorun/WebstormProjects/Refactor_attempt_1/nextjs-flask/components/ClickableWords.js\",\n                                lineNumber: 54,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/etorun/WebstormProjects/Refactor_attempt_1/nextjs-flask/components/ClickableWords.js\",\n                        lineNumber: 52,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"border-t pt-2\",\n                        children: definitions.map((def, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"mb-2\",\n                                children: [\n                                    index + 1,\n                                    \". \",\n                                    def\n                                ]\n                            }, index, true, {\n                                fileName: \"/Users/etorun/WebstormProjects/Refactor_attempt_1/nextjs-flask/components/ClickableWords.js\",\n                                lineNumber: 60,\n                                columnNumber: 29\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/etorun/WebstormProjects/Refactor_attempt_1/nextjs-flask/components/ClickableWords.js\",\n                        lineNumber: 58,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/etorun/WebstormProjects/Refactor_attempt_1/nextjs-flask/components/ClickableWords.js\",\n                lineNumber: 41,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/etorun/WebstormProjects/Refactor_attempt_1/nextjs-flask/components/ClickableWords.js\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ClickableWords, \"cBP8KCVmqPTJTIQJNlSp/JQ/gp8=\");\n_c = ClickableWords;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ClickableWords);\nvar _c;\n$RefreshReg$(_c, \"ClickableWords\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9DbGlja2FibGVXb3Jkcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF3QztBQUNrQjtBQUNoQjtBQUUxQyxNQUFNSSxpQkFBaUIsU0FBYztRQUFiLEVBQUVDLE1BQUssRUFBRTs7SUFFN0IsNkdBQTZHO0lBQzdHLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNPLGFBQWFDLGVBQWUsR0FBR1IsK0NBQVFBLENBQUMsRUFBRTtJQUNqRCxNQUFNLENBQUNTLFVBQVVDLFlBQVksR0FBR1YsK0NBQVFBLENBQUMsRUFBRTtJQUMzQyxNQUFNLENBQUNXLFVBQVVDLFlBQVksR0FBRVosK0NBQVFBO0lBRXZDLE1BQU1hLGNBQWMsT0FBT0MsV0FBV0MsUUFBVTtRQUM1Q0MsUUFBUUMsR0FBRyxDQUFDLGVBQXlCLE9BQVZIO1FBRTNCUixRQUFRUTtRQUVSLElBQUlJLGFBQWEsTUFBTWhCLHlEQUFhQSxDQUFDWTtRQUNyQyxJQUFJSyxnQkFBZ0JsQix5RUFBZ0JBLENBQUNpQjtRQUNyQ1YsZUFBZVc7SUFDbkI7SUFFQSxNQUFNQyxtQkFBbUIsSUFBTTtRQUMzQmQsUUFBUTtJQUNaO0lBRUEscUJBQ0ksOERBQUNlO1FBQUlDLFdBQVU7UUFBV0MsT0FBTztZQUFFQyxXQUFXO1FBQVE7OzBCQUNsRCw4REFBQ0g7Z0JBQUlDLFdBQVU7MEJBQ1ZsQixNQUFNcUIsR0FBRyxDQUFDLENBQUNwQixNQUFNcUIsc0JBQ2QsOERBQUNDO3dCQUVHQyxTQUFTLENBQUNDLElBQU1oQixZQUFZUixNQUFNd0I7d0JBQ2xDUCxXQUFVO2tDQUVUakI7dUJBSklxQjs7Ozs7Ozs7OztZQVFoQnJCLHNCQUNHLDhEQUFDZ0I7Z0JBQ0dDLFdBQVU7Z0JBQ1ZDLE9BQU87b0JBQ0hPLEtBQUs7b0JBQ0xDLE1BQU07b0JBQ05DLE9BQU87b0JBQ1BDLFdBQVc7b0JBQ1hDLFdBQVc7b0JBQ1hDLFFBQVE7Z0JBQ1o7O2tDQUVBLDhEQUFDZDt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNjO2dDQUFHZCxXQUFVOzBDQUFxQmpCOzs7Ozs7MENBQ25DLDhEQUFDc0I7Z0NBQU9DLFNBQVNSO2dDQUFrQkUsV0FBVTswQ0FBNkM7Ozs7Ozs7Ozs7OztrQ0FJOUYsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNWZixZQUFZa0IsR0FBRyxDQUFDLENBQUNZLEtBQUtYLHNCQUNuQiw4REFBQ1k7Z0NBQWNoQixXQUFVOztvQ0FBUUksUUFBUTtvQ0FBRTtvQ0FBR1c7OytCQUF0Q1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPcEM7R0E5RE12QjtLQUFBQTtBQStETiwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NsaWNrYWJsZVdvcmRzLmpzPzc2YzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtKaXNob0RlZmluaXRpb25zfSBmcm9tIFwiQC91dGlscy9KaXNob0RlZmluaXRpb25zXCI7XG5pbXBvcnQge2dldERlZmluaXRpb259IGZyb20gXCJAL3V0aWxzL2FwaVwiO1xuXG5jb25zdCBDbGlja2FibGVXb3JkcyA9ICh7IHdvcmRzIH0pID0+e1xuXG4gICAgLy9jb25zdCBbcG9wdXBJbmZvLCBzZXRQb3B1cEluZm9dID0gdXNlU3RhdGUoeyB3b3JkOiBudWxsLCBkZWZpbml0aW9uczogW10sIHBvc2l0aW9uOiB7IHRvcDogMCwgbGVmdDogMCB9IH0pO1xuICAgIGNvbnN0IFt3b3JkLCBzZXRXb3JkXSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IFtkZWZpbml0aW9ucywgc2V0RGVmaW5pdGlvbnNdID0gdXNlU3RhdGUoW10pXG4gICAgY29uc3QgW3JlYWRpbmdzLCBzZXRSZWFkaW5nc10gPSB1c2VTdGF0ZShbXSlcbiAgICBjb25zdCBbcG9zaXRpb24sIHNldFBvc2l0aW9uXT0gdXNlU3RhdGUoKVxuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSBhc3luYyAoaW5wdXRXb3JkLCBldmVudCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhgQ2xpY2tlZCBvbjogJHtpbnB1dFdvcmR9YCk7XG5cbiAgICAgICAgc2V0V29yZChpbnB1dFdvcmQpXG5cbiAgICAgICAgbGV0IGRlZlJlc3VsdHMgPSBhd2FpdCBnZXREZWZpbml0aW9uKGlucHV0V29yZCk7XG4gICAgICAgIGxldCBwYXJzZWRSZXN1bHRzID0gSmlzaG9EZWZpbml0aW9ucyhkZWZSZXN1bHRzKVxuICAgICAgICBzZXREZWZpbml0aW9ucyhwYXJzZWRSZXN1bHRzKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlQ2xvc2VQb3B1cCA9ICgpID0+IHtcbiAgICAgICAgc2V0V29yZCgnJylcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiIHN0eWxlPXt7IG1pbkhlaWdodDogJzIwMHB4JyB9fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICB7d29yZHMubWFwKCh3b3JkLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGhhbmRsZUNsaWNrKHdvcmQsIGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtMiBweS0xIGJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcm91bmRlZCBob3ZlcjpiZy1ibHVlLTYwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctYmx1ZS0zMDBcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7d29yZH1cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHt3b3JkICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBvcHVwLWNvbnRhaW5lciBhYnNvbHV0ZSBiZy1ncmF5LTIwMCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQgc2hhZG93LWxnIHAtNFwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICczMDBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6ICc0MDBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvd1k6ICdhdXRvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHpJbmRleDogMTAwMFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWxnXCI+e3dvcmR9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2VQb3B1cH0gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCBob3Zlcjp0ZXh0LWdyYXktNzAwIHRleHQtMnhsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgw5dcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItdCBwdC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGVmaW5pdGlvbnMubWFwKChkZWYsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwibWItMlwiPntpbmRleCArIDF9LiB7ZGVmfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQ2xpY2thYmxlV29yZHM7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJKaXNob0RlZmluaXRpb25zIiwiZ2V0RGVmaW5pdGlvbiIsIkNsaWNrYWJsZVdvcmRzIiwid29yZHMiLCJ3b3JkIiwic2V0V29yZCIsImRlZmluaXRpb25zIiwic2V0RGVmaW5pdGlvbnMiLCJyZWFkaW5ncyIsInNldFJlYWRpbmdzIiwicG9zaXRpb24iLCJzZXRQb3NpdGlvbiIsImhhbmRsZUNsaWNrIiwiaW5wdXRXb3JkIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwiZGVmUmVzdWx0cyIsInBhcnNlZFJlc3VsdHMiLCJoYW5kbGVDbG9zZVBvcHVwIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJtaW5IZWlnaHQiLCJtYXAiLCJpbmRleCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJlIiwidG9wIiwibGVmdCIsIndpZHRoIiwibWF4SGVpZ2h0Iiwib3ZlcmZsb3dZIiwiekluZGV4IiwiaDMiLCJkZWYiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./components/ClickableWords.js\n"));

/***/ })

});