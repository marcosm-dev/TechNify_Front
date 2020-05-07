<template>
  <div>
    <v-app-bar color="deep-purple accent-4" dense dark fixed app height="80px" class="toolbar">
      <router-link to="/events">
        <v-img class="hidden-md-and-down logo" src="https://i.ibb.co/XYF2k3M/LOGO.png"></v-img>
      </router-link>
      <router-link to="/events">
        <v-toolbar-title class="toolbar_title">Technify</v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>

      <v-btn icon v-if="appBarVisible">
        <v-icon>mdi-format-list-text</v-icon>
      </v-btn>

      <v-btn icon v-if="appBarVisible">
        <v-icon>mdi-apps</v-icon>
      </v-btn>

      <v-spacer></v-spacer>

      <div id="select__filter">
        <v-select  v-model="selected" :items="filterTypes" required @change="search" placeholder="Select Event Type" />
      </div>

      <v-menu bottom left v-if="loggedUser">
        <template v-if="loggedUser" v-slot:activator="{ on }">
          <v-btn :class="$vuetify.breakpoint.lgAndUp ? '' : 'mr-n2 mt-7 icons'" class="ml-10 mr-4" dark icon v-on="on" >
            <v-icon size="40px">mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item-group active-class="deep-blue--text text--accent-4">

            <div v-if="isUserOrganizer">
              <v-list-item v-for="(item, idx) in sideMenuOrganizer" :key="idx" :to="item.to" >
                <v-list-item-icon> <v-list-item-title class="headline">{{ item.text }}</v-list-item-title> </v-list-item-icon>
                <v-spacer></v-spacer>
                <v-icon x-large>{{ item.icon }}</v-icon>
              </v-list-item>
            </div>

            <div v-if="isUser">
              <v-list-item v-for="(item, idx) in sideMenuUser" :key="idx" :to="item.to" >
                <v-list-item-icon> <v-list-item-title class="headline">{{ item.text }}</v-list-item-title> </v-list-item-icon>
                <v-spacer></v-spacer>
                <v-icon x-large>{{ item.icon }}</v-icon>
              </v-list-item>
            </div>

            <v-list-item @click="logout">
              <v-list-item-icon> <v-list-item-title class="headline">Logout</v-list-item-title> </v-list-item-icon>
              <v-spacer></v-spacer>
              <v-icon x-large>mdi-logout</v-icon>
            </v-list-item>

          </v-list-item-group>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loggedUser: localStorage.token,
      isUserOrganizer: localStorage.role === 'ORGANIZER',
      isUser: localStorage.role === 'USER',
      filterTypes: ['ALL', 'JAVASCRIPT', 'UX', 'WEB DEVELOPER', 'HACKATONS', 'OTHERS'],
      sideMenuOrganizer: [
        { text: 'Profile', icon: 'mdi-account', to: '/organizerprofile' },
        { text: 'My Calendar', icon: 'mdi-calendar-month', to: '/calendar' },
        { text: 'Create Event', icon: 'mdi-table-edit', to: '/create' },
        { text: 'My Events', icon: 'mdi-calendar-outline', to: '/organizer' }
      ],
      sideMenuUser: [
        { text: 'Profile', icon: 'mdi-account', to: '/profile' },
        { text: 'My Calendar', icon: 'mdi-calendar-month', to: '/calendar' },
        { text: 'My Events', icon: 'mdi-calendar-outline', to: '/wishes' }
      ],
      selected: ''
    }
  },
  computed: {
    appBarVisible () {
      return this.$route.meta.appBarVisible
    }
  },
  methods: {
    search () {
      this.$root.$emit('searchFunction', this.selected)
      this.selected = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.toolbar_title, .toolbar_title:active {
  color: white !important;
  font-size: 30px !important;
}
.logo {
  height: 85px;
  width: 125px;
  margin-right: 15px;
  margin-left: -17px;
  margin-top: -5px;
}
.toolbar {
  padding: 0 !important;
}
a:link, a:visited, a:active {
    text-decoration:none;
}
#select__filter {
  width: 200px !important;
  margin-top: 14px;
}
</style>
