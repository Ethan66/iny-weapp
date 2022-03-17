# Notify 消息提示

### 引入

在`app.json`或`index.json`中引入组件

```json
"usingComponents": {
  "iny-notify": "path/to/iny-weapp/dist/notify/index"
}
```

## 代码演示

### 基础用法

```js
import Notify from 'path/to/iny-weapp/dist/notify/notify';

Notify('你事发了')
```

```html
<!-- 在页面内添加对应的节点 -->
<iny-notify id="iny-notify" />
```

### 通知类型

支持`info`、`success`、`warning`、`danger`四种通知类型，默认为`danger`

```js
// 主要通知
Notify({ type: 'info', text: '通知内容' });

// 成功通知
Notify({ type: 'success', text: '通知内容' });

// 危险通知
Notify({ type: 'danger', text: '通知内容' });

// 警告通知
Notify({ type: 'warning', text: '通知内容' });
```

### 自定义


```js
Notify({
  text: '自定义',
  color: '#fff',
  background: '#000',
  onClose () {
    wx.showToast({
      title: 'notify close',
      icon: 'none'
    })
  },
  onClick () {
    wx.showToast({
      title: 'notify click',
      icon: 'none'
    })
  }
})
```

## API

### Options

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|-----------|-----------|-----------|-------------|-------------|
| type | 类型，可选值为 `primary` `info` `warning` | *string* | `danger` | 1.0.0 |
| text | 展示文案，支持通过`\n`换行 | *string* | 1.0.0 | - |
| duration | 展示时长(ms)，值为 0 时，notify 不会消失 | *number* | `3000` | - |
| color | 字体颜色 | *string* | `#fff` | - |
| background | 背景颜色 | *string* | - | - |
| safe-area-top | 是否留出顶部安全距离（状态栏高度） | *boolean* | `false` | - |
| onClick | 点击时的回调函数 | *Function* | - | - |
| onClose | 关闭时的回调函数 | *Function* | - | - |
