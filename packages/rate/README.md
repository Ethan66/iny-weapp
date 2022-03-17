# Rate 评分

### 引入

在`app.json`或`index.json`中引入组件

```json
"usingComponents": {
  "iny-rate": "path/to/iny-weapp/dist/rate/index"
}
```

## 代码演示

### 简单使用

```html
<iny-rate value="{{ rate }}" bind:change="onChange" />
```

```javascript
Page({
  data: {
    rate: 3
  },

  onChange({ detail }) {
    this.setData({
      rate: detail
    });
  }
});
```

### 半星rate

属性`allow-half` 可以指定是否有半星

```html
<iny-rate
  value="{{rate}}"
  allow-half
  bind:change="onChange"
/>
```

### 自定义图标

属性 icon 和 void-icon 可以指定自定义图标，icon 的使用参考 icon 组件的 name

 ```html
<iny-rate
  value="{{rate}}"
  icon="like-f"
  void-icon="like"
  bind:change="onChange"
/>
```

### 自定义颜色

属性 color 和 void-color 以及 disabled-color 可以指定 rate 组件的颜色值

```html
<iny-rate
  value="{{rate}}"
  icon="like-f"
  color="yellow"
  void-color="blue"
  void-icon="like"
  bind:change="onChange"
/>
```

### 自定义数量

属性 count 可以指定 rate 组件个数

```html
<iny-rate
  value="{{rate}}"
  count="8"
  bind:change="onChange"
/>
```

### 禁用状态

属性 disabled 可以禁用rate组件

```html
<iny-rate
  value="3.5"
  disabled
  bind:change="onChange"
/>
```

### 只读状态

属性 readonly 可以只读rate组件，不允许修改值

```html
<iny-rate
  value="3"
  readonly
  bind:change="onChange"
/>
```

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| name | 在表单内提交时的标识符 | `String` | - |
| value | 当前分值 | `Number` | - |
| count | 图标总数 | `Number` | `5` |
| size | 图标大小 (px) | `Number` | `20` |
| color | 选中时的颜色 | `String` | `#ff2650` |
| void-color | 未选中时的颜色 | `String` | `#c9c9c9` |
| icon | 选中时的图标名称或图片链接，可选值见 Icon 组件 | `String` | `star` |
| void-icon | 未选中时的图标名称或图片链接，可选值见 Icon 组件 | `String` | `star-o` |
| allow-half | 是否允许半选 | `Boolean` | `false` |
| readonly | 是否为只读状态 | `Boolean` | `false` |
| disabled | 是否禁用评分 | `Boolean` | `false` |
| disabled-color | 禁用时的颜色 | `String` | `#bdbdbd` |

### Events

| 事件名称 | 说明 | 回调参数 |
|------|------|------|
| change | 当前分值变化时触发的事件 | 当前分值 |

### 外部样式类

| 类名 | 说明 |
|-----------|-----------|
| custom-class | 根节点样式类 |
| icon-class | 图标样式类 |
