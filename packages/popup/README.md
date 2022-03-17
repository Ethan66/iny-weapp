# Popup 弹出层

### 引入

在`app.json`或`index.json`中引入组件

```json
"usingComponents": {
  "iny-popup": "path/to/iny-weapp/dist/popup/index"
}
```

## 代码演示

### 基础用法

`visible` 属性控制 `popup` 是否弹出

```html
<iny-popup visible="{{ visible }}" bind:close="onClose">内容</iny-popup>
```

### 弹出位置

`position` 属性决定 `popup` 从那个位置弹出，默认值为 `center`

```html
<!-- 头部弹出 -->
<iny-popup visible="{{ visible }}" position="top" bind:close="onClose"></iny-popup>
<!-- 底部弹出 -->
<iny-popup visible="{{ visible }}" position="bottom" bind:close="onClose"></iny-popup>
<!-- 左边弹出 -->
<iny-popup visible="{{ visible }}" position="left" bind:close="onClose"></iny-popup>
<!-- 右边弹出 -->
<iny-popup visible="{{ visible }}" position="right" bind:close="onClose"></iny-popup>
```

### 弹窗圆角

`round` 属性 决定 `popup` 的 `top-left`, `top-right` 是否为圆角, 默认为 `false`

```html
<!-- 圆角弹窗 -->
<iny-popup visible="{{ visible }}" position="top" round bind:close="onClose"></iny-popup>
```

### 关闭按钮弹窗

`closeable` 属性决定 `popup` 是否有关闭 `icon，默认为` `false`，支持自定义 `icon`

```html
<!-- 关闭按钮弹窗 -->
<iny-popup visible="{{ visible }}" position="top" closeable round bind:close="onClose"></iny-popup>
<!-- 自定义关闭按钮弹窗，自定义参考 icon 组件 -->
<iny-popup visible="{{ visible }}" position="top" icon="right" closeable round bind:close="onClose"></iny-popup>
```

### Props

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| visible | 是否显示弹出层 | `Boolean` | `false` |
| z-index | z-index 层级 | `Number` | `100` |
| mask | 是否显示背景蒙层 | `Boolean` | `true` |
| round | 是否为圆角弹出层 | `Boolean` | `false` |
| closeable | 是否为显示关闭按钮 | `Boolean` | `false` |
| icon | 关闭按钮 icon | `String` | `close` |
| position | 可选值为 `top` `bottom` `right` `left` | `String` | - |
| duration | 动画时长，单位为毫秒 | `Number | Object` | `300` |
| custom-style | 自定义弹出层样式 | `String` | `` |
| close-on-click-mask | 点击蒙层是否关闭 Popup | `Boolean` | `true` |
| safe-area-bottom | 是否为 iPhoneX 留出底部安全距离 | `Boolean` | `true` |
| safe-area-top | 是否留出顶部安全距离（状态栏高度 + 导航栏高度） | `Boolean` | `false` |

### Events

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| bind:close | 蒙层关闭时触发 | - |
| bind:click-overlay | 点击蒙层时触发 | - |

### 外部样式类

| 类名 | 说明 |
|-----------|-----------|
| custom-class | 根节点样式类 |
