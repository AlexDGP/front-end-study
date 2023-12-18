import { observer } from "./observer/index.js";

export function initState(vm) {
  let opts = vm.$options;
  if (opts.props) {
    initProps();
  }
  if (opts.data) {
    initData(vm);
  }
  if (opts.watch) {
    initWatch();
  }
  if (opts.computed) {
    initComputed();
  }
  if (opts.methods) {
    initMethods();
  }
}

function initProps() {}
// Vue2 data初始化
function initData(vm) {
  let data = vm.$options.data;
  data = vm._data =
    typeof vm.$options.data === "function" ? data.call(vm) : data;
  // 将所有data上的属性代理到vm上
  for (const dataKey in data) {
    proxy(vm, "_data", dataKey);
  }
  observer(data);
}
function proxy(vm, source, key) {
  Object.defineProperty(vm, key, {
    get() {
      return vm[source][key];
    },
    set(newValue) {
      vm[source][key] = newValue;
    },
  });
}
function initWatch() {}
function initComputed() {}
function initMethods() {}
