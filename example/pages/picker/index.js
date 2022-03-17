// pages/button/index.js
import page from '../../utils/page'

page({
  data: {
    columns: ['北京', '上海', '广州', '深圳', '杭州'],
    popupVisible: false,
    columns2: [
      {
        name: '北京',
        disabled: true
      },
      {
        name: '上海'
      },
      {
        name: '广州'
      },
      {
        name: '深圳'
      },
      {
        name: '杭州'
      }
    ],
    columns3: [
      [
        '浙江',
        '甘肃'
      ],
      [
        '杭州',
        '宁波',
        '嘉兴',
        '绍兴'
      ]
    ]
  },
  togglePopup () {
    this.setData({
      popupVisible: !this.data.popupVisible
    })
  },
  buttonClick () {
    console.log('button click')
  },
  onGotUserInfo ({detail}) {
    console.log(detail)
  },
  onChange ({ detail }) {
    wx.showToast({
      title: `value is ${detail.value}, index is ${detail.index}`,
      icon: 'none'
    })
  },
  onChange2 ({ detail }) {
    wx.showToast({
      title: `value is ${detail.value.name}, index is ${detail.index}`,
      icon: 'none'
    })
  },
  onCancel ({ detail }) {
    wx.showToast({
      title: `cancel: value is ${detail.value}, index is ${detail.index}`,
      icon: 'none'
    })
  },
  onConfirm ({ detail }) {
    wx.showToast({
      title: `confirm: value is ${detail.value}, index is ${detail.index}`,
      icon: 'none'
    })
  },
  onCancelPop () {
    this.setData({
      popupVisible: false
    })
  },
  onConfirmPop () {
    this.setData({
      popupVisible: false
    })
  },
  onChange3 ({ detail }) {
    if (detail.index[0] === 0) {
      this.setData({
        columns3: [
          [
            '浙江',
            '甘肃'
          ],
          [
            '杭州',
            '宁波',
            '嘉兴',
            '绍兴'
          ]
        ]
      })
    } else {
      this.setData({
        columns3: [
          [
            '浙江',
            '甘肃'
          ],
          [
            '兰州',
            '天水',
            '酒泉',
            '陇南'
          ]
        ]
      })
    }
  }
})