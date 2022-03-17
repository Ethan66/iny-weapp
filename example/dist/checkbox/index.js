import InyComponent from '../common/component'
InyComponent({
  behaviors: ['wx://form-field'],
  externalClasses: [
    'icon-class',
    'label-class'
  ],
  properties: {
    name: {
      type: String,
      optionalTypes: [Number]
    },
    value: Boolean,
    disabled: Boolean,
    icon: {
      type: String,
      value: 'check'
    },
    round: {
      type: Boolean,
      value: true
    },
    checkedColor: String
  },
  relations: {
    '../checkbox-group/index': {
      type: 'ancestor',
      linked (target) {
        this.parent = target
      },
      unlinked () {
        this.parent = null
      }
    }
  },

  methods: {
    emitChnage (value) {
      if (this.parent) {
        this.setParentValue(value)
      } else {
        this.$emit('change', value)
      }
    },
    toggle () {
      const { disabled, value } = this.data
      if (!disabled) {
        this.emitChnage(!value)
      }
    },
    setParentValue (value) {
      const parentValue = this.parent.data.value.slice()
      // checkbox-group item name
      const { name } = this.data
      const { max } = this.parent.data
      if (value) {
        if (max && parentValue.length >= max) {
          return
        }
        if (parentValue.indexOf(name) === -1) {
          parentValue.push(name)
          this.parent.$emit('change', parentValue)
        }
      } else {
        const index = parentValue.indexOf(name)
        if (index !== -1) {
          parentValue.splice(index, 1)
          this.parent.$emit('change', parentValue)
        }
      }
    }
  }
})
