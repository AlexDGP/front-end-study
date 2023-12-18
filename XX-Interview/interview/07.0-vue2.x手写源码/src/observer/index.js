import { ArrayMethods } from "./arr.js";
export function observer(data) {
  if (typeof data !== "object" || data === null) {
    return data;
  }
  return new Observer(data);
}

class Observer {
  constructor(value) {
    Object.defineProperty(value, "__ob__", {
      enumerable: false,
      value: this,
    });
    // 判读数组还是对象
    if (Array.isArray(value)) {
      value.__proto__ = ArrayMethods;
      this.observeArray(value);
    } else {
      this.walk(value); //遍历
    }
  }
  walk(data) {
    let keys = Object.keys(data);
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      let value = data[key];
      defineReactive(data, key, value);
    }
  }
  observeArray(value) {
    //遍历数组对象
    for (let i = 0; i < value.length; i++) {
      observer(value[i]);
    }
  }
}
function defineReactive(data, key, value) {
  observer(value); // 深度代理,递归代理
  Object.defineProperty(data, key, {
    get() {
      return value;
    },
    set(newValue) {
      if (newValue === value) return;
      observer(newValue); // 深度代理,递归代理
      value = newValue;
    },
  });
}

// Object.defineProperty 只能对一个属性进行劫持
// 要遍历所有属性
// 递归劫持
