function page (page) {
  return Page({
    onShareAppMessage () {
      return {
        title: '最好用的电商小程序组件'
      }
    },
    ...page
  })
}

export default page
