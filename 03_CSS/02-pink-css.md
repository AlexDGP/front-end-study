# 黑马pink老师-css视频教程

## 00_教程简介

视频地址:[黑马程序员pink老师前端入门教程，零基础必看的h5(html5)+css3+移动端前端视频教程](https://www.bilibili.com/video/BV14J4114768?p=93&vd_source=6e9c2de5b89c2ba4e13469e295319397)

小工具:snipaste

[ps插件:cutterman](https://www.bilibili.com/video/BV14J4114768?p=193&vd_source=6e9c2de5b89c2ba4e13469e295319397)

## 01_Emmet语法

输入Emmet代码后按tab键

1. 单个标签: div ==> `<div />`
2. 多个标签: div*3 ==> 3个`<div />`
3. 父子标签: ul>li ==> `<ul><li></li></ul>`
4. 兄弟标签: div+p ==> `<div></div><p></p>`
5. class标签: div.className / .className ==> `<div class="className" />`
6. id标签: div#idName / #idName ==> `<div id="idName " />`
7. 自增标签: .className$*3 ==> `<div class="className2" /><div class="className2" /><div class="className3" />`
8. 内容标签: div{text} ==> `<div>text</div>`

## 02_选择器

### 复合选择器

| 复合选择器 | [Combinator selectors](https://www.w3schools.com/css/css_combinators.asp) | Example | Example description                                          |
| ---------- | :----------------------------------------------------------- | :------ | :----------------------------------------------------------- |
| 后代选择器 | [*element element*](https://www.w3schools.com/cssref/sel_element_element.asp) | div p   | Selects all <p> elements inside <div> elements               |
| 子代选择器 | [*element>element*](https://www.w3schools.com/cssref/sel_element_gt.asp) | div > p | Selects all <p> elements where the parent is a <div> element |
|            | [*element+element*](https://www.w3schools.com/cssref/sel_element_pluss.asp) | div + p | Selects the first <p> element that are placed immediately after <div> elements |
|            | [*element1~element2*](https://www.w3schools.com/cssref/sel_gen_sibling.asp) | p ~ ul  | Selects every <ul> element that are preceded by a <p> element |
| 并集选择器 | *[element,element,..](https://www.w3schools.com/cssref/sel_element_comma.asp)* | div, p  | Selects all <div> elements and all <p> elements              |

### 伪类选择器

| [Pseudo-class selectors](https://www.w3schools.com/css/css_pseudo_classes.asp) | Example   | Example description         |
| :----------------------------------------------------------- | :-------- | :-------------------------- |
| [:active](https://www.w3schools.com/cssref/sel_active.asp)   | a:active  | Selects the active link     |
| [:hover](https://www.w3schools.com/cssref/sel_hover.asp)     | a:hover   | Selects links on mouse over |
| [:link](https://www.w3schools.com/cssref/sel_link.asp)       | a:link    | Selects all unvisited links |
| [:visited](https://www.w3schools.com/cssref/sel_visited.asp) | a:visited | Selects all visited links   |

| [Pseudo-class selectors](https://www.w3schools.com/css/css_pseudo_classes.asp) | Example     | Example description                        |
| ------------------------------------------------------------ | ----------- | ------------------------------------------ |
| [:focus](https://www.w3schools.com/cssref/sel_focus.asp)     | input:focus | Selects the <input> element that has focus |

## 03_显示模式

|          | 块级元素                                                     | 行内元素                                                     | 行内块元素                                                   |
| :------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 常见元素 | `<div>,<h1>~<h6>,<p>,<ul>,<ol>,<li>`等                       | `<a>,<strong>,<b>,<em>,<i>,<s>,<ins>,<u>,<span>`等           | `<img>,<input>,<td>`                                         |
| 特点     | 1. 独占一行<br />2. width,height,margin,padding都可以控制<br />3. width默认是父容器宽度的100%<br />4. 是一个容器,里面可以放行内元素或者块级元素 | 1. 一行多个,相邻显示<br />2. width,height设置无效<br />3. width默认是它本身内容的宽度<br />4. 行内元素只能容纳文本或其他行内元素 | 1. 一行多个,相邻显示,但是中间会有空隙<br />2. width默认是它本身内容的宽度<br />3. width,height,margin,padding都可以控制 |
| 注意事项 | 1. `<p>`标签主要放文字,因此`<p>`标签里面不能放块级元素<br />2. `<h1>~<h6>`也是文字类块级元素,里面也不能放块级元素 | 1. `<a>`标签里不能再放`<a>`标签<br />2. 特殊情况下`<a>`标签你可以放块级元素,但是给`<a>`转换成块级元素比较安全 |                                                              |
| 转换     | dispaly:block                                                | dispaly:inline                                               | dispaly:inline-block                                         |

## [04_背景](https://www.w3schools.com/css/css_background.asp)

| 属性                                                         | 描述               | 默认值              | 值                                                           | 示例                                                         |
| ------------------------------------------------------------ | ------------------ | ------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| background-color                                             | 背景颜色           | transparent(透明的) | color                                                        | background-color: red                                        |
| background-image                                             | 背景图片           | none(无背景图片)    | url(iamgePath)                                               | background-image:url("./images/bg.png")                      |
| background-repeat                                            | 背景平铺           | repeat              | repeat\|non-repeat\|repeat-x\|repeat-y                       | background-repeat:non-repeat                                 |
| [background-position](https://www.w3schools.com/cssref/pr_background-position.asp):x y | 背景位置(比较复杂) |                     | 方位值:center\|top\|bottom\|left\|right<br />精确值:10px 20% | background-position:bottom right<br />background-position:20% 30% |
| background-attachment                                        | 背景附着           | scroll              | scroll滚动\|fixed固定                                        | background-attachment: fixed                                 |
| background                                                   | 背景简写           |                     |                                                              |                                                              |

## 05_css特性

|      | 层叠性   | 继承性                                                       | 优先级                                                       |
| ---- | -------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 描述 | 就近原则 | 子元素继承父元素的样式(text-,font-,line-这些开头的属性,以及color属性可以继承) | `!important`>`行内样式:style=""`>`id选择器`>`class选择器|Pseudo-class选择器`>`element选择器`>`继承|通配符*` |

## 06_盒子模型

从外往里分别是:margin,padding,border,context

### border

border-top,border-bottom,border-left,border-right

圆角边框:border-radius

| border: value                       | value:上下左右                          |
| ----------------------------------- | --------------------------------------- |
| border: value1 value2               | value1:上下 value2:左右                 |
| border: value1 value2 value3        | value1:上 value2:左右 value3:下         |
| border: value1 value2 value3 value4 | value1:上 value2:右 value3:下 value4:左 |

| border         | border-width | border-type | border-color |
| -------------- | ------------ | ----------- | ------------ |
| 1px solid #fff | 1px          | solid       | #fff         |

合并相邻边框宽度:border-collapse: collapse

### padding

padding会撑大盒子

padding-top,padding-bottom,padding-left,padding-right

### margin

margin-top,margin-bottom,margin-left,margin-right

块级元素水平居中:margin: 0 auto

块级元素垂直居中:margin: auto 0

块级元素水平垂直居中:margin: auto auto 

### box-shadow(盒子阴影)

box-shadow: h-shadow v-shadow blur(模糊距离) spread(阴影大小) color [inset];

### text-shadow(文字阴影)

box-shadow: h-shadow v-shadow blur(模糊距离)  color

## 07_浮动float

float:none|left|right

- 浮动会脱离标准流(脱标)

- 浮动的元素具有行内块元素特性
- 浮动的盒子会影响后面的标准流,不会影响前面的标准流
- 浮动的元素不会压住下面标准流的文字(文字环绕效果)

### 清除浮动

为什么要清除浮动

- 父元素没有高度
- 子元素浮动
- 影响了下面的布局

| 清除浮动方式                                                 |                                                        | 优点           | 缺点                    |
| ------------------------------------------------------------ | ------------------------------------------------------ | -------------- | ----------------------- |
| [额外标签](https://www.bilibili.com/video/BV14J4114768/?p=184&spm_id_from=333.880.my_history.page.click&vd_source=6e9c2de5b89c2ba4e13469e295319397) | 浮动元素末尾加上空标签`<div style="clear:both"></div>` | 通俗易懂       | 添加无意义标签,结构化差 |
| [父元素添加overflow属性](https://www.bilibili.com/video/BV14J4114768?p=185&vd_source=6e9c2de5b89c2ba4e13469e295319397) | overflow设置为hidden\|auto\|scroll                     | 书写简单       | 得设置overflow          |
| [after伪元素](https://www.bilibili.com/video/BV14J4114768?p=185&vd_source=6e9c2de5b89c2ba4e13469e295319397) | 父元素添加.clearfix类,具体css代码看视频                | 解构语义化正确 | IE不支持:after          |
| [before,after双伪元素](https://www.bilibili.com/video/BV14J4114768?p=187&spm_id_from=pageDriver&vd_source=6e9c2de5b89c2ba4e13469e295319397) | 父元素添加.clearfix类,具体css代码看视频                | 解构语义化正确 | IE不支持:after          |

## 08_CSS属性书写顺序

1. 布局定位属性:dispaly/positon/float/clear/visibility/overflow
2. 自身属性:width/height/margin/padding/border/background
3. 文本属性:color/font/text-decoration/text-align/vertical-align/white-space/break-word
4. 其他属性(CSS3):content/cursor/border-radius/box-shadow/text-shadow/background:linear-gradient

## [09_页面布局整体思路](https://www.bilibili.com/video/BV14J4114768?p=197&vd_source=6e9c2de5b89c2ba4e13469e295319397)

## 10_定位position

### position

| 值       | 描述     |                                                              |
| -------- | -------- | ------------------------------------------------------------ |
| static   | 静态定位 |                                                              |
| relative | 相对定位 | 保留原来位置,不脱标                                          |
| absolute | 绝对定位 | 不保留原来位置,脱标<br />绝对定位会压住标准流的盒子          |
| fixed    | 固定定位 | 以可视窗口为基准                                             |
| sticky   | 粘性定位 | 以可视窗口为基准<br />占有原先的位置<br />必须有至少一个top\|bottom\|left\|right |

### z-index

- z-index值为正整数|负整数|0|auto,默认值是0,数值越大越靠上
- 如果z-index值一样,后写的在上面
- 只有定位的盒子才有z-index

### 绝对定位盒子居中问题

水平居中:

positon: absolute;

left: 50%;

margin-left: -(0.5 * 盒子宽度的一般)

## 11_显示隐藏dispaly|visibility

| 值                  | 描述                    |
| ------------------- | ----------------------- |
| display: none       | 隐藏元素,不保留原来位置 |
| display: block      | 显示元素,转换块级元素   |
| visibility: hidden  | 隐藏元素,保留原来位置   |
| visibility: visible | 显示元素,保留原来位置   |

## 12_溢出overflow

| 值      | 描述                              |
| ------- | --------------------------------- |
| visible | 全部显示                          |
| hidden  | 超出部分隐藏                      |
| scroll  | 总是显示滚动条                    |
| auto    | 超出显示滚动条,不超出不显示滚动条 |

## [13_精灵图](https://www.bilibili.com/video/BV14J4114768?p=251&vd_source=6e9c2de5b89c2ba4e13469e295319397)

利用背景图片位置:backgrond-position实现

## [14_字体图标iconfont](https://www.bilibili.com/video/BV14J4114768?p=255&vd_source=6e9c2de5b89c2ba4e13469e295319397)

- [icomoon字库](http://icomoon.io)
- [阿里iconfont字库](https://www.iconfont.cn/)

## 15_CSS技巧

### [三角形](https://www.bilibili.com/video/BV14J4114768?p=259&vd_source=6e9c2de5b89c2ba4e13469e295319397)

```css
div {
    width: 0;
    height: 0;
    border: 50px solid transparent;
    border-left-color: pink
}
```

### [鼠标样式cursor](https://www.bilibili.com/video/BV14J4114768?p=261&vd_source=6e9c2de5b89c2ba4e13469e295319397)

| cursor: 值  | 描述 |
| ----------- | ---- |
| default     | 默认 |
| pointer     | 小手 |
| move        | 移动 |
| text        | 文本 |
| not-allowed | 禁止 |

### [取消表单轮廓与文本域防止拖拽](https://www.bilibili.com/video/BV14J4114768?p=262&vd_source=6e9c2de5b89c2ba4e13469e295319397)

取消表单轮廓

```css
iput {
    outline: none;
}
```

禁止文本域缩放

```css
textarea {
    resize: none;
}
```

### [vertical-align实现行内块元素和文字垂直居中](https://www.bilibili.com/video/BV14J4114768?p=263&vd_source=6e9c2de5b89c2ba4e13469e295319397)

```css
div {
    display: inline-block;
	vertical-align: middle;
}
```

### [图片底部留白解决方案](https://www.bilibili.com/video/BV14J4114768?p=264&vd_source=6e9c2de5b89c2ba4e13469e295319397)

​    vertical-align: middle|top|bottom;

```css
img {
    vertical-align: middle;
}
```

### [单行文字溢出省略号](https://www.bilibili.com/video/BV14J4114768?p=265&vd_source=6e9c2de5b89c2ba4e13469e295319397)

### [多行文字溢出省略号](https://www.bilibili.com/video/BV14J4114768?p=266&vd_source=6e9c2de5b89c2ba4e13469e295319397)

### [margin负值妙用](https://www.bilibili.com/video/BV14J4114768?p=267&vd_source=6e9c2de5b89c2ba4e13469e295319397)

### [文字环绕效果float](https://www.bilibili.com/video/BV14J4114768?p=269&vd_source=6e9c2de5b89c2ba4e13469e295319397)

### [行内块元素妙用](https://www.bilibili.com/video/BV14J4114768?p=270&vd_source=6e9c2de5b89c2ba4e13469e295319397)

### [三角妙用](https://www.bilibili.com/video/BV14J4114768?p=270&vd_source=6e9c2de5b89c2ba4e13469e295319397)

### [css初始化](https://www.bilibili.com/video/BV14J4114768?p=273&vd_source=6e9c2de5b89c2ba4e13469e295319397)

