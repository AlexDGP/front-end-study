export function def(obj, key, value, enumerable) {
  Object.defineProperty(obj, key, {
    value: value,
    enumerable,
    configurable: false,
    writable: true,
  });
}
