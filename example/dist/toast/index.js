
export function Toast (options) {
  if (typeof options === 'string') {
    options = {
      title: options,
      icon: 'none'
    }
  }

  wx.showToast(options)
}

Toast.success = function (options) {
  if (typeof options === 'string') {
    options = {
      title: options,
      icon: 'success'
    }
  }

  wx.showToast(options)
}

Toast.fail = function (options) {
  if (typeof options === 'string') {
    options = {
      title: options,
      icon: 'none'
    }
  }
  wx.showToast(options)
}

Toast.loading = function (options) {
  if (typeof options === 'string') {
    options = {
      title: options
    }
  }

  wx.showLoading(options)

  return {
    close: () => wx.hideLoading()
  }
}

Toast.closeLoading = function () {
  wx.hideLoading()
}

Toast.close = function () {
  wx.hideToast()
}

export default Toast
