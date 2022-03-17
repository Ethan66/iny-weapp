# Icon 图标

### 引入

在`app.json`或`index.json`中引入组件

```json
"usingComponents": {
  "iny-icon": "iny-weapp/dist/icon/index"
}
```

## 代码演示

### 基础用法

`Icon`的`name`属性支持传入图标名称或图片链接

```html
<iny-icon name="close" />
```

### 图片icon

```html
<iny-icon name="https://img.yzcdn.cn/vant/basic-0401.svg" />
```

### Props

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| name | 图标名称或图片链接 | `String` | - |
| color | 图标颜色 | `String` | `inherit` |
| size | 图标大小，如 `20px`，`2em` | `String` | `inherit` |
| custom-style | 自定义样式 | `String` | - |

### Events

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| bind:click | 点击图标时触发 | - |

### 外部样式类

| 类名 | 说明 |
|-----------|-----------|
| custom-class | 根节点样式类 |
