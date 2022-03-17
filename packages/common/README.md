# 组件库内置样式

### 引入

在 app.wxss 中引入内置样式

```css
@import "/iny-weapp/dist/common/index.wxss";
```

### 颜色

内置一些主题颜色样式

```html
  <!-- 主题色 -->
  <view class="iny-color-theme">此容器的文字颜色为主题色</view>
  <!-- 二级主题色 -->
  <view class="iny-sub-color-theme">此容器的文字颜色为二级主题色</view>
```

### 超出隐藏

当一个容器的文本内容超出容器宽度时，超出的部分会自动隐藏

```html
<!-- 一行超出隐藏 -->
<view class="iny-no-wrap">当一个容器的文本内容超出容器宽度时，超出的部分会自动隐藏</view>

<!-- 二行超出隐藏 -->
<view class="iny-no-wrap-2">当一个容器的文本内容超出容器宽度时，超出的部分会自动隐藏</view>

<!-- 三行超出隐藏 -->
<view class="iny-no-wrap-3">当一个容器的文本内容超出容器宽度时，超出的部分会自动隐藏</view>
```

### 1 像素边框

为适配不同屏幕下的绝对 1像素边框

```html
<!-- 上边框 -->
<view class="iny-hairline--top"></view>

<!-- 下边框 -->
<view class="iny-hairline--bottom"></view>

<!-- 左边框 -->
<view class="iny-hairline--left"></view>

<!-- 右边框 -->
<view class="iny-hairline--right"></view>

<!-- 上下边框 -->
<view class="iny-hairline--top-bottom"></view>

<!-- 全边框 -->
<view class="iny-hairline"></view>
```
