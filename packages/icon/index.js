import InyComponent from '../common/component'

InyComponent({
  properties: {
    name: String,
    size: {
      type: String,
      value: '16px'
    },
    color: String,
    customStyle: String
  },

  methods: {
    onClick () {
      this.$emit('click')
    }
  }
})
