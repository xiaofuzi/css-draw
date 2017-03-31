/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	eval("'use strict';\n\n/**\n * css properties\n */\nvar cssProps = ['position', 'top', 'left', 'right', 'bottom', 'padding', 'margin', 'border', 'borderRadius', 'display', 'color', 'backgroundColor'];\n\nfunction parse(selector) {\n\tvar el = document.querySelector(selector);\n\t_tranverse(el);\n\tconsole.log(el.outerHTML);\n\treturn el.outerHTML;\n}\n\nfunction _elProcess(el) {\n\tcssProps.forEach(function (prop) {\n\t\tvar value = getComputedStyle(el)[prop];\n\t\tif (value !== undefined) {\n\t\t\tel.style[prop] = value;\n\t\t} else {\n\t\t\tconsole.warn('getComputedStyle is not support ' + prop);\n\t\t}\n\t});\n}\n\nfunction _tranverse(el) {\n\tif (el.child.length) {\n\t\t_elProcess(el);\n\t\tel.child.forEach(function (child) {\n\t\t\t_elProcess(child);\n\t\t});\n\t}\n}\n\nparse('#app-icon');\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaHRtbFBhY2suanM/NmY0YyJdLCJuYW1lcyI6WyJjc3NQcm9wcyIsInBhcnNlIiwic2VsZWN0b3IiLCJlbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIl90cmFudmVyc2UiLCJjb25zb2xlIiwibG9nIiwib3V0ZXJIVE1MIiwiX2VsUHJvY2VzcyIsImZvckVhY2giLCJwcm9wIiwidmFsdWUiLCJnZXRDb21wdXRlZFN0eWxlIiwidW5kZWZpbmVkIiwic3R5bGUiLCJ3YXJuIiwiY2hpbGQiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7O0FBQUE7OztBQUdBLElBQU1BLFdBQVcsQ0FDaEIsVUFEZ0IsRUFFaEIsS0FGZ0IsRUFHaEIsTUFIZ0IsRUFJaEIsT0FKZ0IsRUFLaEIsUUFMZ0IsRUFNaEIsU0FOZ0IsRUFPaEIsUUFQZ0IsRUFRaEIsUUFSZ0IsRUFTaEIsY0FUZ0IsRUFVaEIsU0FWZ0IsRUFXaEIsT0FYZ0IsRUFZaEIsaUJBWmdCLENBQWpCOztBQWVBLFNBQVNDLEtBQVQsQ0FBZ0JDLFFBQWhCLEVBQTBCO0FBQ3pCLEtBQUlDLEtBQUtDLFNBQVNDLGFBQVQsQ0FBdUJILFFBQXZCLENBQVQ7QUFDQUksWUFBV0gsRUFBWDtBQUNBSSxTQUFRQyxHQUFSLENBQVlMLEdBQUdNLFNBQWY7QUFDQSxRQUFPTixHQUFHTSxTQUFWO0FBQ0E7O0FBRUQsU0FBU0MsVUFBVCxDQUFxQlAsRUFBckIsRUFBeUI7QUFDeEJILFVBQVNXLE9BQVQsQ0FBaUIsVUFBQ0MsSUFBRCxFQUFVO0FBQzFCLE1BQUlDLFFBQVFDLGlCQUFpQlgsRUFBakIsRUFBcUJTLElBQXJCLENBQVo7QUFDQSxNQUFJQyxVQUFVRSxTQUFkLEVBQXlCO0FBQ3hCWixNQUFHYSxLQUFILENBQVNKLElBQVQsSUFBaUJDLEtBQWpCO0FBQ0EsR0FGRCxNQUVPO0FBQ05OLFdBQVFVLElBQVIsQ0FBYSxxQ0FBcUNMLElBQWxEO0FBQ0E7QUFDRCxFQVBEO0FBUUE7O0FBRUQsU0FBU04sVUFBVCxDQUFxQkgsRUFBckIsRUFBeUI7QUFDeEIsS0FBSUEsR0FBR2UsS0FBSCxDQUFTQyxNQUFiLEVBQXFCO0FBQ3BCVCxhQUFXUCxFQUFYO0FBQ0FBLEtBQUdlLEtBQUgsQ0FBU1AsT0FBVCxDQUFpQixVQUFDTyxLQUFELEVBQVc7QUFDM0JSLGNBQVdRLEtBQVg7QUFDQSxHQUZEO0FBR0E7QUFDRDs7QUFFRGpCLE1BQU0sV0FBTiIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBjc3MgcHJvcGVydGllc1xuICovXG5jb25zdCBjc3NQcm9wcyA9IFtcblx0J3Bvc2l0aW9uJyxcblx0J3RvcCcsXG5cdCdsZWZ0Jyxcblx0J3JpZ2h0Jyxcblx0J2JvdHRvbScsXG5cdCdwYWRkaW5nJyxcblx0J21hcmdpbicsXG5cdCdib3JkZXInLFxuXHQnYm9yZGVyUmFkaXVzJyxcblx0J2Rpc3BsYXknLFxuXHQnY29sb3InLFxuXHQnYmFja2dyb3VuZENvbG9yJ1xuXTtcblxuZnVuY3Rpb24gcGFyc2UgKHNlbGVjdG9yKSB7XG5cdGxldCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuXHRfdHJhbnZlcnNlKGVsKTtcblx0Y29uc29sZS5sb2coZWwub3V0ZXJIVE1MKTtcblx0cmV0dXJuIGVsLm91dGVySFRNTDtcbn1cblxuZnVuY3Rpb24gX2VsUHJvY2VzcyAoZWwpIHtcblx0Y3NzUHJvcHMuZm9yRWFjaCgocHJvcCkgPT4ge1xuXHRcdGxldCB2YWx1ZSA9IGdldENvbXB1dGVkU3R5bGUoZWwpW3Byb3BdO1xuXHRcdGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRlbC5zdHlsZVtwcm9wXSA9IHZhbHVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zb2xlLndhcm4oJ2dldENvbXB1dGVkU3R5bGUgaXMgbm90IHN1cHBvcnQgJyArIHByb3ApO1xuXHRcdH1cblx0fSlcbn1cblxuZnVuY3Rpb24gX3RyYW52ZXJzZSAoZWwpIHtcblx0aWYgKGVsLmNoaWxkLmxlbmd0aCkge1xuXHRcdF9lbFByb2Nlc3MoZWwpO1xuXHRcdGVsLmNoaWxkLmZvckVhY2goKGNoaWxkKSA9PiB7XG5cdFx0XHRfZWxQcm9jZXNzKGNoaWxkKVxuXHRcdH0pXG5cdH1cbn1cblxucGFyc2UoJyNhcHAtaWNvbicpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9odG1sUGFjay5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }
/******/ ]);