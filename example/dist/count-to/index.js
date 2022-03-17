import InyComponent from '../common/component'

const microNextTick = function (fn) {
  return setTimeout(fn, 30)
}

InyComponent({
  properties: {
    start: {
      type: Number,
      value: 0
    },
    end: {
      type: Number,
      value: 0
    },
    autoStart: {
      type: Boolean,
      value: true
    },
    duration: {
      type: Number,
      value: 1000
    },
    decimal: {
      type: Number,
      value: 0
    },
    prefix: {
      type: String,
      value: ''
    },
    suffix: {
      type: String,
      value: ''
    }
  },
  data: {
    value: ''
  },
  observers: {
    'start, end, duration': function () {
      this.reset()
    }
  },
  attached () {},

  detached () {
    this.pause()
  },
  pageLifetimes: {
    hide () {
      this.pause()

      this.setEndValue()
    }
  },
  methods: {
    reset () {
      this.pause()

      const { start, end, autoStart } = this.data

      if (start === end) {
        this.setEndValue()
        return
      }

      this.increase = start < end

      if (autoStart) {
        this.start()
        return
      }

      this.setStartValue()
    },
    start () {
      this.startTime = new Date().getTime()
      this.tick()
    },
    tick () {
      const now = new Date().getTime()

      const diff = now - this.startTime

      const value = this.calcValue(diff)

      this.setData({
        value: this.formatValue(value)
      })

      if (diff >= this.data.duration) {
        this.over()
        return
      }

      this.timer = microNextTick(() => {
        this.tick()
      })
    },
    pause () {
      if (this.timer) {
        clearTimeout(this.timer)
        this.timer = null
      }
    },
    over () {
      this.pause()
      this.$emit('finish')
    },
    setEndValue () {
      this.setData({
        value: this.formatValue(this.data.end)
      })
    },
    setStartValue () {
      this.setData({
        value: this.formatValue(this.data.start)
      })
    },
    calcValue (diff) {
      const { increase } = this
      const { start, end, duration } = this.data

      if (increase) {
        return Math.min(end, start + (end - start) * (diff / duration))
      }

      return Math.max(start, start - (start - end) * (diff / duration))
    },
    formatValue (value) {
      const { decimal, prefix, suffix } = this.data
      value = value.toFixed(decimal)

      return prefix + value + suffix
    }
  }
})
