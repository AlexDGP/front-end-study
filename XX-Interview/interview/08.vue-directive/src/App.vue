<template>
  <div id="app">
    <!--    <img alt="Vue logo" src="./assets/logo.png" />-->
    <!--    <HelloWorld msg="Welcome to Your Vue.js App" />-->
    <div v-big="n"></div>
    <input v-big2="n" />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  // components: {
  //   HelloWorld,
  // },
  data() {
    return {
      n: 1,
    };
  },
  directives: {
    // 函数式,相当于bind和update
    big(ele, binding) {
      ele.innerHTML = binding.value * 10;
    },
    // 对象式,三个钩子分开写
    big2: {
      bind(ele, binding) {
        ele.value = binding.value * 10;
      },
      inserted(ele, binding) {
        ele.focus();
      },
      update(ele, binding) {
        ele.value = binding.value * 10;
      },
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
