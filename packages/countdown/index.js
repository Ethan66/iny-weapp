import InyComponent from '../common/component'
import { parseTime, formatNumber, parseFormater } from './utils'

const ONE_HOURS_MS = 3600000

const microNextTick = function (fn) {
  return setTimeout(fn, 30)
}
const macroNextTick = function (fn) {
  return setTimeout(fn, 1000)
}

InyComponent({
  externalClasses: [
    'item-class',
    'separator-class'
  ],
  properties: {
    timestamp: {
      type: Number,
      value: 0
    },
    max: {
      type: Number,
      value: null
    },
    autoStart: {
      type: Boolean,
      value: true
    },
    mill: {
      type: Boolean,
      value: false
    },
    formater: {
      type: String,
      value: 'HH:mm:ss'
    }
  },
  data: {
    timeList: [],
    visible: false
  },
  observers: {
    timestamp: function () {
      this.reset()
    }
  },
  attached () {
    this.reset()
  },

  detached () {
    this.pause()
  },
  pageLifetimes: {
    show () {
      if (this.timer || !this.data.autoStart) return

      this.endTime = new Date().getTime()
      const diff = this.endTime > this.startTime

      if (this.diff) {
        this.diff -= diff

        return this.setNextTimer()
      }

      this.time -= diff
      this.tick()
    },
    hide () {
      this.startTime = new Date().getTime()
      this.pause()
      this.clearNext()
    }
  },
  methods: {
    reset () {
      this.pause()

      this.formatTimeFormat()

      this.time = this.data.timestamp

      if (this.data.autoStart) {
        this.start()
      } else {
        this.showTime()
        this.setTime()
      }
    },
    start () {
      const { max } = this.data

      const { time } = this

      if (time <= 0) return

      if (max !== null) {
        const maxTime = max * ONE_HOURS_MS
        const diff = time - maxTime

        if (diff > 0) {
          this.diff = diff

          this.time = maxTime

          this.setNextTimer()
          return
        }
      }

      this.beginTick()
    },
    formatTimeFormat () {
      this.formater = parseFormater(this.data.formater)
    },
    beginTick () {
      this.prevTime = new Date().getTime()

      this.showTime()

      this.tick()
    },
    tick () {
      if (this.time <= 0) {
        this.over()
        return
      }

      this.setTime(this.time)

      const now = new Date().getTime()
      this.time -= now - this.prevTime
      this.prevTime = now

      let tick = macroNextTick

      if (this.data.mill) {
        tick = microNextTick
      }

      this.timer = tick(() => {
        this.tick()
      })
    },
    setTime () {
      const { mill } = this.data

      const { formater } = this

      const hasDay = !!this.formater.DD

      const date = parseTime(this.time, hasDay)

      const timeList = [date.hours, formater.HH, date.minutes, formater.mm, date.seconds]

      if (formater.ss) {
        timeList.push(formater.ss)
      }

      if (mill) {
        if (!formater.ss) {
          timeList.push(formater.mm)
        }
        timeList.push(date.millisecond)
        formater.sss && timeList.push()
      }
      if (hasDay) {
        timeList.unshift(formater.DD)
        timeList.unshift(date.days)
      }

      // diff time
      const prevTimeList = this.prevTimeList

      let result = {}

      if (prevTimeList) {
        let i = prevTimeList.length
        while (i--) {
          if (prevTimeList[i] !== timeList[i]) {
            result[`timeList[${i}]`] = formatNumber(timeList[i])
          }
        }
      } else {
        result = {
          timeList: timeList.map(item => (typeof item === 'number' ? formatNumber(item) : item))
        }
      }

      this.prevTimeList = timeList

      if (Object.keys(result).length !== 0) {
        this.setData(result)
      }
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
    hideTime () {
      this.setData({
        visible: false
      })
    },
    showTime () {
      this.setData({
        visible: true
      })
    },
    setNextTimer () {
      this.nextTimer = setTimeout(() => {
        this.start()
      }, this.diff)
    },
    clearNext () {
      this.nextTimer && clearTimeout(this.nextTimer)
    }
  }
})
