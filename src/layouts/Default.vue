<template>
  <v-container>
    <v-app-bar  app color="indigo darken-2" dark scroll-target="#scrolling-techniques" :prominent="$vuetify.breakpoint.lgAndUp" :class="$vuetify.breakpoint.smAndDown ? 'navbar-xs' : 'navbar'">
      <a app light href="/events" >
      <v-img class="hidden-md-and-down logo" src="https://i.ibb.co/XYF2k3M/LOGO.png"></v-img>
      </a>
      <v-toolbar-title class="d-lg-none headline">TechNify</v-toolbar-title>
      <v-toolbar-title class="hidden-md-and-down font display-4 font-weight-regular ml-10">TechNify</v-toolbar-title>
      <v-row v-if="appBarVisible">
      <v-col :class="$vuetify.breakpoint.lgAndUp ? 'views' : 'views-ipad'">
        <button @click="mosaic" v-bind:class="select">
          <v-icon :size="$vuetify.breakpoint.lgAndUp ? '80px' : '40px'">mdi-apps</v-icon>
        </button>
        <button class="ml-2 px-1 py-1" @click="expand" v-bind:class="select2">
          <v-icon :size="$vuetify.breakpoint.lgAndUp ? '80px' : '40px'">mdi-format-list-text</v-icon>
        </button>
      </v-col>
      </v-row>
      <v-row justify="end">
      <v-menu bottom left>
        <template v-if="userMenu" v-slot:activator="{ on }">
            <v-btn :class="$vuetify.breakpoint.lgAndUp ? 'my-10' : 'icons'" dark icon v-on="on">
            <v-icon size="50px">mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <template v-else v-slot:activator="{ on }">
          <v-btn to="/?auth=login" class="my-10 navbar" max-height="50px" v-on="on">
          <span class="text-uppercase" >Sign In</span>
          </v-btn>
        </template>
           <v-list>
          <v-list-item-group active-class="deep-blue--text text--accent-4">
             <v-list-item v-if="userProfile" to="/organizerprofile">
              <v-list-item-icon>
                <v-list-item-title class="headline">Profile
                </v-list-item-title>
              </v-list-item-icon>
            <v-spacer></v-spacer>
              <v-icon  x-large>mdi-account</v-icon>
            </v-list-item>
              <v-list-item v-else to="/profile">
              <v-list-item-icon>
                <v-list-item-title  class="headline">Profile
                </v-list-item-title>
              </v-list-item-icon>
            <v-spacer></v-spacer>
              <v-icon  x-large>mdi-account</v-icon>
            </v-list-item>
              <v-list-item v-show="userProfile" to="/create">
              <v-list-item-icon>
                <v-list-item-title class="headline">Create Event</v-list-item-title>
              </v-list-item-icon>
              <v-spacer></v-spacer>
              <v-icon  x-large>mdi-table-edit</v-icon>
            </v-list-item>
             <v-list-item v-if="userProfile" to="/organizer">
              <v-list-item-icon>
                <v-list-item-title class="headline">My Events</v-list-item-title>
              </v-list-item-icon>
              <v-spacer></v-spacer>
              <v-icon x-large>mdi-calendar-outline</v-icon>
            </v-list-item>
             <v-list-item v-else to="/wishes">
              <v-list-item-icon>
                <v-list-item-title class="headline">My Events</v-list-item-title>
              </v-list-item-icon>
              <v-spacer></v-spacer>
              <v-icon x-large>mdi-calendar-outline</v-icon>
            </v-list-item>
            <v-list-item @click="logout">
              <v-list-item-icon>
                <v-list-item-title class="headline">Logout</v-list-item-title>
              </v-list-item-icon>
              <v-spacer></v-spacer>
              <v-icon x-large>mdi-logout</v-icon>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-menu>
      </v-row>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
      </v-content>
    <Footer class="hidden-xs-only" />
  </v-container>
</template>

<script>
import Footer from '@/components/Footer.vue'

export default {
  data () {
    return {
      select: '',
      select2: '',
      userMenu: localStorage.token
    }
  },
  computed: {
    appBarVisible () {
      return this.$route.meta.appBarVisible
    },
    // eslint-disable-next-line vue/return-in-computed-property
    userProfile () {
      if (localStorage.role === 'ORGANIZER') {
        return true
      }
    }
  },
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/')
    },
    mosaic () {
      this.select = 'select'
      this.select2 = 'null'
      this.$router.push('/events')
    },
    expand () {
      this.select2 = 'select2'
      this.select = 'null'
      this.$router.push('/expanded')
    },
    profile () {
      if (localStorage.role === 'ORGANIZER') {
        this.$router.push('/organizer')
      } else {
        this.$router.push('/user')
      }
    }
  },
  components: {
    Footer
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
.logo {
  margin-top: -5px;
  height: 125px;
  max-width: 130px;
  margin-left: -15px;
  opacity: 0.9;
}
.views{
  text-align: center;
  margin: 1vh;
  margin-left: 45%;
}
.views-ipad{
  text-align: end;
  margin-left: -2vw;
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
</style>
