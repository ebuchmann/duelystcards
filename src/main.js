import Vue from 'vue';
import VueRouter from 'vue-router';
import { sync } from 'vuex-router-sync';
import Raven from 'raven-js';
import RavenVue from 'raven-js/plugins/vue';
import Tooltip from 'utils/tooltip';
import { loadStorage } from 'utils/localStorage';
import store from './store/store';
import App from './App';
import credentials from '../credentials';
import { router } from './router-config';
import { api } from './api-config';

Vue.use(VueRouter);

sync(store, router);

Vue.filter('capitalize', (word) => {
  if (typeof word !== 'string') return '';
  return word.charAt(0).toUpperCase() + word.slice(1);
});

// Sets up Sentry error reporting
if (process.env.NODE_ENV === 'production') {
  Raven
    .config(credentials.sentry.url)
    .addPlugin(RavenVue, Vue)
    .install();
}

// Initializes any local storage data
loadStorage();

// Hide deck list if this page is loaded on a smaller device
if (window.innerWidth < 960) {
  store.dispatch('app/toggleProperty', 'drawerOpen');
}

(async () => {
  try {
    const { data } = await api.get('/get-account');
    if (data) store.commit('user/SET_USER', data.user);
  } catch (error) {
    // Don't care about a 403 response
  }

  // Initializes Vue
  new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount('#app');

  new Tooltip({ // eslint-disable-line
    theme: 'dark',
    delay: 25,
    distance: 5,
  });
})();
