export const button = Behavior({
  externalClasses: ['hover-class'],

  properties: {
    id: String,
    lang: {
      type: String,
      value: 'zh_CN'
    },
    businessId: Number,
    sessionFrom: String,
    sendMessageTitle: String,
    sendMessagePath: String,
    sendMessageImg: String,
    showMessageCard: Boolean,
    appParameter: String,
    ariaLabel: String
  }
})
