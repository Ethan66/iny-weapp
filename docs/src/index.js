import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import routes from './router'
import VantDoc from '@vant/doc'

Vue.use(VueRouter).use(VantDoc)

const router = new VueRouter({
  mode: 'hash',
  routes: routes(),
  scrollBehavior (to) {
    if (to.hash) {
      return { selector: to.hash }
    }

    return { x: 0, y: 0 }
  }
})

const ua = navigator.userAgent.toLowerCase()
const isMobile = /ios|iphone|ipod|ipad|android/.test(ua)

router.beforeEach((route, redirect, next) => {
  if (isMobile) {
    window.location.replace('/iny-weapp/mobile.html?weapp=1')
  }

  next()
})

router.afterEach(() => {
  window.scrollTo(0, 0)
})

Vue.config.productionTip = false

/* eslint-disable */

new Vue({
  el: '#app',
  mounted () {
    setTimeout(() => {
      // wait page init
      if (this.$route.hash) {
        const el = document.querySelector(this.$route.hash)
        if (el) {
          el.scrollIntoView({
            behavior: 'smooth'
          })
        }
      }
    }, 1000)
  },
  render: h => h(App),
  router
})
