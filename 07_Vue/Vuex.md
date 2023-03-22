# Vuex教程

## 00_教程简介

视频教程:Vuex从入门到实战

视频地址:https://www.bilibili.com/video/BV1h7411N7bg?p=1&vd_source=6e9c2de5b89c2ba4e13469e295319397

视频作者:前端CooCoo

## 01_Vuex概述

### 回顾组件间数据共享

- 父组件向子组件传值:v-bind属性绑定
- 子组件向父组件传值:v-on事件绑定
- 所有组件间传值:EventBus
- $on接收数据的组件
- $emit发送数据的组件

### Vuex实现组件数据共享

- 能够在Vuex中集中管理共享数据,易于开发和后期维护
- 能够高效的实现组件间数据共享,提高开发效率
- Vuex中的数据是响应式的

## 02_Vuex使用

### 安装Vuex

```
npm install vuex --save
```

### 导入Vuex并创建store

```js
// store.js
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	state: { 
        count: 0
    }
})
```

### 挂载store

```js
// main.js
new Vue({
	el: '#app',
	render: h => h(app),
	router,
	store
})
```

## 03_Vuex属性

### state:状态管理

```js
// store.js
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	state: { 
        count: 0
    }
})
```

```js
// *.vue
// 从Vuex中导入mapState函数
import { mapState } from 'vuex'

// 将全局属性映射为组件的计算属性
computed: {
    ...mapState{
        ['count']
    }
}
```

- 方式一: 通过`this.$store.state.count`直接访问state.count
- 方式二: 通过引入mapState函数,然后设置计算属性,通过`this.count`访问state.count

### mutations:处理同步任务

mutations可以直接修改state

```js
// store.js
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	state: { 
        count: 0
    },
    mutations: {
    	add(state){
            state.count++
        },
      addN(state, step){ // 传参
            state.count += step
        }
    }
})
```

```js
// *.vue
// 从Vuex中导入mapMutations函数
import { mapMutations } from 'vuex'

// 将全局属性映射为组件的方法
methods: {
    ...mapMutations(['add', 'addN'])
}

```

- 方式一: 通过`this.$store.commit('add')`或者`this.$store.commit('addN', 3)`(传参)触发mutations中add的方法
- 方式二: 通过引入mapMutations函数,然后设置组件方法,通过`this.add()`或者`this.addN(3)` (传参)触发mutations中add的方法

### actions:处理异步任务

actions不可以直接修改state,只能通过触发mutations中的方法简洁修改state

```js
// store.js
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	state: { 
        count: 0
    },
    mutations: {
    	add(state){
            state.count++
        }
    },
    actions: {
        addAsync(context) {
            setTimeout(()=>{
                context.commit('add')
            }, 1000)
        }
    }
})
```

```js
// *.vue
// 从Vuex中导入mapActions函数
import { mapActions } from 'vuex'

// 将全局属性映射为组件的方法
methods: {
    ...mapActions(['addAsync'])
}
```

- 方式一: 通过`this.$store.dispatch('addAsync')`触发actions中的addAsync方法
- 方式二: 通过引入mapActions函数,然后设置组件方法,通过`this.addAsync()`触发mutations中add的方法

### getters: 通过包装state数据,return一个包装后的新数据

```js
// store.js
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	state: { 
        count: 0
    },
	getters: {
		showNum(state) {
		return '当前数量: [' + state.count + ']'
		}
	}
})
```

```js
// *.vue
// 从Vuex中导入mapGetters函数
import { mapGetters } from 'vuex'

// 将全局属性映射为组件的计算属性
computed: {
    ...mapGetters{
        ['showNum']
    }
}
```

- 方式一: 通过`this.$store.getters.showNum`直接访问getters.showNum
- 方式二: 通过引入mapGetters函数,然后设置计算属性,通过`this.showNum访问getters.showNum

## 04_Vuex模块化

### 第一步:store/index.js

```js
import Vue from 'vue'
import Vuex from 'vuex'
 
import cart from './modules/cart';
 
Vue.use(Vuex)
 
export default new Vuex.Store({
  modules: {
    cart, //引用cart模块
  }
})
```

### 第二步:store/modules/cart.js

```js
export default {
    namespaced: true,  //便于维护需要设置namespaced为true，使其成为带有命名空间的模块
    state:{
        cartList: [],
        count: 0,
    },
    getters:{
        getCount(state){
            return state.count       
        }
    },
    mutations:{
 
    },
    actions:{
 
    }
}
```

### 第三步:在需要获取的页面进行操作

```js
import {mapGetters} from 'vuex';
export default{
    computed:{
        ...mapGetters('cart',['getCount']) //第一个参数是模块名，第二个参数是数据    
    },
}
```

## 05_Vuex持久化存储

Vuex本身不是持久化存储的数据(页面刷新后更改的数据就被重置了)

想要实现持久化存储有两种方式:

- 自己写函数把Vuex中的数据保存到localStorage中,再从localStorage中取数据
- 使用插件vuex-persistedstate
