import InyComponent from '../common/component'

InyComponent({
  properties: {
    disabled: {
      type: Boolean,
      value: false
    },
    leftWidth: {
      type: Number,
      value: 0
    },
    rightWidth: {
      type: Number,
      value: 0
    },
    name: {
      type: [Number, String],
      value: ''
    },
    async: {
      type: Boolean,
      value: false
    }
  },

  created () {
    this.offset = 0
  },

  data: {
    wrapStyle: '',
    catchMove: false
  },

  methods: {
    noop () {},
    onTouchStart (e) {
      if (this.data.disabled) return
      this.draging = true
      this.startOffset = this.offset
      this.firstDirection = ''

      this.deltaX = 0
      this.deltaY = 0

      this.startX = e.touches[0].clientX
      this.startY = e.touches[0].clientY
    },
    onTouchMove (e) {
      if (this.data.disabled) return
      const touch = e.touches[0]
      this.deltaX = touch.clientX - this.startX
      this.deltaY = touch.clientY - this.startY

      const offsetX = Math.abs(this.deltaX)
      const offsetY = Math.abs(this.deltaY)

      const direction = offsetX > offsetY ? 'horizontal' : offsetX < offsetY ? 'vertical' : ''

      if (!this.firstDirection) {
        this.firstDirection = direction

        this.setData({
          catchMove: direction === 'horizontal'
        })
      }

      if (direction === 'vertical') return

      const { leftWidth, rightWidth } = this.data

      const offset = this.startOffset + this.deltaX
      if ((rightWidth > 0 && -offset > rightWidth) || (leftWidth > 0 && offset > leftWidth)) return

      this.swipeMove(offset)
    },
    onTouchEnd () {
      if (this.data.disabled) {
        return
      }
      this.draging = false
      this.swipeLeave()
    },
    swipeMove (offset) {
      this.offset = offset

      const transform = `translate3d(${offset}px, 0, 0)`

      const transition = this.draging ? 'none' : 'transform .6s cubic-bezier(0.18, 0.89, 0.32, 1)'

      this.setData({
        wrapStyle: `
        -webkit-transform: ${transform};
        -webkit-transition: ${transition};
        transform: ${transform};
        transition: ${transition};
      `
      })
    },
    swipeLeave () {
      const { leftWidth, rightWidth } = this.data
      const offset = this.offset

      if (leftWidth > 0 && offset > leftWidth * 0.3) {
        this.open('left')
      } else if (rightWidth > 0 && -offset > rightWidth * 0.3) {
        this.open('right')
      } else {
        this.swipeMove(0)
      }

      this.setData({ catchMove: false })
    },
    open (position) {
      const { leftWidth, rightWidth } = this.data
      if (position === 'left') {
        this.swipeMove(leftWidth)
      } else {
        this.swipeMove(-rightWidth)
      }
    },
    close () {
      this.swipeMove(0)
    },
    onClick ({ currentTarget: { dataset: { key } } }) {
      this.$emit('click', key)

      if (!this.offset) return

      if (this.data.async) {
        this.$emit('close', {
          position: key,
          instance: this,
          name: this.data.name
        })
      } else {
        this.swipeMove(0)
      }
    }
  }
})
