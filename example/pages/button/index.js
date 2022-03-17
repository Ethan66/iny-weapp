// pages/button/index.js
import page from '../../utils/page'

page({
  buttonClick () {
    console.log('button click')
  },
  onGotUserInfo ({ detail }) {
    console.log(detail)
  },
  openTypeClick ({ detail }) {
    wx.showToast({
      title: detail
    })
  },
  onGetUserPhone ({ detail }) {
    console.log(detail)
    wx.showToast({
      title: detail.errMsg
    })
  }
})
