const defaultOptions = {
  selector: '#iny-notify',
  visible: true,
  type: 'danger',
  text: '',
  background: '',
  duration: 3000,
  zIndex: 110,
  color: '#fff',
  safeAreaTop: false,
  onClick: () => {},
  onClose: () => {}
}

const getRoute = (level = 1) => {
  const pages = getCurrentPages()

  return pages[pages.length - level] || null
}

function parseOptions (text) {
  return typeof text === 'string' ? { text } : text
}

const Notify = (options) => {
  options = Object.assign({}, defaultOptions, parseOptions(options))

  const context = getRoute()
  const notify = context.selectComponent(options.selector)

  delete options.selector

  if (notify) {
    notify.setData(options)
    notify.show()
  } else {
    console.warn('未找到 iny-notify 节点，请确认 selector 是否正确')
  }
}

export default Notify
