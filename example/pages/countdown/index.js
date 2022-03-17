// pages/button/index.js
import page from '../../utils/page'
import Toast from '../../dist/toast/index'

page({
  start () {
    const countDown = this.selectComponent('.control-count-down')
    countDown.start()
  },

  pause () {
    const countDown = this.selectComponent('.control-count-down')
    countDown.pause()
  },

  reset () {
    const countDown = this.selectComponent('.control-count-down')
    countDown.reset()
  },

  finished () {
    Toast('倒计时结束')
  }
})
