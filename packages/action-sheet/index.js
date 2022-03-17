import InyComponent from '../common/component'

InyComponent({
  properties: {
    visible: {
      type: Boolean,
      value: false
    },
    actions: {
      type: Array,
      value: []
    },
    title: {
      type: String,
      value: ''
    },
    icon: {
      type: String,
      value: 'roundclose'
    },
    align: {
      type: String,
      value: 'center'
    },
    mask: {
      type: Boolean,
      value: true
    },
    zIndex: {
      type: Number,
      value: 100
    },
    round: {
      type: Boolean,
      value: false
    },
    minHeight: {
      type: String,
      value: '250px'
    },
    visibleCheckbox: {
      type: Boolean,
      value: false
    },
    checkbox: {
      type: Array,
      value: []
    },
    max: Number,
    footerText: {
      type: String,
      value: '确认'
    },
    closeOnClickMask: {
      type: Boolean,
      value: true
    },
    closeOnClickAction: {
      type: Boolean,
      value: true
    },
    safeAreaBottom: {
      type: Boolean,
      value: true
    }
  },
  data: {},
  observers: {},
  attached () {},
  methods: {
    onClose () {
      if (this.data.closeOnClickMask) {
        this.$emit('close')
        this.close()
      }
    },
    onSelect ({ currentTarget: { dataset: { index } } }) {
      if (this.data.visibleCheckbox) return
      const item = this.data.actions[index]
      if (item && !item.disabled) {
        if (this.data.closeOnClickAction) {
          this.close()
        }
        this.$emit('select', index)
      }
    },
    onChange ({ detail }) {
      this.setData({
        checkbox: detail
      })

      this.$emit('change', detail)
    },
    onConfirm () {
      if (this.data.closeOnClickAction) {
        this.close()
      }
      this.$emit('confirm', this.data.checkbox)
    },
    close () {
      this.setData({
        visible: false
      })
    }
  }
})
