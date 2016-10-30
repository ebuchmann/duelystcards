import Vue from 'vue'
import VueRouter from 'vue-router'
import { router } from './router-config'
import store from './store/store'
import { sync } from 'vuex-router-sync'
import App from './App'
import Raven from 'raven-js'
import RavenVue from 'raven-js/plugins/vue'

Vue.use(VueRouter)

sync(store, router)

Vue.filter('capitalize', word => {
  return word.charAt(0).toUpperCase() + word.slice(1)
})

Raven
  .config('https://359fdfd1a7fb42e8acc7af758526118e@sentry.io/110480')
  .addPlugin(RavenVue, Vue)
  .install()

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
