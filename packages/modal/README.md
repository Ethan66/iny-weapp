# modal 弹出框

### 介绍

`modal` 组件支持函数调用和组件调用两种形式

### 引入

在`app.json`或`index.json`中引入组件

```json
"usingComponents": {
  "iny-modal": "path/to/iny-weapp/dist/modal/index"
}
```

## 代码演示

### 消息提示

用于提示一些消息，只包含一个确认按钮

```html
<iny-modal id="iny-modal" />
```

```javascript
import Modal from 'path/to/iny-weapp/dist/modal/modal';

Modal.alert({
  title: '系统提示',
  text: '你被发现了'
}).then(res => {
  console.log('close')
})

```

### 确认弹窗

用于确认消息，包含取消和确认按钮

```javascript
Modal.confirm({
  title: '系统提示',
  text: '你可以选择？'
}).then(res => {
  console.log('确认关闭')
}).catch(() => {
  console.log('取消关闭')
})
```

### 自定义关闭函数

设置`onConfirm` 和 `onCancel` 属性来自定义关闭函数，自定义后，`.then` 和 `.catch` 函数不会被调用

```javascript
Modal.confirm({
  title: '系统提示',
  text: '你可以选择？',
  onConfirm () {
    console.log('会执行, 确认')
  },
  onCancel () {
    console.log('会执行, 取消')
  }
}).then(res => {
  console.log('不会执行')
}).catch(() => {
  console.log('不会执行')
})
```

### 异步关闭

属性 `async` 时，可以异步关闭弹窗，关闭方法有三种

1. 通过 `Modal.close()` 方法关闭
2. `.then` 和 `.catch` 函数中的第一个参数，为关闭函数, 调用改函数即可
3. 自定义`onConfirm` 和 `onCancel`时，自定义函数的第一个参数为关闭函数

```js
// 1
Modal.close()

// 2
Modal({
  title: '系统提示',
  text: '待会儿关闭',
  async: true
}).then(done => {
  setTimeout(() => {
    done()
  }, 1000)
}).catch(done => {
  setTimeout(() => {
    done()
  }, 1000)
})

// 2
Modal({
  title: '系统提示',
  text: '待会儿关闭',
  async: true,
  onConfirm (done) {
    done()
    console.log('会执行, 确认')
  },
  onCancel (done) {
    done()
    console.log('会执行, 取消')
  }
})
```

### 组件调用

`iny-modal` 组件通过组件调用时，和其他组件没有任何区别

```html
<iny-modal
 visible="{{visible}}"
 title="组件调用"
 text="左边跟我画条龙，右边跟我画条虫"
 bind:close="onClose"
 bind:confirm="selfConfirm"
 bind:cancel="selfCancel"
/>
```

### 组件调用、自定义

`iny-modal` 组件通过组件调用时，可以使用 `slot`

```html
<iny-modal
 visible="{{visible2}}"
 title="自定义"
 bind:close="onClose"
 bind:confirm="selfConfirm"
 bind:cancel="selfCancel"
>
  <image src="https://fx.inyoumall.com/admin/goods/picture/2019-10-11/a9b6c4f2b8edaa10.jpeg" />
</iny-modal>
```

### 微信开放能力

在使用微信开放能力时，函数调用只能调起相关功能，但是不能监听到子组件事件派发，所以，函数调用时，`open-type` 只能用 `share`，不需要接受回调的类型,
`getUserInfo` 类似需要组件调用

### 方法

| 方法名 | 参数 | 返回值 | 介绍 |
|-----------|-----------|-----------|-------------|
| Modal | `options` | `Promise` | 展示弹窗 |
| Modal.alert | `options` | `Promise` | 展示消息提示弹窗 |
| Modal.confirm | `options` | `Promise` | 展示消息确认弹窗 |
| Modal.close | - | `void` | 关闭弹窗 |

### Options

通过函数调用 `Modal` 时，支持传入以下选项：

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| title | 标题 | `String` | - |
| text | 内容 | `String` | - |
| align | 内容对齐方式，可选值为`left` `right` | `String` | `center` |
| zIndex | z-index 层级 | `Number` | `100` |
| confirm | 是否展示确认按钮 | `Boolean` | `true` |
| cancel | 是否展示取消按钮 | `Boolean` | `false` |
| confirmText | 确认按钮的文案 | `String` | `确认` |
| cancelText | 取消按钮的文案 | `String` | `取消` |
| confirmType | 确认按钮的类型，具体使用参考 button 组件的 type | `String` | `theme` |
| cancelType | 取消按钮的类型，具体使用参考 button 组件的 type | `String` | `primary` |
| closeOnClickOverlay | 点击蒙层时是否关闭弹窗 | `Boolean` | `false` |
| async | 是否异步关闭弹窗，开启后需要手动控制弹窗的关闭 | `Boolean` | `false` |
| transition | 动画名称，可选值为`fade` `none` | `String` | `scale` |
| confirmOpenType | 确认按钮的微信开放能力，具体支持可参考 [微信官方文档](https://mp.weixin.qq.com/debug/wxadoc/dev/component/button.html) | `String` | - |
| cancelOpenType | 确认按钮的微信开放能力，具体支持可参考 [微信官方文档](https://mp.weixin.qq.com/debug/wxadoc/dev/component/button.html) | `String` | - |

使用`confirmOpenType` 或 `cancelOpenType`后，支持以下选项, 左右按钮同时只能支持一个使用 `openType`

| 参数 | 说明 | 类型 | 默认值 | open-type |
|-----------|-----------|-----------|-------------|-------------|
| appParameter | 打开 APP 时，向 APP 传递的参数 | `String` | - | `launchApp` |
| lang | 指定返回用户信息的语言，zh_CN 简体中文，<br>zh_TW 繁体中文，en 英文 | `String` | `zh_CN` | `getUserInfo` |
| sessionFrom | 会话来源 | `String` | - | `contact` |
| businessId | 客服消息子商户 id | `Number` | - | `contact` |
| sendMessageTitle | 会话内消息卡片标题 | `String` | 当前标题 | `contact` |
| sendMessagePath | 会话内消息卡片点击跳转小程序路径 | `String` | 当前分享路径 | `contact` |
| sendMessageImg | sendMessageImg | `String` | 截图 | `contact` |
| showMessageCard | 显示会话内消息卡片 | `String` | `false` | `contact` |

### Props

通过组件调用 `modal` 时，支持以下 API：

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| visible | 是否弹出 | `Boolean` | `false` |
| title | 标题 | `String` | - |
| text | 内容 | `String` | - |
| align | 内容对齐方式，可选值为`left` `right` | `String` | `center` |
| z-index | z-index 层级 | `Number` | `100` |
| confirm | 是否展示确认按钮 | `Boolean` |  `true` |
| cancel | 是否展示取消按钮 | `Boolean` |  `false` |
| confirm-text | 确认按钮的文案 | `String` |  `确认` |
| cancel-text | 取消按钮的文案 | `String` | `取消` |
| close-on-click-overlay | 点击蒙层时是否关闭弹窗 | `Boolean` | `false` |
| async | 是否异步关闭弹窗，开启后需要手动控制弹窗的关闭 | `Boolean` | `false` |
| transition | 动画名称，可选值为`fade` | `String` | `scale` |
| confirm-open-type | 确认按钮的微信开放能力，具体支持可参考 [微信官方文档](https://mp.weixin.qq.com/debug/wxadoc/dev/component/button.html) | `String` | - |
| cancel-open-type | 取消按钮的微信开放能力，具体支持可参考 [微信官方文档](https://mp.weixin.qq.com/debug/wxadoc/dev/component/button.html) | `String` | - |

使用`confirm-open-type` 或 `cancel-open-type`后，支持以下 API：

| 参数 | 说明 | 类型 | 默认值 | open-type |
|-----------|-----------|-----------|-------------|-------------|
| app-parameter | 打开 APP 时，向 APP 传递的参数 | `String` | - | `launchApp` |
| lang | 指定返回用户信息的语言，zh_CN 简体中文，<br>zh_TW 繁体中文，en 英文 | `String` | `zh_CN` | `getUserInfo` |
| session-from | 会话来源 | `String` | - | `contact` |
| business-id | 客服消息子商户 id | `Number` | - | `contact` |
| send-message-title | 会话内消息卡片标题 | `String` | 当前标题 | `contact` |
| send-message-path | 会话内消息卡片点击跳转小程序路径 | `String` | 当前分享路径 | `contact` |
| send-message-img | sendMessageImg | `String` | 截图 | `contact` |
| show-message-card | 显示会话内消息卡片 | `String` | `false` | `contact` |

### Events

| 事件 | 说明 | 回调参数 |
|-----------|-----------|-----------|
| bind:close | 弹窗关闭时触发 | event.detail: 触发关闭事件的来源，<br>枚举为`confirm`,`cancel`,`mask` |
| bind:confirm | 点击确认按钮时触发 | - |
| bind:cancel | 点击取消按钮时触发 | - |
| bind:opentype | 按钮具有 open-type 时，点击不会触发对应的事件，只有 bind:opentype | event.detail: 对应 openType 的值 |
| bind:getuserinfo | 点击确认按钮时，会返回获取到的用户信息，<br>从返回参数的 detail 中获取到的值同 wx.getUserInfo | - |
| bind:contact | 客服消息回调 | - |
| bind:getphonenumber | 获取用户手机号回调 | - |
| bind:error | 当使用开放能力时，发生错误的回调 | - |
| bind:opensetting | 在打开授权设置页后回调 | - |
