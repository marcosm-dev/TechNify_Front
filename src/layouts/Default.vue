<template>
  <div>
    <v-app-bar app color="indigo darken-2" dark prominent scroll-target="#scrolling-techniques" class="navbar">
      <v-img to="/home" class="img" src="https://i.ibb.co/XYF2k3M/LOGO.png"></v-img>
      <v-toolbar-title class="font display-4 font-weight-regular">TechNify</v-toolbar-title>
      <v-row v-if="appBarVisible" class="icon">
        <v-col class="text-center align my-12">
          <button @click="mosaic" class="mr-2 px-1 py-1" v-bind:class="select">
            <v-icon x-large>mdi-apps</v-icon>
          </button>
          <button class="ml-2 px-1 py-1" @click="expand" v-bind:class="select2">
            <v-icon x-large>mdi-format-list-text</v-icon>
          </button>
          <v-spacer></v-spacer>
        </v-col>
      </v-row>
      <v-row v-else class="hidden" justify="center">
        <v-icon x-large>mdi-apps</v-icon>
        <v-icon x-large>mdi-format-list-text</v-icon>
      </v-row>
      <v-menu bottom left>
        <template v-if="userMenu" v-slot:activator="{ on }">
          <v-btn class="mt-12 icon" dark icon v-on="on">
            <v-icon x-large>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
          <template v-else v-slot:activator="{ on }">
          <v-btn to="/?auth=login" class="my-10 navbar text-lowercase"  max-height="20px" v-on="on">
          <span class="text-uppercase">D</span>o you haven't account ?
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
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <Footer />
  </div>
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
    rgba(3, 53, 76, 0.88) 9.9%,
    #03354c 39.58%,
    #000f15 100%
  ) !important;
}
.img {
  margin-top: -5px;
  height: 125px;
  max-width: 130px;
  margin-left: -15px;
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
.align {
  margin-right: 25%;
  margin-top: 4%;
}
.select {
  border: 2px solid white;
}
.select2 {
  border: 2px solid white;
}
.icon {
  margin-right: 6%;
}
.font {
  margin-left: 5%;
  margin-right: -4%;
}
.hidden {
  opacity: 0;
}
</style>
