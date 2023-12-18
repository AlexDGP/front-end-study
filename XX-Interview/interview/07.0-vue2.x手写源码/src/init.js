import { initState } from "./initState";
import { compileToFunction } from "./compile/index";
export function initMixin(Vue) {
  Vue.prototype._init = function (options) {
    let vm = this;
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
    let vm = this;
    el = document.querySelector(el);
    let options = vm.$options;
    if (!options.render) {
      let template = options.template;
      if (!template && el) {
        el = el.outerHTML;
        compileToFunction(el);
      }
    }
  };
}
