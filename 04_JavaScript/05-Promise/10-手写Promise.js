function Promise(executor) {
  const self = this;
  this.promiseState = "pending";
  this.promiseResult = null;
  this.callbacks = [];
  try {
    executor(resolve, reject);
  } catch (e) {
    reject(e);
  }
  function resolve(data) {
    if (self.promiseState !== "pending") return;
    self.promiseState = "fulfilled";
    self.promiseResult = data;
    setTimeout(() => {
      if (self.callbacks.length !== 0) {
        self.callbacks.forEach((item) => {
          item.onResolved(data);
        });
      }
    });
  }
  function reject(data) {
    if (self.promiseState !== "pending") return;
    self.promiseState = "rejected";
    self.promiseResult = data;
    setTimeout(() => {
      if (self.callbacks.length !== 0) {
        self.callbacks.forEach((item) => {
          item.onRejected(data);
        });
      }
    });
  }
}

Promise.prototype.then = function (onResolved, onRejected) {
  const self = this;
  if (typeof onResolved !== "function") {
    onResolved = (value) => value;
  }
  if (typeof onRejected !== "function") {
    onRejected = (reason) => {
      throw reason;
    };
  }
  return new Promise((resolve, reject) => {
    function callback(type) {
      try {
        let result = type(self.promiseResult);
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

    if (this.promiseState === "fulfilled") {
      setTimeout(() => {
        callback(onResolved);
      });
    }
    if (this.promiseState === "rejected") {
      setTimeout(() => {
        callback(onRejected);
      });
    }
    if (this.promiseState === "pending") {
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
  this.then(undefined, onRejected);
};

Promise.resolve = function (value) {
  return new Promise((resolve, reject) => {
    if (value instanceof Promise) {
      value.then(
        (value) => {
          resolve(value);
        },
        (reason) => {
          reject(reason);
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

Promise.all = function (promises) {
  return new Promise((resolve, reject) => {
    let count = 0;
    let arr = [];
    promises.forEach((item, index) => {
      item.then(
        (value) => {
          count++;
          arr[index] = value;
          if (count === promises.length) {
            resolve(arr);
          }
        },
        (reason) => {
          reject(reason);
        }
      );
    });
  });
};

Promise.race = function (promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((item, index) => {
      item.then(
        (value) => {
          resolve(value);
        },
        (reason) => {
          reject(reason);
        }
      );
    });
  });
};
