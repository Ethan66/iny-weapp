// pages/button/index.js
import page from '../../utils/page'
import Toast from '../../dist/toast/index'

page({
  start () {
    const countTo = this.selectComponent('.control-count-to')
    countTo.start()
  },

  pause () {
    const countTo = this.selectComponent('.control-count-to')
    countTo.pause()
  },

  reset () {
    const countTo = this.selectComponent('.control-count-to')
    countTo.reset()
  },

  finished () {
    Toast('滚动结束')
  }
})
