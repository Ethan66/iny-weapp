import InyComponent from '../common/component'
import { range, isObj } from '../common/utils'

const DEFAULT_DURATION = 200

InyComponent({
  externalClasses: ['active-class'],
  properties: {
    list: {
      type: Array,
      value: []
    },
    currentIndex: {
      type: Number,
      value: 0
    },
    columnHeight: {
      type: Number,
      value: 44
    },
    visibleColumnCount: {
      type: Number,
      value: 5
    },
    valueKey: String
  },
  observers: {
    currentIndex: function (index) {
      this.updateByIndex(index)
    }
  },
  data: {
    columnStyle: ''
  },
  attached () {
    this.baseOffset = (this.data.columnHeight * (this.data.visibleColumnCount - 1)) / 2
    this.offset = 0
    this.duration = 0
    this.updateByIndex(this.data.currentIndex)
  },
  methods: {
    onTouchStart (event) {
      this.startY = event.touches[0].clientY
      this.startOffset = this.offset
      this.duration = 0
    },

    onTouchMove (event) {
      const delayY = event.touches[0].clientY - this.startY
      this.offset = range(this.startOffset + delayY, -(this.data.list.length * this.data.columnHeight), this.data.columnHeight)
      this.setWrapStyle()
    },

    onTouchEnd () {
      if (this.offset !== this.baseOffset) {
        this.duration = DEFAULT_DURATION

        const index = range(Math.round(-this.offset / this.data.columnHeight), 0, this.data.list.length - 1)

        this.updateByIndex(index, true)
      }
    },

    checkIndexStatus (index) {
      const { list } = this.data

      for (let i = index; i < list.length; i++) {
        if (!(isObj(list[i]) && list[i].disabled)) return i
      }

      for (let i = index - 1; i >= 0; i--) {
        if (!(isObj(list[i]) && list[i].disabled)) return i
      }
    },

    updateByIndex (index, isUser) {
      index = this.checkIndexStatus(index)
      this.offset = -(index * this.data.columnHeight)
      this.setWrapStyle()

      if (index !== this.data.currentIndex) {
        this.setData({
          currentIndex: index
        }, () => {
          isUser && this.$emit('change', index)
        })
      }
    },

    setWrapStyle () {
      this.setData({
        columnStyle: `transition: ${this.duration}ms; transform: translate3d(0, ${this.offset + this.baseOffset}px, 0); line-height: ${this.data.columnHeight}px;`
      })
    },

    // 供父组件使用
    setValue (value) {
      const { list, valueKey } = this.data

      for (let i = 0; i < list.length; i++) {
        if (valueKey && list[i][valueKey] === value) {
          this.updateByIndex(i)
        } else if (list[i] === value) {
          this.updateByIndex(i)
        }
      }
    },
    getValue () {
      return this.data.list[this.data.currentIndex]
    }
  }
})
