# NoticeBar 通告栏

### 引入

在`app.json`或`index.json`中引入组件

```json
"usingComponents": {
  "iny-notice-bar": "path/to/iny-weapp/dist/notice-bar/index"
}
```

## 代码演示

### 简单使用

```html

<iny-notice-bar
 bind:click="onClick"
 left-icon="horn"
 text="做人一辈子 快乐没几天 一条大路分两边 随你要走哪一边 不怕不怕就不怕 我是年轻人"
/>
```

### 右边按钮

```html
<iny-notice-bar
 bind:click="onClick"
 right-icon="close"
 text="做人一辈子 快乐没几天 一条大路分两边 随你要走哪一边 不怕不怕就不怕 我是年轻人"
/>

```

### 禁用滚动

属性 `scrollable` 参数控制是否开启滚动

```html
<iny-notice-bar
 bind:click="onClick"
 right-icon="close"
 left-icon="horn"
 scrollable="{{false}}"
 text="做人一辈子 快乐没几天 一条大路分两边 随你要走哪一边 不怕不怕就不怕 我是年轻人"
/>

```

### 多行展示

禁用滚动时，可以设置`wrapable`来开启多行展示

```html
<iny-notice-bar
 scrollable="{{false}}"
 wrapable
 text="做人一辈子 快乐没几天 一条大路分两边 随你要走哪一边 不怕不怕就不怕 我是年轻人 做人一辈子 快乐没几天 一条大路分两边 随你要走哪一边 不怕不怕就不怕 我是年轻人 "
/>
```

### 左右插槽

使用`left-icon`插槽和`right-icon`插槽自定义左右固定内容

```html

<iny-notice-bar text="做人一辈子 快乐没几天 一条大路分两边 随你要走哪一边 不怕不怕就不怕 我是年轻人 做人一辈子 快乐没几天 一条大路分两边 随你要走哪一边 不怕不怕就不怕 我是年轻人 ">
<view slot="left-icon">公告</view>
<view slot="right-icon">结束</view>
</iny-notice-bar>

```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|-----------|-----------|-----------|-------------|-------------|
| text | 内容文本 | *string* | - | - |
| delay | 动画延迟时间 (s) | *number* | `1` | - |
| speed | 滚动速率 (px/s) | *number* | `50` | - |
| scrollable | 是否在长度溢出时滚动播放 | *boolean* | `true` | - |
| left-icon | 左侧图标名称或图片链接，可选值见 [Icon 组件](/#/icon) | *string* | - | - |
| right-icon | 左侧图标名称或图片链接，可选值见 [Icon 组件](/#/icon) | *string* | - | - |
| color | 文本颜色 | *string* | `#fff` | - |
| backgroundColor | 滚动条背景 | *string* | `#ff2650` | - |

### Events

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| bind:click | 点击事件回调 | - |

### Slot

| 名称 | 说明 |
|-----------|-----------|
| left-icon | 自定义左侧固定内容 |
| right-icon | 自定义右侧固定内容 |

### 外部样式类

| 类名 | 说明 |
|-----------|-----------|
| custom-class | 根节点样式类 |
