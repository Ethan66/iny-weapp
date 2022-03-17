# Switch 开关

### 引入

在`app.json`或`index.json`中引入组件

```json
"usingComponents": {
  "iny-switch": "path/to/iny-weapp/dist/switch/index"
}
```

## 代码演示

### 简单使用

```html
<iny-switch
  checked="{{checked}}"
  bind:change="onChange"
/>
```

```javascript
Page({
  data: {
    checked: true
  },

  onChange({ detail }) {
    // 非 aysnc switch 会自动更新switch的值，不需要手动更新
  }
});
```

### 禁用状态

属性 `disabled` 可以禁用 `switch` 组件

```html
<iny-switch
  checked="{{checked}}"
  disabled
  bind:change="onChange"
/>
```

### 异步更新

属性 `async` 可以阻止 `switch` 组件自动更新值，需要父组件来更新 `swtich` 的值，实现异步更新

```html
<iny-switch
  checked="{{checkedAsync}}"
  async
  bind:change="onChangeAsync"
/>
```

### 自定义大小

属性 `size` 可以自定义 `switch` 组件的大小

```html
<iny-switch
  checked="{{checked}}"
  size="30px"
  bind:change="onChange"
/>
```

### 自定义颜色

属性 `active-color` 和 `inactive-color` 可以自定义 `switch` 组件的颜色

```html
<iny-switch
  checked="{{checked}}"
  active-color="green"
  inactive-color="blue"
  bind:change="onChange"
/>
```

### Props

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| name | 在表单内提交时的标识符 | `String` | - |
| checked | 开关选中状态 | `Boolean` | `false` |
| async | 是否异步更新 | `Boolean` | `false` |
| disabled | 是否为禁用状态 | `Boolean` | `false` |
| size | 开关尺寸 | `String` | `20px` |
| active-color | 打开时的背景色 | `String` | `#1989fa` |
| inactive-color | 关闭时的背景色 | `String` | `#fff` |

### Events

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| bind:change | 开关状态切换回调 | event.detail: 是否选中开关 |

### 外部样式类

| 类名 | 说明 |
|-----------|-----------|
| custom-class | 根节点样式类 |
| node-class | 圆点样式类 |
