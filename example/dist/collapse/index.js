import InyComponent from '../common/component'

InyComponent({
  properties: {
    value: {
      type: null
    },
    accordion: {
      type: Boolean
    },
    border: {
      type: Boolean,
      value: true
    }
  },
  observers: {
    'value, accordion': function () {
      if (this.data.value === null) return
      this.updateExpanded()
    }
  },
  relations: {
    '../collapse-item/index': {
      type: 'descendant',
      linked (target) {
        this.children.push(target)
      },
      unlinked (target) {
        (this.children || []).filter(child => child !== target)
      }
    }
  },

  created () {
    this.children = []
  },

  methods: {
    updateExpanded () {
      this.children.forEach((child) => {
        child.updateExpanded()
      })
    },
    switch (name, expanded) {
      const { accordion, value } = this.data
      if (!accordion) {
        name = expanded
          ? (value || []).concat(name)
          : (value || []).filter(
            (activeName) => activeName !== name
          )
      } else {
        name = expanded ? name : ''
      }
      this.$emit('change', name)
    }
  }
})
