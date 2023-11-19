# pinia

## 0 教程简介

视频教程：抛弃 Vuex，使用 Pinia

视频地址：https://www.bilibili.com/video/BV11Y411b7nb/?spm_id_from=333.337.search-card.all.click&vd_source=6e9c2de5b89c2ba4e13469e295319397

视频作者：前端瞎折腾

Pinia中文文档: https://pinia.web3doc.top/

## 1 介绍

### 1.1 Pinia 特点

- Composition API 。

- Pinia 对 Vue 2 和 Vue 3 都有效
  - 除了安装和 SSR 之外，两者的 API 都是相同的，不需要您使用组合 API
  - 供有关 Vue 2 的注释，以便 Vue 2 和 Vue 3 用户可以阅读
  - Pinia在 Vue 2 中使用 Vuex 的现有接口，所以不能与 Vuex 同时使用

- dev-tools 支持
  - 跟踪动作Actions、突变Mutations的时间线
  - Store 出现在使用它们的组件中
  - time travel 和 更容易的调试
- 热模块更换
  - 在不重新加载页面的情况下修改您的 Store
  - 在开发时保持任何现有状态
- 插件：使用插件扩展 Pinia 功能
- 为 JS 用户提供适当的 TypeScript 支持或 **autocompletion**
- 服务器端渲染支持

### 1.2 核心概念

Pinia 从使用的角度看几乎和 Vuex 一样，但是 Pinia 更简单

Pinia 中只有三个核心概念

- State
- Getters
- Actions

### 1.3 基本使用

首先创建一个 Store ：

```js
// stores/counter.js
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return { count: 0 }
  },
  // 也可以定义为
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.count++
    },
  },
})
```

然后你在一个组件中 *使用* 它：

```js
import { useCounterStore } from '@/stores/counter'

export default {
  setup() {
    const counter = useCounterStore()

    counter.count++
    // 带自动补全 ✨
    counter.$patch({ count: counter.count + 1 })
    // 或使用 action 代替
    counter.increment()
  },
}
```

你甚至可以使用一个函数（类似于一个组件`setup()`）来为更高级的用例定义一个Store：

```js
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  function increment() {
    count.value++
  }

  return { count, increment }
})
```

如果你还不熟悉 `setup()` 和 Composition API，别担心，Pinia 也支持一组类似的 [*map helpers* like Vuex](https://vuex.vuejs.org/guide/state.html#地图状态助手)。 您以相同的方式定义存储，但随后使用 `mapStores()`、`mapState()` 或 `mapActions()`：

```js
const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  getters: {
    double: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    }
  }
})

const useUserStore = defineStore('user', {
  // ...
})

export default {
  computed: {
    // other computed properties
    // ...
    // gives access to this.counterStore and this.userStore
    ...mapStores(useCounterStore, useUserStore)
    // gives read access to this.count and this.double
    ...mapState(useCounterStore, ['count', 'double']),
  },
  methods: {
    // gives access to this.increment()
    ...mapActions(useCounterStore, ['increment']),
  },
}
```

您将在核心概念中找到有关每个 map helper 的更多信息。

### 1.4 关于Pinia的名字

Pinia（发音为 `/piːnjʌ/`，类似于英语中的“peenya”）是最接近有效包名 *piña*（西班牙语中的_pineapple_）的词。 菠萝实际上是一组单独的花朵，它们结合在一起形成多个水果。 与 Store 类似，每一家都是独立诞生的，但最终都是相互联系的。 它也是一种美味的热带水果，原产于南美洲。

### 1.5 Pinia 与 Vuex的比较

> Vuex 3.x for Vue 2 而 Vuex 4.x for Vue 3

Pinia API 与 Vuex ≤4 有很大不同，即：

- *mutations* 不再存在。他们经常被认为是 **非常冗长**。他们最初带来了 devtools 集成，但这不再是问题。
- 无需创建自定义复杂包装器来支持 TypeScript，所有内容都是类型化的，并且 API 的设计方式尽可能利用 TS 类型推断。
- 不再需要注入、导入函数、调用函数、享受自动完成功能！
- 无需动态添加 Store，默认情况下它们都是动态的，您甚至都不会注意到。请注意，您仍然可以随时手动使用 Store 进行注册，但因为它是自动的，您无需担心。
- 不再有 *modules* 的嵌套结构。您仍然可以通过在另一个 Store 中导入和 *使用* 来隐式嵌套 Store，但 Pinia 通过设计提供平面结构，同时仍然支持 Store 之间的交叉组合方式。 **您甚至可以拥有 Store 的循环依赖关系**。
- 没有 *命名空间模块*。鉴于 Store 的扁平架构，“命名空间” Store 是其定义方式所固有的，您可以说所有 Store 都是命名空间的。

## 2 快速入门

### 2.1 安装

用你最喜欢的包管理器安装 `pinia`：

```bash
yarn add pinia
# 或者使用 npm
npm install pinia
```

提示

- 如果您的应用使用 Vue 2，您还需要安装组合 API：`@vue/composition-api`。 如果您使用 Nuxt，则应遵循 [这些说明](https://pinia.web3doc.top/ssr/nuxt.html)。

- 如果你使用的是 Vue CLI，你可以试试这个 [**非官方插件**](https://github.com/wobsoriano/vue-cli-plugin-pinia)。

创建一个 pinia（根存储）并将其传递给应用程序：

```js
import { createPinia } from 'pinia'

app.use(createPinia())
```

如果您使用的是 Vue 2，您还需要安装一个插件并将创建的 `pinia` 注入应用程序的根目录：

```js
import { createPinia, PiniaVuePlugin } from 'pinia'

Vue.use(PiniaVuePlugin)
const pinia = createPinia()

new Vue({
  el: '#app',
  // 其他选项...
  // ...
  // 注意同一个 `pinia` 实例可以在多个 Vue 应用程序中使用
  // 同一个页面
  pinia,
})
```

这也将添加 devtools 支持。在 Vue 3 中，仍然不支持时间旅行和编辑等一些功能，因为 vue-devtools 尚未公开必要的 API，但 devtools 具有更多功能，并且整体开发人员体验要好得多。在 Vue 2 中，Pinia 使用 Vuex 的现有接口（因此不能与它一起使用）。

```js
watch(
  pinia.state,
  (state) => {
    // 每当它发生变化时，将整个状态持久化到本地存储
    localStorage.setItem('piniaState', JSON.stringify(state))
  },
  { deep: true }
)
```

### 2.2 核心概念使用

详见 pinia-project工程
