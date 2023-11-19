# Vite

## 00_教程简介

视频教程:Vite世界指南（带你从0到1深入学习 vite）

视频地址:https://www.bilibili.com/video/BV1GN4y1M7P5/?spm_id_from=333.337.search-card.all.click&vd_source=6e9c2de5b89c2ba4e13469e295319397

视频作者:[付金权的前端课](https://space.bilibili.com/321496687)

笔记参考:https://github.com/passerecho/vite-

## 01_Vite教程前言

Webpack ---> 市场份额大,生态相对来说非常成熟,非常多的优质博主

Vite: 思维比较前卫而且先进的构建工具 他确实解决了一些webpack解决不了的问题, 同时降低了一些心智负担

已经有一些大厂在使用Vite去构建项目

Vite基于自己得天独厚的优势, 他未来一定会占有一席之地 前段时间阿里的面试已经在问Vite了

Vite是Vue团队的官方出品, 背靠这么大的生态, Vue-cli会在下面两个版本中将vite作为预设构建工具 

未来你使用vue-cli去构建vue项目的时候你要写的vue.config.js不再是webpack的配置而是vite的配置(目前只基于浏览器项目)

Vite也支持直接构建react项目, 也支持构建angular项目, svelte项目也支持构建

vite优势的冰山一角

应付面试 ---> 得到更高的薪资 还是说为了以后搭建vite项目做准备我们都应该去学习vite这个构建工具

分为如下一些模块:

1. 什么是构建工具? 
2. webpack的一个缺点在哪
3. es module的规范
4. vite他到底是什么东西 
5. vite的基本安装和使用
6. vite的编译结果
7. vite编译结果的分析
8. vite的配置文件(可能会有节课程)
9. vite中处理css, 静态资源怎么去做
10. vite的插件以及常用插件的使用
11. vite与ts的结合
12. vite生产打包
13. vite构建react项目, svelte项目, vue3项目
14. vite的一个构建原理 

## 02_构建工具

> 浏览器他只认识html, css, js

企业级项目里都可能会具备哪些功能

1. typescript: 如果遇到ts文件我们需要使用tsc将typescript代码转换为js代码   
2. React/Vue: 安装react-compiler / vue-complier, 将我们写的jsx文件或者.vue文件转换为render函数
3. less/sass/postcss/component-style: 我们又需要安装less-loader, sass-loader等一系列编译工具
4. 语法降级: babel ---> 将es的新语法转换旧版浏览器可以接受的语法
5. 体积优化: uglifyjs ---> 将我们的代码进行压缩变成体积更小性能更高的文件
6. .....

稍微改一点点东西, 非常麻烦

将App.tsx ---> tsc ---> App.jsx ---> React-complier ---> js文件

有一个东西能够帮你把tsc, react-compiler, less, babel, uglifyjs全部集成到一起

我们只需要关心我们写的代码就好了 

我们写的代码一变化 ---> 有人帮我们自动去tsc, react-compiler, less, babel, uglifyjs全部挨个走一遍 ---> js

这个东西就叫做**构建工具**

> 打包: 将我们写的浏览器不认识的代码 交给构建工具进行编译处理的过程就叫做打包, 打包完成以后会给我们一个浏览器可以认识的文件

一个构建工具他到底承担了哪些脏活累活:

1. 模块化开发支持: 支持直接从node_modules里引入代码 + 多种模块化支持
2. 处理代码兼容性: 比如babel语法降级, less,ts 语法转换(**不是构建工具做的, 构建工具将这些语法对应的处理工具集成进来自动化处理**)
3. 提高项目性能: 压缩文件, **代码分割**
4. 优化开发体验: 
   - 构建工具会帮你自动监听文件的变化, 当文件变化以后自动帮你调用对应的集成工具进行重新打包, 然后再浏览器重新运行（整个过程叫做热更新, hot replacement)
   - 开发服务器: 跨域的问题, 用react-cli create-react-element vue-cli  解决跨域的问题, 

每次改一点 ---> 这个顺序还不能错 



构建工具他让我们可以不用每次都关心我们的代码在浏览器如何运行, 我们只需要首次给构建工具提供一个配置文件(这个配置文件也不是必须的, 如果你不给他 他会有默认的帮你去处理), 有了这个集成的配置文件以后, 我们就可以在下次需要更新的时候调用一次对应的命令就好了, 如果我们再结合热更新, 我们就更加不需要管任何东西, 这就是构建工具去做的东西, **他让我们不用关心生产的代码也不用关心代码如何在浏览器运行, 只需要关心我们的开发怎么写的爽怎么写就好了**

```
tsc xxx 
babel xx 
less xx
...

webpack
```

你如果听的有点懵 也没关系 **集成**的工作

市面上主流的构建工具有哪些:

- webpack
- vite
- parcel
- esbuild
- rollup
- grunt
- gulp

## 03_vite相较于webpack的优势

官方文档: https://cn.vitejs.dev/guide/why.html#the-problems

然而，当我们开始构建越来越大型的应用时，需要处理的 JavaScript 代码量也呈指数级增长。包含数千个模块的大型项目相当普遍。我们开始遇到性能瓶颈 —— 使用 JavaScript 开发的工具通常需要很长时间（甚至是几分钟！）才能启动开发服务器，即使使用 HMR(热更新)，文件修改后的效果也需要几秒钟才能在浏览器中反映出来。如此循环往复，迟钝的反馈会极大地影响开发者的开发效率和幸福感。


起因: 我们的项目越大 ----> 构建工具（webpack）所要处理的js代码就越多 【跟webpack的一个构建过程（工作流程）有关系】

造成的结果: 构建工具需要很长时间才能启动开发服务器 (启动开发服务器 ---> 把项目跑起来)

```bash
yarn start
yarn dev

npm run dev 
npm run start
```

这种痛上过班才知道 

webpack能不能改? 如果一旦要改 那么将会动到webpack的大动脉

webpack支持多种模块化: 你的工程可能不只是跑在浏览器端

```js
// index.js
// 这一段代码最终会到浏览器里去运行
const lodash = require("lodash"); // commonjs 规范
import Vue from "vue"; // es6 module

// webpack是允许我们这么写的
```

webpack的编译原理, AST 抽象语法分析的工具 分析出你写的这个js文件有哪些导入和导出操作
构建工具是运行在服务端的 

```js
// webpack的一个转换结果
const lodash = webpack_require("lodash");
const Vue = webpack_require("vue");
```

```js
(function(modules) {
    function webpack_require() {}
    // 入口是index.js
    // 通过webpack的配置文件得来的: webpack.config.js ./src/index.js
    modules[entry](webpack_require);

}, ({
    "./src/index.js": (webpack_require) => {
        const lodash = webpack_require("lodash");
        const Vue = webpack_require("vue");
    }
}))
```

因为webpack支持多种模块化, 他一开始必须要统一模块化代码, 所以意味着他需要将所有的依赖全部读一遍


vite会不会直接把webpack干翻, vite是基于es modules的, 侧重点不一样, webpack更多的关注兼容性, 而vite关注浏览器端的开发体验

- vite的上手难度更低, webpack的配置是非常多的, loader, plugin

## 04_你必须要理解的vite脚手架和vite

vite官网搭建vite项目文档教程: https://vitejs.dev/guide/#scaffolding-your-first-vite-project

比如我们敲了```yarn create vite```

1. 帮我们全局安装一个东西: create-vite (vite的脚手架)
2. 直接运行这个create-vite bin目录的下的一个执行配置

我们之前接触过vue-cli 

很多同学可能就会存在误区: **认为官网中使用对应yarn create构建项目的过程也是vite在做的事情**

create-vite和vite的关系是什么呢？ ---- create-vite内置了vite

使用vue-cli 会内置webpack 

先学习的就是vite

我们暂时不会使用```yarn create vite my-vue-app --template vue```

vue-cli 可以和webpack分的很清楚 

vite --> vue团队的 create-vite ---> vue团队

vue团队希望弱化vite的一个存在感, 但是我们去学习的时候不能弱化的, 

预设: 买房子 毛坯房(我们的工程) 买沙发, 做装修, 修各个厕所, 埋线, 精装修的房: 搭建好了

我们自己搭建一个项目: 下载vite, vue, post-css, less, babel

vue-cli/create-react-app(开发商)给我们提供已经精装修的模板: 帮你把react/vue都下好了, 同时他还帮你把配置调整到了最佳实践

create-vite(开发商)给你一套精装修模板(给你一套预设): 下载vite, vue, post-css, less, babel好了, 并且给你做好了最佳实践的配置

## 05_vite启动项目初体验

开箱即用(out of box): 你不需要做任何额外的配置就可以使用vite来帮你处理构建工作

在默认情况下, 我们的esmodule去导入资源的时候, 要么是绝对路径, 要么是相对路径

既然我们现在的最佳实践就是node_modules, 那为什么es官方在我们导入非绝对路径和非相对路径的资源的时候不默认帮我们 搜寻node_modules呢？

假设浏览器做了这个事情

vite: 代码处理





