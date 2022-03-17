# Checkbox 复选框

### 引入

在`app.json`或`index.json`中引入组件

```json
"usingComponents": {
  "iny-checkbox": "path/to/iny-weapp/dist/checkbox/index",
  "iny-checkbox-group": "path/to/iny-weapp/dist/checkbox-group/index"
}
```

## 代码演示

### 基础用法

通过`value`绑定 checkbox 的勾选状态

```html
 <iny-checkbox value="{{checkbox}}" bind:change="onChange">简单使用</iny-checkbox>
```

```js
Page({
  data: {
    checkbox: true
  },

  onChange ({ detail }) {
    this.setData({
      checkbox: detail
    })
  },
});
```

### 方形复选框

通过`round`指定是否为方形复选框

```html
 <iny-checkbox round="{{false}}" value="{{checkbox}}" bind:change="onChange">方形复选框</iny-checkbox>
```

```js
Page({
  data: {
    checkbox: true
  },

  onChange ({ detail }) {
    this.setData({
      checkbox: detail
    })
  },
});
```

### 禁用状态

```html
<iny-checkbox
  disabled
  value="{{ checked }}"
  bind:change="onChange"
>
  禁用状态
</iny-checkbox>
```

### 自定义颜色

 ```html
<iny-checkbox
  value="{{ checked }}"
  checked-color="#07c160"
  bind:change="onChange"
>
  自定义颜色
</iny-checkbox>
```

### 自定义图标

通过 icon 指定自定义图标

```html
  <iny-checkbox icon="cart" value="{{checkbox2}}" bind:change="onChange2" custom-class="demo-checkbox">
    自定义图标
  </iny-checkbox>
```

### 复选框组

需要与`iny-checkbox-group`一起使用，选中值是一个数组，通过`value`绑定在`iny-checkbox-group`上，数组中的项即为选中的`Checkbox`的`name`属性设置的值

```html
<iny-checkbox-group
  value="{{checkboxGroup}}"
  bind:change="onGroupChange"
>
  <iny-checkbox
    wx:for="{{checkboxList}}"
    wx:key="{{item}}"
    name="{{item}}"
    custom-class="demo-checkbox"
  >复选框组{{item}}
  </iny-checkbox>
</iny-checkbox-group>
```

```javascript
Page({
  data: {
    checkboxList: ['A', 'B', 'C'],
    checkboxGroup: ['A', 'B']
  },

  onGroupChange ({ detail }) {
    this.setData({
      checkboxGroup: detail
    })
  }
});
```

### 设置最大可选数

属性 `max` 可指定复选框组的最大可选数

```html
<iny-checkbox-group
  max="2"
  value="{{checkboxGroup}}"
  bind:change="onGroupChange"
>
  <iny-checkbox
    wx:for="{{checkboxList}}"
    wx:key="{{item}}"
    name="{{item}}"
    custom-class="demo-checkbox"
  >复选框组{{item}}
  </iny-checkbox>
</iny-checkbox-group>
```

### 搭配单元格组件使用

只需要再引入`Cell`和`CellGroup`组件即可

```html
<iny-checkbox-group
 value="{{checkboxGroup}}"
 bind:change="onGroupChange"
>
  <iny-cell-group border>
    <iny-cell
      wx:for="{{checkboxList}}"
      wx:key="{{item}}"
      title="{{item}}"
    >
      <iny-checkbox
        custom-class="cell-value-class"
        name="{{item}}"
      />
    </iny-cell>
  </iny-cell-group>
</iny-checkbox-group>
```

### Checkbox API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| name | 标识 Checkbox 名称 | `String` | - |
| round | 是否为圆形复选框 | `Boolean` | `true` |
| value | 是否为选中状态 | `Boolean` | `false` |
| disabled | 是否禁用单选框 | `Boolean` | `false` |
| icon | 复选框的icon图标，可使用 icon 的 name 自定义属性 | `String` | `check` |
| checked-color | 选中状态颜色 | `String` | `#1989fa` |

### CheckboxGroup API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| name | 在表单内提交时的标识符 | `String` | - |
| value | 所有选中项的 name | `Array` | - |
| disabled | 是否禁用所有单选框 | `Boolean` | `false` |
| max | 设置最大可选数 | `Number` | `0`（无限制） |

### Checkbox Event

| 事件名 | 说明 | 回调参数 |
|-----------|-----------|-----------|
| bind:change | 当绑定值变化时触发的事件 | 当前组件的值 |

### Checkbox 外部样式类

| 类名 | 说明 |
|-----------|-----------|
| custom-class | 根节点样式类 |
| icon-class | 图标样式类 |
| label-class | 描述信息样式类 |

### CheckboxGroup Event

| 事件名 | 说明 | 回调参数 |
|-----------|-----------|-----------|
| bind:change | 当绑定值变化时触发的事件 | 当前组件的值 |
