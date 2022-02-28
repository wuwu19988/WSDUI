# Markdown语法教程(高级)

## 引入组件（代码块）
说明:<br/>
因引入vitepress-theme-demoblock插件，故只需使用‘:::demo’,便可在md文件中执行vue代码，不用重复复制vue代码。<br/>
注意:实际使用中```前无括号，此处为了防编译

示例:
``` md
:::demo

(``` vue
<template>
  <n-button>naive-ui</n-button>
</template>
```)
```

演示:
::: demo

``` vue
<template>
  <n-button>naive-ui</n-button>
</template>
```
:::


## 统一表格样式
说明:<br/>
因在md文件中使用表格较为麻烦，故建议使用统一的表格样式，使用时进行复制粘贴，在根据内容进行修改即可。

示例:
``` md
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes |       are neat|$1     |
| zebra stripes |       are neat|123    |
```

演示:

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes |       are neat|$1     |
| zebra stripes |       are neat|123    |


## md语法组合使用

说明：<br/>
md中许多组件可以组合使用，比如：tip和demo组件可组合使用，可以在提示框中显示代码组件。<br/>
注意:实际使用中```,:::前无括号，此处为了防编译

示例：
``` md
(::: tip 1
This is a tip

:::demo

(```vue
<template>
  <n-button>naive-ui</n-button>
</template>
```)
:::)
```

演示：
::: tip 1
md语法组合使用
:::demo

```vue
<template>
  <n-button>naive-ui</n-button>
</template>
```
:::