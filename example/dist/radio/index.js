import InyComponent from '../common/component'

InyComponent({
  behaviors: ['wx://form-field'],
  externalClasses: [
    'icon-class',
    'label-class'
  ],
  properties: {
    value: String,
    name: String,
    disabled: Boolean,
    icon: {
      type: String,
      value: 'check'
    },
    round: {
      type: Boolean,
      value: true
    },
    checkedColor: String
  },
  relations: {
    '../radio-group/index': {
      type: 'ancestor',
      linked (target) {
        this.parent = target
      },
      unlinked () {
        this.parent = null
      }
    }
  },

  methods: {
    emitChnage (value) {
      if (this.parent) {
        this.parent.$emit('change', value)
      } else {
        this.$emit('change', value)
      }
    },
    toggle () {
      const { disabled, name } = this.data
      if (!disabled) {
        this.emitChnage(name)
      }
    }
  }
})
