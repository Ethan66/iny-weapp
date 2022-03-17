import InyComponent from '../common/component'
import { transition } from '../behaviors/transition'

InyComponent({
  externalClasses: [
    'enter-class',
    'enter-active-class',
    'enter-to-class',
    'leave-class',
    'leave-active-class',
    'leave-to-class'
  ],
  behaviors: [transition]
})
