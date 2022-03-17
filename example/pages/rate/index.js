// pages/button/index.js
import page from '../../utils/page'

page({
  data: {
    rate: 3
  },
  onChange ({ detail }) {
    this.setData({
      rate: detail
    })
  }
})
