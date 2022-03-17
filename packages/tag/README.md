# Tag 标签

### 引入

在`app.json`或`index.json`中引入组件

```json
"usingComponents": {
  "iny-tag": "path/to/iny-weapp/dist/tag/index"
}
```

## 代码演示

### 基础用法

属性 `type`属性控制标签颜色，默认为主题色

```html
<iny-tag>标签</iny-tag>
<iny-tag type="theme">标签</iny-tag>
<iny-tag type="theme-sub">标签</iny-tag>
<iny-tag type="success">标签</iny-tag>
<iny-tag type="danger">标签</iny-tag>
<iny-tag type="warning">标签</iny-tag>
<iny-tag type="blank">新人首单</iny-tag>
```

### 空心按钮

属性`plain`属性设置为空心样式

```html
<iny-tag type="theme" plain>标签</iny-tag>
<iny-tag type="theme-sub" plain>标签</iny-tag>
<iny-tag type="success" plain>标签</iny-tag>
<iny-tag type="danger" plain>标签</iny-tag>
<iny-tag type="warning" plain>标签</iny-tag>
<iny-tag type="blank" plain>新人首单</iny-tag>
```

### 方形按钮

属性`round`设置是否为 圆角样式

```html
<iny-tag round="{{false}}">标签</iny-tag>
<iny-tag round="{{false}}" type="primary">标签</iny-tag>
<iny-tag round="{{false}}" type="success">标签</iny-tag>
<iny-tag round="{{false}}" type="danger">标签</iny-tag>
<iny-tag round="{{false}}" type="warning">标签</iny-tag>
```

### 标记样式

通过`mark`设置为标记样式(半圆角)

```html
<iny-tag mark type="primary">标签</iny-tag>
<iny-tag mark type="success">标签</iny-tag>
<iny-tag mark type="danger">标签</iny-tag>
<iny-tag mark type="warning">标签</iny-tag>
```

### 自定义大小

```html
<iny-tag type="theme" size="20px">新人首单</iny-tag>
<iny-tag type="theme" size="10px">新人首单</iny-tag>
```

### 自定义颜色

```html
<iny-tag type="theme" color="blue">新人首单</iny-tag>
<iny-tag color="#FFF1D6" text-color="#FF531F" size="10px" >用红包再省49.99元</iny-tag>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|-----------|-----------|-----------|-------------|-------------|
| type | 类型，可选值为`theme` `theme-sub` `success` `danger` `warning` `blank` | *string* | `theme` | - |
| size | 大小 | *string* | `20px` | - |
| color | 标签颜色 | *string* | - | - |
| plain | 是否为空心样式 | *boolean* | `false` | - |
| round | 是否为圆角样式 | *boolean* | `false` | - |
| mark | 是否为标记样式 | *boolean* | `false` | - |
| text-color | 文本颜色，优先级高于`color`属性 | *string* | `white` | - |

### Slot

| 名称 | 说明 |
|-----------|-----------|
| - | 自定义 Tag 显示内容 |

### 外部样式类

| 类名 | 说明 |
|-----------|-----------|
| custom-class | 根节点样式类 |
