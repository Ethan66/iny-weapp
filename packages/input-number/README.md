# input-number 数字输入框

### 引入

在`app.json`或`index.json`中引入组件

```json
"usingComponents": {
  "iny-input-number": "path/to/iny-weapp/dist/input-number/index"
}
```

## 代码演示

### 简单使用

```html
<iny-input-number
  value="{{value}}"
  bind:change="onChange"
  bind:decrease="onDecrease"
  bind:increase="onIncrease"
```

### 指定计数器步长

通过属性`step`属性可以指定变化步长

```html
<iny-input-number
  value="{{value}}"
  step="3"
  bind:change="onChange"
  bind:decrease="onDecrease"
  bind:increase="onIncrease"
/>
```

### 限制输入范围

可以通过属性 `min` 和 `max` 限制输入范围

```html
<iny-input-number
  min="1"
  max="10"
  value="{{value}}"
  step="3"
  bind:change="onChange"
  bind:decrease="onDecrease"
  bind:increase="onIncrease"
```

### 禁用状态

可以通过属性 `disabled` 可以禁用 input-number 组件

```html
<iny-input-number
  disabled
  value="{{value}}"
  bind:change="onChange"
  bind:decrease="onDecrease"
  bind:increase="onIncrease"
/>
```

### 自定义宽度

可以通过属性 `input-width` 可以自定义 input 输入框的宽度

```html
<iny-input-number
  input-width="50px"
  value="{{value}}"
  bind:change="onChange"
  bind:decrease="onDecrease"
  bind:increase="onIncrease"
/>
```

### 异步改变数据

可以设置属性 `async` 后，input-number 组件并不会自动改变值，需要父组件 setData 来改变传入的值，可异步改变

```html
<iny-input-number
  async
  value="{{valueAsync}}"
  bind:change="onChangeAsync"
/>
```

### Props

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| name | 在表单内提交时的标识符 | `String` | - |
| value | 输入值 | `String | Number` | 传入的值 |
| min | 最小值 | `String | Number` | `1` |
| max | 最大值 | `String | Number` | `Number.MAX_SAFE_INTEGER` |
| step | 步数 | `String | Number` | `1` |
| disabled | 是否禁用 | `Boolean` | `false` |
| disable-input | 是否禁用输入框 | `Boolean` | `false` |
| async | 异步变更，为 `true` 时input值不变化，仅触发事件 | `Boolean` | `false` |
| input-width | 输入框宽度，须指定单位 | `String` | `30px` |

### Events

| 事件名 | 说明 | 回调参数 |
|-----------|-----------|-----------|
| bind:change | 当绑定值变化时触发的事件 | event.detail: 当前输入的值 |
| bind:over | 点击不可用的按钮时触发 | event.detail: increase 或者 decrease |
| bind:increase | 点击增加按钮时触发 | event.detail 当前的值 |
| bind:decrease | 点击减少按钮时触发 | event.detail 当前的值 |

### 外部样式类

| 类名 | 说明 |
|-----------|-----------|
| custom-class | 根节点样式类 |
| input-class | 输入框样式类 |
| increase-class | 加号按钮样式类 |
| decrease-class | 减号按钮样式类 |
