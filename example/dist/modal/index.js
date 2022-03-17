import InyComponent from '../common/component'
import { button } from '../behaviors/button'
import { openType } from '../behaviors/openType'

InyComponent({
  behaviors: [button, openType],
  properties: {
    visible: {
      type: Boolean,
      value: false
    },
    async: Boolean,
    title: String,
    text: String,
    align: {
      type: String,
      value: 'center'
    },
    cancel: {
      type: Boolean,
      value: true
    },
    confirm: {
      type: Boolean,
      value: true
    },
    cancelText: {
      type: String,
      value: '取消'
    },
    confirmText: {
      type: String,
      value: '确认'
    },
    cancelOpenType: String,
    confirmOpenType: String,
    cancelType: {
      type: String,
      value: 'primary'
    },
    confirmType: {
      type: String,
      value: 'theme'
    },
    zIndex: {
      type: Number,
      value: 100
    },
    closeOnClickMask: {
      type: Boolean,
      value: true
    },
    transition: {
      type: String,
      value: 'scale'
    }
  },
  methods: {
    onClose () {
      this.onAction('mask')
    },
    onButtonCancel () {
      this.onAction('cancel')
    },
    onButtonConfirm () {
      this.onAction('confirm')
    },
    onCancelOpenType () {
      this.onAction('openType')
    },
    onConfirmOpenType () {
      this.onAction('openType')
    },
    onAction (action) {
      if (!this.data.async) {
        this.close()
      }
      this.$emit('close', action)

      if (action === 'openType') {
        this.$emit('openType', openType)
        return
      }

      this.$emit(action, this)

      const callback = this.data[action === 'confirm' ? 'onConfirm' : 'onCancel']

      if (callback) {
        /* eslint-disable */
        callback((action) => {
          this.close()
        }, action)
      }
    },
    close () {
      this.setData({
        visible: false
      })
    }
  }
})
