// pages/button/index.js
import page from '../../utils/page'

page({
  data: {
    value1: ['1'],
    value2: ['1'],
    value3: '2',
    value4: []
  },
  onChange({ detail, currentTarget: { dataset: { key }} }) {
    this.setData({
      [`value${key}`]: detail
    })
  }
})