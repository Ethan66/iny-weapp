# Collapse 折叠面板

### 引入

在`app.json`或`index.json`中引入组件

```json
"usingComponents": {
  "iny-collapse": "path/to/iny-weapp/dist/collapse/index",
  "iny-collapse-item": "path/to/iny-weapp/dist/collapse-item/index"
}
```

## 代码演示

### 简单使用

属性 `value` 控制展开的项, 不是手风琴模式的情况下，`value` 是一个数组，里面每一项都是 `iny-collapse-item` 的 `name` 值

```html
<iny-collapse
 value="{{value}}"
 bind:change="onChange"
>
  <iny-collapse-item title="大田後生仔" name='1'>
    做人一辈子 快乐没几天 一条大路分两边 随你要走哪一边 不怕不怕就不怕 我是年轻人
  </iny-collapse-item>

  <iny-collapse-item title="野狼disco" name='2'>
    全场动作必须跟我整齐划一 来左边儿 跟我一起画个龙 在你右边儿 画一道彩虹（走起） 来左边儿 跟我一起画彩虹
  </iny-collapse-item>
</iny-collapse>
```

``` javascript
Page({
  data: {
    value: ['1']
  },
  onChange({ detail }) {
    this.setData({
      value: detail
    });
  }
});
```

### 禁用列

属性 `disabled` 禁用列

```html
<iny-collapse
 value="{{value2}}"
 bind:change="onChange"
 data-key="2"
>
  <iny-collapse-item title="大田後生仔" name='1'>
    做人一辈子 快乐没几天 一条大路分两边 随你要走哪一边 不怕不怕就不怕 我是年轻人
  </iny-collapse-item>

  <iny-collapse-item title="野狼disco" name='2'>
    全场动作必须跟我整齐划一 来左边儿 跟我一起画个龙 在你右边儿 画一道彩虹（走起） 来左边儿 跟我一起画彩虹
  </iny-collapse-item>

  <iny-collapse-item
    title="大田後生仔"
    name='3'
    disabled
  >
    做人一辈子 快乐没几天 一条大路分两边 随你要走哪一边 不怕不怕就不怕 我是年轻人
  </iny-collapse-item>
</iny-collapse>
```

### 手风琴

属性 `accordion` 可以设置为手风琴模式，最多展开一个面板，此时`value`为字符串格式

```html
<iny-collapse
 value="{{value}}"
 bind:change="onChange"
 accordion
>
  <iny-collapse-item title="大田後生仔" name='1'>
    做人一辈子 快乐没几天 一条大路分两边 随你要走哪一边 不怕不怕就不怕 我是年轻人
  </iny-collapse-item>

  <iny-collapse-item title="野狼disco" name='2'>
    全场动作必须跟我整齐划一 来左边儿 跟我一起画个龙 在你右边儿 画一道彩虹（走起） 来左边儿 跟我一起画彩虹
  </iny-collapse-item>
</iny-collapse>
```

``` javascript
Page({
  data: {
    value: '1'
  },
  onChange({ detail }) {
    this.setData({
      value: detail
    });
  }
});
```

### 自定义

```html
<iny-collapse
 value="{{value}}"
 bind:change="onChange"
>
  <iny-collapse-item name='1' value="歌曲">
    <view slot="title">大田後生仔</view>
    做人一辈子 快乐没几天 一条大路分两边 随你要走哪一边 不怕不怕就不怕 我是年轻人
  </iny-collapse-item>

  <iny-collapse-item
    title="野狼disco"
    name='2'
    icon="check"
  >
    全场动作必须跟我整齐划一 来左边儿 跟我一起画个龙 在你右边儿 画一道彩虹（走起） 来左边儿 跟我一起画彩虹
  </iny-collapse-item>
</iny-collapse>
```

## API

### Collapse API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| value | 当前展开面板的 name | 非手风琴模式：*(string \| number)[]*<br>手风琴模式：*string \| number* | - | - |
| accordion | 是否开启手风琴模式 | *boolean* | `false` | - |
| border | 是否显示外边框 | *boolean* | `true` | - |

### Collapse Event

| 事件名 | 说明 | 参数 |
|------|------|------|
| change | 切换面板时触发 | activeNames: *string \| Array* |

### CollapseItem API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|------|
| name | 唯一标识符，默认为索引值 | *string \| number* | `index` | - |
| title | 标题栏左侧内容 | *string \| number* | - | - |
| icon | 标题栏左侧图标名称或图片链接，可选值见 [Icon 组件](/#/icon) | *string* | - | - |
| value | 标题栏右侧内容 | *string \| number* | - | - |
| label | 标题栏描述信息 | *string* | - | - |
| border | 是否显示内边框 | *boolean* | `true` | - |
| is-link | 是否展示标题栏右侧箭头并开启点击反馈 | *boolean* | `true` | - |
| clickable | 是否开启点击反馈 | *boolean* | `false` | - |
| disabled | 是否禁用面板 | *boolean* | `false` | - |

### CollapseItem Slot

| 名称 | 说明 |
|------|------|
| - | 面板内容 |
| value | 自定义显示内容 |
| icon | 自定义`icon` |
| title | 自定义`title` |

### Collapse 外部样式类

| 类名 | 说明 |
|-----------|-----------|
| custom-class | 根节点样式类 |

### CollapseItem 外部样式类

| 类名 | 说明 |
|-----------|-----------|
| custom-class | 根节点样式类 |
| content-class | 内容样式类 |
