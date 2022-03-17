# ActionSheet 上拉菜单

### 引入

在`app.json`或`index.json`中引入组件

```json
"usingComponents": {
  "iny-action-sheet": "path/to/iny-weapp/dist/action-sheet/index"
}
```

## 代码演示

### 简单用法

需要传入一个`actions`的数组，数组的每一项是一个对象，对象属性见文档下方表格。

```html
<iny-action-sheet
 visible="{{visible1}}"
 actions="{{actions}}"
 bind:select="onSelect"
/>
```

```javascript
Page({
  data: {
    visible1: false,
    actions: [
      {
        title: '选项一',
        name: 1,
        disabled: true
      },
      {
        title: '选项二',
        name: 2
      },
      {
        title: '选项三',
        name: 3,
        openType: 'share'
      }
    ],
  },
  onClick ({currentTarget: { dataset: { index}}}) {
    this.setData({
      [`visible${index}`]: true
    })
  },
  onSelect ({ detail }) {
    wx.showToast({
      title: '选择下标为:' + detail,
      icon: 'none'
    })
  },
});
```

### 使用标题

属性 `title` 可以让 `action-sheet` 出现标题和关闭按钮，同时，`icon` 属性可以指定关闭按钮的样式

```html
<iny-action-sheet
 title="使用标题"
 visible="{{visible2}}"
 actions="{{actions}}"
 bind:select="onSelect"
/>
```

### 使用圆角

属性  `round`属性，可以控制 `action-sheet` 上边框的圆角

```html
<iny-action-sheet
 round
 visible="{{visible3}}"
 actions="{{actions}}"
 bind:select="onSelect"
/>
```

### 使用多选框

属性 `visible-checkbox`，可以控制 `action-sheet` 是出现多选框 `checkbox-group` 和底部按钮，`checkbox` 为 `checkbox-group` 的 `value`, `max` 自定义可选数量, `footer-text` 控制底部按钮的文案, `align` 控制每一项的文案居中方式

```html
<iny-action-sheet
 visible-checkbox
 checkbox="{{checkboxValue}}"
 align='left'
 visible="{{visible4}}"
 actions="{{actions}}"
 footer-text="取消"
 bind:change="onChange"
 bind:confirm="onConfirm"
/>
```

### Props

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| visible | 是否显示 | `Boolean` | `false` |
| actions | 菜单选项 | `Array` | `[]` |
| title | 标题 | `String` | - |
| icon | 标题 | `String` | `roundclose` |
| z-index | z-index 层级 | `Number` | `100` |
| align | 文案水品排列， 可选值 `center`, `left`, `right` | `String` | `center` |
| mask | 是否有蒙层 | `Boolean` | `true` |
| round | 是否有圆角 | `Boolean` | `false` |
| min-height | 最小高度 | `String` | `250px` |
| visible-checkbox | 是否显示 checkbox-group | `Boolean` | `false` |
| checkbox | checkbox-group 的 value 默认值 | `Array` | `[]` |
| max | checkbox-group 最大可选书 | `Number` | - |
| footer-text | checkbox-group 底部按钮 | `String` | 确认 |
| close-on-click-mask | 点击遮罩是否关闭菜单 | `Boolean` | true |
| close-on-click-action | 点击选项或底部按钮是否关闭菜单 | `Boolean` | true |
| safe-area-bottom | 是否为 iPhoneX 留出底部安全距离 | `Boolean` | `true` |

### Events

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| bind:select | 选中选项时触发，禁用或加载状态下不会触发 | event.detail: 选项对应的对象 |
| bind:close | 关闭时触发 | - |
| bind:confirm | checkbox 情况下底部按钮 | event.detail: checkbox 的 value 值 |
| bind:change | checkbox 的change事件 | event.detail: checkbox 的 value 值 |

### actions

`API`中的`actions`为一个对象数组，数组中的每一个对象配置每一列，每一列有以下`key`：

| key | 说明 |
|-----------|-----------|
| name | 标题 |
| disabled | 是否为禁用状态 |
| openType | 微信开放能力，具体支持可参考 [微信官方文档](https://mp.weixin.qq.com/debug/wxadoc/dev/component/button.html) |
