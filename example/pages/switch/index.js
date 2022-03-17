// pages/button/index.js
import page from '../../utils/page'

page({
  data: {
    checked: true,
    checkedAsync: true
  },
  onChangeAsync ({ detail }) {
    setTimeout(() => {
      this.setData({
        checkedAsync: detail
      })
    }, 800)
  },
  onChange ({ detail }) {
    this.setData({
      checked: detail
    })
  }
})
