# Button 按钮组件

### 引入

```json
"usingComponents": {
  "iny-button": "/iny-weapp/dist/button/index"
}
```

## 代码实现

### 按钮类型

属性 `type` 支持`default`、`theme`, `theme-sub`, `primary`、`info`、`warning`、`danger`七种类型，默认为`theme`

```html
<iny-button type="default">默认按钮</iny-button>
<iny-button type="primary">兼容主要按钮</iny-button>
<iny-button type="theme">主题按钮</iny-button>
<iny-button type="theme-sub">二级主题按钮</iny-button>
<iny-button type="info">信息按钮</iny-button>
<iny-button type="warning">错误按钮</iny-button>
<iny-button type="danger">警告按钮</iny-button>
```

### 朴素按钮

属性 `plain` 将按钮设置为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色

```html
<iny-button plain type="theme" inline>主题按钮</iny-button>
<iny-button plain type="theme-sub" inline>二级主题按钮</iny-button>
<iny-button plain type="info" inline>信息按钮</iny-button>
<iny-button plain type="warning" inline>错误按钮</iny-button>
<iny-button plain type="danger" inline>警告按钮</iny-button>
```

### 1 像素边框按钮

属性 `hairline` 可以开启 0.5px 边框

```html
<iny-button plain hairline type="theme" inline>主题按钮</iny-button>
<iny-button plain hairline type="theme-sub" inline>二级主题按钮</iny-button>
<iny-button plain hairline type="info" inline>信息按钮</iny-button>
<iny-button plain hairline type="warning" inline>错误按钮</iny-button>
<iny-button plain hairline type="danger" inline>警告按钮</iny-button>
```

### 禁用按钮

属性 `disabled`可以禁用按钮，此时按钮不可点击，但是会派发 disabledClick 事件，供开发者使用

```html
<iny-button disabled type="theme" inline>禁用状态</iny-button>
<iny-button disabled type="theme-sub" inline>禁用状态</iny-button>
```

### 加载状态

属性 `loading` 可以用来显示加载中的状态，`loadingType` 用来指定 `Loading` 组件 `type`, `loadingText` 用来指定加载中按钮的文本, `loadingSize` 用来指定 `Loading` 组件的 size 大小

```html
<iny-button type="theme" loading loadingType='spinner' inline></iny-button>
<iny-button type="theme-sub" loading loadingSize='18' loadingText="加载中" inline></iny-button>
```

### 按钮形状

属性 `round` 可以指定按钮的形状

```html
<iny-button type="theme" inline>方形按钮</iny-button>
<iny-button type="info" circle inline>圆形按钮</iny-button>
```

### 行块按钮

属性 `inline` 可以指定按钮是否为行内元素，默认为 `display: block;`, 使用 `inline` 可以更改为 `display: inline-block;`

```html
<iny-button type="theme" inline>行内按钮</iny-button>
<iny-button type="info">块级按钮</iny-button>
```

### 按钮尺寸

属性 `size` 用来指定按钮大小 ，取值有 `large`、`normal`、`small`、`mini`四种尺寸，默认为`normal`

```html
<iny-button type="info" size="normal">普通按钮</iny-button>
<iny-button type="info" size="small">小型按钮</iny-button>
<iny-button type="info" size="mini">迷你按钮</iny-button>
<iny-button type="theme" size="large">大号按钮</iny-button>
```

### 自定义颜色

属性 `color`属性可以自定义按钮的颜色

```html
<iny-button color="blue" type="info" inline>普通按钮</iny-button>
 <iny-button color="#786559" plain type="info" inline>普通按钮</iny-button>
```

### Properties

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| type | 按钮类型，可选值为`theme` `theme-sub` `primary` `info` `warning` `danger` | `String` | `default` |
| size | 按钮尺寸，可选值为 `normal` `large` `small` `mini` | `String` | `normal` |
| plain | 是否为朴素按钮 | `Boolean` | `false` |
| inline | 是否为行内元素 | `Boolean` | `false` |
| round | 是否为圆形按钮 | `Boolean` | `true` |
| disabled | 是否禁用按钮 | `Boolean` | `false` |
| hairline | 是否使用 0.5px 边框 | `Boolean` | `false` |
| loading | 是否显示为加载状态 | `Boolean` | `false` |
| loading-text | 加载状态提示文字 | `String` | - |
| loading-size | 加载图标大小 | `String` | `20px` |
| loading-type | 加载图标类型 | `String` | `circular` |
| open-type | 微信开放能力，具体支持可参考 [微信官方文档](https://mp.weixin.qq.com/debug/wxadoc/dev/component/button.html) | `String` | - |
| app-parameter | 打开 APP 时，向 APP 传递的参数 | `String` | - |
| lang | 指定返回用户信息的语言，zh_CN 简体中文，<br>zh_TW 繁体中文，en 英文 | `String` | `en` |
| session-from | 会话来源 | `String` | - |
| business-id | 客服消息子商户 id | `Number` | - |
| send-message-title | 会话内消息卡片标题 | `String` | 当前标题 |
| send-message-path | 会话内消息卡片点击跳转小程序路径 | `String` | 当前分享路径 |
| send-message-img | sendMessageImg | `String` | 截图 |
| show-message-card | 显示会话内消息卡片 | `String` | `false` |

### Events

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| bind:click | 点击按钮，且按钮状态不为加载、禁用、使用 openType 时触发 | - |
| bind:disabledClick | 点击按钮，按钮在禁用状态下会触发 | - |
| bind:openType | 点击按钮，按钮有openType情况下会触发，同时 e.detail为 该 openType | - |
| bind:getUserInfo | 用户点击该按钮时，会返回获取到的用户信息，<br>从返回参数的 detail 中获取到的值同 wx.getUserInfo | - |
| bind:contact | 客服消息回调 | - |
| bind:getPhoneNumber | 获取用户手机号回调 | - |
| bind:error | 当使用开放能力时，发生错误的回调 | - |
| bind:openSetting | 在打开授权设置页后回调 | - |
| bind:launchApp | 在打开App的时候，会触发 | - |

### 外部样式类

| 类名 | 说明 |
|-----------|-----------|
| custom-class | 根节点样式类 |
