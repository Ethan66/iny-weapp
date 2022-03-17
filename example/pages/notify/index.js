// pages/button/index.js
import page from '../../utils/page'
import Notify from '../../dist/notify/notify'

page({
  onBaseClick () {
    Notify('你事发了')
  },
  onTypeClick ({ currentTarget: { dataset: { type } }}) {
    Notify({
      text: '主题通知',
      type
    })
  },
  onSelfClick () {
    Notify({
      text: '自定义',
      color: '#fff',
      background: '#000',
      onClose () {
        wx.showToast({
          title: 'notify close',
          icon: 'none'
        })
      },
      onClick () {
        wx.showToast({
          title: 'notify click',
          icon: 'none'
        })
      }
    })
  },
  onSafeClick () {
    Notify({
      text: '顶部安全距离',
      safeAreaTop: true
    })
  }
})