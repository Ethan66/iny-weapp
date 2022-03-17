import InyComponent from '../common/component'

InyComponent({
  behaviors: ['wx://form-field'],
  properties: {
    max: Number,
    value: Array,
    disabled: Boolean
  },
  relations: {
    '../checkbox/index': {
      type: 'descendant',
      linked (target) {
        this.children = this.children || []
        this.children.push(target)
        this.updateChild(target)
      },
      unlinked (target) {
        (this.children || []).filter(child => child !== target)
      }
    }
  },
  observers: {
    value (value) {
      wx.nextTick(() => {
        this.updateChildren()
      })
    },
    disabled () {
      this.updateChildren()
    }
  },
  methods: {
    updateChild (target) {
      const { value, disabled } = this.data
      target.setData({
        value: value.indexOf(target.data.name) !== -1,
        disabled: disabled || target.data.disabled
      })
    },
    updateChildren () {
      (this.children || []).forEach(child => {
        this.updateChild(child)
      })
    }
  }
})
