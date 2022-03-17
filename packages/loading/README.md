# Loading 加载

### 引入

```json
"usingComponents": {
  "iny-loading": "/iny-weapp/dist/loading/index"
}
```

## 代码演示

### Circular

```html
<iny-loading />
<iny-loading color="#fff" />
```

### Spinner

```html
<iny-loading type="spinner" />
<iny-loading type="spinner" color="#fff" />
```

### Props

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| color | 颜色 | `String` | `#000` |
| type | 类型，可选值为 `spinner` | `String` | `circular` |
| size | 大小 | `String` | `30px` |

### 外部样式类

| 类名 | 说明 |
|-----------|-----------|
| custom-class | 根节点样式类 |
