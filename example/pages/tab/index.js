// pages/button/index.js
import page from '../../utils/page'
import Toast from '../../dist/toast/index'

page({
  data: {
    actveName: 'A',
    tabs: [
      {
        name: 'A',
        title: '选项A'
      },
      {
        name: 'B',
        title: '选项B'
      },
      {
        name: 'C',
        title: '选项C'
      },
      {
        name: 'D',
        title: '选项D',
        disabled: true
      }
    ]
  },
  onClick ({ detail }) {
    Toast(`下标为: ${detail.index}, name 为: ${detail.name}, title 为: ${detail.title}`)
  },
  onDisabledClick ({ detail }) {
    Toast(`禁用项被点击: 下标为: ${detail.index}, name 为: ${detail.name}, title 为: ${detail.title}`)
    const tabs = this.data.tabs
    tabs.splice(0, 1)
    console.log(tabs)
    this.setData({
      tabs
    })
  }
})
