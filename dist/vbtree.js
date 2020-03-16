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
/*! exports provided: tree_ancestor, tree_flatten, tree_from_array, tree_from_string, tree_from_string2, tree_move_after, tree_move_before, tree_move_inside, tree_print, tree_print2, tree_random, tree_sort_preorder, tree_stringify, tree_walk2, tree_walk_preorder, tree_walk_preorder2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tree_ancestor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tree_ancestor */ "./src/tree_ancestor.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tree_ancestor", function() { return _tree_ancestor__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _tree_flatten__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tree_flatten */ "./src/tree_flatten.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tree_flatten", function() { return _tree_flatten__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _tree_from_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tree_from_array */ "./src/tree_from_array.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tree_from_array", function() { return _tree_from_array__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _tree_from_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tree_from_string */ "./src/tree_from_string.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tree_from_string", function() { return _tree_from_string__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _tree_from_string2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tree_from_string2 */ "./src/tree_from_string2.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tree_from_string2", function() { return _tree_from_string2__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _tree_move_after__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tree_move_after */ "./src/tree_move_after.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tree_move_after", function() { return _tree_move_after__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _tree_move_before__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tree_move_before */ "./src/tree_move_before.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tree_move_before", function() { return _tree_move_before__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _tree_move_inside__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tree_move_inside */ "./src/tree_move_inside.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tree_move_inside", function() { return _tree_move_inside__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _tree_print__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tree_print */ "./src/tree_print.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tree_print", function() { return _tree_print__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _tree_print2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tree_print2 */ "./src/tree_print2.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tree_print2", function() { return _tree_print2__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _tree_random__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tree_random */ "./src/tree_random.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tree_random", function() { return _tree_random__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _tree_sort_preorder__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tree_sort_preorder */ "./src/tree_sort_preorder.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tree_sort_preorder", function() { return _tree_sort_preorder__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _tree_stringify__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tree_stringify */ "./src/tree_stringify.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tree_stringify", function() { return _tree_stringify__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _tree_walk2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tree_walk2 */ "./src/tree_walk2.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tree_walk2", function() { return _tree_walk2__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _tree_walk_preorder__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./tree_walk_preorder */ "./src/tree_walk_preorder.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tree_walk_preorder", function() { return _tree_walk_preorder__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _tree_walk_preorder2__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./tree_walk_preorder2 */ "./src/tree_walk_preorder2.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tree_walk_preorder2", function() { return _tree_walk_preorder2__WEBPACK_IMPORTED_MODULE_15__["default"]; });



















/***/ }),

/***/ "./src/tree_ancestor.js":
/*!******************************!*\
  !*** ./src/tree_ancestor.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 * Return ancestor shared by all nodes
 *
 * @param nodes
 */
function tree_ancestor(nodes) {
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

/* harmony default export */ __webpack_exports__["default"] = (tree_ancestor);

/***/ }),

/***/ "./src/tree_flatten.js":
/*!*****************************!*\
  !*** ./src/tree_flatten.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tree_walk_preorder2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tree_walk_preorder2 */ "./src/tree_walk_preorder2.js");


function tree_flatten(nodes) {
  var retval = [];
  return Object(_tree_walk_preorder2__WEBPACK_IMPORTED_MODULE_0__["default"])({
    nodes: nodes,
    retval: retval,
    enter: function enter(_ref) {
      var node = _ref.node;
      retval.push(node);
    },
    leave: function leave(_ref2) {
      var node = _ref2.node;
      delete node.parent;
      delete node.children;
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (tree_flatten);

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
 * @param {Array} items
 * @returns {Array} roots
 *
 * @link https://stackoverflow.com/a/37907458/1478566
 * @link http://krishnalearnings.blogspot.com/2015/11/basics-of-graph-in-computer-science.html
 */
function tree_from_array() {
  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var roots = [];
  var orphans = [];
  var nodes = {}; // Split all rows into nodes and potential roots.

  for (var i = 0, end = items.length; i < end; ++i) {
    var node = items[i];
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

/***/ "./src/tree_from_string2.js":
/*!**********************************!*\
  !*** ./src/tree_from_string2.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * 1. Should return an array of roots
 * 2. Each node should have unique ids
 *
 * @param s
 */
function tree_from_string2(s) {
  var counter = 0;
  var root = {
    id: null,
    parent_id: null,
    level: 0,
    parent: null,
    children: []
  };
  var parents = [root];
  s.split('\n').forEach(function (line) {
    var names = line.trimLeft();
    var level = line.length - names.length; // noinspection EqualityComparisonWithCoercionJS

    if (names == '') {
      return;
    }

    while (parents.length > 1 && parents[0].level >= level) {
      parents[0].level = parents.length - 1;
      parents[0].parent = parents[1];
      parents.shift();
    }

    var node;
    names.split(',').forEach(function (text) {
      node = {
        id: "node_".concat(counter++),
        parent_id: parents[0].id,
        text: text,
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

  return root.children;
}

/* harmony default export */ __webpack_exports__["default"] = (tree_from_string2);

/***/ }),

/***/ "./src/tree_move_after.js":
/*!********************************!*\
  !*** ./src/tree_move_after.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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

/***/ "./src/tree_move_inside.js":
/*!*********************************!*\
  !*** ./src/tree_move_inside.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function tree_move_inside(nodes, target) {
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

/* harmony default export */ __webpack_exports__["default"] = (tree_move_inside);

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

/***/ "./src/tree_print2.js":
/*!****************************!*\
  !*** ./src/tree_print2.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tree_walk_preorder2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tree_walk_preorder2 */ "./src/tree_walk_preorder2.js");


function tree_print2(nodes) {
  // Two conditions:
  // 1) Whether or not a node is the last one among its siblings
  // 2) Whether or not a node is the last one in a walking stack (or, whether or not a node is a last one in its branch)
  Object(_tree_walk_preorder2__WEBPACK_IMPORTED_MODULE_0__["default"])({
    nodes: nodes,
    visit: function visit(ctx) {
      var s = '';
      ctx.stack.forEach(function (node, stack_i) {
        var siblings = node.parent ? node.parent.children : nodes; // noinspection EqualityComparisonWithCoercionJS

        if (node === siblings[siblings.length - 1]) {
          // noinspection EqualityComparisonWithCoercionJS
          s += stack_i == ctx.stack.length - 1 ? '└── ' : '    ';
        } else {
          // noinspection EqualityComparisonWithCoercionJS
          s += stack_i == ctx.stack.length - 1 ? '├── ' : '│   ';
        }
      });
      console.log("".concat(s).concat(ctx.node.id));
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

/***/ "./src/tree_walk_preorder2.js":
/*!************************************!*\
  !*** ./src/tree_walk_preorder2.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function tree_walk_preorder2(ctx) {
  ctx.stack = [];

  for (var i = 0, end = ctx.nodes.length; i < end; ++i) {
    ctx.node = ctx.nodes[i];

    if (tree_walk_preorder2_int(ctx)) {
      break;
    }
  }

  return ctx.retval;
}

function tree_walk_preorder2_int(ctx) {
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

      if (tree_walk_preorder2_int(ctx)) {
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

/* harmony default export */ __webpack_exports__["default"] = (tree_walk_preorder2);

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