import InyComponent from '../common/component'
import { nextTick } from '../common/utils'

InyComponent({
  externalClasses: [
    'title-class',
    'content-class'
  ],
  properties: {
    name: null,
    title: null,
    icon: String,
    value: String,
    disabled: {
      type: Boolean,
      value: false
    },
    label: String,
    clickable: Boolean,
    border: {
      type: Boolean,
      value: true
    },
    isLink: {
      type: Boolean,
      value: true
    }
  },
  relations: {
    '../collapse/index': {
      type: 'ancestor',
      linked (target) {
        this.parent = target
        this.initExpanded()
      },
      unlinked () {
        this.parent = null
      }
    }
  },

  data: {
    contentHeight: 0,
    expanded: false,
    transition: false
  },

  attached () {},

  methods: {
    initExpanded () {
      this.updateExpanded()
        .then(nextTick)
        .then(() => {
          const data = { transition: true }

          if (this.data.expanded) {
            data.contentHeight = 'auto'
          }

          this.setData(data)
        })
    },
    updateExpanded () {
      if (!this.parent) {
        return Promise.resolve()
      }

      const { value, accordion } = this.parent.data
      const { children = [] } = this.parent
      const { name } = this.data

      const index = name ? children.findIndex(child => child.data.name === name) : children.indexOf(this)

      const currentName = name === null ? index : name

      this.currentName = currentName

      const expanded = accordion ? value === currentName : (value || []).some((name) => name === currentName)

      const stack = []

      if (expanded !== this.data.expanded) {
        stack.push(this.updateStyle(expanded))
      }

      stack.push(this.set({ index, expanded }))

      return Promise.all(stack)
    },
    updateStyle (expanded) {
      return this.getRect('.iny-collapse-item__content')
        .then(rect => rect.height)
        .then(height => {
          if (expanded) {
            return this.set({
              contentHeight: height ? `${height}px` : 'auto'
            })
          }
          return this.set({ contentHeight: `${height}px` })
            .then(nextTick)
            .then(() => {
              this.set({
                contentHeight: 0
              })
            })
        })
    },
    onClick () {
      if (this.data.disabled) {
        return
      }
      if (!this.parent) return

      const { expanded } = this.data

      this.parent.switch(this.currentName, !expanded)
    },

    onTransitionEnd () {
      if (this.data.expanded) {
        this.setData({
          contentHeight: 'auto'
        })
      }
    }
  }
})
