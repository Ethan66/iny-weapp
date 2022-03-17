// pages/button/index.js
import page from '../../utils/page'
import Modal from '../../dist/modal/modal'

page({
  data: {
    visible: false
  },
  onClick ({ currentTarget: { dataset: { index } } }) {
    this.setData({
      [`visible${index}`]: true
    })
  },
  onMessage () {
    Modal.alert({
      title: '系统提示',
      text: ''
    }).then(res => {
      console.log('close')
    })
  },
  onConfirm () {
    Modal.confirm({
      title: '系统提示',
      text: '你可以选择？'
    }).then(res => {
      console.log('确认关闭')
    }).catch(() => {
      console.log('取消关闭')
    })
  },
  closeFunc () {
    Modal.confirm({
      title: '系统提示',
      text: '你可以选择？',
      onConfirm () {
        console.log('会执行, 确认')
      },
      onCancel () {
        console.log('会执行, 取消')
      }
    }).then(res => {
      console.log('不会执行')
    }).catch(() => {
      console.log('不会执行')
    })
  },
  asyncClose () {
    Modal({
      title: '系统提示',
      text: '待会儿关闭',
      async: true
    }).then(done => {
      setTimeout(() => {
        done()
      }, 1000)
    }).catch(done => {
      setTimeout(() => {
        done()
      }, 1000)
    })
  },
  selfClick () {
    this.setData({
      visible: true
    })
  },
  onClose () {
    wx.showToast({
      title: '组件调用关闭',
      icon: 'none'
    })
  },
  selfConfirm () {
    wx.showToast({
      title: '组件调用确认',
      icon: 'none'
    })
  },
  selfCancel () {
    wx.showToast({
      title: '组件调用取消',
      icon: 'none'
    })
  },
  authClick () {
    Modal({
      title: '系统提示',
      text: '待会儿关闭',
      cancelOpenType: 'getPhoneNumber'
    }).then(() => {

    }).catch(() => {})
  },
  onGetUserPhone ({ detail }) {
    wx.showToast({
      title: detail.iv,
      icon: 'none'
    })
  },
  onClick2 () {
    this.setData({
      visible2: true
    })
  }
})
