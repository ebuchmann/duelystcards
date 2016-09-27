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
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _vue = __webpack_require__(1);

	var _vue2 = _interopRequireDefault(_vue);

	var _vueRouter = __webpack_require__(3);

	var _vueRouter2 = _interopRequireDefault(_vueRouter);

	var _routerConfig = __webpack_require__(4);

	var _store = __webpack_require__(173);

	var _store2 = _interopRequireDefault(_store);

	var _vuexRouterSync = __webpack_require__(204);

	var _App = __webpack_require__(205);

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_vue2.default.use(_vueRouter2.default);

	(0, _vuexRouterSync.sync)(_store2.default, _routerConfig.router);

	new _vue2.default({
	  router: _routerConfig.router,
	  store: _store2.default,
	  render: function render(h) {
	    return h(_App2.default);
	  }
	}).$mount('#app');

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process, global) {'use strict';

	/*  */

	/**
	 * Convert a value to a string that is actually rendered.
	 */
	function _toString (val) {
	  return val == null
	    ? ''
	    : typeof val === 'object'
	      ? JSON.stringify(val, null, 2)
	      : String(val)
	}

	/**
	 * Convert a input value to a number for persistence.
	 * If the conversion fails, return original string.
	 */
	function toNumber (val) {
	  var n = parseFloat(val, 10)
	  return (n || n === 0) ? n : val
	}

	/**
	 * Make a map and return a function for checking if a key
	 * is in that map.
	 */
	function makeMap (
	  str,
	  expectsLowerCase
	) {
	  var map = Object.create(null)
	  var list = str.split(',')
	  for (var i = 0; i < list.length; i++) {
	    map[list[i]] = true
	  }
	  return expectsLowerCase
	    ? function (val) { return map[val.toLowerCase()]; }
	    : function (val) { return map[val]; }
	}

	/**
	 * Check if a tag is a built-in tag.
	 */
	var isBuiltInTag = makeMap('slot,component', true)

	/**
	 * Remove an item from an array
	 */
	function remove (arr, item) {
	  if (arr.length) {
	    var index = arr.indexOf(item)
	    if (index > -1) {
	      return arr.splice(index, 1)
	    }
	  }
	}

	/**
	 * Check whether the object has the property.
	 */
	var hasOwnProperty = Object.prototype.hasOwnProperty
	function hasOwn (obj, key) {
	  return hasOwnProperty.call(obj, key)
	}

	/**
	 * Check if value is primitive
	 */
	function isPrimitive (value) {
	  return typeof value === 'string' || typeof value === 'number'
	}

	/**
	 * Create a cached version of a pure function.
	 */
	function cached (fn) {
	  var cache = Object.create(null)
	  return function cachedFn (str) {
	    var hit = cache[str]
	    return hit || (cache[str] = fn(str))
	  }
	}

	/**
	 * Camelize a hyphen-delmited string.
	 */
	var camelizeRE = /-(\w)/g
	var camelize = cached(function (str) {
	  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
	})

	/**
	 * Capitalize a string.
	 */
	var capitalize = cached(function (str) {
	  return str.charAt(0).toUpperCase() + str.slice(1)
	})

	/**
	 * Hyphenate a camelCase string.
	 */
	var hyphenateRE = /([^-])([A-Z])/g
	var hyphenate = cached(function (str) {
	  return str
	    .replace(hyphenateRE, '$1-$2')
	    .replace(hyphenateRE, '$1-$2')
	    .toLowerCase()
	})

	/**
	 * Simple bind, faster than native
	 */
	function bind (fn, ctx) {
	  function boundFn (a) {
	    var l = arguments.length
	    return l
	      ? l > 1
	        ? fn.apply(ctx, arguments)
	        : fn.call(ctx, a)
	      : fn.call(ctx)
	  }
	  // record original fn length
	  boundFn._length = fn.length
	  return boundFn
	}

	/**
	 * Convert an Array-like object to a real Array.
	 */
	function toArray (list, start) {
	  start = start || 0
	  var i = list.length - start
	  var ret = new Array(i)
	  while (i--) {
	    ret[i] = list[i + start]
	  }
	  return ret
	}

	/**
	 * Mix properties into target object.
	 */
	function extend (to, _from) {
	  for (var key in _from) {
	    to[key] = _from[key]
	  }
	  return to
	}

	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 */
	function isObject (obj) {
	  return obj !== null && typeof obj === 'object'
	}

	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 */
	var toString = Object.prototype.toString
	var OBJECT_STRING = '[object Object]'
	function isPlainObject (obj) {
	  return toString.call(obj) === OBJECT_STRING
	}

	/**
	 * Merge an Array of Objects into a single Object.
	 */
	function toObject (arr) {
	  var res = {}
	  for (var i = 0; i < arr.length; i++) {
	    if (arr[i]) {
	      extend(res, arr[i])
	    }
	  }
	  return res
	}

	/**
	 * Perform no operation.
	 */
	function noop () {}

	/**
	 * Always return false.
	 */
	var no = function () { return false; }

	/**
	 * Generate a static keys string from compiler modules.
	 */
	function genStaticKeys (modules) {
	  return modules.reduce(function (keys, m) {
	    return keys.concat(m.staticKeys || [])
	  }, []).join(',')
	}

	/**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 */
	function looseEqual (a, b) {
	  /* eslint-disable eqeqeq */
	  return a == b || (
	    isObject(a) && isObject(b)
	      ? JSON.stringify(a) === JSON.stringify(b)
	      : false
	  )
	  /* eslint-enable eqeqeq */
	}

	function looseIndexOf (arr, val) {
	  for (var i = 0; i < arr.length; i++) {
	    if (looseEqual(arr[i], val)) { return i }
	  }
	  return -1
	}

	/*  */

	var config = {
	  /**
	   * Option merge strategies (used in core/util/options)
	   */
	  optionMergeStrategies: Object.create(null),

	  /**
	   * Whether to suppress warnings.
	   */
	  silent: false,

	  /**
	   * Whether to enable devtools
	   */
	  devtools: process.env.NODE_ENV !== 'production',

	  /**
	   * Error handler for watcher errors
	   */
	  errorHandler: null,

	  /**
	   * Ignore certain custom elements
	   */
	  ignoredElements: null,

	  /**
	   * Custom user key aliases for v-on
	   */
	  keyCodes: Object.create(null),

	  /**
	   * Check if a tag is reserved so that it cannot be registered as a
	   * component. This is platform-dependent and may be overwritten.
	   */
	  isReservedTag: no,

	  /**
	   * Check if a tag is an unknown element.
	   * Platform-dependent.
	   */
	  isUnknownElement: no,

	  /**
	   * Get the namespace of an element
	   */
	  getTagNamespace: noop,

	  /**
	   * Check if an attribute must be bound using property, e.g. value
	   * Platform-dependent.
	   */
	  mustUseProp: no,

	  /**
	   * List of asset types that a component can own.
	   */
	  _assetTypes: [
	    'component',
	    'directive',
	    'filter'
	  ],

	  /**
	   * List of lifecycle hooks.
	   */
	  _lifecycleHooks: [
	    'beforeCreate',
	    'created',
	    'beforeMount',
	    'mounted',
	    'beforeUpdate',
	    'updated',
	    'beforeDestroy',
	    'destroyed',
	    'activated',
	    'deactivated'
	  ],

	  /**
	   * Max circular updates allowed in a scheduler flush cycle.
	   */
	  _maxUpdateCount: 100,

	  /**
	   * Server rendering?
	   */
	  _isServer: process.env.VUE_ENV === 'server'
	}

	/*  */

	/**
	 * Check if a string starts with $ or _
	 */
	function isReserved (str) {
	  var c = (str + '').charCodeAt(0)
	  return c === 0x24 || c === 0x5F
	}

	/**
	 * Define a property.
	 */
	function def (obj, key, val, enumerable) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  })
	}

	/**
	 * Parse simple path.
	 */
	var bailRE = /[^\w\.\$]/
	function parsePath (path) {
	  if (bailRE.test(path)) {
	    return
	  } else {
	    var segments = path.split('.')
	    return function (obj) {
	      for (var i = 0; i < segments.length; i++) {
	        if (!obj) { return }
	        obj = obj[segments[i]]
	      }
	      return obj
	    }
	  }
	}

	/*  */

	// can we use __proto__?
	var hasProto = '__proto__' in {}

	// Browser environment sniffing
	var inBrowser =
	  typeof window !== 'undefined' &&
	  Object.prototype.toString.call(window) !== '[object Object]'

	var UA = inBrowser && window.navigator.userAgent.toLowerCase()
	var isIE = UA && /msie|trident/.test(UA)
	var isIE9 = UA && UA.indexOf('msie 9.0') > 0
	var isEdge = UA && UA.indexOf('edge/') > 0
	var isAndroid = UA && UA.indexOf('android') > 0

	// detect devtools
	var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__

	/**
	 * Defer a task to execute it asynchronously. Ideally this
	 * should be executed as a microtask, but MutationObserver is unreliable
	 * in iOS UIWebView so we use a setImmediate shim and fallback to setTimeout.
	 */
	var nextTick = (function () {
	  var callbacks = []
	  var pending = false
	  var timerFunc

	  function nextTickHandler () {
	    pending = false
	    var copies = callbacks.slice(0)
	    callbacks = []
	    for (var i = 0; i < copies.length; i++) {
	      copies[i]()
	    }
	  }

	  /* istanbul ignore else */
	  if (inBrowser && window.postMessage &&
	    !window.importScripts && // not in WebWorker
	    !(isAndroid && !window.requestAnimationFrame) // not in Android <= 4.3
	  ) {
	    var NEXT_TICK_TOKEN = '__vue__nextTick__'
	    window.addEventListener('message', function (e) {
	      if (e.source === window && e.data === NEXT_TICK_TOKEN) {
	        nextTickHandler()
	      }
	    })
	    timerFunc = function () {
	      window.postMessage(NEXT_TICK_TOKEN, '*')
	    }
	  } else {
	    timerFunc = (typeof global !== 'undefined' && global.setImmediate) || setTimeout
	  }

	  return function queueNextTick (cb, ctx) {
	    var func = ctx
	      ? function () { cb.call(ctx) }
	      : cb
	    callbacks.push(func)
	    if (pending) { return }
	    pending = true
	    timerFunc(nextTickHandler, 0)
	  }
	})()

	var _Set
	/* istanbul ignore if */
	if (typeof Set !== 'undefined' && /native code/.test(Set.toString())) {
	  // use native Set when available.
	  _Set = Set
	} else {
	  // a non-standard Set polyfill that only works with primitive keys.
	  _Set = (function () {
	    function Set () {
	      this.set = Object.create(null)
	    }
	    Set.prototype.has = function has (key) {
	      return this.set[key] !== undefined
	    };
	    Set.prototype.add = function add (key) {
	      this.set[key] = 1
	    };
	    Set.prototype.clear = function clear () {
	      this.set = Object.create(null)
	    };

	    return Set;
	  }())
	}

	/* not type checking this file because flow doesn't play well with Proxy */

	var hasProxy;
	var proxyHandlers;
	var initProxy;
	if (process.env.NODE_ENV !== 'production') {
	  var allowedGlobals = makeMap(
	    'Infinity,undefined,NaN,isFinite,isNaN,' +
	    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
	    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
	    'require' // for Webpack/Browserify
	  )

	  hasProxy =
	    typeof Proxy !== 'undefined' &&
	    Proxy.toString().match(/native code/)

	  proxyHandlers = {
	    has: function has (target, key) {
	      var has = key in target
	      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_'
	      if (!has && !isAllowed) {
	        warn(
	          "Property or method \"" + key + "\" is not defined on the instance but " +
	          "referenced during render. Make sure to declare reactive data " +
	          "properties in the data option.",
	          target
	        )
	      }
	      return has || !isAllowed
	    }
	  }

	  initProxy = function initProxy (vm) {
	    if (hasProxy) {
	      vm._renderProxy = new Proxy(vm, proxyHandlers)
	    } else {
	      vm._renderProxy = vm
	    }
	  }
	}

	/*  */


	var uid$2 = 0

	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 */
	var Dep = function Dep () {
	  this.id = uid$2++
	  this.subs = []
	};

	Dep.prototype.addSub = function addSub (sub) {
	  this.subs.push(sub)
	};

	Dep.prototype.removeSub = function removeSub (sub) {
	  remove(this.subs, sub)
	};

	Dep.prototype.depend = function depend () {
	  if (Dep.target) {
	    Dep.target.addDep(this)
	  }
	};

	Dep.prototype.notify = function notify () {
	  // stablize the subscriber list first
	  var subs = this.subs.slice()
	  for (var i = 0, l = subs.length; i < l; i++) {
	    subs[i].update()
	  }
	};

	// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null
	var targetStack = []

	function pushTarget (_target) {
	  if (Dep.target) { targetStack.push(Dep.target) }
	  Dep.target = _target
	}

	function popTarget () {
	  Dep.target = targetStack.pop()
	}

	/*  */


	var queue = []
	var has = {}
	var circular = {}
	var waiting = false
	var flushing = false
	var index = 0

	/**
	 * Reset the scheduler's state.
	 */
	function resetSchedulerState () {
	  queue.length = 0
	  has = {}
	  if (process.env.NODE_ENV !== 'production') {
	    circular = {}
	  }
	  waiting = flushing = false
	}

	/**
	 * Flush both queues and run the watchers.
	 */
	function flushSchedulerQueue () {
	  flushing = true

	  // Sort queue before flush.
	  // This ensures that:
	  // 1. Components are updated from parent to child. (because parent is always
	  //    created before the child)
	  // 2. A component's user watchers are run before its render watcher (because
	  //    user watchers are created before the render watcher)
	  // 3. If a component is destroyed during a parent component's watcher run,
	  //    its watchers can be skipped.
	  queue.sort(function (a, b) { return a.id - b.id; })

	  // do not cache length because more watchers might be pushed
	  // as we run existing watchers
	  for (index = 0; index < queue.length; index++) {
	    var watcher = queue[index]
	    var id = watcher.id
	    has[id] = null
	    watcher.run()
	    // in dev build, check and stop circular updates.
	    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
	      circular[id] = (circular[id] || 0) + 1
	      if (circular[id] > config._maxUpdateCount) {
	        warn(
	          'You may have an infinite update loop ' + (
	            watcher.user
	              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
	              : "in a component render function."
	          ),
	          watcher.vm
	        )
	        break
	      }
	    }
	  }

	  // devtool hook
	  /* istanbul ignore if */
	  if (devtools && config.devtools) {
	    devtools.emit('flush')
	  }

	  resetSchedulerState()
	}

	/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 */
	function queueWatcher (watcher) {
	  var id = watcher.id
	  if (has[id] == null) {
	    has[id] = true
	    if (!flushing) {
	      queue.push(watcher)
	    } else {
	      // if already flushing, splice the watcher based on its id
	      // if already past its id, it will be run next immediately.
	      var i = queue.length - 1
	      while (i >= 0 && queue[i].id > watcher.id) {
	        i--
	      }
	      queue.splice(Math.max(i, index) + 1, 0, watcher)
	    }
	    // queue the flush
	    if (!waiting) {
	      waiting = true
	      nextTick(flushSchedulerQueue)
	    }
	  }
	}

	/*  */

	var uid$1 = 0

	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 */
	var Watcher = function Watcher (
	  vm,
	  expOrFn,
	  cb,
	  options
	) {
	  if ( options === void 0 ) options = {};

	  this.vm = vm
	  vm._watchers.push(this)
	  // options
	  this.deep = !!options.deep
	  this.user = !!options.user
	  this.lazy = !!options.lazy
	  this.sync = !!options.sync
	  this.expression = expOrFn.toString()
	  this.cb = cb
	  this.id = ++uid$1 // uid for batching
	  this.active = true
	  this.dirty = this.lazy // for lazy watchers
	  this.deps = []
	  this.newDeps = []
	  this.depIds = new _Set()
	  this.newDepIds = new _Set()
	  // parse expression for getter
	  if (typeof expOrFn === 'function') {
	    this.getter = expOrFn
	  } else {
	    this.getter = parsePath(expOrFn)
	    if (!this.getter) {
	      this.getter = function () {}
	      process.env.NODE_ENV !== 'production' && warn(
	        "Failed watching path: \"" + expOrFn + "\" " +
	        'Watcher only accepts simple dot-delimited paths. ' +
	        'For full control, use a function instead.',
	        vm
	      )
	    }
	  }
	  this.value = this.lazy
	    ? undefined
	    : this.get()
	};

	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */
	Watcher.prototype.get = function get () {
	  pushTarget(this)
	  var value = this.getter.call(this.vm, this.vm)
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value)
	  }
	  popTarget()
	  this.cleanupDeps()
	  return value
	};

	/**
	 * Add a dependency to this directive.
	 */
	Watcher.prototype.addDep = function addDep (dep) {
	  var id = dep.id
	  if (!this.newDepIds.has(id)) {
	    this.newDepIds.add(id)
	    this.newDeps.push(dep)
	    if (!this.depIds.has(id)) {
	      dep.addSub(this)
	    }
	  }
	};

	/**
	 * Clean up for dependency collection.
	 */
	Watcher.prototype.cleanupDeps = function cleanupDeps () {
	    var this$1 = this;

	  var i = this.deps.length
	  while (i--) {
	    var dep = this$1.deps[i]
	    if (!this$1.newDepIds.has(dep.id)) {
	      dep.removeSub(this$1)
	    }
	  }
	  var tmp = this.depIds
	  this.depIds = this.newDepIds
	  this.newDepIds = tmp
	  this.newDepIds.clear()
	  tmp = this.deps
	  this.deps = this.newDeps
	  this.newDeps = tmp
	  this.newDeps.length = 0
	};

	/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 */
	Watcher.prototype.update = function update () {
	  /* istanbul ignore else */
	  if (this.lazy) {
	    this.dirty = true
	  } else if (this.sync) {
	    this.run()
	  } else {
	    queueWatcher(this)
	  }
	};

	/**
	 * Scheduler job interface.
	 * Will be called by the scheduler.
	 */
	Watcher.prototype.run = function run () {
	  if (this.active) {
	    var value = this.get()
	      if (
	        value !== this.value ||
	      // Deep watchers and watchers on Object/Arrays should fire even
	      // when the value is the same, because the value may
	      // have mutated.
	      isObject(value) ||
	      this.deep
	    ) {
	      // set new value
	      var oldValue = this.value
	      this.value = value
	      if (this.user) {
	        try {
	          this.cb.call(this.vm, value, oldValue)
	        } catch (e) {
	          process.env.NODE_ENV !== 'production' && warn(
	            ("Error in watcher \"" + (this.expression) + "\""),
	            this.vm
	          )
	          /* istanbul ignore else */
	          if (config.errorHandler) {
	            config.errorHandler.call(null, e, this.vm)
	          } else {
	            throw e
	          }
	        }
	      } else {
	        this.cb.call(this.vm, value, oldValue)
	      }
	    }
	  }
	};

	/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */
	Watcher.prototype.evaluate = function evaluate () {
	  this.value = this.get()
	  this.dirty = false
	};

	/**
	 * Depend on all deps collected by this watcher.
	 */
	Watcher.prototype.depend = function depend () {
	    var this$1 = this;

	  var i = this.deps.length
	  while (i--) {
	    this$1.deps[i].depend()
	  }
	};

	/**
	 * Remove self from all dependencies' subcriber list.
	 */
	Watcher.prototype.teardown = function teardown () {
	    var this$1 = this;

	  if (this.active) {
	    // remove self from vm's watcher list
	    // this is a somewhat expensive operation so we skip it
	    // if the vm is being destroyed or is performing a v-for
	    // re-render (the watcher list is then filtered by v-for).
	    if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
	      remove(this.vm._watchers, this)
	    }
	    var i = this.deps.length
	    while (i--) {
	      this$1.deps[i].removeSub(this$1)
	    }
	    this.active = false
	  }
	};

	/**
	 * Recursively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 */
	var seenObjects = new _Set()
	function traverse (val, seen) {
	  var i, keys
	  if (!seen) {
	    seen = seenObjects
	    seen.clear()
	  }
	  var isA = Array.isArray(val)
	  var isO = isObject(val)
	  if ((isA || isO) && Object.isExtensible(val)) {
	    if (val.__ob__) {
	      var depId = val.__ob__.dep.id
	      if (seen.has(depId)) {
	        return
	      } else {
	        seen.add(depId)
	      }
	    }
	    if (isA) {
	      i = val.length
	      while (i--) { traverse(val[i], seen) }
	    } else if (isO) {
	      keys = Object.keys(val)
	      i = keys.length
	      while (i--) { traverse(val[keys[i]], seen) }
	    }
	  }
	}

	/*
	 * not type checking this file because flow doesn't play well with
	 * dynamically accessing methods on Array prototype
	 */

	var arrayProto = Array.prototype
	var arrayMethods = Object.create(arrayProto)

	/**
	 * Intercept mutating methods and emit events
	 */
	;[
	  'push',
	  'pop',
	  'shift',
	  'unshift',
	  'splice',
	  'sort',
	  'reverse'
	]
	.forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method]
	  def(arrayMethods, method, function mutator () {
	    var arguments$1 = arguments;

	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length
	    var args = new Array(i)
	    while (i--) {
	      args[i] = arguments$1[i]
	    }
	    var result = original.apply(this, args)
	    var ob = this.__ob__
	    var inserted
	    switch (method) {
	      case 'push':
	        inserted = args
	        break
	      case 'unshift':
	        inserted = args
	        break
	      case 'splice':
	        inserted = args.slice(2)
	        break
	    }
	    if (inserted) { ob.observeArray(inserted) }
	    // notify change
	    ob.dep.notify()
	    return result
	  })
	})

	/*  */

	var arrayKeys = Object.getOwnPropertyNames(arrayMethods)

	/**
	 * By default, when a reactive property is set, the new value is
	 * also converted to become reactive. However when passing down props,
	 * we don't want to force conversion because the value may be a nested value
	 * under a frozen data structure. Converting it would defeat the optimization.
	 */
	var observerState = {
	  shouldConvert: true,
	  isSettingProps: false
	}

	/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 */
	var Observer = function Observer (value) {
	  this.value = value
	  this.dep = new Dep()
	  this.vmCount = 0
	  def(value, '__ob__', this)
	  if (Array.isArray(value)) {
	    var augment = hasProto
	      ? protoAugment
	      : copyAugment
	    augment(value, arrayMethods, arrayKeys)
	    this.observeArray(value)
	  } else {
	    this.walk(value)
	  }
	};

	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 */
	Observer.prototype.walk = function walk (obj) {
	  var keys = Object.keys(obj)
	  for (var i = 0; i < keys.length; i++) {
	    defineReactive(obj, keys[i], obj[keys[i]])
	  }
	};

	/**
	 * Observe a list of Array items.
	 */
	Observer.prototype.observeArray = function observeArray (items) {
	  for (var i = 0, l = items.length; i < l; i++) {
	    observe(items[i])
	  }
	};

	// helpers

	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 */
	function protoAugment (target, src) {
	  /* eslint-disable no-proto */
	  target.__proto__ = src
	  /* eslint-enable no-proto */
	}

	/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 *
	 * istanbul ignore next
	 */
	function copyAugment (target, src, keys) {
	  for (var i = 0, l = keys.length; i < l; i++) {
	    var key = keys[i]
	    def(target, key, src[key])
	  }
	}

	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 */
	function observe (value) {
	  if (!isObject(value)) {
	    return
	  }
	  var ob
	  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
	    ob = value.__ob__
	  } else if (
	    observerState.shouldConvert &&
	    !config._isServer &&
	    (Array.isArray(value) || isPlainObject(value)) &&
	    Object.isExtensible(value) &&
	    !value._isVue
	  ) {
	    ob = new Observer(value)
	  }
	  return ob
	}

	/**
	 * Define a reactive property on an Object.
	 */
	function defineReactive (
	  obj,
	  key,
	  val,
	  customSetter
	) {
	  var dep = new Dep()

	  var property = Object.getOwnPropertyDescriptor(obj, key)
	  if (property && property.configurable === false) {
	    return
	  }

	  // cater for pre-defined getter/setters
	  var getter = property && property.get
	  var setter = property && property.set

	  var childOb = observe(val)
	  Object.defineProperty(obj, key, {
	    enumerable: true,
	    configurable: true,
	    get: function reactiveGetter () {
	      var value = getter ? getter.call(obj) : val
	      if (Dep.target) {
	        dep.depend()
	        if (childOb) {
	          childOb.dep.depend()
	        }
	        if (Array.isArray(value)) {
	          for (var e = void 0, i = 0, l = value.length; i < l; i++) {
	            e = value[i]
	            e && e.__ob__ && e.__ob__.dep.depend()
	          }
	        }
	      }
	      return value
	    },
	    set: function reactiveSetter (newVal) {
	      var value = getter ? getter.call(obj) : val
	      if (newVal === value) {
	        return
	      }
	      if (process.env.NODE_ENV !== 'production' && customSetter) {
	        customSetter()
	      }
	      if (setter) {
	        setter.call(obj, newVal)
	      } else {
	        val = newVal
	      }
	      childOb = observe(newVal)
	      dep.notify()
	    }
	  })
	}

	/**
	 * Set a property on an object. Adds the new property and
	 * triggers change notification if the property doesn't
	 * already exist.
	 */
	function set (obj, key, val) {
	  if (Array.isArray(obj)) {
	    obj.splice(key, 1, val)
	    return val
	  }
	  if (hasOwn(obj, key)) {
	    obj[key] = val
	    return
	  }
	  var ob = obj.__ob__
	  if (obj._isVue || (ob && ob.vmCount)) {
	    process.env.NODE_ENV !== 'production' && warn(
	      'Avoid adding reactive properties to a Vue instance or its root $data ' +
	      'at runtime - declare it upfront in the data option.'
	    )
	    return
	  }
	  if (!ob) {
	    obj[key] = val
	    return
	  }
	  defineReactive(ob.value, key, val)
	  ob.dep.notify()
	  return val
	}

	/**
	 * Delete a property and trigger change if necessary.
	 */
	function del (obj, key) {
	  var ob = obj.__ob__
	  if (obj._isVue || (ob && ob.vmCount)) {
	    process.env.NODE_ENV !== 'production' && warn(
	      'Avoid deleting properties on a Vue instance or its root $data ' +
	      '- just set it to null.'
	    )
	    return
	  }
	  if (!hasOwn(obj, key)) {
	    return
	  }
	  delete obj[key]
	  if (!ob) {
	    return
	  }
	  ob.dep.notify()
	}

	/*  */

	function initState (vm) {
	  vm._watchers = []
	  initProps(vm)
	  initData(vm)
	  initComputed(vm)
	  initMethods(vm)
	  initWatch(vm)
	}

	function initProps (vm) {
	  var props = vm.$options.props
	  if (props) {
	    var propsData = vm.$options.propsData || {}
	    var keys = vm.$options._propKeys = Object.keys(props)
	    var isRoot = !vm.$parent
	    // root instance props should be converted
	    observerState.shouldConvert = isRoot
	    var loop = function ( i ) {
	      var key = keys[i]
	      /* istanbul ignore else */
	      if (process.env.NODE_ENV !== 'production') {
	        defineReactive(vm, key, validateProp(key, props, propsData, vm), function () {
	          if (vm.$parent && !observerState.isSettingProps) {
	            warn(
	              "Avoid mutating a prop directly since the value will be " +
	              "overwritten whenever the parent component re-renders. " +
	              "Instead, use a data or computed property based on the prop's " +
	              "value. Prop being mutated: \"" + key + "\"",
	              vm
	            )
	          }
	        })
	      } else {
	        defineReactive(vm, key, validateProp(key, props, propsData, vm))
	      }
	    };

	    for (var i = 0; i < keys.length; i++) loop( i );
	    observerState.shouldConvert = true
	  }
	}

	function initData (vm) {
	  var data = vm.$options.data
	  data = vm._data = typeof data === 'function'
	    ? data.call(vm)
	    : data || {}
	  if (!isPlainObject(data)) {
	    data = {}
	    process.env.NODE_ENV !== 'production' && warn(
	      'data functions should return an object.',
	      vm
	    )
	  }
	  // proxy data on instance
	  var keys = Object.keys(data)
	  var props = vm.$options.props
	  var i = keys.length
	  while (i--) {
	    if (props && hasOwn(props, keys[i])) {
	      process.env.NODE_ENV !== 'production' && warn(
	        "The data property \"" + (keys[i]) + "\" is already declared as a prop. " +
	        "Use prop default value instead.",
	        vm
	      )
	    } else {
	      proxy(vm, keys[i])
	    }
	  }
	  // observe data
	  observe(data)
	  data.__ob__ && data.__ob__.vmCount++
	}

	var computedSharedDefinition = {
	  enumerable: true,
	  configurable: true,
	  get: noop,
	  set: noop
	}

	function initComputed (vm) {
	  var computed = vm.$options.computed
	  if (computed) {
	    for (var key in computed) {
	      var userDef = computed[key]
	      if (typeof userDef === 'function') {
	        computedSharedDefinition.get = makeComputedGetter(userDef, vm)
	        computedSharedDefinition.set = noop
	      } else {
	        computedSharedDefinition.get = userDef.get
	          ? userDef.cache !== false
	            ? makeComputedGetter(userDef.get, vm)
	            : bind(userDef.get, vm)
	          : noop
	        computedSharedDefinition.set = userDef.set
	          ? bind(userDef.set, vm)
	          : noop
	      }
	      Object.defineProperty(vm, key, computedSharedDefinition)
	    }
	  }
	}

	function makeComputedGetter (getter, owner) {
	  var watcher = new Watcher(owner, getter, noop, {
	    lazy: true
	  })
	  return function computedGetter () {
	    if (watcher.dirty) {
	      watcher.evaluate()
	    }
	    if (Dep.target) {
	      watcher.depend()
	    }
	    return watcher.value
	  }
	}

	function initMethods (vm) {
	  var methods = vm.$options.methods
	  if (methods) {
	    for (var key in methods) {
	      if (methods[key] != null) {
	        vm[key] = bind(methods[key], vm)
	      } else if (process.env.NODE_ENV !== 'production') {
	        warn(("Method \"" + key + "\" is undefined in options."), vm)
	      }
	    }
	  }
	}

	function initWatch (vm) {
	  var watch = vm.$options.watch
	  if (watch) {
	    for (var key in watch) {
	      var handler = watch[key]
	      if (Array.isArray(handler)) {
	        for (var i = 0; i < handler.length; i++) {
	          createWatcher(vm, key, handler[i])
	        }
	      } else {
	        createWatcher(vm, key, handler)
	      }
	    }
	  }
	}

	function createWatcher (vm, key, handler) {
	  var options
	  if (isPlainObject(handler)) {
	    options = handler
	    handler = handler.handler
	  }
	  if (typeof handler === 'string') {
	    handler = vm[handler]
	  }
	  vm.$watch(key, handler, options)
	}

	function stateMixin (Vue) {
	  // flow somehow has problems with directly declared definition object
	  // when using Object.defineProperty, so we have to procedurally build up
	  // the object here.
	  var dataDef = {}
	  dataDef.get = function () {
	    return this._data
	  }
	  if (process.env.NODE_ENV !== 'production') {
	    dataDef.set = function (newData) {
	      warn(
	        'Avoid replacing instance root $data. ' +
	        'Use nested data properties instead.',
	        this
	      )
	    }
	  }
	  Object.defineProperty(Vue.prototype, '$data', dataDef)

	  Vue.prototype.$set = set
	  Vue.prototype.$delete = del

	  Vue.prototype.$watch = function (
	    expOrFn,
	    cb,
	    options
	  ) {
	    var vm = this
	    options = options || {}
	    options.user = true
	    var watcher = new Watcher(vm, expOrFn, cb, options)
	    if (options.immediate) {
	      cb.call(vm, watcher.value)
	    }
	    return function unwatchFn () {
	      watcher.teardown()
	    }
	  }
	}

	function proxy (vm, key) {
	  if (!isReserved(key)) {
	    Object.defineProperty(vm, key, {
	      configurable: true,
	      enumerable: true,
	      get: function proxyGetter () {
	        return vm._data[key]
	      },
	      set: function proxySetter (val) {
	        vm._data[key] = val
	      }
	    })
	  }
	}

	/*  */

	var VNode = function VNode (
	  tag,
	  data,
	  children,
	  text,
	  elm,
	  ns,
	  context,
	  componentOptions
	) {
	  this.tag = tag
	  this.data = data
	  this.children = children
	  this.text = text
	  this.elm = elm
	  this.ns = ns
	  this.context = context
	  this.key = data && data.key
	  this.componentOptions = componentOptions
	  this.child = undefined
	  this.parent = undefined
	  this.raw = false
	  this.isStatic = false
	  this.isRootInsert = true
	  this.isComment = false
	  this.isCloned = false
	};

	var emptyVNode = function () {
	  var node = new VNode()
	  node.text = ''
	  node.isComment = true
	  return node
	}

	// optimized shallow clone
	// used for static nodes and slot nodes because they may be reused across
	// multiple renders, cloning them avoids errors when DOM manipulations rely
	// on their elm reference.
	function cloneVNode (vnode) {
	  var cloned = new VNode(
	    vnode.tag,
	    vnode.data,
	    vnode.children,
	    vnode.text,
	    vnode.elm,
	    vnode.ns,
	    vnode.context,
	    vnode.componentOptions
	  )
	  cloned.isStatic = vnode.isStatic
	  cloned.key = vnode.key
	  cloned.isCloned = true
	  return cloned
	}

	function cloneVNodes (vnodes) {
	  var res = new Array(vnodes.length)
	  for (var i = 0; i < vnodes.length; i++) {
	    res[i] = cloneVNode(vnodes[i])
	  }
	  return res
	}

	/*  */

	function normalizeChildren (
	  children,
	  ns,
	  nestedIndex
	) {
	  if (isPrimitive(children)) {
	    return [createTextVNode(children)]
	  }
	  if (Array.isArray(children)) {
	    var res = []
	    for (var i = 0, l = children.length; i < l; i++) {
	      var c = children[i]
	      var last = res[res.length - 1]
	      //  nested
	      if (Array.isArray(c)) {
	        res.push.apply(res, normalizeChildren(c, ns, i))
	      } else if (isPrimitive(c)) {
	        if (last && last.text) {
	          last.text += String(c)
	        } else if (c !== '') {
	          // convert primitive to vnode
	          res.push(createTextVNode(c))
	        }
	      } else if (c instanceof VNode) {
	        if (c.text && last && last.text) {
	          last.text += c.text
	        } else {
	          // inherit parent namespace
	          if (ns) {
	            applyNS(c, ns)
	          }
	          // default key for nested array children (likely generated by v-for)
	          if (c.key == null && nestedIndex != null) {
	            c.key = "__vlist_" + nestedIndex + "_" + i + "__"
	          }
	          res.push(c)
	        }
	      }
	    }
	    return res
	  }
	}

	function createTextVNode (val) {
	  return new VNode(undefined, undefined, undefined, String(val))
	}

	function applyNS (vnode, ns) {
	  if (vnode.tag && !vnode.ns) {
	    vnode.ns = ns
	    if (vnode.children) {
	      for (var i = 0, l = vnode.children.length; i < l; i++) {
	        applyNS(vnode.children[i], ns)
	      }
	    }
	  }
	}

	function getFirstComponentChild (children) {
	  return children && children.filter(function (c) { return c && c.componentOptions; })[0]
	}

	function mergeVNodeHook (def, key, hook) {
	  var oldHook = def[key]
	  if (oldHook) {
	    var injectedHash = def.__injected || (def.__injected = {})
	    if (!injectedHash[key]) {
	      injectedHash[key] = true
	      def[key] = function () {
	        oldHook.apply(this, arguments)
	        hook.apply(this, arguments)
	      }
	    }
	  } else {
	    def[key] = hook
	  }
	}

	function updateListeners (
	  on,
	  oldOn,
	  add,
	  remove
	) {
	  var name, cur, old, fn, event, capture
	  for (name in on) {
	    cur = on[name]
	    old = oldOn[name]
	    if (!cur) {
	      process.env.NODE_ENV !== 'production' && warn(
	        ("Handler for event \"" + name + "\" is undefined.")
	      )
	    } else if (!old) {
	      capture = name.charAt(0) === '!'
	      event = capture ? name.slice(1) : name
	      if (Array.isArray(cur)) {
	        add(event, (cur.invoker = arrInvoker(cur)), capture)
	      } else {
	        if (!cur.invoker) {
	          fn = cur
	          cur = on[name] = {}
	          cur.fn = fn
	          cur.invoker = fnInvoker(cur)
	        }
	        add(event, cur.invoker, capture)
	      }
	    } else if (cur !== old) {
	      if (Array.isArray(old)) {
	        old.length = cur.length
	        for (var i = 0; i < old.length; i++) { old[i] = cur[i] }
	        on[name] = old
	      } else {
	        old.fn = cur
	        on[name] = old
	      }
	    }
	  }
	  for (name in oldOn) {
	    if (!on[name]) {
	      event = name.charAt(0) === '!' ? name.slice(1) : name
	      remove(event, oldOn[name].invoker)
	    }
	  }
	}

	function arrInvoker (arr) {
	  return function (ev) {
	    var arguments$1 = arguments;

	    var single = arguments.length === 1
	    for (var i = 0; i < arr.length; i++) {
	      single ? arr[i](ev) : arr[i].apply(null, arguments$1)
	    }
	  }
	}

	function fnInvoker (o) {
	  return function (ev) {
	    var single = arguments.length === 1
	    single ? o.fn(ev) : o.fn.apply(null, arguments)
	  }
	}

	/*  */

	var activeInstance = null

	function initLifecycle (vm) {
	  var options = vm.$options

	  // locate first non-abstract parent
	  var parent = options.parent
	  if (parent && !options.abstract) {
	    while (parent.$options.abstract && parent.$parent) {
	      parent = parent.$parent
	    }
	    parent.$children.push(vm)
	  }

	  vm.$parent = parent
	  vm.$root = parent ? parent.$root : vm

	  vm.$children = []
	  vm.$refs = {}

	  vm._watcher = null
	  vm._inactive = false
	  vm._isMounted = false
	  vm._isDestroyed = false
	  vm._isBeingDestroyed = false
	}

	function lifecycleMixin (Vue) {
	  Vue.prototype._mount = function (
	    el,
	    hydrating
	  ) {
	    var vm = this
	    vm.$el = el
	    if (!vm.$options.render) {
	      vm.$options.render = emptyVNode
	      if (process.env.NODE_ENV !== 'production') {
	        /* istanbul ignore if */
	        if (vm.$options.template) {
	          warn(
	            'You are using the runtime-only build of Vue where the template ' +
	            'option is not available. Either pre-compile the templates into ' +
	            'render functions, or use the compiler-included build.',
	            vm
	          )
	        } else {
	          warn(
	            'Failed to mount component: template or render function not defined.',
	            vm
	          )
	        }
	      }
	    }
	    callHook(vm, 'beforeMount')
	    vm._watcher = new Watcher(vm, function () {
	      vm._update(vm._render(), hydrating)
	    }, noop)
	    hydrating = false
	    // root instance, call mounted on self
	    // mounted is called for child components in its inserted hook
	    if (vm.$root === vm) {
	      vm._isMounted = true
	      callHook(vm, 'mounted')
	    }
	    return vm
	  }

	  Vue.prototype._update = function (vnode, hydrating) {
	    var vm = this
	    if (vm._isMounted) {
	      callHook(vm, 'beforeUpdate')
	    }
	    var prevEl = vm.$el
	    var prevActiveInstance = activeInstance
	    activeInstance = vm
	    var prevVnode = vm._vnode
	    vm._vnode = vnode
	    if (!prevVnode) {
	      // Vue.prototype.__patch__ is injected in entry points
	      // based on the rendering backend used.
	      vm.$el = vm.__patch__(vm.$el, vnode, hydrating)
	    } else {
	      vm.$el = vm.__patch__(prevVnode, vnode)
	    }
	    activeInstance = prevActiveInstance
	    // update __vue__ reference
	    if (prevEl) {
	      prevEl.__vue__ = null
	    }
	    if (vm.$el) {
	      vm.$el.__vue__ = vm
	    }
	    // if parent is an HOC, update its $el as well
	    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
	      vm.$parent.$el = vm.$el
	    }
	    if (vm._isMounted) {
	      callHook(vm, 'updated')
	    }
	  }

	  Vue.prototype._updateFromParent = function (
	    propsData,
	    listeners,
	    parentVnode,
	    renderChildren
	  ) {
	    var vm = this
	    var hasChildren = !!(vm.$options._renderChildren || renderChildren)
	    vm.$options._parentVnode = parentVnode
	    vm.$options._renderChildren = renderChildren
	    // update props
	    if (propsData && vm.$options.props) {
	      observerState.shouldConvert = false
	      if (process.env.NODE_ENV !== 'production') {
	        observerState.isSettingProps = true
	      }
	      var propKeys = vm.$options._propKeys || []
	      for (var i = 0; i < propKeys.length; i++) {
	        var key = propKeys[i]
	        vm[key] = validateProp(key, vm.$options.props, propsData, vm)
	      }
	      observerState.shouldConvert = true
	      if (process.env.NODE_ENV !== 'production') {
	        observerState.isSettingProps = false
	      }
	    }
	    // update listeners
	    if (listeners) {
	      var oldListeners = vm.$options._parentListeners
	      vm.$options._parentListeners = listeners
	      vm._updateListeners(listeners, oldListeners)
	    }
	    // resolve slots + force update if has children
	    if (hasChildren) {
	      vm.$slots = resolveSlots(renderChildren)
	      vm.$forceUpdate()
	    }
	  }

	  Vue.prototype.$forceUpdate = function () {
	    var vm = this
	    if (vm._watcher) {
	      vm._watcher.update()
	    }
	  }

	  Vue.prototype.$destroy = function () {
	    var vm = this
	    if (vm._isBeingDestroyed) {
	      return
	    }
	    callHook(vm, 'beforeDestroy')
	    vm._isBeingDestroyed = true
	    // remove self from parent
	    var parent = vm.$parent
	    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
	      remove(parent.$children, vm)
	    }
	    // teardown watchers
	    if (vm._watcher) {
	      vm._watcher.teardown()
	    }
	    var i = vm._watchers.length
	    while (i--) {
	      vm._watchers[i].teardown()
	    }
	    // remove reference from data ob
	    // frozen object may not have observer.
	    if (vm._data.__ob__) {
	      vm._data.__ob__.vmCount--
	    }
	    // call the last hook...
	    vm._isDestroyed = true
	    callHook(vm, 'destroyed')
	    // turn off all instance listeners.
	    vm.$off()
	    // remove __vue__ reference
	    if (vm.$el) {
	      vm.$el.__vue__ = null
	    }
	  }
	}

	function callHook (vm, hook) {
	  var handlers = vm.$options[hook]
	  if (handlers) {
	    for (var i = 0, j = handlers.length; i < j; i++) {
	      handlers[i].call(vm)
	    }
	  }
	  vm.$emit('hook:' + hook)
	}

	/*  */

	var hooks = { init: init, prepatch: prepatch, insert: insert, destroy: destroy }
	var hooksToMerge = Object.keys(hooks)

	function createComponent (
	  Ctor,
	  data,
	  context,
	  children,
	  tag
	) {
	  if (!Ctor) {
	    return
	  }

	  if (isObject(Ctor)) {
	    Ctor = Vue.extend(Ctor)
	  }

	  if (typeof Ctor !== 'function') {
	    if (process.env.NODE_ENV !== 'production') {
	      warn(("Invalid Component definition: " + (String(Ctor))), context)
	    }
	    return
	  }

	  // async component
	  if (!Ctor.cid) {
	    if (Ctor.resolved) {
	      Ctor = Ctor.resolved
	    } else {
	      Ctor = resolveAsyncComponent(Ctor, function () {
	        // it's ok to queue this on every render because
	        // $forceUpdate is buffered by the scheduler.
	        context.$forceUpdate()
	      })
	      if (!Ctor) {
	        // return nothing if this is indeed an async component
	        // wait for the callback to trigger parent update.
	        return
	      }
	    }
	  }

	  data = data || {}

	  // extract props
	  var propsData = extractProps(data, Ctor)

	  // functional component
	  if (Ctor.options.functional) {
	    return createFunctionalComponent(Ctor, propsData, data, context, children)
	  }

	  // extract listeners, since these needs to be treated as
	  // child component listeners instead of DOM listeners
	  var listeners = data.on
	  // replace with listeners with .native modifier
	  data.on = data.nativeOn

	  if (Ctor.options.abstract) {
	    // abstract components do not keep anything
	    // other than props & listeners
	    data = {}
	  }

	  // merge component management hooks onto the placeholder node
	  mergeHooks(data)

	  // return a placeholder vnode
	  var name = Ctor.options.name || tag
	  var vnode = new VNode(
	    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
	    data, undefined, undefined, undefined, undefined, context,
	    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children }
	  )
	  return vnode
	}

	function createFunctionalComponent (
	  Ctor,
	  propsData,
	  data,
	  context,
	  children
	) {
	  var props = {}
	  var propOptions = Ctor.options.props
	  if (propOptions) {
	    for (var key in propOptions) {
	      props[key] = validateProp(key, propOptions, propsData)
	    }
	  }
	  return Ctor.options.render.call(
	    null,
	    context.$createElement,
	    {
	      props: props,
	      data: data,
	      parent: context,
	      children: normalizeChildren(children),
	      slots: function () { return resolveSlots(children); }
	    }
	  )
	}

	function createComponentInstanceForVnode (
	  vnode, // we know it's MountedComponentVNode but flow doesn't
	  parent // activeInstance in lifecycle state
	) {
	  var vnodeComponentOptions = vnode.componentOptions
	  var options = {
	    _isComponent: true,
	    parent: parent,
	    propsData: vnodeComponentOptions.propsData,
	    _componentTag: vnodeComponentOptions.tag,
	    _parentVnode: vnode,
	    _parentListeners: vnodeComponentOptions.listeners,
	    _renderChildren: vnodeComponentOptions.children
	  }
	  // check inline-template render functions
	  var inlineTemplate = vnode.data.inlineTemplate
	  if (inlineTemplate) {
	    options.render = inlineTemplate.render
	    options.staticRenderFns = inlineTemplate.staticRenderFns
	  }
	  return new vnodeComponentOptions.Ctor(options)
	}

	function init (vnode, hydrating) {
	  if (!vnode.child || vnode.child._isDestroyed) {
	    var child = vnode.child = createComponentInstanceForVnode(vnode, activeInstance)
	    child.$mount(hydrating ? vnode.elm : undefined, hydrating)
	  }
	}

	function prepatch (
	  oldVnode,
	  vnode
	) {
	  var options = vnode.componentOptions
	  var child = vnode.child = oldVnode.child
	  child._updateFromParent(
	    options.propsData, // updated props
	    options.listeners, // updated listeners
	    vnode, // new parent vnode
	    options.children // new children
	  )
	}

	function insert (vnode) {
	  if (!vnode.child._isMounted) {
	    vnode.child._isMounted = true
	    callHook(vnode.child, 'mounted')
	  }
	  if (vnode.data.keepAlive) {
	    vnode.child._inactive = false
	    callHook(vnode.child, 'activated')
	  }
	}

	function destroy (vnode) {
	  if (!vnode.child._isDestroyed) {
	    if (!vnode.data.keepAlive) {
	      vnode.child.$destroy()
	    } else {
	      vnode.child._inactive = true
	      callHook(vnode.child, 'deactivated')
	    }
	  }
	}

	function resolveAsyncComponent (
	  factory,
	  cb
	) {
	  if (factory.requested) {
	    // pool callbacks
	    factory.pendingCallbacks.push(cb)
	  } else {
	    factory.requested = true
	    var cbs = factory.pendingCallbacks = [cb]
	    var sync = true

	    var resolve = function (res) {
	      if (isObject(res)) {
	        res = Vue.extend(res)
	      }
	      // cache resolved
	      factory.resolved = res
	      // invoke callbacks only if this is not a synchronous resolve
	      // (async resolves are shimmed as synchronous during SSR)
	      if (!sync) {
	        for (var i = 0, l = cbs.length; i < l; i++) {
	          cbs[i](res)
	        }
	      }
	    }

	    var reject = function (reason) {
	      process.env.NODE_ENV !== 'production' && warn(
	        "Failed to resolve async component: " + (String(factory)) +
	        (reason ? ("\nReason: " + reason) : '')
	      )
	    }

	    var res = factory(resolve, reject)

	    // handle promise
	    if (res && typeof res.then === 'function' && !factory.resolved) {
	      res.then(resolve, reject)
	    }

	    sync = false
	    // return in case resolved synchronously
	    return factory.resolved
	  }
	}

	function extractProps (data, Ctor) {
	  // we are only extrating raw values here.
	  // validation and default values are handled in the child
	  // component itself.
	  var propOptions = Ctor.options.props
	  if (!propOptions) {
	    return
	  }
	  var res = {}
	  var attrs = data.attrs;
	  var props = data.props;
	  var domProps = data.domProps;
	  if (attrs || props || domProps) {
	    for (var key in propOptions) {
	      var altKey = hyphenate(key)
	      checkProp(res, props, key, altKey, true) ||
	      checkProp(res, attrs, key, altKey) ||
	      checkProp(res, domProps, key, altKey)
	    }
	  }
	  return res
	}

	function checkProp (
	  res,
	  hash,
	  key,
	  altKey,
	  preserve
	) {
	  if (hash) {
	    if (hasOwn(hash, key)) {
	      res[key] = hash[key]
	      if (!preserve) {
	        delete hash[key]
	      }
	      return true
	    } else if (hasOwn(hash, altKey)) {
	      res[key] = hash[altKey]
	      if (!preserve) {
	        delete hash[altKey]
	      }
	      return true
	    }
	  }
	  return false
	}

	function mergeHooks (data) {
	  if (!data.hook) {
	    data.hook = {}
	  }
	  for (var i = 0; i < hooksToMerge.length; i++) {
	    var key = hooksToMerge[i]
	    var fromParent = data.hook[key]
	    var ours = hooks[key]
	    data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours
	  }
	}

	function mergeHook$1 (a, b) {
	  // since all hooks have at most two args, use fixed args
	  // to avoid having to use fn.apply().
	  return function (_, __) {
	    a(_, __)
	    b(_, __)
	  }
	}

	/*  */

	// wrapper function for providing a more flexible interface
	// without getting yelled at by flow
	function createElement (
	  tag,
	  data,
	  children
	) {
	  if (data && (Array.isArray(data) || typeof data !== 'object')) {
	    children = data
	    data = undefined
	  }
	  // make sure to use real instance instead of proxy as context
	  return _createElement(this._self, tag, data, children)
	}

	function _createElement (
	  context,
	  tag,
	  data,
	  children
	) {
	  if (data && data.__ob__) {
	    process.env.NODE_ENV !== 'production' && warn(
	      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
	      'Always create fresh vnode data objects in each render!',
	      context
	    )
	    return
	  }
	  if (!tag) {
	    // in case of component :is set to falsy value
	    return emptyVNode()
	  }
	  if (typeof tag === 'string') {
	    var Ctor
	    var ns = config.getTagNamespace(tag)
	    if (config.isReservedTag(tag)) {
	      // platform built-in elements
	      return new VNode(
	        tag, data, normalizeChildren(children, ns),
	        undefined, undefined, ns, context
	      )
	    } else if ((Ctor = resolveAsset(context.$options, 'components', tag))) {
	      // component
	      return createComponent(Ctor, data, context, children, tag)
	    } else {
	      // unknown or unlisted namespaced elements
	      // check at runtime because it may get assigned a namespace when its
	      // parent normalizes children
	      return new VNode(
	        tag, data, normalizeChildren(children, ns),
	        undefined, undefined, ns, context
	      )
	    }
	  } else {
	    // direct component options / constructor
	    return createComponent(tag, data, context, children)
	  }
	}

	/*  */

	function initRender (vm) {
	  vm.$vnode = null // the placeholder node in parent tree
	  vm._vnode = null // the root of the child tree
	  vm._staticTrees = null
	  vm.$slots = resolveSlots(vm.$options._renderChildren)
	  // bind the public createElement fn to this instance
	  // so that we get proper render context inside it.
	  vm.$createElement = bind(createElement, vm)
	  if (vm.$options.el) {
	    vm.$mount(vm.$options.el)
	  }
	}

	function renderMixin (Vue) {
	  Vue.prototype.$nextTick = function (fn) {
	    nextTick(fn, this)
	  }

	  Vue.prototype._render = function () {
	    var vm = this
	    var ref = vm.$options;
	    var render = ref.render;
	    var staticRenderFns = ref.staticRenderFns;
	    var _parentVnode = ref._parentVnode;

	    if (vm._isMounted) {
	      // clone slot nodes on re-renders
	      for (var key in vm.$slots) {
	        vm.$slots[key] = cloneVNodes(vm.$slots[key])
	      }
	    }

	    if (staticRenderFns && !vm._staticTrees) {
	      vm._staticTrees = []
	    }
	    // set parent vnode. this allows render functions to have access
	    // to the data on the placeholder node.
	    vm.$vnode = _parentVnode
	    // render self
	    var vnode
	    try {
	      vnode = render.call(vm._renderProxy, vm.$createElement)
	    } catch (e) {
	      if (process.env.NODE_ENV !== 'production') {
	        warn(("Error when rendering " + (formatComponentName(vm)) + ":"))
	      }
	      /* istanbul ignore else */
	      if (config.errorHandler) {
	        config.errorHandler.call(null, e, vm)
	      } else {
	        if (config._isServer) {
	          throw e
	        } else {
	          setTimeout(function () { throw e }, 0)
	        }
	      }
	      // return previous vnode to prevent render error causing blank component
	      vnode = vm._vnode
	    }
	    // return empty vnode in case the render function errored out
	    if (!(vnode instanceof VNode)) {
	      if (process.env.NODE_ENV !== 'production' && Array.isArray(vnode)) {
	        warn(
	          'Multiple root nodes returned from render function. Render function ' +
	          'should return a single root node.',
	          vm
	        )
	      }
	      vnode = emptyVNode()
	    }
	    // set parent
	    vnode.parent = _parentVnode
	    return vnode
	  }

	  // shorthands used in render functions
	  Vue.prototype._h = createElement
	  // toString for mustaches
	  Vue.prototype._s = _toString
	  // number conversion
	  Vue.prototype._n = toNumber
	  // empty vnode
	  Vue.prototype._e = emptyVNode
	  // loose equal
	  Vue.prototype._q = looseEqual
	  // loose indexOf
	  Vue.prototype._i = looseIndexOf

	  // render static tree by index
	  Vue.prototype._m = function renderStatic (
	    index,
	    isInFor
	  ) {
	    var tree = this._staticTrees[index]
	    // if has already-rendered static tree and not inside v-for,
	    // we can reuse the same tree by doing a shallow clone.
	    if (tree && !isInFor) {
	      return Array.isArray(tree)
	        ? cloneVNodes(tree)
	        : cloneVNode(tree)
	    }
	    // otherwise, render a fresh tree.
	    tree = this._staticTrees[index] = this.$options.staticRenderFns[index].call(this._renderProxy)
	    if (Array.isArray(tree)) {
	      for (var i = 0; i < tree.length; i++) {
	        tree[i].isStatic = true
	        tree[i].key = "__static__" + index + "_" + i
	      }
	    } else {
	      tree.isStatic = true
	      tree.key = "__static__" + index
	    }
	    return tree
	  }

	  // filter resolution helper
	  var identity = function (_) { return _; }
	  Vue.prototype._f = function resolveFilter (id) {
	    return resolveAsset(this.$options, 'filters', id, true) || identity
	  }

	  // render v-for
	  Vue.prototype._l = function renderList (
	    val,
	    render
	  ) {
	    var ret, i, l, keys, key
	    if (Array.isArray(val)) {
	      ret = new Array(val.length)
	      for (i = 0, l = val.length; i < l; i++) {
	        ret[i] = render(val[i], i)
	      }
	    } else if (typeof val === 'number') {
	      ret = new Array(val)
	      for (i = 0; i < val; i++) {
	        ret[i] = render(i + 1, i)
	      }
	    } else if (isObject(val)) {
	      keys = Object.keys(val)
	      ret = new Array(keys.length)
	      for (i = 0, l = keys.length; i < l; i++) {
	        key = keys[i]
	        ret[i] = render(val[key], key, i)
	      }
	    }
	    return ret
	  }

	  // renderSlot
	  Vue.prototype._t = function (
	    name,
	    fallback
	  ) {
	    var slotNodes = this.$slots[name]
	    // warn duplicate slot usage
	    if (slotNodes && process.env.NODE_ENV !== 'production') {
	      slotNodes._rendered && warn(
	        "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
	        "- this will likely cause render errors.",
	        this
	      )
	      slotNodes._rendered = true
	    }
	    return slotNodes || fallback
	  }

	  // apply v-bind object
	  Vue.prototype._b = function bindProps (
	    data,
	    value,
	    asProp
	  ) {
	    if (value) {
	      if (!isObject(value)) {
	        process.env.NODE_ENV !== 'production' && warn(
	          'v-bind without argument expects an Object or Array value',
	          this
	        )
	      } else {
	        if (Array.isArray(value)) {
	          value = toObject(value)
	        }
	        for (var key in value) {
	          if (key === 'class' || key === 'style') {
	            data[key] = value[key]
	          } else {
	            var hash = asProp || config.mustUseProp(key)
	              ? data.domProps || (data.domProps = {})
	              : data.attrs || (data.attrs = {})
	            hash[key] = value[key]
	          }
	        }
	      }
	    }
	    return data
	  }

	  // expose v-on keyCodes
	  Vue.prototype._k = function getKeyCodes (key) {
	    return config.keyCodes[key]
	  }
	}

	function resolveSlots (
	  renderChildren
	) {
	  var slots = {}
	  if (!renderChildren) {
	    return slots
	  }
	  var children = normalizeChildren(renderChildren) || []
	  var defaultSlot = []
	  var name, child
	  for (var i = 0, l = children.length; i < l; i++) {
	    child = children[i]
	    if (child.data && (name = child.data.slot)) {
	      delete child.data.slot
	      var slot = (slots[name] || (slots[name] = []))
	      if (child.tag === 'template') {
	        slot.push.apply(slot, child.children)
	      } else {
	        slot.push(child)
	      }
	    } else {
	      defaultSlot.push(child)
	    }
	  }
	  // ignore single whitespace
	  if (defaultSlot.length && !(
	    defaultSlot.length === 1 &&
	    (defaultSlot[0].text === ' ' || defaultSlot[0].isComment)
	  )) {
	    slots.default = defaultSlot
	  }
	  return slots
	}

	/*  */

	function initEvents (vm) {
	  vm._events = Object.create(null)
	  // init parent attached events
	  var listeners = vm.$options._parentListeners
	  var on = bind(vm.$on, vm)
	  var off = bind(vm.$off, vm)
	  vm._updateListeners = function (listeners, oldListeners) {
	    updateListeners(listeners, oldListeners || {}, on, off)
	  }
	  if (listeners) {
	    vm._updateListeners(listeners)
	  }
	}

	function eventsMixin (Vue) {
	  Vue.prototype.$on = function (event, fn) {
	    var vm = this
	    ;(vm._events[event] || (vm._events[event] = [])).push(fn)
	    return vm
	  }

	  Vue.prototype.$once = function (event, fn) {
	    var vm = this
	    function on () {
	      vm.$off(event, on)
	      fn.apply(vm, arguments)
	    }
	    on.fn = fn
	    vm.$on(event, on)
	    return vm
	  }

	  Vue.prototype.$off = function (event, fn) {
	    var vm = this
	    // all
	    if (!arguments.length) {
	      vm._events = Object.create(null)
	      return vm
	    }
	    // specific event
	    var cbs = vm._events[event]
	    if (!cbs) {
	      return vm
	    }
	    if (arguments.length === 1) {
	      vm._events[event] = null
	      return vm
	    }
	    // specific handler
	    var cb
	    var i = cbs.length
	    while (i--) {
	      cb = cbs[i]
	      if (cb === fn || cb.fn === fn) {
	        cbs.splice(i, 1)
	        break
	      }
	    }
	    return vm
	  }

	  Vue.prototype.$emit = function (event) {
	    var vm = this
	    var cbs = vm._events[event]
	    if (cbs) {
	      cbs = cbs.length > 1 ? toArray(cbs) : cbs
	      var args = toArray(arguments, 1)
	      for (var i = 0, l = cbs.length; i < l; i++) {
	        cbs[i].apply(vm, args)
	      }
	    }
	    return vm
	  }
	}

	/*  */

	var uid = 0

	function initMixin (Vue) {
	  Vue.prototype._init = function (options) {
	    var vm = this
	    // a uid
	    vm._uid = uid++
	    // a flag to avoid this being observed
	    vm._isVue = true
	    // merge options
	    if (options && options._isComponent) {
	      // optimize internal component instantiation
	      // since dynamic options merging is pretty slow, and none of the
	      // internal component options needs special treatment.
	      initInternalComponent(vm, options)
	    } else {
	      vm.$options = mergeOptions(
	        resolveConstructorOptions(vm),
	        options || {},
	        vm
	      )
	    }
	    /* istanbul ignore else */
	    if (process.env.NODE_ENV !== 'production') {
	      initProxy(vm)
	    } else {
	      vm._renderProxy = vm
	    }
	    // expose real self
	    vm._self = vm
	    initLifecycle(vm)
	    initEvents(vm)
	    callHook(vm, 'beforeCreate')
	    initState(vm)
	    callHook(vm, 'created')
	    initRender(vm)
	  }

	  function initInternalComponent (vm, options) {
	    var opts = vm.$options = Object.create(resolveConstructorOptions(vm))
	    // doing this because it's faster than dynamic enumeration.
	    opts.parent = options.parent
	    opts.propsData = options.propsData
	    opts._parentVnode = options._parentVnode
	    opts._parentListeners = options._parentListeners
	    opts._renderChildren = options._renderChildren
	    opts._componentTag = options._componentTag
	    if (options.render) {
	      opts.render = options.render
	      opts.staticRenderFns = options.staticRenderFns
	    }
	  }

	  function resolveConstructorOptions (vm) {
	    var Ctor = vm.constructor
	    var options = Ctor.options
	    if (Ctor.super) {
	      var superOptions = Ctor.super.options
	      var cachedSuperOptions = Ctor.superOptions
	      if (superOptions !== cachedSuperOptions) {
	        // super option changed
	        Ctor.superOptions = superOptions
	        options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions)
	        if (options.name) {
	          options.components[options.name] = Ctor
	        }
	      }
	    }
	    return options
	  }
	}

	function Vue (options) {
	  this._init(options)
	}

	initMixin(Vue)
	stateMixin(Vue)
	eventsMixin(Vue)
	lifecycleMixin(Vue)
	renderMixin(Vue)

	var warn = noop
	var formatComponentName

	if (process.env.NODE_ENV !== 'production') {
	  var hasConsole = typeof console !== 'undefined'

	  warn = function (msg, vm) {
	    if (hasConsole && (!config.silent)) {
	      console.error("[Vue warn]: " + msg + " " + (
	        vm ? formatLocation(formatComponentName(vm)) : ''
	      ))
	    }
	  }

	  formatComponentName = function (vm) {
	    if (vm.$root === vm) {
	      return 'root instance'
	    }
	    var name = vm._isVue
	      ? vm.$options.name || vm.$options._componentTag
	      : vm.name
	    return name ? ("component <" + name + ">") : "anonymous component"
	  }

	  var formatLocation = function (str) {
	    if (str === 'anonymous component') {
	      str += " - use the \"name\" option for better debugging messages."
	    }
	    return ("(found in " + str + ")")
	  }
	}

	/*  */

	/**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 */
	var strats = config.optionMergeStrategies

	/**
	 * Options with restrictions
	 */
	if (process.env.NODE_ENV !== 'production') {
	  strats.el = strats.propsData = function (parent, child, vm, key) {
	    if (!vm) {
	      warn(
	        "option \"" + key + "\" can only be used during instance " +
	        'creation with the `new` keyword.'
	      )
	    }
	    return defaultStrat(parent, child)
	  }

	  strats.name = function (parent, child, vm) {
	    if (vm && child) {
	      warn(
	        'options "name" can only be used as a component definition option, ' +
	        'not during instance creation.'
	      )
	    }
	    return defaultStrat(parent, child)
	  }
	}

	/**
	 * Helper that recursively merges two data objects together.
	 */
	function mergeData (to, from) {
	  var key, toVal, fromVal
	  for (key in from) {
	    toVal = to[key]
	    fromVal = from[key]
	    if (!hasOwn(to, key)) {
	      set(to, key, fromVal)
	    } else if (isObject(toVal) && isObject(fromVal)) {
	      mergeData(toVal, fromVal)
	    }
	  }
	  return to
	}

	/**
	 * Data
	 */
	strats.data = function (
	  parentVal,
	  childVal,
	  vm
	) {
	  if (!vm) {
	    // in a Vue.extend merge, both should be functions
	    if (!childVal) {
	      return parentVal
	    }
	    if (typeof childVal !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn(
	        'The "data" option should be a function ' +
	        'that returns a per-instance value in component ' +
	        'definitions.',
	        vm
	      )
	      return parentVal
	    }
	    if (!parentVal) {
	      return childVal
	    }
	    // when parentVal & childVal are both present,
	    // we need to return a function that returns the
	    // merged result of both functions... no need to
	    // check if parentVal is a function here because
	    // it has to be a function to pass previous merges.
	    return function mergedDataFn () {
	      return mergeData(
	        childVal.call(this),
	        parentVal.call(this)
	      )
	    }
	  } else if (parentVal || childVal) {
	    return function mergedInstanceDataFn () {
	      // instance merge
	      var instanceData = typeof childVal === 'function'
	        ? childVal.call(vm)
	        : childVal
	      var defaultData = typeof parentVal === 'function'
	        ? parentVal.call(vm)
	        : undefined
	      if (instanceData) {
	        return mergeData(instanceData, defaultData)
	      } else {
	        return defaultData
	      }
	    }
	  }
	}

	/**
	 * Hooks and param attributes are merged as arrays.
	 */
	function mergeHook (
	  parentVal,
	  childVal
	) {
	  return childVal
	    ? parentVal
	      ? parentVal.concat(childVal)
	      : Array.isArray(childVal)
	        ? childVal
	        : [childVal]
	    : parentVal
	}

	config._lifecycleHooks.forEach(function (hook) {
	  strats[hook] = mergeHook
	})

	/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */
	function mergeAssets (parentVal, childVal) {
	  var res = Object.create(parentVal || null)
	  return childVal
	    ? extend(res, childVal)
	    : res
	}

	config._assetTypes.forEach(function (type) {
	  strats[type + 's'] = mergeAssets
	})

	/**
	 * Watchers.
	 *
	 * Watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */
	strats.watch = function (parentVal, childVal) {
	  /* istanbul ignore if */
	  if (!childVal) { return parentVal }
	  if (!parentVal) { return childVal }
	  var ret = {}
	  extend(ret, parentVal)
	  for (var key in childVal) {
	    var parent = ret[key]
	    var child = childVal[key]
	    if (parent && !Array.isArray(parent)) {
	      parent = [parent]
	    }
	    ret[key] = parent
	      ? parent.concat(child)
	      : [child]
	  }
	  return ret
	}

	/**
	 * Other object hashes.
	 */
	strats.props =
	strats.methods =
	strats.computed = function (parentVal, childVal) {
	  if (!childVal) { return parentVal }
	  if (!parentVal) { return childVal }
	  var ret = Object.create(null)
	  extend(ret, parentVal)
	  extend(ret, childVal)
	  return ret
	}

	/**
	 * Default strategy.
	 */
	var defaultStrat = function (parentVal, childVal) {
	  return childVal === undefined
	    ? parentVal
	    : childVal
	}

	/**
	 * Make sure component options get converted to actual
	 * constructors.
	 */
	function normalizeComponents (options) {
	  if (options.components) {
	    var components = options.components
	    var def
	    for (var key in components) {
	      var lower = key.toLowerCase()
	      if (isBuiltInTag(lower) || config.isReservedTag(lower)) {
	        process.env.NODE_ENV !== 'production' && warn(
	          'Do not use built-in or reserved HTML elements as component ' +
	          'id: ' + key
	        )
	        continue
	      }
	      def = components[key]
	      if (isPlainObject(def)) {
	        components[key] = Vue.extend(def)
	      }
	    }
	  }
	}

	/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 */
	function normalizeProps (options) {
	  var props = options.props
	  if (!props) { return }
	  var res = {}
	  var i, val, name
	  if (Array.isArray(props)) {
	    i = props.length
	    while (i--) {
	      val = props[i]
	      if (typeof val === 'string') {
	        name = camelize(val)
	        res[name] = { type: null }
	      } else if (process.env.NODE_ENV !== 'production') {
	        warn('props must be strings when using array syntax.')
	      }
	    }
	  } else if (isPlainObject(props)) {
	    for (var key in props) {
	      val = props[key]
	      name = camelize(key)
	      res[name] = isPlainObject(val)
	        ? val
	        : { type: val }
	    }
	  }
	  options.props = res
	}

	/**
	 * Normalize raw function directives into object format.
	 */
	function normalizeDirectives (options) {
	  var dirs = options.directives
	  if (dirs) {
	    for (var key in dirs) {
	      var def = dirs[key]
	      if (typeof def === 'function') {
	        dirs[key] = { bind: def, update: def }
	      }
	    }
	  }
	}

	/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 */
	function mergeOptions (
	  parent,
	  child,
	  vm
	) {
	  normalizeComponents(child)
	  normalizeProps(child)
	  normalizeDirectives(child)
	  var extendsFrom = child.extends
	  if (extendsFrom) {
	    parent = typeof extendsFrom === 'function'
	      ? mergeOptions(parent, extendsFrom.options, vm)
	      : mergeOptions(parent, extendsFrom, vm)
	  }
	  if (child.mixins) {
	    for (var i = 0, l = child.mixins.length; i < l; i++) {
	      var mixin = child.mixins[i]
	      if (mixin.prototype instanceof Vue) {
	        mixin = mixin.options
	      }
	      parent = mergeOptions(parent, mixin, vm)
	    }
	  }
	  var options = {}
	  var key
	  for (key in parent) {
	    mergeField(key)
	  }
	  for (key in child) {
	    if (!hasOwn(parent, key)) {
	      mergeField(key)
	    }
	  }
	  function mergeField (key) {
	    var strat = strats[key] || defaultStrat
	    options[key] = strat(parent[key], child[key], vm, key)
	  }
	  return options
	}

	/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 */
	function resolveAsset (
	  options,
	  type,
	  id,
	  warnMissing
	) {
	  /* istanbul ignore if */
	  if (typeof id !== 'string') {
	    return
	  }
	  var assets = options[type]
	  var res = assets[id] ||
	    // camelCase ID
	    assets[camelize(id)] ||
	    // Pascal Case ID
	    assets[capitalize(camelize(id))]
	  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
	    warn(
	      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
	      options
	    )
	  }
	  return res
	}

	/*  */

	function validateProp (
	  key,
	  propOptions,
	  propsData,
	  vm
	) {
	  var prop = propOptions[key]
	  var absent = !hasOwn(propsData, key)
	  var value = propsData[key]
	  // handle boolean props
	  if (getType(prop.type) === 'Boolean') {
	    if (absent && !hasOwn(prop, 'default')) {
	      value = false
	    } else if (value === '' || value === hyphenate(key)) {
	      value = true
	    }
	  }
	  // check default value
	  if (value === undefined) {
	    value = getPropDefaultValue(vm, prop, key)
	    // since the default value is a fresh copy,
	    // make sure to observe it.
	    var prevShouldConvert = observerState.shouldConvert
	    observerState.shouldConvert = true
	    observe(value)
	    observerState.shouldConvert = prevShouldConvert
	  }
	  if (process.env.NODE_ENV !== 'production') {
	    assertProp(prop, key, value, vm, absent)
	  }
	  return value
	}

	/**
	 * Get the default value of a prop.
	 */
	function getPropDefaultValue (vm, prop, name) {
	  // no default, return undefined
	  if (!hasOwn(prop, 'default')) {
	    return undefined
	  }
	  var def = prop.default
	  // warn against non-factory defaults for Object & Array
	  if (isObject(def)) {
	    process.env.NODE_ENV !== 'production' && warn(
	      'Invalid default value for prop "' + name + '": ' +
	      'Props with type Object/Array must use a factory function ' +
	      'to return the default value.',
	      vm
	    )
	  }
	  // call factory function for non-Function types
	  return typeof def === 'function' && prop.type !== Function
	    ? def.call(vm)
	    : def
	}

	/**
	 * Assert whether a prop is valid.
	 */
	function assertProp (
	  prop,
	  name,
	  value,
	  vm,
	  absent
	) {
	  if (prop.required && absent) {
	    warn(
	      'Missing required prop: "' + name + '"',
	      vm
	    )
	    return
	  }
	  if (value == null && !prop.required) {
	    return
	  }
	  var type = prop.type
	  var valid = !type || type === true
	  var expectedTypes = []
	  if (type) {
	    if (!Array.isArray(type)) {
	      type = [type]
	    }
	    for (var i = 0; i < type.length && !valid; i++) {
	      var assertedType = assertType(value, type[i])
	      expectedTypes.push(assertedType.expectedType)
	      valid = assertedType.valid
	    }
	  }
	  if (!valid) {
	    warn(
	      'Invalid prop: type check failed for prop "' + name + '".' +
	      ' Expected ' + expectedTypes.map(capitalize).join(', ') +
	      ', got ' + Object.prototype.toString.call(value).slice(8, -1) + '.',
	      vm
	    )
	    return
	  }
	  var validator = prop.validator
	  if (validator) {
	    if (!validator(value)) {
	      warn(
	        'Invalid prop: custom validator check failed for prop "' + name + '".',
	        vm
	      )
	    }
	  }
	}

	/**
	 * Assert the type of a value
	 */
	function assertType (value, type) {
	  var valid
	  var expectedType = getType(type)
	  if (expectedType === 'String') {
	    valid = typeof value === (expectedType = 'string')
	  } else if (expectedType === 'Number') {
	    valid = typeof value === (expectedType = 'number')
	  } else if (expectedType === 'Boolean') {
	    valid = typeof value === (expectedType = 'boolean')
	  } else if (expectedType === 'Function') {
	    valid = typeof value === (expectedType = 'function')
	  } else if (expectedType === 'Object') {
	    valid = isPlainObject(value)
	  } else if (expectedType === 'Array') {
	    valid = Array.isArray(value)
	  } else {
	    valid = value instanceof type
	  }
	  return {
	    valid: valid,
	    expectedType: expectedType
	  }
	}

	/**
	 * Use function string name to check built-in types,
	 * because a simple equality check will fail when running
	 * across different vms / iframes.
	 */
	function getType (fn) {
	  var match = fn && fn.toString().match(/^\s*function (\w+)/)
	  return match && match[1]
	}



	var util = Object.freeze({
		defineReactive: defineReactive,
		_toString: _toString,
		toNumber: toNumber,
		makeMap: makeMap,
		isBuiltInTag: isBuiltInTag,
		remove: remove,
		hasOwn: hasOwn,
		isPrimitive: isPrimitive,
		cached: cached,
		camelize: camelize,
		capitalize: capitalize,
		hyphenate: hyphenate,
		bind: bind,
		toArray: toArray,
		extend: extend,
		isObject: isObject,
		isPlainObject: isPlainObject,
		toObject: toObject,
		noop: noop,
		no: no,
		genStaticKeys: genStaticKeys,
		looseEqual: looseEqual,
		looseIndexOf: looseIndexOf,
		isReserved: isReserved,
		def: def,
		parsePath: parsePath,
		hasProto: hasProto,
		inBrowser: inBrowser,
		UA: UA,
		isIE: isIE,
		isIE9: isIE9,
		isEdge: isEdge,
		isAndroid: isAndroid,
		devtools: devtools,
		nextTick: nextTick,
		get _Set () { return _Set; },
		mergeOptions: mergeOptions,
		resolveAsset: resolveAsset,
		get warn () { return warn; },
		get formatComponentName () { return formatComponentName; },
		validateProp: validateProp
	});

	/*  */

	function initUse (Vue) {
	  Vue.use = function (plugin) {
	    /* istanbul ignore if */
	    if (plugin.installed) {
	      return
	    }
	    // additional parameters
	    var args = toArray(arguments, 1)
	    args.unshift(this)
	    if (typeof plugin.install === 'function') {
	      plugin.install.apply(plugin, args)
	    } else {
	      plugin.apply(null, args)
	    }
	    plugin.installed = true
	    return this
	  }
	}

	/*  */

	function initMixin$1 (Vue) {
	  Vue.mixin = function (mixin) {
	    Vue.options = mergeOptions(Vue.options, mixin)
	  }
	}

	/*  */

	function initExtend (Vue) {
	  /**
	   * Each instance constructor, including Vue, has a unique
	   * cid. This enables us to create wrapped "child
	   * constructors" for prototypal inheritance and cache them.
	   */
	  Vue.cid = 0
	  var cid = 1

	  /**
	   * Class inheritance
	   */
	  Vue.extend = function (extendOptions) {
	    extendOptions = extendOptions || {}
	    var Super = this
	    var isFirstExtend = Super.cid === 0
	    if (isFirstExtend && extendOptions._Ctor) {
	      return extendOptions._Ctor
	    }
	    var name = extendOptions.name || Super.options.name
	    if (process.env.NODE_ENV !== 'production') {
	      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
	        warn(
	          'Invalid component name: "' + name + '". Component names ' +
	          'can only contain alphanumeric characaters and the hyphen.'
	        )
	        name = null
	      }
	    }
	    var Sub = function VueComponent (options) {
	      this._init(options)
	    }
	    Sub.prototype = Object.create(Super.prototype)
	    Sub.prototype.constructor = Sub
	    Sub.cid = cid++
	    Sub.options = mergeOptions(
	      Super.options,
	      extendOptions
	    )
	    Sub['super'] = Super
	    // allow further extension
	    Sub.extend = Super.extend
	    // create asset registers, so extended classes
	    // can have their private assets too.
	    config._assetTypes.forEach(function (type) {
	      Sub[type] = Super[type]
	    })
	    // enable recursive self-lookup
	    if (name) {
	      Sub.options.components[name] = Sub
	    }
	    // keep a reference to the super options at extension time.
	    // later at instantiation we can check if Super's options have
	    // been updated.
	    Sub.superOptions = Super.options
	    Sub.extendOptions = extendOptions
	    // cache constructor
	    if (isFirstExtend) {
	      extendOptions._Ctor = Sub
	    }
	    return Sub
	  }
	}

	/*  */

	function initAssetRegisters (Vue) {
	  /**
	   * Create asset registration methods.
	   */
	  config._assetTypes.forEach(function (type) {
	    Vue[type] = function (
	      id,
	      definition
	    ) {
	      if (!definition) {
	        return this.options[type + 's'][id]
	      } else {
	        /* istanbul ignore if */
	        if (process.env.NODE_ENV !== 'production') {
	          if (type === 'component' && config.isReservedTag(id)) {
	            warn(
	              'Do not use built-in or reserved HTML elements as component ' +
	              'id: ' + id
	            )
	          }
	        }
	        if (type === 'component' && isPlainObject(definition)) {
	          definition.name = definition.name || id
	          definition = Vue.extend(definition)
	        }
	        if (type === 'directive' && typeof definition === 'function') {
	          definition = { bind: definition, update: definition }
	        }
	        this.options[type + 's'][id] = definition
	        return definition
	      }
	    }
	  })
	}

	var KeepAlive = {
	  name: 'keep-alive',
	  abstract: true,
	  created: function created () {
	    this.cache = Object.create(null)
	  },
	  render: function render () {
	    var vnode = getFirstComponentChild(this.$slots.default)
	    if (vnode && vnode.componentOptions) {
	      var opts = vnode.componentOptions
	      var key = vnode.key == null
	        // same constructor may get registered as different local components
	        // so cid alone is not enough (#3269)
	        ? opts.Ctor.cid + '::' + opts.tag
	        : vnode.key
	      if (this.cache[key]) {
	        vnode.child = this.cache[key].child
	      } else {
	        this.cache[key] = vnode
	      }
	      vnode.data.keepAlive = true
	    }
	    return vnode
	  },
	  destroyed: function destroyed () {
	    var this$1 = this;

	    for (var key in this.cache) {
	      var vnode = this$1.cache[key]
	      callHook(vnode.child, 'deactivated')
	      vnode.child.$destroy()
	    }
	  }
	}

	var builtInComponents = {
	  KeepAlive: KeepAlive
	}

	/*  */

	function initGlobalAPI (Vue) {
	  // config
	  var configDef = {}
	  configDef.get = function () { return config; }
	  if (process.env.NODE_ENV !== 'production') {
	    configDef.set = function () {
	      warn(
	        'Do not replace the Vue.config object, set individual fields instead.'
	      )
	    }
	  }
	  Object.defineProperty(Vue, 'config', configDef)
	  Vue.util = util
	  Vue.set = set
	  Vue.delete = del
	  Vue.nextTick = nextTick

	  Vue.options = Object.create(null)
	  config._assetTypes.forEach(function (type) {
	    Vue.options[type + 's'] = Object.create(null)
	  })

	  extend(Vue.options.components, builtInComponents)

	  initUse(Vue)
	  initMixin$1(Vue)
	  initExtend(Vue)
	  initAssetRegisters(Vue)
	}

	initGlobalAPI(Vue)

	Object.defineProperty(Vue.prototype, '$isServer', {
	  get: function () { return config._isServer; }
	})

	Vue.version = '2.0.0-rc.7'

	/*  */

	// attributes that should be using props for binding
	var mustUseProp = makeMap('value,selected,checked,muted')

	var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck')

	var isBooleanAttr = makeMap(
	  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
	  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
	  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
	  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
	  'required,reversed,scoped,seamless,selected,sortable,translate,' +
	  'truespeed,typemustmatch,visible'
	)

	var isAttr = makeMap(
	  'accept,accept-charset,accesskey,action,align,alt,async,autocomplete,' +
	  'autofocus,autoplay,autosave,bgcolor,border,buffered,challenge,charset,' +
	  'checked,cite,class,code,codebase,color,cols,colspan,content,http-equiv,' +
	  'name,contenteditable,contextmenu,controls,coords,data,datetime,default,' +
	  'defer,dir,dirname,disabled,download,draggable,dropzone,enctype,method,for,' +
	  'form,formaction,headers,<th>,height,hidden,high,href,hreflang,http-equiv,' +
	  'icon,id,ismap,itemprop,keytype,kind,label,lang,language,list,loop,low,' +
	  'manifest,max,maxlength,media,method,GET,POST,min,multiple,email,file,' +
	  'muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,' +
	  'preload,radiogroup,readonly,rel,required,reversed,rows,rowspan,sandbox,' +
	  'scope,scoped,seamless,selected,shape,size,type,text,password,sizes,span,' +
	  'spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,' +
	  'target,title,type,usemap,value,width,wrap'
	)

	var xlinkNS = 'http://www.w3.org/1999/xlink'

	var isXlink = function (name) {
	  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
	}

	var getXlinkProp = function (name) {
	  return isXlink(name) ? name.slice(6, name.length) : ''
	}

	var isFalsyAttrValue = function (val) {
	  return val == null || val === false
	}

	/*  */

	function genClassForVnode (vnode) {
	  var data = vnode.data
	  var parentNode = vnode
	  var childNode = vnode
	  while (childNode.child) {
	    childNode = childNode.child._vnode
	    if (childNode.data) {
	      data = mergeClassData(childNode.data, data)
	    }
	  }
	  while ((parentNode = parentNode.parent)) {
	    if (parentNode.data) {
	      data = mergeClassData(data, parentNode.data)
	    }
	  }
	  return genClassFromData(data)
	}

	function mergeClassData (child, parent) {
	  return {
	    staticClass: concat(child.staticClass, parent.staticClass),
	    class: child.class
	      ? [child.class, parent.class]
	      : parent.class
	  }
	}

	function genClassFromData (data) {
	  var dynamicClass = data.class
	  var staticClass = data.staticClass
	  if (staticClass || dynamicClass) {
	    return concat(staticClass, stringifyClass(dynamicClass))
	  }
	  /* istanbul ignore next */
	  return ''
	}

	function concat (a, b) {
	  return a ? b ? (a + ' ' + b) : a : (b || '')
	}

	function stringifyClass (value) {
	  var res = ''
	  if (!value) {
	    return res
	  }
	  if (typeof value === 'string') {
	    return value
	  }
	  if (Array.isArray(value)) {
	    var stringified
	    for (var i = 0, l = value.length; i < l; i++) {
	      if (value[i]) {
	        if ((stringified = stringifyClass(value[i]))) {
	          res += stringified + ' '
	        }
	      }
	    }
	    return res.slice(0, -1)
	  }
	  if (isObject(value)) {
	    for (var key in value) {
	      if (value[key]) { res += key + ' ' }
	    }
	    return res.slice(0, -1)
	  }
	  /* istanbul ignore next */
	  return res
	}

	/*  */

	var namespaceMap = {
	  svg: 'http://www.w3.org/2000/svg',
	  math: 'http://www.w3.org/1998/Math/MathML'
	}

	var isHTMLTag = makeMap(
	  'html,body,base,head,link,meta,style,title,' +
	  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
	  'div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,' +
	  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
	  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
	  'embed,object,param,source,canvas,script,noscript,del,ins,' +
	  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
	  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
	  'output,progress,select,textarea,' +
	  'details,dialog,menu,menuitem,summary,' +
	  'content,element,shadow,template'
	)

	var isUnaryTag = makeMap(
	  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
	  'link,meta,param,source,track,wbr',
	  true
	)

	// Elements that you can, intentionally, leave open
	// (and which close themselves)
	var canBeLeftOpenTag = makeMap(
	  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source',
	  true
	)

	// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
	// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
	var isNonPhrasingTag = makeMap(
	  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
	  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
	  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
	  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
	  'title,tr,track',
	  true
	)

	// this map is intentionally selective, only covering SVG elements that may
	// contain child elements.
	var isSVG = makeMap(
	  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font,' +
	  'font-face,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
	  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
	  true
	)

	var isReservedTag = function (tag) {
	  return isHTMLTag(tag) || isSVG(tag)
	}

	function getTagNamespace (tag) {
	  if (isSVG(tag)) {
	    return 'svg'
	  }
	  // basic support for MathML
	  // note it doesn't support other MathML elements being component roots
	  if (tag === 'math') {
	    return 'math'
	  }
	}

	var unknownElementCache = Object.create(null)
	function isUnknownElement (tag) {
	  /* istanbul ignore if */
	  if (!inBrowser) {
	    return true
	  }
	  if (isReservedTag(tag)) {
	    return false
	  }
	  tag = tag.toLowerCase()
	  /* istanbul ignore if */
	  if (unknownElementCache[tag] != null) {
	    return unknownElementCache[tag]
	  }
	  var el = document.createElement(tag)
	  if (tag.indexOf('-') > -1) {
	    // http://stackoverflow.com/a/28210364/1070244
	    return (unknownElementCache[tag] = (
	      el.constructor === window.HTMLUnknownElement ||
	      el.constructor === window.HTMLElement
	    ))
	  } else {
	    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
	  }
	}

	/*  */

	/**
	 * Query an element selector if it's not an element already.
	 */
	function query (el) {
	  if (typeof el === 'string') {
	    var selector = el
	    el = document.querySelector(el)
	    if (!el) {
	      process.env.NODE_ENV !== 'production' && warn(
	        'Cannot find element: ' + selector
	      )
	      return document.createElement('div')
	    }
	  }
	  return el
	}

	/*  */

	function createElement$1 (tagName) {
	  return document.createElement(tagName)
	}

	function createElementNS (namespace, tagName) {
	  return document.createElementNS(namespaceMap[namespace], tagName)
	}

	function createTextNode (text) {
	  return document.createTextNode(text)
	}

	function createComment (text) {
	  return document.createComment(text)
	}

	function insertBefore (parentNode, newNode, referenceNode) {
	  parentNode.insertBefore(newNode, referenceNode)
	}

	function removeChild (node, child) {
	  node.removeChild(child)
	}

	function appendChild (node, child) {
	  node.appendChild(child)
	}

	function parentNode (node) {
	  return node.parentNode
	}

	function nextSibling (node) {
	  return node.nextSibling
	}

	function tagName (node) {
	  return node.tagName
	}

	function setTextContent (node, text) {
	  node.textContent = text
	}

	function childNodes (node) {
	  return node.childNodes
	}

	function setAttribute (node, key, val) {
	  node.setAttribute(key, val)
	}


	var nodeOps = Object.freeze({
	  createElement: createElement$1,
	  createElementNS: createElementNS,
	  createTextNode: createTextNode,
	  createComment: createComment,
	  insertBefore: insertBefore,
	  removeChild: removeChild,
	  appendChild: appendChild,
	  parentNode: parentNode,
	  nextSibling: nextSibling,
	  tagName: tagName,
	  setTextContent: setTextContent,
	  childNodes: childNodes,
	  setAttribute: setAttribute
	});

	/*  */

	var ref = {
	  create: function create (_, vnode) {
	    registerRef(vnode)
	  },
	  update: function update (oldVnode, vnode) {
	    if (oldVnode.data.ref !== vnode.data.ref) {
	      registerRef(oldVnode, true)
	      registerRef(vnode)
	    }
	  },
	  destroy: function destroy (vnode) {
	    registerRef(vnode, true)
	  }
	}

	function registerRef (vnode, isRemoval) {
	  var key = vnode.data.ref
	  if (!key) { return }

	  var vm = vnode.context
	  var ref = vnode.child || vnode.elm
	  var refs = vm.$refs
	  if (isRemoval) {
	    if (Array.isArray(refs[key])) {
	      remove(refs[key], ref)
	    } else if (refs[key] === ref) {
	      refs[key] = undefined
	    }
	  } else {
	    if (vnode.data.refInFor) {
	      if (Array.isArray(refs[key])) {
	        refs[key].push(ref)
	      } else {
	        refs[key] = [ref]
	      }
	    } else {
	      refs[key] = ref
	    }
	  }
	}

	/**
	 * Virtual DOM patching algorithm based on Snabbdom by
	 * Simon Friis Vindum (@paldepind)
	 * Licensed under the MIT License
	 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
	 *
	 * modified by Evan You (@yyx990803)
	 *

	/*
	 * Not type-checking this because this file is perf-critical and the cost
	 * of making flow understand it is not worth it.
	 */

	var emptyData = {}
	var emptyNode = new VNode('', emptyData, [])
	var hooks$1 = ['create', 'update', 'postpatch', 'remove', 'destroy']

	function isUndef (s) {
	  return s == null
	}

	function isDef (s) {
	  return s != null
	}

	function sameVnode (vnode1, vnode2) {
	  return (
	    vnode1.key === vnode2.key &&
	    vnode1.tag === vnode2.tag &&
	    vnode1.isComment === vnode2.isComment &&
	    !vnode1.data === !vnode2.data
	  )
	}

	function createKeyToOldIdx (children, beginIdx, endIdx) {
	  var i, key
	  var map = {}
	  for (i = beginIdx; i <= endIdx; ++i) {
	    key = children[i].key
	    if (isDef(key)) { map[key] = i }
	  }
	  return map
	}

	function createPatchFunction (backend) {
	  var i, j
	  var cbs = {}

	  var modules = backend.modules;
	  var nodeOps = backend.nodeOps;

	  for (i = 0; i < hooks$1.length; ++i) {
	    cbs[hooks$1[i]] = []
	    for (j = 0; j < modules.length; ++j) {
	      if (modules[j][hooks$1[i]] !== undefined) { cbs[hooks$1[i]].push(modules[j][hooks$1[i]]) }
	    }
	  }

	  function emptyNodeAt (elm) {
	    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
	  }

	  function createRmCb (childElm, listeners) {
	    function remove () {
	      if (--remove.listeners === 0) {
	        removeElement(childElm)
	      }
	    }
	    remove.listeners = listeners
	    return remove
	  }

	  function removeElement (el) {
	    var parent = nodeOps.parentNode(el)
	    nodeOps.removeChild(parent, el)
	  }

	  function createElm (vnode, insertedVnodeQueue, nested) {
	    var i
	    var data = vnode.data
	    vnode.isRootInsert = !nested
	    if (isDef(data)) {
	      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode) }
	      // after calling the init hook, if the vnode is a child component
	      // it should've created a child instance and mounted it. the child
	      // component also has set the placeholder vnode's elm.
	      // in that case we can just return the element and be done.
	      if (isDef(i = vnode.child)) {
	        initComponent(vnode, insertedVnodeQueue)
	        return vnode.elm
	      }
	    }
	    var children = vnode.children
	    var tag = vnode.tag
	    if (isDef(tag)) {
	      if (process.env.NODE_ENV !== 'production') {
	        if (
	          !vnode.ns &&
	          !(config.ignoredElements && config.ignoredElements.indexOf(tag) > -1) &&
	          config.isUnknownElement(tag)
	        ) {
	          warn(
	            'Unknown custom element: <' + tag + '> - did you ' +
	            'register the component correctly? For recursive components, ' +
	            'make sure to provide the "name" option.',
	            vnode.context
	          )
	        }
	      }
	      vnode.elm = vnode.ns
	        ? nodeOps.createElementNS(vnode.ns, tag)
	        : nodeOps.createElement(tag)
	      setScope(vnode)
	      createChildren(vnode, children, insertedVnodeQueue)
	      if (isDef(data)) {
	        invokeCreateHooks(vnode, insertedVnodeQueue)
	      }
	    } else if (vnode.isComment) {
	      vnode.elm = nodeOps.createComment(vnode.text)
	    } else {
	      vnode.elm = nodeOps.createTextNode(vnode.text)
	    }
	    return vnode.elm
	  }

	  function createChildren (vnode, children, insertedVnodeQueue) {
	    if (Array.isArray(children)) {
	      for (var i = 0; i < children.length; ++i) {
	        nodeOps.appendChild(vnode.elm, createElm(children[i], insertedVnodeQueue, true))
	      }
	    } else if (isPrimitive(vnode.text)) {
	      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text))
	    }
	  }

	  function isPatchable (vnode) {
	    while (vnode.child) {
	      vnode = vnode.child._vnode
	    }
	    return isDef(vnode.tag)
	  }

	  function invokeCreateHooks (vnode, insertedVnodeQueue) {
	    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
	      cbs.create[i$1](emptyNode, vnode)
	    }
	    i = vnode.data.hook // Reuse variable
	    if (isDef(i)) {
	      if (i.create) { i.create(emptyNode, vnode) }
	      if (i.insert) { insertedVnodeQueue.push(vnode) }
	    }
	  }

	  function initComponent (vnode, insertedVnodeQueue) {
	    if (vnode.data.pendingInsert) {
	      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert)
	    }
	    vnode.elm = vnode.child.$el
	    if (isPatchable(vnode)) {
	      invokeCreateHooks(vnode, insertedVnodeQueue)
	      setScope(vnode)
	    } else {
	      // empty component root.
	      // skip all element-related modules except for ref (#3455)
	      registerRef(vnode)
	      // make sure to invoke the insert hook
	      insertedVnodeQueue.push(vnode)
	    }
	  }

	  // set scope id attribute for scoped CSS.
	  // this is implemented as a special case to avoid the overhead
	  // of going through the normal attribute patching process.
	  function setScope (vnode) {
	    var i
	    if (isDef(i = vnode.context) && isDef(i = i.$options._scopeId)) {
	      nodeOps.setAttribute(vnode.elm, i, '')
	    }
	    if (isDef(i = activeInstance) &&
	        i !== vnode.context &&
	        isDef(i = i.$options._scopeId)) {
	      nodeOps.setAttribute(vnode.elm, i, '')
	    }
	  }

	  function addVnodes (parentElm, before, vnodes, startIdx, endIdx, insertedVnodeQueue) {
	    for (; startIdx <= endIdx; ++startIdx) {
	      nodeOps.insertBefore(parentElm, createElm(vnodes[startIdx], insertedVnodeQueue), before)
	    }
	  }

	  function invokeDestroyHook (vnode) {
	    var i, j
	    var data = vnode.data
	    if (isDef(data)) {
	      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode) }
	      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode) }
	    }
	    if (isDef(i = vnode.child) && !data.keepAlive) {
	      invokeDestroyHook(i._vnode)
	    }
	    if (isDef(i = vnode.children)) {
	      for (j = 0; j < vnode.children.length; ++j) {
	        invokeDestroyHook(vnode.children[j])
	      }
	    }
	  }

	  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
	    for (; startIdx <= endIdx; ++startIdx) {
	      var ch = vnodes[startIdx]
	      if (isDef(ch)) {
	        if (isDef(ch.tag)) {
	          removeAndInvokeRemoveHook(ch)
	          invokeDestroyHook(ch)
	        } else { // Text node
	          nodeOps.removeChild(parentElm, ch.elm)
	        }
	      }
	    }
	  }

	  function removeAndInvokeRemoveHook (vnode, rm) {
	    if (rm || isDef(vnode.data)) {
	      var listeners = cbs.remove.length + 1
	      if (!rm) {
	        // directly removing
	        rm = createRmCb(vnode.elm, listeners)
	      } else {
	        // we have a recursively passed down rm callback
	        // increase the listeners count
	        rm.listeners += listeners
	      }
	      // recursively invoke hooks on child component root node
	      if (isDef(i = vnode.child) && isDef(i = i._vnode) && isDef(i.data)) {
	        removeAndInvokeRemoveHook(i, rm)
	      }
	      for (i = 0; i < cbs.remove.length; ++i) {
	        cbs.remove[i](vnode, rm)
	      }
	      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
	        i(vnode, rm)
	      } else {
	        rm()
	      }
	    } else {
	      removeElement(vnode.elm)
	    }
	  }

	  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
	    var oldStartIdx = 0
	    var newStartIdx = 0
	    var oldEndIdx = oldCh.length - 1
	    var oldStartVnode = oldCh[0]
	    var oldEndVnode = oldCh[oldEndIdx]
	    var newEndIdx = newCh.length - 1
	    var newStartVnode = newCh[0]
	    var newEndVnode = newCh[newEndIdx]
	    var oldKeyToIdx, idxInOld, elmToMove, before

	    // removeOnly is a special flag used only by <transition-group>
	    // to ensure removed elements stay in correct relative positions
	    // during leaving transitions
	    var canMove = !removeOnly

	    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
	      if (isUndef(oldStartVnode)) {
	        oldStartVnode = oldCh[++oldStartIdx] // Vnode has been moved left
	      } else if (isUndef(oldEndVnode)) {
	        oldEndVnode = oldCh[--oldEndIdx]
	      } else if (sameVnode(oldStartVnode, newStartVnode)) {
	        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue)
	        oldStartVnode = oldCh[++oldStartIdx]
	        newStartVnode = newCh[++newStartIdx]
	      } else if (sameVnode(oldEndVnode, newEndVnode)) {
	        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue)
	        oldEndVnode = oldCh[--oldEndIdx]
	        newEndVnode = newCh[--newEndIdx]
	      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
	        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue)
	        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm))
	        oldStartVnode = oldCh[++oldStartIdx]
	        newEndVnode = newCh[--newEndIdx]
	      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
	        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue)
	        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm)
	        oldEndVnode = oldCh[--oldEndIdx]
	        newStartVnode = newCh[++newStartIdx]
	      } else {
	        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx) }
	        idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : null
	        if (isUndef(idxInOld)) { // New element
	          nodeOps.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm)
	          newStartVnode = newCh[++newStartIdx]
	        } else {
	          elmToMove = oldCh[idxInOld]
	          /* istanbul ignore if */
	          if (process.env.NODE_ENV !== 'production' && !elmToMove) {
	            warn(
	              'It seems there are duplicate keys that is causing an update error. ' +
	              'Make sure each v-for item has a unique key.'
	            )
	          }
	          if (elmToMove.tag !== newStartVnode.tag) {
	            // same key but different element. treat as new element
	            nodeOps.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm)
	            newStartVnode = newCh[++newStartIdx]
	          } else {
	            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue)
	            oldCh[idxInOld] = undefined
	            canMove && nodeOps.insertBefore(parentElm, newStartVnode.elm, oldStartVnode.elm)
	            newStartVnode = newCh[++newStartIdx]
	          }
	        }
	      }
	    }
	    if (oldStartIdx > oldEndIdx) {
	      before = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm
	      addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx, insertedVnodeQueue)
	    } else if (newStartIdx > newEndIdx) {
	      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx)
	    }
	  }

	  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
	    if (oldVnode === vnode) {
	      return
	    }
	    // reuse element for static trees.
	    // note we only do this if the vnode is cloned -
	    // if the new node is not cloned it means the render functions have been
	    // reset by the hot-reload-api and we need to do a proper re-render.
	    if (vnode.isStatic &&
	        oldVnode.isStatic &&
	        vnode.key === oldVnode.key &&
	        vnode.isCloned) {
	      vnode.elm = oldVnode.elm
	      return
	    }
	    var i, hook
	    var hasData = isDef(i = vnode.data)
	    if (hasData && isDef(hook = i.hook) && isDef(i = hook.prepatch)) {
	      i(oldVnode, vnode)
	    }
	    var elm = vnode.elm = oldVnode.elm
	    var oldCh = oldVnode.children
	    var ch = vnode.children
	    if (hasData && isPatchable(vnode)) {
	      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode) }
	      if (isDef(hook) && isDef(i = hook.update)) { i(oldVnode, vnode) }
	    }
	    if (isUndef(vnode.text)) {
	      if (isDef(oldCh) && isDef(ch)) {
	        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly) }
	      } else if (isDef(ch)) {
	        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, '') }
	        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue)
	      } else if (isDef(oldCh)) {
	        removeVnodes(elm, oldCh, 0, oldCh.length - 1)
	      } else if (isDef(oldVnode.text)) {
	        nodeOps.setTextContent(elm, '')
	      }
	    } else if (oldVnode.text !== vnode.text) {
	      nodeOps.setTextContent(elm, vnode.text)
	    }
	    if (hasData) {
	      for (i = 0; i < cbs.postpatch.length; ++i) { cbs.postpatch[i](oldVnode, vnode) }
	      if (isDef(hook) && isDef(i = hook.postpatch)) { i(oldVnode, vnode) }
	    }
	  }

	  function invokeInsertHook (vnode, queue, initial) {
	    // delay insert hooks for component root nodes, invoke them after the
	    // element is really inserted
	    if (initial && vnode.parent) {
	      vnode.parent.data.pendingInsert = queue
	    } else {
	      for (var i = 0; i < queue.length; ++i) {
	        queue[i].data.hook.insert(queue[i])
	      }
	    }
	  }

	  var bailed = false
	  function hydrate (elm, vnode, insertedVnodeQueue) {
	    if (process.env.NODE_ENV !== 'production') {
	      if (!assertNodeMatch(elm, vnode)) {
	        return false
	      }
	    }
	    vnode.elm = elm
	    var tag = vnode.tag;
	    var data = vnode.data;
	    var children = vnode.children;
	    if (isDef(data)) {
	      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */) }
	      if (isDef(i = vnode.child)) {
	        // child component. it should have hydrated its own tree.
	        initComponent(vnode, insertedVnodeQueue)
	        return true
	      }
	    }
	    if (isDef(tag)) {
	      if (isDef(children)) {
	        var childNodes = nodeOps.childNodes(elm)
	        // empty element, allow client to pick up and populate children
	        if (!childNodes.length) {
	          createChildren(vnode, children, insertedVnodeQueue)
	        } else {
	          var childrenMatch = true
	          if (childNodes.length !== children.length) {
	            childrenMatch = false
	          } else {
	            for (var i$1 = 0; i$1 < children.length; i$1++) {
	              if (!hydrate(childNodes[i$1], children[i$1], insertedVnodeQueue)) {
	                childrenMatch = false
	                break
	              }
	            }
	          }
	          if (!childrenMatch) {
	            if (process.env.NODE_ENV !== 'production' &&
	                typeof console !== 'undefined' &&
	                !bailed) {
	              bailed = true
	              console.warn('Parent: ', elm)
	              console.warn('Mismatching childNodes vs. VNodes: ', childNodes, children)
	            }
	            return false
	          }
	        }
	      }
	      if (isDef(data)) {
	        invokeCreateHooks(vnode, insertedVnodeQueue)
	      }
	    }
	    return true
	  }

	  function assertNodeMatch (node, vnode) {
	    if (vnode.tag) {
	      return (
	        vnode.tag.indexOf('vue-component') === 0 ||
	        vnode.tag === nodeOps.tagName(node).toLowerCase()
	      )
	    } else {
	      return _toString(vnode.text) === node.data
	    }
	  }

	  return function patch (oldVnode, vnode, hydrating, removeOnly) {
	    var elm, parent
	    var isInitialPatch = false
	    var insertedVnodeQueue = []

	    if (!oldVnode) {
	      // empty mount, create new root element
	      isInitialPatch = true
	      createElm(vnode, insertedVnodeQueue)
	    } else {
	      var isRealElement = isDef(oldVnode.nodeType)
	      if (!isRealElement && sameVnode(oldVnode, vnode)) {
	        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly)
	      } else {
	        if (isRealElement) {
	          // mounting to a real element
	          // check if this is server-rendered content and if we can perform
	          // a successful hydration.
	          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute('server-rendered')) {
	            oldVnode.removeAttribute('server-rendered')
	            hydrating = true
	          }
	          if (hydrating) {
	            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
	              invokeInsertHook(vnode, insertedVnodeQueue, true)
	              return oldVnode
	            } else if (process.env.NODE_ENV !== 'production') {
	              warn(
	                'The client-side rendered virtual DOM tree is not matching ' +
	                'server-rendered content. This is likely caused by incorrect ' +
	                'HTML markup, for example nesting block-level elements inside ' +
	                '<p>, or missing <tbody>. Bailing hydration and performing ' +
	                'full client-side render.'
	              )
	            }
	          }
	          // either not server-rendered, or hydration failed.
	          // create an empty node and replace it
	          oldVnode = emptyNodeAt(oldVnode)
	        }
	        elm = oldVnode.elm
	        parent = nodeOps.parentNode(elm)

	        createElm(vnode, insertedVnodeQueue)

	        // component root element replaced.
	        // update parent placeholder node element.
	        if (vnode.parent) {
	          vnode.parent.elm = vnode.elm
	          if (isPatchable(vnode)) {
	            for (var i = 0; i < cbs.create.length; ++i) {
	              cbs.create[i](emptyNode, vnode.parent)
	            }
	          }
	        }

	        if (parent !== null) {
	          nodeOps.insertBefore(parent, vnode.elm, nodeOps.nextSibling(elm))
	          removeVnodes(parent, [oldVnode], 0, 0)
	        } else if (isDef(oldVnode.tag)) {
	          invokeDestroyHook(oldVnode)
	        }
	      }
	    }

	    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch)
	    return vnode.elm
	  }
	}

	/*  */

	var directives = {
	  create: function bindDirectives (oldVnode, vnode) {
	    var hasInsert = false
	    forEachDirective(oldVnode, vnode, function (def, dir) {
	      callHook$1(def, dir, 'bind', vnode, oldVnode)
	      if (def.inserted) {
	        hasInsert = true
	      }
	    })
	    if (hasInsert) {
	      mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', function () {
	        applyDirectives(oldVnode, vnode, 'inserted')
	      })
	    }
	  },
	  update: function updateDirectives (oldVnode, vnode) {
	    applyDirectives(oldVnode, vnode, 'update')
	    // if old vnode has directives but new vnode doesn't
	    // we need to teardown the directives on the old one.
	    if (oldVnode.data.directives && !vnode.data.directives) {
	      applyDirectives(oldVnode, oldVnode, 'unbind')
	    }
	  },
	  postpatch: function postupdateDirectives (oldVnode, vnode) {
	    applyDirectives(oldVnode, vnode, 'componentUpdated')
	  },
	  destroy: function unbindDirectives (vnode) {
	    applyDirectives(vnode, vnode, 'unbind')
	  }
	}

	var emptyModifiers = Object.create(null)

	function forEachDirective (
	  oldVnode,
	  vnode,
	  fn
	) {
	  var dirs = vnode.data.directives
	  if (dirs) {
	    for (var i = 0; i < dirs.length; i++) {
	      var dir = dirs[i]
	      var def = resolveAsset(vnode.context.$options, 'directives', dir.name, true)
	      if (def) {
	        var oldDirs = oldVnode && oldVnode.data.directives
	        if (oldDirs) {
	          dir.oldValue = oldDirs[i].value
	        }
	        if (!dir.modifiers) {
	          dir.modifiers = emptyModifiers
	        }
	        fn(def, dir)
	      }
	    }
	  }
	}

	function applyDirectives (
	  oldVnode,
	  vnode,
	  hook
	) {
	  forEachDirective(oldVnode, vnode, function (def, dir) {
	    callHook$1(def, dir, hook, vnode, oldVnode)
	  })
	}

	function callHook$1 (def, dir, hook, vnode, oldVnode) {
	  var fn = def && def[hook]
	  if (fn) {
	    fn(vnode.elm, dir, vnode, oldVnode)
	  }
	}

	var baseModules = [
	  ref,
	  directives
	]

	/*  */

	function updateAttrs (oldVnode, vnode) {
	  if (!oldVnode.data.attrs && !vnode.data.attrs) {
	    return
	  }
	  var key, cur, old
	  var elm = vnode.elm
	  var oldAttrs = oldVnode.data.attrs || {}
	  var attrs = vnode.data.attrs || {}
	  // clone observed objects, as the user probably wants to mutate it
	  if (attrs.__ob__) {
	    attrs = vnode.data.attrs = extend({}, attrs)
	  }

	  for (key in attrs) {
	    cur = attrs[key]
	    old = oldAttrs[key]
	    if (old !== cur) {
	      setAttr(elm, key, cur)
	    }
	  }
	  for (key in oldAttrs) {
	    if (attrs[key] == null) {
	      if (isXlink(key)) {
	        elm.removeAttributeNS(xlinkNS, getXlinkProp(key))
	      } else if (!isEnumeratedAttr(key)) {
	        elm.removeAttribute(key)
	      }
	    }
	  }
	}

	function setAttr (el, key, value) {
	  if (isBooleanAttr(key)) {
	    // set attribute for blank value
	    // e.g. <option disabled>Select one</option>
	    if (isFalsyAttrValue(value)) {
	      el.removeAttribute(key)
	    } else {
	      el.setAttribute(key, key)
	    }
	  } else if (isEnumeratedAttr(key)) {
	    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true')
	  } else if (isXlink(key)) {
	    if (isFalsyAttrValue(value)) {
	      el.removeAttributeNS(xlinkNS, getXlinkProp(key))
	    } else {
	      el.setAttributeNS(xlinkNS, key, value)
	    }
	  } else {
	    if (isFalsyAttrValue(value)) {
	      el.removeAttribute(key)
	    } else {
	      el.setAttribute(key, value)
	    }
	  }
	}

	var attrs = {
	  create: updateAttrs,
	  update: updateAttrs
	}

	/*  */

	function updateClass (oldVnode, vnode) {
	  var el = vnode.elm
	  var data = vnode.data
	  var oldData = oldVnode.data
	  if (!data.staticClass && !data.class &&
	      (!oldData || (!oldData.staticClass && !oldData.class))) {
	    return
	  }

	  var cls = genClassForVnode(vnode)

	  // handle transition classes
	  var transitionClass = el._transitionClasses
	  if (transitionClass) {
	    cls = concat(cls, stringifyClass(transitionClass))
	  }

	  // set the class
	  if (cls !== el._prevClass) {
	    el.setAttribute('class', cls)
	    el._prevClass = cls
	  }
	}

	var klass = {
	  create: updateClass,
	  update: updateClass
	}

	// skip type checking this file because we need to attach private properties
	// to elements

	function updateDOMListeners (oldVnode, vnode) {
	  if (!oldVnode.data.on && !vnode.data.on) {
	    return
	  }
	  var on = vnode.data.on || {}
	  var oldOn = oldVnode.data.on || {}
	  var add = vnode.elm._v_add || (vnode.elm._v_add = function (event, handler, capture) {
	    vnode.elm.addEventListener(event, handler, capture)
	  })
	  var remove = vnode.elm._v_remove || (vnode.elm._v_remove = function (event, handler) {
	    vnode.elm.removeEventListener(event, handler)
	  })
	  updateListeners(on, oldOn, add, remove)
	}

	var events = {
	  create: updateDOMListeners,
	  update: updateDOMListeners
	}

	/*  */

	function updateDOMProps (oldVnode, vnode) {
	  if (!oldVnode.data.domProps && !vnode.data.domProps) {
	    return
	  }
	  var key, cur
	  var elm = vnode.elm
	  var oldProps = oldVnode.data.domProps || {}
	  var props = vnode.data.domProps || {}
	  // clone observed objects, as the user probably wants to mutate it
	  if (props.__ob__) {
	    props = vnode.data.domProps = extend({}, props)
	  }

	  for (key in oldProps) {
	    if (props[key] == null) {
	      elm[key] = undefined
	    }
	  }
	  for (key in props) {
	    // ignore children if the node has textContent or innerHTML,
	    // as these will throw away existing DOM nodes and cause removal errors
	    // on subsequent patches (#3360)
	    if ((key === 'textContent' || key === 'innerHTML') && vnode.children) {
	      vnode.children.length = 0
	    }
	    cur = props[key]
	    if (key === 'value') {
	      // store value as _value as well since
	      // non-string values will be stringified
	      elm._value = cur
	      // avoid resetting cursor position when value is the same
	      var strCur = cur == null ? '' : String(cur)
	      if (elm.value !== strCur) {
	        elm.value = strCur
	      }
	    } else {
	      elm[key] = cur
	    }
	  }
	}

	var domProps = {
	  create: updateDOMProps,
	  update: updateDOMProps
	}

	/*  */

	var prefixes = ['Webkit', 'Moz', 'ms']

	var testEl
	var normalize = cached(function (prop) {
	  testEl = testEl || document.createElement('div')
	  prop = camelize(prop)
	  if (prop !== 'filter' && (prop in testEl.style)) {
	    return prop
	  }
	  var upper = prop.charAt(0).toUpperCase() + prop.slice(1)
	  for (var i = 0; i < prefixes.length; i++) {
	    var prefixed = prefixes[i] + upper
	    if (prefixed in testEl.style) {
	      return prefixed
	    }
	  }
	})

	function updateStyle (oldVnode, vnode) {
	  if ((!oldVnode.data || !oldVnode.data.style) && !vnode.data.style) {
	    return
	  }
	  var cur, name
	  var el = vnode.elm
	  var oldStyle = oldVnode.data.style || {}
	  var style = vnode.data.style || {}

	  // handle string
	  if (typeof style === 'string') {
	    el.style.cssText = style
	    return
	  }

	  var needClone = style.__ob__

	  // handle array syntax
	  if (Array.isArray(style)) {
	    style = vnode.data.style = toObject(style)
	  }

	  // clone the style for future updates,
	  // in case the user mutates the style object in-place.
	  if (needClone) {
	    style = vnode.data.style = extend({}, style)
	  }

	  for (name in oldStyle) {
	    if (!style[name]) {
	      el.style[normalize(name)] = ''
	    }
	  }
	  for (name in style) {
	    cur = style[name]
	    if (cur !== oldStyle[name]) {
	      // ie9 setting to null has no effect, must use empty string
	      el.style[normalize(name)] = cur || ''
	    }
	  }
	}

	var style = {
	  create: updateStyle,
	  update: updateStyle
	}

	/*  */

	/**
	 * Add class with compatibility for SVG since classList is not supported on
	 * SVG elements in IE
	 */
	function addClass (el, cls) {
	  /* istanbul ignore else */
	  if (el.classList) {
	    if (cls.indexOf(' ') > -1) {
	      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); })
	    } else {
	      el.classList.add(cls)
	    }
	  } else {
	    var cur = ' ' + el.getAttribute('class') + ' '
	    if (cur.indexOf(' ' + cls + ' ') < 0) {
	      el.setAttribute('class', (cur + cls).trim())
	    }
	  }
	}

	/**
	 * Remove class with compatibility for SVG since classList is not supported on
	 * SVG elements in IE
	 */
	function removeClass (el, cls) {
	  /* istanbul ignore else */
	  if (el.classList) {
	    if (cls.indexOf(' ') > -1) {
	      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); })
	    } else {
	      el.classList.remove(cls)
	    }
	  } else {
	    var cur = ' ' + el.getAttribute('class') + ' '
	    var tar = ' ' + cls + ' '
	    while (cur.indexOf(tar) >= 0) {
	      cur = cur.replace(tar, ' ')
	    }
	    el.setAttribute('class', cur.trim())
	  }
	}

	/*  */

	var hasTransition = inBrowser && !isIE9
	var TRANSITION = 'transition'
	var ANIMATION = 'animation'

	// Transition property/event sniffing
	var transitionProp = 'transition'
	var transitionEndEvent = 'transitionend'
	var animationProp = 'animation'
	var animationEndEvent = 'animationend'
	if (hasTransition) {
	  /* istanbul ignore if */
	  if (window.ontransitionend === undefined &&
	    window.onwebkittransitionend !== undefined) {
	    transitionProp = 'WebkitTransition'
	    transitionEndEvent = 'webkitTransitionEnd'
	  }
	  if (window.onanimationend === undefined &&
	    window.onwebkitanimationend !== undefined) {
	    animationProp = 'WebkitAnimation'
	    animationEndEvent = 'webkitAnimationEnd'
	  }
	}

	var raf = (inBrowser && window.requestAnimationFrame) || setTimeout
	function nextFrame (fn) {
	  raf(function () {
	    raf(fn)
	  })
	}

	function addTransitionClass (el, cls) {
	  (el._transitionClasses || (el._transitionClasses = [])).push(cls)
	  addClass(el, cls)
	}

	function removeTransitionClass (el, cls) {
	  if (el._transitionClasses) {
	    remove(el._transitionClasses, cls)
	  }
	  removeClass(el, cls)
	}

	function whenTransitionEnds (
	  el,
	  expectedType,
	  cb
	) {
	  var ref = getTransitionInfo(el, expectedType);
	  var type = ref.type;
	  var timeout = ref.timeout;
	  var propCount = ref.propCount;
	  if (!type) { return cb() }
	  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent
	  var ended = 0
	  var end = function () {
	    el.removeEventListener(event, onEnd)
	    cb()
	  }
	  var onEnd = function (e) {
	    if (e.target === el) {
	      if (++ended >= propCount) {
	        end()
	      }
	    }
	  }
	  setTimeout(function () {
	    if (ended < propCount) {
	      end()
	    }
	  }, timeout + 1)
	  el.addEventListener(event, onEnd)
	}

	var transformRE = /\b(transform|all)(,|$)/

	function getTransitionInfo (el, expectedType) {
	  var styles = window.getComputedStyle(el)
	  var transitioneDelays = styles[transitionProp + 'Delay'].split(', ')
	  var transitionDurations = styles[transitionProp + 'Duration'].split(', ')
	  var transitionTimeout = getTimeout(transitioneDelays, transitionDurations)
	  var animationDelays = styles[animationProp + 'Delay'].split(', ')
	  var animationDurations = styles[animationProp + 'Duration'].split(', ')
	  var animationTimeout = getTimeout(animationDelays, animationDurations)

	  var type
	  var timeout = 0
	  var propCount = 0
	  /* istanbul ignore if */
	  if (expectedType === TRANSITION) {
	    if (transitionTimeout > 0) {
	      type = TRANSITION
	      timeout = transitionTimeout
	      propCount = transitionDurations.length
	    }
	  } else if (expectedType === ANIMATION) {
	    if (animationTimeout > 0) {
	      type = ANIMATION
	      timeout = animationTimeout
	      propCount = animationDurations.length
	    }
	  } else {
	    timeout = Math.max(transitionTimeout, animationTimeout)
	    type = timeout > 0
	      ? transitionTimeout > animationTimeout
	        ? TRANSITION
	        : ANIMATION
	      : null
	    propCount = type
	      ? type === TRANSITION
	        ? transitionDurations.length
	        : animationDurations.length
	      : 0
	  }
	  var hasTransform =
	    type === TRANSITION &&
	    transformRE.test(styles[transitionProp + 'Property'])
	  return {
	    type: type,
	    timeout: timeout,
	    propCount: propCount,
	    hasTransform: hasTransform
	  }
	}

	function getTimeout (delays, durations) {
	  return Math.max.apply(null, durations.map(function (d, i) {
	    return toMs(d) + toMs(delays[i])
	  }))
	}

	function toMs (s) {
	  return Number(s.slice(0, -1)) * 1000
	}

	/*  */

	function enter (vnode) {
	  var el = vnode.elm

	  // call leave callback now
	  if (el._leaveCb) {
	    el._leaveCb.cancelled = true
	    el._leaveCb()
	  }

	  var data = resolveTransition(vnode.data.transition)
	  if (!data) {
	    return
	  }

	  /* istanbul ignore if */
	  if (el._enterCb || el.nodeType !== 1) {
	    return
	  }

	  var css = data.css;
	  var type = data.type;
	  var enterClass = data.enterClass;
	  var enterActiveClass = data.enterActiveClass;
	  var appearClass = data.appearClass;
	  var appearActiveClass = data.appearActiveClass;
	  var beforeEnter = data.beforeEnter;
	  var enter = data.enter;
	  var afterEnter = data.afterEnter;
	  var enterCancelled = data.enterCancelled;
	  var beforeAppear = data.beforeAppear;
	  var appear = data.appear;
	  var afterAppear = data.afterAppear;
	  var appearCancelled = data.appearCancelled;

	  // activeInstance will always be the <transition> component managing this
	  // transition. One edge case to check is when the <transition> is placed
	  // as the root node of a child component. In that case we need to check
	  // <transition>'s parent for appear check.
	  var transitionNode = activeInstance.$vnode
	  var context = transitionNode && transitionNode.parent
	    ? transitionNode.parent.context
	    : activeInstance

	  var isAppear = !context._isMounted || !vnode.isRootInsert

	  if (isAppear && !appear && appear !== '') {
	    return
	  }

	  var startClass = isAppear ? appearClass : enterClass
	  var activeClass = isAppear ? appearActiveClass : enterActiveClass
	  var beforeEnterHook = isAppear ? (beforeAppear || beforeEnter) : beforeEnter
	  var enterHook = isAppear ? (typeof appear === 'function' ? appear : enter) : enter
	  var afterEnterHook = isAppear ? (afterAppear || afterEnter) : afterEnter
	  var enterCancelledHook = isAppear ? (appearCancelled || enterCancelled) : enterCancelled

	  var expectsCSS = css !== false && !isIE9
	  var userWantsControl =
	    enterHook &&
	    // enterHook may be a bound method which exposes
	    // the length of original fn as _length
	    (enterHook._length || enterHook.length) > 1

	  var cb = el._enterCb = once(function () {
	    if (expectsCSS) {
	      removeTransitionClass(el, activeClass)
	    }
	    if (cb.cancelled) {
	      if (expectsCSS) {
	        removeTransitionClass(el, startClass)
	      }
	      enterCancelledHook && enterCancelledHook(el)
	    } else {
	      afterEnterHook && afterEnterHook(el)
	    }
	    el._enterCb = null
	  })

	  if (!vnode.data.show) {
	    // remove pending leave element on enter by injecting an insert hook
	    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', function () {
	      var parent = el.parentNode
	      var pendingNode = parent && parent._pending && parent._pending[vnode.key]
	      if (pendingNode && pendingNode.tag === vnode.tag && pendingNode.elm._leaveCb) {
	        pendingNode.elm._leaveCb()
	      }
	      enterHook && enterHook(el, cb)
	    })
	  }

	  // start enter transition
	  beforeEnterHook && beforeEnterHook(el)
	  if (expectsCSS) {
	    addTransitionClass(el, startClass)
	    addTransitionClass(el, activeClass)
	    nextFrame(function () {
	      removeTransitionClass(el, startClass)
	      if (!cb.cancelled && !userWantsControl) {
	        whenTransitionEnds(el, type, cb)
	      }
	    })
	  }

	  if (vnode.data.show) {
	    enterHook && enterHook(el, cb)
	  }

	  if (!expectsCSS && !userWantsControl) {
	    cb()
	  }
	}

	function leave (vnode, rm) {
	  var el = vnode.elm

	  // call enter callback now
	  if (el._enterCb) {
	    el._enterCb.cancelled = true
	    el._enterCb()
	  }

	  var data = resolveTransition(vnode.data.transition)
	  if (!data) {
	    return rm()
	  }

	  /* istanbul ignore if */
	  if (el._leaveCb || el.nodeType !== 1) {
	    return
	  }

	  var css = data.css;
	  var type = data.type;
	  var leaveClass = data.leaveClass;
	  var leaveActiveClass = data.leaveActiveClass;
	  var beforeLeave = data.beforeLeave;
	  var leave = data.leave;
	  var afterLeave = data.afterLeave;
	  var leaveCancelled = data.leaveCancelled;
	  var delayLeave = data.delayLeave;

	  var expectsCSS = css !== false && !isIE9
	  var userWantsControl =
	    leave &&
	    // leave hook may be a bound method which exposes
	    // the length of original fn as _length
	    (leave._length || leave.length) > 1

	  var cb = el._leaveCb = once(function () {
	    if (el.parentNode && el.parentNode._pending) {
	      el.parentNode._pending[vnode.key] = null
	    }
	    if (expectsCSS) {
	      removeTransitionClass(el, leaveActiveClass)
	    }
	    if (cb.cancelled) {
	      if (expectsCSS) {
	        removeTransitionClass(el, leaveClass)
	      }
	      leaveCancelled && leaveCancelled(el)
	    } else {
	      rm()
	      afterLeave && afterLeave(el)
	    }
	    el._leaveCb = null
	  })

	  if (delayLeave) {
	    delayLeave(performLeave)
	  } else {
	    performLeave()
	  }

	  function performLeave () {
	    // the delayed leave may have already been cancelled
	    if (cb.cancelled) {
	      return
	    }
	    // record leaving element
	    if (!vnode.data.show) {
	      (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode
	    }
	    beforeLeave && beforeLeave(el)
	    if (expectsCSS) {
	      addTransitionClass(el, leaveClass)
	      addTransitionClass(el, leaveActiveClass)
	      nextFrame(function () {
	        removeTransitionClass(el, leaveClass)
	        if (!cb.cancelled && !userWantsControl) {
	          whenTransitionEnds(el, type, cb)
	        }
	      })
	    }
	    leave && leave(el, cb)
	    if (!expectsCSS && !userWantsControl) {
	      cb()
	    }
	  }
	}

	function resolveTransition (def) {
	  if (!def) {
	    return
	  }
	  /* istanbul ignore else */
	  if (typeof def === 'object') {
	    var res = {}
	    if (def.css !== false) {
	      extend(res, autoCssTransition(def.name || 'v'))
	    }
	    extend(res, def)
	    return res
	  } else if (typeof def === 'string') {
	    return autoCssTransition(def)
	  }
	}

	var autoCssTransition = cached(function (name) {
	  return {
	    enterClass: (name + "-enter"),
	    leaveClass: (name + "-leave"),
	    appearClass: (name + "-enter"),
	    enterActiveClass: (name + "-enter-active"),
	    leaveActiveClass: (name + "-leave-active"),
	    appearActiveClass: (name + "-enter-active")
	  }
	})

	function once (fn) {
	  var called = false
	  return function () {
	    if (!called) {
	      called = true
	      fn()
	    }
	  }
	}

	var transition = inBrowser ? {
	  create: function create (_, vnode) {
	    if (!vnode.data.show) {
	      enter(vnode)
	    }
	  },
	  remove: function remove (vnode, rm) {
	    /* istanbul ignore else */
	    if (!vnode.data.show) {
	      leave(vnode, rm)
	    } else {
	      rm()
	    }
	  }
	} : {}

	var platformModules = [
	  attrs,
	  klass,
	  events,
	  domProps,
	  style,
	  transition
	]

	/*  */

	// the directive module should be applied last, after all
	// built-in modules have been applied.
	var modules = platformModules.concat(baseModules)

	var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules })

	/**
	 * Not type checking this file because flow doesn't like attaching
	 * properties to Elements.
	 */

	var modelableTagRE = /^input|select|textarea|vue-component-[0-9]+(-[0-9a-zA-Z_\-]*)?$/

	/* istanbul ignore if */
	if (isIE9) {
	  // http://www.matts411.com/post/internet-explorer-9-oninput/
	  document.addEventListener('selectionchange', function () {
	    var el = document.activeElement
	    if (el && el.vmodel) {
	      trigger(el, 'input')
	    }
	  })
	}

	var model = {
	  bind: function bind (el, binding, vnode) {
	    if (process.env.NODE_ENV !== 'production') {
	      if (!modelableTagRE.test(vnode.tag)) {
	        warn(
	          "v-model is not supported on element type: <" + (vnode.tag) + ">. " +
	          'If you are working with contenteditable, it\'s recommended to ' +
	          'wrap a library dedicated for that purpose inside a custom component.',
	          vnode.context
	        )
	      }
	    }
	    if (vnode.tag === 'select') {
	      setSelected(el, binding, vnode.context)
	      /* istanbul ignore if */
	      if (isIE || isEdge) {
	        nextTick(function () {
	          setSelected(el, binding, vnode.context)
	        })
	      }
	    } else if (vnode.tag === 'textarea' || el.type === 'text') {
	      if (!isAndroid) {
	        el.addEventListener('compositionstart', onCompositionStart)
	        el.addEventListener('compositionend', onCompositionEnd)
	      }
	      /* istanbul ignore if */
	      if (isIE9) {
	        el.vmodel = true
	      }
	    }
	  },
	  componentUpdated: function componentUpdated (el, binding, vnode) {
	    if (vnode.tag === 'select') {
	      setSelected(el, binding, vnode.context)
	      // in case the options rendered by v-for have changed,
	      // it's possible that the value is out-of-sync with the rendered options.
	      // detect such cases and filter out values that no longer has a matchig
	      // option in the DOM.
	      var needReset = el.multiple
	        ? binding.value.some(function (v) { return hasNoMatchingOption(v, el.options); })
	        : hasNoMatchingOption(binding.value, el.options)
	      if (needReset) {
	        trigger(el, 'change')
	      }
	    }
	  }
	}

	function setSelected (el, binding, vm) {
	  var value = binding.value
	  var isMultiple = el.multiple
	  if (isMultiple && !Array.isArray(value)) {
	    process.env.NODE_ENV !== 'production' && warn(
	      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
	      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
	      vm
	    )
	    return
	  }
	  var selected, option
	  for (var i = 0, l = el.options.length; i < l; i++) {
	    option = el.options[i]
	    if (isMultiple) {
	      selected = looseIndexOf(value, getValue(option)) > -1
	      if (option.selected !== selected) {
	        option.selected = selected
	      }
	    } else {
	      if (looseEqual(getValue(option), value)) {
	        if (el.selectedIndex !== i) {
	          el.selectedIndex = i
	        }
	        return
	      }
	    }
	  }
	  if (!isMultiple) {
	    el.selectedIndex = -1
	  }
	}

	function hasNoMatchingOption (value, options) {
	  for (var i = 0, l = options.length; i < l; i++) {
	    if (looseEqual(getValue(options[i]), value)) {
	      return false
	    }
	  }
	  return true
	}

	function getValue (option) {
	  return '_value' in option
	    ? option._value
	    : option.value
	}

	function onCompositionStart (e) {
	  e.target.composing = true
	}

	function onCompositionEnd (e) {
	  e.target.composing = false
	  trigger(e.target, 'input')
	}

	function trigger (el, type) {
	  var e = document.createEvent('HTMLEvents')
	  e.initEvent(type, true, true)
	  el.dispatchEvent(e)
	}

	/*  */

	// recursively search for possible transition defined inside the component root
	function locateNode (vnode) {
	  return vnode.child && (!vnode.data || !vnode.data.transition)
	    ? locateNode(vnode.child._vnode)
	    : vnode
	}

	var show = {
	  bind: function bind (el, ref, vnode) {
	    var value = ref.value;

	    vnode = locateNode(vnode)
	    var transition = vnode.data && vnode.data.transition
	    if (value && transition && !isIE9) {
	      enter(vnode)
	    }
	    var originalDisplay = el.style.display === 'none' ? '' : el.style.display
	    el.style.display = value ? originalDisplay : 'none'
	    el.__vOriginalDisplay = originalDisplay
	  },
	  update: function update (el, ref, vnode) {
	    var value = ref.value;
	    var oldValue = ref.oldValue;

	    /* istanbul ignore if */
	    if (value === oldValue) { return }
	    vnode = locateNode(vnode)
	    var transition = vnode.data && vnode.data.transition
	    if (transition && !isIE9) {
	      if (value) {
	        enter(vnode)
	        el.style.display = el.__vOriginalDisplay
	      } else {
	        leave(vnode, function () {
	          el.style.display = 'none'
	        })
	      }
	    } else {
	      el.style.display = value ? el.__vOriginalDisplay : 'none'
	    }
	  }
	}

	var platformDirectives = {
	  model: model,
	  show: show
	}

	/*  */

	// Provides transition support for a single element/component.
	// supports transition mode (out-in / in-out)

	var transitionProps = {
	  name: String,
	  appear: Boolean,
	  css: Boolean,
	  mode: String,
	  type: String,
	  enterClass: String,
	  leaveClass: String,
	  enterActiveClass: String,
	  leaveActiveClass: String,
	  appearClass: String,
	  appearActiveClass: String
	}

	// in case the child is also an abstract component, e.g. <keep-alive>
	// we want to recrusively retrieve the real component to be rendered
	function getRealChild (vnode) {
	  var compOptions = vnode && vnode.componentOptions
	  if (compOptions && compOptions.Ctor.options.abstract) {
	    return getRealChild(getFirstComponentChild(compOptions.children))
	  } else {
	    return vnode
	  }
	}

	function extractTransitionData (comp) {
	  var data = {}
	  var options = comp.$options
	  // props
	  for (var key in options.propsData) {
	    data[key] = comp[key]
	  }
	  // events.
	  // extract listeners and pass them directly to the transition methods
	  var listeners = options._parentListeners
	  for (var key$1 in listeners) {
	    data[camelize(key$1)] = listeners[key$1].fn
	  }
	  return data
	}

	function placeholder (h, rawChild) {
	  return /\d-keep-alive$/.test(rawChild.tag)
	    ? h('keep-alive')
	    : null
	}

	function hasParentTransition (vnode) {
	  while ((vnode = vnode.parent)) {
	    if (vnode.data.transition) {
	      return true
	    }
	  }
	}

	var Transition = {
	  name: 'transition',
	  props: transitionProps,
	  abstract: true,
	  render: function render (h) {
	    var this$1 = this;

	    var children = this.$slots.default
	    if (!children) {
	      return
	    }

	    // filter out text nodes (possible whitespaces)
	    children = children.filter(function (c) { return c.tag; })
	    /* istanbul ignore if */
	    if (!children.length) {
	      return
	    }

	    // warn multiple elements
	    if (process.env.NODE_ENV !== 'production' && children.length > 1) {
	      warn(
	        '<transition> can only be used on a single element. Use ' +
	        '<transition-group> for lists.',
	        this.$parent
	      )
	    }

	    var mode = this.mode

	    // warn invalid mode
	    if (process.env.NODE_ENV !== 'production' &&
	        mode && mode !== 'in-out' && mode !== 'out-in') {
	      warn(
	        'invalid <transition> mode: ' + mode,
	        this.$parent
	      )
	    }

	    var rawChild = children[0]

	    // if this is a component root node and the component's
	    // parent container node also has transition, skip.
	    if (hasParentTransition(this.$vnode)) {
	      return rawChild
	    }

	    // apply transition data to child
	    // use getRealChild() to ignore abstract components e.g. keep-alive
	    var child = getRealChild(rawChild)
	    /* istanbul ignore if */
	    if (!child) {
	      return rawChild
	    }

	    if (this._leaving) {
	      return placeholder(h, rawChild)
	    }

	    child.key = child.key == null || child.isStatic
	      ? ("__v" + (child.tag + this._uid) + "__")
	      : child.key
	    var data = (child.data || (child.data = {})).transition = extractTransitionData(this)
	    var oldRawChild = this._vnode
	    var oldChild = getRealChild(oldRawChild)

	    // mark v-show
	    // so that the transition module can hand over the control to the directive
	    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
	      child.data.show = true
	    }

	    if (oldChild && oldChild.data && oldChild.key !== child.key) {
	      // replace old child transition data with fresh one
	      // important for dynamic transitions!
	      var oldData = oldChild.data.transition = extend({}, data)

	      // handle transition mode
	      if (mode === 'out-in') {
	        // return placeholder node and queue update when leave finishes
	        this._leaving = true
	        mergeVNodeHook(oldData, 'afterLeave', function () {
	          this$1._leaving = false
	          this$1.$forceUpdate()
	        })
	        return placeholder(h, rawChild)
	      } else if (mode === 'in-out') {
	        var delayedLeave
	        var performLeave = function () { delayedLeave() }
	        mergeVNodeHook(data, 'afterEnter', performLeave)
	        mergeVNodeHook(data, 'enterCancelled', performLeave)
	        mergeVNodeHook(oldData, 'delayLeave', function (leave) {
	          delayedLeave = leave
	        })
	      }
	    }

	    return rawChild
	  }
	}

	/*  */

	// Provides transition support for list items.
	// supports move transitions using the FLIP technique.

	// Because the vdom's children update algorithm is "unstable" - i.e.
	// it doesn't guarantee the relative positioning of removed elements,
	// we force transition-group to update its children into two passes:
	// in the first pass, we remove all nodes that need to be removed,
	// triggering their leaving transition; in the second pass, we insert/move
	// into the final disired state. This way in the second pass removed
	// nodes will remain where they should be.

	var props = extend({
	  tag: String,
	  moveClass: String
	}, transitionProps)

	delete props.mode

	var TransitionGroup = {
	  props: props,

	  render: function render (h) {
	    var tag = this.tag || this.$vnode.data.tag || 'span'
	    var map = Object.create(null)
	    var prevChildren = this.prevChildren = this.children
	    var rawChildren = this.$slots.default || []
	    var children = this.children = []
	    var transitionData = extractTransitionData(this)

	    for (var i = 0; i < rawChildren.length; i++) {
	      var c = rawChildren[i]
	      if (c.tag) {
	        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
	          children.push(c)
	          map[c.key] = c
	          ;(c.data || (c.data = {})).transition = transitionData
	        } else if (process.env.NODE_ENV !== 'production') {
	          var opts = c.componentOptions
	          var name = opts
	            ? (opts.Ctor.options.name || opts.tag)
	            : c.tag
	          warn(("<transition-group> children must be keyed: <" + name + ">"))
	        }
	      }
	    }

	    if (prevChildren) {
	      var kept = []
	      var removed = []
	      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
	        var c$1 = prevChildren[i$1]
	        c$1.data.transition = transitionData
	        c$1.data.pos = c$1.elm.getBoundingClientRect()
	        if (map[c$1.key]) {
	          kept.push(c$1)
	        } else {
	          removed.push(c$1)
	        }
	      }
	      this.kept = h(tag, null, kept)
	      this.removed = removed
	    }

	    return h(tag, null, children)
	  },

	  beforeUpdate: function beforeUpdate () {
	    // force removing pass
	    this.__patch__(
	      this._vnode,
	      this.kept,
	      false, // hydrating
	      true // removeOnly (!important, avoids unnecessary moves)
	    )
	    this._vnode = this.kept
	  },

	  updated: function updated () {
	    var children = this.prevChildren
	    var moveClass = this.moveClass || (this.name + '-move')
	    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
	      return
	    }

	    // we divide the work into three loops to avoid mixing DOM reads and writes
	    // in each iteration - which helps prevent layout thrashing.
	    children.forEach(callPendingCbs)
	    children.forEach(recordPosition)
	    children.forEach(applyTranslation)

	    // force reflow to put everything in position
	    var f = document.body.offsetHeight // eslint-disable-line

	    children.forEach(function (c) {
	      if (c.data.moved) {
	        var el = c.elm
	        var s = el.style
	        addTransitionClass(el, moveClass)
	        s.transform = s.WebkitTransform = s.transitionDuration = ''
	        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
	          if (!e || /transform$/.test(e.propertyName)) {
	            el.removeEventListener(transitionEndEvent, cb)
	            el._moveCb = null
	            removeTransitionClass(el, moveClass)
	          }
	        })
	      }
	    })
	  },

	  methods: {
	    hasMove: function hasMove (el, moveClass) {
	      /* istanbul ignore if */
	      if (!hasTransition) {
	        return false
	      }
	      if (this._hasMove != null) {
	        return this._hasMove
	      }
	      addTransitionClass(el, moveClass)
	      var info = getTransitionInfo(el)
	      removeTransitionClass(el, moveClass)
	      return (this._hasMove = info.hasTransform)
	    }
	  }
	}

	function callPendingCbs (c) {
	  /* istanbul ignore if */
	  if (c.elm._moveCb) {
	    c.elm._moveCb()
	  }
	  /* istanbul ignore if */
	  if (c.elm._enterCb) {
	    c.elm._enterCb()
	  }
	}

	function recordPosition (c) {
	  c.data.newPos = c.elm.getBoundingClientRect()
	}

	function applyTranslation (c) {
	  var oldPos = c.data.pos
	  var newPos = c.data.newPos
	  var dx = oldPos.left - newPos.left
	  var dy = oldPos.top - newPos.top
	  if (dx || dy) {
	    c.data.moved = true
	    var s = c.elm.style
	    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)"
	    s.transitionDuration = '0s'
	  }
	}

	var platformComponents = {
	  Transition: Transition,
	  TransitionGroup: TransitionGroup
	}

	/*  */

	// install platform specific utils
	Vue.config.isUnknownElement = isUnknownElement
	Vue.config.isReservedTag = isReservedTag
	Vue.config.getTagNamespace = getTagNamespace
	Vue.config.mustUseProp = mustUseProp

	// install platform runtime directives & components
	extend(Vue.options.directives, platformDirectives)
	extend(Vue.options.components, platformComponents)

	// install platform patch function
	Vue.prototype.__patch__ = config._isServer ? noop : patch

	// wrap mount
	Vue.prototype.$mount = function (
	  el,
	  hydrating
	) {
	  el = el && !config._isServer ? query(el) : undefined
	  return this._mount(el, hydrating)
	}

	// devtools global hook
	/* istanbul ignore next */
	setTimeout(function () {
	  if (config.devtools) {
	    if (devtools) {
	      devtools.emit('init', Vue)
	    } else if (
	      process.env.NODE_ENV !== 'production' &&
	      inBrowser && /Chrome\/\d+/.test(window.navigator.userAgent)
	    ) {
	      console.log(
	        'Download the Vue Devtools for a better development experience:\n' +
	        'https://github.com/vuejs/vue-devtools'
	      )
	    }
	  }
	}, 0)

	module.exports = Vue;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2), (function() { return this; }())))

/***/ },
/* 2 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * vue-router v2.0.0-rc.5
	 * (c) 2016 Evan You
	 * @license MIT
	 */
	(function (global, factory) {
		 true ? module.exports = factory() :
		typeof define === 'function' && define.amd ? define(factory) :
		(global.VueRouter = factory());
	}(this, (function () { 'use strict';

	var View = {
	  name: 'router-view',
	  functional: true,
	  props: {
	    name: {
	      type: String,
	      default: 'default'
	    }
	  },
	  render: function render (h, ref) {
	    var props = ref.props;
	    var children = ref.children;
	    var parent = ref.parent;
	    var data = ref.data;

	    data.routerView = true

	    var route = parent.$route
	    var cache = parent._routerViewCache || (parent._routerViewCache = {})
	    var depth = 0
	    var inactive = false

	    while (parent) {
	      if (parent.$vnode && parent.$vnode.data.routerView) {
	        depth++
	      }
	      if (parent._inactive) {
	        inactive = true
	      }
	      parent = parent.$parent
	    }

	    data.routerViewDepth = depth
	    var matched = route.matched[depth]
	    if (!matched) {
	      return h()
	    }

	    var component = inactive
	      ? cache[props.name]
	      : (cache[props.name] = matched.components[props.name])

	    if (!inactive) {
	      (data.hook || (data.hook = {})).init = function (vnode) {
	        matched.instances[props.name] = vnode.child
	      }
	    }

	    return h(component, data, children)
	  }
	}

	/*       */

	function resolvePath (
	  relative        ,
	  base        ,
	  append          
	)         {
	  if (relative.charAt(0) === '/') {
	    return relative
	  }

	  if (relative.charAt(0) === '?' || relative.charAt(0) === '#') {
	    return base + relative
	  }

	  var stack = base.split('/')

	  // remove trailing segment if:
	  // - not appending
	  // - appending to trailing slash (last segment is empty)
	  if (!append || !stack[stack.length - 1]) {
	    stack.pop()
	  }

	  // resolve relative path
	  var segments = relative.replace(/^\//, '').split('/')
	  for (var i = 0; i < segments.length; i++) {
	    var segment = segments[i]
	    if (segment === '.') {
	      continue
	    } else if (segment === '..') {
	      stack.pop()
	    } else {
	      stack.push(segment)
	    }
	  }

	  // ensure leading slash
	  if (stack[0] !== '') {
	    stack.unshift('')
	  }

	  return stack.join('/')
	}

	function parsePath (path        )   
	               
	                
	               
	  {
	  var hash = ''
	  var query = ''

	  var hashIndex = path.indexOf('#')
	  if (hashIndex >= 0) {
	    hash = path.slice(hashIndex)
	    path = path.slice(0, hashIndex)
	  }

	  var queryIndex = path.indexOf('?')
	  if (queryIndex >= 0) {
	    query = path.slice(queryIndex + 1)
	    path = path.slice(0, queryIndex)
	  }

	  return {
	    path: path,
	    query: query,
	    hash: hash
	  }
	}

	function cleanPath (path        )         {
	  return path.replace(/\/\//g, '/')
	}

	/*       */

	function assert (condition     , message        ) {
	  if (!condition) {
	    throw new Error(("[vue-router] " + message))
	  }
	}

	function warn (condition     , message        ) {
	  if (!condition) {
	    typeof console !== 'undefined' && console.warn(("[vue-router] " + message))
	  }
	}

	/*       */

	var encode = encodeURIComponent
	var decode = decodeURIComponent

	function resolveQuery (
	  query         ,
	  extraQuery
	)             {
	  if ( extraQuery === void 0 ) extraQuery             = {};

	  if (query) {
	    var parsedQuery
	    try {
	      parsedQuery = parseQuery(query)
	    } catch (e) {
	      warn(false, e.message)
	      parsedQuery = {}
	    }
	    for (var key in extraQuery) {
	      parsedQuery[key] = extraQuery[key]
	    }
	    return parsedQuery
	  } else {
	    return extraQuery
	  }
	}

	function parseQuery (query        )             {
	  var res = Object.create(null)

	  query = query.trim().replace(/^(\?|#|&)/, '')

	  if (!query) {
	    return res
	  }

	  query.split('&').forEach(function (param) {
	    var parts = param.replace(/\+/g, ' ').split('=')
	    var key = decode(parts.shift())
	    var val = parts.length > 0
	      ? decode(parts.join('='))
	      : null

	    if (res[key] === undefined) {
	      res[key] = val
	    } else if (Array.isArray(res[key])) {
	      res[key].push(val)
	    } else {
	      res[key] = [res[key], val]
	    }
	  })

	  return res
	}

	function stringifyQuery (obj            )         {
	  var res = obj ? Object.keys(obj).sort().map(function (key) {
	    var val = obj[key]

	    if (val === undefined) {
	      return ''
	    }

	    if (val === null) {
	      return encode(key)
	    }

	    if (Array.isArray(val)) {
	      var result = []
	      val.slice().forEach(function (val2) {
	        if (val2 === undefined) {
	          return
	        }
	        if (val2 === null) {
	          result.push(encode(key))
	        } else {
	          result.push(encode(key) + '=' + encode(val2))
	        }
	      })
	      return result.join('&')
	    }

	    return encode(key) + '=' + encode(val)
	  }).filter(function (x) { return x.length > 0; }).join('&') : null
	  return res ? ("?" + res) : ''
	}

	/*       */

	function createRoute (
	  record              ,
	  location          ,
	  redirectedFrom           
	)        {
	  var route        = {
	    name: location.name || (record && record.name),
	    meta: (record && record.meta) || {},
	    path: location.path || '/',
	    hash: location.hash || '',
	    query: location.query || {},
	    params: location.params || {},
	    fullPath: getFullPath(location),
	    matched: record ? formatMatch(record) : []
	  }
	  if (redirectedFrom) {
	    route.redirectedFrom = getFullPath(redirectedFrom)
	  }
	  return Object.freeze(route)
	}

	function formatMatch (record              )                     {
	  var res = []
	  while (record) {
	    res.unshift(record)
	    record = record.parent
	  }
	  return res
	}

	function getFullPath (ref) {
	  var path = ref.path;
	  var query = ref.query; if ( query === void 0 ) query = {};
	  var hash = ref.hash; if ( hash === void 0 ) hash = '';

	  return (path || '/') + stringifyQuery(query) + hash
	}

	var trailingSlashRE = /\/$/
	function isSameRoute (a       , b        )          {
	  if (!b) {
	    return false
	  } else if (a.path && b.path) {
	    return (
	      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
	      a.hash === b.hash &&
	      isObjectEqual(a.query, b.query)
	    )
	  } else if (a.name && b.name) {
	    return (
	      a.name === b.name &&
	      a.hash === b.hash &&
	      isObjectEqual(a.query, b.query) &&
	      isObjectEqual(a.params, b.params)
	    )
	  } else {
	    return false
	  }
	}

	function isObjectEqual (a, b)          {
	  if ( a === void 0 ) a = {};
	  if ( b === void 0 ) b = {};

	  var aKeys = Object.keys(a)
	  var bKeys = Object.keys(b)
	  if (aKeys.length !== bKeys.length) {
	    return false
	  }
	  return aKeys.every(function (key) { return String(a[key]) === String(b[key]); })
	}

	function isIncludedRoute (current       , target       )          {
	  return (
	    current.path.indexOf(target.path) === 0 &&
	    (!target.hash || current.hash === target.hash) &&
	    queryIncludes(current.query, target.query)
	  )
	}

	function queryIncludes (current            , target            )          {
	  for (var key in target) {
	    if (!(key in current)) {
	      return false
	    }
	  }
	  return true
	}

	/*       */

	function normalizeLocation (
	  raw             ,
	  current        ,
	  append          
	)           {
	  var next           = typeof raw === 'string' ? { path: raw } : raw
	  if (next.name || next._normalized) {
	    return next
	  }

	  var parsedPath = parsePath(next.path || '')
	  var basePath = (current && current.path) || '/'
	  var path = parsedPath.path
	    ? resolvePath(parsedPath.path, basePath, append)
	    : (current && current.path) || '/'
	  var query = resolveQuery(parsedPath.query, next.query)
	  var hash = next.hash || parsedPath.hash
	  if (hash && hash.charAt(0) !== '#') {
	    hash = "#" + hash
	  }

	  return {
	    _normalized: true,
	    path: path,
	    query: query,
	    hash: hash
	  }
	}

	/*       */

	// work around weird flow bug
	var toTypes                  = [String, Object]

	var Link = {
	  name: 'router-link',
	  props: {
	    to: {
	      type: toTypes,
	      required: true
	    },
	    tag: {
	      type: String,
	      default: 'a'
	    },
	    exact: Boolean,
	    append: Boolean,
	    replace: Boolean,
	    activeClass: String
	  },
	  render: function render (h          ) {
	    var this$1 = this;

	    var router = this.$router
	    var current = this.$route
	    var to = normalizeLocation(this.to, current, this.append)
	    var resolved = router.match(to)
	    var fullPath = resolved.redirectedFrom || resolved.fullPath
	    var base = router.history.base
	    var href = base ? cleanPath(base + fullPath) : fullPath
	    var classes = {}
	    var activeClass = this.activeClass || router.options.linkActiveClass || 'router-link-active'
	    var compareTarget = to.path ? createRoute(null, to) : resolved
	    classes[activeClass] = this.exact
	      ? isSameRoute(current, compareTarget)
	      : isIncludedRoute(current, compareTarget)

	    var data      = {
	      class: classes,
	      on: {
	        click: function (e) {
	          e.preventDefault()
	          if (this$1.replace) {
	            router.replace(to)
	          } else {
	            router.push(to)
	          }
	        }
	      }
	    }

	    if (this.tag === 'a') {
	      data.attrs = { href: href }
	    } else {
	      // find the first <a> child and apply href
	      var a = findAnchor(this.$slots.default)
	      if (a) {
	        var aData = a.data || (a.data = {})
	        var aAttrs = aData.attrs || (aData.attrs = {})
	        aAttrs.href = href
	      }
	    }

	    return h(this.tag, data, this.$slots.default)
	  }
	}

	function findAnchor (children) {
	  if (children) {
	    var child
	    for (var i = 0; i < children.length; i++) {
	      child = children[i]
	      if (child.tag === 'a') {
	        return child
	      }
	      if (child.children && (child = findAnchor(child.children))) {
	        return child
	      }
	    }
	  }
	}

	function install (Vue) {
	  if (install.installed) return
	  install.installed = true

	  Object.defineProperty(Vue.prototype, '$router', {
	    get: function get () { return this.$root._router }
	  })

	  Object.defineProperty(Vue.prototype, '$route', {
	    get: function get$1 () { return this.$root._route }
	  })

	  Vue.mixin({
	    beforeCreate: function beforeCreate () {
	      if (this.$options.router) {
	        this._router = this.$options.router
	        this._router.init(this)
	        Vue.util.defineReactive(this, '_route', this._router.history.current)
	      }
	    }
	  })

	  Vue.component('router-view', View)
	  Vue.component('router-link', Link)
	}

	function interopDefault(ex) {
		return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var index$1 = createCommonjsModule(function (module) {
	module.exports = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};
	});

	var index$2 = interopDefault(index$1);


	var require$$0 = Object.freeze({
	  default: index$2
	});

	var index = createCommonjsModule(function (module) {
	var isarray = interopDefault(require$$0)

	/**
	 * Expose `pathToRegexp`.
	 */
	module.exports = pathToRegexp
	module.exports.parse = parse
	module.exports.compile = compile
	module.exports.tokensToFunction = tokensToFunction
	module.exports.tokensToRegExp = tokensToRegExp

	/**
	 * The main path matching regexp utility.
	 *
	 * @type {RegExp}
	 */
	var PATH_REGEXP = new RegExp([
	  // Match escaped characters that would otherwise appear in future matches.
	  // This allows the user to escape special characters that won't transform.
	  '(\\\\.)',
	  // Match Express-style parameters and un-named parameters with a prefix
	  // and optional suffixes. Matches appear as:
	  //
	  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
	  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
	  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
	  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
	].join('|'), 'g')

	/**
	 * Parse a string for the raw tokens.
	 *
	 * @param  {string} str
	 * @return {!Array}
	 */
	function parse (str) {
	  var tokens = []
	  var key = 0
	  var index = 0
	  var path = ''
	  var res

	  while ((res = PATH_REGEXP.exec(str)) != null) {
	    var m = res[0]
	    var escaped = res[1]
	    var offset = res.index
	    path += str.slice(index, offset)
	    index = offset + m.length

	    // Ignore already escaped sequences.
	    if (escaped) {
	      path += escaped[1]
	      continue
	    }

	    var next = str[index]
	    var prefix = res[2]
	    var name = res[3]
	    var capture = res[4]
	    var group = res[5]
	    var modifier = res[6]
	    var asterisk = res[7]

	    // Push the current path onto the tokens.
	    if (path) {
	      tokens.push(path)
	      path = ''
	    }

	    var partial = prefix != null && next != null && next !== prefix
	    var repeat = modifier === '+' || modifier === '*'
	    var optional = modifier === '?' || modifier === '*'
	    var delimiter = res[2] || '/'
	    var pattern = capture || group || (asterisk ? '.*' : '[^' + delimiter + ']+?')

	    tokens.push({
	      name: name || key++,
	      prefix: prefix || '',
	      delimiter: delimiter,
	      optional: optional,
	      repeat: repeat,
	      partial: partial,
	      asterisk: !!asterisk,
	      pattern: escapeGroup(pattern)
	    })
	  }

	  // Match any characters still remaining.
	  if (index < str.length) {
	    path += str.substr(index)
	  }

	  // If the path exists, push it onto the end.
	  if (path) {
	    tokens.push(path)
	  }

	  return tokens
	}

	/**
	 * Compile a string to a template function for the path.
	 *
	 * @param  {string}             str
	 * @return {!function(Object=, Object=)}
	 */
	function compile (str) {
	  return tokensToFunction(parse(str))
	}

	/**
	 * Prettier encoding of URI path segments.
	 *
	 * @param  {string}
	 * @return {string}
	 */
	function encodeURIComponentPretty (str) {
	  return encodeURI(str).replace(/[\/?#]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
	  })
	}

	/**
	 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
	 *
	 * @param  {string}
	 * @return {string}
	 */
	function encodeAsterisk (str) {
	  return encodeURI(str).replace(/[?#]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
	  })
	}

	/**
	 * Expose a method for transforming tokens into the path function.
	 */
	function tokensToFunction (tokens) {
	  // Compile all the tokens into regexps.
	  var matches = new Array(tokens.length)

	  // Compile all the patterns before compilation.
	  for (var i = 0; i < tokens.length; i++) {
	    if (typeof tokens[i] === 'object') {
	      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$')
	    }
	  }

	  return function (obj, opts) {
	    var path = ''
	    var data = obj || {}
	    var options = opts || {}
	    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

	    for (var i = 0; i < tokens.length; i++) {
	      var token = tokens[i]

	      if (typeof token === 'string') {
	        path += token

	        continue
	      }

	      var value = data[token.name]
	      var segment

	      if (value == null) {
	        if (token.optional) {
	          // Prepend partial segment prefixes.
	          if (token.partial) {
	            path += token.prefix
	          }

	          continue
	        } else {
	          throw new TypeError('Expected "' + token.name + '" to be defined')
	        }
	      }

	      if (isarray(value)) {
	        if (!token.repeat) {
	          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
	        }

	        if (value.length === 0) {
	          if (token.optional) {
	            continue
	          } else {
	            throw new TypeError('Expected "' + token.name + '" to not be empty')
	          }
	        }

	        for (var j = 0; j < value.length; j++) {
	          segment = encode(value[j])

	          if (!matches[i].test(segment)) {
	            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
	          }

	          path += (j === 0 ? token.prefix : token.delimiter) + segment
	        }

	        continue
	      }

	      segment = token.asterisk ? encodeAsterisk(value) : encode(value)

	      if (!matches[i].test(segment)) {
	        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
	      }

	      path += token.prefix + segment
	    }

	    return path
	  }
	}

	/**
	 * Escape a regular expression string.
	 *
	 * @param  {string} str
	 * @return {string}
	 */
	function escapeString (str) {
	  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
	}

	/**
	 * Escape the capturing group by escaping special characters and meaning.
	 *
	 * @param  {string} group
	 * @return {string}
	 */
	function escapeGroup (group) {
	  return group.replace(/([=!:$\/()])/g, '\\$1')
	}

	/**
	 * Attach the keys as a property of the regexp.
	 *
	 * @param  {!RegExp} re
	 * @param  {Array}   keys
	 * @return {!RegExp}
	 */
	function attachKeys (re, keys) {
	  re.keys = keys
	  return re
	}

	/**
	 * Get the flags for a regexp from the options.
	 *
	 * @param  {Object} options
	 * @return {string}
	 */
	function flags (options) {
	  return options.sensitive ? '' : 'i'
	}

	/**
	 * Pull out keys from a regexp.
	 *
	 * @param  {!RegExp} path
	 * @param  {!Array}  keys
	 * @return {!RegExp}
	 */
	function regexpToRegexp (path, keys) {
	  // Use a negative lookahead to match only capturing groups.
	  var groups = path.source.match(/\((?!\?)/g)

	  if (groups) {
	    for (var i = 0; i < groups.length; i++) {
	      keys.push({
	        name: i,
	        prefix: null,
	        delimiter: null,
	        optional: false,
	        repeat: false,
	        partial: false,
	        asterisk: false,
	        pattern: null
	      })
	    }
	  }

	  return attachKeys(path, keys)
	}

	/**
	 * Transform an array into a regexp.
	 *
	 * @param  {!Array}  path
	 * @param  {Array}   keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */
	function arrayToRegexp (path, keys, options) {
	  var parts = []

	  for (var i = 0; i < path.length; i++) {
	    parts.push(pathToRegexp(path[i], keys, options).source)
	  }

	  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

	  return attachKeys(regexp, keys)
	}

	/**
	 * Create a path regexp from string input.
	 *
	 * @param  {string}  path
	 * @param  {!Array}  keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */
	function stringToRegexp (path, keys, options) {
	  var tokens = parse(path)
	  var re = tokensToRegExp(tokens, options)

	  // Attach keys back to the regexp.
	  for (var i = 0; i < tokens.length; i++) {
	    if (typeof tokens[i] !== 'string') {
	      keys.push(tokens[i])
	    }
	  }

	  return attachKeys(re, keys)
	}

	/**
	 * Expose a function for taking tokens and returning a RegExp.
	 *
	 * @param  {!Array}  tokens
	 * @param  {Object=} options
	 * @return {!RegExp}
	 */
	function tokensToRegExp (tokens, options) {
	  options = options || {}

	  var strict = options.strict
	  var end = options.end !== false
	  var route = ''
	  var lastToken = tokens[tokens.length - 1]
	  var endsWithSlash = typeof lastToken === 'string' && /\/$/.test(lastToken)

	  // Iterate over the tokens and create our regexp string.
	  for (var i = 0; i < tokens.length; i++) {
	    var token = tokens[i]

	    if (typeof token === 'string') {
	      route += escapeString(token)
	    } else {
	      var prefix = escapeString(token.prefix)
	      var capture = '(?:' + token.pattern + ')'

	      if (token.repeat) {
	        capture += '(?:' + prefix + capture + ')*'
	      }

	      if (token.optional) {
	        if (!token.partial) {
	          capture = '(?:' + prefix + '(' + capture + '))?'
	        } else {
	          capture = prefix + '(' + capture + ')?'
	        }
	      } else {
	        capture = prefix + '(' + capture + ')'
	      }

	      route += capture
	    }
	  }

	  // In non-strict mode we allow a slash at the end of match. If the path to
	  // match already ends with a slash, we remove it for consistency. The slash
	  // is valid at the end of a path match, not in the middle. This is important
	  // in non-ending mode, where "/test/" shouldn't match "/test//route".
	  if (!strict) {
	    route = (endsWithSlash ? route.slice(0, -2) : route) + '(?:\\/(?=$))?'
	  }

	  if (end) {
	    route += '$'
	  } else {
	    // In non-ending mode, we need the capturing groups to match as much as
	    // possible by using a positive lookahead to the end or next path segment.
	    route += strict && endsWithSlash ? '' : '(?=\\/|$)'
	  }

	  return new RegExp('^' + route, flags(options))
	}

	/**
	 * Normalize the given path string, returning a regular expression.
	 *
	 * An empty array can be passed in for the keys, which will hold the
	 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
	 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
	 *
	 * @param  {(string|RegExp|Array)} path
	 * @param  {(Array|Object)=}       keys
	 * @param  {Object=}               options
	 * @return {!RegExp}
	 */
	function pathToRegexp (path, keys, options) {
	  keys = keys || []

	  if (!isarray(keys)) {
	    options = /** @type {!Object} */ (keys)
	    keys = []
	  } else if (!options) {
	    options = {}
	  }

	  if (path instanceof RegExp) {
	    return regexpToRegexp(path, /** @type {!Array} */ (keys))
	  }

	  if (isarray(path)) {
	    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
	  }

	  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
	}
	});

	var Regexp = interopDefault(index);

	/*       */

	function createRouteMap (routes                    )   
	                    
	                   
	  {
	  var pathMap           = Object.create(null)
	  var nameMap           = Object.create(null)

	  routes.forEach(function (route) {
	    addRouteRecord(pathMap, nameMap, route)
	  })

	  return {
	    pathMap: pathMap,
	    nameMap: nameMap
	  }
	}

	function addRouteRecord (
	  pathMap          ,
	  nameMap          ,
	  route             ,
	  parent              ,
	  matchAs         
	) {
	  var path = route.path;
	  var name = route.name;
	  assert(path != null, "\"path\" is required in a route configuration.")

	  var record              = {
	    path: normalizePath(path, parent),
	    components: route.components || { default: route.component },
	    instances: {},
	    name: name,
	    parent: parent,
	    matchAs: matchAs,
	    redirect: route.redirect,
	    beforeEnter: route.beforeEnter,
	    meta: route.meta || {}
	  }

	  if (route.children) {
	    // Warn if route is named and has a default child route.
	    // If users navigate to this route by name, the default child will
	    // not be rendered (GH Issue #629)
	    if (false) {}
	    route.children.forEach(function (child) {
	      addRouteRecord(pathMap, nameMap, child, record)
	    })
	  }

	  if (route.alias) {
	    if (Array.isArray(route.alias)) {
	      route.alias.forEach(function (alias) {
	        addRouteRecord(pathMap, nameMap, { path: alias }, parent, record.path)
	      })
	    } else {
	      addRouteRecord(pathMap, nameMap, { path: route.alias }, parent, record.path)
	    }
	  }

	  pathMap[record.path] = record
	  if (name) nameMap[name] = record
	}

	function normalizePath (path        , parent              )         {
	  path = path.replace(/\/$/, '')
	  if (path[0] === '/') return path
	  if (parent == null) return path
	  return cleanPath(((parent.path) + "/" + path))
	}

	/*       */

	var regexpCache   
	                  
	                                   
	                  
	   
	  = Object.create(null)

	var regexpCompileCache   
	                         
	  = Object.create(null)

	function createMatcher (routes                    )          {
	  var ref = createRouteMap(routes);
	  var pathMap = ref.pathMap;
	  var nameMap = ref.nameMap;

	  function match (
	    raw             ,
	    currentRoute        ,
	    redirectedFrom           
	  )        {
	    var location = normalizeLocation(raw, currentRoute)
	    var name = location.name;

	    if (name) {
	      var record = nameMap[name]
	      if (record) {
	        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""))
	        return _createRoute(record, location, redirectedFrom)
	      }
	    } else if (location.path) {
	      location.params = {}
	      for (var path in pathMap) {
	        if (matchRoute(path, location.params, location.path)) {
	          return _createRoute(pathMap[path], location, redirectedFrom)
	        }
	      }
	    }
	    // no match
	    return _createRoute(null, location)
	  }

	  function redirect (
	    record             ,
	    location          
	  )        {
	    var originalRedirect = record.redirect
	    var redirect = typeof originalRedirect === 'function'
	        ? originalRedirect(createRoute(record, location))
	        : originalRedirect

	    if (typeof redirect === 'string') {
	      redirect = { path: redirect }
	    }

	    if (!redirect || typeof redirect !== 'object') {
	      warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))))
	      return _createRoute(null, location)
	    }

	    var re         = redirect
	    var name = re.name;
	    var path = re.path;
	    var query = location.query;
	    var hash = location.hash;
	    var params = location.params;
	    query = re.hasOwnProperty('query') ? re.query : query
	    hash = re.hasOwnProperty('hash') ? re.hash : hash
	    params = re.hasOwnProperty('params') ? re.params : params

	    if (name) {
	      // resolved named direct
	      var targetRecord = nameMap[name]
	      assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."))
	      return match({
	        _normalized: true,
	        name: name,
	        query: query,
	        hash: hash,
	        params: params
	      }, undefined, location)
	    } else if (path) {
	      // 1. resolve relative redirect
	      var rawPath = resolveRecordPath(path, record)
	      // 2. resolve params
	      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""))
	      // 3. rematch with existing query and hash
	      return match({
	        _normalized: true,
	        path: resolvedPath,
	        query: query,
	        hash: hash
	      }, undefined, location)
	    } else {
	      warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))))
	      return _createRoute(null, location)
	    }
	  }

	  function alias (
	    record             ,
	    location          ,
	    matchAs        
	  )        {
	    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""))
	    var aliasedMatch = match({
	      _normalized: true,
	      path: aliasedPath
	    })
	    if (aliasedMatch) {
	      var matched = aliasedMatch.matched
	      var aliasedRecord = matched[matched.length - 1]
	      location.params = aliasedMatch.params
	      return _createRoute(aliasedRecord, location)
	    }
	    return _createRoute(null, location)
	  }

	  function _createRoute (
	    record              ,
	    location          ,
	    redirectedFrom           
	  )        {
	    if (record && record.redirect) {
	      return redirect(record, redirectedFrom || location)
	    }
	    if (record && record.matchAs) {
	      return alias(record, location, record.matchAs)
	    }
	    return createRoute(record, location, redirectedFrom)
	  }

	  return match
	}

	function matchRoute (
	  path        ,
	  params        ,
	  pathname        
	)          {
	  var keys, regexp
	  var hit = regexpCache[path]
	  if (hit) {
	    keys = hit.keys
	    regexp = hit.regexp
	  } else {
	    keys = []
	    regexp = Regexp(path, keys)
	    regexpCache[path] = { keys: keys, regexp: regexp }
	  }
	  var m = pathname.match(regexp)

	  if (!m) {
	    return false
	  } else if (!params) {
	    return true
	  }

	  for (var i = 1, len = m.length; i < len; ++i) {
	    var key = keys[i - 1]
	    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i]
	    if (key) params[key.name] = val
	  }

	  return true
	}

	function fillParams (
	  path        ,
	  params         ,
	  routeMsg        
	)         {
	  try {
	    var filler =
	      regexpCompileCache[path] ||
	      (regexpCompileCache[path] = Regexp.compile(path))
	    return filler(params || {}, { pretty: true })
	  } catch (e) {
	    assert(false, ("missing param for " + routeMsg + ": " + (e.message)))
	    return ''
	  }
	}

	function resolveRecordPath (path        , record             )         {
	  return resolvePath(path, record.parent ? record.parent.path : '/', true)
	}

	/*       */

	var inBrowser = typeof window !== 'undefined'

	var supportsHistory = inBrowser && (function () {
	  var ua = window.navigator.userAgent

	  if (
	    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
	    ua.indexOf('Mobile Safari') !== -1 &&
	    ua.indexOf('Chrome') === -1 &&
	    ua.indexOf('Windows Phone') === -1
	  ) {
	    return false
	  }

	  return window.history && 'pushState' in window.history
	})()

	/*       */

	function runQueue (queue            , fn          , cb          ) {
	  var step = function (index) {
	    if (index >= queue.length) {
	      cb()
	    } else {
	      if (queue[index]) {
	        fn(queue[index], function () {
	          step(index + 1)
	        })
	      } else {
	        step(index + 1)
	      }
	    }
	  }
	  step(0)
	}

	/*       */

	                                     
	var History = function History (router         , base       ) {
	  this.router = router
	  this.base = normalizeBase(base)
	  // start with a route object that stands for "nowhere"
	  this.current = createRoute(null, {
	    path: '__vue_router_init__'
	  })
	  this.pending = null
	};

	History.prototype.listen = function listen (cb        ) {
	  this.cb = cb
	};

	History.prototype.transitionTo = function transitionTo (location           , cb         ) {
	    var this$1 = this;

	  var route = this.router.match(location, this.current)
	  this.confirmTransition(route, function () {
	    this$1.updateRoute(route)
	    cb && cb(route)
	  })
	};

	History.prototype.confirmTransition = function confirmTransition (route     , cb        ) {
	    var this$1 = this;

	  if (isSameRoute(route, this.current)) {
	    return
	  }

	  var ref = resolveQueue(this.current.matched, route.matched);
	    var deactivated = ref.deactivated;
	    var activated = ref.activated;

	  var queue = [].concat(
	    // in-component leave guards
	    extractLeaveGuards(deactivated),
	    // global before hooks
	    this.router.beforeHooks,
	    // enter guards
	    activated.map(function (m) { return m.beforeEnter; }),
	    // async components
	    resolveAsyncComponents(activated)
	  )

	  this.pending = route
	  var redirect = function (location) { return this$1.push(location); }
	  var iterator = function (hook, next) { return hook(route, redirect, next); }

	  runQueue(queue, iterator, function () {
	    var postEnterCbs = []
	    // wait until async components are resolved before
	    // extracting in-component enter guards
	    runQueue(extractEnterGuards(activated, postEnterCbs), iterator, function () {
	      if (isSameRoute(route, this$1.pending)) {
	        this$1.pending = null
	        cb(route)
	        this$1.router.app.$nextTick(function () {
	          postEnterCbs.forEach(function (cb) { return cb(); })
	        })
	      }
	    })
	  })
	};

	History.prototype.updateRoute = function updateRoute (route     ) {
	  this.current = route
	  this.cb && this.cb(route)
	  this.router.afterHooks.forEach(function (hook) {
	    hook && hook(route)
	  })
	};

	function normalizeBase (base         )         {
	  if (!base) {
	    if (inBrowser) {
	      // respect <base> tag
	      var baseEl = document.querySelector('base')
	      base = baseEl ? baseEl.getAttribute('href') : '/'
	    } else {
	      base = '/'
	    }
	  }
	  // make sure there's the starting slash
	  if (base.charAt(0) !== '/') {
	    base = '/' + base
	  }
	  // remove trailing slash
	  return base.replace(/\/$/, '')
	}

	function resolveQueue (
	  current                    ,
	  next                    
	)   
	                                
	                                 
	  {
	  var i
	  var max = Math.max(current.length, next.length)
	  for (i = 0; i < max; i++) {
	    if (current[i] !== next[i]) {
	      break
	    }
	  }
	  return {
	    activated: next.slice(i),
	    deactivated: current.slice(i)
	  }
	}

	function extractLeaveGuards (matched                    )                   {
	  return flatMapComponents(matched, function (def, instance) {
	    var guard = def && def.beforeRouteLeave
	    if (guard) {
	      return function routeLeaveGuard () {
	        return guard.apply(instance, arguments)
	      }
	    }
	  }).reverse()
	}

	function extractEnterGuards (matched                    , cbs                 )                   {
	  return flatMapComponents(matched, function (def, _, match, key) {
	    var guard = def && def.beforeRouteEnter
	    if (guard) {
	      return function routeEnterGuard (route, redirect, next) {
	        return guard(route, redirect, function (cb) {
	          next()
	          cb && cbs.push(function () {
	            cb(match.instances[key])
	          })
	        })
	      }
	    }
	  })
	}

	function resolveAsyncComponents (matched                    )                   {
	  return flatMapComponents(matched, function (def, _, match, key) {
	    // if it's a function and doesn't have Vue options attached,
	    // assume it's an async component resolve function.
	    // we are not using Vue's default async resolving mechanism because
	    // we want to halt the navigation until the incoming component has been
	    // resolved.
	    if (typeof def === 'function' && !def.options) {
	      return function (route, redirect, next) {
	        var resolve = function (resolvedDef) {
	          match.components[key] = resolvedDef
	          next()
	        }

	        var reject = function (reason) {
	          warn(false, ("Failed to resolve async component " + key + ": " + reason))
	        }

	        var res = def(resolve, reject)
	        if (res && typeof res.then === 'function') {
	          res.then(resolve, reject)
	        }
	      }
	    }
	  })
	}

	function flatMapComponents (
	  matched                    ,
	  fn          
	)                   {
	  return Array.prototype.concat.apply([], matched.map(function (m) {
	    return Object.keys(m.components).map(function (key) { return fn(
	      m.components[key],
	      m.instances[key],
	      m, key
	    ); })
	  }))
	}

	/*       */

	function saveScrollPosition (key        ) {
	  if (!key) return
	  window.sessionStorage.setItem(key, JSON.stringify({
	    x: window.pageXOffset,
	    y: window.pageYOffset
	  }))
	}

	function getScrollPosition (key        )          {
	  if (!key) return
	  return JSON.parse(window.sessionStorage.getItem(key))
	}

	function getElementPosition (el         )         {
	  var docRect = document.documentElement.getBoundingClientRect()
	  var elRect = el.getBoundingClientRect()
	  return {
	    x: elRect.left - docRect.left,
	    y: elRect.top - docRect.top
	  }
	}

	function isValidPosition (obj        )          {
	  return isNumber(obj.x) || isNumber(obj.y)
	}

	function normalizePosition (obj        )         {
	  return {
	    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
	    y: isNumber(obj.y) ? obj.y : window.pageYOffset
	  }
	}

	function isNumber (v     )          {
	  return typeof v === 'number'
	}

	/*       */

	                                     
	var genKey = function () { return String(Date.now()); }
	var _key         = genKey()

	var HTML5History = (function (History) {
	  function HTML5History (router           , base         ) {
	    var this$1 = this;

	    History.call(this, router, base)

	    var initialLocation = getLocation(this.base)
	    this.transitionTo(initialLocation, function (route) {
	      // possible redirect on start
	      var url = cleanPath(this$1.base + this$1.current.fullPath)
	      if (initialLocation !== url) {
	        replaceState(url)
	      }
	    })

	    var expectScroll = router.options.scrollBehavior
	    window.addEventListener('popstate', function (e) {
	      _key = e.state && e.state.key
	      var current = this$1.current
	      this$1.transitionTo(getLocation(this$1.base), function (next) {
	        if (expectScroll) {
	          this$1.handleScroll(next, current, true)
	        }
	      })
	    })

	    if (expectScroll) {
	      window.addEventListener('scroll', function () {
	        saveScrollPosition(_key)
	      })
	    }
	  }

	  if ( History ) HTML5History.__proto__ = History;
	  HTML5History.prototype = Object.create( History && History.prototype );
	  HTML5History.prototype.constructor = HTML5History;

	  HTML5History.prototype.go = function go (n        ) {
	    window.history.go(n)
	  };

	  HTML5History.prototype.push = function push (location             ) {
	    var this$1 = this;

	    var current = this.current
	    History.prototype.transitionTo.call(this, location, function (route) {
	      pushState(cleanPath(this$1.base + route.fullPath))
	      this$1.handleScroll(route, current, false)
	    })
	  };

	  HTML5History.prototype.replace = function replace (location             ) {
	    var this$1 = this;

	    var current = this.current
	    History.prototype.transitionTo.call(this, location, function (route) {
	      replaceState(cleanPath(this$1.base + route.fullPath))
	      this$1.handleScroll(route, current, false)
	    })
	  };

	  HTML5History.prototype.handleScroll = function handleScroll (to       , from       , isPop         ) {
	    var router = this.router
	    if (!router.app) {
	      return
	    }

	    var behavior = router.options.scrollBehavior
	    if (!behavior) {
	      return
	    }
	    assert(typeof behavior === 'function', "scrollBehavior must be a function")

	    // wait until re-render finishes before scrolling
	    router.app.$nextTick(function () {
	      var position = getScrollPosition(_key)
	      var shouldScroll = behavior(to, from, isPop ? position : null)
	      if (!shouldScroll) {
	        return
	      }
	      var isObject = typeof shouldScroll === 'object'
	      if (isObject && shouldScroll.selector) {
	        var el = document.querySelector(shouldScroll.selector)
	        if (el) {
	          position = getElementPosition(el)
	        } else if (isValidPosition(shouldScroll)) {
	          position = normalizePosition(shouldScroll)
	        }
	      } else if (isObject && isValidPosition(shouldScroll)) {
	        position = normalizePosition(shouldScroll)
	      }

	      if (position) {
	        window.scrollTo(position.x, position.y)
	      }
	    })
	  };

	  return HTML5History;
	}(History));

	function getLocation (base        )         {
	  var path = window.location.pathname
	  if (base && path.indexOf(base) === 0) {
	    path = path.slice(base.length)
	  }
	  return (path || '/') + window.location.search + window.location.hash
	}

	function pushState (url        , replace          ) {
	  // try...catch the pushState call to get around Safari
	  // DOM Exception 18 where it limits to 100 pushState calls
	  var history = window.history
	  try {
	    if (replace) {
	      history.replaceState({ key: _key }, '', url)
	    } else {
	      _key = genKey()
	      history.pushState({ key: _key }, '', url)
	    }
	    saveScrollPosition(_key)
	  } catch (e) {
	    window.location[replace ? 'assign' : 'replace'](url)
	  }
	}

	function replaceState (url        ) {
	  pushState(url, true)
	}

	/*       */

	                                     
	var HashHistory = (function (History) {
	  function HashHistory (router           , base         , fallback         ) {
	    var this$1 = this;

	    History.call(this, router, base)

	    // check history fallback deeplinking
	    if (fallback && this.checkFallback()) {
	      return
	    }

	    ensureSlash()
	    this.transitionTo(getHash(), function (route) {
	      // possible redirect on start
	      if (getHash() !== route.fullPath) {
	        replaceHash(route.fullPath)
	      }
	    })

	    window.addEventListener('hashchange', function () {
	      this$1.onHashChange()
	    })
	  }

	  if ( History ) HashHistory.__proto__ = History;
	  HashHistory.prototype = Object.create( History && History.prototype );
	  HashHistory.prototype.constructor = HashHistory;

	  HashHistory.prototype.checkFallback = function checkFallback () {
	    var location = getLocation(this.base)
	    if (!/^\/#/.test(location)) {
	      window.location.replace(
	        cleanPath(this.base + '/#' + location)
	      )
	      return true
	    }
	  };

	  HashHistory.prototype.onHashChange = function onHashChange () {
	    if (!ensureSlash()) {
	      return
	    }
	    this.transitionTo(getHash(), function (route) {
	      replaceHash(route.fullPath)
	    })
	  };

	  HashHistory.prototype.push = function push (location             ) {
	    History.prototype.transitionTo.call(this, location, function (route) {
	      pushHash(route.fullPath)
	    })
	  };

	  HashHistory.prototype.replace = function replace (location             ) {
	    History.prototype.transitionTo.call(this, location, function (route) {
	      replaceHash(route.fullPath)
	    })
	  };

	  HashHistory.prototype.go = function go (n        ) {
	    window.history.go(n)
	  };

	  return HashHistory;
	}(History));

	function ensureSlash ()          {
	  var path = getHash()
	  if (path.charAt(0) === '/') {
	    return true
	  }
	  replaceHash('/' + path)
	  return false
	}

	function getHash ()         {
	  // We can't use window.location.hash here because it's not
	  // consistent across browsers - Firefox will pre-decode it!
	  var href = window.location.href
	  var index = href.indexOf('#')
	  return index === -1 ? '' : href.slice(index + 1)
	}

	function pushHash (path) {
	  window.location.hash = path
	}

	function replaceHash (path) {
	  var i = window.location.href.indexOf('#')
	  window.location.replace(
	    window.location.href.slice(0, i >= 0 ? i : 0) + '#' + path
	  )
	}

	/*       */

	                                     
	var AbstractHistory = (function (History) {
	  function AbstractHistory (router           ) {
	    History.call(this, router)
	    this.stack = []
	    this.index = 0
	  }

	  if ( History ) AbstractHistory.__proto__ = History;
	  AbstractHistory.prototype = Object.create( History && History.prototype );
	  AbstractHistory.prototype.constructor = AbstractHistory;

	  AbstractHistory.prototype.push = function push (location             ) {
	    var this$1 = this;

	    History.prototype.transitionTo.call(this, location, function (route) {
	      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route)
	      this$1.index++
	    })
	  };

	  AbstractHistory.prototype.replace = function replace (location             ) {
	    var this$1 = this;

	    History.prototype.transitionTo.call(this, location, function (route) {
	      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route)
	    })
	  };

	  AbstractHistory.prototype.go = function go (n        ) {
	    var this$1 = this;

	    var targetIndex = this.index + n
	    if (targetIndex < 0 || targetIndex >= this.stack.length) {
	      return
	    }
	    var location = this.stack[targetIndex]
	    this.confirmTransition(location, function () {
	      this$1.index = targetIndex
	      this$1.updateRoute(location)
	    })
	  };

	  return AbstractHistory;
	}(History));

	/*       */

	var VueRouter = function VueRouter (options) {
	  if ( options === void 0 ) options              = {};

	  this.app = null
	  this.options = options
	  this.beforeHooks = []
	  this.afterHooks = []
	  this.match = createMatcher(options.routes || [])

	  var mode = options.mode || 'hash'
	  this.fallback = mode === 'history' && !supportsHistory
	  if (this.fallback) {
	    mode = 'hash'
	  }
	  if (!inBrowser) {
	    mode = 'abstract'
	  }
	  this.mode = mode
	};

	var prototypeAccessors = { currentRoute: {} };

	prototypeAccessors.currentRoute.get = function ()       {
	  return this.history && this.history.current
	};

	VueRouter.prototype.init = function init (app    /* Vue component instance */) {
	    var this$1 = this;

	  assert(
	    install.installed,
	    "not installed. Make sure to call `Vue.use(VueRouter)` " +
	    "before creating root instance."
	  )

	  this.app = app

	  var ref = this;
	    var mode = ref.mode;
	    var options = ref.options;
	    var fallback = ref.fallback;
	  switch (mode) {
	    case 'history':
	      this.history = new HTML5History(this, options.base)
	      break
	    case 'hash':
	      this.history = new HashHistory(this, options.base, fallback)
	      break
	    case 'abstract':
	      this.history = new AbstractHistory(this)
	      break
	    default:
	      assert(false, ("invalid mode: " + mode))
	  }

	  this.history.listen(function (route) {
	    this$1.app._route = route
	  })
	};

	VueRouter.prototype.beforeEach = function beforeEach (fn        ) {
	  this.beforeHooks.push(fn)
	};

	VueRouter.prototype.afterEach = function afterEach (fn        ) {
	  this.afterHooks.push(fn)
	};

	VueRouter.prototype.push = function push (location           ) {
	  this.history.push(location)
	};

	VueRouter.prototype.replace = function replace (location           ) {
	  this.history.replace(location)
	};

	VueRouter.prototype.go = function go (n      ) {
	  this.history.go(n)
	};

	VueRouter.prototype.back = function back () {
	  this.go(-1)
	};

	VueRouter.prototype.forward = function forward () {
	  this.go(1)
	};

	VueRouter.prototype.getMatchedComponents = function getMatchedComponents ()           {
	  if (!this.currentRoute) {
	    return []
	  }
	  return [].concat.apply([], this.currentRoute.matched.map(function (m) {
	    return Object.keys(m.components).map(function (key) {
	      return m.components[key]
	    })
	  }))
	};

	Object.defineProperties( VueRouter.prototype, prototypeAccessors );

	VueRouter.install = install

	if (inBrowser && window.Vue) {
	  window.Vue.use(VueRouter)
	}

	return VueRouter;

	})));

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.router = undefined;

	var _vueRouter = __webpack_require__(3);

	var _vueRouter2 = _interopRequireDefault(_vueRouter);

	var _Home = __webpack_require__(5);

	var _Home2 = _interopRequireDefault(_Home);

	var _Deck = __webpack_require__(17);

	var _Deck2 = _interopRequireDefault(_Deck);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var router = exports.router = new _vueRouter2.default({
	  mode: 'history',
	  base: 'deckbuilder',
	  routes: [{ path: '/', component: _Home2.default }, { path: '/deck', component: _Home2.default }, { path: '/deck/:faction', component: _Deck2.default }]
	});

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* styles */
	__webpack_require__(6)

	/* script */
	__vue_exports__ = __webpack_require__(10)

	/* template */
	var __vue_template__ = __webpack_require__(16)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-3", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-3", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Home.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(7);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-3!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Home.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-3!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Home.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

	// exports


/***/ },
/* 8 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if (media) {
			styleElement.setAttribute("media", media);
		}

		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _FactionChoice = __webpack_require__(11);

	var _FactionChoice2 = _interopRequireDefault(_FactionChoice);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  components: {
	    FactionChoice: _FactionChoice2.default
	  }
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* styles */
	__webpack_require__(12)

	/* script */
	__vue_exports__ = __webpack_require__(14)

	/* template */
	var __vue_template__ = __webpack_require__(15)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-10", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-10", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] FactionChoice.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(13);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-10!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./FactionChoice.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-10!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./FactionChoice.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, "/* Vendor */\n/* Partials */\n/*\r\n    https://jdsteinbach.com/css//sass-maps-breakpoint-mixin/\r\n\r\n    Usage:\r\n    @include breakpoint(md) {\r\n        ...\r\n    }\r\n*/\n.faction-choice-component {\n  width: 1200px;\n  margin: 0 auto;\n}\n.faction-choice-component:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n.faction-choice-component > .wrapper {\n    width: calc(100% / 3);\n    float: left;\n    display: flex;\n}\n.faction-choice {\n  width: 254px;\n  margin: 0 auto 45px;\n}\n.faction-choice > .image {\n    margin-bottom: -32px;\n    position: relative;\n    z-index: 2;\n}\n.faction-choice > .text {\n    background: #104365;\n    padding: 30px 10px 10px;\n    text-align: center;\n    font-size: 1.5rem;\n    color: #e1e1e1;\n    position: relative;\n}\n.faction-choice > .text::before, .faction-choice > .text::after {\n      position: absolute;\n      content: '';\n      bottom: 0;\n      border-style: solid;\n}\n.faction-choice > .text::before {\n      left: 0;\n      border-width: 0 22px 22px 0;\n      border-color: #0b1c27 #104365;\n}\n.faction-choice > .text::after {\n      right: 0;\n      border-width: 22px 22px 0 0;\n      border-color: #104365 #0b1c27;\n}\n.faction-choice:hover > .text {\n  text-shadow: 0px 0px 16px rgba(255, 255, 255, 0.75);\n}\n", ""]);

	// exports


/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "faction-choice-component"
	  }, [_h('div', {
	    staticClass: "wrapper"
	  }, [_h('router-link', {
	    staticClass: "faction-choice",
	    attrs: {
	      "to": "/deck/lyonar"
	    }
	  }, [_m(0), " ", _m(1)])]), " ", _h('div', {
	    staticClass: "wrapper"
	  }, [_h('router-link', {
	    staticClass: "faction-choice",
	    attrs: {
	      "to": "/deck/songhai"
	    }
	  }, [_m(2), " ", _m(3)])]), " ", _h('div', {
	    staticClass: "wrapper"
	  }, [_h('router-link', {
	    staticClass: "faction-choice",
	    attrs: {
	      "to": "/deck/vetruvian"
	    }
	  }, [_m(4), " ", _m(5)])]), " ", _h('div', {
	    staticClass: "wrapper"
	  }, [_h('router-link', {
	    staticClass: "faction-choice",
	    attrs: {
	      "to": "/deck/abyssian"
	    }
	  }, [_m(6), " ", _m(7)])]), " ", _h('div', {
	    staticClass: "wrapper"
	  }, [_h('router-link', {
	    staticClass: "faction-choice",
	    attrs: {
	      "to": "/deck/magmar"
	    }
	  }, [_m(8), " ", _m(9)])]), " ", _h('div', {
	    staticClass: "wrapper"
	  }, [_h('router-link', {
	    staticClass: "faction-choice",
	    attrs: {
	      "to": "/deck/vanar"
	    }
	  }, [_m(10), " ", _m(11)])])])
	}},staticRenderFns: [function (){with(this) {
	  return _h('img', {
	    staticClass: "image",
	    attrs: {
	      "src": "https://dl.dropboxusercontent.com/u/24984522/lyonar.png",
	      "alt": "Lyonar"
	    }
	  })
	}},function (){with(this) {
	  return _h('div', {
	    staticClass: "text"
	  }, ["Lyonar"])
	}},function (){with(this) {
	  return _h('img', {
	    staticClass: "image",
	    attrs: {
	      "src": "https://dl.dropboxusercontent.com/u/24984522/songhai.png",
	      "alt": "Songhai"
	    }
	  })
	}},function (){with(this) {
	  return _h('div', {
	    staticClass: "text"
	  }, ["Songhai"])
	}},function (){with(this) {
	  return _h('img', {
	    staticClass: "image",
	    attrs: {
	      "src": "https://dl.dropboxusercontent.com/u/24984522/vetruvian.png",
	      "alt": "Vetruvian"
	    }
	  })
	}},function (){with(this) {
	  return _h('div', {
	    staticClass: "text"
	  }, ["Vetruvian"])
	}},function (){with(this) {
	  return _h('img', {
	    staticClass: "image",
	    attrs: {
	      "src": "https://dl.dropboxusercontent.com/u/24984522/abyssian.png",
	      "alt": "Abyssian"
	    }
	  })
	}},function (){with(this) {
	  return _h('div', {
	    staticClass: "text"
	  }, ["Abyssian"])
	}},function (){with(this) {
	  return _h('img', {
	    staticClass: "image",
	    attrs: {
	      "src": "https://dl.dropboxusercontent.com/u/24984522/magmar.png",
	      "alt": "Magmar"
	    }
	  })
	}},function (){with(this) {
	  return _h('div', {
	    staticClass: "text"
	  }, ["Magmar"])
	}},function (){with(this) {
	  return _h('img', {
	    staticClass: "image",
	    attrs: {
	      "src": "https://dl.dropboxusercontent.com/u/24984522/vanar.png",
	      "alt": "Vanar"
	    }
	  })
	}},function (){with(this) {
	  return _h('div', {
	    staticClass: "text"
	  }, ["Vanar"])
	}}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-10", module.exports)
	  }
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "home-page"
	  }, [_h('faction-choice')])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-3", module.exports)
	  }
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* styles */
	__webpack_require__(18)

	/* script */
	__vue_exports__ = __webpack_require__(20)

	/* template */
	var __vue_template__ = __webpack_require__(172)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-2", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-2", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Deck.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(19);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-2!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Deck.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-2!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Deck.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, "/* Vendor */\n/* Partials */\n/*\r\n    https://jdsteinbach.com/css//sass-maps-breakpoint-mixin/\r\n\r\n    Usage:\r\n    @include breakpoint(md) {\r\n        ...\r\n    }\r\n*/\n.left-column {\n  width: 74.57627%;\n  float: left;\n  margin-right: 1.69492%;\n  margin-top: 20px;\n}\n.right-column {\n  width: 23.72881%;\n  float: right;\n  margin-right: 0;\n  margin-top: 60px;\n}\n.card-grid:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.deck-page:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n", ""]);

	// exports


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _GameCard = __webpack_require__(21);

	var _GameCard2 = _interopRequireDefault(_GameCard);

	var _GeneralCard = __webpack_require__(27);

	var _GeneralCard2 = _interopRequireDefault(_GeneralCard);

	var _DeckList = __webpack_require__(32);

	var _DeckList2 = _interopRequireDefault(_DeckList);

	var _CardPagination = __webpack_require__(129);

	var _CardPagination2 = _interopRequireDefault(_CardPagination);

	var _FilterArea = __webpack_require__(135);

	var _FilterArea2 = _interopRequireDefault(_FilterArea);

	var _vuex = __webpack_require__(133);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  computed: (0, _vuex.mapGetters)({
	    visibleCards: 'visibleCards'
	  }),

	  data: function data() {
	    return {
	      scrolling: false
	    };
	  },


	  methods: {
	    swapPage: function swapPage(event) {
	      var _this = this;

	      event.preventDefault();
	      if (this.scrolling) return;

	      this.scrolling = true;
	      event.wheelDelta > 0 ? this.$store.dispatch('goToPage', -1) : this.$store.dispatch('goToPage', 1);

	      setTimeout(function () {
	        _this.scrolling = false;
	      }, 100);
	    }
	  },

	  created: function created() {
	    if (this.$store.state.route.hash) this.$store.dispatch('loadDeck', this.$store.state.route.hash);
	  },


	  components: {
	    GameCard: _GameCard2.default,
	    GeneralCard: _GeneralCard2.default,
	    DeckList: _DeckList2.default,
	    CardPagination: _CardPagination2.default,
	    FilterArea: _FilterArea2.default
	  }
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* styles */
	__webpack_require__(22)

	/* script */
	__vue_exports__ = __webpack_require__(24)

	/* template */
	var __vue_template__ = __webpack_require__(26)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-6", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-6", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] GameCard.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(23);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-6!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./GameCard.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-6!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./GameCard.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, "/* Vendor */\n/* Partials */\n/*\r\n    https://jdsteinbach.com/css//sass-maps-breakpoint-mixin/\r\n\r\n    Usage:\r\n    @include breakpoint(md) {\r\n        ...\r\n    }\r\n*/\n@keyframes flashBrightness {\nfrom {\n    -webkit-filter: brightness(5);\n    filter: brightness(5);\n}\nto {\n    -webkit-filter: brightness(1);\n    filter: brightness(1);\n}\n}\n@keyframes flashDull {\nfrom {\n    -webkit-filter: brightness(2);\n    filter: brightness(2);\n}\nto {\n    -webkit-filter: brightness(1);\n    filter: brightness(1);\n}\n}\n.flash {\n  animation: flashBrightness .2s;\n}\n.dull {\n  animation: flashDull .2s;\n}\n.card-container {\n  width: 253px;\n  height: 320px;\n  float: left;\n  padding: 16px 15px;\n  margin-bottom: 15px;\n}\n.card-container:hover {\n    background-image: url(https://dl.dropboxusercontent.com/u/24984522/spritesheet.png);\n}\n.game-card {\n  width: 224px;\n  height: 296px;\n  background-image: url(https://dl.dropboxusercontent.com/u/24984522/spritesheet.png);\n  position: relative;\n  text-align: center;\n  user-select: none;\n  -webkit-user-select: none;\n}\n.game-card.minion, .game-card.general {\n    background-position: -719px -2px;\n}\n.game-card.minion.disabled, .game-card.general.disabled {\n      background-position: -1409px -2px;\n}\n.game-card.spell {\n    background-position: -489px -2px;\n}\n.game-card.spell.disabled {\n      background-position: -1179px -2px;\n}\n.game-card.artifact {\n    background-position: -259px -2px;\n}\n.game-card.artifact.disabled {\n      background-position: -949px -2px;\n}\n.game-card > .cost {\n    width: 57px;\n    height: 63px;\n    font-size: 22px;\n    background-image: url(https://dl.dropboxusercontent.com/u/24984522/icon_mana.png);\n    position: absolute;\n    top: -16px;\n    left: -16px;\n    line-height: 63px;\n    color: #00213b;\n    font-weight: bold;\n}\n.game-card > .name {\n    text-transform: uppercase;\n    position: absolute;\n    text-align: center;\n    width: 100%;\n    top: 112px;\n    font-size: .8rem;\n}\n.game-card > .type {\n    color: #90cacf;\n    text-transform: uppercase;\n    position: absolute;\n    text-align: center;\n    width: 100%;\n    top: 130px;\n    font-size: .65rem;\n}\n.game-card > .type.artifact {\n      color: #edd144;\n}\n.game-card > .rarity {\n    width: 44px;\n    height: 44px;\n    position: absolute;\n    top: 151px;\n    left: 89px;\n}\n.game-card > .rarity.common {\n      background-image: url(https://dl.dropboxusercontent.com/u/24984522/collection_card_rarity_common.png);\n}\n.game-card > .rarity.epic {\n      background-image: url(https://dl.dropboxusercontent.com/u/24984522/collection_card_rarity_epic.png);\n}\n.game-card > .rarity.legendary {\n      background-image: url(https://dl.dropboxusercontent.com/u/24984522/collection_card_rarity_legendary.png);\n}\n.game-card > .rarity.rare {\n      background-image: url(https://dl.dropboxusercontent.com/u/24984522/collection_card_rarity_rare.png);\n}\n.game-card > .attack, .game-card > .health {\n    position: absolute;\n    width: 50px;\n    text-align: center;\n    font-size: 1.2rem;\n    top: 166px;\n}\n.game-card > .attack {\n    left: 27px;\n}\n.game-card > .health {\n    left: 148px;\n}\n.game-card > .text {\n    color: #90cacf;\n    line-height: 1.2;\n    text-align: center;\n    position: absolute;\n    top: 215px;\n    width: 90%;\n    left: 5%;\n    font-size: .75rem;\n}\n.game-card > .qty {\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    font-size: .65rem;\n}\n", ""]);

	// exports


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _updateHash = __webpack_require__(25);

	var _updateHash2 = _interopRequireDefault(_updateHash);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  props: ['card'],

	  data: function data() {
	    return {
	      flash: false,
	      dull: false,
	      timeout: null
	    };
	  },


	  computed: {
	    inDeck: function inDeck() {
	      var _this = this;

	      var matchingCard = this.$store.state.deck.cards.find(function (card) {
	        return card.name === _this.card.name;
	      });
	      if (matchingCard) return 'X ' + matchingCard.qty;
	    },
	    spriteClass: function spriteClass() {
	      return this.card.type + ' ' + this.card.faction + '-sprite ' + this.card.faction + '-' + this.card.id;
	    }
	  },

	  methods: {
	    selectCard: function selectCard(card) {
	      if (this.inDeck === 'X 3') return;

	      this.flashCard();

	      this.$store.dispatch('selectCard', { card: card, qty: 1 });
	      (0, _updateHash2.default)(this.$store.state.deck);
	    },
	    removeCard: function removeCard(card) {
	      if (!this.inDeck) return;

	      this.flashDull();
	      this.$store.dispatch('removeCard', card);
	      (0, _updateHash2.default)(this.$store.state.deck);
	    },
	    flashCard: function flashCard() {
	      var _this2 = this;

	      clearTimeout(this.timeout);
	      this.flash = true;
	      this.timeout = setTimeout(function () {
	        _this2.flash = false;
	      }, 200);
	    },
	    flashDull: function flashDull() {
	      var _this3 = this;

	      this.dull = true;
	      setTimeout(function () {
	        _this3.dull = false;
	      }, 200);
	    }
	  }
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var updateHash = function updateHash(_ref) {
	  var general = _ref.general;
	  var cards = _ref.cards;

	  if (!general || !cards) return;

	  var hash = [];
	  hash.push('1:' + general.id);
	  cards.forEach(function (card) {
	    hash.push(card.qty + ':' + card.id);
	  });
	  window.location.hash = btoa(hash.join(','));
	};

	exports.default = updateHash;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "card-container"
	  }, [_h('div', {
	    class: ['game-card', card.type, {
	      'disabled': inDeck === 'X 3',
	      'flash': flash,
	      'dull': dull
	    }],
	    on: {
	      "click": function($event) {
	        selectCard(card)
	      },
	      "contextmenu": function($event) {
	        $event.preventDefault();
	        removeCard(card)
	      }
	    }
	  }, [_h('div', {
	    class: ['sprite', spriteClass]
	  }), " ", _h('div', {
	    directives: [{
	      name: "show",
	      value: (card.type !== 'general'),
	      expression: "card.type !== 'general'"
	    }],
	    staticClass: "cost"
	  }, [_s(card.cost)]), " ", _h('div', {
	    staticClass: "name"
	  }, [_s(card.name)]), " ", _h('div', {
	    staticClass: "type",
	    class: card.type
	  }, [_s(card.race || card.type)]), " ", _h('div', {
	    staticClass: "rarity",
	    class: [card.rarity]
	  }), " ", (card.attack || card.attack >= 0) ? _h('div', {
	    staticClass: "attack"
	  }, [_s(card.attack)]) : _e(), " ", (card.health) ? _h('div', {
	    staticClass: "health"
	  }, [_s(card.health)]) : _e(), " ", _h('div', {
	    staticClass: "text",
	    domProps: {
	      "innerHTML": _s(card.text)
	    }
	  }), " ", _h('div', {
	    staticClass: "qty"
	  }, [_s(inDeck)])])])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-6", module.exports)
	  }
	}

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* styles */
	__webpack_require__(28)

	/* script */
	__vue_exports__ = __webpack_require__(30)

	/* template */
	var __vue_template__ = __webpack_require__(31)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-8", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-8", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] GeneralCard.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(29);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-8!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./GeneralCard.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-8!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./GeneralCard.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, "/* Vendor */\n/* Partials */\n/*\r\n    https://jdsteinbach.com/css//sass-maps-breakpoint-mixin/\r\n\r\n    Usage:\r\n    @include breakpoint(md) {\r\n        ...\r\n    }\r\n*/\n", ""]);

	// exports


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _updateHash = __webpack_require__(25);

	var _updateHash2 = _interopRequireDefault(_updateHash);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  props: ['card'],

	  data: function data() {
	    return {
	      flash: false,
	      dull: false,
	      timeout: null
	    };
	  },


	  computed: {
	    inDeck: function inDeck() {
	      if (this.$store.state.deck.general) return this.$store.state.deck.general.id === this.card.id;
	    },
	    spriteClass: function spriteClass() {
	      return this.card.type + ' ' + this.card.type + '-sprite ' + this.card.type + '-' + this.card.id;
	    }
	  },

	  methods: {
	    selectCard: function selectCard(card) {
	      if (this.inDeck) return;

	      this.flashCard();
	      this.$store.dispatch('selectGeneral', card);
	      (0, _updateHash2.default)(this.$store.state.deck);
	    },
	    flashCard: function flashCard() {
	      var _this = this;

	      clearTimeout(this.timeout);
	      this.flash = true;
	      this.timeout = setTimeout(function () {
	        _this.flash = false;
	      }, 200);
	    }
	  }
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "card-container"
	  }, [_h('div', {
	    class: ['game-card', card.type, {
	      'disabled': inDeck,
	      'flash': flash,
	      'dull': dull
	    }],
	    on: {
	      "click": function($event) {
	        selectCard(card)
	      },
	      "contextmenu": function($event) {
	        $event.preventDefault();
	      }
	    }
	  }, [_h('div', {
	    class: ['sprite', spriteClass]
	  }), " ", _h('div', {
	    directives: [{
	      name: "show",
	      value: (card.type !== 'general'),
	      expression: "card.type !== 'general'"
	    }],
	    staticClass: "cost"
	  }, [_s(card.cost)]), " ", _h('div', {
	    staticClass: "name"
	  }, [_s(card.name)]), " ", _h('div', {
	    staticClass: "type",
	    class: card.type
	  }, [_s(card.race || card.type)]), " ", _h('div', {
	    staticClass: "rarity",
	    class: [card.rarity]
	  }), " ", (card.attack) ? _h('div', {
	    staticClass: "attack"
	  }, [_s(card.attack)]) : _e(), " ", (card.health) ? _h('div', {
	    staticClass: "health"
	  }, [_s(card.health)]) : _e(), " ", _h('div', {
	    staticClass: "text",
	    domProps: {
	      "innerHTML": _s(card.text)
	    }
	  }), " ", _h('div', {
	    staticClass: "qty"
	  }, [_s(inDeck ? 'X 1' : '')])])])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-8", module.exports)
	  }
	}

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* styles */
	__webpack_require__(33)

	/* script */
	__vue_exports__ = __webpack_require__(35)

	/* template */
	var __vue_template__ = __webpack_require__(128)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-7", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-7", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] DeckList.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(34);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-7!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DeckList.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-7!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DeckList.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, "\n@charset \"UTF-8\";\n/* Vendor */\n/* Partials */\n/*\r\n    https://jdsteinbach.com/css//sass-maps-breakpoint-mixin/\r\n\r\n    Usage:\r\n    @include breakpoint(md) {\r\n        ...\r\n    }\r\n*/\n.save-deck {\n  margin-top: 15px;\n}\n.save-deck::before {\n    font-family: 'Material Icons';\n    content: \"\\E2C4\";\n}\n", ""]);

	// exports


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _regenerator = __webpack_require__(36);

	var _regenerator2 = _interopRequireDefault(_regenerator);

	var _asyncToGenerator2 = __webpack_require__(39);

	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

	var _ManaCurve = __webpack_require__(105);

	var _ManaCurve2 = _interopRequireDefault(_ManaCurve);

	var _DeckCounts = __webpack_require__(110);

	var _DeckCounts2 = _interopRequireDefault(_DeckCounts);

	var _DeckGeneral = __webpack_require__(115);

	var _DeckGeneral2 = _interopRequireDefault(_DeckGeneral);

	var _DeckCard = __webpack_require__(120);

	var _DeckCard2 = _interopRequireDefault(_DeckCard);

	var _domToImage = __webpack_require__(125);

	var _domToImage2 = _interopRequireDefault(_domToImage);

	var _lodash = __webpack_require__(126);

	var _lodash2 = _interopRequireDefault(_lodash);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  data: function data() {
	    return {
	      saving: false
	    };
	  },


	  computed: {
	    cardList: function cardList() {
	      return (0, _lodash2.default)(this.$store.state.deck.cards, ['cost', 'name']);
	    }
	  },

	  methods: {
	    save: function save() {
	      var _this = this;

	      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
	        var dataUrl, link;
	        return _regenerator2.default.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                _this.saving = true;
	                _context.next = 3;
	                return _domToImage2.default.toJpeg(_this.$refs.test);

	              case 3:
	                dataUrl = _context.sent;
	                link = document.createElement('a');

	                link.download = _this.$store.state.route.params.faction + '-deck.jpeg';
	                link.href = dataUrl;
	                link.click();
	                _this.saving = false;

	              case 9:
	              case 'end':
	                return _context.stop();
	            }
	          }
	        }, _callee, _this);
	      }))();
	    }
	  },

	  components: {
	    ManaCurve: _ManaCurve2.default,
	    DeckCounts: _DeckCounts2.default,
	    DeckGeneral: _DeckGeneral2.default,
	    DeckCard: _DeckCard2.default
	  }
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(37);


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {// This method of obtaining a reference to the global object needs to be
	// kept identical to the way it is obtained in runtime.js
	var g =
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this;

	// Use `getOwnPropertyNames` because not all browsers support calling
	// `hasOwnProperty` on the global `self` object in a worker. See #183.
	var hadRuntime = g.regeneratorRuntime &&
	  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

	// Save the old regeneratorRuntime in case it needs to be restored later.
	var oldRuntime = hadRuntime && g.regeneratorRuntime;

	// Force reevalutation of runtime.js.
	g.regeneratorRuntime = undefined;

	module.exports = __webpack_require__(38);

	if (hadRuntime) {
	  // Restore the original runtime.
	  g.regeneratorRuntime = oldRuntime;
	} else {
	  // Remove the global property added by runtime.js.
	  try {
	    delete g.regeneratorRuntime;
	  } catch(e) {
	    g.regeneratorRuntime = undefined;
	  }
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */

	!(function(global) {
	  "use strict";

	  var hasOwn = Object.prototype.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }

	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided, then outerFn.prototype instanceof Generator.
	    var generator = Object.create((outerFn || Generator).prototype);
	    var context = new Context(tryLocsList || []);

	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);

	    return generator;
	  }
	  runtime.wrap = wrap;

	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }

	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";

	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};

	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}

	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";

	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }

	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };

	  runtime.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };

	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `value instanceof AwaitArgument` to determine if the yielded value is
	  // meant to be awaited. Some may consider the name of this method too
	  // cutesy, but they are curmudgeons.
	  runtime.awrap = function(arg) {
	    return new AwaitArgument(arg);
	  };

	  function AwaitArgument(arg) {
	    this.arg = arg;
	  }

	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value instanceof AwaitArgument) {
	          return Promise.resolve(value.arg).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }

	        return Promise.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }

	    if (typeof process === "object" && process.domain) {
	      invoke = process.domain.bind(invoke);
	    }

	    var previousPromise;

	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }

	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }

	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }

	  defineIteratorMethods(AsyncIterator.prototype);

	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );

	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };

	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;

	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }

	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }

	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }

	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          if (method === "return" ||
	              (method === "throw" && delegate.iterator[method] === undefined)) {
	            // A return or throw (when the delegate iterator has no throw
	            // method) always terminates the yield* loop.
	            context.delegate = null;

	            // If the delegate iterator has a return method, give it a
	            // chance to clean up.
	            var returnMethod = delegate.iterator["return"];
	            if (returnMethod) {
	              var record = tryCatch(returnMethod, delegate.iterator, arg);
	              if (record.type === "throw") {
	                // If the return method threw an exception, let that
	                // exception prevail over the original return or throw.
	                method = "throw";
	                arg = record.arg;
	                continue;
	              }
	            }

	            if (method === "return") {
	              // Continue with the outer return, now that the delegate
	              // iterator has been terminated.
	              continue;
	            }
	          }

	          var record = tryCatch(
	            delegate.iterator[method],
	            delegate.iterator,
	            arg
	          );

	          if (record.type === "throw") {
	            context.delegate = null;

	            // Like returning generator.throw(uncaught), but without the
	            // overhead of an extra function call.
	            method = "throw";
	            arg = record.arg;
	            continue;
	          }

	          // Delegate generator ran and handled its own exceptions so
	          // regardless of what the method was, we continue as if it is
	          // "next" with an undefined arg.
	          method = "next";
	          arg = undefined;

	          var info = record.arg;
	          if (info.done) {
	            context[delegate.resultName] = info.value;
	            context.next = delegate.nextLoc;
	          } else {
	            state = GenStateSuspendedYield;
	            return info;
	          }

	          context.delegate = null;
	        }

	        if (method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = arg;

	        } else if (method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw arg;
	          }

	          if (context.dispatchException(arg)) {
	            // If the dispatched exception was caught by a catch block,
	            // then let that catch block handle the exception normally.
	            method = "next";
	            arg = undefined;
	          }

	        } else if (method === "return") {
	          context.abrupt("return", arg);
	        }

	        state = GenStateExecuting;

	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;

	          var info = {
	            value: record.arg,
	            done: context.done
	          };

	          if (record.arg === ContinueSentinel) {
	            if (context.delegate && method === "next") {
	              // Deliberately forget the last sent value so that we don't
	              // accidentally pass it on to the delegate.
	              arg = undefined;
	            }
	          } else {
	            return info;
	          }

	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(arg) call above.
	          method = "throw";
	          arg = record.arg;
	        }
	      }
	    };
	  }

	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);

	  Gp[iteratorSymbol] = function() {
	    return this;
	  };

	  Gp[toStringTagSymbol] = "Generator";

	  Gp.toString = function() {
	    return "[object Generator]";
	  };

	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };

	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }

	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }

	    this.tryEntries.push(entry);
	  }

	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }

	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }

	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();

	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }

	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };

	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }

	      if (typeof iterable.next === "function") {
	        return iterable;
	      }

	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }

	          next.value = undefined;
	          next.done = true;

	          return next;
	        };

	        return next.next = next;
	      }
	    }

	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;

	  function doneResult() {
	    return { value: undefined, done: true };
	  }

	  Context.prototype = {
	    constructor: Context,

	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined;
	      this.done = false;
	      this.delegate = null;

	      this.tryEntries.forEach(resetTryEntry);

	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },

	    stop: function() {
	      this.done = true;

	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }

	      return this.rval;
	    },

	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }

	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	        return !!caught;
	      }

	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;

	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }

	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");

	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }

	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },

	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }

	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }

	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;

	      if (finallyEntry) {
	        this.next = finallyEntry.finallyLoc;
	      } else {
	        this.complete(record);
	      }

	      return ContinueSentinel;
	    },

	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }

	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = record.arg;
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	    },

	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },

	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }

	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },

	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };

	      return ContinueSentinel;
	    }
	  };
	})(
	  // Among the various tricks for obtaining a reference to the global
	  // object, this seems to be the most reliable technique that does not
	  // use indirect eval (which violates Content Security Policy).
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this
	);

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(2)))

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _promise = __webpack_require__(40);

	var _promise2 = _interopRequireDefault(_promise);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (fn) {
	  return function () {
	    var gen = fn.apply(this, arguments);
	    return new _promise2.default(function (resolve, reject) {
	      function step(key, arg) {
	        try {
	          var info = gen[key](arg);
	          var value = info.value;
	        } catch (error) {
	          reject(error);
	          return;
	        }

	        if (info.done) {
	          resolve(value);
	        } else {
	          return _promise2.default.resolve(value).then(function (value) {
	            return step("next", value);
	          }, function (err) {
	            return step("throw", err);
	          });
	        }
	      }

	      return step("next");
	    });
	  };
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(41), __esModule: true };

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(42);
	__webpack_require__(43);
	__webpack_require__(87);
	__webpack_require__(91);
	module.exports = __webpack_require__(51).Promise;

/***/ },
/* 42 */
/***/ function(module, exports) {

	

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(44)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(47)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(45)
	  , defined   = __webpack_require__(46);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 45 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 46 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(48)
	  , $export        = __webpack_require__(49)
	  , redefine       = __webpack_require__(64)
	  , hide           = __webpack_require__(54)
	  , has            = __webpack_require__(65)
	  , Iterators      = __webpack_require__(66)
	  , $iterCreate    = __webpack_require__(67)
	  , setToStringTag = __webpack_require__(83)
	  , getPrototypeOf = __webpack_require__(85)
	  , ITERATOR       = __webpack_require__(84)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(50)
	  , core      = __webpack_require__(51)
	  , ctx       = __webpack_require__(52)
	  , hide      = __webpack_require__(54)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 50 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 51 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(53);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 53 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(55)
	  , createDesc = __webpack_require__(63);
	module.exports = __webpack_require__(59) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(56)
	  , IE8_DOM_DEFINE = __webpack_require__(58)
	  , toPrimitive    = __webpack_require__(62)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(59) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(57);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 57 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(59) && !__webpack_require__(60)(function(){
	  return Object.defineProperty(__webpack_require__(61)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(60)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(57)
	  , document = __webpack_require__(50).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(57);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 63 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(54);

/***/ },
/* 65 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 66 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(68)
	  , descriptor     = __webpack_require__(63)
	  , setToStringTag = __webpack_require__(83)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(54)(IteratorPrototype, __webpack_require__(84)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(56)
	  , dPs         = __webpack_require__(69)
	  , enumBugKeys = __webpack_require__(81)
	  , IE_PROTO    = __webpack_require__(78)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(61)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(82).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(55)
	  , anObject = __webpack_require__(56)
	  , getKeys  = __webpack_require__(70);

	module.exports = __webpack_require__(59) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(71)
	  , enumBugKeys = __webpack_require__(81);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(65)
	  , toIObject    = __webpack_require__(72)
	  , arrayIndexOf = __webpack_require__(75)(false)
	  , IE_PROTO     = __webpack_require__(78)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(73)
	  , defined = __webpack_require__(46);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(74);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 74 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(72)
	  , toLength  = __webpack_require__(76)
	  , toIndex   = __webpack_require__(77);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(45)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(45)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(79)('keys')
	  , uid    = __webpack_require__(80);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(50)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 80 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 81 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(50).document && document.documentElement;

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(55).f
	  , has = __webpack_require__(65)
	  , TAG = __webpack_require__(84)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(79)('wks')
	  , uid        = __webpack_require__(80)
	  , Symbol     = __webpack_require__(50).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(65)
	  , toObject    = __webpack_require__(86)
	  , IE_PROTO    = __webpack_require__(78)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(46);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(88);
	var global        = __webpack_require__(50)
	  , hide          = __webpack_require__(54)
	  , Iterators     = __webpack_require__(66)
	  , TO_STRING_TAG = __webpack_require__(84)('toStringTag');

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(89)
	  , step             = __webpack_require__(90)
	  , Iterators        = __webpack_require__(66)
	  , toIObject        = __webpack_require__(72);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(47)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 89 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 90 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY            = __webpack_require__(48)
	  , global             = __webpack_require__(50)
	  , ctx                = __webpack_require__(52)
	  , classof            = __webpack_require__(92)
	  , $export            = __webpack_require__(49)
	  , isObject           = __webpack_require__(57)
	  , aFunction          = __webpack_require__(53)
	  , anInstance         = __webpack_require__(93)
	  , forOf              = __webpack_require__(94)
	  , speciesConstructor = __webpack_require__(98)
	  , task               = __webpack_require__(99).set
	  , microtask          = __webpack_require__(101)()
	  , PROMISE            = 'Promise'
	  , TypeError          = global.TypeError
	  , process            = global.process
	  , $Promise           = global[PROMISE]
	  , process            = global.process
	  , isNode             = classof(process) == 'process'
	  , empty              = function(){ /* empty */ }
	  , Internal, GenericPromiseCapability, Wrapper;

	var USE_NATIVE = !!function(){
	  try {
	    // correct subclassing with @@species support
	    var promise     = $Promise.resolve(1)
	      , FakePromise = (promise.constructor = {})[__webpack_require__(84)('species')] = function(exec){ exec(empty, empty); };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch(e){ /* empty */ }
	}();

	// helpers
	var sameConstructor = function(a, b){
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function(C){
	  return sameConstructor($Promise, C)
	    ? new PromiseCapability(C)
	    : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject  = aFunction(reject);
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(promise, isReject){
	  if(promise._n)return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function(){
	    var value = promise._v
	      , ok    = promise._s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , domain  = reaction.domain
	        , result, then;
	      try {
	        if(handler){
	          if(!ok){
	            if(promise._h == 2)onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if(handler === true)result = value;
	          else {
	            if(domain)domain.enter();
	            result = handler(value);
	            if(domain)domain.exit();
	          }
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if(isReject && !promise._h)onUnhandled(promise);
	  });
	};
	var onUnhandled = function(promise){
	  task.call(global, function(){
	    var value = promise._v
	      , abrupt, handler, console;
	    if(isUnhandled(promise)){
	      abrupt = perform(function(){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if(abrupt)throw abrupt.error;
	  });
	};
	var isUnhandled = function(promise){
	  if(promise._h == 1)return false;
	  var chain = promise._a || promise._c
	    , i     = 0
	    , reaction;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var onHandleUnhandled = function(promise){
	  task.call(global, function(){
	    var handler;
	    if(isNode){
	      process.emit('rejectionHandled', promise);
	    } else if(handler = global.onrejectionhandled){
	      handler({promise: promise, reason: promise._v});
	    }
	  });
	};
	var $reject = function(value){
	  var promise = this;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if(!promise._a)promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function(value){
	  var promise = this
	    , then;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if(promise === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      microtask(function(){
	        var wrapper = {_w: promise, _d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch(e){
	    $reject.call({_w: promise, _d: false}, e); // wrap
	  }
	};

	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor){
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch(err){
	      $reject.call(this, err);
	    }
	  };
	  Internal = function Promise(executor){
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(102)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail   = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if(this._a)this._a.push(reaction);
	      if(this._s)notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	  PromiseCapability = function(){
	    var promise  = new Internal;
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject  = ctx($reject, promise, 1);
	  };
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
	__webpack_require__(83)($Promise, PROMISE);
	__webpack_require__(103)(PROMISE);
	Wrapper = __webpack_require__(51)[PROMISE];

	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = newPromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
	    var capability = newPromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(104)(function(iter){
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      var values    = []
	        , index     = 0
	        , remaining = 1;
	      forOf(iterable, false, function(promise){
	        var $index        = index++
	          , alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled  = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(74)
	  , TAG = __webpack_require__(84)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 93 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(52)
	  , call        = __webpack_require__(95)
	  , isArrayIter = __webpack_require__(96)
	  , anObject    = __webpack_require__(56)
	  , toLength    = __webpack_require__(76)
	  , getIterFn   = __webpack_require__(97)
	  , BREAK       = {}
	  , RETURN      = {};
	var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator, result;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if(result === BREAK || result === RETURN)return result;
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    result = call(iterator, f, step.value, entries);
	    if(result === BREAK || result === RETURN)return result;
	  }
	};
	exports.BREAK  = BREAK;
	exports.RETURN = RETURN;

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(56);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(66)
	  , ITERATOR   = __webpack_require__(84)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(92)
	  , ITERATOR  = __webpack_require__(84)('iterator')
	  , Iterators = __webpack_require__(66);
	module.exports = __webpack_require__(51).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(56)
	  , aFunction = __webpack_require__(53)
	  , SPECIES   = __webpack_require__(84)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(52)
	  , invoke             = __webpack_require__(100)
	  , html               = __webpack_require__(82)
	  , cel                = __webpack_require__(61)
	  , global             = __webpack_require__(50)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(74)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 100 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(50)
	  , macrotask = __webpack_require__(99).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(74)(process) == 'process';

	module.exports = function(){
	  var head, last, notify;

	  var flush = function(){
	    var parent, fn;
	    if(isNode && (parent = process.domain))parent.exit();
	    while(head){
	      fn   = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch(e){
	        if(head)notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if(parent)parent.enter();
	  };

	  // Node.js
	  if(isNode){
	    notify = function(){
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver
	  } else if(Observer){
	    var toggle = true
	      , node   = document.createTextNode('');
	    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	    notify = function(){
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if(Promise && Promise.resolve){
	    var promise = Promise.resolve();
	    notify = function(){
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function(){
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }

	  return function(fn){
	    var task = {fn: fn, next: undefined};
	    if(last)last.next = task;
	    if(!head){
	      head = task;
	      notify();
	    } last = task;
	  };
	};

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	var hide = __webpack_require__(54);
	module.exports = function(target, src, safe){
	  for(var key in src){
	    if(safe && target[key])target[key] = src[key];
	    else hide(target, key, src[key]);
	  } return target;
	};

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(50)
	  , core        = __webpack_require__(51)
	  , dP          = __webpack_require__(55)
	  , DESCRIPTORS = __webpack_require__(59)
	  , SPECIES     = __webpack_require__(84)('species');

	module.exports = function(KEY){
	  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(84)('iterator')
	  , SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }

	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* styles */
	__webpack_require__(106)

	/* script */
	__vue_exports__ = __webpack_require__(108)

	/* template */
	var __vue_template__ = __webpack_require__(109)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-15", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-15", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] ManaCurve.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(107);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-15!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ManaCurve.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-15!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ManaCurve.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, "/* Vendor */\n/* Partials */\n/*\r\n    https://jdsteinbach.com/css//sass-maps-breakpoint-mixin/\r\n\r\n    Usage:\r\n    @include breakpoint(md) {\r\n        ...\r\n    }\r\n*/\n.mana-curve {\n  position: relative;\n}\n.card-counts {\n  height: 70px;\n  position: relative;\n}\n.card-counts > .mana {\n    width: 10%;\n    display: inline-block;\n}\n.card-counts > .mana > .bar {\n      background: #01d6f3;\n      position: absolute;\n      bottom: 2px;\n      width: calc(10% - 2px);\n      transition: all .3s ease-out;\n}\n.card-counts > .mana > .bar > .count {\n        text-align: center;\n        margin-top: -25px;\n        font-size: .9rem;\n}\n.mana-numbers {\n  border-top: 1px solid #01d6f3;\n  border-bottom: 1px solid #01d6f3;\n  width: 100%;\n}\n.mana-numbers:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n.mana-numbers > .number {\n    width: 10%;\n    display: inline-block;\n    text-align: center;\n    font-size: .8rem;\n    float: left;\n    padding-top: 2px;\n}\n", ""]);

	// exports


/***/ },
/* 108 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  methods: {
	    percentage: function percentage(value, highestValue) {
	      return value > 0 ? (value / highestValue * 100).toFixed(0) : 0;
	    }
	  },

	  computed: {
	    totalCards: function totalCards() {
	      return this.$store.state.deck.totalCards;
	    },
	    curve: function curve() {
	      var arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	      this.$store.state.deck.cards.forEach(function (card) {
	        card.cost > 8 ? arr[9] += card.qty : arr[card.cost] += card.qty;
	      });

	      return arr;
	    },
	    highestValue: function highestValue() {
	      return Math.max.apply(Math, this.curve);
	    }
	  }
	};

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "mana-curve"
	  }, [_h('div', {
	    staticClass: "card-counts"
	  }, [(curve) && _l((curve), function(item) {
	    return _h('span', {
	      staticClass: "mana"
	    }, [_h('div', {
	      staticClass: "bar",
	      style: ({
	        height: ((percentage(item, highestValue)) + "%")
	      })
	    }, [_h('div', {
	      directives: [{
	        name: "show",
	        value: (item > 0),
	        expression: "item > 0"
	      }],
	      staticClass: "count"
	    }, [_s(item)])])])
	  })]), " ", _m(0)])
	}},staticRenderFns: [function (){with(this) {
	  return _h('div', {
	    staticClass: "mana-numbers"
	  }, [_h('span', {
	    staticClass: "number"
	  }, ["0"]), " ", _h('span', {
	    staticClass: "number"
	  }, ["1"]), " ", _h('span', {
	    staticClass: "number"
	  }, ["2"]), " ", _h('span', {
	    staticClass: "number"
	  }, ["3"]), " ", _h('span', {
	    staticClass: "number"
	  }, ["4"]), " ", _h('span', {
	    staticClass: "number"
	  }, ["5"]), " ", _h('span', {
	    staticClass: "number"
	  }, ["6"]), " ", _h('span', {
	    staticClass: "number"
	  }, ["7"]), " ", _h('span', {
	    staticClass: "number"
	  }, ["8"]), " ", _h('span', {
	    staticClass: "number"
	  }, ["9"])])
	}}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-15", module.exports)
	  }
	}

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* styles */
	__webpack_require__(111)

	/* script */
	__vue_exports__ = __webpack_require__(113)

	/* template */
	var __vue_template__ = __webpack_require__(114)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-16", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-16", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] DeckCounts.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(112);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-16!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DeckCounts.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-16!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DeckCounts.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, "/* Vendor */\n/* Partials */\n/*\r\n    https://jdsteinbach.com/css//sass-maps-breakpoint-mixin/\r\n\r\n    Usage:\r\n    @include breakpoint(md) {\r\n        ...\r\n    }\r\n*/\n.deck-counts > .count {\n  width: 32%;\n  text-align: center;\n  display: inline-block;\n  font-size: .9rem;\n  margin-top: 8px;\n}\n", ""]);

	// exports


/***/ },
/* 113 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  computed: {
	    minionCount: function minionCount() {
	      return this.$store.state.deck.cards.filter(function (card) {
	        return !['spell', 'artifact'].includes(card.type);
	      }).reduce(function (prev, curr) {
	        return prev + curr.qty;
	      }, 0);
	    },
	    spellCount: function spellCount() {
	      return this.$store.state.deck.cards.filter(function (card) {
	        return card.type === 'spell';
	      }).reduce(function (prev, curr) {
	        return prev + curr.qty;
	      }, 0);
	    },
	    artifactCount: function artifactCount() {
	      return this.$store.state.deck.cards.filter(function (card) {
	        return card.type === 'artifact';
	      }).reduce(function (prev, curr) {
	        return prev + curr.qty;
	      }, 0);
	    }
	  }
	};

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "deck-counts"
	  }, [_h('span', {
	    staticClass: "count"
	  }, ["\n    " + _s(minionCount) + " Minon", (minionCount !== 1) ? ["s"] : _e()]), " ", _h('span', {
	    staticClass: "count"
	  }, ["\n    " + _s(spellCount) + " Spell", (spellCount !== 1) ? ["s"] : _e()]), " ", _h('span', {
	    staticClass: "count"
	  }, ["\n    " + _s(artifactCount) + " Artifact", (artifactCount !== 1) ? ["s"] : _e()])])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-16", module.exports)
	  }
	}

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* styles */
	__webpack_require__(116)

	/* script */
	__vue_exports__ = __webpack_require__(118)

	/* template */
	var __vue_template__ = __webpack_require__(119)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-17", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-17", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] DeckGeneral.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(117);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-17!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DeckGeneral.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-17!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DeckGeneral.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, "/* Vendor */\n/* Partials */\n/*\r\n    https://jdsteinbach.com/css//sass-maps-breakpoint-mixin/\r\n\r\n    Usage:\r\n    @include breakpoint(md) {\r\n        ...\r\n    }\r\n*/\n.deck-general {\n  text-align: right;\n  position: relative;\n  height: 110px;\n}\n.deck-general > .general {\n    top: -40px;\n    left: -20px;\n}\n.deck-general > .cards {\n    padding-top: 15px;\n}\n.deck-general > .cards > b, .deck-general > .spirit > b {\n    color: #01d6f3;\n}\n.deck-general > .name {\n    font-size: 1.1rem;\n    text-transform: uppercase;\n    position: absolute;\n    bottom: 0;\n    left: 120px;\n}\n", ""]);

	// exports


/***/ },
/* 118 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  computed: {
	    spriteClass: function spriteClass() {
	      var general = this.$store.state.deck.general;
	      if (general) return "sprite " + general.type + "-md " + general.type + "-sprite " + general.type + "-" + general.id;
	    }
	  }
	};

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "deck-general"
	  }, [_h('div', {
	    staticClass: "cards"
	  }, [_h('b', [_s($store.state.deck.totalCards) + " / 40"]), " cards"]), " ", _h('div', {
	    staticClass: "spirit"
	  }, [_h('b', [_s($store.state.deck.spirit)]), " spirit"]), " ", ($store.state.deck.general) ? _h('div', {
	    staticClass: "name"
	  }, [_s($store.state.deck.general.name)]) : _e(), " ", _h('div', {
	    class: spriteClass
	  })])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-17", module.exports)
	  }
	}

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* styles */
	__webpack_require__(121)

	/* script */
	__vue_exports__ = __webpack_require__(123)

	/* template */
	var __vue_template__ = __webpack_require__(124)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-18", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-18", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] DeckCard.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(122);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-18!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DeckCard.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-18!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DeckCard.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, "/* Vendor */\n/* Partials */\n/*\r\n    https://jdsteinbach.com/css//sass-maps-breakpoint-mixin/\r\n\r\n    Usage:\r\n    @include breakpoint(md) {\r\n        ...\r\n    }\r\n*/\n.deck-card {\n  background: #104365;\n  height: 44px;\n  margin: 3px 0;\n  position: relative;\n}\n.deck-card > .cost {\n    line-height: 63px;\n    text-align: center;\n    font-weight: bold;\n    width: 57px;\n    height: 63px;\n    background-image: url(https://dl.dropboxusercontent.com/u/24984522/icon_mana.png);\n    position: absolute;\n    top: -10px;\n    left: -10px;\n    transform: scale(0.75);\n    color: #222222;\n    z-index: 4;\n}\n.deck-card > .name {\n    line-height: 44px;\n    text-indent: 45px;\n}\n.deck-card::before, .deck-card::after {\n    position: absolute;\n    content: '';\n    bottom: 0;\n    border-style: solid;\n}\n.deck-card::before {\n    left: 0;\n    border-width: 0 22px 22px 0;\n    border-color: #0b1c27 #104365;\n}\n.deck-card::after {\n    left: 0;\n    top: 0;\n    height: 22px;\n    border-width: 22px 22px 0 0;\n    border-color: #0b1c27 #104365;\n}\n", ""]);

	// exports


/***/ },
/* 123 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: ['card'],

	  data: function data() {
	    return {
	      flash: false,
	      dull: false
	    };
	  },


	  computed: {
	    spriteClass: function spriteClass() {
	      return 'sprite ' + this.card.type + '-sm ' + this.card.faction + '-sprite ' + this.card.faction + '-' + this.card.id;
	    }
	  },

	  methods: {
	    selectCard: function selectCard(card) {
	      var _this = this;

	      this.flash = true;
	      this.timeout = setTimeout(function () {
	        _this.flash = false;
	      }, 200);
	      this.$store.dispatch('selectCard', { card: card, qty: 1 });
	    },
	    removeCard: function removeCard(card) {
	      this.$store.dispatch('removeCard', card);
	    }
	  }
	};

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    class: ['deck-card', {
	      'flash': flash,
	      'dull': dull
	    }],
	    on: {
	      "click": function($event) {
	        selectCard(card)
	      },
	      "contextmenu": function($event) {
	        $event.preventDefault();
	        removeCard(card)
	      }
	    }
	  }, [_h('div', {
	    staticClass: "cost"
	  }, [_s(card.cost)]), " ", _h('div', {
	    staticClass: "name"
	  }, [_s(card.name) + " x" + _s(card.qty)]), " ", _h('div', {
	    class: spriteClass
	  })])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-18", module.exports)
	  }
	}

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	(function (global) {
	    'use strict';

	    var util = newUtil();
	    var inliner = newInliner();
	    var fontFaces = newFontFaces();
	    var images = newImages();

	    var domtoimage = {
	        toSvg: toSvg,
	        toPng: toPng,
	        toJpeg: toJpeg,
	        toBlob: toBlob,
	        toPixelData: toPixelData,
	        impl: {
	            fontFaces: fontFaces,
	            images: images,
	            util: util,
	            inliner: inliner
	        }
	    };

	    if (true)
	        module.exports = domtoimage;
	    else
	        global.domtoimage = domtoimage;


	    /**
	     * @param {Node} node - The DOM Node object to render
	     * @param {Object} options - Rendering options
	     * @param {Function} options.filter - Should return true if passed node should be included in the output
	     *          (excluding node means excluding it's children as well). Not called on the root node.
	     * @param {String} options.bgcolor - color for the background, any valid CSS color value.
	     * @param {Number} options.width - width to be applied to node before rendering.
	     * @param {Number} options.height - height to be applied to node before rendering.
	     * @param {Object} options.style - an object whose properties to be copied to node's style before rendering.
	     * @param {Number} options.quality - a Number between 0 and 1 indicating image quality (applicable to JPEG only),
	                defaults to 1.0.
	     * @return {Promise} - A promise that is fulfilled with a SVG image data URL
	     * */
	    function toSvg(node, options) {
	        options = options || {};
	        return Promise.resolve(node)
	            .then(function (node) {
	                return cloneNode(node, options.filter, true);
	            })
	            .then(embedFonts)
	            .then(inlineImages)
	            .then(applyOptions)
	            .then(function (clone) {
	                return makeSvgDataUri(clone,
	                    options.width || util.width(node),
	                    options.height || util.height(node)
	                );
	            });

	        function applyOptions(clone) {
	            if (options.bgcolor) clone.style.backgroundColor = options.bgcolor;

	            if (options.width) clone.style.width = options.width + 'px';
	            if (options.height) clone.style.height = options.height + 'px';

	            if (options.style)
	                Object.keys(options.style).forEach(function (property) {
	                    clone.style[property] = options.style[property];
	                });

	            return clone;
	        }
	    }

	    /**
	     * @param {Node} node - The DOM Node object to render
	     * @param {Object} options - Rendering options, @see {@link toSvg}
	     * @return {Promise} - A promise that is fulfilled with a Uint8Array containing RGBA pixel data.
	     * */
	    function toPixelData(node, options) {
	        return draw(node, options || {})
	            .then(function (canvas) {
	                return canvas.getContext('2d').getImageData(
	                    0,
	                    0,
	                    util.width(node),
	                    util.height(node)
	                ).data;
	            });
	    }

	    /**
	     * @param {Node} node - The DOM Node object to render
	     * @param {Object} options - Rendering options, @see {@link toSvg}
	     * @return {Promise} - A promise that is fulfilled with a PNG image data URL
	     * */
	    function toPng(node, options) {
	        return draw(node, options || {})
	            .then(function (canvas) {
	                return canvas.toDataURL();
	            });
	    }

	    /**
	     * @param {Node} node - The DOM Node object to render
	     * @param {Object} options - Rendering options, @see {@link toSvg}
	     * @return {Promise} - A promise that is fulfilled with a JPEG image data URL
	     * */
	    function toJpeg(node, options) {
	        options = options || {};
	        return draw(node, options)
	            .then(function (canvas) {
	                return canvas.toDataURL('image/jpeg', options.quality || 1.0);
	            });
	    }

	    /**
	     * @param {Node} node - The DOM Node object to render
	     * @param {Object} options - Rendering options, @see {@link toSvg}
	     * @return {Promise} - A promise that is fulfilled with a PNG image blob
	     * */
	    function toBlob(node, options) {
	        return draw(node, options || {})
	            .then(util.canvasToBlob);
	    }

	    function draw(domNode, options) {
	        return toSvg(domNode, options)
	            .then(util.makeImage)
	            .then(util.delay(100))
	            .then(function (image) {
	                var canvas = newCanvas(domNode);
	                canvas.getContext('2d').drawImage(image, 0, 0);
	                return canvas;
	            });

	        function newCanvas(domNode) {
	            var canvas = document.createElement('canvas');
	            canvas.width = options.width || util.width(domNode);
	            canvas.height = options.height || util.height(domNode);

	            if (options.bgcolor) {
	                var ctx = canvas.getContext('2d');
	                ctx.fillStyle = options.bgcolor;
	                ctx.fillRect(0, 0, canvas.width, canvas.height);
	            }

	            return canvas;
	        }
	    }

	    function cloneNode(node, filter, root) {
	        if (!root && filter && !filter(node)) return Promise.resolve();

	        return Promise.resolve(node)
	            .then(makeNodeCopy)
	            .then(function (clone) {
	                return cloneChildren(node, clone, filter);
	            })
	            .then(function (clone) {
	                return processClone(node, clone);
	            });

	        function makeNodeCopy(node) {
	            if (node instanceof HTMLCanvasElement) return util.makeImage(node.toDataURL());
	            return node.cloneNode(false);
	        }

	        function cloneChildren(original, clone, filter) {
	            var children = original.childNodes;
	            if (children.length === 0) return Promise.resolve(clone);

	            return cloneChildrenInOrder(clone, util.asArray(children), filter)
	                .then(function () {
	                    return clone;
	                });

	            function cloneChildrenInOrder(parent, children, filter) {
	                var done = Promise.resolve();
	                children.forEach(function (child) {
	                    done = done
	                        .then(function () {
	                            return cloneNode(child, filter);
	                        })
	                        .then(function (childClone) {
	                            if (childClone) parent.appendChild(childClone);
	                        });
	                });
	                return done;
	            }
	        }

	        function processClone(original, clone) {
	            if (!(clone instanceof Element)) return clone;

	            return Promise.resolve()
	                .then(cloneStyle)
	                .then(clonePseudoElements)
	                .then(copyUserInput)
	                .then(fixSvg)
	                .then(function () {
	                    return clone;
	                });

	            function cloneStyle() {
	                copyStyle(window.getComputedStyle(original), clone.style);

	                function copyStyle(source, target) {
	                    if (source.cssText) target.cssText = source.cssText;
	                    else copyProperties(source, target);

	                    function copyProperties(source, target) {
	                        util.asArray(source).forEach(function (name) {
	                            target.setProperty(
	                                name,
	                                source.getPropertyValue(name),
	                                source.getPropertyPriority(name)
	                            );
	                        });
	                    }
	                }
	            }

	            function clonePseudoElements() {
	                [':before', ':after'].forEach(function (element) {
	                    clonePseudoElement(element);
	                });

	                function clonePseudoElement(element) {
	                    var style = window.getComputedStyle(original, element);
	                    var content = style.getPropertyValue('content');

	                    if (content === '' || content === 'none') return;

	                    var className = util.uid();
	                    clone.className = clone.className + ' ' + className;
	                    var styleElement = document.createElement('style');
	                    styleElement.appendChild(formatPseudoElementStyle(className, element, style));
	                    clone.appendChild(styleElement);

	                    function formatPseudoElementStyle(className, element, style) {
	                        var selector = '.' + className + ':' + element;
	                        var cssText = style.cssText ? formatCssText(style) : formatCssProperties(style);
	                        return document.createTextNode(selector + '{' + cssText + '}');

	                        function formatCssText(style) {
	                            var content = style.getPropertyValue('content');
	                            return style.cssText + ' content: ' + content + ';';
	                        }

	                        function formatCssProperties(style) {

	                            return util.asArray(style)
	                                .map(formatProperty)
	                                .join('; ') + ';';

	                            function formatProperty(name) {
	                                return name + ': ' +
	                                    style.getPropertyValue(name) +
	                                    (style.getPropertyPriority(name) ? ' !important' : '');
	                            }
	                        }
	                    }
	                }
	            }

	            function copyUserInput() {
	                if (original instanceof HTMLTextAreaElement) clone.innerHTML = original.value;
	                if (original instanceof HTMLInputElement) clone.setAttribute("value", original.value);
	            }

	            function fixSvg() {
	                if (!(clone instanceof SVGElement)) return;
	                clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

	                if (!(clone instanceof SVGRectElement)) return;
	                ['width', 'height'].forEach(function (attribute) {
	                    var value = clone.getAttribute(attribute);
	                    if (!value) return;

	                    clone.style.setProperty(attribute, value);
	                });
	            }
	        }
	    }

	    function embedFonts(node) {
	        return fontFaces.resolveAll()
	            .then(function (cssText) {
	                var styleNode = document.createElement('style');
	                node.appendChild(styleNode);
	                styleNode.appendChild(document.createTextNode(cssText));
	                return node;
	            });
	    }

	    function inlineImages(node) {
	        return images.inlineAll(node)
	            .then(function () {
	                return node;
	            });
	    }

	    function makeSvgDataUri(node, width, height) {
	        return Promise.resolve(node)
	            .then(function (node) {
	                node.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
	                return new XMLSerializer().serializeToString(node);
	            })
	            .then(util.escapeXhtml)
	            .then(function (xhtml) {
	                return '<foreignObject x="0" y="0" width="100%" height="100%">' + xhtml + '</foreignObject>';
	            })
	            .then(function (foreignObject) {
	                return '<svg xmlns="http://www.w3.org/2000/svg" width="' + width + '" height="' + height + '">' +
	                    foreignObject + '</svg>';
	            })
	            .then(function (svg) {
	                return 'data:image/svg+xml;charset=utf-8,' + svg;
	            });
	    }

	    function newUtil() {
	        return {
	            escape: escape,
	            parseExtension: parseExtension,
	            mimeType: mimeType,
	            dataAsUrl: dataAsUrl,
	            isDataUrl: isDataUrl,
	            canvasToBlob: canvasToBlob,
	            resolveUrl: resolveUrl,
	            getAndEncode: getAndEncode,
	            uid: uid(),
	            delay: delay,
	            asArray: asArray,
	            escapeXhtml: escapeXhtml,
	            makeImage: makeImage,
	            width: width,
	            height: height
	        };

	        function mimes() {
	            /*
	             * Only WOFF and EOT mime types for fonts are 'real'
	             * see http://www.iana.org/assignments/media-types/media-types.xhtml
	             */
	            var WOFF = 'application/font-woff';
	            var JPEG = 'image/jpeg';

	            return {
	                'woff': WOFF,
	                'woff2': WOFF,
	                'ttf': 'application/font-truetype',
	                'eot': 'application/vnd.ms-fontobject',
	                'png': 'image/png',
	                'jpg': JPEG,
	                'jpeg': JPEG,
	                'gif': 'image/gif',
	                'tiff': 'image/tiff',
	                'svg': 'image/svg+xml'
	            };
	        }

	        function parseExtension(url) {
	            var match = /\.([^\.\/]*?)$/g.exec(url);
	            if (match) return match[1];
	            else return '';
	        }

	        function mimeType(url) {
	            var extension = parseExtension(url).toLowerCase();
	            return mimes()[extension] || '';
	        }

	        function isDataUrl(url) {
	            return url.search(/^(data:)/) !== -1;
	        }

	        function toBlob(canvas) {
	            return new Promise(function (resolve) {
	                var binaryString = window.atob(canvas.toDataURL().split(',')[1]);
	                var length = binaryString.length;
	                var binaryArray = new Uint8Array(length);

	                for (var i = 0; i < length; i++)
	                    binaryArray[i] = binaryString.charCodeAt(i);

	                resolve(new Blob([binaryArray], {
	                    type: 'image/png'
	                }));
	            });
	        }

	        function canvasToBlob(canvas) {
	            if (canvas.toBlob)
	                return new Promise(function (resolve) {
	                    canvas.toBlob(resolve);
	                });

	            return toBlob(canvas);
	        }

	        function resolveUrl(url, baseUrl) {
	            var doc = document.implementation.createHTMLDocument();
	            var base = doc.createElement('base');
	            doc.head.appendChild(base);
	            var a = doc.createElement('a');
	            doc.body.appendChild(a);
	            base.href = baseUrl;
	            a.href = url;
	            return a.href;
	        }

	        function uid() {
	            var index = 0;

	            return function () {
	                return 'u' + fourRandomChars() + index++;

	                function fourRandomChars() {
	                    /* see http://stackoverflow.com/a/6248722/2519373 */
	                    return ('0000' + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4);
	                }
	            };
	        }

	        function makeImage(uri) {
	            return new Promise(function (resolve, reject) {
	                var image = new Image();
	                image.onload = function () {
	                    resolve(image);
	                };
	                image.onerror = reject;
	                image.src = uri;
	            });
	        }

	        function getAndEncode(url) {
	            var TIMEOUT = 30000;

	            return new Promise(function (resolve) {
	                var request = new XMLHttpRequest();

	                request.onreadystatechange = done;
	                request.ontimeout = timeout;
	                request.responseType = 'blob';
	                request.timeout = TIMEOUT;
	                request.open('GET', url, true);
	                request.send();

	                function done() {
	                    if (request.readyState !== 4) return;

	                    if (request.status !== 200) {
	                        fail('cannot fetch resource: ' + url + ', status: ' + request.status);
	                        return;
	                    }

	                    var encoder = new FileReader();
	                    encoder.onloadend = function () {
	                        var content = encoder.result.split(/,/)[1];
	                        resolve(content);
	                    };
	                    encoder.readAsDataURL(request.response);
	                }

	                function timeout() {
	                    fail('timeout of ' + TIMEOUT + 'ms occured while fetching resource: ' + url);
	                }

	                function fail(message) {
	                    console.error(message);
	                    resolve('');
	                }
	            });
	        }

	        function dataAsUrl(content, type) {
	            return 'data:' + type + ';base64,' + content;
	        }

	        function escape(string) {
	            return string.replace(/([.*+?^${}()|\[\]\/\\])/g, '\\$1');
	        }

	        function delay(ms) {
	            return function (arg) {
	                return new Promise(function (resolve) {
	                    setTimeout(function () {
	                        resolve(arg);
	                    }, ms);
	                });
	            };
	        }

	        function asArray(arrayLike) {
	            var array = [];
	            var length = arrayLike.length;
	            for (var i = 0; i < length; i++) array.push(arrayLike[i]);
	            return array;
	        }

	        function escapeXhtml(string) {
	            return string.replace(/#/g, '%23').replace(/\n/g, '%0A');
	        }

	        function width(node) {
	            var leftBorder = px(node, 'border-left-width');
	            var rightBorder = px(node, 'border-right-width');
	            return node.scrollWidth + leftBorder + rightBorder;
	        }

	        function height(node) {
	            var topBorder = px(node, 'border-top-width');
	            var bottomBorder = px(node, 'border-bottom-width');
	            return node.scrollHeight + topBorder + bottomBorder;
	        }

	        function px(node, styleProperty) {
	            var value = window.getComputedStyle(node).getPropertyValue(styleProperty);
	            return parseFloat(value.replace('px', ''));
	        }
	    }

	    function newInliner() {
	        var URL_REGEX = /url\(['"]?([^'"]+?)['"]?\)/g;

	        return {
	            inlineAll: inlineAll,
	            shouldProcess: shouldProcess,
	            impl: {
	                readUrls: readUrls,
	                inline: inline
	            }
	        };

	        function shouldProcess(string) {
	            return string.search(URL_REGEX) !== -1;
	        }

	        function readUrls(string) {
	            var result = [];
	            var match;
	            while ((match = URL_REGEX.exec(string)) !== null) {
	                result.push(match[1]);
	            }
	            return result.filter(function (url) {
	                return !util.isDataUrl(url);
	            });
	        }

	        function inline(string, url, baseUrl, get) {
	            return Promise.resolve(url)
	                .then(function (url) {
	                    return baseUrl ? util.resolveUrl(url, baseUrl) : url;
	                })
	                .then(get || util.getAndEncode)
	                .then(function (data) {
	                    return util.dataAsUrl(data, util.mimeType(url));
	                })
	                .then(function (dataUrl) {
	                    return string.replace(urlAsRegex(url), '$1' + dataUrl + '$3');
	                });

	            function urlAsRegex(url) {
	                return new RegExp('(url\\([\'"]?)(' + util.escape(url) + ')([\'"]?\\))', 'g');
	            }
	        }

	        function inlineAll(string, baseUrl, get) {
	            if (nothingToInline()) return Promise.resolve(string);

	            return Promise.resolve(string)
	                .then(readUrls)
	                .then(function (urls) {
	                    var done = Promise.resolve(string);
	                    urls.forEach(function (url) {
	                        done = done.then(function (string) {
	                            return inline(string, url, baseUrl, get);
	                        });
	                    });
	                    return done;
	                });

	            function nothingToInline() {
	                return !shouldProcess(string);
	            }
	        }
	    }

	    function newFontFaces() {
	        return {
	            resolveAll: resolveAll,
	            impl: {
	                readAll: readAll
	            }
	        };

	        function resolveAll() {
	            return readAll(document)
	                .then(function (webFonts) {
	                    return Promise.all(
	                        webFonts.map(function (webFont) {
	                            return webFont.resolve();
	                        })
	                    );
	                })
	                .then(function (cssStrings) {
	                    return cssStrings.join('\n');
	                });
	        }

	        function readAll() {
	            return Promise.resolve(util.asArray(document.styleSheets))
	                .then(getCssRules)
	                .then(selectWebFontRules)
	                .then(function (rules) {
	                    return rules.map(newWebFont);
	                });

	            function selectWebFontRules(cssRules) {
	                return cssRules
	                    .filter(function (rule) {
	                        return rule.type === CSSRule.FONT_FACE_RULE;
	                    })
	                    .filter(function (rule) {
	                        return inliner.shouldProcess(rule.style.getPropertyValue('src'));
	                    });
	            }

	            function getCssRules(styleSheets) {
	                var cssRules = [];
	                styleSheets.forEach(function (sheet) {
	                    try {
	                        util.asArray(sheet.cssRules || []).forEach(cssRules.push.bind(cssRules));
	                    } catch (e) {
	                        console.log('Error while reading CSS rules from ' + sheet.href, e.toString());
	                    }
	                });
	                return cssRules;
	            }

	            function newWebFont(webFontRule) {
	                return {
	                    resolve: function resolve() {
	                        var baseUrl = (webFontRule.parentStyleSheet || {}).href;
	                        return inliner.inlineAll(webFontRule.cssText, baseUrl);
	                    },
	                    src: function () {
	                        return webFontRule.style.getPropertyValue('src');
	                    }
	                };
	            }
	        }
	    }

	    function newImages() {
	        return {
	            inlineAll: inlineAll,
	            impl: {
	                newImage: newImage
	            }
	        };

	        function newImage(element) {
	            return {
	                inline: inline
	            };

	            function inline(get) {
	                if (util.isDataUrl(element.src)) return Promise.resolve();

	                return Promise.resolve(element.src)
	                    .then(get || util.getAndEncode)
	                    .then(function (data) {
	                        return util.dataAsUrl(data, util.mimeType(element.src));
	                    })
	                    .then(function (dataUrl) {
	                        return new Promise(function (resolve, reject) {
	                            element.onload = resolve;
	                            element.onerror = reject;
	                            element.src = dataUrl;
	                        });
	                    });
	            }
	        }

	        function inlineAll(node) {
	            if (!(node instanceof Element)) return Promise.resolve(node);

	            return inlineBackground(node)
	                .then(function () {
	                    if (node instanceof HTMLImageElement)
	                        return newImage(node).inline();
	                    else
	                        return Promise.all(
	                            util.asArray(node.childNodes).map(function (child) {
	                                return inlineAll(child);
	                            })
	                        );
	                });

	            function inlineBackground(node) {
	                var background = node.style.getPropertyValue('background');

	                if (!background) return Promise.resolve(node);

	                return inliner.inlineAll(background)
	                    .then(function (inlined) {
	                        node.style.setProperty(
	                            'background',
	                            inlined,
	                            node.style.getPropertyPriority('background')
	                        );
	                    })
	                    .then(function () {
	                        return node;
	                    });
	            }
	        }
	    }
	})(this);


/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module) {/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0,
	    MAX_SAFE_INTEGER = 9007199254740991;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/,
	    reLeadingDot = /^\./,
	    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;

	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    return freeProcess && freeProcess.binding('util');
	  } catch (e) {}
	}());

	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array ? array.length : 0,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array ? array.length : 0;

	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	/**
	 * The base implementation of `_.sortBy` which uses `comparer` to define the
	 * sort order of `array` and replaces criteria objects with their corresponding
	 * values.
	 *
	 * @private
	 * @param {Array} array The array to sort.
	 * @param {Function} comparer The function to define sort order.
	 * @returns {Array} Returns `array`.
	 */
	function baseSortBy(array, comparer) {
	  var length = array.length;

	  array.sort(comparer);
	  while (length--) {
	    array[length] = array[length].value;
	  }
	  return array;
	}

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);

	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}

	/** Used for built-in method references. */
	var arrayProto = Array.prototype,
	    funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/** Built-in value references. */
	var Symbol = root.Symbol,
	    Uint8Array = root.Uint8Array,
	    propertyIsEnumerable = objectProto.propertyIsEnumerable,
	    splice = arrayProto.splice,
	    spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object),
	    nativeMax = Math.max;

	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView'),
	    Map = getNative(root, 'Map'),
	    Promise = getNative(root, 'Promise'),
	    Set = getNative(root, 'Set'),
	    WeakMap = getNative(root, 'WeakMap'),
	    nativeCreate = getNative(Object, 'create');

	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	}

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  return this.has(key) && delete this.__data__[key];
	}

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
	}

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	}

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  return true;
	}

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  return getMapData(this, key)['delete'](key);
	}

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  getMapData(this, key).set(key, value);
	  return this;
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;

	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values ? values.length : 0;

	  this.__data__ = new MapCache;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}

	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}

	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  this.__data__ = new ListCache(entries);
	}

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache;
	}

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  return this.__data__['delete'](key);
	}

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}

	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var cache = this.__data__;
	  if (cache instanceof ListCache) {
	    var pairs = cache.__data__;
	    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      return this;
	    }
	    cache = this.__data__ = new MapCache(pairs);
	  }
	  cache.set(key, value);
	  return this;
	}

	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  // Safari 9 makes `arguments.length` enumerable in strict mode.
	  var result = (isArray(value) || isArguments(value))
	    ? baseTimes(value.length, String)
	    : [];

	  var length = result.length,
	      skipIndexes = !!length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	/**
	 * The base implementation of `_.forEach` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array|Object} Returns `collection`.
	 */
	var baseEach = createBaseEach(baseForOwn);

	/**
	 * The base implementation of `_.flatten` with support for restricting flattening.
	 *
	 * @private
	 * @param {Array} array The array to flatten.
	 * @param {number} depth The maximum recursion depth.
	 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
	 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
	 * @param {Array} [result=[]] The initial result value.
	 * @returns {Array} Returns the new flattened array.
	 */
	function baseFlatten(array, depth, predicate, isStrict, result) {
	  var index = -1,
	      length = array.length;

	  predicate || (predicate = isFlattenable);
	  result || (result = []);

	  while (++index < length) {
	    var value = array[index];
	    if (depth > 0 && predicate(value)) {
	      if (depth > 1) {
	        // Recursively flatten arrays (susceptible to call stack limits).
	        baseFlatten(value, depth - 1, predicate, isStrict, result);
	      } else {
	        arrayPush(result, value);
	      }
	    } else if (!isStrict) {
	      result[result.length] = value;
	    }
	  }
	  return result;
	}

	/**
	 * The base implementation of `baseForOwn` which iterates over `object`
	 * properties returned by `keysFunc` and invokes `iteratee` for each property.
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();

	/**
	 * The base implementation of `_.forOwn` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForOwn(object, iteratee) {
	  return object && baseFor(object, iteratee, keys);
	}

	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = isKey(path, object) ? [path] : castPath(path);

	  var index = 0,
	      length = path.length;

	  while (object != null && index < length) {
	    object = object[toKey(path[index++])];
	  }
	  return (index && index == length) ? object : undefined;
	}

	/**
	 * The base implementation of `getTag`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  return objectToString.call(value);
	}

	/**
	 * The base implementation of `_.hasIn` without support for deep paths.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHasIn(object, key) {
	  return object != null && key in Object(object);
	}

	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {boolean} [bitmask] The bitmask of comparison flags.
	 *  The bitmask may be composed of the following flags:
	 *     1 - Unordered comparison
	 *     2 - Partial comparison
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, customizer, bitmask, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
	}

	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = arrayTag,
	      othTag = arrayTag;

	  if (!objIsArr) {
	    objTag = getTag(object);
	    objTag = objTag == argsTag ? objectTag : objTag;
	  }
	  if (!othIsArr) {
	    othTag = getTag(other);
	    othTag = othTag == argsTag ? objectTag : othTag;
	  }
	  var objIsObj = objTag == objectTag && !isHostObject(object),
	      othIsObj = othTag == objectTag && !isHostObject(other),
	      isSameTag = objTag == othTag;

	  if (isSameTag && !objIsObj) {
	    stack || (stack = new Stack);
	    return (objIsArr || isTypedArray(object))
	      ? equalArrays(object, other, equalFunc, customizer, bitmask, stack)
	      : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
	  }
	  if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;

	      stack || (stack = new Stack);
	      return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack);
	  return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
	}

	/**
	 * The base implementation of `_.isMatch` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Object} source The object of property values to match.
	 * @param {Array} matchData The property names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch(object, source, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;

	  if (object == null) {
	    return !length;
	  }
	  object = Object(object);
	  while (index--) {
	    var data = matchData[index];
	    if ((noCustomizer && data[2])
	          ? data[1] !== object[data[0]]
	          : !(data[0] in object)
	        ) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];

	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var stack = new Stack;
	      if (customizer) {
	        var result = customizer(objValue, srcValue, key, object, source, stack);
	      }
	      if (!(result === undefined
	            ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack)
	            : result
	          )) {
	        return false;
	      }
	    }
	  }
	  return true;
	}

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
	}

	/**
	 * The base implementation of `_.iteratee`.
	 *
	 * @private
	 * @param {*} [value=_.identity] The value to convert to an iteratee.
	 * @returns {Function} Returns the iteratee.
	 */
	function baseIteratee(value) {
	  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
	  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
	  if (typeof value == 'function') {
	    return value;
	  }
	  if (value == null) {
	    return identity;
	  }
	  if (typeof value == 'object') {
	    return isArray(value)
	      ? baseMatchesProperty(value[0], value[1])
	      : baseMatches(value);
	  }
	  return property(value);
	}

	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * The base implementation of `_.map` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function baseMap(collection, iteratee) {
	  var index = -1,
	      result = isArrayLike(collection) ? Array(collection.length) : [];

	  baseEach(collection, function(value, key, collection) {
	    result[++index] = iteratee(value, key, collection);
	  });
	  return result;
	}

	/**
	 * The base implementation of `_.matches` which doesn't clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatches(source) {
	  var matchData = getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
	  }
	  return function(object) {
	    return object === source || baseIsMatch(object, source, matchData);
	  };
	}

	/**
	 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatchesProperty(path, srcValue) {
	  if (isKey(path) && isStrictComparable(srcValue)) {
	    return matchesStrictComparable(toKey(path), srcValue);
	  }
	  return function(object) {
	    var objValue = get(object, path);
	    return (objValue === undefined && objValue === srcValue)
	      ? hasIn(object, path)
	      : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
	  };
	}

	/**
	 * The base implementation of `_.orderBy` without param guards.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
	 * @param {string[]} orders The sort orders of `iteratees`.
	 * @returns {Array} Returns the new sorted array.
	 */
	function baseOrderBy(collection, iteratees, orders) {
	  var index = -1;
	  iteratees = arrayMap(iteratees.length ? iteratees : [identity], baseUnary(baseIteratee));

	  var result = baseMap(collection, function(value, key, collection) {
	    var criteria = arrayMap(iteratees, function(iteratee) {
	      return iteratee(value);
	    });
	    return { 'criteria': criteria, 'index': ++index, 'value': value };
	  });

	  return baseSortBy(result, function(object, other) {
	    return compareMultiple(object, other, orders);
	  });
	}

	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function basePropertyDeep(path) {
	  return function(object) {
	    return baseGet(object, path);
	  };
	}

	/**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
	function baseRest(func, start) {
	  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);

	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = array;
	    return apply(func, this, otherArgs);
	  };
	}

	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value) {
	  return isArray(value) ? value : stringToPath(value);
	}

	/**
	 * Compares values to sort them in ascending order.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {number} Returns the sort order indicator for `value`.
	 */
	function compareAscending(value, other) {
	  if (value !== other) {
	    var valIsDefined = value !== undefined,
	        valIsNull = value === null,
	        valIsReflexive = value === value,
	        valIsSymbol = isSymbol(value);

	    var othIsDefined = other !== undefined,
	        othIsNull = other === null,
	        othIsReflexive = other === other,
	        othIsSymbol = isSymbol(other);

	    if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
	        (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
	        (valIsNull && othIsDefined && othIsReflexive) ||
	        (!valIsDefined && othIsReflexive) ||
	        !valIsReflexive) {
	      return 1;
	    }
	    if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
	        (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
	        (othIsNull && valIsDefined && valIsReflexive) ||
	        (!othIsDefined && valIsReflexive) ||
	        !othIsReflexive) {
	      return -1;
	    }
	  }
	  return 0;
	}

	/**
	 * Used by `_.orderBy` to compare multiple properties of a value to another
	 * and stable sort them.
	 *
	 * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
	 * specify an order of "desc" for descending or "asc" for ascending sort order
	 * of corresponding values.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {boolean[]|string[]} orders The order to sort by for each property.
	 * @returns {number} Returns the sort order indicator for `object`.
	 */
	function compareMultiple(object, other, orders) {
	  var index = -1,
	      objCriteria = object.criteria,
	      othCriteria = other.criteria,
	      length = objCriteria.length,
	      ordersLength = orders.length;

	  while (++index < length) {
	    var result = compareAscending(objCriteria[index], othCriteria[index]);
	    if (result) {
	      if (index >= ordersLength) {
	        return result;
	      }
	      var order = orders[index];
	      return result * (order == 'desc' ? -1 : 1);
	    }
	  }
	  // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
	  // that causes it, under certain circumstances, to provide the same value for
	  // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
	  // for more details.
	  //
	  // This also ensures a stable sort in V8 and other engines.
	  // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
	  return object.index - other.index;
	}

	/**
	 * Creates a `baseEach` or `baseEachRight` function.
	 *
	 * @private
	 * @param {Function} eachFunc The function to iterate over a collection.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseEach(eachFunc, fromRight) {
	  return function(collection, iteratee) {
	    if (collection == null) {
	      return collection;
	    }
	    if (!isArrayLike(collection)) {
	      return eachFunc(collection, iteratee);
	    }
	    var length = collection.length,
	        index = fromRight ? length : -1,
	        iterable = Object(collection);

	    while ((fromRight ? index-- : ++index < length)) {
	      if (iteratee(iterable[index], index, iterable) === false) {
	        break;
	      }
	    }
	    return collection;
	  };
	}

	/**
	 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;

	    while (length--) {
	      var key = props[fromRight ? length : ++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}

	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
	  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
	      arrLength = array.length,
	      othLength = other.length;

	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(array);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var index = -1,
	      result = true,
	      seen = (bitmask & UNORDERED_COMPARE_FLAG) ? new SetCache : undefined;

	  stack.set(array, other);
	  stack.set(other, array);

	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, arrValue, index, other, array, stack)
	        : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (seen) {
	      if (!arraySome(other, function(othValue, othIndex) {
	            if (!seen.has(othIndex) &&
	                (arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
	              return seen.add(othIndex);
	            }
	          })) {
	        result = false;
	        break;
	      }
	    } else if (!(
	          arrValue === othValue ||
	            equalFunc(arrValue, othValue, customizer, bitmask, stack)
	        )) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  stack['delete'](other);
	  return result;
	}

	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
	  switch (tag) {
	    case dataViewTag:
	      if ((object.byteLength != other.byteLength) ||
	          (object.byteOffset != other.byteOffset)) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;

	    case arrayBufferTag:
	      if ((object.byteLength != other.byteLength) ||
	          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	        return false;
	      }
	      return true;

	    case boolTag:
	    case dateTag:
	    case numberTag:
	      // Coerce booleans to `1` or `0` and dates to milliseconds.
	      // Invalid dates are coerced to `NaN`.
	      return eq(+object, +other);

	    case errorTag:
	      return object.name == other.name && object.message == other.message;

	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == (other + '');

	    case mapTag:
	      var convert = mapToArray;

	    case setTag:
	      var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
	      convert || (convert = setToArray);

	      if (object.size != other.size && !isPartial) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= UNORDERED_COMPARE_FLAG;

	      // Recursively compare objects (susceptible to call stack limits).
	      stack.set(object, other);
	      var result = equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack);
	      stack['delete'](object);
	      return result;

	    case symbolTag:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}

	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
	  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
	      objProps = keys(object),
	      objLength = objProps.length,
	      othProps = keys(other),
	      othLength = othProps.length;

	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
	      return false;
	    }
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(object);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(object, other);
	  stack.set(other, object);

	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, objValue, key, other, object, stack)
	        : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined
	          ? (objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack))
	          : compared
	        )) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;

	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  stack['delete'](other);
	  return result;
	}

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	/**
	 * Gets the property names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData(object) {
	  var result = keys(object),
	      length = result.length;

	  while (length--) {
	    var key = result[length],
	        value = object[key];

	    result[length] = [key, value, isStrictComparable(value)];
	  }
	  return result;
	}

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = baseGetTag;

	// Fallback for data views, maps, sets, and weak maps in IE 11,
	// for data views in Edge < 14, and promises in Node.js.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag(new Map) != mapTag) ||
	    (Promise && getTag(Promise.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = objectToString.call(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : undefined;

	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}

	/**
	 * Checks if `path` exists on `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @param {Function} hasFunc The function to check properties.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 */
	function hasPath(object, path, hasFunc) {
	  path = isKey(path, object) ? [path] : castPath(path);

	  var result,
	      index = -1,
	      length = path.length;

	  while (++index < length) {
	    var key = toKey(path[index]);
	    if (!(result = object != null && hasFunc(object, key))) {
	      break;
	    }
	    object = object[key];
	  }
	  if (result) {
	    return result;
	  }
	  var length = object ? object.length : 0;
	  return !!length && isLength(length) && isIndex(key, length) &&
	    (isArray(object) || isArguments(object));
	}

	/**
	 * Checks if `value` is a flattenable `arguments` object or array.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
	 */
	function isFlattenable(value) {
	  return isArray(value) || isArguments(value) ||
	    !!(spreadableSymbol && value && value[spreadableSymbol]);
	}

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}

	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	        ? (isArrayLike(object) && isIndex(index, object.length))
	        : (type == 'string' && index in object)
	      ) {
	    return eq(object[index], value);
	  }
	  return false;
	}

	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  if (isArray(value)) {
	    return false;
	  }
	  var type = typeof value;
	  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
	      value == null || isSymbol(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	    (object != null && value in Object(object));
	}

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

	  return value === proto;
	}

	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable(value) {
	  return value === value && !isObject(value);
	}

	/**
	 * A specialized version of `matchesProperty` for source values suitable
	 * for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function matchesStrictComparable(key, srcValue) {
	  return function(object) {
	    if (object == null) {
	      return false;
	    }
	    return object[key] === srcValue &&
	      (srcValue !== undefined || (key in Object(object)));
	  };
	}

	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = memoize(function(string) {
	  string = toString(string);

	  var result = [];
	  if (reLeadingDot.test(string)) {
	    result.push('');
	  }
	  string.replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	});

	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey(value) {
	  if (typeof value == 'string' || isSymbol(value)) {
	    return value;
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to process.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	/**
	 * Creates an array of elements, sorted in ascending order by the results of
	 * running each element in a collection thru each iteratee. This method
	 * performs a stable sort, that is, it preserves the original sort order of
	 * equal elements. The iteratees are invoked with one argument: (value).
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {...(Function|Function[])} [iteratees=[_.identity]]
	 *  The iteratees to sort by.
	 * @returns {Array} Returns the new sorted array.
	 * @example
	 *
	 * var users = [
	 *   { 'user': 'fred',   'age': 48 },
	 *   { 'user': 'barney', 'age': 36 },
	 *   { 'user': 'fred',   'age': 40 },
	 *   { 'user': 'barney', 'age': 34 }
	 * ];
	 *
	 * _.sortBy(users, function(o) { return o.user; });
	 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
	 *
	 * _.sortBy(users, ['user', 'age']);
	 * // => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]
	 *
	 * _.sortBy(users, 'user', function(o) {
	 *   return Math.floor(o.age / 10);
	 * });
	 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
	 */
	var sortBy = baseRest(function(collection, iteratees) {
	  if (collection == null) {
	    return [];
	  }
	  var length = iteratees.length;
	  if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
	    iteratees = [];
	  } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
	    iteratees = [iteratees[0]];
	  }
	  return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
	});

	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;

	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result);
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache);
	  return memoized;
	}

	// Assign cache to `_.memoize`.
	memoize.Cache = MapCache;

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8-9 which returns 'object' for typed array and other constructors.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}

	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is returned in its place.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get(object, path, defaultValue) {
	  var result = object == null ? undefined : baseGet(object, path);
	  return result === undefined ? defaultValue : result;
	}

	/**
	 * Checks if `path` is a direct or inherited property of `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 * @example
	 *
	 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
	 *
	 * _.hasIn(object, 'a');
	 * // => true
	 *
	 * _.hasIn(object, 'a.b');
	 * // => true
	 *
	 * _.hasIn(object, ['a', 'b']);
	 * // => true
	 *
	 * _.hasIn(object, 'b');
	 * // => false
	 */
	function hasIn(object, path) {
	  return object != null && hasPath(object, path, baseHasIn);
	}

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	/**
	 * Creates a function that returns the value at `path` of a given object.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': 2 } },
	 *   { 'a': { 'b': 1 } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b'));
	 * // => [2, 1]
	 *
	 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
	 * // => [1, 2]
	 */
	function property(path) {
	  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
	}

	module.exports = sortBy;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(127)(module)))

/***/ },
/* 127 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    ref: "test",
	    staticClass: "deck-list"
	  }, [_h('mana-curve'), " ", _h('deck-counts'), " ", _h('deck-general'), " ", _h('div', {
	    staticClass: "cards"
	  }, [(cardList) && _l((cardList), function(card) {
	    return _h('deck-card', {
	      attrs: {
	        "card": card
	      }
	    })
	  })]), " ", ($store.state.deck.cards.length) ? _h('button', {
	    staticClass: "save-deck",
	    attrs: {
	      "disabled": saving
	    },
	    on: {
	      "click": function($event) {
	        save()
	      }
	    }
	  }, ["Save Deck"]) : _e()])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-7", module.exports)
	  }
	}

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* styles */
	__webpack_require__(130)

	/* script */
	__vue_exports__ = __webpack_require__(132)

	/* template */
	var __vue_template__ = __webpack_require__(134)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-9", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-9", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] CardPagination.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(131);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-9!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CardPagination.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-9!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CardPagination.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, "/* Vendor */\n/* Partials */\n/*\r\n    https://jdsteinbach.com/css//sass-maps-breakpoint-mixin/\r\n\r\n    Usage:\r\n    @include breakpoint(md) {\r\n        ...\r\n    }\r\n*/\n.card-pagination {\n  text-align: center;\n}\n.card-pagination > .next, .card-pagination > .prev {\n    background-repeat: no-repeat;\n    width: 32px;\n    height: 40px;\n    display: inline-block;\n}\n.card-pagination > .next {\n    background-image: url(https://dl.dropboxusercontent.com/u/24984522/dialogue_carat.png);\n    float: right;\n}\n.card-pagination > .prev {\n    background-image: url(https://dl.dropboxusercontent.com/u/24984522/dialogue_carat_left.png);\n    float: left;\n}\n.card-pagination > .text {\n    padding-top: 8px;\n}\n", ""]);

	// exports


/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _vuex = __webpack_require__(133);

	exports.default = {
	  computed: (0, _vuex.mapGetters)({
	    currentPage: 'currentPage',
	    totalPages: 'totalPages'
	  })
	};

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * vuex v2.0.0-rc.6
	 * (c) 2016 Evan You
	 * @license MIT
	 */
	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  (global.Vuex = factory());
	}(this, (function () { 'use strict';

	var devtoolHook =
	  typeof window !== 'undefined' &&
	  window.__VUE_DEVTOOLS_GLOBAL_HOOK__

	function devtoolPlugin (store) {
	  if (!devtoolHook) { return }

	  store._devtoolHook = devtoolHook

	  devtoolHook.emit('vuex:init', store)

	  devtoolHook.on('vuex:travel-to-state', function (targetState) {
	    store.replaceState(targetState)
	  })

	  store.subscribe(function (mutation, state) {
	    devtoolHook.emit('vuex:mutation', mutation, state)
	  })
	}

	function applyMixin (Vue) {
	  var version = Number(Vue.version.split('.')[0])

	  if (version >= 2) {
	    var usesInit = Vue.config._lifecycleHooks.indexOf('init') > -1
	    Vue.mixin(usesInit ? { init: vuexInit } : { beforeCreate: vuexInit })
	  } else {
	    // override init and inject vuex init procedure
	    // for 1.x backwards compatibility.
	    var _init = Vue.prototype._init
	    Vue.prototype._init = function (options) {
	      if ( options === void 0 ) options = {};

	      options.init = options.init
	        ? [vuexInit].concat(options.init)
	        : vuexInit
	      _init.call(this, options)
	    }
	  }

	  /**
	   * Vuex init hook, injected into each instances init hooks list.
	   */

	  function vuexInit () {
	    var options = this.$options
	    // store injection
	    if (options.store) {
	      this.$store = options.store
	    } else if (options.parent && options.parent.$store) {
	      this.$store = options.parent.$store
	    }
	  }
	}

	function mapState (states) {
	  var res = {}
	  normalizeMap(states).forEach(function (ref) {
	    var key = ref.key;
	    var val = ref.val;

	    res[key] = function mappedState () {
	      return typeof val === 'function'
	        ? val.call(this, this.$store.state, this.$store.getters)
	        : this.$store.state[val]
	    }
	  })
	  return res
	}

	function mapMutations (mutations) {
	  var res = {}
	  normalizeMap(mutations).forEach(function (ref) {
	    var key = ref.key;
	    var val = ref.val;

	    res[key] = function mappedMutation () {
	      var args = [], len = arguments.length;
	      while ( len-- ) args[ len ] = arguments[ len ];

	      return this.$store.commit.apply(this.$store, [val].concat(args))
	    }
	  })
	  return res
	}

	function mapGetters (getters) {
	  var res = {}
	  normalizeMap(getters).forEach(function (ref) {
	    var key = ref.key;
	    var val = ref.val;

	    res[key] = function mappedGetter () {
	      if (!(val in this.$store.getters)) {
	        console.error(("[vuex] unknown getter: " + val))
	      }
	      return this.$store.getters[val]
	    }
	  })
	  return res
	}

	function mapActions (actions) {
	  var res = {}
	  normalizeMap(actions).forEach(function (ref) {
	    var key = ref.key;
	    var val = ref.val;

	    res[key] = function mappedAction () {
	      var args = [], len = arguments.length;
	      while ( len-- ) args[ len ] = arguments[ len ];

	      return this.$store.dispatch.apply(this.$store, [val].concat(args))
	    }
	  })
	  return res
	}

	function normalizeMap (map) {
	  return Array.isArray(map)
	    ? map.map(function (key) { return ({ key: key, val: key }); })
	    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
	}

	function isObject (obj) {
	  return obj !== null && typeof obj === 'object'
	}

	function isPromise (val) {
	  return val && typeof val.then === 'function'
	}

	function assert (condition, msg) {
	  if (!condition) { throw new Error(("[vuex] " + msg)) }
	}

	var Vue // bind on install

	var Store = function Store (options) {
	  var this$1 = this;
	  if ( options === void 0 ) options = {};

	  assert(Vue, "must call Vue.use(Vuex) before creating a store instance.")
	  assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.")

	  var state = options.state; if ( state === void 0 ) state = {};
	  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
	  var strict = options.strict; if ( strict === void 0 ) strict = false;

	  // store internal state
	  this._options = options
	  this._committing = false
	  this._actions = Object.create(null)
	  this._mutations = Object.create(null)
	  this._wrappedGetters = Object.create(null)
	  this._runtimeModules = Object.create(null)
	  this._subscribers = []
	  this._watcherVM = new Vue()

	    // bind commit and dispatch to self
	  var store = this
	  var ref = this;
	  var dispatch = ref.dispatch;
	  var commit = ref.commit;
	  this.dispatch = function boundDispatch (type, payload) {
	    return dispatch.call(store, type, payload)
	    }
	    this.commit = function boundCommit (type, payload, options) {
	    return commit.call(store, type, payload, options)
	  }

	  // strict mode
	  this.strict = strict

	  // init root module.
	  // this also recursively registers all sub-modules
	  // and collects all module getters inside this._wrappedGetters
	  installModule(this, state, [], options)

	  // initialize the store vm, which is responsible for the reactivity
	  // (also registers _wrappedGetters as computed properties)
	  resetStoreVM(this, state)

	  // apply plugins
	  plugins.concat(devtoolPlugin).forEach(function (plugin) { return plugin(this$1); })
	};

	var prototypeAccessors = { state: {} };

	prototypeAccessors.state.get = function () {
	  return this._vm.state
	};

	prototypeAccessors.state.set = function (v) {
	  assert(false, "Use store.replaceState() to explicit replace store state.")
	};

	Store.prototype.commit = function commit (type, payload, options) {
	    var this$1 = this;

	  // check object-style commit
	  if (isObject(type) && type.type) {
	    options = payload
	    payload = type
	    type = type.type
	  }
	  var mutation = { type: type, payload: payload }
	  var entry = this._mutations[type]
	  if (!entry) {
	    console.error(("[vuex] unknown mutation type: " + type))
	    return
	  }
	  this._withCommit(function () {
	    entry.forEach(function commitIterator (handler) {
	      handler(payload)
	    })
	  })
	  if (!options || !options.silent) {
	    this._subscribers.forEach(function (sub) { return sub(mutation, this$1.state); })
	  }
	};

	Store.prototype.dispatch = function dispatch (type, payload) {
	  // check object-style dispatch
	  if (isObject(type) && type.type) {
	    payload = type
	    type = type.type
	  }
	  var entry = this._actions[type]
	  if (!entry) {
	    console.error(("[vuex] unknown action type: " + type))
	    return
	  }
	  return entry.length > 1
	    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
	    : entry[0](payload)
	};

	Store.prototype.subscribe = function subscribe (fn) {
	  var subs = this._subscribers
	  if (subs.indexOf(fn) < 0) {
	    subs.push(fn)
	  }
	  return function () {
	    var i = subs.indexOf(fn)
	    if (i > -1) {
	      subs.splice(i, 1)
	    }
	  }
	};

	Store.prototype.watch = function watch (getter, cb, options) {
	    var this$1 = this;

	  assert(typeof getter === 'function', "store.watch only accepts a function.")
	  return this._watcherVM.$watch(function () { return getter(this$1.state); }, cb, options)
	};

	Store.prototype.replaceState = function replaceState (state) {
	    var this$1 = this;

	  this._withCommit(function () {
	    this$1._vm.state = state
	  })
	};

	Store.prototype.registerModule = function registerModule (path, module) {
	  if (typeof path === 'string') { path = [path] }
	  assert(Array.isArray(path), "module path must be a string or an Array.")
	  this._runtimeModules[path.join('.')] = module
	  installModule(this, this.state, path, module)
	  // reset store to update getters...
	  resetStoreVM(this, this.state)
	};

	Store.prototype.unregisterModule = function unregisterModule (path) {
	    var this$1 = this;

	  if (typeof path === 'string') { path = [path] }
	  assert(Array.isArray(path), "module path must be a string or an Array.")
	    delete this._runtimeModules[path.join('.')]
	  this._withCommit(function () {
	    var parentState = getNestedState(this$1.state, path.slice(0, -1))
	    Vue.delete(parentState, path[path.length - 1])
	  })
	  resetStore(this)
	};

	Store.prototype.hotUpdate = function hotUpdate (newOptions) {
	  updateModule(this._options, newOptions)
	  resetStore(this)
	};

	Store.prototype._withCommit = function _withCommit (fn) {
	  var committing = this._committing
	  this._committing = true
	  fn()
	  this._committing = committing
	};

	Object.defineProperties( Store.prototype, prototypeAccessors );

	function updateModule (targetModule, newModule) {
	  if (newModule.actions) {
	    targetModule.actions = newModule.actions
	  }
	  if (newModule.mutations) {
	    targetModule.mutations = newModule.mutations
	  }
	  if (newModule.getters) {
	    targetModule.getters = newModule.getters
	  }
	  if (newModule.modules) {
	    for (var key in newModule.modules) {
	      if (!(targetModule.modules && targetModule.modules[key])) {
	        console.warn(
	          "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
	          'manual reload is needed'
	        )
	        return
	      }
	      updateModule(targetModule.modules[key], newModule.modules[key])
	    }
	  }
	}

	function resetStore (store) {
	  store._actions = Object.create(null)
	  store._mutations = Object.create(null)
	  store._wrappedGetters = Object.create(null)
	  var state = store.state
	  // init root module
	  installModule(store, state, [], store._options, true)
	  // init all runtime modules
	  Object.keys(store._runtimeModules).forEach(function (key) {
	    installModule(store, state, key.split('.'), store._runtimeModules[key], true)
	  })
	  // reset vm
	  resetStoreVM(store, state)
	}

	function resetStoreVM (store, state) {
	  var oldVm = store._vm

	  // bind store public getters
	  store.getters = {}
	  var wrappedGetters = store._wrappedGetters
	  var computed = {}
	  Object.keys(wrappedGetters).forEach(function (key) {
	    var fn = wrappedGetters[key]
	    // use computed to leverage its lazy-caching mechanism
	    computed[key] = function () { return fn(store); }
	    Object.defineProperty(store.getters, key, {
	      get: function () { return store._vm[key]; }
	    })
	  })

	  // use a Vue instance to store the state tree
	  // suppress warnings just in case the user has added
	  // some funky global mixins
	  var silent = Vue.config.silent
	  Vue.config.silent = true
	  store._vm = new Vue({
	    data: { state: state },
	    computed: computed
	  })
	  Vue.config.silent = silent

	  // enable strict mode for new vm
	  if (store.strict) {
	    enableStrictMode(store)
	  }

	  if (oldVm) {
	    // dispatch changes in all subscribed watchers
	    // to force getter re-evaluation.
	    store._withCommit(function () {
	      oldVm.state = null
	    })
	    Vue.nextTick(function () { return oldVm.$destroy(); })
	  }
	}

	function installModule (store, rootState, path, module, hot) {
	  var isRoot = !path.length
	  var state = module.state;
	  var actions = module.actions;
	  var mutations = module.mutations;
	  var getters = module.getters;
	  var modules = module.modules;

	  // set state
	  if (!isRoot && !hot) {
	    var parentState = getNestedState(rootState, path.slice(0, -1))
	    var moduleName = path[path.length - 1]
	    store._withCommit(function () {
	      Vue.set(parentState, moduleName, state || {})
	    })
	  }

	  if (mutations) {
	    Object.keys(mutations).forEach(function (key) {
	      registerMutation(store, key, mutations[key], path)
	    })
	  }

	  if (actions) {
	    Object.keys(actions).forEach(function (key) {
	      registerAction(store, key, actions[key], path)
	    })
	  }

	  if (getters) {
	    wrapGetters(store, getters, path)
	  }

	  if (modules) {
	    Object.keys(modules).forEach(function (key) {
	      installModule(store, rootState, path.concat(key), modules[key], hot)
	    })
	  }
	}

	function registerMutation (store, type, handler, path) {
	  if ( path === void 0 ) path = [];

	  var entry = store._mutations[type] || (store._mutations[type] = [])
	  entry.push(function wrappedMutationHandler (payload) {
	    handler(getNestedState(store.state, path), payload)
	  })
	}

	function registerAction (store, type, handler, path) {
	  if ( path === void 0 ) path = [];

	  var entry = store._actions[type] || (store._actions[type] = [])
	  var dispatch = store.dispatch;
	  var commit = store.commit;
	  entry.push(function wrappedActionHandler (payload, cb) {
	    var res = handler({
	      dispatch: dispatch,
	      commit: commit,
	      getters: store.getters,
	      state: getNestedState(store.state, path),
	      rootState: store.state
	    }, payload, cb)
	    if (!isPromise(res)) {
	      res = Promise.resolve(res)
	    }
	    if (store._devtoolHook) {
	      return res.catch(function (err) {
	        store._devtoolHook.emit('vuex:error', err)
	        throw err
	      })
	    } else {
	      return res
	    }
	  })
	}

	function wrapGetters (store, moduleGetters, modulePath) {
	  Object.keys(moduleGetters).forEach(function (getterKey) {
	    var rawGetter = moduleGetters[getterKey]
	    if (store._wrappedGetters[getterKey]) {
	      console.error(("[vuex] duplicate getter key: " + getterKey))
	      return
	    }
	    store._wrappedGetters[getterKey] = function wrappedGetter (store) {
	      return rawGetter(
	        getNestedState(store.state, modulePath), // local state
	        store.getters, // getters
	        store.state // root state
	      )
	    }
	  })
	}

	function enableStrictMode (store) {
	  store._vm.$watch('state', function () {
	    assert(store._committing, "Do not mutate vuex store state outside mutation handlers.")
	  }, { deep: true, sync: true })
	}

	function getNestedState (state, path) {
	  return path.length
	    ? path.reduce(function (state, key) { return state[key]; }, state)
	    : state
	}

	function install (_Vue) {
	  if (Vue) {
	    console.error(
	      '[vuex] already installed. Vue.use(Vuex) should be called only once.'
	    )
	    return
	  }
	  Vue = _Vue
	  applyMixin(Vue)
	}

	// auto install in dist mode
	if (typeof window !== 'undefined' && window.Vue) {
	  install(window.Vue)
	}

	var index = {
	  Store: Store,
	  install: install,
	  mapState: mapState,
	  mapMutations: mapMutations,
	  mapGetters: mapGetters,
	  mapActions: mapActions
	}

	return index;

	})));

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "card-pagination"
	  }, [_h('span', {
	    staticClass: "next",
	    on: {
	      "click": function($event) {
	        $store.dispatch('goToPage', 1)
	      }
	    }
	  }), " ", _h('span', {
	    staticClass: "prev",
	    on: {
	      "click": function($event) {
	        $store.dispatch('goToPage', -1)
	      }
	    }
	  }), " ", _h('div', {
	    staticClass: "text"
	  }, ["Displaying page " + _s(currentPage) + " of " + _s(totalPages)])])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-9", module.exports)
	  }
	}

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* styles */
	__webpack_require__(136)

	/* script */
	__vue_exports__ = __webpack_require__(138)

	/* template */
	var __vue_template__ = __webpack_require__(171)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-11", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-11", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] FilterArea.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(137);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-11!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./FilterArea.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-11!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./FilterArea.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, "/* Vendor */\n/* Partials */\n/*\r\n    https://jdsteinbach.com/css//sass-maps-breakpoint-mixin/\r\n\r\n    Usage:\r\n    @include breakpoint(md) {\r\n        ...\r\n    }\r\n*/\n.filter-area {\n  height: 40px;\n  position: relative;\n  z-index: 10;\n}\n.filter-area > .medium {\n    height: 100%;\n    width: 32.20339%;\n    float: left;\n    margin-right: 1.69492%;\n}\n.filter-area > .small {\n    height: 100%;\n    width: 15.25424%;\n    float: left;\n    margin-right: 1.69492%;\n}\n", ""]);

	// exports


/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _TextSearch = __webpack_require__(139);

	var _TextSearch2 = _interopRequireDefault(_TextSearch);

	var _TypeSelect = __webpack_require__(151);

	var _TypeSelect2 = _interopRequireDefault(_TypeSelect);

	var _RaritySelect = __webpack_require__(161);

	var _RaritySelect2 = _interopRequireDefault(_RaritySelect);

	var _FilterFaction = __webpack_require__(166);

	var _FilterFaction2 = _interopRequireDefault(_FilterFaction);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  components: {
	    TextSearch: _TextSearch2.default,
	    TypeSelect: _TypeSelect2.default,
	    RaritySelect: _RaritySelect2.default,
	    FilterFaction: _FilterFaction2.default
	  }
	};

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* styles */
	__webpack_require__(140)

	/* script */
	__vue_exports__ = __webpack_require__(142)

	/* template */
	var __vue_template__ = __webpack_require__(150)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-19", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-19", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] TextSearch.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(141);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-19!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TextSearch.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-19!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TextSearch.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, "\n@charset \"UTF-8\";\n/* Vendor */\n/* Partials */\n/*\r\n    https://jdsteinbach.com/css//sass-maps-breakpoint-mixin/\r\n\r\n    Usage:\r\n    @include breakpoint(md) {\r\n        ...\r\n    }\r\n*/\n.text-search {\n  position: relative;\n}\n.text-search:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n.text-search > .search {\n    background: #104365;\n    border: none;\n    padding: 10px;\n    width: 100%;\n}\n.text-search > .search:active, .text-search > .search:focus {\n      outline: none;\n}\n.text-search > .clear {\n    position: absolute;\n    right: 0;\n    top: 0;\n    color: #3c77a0;\n    height: 100%;\n    width: 30px;\n    font-size: 1.5rem;\n}\n.text-search > .clear:hover {\n      color: #01d6f3;\n}\n.text-search > .clear::before {\n      font-family: 'Material Icons';\n      content: \"\\E14C\";\n}\n", ""]);

	// exports


/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(143);

	var _extends3 = _interopRequireDefault(_extends2);

	var _vuex = __webpack_require__(133);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  computed: (0, _vuex.mapGetters)({
	    searchText: 'searchText'
	  }),

	  methods: (0, _extends3.default)({}, (0, _vuex.mapActions)(['textSearch']), {
	    clearSearch: function clearSearch() {
	      this.textSearch('');
	      this.$refs.search.focus();
	    }
	  })
	};

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _assign = __webpack_require__(144);

	var _assign2 = _interopRequireDefault(_assign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(145), __esModule: true };

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(146);
	module.exports = __webpack_require__(51).Object.assign;

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(49);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(147)});

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(70)
	  , gOPS     = __webpack_require__(148)
	  , pIE      = __webpack_require__(149)
	  , toObject = __webpack_require__(86)
	  , IObject  = __webpack_require__(73)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(60)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 148 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 149 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "text-search"
	  }, [_h('input', {
	    ref: "search",
	    staticClass: "search",
	    attrs: {
	      "type": "text",
	      "placeholder": "Search..."
	    },
	    domProps: {
	      "value": searchText
	    },
	    on: {
	      "keyup": function($event) {
	        textSearch($refs.search.value)
	      }
	    }
	  }), " ", _h('div', {
	    directives: [{
	      name: "show",
	      value: (searchText.length),
	      expression: "searchText.length"
	    }],
	    staticClass: "clear",
	    on: {
	      "click": function($event) {
	        clearSearch()
	      }
	    }
	  })])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-19", module.exports)
	  }
	}

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* styles */
	__webpack_require__(152)

	/* script */
	__vue_exports__ = __webpack_require__(154)

	/* template */
	var __vue_template__ = __webpack_require__(160)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-20", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-20", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] TypeSelect.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(153);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-20!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TypeSelect.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-20!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TypeSelect.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, "/* Vendor */\n/* Partials */\n/*\r\n    https://jdsteinbach.com/css//sass-maps-breakpoint-mixin/\r\n\r\n    Usage:\r\n    @include breakpoint(md) {\r\n        ...\r\n    }\r\n*/\n", ""]);

	// exports


/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _DropdownWrapper = __webpack_require__(155);

	var _DropdownWrapper2 = _interopRequireDefault(_DropdownWrapper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  computed: {
	    labelText: function labelText() {
	      return this.$store.state.cardList.typeSelect.length ? this.$store.state.cardList.typeSelect.join(', ') : 'Select type';
	    }
	  },

	  components: {
	    DropdownWrapper: _DropdownWrapper2.default
	  }
	};

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* styles */
	__webpack_require__(156)

	/* script */
	__vue_exports__ = __webpack_require__(158)

	/* template */
	var __vue_template__ = __webpack_require__(159)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-23", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-23", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] DropdownWrapper.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(157);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-23!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DropdownWrapper.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-23!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DropdownWrapper.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, "\n@charset \"UTF-8\";\n/* Vendor */\n/* Partials */\n/*\r\n    https://jdsteinbach.com/css//sass-maps-breakpoint-mixin/\r\n\r\n    Usage:\r\n    @include breakpoint(md) {\r\n        ...\r\n    }\r\n*/\n.dropdown-wrapper {\n  background: #104365;\n  position: relative;\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n.dropdown-wrapper > .menu {\n    padding: 0 10px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n.dropdown-wrapper:focus, .dropdown-wrapper:active {\n    outline: none;\n}\n.dropdown-wrapper > .options {\n    list-style: none;\n    padding: 0;\n    display: none;\n    position: absolute;\n    width: 100%;\n    background: #104365;\n    z-index: 10;\n    top: 42px;\n}\n.dropdown-wrapper > .options > .option {\n      padding: 10px;\n}\n.dropdown-wrapper > .options > .option::before {\n        font-family: 'Material Icons';\n        content: \"\\E835\";\n        position: relative;\n        top: 2px;\n        margin-right: 10px;\n}\n.dropdown-wrapper > .options > .option.selected::before {\n        font-family: 'Material Icons';\n        content: \"\\E834\";\n}\n.dropdown-wrapper > .options > .option:hover {\n        background: #092639;\n}\n.dropdown-wrapper:focus > .options {\n  display: block;\n}\n", ""]);

	// exports


/***/ },
/* 158 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {};

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "dropdown-wrapper",
	    attrs: {
	      "tabindex": "1"
	    }
	  }, [_t("default")])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-23", module.exports)
	  }
	}

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('dropdown-wrapper', [_h('div', {
	    staticClass: "menu"
	  }, [_s(labelText)]), " ", _h('ul', {
	    staticClass: "options"
	  }, [_h('li', {
	    class: ['option', {
	      'selected': $store.state.cardList.typeSelect.includes('artifact')
	    }],
	    on: {
	      "click": function($event) {
	        $store.dispatch('typeSelect', 'artifact')
	      }
	    }
	  }, ["Artifact"]), " ", _h('li', {
	    class: ['option', {
	      'selected': $store.state.cardList.typeSelect.includes('minion')
	    }],
	    on: {
	      "click": function($event) {
	        $store.dispatch('typeSelect', 'minion')
	      }
	    }
	  }, ["Minion"]), " ", _h('li', {
	    class: ['option', {
	      'selected': $store.state.cardList.typeSelect.includes('spell')
	    }],
	    on: {
	      "click": function($event) {
	        $store.dispatch('typeSelect', 'spell')
	      }
	    }
	  }, ["Spell"]), " ", _h('li', {
	    class: ['option', {
	      'selected': $store.state.cardList.typeSelect.includes('general')
	    }],
	    on: {
	      "click": function($event) {
	        $store.dispatch('typeSelect', 'general')
	      }
	    }
	  }, ["General"])])])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-20", module.exports)
	  }
	}

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* styles */
	__webpack_require__(162)

	/* script */
	__vue_exports__ = __webpack_require__(164)

	/* template */
	var __vue_template__ = __webpack_require__(165)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-21", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-21", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] RaritySelect.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(163);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-21!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./RaritySelect.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-21!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./RaritySelect.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

	// exports


/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _DropdownWrapper = __webpack_require__(155);

	var _DropdownWrapper2 = _interopRequireDefault(_DropdownWrapper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  computed: {
	    labelText: function labelText() {
	      return this.$store.state.cardList.raritySelect.length ? this.$store.state.cardList.raritySelect.join(', ') : 'Select rarity';
	    }
	  },

	  components: {
	    DropdownWrapper: _DropdownWrapper2.default
	  }
	};

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('dropdown-wrapper', [_h('div', {
	    staticClass: "menu"
	  }, [_s(labelText)]), " ", _h('ul', {
	    staticClass: "options"
	  }, [_h('li', {
	    class: ['option', {
	      'selected': $store.state.cardList.raritySelect.includes('basic')
	    }],
	    on: {
	      "click": function($event) {
	        $store.dispatch('raritySelect', 'basic')
	      }
	    }
	  }, [" Basic"]), " ", _h('li', {
	    class: ['option', {
	      'selected': $store.state.cardList.raritySelect.includes('common')
	    }],
	    on: {
	      "click": function($event) {
	        $store.dispatch('raritySelect', 'common')
	      }
	    }
	  }, [" Common"]), " ", _h('li', {
	    class: ['option', {
	      'selected': $store.state.cardList.raritySelect.includes('rare')
	    }],
	    on: {
	      "click": function($event) {
	        $store.dispatch('raritySelect', 'rare')
	      }
	    }
	  }, [" Rare"]), " ", _h('li', {
	    class: ['option', {
	      'selected': $store.state.cardList.raritySelect.includes('epic')
	    }],
	    on: {
	      "click": function($event) {
	        $store.dispatch('raritySelect', 'epic')
	      }
	    }
	  }, [" Epic"]), " ", _h('li', {
	    class: ['option', {
	      'selected': $store.state.cardList.raritySelect.includes('legendary')
	    }],
	    on: {
	      "click": function($event) {
	        $store.dispatch('raritySelect', 'legendary')
	      }
	    }
	  }, [" Legendary"])])])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-21", module.exports)
	  }
	}

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* styles */
	__webpack_require__(167)

	/* script */
	__vue_exports__ = __webpack_require__(169)

	/* template */
	var __vue_template__ = __webpack_require__(170)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-22", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-22", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] FilterFaction.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(168);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-22!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./FilterFaction.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-22!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./FilterFaction.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

	// exports


/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _DropdownWrapper = __webpack_require__(155);

	var _DropdownWrapper2 = _interopRequireDefault(_DropdownWrapper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  computed: {
	    labelText: function labelText() {
	      return this.$store.state.cardList.factionSelect.length ? this.$store.state.cardList.factionSelect.join(', ') : 'Select faction';
	    },
	    currentFaction: function currentFaction() {
	      return this.$store.state.route.params.faction;
	    }
	  },

	  components: {
	    DropdownWrapper: _DropdownWrapper2.default
	  }
	};

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('dropdown-wrapper', [_h('div', {
	    staticClass: "menu"
	  }, [_s(labelText)]), " ", _h('ul', {
	    staticClass: "options"
	  }, [_h('li', {
	    class: ['option', {
	      'selected': $store.state.cardList.factionSelect.includes('neutral')
	    }],
	    on: {
	      "click": function($event) {
	        $store.dispatch('factionSelect', 'neutral')
	      }
	    }
	  }, [" Neutral"]), " ", _h('li', {
	    class: ['option', {
	      'selected': $store.state.cardList.factionSelect.includes(currentFaction)
	    }],
	    on: {
	      "click": function($event) {
	        $store.dispatch('factionSelect', currentFaction)
	      }
	    }
	  }, [" " + _s(currentFaction)])])])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-22", module.exports)
	  }
	}

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "filter-area"
	  }, [_h('div', {
	    staticClass: "medium"
	  }, [_h('text-search')]), " ", _h('div', {
	    staticClass: "small"
	  }, [_h('type-select')]), " ", _h('div', {
	    staticClass: "small"
	  }, [_h('rarity-select')]), " ", _h('div', {
	    staticClass: "small"
	  }, [_h('filter-faction')])])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-11", module.exports)
	  }
	}

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "deck-page"
	  }, [_h('filter-area'), " ", _h('div', {
	    staticClass: "left-column"
	  }, [_h('div', {
	    staticClass: "card-grid",
	    on: {
	      "mousewheel": function($event) {
	        swapPage($event)
	      }
	    }
	  }, [(visibleCards) && _l((visibleCards), function(card) {
	    return [(card.type !== 'general') ? _h('game-card', {
	      attrs: {
	        "card": card
	      }
	    }) : _h('general-card', {
	      attrs: {
	        "card": card
	      }
	    }), " "]
	  })]), " ", _h('card-pagination')]), " ", _h('div', {
	    staticClass: "right-column"
	  }, [_h('deck-list')])])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-2", module.exports)
	  }
	}

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _vue = __webpack_require__(1);

	var _vue2 = _interopRequireDefault(_vue);

	var _vuex = __webpack_require__(133);

	var _vuex2 = _interopRequireDefault(_vuex);

	var _cardList = __webpack_require__(174);

	var _cardList2 = _interopRequireDefault(_cardList);

	var _deck = __webpack_require__(180);

	var _deck2 = _interopRequireDefault(_deck);

	var _actions = __webpack_require__(181);

	var actions = _interopRequireWildcard(_actions);

	var _getters = __webpack_require__(203);

	var getters = _interopRequireWildcard(_getters);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_vue2.default.use(_vuex2.default);

	exports.default = new _vuex2.default.Store({
	  getters: getters,
	  actions: actions,
	  modules: {
	    cardList: _cardList2.default,
	    deck: _deck2.default
	  }
	});

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperty2 = __webpack_require__(175);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _mutations;

	var _mutationTypes = __webpack_require__(179);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var state = {
	  cards: [],
	  currentPage: 1,
	  cardsPerPage: 8,
	  textSearch: '',
	  typeSelect: [],
	  raritySelect: [],
	  factionSelect: []
	};

	var mutations = (_mutations = {}, (0, _defineProperty3.default)(_mutations, _mutationTypes.SET_CARDS, function (state, cards) {
	  state.cards = cards;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.SET_PAGE, function (state, pageNumber) {
	  state.currentPage = pageNumber;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.SET_PER_PAGE, function (state, perPage) {
	  state.cardsPerPage = perPage;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.TEXT_SEARCH, function (state, text) {
	  state.textSearch = text;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.SELECT_TYPE, function (state, typeSelect) {
	  state.typeSelect = typeSelect;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.SELECT_RARITY, function (state, raritySelect) {
	  state.raritySelect = raritySelect;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.SELECT_FACTION, function (state, factionSelect) {
	  state.factionSelect = factionSelect;
	}), _mutations);

	exports.default = {
	  state: state,
	  mutations: mutations
	};

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(176);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	};

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(177), __esModule: true };

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(178);
	var $Object = __webpack_require__(51).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(49);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(59), 'Object', {defineProperty: __webpack_require__(55).f});

/***/ },
/* 179 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var SELECT_GENERAL = exports.SELECT_GENERAL = 'SELECT_GENERAL';
	var SELECT_CARD = exports.SELECT_CARD = 'SELECT_CARD';
	var REMOVE_CARD = exports.REMOVE_CARD = 'REMOVE_CARD';
	var INCREMENT_CARD = exports.INCREMENT_CARD = 'INCREMENT_CARD';
	var DECREMENT_CARD = exports.DECREMENT_CARD = 'DECREMENT_CARD';
	var CLEAR_DECK = exports.CLEAR_DECK = 'CLEAR_DECK';
	var SET_FACTION = exports.SET_FACTION = 'SET_FACTION';

	var SET_CARDS = exports.SET_CARDS = 'SET_CARDS';
	var SET_PAGE = exports.SET_PAGE = 'SET_PAGE';
	var SET_PER_PAGE = exports.SET_PER_PAGE = 'SET_PER_PAGE';
	var TEXT_SEARCH = exports.TEXT_SEARCH = 'TEXT_SEARCH';
	var SELECT_TYPE = exports.SELECT_TYPE = 'SELECT_TYPE';
	var SELECT_RARITY = exports.SELECT_RARITY = 'SELECT_RARITY';
	var SELECT_FACTION = exports.SELECT_FACTION = 'SELECT_FACTION';

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperty2 = __webpack_require__(175);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _mutations;

	var _vue = __webpack_require__(1);

	var _vue2 = _interopRequireDefault(_vue);

	var _mutationTypes = __webpack_require__(179);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var state = {
	  general: null,
	  cards: [],
	  totalCards: 0,
	  spirit: 0,
	  faction: ''
	};

	var spiritCosts = {
	  basic: 0,
	  common: 40,
	  rare: 100,
	  epic: 350,
	  legendary: 900
	};

	var mutations = (_mutations = {}, (0, _defineProperty3.default)(_mutations, _mutationTypes.SELECT_GENERAL, function (state, general) {
	  if (state.general === null) state.totalCards++;
	  state.general = general;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.SELECT_CARD, function (state, _ref) {
	  var card = _ref.card;
	  var qty = _ref.qty;

	  _vue2.default.set(card, 'qty', qty);
	  state.cards.push(card);
	  state.totalCards += qty;
	  if (card.rarity && card.spirit !== 0) state.spirit += spiritCosts[card.rarity] * qty;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.SET_FACTION, function (state, faction) {
	  state.faction = faction;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.REMOVE_CARD, function (state, index) {
	  if (state.cards[index].rarity && state.cards[index].spirit !== 0) state.spirit -= spiritCosts[state.cards[index].rarity];
	  state.cards.splice(index, 1);
	  state.totalCards--;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.INCREMENT_CARD, function (state, index) {
	  state.cards[index].qty++;
	  state.totalCards++;
	  if (state.cards[index].rarity && state.cards[index].spirit !== 0) state.spirit += spiritCosts[state.cards[index].rarity];
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DECREMENT_CARD, function (state, index) {
	  state.cards[index].qty--;
	  state.totalCards--;
	  if (state.cards[index].rarity && state.cards[index].spirit !== 0) state.spirit -= spiritCosts[state.cards[index].rarity];
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.CLEAR_DECK, function (state) {
	  state.general = null;
	  state.cards = [];
	  state.totalCards = 0;
	  state.spirit = 0;
	}), _mutations);

	exports.default = {
	  state: state,
	  mutations: mutations
	};

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.goToPage = exports.factionSelect = exports.raritySelect = exports.typeSelect = exports.textSearch = exports.loadDeck = exports.setCardList = exports.clearDeck = exports.removeCard = exports.selectCard = exports.selectGeneral = undefined;

	var _regenerator = __webpack_require__(36);

	var _regenerator2 = _interopRequireDefault(_regenerator);

	var _toConsumableArray2 = __webpack_require__(182);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	var _slicedToArray2 = __webpack_require__(187);

	var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

	var _asyncToGenerator2 = __webpack_require__(39);

	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

	var _promise = __webpack_require__(40);

	var _promise2 = _interopRequireDefault(_promise);

	var _mutationTypes = __webpack_require__(179);

	var types = _interopRequireWildcard(_mutationTypes);

	var _generals = __webpack_require__(194);

	var _generals2 = _interopRequireDefault(_generals);

	var _cards = __webpack_require__(195);

	var _cards2 = _interopRequireDefault(_cards);

	var _getters = __webpack_require__(203);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var selectGeneral = exports.selectGeneral = function selectGeneral(_ref, general) {
	  var commit = _ref.commit;
	  var state = _ref.state;
	  return new _promise2.default(function (resolve) {
	    commit(types.SELECT_GENERAL, general);
	    commit(types.SET_FACTION, general.faction);
	    resolve();
	  });
	};

	var selectCard = exports.selectCard = function selectCard(_ref2, _ref3) {
	  var commit = _ref2.commit;
	  var state = _ref2.state;
	  var card = _ref3.card;
	  var qty = _ref3.qty;

	  if (state.deck.totalCards >= 40) return;

	  var cards = state.deck.cards;
	  var matchingCard = cards.find(function (c) {
	    return c.name === card.name;
	  });

	  if (matchingCard) {
	    if (matchingCard.qty < 3 && qty === 1) commit(types.INCREMENT_CARD, cards.indexOf(matchingCard));
	  } else {
	    commit(types.SELECT_CARD, { card: card, qty: qty });
	  }
	};

	var removeCard = exports.removeCard = function removeCard(_ref4, card) {
	  var commit = _ref4.commit;
	  var state = _ref4.state;

	  var cards = state.deck.cards;
	  var matchingCard = cards.find(function (c) {
	    return c.name === card.name;
	  });

	  if (matchingCard) {
	    if (matchingCard.qty === 1) {
	      commit(types.REMOVE_CARD, cards.indexOf(matchingCard));
	    } else {
	      commit(types.DECREMENT_CARD, cards.indexOf(matchingCard));
	    }
	  }
	};

	var clearDeck = exports.clearDeck = function clearDeck(_ref5) {
	  var commit = _ref5.commit;
	  var state = _ref5.state;
	  var dispatch = _ref5.dispatch;
	  return new _promise2.default(function (resolve) {
	    commit(types.CLEAR_DECK);
	    resolve();
	  });
	};

	var setCardList = exports.setCardList = function setCardList(_ref6, cards) {
	  var commit = _ref6.commit;
	  return new _promise2.default(function (resolve) {
	    commit(types.SET_CARDS, cards);
	    resolve();
	  });
	};

	var loadDeck = exports.loadDeck = function () {
	  var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref8, hash) {
	    var commit = _ref8.commit;
	    var dispatch = _ref8.dispatch;
	    var state = _ref8.state;

	    var cardList, generalList, _generalList$split, _generalList$split2, id, general;

	    return _regenerator2.default.wrap(function _callee$(_context) {
	      while (1) {
	        switch (_context.prev = _context.next) {
	          case 0:
	            cardList = atob(hash.slice(1)).split(',');
	            generalList = cardList.splice(0, 1)[0];
	            _generalList$split = generalList.split(':');
	            _generalList$split2 = (0, _slicedToArray3.default)(_generalList$split, 2);
	            id = _generalList$split2[1];
	            general = _generals2.default.find(function (general) {
	              return general.id === Number(id);
	            });

	            if (general) {
	              _context.next = 8;
	              break;
	            }

	            throw Error('General required');

	          case 8:
	            _context.next = 10;
	            return dispatch('selectGeneral', general);

	          case 10:
	            _context.next = 12;
	            return dispatch('setCardList', [].concat((0, _toConsumableArray3.default)(_cards2.default[state.deck.faction]), (0, _toConsumableArray3.default)(_cards2.default.neutral)));

	          case 12:
	            cardList.forEach(function (card) {
	              var _card$split = card.split(':');

	              var _card$split2 = (0, _slicedToArray3.default)(_card$split, 2);

	              var qty = _card$split2[0];
	              var id = _card$split2[1];

	              dispatch('selectCard', { card: state.cardList.cards.find(function (c) {
	                  return c.id === Number(id);
	                }), qty: Number(qty) });
	            });

	            return _context.abrupt('return', general.faction);

	          case 14:
	          case 'end':
	            return _context.stop();
	        }
	      }
	    }, _callee, undefined);
	  }));

	  return function loadDeck(_x, _x2) {
	    return _ref7.apply(this, arguments);
	  };
	}();

	var textSearch = exports.textSearch = function textSearch(_ref9, text) {
	  var commit = _ref9.commit;

	  commit(types.TEXT_SEARCH, text);
	  commit(types.SET_PAGE, 1);
	};

	var typeSelect = exports.typeSelect = function typeSelect(_ref10, type) {
	  var commit = _ref10.commit;
	  var state = _ref10.state;

	  var typeSelect = [].concat((0, _toConsumableArray3.default)(state.cardList.typeSelect));
	  typeSelect.includes(type) ? typeSelect.splice(typeSelect.indexOf(type), 1) : typeSelect.push(type);
	  commit(types.SELECT_TYPE, typeSelect);
	  commit(types.SET_PAGE, 1);
	};

	var raritySelect = exports.raritySelect = function raritySelect(_ref11, rarity) {
	  var commit = _ref11.commit;
	  var state = _ref11.state;

	  var raritySelect = [].concat((0, _toConsumableArray3.default)(state.cardList.raritySelect));
	  raritySelect.includes(rarity) ? raritySelect.splice(raritySelect.indexOf(rarity), 1) : raritySelect.push(rarity);
	  commit(types.SELECT_RARITY, raritySelect);
	  commit(types.SET_PAGE, 1);
	};

	var factionSelect = exports.factionSelect = function factionSelect(_ref12, faction) {
	  var commit = _ref12.commit;
	  var state = _ref12.state;

	  var factionSelect = [].concat((0, _toConsumableArray3.default)(state.cardList.factionSelect));
	  factionSelect.includes(faction) ? factionSelect.splice(factionSelect.indexOf(faction), 1) : factionSelect.push(faction);
	  commit(types.SELECT_FACTION, factionSelect);
	  commit(types.SET_PAGE, 1);
	};

	var goToPage = exports.goToPage = function goToPage(_ref13, direction) {
	  var commit = _ref13.commit;
	  var state = _ref13.state;

	  var currentPage = state.cardList.currentPage;
	  if (direction === -1 && currentPage > 1) commit(types.SET_PAGE, currentPage + direction);else if (direction === 1 && currentPage < (0, _getters.totalPages)(state)) commit(types.SET_PAGE, currentPage + direction);
	};

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _from = __webpack_require__(183);

	var _from2 = _interopRequireDefault(_from);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }

	    return arr2;
	  } else {
	    return (0, _from2.default)(arr);
	  }
	};

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(184), __esModule: true };

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(43);
	__webpack_require__(185);
	module.exports = __webpack_require__(51).Array.from;

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(52)
	  , $export        = __webpack_require__(49)
	  , toObject       = __webpack_require__(86)
	  , call           = __webpack_require__(95)
	  , isArrayIter    = __webpack_require__(96)
	  , toLength       = __webpack_require__(76)
	  , createProperty = __webpack_require__(186)
	  , getIterFn      = __webpack_require__(97);

	$export($export.S + $export.F * !__webpack_require__(104)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(55)
	  , createDesc      = __webpack_require__(63);

	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _isIterable2 = __webpack_require__(188);

	var _isIterable3 = _interopRequireDefault(_isIterable2);

	var _getIterator2 = __webpack_require__(191);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  function sliceIterator(arr, i) {
	    var _arr = [];
	    var _n = true;
	    var _d = false;
	    var _e = undefined;

	    try {
	      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
	        _arr.push(_s.value);

	        if (i && _arr.length === i) break;
	      }
	    } catch (err) {
	      _d = true;
	      _e = err;
	    } finally {
	      try {
	        if (!_n && _i["return"]) _i["return"]();
	      } finally {
	        if (_d) throw _e;
	      }
	    }

	    return _arr;
	  }

	  return function (arr, i) {
	    if (Array.isArray(arr)) {
	      return arr;
	    } else if ((0, _isIterable3.default)(Object(arr))) {
	      return sliceIterator(arr, i);
	    } else {
	      throw new TypeError("Invalid attempt to destructure non-iterable instance");
	    }
	  };
	}();

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(189), __esModule: true };

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(87);
	__webpack_require__(43);
	module.exports = __webpack_require__(190);

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(92)
	  , ITERATOR  = __webpack_require__(84)('iterator')
	  , Iterators = __webpack_require__(66);
	module.exports = __webpack_require__(51).isIterable = function(it){
	  var O = Object(it);
	  return O[ITERATOR] !== undefined
	    || '@@iterator' in O
	    || Iterators.hasOwnProperty(classof(O));
	};

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(192), __esModule: true };

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(87);
	__webpack_require__(43);
	module.exports = __webpack_require__(193);

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(56)
	  , get      = __webpack_require__(97);
	module.exports = __webpack_require__(51).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 194 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var generals = [{ id: 1, name: 'Argeon Highmayne', type: 'general', faction: 'lyonar', attack: 2, health: 25, text: '<b>Bloodborn Spell:</b> Give a minon nearby your General +2 Attack.' }, { id: 23, name: 'Zir\'An Sunforge', type: 'general', faction: 'lyonar', attack: 2, health: 25, text: '<b>Bloodborn Spell:</b> Restore 3 Health to any minion.' }, { id: 101, name: 'Kaleos Xaan', type: 'general', faction: 'songhai', attack: 2, health: 25, text: '<b>Bloodborn Spell:</b> Teleport a friendly minion up to 2 spaces.' }, { id: 123, name: 'Reva Eventide', type: 'general', faction: 'songhai', attack: 2, health: 25, text: '<b>Bloodborn Spell:</b> Summon a Heartseeker nearby your General.' }, { id: 223, name: 'Scioness Sajj', type: 'general', faction: 'vetruvian', attack: 2, health: 25, text: '<b>Bloodborn Spell:</b> Your General deals double damage to minion this turn.' }, { id: 201, name: 'Zirix Starstrider', type: 'general', faction: 'vetruvian', attack: 2, health: 25, text: '<b>Bloodborn Spell:</b> Summon a 2/2 Iron Dervish on a random space nearby your General.' }, { id: 323, name: 'Cassyva Soulreaper', type: 'general', faction: 'abyssian', attack: 2, health: 25, text: '<b>Bloodborn Spell:</b> Deal 1 damage to a minion. If it dies this turn, the space turns into Shadow Creep.' }, { id: 301, name: 'Lilthe Blightcaster', type: 'general', faction: 'abyssian', attack: 2, health: 25, text: '<b>Bloodborn Spell:</b> Summon 2 Wraithlings nearby your General.' }, { id: 418, name: 'Starhorn the Seeker', type: 'general', faction: 'magmar', attack: 2, health: 25, text: '<b>Bloodborn Spell:</b> Both players draw a card.' }, { id: 401, name: 'Vaath the Immortal', type: 'general', faction: 'magmar', attack: 2, health: 25, text: '<b>Bloodborn Spell:</b> Give your General +1 Attack.' }, { id: 501, name: 'Faie Bloodwing', type: 'general', faction: 'vanar', attack: 2, health: 25, text: '<b>Bloodborn Spell:</b> Deal 2 damage to all enemies in the enemy General\'s Column' }, { id: 527, name: 'Kara Winterblade', type: 'general', faction: 'vanar', attack: 2, health: 25, text: '<b>Bloodborn Spell:</b> Give each minion in your hand +1/+1.' }];

	exports.default = generals;

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _abyssian = __webpack_require__(196);

	var _abyssian2 = _interopRequireDefault(_abyssian);

	var _lyonar = __webpack_require__(197);

	var _lyonar2 = _interopRequireDefault(_lyonar);

	var _magmar = __webpack_require__(198);

	var _magmar2 = _interopRequireDefault(_magmar);

	var _songhai = __webpack_require__(199);

	var _songhai2 = _interopRequireDefault(_songhai);

	var _vanar = __webpack_require__(200);

	var _vanar2 = _interopRequireDefault(_vanar);

	var _vetruvian = __webpack_require__(201);

	var _vetruvian2 = _interopRequireDefault(_vetruvian);

	var _neutral = __webpack_require__(202);

	var _neutral2 = _interopRequireDefault(_neutral);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var cards = { abyssian: _abyssian2.default, lyonar: _lyonar2.default, magmar: _magmar2.default, songhai: _songhai2.default, vanar: _vanar2.default, vetruvian: _vetruvian2.default, neutral: _neutral2.default };
	exports.default = cards;

/***/ },
/* 196 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var abyssian = [{ id: 20059, name: 'Darkfire Sacrifice', type: 'spell', cost: 0, rarity: 'rare', faction: 'abyssian', text: 'Destroy a friendly minion. Your next minion costs 2 less.' }, { id: 308, name: 'Abyssal Crawler', type: 'minion', cost: 1, rarity: 'basic', attack: 2, health: 1, faction: 'abyssian', text: 'At the end of your turn, turn a nearby space into <b>Shadow Creep</b>.' }, { id: 20070, name: 'Grasp of Agony', type: 'spell', cost: 1, rarity: 'common', faction: 'abyssian', text: 'Choose an enemy minion. When it dies, it deals 3 damage to enemies around it.' }, { id: 30005, name: 'Horn of the Forsaken', type: 'artifact', cost: 1, rarity: 'basic', faction: 'abyssian', text: 'Whenever your General deals damage, summon a 1/1 Wraithling nearby your General.' }, { id: 20201, name: 'Sphere of Darkness', type: 'spell', cost: 1, rarity: 'common', faction: 'abyssian', text: 'Turn a space into <b>Shadow Creep</b>. Draw a card.' }, { id: 20052, name: 'Void Pulse', type: 'spell', cost: 1, rarity: 'common', faction: 'abyssian', text: 'Deal 2 damage to an enemy General. Restore 3 Health to your General.' }, { id: 313, name: 'Blood Siren', type: 'minion', cost: 2, rarity: 'common', attack: 3, health: 2, faction: 'abyssian', text: '<b>Opening Gambit</b>: Give a nearby enemy minion or General -2 Attack this turn.' }, { id: 20166, name: 'Consuming Rebirth', type: 'spell', cost: 2, rarity: 'epic', faction: 'abyssian', text: 'Destroy a friendly minion. At the end of your turn, re-summon it on the same space and give it +1/+1.' }, { id: 20049, name: 'Daemonic Lure', type: 'spell', cost: 2, rarity: 'basic', faction: 'abyssian', text: 'Deal 1 damage to an enemy minion and teleport it to any space on the battlefield.' }, { id: 316, name: 'Darkspine Elemental', type: 'minion', cost: 2, rarity: 'rare', attack: 1, health: 4, faction: 'abyssian', text: 'Double the damage dealt by friendly Shadow Creep.' }, { id: 20204, name: 'Echoing Shriek', type: 'spell', cost: 2, rarity: 'epic', faction: 'abyssian', text: 'Transform ALL minions that cost 2 or less into 1/1 Wraithlins.' }, { id: 317, name: 'Gloomchaser', type: 'minion', cost: 2, rarity: 'basic', attack: 2, health: 2, faction: 'abyssian', text: '<b>Opening Gambit</b>: Summon a 1/1 Wraithling in a random nearby space.' }, { id: 326, name: 'Gor', type: 'minion', race: 'battle pet', cost: 2, rarity: 'common', attack: 1, health: 1, faction: 'abyssian', text: '<b>Dying Wish</b>: Summon a copy of this minion in a random unoccupied corner.' }, { id: 20200, name: 'Inkhorn Gaze', type: 'spell', cost: 2, rarity: 'common', faction: 'abyssian', text: 'Deal 2 damage to a minion. If it dies this turn, put a random Battle Pet into your action bar.' }, { id: 20199, name: 'Lurking Fear', type: 'spell', cost: 2, rarity: 'epic', faction: 'abyssian', text: 'Lower the cost of all minions with <b>Dying Wish</b> in your action bar and deck by 1.' }, { id: 327, name: 'Ooz', type: 'minion', race: 'battle pet', cost: 2, rarity: 'rare', attack: 3, health: 3, faction: 'abyssian', text: 'Whenever this minion takes damage, turn a space occupied by an enemy into <b>Shadow Creep</b>.' }, { id: 20071, name: 'Soulshatter Pact', type: 'spell', cost: 2, rarity: 'basic', faction: 'abyssian', text: 'Give all friendly minions +2 Attack this turn.' }, { id: 30014, name: 'Spectral Blade', type: 'artifact', cost: 2, rarity: 'epic', faction: 'abyssian', text: 'Your General gains +2 Attack. Whenever your General destroys an enemy minion, restore 2 Health to your General.' }, { id: 328, name: 'Blood Baronette', type: 'minion', cost: 3, rarity: 'rare', attack: 3, health: 3, faction: 'abyssian', text: '<b>Opening Gambit</b>: Double a nearby Wraithling\'s Attack and Health.' }, { id: 20133, name: 'Deathfire Crescendo', type: 'spell', cost: 3, rarity: 'legendary', faction: 'abyssian', text: 'Give a friendly minion, "<b>Deathwatch</b>: Gains +2/+2."' }, { id: 319, name: 'Nightsorrow Assassin', type: 'minion', cost: 3, rarity: 'common', attack: 2, health: 1, faction: 'abyssian', text: '<b>Opening Gambit</b>: Destroy a nearby enemy minion with 2 or less Attack.' }, { id: 20057, name: 'Ritual Banishing', type: 'spell', cost: 3, rarity: 'rare', faction: 'abyssian', text: 'Destroy a friendly minion to destroy an enemy minion.' }, { id: 20065, name: 'Shadow Reflection', type: 'spell', cost: 3, rarity: 'common', faction: 'abyssian', text: 'Give a friendly minion +5 Attack.' }, { id: 311, name: 'Shadow Watcher', type: 'minion', cost: 3, rarity: 'basic', attack: 2, health: 2, faction: 'abyssian', text: '<b>Deathwatch</b>: Gains +1/+1.' }, { id: 30002, name: 'Soul Grimwar', type: 'artifact', cost: 3, rarity: 'legendary', faction: 'abyssian', text: 'Your General gains, "<b>Deathwatch</b>: Gains +2 Attack."' }, { id: 20205, name: 'Void Steal', type: 'spell', cost: 3, rarity: 'rare', faction: 'abyssian', text: 'Give an enemy minion +3 Attack. Nearby friendly minions gain +3 Attack.' }, { id: 20089, name: 'Wraithling Fury', type: 'spell', cost: 3, rarity: 'epic', faction: 'abyssian', text: 'Give a friendly Wraithling minion +4/+4.' }, { id: 20072, name: 'Wraithling Swarm', type: 'spell', cost: 3, rarity: 'basic', faction: 'abyssian', text: 'Summon three 1/1 Wraithlings nearby each other.' }, { id: 309, name: 'Abyssal Juggernaut', type: 'minion', cost: 4, rarity: 'common', attack: 3, health: 3, faction: 'abyssian', text: 'This minion has +1/+1 for each friendly <b>Shadow Creep</b>.' }, { id: 310, name: 'Bloodmoon Priestess', type: 'minion', cost: 4, rarity: 'rare', attack: 3, health: 3, faction: 'abyssian', text: '<b>Deathwatch</b>: Summon a Wraithling on a random nearby space.' }, { id: 20131, name: 'Breath Of The Unborn', type: 'spell', cost: 4, rarity: 'common', faction: 'abyssian', text: 'Deal 2 damage to all enemy minions. Restore all friendly minions to full Health.' }, { id: 20069, name: 'Dark Seed', type: 'spell', cost: 4, rarity: 'rare', faction: 'abyssian', text: 'Deal 1 damage to the enemy General for each card in the opponent\'s action bar.' }, { id: 312, name: 'Deepfire Devourer', type: 'minion', cost: 4, rarity: 'common', attack: 4, health: 4, faction: 'abyssian', text: '<b>Frenzy</b><br> <b>Opening Gambit</b>: Destroy friendly minions around it and gain +2/+2 for each minion.' }, { id: 30020, name: 'Ghost Azalea', type: 'artifact', cost: 4, rarity: 'legendary', faction: 'abyssian', text: 'Your General gains +1 Attack for each friendly <b>Shadow Creep</b>.' }, { id: 20051, name: 'Shadow Nova', type: 'spell', cost: 4, rarity: 'basic', faction: 'abyssian', text: 'Turn a 2x2 area into <b>Shadow Creep</b>.' }, { id: 324, name: 'Shadow Sister Kelaino', type: 'minion', cost: 4, rarity: 'legendary', attack: 2, health: 5, spirit: 0, faction: 'abyssian', text: 'Whenever an enemy minion or General takes damage, restore 1 Health to your General.' }, { id: 321, name: 'Black Solus', type: 'minion', cost: 5, rarity: 'epic', attack: 4, health: 7, faction: 'abyssian', text: 'Whenever you summon a Wraithling, this gains +2 Attack.' }, { id: 20061, name: 'Dark Transformation', type: 'spell', cost: 5, rarity: 'basic', faction: 'abyssian', text: 'Destroy an enemy minion and summon a 1/1 Wraithling on that space.' }, { id: 20050, name: 'Nether Summoning', type: 'spell', cost: 5, rarity: 'legendary', faction: 'abyssian', text: 'Summon 2 non-token minions destroyed since the end of your last turn nearby.' }, { id: 325, name: 'Night Fiend', type: 'minion', cost: 5, rarity: 'common', attack: 3, health: 3, faction: 'abyssian', text: '<b>Opening Gambit</b>: Deal 2 damage to each enemy on or near friendly <b>Shadow Creep</b>.' }, { id: 322, name: 'Reaper of the Nine Moons', type: 'minion', cost: 5, rarity: 'epic', attack: 5, health: 3, faction: 'abyssian', text: '<b>Flying</b><br> <b>Dying Wish</b>: Summon a random minion from the opponent\'s deck on this space.' }, { id: 20154, name: 'Rite Of The Undervault', type: 'spell', cost: 5, rarity: 'epic', faction: 'abyssian', text: 'Draw to fill your action bar.' }, { id: 318, name: 'Shadowdancer', type: 'minion', cost: 5, rarity: 'rare', attack: 4, health: 4, faction: 'abyssian', text: '<b>Deathwatch</b>: Deal 1 damage to the enemy General, and restore 1 Health to your General.' }, { id: 330, name: 'Klaxon', type: 'minion', cost: 6, rarity: 'legendary', attack: 6, health: 6, faction: 'abyssian', text: '<b>Provoke</b><br> <b>Dying Wish</b>: Turn six random spaces into <b>Shadow Creep</b>.' }, { id: 314, name: 'Vorpal Reaver', type: 'minion', cost: 6, rarity: 'legendary', attack: 6, health: 6, faction: 'abyssian', text: '<b>Celerity</b><br> <b>Dying Wish</b>: Summon six Wraithlings on random spaces.' }, { id: 329, name: 'Arcane Devourer', type: 'minion', cost: 7, rarity: 'epic', attack: 8, health: 7, faction: 'abyssian', text: '<b>Opening Gambit</b>: The next minion you summon this turn costs 1.' }, { id: 320, name: 'Spectral Revenant', type: 'minion', cost: 7, rarity: 'legendary', attack: 6, health: 6, faction: 'abyssian', text: '<b>Rush</b><br> Whenever this deals damage to an enemy minion, deal 4 damage to the enemy General.' }, { id: 20213, name: 'Obliterate', type: 'spell', cost: 8, rarity: 'legendary', faction: 'abyssian', text: 'Destroy all friendly <b>Shadow Creep</b> to deal that much damage to all enemies.' }];

	exports.default = abyssian;

/***/ },
/* 197 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var lyonar = [{ id: 20109, name: 'Beam Shock', type: 'spell', cost: 0, rarity: 'common', faction: 'lyonar', text: '<b>Stun</b> an enemy minion or General.' }, { id: 26, name: 'Slo', type: 'minion', race: 'battle pet', cost: 0, rarity: 'common', attack: 1, health: 4, faction: 'lyonar', text: '<b>Provoke</b>' }, { id: 30004, name: 'Sunstone Bracers', type: 'artifact', cost: 0, rarity: 'basic', faction: 'lyonar', text: 'Your General gains +1 Attack.' }, { id: 20120, name: 'Aegis Barrier', type: 'spell', cost: 1, rarity: 'legendary', faction: 'lyonar', text: 'Choose a friendly minion. It can\'t be targeted by enemy spells. Draw a card.' }, { id: 20158, name: 'Aerial Rift', type: 'spell', cost: 1, rarity: 'epic', faction: 'lyonar', text: 'Give your minions <b>Airdrop</b> this turn. Draw a card.' }, { id: 20045, name: 'Auryn Nexus', type: 'spell', cost: 1, rarity: 'common', faction: 'lyonar', text: 'Give a friendly minion +3 Health' }, { id: 20189, name: 'Fighting Spirit', type: 'spell', cost: 1, rarity: 'epic', faction: 'lyonar', text: 'Give all friendly minions +1 Health. Put a random Battle Pet into your action bar.' }, { id: 20062, name: 'Lionheart Blessing', type: 'spell', cost: 1, rarity: 'rare', faction: 'lyonar', text: 'Give a friendly minion, "<b>Zeal</b>: Whenever this minion deals damage, draw a card."' }, { id: 20161, name: 'Magnetize', type: 'spell', cost: 1, rarity: 'rare', faction: 'lyonar', text: 'Pull ANY minion to the space in front of your General.' }, { id: 14, name: 'Silverguard Squire', type: 'minion', cost: 1, rarity: 'common', attack: 1, health: 4, faction: 'lyonar', text: '' }, { id: 20043, name: 'Sundrop Elixir', type: 'spell', cost: 1, rarity: 'common', faction: 'lyonar', text: 'Restore 5 Health to a minion or General.' }, { id: 20066, name: 'True Strike', type: 'spell', cost: 1, rarity: 'basic', faction: 'lyonar', text: 'Deal 2 damage to a minion.' }, { id: 21, name: 'Azurite Lion', type: 'minion', cost: 2, rarity: 'common', attack: 2, health: 3, faction: 'lyonar', text: '<b>Celerity</b>' }, { id: 25, name: 'Fiz', type: 'minion', race: 'battle pet', cost: 2, rarity: 'rare', attack: 3, health: 3, faction: 'lyonar', text: '<b>Opening Gambit</b>: Restore 2 Health to a minion or General.' }, { id: 20046, name: 'Lasting Judgement', type: 'spell', cost: 2, rarity: 'rare', faction: 'lyonar', text: 'Give ANY minion +3 Attack, but -3 Health.' }, { id: 15, name: 'Lightchaser', type: 'minion', cost: 2, rarity: 'common', attack: 3, health: 2, faction: 'lyonar', text: 'Whenever ANY minion or General is healed, this minion gains +1/+1' }, { id: 20190, name: 'Lucent Beam', type: 'spell', cost: 2, rarity: 'common', faction: 'lyonar', text: 'Deal 2 damage to an enemy. If a minion or General was healed this turn, deal 4 damage instead.' }, { id: 20064, name: 'Sun Bloom', type: 'spell', cost: 2, rarity: 'common', faction: 'lyonar', text: 'Dispel a 2x2 area on the battlefield.' }, { id: 27, name: 'Sun Wisp', type: 'minion', cost: 2, rarity: 'common', attack: 2, health: 1, faction: 'lyonar', text: '<b>Opening Gambit</b>: Draw a card.' }, { id: 10, name: 'Sunstone Templar', type: 'minion', cost: 2, rarity: 'epic', attack: 1, health: 4, faction: 'lyonar', text: 'Whenever this attacks or counterattacks, it dispels that enemy.' }, { id: 20044, name: 'Tempest', type: 'spell', cost: 2, rarity: 'basic', faction: 'lyonar', text: 'Deal 2 damage to ALL minions and Generals.' }, { id: 20047, name: 'War Surge', type: 'spell', cost: 2, rarity: 'basic', faction: 'lyonar', text: 'Give all friendly minions +1/+1' }, { id: 9, name: 'Windblade Adept', type: 'minion', cost: 2, rarity: 'basic', attack: 2, health: 3, faction: 'lyonar', text: '<b>Zeal</b>: Gain +2 Attack.' }, { id: 20188, name: 'Afterblaze', type: 'spell', cost: 3, rarity: 'common', faction: 'lyonar', text: 'Give a friendly minion +2/+4. If that minion has <b>Zeal</b>, draw a card.' }, { id: 12, name: 'Arclyte Sentinel', type: 'minion', cost: 3, rarity: 'rare', attack: 2, health: 4, faction: 'lyonar', text: '<b>Opening Gambit</b>: Give ANY nearby minion +2 Attack, but -2 Health.' }, { id: 20068, name: 'Divine Bond', type: 'spell', cost: 3, rarity: 'basic', faction: 'lyonar', text: 'Give a minion +Attack equal to its Health.' }, { id: 20090, name: 'Martyrdom', type: 'spell', cost: 3, rarity: 'basic', faction: 'lyonar', text: 'Destroy ANY minion. Restore that minion\'s Health to its General' }, { id: 28, name: 'Radiant Dragoon', type: 'minion', cost: 3, rarity: 'rare', attack: 3, health: 4, faction: 'lyonar', text: 'At the end of your turn, give a friendly minion +1 Health.' }, { id: 11, name: 'Silverguard Knight', type: 'minion', cost: 3, rarity: 'basic', attack: 1, health: 5, faction: 'lyonar', text: '<b>Provoke</b><br> <b>Zeal</b>: Grains +2 Attack.' }, { id: 20187, name: 'Sky Burial', type: 'spell', cost: 3, rarity: 'rare', faction: 'lyonar', text: 'Destroy a minion that is not nearby any General.' }, { id: 30001, name: 'Skywind Glaives', type: 'artifact', cost: 3, rarity: 'epic', faction: 'lyonar', text: 'Friendly minions nearby your General gain +2 Attack.' }, { id: 29, name: 'Sunforge Lancer', type: 'minion', cost: 3, rarity: 'epic', attack: 2, health: 4, faction: 'lyonar', text: 'Whenever ANY minion or General is healed, give your General +1 Attack.' }, { id: 30018, name: 'Arclyte Regalia', type: 'artifact', cost: 4, rarity: 'legendary', faction: 'lyonar', text: 'Your General gains +2 Attack. The first time your General takes damage each turn, prevent 2 of it.' }, { id: 20128, name: 'Decimate', type: 'spell', cost: 4, rarity: 'legendary', faction: 'lyonar', text: 'Destroy ALL minions that are not nearby any General.' }, { id: 20067, name: 'Holy Immolation', type: 'spell', cost: 4, rarity: 'epic', faction: 'lyonar', text: 'Restore 4 Health to a friendly minon. Deal 4 damage to enemy minions and Generals around it.' }, { id: 20186, name: 'Ironcliffe Heart', type: 'spell', cost: 4, rarity: 'epic', faction: 'lyonar', text: 'Transform a friendly minion into an Ironcliffe Guardian' }, { id: 8, name: 'Lysian Brawler', type: 'minion', cost: 4, rarity: 'basic', attack: 4, health: 4, faction: 'lyonar', text: '<b>Celerity</b>' }, { id: 24, name: 'Sun Sister Sterope', type: 'minion', cost: 4, rarity: 'legendary', attack: 4, health: 4, spirit: 0, faction: 'lyonar', text: 'Whenever ANY minion or General is healed, put a True Strike into your action bar.' }, { id: 22, name: 'Sunriser', type: 'minion', cost: 4, rarity: 'epic', attack: 3, health: 4, faction: 'lyonar', text: 'Whenever ANY minion or General is healed, deal 2 damage to all nearby enemies.' }, { id: 16, name: 'Suntide Maiden', type: 'minion', cost: 4, rarity: 'common', attack: 3, health: 6, faction: 'lyonar', text: '<b>Zeal</b>: At the end of your turn, restore this minion to full Health.' }, { id: 20104, name: 'Circle of Life', type: 'spell', cost: 5, rarity: 'epic', faction: 'lyonar', text: 'Deal 5 damage to any enemy minion. Restore 5 Health to your General.' }, { id: 17, name: 'Ironcliffe Guardian', type: 'minion', cost: 5, rarity: 'rare', attack: 3, Health: 10, faction: 'lyonar', text: '<b>Airdrop</b>, <b>Provoke</b>' }, { id: 13, name: 'Second Sun', type: 'minion', cost: 5, rarity: 'rare', attack: 0, health: 8, faction: 'lyonar', text: '<b>Zeal</b>: Gains +8 Attack.' }, { id: 30024, name: 'Dawn\'s Eye', type: 'artifact', cost: 6, rarity: 'legendary', faction: 'lyonar', text: 'Your General gains +4 Attack. At the end of your turn, repair all of your artifacts to full durability.' }, { id: 18, name: 'Elyx Stormblade', type: 'minion', cost: 6, rarity: 'legendary', attack: 7, health: 7, faction: 'lyonar', text: '<b>Provoke</b><br> Your minions and General may move an additional space.' }, { id: 30, name: 'Solarius', type: 'minion', cost: 6, rarity: 'legendary', attack: 3, health: 3, faction: 'lyonar', text: 'Zeal: Draw 2 additional cards at the end of your turn.' }, { id: 20, name: 'Grandmaster Z\'ir', type: 'minion', cost: 7, rarity: 'legendary', attack: 5, health: 12, faction: 'lyonar', text: 'Whenever your General dies, Grandmaster Z\'ir becomes your General.' }, { id: 20220, name: 'Sky Phalanx', type: 'spell', cost: 8, rarity: 'legendary', faction: 'lyonar', text: 'Summon three Silverguard Knights nearby your General.' }];

	exports.default = lyonar;

/***/ },
/* 198 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var magmar = [{ id: 20111, name: 'Dampening Wave', type: 'spell', cost: 0, rarity: 'basic', faction: 'magmar', text: 'Choose an enemy minion. It can no longer couterattack.' }, { id: 20112, name: 'Flash Reincarnation', type: 'spell', cost: 0, rarity: 'rare', faction: 'magmar', text: 'The next minion you summon this turn costs 2 less and takes 2 damage.' }, { id: 20119, name: 'Amplification', type: 'spell', cost: 1, rarity: 'common', faction: 'magmar', text: 'Give a friendly damaged minion +2 Attack and +4 Health.' }, { id: 20115, name: 'Dance of Dreams', type: 'spell', cost: 1, rarity: 'basic', faction: 'magmar', text: 'Whenever a friendly minion dies this turn, draw a card.' }, { id: 20116, name: 'Greater Fortitude', type: 'spell', cost: 1, rarity: 'basic', faction: 'magmar', text: 'Give a friendly minion +2/+2.' }, { id: 20203, name: 'Lava Lance', type: 'spell', cost: 1, rarity: 'common', faction: 'magmar', text: 'Deal 2 damage to a minion. If you have an Egg, deal 4 damage instead.' }, { id: 20202, name: 'Razor Skin', type: 'spell', cost: 1, rarity: 'common', faction: 'magmar', text: 'Give all friendly minions +1 Attack. Put a random Battle Pet into your action bar.' }, { id: 421, name: 'Rex', type: 'minion', race: 'battle pet', cost: 1, rarity: 'common', attack: 3, health: 1, faction: 'magmar', text: '<b>Rebirth</b>' }, { id: 20113, name: 'Diretide Frenzy', type: 'spell', cost: 2, rarity: 'common', faction: 'magmar', text: 'Give a friendly minion +1 Attack and <b>Frenzy</b>.' }, { id: 420, name: 'Gro', type: 'minion', race: 'battle pet', cost: 2, rarity: 'rare', attack: 2, health: 4, faction: 'magmar', text: '<b>Grow</b>: +1/+1.' }, { id: 30013, name: 'Iridium Scale', type: 'artifact', cost: 2, rarity: 'epic', faction: 'magmar', text: 'Your General gains <b>Frenzy</b>.' }, { id: 409, name: 'Kujata', type: 'minion', cost: 2, rarity: 'epic', attack: 2, health: 2, faction: 'magmar', text: 'Your minions cost 1 less to summon and take 1 damage when summoned from your action bar.' }, { id: 20125, name: 'Natural Selection', type: 'spell', cost: 2, rarity: 'basic', faction: 'magmar', text: 'Destroy ANY minion with the lowest Attack or tied for the lowest Attack.' }, { id: 406, name: 'Phalanxar', type: 'minion', cost: 2, rarity: 'basic', attack: 6, health: 1, faction: 'magmar', text: '' }, { id: 20114, name: 'Tremor', type: 'spell', cost: 2, rarity: 'common', faction: 'magmar', text: '<b>Stun</b> enemy minions in a 2x2 area.' }, { id: 412, name: 'Young Silithar', type: 'minion', cost: 2, rarity: 'common', attack: 2, health: 3, faction: 'magmar', text: '<b>Rebirth</b>' }, { id: 402, name: 'Earth Walker', type: 'minion', cost: 3, rarity: 'basic', attack: 3, health: 3, faction: 'magmar', text: '<b>Grow</b>: +1/+1.' }, { id: 20162, name: 'Kinetic Equilibrium', type: 'spell', cost: 3, rarity: 'rare', faction: 'magmar', text: 'Deal 2 damage to ALL minion in a 3x3 area. Friendly minions in the area also gain +2 Attack.' }, { id: 423, name: 'Moloki Huntress', type: 'minion', cost: 3, rarity: 'epic', attack: 1, health: 2, faction: 'magmar', text: '<b>Grow</b>: +1/+1. Friendly minions grow at the start of BOTH player\'s turns.' }, { id: 410, name: 'Primordial Gazer', type: 'minion', cost: 3, rarity: 'basic', attack: 2, health: 2, faction: 'magmar', text: '<b>Opening Gambit</b>: Give a nearby friendly minion +2/+2.' }, { id: 20218, name: 'Thumping Wave', type: 'spell', cost: 3, rarity: 'rare', faction: 'magmar', text: 'Give a minion +5 Attack. At the end of turn, transform it into a 3/3 Kin.' }, { id: 30017, name: 'Twin Fang', type: 'artifact', cost: 3, rarity: 'legendary', faction: 'magmar', text: 'Whenever a friendly minion or your General takes damage, your General gains +2 Attack.' }, { id: 417, name: 'Vindicator', type: 'minion', cost: 3, rarity: 'legendary', attack: 1, health: 3, faction: 'magmar', text: 'Whenever your opponent draws a card, this minion gains +2/+2.' }, { id: 30012, name: 'Adamantite Claws', type: 'artifact', cost: 4, rarity: 'basic', faction: 'magmar', text: 'Your General gains +4 Attack.' }, { id: 20124, name: 'Chrysalis Burst', type: 'spell', cost: 4, rarity: 'legendary', faction: 'magmar', text: 'Summon a random Egg in 4 random spaces on the battlefield.' }, { id: 419, name: 'Earth Sister Taygete', type: 'minion', cost: 4, rarity: 'legendary', attack: 3, health: 4, spirit: 0, faction: 'magmar', text: 'Whenever this minion takes damage, deal that much damage to all nearby enemies.' }, { id: 20117, name: 'Earth Sphere', type: 'spell', cost: 4, rarity: 'common', faction: 'magmar', text: 'Restore 8 Health to your General.' }, { id: 20157, name: 'Egg Morph', type: 'spell', cost: 4, rarity: 'rare', faction: 'magmar', text: 'Turn a non-Egg minion into an Egg, or hatch an Egg.' }, { id: 407, name: 'Elucidator', type: 'minion', cost: 4, rarity: 'rare', attack: 5, health: 4, faction: 'magmar', text: '<b>Rush</b><br> <b>Opening Gambit</b>: Deal 4 damage to your General.' }, { id: 403, name: 'Grimrock', type: 'minion', cost: 4, rarity: 'common', attack: 3, health: 4, faction: 'magmar', text: '<b>Grow</b>: +2/+2.' }, { id: 20156, name: 'Mind Steal', type: 'spell', cost: 4, rarity: 'epic', faction: 'magmar', text: 'Steal a random minion from your opponent\'s deck and summon it.' }, { id: 413, name: 'Veteran Silithar', type: 'minion', cost: 4, rarity: 'common', attack: 4, health: 3, faction: 'magmar', text: '<b>Rebirth</b>' }, { id: 422, name: 'Wild Inceptor', type: 'minion', cost: 4, rarity: 'common', attack: 3, health: 3, faction: 'magmar', text: '<b>Opening Gambit</b>: Hatch a friendly Egg.' }, { id: 404, name: 'Kolossus', type: 'minion', cost: 5, rarity: 'common', attack: 1, health: 7, faction: 'magmar', text: '<b>Grow</b>: +4/+4.' }, { id: 30025, name: 'Morin-Khur', type: 'artifact', cost: 5, rarity: 'legendary', faction: 'magmar', text: 'Your General gains +3 Attack. Whenever your General deals damage, hatch all friendly Eggs.' }, { id: 20206, name: 'Nature\'s Confluence', type: 'spell', cost: 5, rarity: 'epic', faction: 'magmar', text: 'Summon four copies of a random Battle Pet in a 2x2 area.' }, { id: 20122, name: 'Plasma Storm', type: 'spell', cost: 5, rarity: 'basic', faction: 'magmar', text: 'Destroy ALL minions with 3 or less Attack.' }, { id: 415, name: 'Spirit Harvester', type: 'minion', cost: 5, rarity: 'rare', attack: 5, health: 5, faction: 'magmar', text: 'At the end of your turn, deal 1 damage to ALL other minions.' }, { id: 426, name: 'Visionar', type: 'minion', cost: 5, rarity: 'epic', attack: 6, health: 3, faction: 'magmar', text: 'Whenever ANY player draws a card, this minion gains +1/+1.' }, { id: 424, name: 'Dreadnought', type: 'minion', cost: 6, rarity: 'legendary', attack: 4, health: 6, faction: 'magmar', text: '<b>Rebirth</b><br> Egg minions you summon gain +2/+2.' }, { id: 20063, name: 'Fractal Replication', type: 'spell', cost: 6, rarity: 'epic', faction: 'magmar', text: 'Summon two copies of a friendly minion nearby that minion.' }, { id: 405, name: 'Makantor Warbeast', type: 'minion', cost: 6, rarity: 'epic', attack: 4, health: 4, faction: 'magmar', text: '<b>Frenzy</b>, <b>Rush</b>' }, { id: 20121, name: 'Metamorphosis', type: 'spell', cost: 6, rarity: 'legendary', faction: 'magmar', text: 'Transform all enemy minions into 1/1 Magma with no abilities until the end of your opponent\'s turn.' }, { id: 20118, name: 'Bounded Lifeforce', type: 'spell', cost: 7, rarity: 'epic', faction: 'magmar', text: 'Your General becomes 10/10.' }, { id: 414, name: 'Silithar Elder', type: 'minion', cost: 7, rarity: 'legendary', attack: 6, health: 6, faction: 'magmar', text: '<b>Rebirth</b><br> At the end of your turn, summon a Silithar Elder Egg nearby.' }, { id: 408, name: 'Unstable Leviathan', type: 'minion', cost: 7, rarity: 'rare', attack: 11, health: 11, faction: 'magmar', text: 'At the start of your turn, deal 4 damage to a random minion or General.' }, { id: 20219, name: 'Flaming Stampede', type: 'spell', cost: 8, rarity: 'legendary', faction: 'magmar', text: 'Deal 5 damage to ALL non-Egg minions and Generals.' }, { id: 425, name: 'Mandrake', type: 'minion', cost: 12, rarity: 'rare', attack: 6, health: 6, faction: 'magmar', text: 'Costs 1 less for each minion summoned from ANY player\'s action bar this game.' }];

	exports.default = magmar;

/***/ },
/* 199 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var songhai = [{ id: 20086, name: 'Inner Focus', type: 'spell', cost: 0, rarity: 'basic', faction: 'songhai', text: 'Reactivate an exhausted friendly minion with 3 or less Attack.' }, { id: 20129, name: 'Juxtaposition', type: 'spell', cost: 0, rarity: 'epic', faction: 'songhai', text: 'Switch positions between ANY two minions.' }, { id: 20085, name: 'Mana Vortex', type: 'spell', cost: 0, rarity: 'rare', faction: 'songhai', text: 'The next two spells you cast this turn cost 1 less. Draw a card at the end of turn.' }, { id: 126, name: 'Ace', type: 'minion', race: 'battle pet', cost: 1, rarity: 'common', attack: 1, health: 2, faction: 'songhai', text: '<b>Ranged</b>' }, { id: 30010, name: 'Bloodrage Mask', type: 'artifact', cost: 1, rarity: 'basic', faction: 'songhai', text: 'Whenever you cast a spell, deal 1 damage to the enemy General.' }, { id: 30023, name: 'Crescent Spear', type: 'artifact', cost: 1, rarity: 'legendary', faction: 'songhai', text: 'Your General gains +1 Attack. Spells you cast that deal damage deal +1 damage.' }, { id: 20088, name: 'Ghost Lightning', type: 'spell', cost: 1, rarity: 'basic', faction: 'songhai', text: 'Deal 1 damage to all enemy minions.' }, { id: 108, name: 'Heartseeker', type: 'minion', cost: 1, rarity: 'common', attack: 1, health: 1, faction: 'songhai', text: '<b>Ranged</b>' }, { id: 129, name: 'Katara', type: 'minion', cost: 1, rarity: 'common', attack: 1, health: 3, faction: 'songhai', text: '<b>Backstab</b>: (3).' }, { id: 20168, name: 'Mist Dragon Seal', type: 'spell', cost: 1, rarity: 'common', faction: 'songhai', text: 'Give a friendly minion +1/+1 and teleport it to any space on the battlefield.' }, { id: 20167, name: 'Mist Walking', type: 'spell', cost: 1, rarity: 'rare', faction: 'songhai', text: 'Teleport your General up to 2 spaces.' }, { id: 20080, name: 'Saberspine Seal', type: 'spell', cost: 1, rarity: 'basic', faction: 'songhai', text: 'Give a minion or General +3 Attack this turn.' }, { id: 20192, name: 'Shadow Waltz', type: 'spell', cost: 1, rarity: 'common', faction: 'songhai', text: 'Lower the cost of all minions with <b>Backstab</b> in your action bar by 1 and give them +1/+1.' }, { id: 20106, name: 'Artifact Defiler', type: 'spell', cost: 2, rarity: 'common', faction: 'songhai', text: 'Destroy all artifacts on the enemy General.' }, { id: 115, name: 'Chakri Avatar', type: 'minion', race: 'arcanyst', cost: 2, rarity: 'basic', attack: 1, health: 2, faction: 'songhai', text: 'Whenever you cast a spell, this minion gains +1/+1.' }, { id: 20191, name: 'Crimson Coil', type: 'spell', cost: 2, rarity: 'common', faction: 'songhai', text: 'Deal 2 damage to a minion. Activate your Battle Pets.' }, { id: 20094, name: 'Deathstrike Seal', type: 'spell', cost: 2, rarity: 'rare', faction: 'songhai', text: 'Give a friendly minion, "Whenever this damages an enemy minion, destroy that minion."' }, { id: 20143, name: 'Eight Gates', type: 'spell', cost: 2, rarity: 'legendary', faction: 'songhai', text: 'Spells you cast this turn that deal damage deal +2 damage.' }, { id: 110, name: 'Kaido Assassin', type: 'minion', cost: 2, rarity: 'basic', attack: 2, health: 3, faction: 'songhai', text: '<b>Backstab</b>: (1).' }, { id: 30007, name: 'Mask of Shadows', type: 'artifact', cost: 2, rarity: 'legendary', faction: 'songhai', text: 'Your General gains <b>Backstab</b> (4).' }, { id: 20194, name: 'Mirror Meld', type: 'spell', cost: 2, rarity: 'rare', faction: 'songhai', text: 'Summon a copy of a friendly minion that costs 2 of less nearby.' }, { id: 20081, name: 'Phoenix Fire', type: 'spell', cost: 2, rarity: 'basic', faction: 'songhai', text: 'Deal 3 damage to a minion or General.' }, { id: 121, name: 'Tusk Boar', type: 'minion', cost: 2, rarity: 'legendary', attack: 2, health: 3, faction: 'songhai', text: '<b>Rush</b><br> Return this minion to your action bar at the beginning of your turn.' }, { id: 125, name: 'Xho', type: 'minion', race: 'battle pet', cost: 2, rarity: 'rare', attack: 2, health: 3, faction: 'songhai', text: '<b>Dying Wish</b>: Put a random Songhai spell into your action bar. It costs 1 less.' }, { id: 130, name: 'Battle Panddo', type: 'minion', cost: 3, rarity: 'epic', attack: 2, health: 4, faction: 'songhai', text: 'Whenever this minion takes damage, deal 1 damage to all enemies.' }, { id: 117, name: 'Celestial Phantom', type: 'minion', cost: 3, rarity: 'rare', attack: 1, health: 5, faction: 'songhai', text: 'Whenever this damages an enemy minion, destroy that minion.' }, { id: 30009, name: 'Cyclone Mask', type: 'artifact', cost: 3, rarity: 'epic', faction: 'songhai', text: 'Your General gains <b>Ranged</b>.' }, { id: 112, name: 'Gore Horn', type: 'minion', cost: 3, rarity: 'rare', attack: 3, health: 3, faction: 'songhai', text: '<b>Backstab</b>: (2). After this minion attacks, it gains +1/+1.' }, { id: 114, name: 'Jade Monk', type: 'minion', cost: 3, rarity: 'common', attack: 4, health: 3, faction: 'songhai', text: 'Whenever this minion takes damage, deal 1 damage to a random enemy minion.' }, { id: 128, name: 'Ki Beholder', type: 'minion', cost: 3, rarity: 'rare', attack: 3, health: 2, faction: 'songhai', text: '<b>Ranged</b><br> <b>Opening Gambit</b>: An enemy minion cannot move next turn.' }, { id: 20102, name: 'Killing Edge', type: 'spell', cost: 3, rarity: 'basic', faction: 'songhai', text: 'Give a friendly minion +4/+2. If that minion has <b>Backstab</b>, draw a card at end of turn.' }, { id: 122, name: 'Lantern Fox', type: 'minion', cost: 3, rarity: 'epic', attack: 2, health: 4, faction: 'songhai', text: 'Whenever this minion takes damage, put a Phoenix Fire in your action bar.' }, { id: 20087, name: 'Onyx Bear Seal', type: 'spell', cost: 3, rarity: 'epic', faction: 'songhai', text: 'Transform an enemy minion into a 0/2 Panddo that cannot be attacked.' }, { id: 20082, name: 'Twin Strike', type: 'spell', cost: 3, rarity: 'common', faction: 'songhai', text: 'Deal 2 damage to exactly two random enemy minions. Draw a card at end of turn.' }, { id: 109, name: 'Widowmaker', type: 'minion', cost: 3, rarity: 'basic', attack: 2, health: 3, faction: 'songhai', text: '<b>Ranged</b>' }, { id: 20100, name: 'Ancestral Divination', type: 'spell', cost: 4, rarity: 'common', faction: 'songhai', text: 'Draw a card for each friendly minion on the battlefield.' }, { id: 116, name: 'Four Winds Magi', type: 'minion', race: 'arcanyst', cost: 4, rarity: 'rare', attack: 4, health: 4, faction: 'songhai', text: 'Whenever you cast a spell, deal 1 damage to enemy General and restore 1 Health to your General.' }, { id: 120, name: 'Keshrai Fanblade', type: 'minion', cost: 4, rarity: 'common', attack: 5, health: 3, faction: 'songhai', text: '<b>Opening Gambit</b>: Next turn, opponent\'s spells cost 2 more to cast.' }, { id: 20193, name: 'Pandamonium', type: 'spell', cost: 4, rarity: 'epic', faction: 'songhai', text: 'Transform ALL minions into 0/2 Panddo that cannot be attacked until end of turn.' }, { id: 124, name: 'Storm Sister Alkyone', type: 'minion', cost: 4, rarity: 'legendary', attack: 3, health: 5, spirit: 0, faction: 'songhai', text: 'Spells you cast that deal damage deal +1 damage.' }, { id: 119, name: 'Hamon Bladeseeker', type: 'minion', cost: 5, rarity: 'epic', attack: 8, health: 8, faction: 'songhai', text: 'At the start of your turn, deal 2 damage to your General.' }, { id: 20155, name: 'Heaven\'s Eclipse', type: 'spell', cost: 5, rarity: 'legendary', faction: 'songhai', text: 'Draw 3 spell cards from your deck.' }, { id: 127, name: 'Onyx Jaguar', type: 'minion', cost: 5, rarity: 'epic', attack: 3, health: 3, faction: 'songhai', text: 'Whenever a friendly minion is moved for any reason, give it +1/+1.' }, { id: 111, name: 'Scarlet Viper', type: 'minion', cost: 5, rarity: 'common', attack: 2, health: 5, faction: 'songhai', text: '<b>Flying</b><br> <b>Backstab</b>: (4)' }, { id: 131, name: 'Grandmaster Zendo', type: 'minion', cost: 6, rarity: 'legendary', attack: 4, health: 6, faction: 'songhai', text: 'The enemy General moves and attacks as if they are a Battle Pet.' }, { id: 118, name: 'Storm Kage', type: 'minion', cost: 7, rarity: 'legendary', attack: 5, health: 10, faction: 'songhai', text: 'Whenever one of your spells deals damage, put a Kage Lightning in your action bar.' }, { id: 20217, name: 'Koan of Horns', type: 'spell', cost: 8, rarity: 'legendary', faction: 'songhai', text: 'Transform all minions in your action bar and deck to 0-cost Gore Horns. Draw 3 cards.' }, { id: 20084, name: 'Spiral Technique', type: 'spell', cost: 8, rarity: 'epic', faction: 'songhai', text: 'Deal 8 damage to a minion or General.' }];

	exports.default = songhai;

/***/ },
/* 200 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var vanar = [{ id: 20139, name: 'Flash Freeze', type: 'spell', cost: 0, rarity: 'basic', faction: 'vanar', text: 'Deal 1 damage to a minion and <b>Stun</b> it.' }, { id: 20150, name: 'Polarity', type: 'spell', cost: 0, rarity: 'common', faction: 'vanar', text: 'Switch ANY minion\'s Attack and Health.' }, { id: 20144, name: 'Aspect of the Fox', type: 'spell', cost: 1, rarity: 'basic', faction: 'vanar', text: 'Transform ANY minion into a 3/3 Ravager with no abilities.' }, { id: 20138, name: 'Mesmerize', type: 'spell', cost: 1, rarity: 'rare', faction: 'vanar', text: 'Teleport an enemy minion or General one space.' }, { id: 510, name: 'Snow Chaser', type: 'minion', race: 'vespyr', cost: 1, rarity: 'rare', attack: 2, health: 1, faction: 'vanar', text: '<b>Infiltrate</b>: When this minion dies, return it to your action bar.' }, { id: 20209, name: 'Vespyric Call', type: 'spell', cost: 1, rarity: 'epic', faction: 'vanar', text: 'Put a random Vespyr minion into your action bar. It costs 1 less and has +1/+1.' }, { id: 20214, name: 'Altered Beast', type: 'spell', cost: 2, rarity: 'common', faction: 'vanar', text: 'Transform ANY minion into a random Battle Pet.' }, { id: 20149, name: 'Bonechill Barrier', type: 'spell', cost: 2, rarity: 'common', faction: 'vanar', text: 'Summon three joined 0/2 Vespyr Walls. Minions that attack these walls are <b>Stunned</b>.' }, { id: 512, name: 'Borean Bear', type: 'minion', race: 'vespyr', cost: 2, rarity: 'common', attack: 1, health: 3, faction: 'vanar', text: 'Whenever you summon a Vespyr minion, this minion gains +1 Attaack.' }, { id: 20137, name: 'Boundless Courage', type: 'spell', cost: 2, rarity: 'epic', faction: 'vanar', text: 'Give a friendly minion +2 Attack. It takes no damage this turn.' }, { id: 531, name: 'Bur', type: 'minion', race: 'battle pet', cost: 2, rarity: 'rare', attack: 3, health: 3, faction: 'vanar', text: 'When this minion survives damage, transform it into a different Battle Pet.' }, { id: 20134, name: 'Chromatic Cold', type: 'spell', cost: 2, rarity: 'basic', faction: 'vanar', text: 'Dispel a space. If there is an enemy minion or General on that space, deal it 2 damage.' }, { id: 30016, name: 'Coldbiter', type: 'artifact', cost: 2, rarity: 'legendary', faction: 'vanar', text: 'At the end of your turn, your General deals 2 damage to each enemy minion around them.' }, { id: 505, name: 'Crystal Cloaker', type: 'minion', race: 'vespyr', cost: 2, rarity: 'basic', attack: 2, health: 3, faction: 'vanar', text: '<b>Infiltrate</b>: Gains +2 Attack.' }, { id: 506, name: 'Crystal Wisp', type: 'minion', cost: 2, rarity: 'common', attack: 1, health: 1, faction: 'vanar', text: '<b>Dying Wish</b>: Permanently gain a mana crystal.' }, { id: 20135, name: 'Frostfire', type: 'spell', cost: 2, rarity: 'basic', faction: 'vanar', text: 'Give a friendly minion +3 Attack. If it is Vespyr, also give it +3 Health.' }, { id: 20147, name: 'Gravity Well', type: 'spell', cost: 2, rarity: 'legendary', faction: 'vanar', text: 'Summon four joined 0/1 Walls with <b>Provoke</b>.' }, { id: 20160, name: 'Hailstone Prison', type: 'spell', cost: 2, rarity: 'common', faction: 'vanar', text: 'Return ANY minion to its action bar.' }, { id: 517, name: 'Hearth-Sister', type: 'minion', cost: 2, rarity: 'common', attack: 3, health: 2, faction: 'vanar', text: '<b>Opening Gambit</b>: Switch positions with ANY other minion.' }, { id: 530, name: 'Icy', type: 'minion', race: 'battle pet', cost: 2, rarity: 'common', attack: 2, health: 3, faction: 'vanar', text: '<b>Opening Gambit</b>: Stun a nearby enemy minion or General.' }, { id: 20211, name: 'Lightning Blitz', type: 'spell', cost: 2, rarity: 'epic', faction: 'vanar', text: 'Give all friendly minions +1/+1 and randomly teleport them to your opponent\'s starting side of the battlefield.' }, { id: 20140, name: 'Mark of Solitude', type: 'spell', cost: 2, rarity: 'rare', faction: 'vanar', text: 'One minion becomes 5/5. It can no longer attack Generals.' }, { id: 20148, name: 'Blazing Spines', type: 'spell', cost: 3, rarity: 'rare', faction: 'vanar', text: 'Summon two joined 3/3 Walls that can attack.' }, { id: 20165, name: 'Cryogenesis', type: 'spell', cost: 3, rarity: 'common', faction: 'vanar', text: 'Deal 4 damage to an enemy minion. Draw a Vespyr minion from your deck.' }, { id: 503, name: 'Fenrir Warmaster', type: 'minion', cost: 3, rarity: 'basic', attack: 3, health: 2, faction: 'vanar', text: '<b>Dying Wish</b>: Summon a 3/2 Ghost Wolf on this space.' }, { id: 519, name: 'Glacial Elemental', type: 'minion', race: 'vespyr', cost: 3, rarity: 'rare', attack: 2, health: 3, faction: 'vanar', text: 'Whenever you summon a Vespyr minion, deal 2 damage to a random enemy minion.' }, { id: 533, name: 'Iceblade Dryad', type: 'minion', race: 'vespyr', cost: 3, rarity: 'epic', attack: 3, health: 3, faction: 'vanar', text: '<b>Opening Gambit</b>: Give a friendly Vespyr minion +1/+1 and <b>Flying</b>.' }, { id: 529, name: 'Snow Rippler', type: 'minion', race: 'vespyr', cost: 3, rarity: 'common', attack: 3, health: 4, faction: 'vanar', text: '<b>Infiltrate</b>: Whenever this minion damages a General, put a random Battle Pet into your action bar.' }, { id: 30015, name: 'Snowpiercer', type: 'artifact', cost: 3, rarity: 'basic', faction: 'vanar', text: 'Your General gains +3 Attack.' }, { id: 511, name: 'Wolfraven', type: 'minion', cost: 3, rarity: 'common', attack: 1, health: 4, faction: 'vanar', text: '<b>Flying</b><br> <b>Infiltrate</b>: Gains +3 Attack.' }, { id: 20145, name: 'Aspect of the Drake', type: 'spell', cost: 4, rarity: 'epic', faction: 'vanar', text: 'Transform ANY minion into a 4/4 Whyte Drake with <b>Flying</b>. Nearby friendly minions gain <b>Flying</b>.' }, { id: 20136, name: 'Avalanche', type: 'spell', cost: 4, rarity: 'basic', faction: 'vanar', text: 'Deal 4 damage to ALL minions and Generals on your starting side of the battlefield and <b>Stun</b> them.' }, { id: 513, name: 'Razorback', type: 'minion', cost: 4, rarity: 'rare', attack: 4, health: 3, faction: 'vanar', text: '<b>Opening Gamit</b>: Give all friendly minions +2 Attack this turn.' }, { id: 515, name: 'Voice of the Wind', type: 'minion', cost: 4, rarity: 'legendary', attack: 4, health: 4, faction: 'vanar', text: 'Whenever you summon a minion from your action bar, summon a 2/2 Vespyr Winter Maerid bnearby.' }, { id: 20208, name: 'Wailing Overdrive', type: 'spell', cost: 4, rarity: 'common', faction: 'vanar', text: 'Give a friendly minion on your opponent\'s starting side of the battlefield +5/+5.' }, { id: 30021, name: 'White Asp', type: 'artifact', cost: 4, rarity: 'legendary', faction: 'vanar', text: 'Your General gains +3 Attack. Whenever your General destroys a minion, summon a 3/3 Balzing Spine Wall on that space.' }, { id: 528, name: 'Wind Sister Maia', type: 'minion', cost: 4, rarity: 'legendary', attack: 4, health: 5, spirit: 0, faction: 'vanar', text: 'Whenever you summon a minion with <b>Infiltrate</b>, give it +1/+1.' }, { id: 30019, name: 'Winterblade', type: 'artifact', cost: 4, rarity: 'epic', faction: 'vanar', text: 'Your General gains +2 Attack. Enemy minions damaged by your General are <b>Stunned</b>.' }, { id: 526, name: 'Arctic Displacer', type: 'minion', race: 'vespyr', cost: 5, rarity: 'basic', attack: 10, health: 4, faction: 'vanar', text: '<b>Airdrop</b>' }, { id: 20207, name: 'Frostburn', type: 'spell', cost: 5, rarity: 'rare', faction: 'vanar', text: 'Deal 3 damage to all enemy minions.' }, { id: 507, name: 'Frosthorn Rhyno', type: 'minion', cost: 5, rarity: 'epic', attack: 6, health: 5, faction: 'vanar', text: '<b>Infiltrate</b>: Gains +1 Attack and <b>Celerity</b>.' }, { id: 534, name: 'Frostiva', type: 'minion', cost: 5, rarity: 'legendary', attack: 3, health: 3, faction: 'vanar', text: '<b>Forcefield</b><br> Whenever this minion attacks or is attacked, summon a 3/3 Vespyr Night Howler nearby.' }, { id: 532, name: 'Huldra', type: 'minion', cost: 5, rarity: 'rare', attack: 3, health: 4, faction: 'vanar', text: '<b>Opening Gambit</b>: Give a friendly Vespyr minion <b>Celerity</b>.' }, { id: 20163, name: 'Spirit of the Wild', type: 'spell', cost: 5, rarity: 'epic', faction: 'vanar', text: 'Reactivate friendly minions on your opponent\'s starting side of the battlefield.' }, { id: 20146, name: 'Aspect of the Mountains', type: 'spell', cost: 6, rarity: 'legendary', faction: 'vanar', text: 'Transform ANY minion into a 5/5 Seismic Elemental. Deal 5 damage to enemy minions around it.' }, { id: 508, name: 'Draugar Lord', type: 'minion', race: 'vespyr', cost: 6, rarity: 'epic', attack: 4, health: 8, faction: 'vanar', text: '<b>Dying Wish</b>: Summon a 4/8 Ice Drake on this space.' }, { id: 514, name: 'Ancient Grove', type: 'minion', race: 'vespyr', cost: 7, rarity: 'legendary', attack: 7, health: 7, faction: 'vanar', text: '<b>Provoke</b><br> <b>Opening Gambit</b>: You rminions gain "<b>Dying Wish</b>: Summon a 1/1 Treant with <b>Provoke</b>."' }, { id: 20212, name: 'Winter\'s Wake', type: 'spell', cost: 8, rarity: 'legendary', faction: 'vanar', text: 'Give all friendly Wall minions +4/+4. Those minions can now move.' }];

	exports.default = vanar;

/***/ },
/* 201 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var vetruvian = [{ id: 227, name: 'Rae', type: 'minion', race: 'battle pet', cost: 0, rarity: 'common', attack: 1, health: 1, faction: 'vetruvian', text: '<b>Dying Wish</b>: Dispel the nearest enemy minion.' }, { id: 20073, name: 'Siphon Energy', type: 'spell', cost: 0, rarity: 'common', faction: 'vetruvian', text: 'Dispel an enemy minion.' }, { id: 20132, name: 'Auroras Tears', type: 'spell', cost: 1, rarity: 'epic', faction: 'vetruvian', text: 'This turn, your General gains +2 Attack for every equipped artifact.' }, { id: 20075, name: 'Blindscorch', type: 'spell', cost: 1, rarity: 'basic', faction: 'vetruvian', text: 'Lower a minion\'s Attack to 0 until your next turn.' }, { id: 20095, name: 'Scion\'s First Wish', type: 'spell', cost: 1, rarity: 'basic', faction: 'vetruvian', text: 'Give a friendly minion +1/+1. Draw a card.' }, { id: 20151, name: 'Bone Swarm', type: 'spell', cost: 2, rarity: 'common', faction: 'vetruvian', text: 'Deal 2 damage to the enemy General and all enemy minions around them.' }, { id: 20074, name: 'Cosmic Flesh', type: 'spell', cost: 2, rarity: 'basic', faction: 'vetruvian', text: 'Give a friendly minion +1/+3 and <b>Provoke</b>.' }, { id: 211, name: 'Dunecaster', type: 'minion', race: 'dervish', cost: 2, rarity: 'common', attack: 2, health: 1, faction: 'vetruvian', text: '<b>Opening Gambit</b>: Give +2/+2 to a friendly Dervish. If it is a Wind Dervish, it no longer disappears.' }, { id: 214, name: 'Ethereal Obelysk', type: 'minion', race: 'structure', cost: 2, attack: 0, health: 6, rarity: 'basic', faction: 'vetruvian', text: '<b>Summon Dervish</b>' }, { id: 20152, name: 'Fountain of Youth', type: 'spell', cost: 2, rarity: 'rare', faction: 'vetruvian', text: 'Restore all friendly minions to full Health.' }, { id: 228, name: 'Pax', type: 'minion', race: 'battle pet', cost: 2, rarity: 'rare', attack: 2, health: 1, faction: 'vetruvian', text: '<b>Dying Wish</b>: Summon two 2/2 Iron Dervishes nearby.' }, { id: 213, name: 'Pyromancer', type: 'minion', cost: 2, rarity: 'basic', attack: 2, health: 1, faction: 'vetruvian', text: '<b>Blast</b>' }, { id: 20169, name: 'Rasha\'s Curse', type: 'spell', cost: 2, rarity: 'epic', faction: 'vetruvian', text: 'Destroy a random artifact on the enemy general. Summon a Wind Dervish with <b>Rush</b> near them.' }, { id: 20093, name: 'Sand Trap', type: 'spell', cost: 2, rarity: 'common', faction: 'vetruvian', text: 'Choose an enemy minion. It can no longer move.' }, { id: 20096, name: 'Scion\'s Second Wish', type: 'spell', cost: 2, rarity: 'basic', faction: 'vetruvian', text: 'Give a friendly minion +2/+2. It takes no damage from Generals.' }, { id: 30006, name: 'Staff Of Y\'Kir', type: 'artifact', cost: 2, rarity: 'basic', faction: 'vetruvian', text: 'Your General gains +2 Attack.' }, { id: 20196, name: 'Whisper of the Sands', type: 'spell', cost: 2, rarity: 'common', faction: 'vetruvian', text: 'Summon a Wind Dervish nearby each friendly Obelysk. Draw a card.' }, { id: 229, name: 'Wind Slicer', type: 'minion', cost: 2, rarity: 'rare', attack: 2, health: 3, faction: 'vetruvian', text: '<b>Opening Gambit</b>: Lower the cost of all Structure minions in your action bar by 1.' }, { id: 20195, name: 'Astral Flood', type: 'spell', cost: 3, rarity: 'common', faction: 'vetruvian', text: 'Put 3 random Battle Pets into your action bar.' }, { id: 20076, name: 'Astral Phasing', type: 'spell', cost: 3, rarity: 'common', faction: 'vetruvian', text: 'Give a friendly minion +5 Health and <b>Flying</b>.' }, { id: 226, name: 'Falcius', type: 'minion', cost: 3, rarity: 'common', attack: 3, health: 3, faction: 'vetruvian', text: '<b>Opening Gambit</b>: Your General gains +2 Attack and takes no damage this turn.' }, { id: 215, name: 'Fireblaze Obelysk', type: 'minion', race: 'structure', cost: 3, rarity: 'rare', attack: 0, health: 6, faction: 'vetruvian', text: '<b>Summon Dervish</b><br> Your Dervishes have +1 Attack.' }, { id: 218, name: 'Imperial Mechanyst', type: 'minion', cost: 3, rarity: 'rare', attack: 2, health: 5, faction: 'vetruvian', text: '<b>Opening Gambit</b>: Repair all of your artifacts to full durability.' }, { id: 20153, name: 'Inner Oasis', type: 'spell', cost: 3, rarity: 'rare', faction: 'vetruvian', text: 'Give all friendly minions +3 Health. Draw a card.' }, { id: 212, name: 'Orb Weaver', type: 'minion', race: 'dervish', cost: 3, rarity: 'common', attack: 2, health: 2, faction: 'vetruvian', text: '<b>Opening Gambit</b>: Summon a copy of this minion on a nearby space.' }, { id: 221, name: 'Portal Guardian', type: 'minion', cost: 3, rarity: 'epic', attack: 0, health: 6, faction: 'vetruvian', text: '<b>Frenzy</b><br> Whenever you summon a minion, this minion gains +1 Attack.' }, { id: 20197, name: 'Psychic Conduit', type: 'spell', cost: 3, rarity: 'rare', faction: 'vetruvian', text: 'Take control of an enemy minion with 2 or less Attack until end of turn.' }, { id: 210, name: 'Sand Howler', type: 'minion', race: 'dervish', cost: 3, rarity: 'rare', attack: 3, health: 3, faction: 'vetruvian', text: 'Cannot be targeted by enemy spells.' }, { id: 20097, name: 'Scion\'s Third Wish', type: 'spell', cost: 3, rarity: 'legendary', faction: 'vetruvian', text: 'Give a friendly Dervish minion +3/+3 and <b>Flying</b>.' }, { id: 20078, name: 'Time Maelstrom', type: 'spell', cost: 3, rarity: 'legendary', faction: 'vetruvian', text: 'Reactivate your General.' }, { id: 30008, name: 'Wildfire Ankh', type: 'artifact', cost: 3, rarity: 'epic', faction: 'vetruvian', text: 'Your General gains <b>Blast</b>.' }, { id: 216, name: 'Windstorm Obelysk', type: 'minion', race: 'structure', cost: 3, rarity: 'common', attack: 0, health: 6, faction: 'vetruvian', text: '<b>Summon Dervish</b><br> Your Dervishes have +1 Health.' }, { id: 231, name: 'Allomancer', type: 'minion', cost: 4, rarity: 'epic', attack: 4, health: 3, faction: 'vetruvian', text: '<b>Dying Wish</b>: Summon a random Obelysk on this space.' }, { id: 20077, name: 'Entropic Decay', type: 'spell', cost: 4, rarity: 'basic', faction: 'vetruvian', text: 'Destroy an enemy minion nearby your General.' }, { id: 30011, name: 'Hexblade', type: 'artifact', cost: 4, rarity: 'legendary', faction: 'vetruvian', text: 'Your General gains +3 Attack. Whenever your General damages an enemy minion, it\'s Attack becomes 1.' }, { id: 219, name: 'Mirage Master', type: 'minion', cost: 4, rarity: 'epic', attack: 1, health: 1, faction: 'vetruvian', text: '<b>Opening Gambit</b>: This minion transforms into a copy of an enemy minion.' }, { id: 224, name: 'Sand Sister Saon', type: 'minion', cost: 4, rarity: 'legendary', attack: 3, health: 4, spirit: 0, faction: 'vetruvian', text: 'Your General has +1 Attack.' }, { id: 208, name: 'Wind Shrike', type: 'minion', cost: 4, rarity: 'basic', attack: 4, health: 3, faction: 'vetruvian', text: '<b>Flying</b><br> <b>Dying Wish</b>: Draw a card.' }, { id: 20198, name: 'Corpse Combustion', type: 'spell', cost: 5, rarity: 'epic', faction: 'vetruvian', text: 'Summon all friendly minions with Dying Wish destroyed since your last turn on random spaces.' }, { id: 232, name: 'Nimbus', type: 'minion', cost: 5, rarity: 'legendary', attack: 3, health: 8, faction: 'vetruvian', text: 'Whenever this minion takes damage, summon a Soulburn Obelysk nearby.' }, { id: 30022, name: 'Spinecleaver', type: 'artifact', cost: 5, rarity: 'legendary', faction: 'vetruvian', text: 'Your General grains +1 Attack. Enemy minions destroyed by your General summon a Bloodfire Totem on that space.' }, { id: 209, name: 'Starfire Scarab', type: 'minion', cost: 5, rarity: 'common', attack: 4, health: 6, faction: 'vetruvian', text: '<b>Blast</b>' }, { id: 20105, name: 'Stars\' Fury', type: 'spell', cost: 5, rarity: 'epic', faction: 'vetruvian', text: 'Summon a Wind Dervish with <b>Rush</b> in front of each enemy minion and General.' }, { id: 220, name: 'Aymara Healer', type: 'minion', cost: 6, rarity: 'legendary', attack: 5, health: 5, faction: 'vetruvian', text: '<b>Provoke</b><br> <b>Dying Wish</b>: Deal 5 damage to the enemy General. Restore 5 Health to your General.' }, { id: 233, name: 'Pantheran', type: 'minion', cost: 6, rarity: 'epic', attack: 6, health: 6, faction: 'vetruvian', text: 'Costs 0 if you\'ve cast all three Scion\'s Wish spells this game.' }, { id: 20028, name: 'Dominate Will', type: 'spell', cost: 7, rarity: 'rare', faction: 'vetruvian', text: 'Take control of an enemy minion nearby your General.' }, { id: 222, name: 'Oserix', type: 'minion', cost: 7, rarity: 'legendary', attack: 8, health: 6, faction: 'vetruvian', text: '<b>Flying</b><br> <b>Dying Wish</b>: Equip 2 random artifacts from your deck.' }, { id: 20216, name: 'Circle of Desiccation', type: 'spell', cost: 8, rarity: 'legendary', faction: 'vetruvian', text: 'Destroy ALL non-Structure minions.' }];

	exports.default = vetruvian;

/***/ },
/* 202 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var neutral = [{ id: 19052, name: 'Bloodtear Alchemist', type: 'minion', cost: 1, rarity: 'basic', attack: 2, health: 1, faction: 'neutral', text: '<b>Opening Gambit</b>: Deal 1 damage to an enemy minion or General.' }, { id: 10001, name: 'Dragonlark', type: 'minion', cost: 1, rarity: 'basic', attack: 2, health: 1, faction: 'neutral', text: '<b>Flying</b>' }, { id: 11022, name: 'Dreamgazer', type: 'minion', cost: 1, rarity: 'epic', attack: 1, health: 1, faction: 'neutral', text: 'When you replace this card, summon it nearby. Your General takes 2 damage.' }, { id: 19002, name: 'Helm of MECHAZ0R', type: 'minion', race: 'mech', cost: 1, rarity: 'common', attack: 2, health: 2, faction: 'neutral', text: '<b>Opening Gambit</b>: Progresses MECHAZ0R build by +20%.' }, { id: 11053, name: 'Koi', type: 'minion', race: 'battle pet', cost: 1, rarity: 'common', attack: 3, health: 1, faction: 'neutral', text: 'Takes no damage from Generals.' }, { id: 10018, name: 'Komodo Charger', type: 'minion', cost: 1, rarity: 'basic', attack: 1, health: 3, faction: 'neutral', text: '' }, { id: 10019, name: 'Planar Scout', type: 'minion', cost: 1, rarity: 'basic', attack: 2, health: 1, faction: 'neutral', text: '<b>Airdrop</b>' }, { id: 11016, name: 'Prophet of the White Palm', type: 'minion', cost: 1, rarity: 'rare', attack: 1, health: 1, faction: 'neutral', text: '<b>Opening Gambit</b>: Prevent ALL spell damage until your next turn.' }, { id: 19025, name: 'Swamp Entangler', type: 'minion', cost: 1, rarity: 'common', attack: 0, health: 3, faction: 'neutral', text: '<b>Provoke</b>' }, { id: 10993, name: 'Aethermaster', type: 'minion', race: 'arcanyst', cost: 2, rarity: 'epic', attack: 1, health: 3, faction: 'neutral', text: 'You may replace an additional card each turn.' }, { id: 11001, name: 'Amu', type: 'minion', race: 'battle pet', cost: 2, rarity: 'common', attack: 3, health: 3, faction: 'neutral', text: '' }, { id: 11017, name: 'Araki Headhunter', type: 'minion', cost: 2, rarity: 'epic', attack: 1, health: 3, faction: 'neutral', text: 'Whenever you summon a minion with Opening Gambit from your action bar, gain +2 Attack.' }, { id: 19050, name: 'Azure Horn Shaman', type: 'minion', cost: 2, rarity: 'rare', attack: 1, health: 4, faction: 'neutral', text: '<b>Dying Wish</b>: Give +4 Health to friendly minions around it.' }, { id: 19029, name: 'Bluetip Scorpion', type: 'minion', cost: 2, rarity: 'common', attack: 3, health: 1, faction: 'neutral', text: 'Deals double damage to minions.' }, { id: 10020, name: 'Ephemeral Shroud', type: 'minion', cost: 2, rarity: 'basic', attack: 2, health: 2, faction: 'neutral', text: '<b>Opening Gambit</b>: Dispel 1 nearby space.' }, { id: 19051, name: 'Flameblood Warlock', type: 'minion', cost: 2, rarity: 'rare', attack: 3, health: 1, faction: 'neutral', text: '<b>Opening Gambit</b>: Deal 3 damage to BOTH Generals.' }, { id: 11009, name: 'Ghost Lynx', type: 'minion', cost: 2, rarity: 'common', attack: 2, health: 1, faction: 'neutral', text: '<b>Opening Gambit</b>: Teleport a nearby minion to a random space.' }, { id: 19038, name: 'Golem Metallurgist', type: 'minion', race: 'golem', cost: 2, rarity: 'rare', attack: 2, health: 3, faction: 'neutral', text: 'The first Golem you summon each turn costs 1 less.' }, { id: 10981, name: 'Healing Mystic', type: 'minion', cost: 2, rarity: 'basic', attack: 2, health: 3, faction: 'neutral', text: '<b>Opening Gambit</b>: Restore 2 Health to a minion or General.' }, { id: 11014, name: 'Jaxi', type: 'minion', cost: 2, rarity: 'common', attack: 1, health: 1, faction: 'neutral', text: '<b>Dying Wish</b>: Summon a 1/1 Ranged Mini-Jax in a random unoccupied corner.' }, { id: 10302, name: 'Manaforger', type: 'minion', race: 'arcanyst', cost: 2, rarity: 'rare', attack: 1, health: 3, faction: 'neutral', text: 'The first non-Bloodborn spell you cast each turn costs 1 less.' }, { id: 10979, name: 'Maw', type: 'minion', cost: 2, rarity: 'common', attack: 2, health: 2, faction: 'neutral', text: '<b>Opening Gambit</b>: Deal 2 damage to a nearby enemy minion.' }, { id: 19040, name: 'Piercing Mantis', type: 'minion', cost: 2, rarity: 'basic', attack: 2, health: 2, faction: 'neutral', text: '<b>Frenzy</b>' }, { id: 19037, name: 'Primus Fist', type: 'minion', cost: 2, rarity: 'common', attack: 2, health: 3, faction: 'neutral', text: '<b>Opening Gambit</b>: Give a nearby friendly minion +2 Attack this turn.' }, { id: 19026, name: 'Rock Pulverizer', type: 'minion', cost: 2, rarity: 'basic', attack: 1, health: 4, faction: 'neutral', text: '<b>Provoke</b>' }, { id: 10957, name: 'Rust Crawler', type: 'minion', cost: 2, rarity: 'common', attack: 2, health: 3, faction: 'neutral', text: '<b>Opening Gambit</b>: Destroy a random enemy artifact.' }, { id: 11046, name: 'Shiro Puppydragon', type: 'minion', cost: 2, rarity: 'common', attack: 1, health: 4, faction: 'neutral', text: 'At the end of your turn, give each nearby friendly minion +1 Attack.' }, { id: 133729, name: 'Skyrock Golem', type: 'minion', race: 'golem', cost: 2, rarity: 'basic', attack: 3, health: 2, faction: 'neutral', text: '' }, { id: 11066, name: 'Sol', type: 'minion', race: 'battle pet', cost: 2, rarity: 'rare', attack: 1, health: 1, faction: 'neutral', text: '<b>Opening Gambit</b>: Activate a friendly Battle Pet.' }, { id: 10021, name: 'Vale Hunter', type: 'minion', cost: 2, rarity: 'basic', attack: 1, health: 2, faction: 'neutral', text: '<b>Ranged</b>' }, { id: 19003, name: 'Wings of MECHAZ0R', type: 'minion', race: 'mech', cost: 2, rarity: 'common', attack: 1, health: 4, faction: 'neutral', text: '<b>Airdrop</b><br> <b>Opening Gambit</b>: Progresses MECHAZ0R build by +20%.' }, { id: 11075, name: 'Wood-Wen', type: 'minion', cost: 2, rarity: 'common', attack: 2, health: 2, faction: 'neutral', text: '<b>Provoke</b><br> <b>Opening Gambit</b>: Give a nearby friendly minion Provoke.' }, { id: 11061, name: 'Z0r', type: 'minion', race: 'battle pet', cost: 2, rarity: 'epic', attack: 2, health: 1, faction: 'neutral', text: '<b>Dying Wish</b>: Put a random MECH minion into your action bar.' }, { id: 11039, name: 'Abjudicator', type: 'minion', cost: 3, rarity: 'rare', attack: 3, health: 1, faction: 'neutral', text: '<b>Opening Gambit</b>: Lower the cost of all spells in your action bar by 1.' }, { id: 10304, name: 'Alcuin Loremaster', type: 'minion', race: 'arcanyst', cost: 3, rarity: 'epic', attack: 3, health: 1, faction: 'neutral', text: '<b>Opening Gambit</b>: Put a copy of the most recently cast spell into your action bar.' }, { id: 11038, name: 'Bastion', type: 'minion', race: 'structure', cost: 3, rarity: 'epic', attack: 0, health: 5, faction: 'neutral', text: 'At the end of your turn, give other friendly minions +1 Health.' }, { id: 10013, name: 'Blaze Hound', type: 'minion', cost: 3, rarity: 'common', attack: 4, health: 3, faction: 'neutral', text: '<b>Opening Gambit</b>: Both players drop a card.' }, { id: 11043, name: 'Blistering Skorn', type: 'minion', cost: 3, rarity: 'common', attack: 3, health: 4, faction: 'neutral', text: '<b>Opening Gambit</b>: Deal 1 damage to ALL minions and Generals (including itself).' }, { id: 133730, name: 'Bloodshard Golem', type: 'minion', race: 'golem', cost: 3, rarity: 'basic', attack: 4, health: 3, faction: 'neutral', text: '' }, { id: 19004, name: 'Cannon of MECHAZ0R', type: 'minion', race: 'mech', cost: 3, rarity: 'rare', attack: 2, health: 2, faction: 'neutral', text: '<b>Ranged</b><br> <b>Opening Gambit</b>: Progresses MECHAZ0R build by +20%.' }, { id: 10962, name: 'Chaos Elemental', type: 'minion', cost: 3, rarity: 'epic', attack: 4, health: 4, faction: 'neutral', text: 'Whenever this minion takes damage, it randomly teleports.' }, { id: 19030, name: 'Crimson Oculus', type: 'minion', cost: 3, rarity: 'rare', attack: 2, health: 3, faction: 'neutral', text: 'Whenever opponent summons a minion, this minion gains +1/+1.' }, { id: 10953, name: 'Crossbones', type: 'minion', cost: 3, rarity: 'rare', attack: 3, health: 3, faction: 'neutral', text: '<b>Opening Gambit</b>: Destroy an enemy minion with Ranged.' }, { id: 11076, name: 'Elkowl', type: 'minion', cost: 3, rarity: 'rare', attack: 2, health: 3, faction: 'neutral', text: '<b>Opening Gambit</b>: Gain two random abilities.' }, { id: 11056, name: 'Golden Mantella', type: 'minion', cost: 3, rarity: 'common', attack: 4, health: 2, faction: 'neutral', text: '<b>Opening Gambit</b>: Put a random Battle Pet into your action bar.' }, { id: 19039, name: 'Golem Vanquisher', type: 'minion', race: 'golem', cost: 3, rarity: 'legendary', attack: 2, health: 4, faction: 'neutral', text: '<b>Provoke</b><br> Your other Golem minions have <b>Provoke</b>.' }, { id: 11052, name: 'Hydrax', type: 'minion', cost: 3, rarity: 'legendary', attack: 3, health: 3, faction: 'neutral', text: 'Whenever a friendly Battle Pet dies, draw a card.' }, { id: 11051, name: 'Ion', type: 'minion', race: 'battle pet', cost: 3, rarity: 'rare', attack: 2, health: 3, faction: 'neutral', text: '<b>Ranged</b><br> Deals double damage to Generals.' }, { id: 10987, name: 'Lady Locke', type: 'minion', cost: 3, rarity: 'legendary', attack: 2, health: 2, faction: 'neutral', text: '<b>Provoke</b><br> <b>Opening Gambit</b>: Other minions you summon this turn gain +1/+1 and <b>Provoke</b>.' }, { id: 19047, name: 'Mirkblood Devourer', type: 'minion', cost: 3, rarity: 'legendary', attack: 2, health: 4, faction: 'neutral', text: 'Friendly minions summoned nearby this minion gain +1/+1.' }, { id: 11008, name: 'Mogwai', type: 'minion', cost: 3, rarity: 'epic', attack: 2, health: 3, faction: 'neutral', text: 'After this moves, draw a card.' }, { id: 10303, name: 'Prismatic Illusionist', type: 'minion', race: 'arcanyst', cost: 3, rarity: 'rare', attack: 2, health: 3, faction: 'neutral', text: 'Whenever you cast a spell, summon a 2/1 Illusion on a random nearby space.' }, { id: 19033, name: 'Putrid Dreadflayer', type: 'minion', cost: 3, rarity: 'basic', attack: 2, health: 4, faction: 'neutral', text: '<b>Flying</b>' }, { id: 10016, name: 'Repulsor Beast', type: 'minion', cost: 3, rarity: 'basic', attack: 2, health: 2, faction: 'neutral', text: '<b>Opening Gambit</b>: Push a nearby enemy minion to any space.' }, { id: 10012, name: 'Saberspine Tiger', type: 'minion', cost: 3, rarity: 'basic', attack: 3, health: 2, faction: 'neutral', text: '<b>Rush</b>' }, { id: 10014, name: 'Sand Burrower', type: 'minion', cost: 3, rarity: 'common', attack: 2, health: 4, faction: 'neutral', text: 'When this minion survives damage, it returns to your action bar.' }, { id: 11027, name: 'Sapphire Seer', type: 'minion', cost: 3, rarity: 'common', attack: 2, health: 2, faction: 'neutral', text: '<b>Forcefield</b>' }, { id: 19045, name: 'Sarlac the Eternal', type: 'minion', cost: 3, rarity: 'legendary', attack: 1, health: 1, faction: 'neutral', text: '<b>Dying Wish</b>: Re-summon this minion on a random space.' }, { id: 10009, name: 'Silvertongue Corsair', type: 'minion', cost: 3, rarity: 'rare', attack: 3, health: 3, faction: 'neutral', text: 'Takes no damage from Generals.' }, { id: 11035, name: 'Skywing', type: 'minion', race: 'warmaster', cost: 3, rarity: 'rare', attack: 3, health: 3, faction: 'neutral', text: '<b>Flying</b><br> Your other minions with <b>Flying</b> cost 1 less.' }, { id: 11058, name: 'Soboro', type: 'minion', cost: 3, rarity: 'epic', attack: 2, health: 4, faction: 'neutral', text: 'Whenever this damages a neutral minion, destroy that minion.' }, { id: 19049, name: 'Sojourner', type: 'minion', cost: 3, rarity: 'rare', attack: 1, health: 5, faction: 'neutral', text: 'Whenever this minion deals damage, draw a card.' }, { id: 10992, name: 'Songweaver', type: 'minion', cost: 3, rarity: 'common', attack: 3, health: 3, faction: 'neutral', text: '<b>Opening Gambit</b>: Give a nearby friendly minion +1/+1.' }, { id: 10975, name: 'Spelljammer', type: 'minion', cost: 3, rarity: 'legendary', attack: 2, health: 4, faction: 'neutral', text: 'Each player draws an additional card at the end of their turns.' }, { id: 10301, name: 'Sun Seer', type: 'minion', race: 'arcanyst', cost: 3, rarity: 'common', attack: 2, health: 4, faction: 'neutral', text: 'Whenever this minion deals damage, restore 2 Health to your General.' }, { id: 19005, name: 'Sword of MECHAZ0R', type: 'minion', race: 'mech', cost: 3, rarity: 'rare', attack: 3, health: 3, faction: 'neutral', text: '<b>Frenzy</b><br> <b>Opening Gambit</b>: Progresses MECHAZ0R build by +20%.' }, { id: 10954, name: 'Sworn Avenger', type: 'minion', cost: 3, rarity: 'epic', attack: 1, health: 3, faction: 'neutral', text: '<b>Ranged</b><br> Whenever your General takes damage, this minion gains +1 Attack.' }, { id: 10974, name: 'Syvrel the Exile', type: 'minion', cost: 3, rarity: 'epic', attack: 1, health: 4, faction: 'neutral', text: '<b>Ranged</b><br> Minions damaged by Syvrel are pulled in front of him.' }, { id: 10960, name: 'Venom Toth', type: 'minion', cost: 3, rarity: 'epic', attack: 3, health: 3, faction: 'neutral', text: 'Whenever your opponent summons a minion, deal 1 damage to the enemy General.' }, { id: 10982, name: 'Void Hunter', type: 'minion', cost: 3, rarity: 'common', attack: 4, health: 2, faction: 'neutral', text: '<b>Dying Wish</b>: Draw a card.' }, { id: 11007, name: 'Wind Runner', type: 'minion', cost: 3, rarity: 'rare', attack: 3, health: 3, faction: 'neutral', text: 'After this minion moves, give all friendly minions around it +1/+1.' }, { id: 19010, name: 'Wind Stopper', type: 'minion', cost: 3, rarity: 'common', attack: 1, health: 7, faction: 'neutral', text: 'Ranged attackers must attack this minion first.' }, { id: 11020, name: 'Wings of Paradise', type: 'minion', cost: 3, rarity: 'common', attack: 3, health: 3, faction: 'neutral', text: '<b>Flying</b><br> Whenever you replace a card, this minion gains +2 Attack this turn.' }, { id: 11004, name: 'Yun', type: 'minion', race: 'battle pet', cost: 3, rarity: 'common', attack: 5, health: 4, faction: 'neutral', text: '' }, { id: 11059, name: 'Zukong', type: 'minion', cost: 3, rarity: 'legendary', attack: 3, health: 4, faction: 'neutral', text: 'You control your Battle Pets.' }, { id: 11033, name: 'Arrow Whistler', type: 'minion', race: 'warmaster', cost: 4, rarity: 'common', attack: 2, health: 4, faction: 'neutral', text: '<b>Ranged</b><br> Your other minions with <b>Ranged</b> have +1 Attack.' }, { id: 10961, name: 'Artifact Hunter', type: 'minion', cost: 4, rarity: 'epic', attack: 3, health: 3, faction: 'neutral', text: '<b>Opening Gambit</b>: Draw a random artifact from your deck.' }, { id: 11006, name: 'Black Locust', type: 'minion', cost: 4, rarity: 'legendary', attack: 2, health: 2, faction: 'neutral', text: '<b>Flying</b><br> After this minion moves, summon a Black Locust nearby.' }, { id: 10989, name: 'Captain Hank Hart', type: 'minion', cost: 4, rarity: 'epic', attack: 2, health: 4, faction: 'neutral', text: '<b>Ranged</b><br> Whenever this minion deals damage, restore that much Health to it.' }, { id: 19006, name: 'Chassis of MECHAZ0R', type: 'minion', race: 'mech', cost: 4, rarity: 'epic', attack: 5, health: 4, faction: 'neutral', text: '<b>Opening Gambit</b>: Progresses MECHAZ0R build by +20%. Cannot be targeted by ANY spells.' }, { id: 10976, name: 'Dioltas', type: 'minion', cost: 4, rarity: 'epic', attack: 5, health: 3, faction: 'neutral', text: '<b>Dying Wish</b>: Summon a 0/10 Tombstone minion with Provoke nearby your General.' }, { id: 10995, name: 'Emerald Rejuvenator', type: 'minion', cost: 4, rarity: 'rare', attack: 4, health: 4, faction: 'neutral', text: '<b>Opening Gambit</b>: Restore 4 Health to BOTH Generals.' }, { id: 10017, name: 'Fire Spitter', type: 'minion', cost: 4, rarity: 'basic', attack: 3, health: 2, faction: 'neutral', text: '<b>Ranged</b>' }, { id: 19042, name: 'Frostbone Naga', type: 'minion', cost: 4, rarity: 'common', attack: 3, health: 3, faction: 'neutral', text: '<b>Opening Gambit</b>: Deal 2 damage to ALL minions and Generals around it.' }, { id: 11057, name: 'Gnasher', type: 'minion', cost: 4, rarity: 'common', attack: 3, health: 3, faction: 'neutral', text: '<b>Dying Wish</b>: This minion deals 3 damage to all enemies around it.' }, { id: 10978, name: 'Hailstone Golem', type: 'minion', race: 'golem', cost: 4, rarity: 'basic', attack: 4, health: 6, faction: 'neutral', text: '' }, { id: 10306, name: 'Lightbender', type: 'minion', race: 'arcanyst', cost: 4, rarity: 'rare', attack: 3, health: 3, faction: 'neutral', text: '<b>Opening Gambit</b>: Dispel ALL spaces around it.' }, { id: 10965, name: 'Mindwarper', type: 'minion', race: 'arcanyst', cost: 4, rarity: 'rare', attack: 4, health: 3, faction: 'neutral', text: '<b>Opening Gambit</b>: Gain a copy of a random spell from your opponent\'s action bar.' }, { id: 10988, name: 'Moebius', type: 'minion', race: 'arcanyst', cost: 4, rarity: 'epic', attack: 3, health: 5, faction: 'neutral', text: 'At the start of your turn, restore this minion to full Health and switch its Attack and Health.' }, { id: 10305, name: 'Owlbeast Sage', type: 'minion', race: 'arcanyst', cost: 4, rarity: 'rare', attack: 4, health: 4, faction: 'neutral', text: 'Whenever you cast a spell, your Arcanyst minions gain +2 Health.' }, { id: 19027, name: 'Primus Shieldmaster', type: 'minion', cost: 4, rarity: 'basic', attack: 3, health: 6, faction: 'neutral', text: '<b>Provoke</b>' }, { id: 10991, name: 'Purgatos, The Realmkeeper', type: 'minion', cost: 4, rarity: 'epic', attack: 3, health: 4, faction: 'neutral', text: 'Whenver this minion deals damage, either deal 3 damage to the enemy General OR restore 3 Health to your General.' }, { id: 19044, name: 'Silhouette Tracer', type: 'minion', cost: 4, rarity: 'common', attack: 2, health: 6, faction: 'neutral', text: '<b>Opening Gambit</b>: Teleport your General up to 3 spaces.' }, { id: 11078, name: 'Sphynx', type: 'minion', cost: 4, rarity: 'legendary', attack: 5, health: 4, faction: 'neutral', text: '<b>Opening Gambit</b>: Put a Riddle in your opponent\'s action bar.' }, { id: 11015, name: 'Sun Elemental', type: 'minion', cost: 4, rarity: 'common', attack: 3, health: 3, faction: 'neutral', text: '<b>Opening Gambit</b>: Give two random friendly minions +2 Health.' }, { id: 11028, name: 'Sunsteel Defender', type: 'minion', cost: 4, rarity: 'rare', attack: 4, health: 3, faction: 'neutral', text: '<b>Forcefield</b>' }, { id: 11041, name: 'Sworn Sister L\'Kian', type: 'minion', cost: 4, rarity: 'legendary', attack: 2, health: 4, spirit: 0, faction: 'neutral', text: '<b>Opening Gambit</b>: Add 2 random cards from your Faction to your action bar.' }, { id: 11025, name: 'Tethermancer', type: 'minion', cost: 4, rarity: 'rare', attack: 1, health: 6, faction: 'neutral', text: '<b>Provoke</b><br> Dispel any minion that deals damage to this one.' }, { id: 19031, name: 'Thorn Needler', type: 'minion', cost: 4, rarity: 'basic', attack: 6, health: 4, faction: 'neutral', text: '' }, { id: 11036, name: 'Unseven', type: 'minion', race: 'warmaster', cost: 4, rarity: 'legendary', attack: 2, health: 4, faction: 'neutral', text: '<b>Dying Wish</b>: Summon a minion with <b>Dying Wish</b> from your action bar.' }, { id: 11019, name: 'White Widow', type: 'minion', cost: 4, rarity: 'rare', attack: 3, health: 4, faction: 'neutral', text: 'Whenever you replace a card, deal 2 damage to a random enemy minion or General.' }, { id: 19034, name: 'Young Flamewing', type: 'minion', cost: 4, rarity: 'basic', attack: 5, health: 4, faction: 'neutral', text: '<b>Flying</b>' }, { id: 11040, name: 'Alter Rexx', type: 'minion', race: 'mech', cost: 5, rarity: 'legendary', attack: 4, health: 4, faction: 'neutral', text: 'Whenever you summon MECHAZ0R, put a MECHAZ0R in your action bar.' }, { id: 10983, name: 'Ash Mephyt', type: 'minion', cost: 5, rarity: 'common', attack: 2, health: 3, faction: 'neutral', text: '<b>Opening Gambit</b>: Summon two copies of this minion on random spaces.' }, { id: 11054, name: 'Beastmaster', type: 'minion', cost: 5, rarity: 'rare', attack: 2, health: 5, faction: 'neutral', text: '<b>Frenzy</b>, <b>Celerity</b>' }, { id: 10204, name: 'Brightmoss Golem', type: 'minion', cost: 5, rarity: 'basic', attack: 4, health: 9, faction: 'neutral', text: '' }, { id: 11063, name: 'Calculator', type: 'minion', cost: 5, rarity: 'epic', attack: 1, health: 1, faction: 'neutral', text: '<b>Opening Gambit</b>: Gain the combined Attack and Health of all Battle Pets in your action bar.' }, { id: 11042, name: 'Chakkram', type: 'minion', cost: 5, rarity: 'rare', attack: 5, health: 5, faction: 'neutral', text: 'Costs 2 less if your General took damage on your opponent\'s last turn.' }, { id: 10958, name: 'Dagger Kiri', type: 'minion', cost: 5, rarity: 'common', attack: 2, health: 8, faction: 'neutral', text: '<b>Celerity</b>' }, { id: 10959, name: 'Dancing Blades', type: 'minion', cost: 5, rarity: 'common', attack: 4, health: 6, faction: 'neutral', text: '<b>Opening Gambit</b>: Deal 3 damage to ANY minion in front of this.' }, { id: 11048, name: 'Envybaer', type: 'minion', cost: 5, rarity: 'legendary', attack: 3, health: 7, faction: 'neutral', text: 'Whenever this minion damages an enemy, teleport that enemy to a random unoccupied corner.' }, { id: 19028, name: 'Fireblazer', type: 'minion', cost: 5, rarity: 'common', attack: 5, health: 5, faction: 'neutral', text: '<b>Provoke</b>' }, { id: 11011, name: 'Firestarter', type: 'minion', race: 'arcanyst', cost: 5, rarity: 'rare', attack: 3, health: 5, faction: 'neutral', text: 'Whenever you cast a spell, summon a 1/1 Spellspark with <b>Rush</b> on a random nearby space.' }, { id: 11034, name: 'Golden Justicar', type: 'minion', cost: 5, rarity: 'epic', attack: 4, health: 6, faction: 'neutral', text: '<b>Provoke</b><br> Your other minions with <b>Provoke</b> can move two additional spaces.' }, { id: 11049, name: 'Grincher', type: 'minion', cost: 5, rarity: 'rare', attack: 5, health: 4, faction: 'neutral', text: '<b>Opening Gambit</b>: Put a random artifact into your action bar. It costs 2 less.' }, { id: 11024, name: 'Hollow Grovekeeper', type: 'minion', cost: 5, rarity: 'legendary', attack: 3, health: 4, faction: 'neutral', text: '<b>Opening Gambit</b>: Destroy ANY nearby minion with Provoke or Frenzy. If you do, this minion gains Provoke and Frenzy.' }, { id: 11064, name: 'Inquisitor Kron', type: 'minion', cost: 5, rarity: 'legendary', attack: 4, health: 6, faction: 'neutral', text: '<b>Provoke</b><br> Whenever you replace a card, summon a 2/2 Prisoner with a random ability nearby.' }, { id: 11018, name: 'Keeper of the Vale', type: 'minion', cost: 5, rarity: 'legendary', attack: 3, health: 4, faction: 'neutral', text: '<b>Opening Gambit</b>: Summon a random non-token friendly minion destroyed this game nearby.' }, { id: 10973, name: 'Lux Ignis', type: 'minion', cost: 5, rarity: 'epic', attack: 2, health: 5, faction: 'neutral', text: '<b>Ranged</b><br> At the end of your turn, restore 2 Health to all nearby friendly minions.' }, { id: 11031, name: 'Necroseer', type: 'minion', cost: 5, rarity: 'basic', attack: 5, health: 4, faction: 'neutral', text: '<b>Dying Wish</b>: Draw a card.' }, { id: 11060, name: 'Rawr', type: 'minion', race: 'battle pet', cost: 5, rarity: 'legendary', attack: 3, health: 7, faction: 'neutral', text: 'Whenever this minion takes damage, summon a random Battle Pet nearby.' }, { id: 19032, name: 'Rogue Warden', type: 'minion', cost: 5, rarity: 'common', attack: 4, health: 3, faction: 'neutral', text: '<b>Ranged</b>' }, { id: 11030, name: 'Sunset Paragon', type: 'minion', cost: 5, rarity: 'epic', attack: 3, health: 2, faction: 'neutral', text: '<b>Opening Gambit</b>: ALL nearby minions deal damage to themselves equal to their Attack.' }, { id: 10955, name: 'Sworn Defender', type: 'minion', cost: 5, rarity: 'epic', attack: 4, health: 7, faction: 'neutral', text: 'Whenever your General takes damage, restore this minion to full Health.' }, { id: 10985, name: 'The High Hand', type: 'minion', cost: 5, rarity: 'common', attack: 2, health: 3, faction: 'neutral', text: '<b>Opening Gambit</b>: Gains +1/+1 for each card in your opponent\'s action bar.' }, { id: 10022, name: 'Twilight Sorcerer', type: 'minion', cost: 5, rarity: 'epic', attack: 3, health: 6, faction: 'neutral', text: '<b>Opening Gambit</b>: Put a copy of a random spell you cast this game into your action bar.' }, { id: 10994, name: 'Zen\'Rui, The BlightSpawned', type: 'minion', cost: 5, rarity: 'legendary', attack: 4, health: 3, faction: 'neutral', text: '<b>Opening Gambit</b>: Take control of a nearby enemy minion with 2 or less Attack.' }, { id: 19043, name: 'Archon Spellbinder', type: 'minion', race: 'arcanyst', cost: 6, rarity: 'legendary', attack: 7, health: 7, faction: 'neutral', text: 'Your opponent\'s non-Bloodborn spells cost 1 more to cast.' }, { id: 11032, name: 'Bloodletter', type: 'minion', cost: 6, rarity: 'basic', attack: 4, health: 6, faction: 'neutral', text: 'Deals double damage to Generals.' }, { id: 11023, name: 'Bonereaper', type: 'minion', cost: 6, rarity: 'epic', attack: 2, health: 9, faction: 'neutral', text: '<b>Provoke</b><br> At the end of your turn, deal 2 damage to all nearby enemy minions.' }, { id: 10980, name: 'Deathblighter', type: 'minion', cost: 6, rarity: 'common', attack: 3, health: 4, faction: 'neutral', text: '<b>Opening Gambit</b>: Deal 3 damage to all enemy minions around it.' }, { id: 11037, name: 'Diamond Golem', type: 'minion', race: 'golem', cost: 6, rarity: 'common', attack: 4, health: 11, faction: 'neutral', text: '' }, { id: 10986, name: 'Eclipse', type: 'minion', race: 'arcanyst', cost: 6, rarity: 'legendary', attack: 3, health: 7, faction: 'neutral', text: 'Whenever this minion takes damage, it deals that much damage to the enemy General.' }, { id: 10984, name: 'First Sword of Akrane', type: 'minion', cost: 6, rarity: 'common', attack: 7, health: 7, faction: 'neutral', text: 'Your other minions have +1 Attack.' }, { id: 11077, name: 'Grove Lion', type: 'minion', cost: 6, rarity: 'epic', attack: 5, health: 5, faction: 'neutral', text: 'While this minion is on the battlefield, your General has <b>Forcefield</b>.' }, { id: 10963, name: 'Jax Truesight', type: 'minion', cost: 6, rarity: 'legendary', attack: 1, health: 1, faction: 'neutral', text: '<b>Ranged</b><br> <b>Opening Gambit</b>: Summon a 1/1 Ranged Mini-Jax in each unoccupied corner.' }, { id: 11045, name: 'Ruby Rifter', type: 'minion', cost: 6, rarity: 'legendary', attack: 4, health: 6, faction: 'neutral', text: 'Whenever your General takes damage, give this minion +2 Attack and draw a card.' }, { id: 10307, name: 'Serpenti', type: 'minion', cost: 6, rarity: 'common', attack: 7, health: 4, faction: 'neutral', text: '<b>Frenzy</b>' }, { id: 11055, name: 'Silverbeak', type: 'minion', cost: 6, rarity: 'common', attack: 6, health: 9, faction: 'neutral', text: '' }, { id: 19035, name: 'Storm Aratha', type: 'minion', cost: 6, rarity: 'common', attack: 6, health: 5, faction: 'neutral', text: '<b>Flying</b>' }, { id: 133733, name: 'Stormmetal Golem', type: 'minion', race: 'golem', cost: 6, rarity: 'basic', attack: 8, health: 8, faction: 'neutral', text: '' }, { id: 11047, name: 'The Scientist', type: 'minion', cost: 6, rarity: 'epic', attack: 6, health: 6, faction: 'neutral', text: 'Whenever you cast a spell that targets a friendly minion, draw a card.' }, { id: 11021, name: 'Astral Crusader', type: 'minion', cost: 7, rarity: 'legendary', attack: 7, health: 6, faction: 'neutral', text: 'Whenever you replace this card, it costs 1 less and gains +1/+1.' }, { id: 19046, name: 'Dark Nemesis', type: 'minion', cost: 7, rarity: 'legendary', attack: 4, health: 10, faction: 'neutral', text: 'At the start of your turn, deal 4 damage to the enemy General and this minion gains +4 Attack.' }, { id: 133740, name: 'Dragonbone Golem', type: 'minion', race: 'golem', cost: 7, rarity: 'basic', attack: 10, health: 10, faction: 'neutral', text: '' }, { id: 11029, name: 'E\'Xun', type: 'minion', cost: 7, rarity: 'legendary', attack: 5, health: 5, faction: 'neutral', text: '<b>Forcefield</b><br> Whenever this minion attacks or is attacked, draw a card.' }, { id: 11010, name: 'Grailmaster', type: 'minion', cost: 7, rarity: 'epic', attack: 6, health: 6, faction: 'neutral', text: 'Whenever you summon a minion, this minion gains a random keyword ability.' }, { id: 10997, name: 'Paddo', type: 'minion', cost: 7, rarity: 'legendary', attack: 12, health: 6, faction: 'neutral', text: '<b>Airdrop</b><br> <b>Opening Gambit</b>: Push ALL nearby minions and Generals to random spaces on the battlefield.' }, { id: 10966, name: 'Pandora', type: 'minion', cost: 7, rarity: 'legendary', attack: 3, health: 10, faction: 'neutral', text: 'At the end of your turn, summon a 3/3 Spirit Wolf with a random ability on a nearby space.' }, { id: 10956, name: 'Red Synja', type: 'minion', cost: 7, rarity: 'legendary', attack: 7, health: 7, faction: 'neutral', text: 'Whenever your General takes damage, deal 7 damage to a random nearby enemy minion.' }, { id: 10990, name: 'Rook', type: 'minion', cost: 7, rarity: 'legendary', attack: 5, health: 5, faction: 'neutral', text: 'At the end of your turn, this minion gains a random Faction ability.' }, { id: 11026, name: 'War Talon', type: 'minion', cost: 7, rarity: 'common', attack: 4, health: 9, faction: 'neutral', text: '<b>Frenzy</b>, <b>Provoke</b>' }, { id: 19036, name: 'Whistling Blade', type: 'minion', cost: 7, rarity: 'common', attack: 2, health: 15, faction: 'neutral', text: '<b>Provoke</b>' }, { id: 10996, name: 'Zurael, the Lifegiver', type: 'minion', cost: 7, rarity: 'legendary', attack: 4, health: 7, faction: 'neutral', text: '<b>Opening Gambit</b>: Summon all non-token friendly minions destroyed on your opponent\'s last turn on random spaces.' }, { id: 11013, name: 'Khymera', type: 'minion', cost: 8, rarity: 'legendary', attack: 5, health: 12, faction: 'neutral', text: 'Whenever this minion takes damage, summon a random token minion nearby.' }, { id: 11044, name: 'Blood Taura', type: 'minion', cost: 25, rarity: 'epic', attack: 12, health: 12, faction: 'neutral', text: '<b>Provoke</b><br> This minion\'s cost is equal to your General\'s Health.' }];

	exports.default = neutral;

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.searchText = exports.currentPage = exports.totalPages = exports.general = exports.visibleCards = exports.filteredCards = undefined;

	var _toConsumableArray2 = __webpack_require__(182);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	var _generals = __webpack_require__(194);

	var _generals2 = _interopRequireDefault(_generals);

	var _cards = __webpack_require__(195);

	var _cards2 = _interopRequireDefault(_cards);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var filteredCards = exports.filteredCards = function filteredCards(_ref) {
	  var route = _ref.route;
	  var deck = _ref.deck;
	  var cardList = _ref.cardList;

	  var faction = route.params.faction;

	  var cards = [].concat((0, _toConsumableArray3.default)(_generals2.default.filter(function (card) {
	    return card.faction === faction;
	  })), (0, _toConsumableArray3.default)(_cards2.default[faction]), (0, _toConsumableArray3.default)(_cards2.default.neutral));
	  var textSearch = cardList.textSearch;
	  var typeSelect = cardList.typeSelect;
	  var raritySelect = cardList.raritySelect;
	  var factionSelect = cardList.factionSelect;


	  if (textSearch) cards = cards.filter(function (card) {
	    return card.name.toLowerCase().includes(textSearch.toLowerCase());
	  });
	  if (typeSelect.length) cards = cards.filter(function (card) {
	    return typeSelect.includes(card.type);
	  });
	  if (raritySelect.length) cards = cards.filter(function (card) {
	    return raritySelect.includes(card.rarity);
	  });
	  if (factionSelect.length) cards = cards.filter(function (card) {
	    return factionSelect.includes(card.faction);
	  });
	  if (!deck.general) cards = cards.filter(function (card) {
	    return card.type === 'general';
	  });

	  return cards;
	};

	var visibleCards = exports.visibleCards = function visibleCards(state) {
	  var _state$cardList = state.cardList;
	  var currentPage = _state$cardList.currentPage;
	  var cardsPerPage = _state$cardList.cardsPerPage;

	  return filteredCards(state).slice((currentPage - 1) * cardsPerPage, currentPage * cardsPerPage);
	};

	var general = exports.general = function general(_ref2) {
	  var deck = _ref2.deck;
	  return deck.general;
	};

	var totalPages = exports.totalPages = function totalPages(state) {
	  return Math.ceil(filteredCards(state).length / state.cardList.cardsPerPage);
	};

	var currentPage = exports.currentPage = function currentPage(state) {
	  return totalPages(state) > 0 ? state.cardList.currentPage : 0;
	};

	var searchText = exports.searchText = function searchText(_ref3) {
	  var cardList = _ref3.cardList;
	  return cardList.textSearch;
	};

/***/ },
/* 204 */
/***/ function(module, exports) {

	exports.sync = function (store, router) {
	  store.registerModule('route', {
	    state: {},
	    mutations: {
	      'router/ROUTE_CHANGED': function (state, to) {
	        store.state.route = Object.freeze({
	          name: to.name,
	          path: to.path,
	          hash: to.hash,
	          query: to.query,
	          params: to.params,
	          fullPath: to.fullPath
	        })
	      }
	    }
	  })

	  var isTimeTraveling = false
	  var currentPath

	  // sync router on store change
	  store.watch(
	    function (state) { return state.route },
	    function (route) {
	      if (route.fullPath === currentPath) {
	        return
	      }
	      isTimeTraveling = true
	      currentPath = route.fullPath
	      router.push(route)
	    },
	    { sync: true }
	  )

	  // sync store on router navigation
	  router.afterEach(function (to) {
	    if (isTimeTraveling) {
	      isTimeTraveling = false
	      return
	    }
	    currentPath = to.fullPath
	    store.commit('router/ROUTE_CHANGED', to)
	  })
	}


/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* styles */
	__webpack_require__(206)

	/* script */
	__vue_exports__ = __webpack_require__(208)

	/* template */
	var __vue_template__ = __webpack_require__(235)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-1", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-1", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] App.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(207);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-1!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./App.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-1!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./App.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, "/* Includes */\n/* Vendor */\n/* Partials */\n/*\r\n    https://jdsteinbach.com/css//sass-maps-breakpoint-mixin/\r\n\r\n    Usage:\r\n    @include breakpoint(md) {\r\n        ...\r\n    }\r\n*/\n/* Files */\nhtml {\n  box-sizing: border-box;\n}\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n@-ms-viewport {\n  width: device-width;\n}\nhtml {\n  font-size: 16px;\n  -ms-overflow-style: scrollbar;\n  -webkit-tap-highlight-color: transparent;\n  height: 100%;\n}\nbody {\n  font-family: LatoRegular, sans-serif;\n  font-size: 1rem;\n  line-height: 1.5;\n  color: #e9e9e9;\n  background-color: #0b1c27;\n  margin: 0;\n  padding: 0;\n  height: 100%;\n}\n[tabindex=\"-1\"]:focus {\n  outline: none !important;\n}\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 0;\n  margin-bottom: .5rem;\n}\ninput, textarea {\n  font-family: LatoRegular, sans-serif;\n  color: #e9e9e9;\n}\np {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\nabbr[title],\nabbr[data-original-title] {\n  cursor: help;\n  border-bottom: 1px dotted #373a3c;\n}\naddress {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit;\n}\nol,\nul,\ndl {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\nol ol,\nul ul,\nol ul,\nul ol {\n  margin-bottom: 0;\n}\ndt {\n  font-weight: bold;\n}\ndd {\n  margin-bottom: .5rem;\n  margin-left: 0;\n}\nblockquote {\n  margin: 0 0 1rem;\n}\na {\n  color: #01afee;\n  text-decoration: none;\n}\na:hover, a:focus {\n    color: #0177a2;\n    text-decoration: none;\n}\na:focus {\n    outline: thin dotted;\n    outline: 5px auto -webkit-focus-ring-color;\n    outline-offset: -2px;\n}\npre {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\nfigure {\n  margin: 0 0 1rem;\n}\nimg {\n  vertical-align: middle;\n}\n[role=\"button\"] {\n  cursor: pointer;\n}\na,\narea,\nbutton,\n[role=\"button\"],\ninput,\nlabel,\nselect,\nsummary,\ntextarea {\n  touch-action: manipulation;\n}\ntable {\n  background-color: transparent;\n}\ncaption {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  color: #818a91;\n  text-align: left;\n  caption-side: bottom;\n}\nth {\n  text-align: left;\n}\nlabel {\n  display: inline-block;\n  margin-bottom: .5rem;\n}\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\ninput,\nbutton,\nselect,\ntextarea {\n  margin: 0;\n  line-height: inherit;\n  border-radius: 0;\n}\ntextarea {\n  resize: vertical;\n}\nfieldset {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\nlegend {\n  display: block;\n  width: 100%;\n  padding: 0;\n  margin-bottom: .5rem;\n  font-size: 1.5rem;\n  line-height: inherit;\n}\ninput[type=\"search\"] {\n  -webkit-appearance: none;\n}\noutput {\n  display: inline-block;\n}\n[hidden] {\n  display: none !important;\n}\n\n/* Sprites */\n.abyssian-sprite {\n  background-image: url(https://dl.dropboxusercontent.com/u/24984522/sprites_abyssian.png);\n  background-repeat: no-repeat;\n  display: block;\n  position: absolute;\n}\n.abyssian-20049 {\n  background-position: 0 0;\n}\n.abyssian-20050 {\n  background-position: -96px 0;\n}\n.abyssian-20051 {\n  background-position: -192px 0;\n}\n.abyssian-20052 {\n  background-position: -288px 0;\n}\n.abyssian-20057 {\n  background-position: -384px 0;\n}\n.abyssian-20059 {\n  background-position: -480px 0;\n}\n.abyssian-20061 {\n  background-position: -576px 0;\n}\n.abyssian-20065 {\n  background-position: -672px 0;\n}\n.abyssian-20069 {\n  background-position: -768px 0;\n}\n.abyssian-20070 {\n  background-position: 0 -96px;\n}\n.abyssian-20071 {\n  background-position: -96px -96px;\n}\n.abyssian-20072 {\n  background-position: -192px -96px;\n}\n.abyssian-20089 {\n  background-position: -288px -96px;\n}\n.abyssian-20131 {\n  background-position: -384px -96px;\n}\n.abyssian-20133 {\n  background-position: -480px -96px;\n}\n.abyssian-20154 {\n  background-position: -576px -96px;\n}\n.abyssian-20166 {\n  background-position: -672px -96px;\n}\n.abyssian-20199 {\n  background-position: -768px -96px;\n}\n.abyssian-20200 {\n  background-position: 0 -192px;\n}\n.abyssian-20201 {\n  background-position: -96px -192px;\n}\n.abyssian-20204 {\n  background-position: -192px -192px;\n}\n.abyssian-20205 {\n  background-position: -288px -192px;\n}\n.abyssian-20213 {\n  background-position: -384px -192px;\n}\n.abyssian-30002 {\n  background-position: -480px -192px;\n}\n.abyssian-30005 {\n  background-position: -576px -192px;\n}\n.abyssian-30014 {\n  background-position: -672px -192px;\n}\n.abyssian-30020 {\n  background-position: -768px -192px;\n}\n.abyssian-308 {\n  background-position: 0 -288px;\n}\n.abyssian-309 {\n  background-position: -160px -288px;\n}\n.abyssian-310 {\n  background-position: -320px -288px;\n}\n.abyssian-311 {\n  background-position: -480px -288px;\n}\n.abyssian-312 {\n  background-position: -640px -288px;\n}\n.abyssian-313 {\n  background-position: 0 -448px;\n}\n.abyssian-314 {\n  background-position: -160px -448px;\n}\n.abyssian-316 {\n  background-position: -320px -448px;\n}\n.abyssian-317 {\n  background-position: -480px -448px;\n}\n.abyssian-318 {\n  background-position: -640px -448px;\n}\n.abyssian-319 {\n  background-position: 0 -608px;\n}\n.abyssian-320 {\n  background-position: -160px -608px;\n}\n.abyssian-321 {\n  background-position: -320px -608px;\n}\n.abyssian-322 {\n  background-position: -480px -608px;\n}\n.abyssian-324 {\n  background-position: -640px -608px;\n}\n.abyssian-325 {\n  background-position: -864px 0;\n}\n.abyssian-326 {\n  background-position: -864px -160px;\n}\n.abyssian-327 {\n  background-position: -800px -320px;\n}\n.abyssian-328 {\n  background-position: -800px -480px;\n}\n.abyssian-329 {\n  background-position: -800px -640px;\n}\n.abyssian-330 {\n  background-position: 0 -800px;\n}\n.general-sprite {\n  background-image: url(https://dl.dropboxusercontent.com/u/24984522/sprites_generals.png);\n  background-repeat: no-repeat;\n  display: block;\n  position: absolute;\n}\n.general-1 {\n  background-position: -5px -5px;\n}\n.general-101 {\n  background-position: -175px -5px;\n}\n.general-123 {\n  background-position: -345px -5px;\n}\n.general-201 {\n  background-position: -5px -175px;\n}\n.general-223 {\n  background-position: -175px -175px;\n}\n.general-23 {\n  background-position: -345px -175px;\n}\n.general-301 {\n  background-position: -5px -345px;\n}\n.general-323 {\n  background-position: -175px -345px;\n}\n.general-401 {\n  background-position: -345px -345px;\n}\n.general-418 {\n  background-position: -515px -5px;\n}\n.general-501 {\n  background-position: -515px -175px;\n}\n.general-527 {\n  background-position: -515px -345px;\n}\n.lyonar-sprite {\n  background-image: url(https://dl.dropboxusercontent.com/u/24984522/sprites_lyonar.png);\n  background-repeat: no-repeat;\n  display: block;\n  position: absolute;\n}\n.lyonar-10 {\n  background-position: -2px -2px;\n}\n.lyonar-11 {\n  background-position: -166px -2px;\n}\n.lyonar-12 {\n  background-position: -330px -2px;\n}\n.lyonar-13 {\n  background-position: -494px -2px;\n}\n.lyonar-14 {\n  background-position: -658px -2px;\n}\n.lyonar-15 {\n  background-position: -2px -166px;\n}\n.lyonar-16 {\n  background-position: -166px -166px;\n}\n.lyonar-17 {\n  background-position: -330px -166px;\n}\n.lyonar-18 {\n  background-position: -494px -166px;\n}\n.lyonar-20 {\n  background-position: -658px -166px;\n}\n.lyonar-20043 {\n  background-position: -822px -2px;\n}\n.lyonar-20044 {\n  background-position: -822px -102px;\n}\n.lyonar-20045 {\n  background-position: -822px -202px;\n}\n.lyonar-20046 {\n  background-position: -822px -302px;\n}\n.lyonar-20047 {\n  background-position: -2px -402px;\n}\n.lyonar-20062 {\n  background-position: -102px -402px;\n}\n.lyonar-20064 {\n  background-position: -202px -402px;\n}\n.lyonar-20066 {\n  background-position: -302px -402px;\n}\n.lyonar-20067 {\n  background-position: -402px -402px;\n}\n.lyonar-20068 {\n  background-position: -502px -402px;\n}\n.lyonar-20090 {\n  background-position: -602px -402px;\n}\n.lyonar-20104 {\n  background-position: -702px -402px;\n}\n.lyonar-20109 {\n  background-position: -802px -402px;\n}\n.lyonar-20120 {\n  background-position: -2px -502px;\n}\n.lyonar-20128 {\n  background-position: -102px -502px;\n}\n.lyonar-20158 {\n  background-position: -202px -502px;\n}\n.lyonar-20161 {\n  background-position: -302px -502px;\n}\n.lyonar-20175 {\n  background-position: -402px -502px;\n}\n.lyonar-20186 {\n  background-position: -502px -502px;\n}\n.lyonar-20187 {\n  background-position: -602px -502px;\n}\n.lyonar-20188 {\n  background-position: -702px -502px;\n}\n.lyonar-20189 {\n  background-position: -802px -502px;\n}\n.lyonar-20190 {\n  background-position: -2px -602px;\n}\n.lyonar-20220 {\n  background-position: -102px -602px;\n}\n.lyonar-21 {\n  background-position: -202px -602px;\n}\n.lyonar-22 {\n  background-position: -366px -602px;\n}\n.lyonar-24 {\n  background-position: -530px -602px;\n}\n.lyonar-25 {\n  background-position: -694px -602px;\n}\n.lyonar-26 {\n  background-position: -922px -2px;\n}\n.lyonar-27 {\n  background-position: -922px -166px;\n}\n.lyonar-28 {\n  background-position: -922px -330px;\n}\n.lyonar-29 {\n  background-position: -902px -494px;\n}\n.lyonar-30 {\n  background-position: -858px -658px;\n}\n.lyonar-30001 {\n  width: 96px;\n  height: 96px;\n  background-position: -2px -822px;\n}\n.lyonar-30004 {\n  width: 96px;\n  height: 96px;\n  background-position: -102px -822px;\n}\n.lyonar-30018 {\n  width: 96px;\n  height: 96px;\n  background-position: -202px -822px;\n}\n.lyonar-30024 {\n  width: 96px;\n  height: 96px;\n  background-position: -302px -822px;\n}\n.lyonar-8 {\n  background-position: -402px -822px;\n}\n.lyonar-9 {\n  background-position: -566px -822px;\n}\n.songhai-sprite {\n  background-image: url(https://dl.dropboxusercontent.com/u/24984522/sprites_songhai.png);\n  background-repeat: no-repeat;\n  display: block;\n  position: absolute;\n}\n.songhai-108 {\n  background-position: -5px -5px;\n}\n.songhai-109 {\n  background-position: -175px -5px;\n}\n.songhai-110 {\n  background-position: -345px -5px;\n}\n.songhai-111 {\n  background-position: -515px -5px;\n}\n.songhai-112 {\n  background-position: -685px -5px;\n}\n.songhai-114 {\n  background-position: -5px -175px;\n}\n.songhai-115 {\n  background-position: -175px -175px;\n}\n.songhai-116 {\n  background-position: -345px -175px;\n}\n.songhai-117 {\n  background-position: -515px -175px;\n}\n.songhai-118 {\n  background-position: -685px -175px;\n}\n.songhai-119 {\n  background-position: -5px -345px;\n}\n.songhai-120 {\n  background-position: -175px -345px;\n}\n.songhai-121 {\n  background-position: -345px -345px;\n}\n.songhai-122 {\n  background-position: -515px -345px;\n}\n.songhai-124 {\n  background-position: -685px -345px;\n}\n.songhai-125 {\n  background-position: -5px -515px;\n}\n.songhai-126 {\n  background-position: -175px -515px;\n}\n.songhai-127 {\n  background-position: -345px -515px;\n}\n.songhai-128 {\n  background-position: -515px -515px;\n}\n.songhai-129 {\n  background-position: -685px -515px;\n}\n.songhai-130 {\n  background-position: -5px -685px;\n}\n.songhai-131 {\n  background-position: -175px -685px;\n}\n.songhai-20080 {\n  background-position: -855px -5px;\n}\n.songhai-20081 {\n  background-position: -855px -111px;\n}\n.songhai-20082 {\n  background-position: -855px -217px;\n}\n.songhai-20084 {\n  background-position: -855px -323px;\n}\n.songhai-20085 {\n  background-position: -855px -429px;\n}\n.songhai-20086 {\n  background-position: -855px -535px;\n}\n.songhai-20087 {\n  background-position: -855px -641px;\n}\n.songhai-20088 {\n  background-position: -345px -747px;\n}\n.songhai-20094 {\n  background-position: -451px -747px;\n}\n.songhai-20100 {\n  background-position: -557px -747px;\n}\n.songhai-20102 {\n  background-position: -663px -747px;\n}\n.songhai-20106 {\n  background-position: -769px -747px;\n}\n.songhai-20129 {\n  background-position: -345px -853px;\n}\n.songhai-20141 {\n  background-position: -451px -853px;\n}\n.songhai-20143 {\n  background-position: -557px -853px;\n}\n.songhai-20155 {\n  background-position: -663px -853px;\n}\n.songhai-20167 {\n  background-position: -769px -853px;\n}\n.songhai-20168 {\n  background-position: -961px -5px;\n}\n.songhai-20191 {\n  background-position: -961px -111px;\n}\n.songhai-20192 {\n  background-position: -961px -217px;\n}\n.songhai-20193 {\n  background-position: -961px -323px;\n}\n.songhai-20194 {\n  background-position: -961px -429px;\n}\n.songhai-20217 {\n  background-position: -961px -535px;\n}\n.songhai-30007 {\n  background-position: -961px -641px;\n}\n.songhai-30009 {\n  background-position: -875px -747px;\n}\n.songhai-30010 {\n  background-position: -875px -853px;\n}\n.songhai-30023 {\n  background-position: -5px -959px;\n}\n.magmar-sprite {\n  background-image: url(https://dl.dropboxusercontent.com/u/24984522/sprites_magmar.png);\n  background-repeat: no-repeat;\n  display: block;\n  position: absolute;\n}\n.magmar-20063 {\n  background-position: -5px -5px;\n}\n.magmar-20111 {\n  background-position: -111px -5px;\n}\n.magmar-20112 {\n  background-position: -217px -5px;\n}\n.magmar-20113 {\n  background-position: -323px -5px;\n}\n.magmar-20114 {\n  background-position: -429px -5px;\n}\n.magmar-20115 {\n  background-position: -535px -5px;\n}\n.magmar-20116 {\n  background-position: -641px -5px;\n}\n.magmar-20117 {\n  background-position: -747px -5px;\n}\n.magmar-20118 {\n  background-position: -853px -5px;\n}\n.magmar-20119 {\n  background-position: -5px -111px;\n}\n.magmar-20121 {\n  background-position: -111px -111px;\n}\n.magmar-20122 {\n  background-position: -217px -111px;\n}\n.magmar-20124 {\n  background-position: -323px -111px;\n}\n.magmar-20125 {\n  background-position: -429px -111px;\n}\n.magmar-20156 {\n  background-position: -535px -111px;\n}\n.magmar-20157 {\n  background-position: -641px -111px;\n}\n.magmar-20162 {\n  background-position: -747px -111px;\n}\n.magmar-20202 {\n  background-position: -853px -111px;\n}\n.magmar-20203 {\n  background-position: -5px -217px;\n}\n.magmar-20206 {\n  background-position: -111px -217px;\n}\n.magmar-20218 {\n  background-position: -217px -217px;\n}\n.magmar-20219 {\n  background-position: -323px -217px;\n}\n.magmar-30012 {\n  background-position: -429px -217px;\n}\n.magmar-30013 {\n  background-position: -535px -217px;\n}\n.magmar-30017 {\n  background-position: -641px -217px;\n}\n.magmar-30025 {\n  background-position: -747px -217px;\n}\n.magmar-402 {\n  background-position: -5px -323px;\n}\n.magmar-403 {\n  background-position: -175px -323px;\n}\n.magmar-404 {\n  background-position: -345px -323px;\n}\n.magmar-405 {\n  background-position: -515px -323px;\n}\n.magmar-406 {\n  background-position: -685px -323px;\n}\n.magmar-407 {\n  background-position: -5px -493px;\n}\n.magmar-408 {\n  background-position: -175px -493px;\n}\n.magmar-409 {\n  background-position: -345px -493px;\n}\n.magmar-410 {\n  background-position: -515px -493px;\n}\n.magmar-412 {\n  background-position: -685px -493px;\n}\n.magmar-413 {\n  background-position: -5px -663px;\n}\n.magmar-414 {\n  background-position: -175px -663px;\n}\n.magmar-415 {\n  background-position: -345px -663px;\n}\n.magmar-417 {\n  background-position: -515px -663px;\n}\n.magmar-419 {\n  background-position: -685px -663px;\n}\n.magmar-420 {\n  background-position: -959px -5px;\n}\n.magmar-421 {\n  background-position: -959px -175px;\n}\n.magmar-422 {\n  background-position: -855px -345px;\n}\n.magmar-423 {\n  background-position: -855px -515px;\n}\n.magmar-424 {\n  background-position: -855px -685px;\n}\n.magmar-425 {\n  background-position: -5px -855px;\n}\n.magmar-426 {\n  background-position: -175px -855px;\n}\n.neutral-sprite {\n  background-image: url(https://dl.dropboxusercontent.com/u/24984522/sprites_neutral.png);\n  background-repeat: no-repeat;\n  display: block;\n  position: absolute;\n}\n.neutral-10001 {\n  background-position: -5px -5px;\n}\n.neutral-10009 {\n  background-position: -175px -5px;\n}\n.neutral-10012 {\n  background-position: -345px -5px;\n}\n.neutral-10013 {\n  background-position: -515px -5px;\n}\n.neutral-10014 {\n  background-position: -685px -5px;\n}\n.neutral-10016 {\n  background-position: -855px -5px;\n}\n.neutral-10017 {\n  background-position: -1025px -5px;\n}\n.neutral-10018 {\n  background-position: -1195px -5px;\n}\n.neutral-10019 {\n  background-position: -1365px -5px;\n}\n.neutral-10020 {\n  background-position: -1535px -5px;\n}\n.neutral-10021 {\n  background-position: -1705px -5px;\n}\n.neutral-10022 {\n  background-position: -1875px -5px;\n}\n.neutral-10204 {\n  background-position: -5px -175px;\n}\n.neutral-10301 {\n  background-position: -175px -175px;\n}\n.neutral-10302 {\n  background-position: -345px -175px;\n}\n.neutral-10303 {\n  background-position: -515px -175px;\n}\n.neutral-10304 {\n  background-position: -685px -175px;\n}\n.neutral-10305 {\n  background-position: -855px -175px;\n}\n.neutral-10306 {\n  background-position: -1025px -175px;\n}\n.neutral-10307 {\n  background-position: -1195px -175px;\n}\n.neutral-10953 {\n  background-position: -1365px -175px;\n}\n.neutral-10954 {\n  background-position: -1535px -175px;\n}\n.neutral-10955 {\n  background-position: -1705px -175px;\n}\n.neutral-10956 {\n  background-position: -1875px -175px;\n}\n.neutral-10957 {\n  background-position: -5px -345px;\n}\n.neutral-10958 {\n  background-position: -175px -345px;\n}\n.neutral-10959 {\n  background-position: -345px -345px;\n}\n.neutral-10960 {\n  background-position: -515px -345px;\n}\n.neutral-10961 {\n  background-position: -685px -345px;\n}\n.neutral-10962 {\n  background-position: -855px -345px;\n}\n.neutral-10963 {\n  background-position: -1025px -345px;\n}\n.neutral-10965 {\n  background-position: -1195px -345px;\n}\n.neutral-10966 {\n  background-position: -1365px -345px;\n}\n.neutral-10973 {\n  background-position: -1535px -345px;\n}\n.neutral-10974 {\n  background-position: -1705px -345px;\n}\n.neutral-10975 {\n  background-position: -1875px -345px;\n}\n.neutral-10976 {\n  background-position: -5px -515px;\n}\n.neutral-10978 {\n  background-position: -175px -515px;\n}\n.neutral-10979 {\n  background-position: -345px -515px;\n}\n.neutral-10980 {\n  background-position: -515px -515px;\n}\n.neutral-10981 {\n  background-position: -685px -515px;\n}\n.neutral-10982 {\n  background-position: -855px -515px;\n}\n.neutral-10983 {\n  background-position: -1025px -515px;\n}\n.neutral-10984 {\n  background-position: -1195px -515px;\n}\n.neutral-10985 {\n  background-position: -1365px -515px;\n}\n.neutral-10986 {\n  background-position: -1535px -515px;\n}\n.neutral-10987 {\n  background-position: -1705px -515px;\n}\n.neutral-10988 {\n  background-position: -1875px -515px;\n}\n.neutral-10989 {\n  background-position: -5px -685px;\n}\n.neutral-10990 {\n  background-position: -175px -685px;\n}\n.neutral-10991 {\n  background-position: -345px -685px;\n}\n.neutral-10992 {\n  background-position: -515px -685px;\n}\n.neutral-10993 {\n  background-position: -685px -685px;\n}\n.neutral-10994 {\n  background-position: -855px -685px;\n}\n.neutral-10995 {\n  background-position: -1025px -685px;\n}\n.neutral-10996 {\n  background-position: -1195px -685px;\n}\n.neutral-10997 {\n  background-position: -1365px -685px;\n}\n.neutral-11001 {\n  background-position: -1535px -685px;\n}\n.neutral-11004 {\n  background-position: -1705px -685px;\n}\n.neutral-11006 {\n  background-position: -1875px -685px;\n}\n.neutral-11007 {\n  background-position: -5px -855px;\n}\n.neutral-11008 {\n  background-position: -175px -855px;\n}\n.neutral-11009 {\n  background-position: -345px -855px;\n}\n.neutral-11010 {\n  background-position: -515px -855px;\n}\n.neutral-11011 {\n  background-position: -685px -855px;\n}\n.neutral-11013 {\n  background-position: -855px -855px;\n}\n.neutral-11014 {\n  background-position: -1025px -855px;\n}\n.neutral-11015 {\n  background-position: -1195px -855px;\n}\n.neutral-11016 {\n  background-position: -1365px -855px;\n}\n.neutral-11017 {\n  background-position: -1535px -855px;\n}\n.neutral-11018 {\n  background-position: -1705px -855px;\n}\n.neutral-11019 {\n  background-position: -1875px -855px;\n}\n.neutral-11020 {\n  background-position: -5px -1025px;\n}\n.neutral-11021 {\n  background-position: -175px -1025px;\n}\n.neutral-11022 {\n  background-position: -345px -1025px;\n}\n.neutral-11023 {\n  background-position: -515px -1025px;\n}\n.neutral-11024 {\n  background-position: -685px -1025px;\n}\n.neutral-11025 {\n  background-position: -855px -1025px;\n}\n.neutral-11026 {\n  background-position: -1025px -1025px;\n}\n.neutral-11027 {\n  background-position: -1195px -1025px;\n}\n.neutral-11028 {\n  background-position: -1365px -1025px;\n}\n.neutral-11029 {\n  background-position: -1535px -1025px;\n}\n.neutral-11030 {\n  background-position: -1705px -1025px;\n}\n.neutral-11031 {\n  background-position: -1875px -1025px;\n}\n.neutral-11032 {\n  background-position: -5px -1195px;\n}\n.neutral-11033 {\n  background-position: -175px -1195px;\n}\n.neutral-11034 {\n  background-position: -345px -1195px;\n}\n.neutral-11035 {\n  background-position: -515px -1195px;\n}\n.neutral-11036 {\n  background-position: -685px -1195px;\n}\n.neutral-11037 {\n  background-position: -855px -1195px;\n}\n.neutral-11038 {\n  background-position: -1025px -1195px;\n}\n.neutral-11039 {\n  background-position: -1195px -1195px;\n}\n.neutral-11040 {\n  background-position: -1365px -1195px;\n}\n.neutral-11041 {\n  background-position: -1535px -1195px;\n}\n.neutral-11042 {\n  background-position: -1705px -1195px;\n}\n.neutral-11043 {\n  background-position: -1875px -1195px;\n}\n.neutral-11044 {\n  background-position: -5px -1365px;\n}\n.neutral-11045 {\n  background-position: -175px -1365px;\n}\n.neutral-11046 {\n  background-position: -345px -1365px;\n}\n.neutral-11047 {\n  background-position: -515px -1365px;\n}\n.neutral-11048 {\n  background-position: -685px -1365px;\n}\n.neutral-11049 {\n  background-position: -855px -1365px;\n}\n.neutral-11051 {\n  background-position: -1025px -1365px;\n}\n.neutral-11052 {\n  background-position: -1195px -1365px;\n}\n.neutral-11053 {\n  background-position: -1365px -1365px;\n}\n.neutral-11054 {\n  background-position: -1535px -1365px;\n}\n.neutral-11055 {\n  background-position: -1705px -1365px;\n}\n.neutral-11056 {\n  background-position: -1875px -1365px;\n}\n.neutral-11057 {\n  background-position: -5px -1535px;\n}\n.neutral-11058 {\n  background-position: -175px -1535px;\n}\n.neutral-11059 {\n  background-position: -345px -1535px;\n}\n.neutral-11060 {\n  background-position: -515px -1535px;\n}\n.neutral-11061 {\n  background-position: -685px -1535px;\n}\n.neutral-11063 {\n  background-position: -855px -1535px;\n}\n.neutral-11064 {\n  background-position: -1025px -1535px;\n}\n.neutral-11066 {\n  background-position: -1195px -1535px;\n}\n.neutral-11075 {\n  background-position: -1365px -1535px;\n}\n.neutral-11076 {\n  background-position: -1535px -1535px;\n}\n.neutral-11077 {\n  background-position: -1705px -1535px;\n}\n.neutral-11078 {\n  background-position: -1875px -1535px;\n}\n.neutral-133720 {\n  background-position: -5px -1705px;\n}\n.neutral-133729 {\n  background-position: -175px -1705px;\n}\n.neutral-133730 {\n  background-position: -345px -1705px;\n}\n.neutral-133733 {\n  background-position: -515px -1705px;\n}\n.neutral-133740 {\n  background-position: -685px -1705px;\n}\n.neutral-19002 {\n  background-position: -855px -1705px;\n}\n.neutral-19003 {\n  background-position: -1025px -1705px;\n}\n.neutral-19004 {\n  background-position: -1195px -1705px;\n}\n.neutral-19005 {\n  background-position: -1365px -1705px;\n}\n.neutral-19006 {\n  background-position: -1535px -1705px;\n}\n.neutral-19010 {\n  background-position: -1705px -1705px;\n}\n.neutral-19025 {\n  background-position: -1875px -1705px;\n}\n.neutral-19026 {\n  background-position: -5px -1875px;\n}\n.neutral-19027 {\n  background-position: -175px -1875px;\n}\n.neutral-19028 {\n  background-position: -345px -1875px;\n}\n.neutral-19029 {\n  background-position: -515px -1875px;\n}\n.neutral-19030 {\n  background-position: -685px -1875px;\n}\n.neutral-19031 {\n  background-position: -855px -1875px;\n}\n.neutral-19032 {\n  background-position: -1025px -1875px;\n}\n.neutral-19033 {\n  background-position: -1195px -1875px;\n}\n.neutral-19034 {\n  background-position: -1365px -1875px;\n}\n.neutral-19035 {\n  background-position: -1535px -1875px;\n}\n.neutral-19036 {\n  background-position: -1705px -1875px;\n}\n.neutral-19037 {\n  background-position: -1875px -1875px;\n}\n.neutral-19038 {\n  background-position: -2045px -5px;\n}\n.neutral-19039 {\n  background-position: -2045px -175px;\n}\n.neutral-19040 {\n  background-position: -2045px -345px;\n}\n.neutral-19042 {\n  background-position: -2045px -515px;\n}\n.neutral-19043 {\n  background-position: -2045px -685px;\n}\n.neutral-19044 {\n  background-position: -2045px -855px;\n}\n.neutral-19045 {\n  background-position: -2045px -1025px;\n}\n.neutral-19046 {\n  background-position: -2045px -1195px;\n}\n.neutral-19047 {\n  background-position: -2045px -1365px;\n}\n.neutral-19049 {\n  background-position: -2045px -1535px;\n}\n.neutral-19050 {\n  background-position: -2045px -1705px;\n}\n.neutral-19051 {\n  background-position: -2045px -1875px;\n}\n.neutral-19052 {\n  background-position: -5px -2045px;\n}\n.vanar-sprite {\n  background-image: url(https://dl.dropboxusercontent.com/u/24984522/sprites_vanar.png);\n  background-repeat: no-repeat;\n  display: block;\n  position: absolute;\n}\n.vanar-20134 {\n  background-position: -5px -5px;\n}\n.vanar-20135 {\n  background-position: -111px -5px;\n}\n.vanar-20136 {\n  background-position: -217px -5px;\n}\n.vanar-20137 {\n  background-position: -323px -5px;\n}\n.vanar-20138 {\n  background-position: -429px -5px;\n}\n.vanar-20139 {\n  background-position: -535px -5px;\n}\n.vanar-20140 {\n  background-position: -641px -5px;\n}\n.vanar-20144 {\n  background-position: -747px -5px;\n}\n.vanar-20145 {\n  background-position: -853px -5px;\n}\n.vanar-20146 {\n  background-position: -5px -111px;\n}\n.vanar-20147 {\n  background-position: -111px -111px;\n}\n.vanar-20148 {\n  background-position: -217px -111px;\n}\n.vanar-20149 {\n  background-position: -323px -111px;\n}\n.vanar-20150 {\n  background-position: -429px -111px;\n}\n.vanar-20160 {\n  background-position: -535px -111px;\n}\n.vanar-20163 {\n  background-position: -641px -111px;\n}\n.vanar-20165 {\n  background-position: -747px -111px;\n}\n.vanar-20207 {\n  background-position: -853px -111px;\n}\n.vanar-20208 {\n  background-position: -5px -217px;\n}\n.vanar-20209 {\n  background-position: -111px -217px;\n}\n.vanar-20211 {\n  background-position: -217px -217px;\n}\n.vanar-20212 {\n  background-position: -323px -217px;\n}\n.vanar-20214 {\n  background-position: -429px -217px;\n}\n.vanar-30015 {\n  background-position: -535px -217px;\n}\n.vanar-30016 {\n  background-position: -641px -217px;\n}\n.vanar-30019 {\n  background-position: -747px -217px;\n}\n.vanar-30021 {\n  background-position: -853px -217px;\n}\n.vanar-503 {\n  background-position: -5px -323px;\n}\n.vanar-505 {\n  background-position: -175px -323px;\n}\n.vanar-506 {\n  background-position: -345px -323px;\n}\n.vanar-507 {\n  background-position: -515px -323px;\n}\n.vanar-508 {\n  background-position: -685px -323px;\n}\n.vanar-510 {\n  background-position: -5px -493px;\n}\n.vanar-511 {\n  background-position: -175px -493px;\n}\n.vanar-512 {\n  background-position: -345px -493px;\n}\n.vanar-513 {\n  background-position: -515px -493px;\n}\n.vanar-514 {\n  background-position: -685px -493px;\n}\n.vanar-515 {\n  background-position: -5px -663px;\n}\n.vanar-517 {\n  background-position: -175px -663px;\n}\n.vanar-519 {\n  background-position: -345px -663px;\n}\n.vanar-526 {\n  background-position: -515px -663px;\n}\n.vanar-528 {\n  background-position: -685px -663px;\n}\n.vanar-529 {\n  background-position: -959px -5px;\n}\n.vanar-530 {\n  background-position: -959px -175px;\n}\n.vanar-531 {\n  background-position: -855px -345px;\n}\n.vanar-532 {\n  background-position: -855px -515px;\n}\n.vanar-533 {\n  background-position: -855px -685px;\n}\n.vanar-534 {\n  background-position: -5px -855px;\n}\n.vetruvian-sprite {\n  background-image: url(https://dl.dropboxusercontent.com/u/24984522/sprites_vetruvian.png);\n  background-repeat: no-repeat;\n  display: block;\n  position: absolute;\n}\n.vetruvian-20028 {\n  background-position: -5px -5px;\n}\n.vetruvian-20073 {\n  background-position: -111px -5px;\n}\n.vetruvian-20074 {\n  background-position: -217px -5px;\n}\n.vetruvian-20075 {\n  background-position: -323px -5px;\n}\n.vetruvian-20076 {\n  background-position: -429px -5px;\n}\n.vetruvian-20077 {\n  background-position: -535px -5px;\n}\n.vetruvian-20078 {\n  background-position: -641px -5px;\n}\n.vetruvian-20093 {\n  background-position: -747px -5px;\n}\n.vetruvian-20095 {\n  background-position: -853px -5px;\n}\n.vetruvian-20096 {\n  background-position: -5px -111px;\n}\n.vetruvian-20097 {\n  background-position: -111px -111px;\n}\n.vetruvian-20105 {\n  background-position: -217px -111px;\n}\n.vetruvian-20132 {\n  background-position: -323px -111px;\n}\n.vetruvian-20151 {\n  background-position: -429px -111px;\n}\n.vetruvian-20152 {\n  background-position: -535px -111px;\n}\n.vetruvian-20153 {\n  background-position: -641px -111px;\n}\n.vetruvian-20169 {\n  background-position: -747px -111px;\n}\n.vetruvian-20195 {\n  background-position: -853px -111px;\n}\n.vetruvian-20196 {\n  background-position: -5px -217px;\n}\n.vetruvian-20197 {\n  background-position: -111px -217px;\n}\n.vetruvian-20198 {\n  background-position: -217px -217px;\n}\n.vetruvian-20216 {\n  background-position: -323px -217px;\n}\n.vetruvian-208 {\n  background-position: -429px -217px;\n}\n.vetruvian-209 {\n  background-position: -599px -217px;\n}\n.vetruvian-210 {\n  background-position: -769px -217px;\n}\n.vetruvian-211 {\n  background-position: -5px -387px;\n}\n.vetruvian-212 {\n  background-position: -175px -387px;\n}\n.vetruvian-213 {\n  background-position: -345px -387px;\n}\n.vetruvian-214 {\n  background-position: -515px -387px;\n}\n.vetruvian-215 {\n  background-position: -685px -387px;\n}\n.vetruvian-216 {\n  background-position: -5px -557px;\n}\n.vetruvian-218 {\n  background-position: -175px -557px;\n}\n.vetruvian-219 {\n  background-position: -345px -557px;\n}\n.vetruvian-220 {\n  background-position: -515px -557px;\n}\n.vetruvian-221 {\n  background-position: -685px -557px;\n}\n.vetruvian-222 {\n  background-position: -5px -727px;\n}\n.vetruvian-224 {\n  background-position: -175px -727px;\n}\n.vetruvian-226 {\n  background-position: -345px -727px;\n}\n.vetruvian-227 {\n  background-position: -515px -727px;\n}\n.vetruvian-228 {\n  background-position: -685px -727px;\n}\n.vetruvian-229 {\n  background-position: -959px -5px;\n}\n.vetruvian-231 {\n  background-position: -959px -175px;\n}\n.vetruvian-232 {\n  background-position: -939px -345px;\n}\n.vetruvian-233 {\n  background-position: -855px -515px;\n}\n.vetruvian-30006 {\n  background-position: -1025px -515px;\n}\n.vetruvian-30008 {\n  background-position: -1025px -621px;\n}\n.vetruvian-30011 {\n  background-position: -855px -727px;\n}\n.vetruvian-30022 {\n  background-position: -961px -727px;\n}\n@font-face {\n  font-family: LatoRegular;\n  src: url(https://dl.dropboxusercontent.com/u/24984522/Lato-Regular.woff);\n}\n.container {\n  max-width: 1570px;\n  margin: 0 15px;\n}\n@media (min-width: 1600px) {\n.container {\n      margin: 0 auto;\n}\n}\nbutton {\n  background: #104365;\n  border: none;\n  padding: 8px;\n  color: #e1e1e1;\n}\n.sprite.minion, .sprite.general {\n  top: -54px;\n  left: 34px;\n  width: 160px;\n  height: 160px;\n}\n.sprite.spell, .sprite.artifact {\n  top: 24px;\n  left: 64px;\n  width: 96px;\n  height: 96px;\n}\n.sprite.minion-sm {\n  top: -77px;\n  right: -40px;\n  z-index: 2;\n  transform: scaleX(-0.5) scaleY(0.5);\n  width: 160px;\n  height: 160px;\n}\n.sprite.spell-sm, .sprite.artifact-sm {\n  top: -26px;\n  right: -10px;\n  transform: scale(0.6);\n  width: 96px;\n  height: 96px;\n}\n.sprite.general-md {\n  top: -43px;\n  left: -20px;\n  width: 160px;\n  height: 160px;\n  transform: scale(0.8);\n}\n", ""]);

	// exports


/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _TopNav = __webpack_require__(209);

	var _TopNav2 = _interopRequireDefault(_TopNav);

	var _ImportDeckModal = __webpack_require__(225);

	var _ImportDeckModal2 = _interopRequireDefault(_ImportDeckModal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  components: {
	    TopNav: _TopNav2.default,
	    ImportDeckModal: _ImportDeckModal2.default
	  }
	};

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* styles */
	__webpack_require__(210)

	/* script */
	__vue_exports__ = __webpack_require__(212)

	/* template */
	var __vue_template__ = __webpack_require__(224)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-4", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-4", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] TopNav.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(211);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-4!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TopNav.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-4!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TopNav.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, "/* Vendor */\n/* Partials */\n/*\r\n    https://jdsteinbach.com/css//sass-maps-breakpoint-mixin/\r\n\r\n    Usage:\r\n    @include breakpoint(md) {\r\n        ...\r\n    }\r\n*/\n.top-nav {\n  background: #070e13;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  margin-bottom: 30px;\n}\n.top-nav:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n.top-nav > .container > .logo {\n    float: left;\n}\n", ""]);

	// exports


/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _FactionNavigation = __webpack_require__(213);

	var _FactionNavigation2 = _interopRequireDefault(_FactionNavigation);

	var _ImportDeckButton = __webpack_require__(218);

	var _ImportDeckButton2 = _interopRequireDefault(_ImportDeckButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  components: {
	    FactionNavigation: _FactionNavigation2.default,
	    ImportDeckButton: _ImportDeckButton2.default
	  }
	};

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* styles */
	__webpack_require__(214)

	/* script */
	__vue_exports__ = __webpack_require__(216)

	/* template */
	var __vue_template__ = __webpack_require__(217)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-12", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-12", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] FactionNavigation.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(215);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-12!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./FactionNavigation.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-12!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./FactionNavigation.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, "/* Vendor */\n/* Partials */\n/*\r\n    https://jdsteinbach.com/css//sass-maps-breakpoint-mixin/\r\n\r\n    Usage:\r\n    @include breakpoint(md) {\r\n        ...\r\n    }\r\n*/\n.dd-arrow {\n  padding-right: 30px;\n}\n.dd-arrow::after {\n    font-family: 'Material Icons';\n    content: '\\E313';\n    position: absolute;\n    right: 10px;\n    top: 50%;\n    transform: translateY(-50%);\n}\n.faction-navigation {\n  background: #104365;\n  display: inline-block;\n  position: relative;\n  float: right;\n  min-width: 140px;\n}\n.faction-navigation:active, .faction-navigation:focus {\n    outline: none;\n}\n.faction-navigation > .menu {\n    padding: 8px 15px;\n}\n.faction-navigation.opened > .links {\n    display: block;\n}\n.faction-navigation > .links {\n    display: none;\n    position: absolute;\n    right: 0;\n    z-index: 12;\n    background: #104365;\n    min-width: 140px;\n    width: 100%;\n}\n.faction-navigation > .links > .link {\n      padding: 5px 10px;\n      cursor: pointer;\n      display: block;\n}\n.faction-navigation > .links > .link:hover {\n        background: #092639;\n}\n", ""]);

	// exports


/***/ },
/* 216 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  data: function data() {
	    return {
	      opened: false
	    };
	  },


	  computed: {
	    faction: function faction() {
	      var faction = this.$route.params.faction;
	      return faction ? faction.charAt(0).toUpperCase() + faction.slice(1) : 'Choose your faction';
	    }
	  },

	  methods: {
	    open: function open() {
	      if (!this.opened) this.opened = true;
	    },
	    close: function close() {
	      this.opened = false;
	    },
	    navigate: function navigate(path) {
	      this.$router.push({ path: path });
	      this.$store.dispatch('clearDeck');
	      this.$store.commit('SET_PAGE', 1);
	      this.$refs.nav.blur();
	    }
	  }
	};

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    ref: "nav",
	    class: ['faction-navigation', 'dd-arrow', {
	      'opened': opened
	    }],
	    attrs: {
	      "tabindex": "0"
	    },
	    on: {
	      "click": function($event) {
	        open()
	      },
	      "blur": function($event) {
	        close()
	      }
	    }
	  }, [_h('div', {
	    staticClass: "menu"
	  }, [_h('div', {
	    staticClass: "current"
	  }, [_s(faction)])]), " ", _h('div', {
	    staticClass: "links"
	  }, [_h('span', {
	    staticClass: "link",
	    on: {
	      "click": function($event) {
	        $event.stopPropagation();
	        navigate('/deck/lyonar')
	      }
	    }
	  }, ["Lyonar"]), " ", _h('span', {
	    staticClass: "link",
	    on: {
	      "click": function($event) {
	        $event.stopPropagation();
	        navigate('/deck/songhai')
	      }
	    }
	  }, ["Songhai"]), " ", _h('span', {
	    staticClass: "link",
	    on: {
	      "click": function($event) {
	        $event.stopPropagation();
	        navigate('/deck/vetruvian')
	      }
	    }
	  }, ["Vetruvian"]), " ", _h('span', {
	    staticClass: "link",
	    on: {
	      "click": function($event) {
	        $event.stopPropagation();
	        navigate('/deck/abyssian')
	      }
	    }
	  }, ["Abyssian"]), " ", _h('span', {
	    staticClass: "link",
	    on: {
	      "click": function($event) {
	        $event.stopPropagation();
	        navigate('/deck/magmar')
	      }
	    }
	  }, ["Magmar"]), " ", _h('span', {
	    staticClass: "link",
	    on: {
	      "click": function($event) {
	        $event.stopPropagation();
	        navigate('/deck/vanar')
	      }
	    }
	  }, ["Vanar"])])])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-12", module.exports)
	  }
	}

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* styles */
	__webpack_require__(219)

	/* script */
	__vue_exports__ = __webpack_require__(221)

	/* template */
	var __vue_template__ = __webpack_require__(223)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-13", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-13", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] ImportDeckButton.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(220);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-13!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ImportDeckButton.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-13!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ImportDeckButton.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, "\n@charset \"UTF-8\";\n/* Vendor */\n/* Partials */\n/*\r\n    https://jdsteinbach.com/css//sass-maps-breakpoint-mixin/\r\n\r\n    Usage:\r\n    @include breakpoint(md) {\r\n        ...\r\n    }\r\n*/\n.import-deck-button {\n  background: #104365;\n  float: right;\n  margin-right: 30px;\n  padding: 8px 15px;\n}\n.import-deck-button::before {\n    font-family: 'Material Icons';\n    content: \"\\E2C6\";\n}\n", ""]);

	// exports


/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _bus = __webpack_require__(222);

	var _bus2 = _interopRequireDefault(_bus);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  methods: {
	    openModal: function openModal() {
	      _bus2.default.$emit('import-deck-modal', true);
	    }
	  }
	};

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _vue = __webpack_require__(1);

	var _vue2 = _interopRequireDefault(_vue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = new _vue2.default();

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "import-deck-button",
	    on: {
	      "click": function($event) {
	        openModal()
	      }
	    }
	  }, ["\n  Import Deck\n"])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-13", module.exports)
	  }
	}

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "top-nav"
	  }, [_h('div', {
	    staticClass: "container"
	  }, [_h('h2', {
	    staticClass: "logo"
	  }, [_h('router-link', {
	    attrs: {
	      "to": "/"
	    }
	  }, ["Deck Builder"])]), " ", _h('faction-navigation'), " ", _h('import-deck-button')])])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-4", module.exports)
	  }
	}

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* styles */
	__webpack_require__(226)

	/* script */
	__vue_exports__ = __webpack_require__(228)

	/* template */
	var __vue_template__ = __webpack_require__(234)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-5", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-5", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] ImportDeckModal.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(227);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-5!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ImportDeckModal.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-5!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ImportDeckModal.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, "/* Vendor */\n/* Partials */\n/*\r\n    https://jdsteinbach.com/css//sass-maps-breakpoint-mixin/\r\n\r\n    Usage:\r\n    @include breakpoint(md) {\r\n        ...\r\n    }\r\n*/\n.import-deck-modal {\n  background: #104365;\n  padding: 30px;\n}\n.import-deck-modal > .input {\n    background: #0b1c27;\n    border: none;\n    color: #e1e1e1;\n    width: 100%;\n    padding: 8px;\n    margin-bottom: 15px;\n}\nbutton.success {\n  background: #01d6f3;\n}\nbutton.cancel {\n  background: #373a3c;\n}\n", ""]);

	// exports


/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _regenerator = __webpack_require__(36);

	var _regenerator2 = _interopRequireDefault(_regenerator);

	var _asyncToGenerator2 = __webpack_require__(39);

	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

	var _bus = __webpack_require__(222);

	var _bus2 = _interopRequireDefault(_bus);

	var _GeneralModal = __webpack_require__(229);

	var _GeneralModal2 = _interopRequireDefault(_GeneralModal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  data: function data() {
	    return {
	      modal: false,
	      error: false
	    };
	  },


	  methods: {
	    showModal: function showModal(value) {
	      var _this = this;

	      this.modal = value;
	      if (this.modal) {
	        this.$nextTick(function () {
	          _this.$refs.url.focus();
	        });
	      } else {
	        this.$refs.url.value = '';
	      }
	    },
	    closeModal: function closeModal() {
	      this.modal = false;
	      this.$refs.url.value = '';
	    },
	    handleImport: function handleImport() {
	      var _this2 = this;

	      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
	        var url, hash, faction;
	        return _regenerator2.default.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                _context.prev = 0;

	                _this2.error = false;
	                url = _this2.$refs.url.value;

	                if (url) {
	                  _context.next = 5;
	                  break;
	                }

	                return _context.abrupt('return');

	              case 5:
	                hash = url.substring(url.indexOf('#'));
	                _context.next = 8;
	                return _this2.$store.dispatch('clearDeck');

	              case 8:
	                _context.next = 10;
	                return _this2.$store.dispatch('loadDeck', hash);

	              case 10:
	                faction = _context.sent;


	                _this2.$router.push({ path: '/deck/' + faction + '/' + hash });
	                _this2.closeModal();
	                _context.next = 18;
	                break;

	              case 15:
	                _context.prev = 15;
	                _context.t0 = _context['catch'](0);

	                _this2.error = true;

	              case 18:
	              case 'end':
	                return _context.stop();
	            }
	          }
	        }, _callee, _this2, [[0, 15]]);
	      }))();
	    }
	  },

	  created: function created() {
	    _bus2.default.$on('import-deck-modal', this.showModal);
	  },


	  components: {
	    GeneralModal: _GeneralModal2.default
	  }
	};

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* styles */
	__webpack_require__(230)

	/* script */
	__vue_exports__ = __webpack_require__(232)

	/* template */
	var __vue_template__ = __webpack_require__(233)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-14", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-14", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] GeneralModal.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(231);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-14!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./GeneralModal.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-14!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./GeneralModal.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, "/* Vendor */\n/* Partials */\n/*\r\n    https://jdsteinbach.com/css//sass-maps-breakpoint-mixin/\r\n\r\n    Usage:\r\n    @include breakpoint(md) {\r\n        ...\r\n    }\r\n*/\n.modal-mask {\n  position: fixed;\n  z-index: 999;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  transition: all 0.2s ease-out;\n  display: table;\n}\n.modal-wrapper {\n  display: table-cell;\n  vertical-align: middle;\n}\n.modal-container {\n  margin: 0 auto;\n}\n.modal-enter, .modal-leave {\n  opacity: 0;\n}\n.modal-enter .modal-container,\n.modal-leave .modal-container {\n  transform: scale(1.1);\n}\n", ""]);

	// exports


/***/ },
/* 232 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: ['show', 'width', 'close']
	};

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('transition', {
	    attrs: {
	      "name": "modal"
	    }
	  }, [_h('div', {
	    directives: [{
	      name: "show",
	      value: (show),
	      expression: "show"
	    }],
	    staticClass: "modal-mask",
	    on: {
	      "click": function($event) {
	        close(false)
	      }
	    }
	  }, [_h('div', {
	    staticClass: "modal-wrapper"
	  }, [_h('div', {
	    staticClass: "modal-container",
	    style: ({
	      width: this.width
	    }),
	    on: {
	      "click": function($event) {
	        $event.stopPropagation();
	      }
	    }
	  }, [_t("default")])])])])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-14", module.exports)
	  }
	}

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('general-modal', {
	    attrs: {
	      "show": modal,
	      "width": "500px",
	      "close": showModal
	    }
	  }, [_h('div', {
	    staticClass: "import-deck-modal"
	  }, [_m(0), " ", _m(1), " ", (error) ? _h('p', ["There was an issue importing the deck. Please make sure the URL is correct and that the exported deck has a general."]) : _e(), " ", _h('input', {
	    ref: "url",
	    staticClass: "input",
	    attrs: {
	      "type": "text",
	      "placeholder": "Insert URL"
	    }
	  }), " ", _h('button', {
	    staticClass: "success",
	    on: {
	      "click": function($event) {
	        handleImport()
	      }
	    }
	  }, ["Import"]), " ", _h('button', {
	    staticClass: "cancel",
	    on: {
	      "click": function($event) {
	        closeModal()
	      }
	    }
	  }, ["Cancel"])])])
	}},staticRenderFns: [function (){with(this) {
	  return _h('h1', ["Import Deck"])
	}},function (){with(this) {
	  return _h('p', ["Paste the URL of the deck you want to import"])
	}}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-5", module.exports)
	  }
	}

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "app-page"
	  }, [_h('top-nav'), " ", _h('div', {
	    staticClass: "container"
	  }, [_h('router-view')]), " ", _h('import-deck-modal')])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-1", module.exports)
	  }
	}

/***/ }
/******/ ]);