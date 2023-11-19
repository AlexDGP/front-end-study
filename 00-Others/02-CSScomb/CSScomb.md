## 01_安装

全局安装:` npm install -g csscomb`

## 02_设置

– Name: CSScomb
 – Program: C:\Users\用户名\AppData\Roaming\npm\csscomb.cmd
 – Arguments: $FilePath$ -v -t
 – Working directory: $FileDir$

<img src="C:\Users\AlexDGP-Office\AppData\Roaming\Typora\typora-user-images\image-20221015130601552.png" alt="image-20221015130601552" style="zoom: 75%;" div align=left />

<img src="C:\Users\AlexDGP-Office\AppData\Roaming\Typora\typora-user-images\image-20221015131401066.png" alt="image-20221015131401066" style="zoom:80%; " div align=left  />

## 03_配置项

根目录下添加配置项文件`.csscomb.json`

```json
{
  "exclude": [".git/**", "node_modules/**", "bower_components/**"],
  "always-semicolon": true, // 总是显示分号
  "quotes": "double", // 引号风格，可选值'single'单引号，'double'双引号
    
  "block-indent": "   ", // 代码块缩进，可以是数字或字符串与空白和制表符等
  "tab-size": 2, // 缩进大小
    
  "color-case": "lower", // 选择器元素统一，可选值'lower'全部小写；'upper'全部大写
  "color-shorthand": true, // 十六进制颜色缩写与否
    
  "element-case": "lower", // 选择器元素统一，可选值'lower'全部小写；'upper'全部大写
  "eof-newline": true,  // 文件结束后添换行
    
  "leading-zero": true, // 是否需要小数点前的0
  "unitless-zero": false, // 是否移除0后的单位值，比如'0px'格式化为'0'

  "remove-empty-rulesets": true, // 是否移除空规则集，为true时，如：'a{  }'这样的空规则集将被移除

  // 冒号(:)前后规则
  "space-before-colon": "", 
  "space-after-colon": " ",

  // 选择符前后规则
  "space-before-combinator": " ", 
  "space-after-combinator": " ", 

  // 开始大括号({)前后规则
  "space-before-opening-brace": " ",
  "space-after-opening-brace": "\n",

  // 选择器前后规则
  "space-before-selector-delimiter": "",
  "space-after-selector-delimiter": " ",

  "space-before-closing-brace": "\n", // 结束大括号(})前规则

  "space-between-declarations": "\n", // 命名空间后规则
  "lines-between-rulesets": 1, // 选择器与选择器之间的换行数

  "strip-spaces": true, // 是否修剪尾随的空格
  "vendor-prefix-align": true, // 是否对齐属性和值中的前缀

}
```

