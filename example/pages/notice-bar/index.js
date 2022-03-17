// pages/button/index.js
import page from '../../utils/page'

page({
  data: {},
  onClick() {
    wx.showToast({
      title: 'notice bar is click',
      icon: 'none'
    })
  }
})