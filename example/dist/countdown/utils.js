
export function formatNumber (value) {
  const str = value.toString()

  return str[1] ? str : `0${str}`
}

export function parseFormater (formater) {
  const result = {
    DD: '',
    HH: '',
    mm: '',
    ss: '',
    sss: ''
  }
  const keys = Object.keys(result)
  const l = keys.length
  let i = 0
  while (i < l) {
    const index = formater.indexOf(keys[i])
    const end = i + 1 === l ? formater.length : formater.indexOf(keys[i + 1])
    result[keys[i]] = index === -1 ? null : formater.slice(index + keys[i].length, end)
    i++
  }
  return result
}

export function parseTime (value, hasDay = true) {
  let days = 0
  let hours = 0
  // 有天
  if (hasDay) {
    days = Math.floor(value / 1000 / 60 / 60 / 24) // 计算剩余天
    hours = Math.floor((value / 1000 / 60 / 60) % 24)
  } else {
    hours = Math.floor(value / 1000 / 60 / 60)
  }
  const minutes = Math.floor((value / 1000 / 60) % 60)
  const seconds = Math.floor((value / 1000) % 60)
  const millisecond = Math.floor(value % 1000)

  return {
    days,
    hours,
    minutes,
    seconds,
    millisecond
  }
}
