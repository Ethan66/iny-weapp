import InyComponent from '../common/component'
import { link } from '../behaviors/link'
InyComponent({
  behaviors: [link],
  externalClasses: [
    'title-class',
    'label-class',
    'value-class',
    'right-icon-class',
    'hover-class'
  ],
  properties: {
    title: null,
    value: null,
    icon: String,
    label: String,
    isLink: Boolean,
    clickable: Boolean,
    customStyle: String,
    border: {
      type: Boolean,
      value: true
    }
  },

  methods: {
    onClick (event) {
      this.$emit('click', event.detail)
      this.jumpLink()
    }
  }
})
