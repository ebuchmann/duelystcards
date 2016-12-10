import Vue from 'vue'
import VueRouter from 'vue-router'
import { router } from './router-config'
import store from './store/store'
import { sync } from 'vuex-router-sync'
import App from './App'
import Raven from 'raven-js'
import RavenVue from 'raven-js/plugins/vue'
import credentials from '../credentials'
import { loadStorage } from 'utils/localStorage'
import { toggleProperty } from 'store/actions'
import Tooltip from 'utils/tooltip'
import { api } from './api-config'

Vue.use(VueRouter)

sync(store, router)

Vue.filter('capitalize', word => {
  if (typeof word !== 'string') return ''
  return word.charAt(0).toUpperCase() + word.slice(1)
})

// Sets up Sentry error reporting
if (process.env.NODE_ENV === 'production') {
  Raven
    .config(credentials.sentry.url)
    .addPlugin(RavenVue, Vue)
    .install()
}

// Initializes any local storage data
loadStorage()

// Hide deck list if this page is loaded on a smaller device
if (window.innerWidth < 960) {
  toggleProperty(store, 'drawerOpen')
}

(async () => {
  const { data } = await api.get('/get-account')
  if (data) store.commit('SET_USER', data.user)
})()

// Initializes Vue
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

new Tooltip({
  theme: 'dark',
  delay: 25,
  distance: 5
});