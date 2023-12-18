import babel from "rollup-plugin-babel";
import serve from "rollup-plugin-serve";

export default {
  input: "./src/index.js",
  output: {
    file: "dist/vue.js",
    format: "umd", // 在window上Vue
    name: "Vue",
    sourceMap: true,
  },
  plugins: [
    babel({
      exclude: "node_modules/**",
    }),
    serve({
      port: 3000,
      contentBase: "", // 当前目录
      openPage: "/01-bubbling.html",
    }),
  ],
};
