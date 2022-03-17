import { base } from '../behaviors/base'

function InyComponent (options) {
  // add custom-class
  options.externalClasses = options.externalClasses || []
  options.externalClasses.push('custom-class')

  // add base behavior
  options.behaviors = options.behaviors || []
  options.behaviors.unshift(base)

  options.options = {
    multipleSlots: true
  }

  Component(options)
}

export default InyComponent
