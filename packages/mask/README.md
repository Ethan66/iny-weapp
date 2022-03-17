# Mask 蒙层

### 引入

在`app.json`或`index.json`中引入组件

```json
"usingComponents": {
  "iny-mask": "path/to/iny-weapp/dist/mask/index"
}
```

## 代码演示

### 基础用法

使用 mask 组件，可以提供一个蒙层，默认背景颜色值为 rgba(0, 0,0, .8), 可以修改 common/styls/var.scss 中的 $color-mask 的值

```html
<iny-mask visible="{{ true }}" />
```

### 透明蒙层

mask 属性可以指定是否为透明 蒙层, 默认为 true, false 可以取消蒙层颜色

```html
<iny-mask visible="{{ true }}" mask="{{ false }}" />
```

### 自定义背景色

color 属性可以指定 mask 的背景颜色，提供自定义的功能

```html
<iny-mask visible="{{ true }}" mask="{{ false }}" color="rgba(0, 0, 0, 1)" />
```

### 自定义层级

z-index 属性可以指定 mask 的层级，提供自定义的功能

```html
<iny-mask visible="{{ true }}" mask="{{ false }}" color="rgba(0, 0, 0, 1)" z-index="1000" />
```


### Props

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| visible | 是否展示组件 | `Boolean` | `true` |
| mask | 是否为透明蒙层  | `Boolean` | `false` |
| color | 自定义背景颜色 | `String` | `rgba(0, 0,0, .8)` |
| z-index | 自定义层级 | `Number` | `99` |

### 外部样式类

| 类名 | 说明 |
|-----------|-----------|
| custom-class | 根节点样式类 |
