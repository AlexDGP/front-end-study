class Promise {
  constructor(executor) {
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

  then(onResolved, onRejected) {
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
  }

  catch(onRejected) {
    this.then(undefined, onRejected);
  }

  static resolve(value) {
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
  }

  static reject(reason) {
    return new Promise((resolve, reject) => {
      reject(reason);
    });
  }

  static all(promises) {
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
  }

  static race(promises) {
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
  }
}
