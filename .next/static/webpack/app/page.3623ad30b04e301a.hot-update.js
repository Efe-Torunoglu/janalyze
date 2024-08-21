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

/***/ "(app-client)/./utils/JishoDefinitions.js":
/*!***********************************!*\
  !*** ./utils/JishoDefinitions.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"JishoDefinitions\": function() { return /* binding */ JishoDefinitions; }\n/* harmony export */ });\nfunction JishoDefinitions(jishoData) {\n    if (!jishoData.data || jishoData.data.length === 0) {\n        console.log(\"No data returned from Jisho API\");\n        return \"No Jisho data found\";\n    }\n    const firstResult = jishoData.data[0];\n    console.log(firstResult);\n    // Get all senses with parts of speech and definitions\n    const sensesInfo = firstResult.senses.map((sense, index)=>{\n        const pos = sense.parts_of_speech.join(\", \") || \"N/A\";\n        const definitions = sense.english_definitions.join(\", \");\n        return \"\".concat(index + 1, \". (\").concat(pos, \") \").concat(definitions);\n    });\n    console.log(sensesInfo);\n    return sensesInfo;\n}\n_c = JishoDefinitions;\n\nvar _c;\n$RefreshReg$(_c, \"JishoDefinitions\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vdXRpbHMvSmlzaG9EZWZpbml0aW9ucy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsU0FBU0EsaUJBQWlCQyxTQUFTLEVBQUU7SUFDakMsSUFBSSxDQUFDQSxVQUFVQyxJQUFJLElBQUlELFVBQVVDLElBQUksQ0FBQ0MsTUFBTSxLQUFLLEdBQUc7UUFDaERDLFFBQVFDLEdBQUcsQ0FBQztRQUNaLE9BQU87SUFDWCxDQUFDO0lBRUQsTUFBTUMsY0FBY0wsVUFBVUMsSUFBSSxDQUFDLEVBQUU7SUFDckNFLFFBQVFDLEdBQUcsQ0FBQ0M7SUFFWixzREFBc0Q7SUFDdEQsTUFBTUMsYUFBYUQsWUFBWUUsTUFBTSxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsT0FBT0MsUUFBVTtRQUN4RCxNQUFNQyxNQUFNRixNQUFNRyxlQUFlLENBQUNDLElBQUksQ0FBQyxTQUFTO1FBQ2hELE1BQU1DLGNBQWNMLE1BQU1NLG1CQUFtQixDQUFDRixJQUFJLENBQUM7UUFDbkQsT0FBTyxHQUFrQkYsT0FBZkQsUUFBUSxHQUFFLE9BQWFJLE9BQVJILEtBQUksTUFBZ0IsT0FBWkc7SUFDckM7SUFDQVgsUUFBUUMsR0FBRyxDQUFDRTtJQUNaLE9BQU9BO0FBQ1g7S0FqQlNQO0FBbUJnQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi91dGlscy9KaXNob0RlZmluaXRpb25zLmpzPzRkMDUiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gSmlzaG9EZWZpbml0aW9ucyhqaXNob0RhdGEpIHtcbiAgICBpZiAoIWppc2hvRGF0YS5kYXRhIHx8IGppc2hvRGF0YS5kYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk5vIGRhdGEgcmV0dXJuZWQgZnJvbSBKaXNobyBBUElcIik7XG4gICAgICAgIHJldHVybiBcIk5vIEppc2hvIGRhdGEgZm91bmRcIjtcbiAgICB9XG5cbiAgICBjb25zdCBmaXJzdFJlc3VsdCA9IGppc2hvRGF0YS5kYXRhWzBdO1xuICAgIGNvbnNvbGUubG9nKGZpcnN0UmVzdWx0KVxuXG4gICAgLy8gR2V0IGFsbCBzZW5zZXMgd2l0aCBwYXJ0cyBvZiBzcGVlY2ggYW5kIGRlZmluaXRpb25zXG4gICAgY29uc3Qgc2Vuc2VzSW5mbyA9IGZpcnN0UmVzdWx0LnNlbnNlcy5tYXAoKHNlbnNlLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBwb3MgPSBzZW5zZS5wYXJ0c19vZl9zcGVlY2guam9pbignLCAnKSB8fCAnTi9BJztcbiAgICAgICAgY29uc3QgZGVmaW5pdGlvbnMgPSBzZW5zZS5lbmdsaXNoX2RlZmluaXRpb25zLmpvaW4oJywgJyk7XG4gICAgICAgIHJldHVybiBgJHtpbmRleCArIDF9LiAoJHtwb3N9KSAke2RlZmluaXRpb25zfWA7XG4gICAgfSlcbiAgICBjb25zb2xlLmxvZyhzZW5zZXNJbmZvKVxuICAgIHJldHVybiBzZW5zZXNJbmZvXG59XG5cbmV4cG9ydCB7SmlzaG9EZWZpbml0aW9uc30iXSwibmFtZXMiOlsiSmlzaG9EZWZpbml0aW9ucyIsImppc2hvRGF0YSIsImRhdGEiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiZmlyc3RSZXN1bHQiLCJzZW5zZXNJbmZvIiwic2Vuc2VzIiwibWFwIiwic2Vuc2UiLCJpbmRleCIsInBvcyIsInBhcnRzX29mX3NwZWVjaCIsImpvaW4iLCJkZWZpbml0aW9ucyIsImVuZ2xpc2hfZGVmaW5pdGlvbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./utils/JishoDefinitions.js\n"));

/***/ })

});