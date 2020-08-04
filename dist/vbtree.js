var vbtree =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/browser.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/array_index.js":
/*!****************************!*\
  !*** ./src/array_index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function array_index(array, fn) {
  var out = {};
  array.forEach(function (v) {
    return out[fn(v)] = v;
  });
  return out;
}

/* harmony default export */ __webpack_exports__["default"] = (array_index);

/***/ }),

/***/ "./src/array_permutations.js":
/*!***********************************!*\
  !*** ./src/array_permutations.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// https://stackoverflow.com/a/37580979/1478566
function array_permutations(items) {
  var end = items.length;
  var result = [items.slice()];
  var c = new Array(end).fill(0);
  var i = 1;

  while (i < end) {
    if (c[i] < i) {
      var k = i % 2 && c[i];
      var p = items[i];
      items[i] = items[k];
      items[k] = p;
      ++c[i];
      i = 1;
      result.push(items.slice());
    } else {
      c[i] = 0;
      ++i;
    }
  }

  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (array_permutations);

/***/ }),

/***/ "./src/browser.js":
/*!************************!*\
  !*** ./src/browser.js ***!
  \************************/
/*! exports provided: array_index, array_permutations, roots_flatten, tree_ancestors, tree_common_ancestor, tree_descendants, tree_diff, tree_find_shifts, tree_finder_make, tree_from_array, tree_from_string, tree_insert, tree_intersect, tree_map_orig, tree_move, tree_move_after, tree_move_before, tree_move_into, tree_move_v2, tree_pointer_shift, tree_print2, tree_random, tree_resolve, tree_shift, tree_sort_preorder, tree_walk_preorder, tree_walk_preorder_prefix, tree_walk_preorder_rev */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _array_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array_index */ "./src/array_index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "array_index", function() { return _array_index__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _array_permutations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array_permutations */ "./src/array_permutations.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "array_permutations", function() { return _array_permutations__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _roots_flatten__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./roots_flatten */ "./src/roots_flatten.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "roots_flatten", function() { return _roots_flatten__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _tree_ancestors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tree_ancestors */ "./src/tree_ancestors.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tree_ancestors", function() { return _tree_ancestors__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _tree_common_ancestor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tree_common_ancestor */ "./src/tree_common_ancestor.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tree_common_ancestor", function() { return _tree_common_ancestor__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _tree_descendants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tree_descendants */ "./src/tree_descendants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tree_descendants", function() { return _tree_descendants__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _tree_diff__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tree_diff */ "./src/tree_diff.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tree_diff", function() { return _tree_diff__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _tree_find_shifts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tree_find_shifts */ "./src/tree_find_shifts.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tree_find_shifts", function() { return _tree_find_shifts__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _tree_finder_make__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tree_finder_make */ "./src/tree_finder_make.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tree_finder_make", function() { return _tree_finder_make__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _tree_from_array__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tree_from_array */ "./src/tree_from_array.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tree_from_array", function() { return _tree_from_array__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _tree_from_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tree_from_string */ "./src/tree_from_string.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tree_from_string", function() { return _tree_from_string__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _tree_insert__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tree_insert */ "./src/tree_insert.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tree_insert", function() { return _tree_insert__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _tree_intersect__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tree_intersect */ "./src/tree_intersect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tree_intersect", function() { return _tree_intersect__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _tree_map_orig__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tree_map_orig */ "./src/tree_map_orig.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tree_map_orig", function() { return _tree_map_orig__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _tree_move__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./tree_move */ "./src/tree_move.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tree_move", function() { return _tree_move__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _tree_move_after__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./tree_move_after */ "./src/tree_move_after.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tree_move_after", function() { return _tree_move_after__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _tree_move_before__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./tree_move_before */ "./src/tree_move_before.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tree_move_before", function() { return _tree_move_before__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _tree_move_into__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./tree_move_into */ "./src/tree_move_into.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tree_move_into", function() { return _tree_move_into__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _tree_move_v2__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./tree_move_v2 */ "./src/tree_move_v2.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tree_move_v2", function() { return _tree_move_v2__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _tree_pointer_shift__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./tree_pointer_shift */ "./src/tree_pointer_shift.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tree_pointer_shift", function() { return _tree_pointer_shift__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _tree_print2__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./tree_print2 */ "./src/tree_print2.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tree_print2", function() { return _tree_print2__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _tree_random__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./tree_random */ "./src/tree_random.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tree_random", function() { return _tree_random__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _tree_resolve__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./tree_resolve */ "./src/tree_resolve.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tree_resolve", function() { return _tree_resolve__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _tree_shift__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./tree_shift */ "./src/tree_shift.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tree_shift", function() { return _tree_shift__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony import */ var _tree_sort_preorder__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./tree_sort_preorder */ "./src/tree_sort_preorder.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tree_sort_preorder", function() { return _tree_sort_preorder__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _tree_walk_preorder__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./tree_walk_preorder */ "./src/tree_walk_preorder.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tree_walk_preorder", function() { return _tree_walk_preorder__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _tree_walk_preorder_prefix__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./tree_walk_preorder_prefix */ "./src/tree_walk_preorder_prefix.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tree_walk_preorder_prefix", function() { return _tree_walk_preorder_prefix__WEBPACK_IMPORTED_MODULE_26__["default"]; });

/* harmony import */ var _tree_walk_preorder_rev__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./tree_walk_preorder_rev */ "./src/tree_walk_preorder_rev.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tree_walk_preorder_rev", function() { return _tree_walk_preorder_rev__WEBPACK_IMPORTED_MODULE_27__["default"]; });































/***/ }),

/***/ "./src/roots_flatten.js":
/*!******************************!*\
  !*** ./src/roots_flatten.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tree_walk_preorder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tree_walk_preorder */ "./src/tree_walk_preorder.js");


function roots_flatten(roots) {
  return Object(_tree_walk_preorder__WEBPACK_IMPORTED_MODULE_0__["default"])({
    roots: roots,
    retval: [],
    enter: function enter(_ref) {
      var node = _ref.node,
          retval = _ref.retval;
      retval.push(node);
    },
    leave: function leave(_ref2) {
      var node = _ref2.node;
      delete node.parent;
      delete node.children;
      delete node.siblings;
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (roots_flatten);

/***/ }),

/***/ "./src/tree_ancestors.js":
/*!*******************************!*\
  !*** ./src/tree_ancestors.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tree_map_orig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tree_map_orig */ "./src/tree_map_orig.js");
/* harmony import */ var _tree_walk_preorder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tree_walk_preorder */ "./src/tree_walk_preorder.js");
/* harmony import */ var _tree_from_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tree_from_array */ "./src/tree_from_array.js");



/**
 * Return all ancestors of a specific node
 *
 * @param nodes
 * @param target
 */

function tree_ancestors(nodes, target) {
  var tree = Object(_tree_from_array__WEBPACK_IMPORTED_MODULE_2__["default"])(nodes.map(_tree_map_orig__WEBPACK_IMPORTED_MODULE_0__["default"]));
  var out = [];

  for (var parent = tree.nodes_map[target.parent_id]; parent; parent = parent.parent) {
    out.push(parent.orig);
  }

  return out;
}

/* harmony default export */ __webpack_exports__["default"] = (tree_ancestors);

/***/ }),

/***/ "./src/tree_common_ancestor.js":
/*!*************************************!*\
  !*** ./src/tree_common_ancestor.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * Return ancestor shared by all nodes
 *
 * @param nodes
 */
function tree_common_ancestor(nodes) {
  if (nodes.length == 0) {
    return null;
  }

  var ancestors = [];
  nodes.forEach(function (node) {
    var tmp = [];

    for (var p = node; p; p = p.parent) {
      tmp.push(p);
    }

    ancestors.push(tmp.reverse());
  });
  var end = Math.min.apply(Math, _toConsumableArray(Object.values(ancestors).map(function (v) {
    return v.length;
  })));

  for (var m_parent = 0; m_parent < end; ++m_parent) {
    for (var i = 1; i < ancestors.length; ++i) {
      if (ancestors[i - 1][m_parent] !== ancestors[i][m_parent]) {
        return ancestors[0][m_parent - 1];
      }
    }
  }

  return ancestors[0][end - 2] || null;
}

/* harmony default export */ __webpack_exports__["default"] = (tree_common_ancestor);

/***/ }),

/***/ "./src/tree_descendants.js":
/*!*********************************!*\
  !*** ./src/tree_descendants.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _array_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array_index */ "./src/array_index.js");
/* harmony import */ var _tree_from_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tree_from_array */ "./src/tree_from_array.js");
/* harmony import */ var _tree_map_orig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tree_map_orig */ "./src/tree_map_orig.js");
/* harmony import */ var _tree_walk_preorder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tree_walk_preorder */ "./src/tree_walk_preorder.js");




/**
 * Return all descendants of selected nodes
 *
 * NOTE In order to get all descendants with its parent use `tree_intersect(nodes, selection)`
 *
 * @param nodes
 * @param selection
 */

function tree_descendants(nodes, selection) {
  var dump = 0;
  var descendants = [];
  var selection_map = Object(_array_index__WEBPACK_IMPORTED_MODULE_0__["default"])(selection, function (v) {
    return v.id;
  });
  Object(_tree_walk_preorder__WEBPACK_IMPORTED_MODULE_3__["default"])({
    roots: Object(_tree_from_array__WEBPACK_IMPORTED_MODULE_1__["default"])(nodes.map(_tree_map_orig__WEBPACK_IMPORTED_MODULE_2__["default"])).roots,
    leave: function leave(_ref) {
      var node = _ref.node;

      if (selection_map[node.id]) {
        dump--;
      }
    },
    visit: function visit(_ref2) {
      var node = _ref2.node;

      if (dump) {
        descendants.push(node.orig);
      }

      if (selection_map[node.id]) {
        dump++;
      }
    }
  });
  return descendants;
}

/* harmony default export */ __webpack_exports__["default"] = (tree_descendants);

/***/ }),

/***/ "./src/tree_diff.js":
/*!**************************!*\
  !*** ./src/tree_diff.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _array_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array_index */ "./src/array_index.js");
/* harmony import */ var _tree_from_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tree_from_array */ "./src/tree_from_array.js");
/* harmony import */ var _tree_map_orig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tree_map_orig */ "./src/tree_map_orig.js");
/* harmony import */ var _tree_walk_preorder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tree_walk_preorder */ "./src/tree_walk_preorder.js");




/**
 * Return nodes not presented in selection (descendants are counted).
 *
 * @param nodes
 * @param selection
 * @return {array} An array of removed nodes.
 */

function tree_diff(nodes, selection) {
  var keep = [];
  var selection_map = Object(_array_index__WEBPACK_IMPORTED_MODULE_0__["default"])(selection, function (v) {
    return v.id;
  });
  Object(_tree_walk_preorder__WEBPACK_IMPORTED_MODULE_3__["default"])({
    roots: Object(_tree_from_array__WEBPACK_IMPORTED_MODULE_1__["default"])(nodes.map(_tree_map_orig__WEBPACK_IMPORTED_MODULE_2__["default"])).roots,
    visit: function visit(_ref) {
      var node = _ref.node;

      if (selection_map[node.parent_id]) {
        selection_map[node.id] = true;
      }

      if (!selection_map[node.id]) {
        keep.push(node.orig);
      }
    }
  });
  return keep;
}

/* harmony default export */ __webpack_exports__["default"] = (tree_diff);

/***/ }),

/***/ "./src/tree_find_shifts.js":
/*!*********************************!*\
  !*** ./src/tree_find_shifts.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Return all possible shifts for the specified node pointer.
 *
 * @param nodes
 * @param pointer
 * @return {{shift_left, shift_right}}
 *
 * @deprecated Deprecated in favor of tree_shift
 */
function tree_find_shifts(nodes, pointer) {
  var dummy1 = {
    id: '__tree_find_shifts__:dummy1',
    parent_id: pointer.parent_id
  };
  var dummy2 = {
    id: '__tree_find_shifts__:dummy2',
    parent_id: pointer.parent_id
  };
  var tmp1 = nodes.slice();
  var tmp2 = nodes.slice();
  tmp1.splice(pointer.i, 0, dummy1);
  tmp2.splice(pointer.i, 0, dummy2);
  var shift_left = [];

  while (move_left(tmp1, dummy1)) {
    shift_left.push({
      i: tmp1.indexOf(dummy1),
      parent_id: dummy1.parent_id || null
    });
  }

  var shift_right = [];

  while (move_right(tmp2, dummy2)) {
    shift_right.push({
      i: tmp2.indexOf(dummy2),
      parent_id: dummy2.parent_id || null
    });
  }

  return {
    shift_left: shift_left,
    shift_right: shift_right
  };
} // Move node to the left (change parent to grandparent)


function move_left(nodes, target) {
  var i = nodes.indexOf(target);

  if (i == -1) {
    return false;
  } // Stop if target is not the last one among its siblings


  for (var j = i, end = nodes.length; ++j < end;) {
    if (nodes[j].parent_id === target.parent_id) {
      // Middle nodes cannot be moved left
      return false;
    }
  } // Find out parent node


  var ii = nodes.findIndex(function (v) {
    return v.id == target.parent_id;
  });

  if (ii == -1) {
    return false;
  } // Put target right after parent node, so it will be after it
  // among its siblings


  target.parent_id = nodes[ii].parent_id;
  nodes.splice(i, 1);
  nodes.splice(ii + 1 - (i < ii), 0, target);
  return true;
}

function move_right(nodes, target) {
  var i = nodes.indexOf(target);

  for (var j = i; --j >= 0;) {
    if (nodes[j].parent_id === target.parent_id) {
      var prev = nodes[j];
      var jj = nodes.length;

      while (--jj > 0) {
        if (nodes[jj].parent_id === prev.id) {
          break;
        }
      }

      if (jj == 0) {
        jj = j;
      }

      target.parent_id = prev.id;
      nodes.splice(i, 1);
      nodes.splice(jj + 1 - (i < jj), 0, target);
      return true;
    }
  }

  return false;
}

/* harmony default export */ __webpack_exports__["default"] = (tree_find_shifts);

/***/ }),

/***/ "./src/tree_finder_make.js":
/*!*********************************!*\
  !*** ./src/tree_finder_make.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _array_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array_index */ "./src/array_index.js");
/* harmony import */ var _tree_pointer_shift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tree_pointer_shift */ "./src/tree_pointer_shift.js");



function tree_finder_make(ctx) {
  ctx.selection_map = Object(_array_index__WEBPACK_IMPORTED_MODULE_0__["default"])(ctx.selection, function (v) {
    return v.id;
  });
  ctx.i = null;
  ctx.parent_id = null;
  ctx.shift_width = ctx.shift_width || 50;

  ctx.update = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return update.apply(void 0, [ctx].concat(args));
  };

  return ctx;
}

function update(ctx, x, y) {
  var container_rect = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ctx.container_rect;

  if (ctx.i === null) {
    // Update for the first time
    var closest = rects_closest_y(ctx.node_rects, y);
    ctx.x0 = x;
    ctx.y0 = y;
    ctx.xx0 = ctx.node_rects[closest.i].x;
    ctx.container_rect0 = container_rect;
  }

  ctx.dx = x - ctx.x0;
  ctx.dy = y - ctx.y0;
  ctx.container_rect = container_rect;
  var sx = ctx.container_rect0.x - ctx.container_rect.x;
  var sy = ctx.container_rect0.y - ctx.container_rect.y;
  x += sx;
  y += sy;
  var closest_i = numbers_closest_i_first(ctx.node_rects.map(function (v) {
    return v.y;
  }).concat(ctx.container_rect0.y + ctx.container_rect.h), y);
  console.log('closest_i', closest_i);
  var closest_rect = ctx.node_rects[closest_i] || {
    x: (ctx.node_rects[numbers_min_i_first(ctx.node_rects.map(function (v) {
      return v.y;
    }))] || ctx.container_rect0).x,
    y: ctx.container_rect0.y + ctx.container_rect.h,
    w: ctx.container_rect0.w,
    h: 0,
    node: null
  };
  var closest_node_i = ctx.nodes.indexOf(closest_rect.node);
  var shift = Math.round((ctx.xx0 - closest_rect.x + ctx.dx) / ctx.shift_width); // XXX is_position_allowed should be called on each update

  var i = closest_node_i == -1 ? ctx.nodes.length : closest_node_i;
  var tmp = Object(_tree_pointer_shift__WEBPACK_IMPORTED_MODULE_1__["default"])(ctx.nodes, ctx.selection_map, i, shift, ctx.is_shift_allowed);
  ctx.i = tmp.i;
  ctx.parent_id = tmp.parent_id;
  ctx.shift = tmp.shift_happened;
  return {
    x: closest_rect.x + ctx.shift * ctx.shift_width - sx,
    y: closest_rect.y - sy,
    w: closest_rect.w - ctx.shift * ctx.shift_width,
    h: closest_rect.h,
    before: true,
    shift: ctx.shift,
    node: ctx.nodes[closest_node_i] || null,
    i: ctx.i,
    parent_id: ctx.parent_id
  };
}

function numbers_min_i_first(numbers) {
  var min_d = Number.MAX_VALUE;
  var min_i = 0;

  for (var i = 0, end = numbers.length; i < end; ++i) {
    var v = numbers[0];

    if (min_d > v) {
      min_d = v;
      min_i = i;
    }
  }

  return min_i;
}
/**
 * Returns the index of the first closest number.
 *
 * @param numbers
 * @param v
 * @returns {number}
 */


function numbers_closest_i_first(numbers, v) {
  var min_d = Number.MAX_VALUE;
  var min_i = 0;

  for (var i = 0, end = numbers.length; i < end; ++i) {
    var d = Math.abs(v - numbers[i]);

    if (min_d > d) {
      min_d = d;
      min_i = i;
    }
  }

  return min_i;
} // Find a rectangle closest to a point.
//
// 1) Prefer those intersected by a point
// 2) Use only y coordinates
//
// +--------+
// | rect 1 |
// +--------+
// | rect 2 |
// +--------+
//


function rects_closest_y(rects, y) {
  var inside = null;
  var outside = null;

  for (var i = 0, end = rects.length; i < end; ++i) {
    var r = rects[i];
    var top = r.y;
    var bottom = r.y + r.h;

    if (y >= top && y < bottom) {
      // Point is inside. This is preferable rectangle.
      var _d = y - top;

      var _d2 = bottom - y;

      if (inside === null) {
        if (_d <= _d2) {
          inside = {
            i: i,
            r: r,
            d1: _d,
            d2: _d2,
            top: true,
            bottom: false
          };
        } else {
          inside = {
            i: i,
            r: r,
            d1: _d,
            d2: _d2,
            top: false,
            bottom: true
          };
        }

        continue;
      } // Preferable rectangle was already found.
      // Check if this one is more suitable.


      if (_d <= _d2) {
        // Top side is closer to a cursor
        if (inside.top && inside.d1 > _d) {
          // Top of a new rectangle is closer to a cursor
          inside = {
            i: i,
            r: r,
            d1: _d,
            d2: _d2,
            top: true,
            bottom: false
          };
          continue;
        }

        if (inside.bottom && inside.d2 > _d) {
          inside = {
            i: i,
            r: r,
            d1: _d,
            d2: _d2,
            top: true,
            bottom: false
          };
          continue;
        } // Previously found rect has border closer to a cursor

      } else {
        // Bottom side is closer to a cursor
        if (inside.top && inside.d1 > _d2) {
          inside = {
            i: i,
            r: r,
            d1: _d,
            d2: _d2,
            top: false,
            bottom: true
          };
          continue;
        }

        if (inside.bottom && inside.d2 > _d2) {
          inside = {
            i: i,
            r: r,
            d1: _d,
            d2: _d2,
            top: false,
            bottom: true
          };
          continue;
        } // Previously found rect has border closer to a cursor

      }

      continue;
    }

    if (inside !== null) {
      // Point is outside of a current rect.
      // But preferable rect was already found.
      // Ignore this one.
      continue;
    }

    var d1 = Math.abs(top - y);
    var d2 = Math.abs(bottom - y);

    if (outside === null) {
      if (d1 <= d2) {
        outside = {
          i: i,
          r: r,
          d1: d1,
          d2: d2,
          top: true,
          bottom: false
        };
      } else {
        outside = {
          i: i,
          r: r,
          d1: d1,
          d2: d2,
          top: false,
          bottom: true
        };
      }

      continue;
    }

    if (d1 <= d2) {
      if (outside.top && outside.d1 > d1) {
        outside = {
          i: i,
          r: r,
          d1: d1,
          d2: d2,
          top: true,
          bottom: false
        };
        continue;
      }

      if (outside.bottom && outside.d2 > d1) {
        outside = {
          i: i,
          r: r,
          d1: d1,
          d2: d2,
          top: true,
          bottom: false
        };
      }
    } else {
      if (outside.top && outside.d1 > d2) {
        outside = {
          i: i,
          r: r,
          d1: d1,
          d2: d2,
          top: false,
          bottom: true
        };
        continue;
      }

      if (outside.bottom && outside.d2 > d2) {
        outside = {
          i: i,
          r: r,
          d1: d1,
          d2: d2,
          top: false,
          bottom: true
        };
      }
    }
  }

  return inside || outside;
}

/* harmony default export */ __webpack_exports__["default"] = (tree_finder_make);

/***/ }),

/***/ "./src/tree_from_array.js":
/*!********************************!*\
  !*** ./src/tree_from_array.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * W A R N I N G
 *     This function will modify original values.
 *
 * @param {Array} nodes
 * @returns {{roots,nodes,nodes_map}}
 *
 * @link https://stackoverflow.com/a/37907458/1478566
 * @link http://krishnalearnings.blogspot.com/2015/11/basics-of-graph-in-computer-science.html
 */
function tree_from_array() {
  var nodes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var roots = [];
  var orphans = [];
  var nodes_map = {}; // Split all rows into nodes and potential roots.

  for (var i = 0, end = nodes.length; i < end; ++i) {
    var node = nodes[i];
    node.parent_id = node.parent_id || null;
    node.children = [];

    if (nodes_map[node.id]) {
      throw new Error('All rows should have unique ids');
    }

    nodes_map[node.id] = node;
    node.parent = nodes_map[node.parent_id] || null;

    if (node.parent) {
      // The most basic condition for circular dependency.
      if (node.parent === node) {
        panic(node);
      } // At this point just inserted node has no way to create
      // a circular dependency since no other nodes was able to
      // use it as a parent.


      node.parent.children.push(node);
      node.siblings = node.parent.children;
    } else {
      // Currently there is no parent for this node, but it may follow.
      orphans.push(node);
    }
  }

  var splice = {};

  for (var _i = 0, _end = orphans.length; _i < _end; ++_i) {
    var _node = orphans[_i];
    _node.parent = nodes_map[_node.parent_id] || null;

    if (_node.parent) {
      splice[_node.parent_id] = splice[_node.parent_id] + 1 || 0;

      _node.parent.children.splice(splice[_node.parent_id], 0, _node);

      _node.siblings = _node.parent.children; // At this point just inserted node can create a circular dependency.

      for (var p = _node; p; p = p.parent) {
        if (p.parent === _node) {
          panic(_node);
        }
      }
    } else {
      // Since all nodes was indexed and parent_id wasn't found
      // in index, consider this node as root.
      roots.push(_node);
      _node.siblings = roots;
    }
  }

  return {
    roots: roots,
    nodes: nodes,
    nodes_map: nodes_map
  };
}

function panic(node) {
  var path = [node.id];

  for (var p = node; p; p = p.parent) {
    path.push(p.parent_id);

    if (p.parent === node) {
      throw new Error("Circular dependency detected: ".concat(path.join(' -> ')));
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (tree_from_array);

/***/ }),

/***/ "./src/tree_from_string.js":
/*!*********************************!*\
  !*** ./src/tree_from_string.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @param {String} s
 * @returns {{roots,nodes,nodes_map}}
 */
function tree_from_string() {
  var s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  // 1. Each line represent one or several *node ids* separated by comma
  // 2. Duplicated *node ids* would be prefixed with a number starting from 2
  // 3. Parent of a node would be the first above it with less spaces
  var root = {
    id: null,
    children: []
  };
  var nodes = [];
  var nodes_map = {};

  var spaces_map = _defineProperty({}, null, 0);

  var parent = root;
  s.split('\n').forEach(function (line) {
    var names = line.trimLeft();

    if (names == '') {
      return;
    }

    var spaces = line.length - names.length;

    while (parent !== root && spaces_map[parent.id] >= spaces) {
      parent = parent.parent;
    }

    names.split(',').forEach(function (name) {
      var id = name;

      for (var suffix = 2; nodes_map[id] && suffix < 100; ++suffix) {
        id = "".concat(name).concat(suffix);
      }

      var node = {
        id: id,
        parent_id: parent.id,
        name: name,
        parent: parent,
        children: [],
        siblings: parent.children
      };
      spaces_map[id] = spaces;
      nodes.push(node);
      nodes_map[id] = node;
      parent.children.push(node);
    });
    parent = nodes[nodes.length - 1];
  });
  root.children.forEach(function (v) {
    return v.parent = null;
  });
  return {
    roots: root.children,
    nodes: nodes,
    nodes_map: nodes_map
  };
}

/* harmony default export */ __webpack_exports__["default"] = (tree_from_string);

/***/ }),

/***/ "./src/tree_insert.js":
/*!****************************!*\
  !*** ./src/tree_insert.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tree_from_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tree_from_array */ "./src/tree_from_array.js");
/* harmony import */ var _tree_map_orig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tree_map_orig */ "./src/tree_map_orig.js");
/* harmony import */ var _tree_walk_preorder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tree_walk_preorder */ "./src/tree_walk_preorder.js");



/**
 * Insert nodes at specific point.
 *
 * @param nodes
 * @param insertion
 * @param i
 * @param parent_id
 *
 * FIXME Throw an error if id from insertion is present in nodes
 */

function tree_insert(nodes, insertion, i, parent_id) {
  var items = [];
  Object(_tree_walk_preorder__WEBPACK_IMPORTED_MODULE_2__["default"])({
    roots: Object(_tree_from_array__WEBPACK_IMPORTED_MODULE_0__["default"])(insertion.map(_tree_map_orig__WEBPACK_IMPORTED_MODULE_1__["default"])).roots,
    visit: function visit(_ref) {
      var node = _ref.node,
          stack = _ref.stack;

      if (stack.length == 1) {
        node.orig.parent_id = parent_id;
      }

      items.push(node.orig);
    }
  });
  nodes.splice.apply(nodes, [i, 0].concat(items));
  return nodes;
}

/* harmony default export */ __webpack_exports__["default"] = (tree_insert);

/***/ }),

/***/ "./src/tree_intersect.js":
/*!*******************************!*\
  !*** ./src/tree_intersect.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _array_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array_index */ "./src/array_index.js");
/* harmony import */ var _tree_from_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tree_from_array */ "./src/tree_from_array.js");
/* harmony import */ var _tree_map_orig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tree_map_orig */ "./src/tree_map_orig.js");
/* harmony import */ var _tree_walk_preorder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tree_walk_preorder */ "./src/tree_walk_preorder.js");




/**
 * Return all nodes with sub nodes presented both
 * in nodes and selection.
 *
 * Return nodes present in both sides (descendants
 * are counted).
 *
 * @param nodes
 * @param selection
 * @return {array}
 */

function tree_intersect(nodes, selection) {
  var retval = [];
  var selection_map = Object(_array_index__WEBPACK_IMPORTED_MODULE_0__["default"])(selection, function (v) {
    return v.id;
  });
  Object(_tree_walk_preorder__WEBPACK_IMPORTED_MODULE_3__["default"])({
    roots: Object(_tree_from_array__WEBPACK_IMPORTED_MODULE_1__["default"])(nodes.map(_tree_map_orig__WEBPACK_IMPORTED_MODULE_2__["default"])).roots,
    visit: function visit(_ref) {
      var node = _ref.node;

      if (selection_map[node.parent_id]) {
        selection_map[node.id] = true;
      }

      if (selection_map[node.id]) {
        retval.push(node.orig);
      }
    }
  });
  return retval;
}

/* harmony default export */ __webpack_exports__["default"] = (tree_intersect);

/***/ }),

/***/ "./src/tree_map_orig.js":
/*!******************************!*\
  !*** ./src/tree_map_orig.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function tree_map_orig(orig) {
  return {
    id: orig.id,
    parent_id: orig.parent_id,
    orig: orig
  };
}

/* harmony default export */ __webpack_exports__["default"] = (tree_map_orig);

/***/ }),

/***/ "./src/tree_move.js":
/*!**************************!*\
  !*** ./src/tree_move.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _array_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array_index */ "./src/array_index.js");
/* harmony import */ var _tree_intersect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tree_intersect */ "./src/tree_intersect.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



/**
 * Move nodes into a new place. Basically - set new
 * parent for all `selection` and move them into a
 * new place `i`.
 *
 * @param nodes
 * @param selection
 * @param i
 * @param parent_id
 */

function tree_move(nodes, selection, i, parent_id) {
  var subsel = Object(_tree_intersect__WEBPACK_IMPORTED_MODULE_1__["default"])(nodes, selection);
  var subsel_ids = Object(_array_index__WEBPACK_IMPORTED_MODULE_0__["default"])(subsel, function (v) {
    return v.id;
  });

  if (!subsel_ids[parent_id]) {
    var next = [];
    selection.forEach(function (v) {
      return v.parent_id = parent_id;
    });
    var sub = 0;

    for (var j = 0; j < nodes.length; ++j) {
      var node = nodes[j];

      if (subsel_ids[node.id]) {
        if (j < i) {
          sub++;
        }
      } else {
        next.push(node);
      }
    }

    next.splice.apply(next, [i - sub, 0].concat(_toConsumableArray(subsel)));
    nodes.splice.apply(nodes, [0, nodes.length].concat(next));
  }

  return nodes;
}

/* harmony default export */ __webpack_exports__["default"] = (tree_move);

/***/ }),

/***/ "./src/tree_move_after.js":
/*!********************************!*\
  !*** ./src/tree_move_after.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function tree_move_after(nodes, target) {
  var _target$parent$childr;

  nodes.forEach(function (node) {
    if (node.parent) {
      node.parent.children.splice(node.parent.children.indexOf(node), 1);
      node.parent = null;
      node.parent_id = null;
    }
  });
  var i = target.parent.children.indexOf(target);

  (_target$parent$childr = target.parent.children).splice.apply(_target$parent$childr, [i + 1, 0].concat(_toConsumableArray(nodes)));

  nodes.forEach(function (node) {
    node.parent = target.parent;
    node.parent_id = target.parent_id;
  });
}

/* harmony default export */ __webpack_exports__["default"] = (tree_move_after);

/***/ }),

/***/ "./src/tree_move_before.js":
/*!*********************************!*\
  !*** ./src/tree_move_before.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function tree_move_before(nodes, target) {
  var _target$parent$childr;

  nodes.forEach(function (node) {
    if (node.parent) {
      node.parent.children.splice(node.parent.children.indexOf(node), 1);
      node.parent = null;
      node.parent_id = null;
    }
  });
  var i = target.parent.children.indexOf(target);

  (_target$parent$childr = target.parent.children).splice.apply(_target$parent$childr, [i, 0].concat(_toConsumableArray(nodes)));

  nodes.forEach(function (node) {
    node.parent = target.parent;
    node.parent_id = target.parent_id;
  });
}

/* harmony default export */ __webpack_exports__["default"] = (tree_move_before);

/***/ }),

/***/ "./src/tree_move_into.js":
/*!*******************************!*\
  !*** ./src/tree_move_into.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function tree_move_into(nodes, target) {
  var _target$children;

  nodes.forEach(function (node) {
    if (node.parent) {
      node.parent.children.splice(node.parent.children.indexOf(node), 1);
      node.parent = null;
      node.parent_id = null;
    }
  });

  (_target$children = target.children).splice.apply(_target$children, [0, 0].concat(_toConsumableArray(nodes)));

  nodes.forEach(function (node) {
    node.parent = target;
    node.parent_id = target.id;
  });
}

/* harmony default export */ __webpack_exports__["default"] = (tree_move_into);

/***/ }),

/***/ "./src/tree_move_v2.js":
/*!*****************************!*\
  !*** ./src/tree_move_v2.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function tree_move_before(nodes, selection, target) {
  var i = nodes.indexOf(target);
  return tree_move(nodes, selection, i, target.parent_id);
}

function tree_move_after(nodes, select, target) {
  var i = nodes.indexOf(target);
  return tree_move(nodes, select, i + 1, target.parent_id);
}

function tree_move_first_of(nodes, selection, target) {
  var i = Math.max(0, nodes.findIndex(function (v) {
    return v.parent_id == target.id;
  }));
  return tree_move(nodes, selection, i, target.id);
}

function tree_move_last_of(nodes, selection, target) {
  var i = nodes.length;

  while (--i >= 0) {
    if (nodes[i].parent_id == target.id) {
      ++i;
      break;
    }
  }

  return tree_move(nodes, selection, i, target.id);
}

function tree_move_v2(nodes, selection, target) {}

/* harmony default export */ __webpack_exports__["default"] = (tree_move_v2);

/***/ }),

/***/ "./src/tree_pointer_shift.js":
/*!***********************************!*\
  !*** ./src/tree_pointer_shift.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Вычисляет новое положение указателя вставки после его
 * смещения влево либо вправо.
 *
 * Указатель вставки - это место между узлами, куда будет что-то вставлено или перемещено.
 *
 * Assumptions:
 * 1) All node.id are unique and non null
 * 2) All node.parent_id are valid or null (i.e. all root nodes are those whose parent_id is null)
 *
 * @param {Array<{id:string,parent_id:string|null}>} nodes
 * @param {Object} selection_map
 * @param {Number} i
 * @param {Number} shift
 * @param {Function} is_shift_allowed
 * @return {{i, parent_id}}
 */
function tree_pointer_shift(nodes, selection_map, i, shift) {
  var is_shift_allowed = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : function () {
    return true;
  };
  var parent_id = i == nodes.length ? null : nodes[i].parent_id;

  if (shift < 0) {
    return shift_left(nodes, i, parent_id, shift, is_shift_allowed, selection_map);
  }

  return shift_right(nodes, i, parent_id, shift, is_shift_allowed);
}

function shift_right(nodes, i, parent_id, shift, is_shift_allowed, selection_map) {
  var shift_happened = 0;
  var out = {
    i: i,
    parent_id: parent_id,
    shift_happened: shift_happened
  }; // Shift to the right is possible for all but very first child.
  // In general, one shift to the right means to become a last
  // child of a previous sibling.

  while (shift > 0) {
    var i_sibl = i; // Look for a previous sibling.

    while (--i_sibl >= 0) {
      var sibl = nodes[i_sibl];

      if (sibl.parent_id == parent_id) {
        // Previous sibling was found.
        parent_id = sibl.id; // Look for its last child.

        for (var j = nodes.length; --j >= 0;) {
          if (nodes[j].parent_id == parent_id) {
            i = j + 1;
            break;
          } // In case when no child was found, `i` position
          // could be kept unchanged.

        }

        --shift;
        ++shift_happened;

        if (is_shift_allowed(i_sibl, nodes)) {
          out.i = i;
          out.parent_id = parent_id;
          out.shift_happened = shift_happened;
        }

        break;
      }
    }

    if (i_sibl == -1) {
      break;
    }
  }

  return out;
}

function shift_left(nodes, i, parent_id, shift, is_shift_allowed, selection_map) {
  var shift_happened = 0;
  var out = {
    i: i,
    parent_id: parent_id,
    shift_happened: shift_happened
  }; // Shift to the left is possible for last children only.
  // In general, one shift to the left means to become a next
  // brother of a current parent.

  while (shift < 0) {
    // Look for a next sibling
    for (var i_sibl = i, end = nodes.length; i_sibl < end; ++i_sibl) {
      var sibl = nodes[i_sibl];

      if (sibl.parent_id == parent_id) {
        // Next sibling was found.
        if (!selection_map[sibl.id]) {
          // And it is not in a selection_map.
          // Shift to the left is not allowed.
          return out;
        } // Last selected nodes could be shifted to the left.
        // Since all of them will change parent_id and
        // nothing will remain after them in a current branch.

      }
    } // No unselected next siblings was found.
    // Shift to the left is possible.
    // Look for a parent.


    var i_parent = null;

    for (var j = 0, _end = nodes.length; j < _end; ++j) {
      if (nodes[j].id == parent_id) {
        i_parent = j;
        break;
      }
    }

    if (i_parent === null) {
      // Parent was not found. Shift to the left is not possible.
      break;
    }

    ++shift;
    --shift_happened;
    i = i_parent + 1;
    parent_id = nodes[i_parent].parent_id; // XXX Not optimized

    if (is_shift_allowed(nodes.indexOf(function (v) {
      return v.id == parent_id;
    }), nodes)) {
      out.i = i;
      out.parent_id = parent_id;
      out.shift_happened = shift_happened;
    }
  }

  return out;
}

/* harmony default export */ __webpack_exports__["default"] = (tree_pointer_shift);

/***/ }),

/***/ "./src/tree_print2.js":
/*!****************************!*\
  !*** ./src/tree_print2.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tree_walk_preorder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tree_walk_preorder */ "./src/tree_walk_preorder.js");
/* harmony import */ var _tree_walk_preorder_prefix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tree_walk_preorder_prefix */ "./src/tree_walk_preorder_prefix.js");

 // noinspection NonAsciiCharacters

var prefix4 = {
  '├': '├── ',
  '│': '│   ',
  '└': '└── ',
  ' ': '    '
};

function tree_print2(_ref) {
  var roots = _ref.roots;
  return Object(_tree_walk_preorder__WEBPACK_IMPORTED_MODULE_0__["default"])({
    retval: '',
    roots: roots,
    visit: function visit(ctx) {
      ctx.retval += Object(_tree_walk_preorder_prefix__WEBPACK_IMPORTED_MODULE_1__["default"])(ctx).map(function (v) {
        return prefix4[v];
      }).join('') + (ctx.node.title || ctx.node.id) + '\n';
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (tree_print2);

/***/ }),

/***/ "./src/tree_random.js":
/*!****************************!*\
  !*** ./src/tree_random.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faker */ "faker");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_0__);


function tree_random() {
  var depth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var used = {};
  return nodes(1, depth, used);
}

function nodes(depth, end, used) {
  var lines = [];

  for (var i = 0, ii = Math.floor(Math.random() * 5) + 1; i < ii; ++i) {
    var w = void 0;

    for (var j = 0; j < 50; ++j) {
      if (!used[w = faker__WEBPACK_IMPORTED_MODULE_0___default.a.lorem.word()]) {
        break;
      }
    }

    if (used[w]) {
      throw new Error('No more unique words');
    }

    used[w] = true;
    lines.push(' '.repeat(depth * 4) + w);

    if (depth < end) {
      lines.push(nodes(depth + 1, end, used));
    }
  }

  return lines.join('\n');
}

/* harmony default export */ __webpack_exports__["default"] = (tree_random);

/***/ }),

/***/ "./src/tree_resolve.js":
/*!*****************************!*\
  !*** ./src/tree_resolve.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _array_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array_index */ "./src/array_index.js");
/* harmony import */ var _tree_find_shifts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tree_find_shifts */ "./src/tree_find_shifts.js");
/* harmony import */ var _tree_from_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tree_from_array */ "./src/tree_from_array.js");
/* harmony import */ var _tree_walk_preorder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tree_walk_preorder */ "./src/tree_walk_preorder.js");




/**
 * Like `path.resolve`. Given a starting point and
 * an offset you'll get target point.
 *
 * @param nodes
 * @param start
 * @param one_down
 * @param horizontal_shift
 * @return {{i, parent_id}}
 *
 * @deprecated Deprecated in favor of tree_shift
 */

function tree_resolve(nodes, start, one_down, horizontal_shift) {
  var end = false;
  var prev_id = null;
  var retval = {
    i: 0,
    parent_id: null
  };
  var nodes_map = Object(_array_index__WEBPACK_IMPORTED_MODULE_0__["default"])(nodes, function (v) {
    return v.id;
  });

  var _tree_from_array = Object(_tree_from_array__WEBPACK_IMPORTED_MODULE_2__["default"])(nodes.map(function (node, i) {
    return {
      id: node.id,
      parent_id: nodes_map[node.parent_id] ? node.parent_id : null,
      value: node,
      i: i
    };
  })),
      roots = _tree_from_array.roots;

  Object(_tree_walk_preorder__WEBPACK_IMPORTED_MODULE_3__["default"])({
    roots: roots,
    visit: function visit(ctx) {
      if (end) {
        retval.i = ctx.node.i;

        if (prev_id == ctx.node.parent_id) {
          retval.parent_id = ctx.node.parent_id;
        }

        return 'END';
      }

      if (ctx.node.id == start.id) {
        prev_id = ctx.node.id;

        if (one_down) {
          retval.i = ctx.node.i + 1;
          retval.parent_id = ctx.node.parent_id;
          end = true;
        } else {
          retval.i = ctx.node.i;
          retval.parent_id = ctx.node.parent_id;
          return 'END';
        }
      }
    }
  });

  if (horizontal_shift > 0) {
    var tmp = Object(_tree_find_shifts__WEBPACK_IMPORTED_MODULE_1__["default"])(nodes, retval);
    return tmp.shift_right[Math.min(horizontal_shift, tmp.shift_right.length) - 1] || retval;
  }

  if (horizontal_shift < 0) {
    var _tmp = Object(_tree_find_shifts__WEBPACK_IMPORTED_MODULE_1__["default"])(nodes, retval);

    return _tmp.shift_left[Math.min(-horizontal_shift, _tmp.shift_left.length) - 1] || retval;
  }

  return retval; // function move_right() {
  //     // 1. Find previous sibling
  //     // 2. Find its last child
  //     // 3. parent_id=<id of prev sibling>
  //     // 4. i=<after last child, or after prev sibling>
  // }
  //
  // function move_left() {
  //     // 1. Is it last child in its parent?
  //     // 2. If not, done.
  //     // 4. i=<after last child of grandparent>
  //     // 3. parent_id=<parent.parent_id>
  // }
}

/* harmony default export */ __webpack_exports__["default"] = (tree_resolve);

/***/ }),

/***/ "./src/tree_shift.js":
/*!***************************!*\
  !*** ./src/tree_shift.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Вычисляет новое положение узла после его смещения влево либо вправо.
 *
 * @param {Array<{id:string,parent_id:string|null}>} nodes
 * @param {Number} i
 * @param {Number} shift
 * @param {Function} is_shift_allowed
 * @return {{i, parent_id}}
 */
function tree_shift(nodes, i, shift) {
  var is_shift_allowed = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {
    return true;
  };

  if (nodes.length == 0) {
    return {
      i: i,
      parent_id: null,
      shift_real: 0
    };
  }

  var shift_real = 0;
  var parent_id = i == nodes.length ? null : nodes[i].parent_id;
  var reti = i;

  while (shift > 0) {
    // смещение вправо (только для не первого потомка)
    // войти внутрь предыдущего элемента и стать его последним потомком
    var i_sibl = reti;

    while (--i_sibl >= 0) {
      if (nodes[i_sibl].parent_id == parent_id) {
        // previous sibling was found
        if (!is_shift_allowed(i_sibl, nodes)) {
          // its not allowed to shift into it
          i_sibl = -1;
          break;
        }

        parent_id = nodes[i_sibl].id;

        for (var ii = nodes.length; --ii >= 0;) {
          if (nodes[ii].parent_id == parent_id) {
            reti = ii + 1;
            break;
          }
        }

        --shift;
        ++shift_real;
        break;
      }
    }

    if (i_sibl == -1) {
      break;
    }
  } // смещение влево (только для последних потомков)
  // поменять родителя на деда и обновить позицию так,
  // чтобы быть после своего текущего родителя, но перед его следующим братом


  while (shift < 0) {
    var end = false; // 1) нужно найти следующий элемент

    for (var j = reti; ++j < nodes.length;) {
      if (nodes[j].parent_id == parent_id) {
        // 2) если таковой найден - конец
        end = true;
        break;
      }
    }

    if (end) {
      break;
    }

    end = true; // 3) нужно найти своего родителя
    // 4) если его нет - конец

    for (var i_parent = 0; i_parent < nodes.length; ++i_parent) {
      if (nodes[i_parent].id == parent_id) {
        ++shift;
        --shift_real; // 5) если он находится передо мной, тогда мое место остается
        //    тем же (только если его сл. брат после меня); а мой дед
        //    становится моим родителем

        if (i_parent < reti) {
          parent_id = nodes[i_parent].parent_id; // The following is just an optimization to keep reti.
          // It is always safe to use `reti=j+1`.

          for (var k = i_parent; ++k < reti;) {
            if (nodes[k].parent_id == parent_id) {
              reti = k;
              break;
            }
          }

          end = false;
          break;
        } // 6) иначе (он находится после меня), мое место будет сразу
        //    после него; а мой дед становится моим родителем


        reti = i_parent + 1;
        parent_id = nodes[i_parent].parent_id;
        end = false;
        break;
      }
    }

    if (end) {
      break;
    }
  }

  return {
    i: reti,
    parent_id: parent_id,
    shift_real: shift_real
  };
}

/* harmony default export */ __webpack_exports__["default"] = (tree_shift);

/***/ }),

/***/ "./src/tree_sort_preorder.js":
/*!***********************************!*\
  !*** ./src/tree_sort_preorder.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function tree_sort_preorder(children) {
  var fcmp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : fcmp_nodes_id;
  children.sort(fcmp).forEach(function (v) {
    return tree_sort_preorder(v.children, fcmp);
  });
  return children;
}

function fcmp_nodes_id(a, b) {
  return a.id.localeCompare(b.id);
}

/* harmony default export */ __webpack_exports__["default"] = (tree_sort_preorder);

/***/ }),

/***/ "./src/tree_walk_preorder.js":
/*!***********************************!*\
  !*** ./src/tree_walk_preorder.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function tree_walk_preorder(ctx) {
  ctx.stack = ctx.stack || [];

  for (var i = 0, end = ctx.roots.length; i < end; ++i) {
    ctx.node = ctx.roots[i];

    if (tree_walk_preorder_int(ctx)) {
      break;
    }
  }

  return ctx.retval;
}

function tree_walk_preorder_int(ctx) {
  var visit = true;
  var walk = true;
  var end = false;
  ctx.stack.push(ctx.node);

  if (typeof ctx.enter == 'function') {
    ctx.enter_retval = ctx.enter(ctx);

    switch (ctx.enter_retval) {
      case 'END':
        visit = false;
        walk = false;
        end = true;
        break;

      case 'SKIP':
        visit = false;
        walk = false;
        break;
    }
  }

  if (visit && typeof ctx.visit == 'function') {
    ctx.visit_retval = ctx.visit(ctx);

    switch (ctx.visit_retval) {
      case 'END':
        walk = false;
        end = true;
        break;

      case 'SKIP':
        walk = false;
        break;
    }
  }

  if (walk) {
    var children = ctx.node.children;

    for (var i = 0, ii = children.length; i < ii; ++i) {
      ctx.node = children[i];

      if (tree_walk_preorder_int(ctx)) {
        end = true;
        break;
      }
    }
  }

  ctx.node = ctx.stack.pop();

  if (typeof ctx.leave == 'function') {
    ctx.leave_retval = ctx.leave(ctx); // noinspection EqualityComparisonWithCoercionJS

    if (ctx.leave_retval == 'END') {
      end = true;
    }
  }

  return end;
}

/* harmony default export */ __webpack_exports__["default"] = (tree_walk_preorder);

/***/ }),

/***/ "./src/tree_walk_preorder_prefix.js":
/*!******************************************!*\
  !*** ./src/tree_walk_preorder_prefix.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Render an array of strings representing position of a node on each level.
 * Used for printing tree.
 *
 * @param ctx
 * @returns {*}
 */
function tree_walk_preorder_prefix(ctx) {
  // Two conditions:
  // 1) a node is the last one among its siblings
  // 2) a node is a last one in its branch (a node is the last one in a walking stack)
  return ctx.stack.map(function (node, stack_i) {
    var siblings = node.parent ? node.parent.children : ctx.roots;
    var is_current = stack_i == ctx.stack.length - 1;
    var is_last_sibling = node === siblings[siblings.length - 1];

    if (is_last_sibling) {
      return is_current ? '└' : ' ';
    } else {
      return is_current ? '├' : '│';
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (tree_walk_preorder_prefix);

/***/ }),

/***/ "./src/tree_walk_preorder_rev.js":
/*!***************************************!*\
  !*** ./src/tree_walk_preorder_rev.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function tree_walk_preorder_rev(ctx) {
  ctx.stack = ctx.stack || [];

  for (var i = ctx.roots.length; i-- > 0;) {
    ctx.node = ctx.roots[i];

    if (tree_walk_preorder_rev_int(ctx)) {
      break;
    }
  }

  return ctx.retval;
}

function tree_walk_preorder_rev_int(ctx) {
  var visit = true;
  var walk = true;
  var end = false;
  ctx.stack.push(ctx.node);

  if (typeof ctx.enter == 'function') {
    ctx.enter_retval = ctx.enter(ctx);

    switch (ctx.enter_retval) {
      case 'END':
        visit = false;
        walk = false;
        end = true;
        break;

      case 'SKIP':
        visit = false;
        walk = false;
        break;
    }
  }

  if (visit && typeof ctx.visit == 'function') {
    ctx.visit_retval = ctx.visit(ctx);

    switch (ctx.visit_retval) {
      case 'END':
        walk = false;
        end = true;
        break;

      case 'SKIP':
        walk = false;
        break;
    }
  }

  if (walk) {
    var children = ctx.node.children;

    for (var i = children.length; i-- > 0;) {
      ctx.node = children[i];

      if (tree_walk_preorder_rev_int(ctx)) {
        end = true;
        break;
      }
    }
  }

  ctx.node = ctx.stack.pop();

  if (typeof ctx.leave == 'function') {
    ctx.leave_retval = ctx.leave(ctx); // noinspection EqualityComparisonWithCoercionJS

    if (ctx.leave_retval == 'END') {
      end = true;
    }
  }

  return end;
}

/* harmony default export */ __webpack_exports__["default"] = (tree_walk_preorder_rev);

/***/ }),

/***/ "faker":
/*!************************!*\
  !*** external "faker" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = faker;

/***/ })

/******/ });