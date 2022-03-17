import InyComponent from '../common/component'
import COLOR from '../common/var'

InyComponent({
  behaviors: ['wx://form-field'],
  properties: {
    name: String,
    checked: Boolean,
    async: {
      type: Boolean,
      value: false
    },
    size: {
      type: String,
      value: '20px'
    },
    disabled: {
      type: Boolean,
      value: false
    },
    activeColor: {
      type: String,
      value: COLOR.COLOR_THEME
    },
    inactiveColor: {
      type: String,
      value: COLOR.COLOR_SWITCH_NO_ON
    }
  },
  data: {
    value: false
  },
  observers: {
    checked: function (value) {
      if (this.data.value === value) return

      this.setData({
        value
      })
    }
  },
  attached () {
    this.setData({
      value: this.data.checked
    })
  },
  methods: {
    onChange () {
      if (this.data.disabled) return
      const { value } = this.data

      if (!this.data.async) {
        this.setData({
          value: !value
        })
      }
      this.$emit('change', !value)
    }
  }
})
