# SwipeCell 滑动单元格

### 引入

在`app.json`或`index.json`中引入组件

```json
"usingComponents": {
  "iny-swipe-cell": "path/to/iny-weapp/dist/swipe-cell/index"
}
```

## 代码演示

### 简单使用

```html
<iny-swipe-cell
 right-width="{{ 65 }}"
 left-width="{{ 65 }}"
>
  <view
    slot="left"
    class="left"
  >选择
  </view>
  <iny-cell-group>
    <iny-cell
      title="单元格"
      value="内容"
    />
  </iny-cell-group>

  <view
    slot="right"
    class="right"
  />
</iny-swipe-cell>
```

### 单边按钮

```html
<iny-swipe-cell right-width="{{ 130 }}">
  <iny-cell-group>
    <iny-cell
      title="单元格"
      value="内容"
    />
  </iny-cell-group>
  <view
    slot="right"
    class="right2"
  >
    <view class="btn add">添加</view>
    <view class="btn">删除</view>
  </view>
</iny-swipe-cell>
```

### 异步关闭

```html
<iny-swipe-cell
 right-width="{{ 65 }}"
 left-width="{{ 65 }}"
 async
 bind:close="onClose"
>
  <view slot="left" class="left">选择
  </view>
  <iny-cell-group>
    <iny-cell title="单元格" value="内容" />
  </iny-cell-group>

  <view slot="right" class="right">删除
  </view>
</iny-swipe-cell>
```

```js
Page({
  onClose ({ detail: { position, instance } }) {
    wx.showToast({
      title: '点击 + ' +  position,
      icon: 'none'
    })

    // 手动调用关闭
    instance.close()

  }
});
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| name | 标识符，可以在 close 事件的参数中获取到 | *string \| number* | - | - |
| left-width | 左侧滑动区域宽度 | *number* | `0` | - |
| right-width | 右侧滑动区域宽度 | *number* | `0` | - |
| async | 是否异步关闭 | *boolean* | `false` | - |
| disabled | 是否禁用滑动 | *boolean* | `false` | - |

### Slot

| 名称 | 说明 |
|------|------|
| - | 自定义显示内容 |
| left | 左侧滑动内容 |
| right | 右侧滑动内容 |

### Events

| 事件名 | 说明 | 参数 |
|------|------|------|
| click | 点击时触发 | 关闭时的点击位置 (`left` `right` `cell`) |
| close | 点击时触发 | 整体是一个 Object，包含 `position`, `instance` 两个 key。 |

### close 参数

| 参数 | 类型 | 说明 |
|------|------|------|
| position | *string* | 关闭时的点击位置 (`left` `right` `cell` `outside`) |
| instance | *object* | SwipeCell 实例 |

### 方法

通过 selectComponent 可以获取到 SwipeCell 实例并调用实例方法

| 方法名 | 参数 | 返回值 | 介绍 |
|------|------|------|------|
| open | position: `left | right` | - | 打开单元格侧边栏 |
| close | - | - | 收起单元格侧边栏 |
