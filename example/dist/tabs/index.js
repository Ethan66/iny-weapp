import InyComponent from '../common/component'
import { isUnd, nextTick } from '../common/utils'

InyComponent({
  externalClasses: ['nav-class', 'tab-class', 'tab-active-class', 'line-class', 'track-class'],
  properties: {
    color: String,
    sticky: Boolean,
    animated: Boolean,
    swipeable: Boolean,
    lineWidth: {
      type: [String, Number],
      value: -1
    },
    lineHeight: {
      type: [String, Number],
      value: -1
    },
    active: {
      type: [String, Number],
      value: 0
    },
    type: {
      type: String,
      value: 'line'
    },
    border: {
      type: Boolean,
      value: true
    },
    duration: {
      type: Number,
      value: 0.3
    },
    zIndex: {
      type: Number,
      value: 1
    },
    swipeThreshold: {
      type: Number,
      value: 4
    },
    offsetTop: {
      type: Number,
      value: 0
    }
  },

  data: {
    tabs: [],
    lineStyle: '',
    scrollLeft: 0,
    scrollable: false,
    trackStyle: '',
    wrapStyle: '',
    position: '',
    currentIndex: 0
  },

  observers: {
    'color, lineWidth, lineHeight': function () {
      this.setLine()
    },
    active: function () {
      this.setActiveTab()
    },
    animated: function () {
      this.setTrack()
    },
    swipeThreshold: function () {
      this.setData({
        scrollable: this.children.length > this.data.swipeThreshold
      })
    }
  },

  relations: {
    '../tab/index': {
      type: 'descendant',
      linked (child) {
        child.index = this.children.length
        child.setComputedName()
        this.children.push(child)
        this.updateTabs(this.data.tabs.concat(child.data))
      },
      unlinked (child) {
        const index = this.children.indexOf(child)
        if (index === -1) return
        const { tabs } = this.data

        tabs.splice(index, 1)

        this.children.splice(index, 1)

        let i = index

        while (i < this.children.length) {
          this.children[i].index--
          this.children[i].setComputedName()
          i++
        }
        this.currentName = undefined
        this.updateTabs(tabs)
      }
    }
  },

  created () {
    this.children = []
    this.offset = 0
  },
  atteched () {
    this.setActiveTab()
  },

  methods: {
    emit (eventName, name, index) {
      const { currentIndex, tabs } = this.data

      this.$emit(eventName, {
        name,
        title: tabs[currentIndex].title,
        index
      })
    },
    onTap ({ currentTarget: { dataset: { index } } }) {
      const child = this.children[index]

      if (child.data.disabled) {
        this.emit('disabled-click', child.computedName, index)
      } else {
        this.emit('click', child.computedName, index)
        this.setActive(child.computedName)
      }
    },
    setActive (currentName) {
      if (this.currentName === currentName) return
      this.currentName = currentName
      this.setActiveTab()
    },
    updateTabs (tabs) {
      tabs = tabs || this.data.tabs
      this.setData({
        tabs,
        scrollable: tabs.length > this.data.swipeThreshold
      }, () => {
        this.setActiveTab()
      })
    },
    setActiveTab () {
      if (isUnd(this.currentName)) {
        // active 不存在时，第一种是第一次没有指定，第二种是动态改变项时遗留被删除的
        const current = this.children.find(child => child.computedName === this.data.active)
        this.currentName = current ? this.data.active : (this.children[0] || {}).computedName
      }

      this.children.forEach((child, index) => {
        const data = {
          active: child.computedName === this.currentName
        }

        if (data.active) {
          this.setData({
            currentIndex: index
          })
          data.inited = true
        }

        if (data.active !== child.data.active) {
          child.setData(data)
        }
      })

      nextTick().then(() => {
        this.setLine()
        this.scrollIntoView()
        this.setTrack()
      })
    },
    setLine (skipTransition = false) {
      if (this.data.type !== 'line') return

      const { color, duration, currentIndex, lineWidth, lineHeight } = this.data

      this.getRect('.iny-tabs__title', true).then((rects) => {
        const rect = rects[currentIndex]
        const width = lineWidth !== -1 ? lineWidth : rect.width / 2
        const height = lineHeight !== -1 ? `height: ${lineHeight}px; border-radius: ${lineHeight}px;` : ''

        let left = rects
          .slice(0, currentIndex)
          .reduce((prev, curr) => prev + curr.width, 0)

        left += (rect.width - width) / 2

        const transition = skipTransition
          ? ''
          : `transition-duration: ${duration}s; -webkit-transition-duration: ${duration}s;`

        this.setData({
          lineStyle: `
          ${height}
          width: ${width}px;
          background-color: ${color};
          -webkit-transform: translate3d(${left}px, 0, 0);
          transform: translate3d(${left}px, 0, 0);
          ${transition}
        `
        })
      })
    },
    scrollIntoView () {
      const { currentIndex, scrollable } = this.data
      if (!scrollable) return

      Promise.all([
        this.getRect('.iny-tabs__title', true),
        this.getRect('.iny-tabs__nav')
      ]).then(
        ([tabRects, navRect]) => {
          const tabRect = tabRects[currentIndex]
          const offsetLeft = tabRects
            .slice(0, currentIndex)
            .reduce((prev, curr) => prev + curr.width, 0)

          this.setData({
            scrollLeft: offsetLeft - (navRect.width - tabRect.width) / 2
          })
        }
      )
    },
    setTrack () {
      const { animated, currentIndex } = this.data

      if (!animated) return ''

      this.getRect('.iny-tabs__content').then(
        (rect) => {
          const { width } = rect

          const offset = -1 * currentIndex * width

          const totalWidth = width * this.children.length

          this.offset = offset

          this.totalWidth = totalWidth

          this.tabWidth = width

          this.setTrackStyle(offset)

          const data = { width, animated }

          this.children.forEach((child) => {
            child.setData(data)
          })
        }
      )
    },
    onTouchStart (event) {
      if (!this.data.swipeable) return

      this.startX = event.touches[0].clientX
      this.startY = event.touches[0].clientY
    },

    onTouchMove (event) {
      if (!this.data.swipeable) return

      this.deltaX = event.touches[0].clientX - this.startX
      this.deltaY = event.touches[0].clientY - this.startY

      this.offsetX = Math.abs(this.deltaX)
      this.offsetY = Math.abs(this.deltaY)

      if (!this.data.animated) return

      this.setTrackStyle(this.offset + Math.min(this.deltaX, this.tabWidth))
    },

    onTouchEnd () {
      if (!this.data.swipeable) return

      const { tabs, currentIndex } = this.data

      const { deltaX, offsetX, offsetY } = this
      const minSwipeDistance = 50

      if (offsetX > offsetY && offsetX > minSwipeDistance) {
        if (deltaX > 0 && currentIndex !== 0) {
          this.setActive(this.children[currentIndex - 1].computedName)
        } else if (deltaX < 0 && currentIndex !== tabs.length - 1) {
          this.setActive(this.children[currentIndex + 1].computedName)
        } else {
          if (!this.data.animated) {
            return
          }
          this.setTrackStyle(currentIndex === 0 ? 0 : -(this.totalWidth - this.tabWidth))
        }
      } else {
        if (!this.data.animated) {
          return
        }
        this.setTrackStyle(this.offset)
      }
    },
    setTrackStyle (offset) {
      this.setData({
        trackStyle: `
          width: ${this.totalWidth}px;
          transform: translate3d(${offset}px, 0, 0);
          transition: transform ${this.data.duration}s;
          display: -webkit-box;
          display: flex;
        `
      })
    }

  }
})
