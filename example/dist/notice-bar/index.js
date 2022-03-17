import InyComponent from '../common/component'
import { COLOR_THEME, COLOR_WHITE } from '../common/var'

InyComponent({
  properties: {
    text: {
      type: String,
      value: ''
    },
    delay: {
      type: Number,
      value: 1
    },
    speed: {
      type: Number,
      value: 50
    },
    scrollable: {
      type: Boolean,
      value: true
    },
    wrapable: {
      type: Boolean,
      value: false
    },
    rightIcon: {
      type: String,
      value: ''
    },
    leftIcon: {
      type: String,
      value: ''
    },
    color: {
      type: String,
      value: COLOR_WHITE
    },
    backgroundColor: {
      type: String,
      value: COLOR_THEME
    }
  },
  data: {
    animationData: null
  },

  observers: {
    text: function () {
      this.init()
    }
  },

  attached () {
    this.resetAnimation = wx.createAnimation({
      duration: 0,
      timingFunction: 'linear'
    })
    this.init()
  },

  methods: {
    init () {
      Promise.all([this.getRect('.iny-notice-bar__wrap'), this.getRect('.iny-notice-bar__content')])
        .then(([wrap, content]) => {
          if (!wrap || !content || !wrap.width || !content.width) return

          const { speed, scrollable, delay } = this.data

          if (scrollable && wrap.width < content.width) {
            const duration = (content.width / speed) * 1000

            this.wrapWidth = wrap.width
            this.contentWidth = content.width
            this.duration = duration

            this.animation = wx.createAnimation({
              duration,
              timingFunction: 'linear',
              delay
            })

            this.scroll()
          }
        })
    },
    scroll () {
      this.timer && clearTimeout(this.timer)
      this.timer = null

      this.setData({
        animationData: this.resetAnimation
          .translateX(this.wrapWidth)
          .step()
          .export()
      })

      setTimeout(() => {
        this.setData({
          animationData: this.animation
            .translateX(-this.contentWidth)
            .step()
            .export()
        })
      }, 20)

      this.timer = setTimeout(() => {
        this.scroll()
      }, this.duration)
    },

    onClick () {
      this.$emit('click')
    }
  }
})
