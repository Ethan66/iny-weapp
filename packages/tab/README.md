# Tab 标签页

### 引入

在`app.json`或`index.json`中引入组件

```json
"usingComponents": {
  "iny-tab": "path/to/iny-weapp/dist/tab/index",
  "iny-tabs": "path/to/iny-weapp/dist/tabs/index"
}
```

## 代码演示

### 简单使用

通过`active`设定当前激活标签对应的索引值，默认情况下启用第一个标签，注意，这里的 number 和 string 不互通，因为内容比较时使用的是 ===

```html
<iny-tabs active='{{ 2 }}'>
  <iny-tab
    title="标签 {{index + 1}}"
    wx:for="{{4}}"
    wx:key="{{index}}"
  >
    <view class="content">内容{{ index + 1}}</view>
  </iny-tab>
</iny-tabs>
```

### 名称匹配

在标签指定`name`属性的情况下，`active`的值为当前标签的`name`，默认启用第一个标签

```html
<iny-tabs active='{{ actveName }}'>
  <iny-tab
  title="{{item.title}}"
  wx:for="{{tabs}}"
  wx:key="{{index}}"
  name="{{item.name}}"
  disabled="{{item.disabled}}"
  >
    <view class="content">内容{{ item.title }}</view>
  </iny-tab>
</iny-tabs>
```

### 超出滚动

多于 属性 `swipeThreshold` 个标签时，Tab 可以横向滚动， `swipeThreshold` 默认为 4

```html
<iny-tabs active='{{ 2 }}'>
  <iny-tab
  title="标签{{index + 1}}"
  name='{{index + 1}}'
  wx:for="{{8}}"
  wx:key="{{index}}"
  >
    <view class="content">内容{{index + 1}}</view>
  </iny-tab>
</iny-tabs>
```

### 样式风格

`Tab`支持两种样式风格：`line`和`card`，默认为`line`样式，可以通过`type`属性修改样式风格

```html
<iny-tabs active='{{ 1 }}' type='card'>
  <iny-tab
    title="标签 {{index + 1}}"
    wx:for="{{3}}"
    wx:key="{{index}}"
  >
    <view class="content">内容{{ index + 1}}</view>
  </iny-tab>
</iny-tabs>
```

### 点击事件

设置`disabled`属性即可禁用标签。如果需要监听禁用标签的点击事件，可以在`iny-tabs`上监听`disabled-click`事件
可以在`iny-tabs`上绑定`click`事件，在回调参数的`event.detail`中可以取得被点击标签的标题、标识符以及下标

```html
<iny-tabs
 active='{{ actveName }}'
 bind:click="onClick"
 bind:disabled-click="onDisabledClick"
>
  <iny-tab
    title="{{item.title}}"
    wx:for="{{tabs}}"
    wx:key="{{index}}"
    name="{{item.name}}"
    disabled="{{item.disabled}}"
  >
    <view class="content">内容{{ item.title }}</view>
  </iny-tab>
  </iny-tabs>
```

```js
onClick ({ detail }) {
  Toast(`下标为: ${detail.index}, name 为: ${detail.name}, title 为: ${detail.title}`)
},
onDisabledClick ({ detail }) {
  Toast(`禁用项被点击: 下标为: ${detail.index}, name 为: ${detail.name}, title 为: ${detail.title}`)
  const tabs = this.data.tabs
  tabs.splice(0, 1)
  console.log(tabs)
  this.setData({
    tabs
  })
}
```

### 切换动画

设置`animated`属性可在tab进行切换时，具有切换动画

```html
<iny-tabs active='{{ 1 }}' animated>
  <iny-tab
    title="标签 {{index + 1}}"
    wx:for="{{3}}"
    wx:key="{{index}}"
  >
    <view class="content">内容{{ index + 1}}</view>
  </iny-tab>
  </iny-tabs>
```

### 滑动切换

设置`swipeable`属性可以使tab进行左右滑动切换

```html
<iny-tabs active='{{ 1 }}' swipeable>
  <iny-tab
    title="标签 {{index + 1}}"
    wx:for="{{3}}"
    wx:key="{{index}}"
  >
    <view class="content">内容{{ index + 1}}</view>
  </iny-tab>
  </iny-tabs>
```

### 滑动切换动画

可以通过`animated` 和 `swipeable`属性可以使tab进行左右滑动切换具有切换动画

```html
<iny-tabs
 active='2'
 animated
 swipeable
>
  <iny-tab
    title="标签{{index + 1}}"
    name='{{index + 1}}'
    wx:for="{{8}}"
    wx:key="{{index}}"
  >
    <view class="content" style="color: #fff; background-color: rgb({{(index + 1) * 30}}, 0, 0)">内容{{index + 1}}</view>
  </iny-tab>
</iny-tabs>

```

## API

### Tabs API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|-----------|-----------|-----------|-------------|-------------|
| active | 当前选中标签的标识符 | *string \| number* | `0` | - |
| color | 标签颜色 | *string* | `$color-theme` | - |
| z-index | z-index 层级 | *number* | `1` | - |
| type | 样式风格，可选值为`card` | *string* | `line` | - |
| border | 是否展示外边框，仅在`line`风格下生效 | *boolean* | `true` | - |
| duration | 动画时间 (单位秒)  | *number* | `0.3` | - |
| line-width | 底部条宽度 (px) | *string \| number* | 与当前标签等宽 | - |
| line-height | 底部条高度 (px) | *string \| number* | `3px` | - |
| swipe-threshold | 滚动阈值，设置标签数量超过多少个可滚动 | *number* | `4` | - |
| animated | 是否使用动画切换 Tabs | *boolean* | `false` | - |
| swipeable | 是否开启手势滑动切换 | *boolean* | `false` | - |

### Tab API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|-----------|-----------|-----------|-------------|-------------|
| name | 标签名称，作为匹配的标识符 | *string \| number* | 标签的索引值 | - |
| title | 标题 | *string* | - | - |
| disabled | 是否禁用标签 | *boolean* | `false` | - |
| title-style | 自定义标题样式 | *string* | - | - |

### Tabs Slot

| 名称 | 说明 |
|-----------|-----------|
| nav-left | 标题左侧内容 |
| nav-right | 标题右侧内容 |

### Tab Slot

| 名称 | 说明 |
|-----------|-----------|
| - | 标签页内容 |

### Tabs Event

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| bind:click | 点击标签时触发 | name：标签标识符，title：标题, index: 标签下标 |
| bind:disabled-click | 点击被禁用的标签时触发 | name：标签标识符，title：标题，index: 标签下标  |

### 外部样式类

| 类名 | 说明 |
|-----------|-----------|
| custom-class | 根节点样式类 |
| nav-class | 标签栏样式类 |
| tab-class | 标签样式类 |
| tab-active-class | 标签激活态样式类 |
| track-class | tab 内容包裹的容器 |
