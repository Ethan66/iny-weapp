// pages/button/index.js
import page from '../../utils/page'
import Toast from '../../dist/toast/index'

page({
  data: {
    fileList1: [
      {
        url: 'https://fx.inyoumall.com/admin/goods/picture/2019-11-15/3b22dbc975d20f18-800x800.jpg'
      }
    ],
    fileList2: [],
    fileList3: [],
    fileList4: [],
    fileList5: [],
    fileList6: []
  },
  onPreview ({ detail }) {
    console.log(detail)
  },
  onUpload ({ detail }) {
    this.setData({
      [`fileList${detail.name}`]: this.data[`fileList${detail.name}`].concat(detail.files)
    })
    Toast(`上传函数执行, ${detail.name} `)
  },
  onRemove ({ detail }) {
    Toast(`删除第${detail.index}项图片`)
  },
  onOver ({ detail }) {
    Toast(`图片超出限制，图片大小为 ${detail.size}, 限制大小为 ${detail.limit}`)
  },
  onBeforeUpload ({ detail }) {
    Toast('上传前钩子函数执行，3m 后开始上传')

    setTimeout(() => {
      detail.success()
    }, 3000)
  }
})
