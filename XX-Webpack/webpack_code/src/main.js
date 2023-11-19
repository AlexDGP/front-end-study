import count from "./js/count";
import sum from "./js/sum";
import "./css/index.css";
import "./scss/index.scss";
import "./css/iconfont.css";
// var a = count(2, 1);
console.log(count(1000, 1));
console.log(sum(1, 2, 3, 4));

if (module.hot) {
  module.hot.accept("./js/count");
}
