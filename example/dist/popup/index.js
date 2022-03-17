import InyComponent from '../common/component'
import { transition } from '../behaviors/transition'

InyComponent({
  externalClasses: [
    'enter-class',
    'enter-active-class',
    'enter-to-class',
    'leave-class',
    'leave-active-class',
    'leave-to-class'
  ],

  behaviors: [transition],

  properties: {
    transition: String,
    customStyle: String,
    overlayStyle: String,
    zIndex: {
      type: Number,
      value: 100
    },
    mask: {
      type: Boolean,
      value: true
    },
    closeOnClickMask: {
      type: Boolean,
      value: true
    },
    position: {
      type: String,
      value: 'center'
    },
    round: {
      type: Boolean,
      value: false
    },
    closeable: {
      type: Boolean,
      value: false
    },
    icon: {
      type: String,
      value: 'close'
    },
    safeAreaTop: {
      type: Boolean,
      value: true
    },
    safeAreaBottom: {
      type: Boolean,
      value: true
    }
  },

  observers: {
    'position, transition': function () {
      this.initClass()
    }
  },

  created () {
    this.initClass()
  },

  methods: {
    onClickOverlay () {
      this.$emit('click-mask')

      if (this.data.closeOnClickMask) {
        this.$emit('close')
      }
    },

    onClose () {
      this.$emit('close')
    },

    initClass () {
      const { transition, position } = this.data

      const updateData = {
        name: transition || position
      }

      if (transition === 'none') {
        updateData.duration = 0
      }

      this.setData(updateData)
    }
  }
})
