import InyComponent from '../common/component'
import { isLinearArray } from '../common/utils'

InyComponent({
  externalClasses: ['active-class', 'column-class'],
  properties: {
    showBar: {
      type: Boolean,
      value: false
    },
    cancelText: {
      type: String,
      value: '取消'
    },
    title: String,
    confirmText: {
      type: String,
      value: '确认'
    },
    valueKey: String,
    columnHeight: {
      type: Number,
      value: 44
    },
    visibleColumnCount: {
      type: Number,
      value: 5
    },
    columns: {
      type: Array,
      value: []
    },
    value: {
      type: Array,
      value: []
    },
    loading: {
      type: Boolean,
      value: false
    }
  },
  data: {
    columnStyle: ''
  },
  observers: {
    columns: function (value = []) {
      if (value === this.data.column) return
      this.isLinearArray = isLinearArray(value)

      wx.nextTick(() => {
        this.children = this.selectAllComponents('.iny-picker__column')

        if (Array.isArray(this.children)) {
          this.setColumns()
        }
      })
    },
    value: function (value = []) {
      if (value === this.data.value) return
      this.setIndexs(value)
    }
  },
  created () {
    this.children = []
  },
  attached () {},
  methods: {
    noop () {},
    emitNormal (eventName) {
      if (this.isLinearArray) {
        this.$emit(eventName, {
          picker: this,
          value: this.getColumnValue(0),
          index: this.getColumnIndex(0)
        })
      } else {
        this.$emit(eventName, {
          picker: this,
          value: this.getValues(),
          index: this.getIndexs()
        })
      }
    },
    onCancel () {
      this.emitNormal('cancel')
    },
    onConfirm () {
      this.emitNormal('confirm')
    },
    onChange () {
      this.emitNormal('change')
    },
    setColumns () {
      const { data } = this
      const columns = this.isLinearArray ? [data.columns] : data.columns

      columns.forEach((column, index) => {
        this.setColumnValues(index, column)
      })
    },
    setColumnValues (index, list) {
      const column = this.children[index]
      if (!column) {
        throw new Error('setColumnValues not found column static')
      }

      if (JSON.stringify(column.data.list) === JSON.stringify(list)) return

      column.setData({ list }, () => {
        column.updateByIndex(this.data.value[index] || 0)
      })
    },
    getColumn (index) {
      return this.children[index]
    },
    getColumnValue (index) {
      return this.getColumn(index).getValue()
    },
    getColumnIndex (index) {
      return this.getColumn(index).data.currentIndex
    },
    setColumnValue (index, value) {
      return this.getColumn(index).setValue(value)
    },
    setColumnIndex (index, value) {
      return this.getColumn(index).updateByIndex(value)
    },

    getValues () {
      return this.children.map(column => column.getValue())
    },
    setValues (values) {
      values.forEach((value, index) => {
        this.setColumnValue(index, value)
      })
    },
    getIndexs () {
      return this.children.map(child => child.data.currentIndex)
    },
    setIndexs (indexs) {
      indexs.forEach((value, index) => {
        this.setColumnIndex(index, value)
      })
    }
  }
})
