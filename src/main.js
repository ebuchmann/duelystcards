import Vue from 'vue'
import VueRouter from 'vue-router'
import { router } from './router-config'
import store from './store/store'
import { sync } from 'vuex-router-sync'
import App from './App'

Vue.use(VueRouter)

sync(store, router)

Vue.filter('capitalize', word => {
  return word.charAt(0).toUpperCase() + word.slice(1)
})

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
