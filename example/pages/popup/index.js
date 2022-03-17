// pages/button/index.js
import page from '../../utils/page'

page({
  data: {
    visible: false,
    bottomVisible: false,
    leftVisible: false,
    rightVisible: false,
    topVisible: false,
    roundVisible: false,
    closeVisible: false,
    selfCloseVisible: false
  },
  onNormalClick () {
    this.setData({
      visible: true
    })
  },
  closePop () {
    this.setData({
      visible: false,
      bottomVisible: false,
      leftVisible: false,
      rightVisible: false,
      topVisible: false,
      roundVisible: false,
      closeVisible: false,
      selfCloseVisible: false
    })
  },
  onBottomPop () {
    this.setData({
      bottomVisible: true
    })
  },
  onLeftPop () {
    this.setData({
      leftVisible: true
    })
  },
  onRightPop () {
    this.setData({
      rightVisible: true
    })
  },
  onTopPop () {
    this.setData({
      topVisible: true
    })
  },
  onRoundPop () {
    this.setData({
      roundVisible: true
    })
  },
  onClosePop () {
    this.setData({
      closeVisible: true
    })
  },
  onSelfClosePop () {
    this.setData({
      selfCloseVisible: true
    })
  }
})