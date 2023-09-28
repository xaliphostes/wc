(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("@youwol/dataframe", [], factory);
	else if(typeof exports === 'object')
		exports["@youwol/dataframe"] = factory();
	else
		root["@youwol/dataframe"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! exports provided: merge, append, insertSerie, remove, DataFrame, Serie, createFrom, map, filter, forEach, reduce, apply, sort, cut, exists, info, createArray, createTyped, createEmptySerie, array, copy, duplicate, nameOfSerie, getNameSeries, matrix, squaredMatrix, symSquaredMatrix, Matrix, vector, Vector, isNaN, check, _if, Manager, FunctionalDecomposer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib */ "./lib/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["merge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "append", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["append"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "insertSerie", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["insertSerie"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["remove"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataFrame", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["DataFrame"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Serie", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["Serie"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createFrom", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["createFrom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "map", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["map"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["filter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["forEach"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reduce", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["reduce"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "apply", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["apply"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sort", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["sort"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cut", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["cut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "exists", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["exists"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "info", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["info"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createArray", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["createArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTyped", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["createTyped"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createEmptySerie", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["createEmptySerie"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "array", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["array"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["copy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "duplicate", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["duplicate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nameOfSerie", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["nameOfSerie"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNameSeries", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["getNameSeries"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matrix", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["matrix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "squaredMatrix", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["squaredMatrix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symSquaredMatrix", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["symSquaredMatrix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Matrix", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["Matrix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vector", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["vector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vector", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["Vector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNaN", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["isNaN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "check", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["check"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_if", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["_if"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Manager", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["Manager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FunctionalDecomposer", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["FunctionalDecomposer"]; });




/***/ }),

/***/ "./lib/algorithms/apply.ts":
/*!*********************************!*\
  !*** ./lib/algorithms/apply.ts ***!
  \*********************************/
/*! exports provided: apply */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apply", function() { return apply; });
/**
 * Apply a function to a serie. The function signature is
 * `fn(item: number|number[], index: number, serie: Serie)`
 * @note Operations are done using the items
 * @example
 * ```ts
 * const s1 = createSerie( {data: [1, 2, 3, 4, 5, 6]} ) // itemSize=1
 * const s2 = apply(s1, item => item**2 )
 *
 * // s1.array: [1, 2, 3,  4,  5,  6]
 * // s2.array: [1, 4, 9, 16, 25, 36]
 * ```
 * @example
 * ```ts
 * const s1 = createSerie( {data: [1, 2, 3, 4, 5, 6]}, itemSize: 3 )
 * const s2 = apply(s1, item => item.map( v => v**2) )
 *
 * // s1.array: [1, 2, 3,  4,  5,  6]
 * // s2.array: [1, 4, 9, 16, 25, 36]
 * ```
 * @category Algorithms
 */
const apply = (serie, fn) => {
    return serie.map((item, i) => fn(item, i, serie));
};


/***/ }),

/***/ "./lib/algorithms/cut.ts":
/*!*******************************!*\
  !*** ./lib/algorithms/cut.ts ***!
  \*******************************/
/*! exports provided: cut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cut", function() { return cut; });
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter */ "./lib/algorithms/filter.ts");

/**
 * cut a [[Serie]] using a callback function.
 * @category Algorithms
 */
const cut = (s, callback) => {
    if (s === undefined)
        throw new Error('serie is undefined');
    if (s.itemSize !== 1)
        throw new Error('serie should have itemSize = 1');
    return Object(_filter__WEBPACK_IMPORTED_MODULE_0__["filter"])(s, callback);
};


/***/ }),

/***/ "./lib/algorithms/filter.ts":
/*!**********************************!*\
  !*** ./lib/algorithms/filter.ts ***!
  \**********************************/
/*! exports provided: filter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony import */ var _serie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../serie */ "./lib/serie.ts");

/**
 * filter a [[Serie]] using a callback function.
 * @note Operations are done using the items
 * @example
 * ```js
 * const a = filter( df.series.a, v => v < 10 )
 * ```
 * @category Algorithms
 */
const filter = (s, callback) => {
    if (s === undefined)
        throw new Error('serie is undefined');
    const count = s.count;
    const r = [];
    for (let i = 0; i < count; ++i) {
        const v = s.itemAt(i);
        if (callback(v, i, s))
            r.push(v);
    }
    // const rr = createFrom(s.array, r.length/s.itemSize, s.itemSize)
    const rr = s.array.slice(0, r.length);
    r.forEach((v, i) => rr[i] = v);
    return _serie__WEBPACK_IMPORTED_MODULE_0__["Serie"].create({ array: rr, itemSize: s.itemSize });
};


/***/ }),

/***/ "./lib/algorithms/forEach.ts":
/*!***********************************!*\
  !*** ./lib/algorithms/forEach.ts ***!
  \***********************************/
/*! exports provided: forEach */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/**
 * @note Operations are done using the items
 * @example
 * ```ts
 * const s1 = createSerie( {data: createArray(12, i => i+1), itemSize: 3} )
 * s1.forEach( i1 => console.log(i1) )
 * forEach(s1, i1 => console.log(i1) )
 *
 * const s2 = createSerie( {data: createArray(12, i => i+2), itemSize: 3} )
 * forEach([s1,s2], ([i1, i2]) => console.log(i1, i2) )
 * ```
 * @category Algorithms
 */
const forEach = (series, callback) => {
    if (series === undefined)
        throw new Error('serie is undefined');
    if (!Array.isArray(series)) {
        for (let i = 0; i < series.count; ++i) {
            callback(series.itemAt(i), i, series);
        }
        return;
    }
    let count = series[0].count;
    for (let i = 0; i < count; ++i) {
        callback(series.map(serie => serie.itemAt(i)), i, series);
    }
};


/***/ }),

/***/ "./lib/algorithms/index.ts":
/*!*********************************!*\
  !*** ./lib/algorithms/index.ts ***!
  \*********************************/
/*! exports provided: map, filter, forEach, reduce, apply, sort, cut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map */ "./lib/algorithms/map.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "map", function() { return _map__WEBPACK_IMPORTED_MODULE_0__["map"]; });

/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter */ "./lib/algorithms/filter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return _filter__WEBPACK_IMPORTED_MODULE_1__["filter"]; });

/* harmony import */ var _forEach__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forEach */ "./lib/algorithms/forEach.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return _forEach__WEBPACK_IMPORTED_MODULE_2__["forEach"]; });

/* harmony import */ var _reduce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reduce */ "./lib/algorithms/reduce.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reduce", function() { return _reduce__WEBPACK_IMPORTED_MODULE_3__["reduce"]; });

/* harmony import */ var _apply__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./apply */ "./lib/algorithms/apply.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "apply", function() { return _apply__WEBPACK_IMPORTED_MODULE_4__["apply"]; });

/* harmony import */ var _sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sort */ "./lib/algorithms/sort.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sort", function() { return _sort__WEBPACK_IMPORTED_MODULE_5__["sort"]; });

/* harmony import */ var _cut__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cut */ "./lib/algorithms/cut.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cut", function() { return _cut__WEBPACK_IMPORTED_MODULE_6__["cut"]; });










/***/ }),

/***/ "./lib/algorithms/map.ts":
/*!*******************************!*\
  !*** ./lib/algorithms/map.ts ***!
  \*******************************/
/*! exports provided: map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/**
 * map a [[Serie]] onto another one using a map function.
 * @note Operations are done using the items
 * @example
 * ```ts
 * const s1 = createSerie( {data: createArray(12, i => i+1), itemSize: 3} )
 * s1.map( i1 => i1.map(i => i**2 ) )
 * map(s1, i1 => i1.map(i => i**2 ) )
 *
 * const s2 = createSerie( {data: createArray(12, i => i+2), itemSize: 3} )
 * console.log( map([s1, s2], ([i1, i2]) => vector(i1).dot( vector(i2) ) )
 * ```
 * @category Algorithms
 */
const map = (series, cb) => {
    if (Array.isArray(series)) {
        let R = undefined;
        let isArray = true;
        let id = 0;
        const count = series[0].count;
        const args = new Array(series.length);
        for (let i = 0; i < count; ++i) {
            for (let j = 0; j < series.length; ++j) {
                args[j] = series[j].itemAt(i);
            }
            const r = cb(args);
            if (R === undefined) {
                isArray = Array.isArray(r);
                R = series[0].image(count, isArray ? r.length : 1);
            }
            if (isArray) {
                r.forEach(v => R.array[id++] = v);
            }
            else {
                R.array[id++] = r;
            }
        }
        return R;
    }
    return series.map(cb);
};


/***/ }),

/***/ "./lib/algorithms/reduce.ts":
/*!**********************************!*\
  !*** ./lib/algorithms/reduce.ts ***!
  \**********************************/
/*! exports provided: reduce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reduce", function() { return reduce; });
/*
Our goal is to return a Serie or whatever:
```js
// sa and sb are Series with itemSize=3
//
const x = reduce([sa, sb], (cur, [sa, sb]) => cur + sa[0]*sb[0], 0)
const y = reduce([sa, sb], (cur, [sa, sb]) => [cur[0]+sa[0]*sb[0], cur[1]+sa[1]*sb[1], cur[2]+sa[2]*sb[2]], [0,0,0])
```
*/
/**
 * @returns a new [[Serie]]
 * @example
 * ```ts
 * const A = df.get('A')
 * const y = df.get('y')
 * const reduced = reduce([A,y], ([m,x]) => {
 *     let vec = vector(x)
 *     let mat = smatrix(m, 3, 3) // sym matrix rank 2
 *     return mat.transpose().multVec( vector(vec).normalize() ).array
 * })
 *
 * const c = reduce([sa, sb], (cur, [sa, sb]) => cur + sa[0]*sb[0], 0)
 * const d = reduce([sa, sb], (cur, [sa, sb]) => [cur[0]+sa[0]*sb[0], cur[1]+sa[1]*sb[1], cur[2]+sa[2]*sb[2]], [0,0,0])
 * ```
 * @category Algorithms
 */
const reduce = function (iterable, reduceFn, accumulator) {
    if (!Array.isArray(iterable)) {
        iterable.forEach(i => accumulator = reduceFn(accumulator, i));
        return accumulator;
    }
    else {
        const count = iterable[0].count;
        for (let i = 0; i < count; ++i) {
            accumulator = reduceFn(accumulator, iterable.map(serie => serie.itemAt(i))); //, i, iterable)
        }
        // iterable.map( (serie, i) => serie.forEach( j => accumulator[i] = reduceFn(accumulator[i], j) ) )
        return accumulator;
    }
};
/*
export const reduce = (series: Serie | Serie[], callback: Function) => {
    if (Serie.isSerie(series)) {
        const S = series as Serie
        const count = S.count
        const r = S.image(count, 1)
        
        for (let i=0; i<count; ++i) {
            const v = S.itemAt(i)
            r.array[i] = callback(S.itemAt(i), i, series)
        }

        return r
    }

    // Assert all series have the same nbr of element (count)
    const n     = series.length
    const count = series[0].count

    series.forEach( s => {
        if (s.count !== count) throw new Error('All series must have the same nbr of elements (count)')
    })

    let R: Serie = undefined
    const args = new Array<number[]|number>(n)//.fill([])
    let isArray = true
    let id = 0
    for (let i=0; i<count; ++i) {
        for (let j=0; j<n; ++j) {
            args[j] = series[j].itemAt(i)
        }

        const r = callback(args)
        
        if (R === undefined) {
            isArray = Array.isArray(r)
            // TODO: deal with Float32Array, count and itemSize by default !!!
            //R = createEmptySerie({Type: Float32Array, count, itemSize: r.length})
            R = series[0].image( count, (isArray?r.length:1) )
        }
        if (isArray) {
            r.forEach( v => R.array[id++] = v)
        }
        else {
            R.array[id++] = r
        }
    }

    return R
}
*/ 


/***/ }),

/***/ "./lib/algorithms/sort.ts":
/*!********************************!*\
  !*** ./lib/algorithms/sort.ts ***!
  \********************************/
/*! exports provided: sort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sort", function() { return sort; });
/**
 * Sort a [[Serie]] for which itemSize = 1
 * @category Algorithms
 */
const sort = (serie, fn = (a, b) => (a - b)) => {
    if (serie.itemSize !== 1)
        throw new Error('sort algorithm: itemSize must be 1');
    const s = serie.clone(false);
    s.array.sort(fn);
    return s;
};


/***/ }),

/***/ "./lib/conditional/check.ts":
/*!**********************************!*\
  !*** ./lib/conditional/check.ts ***!
  \**********************************/
/*! exports provided: check */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "check", function() { return check; });
/**
 * @category Conditional
 */
const check = (a, fn) => a.map(v => fn(v) ? true : false);


/***/ }),

/***/ "./lib/conditional/if.ts":
/*!*******************************!*\
  !*** ./lib/conditional/if.ts ***!
  \*******************************/
/*! exports provided: _if */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_if", function() { return _if; });
/**
 *
 * @param a The input serie
 * @param check The check function
 * @param True The function called when check returns true for a given item
 * @param False The function called when check returns false for a given item
 * @returns The new serie
 * @example
 * ```ts
 * _if( serie, item => item[0]<0, item => item[2]=1, item => item[2]=-1 )
 * ```
 * @category Conditional
 */
const _if = (a, check, True, False) => a.map((value, i) => check(value) === true ? True(value, i, a) : False(value, i, a));


/***/ }),

/***/ "./lib/conditional/index.ts":
/*!**********************************!*\
  !*** ./lib/conditional/index.ts ***!
  \**********************************/
/*! exports provided: isNaN, check, _if */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isNaN__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isNaN */ "./lib/conditional/isNaN.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNaN", function() { return _isNaN__WEBPACK_IMPORTED_MODULE_0__["isNaN"]; });

/* harmony import */ var _check__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check */ "./lib/conditional/check.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "check", function() { return _check__WEBPACK_IMPORTED_MODULE_1__["check"]; });

/* harmony import */ var _if__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./if */ "./lib/conditional/if.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_if", function() { return _if__WEBPACK_IMPORTED_MODULE_2__["_if"]; });






/***/ }),

/***/ "./lib/conditional/isNaN.ts":
/*!**********************************!*\
  !*** ./lib/conditional/isNaN.ts ***!
  \**********************************/
/*! exports provided: isNaN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNaN", function() { return isNaN; });
/**
 * @category Conditional
 */
const isNaN = (a) => {
    if (a.itemSize === 1) {
        return a.map(v => Number.isNaN(v));
    }
    return a.map(v => new Array(a.itemSize).fill(0).map(w => Number.isNaN(w)));
};


/***/ }),

/***/ "./lib/dataframe.ts":
/*!**************************!*\
  !*** ./lib/dataframe.ts ***!
  \**************************/
/*! exports provided: merge, append, insertSerie, remove, DataFrame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "append", function() { return append; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertSerie", function() { return insertSerie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataFrame", function() { return DataFrame; });
/**
 * Merge two dataframe into one
 * @example
 * ```ts
 * const df1 = DataFrame.create(...)
 * const df2 = DataFrame.create(...)
 * const df3 = DataFrame.create(...)
 * const df = merge( [df1, df2, df3] )
 * ```
 * @category DataFrame
 */
const merge = (dfs, index) => {
    // What if multiple column with same name
    // What about userData, metaData
    let series = dfs.reduce((acc, e) => ({ ...acc, ...e.series }), {});
    let userData = dfs.reduce((acc, e) => ({ ...acc, ...e.userData }), {});
    let metaData = dfs.reduce((acc, e) => ({ ...acc, ...e.metaData }), {});
    return DataFrame.create({ series, userData, metaData, index });
};
/**
 * Merge series in a dataframe and return a new dataframe
 * @example
 * ```ts
 * const df1 = DataFrame.create(...)
 * const df2 = append(df1, {
 *   a: createSerie(...),
 *   b: createSerie(...)
 * })
 * ```
 * @category DataFrame
 */
const append = ({ series, index, metaData, userData }, news) => {
    //! need to check that rows count are compatible
    return DataFrame.create({ series: { ...series, ...news }, index, metaData, userData });
};
/**
 * Mutating function which add a new (or an existing) serie into a dataframe
 * @param {df: DataFrame, s: Serie, name: string} param0 The serie s into the dataframe df. If the serie
 * already exist, it is replaced. Serie's count is checked against existing series in the dataframe, so that
 * a dataframe will contain only series with same count.
 * @returns The input dataframe (not a copy!)
 */
const insertSerie = ({ df, serie, name }) => {
    //! need to check that rows count are compatible
    const names = Object.entries(df.series).map(([name, serie]) => name);
    const count = names.length !== 0 ? df.series[names[0]].count : 0;
    if (count !== 0 && serie.count !== count) {
        throw new Error('Provided serie count must be equal to existing series count');
    }
    df.series[name] = serie;
    return df;
};
/**
 * Remove a serie or a list of series (given by there name) from a dataframe.
 * @param dataframe The dataframe
 * @param serieName The serie of a list of series given by their names
 * @returns A new [[Dataframe]] even if no modification
 * @example
 * ```ts
 * let df = ...
 *
 * df = df.remove(['a', 'toto'])
 * ```
 */
const remove = (dataframe, series) => {
    return dataframe.remove(series);
};
/**
 * @category Base
 */
class DataFrame {
    constructor(series, index, userData, metaData) {
        /**
         * If provided, the column that acts as index
         */
        this.index = undefined;
        /**
         *
         * Mutable dictionary to store consumer data (context information of the usage)
         */
        this.userData = {};
        /**
         *
         * Dictionary to store metadata (context information of the dataframe's creation)
         */
        this.metaData = {};
        this.series = series;
        this.index = index;
        this.userData = userData;
        this.metaData = metaData;
    }
    /**
     * Convenient method to iterate over all series
     * @example
     * ```ts
     * const df = DataFrame.create({
     *      series: {
     *          a: ...,
     *          b: ...,
     *      }
     * })
     *
     * df.forEach( (name, serie, i) => {
     *      console.log('serie named', name,
     *                  'at index', i,
     *                  ', count=', serie.count,
     *                  ', itemSize=', serie.itemSize
     *      )
     * })
     * ```
     */
    forEach(cb) {
        Object.entries(this.series).forEach(([name, serie], i) => cb(name, serie, i));
    }
    /**
     * Check if the serie named name is in the dataframe
     * @param name
     */
    contains(name) {
        return this.series[name] !== undefined;
    }
    /**
     * The dataframe class which contains a list of [[Serie]]
     * @example
     * ```ts
     * const df = DataFrame.create({
     *     series: {
     *          a: createEmptySerie({
     *              Type: Float32Array, count:2, itemSize:3, shared: true
     *          }),
     *          b: createEmptySerie({
     *              Type: Float64Array, count:2, itemSize:3, shared: false
     *          }),
     *          c: createSerie({data: [0,1,2,3,4,5,6,7,8,9], itemSize: 5}),
     *          d: createSerie({data: [0,1,2,3,4,5,6,7,8,9], itemSize: 5}),
     *     }
     * })
     * ```
     * @category DataFrame
     */
    static create({ series, userData, metaData, index }) {
        return new DataFrame(series, index, userData || {}, metaData || {});
    }
    /**
     * Remove a serie or a list of series (given by their name) from this dataframe.
     * @param serieName
     * @returns A new [[Dataframe]] even if no modification
     * @example
     * ```ts
     * let df = ...
     *
     * df = df.remove(['a', 'toto'])
     * ```
     */
    remove(serieName) {
        const df = this.clone();
        if (Array.isArray(serieName)) {
            serieName.forEach(name => {
                if (df.series.hasOwnProperty(name)) {
                    delete df.series[name];
                }
            });
        }
        else {
            if (df.series.hasOwnProperty(serieName)) {
                delete df.series[serieName];
            }
        }
        return df;
    }
    clone() {
        return new DataFrame(this.series, this.index, this.userData, this.metaData);
    }
}


/***/ }),

/***/ "./lib/decompose/decomposer.ts":
/*!*************************************!*\
  !*** ./lib/decompose/decomposer.ts ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./lib/decompose/functional-decomposer.ts":
/*!************************************************!*\
  !*** ./lib/decompose/functional-decomposer.ts ***!
  \************************************************/
/*! exports provided: FunctionalDecomposer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunctionalDecomposer", function() { return FunctionalDecomposer; });
/**
 * User define attribute based on a DataFrame
 * @example
 * ```ts
 * const mng = new Manager(df, [
 *     new FunctionalDecomposer(1, 'MyAttr', (df: DataFrame) => {
 *         const fct = p => p[0]**2 - p[1]***3 + Math.abs(p[2])
 *         df.get('positions').map( p => fct(p) )
 *     })
 * ])
 * ```
 * @example
 * ```ts
 * const mng = new Manager(df, [
 *     new FunctionalDecomposer(3, 'zscaled', (df: DataFrame) => {
 *         const scale = 10
 *         df.get('positions').map( (p,i) => [p[0], p[1], p[2]*scale] )
 *     })
 * ])
 * ```
 * @category Decomposition
 */
class FunctionalDecomposer {
    /**
     *
     * @param itemSize The item size of the attribute
     * @param name The name of the atribute
     * @param fct The fonctional
     * @see [[Functional]]
     */
    constructor(itemSize, name, fct) {
        this.itemSize = itemSize;
        this.name = name;
        this.fct = fct;
    }
    /**
     * @hidden
     */
    names(df, itemSize, serie, name) {
        if (itemSize !== this.itemSize)
            return [];
        const s = this.fct(df);
        if (!s)
            return [];
        return [this.name];
    }
    /**
     * @hidden
     */
    serie(df, itemSize, name) {
        if (itemSize !== this.itemSize || this.name !== name)
            return undefined;
        return this.fct(df); //.setName(this.name)
    }
}


/***/ }),

/***/ "./lib/decompose/index.ts":
/*!********************************!*\
  !*** ./lib/decompose/index.ts ***!
  \********************************/
/*! exports provided: Manager, FunctionalDecomposer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _decomposer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decomposer */ "./lib/decompose/decomposer.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manager */ "./lib/decompose/manager.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Manager", function() { return _manager__WEBPACK_IMPORTED_MODULE_1__["Manager"]; });

/* harmony import */ var _functional_decomposer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functional-decomposer */ "./lib/decompose/functional-decomposer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FunctionalDecomposer", function() { return _functional_decomposer__WEBPACK_IMPORTED_MODULE_2__["FunctionalDecomposer"]; });






/***/ }),

/***/ "./lib/decompose/manager.ts":
/*!**********************************!*\
  !*** ./lib/decompose/manager.ts ***!
  \**********************************/
/*! exports provided: Manager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Manager", function() { return Manager; });
/**
 * Manager of (virtual or not) series.
 *
 * Allows to decompose series in other user-defined series.
 * Let say that you have a serie `W` with `itemSize=6`, meaning that items
 * are potentially components of symmetric rank 2 tensors of dimension 3.
 * Then, using this library, it is possible to get names and underlaying
 * series of decompositions. For instance, it is possible to get the components (`itemSize=1`),
 * eigen values (`itemSize=1`), eigen vectors(`itemSize=3`)... from this original `W` serie.
 * @example
 * ```ts
 * const df = DataFrame.create({
 *     series: {
 *         positions: Serie.create( {array: [1,2,3, 4,5,6], itemSize: 3} ),
 *         scalar   : Serie.create( {array: [4,9], itemSize: 1}),
 *         U        : Serie.create( {array: [6,5,4, 3,2,1], itemSize: 3} ),
 *         S        : Serie.create( {array: [10,11,12,13,14,15, 16,17,18,19,20,21], itemSize: 6} )
 *     }
 * })
 *
 * const manager = new Manager(df, {
 *      decomposers: [
 *          new PositionDecomposer,
 *          new ComponentDecomposer,
 *          new EigenValuesDecomposer,
 *          new EigenVectorsDecomposer
 *      ],
 *      dimension: 3
 * })
 *
 * const x   = manager.serie(1, 'x')   // x coordinate
 * const S1  = manager.serie(1, 'S1')  // first eigen value
 * const vS1 = manager.serie(3, 'S1')  // first eigen vector
 * const Sxx = manager.serie(1, 'Sxx') // xx component of the stress tensor
 *
 * console.log( manager.names(1) ) // display all names for itemSize = 1 // scalars
 * console.log( manager.names(3) ) // display all names for itemSize = 3 // vectors
 * ```
 * @category Decomposition
 */
class Manager {
    /**
     * Two usage of the constructor for compatibility reason:
     *
     * - Old fashioned. By default the dimension is set to 3 and cannot be changed:
     * ```ts
     * const mng = new Manager(df, [
     *     new PositionDecomposer,
     *     new ComponentDecomposer
     * ])
     * ```
     *
     * - New way. You have to provide the dimension
     * ```ts
     * const mng = new Manager(df, {
     *     decomposers: [
     *         new PositionDecomposer,
     *         new ComponentDecomposer
     *     ],
     *     dimension: 2
     * })
     * ```
     */
    constructor(df, options) {
        this.df = df;
        this.ds_ = [];
        this.dimension = 3;
        if (options) {
            // For compatibility reason
            if (Array.isArray(options)) {
                console.warn('Deprecated ctor for Manager');
                this.ds_ = options;
            }
            else {
                if (options.decomposers)
                    this.ds_ = options.decomposers;
                if (options.dimension)
                    this.dimension = options.dimension;
            }
        }
    }
    /**
     * Add a new Decomposer in this [[Manager]]
     */
    add(d) {
        this.ds_.push(d);
    }
    /**
     * Remove all registered decomposers from this manager
     */
    clear() {
        this.ds_ = [];
    }
    /**
     * Get all possible decomposed names for a given itemSize
     * @param itemSize
     * @returns
     */
    names(itemSize) {
        let names = new Set();
        // add series with same itemSize
        Object.entries(this.df.series).forEach(([name, serie]) => {
            // ! use dimension
            if (serie.itemSize === itemSize && serie.dimension === this.dimension) {
                // Avoid exposing directly 'positions' and 'indices'
                // if ( !(itemSize===3 && (name==='positions'||name==='indices')) ) {
                if (name !== 'positions' && name !== 'indices') {
                    names.add(name);
                }
            }
            this.ds_.forEach(d => {
                d.names(this.df, itemSize, serie, name).forEach(n => names.add(n));
            });
        });
        return Array.from(names);
    }
    /**
     * Check if the attribute named name with itemSize exists in the manager
     */
    contains(itemSize, name) {
        const n = this.names(itemSize);
        return n.includes(name);
    }
    /**
     * For a given itemSize and a decomposed's name, get the corresponding serie
     */
    serie(itemSize, name) {
        for (let [mname, serie] of Object.entries(this.df.series)) {
            if (serie.itemSize === itemSize && name === mname) {
                return serie.clone(false);
            }
        }
        for (let d of this.ds_) {
            const serie = d.serie(this.df, itemSize, name);
            if (serie)
                return serie;
        }
        return undefined;
    }
}


/***/ }),

/***/ "./lib/index.ts":
/*!**********************!*\
  !*** ./lib/index.ts ***!
  \**********************/
/*! exports provided: merge, append, insertSerie, remove, DataFrame, Serie, createFrom, map, filter, forEach, reduce, apply, sort, cut, exists, info, createArray, createTyped, createEmptySerie, array, copy, duplicate, nameOfSerie, getNameSeries, matrix, squaredMatrix, symSquaredMatrix, Matrix, vector, Vector, isNaN, check, _if, Manager, FunctionalDecomposer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dataframe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataframe */ "./lib/dataframe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["merge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "append", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["append"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "insertSerie", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["insertSerie"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["remove"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataFrame", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["DataFrame"]; });

/* harmony import */ var _serie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./serie */ "./lib/serie.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Serie", function() { return _serie__WEBPACK_IMPORTED_MODULE_1__["Serie"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createFrom", function() { return _serie__WEBPACK_IMPORTED_MODULE_1__["createFrom"]; });

/* harmony import */ var _algorithms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./algorithms */ "./lib/algorithms/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "map", function() { return _algorithms__WEBPACK_IMPORTED_MODULE_2__["map"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return _algorithms__WEBPACK_IMPORTED_MODULE_2__["filter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return _algorithms__WEBPACK_IMPORTED_MODULE_2__["forEach"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reduce", function() { return _algorithms__WEBPACK_IMPORTED_MODULE_2__["reduce"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "apply", function() { return _algorithms__WEBPACK_IMPORTED_MODULE_2__["apply"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sort", function() { return _algorithms__WEBPACK_IMPORTED_MODULE_2__["sort"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cut", function() { return _algorithms__WEBPACK_IMPORTED_MODULE_2__["cut"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./lib/utils/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "exists", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["exists"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "info", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["info"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createArray", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["createArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTyped", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["createTyped"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createEmptySerie", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["createEmptySerie"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "array", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["array"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["copy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "duplicate", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["duplicate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nameOfSerie", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["nameOfSerie"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNameSeries", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["getNameSeries"]; });

/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views */ "./lib/views/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matrix", function() { return _views__WEBPACK_IMPORTED_MODULE_4__["matrix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "squaredMatrix", function() { return _views__WEBPACK_IMPORTED_MODULE_4__["squaredMatrix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symSquaredMatrix", function() { return _views__WEBPACK_IMPORTED_MODULE_4__["symSquaredMatrix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Matrix", function() { return _views__WEBPACK_IMPORTED_MODULE_4__["Matrix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vector", function() { return _views__WEBPACK_IMPORTED_MODULE_4__["vector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vector", function() { return _views__WEBPACK_IMPORTED_MODULE_4__["Vector"]; });

/* harmony import */ var _conditional__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./conditional */ "./lib/conditional/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNaN", function() { return _conditional__WEBPACK_IMPORTED_MODULE_5__["isNaN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "check", function() { return _conditional__WEBPACK_IMPORTED_MODULE_5__["check"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_if", function() { return _conditional__WEBPACK_IMPORTED_MODULE_5__["_if"]; });

/* harmony import */ var _decompose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./decompose */ "./lib/decompose/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Manager", function() { return _decompose__WEBPACK_IMPORTED_MODULE_6__["Manager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FunctionalDecomposer", function() { return _decompose__WEBPACK_IMPORTED_MODULE_6__["FunctionalDecomposer"]; });








// export * from './extensions'


/***/ }),

/***/ "./lib/serie.ts":
/*!**********************!*\
  !*** ./lib/serie.ts ***!
  \**********************/
/*! exports provided: Serie, createFrom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Serie", function() { return Serie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFrom", function() { return createFrom; });
/* harmony import */ var _utils_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/create */ "./lib/utils/create.ts");

/**
 * T is either an Array, or a TypedArray (Float32Array etc...) supported by an
 * ArrayBuffer or SharedArrayBuffer
 * @category Base
 */
class Serie {
    constructor(array, itemSize, shared, userData = {}, dimension = 3) {
        /**
         * The dimension of the space. As an example, for a numerical code
         * computing stresses and/or displacement fields, in 3D the dimension
         * will be 3 and in 2D the dimension will be 2. It is the user
         * responsability to properly set this value.
         */
        this.dimension = 3;
        /**
         *
         * Mutable dictionary to store consumer data (context information of the usage)
         */
        this.userData = {};
        if (array.length % itemSize !== 0)
            throw new Error(`array length (${array.length}) is not a multiple of itemSize (${itemSize})`);
        this.array = array;
        this.itemSize = itemSize;
        this.shared = shared;
        this.userData = userData;
        this.dimension = dimension; // ! use dimension
    }
    static isSerie(s) {
        return 'array' in s && 'itemSize' in s;
    }
    /**
     *
     * @param array The array of values. Can be either an instance of Array or a TypedArray.
     * For TypeArray, the underlaying buffer can be either of type ArrayBuffer or
     * SharedArrayBuffer
     * @param itemSize The size of each item. [[count]] will be array.length / [[itemSize]]
     * @param userData user data
     */
    static create({ array, itemSize, userData, dimension = 3 // ! use dimension
     }) {
        // Type is either a Int8Array, Uint8Array etc...
        if (itemSize <= 0)
            throw new Error('itemSize must be > 0');
        if (array === undefined)
            throw new Error('array must be provided');
        // Check that SharedArrayBuffer are supported...
        if (typeof SharedArrayBuffer === "undefined") {
            return new Serie(array, itemSize, false, userData, dimension); // ! use dimension
        }
        const shared = array.buffer instanceof SharedArrayBuffer;
        return new Serie(array, itemSize, shared, userData, dimension); // ! use dimension
    }
    /**
     * Get the size of this serie, i.e., being [[count]] * [[itemSize]]
     */
    get length() {
        return this.array.length;
    }
    /**
     * Get the number of items (an item being of size [[itemCount]])
     */
    get count() {
        return this.array.length / this.itemSize;
    }
    /**
     * True if this serie is an Array<number
     */
    get isArray() {
        return Array.isArray(this.array);
    }
    /**
     * True if this serie is a TypedArray
     * @see isTypedArray
     */
    get isArrayBuffer() {
        return this.isTypedArray;
    }
    /**
     * True if this serie is a TypedArray
     * @see isArrayBuffer
     */
    get isTypedArray() {
        return !this.isArray;
    }
    /**
     * True if this serie is the buffer of the TypedArray is
     * a SharedArrayBuffer
     */
    get isShared() {
        if (this.isArray)
            return false;
        return this.array.buffer instanceof SharedArrayBuffer;
    }
    at(i) {
        return this.array[i];
    }
    itemAt(i) {
        const size = this.itemSize;
        if (size === 1)
            return this.at(i);
        const start = i * size;
        const r = new Array(size).fill(0);
        for (let j = 0; j < size; ++j)
            r[j] = this.array[start + j];
        return r;
    }
    setItemAt(i, value) {
        if (i >= this.count)
            throw new Error('array index out of bounds');
        const size = this.itemSize;
        if (size === 1) {
            if (Array.isArray(value))
                throw new Error('value must be a number');
            this.array[i] = value;
            return;
        }
        const v = value;
        if (v.length !== size)
            throw new Error(`array length (${v.length}) must equals itemSize (${size})`);
        for (let j = 0; j < size; ++j) {
            this.array[i * size + j] = value[j];
        }
    }
    /**
     * Iterate over all items
     * @param callback The callback that will called for each item
     */
    forEach(callback) {
        for (let i = 0; i < this.count; ++i) {
            callback(this.itemAt(i), i, this);
        }
    }
    /**
     * Map the items
     */
    map(callback) {
        const tmp = callback(this.itemAt(0), 0, this);
        const itemSize = (Array.isArray(tmp) ? tmp.length : 1);
        const R = this.image(this.count, itemSize);
        let id = 0;
        for (let i = 0; i < this.count; ++i) {
            const r = callback(this.itemAt(i), i, this);
            if (itemSize === 1) {
                R.array[id++] = r;
            }
            else {
                for (let j = 0; j < itemSize; ++j) {
                    R.array[id++] = r[j];
                }
            }
        }
        return R;
    }
    /**
     * Reduce each item
     */
    // reduce(callback: Function, accumulator: number|number[]) {
    //     if (this.itemSize === 1) {
    //         return this.array.reduce(callback as any, accumulator)
    //     }
    //     // for (let i of iterable) {
    //     //     accumulator = reduceFn(accumulator, i)
    //     // }
    //     // return accumulator
    //
    //     const R = this.image(this.count, this.itemSize)
    //     let id = 0
    //     for (let i=0; i<this.count; ++i) {
    //         const r = callback(this.itemAt(i), i, this)
    //         for (let j=0; j<this.itemSize; ++j) {
    //             R.array[id++] = r[j]
    //         }
    //     }
    //     return R
    // }
    /**
     * Return a new serie similar to this (same type of array and buffer), and with
     * the same count and itemSize.
     * @param resetValues True if reset the values to 0, false otherwise (default)
     * @see newInstance
     * @see image
     */
    clone(resetValues = false) {
        const s = new Serie(this.array.slice(0, this.count * this.itemSize), this.itemSize, this.shared, this.userData, this.dimension); // ! use dimension
        if (resetValues) {
            s.array.forEach((_, i) => s.array[i] = 0); // reset
        }
        return s;
    }
    /**
     * Same as [[image]]. All values are set to 0 (i.e., 0, [0,0], [0,0,0]...)
     * @see clone
     * @see image
     */
    newInstance({ count, itemSize, initialize = true }) {
        const s = new Serie(createFrom({ array: this.array, count, itemSize }), itemSize, this.shared, this.userData, this.dimension); // ! use dimension
        if (initialize) {
            for (let i = 0; i < s.array.length; ++i)
                s.array[i] = 0;
        }
        return s;
    }
    /**
     * Return a new serie similar to this (same type of array and buffer), but with
     * different count and itemSize. All values are initialized to 0. We keep this
     * mathod for compatibility reason.
     * @param count    The number of items
     * @param itemSize The size of the items
     * @see clone
     * @see newInstance
     */
    image(count, itemSize) {
        return this.newInstance({ count, itemSize });
    }
}
// --------------------------------------------------
/**
 * @category Creation
 */
function createFrom({ array, count, itemSize }) {
    const length = count * itemSize;
    if (Array.isArray(array)) {
        return new Array(length);
    }
    let isShared = false;
    if (typeof SharedArrayBuffer !== "undefined") {
        isShared = array.buffer instanceof SharedArrayBuffer;
    }
    if (array instanceof Int8Array)
        return Object(_utils_create__WEBPACK_IMPORTED_MODULE_0__["createTyped"])(Int8Array, length, isShared);
    if (array instanceof Uint8Array)
        return Object(_utils_create__WEBPACK_IMPORTED_MODULE_0__["createTyped"])(Uint8Array, length, isShared);
    if (array instanceof Uint8ClampedArray)
        return Object(_utils_create__WEBPACK_IMPORTED_MODULE_0__["createTyped"])(Uint8ClampedArray, length, isShared);
    if (array instanceof Int16Array)
        return Object(_utils_create__WEBPACK_IMPORTED_MODULE_0__["createTyped"])(Int16Array, length, isShared);
    if (array instanceof Uint16Array)
        return Object(_utils_create__WEBPACK_IMPORTED_MODULE_0__["createTyped"])(Uint16Array, length, isShared);
    if (array instanceof Int32Array)
        return Object(_utils_create__WEBPACK_IMPORTED_MODULE_0__["createTyped"])(Int32Array, length, isShared);
    if (array instanceof Uint32Array)
        return Object(_utils_create__WEBPACK_IMPORTED_MODULE_0__["createTyped"])(Uint32Array, length, isShared);
    if (array instanceof Float32Array)
        return Object(_utils_create__WEBPACK_IMPORTED_MODULE_0__["createTyped"])(Float32Array, length, isShared);
    if (array instanceof Float64Array)
        return Object(_utils_create__WEBPACK_IMPORTED_MODULE_0__["createTyped"])(Float64Array, length, isShared);
    if (array instanceof BigInt64Array)
        return Object(_utils_create__WEBPACK_IMPORTED_MODULE_0__["createTyped"])(BigInt64Array, length, isShared);
    if (array instanceof BigUint64Array)
        return Object(_utils_create__WEBPACK_IMPORTED_MODULE_0__["createTyped"])(BigUint64Array, length, isShared);
}


/***/ }),

/***/ "./lib/utils/arrayUtils.ts":
/*!*********************************!*\
  !*** ./lib/utils/arrayUtils.ts ***!
  \*********************************/
/*! exports provided: array */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "array", function() { return array; });
/**
 * @hidden
 */
var array;
(function (array_1) {
    // export function zip(a1: IArray, a2: IArray): any {
    // }
    /**
     * @category Array
     */
    function min(array) {
        let m = Number.POSITIVE_INFINITY;
        const n = array.length;
        for (let i = 0; i < n; ++i) {
            const a = array[i];
            if (a < m)
                m = a;
        }
        return m;
    }
    array_1.min = min;
    /**
     * @category Array
     */
    function max(array) {
        let m = Number.NEGATIVE_INFINITY;
        const n = array.length;
        for (let i = 0; i < n; ++i) {
            const a = array[i];
            if (a > m)
                m = a;
        }
        return m;
    }
    array_1.max = max;
    /**
     * @category Array
     */
    function minMax(array) {
        let m = Number.POSITIVE_INFINITY;
        let M = Number.NEGATIVE_INFINITY;
        const n = array.length;
        for (let i = 0; i < n; ++i) {
            const a = array[i];
            if (a < m)
                m = a;
            if (a > M)
                M = a;
        }
        return [m, M];
    }
    array_1.minMax = minMax;
    /**
     * @category Array
     */
    function normalize(array) {
        const m = minMax(array);
        return array.map(v => (v - m[0]) / (m[1] - m[0]));
    }
    array_1.normalize = normalize;
    /**
     * @category Array
     */
    function scale(array, s) {
        return array.map(v => v * s);
    }
    array_1.scale = scale;
    /**
     *  Return the indices from array that contain NaN values
     * @param array The array of number
     * @category Array
     */
    function dectectNan(array) {
        const values = array.map((value, i) => { return { value, i }; });
        const idx = values.filter(a => Number.isNaN(a.value));
        return idx.map(v => v.i);
    }
    array_1.dectectNan = dectectNan;
    /**
     * @category Array
     */
    function flatten(array) {
        const r = [];
        array.forEach(a => r.push(...a));
        return r;
    }
    array_1.flatten = flatten;
})(array || (array = {}));


/***/ }),

/***/ "./lib/utils/copy.ts":
/*!***************************!*\
  !*** ./lib/utils/copy.ts ***!
  \***************************/
/*! exports provided: copy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony import */ var _serie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../serie */ "./lib/serie.ts");

/**
 * @return the same serie
 * @category Utils
 */
const copy = (array, serie) => {
    if (_serie__WEBPACK_IMPORTED_MODULE_0__["Serie"].isSerie(array)) {
        const S = array;
        if (serie.array.length !== S.array.length)
            throw new Error('length mismatch for both series');
        S.array.forEach((v, i) => serie.array[i] = v);
    }
    else {
        if (serie.array.length !== array.length)
            throw new Error('Array and Serie length mismatch');
        array.forEach((v, i) => serie.array[i] = v);
    }
    return serie;
};


/***/ }),

/***/ "./lib/utils/create.ts":
/*!*****************************!*\
  !*** ./lib/utils/create.ts ***!
  \*****************************/
/*! exports provided: createArray, createTyped, createEmptySerie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createArray", function() { return createArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTyped", function() { return createTyped; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEmptySerie", function() { return createEmptySerie; });
/* harmony import */ var _serie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../serie */ "./lib/serie.ts");

/**
 * Create an Array of a given length and with an initial value set
 * for all entries
 * @param length The length of the array
 * @param init A function that has to be called for initialization, a number, or nothing
 * @example
 * ```ts
 * const array1 = create(100, i => i**2)
 * const array2 = create(100, 0)
 * const array3 = create(100)
 * ```
 * @category Creation
 */
function createArray(length, init) {
    if (init === undefined)
        return new Array(length).fill(undefined);
    if (init instanceof Function) {
        return new Array(length).fill(undefined).map((_, i) => init(i));
    }
    return new Array(length).fill(init);
}
/**
 * Create a TypedArray of a given length (number of entries) that can be shared or not.
 * The length is either provided directly, or by an array that will be used to
 * initialize the type array.
 * @param Type The type of the array:
 * <ul>
 * <li>Int8Array
 * <li>Uint8Array
 * <li>Uint8ClampedArray
 * <li>Int16Array
 * <li>Uint16Array
 * <li>Int32Array
 * <li>Uint32Array
 * <li>Float32Array
 * <li>Float64Array
 * <li>BigInt64Array
 * <li>BigUint64Array
 * </ul>
 * @param data The number of entries or an array of number
 * @param shared If the Typed has SharedArrayBuffer or not
 * @example
 * ```ts
 * const sharedArray = createTyped(Float32Array, 100, true)
 * const array       = createTyped(Float32Array, [1,2,3,4,5,6,7,8,9], false)
 * ```
 * @category Creation
 */
function createTyped(Type, array, shared) {
    if (Array.isArray(array)) {
        const length = array.length * Type.BYTES_PER_ELEMENT;
        let ta = undefined;
        let isSharedAvailable = (typeof SharedArrayBuffer !== "undefined");
        if (shared && isSharedAvailable) {
            ta = new Type(new SharedArrayBuffer(length));
        }
        else {
            ta = new Type(new ArrayBuffer(length));
        }
        ta.set(array);
        return ta;
    }
    else {
        const l = array * Type.BYTES_PER_ELEMENT;
        if (shared) {
            return new Type(new SharedArrayBuffer(l));
        }
        return new Type(new ArrayBuffer(l));
    }
}
/**
 * Create a serie from scratch given a type (Array or TypedArray) and a rowsCount.
 * Passed parameters are:
 * ```ts
 * {
 *      Type, // Can be either an Array or a TypedArray.
 *      count, // The number of elements in the array
 *      itemSize, // The size of each items (length of the array will be rowsCount*itemSize)
 *      shared // If the TypedArray should be a SharedArrayBuffer or an ArrayBuffer
 * }
 * ```
 * @returns The newly created Serie
 * @category Creation
 */
function createEmptySerie({ Type, count, itemSize = 1, dimension = 3, shared = false, userData } // ! use dimension
) {
    if (itemSize <= 0)
        throw new Error('itemSize must be > 0');
    if (count <= 0)
        throw new Error('count must be > 0');
    if (Type === undefined || Array.isArray(new Type(1))) {
        return _serie__WEBPACK_IMPORTED_MODULE_0__["Serie"].create({
            array: new Array(count * itemSize).fill(0),
            itemSize
        });
    }
    // Type is either a Int8Array, Uint8Array etc...
    const length = count * itemSize * Type.BYTES_PER_ELEMENT;
    if (shared) {
        return _serie__WEBPACK_IMPORTED_MODULE_0__["Serie"].create({
            array: new Type(new SharedArrayBuffer(length)), itemSize, userData, dimension
        });
    }
    return _serie__WEBPACK_IMPORTED_MODULE_0__["Serie"].create({ array: new Type(new ArrayBuffer(length)), itemSize, userData, dimension });
}


/***/ }),

/***/ "./lib/utils/duplicate.ts":
/*!********************************!*\
  !*** ./lib/utils/duplicate.ts ***!
  \********************************/
/*! exports provided: duplicate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "duplicate", function() { return duplicate; });
/**
 * Return a duplicate of the passed serie (same type, same count, same itemSize and same values)
 * @category Utils
 */
const duplicate = (serie) => {
    return serie.clone(false);
};


/***/ }),

/***/ "./lib/utils/exists.ts":
/*!*****************************!*\
  !*** ./lib/utils/exists.ts ***!
  \*****************************/
/*! exports provided: exists */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exists", function() { return exists; });
/**
 * Check if a TypedArray exist in the DataFrame
 * @category Utils
 */
const exists = (df, name) => df.series[name] !== undefined;


/***/ }),

/***/ "./lib/utils/getNameSeries.ts":
/*!************************************!*\
  !*** ./lib/utils/getNameSeries.ts ***!
  \************************************/
/*! exports provided: getNameSeries */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNameSeries", function() { return getNameSeries; });
/**
 * Get name of all series in the passed [[DataFrame]]
 * @category Utils
 */
const getNameSeries = (df) => {
    return Object.entries(df.series).map(([name, serie]) => name);
};


/***/ }),

/***/ "./lib/utils/index.ts":
/*!****************************!*\
  !*** ./lib/utils/index.ts ***!
  \****************************/
/*! exports provided: exists, info, createArray, createTyped, createEmptySerie, array, copy, duplicate, nameOfSerie, getNameSeries */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _exists__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exists */ "./lib/utils/exists.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "exists", function() { return _exists__WEBPACK_IMPORTED_MODULE_0__["exists"]; });

/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info */ "./lib/utils/info.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "info", function() { return _info__WEBPACK_IMPORTED_MODULE_1__["info"]; });

/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create */ "./lib/utils/create.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createArray", function() { return _create__WEBPACK_IMPORTED_MODULE_2__["createArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTyped", function() { return _create__WEBPACK_IMPORTED_MODULE_2__["createTyped"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createEmptySerie", function() { return _create__WEBPACK_IMPORTED_MODULE_2__["createEmptySerie"]; });

/* harmony import */ var _arrayUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./arrayUtils */ "./lib/utils/arrayUtils.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "array", function() { return _arrayUtils__WEBPACK_IMPORTED_MODULE_3__["array"]; });

/* harmony import */ var _copy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./copy */ "./lib/utils/copy.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return _copy__WEBPACK_IMPORTED_MODULE_4__["copy"]; });

/* harmony import */ var _duplicate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./duplicate */ "./lib/utils/duplicate.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "duplicate", function() { return _duplicate__WEBPACK_IMPORTED_MODULE_5__["duplicate"]; });

/* harmony import */ var _nameOfSerie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nameOfSerie */ "./lib/utils/nameOfSerie.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nameOfSerie", function() { return _nameOfSerie__WEBPACK_IMPORTED_MODULE_6__["nameOfSerie"]; });

/* harmony import */ var _getNameSeries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./getNameSeries */ "./lib/utils/getNameSeries.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNameSeries", function() { return _getNameSeries__WEBPACK_IMPORTED_MODULE_7__["getNameSeries"]; });











/***/ }),

/***/ "./lib/utils/info.ts":
/*!***************************!*\
  !*** ./lib/utils/info.ts ***!
  \***************************/
/*! exports provided: info */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "info", function() { return info; });
/* harmony import */ var _serie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../serie */ "./lib/serie.ts");

/**
 * @category Utils
 */
const info = (df) => {
    if (_serie__WEBPACK_IMPORTED_MODULE_0__["Serie"].isSerie(df)) {
        const s = df;
        return {
            isArray: s.isArray,
            isBuffer: s.isArrayBuffer,
            isShared: s.shared,
            length: s.length,
            count: s.count,
            itemSize: s.itemSize,
            dimension: s.dimension,
            array: s.array
        };
    }
    const DF = df;
    return {
        userData: DF.userData,
        series: Object.entries(DF.series).map(([name, serie]) => {
            return {
                name,
                userData: serie.userData,
                isArray: serie.isArray,
                isBuffer: serie.isArrayBuffer,
                isShared: serie.shared,
                length: serie.length,
                count: serie.count,
                itemSize: serie.itemSize,
                dimension: serie.dimension,
                array: serie.array
            };
        })
    };
};


/***/ }),

/***/ "./lib/utils/nameOfSerie.ts":
/*!**********************************!*\
  !*** ./lib/utils/nameOfSerie.ts ***!
  \**********************************/
/*! exports provided: nameOfSerie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nameOfSerie", function() { return nameOfSerie; });
/**
 * Get the name of a [[Serie]] in a [[Dataframe]]. Returns undefined if the serie in not present
 * in the passed [[Dataframe]]
 * @category Utils
 */
const nameOfSerie = (df, s) => {
    return Object.entries(df.series).reduce((acc, [name, serie]) => s === serie ? name : acc, undefined);
};


/***/ }),

/***/ "./lib/views/index.ts":
/*!****************************!*\
  !*** ./lib/views/index.ts ***!
  \****************************/
/*! exports provided: matrix, squaredMatrix, symSquaredMatrix, Matrix, vector, Vector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matrix */ "./lib/views/matrix.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matrix", function() { return _matrix__WEBPACK_IMPORTED_MODULE_0__["matrix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "squaredMatrix", function() { return _matrix__WEBPACK_IMPORTED_MODULE_0__["squaredMatrix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symSquaredMatrix", function() { return _matrix__WEBPACK_IMPORTED_MODULE_0__["symSquaredMatrix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Matrix", function() { return _matrix__WEBPACK_IMPORTED_MODULE_0__["Matrix"]; });

/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vector */ "./lib/views/vector.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vector", function() { return _vector__WEBPACK_IMPORTED_MODULE_1__["vector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vector", function() { return _vector__WEBPACK_IMPORTED_MODULE_1__["Vector"]; });





/***/ }),

/***/ "./lib/views/matrix.ts":
/*!*****************************!*\
  !*** ./lib/views/matrix.ts ***!
  \*****************************/
/*! exports provided: matrix, squaredMatrix, symSquaredMatrix, Matrix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matrix", function() { return matrix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredMatrix", function() { return squaredMatrix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "symSquaredMatrix", function() { return symSquaredMatrix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Matrix", function() { return Matrix; });
/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vector */ "./lib/views/vector.ts");

/**
 * It can be demonstrated that n(n+1)/2 = n^2 for n in N*, if and only if n=1.
 * That is to say, they's no ambiguity about the length of the passed flatten array
 * to determine if it is a bad, a symmetric or a full matrix
 * ```ts
 * const m = array.length
 * const m1 = Math.sqrt(m)
 * const m2 = (Math.sqrt(8*v.length+1)-1)/2
 * ```
 */
/**
 * Equivalent to [[squaredMatrix]]
 * @param v
 * @category Views
 */
const matrix = (v) => squaredMatrix(v);
/**
 * @brief Create a new squared [[Matrix]]
 * @category Views
 */
const squaredMatrix = (v) => {
    const m = Math.sqrt(v.length);
    if (!Number.isInteger(m))
        throw new Error(`squared matrix requires m*m coefficients (got m=${v.length})`);
    return new Matrix(v, m);
};
/**
 * @brief Create a new squared symmetric [[Matrix]]
 * @category Views
 */
const symSquaredMatrix = (v) => {
    const m = (Math.sqrt(8 * v.length + 1) - 1) / 2;
    if (!Number.isInteger(m))
        throw new Error(`symmetric squared matrix of dim m requires (m*(m+1)/2) coefficients (got ${v.length}`);
    const index = (i, j) => i * m + j;
    const indexS = (i, j) => j < i ? 0.5 * j * (2 * m - 1 - j) + i : 0.5 * i * (2 * m - 1 - i) + j;
    const w = new Array(m * m).fill(0);
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < m; ++j) {
            w[index(j, i)] = v[indexS(i, j)];
        }
    }
    const M = new Matrix(w, m);
    return M;
};
/**
 * Full matrix of dim (m x m)
 * @category Views
 */
class Matrix {
    constructor(v, m) {
        this.v = v;
        this.m = m;
    }
    index(i, j) {
        return i * this.m + j;
    }
    get isSymmetric() {
        let ok = true;
        for (let i = 0; i < this.m; ++i) {
            for (let j = i; j < this.m; ++j) {
                ok = ok && (this.at(i, j) === this.at(j, i));
            }
        }
        return ok;
    }
    copy() {
        return new Matrix([...this.v], this.m);
    }
    at(i, j) {
        return this.v[this.index(i, j)];
    }
    trace() {
        let t = 0;
        for (let i = 0; i < this.m; ++i)
            t += this.at(i, i);
        return t;
    }
    set(i, j, v) {
        this.v[this.index(i, j)] = v;
        return this;
    }
    add(i, j, v) {
        this.v[this.index(i, j)] += v;
        return this;
    }
    /**
     * Scale this matrix
     * @returns this
     */
    scale(s) {
        this.v = this.v.map(v => v * s);
        return this;
    }
    get length() {
        return this.v.length;
    }
    /**
     * Return a copy of the underlaying array (flatten components). If the matrix
     * is symmetric, a compress array is returned.
     */
    get array() {
        if (this.isSymmetric) {
            const a = new Array(this.m * (this.m + 1) / 2).fill(0);
            let k = 0;
            for (let i = 0; i < this.m; ++i) {
                for (let j = i; j < this.m; ++j) {
                    a[k++] = this.at(i, j);
                }
            }
            return a;
        }
        return [...this.v];
    }
    /**
     * Transpose this matrix and return a new one
     * @returns a new [[Matrix]]
     */
    transpose() {
        const v = new Array(this.v.length).fill(0);
        let id = 0;
        for (let j = 0; j < this.m; ++j) {
            for (let i = 0; i < this.m; ++i) {
                v[id++] = this.at(i, j);
            }
        }
        return new Matrix(v, this.m);
    }
    /**
     * @returns a new [[Vector]]
     */
    multVec(v) {
        if (v.length !== this.m)
            throw new Error('size mismatch for product matrix vector');
        const t = new Array(v.length).fill(0);
        const a = (v instanceof _vector__WEBPACK_IMPORTED_MODULE_0__["Vector"] ? v.array : v);
        for (let i = 0; i < this.m; ++i) {
            for (let j = 0; j < this.m; ++j) {
                t[i] += this.at(i, j) * a[j];
            }
        }
        return new _vector__WEBPACK_IMPORTED_MODULE_0__["Vector"](t);
    }
    /**
     * @returns a new [[Matrix]]
     */
    multMat(m) {
        if (m.m !== this.m)
            throw new Error('size mismatch for product matrix matrix');
        const t = new Array(m.length).fill(0);
        for (let i = 0; i < this.m; ++i) {
            for (let j = 0; j < this.m; ++j) {
                for (let k = 0; k < this.m; ++k) {
                    t[this.index(i, j)] += this.at(i, k) * m.at(k, j);
                }
            }
        }
        return new Matrix(t, this.m);
    }
    /**
     * Add a new matrix to this (element-wise)
     * @returns this
     */
    addMat(m) {
        if (m.m !== this.m)
            throw new Error('sizes mismatch for adding matrix');
        for (let i = 0; i < this.v.length; ++i) {
            this.v[i] += m.v[i];
        }
        return this;
    }
    toString() {
        let s = '';
        for (let i = 0; i < this.m; ++i) {
            for (let j = 0; j < this.m; ++j) {
                s += this.at(i, j) + '\t';
            }
            s += '\n';
        }
        return s;
    }
}


/***/ }),

/***/ "./lib/views/vector.ts":
/*!*****************************!*\
  !*** ./lib/views/vector.ts ***!
  \*****************************/
/*! exports provided: vector, Vector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vector", function() { return vector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vector", function() { return Vector; });
/**
 * @brief Create a new [[Vector]]
 * @category Views
 */
const vector = (v) => new Vector(v);
/**
 * @category Views
 */
class Vector {
    constructor(v) {
        this.v = v;
    }
    at(i) {
        return this.v[i];
    }
    get length() {
        return this.v.length;
    }
    get array() {
        return this.v;
    }
    /**
     * Normalize this vector
     * @returns this
     */
    normalize() {
        const n = this.norm();
        this.v = this.v.map(v => v / n);
        return this;
    }
    norm() {
        return Math.sqrt(this.v.reduce((acc, v) => acc + v ** 2, 0));
    }
    /**
     *
     * @param s scaling parameter
     * @returns this vector
     */
    mult(s) {
        this.v = this.v.map(v => v * s);
        return this;
    }
    add(s) {
        this.v = s.v.map((w, i) => this.v[i] += w);
        return this;
    }
    sub(s) {
        this.v = s.v.map((w, i) => this.v[i] -= w);
        return this;
    }
    dot(v) {
        return this.array.reduce((acc, a, i) => acc + a * v.array[i], 0);
    }
    toString() {
        let s = '';
        for (let i = 0; i < this.length; ++i) {
            s += this.at(i) + '\t';
        }
        return s;
    }
}


/***/ })

/******/ });
});
//# sourceMappingURL=dataframe.js.map