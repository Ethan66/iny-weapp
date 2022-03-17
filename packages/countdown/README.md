# CountDown 倒计时

### 引入

在`app.json`或`index.json`中引入组件

```json
"usingComponents": {
  "iny-countdown": "path/to/iny-weapp/dist/countdown/index"
}
```

## 代码演示

### 基本用法

`timestamp`属性表示倒计时总时长，单位为毫秒

```html
<iny-countdown timestamp="{{43200000}}" />
```

### 自定义格式化

通过`formater`属性设置倒计时文本的内容, 支持格式为 DD:HH:mm:ss:sss 格式，中间的分割符可以自定义,DD 和 sss 可以省略

```html
  <iny-countdown timestamp="{{43200000}}" formater="DD天HH时mm分ss秒" />
```

### 毫秒级渲染

倒计时有值改变时才会渲染，设置`mill`属性可以开启毫秒级渲染

```html
  <iny-countdown timestamp="{{43200000}}" mill  />
```

### 超过不显示

属性`max`可以设定倒计时显示最大值，`max` 单位为小时, 倒计时超过 max 会隐藏，会设定定时器 `timestamp - max * 60 * 60 * 100` 后会出现开始倒计时

```html
<iny-countdown
  item-class="item-class"
  max="{{24}}"
  timestamp="{{86403600}}"
  />
```

### 自定义样式

通过自定义class `item-class`  和  `separator-class` 分隔符class 自定义样式

```html
<iny-countdown
  item-class="item-class"
  separator-class="separator-class"
  timestamp="{{43200000}}"
  mill
/>
```

```css
.item-class {
  margin: 0 2px;
  width: 25px;
  text-align: center;
  background: #e4393c;
  color: #fff;
}
.separator-class {
  color: blue;
  font-weight: 500;
}
```

### 手动控制

```html
  <view class="padding">
    <iny-countdown
      class="control-count-down"
      item-class="item-class"
      timestamp="{{43200000}}"
      auto-start="{{false}}"
      mill
    />
  </view>
  <iny-button type="theme" size="small" inline bind:click="start">开始</iny-button>
  <iny-button type="info" size="small" inline bind:click="pause">暂停</iny-button>
  <iny-button type="success" size="small" inline bind:click="reset">重置</iny-button>
```

```js
page({
  start () {
    const countDown = this.selectComponent('.control-count-down')
    countDown.start()
  },

  pause () {
    const countDown = this.selectComponent('.control-count-down')
    countDown.pause()
  },

  reset () {
    const countDown = this.selectComponent('.control-count-down')
    countDown.reset()
  },

  finished () {
    Toast('倒计时结束')
  }
})

```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| timestamp | 倒计时时长，单位毫秒 | *number* | - | - |
| formater | 时间格式，DD-日，HH-时，mm-分，ss-秒，sss-毫秒 | *string* | `HH:mm:ss` | - |
| auto-start | 是否自动开始倒计时 | *boolean* | `true` | - |
| mill | 是否开启毫秒级渲染 | *boolean* | `false` | - |
| max | 显示最大值 | *Number* | `null` | - |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| finish | 倒计时结束时触发 | - |

### 方法

通过 selectComponent 可以获取到 CountDown 实例并调用实例方法

| 方法名 | 参数 | 返回值 | 介绍 |
|------|------|------|------|
| start | - | - | 开始倒计时 |
| pause | - | - | 暂停倒计时 |
| reset | - | - | 重设倒计时，若`auto-start`为`true`，重设后会自动开始倒计时 |
