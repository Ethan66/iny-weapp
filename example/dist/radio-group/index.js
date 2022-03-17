import InyComponent from '../common/component'

InyComponent({
  behaviors: ['wx://form-field'],
  properties: {
    value: String,
    disabled: Boolean
  },
  relations: {
    '../radio/index': {
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
    value () {
      this.updateChildren()
    },
    disabled () {
      this.updateChildren()
    }
  },
  methods: {
    updateChild (target) {
      const { value, disabled } = this.data
      target.setData({
        value: value,
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
