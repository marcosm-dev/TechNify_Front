import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

import Default from './layouts/Default.vue'
import NoNavbar from './layouts/NoNavbar'

Vue.component('default-layout', Default)
Vue.component('no-navbar-layout', NoNavbar)

Vue.config.productionTip = false
// cloudinary.config({
//   cloud_name: 'sample',
//   api_key: '223145733496967',
//   api_secret: 'PsH8qegRJYaslEIbw4P64XGzDfQ'
// })

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
