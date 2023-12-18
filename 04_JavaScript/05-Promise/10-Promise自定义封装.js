function Promise(executor) {
  this.PromiseState = "pending";
  this.PromiseResult = "";
  this.callbacks = [];

  const _this = this;
  function resolve(params) {
    if (_this.PromiseState !== "pending") return;
    _this.PromiseState = "fulfilled";
    _this.PromiseResult = params;
    _this.callbacks.forEach((item) => {
      item.onResolved(params);
    });
  }

  function reject(params) {
    if (_this.PromiseState !== "pending") return;
    _this.PromiseState = "rejected";
    _this.PromiseResult = params;
    _this.callbacks.forEach((item) => {
      item.onRejected(params);
    });
  }

  try {
    executor(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

Promise.prototype.then = function (onResolved, onRejected) {
  const _this = this;
  if (typeof onRejected !== "function") {
    onRejected = (reason) => {
      throw reason;
    };
  }
  if (typeof onResolved !== "function") {
    onResolved = (value) => {
      return value;
    };
  }
  return new Promise((resolve, reject) => {
    function callback(type) {
      try {
        let result = type(_this.PromiseResult);
        if (result instanceof Promise) {
          result.then(
            (value) => {
              resolve(value);
            },
            (reason) => {
              reject(reason);
            }
          );
        } else {
          resolve(result);
        }
      } catch (e) {
        reject(e);
      }
    }
    if (this.PromiseState === "fulfilled") {
      callback(onResolved);
    }
    if (this.PromiseState === "rejected") {
      callback(onRejected);
    }
    if (this.PromiseState === "pending") {
      this.callbacks.push({
        onResolved: function () {
          callback(onResolved);
        },
        onRejected: function () {
          callback(onRejected);
        },
      });
    }
  });
};

Promise.prototype.catch = function (onRejected) {
  return this.then(undefined, onRejected);
};

Promise.resolve = function (value) {
  return new Promise((resolve, reject) => {
    if (value instanceof Promise) {
      value.then(
        (v) => {
          resolve(v);
        },
        (r) => {
          reject(r);
        }
      );
    } else {
      resolve(value);
    }
  });
};

Promise.reject = function (reason) {
  return new Promise((resolve, reject) => {
    reject(reason);
  });
};
