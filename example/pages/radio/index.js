// pages/button/index.js
import page from '../../utils/page'

page({
  data: {
    radio: 'A',
    disabled: false,
    radioList: ['A', 'B', 'C']
  },
  onChange ({ detail }) {
    this.setData({
      radio: detail
    })
  },
  onGroupChange ({ detail }) {
    this.setData({
      radio: detail
    })
  }
})