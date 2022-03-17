import { isObj, nextTick } from '../common/utils'

const getClassNames = (name) => ({
  enter: `iny-${name}-enter iny-${name}-enter-active enter-class enter-active-class`,
  'enter-to': `iny-${name}-enter-to iny-${name}-enter-active enter-to-class enter-active-class`,
  leave: `iny-${name}-leave iny-${name}-leave-active leave-class leave-active-class`,
  'leave-to': `iny-${name}-leave-to iny-${name}-leave-active leave-to-class leave-active-class`
})

export const transition = Behavior({
  properties: {
    visible: {
      type: Boolean,
      value: true
    },
    duration: {
      type: [Number, Object],
      value: 400
    },
    name: {
      type: String,
      value: 'fade'
    },
    customStyle: String
  },
  data: {
    type: '',
    inited: false,
    display: false
  },
  observers: {
    visible: function (value) {
      value ? this.enter() : this.leave()
    }
  },
  attached () {
    if (this.data.visible) {
      this.enter()
    }
  },
  methods: {
    enter () {
      const { duration, name } = this.data
      const classNames = getClassNames(name)
      const currentDuration = isObj(duration) ? duration.enter : duration

      this.status = 'enter'

      Promise.resolve()
        .then(nextTick)
        .then(() => {
          this.checkStatus('enter')

          this.setData({
            inited: true,
            display: true,
            classes: classNames.enter,
            currentDuration
          })
        })
        .then(nextTick)
        .then(() => {
          this.checkStatus('enter')

          this.setData({
            classes: classNames['enter-to']
          })
        })
        .catch(() => {})
    },

    leave () {
      const { duration, name } = this.data
      const classNames = getClassNames(name)
      const currentDuration = isObj(duration) ? duration.leave : duration

      this.status = 'leave'

      Promise.resolve()
        .then(nextTick)
        .then(() => {
          this.checkStatus('leave')

          this.setData({
            classes: classNames.leave,
            currentDuration
          })
        })
        .then(() => setTimeout(() => this.onTransitionEnd(), currentDuration))
        .then(nextTick)
        .then(() => {
          this.checkStatus('leave')

          this.setData({
            classes: classNames['leave-to']
          })
        })
        .catch(() => {})
    },

    checkStatus (status) {
      if (status !== this.status) {
        throw new Error(`incongruent status: ${status}`)
      }
    },

    onTransitionEnd () {
      if (!this.data.visible) {
        this.setData({ display: false })
        this.$emit('transitionEnd')
      }
    }
  }
})
