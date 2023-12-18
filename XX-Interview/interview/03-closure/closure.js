function outer() {
  let a = 1;
  function inner() {
    console.log(a);
  }
  return inner;
}
let a = 2;
let fn = outer();
fn();
