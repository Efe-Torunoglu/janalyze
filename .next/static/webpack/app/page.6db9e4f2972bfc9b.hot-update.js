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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"JishoDefinitions\": function() { return /* binding */ JishoDefinitions; }\n/* harmony export */ });\nfunction JishoDefinitions(jishoData) {\n    if (!jishoData.data || jishoData.data.length === 0) {\n        console.log(\"No data returned from Jisho API\");\n        return \"No Jisho data found\";\n    }\n    const firstResult = jishoData.data[0];\n    // Get all senses with parts of speech and definitions\n    const sensesInfo = firstResult.senses.map((sense, index)=>{\n        const pos = sense.parts_of_speech.join(\", \") || \"N/A\";\n        const definitions = sense.english_definitions.join(\", \");\n        return \"\".concat(index + 1, \". (\").concat(pos, \") \").concat(definitions);\n    });\n    return sensesInfo;\n}\n_c = JishoDefinitions;\n\nvar _c;\n$RefreshReg$(_c, \"JishoDefinitions\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vdXRpbHMvSmlzaG9EZWZpbml0aW9ucy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsU0FBU0EsaUJBQWlCQyxTQUFTLEVBQUU7SUFDakMsSUFBSSxDQUFDQSxVQUFVQyxJQUFJLElBQUlELFVBQVVDLElBQUksQ0FBQ0MsTUFBTSxLQUFLLEdBQUc7UUFDaERDLFFBQVFDLEdBQUcsQ0FBQztRQUNaLE9BQU87SUFDWCxDQUFDO0lBRUQsTUFBTUMsY0FBY0wsVUFBVUMsSUFBSSxDQUFDLEVBQUU7SUFFckMsc0RBQXNEO0lBQ3RELE1BQU1LLGFBQWFELFlBQVlFLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLE9BQU9DLFFBQVU7UUFDeEQsTUFBTUMsTUFBTUYsTUFBTUcsZUFBZSxDQUFDQyxJQUFJLENBQUMsU0FBUztRQUNoRCxNQUFNQyxjQUFjTCxNQUFNTSxtQkFBbUIsQ0FBQ0YsSUFBSSxDQUFDO1FBQ25ELE9BQU8sR0FBa0JGLE9BQWZELFFBQVEsR0FBRSxPQUFhSSxPQUFSSCxLQUFJLE1BQWdCLE9BQVpHO0lBQ3JDO0lBQ0EsT0FBT1I7QUFDWDtLQWZTUDtBQWlCZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvSmlzaG9EZWZpbml0aW9ucy5qcz80ZDA1Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIEppc2hvRGVmaW5pdGlvbnMoamlzaG9EYXRhKSB7XG4gICAgaWYgKCFqaXNob0RhdGEuZGF0YSB8fCBqaXNob0RhdGEuZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJObyBkYXRhIHJldHVybmVkIGZyb20gSmlzaG8gQVBJXCIpO1xuICAgICAgICByZXR1cm4gXCJObyBKaXNobyBkYXRhIGZvdW5kXCI7XG4gICAgfVxuXG4gICAgY29uc3QgZmlyc3RSZXN1bHQgPSBqaXNob0RhdGEuZGF0YVswXTtcblxuICAgIC8vIEdldCBhbGwgc2Vuc2VzIHdpdGggcGFydHMgb2Ygc3BlZWNoIGFuZCBkZWZpbml0aW9uc1xuICAgIGNvbnN0IHNlbnNlc0luZm8gPSBmaXJzdFJlc3VsdC5zZW5zZXMubWFwKChzZW5zZSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgcG9zID0gc2Vuc2UucGFydHNfb2Zfc3BlZWNoLmpvaW4oJywgJykgfHwgJ04vQSc7XG4gICAgICAgIGNvbnN0IGRlZmluaXRpb25zID0gc2Vuc2UuZW5nbGlzaF9kZWZpbml0aW9ucy5qb2luKCcsICcpO1xuICAgICAgICByZXR1cm4gYCR7aW5kZXggKyAxfS4gKCR7cG9zfSkgJHtkZWZpbml0aW9uc31gO1xuICAgIH0pXG4gICAgcmV0dXJuIHNlbnNlc0luZm9cbn1cblxuZXhwb3J0IHtKaXNob0RlZmluaXRpb25zfSJdLCJuYW1lcyI6WyJKaXNob0RlZmluaXRpb25zIiwiamlzaG9EYXRhIiwiZGF0YSIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJmaXJzdFJlc3VsdCIsInNlbnNlc0luZm8iLCJzZW5zZXMiLCJtYXAiLCJzZW5zZSIsImluZGV4IiwicG9zIiwicGFydHNfb2Zfc3BlZWNoIiwiam9pbiIsImRlZmluaXRpb25zIiwiZW5nbGlzaF9kZWZpbml0aW9ucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./utils/JishoDefinitions.js\n"));

/***/ })

});