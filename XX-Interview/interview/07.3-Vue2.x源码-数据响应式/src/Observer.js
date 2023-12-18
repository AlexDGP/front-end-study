import { def } from "./utils.js";
import defineReactive from "./defineReactive.js";
import { arrayMethods } from "./array.js";
import Dep from "./Dep.js";
export class Observer {
  constructor(value) {
    this.dep = new Dep();
    def(value, "__ob__", this, false);
    if (Array.isArray(value)) {
      Object.setPrototypeOf(value, arrayMethods);
    } else {
      this.walk(value);
    }
  }
  walk(value) {
    for (const valueKey in value) {
      defineReactive(value, valueKey);
    }
  }

  observeArray(arr) {
    for (let i = 0, l = arr.length; i < l; i++) {
      observe(arr[i]);
    }
  }
}

export function observe(value) {
  if (typeof value !== "object") return;
  let ob;
  if (typeof value.__ob__ !== "undefined") {
    ob = value.__ob__;
  } else {
    ob = new Observer(value);
  }
  return ob;
}
