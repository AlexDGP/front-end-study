# ElementUI

## 00_教程简介

教程视频:[面向后台管理系统的Element-UI开发教程](https://www.bilibili.com/video/BV1oA411s7Rc?p=1&vd_source=6e9c2de5b89c2ba4e13469e295319397)

## 01_安装

### npm 安装

推荐使用 npm 的方式安装，它能更好地和 [webpack](https://webpack.js.org/) 打包工具配合使用。

```shell
npm i element-ui -S
```

###  CDN

目前可以通过 [unpkg.com/element-ui](https://unpkg.com/element-ui/) 获取到最新版本的资源，在页面上引入 js 和 css 文件即可开始使用。

```html
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
<!-- 引入组件库 -->
<script src="https://unpkg.com/element-ui/lib/index.js"></script>
```

## 02_引入

### 完整引入

在 main.js 中写入以下内容：

```javascript
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

### 按需引入

借助 [babel-plugin-component](https://github.com/QingWei-Li/babel-plugin-component)，我们可以只引入需要的组件，以达到减小项目体积的目的。

首先，安装 babel-plugin-component：

```bash
npm install babel-plugin-component -D
```

## 03_插件

webstorm下载安装element可以自动生成组件代码

## 04_Container布局容器

用于布局的容器组件，方便快速搭建页面的基本结构：

`<el-container>`：外层容器。当子元素中包含 `<el-header>` 或 `<el-footer>` 时，全部子元素会垂直上下排列，否则会水平左右排列。

`<el-header>`：顶栏容器。

`<el-aside>`：侧边栏容器。

`<el-main>`：主要区域容器。

`<el-footer>`：底栏容器。

以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。此外，`<el-container>` 的子元素只能是后四者，后四者的父元素也只能是 `<el-container>`。

```vue
<template>
  <div>
    <el-container>
      <el-header>header</el-header>
      <el-container>
        <el-aside>aside</el-aside>
        <el-main>
          <el-button type="primary">buttonCont</el-button>
        </el-main>
      </el-container>
      <el-footer>footer</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "AboutView",
};
</script>

<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>
```

## 05_Layout布局

```vue
<template>
  <div>
    <!--24分栏布局-->
    <el-row>
      <el-col :span="24"
        ><div class="grid-content bg-purple-dark"></div
      ></el-col>
    </el-row>
    <!--el-col中span属性指定分栏大小-->
    <el-row>
      <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="12"
        ><div class="grid-content bg-purple-light"></div
      ></el-col>
    </el-row>
    <!--el-row中gutter属性指定分栏间隔-->
    <el-row :gutter="20">
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"
        ><div class="grid-content bg-purple-light"></div
      ></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <!--el-col中offset属性指定分栏偏移量-->
    <el-row>
      <el-col :span="6" :offset="1"
        ><div class="grid-content bg-purple"></div
      ></el-col>
      <el-col :span="6"
        ><div class="grid-content bg-purple-light"></div
      ></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="5"
        ><div class="grid-content bg-purple-light"></div
      ></el-col>
    </el-row>
    <!--el-row中type属性(flex)和justify属性(start,center,end,space-between,space-around)指定元素的排版方式-->
    <el-row type="flex" justify="space-around">
      <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="2"
        ><div class="grid-content bg-purple-light"></div
      ></el-col>
      <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="2"
        ><div class="grid-content bg-purple-light"></div
      ></el-col>
      <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="2"
        ><div class="grid-content bg-purple-light"></div
      ></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "MyHome",
  mounted() {
    console.info("info", this);
  },
};
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>


```

