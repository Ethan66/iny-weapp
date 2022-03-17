# Upload 上传文件

### 引入

在`app.json`或`index.json`中引入组件

```json
"usingComponents": {
  "iny-upload": "path/to/iny-weapp/dist/upload/index"
}
```

### 提示

1. `upload` 组件并不会将图片上传服务器，需要开发者自行使用 `wx.uploadFile` 将图片上传，`upload` 会返回图片上传所需要的地址
2. 每个 `upload` 组件建议提供一个 name 属性，用来多个 `upload` 共用上传函数时区分 `upload`

## 代码演示

### 基础预览用法

属性 `previewImage` 和 `previewSize` 分别控制是否预览图片和 预览图片的尺寸大小, `mode` 属性为预览图片的属性,具体使用方法参考[微信开发者文档-image](https://developers.weixin.qq.com/miniprogram/dev/component/image.html)

#### wxml 示例

```html
<iny-upload
  name="1"
  file-list="{{fileList1}}"
  bind:preview="onPreview"
  bind:upload="onUpload"
  bind:remove="onRemove"
/>
```

#### js 示例

```js
{
  data: {
    fileList: []
  },
  onPreview ({ detail }) {
  console.log(detail)
  },
  onUpload ({ detail }) {
    this.setData({
      [`fileList${detail.name}`]: this.data[`fileList${detail.name}`].concat(detail.files)
    })
    Toast(`上传函数执行, ${detail.name} `)
  },
  onRemove ({ detail }) {
    Toast(`删除第${detail.index}项图片`)
  }
}
```

### 限制属性

属性 `sizeType`、`sourceType`、`maxSize`、`maxCount` 都是用来限制上传行为的，`sizeType`、`sourceType` 的具体使用参考[微信开发者文档-chooseImage](https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.chooseImage.html)

```html
<iny-upload
  name="3"
  file-list="{{fileList3}}"
  source-type="{{['album']}}"
  size-type="{{['original']}}"
  bind:preview="onPreview"
  bind:upload="onUpload"
  bind:remove="onRemove"
/>
```

```js
{
  data: {
    fileList: []
  },
  onOver ({ detail }) {
    Toast(`图片超出限制，图片大小为 ${detail.size}, 限制大小为 ${detail.limit}`)
  }
}
```

### 限制上传数量

通过`max-count`属性可以限制上传文件的数量，上传数量达到限制后，会自动隐藏上传区域

```html
<iny-upload file-list="{{ fileList }}" max-count="2" bind:after-read="afterRead" />
```

### 自定义上传样式

将`use-slot`属性设置为`true`，通过插槽可以自定义上传区域的样式

```html
<iny-upload
  name="6"
  use-slot
  bind:upload="onUpload"
>
  <iny-button>上传图片</iny-button>
</iny-upload>
```

### 上传前校验

将`before-upload`属性设置为`true`，然后绑定 `before-upload` 事件可以在上传前进行校验，调用 `success` 方法表示校验通过

```html
<iny-upload
  name="5"
  file-list="{{fileList5}}"
  bind:upload="onUpload"
  bind:before-upload="onBeforeUpload"
  before-upload
/>
```

```js
{
  data: {
    fileList: []
  },
  onBeforeUpload ({ detail }) {
    Toast('上传前钩子函数执行，3m 后开始上传')

    setTimeout(() => {
      detail.success()
    }, 3000)
  }
}
```

### Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|-----------|-----------|-----------|-----------|-----------|
| name | 标识符，可以在回调函数的第二项参数中获取 | _string \| number_ | - |
| preview-size | 预览图和上传区域的尺寸，默认单位为`px` | _string \| number_ | `80px` |
| preview-image | 是否在上传完成后展示预览图 | _boolean_ | `true` |
| count | 每次上传图片可选数量 | _number_ | `9` |
| disabled | 是否禁用文件上传 | _boolean_ | `false` |
| size-type | 图片选取方法，原图或者压缩图片 | _string[]_ | `['original', 'compressed']` |
| source-type | 图片选择来源，相册或者拍照 | _string[]_ | `['album', 'camera']` |
| max-size | 文件大小限制，单位为`byte` | _number_ | - |
| max-count | 文件上传数量限制 | _number_ | `999` |
| upload-text | 上传区域文字提示 | _string_ | - |
| mode | 预览图裁剪模式，可选值参考小程序`image`组件的`mode`属性 | _string_ | `scaleToFill` |
| before-upload | 是否使用长传前钩子函数 | _boolean_ | `false` |
| use-slot | 是否自定义上传样式 | _boolean_ | `false` |

### Slot

| 名称 | 说明 |
| ---- | -------------------------------- |
| - | 自定义上传样式，用法见上面的例子 |

### Event

| 事件名 | 说明 | 参数 |
| ------------------ | -------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| bind:before-upload | 文件读取前的回调函数，绑定事件的同时需要将`before-upload`属性设置为`true` | `event.detail.files`: 当前读取的文件数组,`event.detail.success`: 调用该函数，程序继续执行到 `upload` |
| bind:upload | 文件读取完成后的回调函数,实际上传函数在这里执行 | `event.detail.files`: 当前读取的文件数组 |
| bind:over | 文件超出大小限制的回调函数 | `event.detail.size:`: 校验未通过的文件实际大小, `event.detail.limit:`: 传入的 `max-size` 的值 |
| bind:preview | 点击预览图片的回调函数 | `event.detail.index`: 点击图片的序号值 |
| bind:remove | 删除图片的回调函数 | `event.detail.index`: 删除图片的序号值 |
