// pages/button/index.js
import page from '../../utils/page'

page({
  buttonClick () {
    console.log('button click')
  },
  onGotUserInfo ({detail}) {
    console.log(detail)
  }
})