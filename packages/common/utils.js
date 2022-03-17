export function getRoute (level = 1) {
  const pages = getCurrentPages()

  return pages[pages.length - level] || null
}

export function isObj (obj) {
  return typeof obj === 'object' && obj !== null
}

export function isUnd (value) {
  return typeof value === 'undefined'
}

export function classNames (value, prefix = '', separator = '-') {
  if (!value) return
  let className = ''
  if (Array.isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      if (typeof value[i] === 'string') {
        className += ` ${prefix}${separator}${value[i]}`
      } else if (isObj(value[i])) {
        className += classNames(value[i], prefix, separator)
      }
    }
  } else {
    Object.keys(value).forEach(key => {
      const result = value[key]
      if (typeof result === 'string') {
        className += ` ${prefix}${separator}${result}`
        return
      }
      if (typeof result === 'boolean' && result) {
        className += ` ${prefix}${separator}${key}`
      }
    })
  }
  return className
}

export function range (num, min, max) {
  return Math.min(Math.max(num, min), max)
}

export function isLinearArray (value) {
  return !(value instanceof Array && value[0] && value[0] instanceof Array)
}

export function nextTick () {
  return new Promise(resolve => setTimeout(resolve, 1000 / 30))
}
