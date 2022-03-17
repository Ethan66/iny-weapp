# Picker 选择器

### 引入

在`app.json`或`index.json`中引入组件

```json
"usingComponents": {
  "iny-picker": "path/to/iny-weapp/dist/picker/index"
}
```

## 代码演示

### 基础用法

```html
<iny-picker columns="{{ columns }}" bind:change="onChange" />
```

```javascript

Page({
  data: {
    columns: ['北京', '上海', '广州', '深圳', '杭州'],
  },

  onChange({ detail }) {
    wx.showToast({
      title: `value is ${detail.value}, index is ${detail.index}`,
      icon: 'none'
    })
  }
});
```

### 默认值

选择器可以直接通过`value`属性设置初始选中项的索引值，value 是一个数组

```html
<iny-picker
  title="基础用法"
  columns="{{columns}}"
  value="{{[3]}}"
  bind:change="onChange"
/>
```

### 展示顶部栏

```html
<iny-picker
  show-bar
  title="标题"
  columns="{{ columns }}"
  bind:change="onChange2"
  bind:cancel="onCancel"
  bind:confirm="onConfirm"
/>
```

```javascript

Page({
  data: {
    columns: ['北京', '上海', '广州', '深圳', '杭州'],
  },
  onChange2 ({ detail }) {
    wx.showToast({
      title: `value is ${detail.value.name}, index is ${detail.index}`,
      icon: 'none'
    })
  },
  onCancel ({ detail }) {
    wx.showToast({
      title: `cancel: value is ${detail.value}, index is ${detail.index}`,
      icon: 'none'
    })
  },
  onConfirm ({ detail }) {
    wx.showToast({
      title: `confirm: value is ${detail.value}, index is ${detail.index}`,
      icon: 'none'
    })
  },
});
```

### 禁用选项

选项可以为对象结构，通过设置 disabled 来禁用该选项

```html
<iny-picker columns="{{ columns }}" />
```

```javascript
Page({
  data: {
   columns2: [
      {
        name: '北京',
        disabled: true
      },
      {
        name: '上海'
      },
      {
        name: '广州'
      },
      {
        name: '深圳'
      },
      {
        name: '杭州'
      }
    ],
  }
});
```

### 多列联动

```html
<iny-picker columns="{{ columns }}" bind:change="onChange" />
```

```javascript

Page({
  data: {
    columns3: [
      [
        '浙江',
        '甘肃'
      ],
      [
        '杭州',
        '宁波',
        '嘉兴',
        '绍兴'
      ]
    ]
  },

  onChange3 ({ detail }) {
    if (detail.index[0] === 0) {
      this.setData({
        columns3: [
          [
            '浙江',
            '甘肃'
          ],
          [
            '杭州',
            '宁波',
            '嘉兴',
            '绍兴'
          ]
        ]
      })
    } else {
      this.setData({
        columns3: [
          [
            '浙江',
            '甘肃'
          ],
          [
            '兰州',
            '天水',
            '酒泉',
            '陇南'
          ]
        ]
      })
    }
  }
});
```

### 加载状态

当 Picker 数据是通过异步获取时，可以通过 `loading` 属性显示加载提示

```html
<iny-picker columns="{{ columns }}" loading />
```

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| columns | 对象数组，配置每一列显示的数据 | `Array` | `[]` |
| show-bar | 是否显示顶部栏 | `Boolean` | `false` |
| title | 顶部栏标题 | `String` | `''` |
| loading | 是否显示加载状态 | `Boolean` | `false` |
| value-key | 选项对象中，文字对应的 key | `String` | `text` |
| column-height | 选项高度 | `Number` | `44` |
| confirm-text | 确认按钮文字 | `String` | `确认` |
| cancel-text | 取消按钮文字 | `String` | `取消` |
| visible-column-count | 可见的选项个数 | `Number` | `5` |
| value | 默认值，下标数组 | `Array<Number>` | `[0]` |

### Events

Picker 组件的事件会根据 columns 是单列或多列返回不同的参数

| 事件名 | 说明 | 参数 |
|------|------|------|
| confirm | 点击确认按钮时触发 | 单列：选中值，选中值对应的索引 <br> 多列：所有列选中值，所有列选中值对应的索引 |
| cancel | 点击取消按钮时触发 | 单列：选中值，选中值对应的索引<br>多列：所有列选中值，所有列选中值对应的索引 |
| change | 选项改变时触发 | 单列：Picker 实例，选中值，选中值对应的索引<br>多列：Picker 实例，所有列选中值，当前列对应的索引 |

### Columns 数据结构

当传入多列数据时，`columns`为一个二维数组，数组中的每一个数组可以是简单数组，也可以是对象数组

### 外部样式类

| 类名 | 说明 |
|-----------|-----------|
| custom-class | 根节点样式类 |
| active-class | 选中项样式类 |
| toolbar-class | 顶部栏样式类 |
| column-class | 列样式类 |

### 方法

通过 selectComponent 可以获取到 picker 实例并调用实例方法

| 方法名 | 参数 | 返回值 | 介绍 |
|------|------|------|------|
| getValues | - | values | 获取所有列选中的值 |
| setValues | values | - | 设置所有列选中的值 |
| getIndexes | - | indexes | 获取所有列选中值对应的索引 |
| setIndexes | indexes | - | 设置所有列选中值对应的索引 |
| getColumnValue | columnIndex | value | 获取对应列选中的值 |
| setColumnValue | columnIndex, value | - | 设置对应列选中的值 |
| getColumnIndex | columnIndex | optionIndex | 获取对应列选中项的索引 |
| setColumnIndex | columnIndex, optionIndex | - | 设置对应列选中项的索引 |
| getColumnValues | columnIndex | values | 获取对应列中所有选项 |
| setColumnValues | columnIndex, values | - | 设置对应列中所有选项 |
