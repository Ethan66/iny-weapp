const queue = []

const defaultOptions = {
  selector: '#iny-modal',
  visible: true,
  zIndex: 100,
  async: false,
  title: '',
  text: '',
  align: 'center',
  cancel: true,
  confirm: true,
  cancelText: '取消',
  confirmText: '确认',
  cancelOpenType: '',
  confirmOpenType: '',
  cancelType: 'primary',
  confirmType: 'theme',
  transition: 'scale'
}

const getRoute = (level = 1) => {
  const pages = getCurrentPages()

  return pages[pages.length - level] || null
}

const Modal = (options) => {
  return new Promise((resolve, reject) => {
    options = Object.assign({}, defaultOptions, options)

    const page = getRoute()
    const el = page.selectComponent(options.selector)
    delete options.selector

    if (el) {
      el.setData({
        onCancel: reject,
        onConfirm: resolve,
        ...options
      })

      queue.push(el)
    } else {
      console.error('没有找到 iny-modal DOM 节点 ～～～')
    }
  })
}

Modal.alert = options => {
  return Modal({
    cancel: false,
    ...options
  })
}

Modal.confirm = (options) => {
  return Modal(options)
}

Modal.close = () => {
  queue.forEach(modal => {
    modal.close()
  })

  queue.length = 0
}

export default Modal
