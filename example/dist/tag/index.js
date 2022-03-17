import InyComponent from '../common/component'

InyComponent({
  properties: {
    type: {
      type: String,
      value: 'theme'
    },
    size: {
      type: String,
      value: '12px'
    },
    color: String,
    textColor: String,
    plain: {
      type: Boolean,
      value: false
    },
    mark: {
      type: Boolean,
      value: false
    },
    round: {
      type: Boolean,
      value: true
    }
  },
  attached () {},
  methods: {
    onClick () {
      this.$emit('click')
    }
  }
})
