(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Vue = factory());
})(this, (function () { 'use strict';

  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }

  // 重写数组
  var odArrayProtoMethods = Array.prototype;
  var ArrayMethods = Object.create(odArrayProtoMethods);
  var methods = ["push", "pop", "shift", "unshift", "splice"];
  methods.find(function (item) {
    ArrayMethods[item] = function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      var res = odArrayProtoMethods[item].apply(this, args);
      var inserted;
      switch (item) {
        case "push":
        case "unshift":
          inserted = args;
          break;
        case "splice":
          inserted = args.splice(2);
      }
      var ob = this.__ob__;
      if (inserted) {
        ob.observeArray(inserted);
      }
      return res;
    };
  });

  function observer(data) {
    if (_typeof(data) !== "object" || data === null) {
      return data;
    }
    return new Observer(data);
  }
  var Observer = /*#__PURE__*/function () {
    function Observer(value) {
      _classCallCheck(this, Observer);
      Object.defineProperty(value, "__ob__", {
        enumerable: false,
        value: this
      });
      // 判读数组还是对象
      if (Array.isArray(value)) {
        value.__proto__ = ArrayMethods;
        this.observeArray(value);
      } else {
        this.walk(value); //遍历
      }
    }
    _createClass(Observer, [{
      key: "walk",
      value: function walk(data) {
        var keys = Object.keys(data);
        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
          var value = data[key];
          defineReactive(data, key, value);
        }
      }
    }, {
      key: "observeArray",
      value: function observeArray(value) {
        //遍历数组对象
        for (var i = 0; i < value.length; i++) {
          observer(value[i]);
        }
      }
    }]);
    return Observer;
  }();
  function defineReactive(data, key, value) {
    observer(value); // 深度代理,递归代理
    Object.defineProperty(data, key, {
      get: function get() {
        return value;
      },
      set: function set(newValue) {
        if (newValue === value) return;
        observer(newValue); // 深度代理,递归代理
        value = newValue;
      }
    });
  }

  // Object.defineProperty 只能对一个属性进行劫持
  // 要遍历所有属性
  // 递归劫持

  function initState(vm) {
    var opts = vm.$options;
    if (opts.props) ;
    if (opts.data) {
      initData(vm);
    }
    if (opts.watch) ;
    if (opts.computed) ;
    if (opts.methods) ;
  }
  // Vue2 data初始化
  function initData(vm) {
    var data = vm.$options.data;
    data = vm._data = typeof vm.$options.data === "function" ? data.call(vm) : data;
    // 将所有data上的属性代理到vm上
    for (var dataKey in data) {
      proxy(vm, "_data", dataKey);
    }
    observer(data);
  }
  function proxy(vm, source, key) {
    Object.defineProperty(vm, key, {
      get: function get() {
        return vm[source][key];
      },
      set: function set(newValue) {
        vm[source][key] = newValue;
      }
    });
  }

  function compileToFunction(el) {
    console.log(el);
    parseHTML(template);
  }
  function parseHTML(template) {
  }

  function initMixin(Vue) {
    Vue.prototype._init = function (options) {
      var vm = this;
      vm.$options = options;
      // 初始化状态
      initState(vm);

      // 渲染模板 el
      if (vm.$options.el) {
        vm.$mounted(vm.$options.el);
      }
    };
    Vue.prototype.$mounted = function (el) {
      console.log(el);
      var vm = this;
      el = document.querySelector(el);
      var options = vm.$options;
      if (!options.render) {
        var template = options.template;
        if (!template && el) {
          el = el.outerHTML;
          compileToFunction(el);
        }
      }
    };
  }

  function Vue(options) {
    this._init(options);
  }
  initMixin(Vue);

  return Vue;

}));
