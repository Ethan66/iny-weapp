// pages/button/index.js
import page from '../../utils/page'
import Toast from '../../dist/toast/index'

page({
  onBaseClick () {
    Toast('你事发了')
  },
  onSuccess () {
    Toast.success('你成功逃脱了')
  },
  onFail () {
    Toast.fail('你被捕获了')
  },
  onLoadingClick () {
    const toast = Toast.loading('加载中...')

    setTimeout(() => {
      toast.close()
      // 或者
      // Toast.closeLoading()
    }, 3000)
  },
  onHighClick () {
    Toast({
      title: '你被发现了',
      duration: 4000,
      icon: 'loading',
      mask: false,
      success: function () {
        console.log('调用成功')
      }
    })

    setTimeout(() => {
      Toast.close()
    }, 3000)
  }
})
