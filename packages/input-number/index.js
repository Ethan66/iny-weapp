import InyComponent from '../common/component'
InyComponent({
  behaviors: ['wx://form-field'],
  externalClasses: [
    'input-class',
    'increase-class',
    'decrease-class'
  ],
  properties: {
    name: String,
    value: Number,
    min: {
      type: Number,
      value: 1
    },
    max: {
      type: Number,
      value: Number.MAX_SAFE_INTEGER
    },
    step: {
      type: Number,
      value: 1
    },
    disabled: {
      type: Boolean,
      value: false
    },
    disabledInput: {
      type: Boolean,
      value: false
    },
    async: {
      type: Boolean,
      value: false
    },
    inputWidth: {
      type: String,
      value: '35px'
    }
  },

  data: {
    num: ''
  },

  observers: {
    value: function (value) {
      if (value === this.data.num) return

      if (typeof value === 'number') {
        this.setData({
          num: this.initValue(value)
        })
      }
    }
  },

  attached () {
    this.setData({
      num: this.initValue(this.data.value)
    })
  },

  methods: {
    initValue (value) {
      return Math.min(Math.max(value, this.data.min), this.data.max)
    },
    onChange (eventName) {
      const { data } = this
      if (data.num <= data.min && eventName === 'decrease') {
        this.$emit('over', eventName)
        return
      }
      if (data.num >= data.max && eventName === 'increase') {
        this.$emit('over', eventName)
        return
      }

      if (this.data.disabled) return

      const diff = eventName === 'decrease' ? -data.step : +data.step

      const value = this.initValue(Math.round((+data.num + diff) * 100) / 100)

      this.$emit(eventName, value)

      this.emitValue(value)
    },
    onDecrease () {
      this.onChange('decrease')
    },
    onIncrease () {
      this.onChange('increase')
    },
    onInput ({ detail: { value } }) {
      if (!/^\d+$/.test(value)) {
        this.emitValue(this.data.num)
        return
      }
      this.emitValue(this.initValue(value))
    },
    emitValue (value) {
      if (!this.data.async) {
        this.setData({
          num: value
        })
      }

      this.$emit('change', value)
    }
  }
})
