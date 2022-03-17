import InyComponent from '../common/component'

InyComponent({
  properties: {
    name: {
      type: [Number, String],
      value: ''
    },
    previewSize: {
      type: Number,
      value: 80
    },
    fileList: {
      type: Array,
      value: []
    },
    previewImage: {
      type: Boolean,
      value: true
    },
    count: {
      type: Number,
      value: 9
    },
    disabled: {
      type: Boolean,
      value: false
    },
    sizeType: {
      type: Array,
      value: ['original', 'compressed']
    },
    sourceType: {
      type: Array,
      value: ['album', 'camera']
    },
    maxSize: {
      type: Number,
      value: null
    },
    maxCount: {
      type: Number,
      value: 999
    },
    uploadText: {
      type: String,
      value: ''
    },
    mode: {
      type: String,
      value: 'scaleToFill'
    },
    beforeUpload: {
      type: Boolean,
      value: false
    },
    useSlot: {
      type: Boolean,
      value: false
    }
  },
  attached () {},
  methods: {
    onUpload () {
      if (this.data.disabled) return

      const { count, sizeType, sourceType, maxSize, maxCount, fileList, beforeUpload } = this.data

      const surplus = maxCount - fileList.length

      wx.chooseImage({
        count: surplus > count ? count : surplus,
        sizeType,
        sourceType,
        success: ({ tempFiles }) => {
          if (maxSize !== null) {
            const over = tempFiles.find(file => file.size > maxSize)

            if (over) {
              this.emit('over', { size: over.size, limit: maxSize })
              return
            }
          }

          tempFiles.forEach((file) => {
            file.url = file.path
          })

          if (beforeUpload) {
            this.emit('before-upload', {
              files: tempFiles,
              success: () => {
                this.emit('upload', {
                  files: tempFiles
                })
              }
            })

            return
          }

          this.emit('upload', {
            files: tempFiles
          })
        }
      })
    },
    onRemoveImage ({ currentTarget: { dataset: { index } } }) {
      if (this.data.disabled) return

      const fileList = this.data.fileList

      fileList.splice(index, 1)

      this.setData({
        fileList
      })

      this.emit('remove', { index })
    },
    onPreviewImage ({ currentTarget: { dataset: { url, index } } }) {
      const urls = this.data.fileList.map(file => file.url || file.path)

      wx.previewImage({
        urls,
        current: url
      })

      this.emit('preview', { url, index })
    },
    emit (eventName, data) {
      this.$emit(eventName, {
        ...data,
        name: this.data.name
      })
    }
  }
})
