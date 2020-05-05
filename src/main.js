import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import firebase from 'firebase'

import Default from './layouts/Default.vue'
import NoNavbar from './layouts/NoNavbar'

Vue.component('default-layout', Default)
Vue.component('no-navbar-layout', NoNavbar)

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: 'AIzaSyBYEP9OYpih7Z-lOQIaGoJpVr9MwLxk50E',
  authDomain: 'technify-dc30d.firebaseapp.com',
  databaseURL: 'https://technify-dc30d.firebaseio.com',
  projectId: 'technify-dc30d',
  storageBucket: 'technify-dc30d.appspot.com',
  messagingSenderId: '318314243398',
  appId: '1:318314243398:web:6afbf0b03502b58c8f3147',
  measurementId: 'G-TJHLC9YFFH'
}
firebase.initializeApp(firebaseConfig)

new Vue({
  router,
  vuetify,
  watch: {
    $route: {
      immediate: true,
      handler () {
        document.title = 'Events Tech Website'
      }
    }
  },
  render: h => h(App)
}).$mount('#app')
