# Toast 轻提示

### 引入

此组件是针对 wx 原生方法进行的封装, 具体使用方法可以参考 [wx.showToast](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showToast.html), 无需注册

## 代码演示

### 文字提示

```javascript
import Toast from 'path/to/iny-weapp/dist/toast/toast';

Toast('此时 title 文本最多可显示两行');
```

### 状态通知

```javascript
 Toast.success('你成功逃脱了')

 //  fail 并没有图标显示，原因为 wx.showToast icon 没有 fail 类型、 image 不支持传入非本地图片
 //  如需要图标, 可以重写改方法传入本地图片或使用高级用法 
 Toast.fail('你被捕获了')
```

### 加载中

```javascript
  const toast = Toast.loading('加载中...')

  setTimeout(() => {
    toast.close()
    // 或者 Toast.closeLoading() 皆可关闭
  }, 3000)
```

### 高级用法

```javascript
  Toast({
    title: '你被发现了',
    duration: 4000,
    icon: 'loading',
    mask: false,
    success: function () {
      console.log('调用成功')
    }
  })

  setTimeout(() => {
    Toast.close()
  }, 3000)
```

## API

### 方法

| 方法名 | 参数 | 返回值 | 介绍 |
|-----------|-----------|-----------|-------------|
| Toast | `options | message` | - | 展示提示 |
| Toast.loading | `options | message` | `object` | 展示加载提示 |
| Toast.success | `options | message` | - | 展示成功提示 |
| Toast.fail | `options | message` | - | 展示失败提示 |
| Toast.close | - | - | 关闭提示 |
| Toast.closeLoading | - | - | 关闭loading |

### Options

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|-----------|-----------|-----------|-------------|-------------|
| title | 提示内容 | *string* | - | - |
| icon | 图标(loading 无效) | *string* | `success` | - |
| image | 图片,自定义图标的本地路径，image 的优先级高于 icon(loading 无效) | *string* | `''` | - | - |
| mask | 是否显示遮罩层, 防止触摸穿透 | *boolean* | `false` | - |
| duration | 通知提示时间(loading 无效, 只有主动调用 Toast.closeLoading 或者 toast.close() 才会关闭) | *number* | `1500` |-|
