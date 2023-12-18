import Compile from "./Compile";

export default class Vue {
  constructor(options) {
    this.$options = options || {};
    this._data = options.data || undefined;
    // 响应式
    // observer(this._data);
    // this._initData()
    // this._initWatch()
    // 模板编译
    new Compile(options.el, this);
    // options.created();
  }
}
