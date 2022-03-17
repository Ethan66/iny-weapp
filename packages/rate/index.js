import InyComponent from '../common/component'
import { COLOR_THEME, COLOR_DISABLED_TEXT, COLOR_DISABLED } from '../common/var'
InyComponent({
  behaviors: ['wx://form-field'],
  externalClasses: [
    'icon-class'
  ],
  properties: {
    value: Number,
    name: String,
    count: {
      type: Number,
      value: 5
    },
    size: {
      type: String,
      value: '20px'
    },
    gutter: {
      type: String,
      value: '4px'
    },
    color: {
      type: String,
      value: COLOR_THEME
    },
    voidColor: {
      type: String,
      value: COLOR_DISABLED_TEXT
    },
    icon: {
      type: String,
      value: 'favor-f'
    },
    voidIcon: {
      type: String,
      value: 'favor'
    },
    allowHalf: {
      type: Boolean,
      value: false
    },
    readonly: {
      type: Boolean,
      vlaue: false
    },
    disabled: {
      type: Boolean,
      value: false
    },
    disabledColor: {
      type: String,
      value: COLOR_DISABLED
    }
  },

  methods: {
    onClick ({ currentTarget: { dataset: { rate } } }) {
      if (this.data.disabled || this.data.readonly) return
      this.$emit('change', rate + 1)
    }
  }
})
