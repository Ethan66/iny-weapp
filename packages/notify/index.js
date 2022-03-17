import InyComponent from '../common/component'

InyComponent({
  properties: {
    visible: {
      type: Boolean,
      value: false
    },
    type: {
      type: String,
      value: 'theme'
    },
    text: String,
    duration: {
      type: Number,
      value: 3000
    },
    zIndex: {
      type: Number,
      value: 110
    },
    color: {
      type: String,
      value: '#fff'
    },
    background: String,
    safeAreaTop: {
      type: Boolean,
      value: false
    }
  },
  methods: {
    show () {
      const { duration } = this.data

      if (this.timer) {
        return
      }
      this.setData({
        visible: true
      })

      if (duration > 0 && duration !== Infinity) {
        this.timer = setTimeout(() => {
          this.hide()
        }, duration)
      }
    },

    hide () {
      const { onClose } = this.data

      this.setData({
        visible: false
      }, () => {
        clearTimeout(this.timer)
        this.timer = null
        onClose()
      })
    },

    onTap (event) {
      const { onClick } = this.data
      if (onClick) {
        onClick(event.detail)
      }
    }
  }
})
