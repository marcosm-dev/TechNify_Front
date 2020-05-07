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

    // eslint-disable-next-line vue/return-in-computed-property
    userProfile () {
      if (localStorage.role === 'ORGANIZER') {
        return true
      }
    },
    select () {
      return this.$route.path === '/events' ? 'select' : ''
    },
    select2 () {
      return this.$route.path === '/expanded' ? 'select' : ''
    }
  },
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/')
    },
    mosaic () {
      this.$router.push('/events')
    },
    expand () {
      this.$router.push('/expanded')
    },
    profile () {
      if (localStorage.role === 'ORGANIZER') {
        this.$router.push('/organizer')
      } else {
        this.$router.push('/user')
      }
    },

    home () {
      this.$router.push('/events')
    }
  },
  components: {
    Footer,
    AppBar
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  background: linear-gradient(
    180deg,
    rgba(1, 20, 29, 0.88) 9.9%,
    #062e41 39.58%,
    #000f15 100%
  ) !important;
  height: 128px;
}
.navbar-xs {
  background: linear-gradient(
    180deg,
    rgba(1, 20, 29, 0.88) 9.9%,
    #062e41 39.58%,
    #000f15 100%
  ) !important;
}
.navbar-filter {
  margin-top: 10%;
}
#title {
  align-self: center !important;
}
.logo {
  margin-top: -5px;
  height: 125px;
  max-width: 130px;
  margin-left: -15px;
  opacity: 0.9;
}
.views {
  text-align: center;
  margin: 1vh;
  margin-left: -20%;
}
.views-ipad {
  text-align: center;
  margin-left: 8vw;
}

.title {
  margin-bottom: 20px;
  margin-left: 20px;
  font-family: Prosto One;
  font-style: normal;
  font-weight: normal;
  font-size: 55px !important;
  line-height: 68px;
  color: #ffffff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.18);
}
.select {
  border: 2px solid white;
}
.select2 {
  border: 2px solid white;
}
.background {
  background-color: rgba(248, 247, 247, 0.979);
}
</style>
