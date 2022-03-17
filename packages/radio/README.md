# Radio 单选框

### 引入

在`app.json`或`index.json`中引入组件

```json
"usingComponents": {
  "iny-radio": "path/to/iny-weapp/dist/radio/index",
  "iny-radio-group": "path/to/iny-weapp/dist/radio-group/index"
}
```

## 代码演示

### 简单使用

通过`value`绑定值当前选中项的 name

```html
<iny-radio-group
  value="{{radio}}"
  bind:change="onChange"
>
  <iny-radio
    name="A"
    custom-class="iny-radio"
  >A
  </iny-radio>
  <iny-radio
    name="B"
    custom-class="iny-radio"
  >B
  </iny-radio>
</iny-radio-group>
```

```js
Page({
  data: {
    radio: 'A',
  },

  onChange ({ detail }) {
    this.setData({
      radio: detail
    })
  }
});
```

### 方形单选框

通过`round` 来指定是否为方形, 默认为 `true`

```html
<iny-radio-group
  value="{{radio}}"
  bind:change="onChange"
>
  <iny-radio
    name="A"
    custom-class="iny-radio"
  >A
  </iny-radio>
  <iny-radio
    name="B"
    custom-class="iny-radio"
  >B
  </iny-radio>
</iny-radio-group>
```

### 禁用状态

通过`disabled`属性禁止选项切换，在`iny-radio`上设置`diabled`可以禁用单个选项

```html
<iny-radio-group
  value="{{radio}}"
  disabled
  bind:change="onChange"
>
  <iny-radio
    name="A"
    custom-class="iny-radio"
  >A
  </iny-radio>
  <iny-radio
    name="B"
    custom-class="iny-radio"
  >B
  </iny-radio>
</iny-radio-group>
```

### 自定义颜色

 ```html
<iny-radio-group
  value="{{radio}}"
  bind:change="onChange"
>
  <iny-radio
    name="A"
    checked-color="#2db7f5"
    custom-class="iny-radio"
  >A
  </iny-radio>
  <iny-radio
    name="B"
    checked-color="#2db7f5"
    custom-class="iny-radio"
  >B
  </iny-radio>
</iny-radio-group>
```

### 自定义图标

通过 `icon` 指定自定图标，具体使用参考 `icon` 组件的 `name` 属性

```html
<iny-radio-group
  value="{{radio}}"
  bind:change="onChange"
>
  <iny-radio
    name="A"
    icon="cart"
    custom-class="iny-radio"
  >A
  </iny-radio>
  <iny-radio
    name="B"
    icon="cart"
    custom-class="iny-radio"
  >B
  </iny-radio>
</iny-radio-group>
```

### 与 Cell 组件一起使用

搭配 `Cell` 和 `CellGroup`组件使用

```html
<iny-radio-group
 value="{{radio}}"
 bind:change="onGroupChange"
>
  <iny-cell-group border>
    <iny-cell
      wx:for="{{radioList}}"
      wx:key="{{item}}"
      title="{{item}}"
    >
      <iny-radio  
        custom-class="cell-value-class"
        name="{{item}}"
      />
    </iny-cell>
  </iny-cell-group>
</iny-radio-group>
```

### Radio API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| name | 标识 Radio 名称 | `String` | - |
| value | 当前选中项的 name | `any` | - |
| round | 是否为圆形单选框 | `Boolean` | `true` |
| disabled | 是否为禁用状态 | `Boolean` | `false` |
| icon| 自定义radio图标 | `String` | `check` |
| checked-color | 选中状态颜色 | `String` | `#1989fa` |

### Radio Event

| 事件名 | 说明 | 回调参数 |
|-----------|-----------|-----------|
| bind:change | 当绑定值变化时触发的事件 | 当前选中项的 name |

### Radio 外部样式类

| 类名 | 说明 |
|-----------|-----------|
| custom-class | 根节点样式类 |
| icon-class | 图标样式类 |
| label-class | 描述信息样式类 |

### RadioGroup API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| name | 在表单内提交时的标识符 | `String` | - |
| value | 当前选中项的 name | `any` | - |
| disabled | 是否禁用所有单选框 | `Boolean` | `false` |

### RadioGroup Event

| 事件名 | 说明 | 回调参数 |
|-----------|-----------|-----------|
| bind:change | 当绑定值变化时触发的事件 | 当前选中项的 name |
