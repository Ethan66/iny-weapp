// pages/button/index.js
import page from '../../utils/page'

page({
  data: {
    value: 3,
    valueAsync: 1
  },
  onChange ({ detail }) {
    console.log(detail)
  },
  onDecrease ({ detail }) {
    console.log(detail)
  },
  onIncrease ({ detail }) {
    console.log(detail)
  },
  onChangeAsync ({ detail }) {
    setTimeout(() => {
      this.setData({
        valueAsync: detail
      })
    }, 500)
  }
})