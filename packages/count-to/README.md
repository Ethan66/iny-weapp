# CountTo 倒计时

### 引入

在`app.json`或`index.json`中引入组件

```json
"usingComponents": {
  "iny-count-to": "path/to/iny-weapp/dist/count-to/index"
}
```

## 代码演示

### 基本用法

属性 `start` 和 `end` 指定开始数字和结束数字

```html
<iny-count-to start="{{100}}" end="{{1000}}" />
```

### 指定过渡时间

属性 `duration` 指定过渡时间

```html
<iny-count-to start="{{100}}" end="{{1000}}" duration="{{2000}}"
/>
```

### 指定小数位

属性 `decimal` 指定小数位

```html
<iny-count-to start="{{100}}" end="{{1000}}" decimal="{{2}}" />
```

### 前缀和后缀

属性 `prefix` 和 `suffix` 指定前缀和后缀

```html
<iny-count-to start="{{100}}" end="{{1000}}" prefix="¥" suffix="rmb"/>
```

### 自定义UI

通过自定义class `custom-class` 自定义样式

```html
<iny-count-to start="{{100}}" end="{{1000}}" custom-class="count-to"/>
```

```css
.count-to {
  font-size: 18px;
  color: red;
}
```

### 手动控制

```html
  <view class="padding">
    <iny-count-to
      start="{{100}}"
      end="{{1000}}"
      prefix="¥"
      suffix="rmb"
      decimal="{{2}}"
      auto-start="{{false}}"
      custom-class="count-to"
      class="control-count-to"
      />
  </view>
  <iny-button type="theme" size="small" inline bind:click="start">开始</iny-button>
  <iny-button type="info" size="small" inline bind:click="pause">暂停</iny-button>
  <iny-button type="success" size="small" inline bind:click="reset">重置</iny-button>
```

```js
page({
  start () {
    const countTo = this.selectComponent('.control-count-to')
    countTo.start()
  },

  pause () {
    const countTo = this.selectComponent('.control-count-to')
    countTo.pause()
  },

  reset () {
    const countTo = this.selectComponent('.control-count-to')
    countTo.reset()
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
| start | 开始值 | *number* | `0` | - |
| end | 结束值 | *number* | `0` | - |
| duration | 时间 | *number* | `1000` | - |
| auto-start | 是否自动开始倒计时 | *boolean* | `true` | - |
| decimal | 小数位 | *number* | `0` | - |
| prefix | 前缀 | *string* | - | - |
| suffix | 后缀 | *string* | - | - |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| finish | 倒计时结束时触发 | - |

### 方法

通过 selectComponent 可以获取到 CountTo 实例并调用实例方法

| 方法名 | 参数 | 返回值 | 介绍 |
|------|------|------|------|
| start | - | - | 开始倒计时 |
| pause | - | - | 暂停倒计时 |
| reset | - | - | 重设倒计时，若`auto-start`为`true`，重设后会自动开始倒计时 |
