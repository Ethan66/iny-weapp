// pages/button/index.js
import page from '../../utils/page'

page({
  data: {
    checkbox: false,
    disabled: false,
    checkbox1: false,
    checkbox2: true,
    checkboxList: ['A', 'B', 'C'],
    checkboxGroup: ['A', 'B']
  },
  onChange ({ detail }) {
    this.setData({
      checkbox: detail
    })
  },
  onChange1 ({ detail }) {
    this.setData({
      checkbox1: detail,
      disabled: detail
    })
  },
  onChange2 ({ detail }) {
    this.setData({
      checkbox2: detail
    })
  },
  onGroupChange ({ detail }) {
    console.log(detail)
    this.setData({
      checkboxGroup: detail
    })
  }
})