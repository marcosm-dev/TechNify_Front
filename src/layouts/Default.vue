<template>
  <v-container>
    <v-app-bar  app color="indigo darken-2" dark scroll-target="#scrolling-techniques" :prominent="$vuetify.breakpoint.lgAndUp" :class="$vuetify.breakpoint.smAndDown ? 'navbar-xs' : 'navbar'">
      <a app light href="/events" >
      <v-img class="hidden-md-and-down logo" src="https://i.ibb.co/XYF2k3M/LOGO.png"></v-img>
      </a>
      <v-toolbar-title class="d-lg-none headline">TechNify</v-toolbar-title>
      <v-toolbar-title class="hidden-md-and-down font display-4 font-weight-regular ml-10">TechNify</v-toolbar-title>
      <v-row v-if="appBarVisible">
      <v-col v-show="search" :class="$vuetify.breakpoint.lgAndUp ? 'views' : 'views-ipad'">
        <button @click="mosaic" v-bind:class="select">
          <v-icon :size="$vuetify.breakpoint.lgAndUp ? '60px' : '30px'">mdi-apps</v-icon>
        </button>
        <button class="ml-2 px-1 py-1" @click="expand" v-bind:class="select2">
          <v-icon :size="$vuetify.breakpoint.lgAndUp ? '60px' : '30px'">mdi-format-list-text</v-icon>
        </button>
      </v-col>
      </v-row>
      <v-col class="align-self-end d-flex" cols=3>
    <v-select
      v-model="selected"
      :items="filterTypes"
      label="Event's Type"
      required
    ></v-select>
      <div class="hidden-xs-only">
        <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="dates"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-combobox v-model="dates" multiple chips small-chips readonly v-on="on"></v-combobox>
              </template>
              <v-date-picker v-model="dates" multiple no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                <v-btn text color="primary" @click="$refs.menu.save(dates)">OK</v-btn>
              </v-date-picker>
            </v-menu>
       </div>
      </v-col>
        <v-icon @click="searchFunction" x-large>
          mdi-magnify
        </v-icon>
      <v-row justify="end">
      <v-menu bottom left>
        <template v-if="userMenu" v-slot:activator="{ on }">
            <v-btn :class="$vuetify.breakpoint.lgAndUp ? '' : 'icons'" dark icon v-on="on">
            <v-icon size="50px">mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <template v-else v-slot:activator>
          <button @click="login">
          <v-icon x-large >mdi-login</v-icon>
          </button>
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
      menu: false,
      filterTypes: ['JAVASCRIPT', 'UX', 'OTHERS', 'WEB DEVELOPER', 'HACKATONS'],
      selected: '',
      dates: [],
      search: true,
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
    login () {
      this.$router.push('/?auth=login')
    },
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
    },
    searchFunction () {
      this.$root.$emit('searchFunction', this.selected, this.dates[0])
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
  margin-left: 10%;
}
.views-ipad{
  text-align: center;
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
