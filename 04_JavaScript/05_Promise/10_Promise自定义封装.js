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
	if (this.PromiseState === "fulfilled") {
		try {
			let result = onResolved(this.PromiseResult);
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
		} catch (error) {
			reject(error);
		}
	}
	if (this.PromiseState === "rejected") {
		onRejected(this.PromiseResult);
	}
	if (this.PromiseState === "pending") {
		this.callbacks.push({
			onResolved,
			onRejected,
		});
	}
};
