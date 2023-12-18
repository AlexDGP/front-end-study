import { observe } from "./Observer.js";
import Dep from "./Dep.js";
export default function defineReactive(obj, key, val) {
  const dep = new Dep();
  if (arguments.length === 2) {
    val = obj[key];
  }
  let childOb = observe(val);
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: true,
    get() {
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
        }
      }
      return val;
    },
    set(newValue) {
      if (val === newValue) return;
      val = newValue;
      observe(newValue);
      dep.notify();
    },
  });
}
