export const openType = Behavior({
  properties: {
    openType: String
  },

  methods: {
    bindGetUserInfo (event) {
      this.$emit('getUserInfo', event.detail)
    },

    bindContact (event) {
      this.$emit('contact', event.detail)
    },

    bindGetPhoneNumber (event) {
      this.$emit('getPhoneNumber', event.detail)
    },

    bindError (event) {
      this.$emit('error', event.detail)
    },

    bindLaunchApp (event) {
      this.$emit('launchApp', event.detail)
    },

    bindOpenSetting (event) {
      this.$emit('openSetting', event.detail)
    }
  }
})
