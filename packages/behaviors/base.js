export const base = Behavior({
  methods: {
    $emit (...args) {
      this.triggerEvent(...args)
    },
    set (data, cb) {
      return new Promise((resolve, reject) => {
        this.setData(data, () => {
          cb && typeof cb === 'function' ? cb.call(this) : resolve()
        })
      })
    },
    getRect (selector, all) {
      return new Promise(resolve => {
        wx.createSelectorQuery()
          .in(this)[all ? 'selectAll' : 'select'](selector)
          .boundingClientRect(rect => {
            if (all && Array.isArray(rect) && rect.length) {
              resolve(rect)
            }

            if (!all && rect) {
              resolve(rect)
            }
          })
          .exec()
      })
    }
  }
})
