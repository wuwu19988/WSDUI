---
title: Docs with VitePress
editLink: true
---
# Vue 引用组件

## 基础用法

基础的按钮用法。

<demo-block>
  <el-button>默认按钮</el-button>
  <el-button type="primary">主要按钮</el-button>
  <el-button type="success">成功按钮</el-button>
  <el-button type="info">信息按钮</el-button>
  <el-button type="warning">警告按钮</el-button>
  <el-button type="danger">危险按钮</el-button>
</demo-block>

## 表格

| 参数    | 说明         | 类型     | 可选值       | cool |
| ------- | ------------ | -------- | ------------ | ------: |
| visible | 是否展示     | boolean  | true / false | normal |
| ok      | 确认触发函数 | function | ()=>{}       | 123    |
| cancel  | 取消触发函数 | function | ()=>{}       | 12     |

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes |       are neat|$1     |
| zebra stripes |       are neat|123     |

## naive UI

:::demo
```vue
<template>
  <n-button>naive-ui</n-button>
</template>
```
:::

:::demo 

```vue
<template>
  <n-space>
    <n-switch v-model:value="active" />
    <n-switch v-model:value="active" disabled />
  </n-space>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    return {
      active: ref(false)
    }
  }
})
</script>
```