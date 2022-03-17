// pages/button/index.js
import page from '../../utils/page'

page({
  buttonClick () {
    console.log('button click')
  },
  onGotUserInfo ({detail}) {
    console.log(detail)
  },
  onClick ({ detail }) {
    wx.showToast({
      title: '点击 + ' +  detail,
      icon: 'none'
    })
  },
  onClose ({ detail: { position, instance } }) {
    wx.showToast({
      title: '点击 + ' +  position,
      icon: 'none'
    })

    instance.close()
    
  }
})