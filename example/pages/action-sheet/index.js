// pages/button/index.js
import page from '../../utils/page'

page({
  data: {
    visible: false,
    visible1: false,
    actions: [
      {
        title: '选项一',
        name: 1,
        disabled: true
      },
      {
        title: '选项二',
        name: 2
      },
      {
        title: '选项三',
        name: 3,
        openType: 'share'
      }
    ],
    checkboxValue: [1, 2]
  },
  onClick ({currentTarget: { dataset: { index}}}) {
    this.setData({
      [`visible${index}`]: true
    })
  },
  onSelect ({ detail }) {
    wx.showToast({
      title: '选择下标为:' + detail,
      icon: 'none'
    })
  },
  onChange ({ detail }) {
    console.log(detail)
    wx.showToast({
      title: '当前选择为' + detail.toString(),
      icon: 'none'
    })
  },
  onConfirm ({ detail }) {
    wx.showToast({
      title: '最终选择为' + detail.toString(),
      icon: 'none'
    })
  }
})