import { def } from "./utils.js";
import { observe } from "./Observer.js";

const arrayPrototype = Array.prototype;
export const arrayMethods = Object.create(arrayPrototype);

const methods = [
  "push",
  "pop",
  "shift",
  "unshift",
  "splice",
  "sort",
  "reverse",
];

methods.forEach((methodName) => {
  const original = arrayPrototype[methodName];

  def(
    arrayMethods,
    methodName,
    function () {
      const result = original.apply(this, arguments); // 数组方法原功能不变
      const args = [...arguments];
      const ob = this.__ob__;
      let inserted = [];
      switch (methodName) {
        case "push":
        case "unshift":
          inserted = args;
          break;
        case "splice":
          inserted = args.slice(2);
          break;
      }
      if (inserted) {
        ob.observeArray(inserted);
      }
      ob.dep.notify();
      return result;
    },
    false,
  );
});
