import InyComponent from '../common/component'

InyComponent({
  properties: {
    visible: Boolean,
    mask: {
      type: Boolean,
      value: true
    },
    customStyle: String,
    duration: {
      type: [Number, Object],
      value: 300
    },
    zIndex: {
      type: Number,
      value: 99
    },
    color: {
      type: String,
      value: ''
    }
  },

  methods: {
    onClick () {
      this.$emit('click')
    },

    noop () {}
  }
})
