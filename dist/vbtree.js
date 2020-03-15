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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: tree_flatten, tree_from_rows, tree_from_string, tree_print, tree_random, tree_sort, tree_stringify, tree_walk2, tree_walk_preorder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tree_flatten__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tree_flatten */ "./src/tree_flatten.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tree_flatten", function() { return _tree_flatten__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _tree_from_rows__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tree_from_rows */ "./src/tree_from_rows.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tree_from_rows", function() { return _tree_from_rows__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _tree_from_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tree_from_string */ "./src/tree_from_string.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tree_from_string", function() { return _tree_from_string__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _tree_print__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tree_print */ "./src/tree_print.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tree_print", function() { return _tree_print__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _tree_random__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tree_random */ "./src/tree_random.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tree_random", function() { return _tree_random__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _tree_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tree_sort */ "./src/tree_sort.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tree_sort", function() { return _tree_sort__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _tree_stringify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tree_stringify */ "./src/tree_stringify.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tree_stringify", function() { return _tree_stringify__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _tree_walk2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tree_walk2 */ "./src/tree_walk2.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tree_walk2", function() { return _tree_walk2__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _tree_walk_preorder__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tree_walk_preorder */ "./src/tree_walk_preorder.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tree_walk_preorder", function() { return _tree_walk_preorder__WEBPACK_IMPORTED_MODULE_8__["default"]; });












/***/ }),

/***/ "./src/tree_flatten.js":
/*!*****************************!*\
  !*** ./src/tree_flatten.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function tree_flatten(children) {
  return walk([], children);
}

function walk(rows, children) {
  for (var i = 0, end = children.length; i < end; ++i) {
    var row = children[i];
    rows.push(row);
    walk(rows, row.children);
    delete row.parent;
    delete row.children;
  }

  return rows;
}

/* harmony default export */ __webpack_exports__["default"] = (tree_flatten);

/***/ }),

/***/ "./src/tree_from_rows.js":
/*!*******************************!*\
  !*** ./src/tree_from_rows.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * W A R N I N G
 *     This function will modify original values.
 *
 * @param rows
 * @returns {Array}
 *
 * @link https://stackoverflow.com/a/37907458/1478566
 * @link http://krishnalearnings.blogspot.com/2015/11/basics-of-graph-in-computer-science.html
 */
function tree_from_rows() {
  var rows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var roots = [];
  var orphans = [];
  var nodes = {}; // Split all rows into nodes and potential roots.

  for (var i = 0, end = rows.length; i < end; ++i) {
    var node = rows[i];
    node.parent_id = node.parent_id || null;
    node.children = [];

    if (nodes[node.id]) {
      throw new Error('All rows should have unique ids');
    }

    nodes[node.id] = node;

    if (node.parent = nodes[node.parent_id] || null) {
      // The most basic condition for circular dependency.
      if (node.parent === node) {
        panic(node);
      } // At this point just inserted node has no way to create
      // a circular dependency since no other nodes was able to
      // use it as a parent.


      node.parent.children.push(node);
    } else {
      // Currently there is no parent for this node, but it may follow.
      orphans.push(node);
    }
  }

  for (var _i = 0, _end = orphans.length; _i < _end; ++_i) {
    var _node = orphans[_i];

    if (_node.parent = nodes[_node.parent_id] || null) {
      _node.parent.children.push(_node); // At this point just inserted node can create a circular dependency.


      for (var p = _node; p; p = p.parent) {
        if (p.parent === _node) {
          panic(_node);
        }
      }
    } else {
      // Since all nodes was indexed and parent_id wasn't found
      // in index, consider this node as root.
      roots.push(_node);
    }
  }

  return roots;
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

/* harmony default export */ __webpack_exports__["default"] = (tree_from_rows);

/***/ }),

/***/ "./src/tree_from_string.js":
/*!*********************************!*\
  !*** ./src/tree_from_string.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tree_print__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tree_print */ "./src/tree_print.js");


if (0) { var tree; }
/**
 * 1. Should return an array of roots
 * 2. Each node should have unique ids
 *
 * @param s
 */


function tree_from_string(s) {
  var root = {
    id: null,
    level: 0,
    parent: null,
    children: []
  };
  var parents = [root];
  s.split('\n').forEach(function (line) {
    var names = line.trimLeft();
    var level = line.length - names.length;

    if (names == '') {
      return;
    }

    while (parents.length > 1 && parents[0].level >= level) {
      parents[0].level = parents.length - 1;
      parents[0].parent = parents[1];
      parents.shift();
    }

    var node;
    names.split(',').forEach(function (id) {
      node = {
        id: id,
        level: parents.length - 1,
        parent: parents[0],
        children: []
      };
      parents[0].children.push(node);
    });
    node.level = level;
    parents.unshift(node);
  });

  while (parents.length > 0) {
    parents[0].level = parents.length - 1;
    parents.shift();
  }

  return root;
}

/* harmony default export */ __webpack_exports__["default"] = (tree_from_string);

/***/ }),

/***/ "./src/tree_print.js":
/*!***************************!*\
  !*** ./src/tree_print.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tree_walk_preorder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tree_walk_preorder */ "./src/tree_walk_preorder.js");


function tree_print(children) {
  var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (child) {
    return child.id;
  };
  Object(_tree_walk_preorder__WEBPACK_IMPORTED_MODULE_0__["default"])(children, function (child, path) {
    console.log('    '.repeat(path.length - 1) + cb(child, path));
  });
}

/* harmony default export */ __webpack_exports__["default"] = (tree_print);

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
  return 'root\n' + nodes(1, depth, used);
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

/***/ "./src/tree_sort.js":
/*!**************************!*\
  !*** ./src/tree_sort.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function tree_sort(children) {
  var fcmp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : fcmp_tree_str;
  children.sort(fcmp).forEach(function (v) {
    return tree_sort(v.children, fcmp);
  });
  return children;
}

function fcmp_tree_str(a, b) {
  return a.id.localeCompare(b.id);
}

/* harmony default export */ __webpack_exports__["default"] = (tree_sort);

/***/ }),

/***/ "./src/tree_stringify.js":
/*!*******************************!*\
  !*** ./src/tree_stringify.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tree_walk_preorder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tree_walk_preorder */ "./src/tree_walk_preorder.js");


function tree_stringify(children) {
  var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (child) {
    return child.id;
  };
  var rows = [];
  Object(_tree_walk_preorder__WEBPACK_IMPORTED_MODULE_0__["default"])(children, function (child, path) {
    rows.push(' '.repeat(4 * (path.length - 1)) + cb(child, path));
  });
  return rows.join('\n');
}

/* harmony default export */ __webpack_exports__["default"] = (tree_stringify);

/***/ }),

/***/ "./src/tree_walk2.js":
/*!***************************!*\
  !*** ./src/tree_walk2.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function tree_walk2(nodes, fn) {
  for (var i = 0; i < nodes.length; ++i) {
    if (fn(nodes[i]) === false) {
      return false;
    }

    if (tree_walk2(nodes[i].children, fn) === false) {
      return false;
    }
  }

  return true;
}

/* harmony default export */ __webpack_exports__["default"] = (tree_walk2);

/***/ }),

/***/ "./src/tree_walk_preorder.js":
/*!***********************************!*\
  !*** ./src/tree_walk_preorder.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function tree_walk_preorder(children, cb) {
  var path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var p = path.concat(null),
      n = path.length;

  for (var i = 0, end = children.length; i < end; ++i) {
    var child = children[i];
    p[n] = i;

    if (cb(child, p) === false) {
      return false;
    }

    if (tree_walk_preorder(child.children, cb, p) === false) {
      return false;
    }
  }

  return true;
}

/* harmony default export */ __webpack_exports__["default"] = (tree_walk_preorder);

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