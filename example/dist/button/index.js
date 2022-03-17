import InyComponent from '../common/component'
import { button } from '../behaviors/button'
import { openType } from '../behaviors/openType'
import { classNames } from '../common/utils'

InyComponent({
  behaviors: [button, openType],
  properties: {
    type: {
      type: String,
      value: 'theme'
    },
    size: {
      type: String,
      value: 'normal'
    },
    loadingSize: {
      type: String,
      value: '20'
    },
    loadingType: {
      type: String,
      value: 'circular'
    },
    loadingText: String,
    inline: Boolean,
    round: {
      type: Boolean,
      value: true
    },
    hairline: Boolean,
    disabled: Boolean,
    loading: Boolean,
    color: String,
    plain: Boolean
  },
  data: {
    classNames: ''
  },
  attached () {
    this.initClassName()
  },
  methods: {
    initClassName () {
      const value = classNames([
        this.data.type,
        this.data.size,
        {
          inline: this.data.inline,
          round: this.data.round,
          hairline: this.data.hairline,
          plain: this.data.plain
        }
      ], 'iny-button', '--')
      this.setData({
        classNames: value
      })
    },
    onClick () {
      if (this.data.disabled) {
        this.$emit('disabledClick')
        return
      }
      if (this.data.loading) {
        return
      }
      if (this.data.openType) {
        this.$emit('openType', this.data.openType)
        return
      }
      this.$emit('click')
    }
  }
})
