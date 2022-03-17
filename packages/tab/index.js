import InyComponent from '../common/component'

InyComponent({
  relations: {
    '../tabs/index': {
      type: 'ancestor',
      linked (target) {
        this.parent = target
      },
      unlinked () {
        this.parent = null
      }
    }
  },

  properties: {
    title: String,
    disabled: Boolean,
    titleStyle: String,
    name: {
      type: [Number, String],
      value: ''
    }
  },

  data: {
    width: null,
    inited: false,
    active: false,
    animated: false
  },

  observers: {
    title: function () {
      this.update()
    },
    disabled: function () {
      this.update()
    },
    name: function () {
      this.setComputedName()
    }
  },

  methods: {
    setComputedName () {
      this.computedName = this.data.name || this.index
    },

    update () {
      if (this.parent) {
        this.parent.updateTabs()
      }
    }
  }
})
