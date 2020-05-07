<template>
  <div>
    <AppBar />
    <v-content class="background" app>
      <router-view></router-view>
    </v-content>
    <Footer class="hidden-xs-only" />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import AppBar from '@/components/AppBar.vue'
export default {
  data () {
    return {
      menu: false,
      selected: '',
      dates: [],
      search: true
    }
  },
  computed: {

    select () {
      return this.$route.path === '/events' ? 'select' : ''
    },
    select2 () {
      return this.$route.path === '/expanded' ? 'select' : ''
    }
  },
  components: {
    Footer,
    AppBar
  }
}
</script>
