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

	eval("'use strict';\n\n/**\n * css properties\n */\nvar cssProps = ['position', 'top', 'left', 'right', 'bottom', 'padding', 'margin', 'border', 'borderRadius', 'display', 'color', 'backgroundColor', 'width', 'height'];\n\nfunction parse(selector) {\n\tvar el = document.querySelector(selector);\n\t_tranverse(el);\n\tconsole.log(el.id = '', el.className = '', el);\n\tdocument.body.appendChild(el);\n\treturn el.outerHTML;\n}\n\nfunction _elProcess(el) {\n\tcssProps.forEach(function (prop) {\n\t\tvar value = getComputedStyle(el)[prop];\n\t\tif (value !== undefined) {\n\t\t\tel.style[prop] = value;\n\t\t} else {\n\t\t\tconsole.warn('getComputedStyle is not support ' + prop);\n\t\t}\n\t});\n}\n\nfunction _tranverse(el) {\n\tconsole.log(el.children);\n\tif (el.children.length) {\n\t\t_elProcess(el);\n\t\t[].forEach.call(el.children, function (child) {\n\t\t\t_elProcess(child);\n\t\t});\n\t}\n}\n\nparse('#app-icon');\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaHRtbFBhY2suanM/NmY0YyJdLCJuYW1lcyI6WyJjc3NQcm9wcyIsInBhcnNlIiwic2VsZWN0b3IiLCJlbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIl90cmFudmVyc2UiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJjbGFzc05hbWUiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJvdXRlckhUTUwiLCJfZWxQcm9jZXNzIiwiZm9yRWFjaCIsInByb3AiLCJ2YWx1ZSIsImdldENvbXB1dGVkU3R5bGUiLCJ1bmRlZmluZWQiLCJzdHlsZSIsIndhcm4iLCJjaGlsZHJlbiIsImxlbmd0aCIsImNhbGwiLCJjaGlsZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7O0FBR0EsSUFBTUEsV0FBVyxDQUNoQixVQURnQixFQUVoQixLQUZnQixFQUdoQixNQUhnQixFQUloQixPQUpnQixFQUtoQixRQUxnQixFQU1oQixTQU5nQixFQU9oQixRQVBnQixFQVFoQixRQVJnQixFQVNoQixjQVRnQixFQVVoQixTQVZnQixFQVdoQixPQVhnQixFQVloQixpQkFaZ0IsRUFhaEIsT0FiZ0IsRUFjaEIsUUFkZ0IsQ0FBakI7O0FBaUJBLFNBQVNDLEtBQVQsQ0FBZ0JDLFFBQWhCLEVBQTBCO0FBQ3pCLEtBQUlDLEtBQUtDLFNBQVNDLGFBQVQsQ0FBdUJILFFBQXZCLENBQVQ7QUFDQUksWUFBV0gsRUFBWDtBQUNBSSxTQUFRQyxHQUFSLENBQVlMLEdBQUdNLEVBQUgsR0FBUSxFQUFwQixFQUF3Qk4sR0FBR08sU0FBSCxHQUFhLEVBQXJDLEVBQXlDUCxFQUF6QztBQUNBQyxVQUFTTyxJQUFULENBQWNDLFdBQWQsQ0FBMEJULEVBQTFCO0FBQ0EsUUFBT0EsR0FBR1UsU0FBVjtBQUNBOztBQUVELFNBQVNDLFVBQVQsQ0FBcUJYLEVBQXJCLEVBQXlCO0FBQ3hCSCxVQUFTZSxPQUFULENBQWlCLFVBQUNDLElBQUQsRUFBVTtBQUMxQixNQUFJQyxRQUFRQyxpQkFBaUJmLEVBQWpCLEVBQXFCYSxJQUFyQixDQUFaO0FBQ0EsTUFBSUMsVUFBVUUsU0FBZCxFQUF5QjtBQUN4QmhCLE1BQUdpQixLQUFILENBQVNKLElBQVQsSUFBaUJDLEtBQWpCO0FBQ0EsR0FGRCxNQUVPO0FBQ05WLFdBQVFjLElBQVIsQ0FBYSxxQ0FBcUNMLElBQWxEO0FBQ0E7QUFDRCxFQVBEO0FBUUE7O0FBRUQsU0FBU1YsVUFBVCxDQUFxQkgsRUFBckIsRUFBeUI7QUFDdkJJLFNBQVFDLEdBQVIsQ0FBWUwsR0FBR21CLFFBQWY7QUFDRCxLQUFJbkIsR0FBR21CLFFBQUgsQ0FBWUMsTUFBaEIsRUFBd0I7QUFDdkJULGFBQVdYLEVBQVg7QUFDQSxLQUFHWSxPQUFILENBQVdTLElBQVgsQ0FBZ0JyQixHQUFHbUIsUUFBbkIsRUFBNkIsVUFBQ0csS0FBRCxFQUFXO0FBQ3ZDWCxjQUFXVyxLQUFYO0FBQ0EsR0FGRDtBQUdBO0FBQ0Q7O0FBRUR4QixNQUFNLFdBQU4iLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogY3NzIHByb3BlcnRpZXNcbiAqL1xuY29uc3QgY3NzUHJvcHMgPSBbXG5cdCdwb3NpdGlvbicsXG5cdCd0b3AnLFxuXHQnbGVmdCcsXG5cdCdyaWdodCcsXG5cdCdib3R0b20nLFxuXHQncGFkZGluZycsXG5cdCdtYXJnaW4nLFxuXHQnYm9yZGVyJyxcblx0J2JvcmRlclJhZGl1cycsXG5cdCdkaXNwbGF5Jyxcblx0J2NvbG9yJyxcblx0J2JhY2tncm91bmRDb2xvcicsXG5cdCd3aWR0aCcsXG5cdCdoZWlnaHQnXG5dO1xuXG5mdW5jdGlvbiBwYXJzZSAoc2VsZWN0b3IpIHtcblx0bGV0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG5cdF90cmFudmVyc2UoZWwpO1xuXHRjb25zb2xlLmxvZyhlbC5pZCA9ICcnLCBlbC5jbGFzc05hbWU9JycsIGVsKTtcblx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbCk7XG5cdHJldHVybiBlbC5vdXRlckhUTUw7XG59XG5cbmZ1bmN0aW9uIF9lbFByb2Nlc3MgKGVsKSB7XG5cdGNzc1Byb3BzLmZvckVhY2goKHByb3ApID0+IHtcblx0XHRsZXQgdmFsdWUgPSBnZXRDb21wdXRlZFN0eWxlKGVsKVtwcm9wXTtcblx0XHRpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0ZWwuc3R5bGVbcHJvcF0gPSB2YWx1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS53YXJuKCdnZXRDb21wdXRlZFN0eWxlIGlzIG5vdCBzdXBwb3J0ICcgKyBwcm9wKTtcblx0XHR9XG5cdH0pXG59XG5cbmZ1bmN0aW9uIF90cmFudmVyc2UgKGVsKSB7XG5cdFx0Y29uc29sZS5sb2coZWwuY2hpbGRyZW4pO1xuXHRpZiAoZWwuY2hpbGRyZW4ubGVuZ3RoKSB7XG5cdFx0X2VsUHJvY2VzcyhlbCk7XG5cdFx0W10uZm9yRWFjaC5jYWxsKGVsLmNoaWxkcmVuLCAoY2hpbGQpID0+IHtcblx0XHRcdF9lbFByb2Nlc3MoY2hpbGQpXG5cdFx0fSlcblx0fVxufVxuXG5wYXJzZSgnI2FwcC1pY29uJyk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2h0bWxQYWNrLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }
/******/ ]);