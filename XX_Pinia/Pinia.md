# pinia

## 00_教程简介

视频教程: 抛弃 Vuex，使用 Pinia

视频地址:https://www.bilibili.com/video/BV11Y411b7nb/?spm_id_from=333.337.search-card.all.click&vd_source=6e9c2de5b89c2ba4e13469e295319397

视频作者: 前端瞎折腾

Pinia中文文档: https://pinia.web3doc.top/

## 01_介绍

[Watch a free video lesson on Vue School](https://vueschool.io/lessons/introduction-to-pinia?friend=vuerouter)

Pinia [最初是在 2019 年 11 月左右重新设计使用](https://github.com/vuejs/pinia/commit/06aeef54e2cad66696063c62829dac74e15fd19e) [Composition API](https://github.com/vuejs/composition-api) 。从那时起，最初的原则仍然相同，但 Pinia 对 Vue 2 和 Vue 3 都有效，并且不需要您使用组合 API。 除了安装和 SSR 之外，两者的 API 都是相同的，并且这些文档针对 Vue 3，并在必要时提供有关 Vue 2 的注释，以便 Vue 2 和 Vue 3 用户可以阅读！

## 为什么要使用 Pinia？[#](https://pinia.web3doc.top/introduction.html#为什么要使用-pinia？)

Pinia 是 Vue 的存储库，它允许您跨组件/页面共享状态。 如果您熟悉 Composition API，您可能会认为您已经可以通过一个简单的 `export const state = reactive({})`. 这对于单页应用程序来说是正确的，但如果它是服务器端呈现的，**会使您的应用程序暴露于安全漏洞**。 但即使在小型单页应用程序中，您也可以从使用 Pinia 中获得很多好处：

- dev-tools 支持
  - 跟踪动作、突变的时间线
  - Store 出现在使用它们的组件中
  - time travel 和 更容易的调试
- 热模块更换
  - 在不重新加载页面的情况下修改您的 Store
  - 在开发时保持任何现有状态
- 插件：使用插件扩展 Pinia 功能
- 为 JS 用户提供适当的 TypeScript 支持或 **autocompletion**
- 服务器端渲染支持

## 基本示例[#](https://pinia.web3doc.top/introduction.html#基本示例)

这就是使用 pinia 在 API 方面的样子（请务必查看 [Getting Started](https://pinia.web3doc.top/getting-started.html) 以获取完整说明）。 您首先创建一个 Store ：

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

```
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

```
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  function increment() {
    count.value++
  }

  return { count, increment }
})
```

如果你还不熟悉 `setup()` 和 Composition API，别担心，Pinia 也支持一组类似的 [*map helpers* like Vuex](https://vuex.vuejs.org/guide/state.html#地图状态助手)。 您以相同的方式定义存储，但随后使用 `mapStores()`、`mapState()` 或 `mapActions()`：

```
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

## 为什么是 *Pinia*[#](https://pinia.web3doc.top/introduction.html#为什么是-pinia)

Pinia（发音为 `/piːnjʌ/`，类似于英语中的“peenya”）是最接近有效包名 *piña*（西班牙语中的_pineapple_）的词。 菠萝实际上是一组单独的花朵，它们结合在一起形成多个水果。 与 Store 类似，每一家都是独立诞生的，但最终都是相互联系的。 它也是一种美味的热带水果，原产于南美洲。

## 一个更现实的例子[#](https://pinia.web3doc.top/introduction.html#一个更现实的例子)

这是一个更完整的 API 示例，您将与 Pinia 一起使用**即使在 JavaScript 中也具有类型**。 对于某些人来说，这可能足以在不进一步阅读的情况下开始使用，但我们仍然建议您查看文档的其余部分，甚至跳过此示例，并在阅读完所有_核心概念_后返回。

```
import { defineStore } from 'pinia'

export const todos = defineStore('todos', {
  state: () => ({
    /** @type {{ text: string, id: number, isFinished: boolean }[]} */
    todos: [],
    /** @type {'all' | 'finished' | 'unfinished'} */
    filter: 'all',
    // type 会自动推断为 number
    nextId: 0,
  }),
  getters: {
    finishedTodos(state) {
      // 自动完成! ✨
      return state.todos.filter((todo) => todo.isFinished)
    },
    unfinishedTodos(state) {
      return state.todos.filter((todo) => !todo.isFinished)
    },
    /**
     * @returns {{ text: string, id: number, isFinished: boolean }[]}
     */
    filteredTodos(state) {
      if (this.filter === 'finished') {
        // 自动调用其他 getter ✨
        return this.finishedTodos
      } else if (this.filter === 'unfinished') {
        return this.unfinishedTodos
      }
      return this.todos
    },
  },
  actions: {
    // 任何数量的参数，返回一个 Promise 或者不返回
    addTodo(text) {
      // 你可以直接改变状态
      this.todos.push({ text, id: this.nextId++, isFinished: false })
    },
  },
})
```

## 与 Vuex 的比较[#](https://pinia.web3doc.top/introduction.html#与-vuex-的比较)

Pinia 最初是为了探索 Vuex 的下一次迭代会是什么样子，结合了 Vuex 5 核心团队讨论中的许多想法。最终，我们意识到 Pinia 已经实现了我们在 Vuex 5 中想要的大部分内容，并决定实现它 取而代之的是新的建议。

与 Vuex 相比，Pinia 提供了一个更简单的 API，具有更少的规范，提供了 Composition-API 风格的 API，最重要的是，在与 TypeScript 一起使用时具有可靠的类型推断支持。

### RFC[#](https://pinia.web3doc.top/introduction.html#rfc)

虽然 Vuex 通过 RFC 从社区收集尽可能多的反馈，但 Pinia 没有。 我根据我开发应用程序、阅读其他人的代码、为使用 Pinia 的客户工作以及在 Discord 上回答问题的经验来测试想法。 这使我能够提供一种适用于各种情况和应用程序大小的有效解决方案。 我经常发布并在保持其核心 API 不变的同时使库不断发展。

### 与 Vuex 3.x/4.x 的比较[#](https://pinia.web3doc.top/introduction.html#与-vuex-3-x-4-x-的比较)

> Vuex 3.x 是 Vuex 的 Vue 2 而 Vuex 4.x 是 Vue 3

Pinia API 与 Vuex ≤4 有很大不同，即：

- *mutations* 不再存在。他们经常被认为是 ***非常\* 冗长**。他们最初带来了 devtools 集成，但这不再是问题。
- 无需创建自定义复杂包装器来支持 TypeScript，所有内容都是类型化的，并且 API 的设计方式尽可能利用 TS 类型推断。
- 不再需要注入、导入函数、调用函数、享受自动完成功能！
- 无需动态添加 Store，默认情况下它们都是动态的，您甚至都不会注意到。请注意，您仍然可以随时手动使用 Store 进行注册，但因为它是自动的，您无需担心。
- 不再有 *modules* 的嵌套结构。您仍然可以通过在另一个 Store 中导入和 *使用* 来隐式嵌套 Store，但 Pinia 通过设计提供平面结构，同时仍然支持 Store 之间的交叉组合方式。 **您甚至可以拥有 Store 的循环依赖关系**。
- 没有 *命名空间模块*。鉴于 Store 的扁平架构，“命名空间” Store 是其定义方式所固有的，您可以说所有 Store 都是命名空间的。

有关如何将现有 Vuex ≤4 项目转换为使用 Pinia 的更详细说明，请参阅[从 Vuex 迁移指南](https://pinia.web3doc.top/cookbook/migration-vuex.html)。

[Suggest changes to this page ](https://github.com/vuejs/pinia/edit/v2/packages/docs/introduction.md)

[开始](https://pinia.web3doc.top/getting-started)
