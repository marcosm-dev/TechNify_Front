import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VueTextareaAutosize from 'vue-textarea-autosize'

import Default from './layouts/Default.vue'
import NoNavbar from './layouts/NoNavbar'

import firebase from 'firebase'
import 'firebase/firebase-firestore'

Vue.use(VueTextareaAutosize)
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
const ignoreWarnMessage = 'The .native modifier for v-on is only valid on components but it was used on <div>.'

Vue.config.warnHandler = function (msg, vm, trace) {
  // `trace` is the component hierarchy trace
  if (msg === ignoreWarnMessage) {
    msg = null
    vm = null
    trace = null
  }
}

firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()

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
