// pages/button/index.js
import page from '../../utils/page'

page({
  data: {
    visible: false,
    mask: true,
    color: '',
    zIndex: '88'
  },
  onNormalClick () {
    this.setData({
      visible: true,
      mask: true
    })
  },
  onMaskClick () {
    wx.showToast({
      title: 'mask click'
    })
    this.setData({
      visible: false,
      mask: true,
      color: '',
      zIndex: ''
    })
  },
  onClick () {
    this.setData({
      visible: true,
      mask: false
    })
  },
  onSelfColorClick () {
    this.setData({
      visible: true,
      color: 'rgba(0, 0, 0, 0.2)'
    })
  },
  onSelfIndexClick () {
    this.setData({
      visible: true,
      zIndex: 1000
    })
  }
})