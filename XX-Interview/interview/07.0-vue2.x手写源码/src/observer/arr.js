// 重写数组
let odArrayProtoMethods = Array.prototype;

export let ArrayMethods = Object.create(odArrayProtoMethods);
3;

let methods = ["push", "pop", "shift", "unshift", "splice"];
methods.find((item) => {
  ArrayMethods[item] = function (...args) {
    let res = odArrayProtoMethods[item].apply(this, args);
    let inserted;
    switch (item) {
      case "push":
      case "unshift":
        inserted = args;
        break;
      case "splice":
        inserted = args.splice(2);
    }
    let ob = this.__ob__;
    if (inserted) {
      ob.observeArray(inserted);
    }
    return res;
  };
});
