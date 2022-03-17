# Cell 单元格

## 引入

在`app.json`或`index.json`中引入组件

```json
"usingComponents": {
  "iny-cell": "path/to/iny-weapp/dist/cell/index",
  "iny-cell-group": "path/to/iny-weapp/dist/cell-group/index"
}
```

## 代码演示

### 基础用法

`Cell`可以单独使用，也可以与`CellGroup`搭配使用。`CellGroup`可以为`Cell`提供上下外边框。

```html
<iny-cell-group>
  <iny-cell title="单元格" value="内容" />
  <iny-cell title="单元格" value="内容" label="描述信息" />
</iny-cell-group>
```

### 单元格大小

通过`size`属性可以控制单元格的大小

```html
<iny-cell title="单元格" value="内容" />
<iny-cell title="单元格" value="内容" label="描述信息" />
```

### 展示图标

通过`icon`属性在标题左侧展示图标

```html
<iny-cell title="单元格" icon="location-o" />
```

### 展示箭头

传入`is-link`属性则会在右侧显示箭头

```html
<iny-cell title="单元格" is-link />
<iny-cell title="单元格" is-link value="内容" />
<iny-cell title="单元格" is-link value="内容" />
```

### 页面跳转

可以通过`url`属性进行页面跳转，通过`link-type`属性控制跳转类型

```html
<iny-cell
  is-link
  title="单元格"
  link-type="navigateTo"
  url="/pages/dashboard/index"
/>
```

### 分组标题

通过`CellGroup`的`title`属性可以指定分组标题

```html
<iny-cell-group title="分组1">
  <iny-cell title="单元格" value="内容" />
</iny-cell-group>
<iny-cell-group title="分组2">
  <iny-cell title="单元格" value="内容" />
</iny-cell-group>
```

### 高级用法

如以上用法不能满足你的需求，可以使用对应的插槽来自定义显示的内容

```html
<iny-cell value="内容" icon="shop-o" is-link>
  <view slot="title">
    <view class="iny-cell-text">单元格</view>
    <iny-tag type="danger">标签</iny-tag>
  </view>
</iny-cell>
<iny-cell title="单元格">
  <iny-icon slot="right-icon" name="search" class="custom-icon" />
</iny-cell>
```

### CellGroup API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| title | 分组标题 | `String` | `-` |
| border | 是否显示外边框 | `Boolean` | `true` |

### CellGroup 外部样式类

| 类名 | 说明 |
|-----------|-----------|
| custom-class | 根节点样式类 |

### Cell API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| icon | 左侧图标名称或图片链接，可选值见 Icon 组件 | `String` | - |
| title | 左侧标题 | `String | Number` | - |
| value | 右侧内容 | `String | Number` | - |
| label | 标题右侧的描述信息 | `String` | - |
| border | 是否显示下边框 | `Boolean` | `true` |
| url | 跳转链接 | `String` | - |
| link-type | 链接跳转类型，可选值为 `redirectTo` `switchTab` `reLaunch` | `String` | `navigateTo` |
| clickable | 是否开启点击反馈 | `Boolean` | `false` |
| is-link | 是否展示右侧箭头并开启点击反馈 | `Boolean` | `false` |

### Cell Event

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| bind:click | 点击单元格时触发 | - |

### Cell Slot

| 名称 | 说明 |
|-----------|-----------|
| - | 自定义`value`显示内容，如果设置了`value`属性则不生效 |
| title | 自定义`title`显示内容，如果设置了`title`属性则不生效 |
| label | 自定义`label`显示内容，需要设置 `use-label-slot`属性 |
| icon | 自定义`icon`显示内容，如果设置了`icon`属性则不生效 |
| right-icon | 自定义右侧按钮，默认是`arrow`，如果设置了`is-link`属性则不生效 |

### Cell 外部样式类

| 类名 | 说明 |
|-----------|-----------|
| custom-class | 根节点样式类 |
| title-class | 标题样式类 |
| label-class | 描述信息样式类 |
| value-class | 右侧内容样式类 |
