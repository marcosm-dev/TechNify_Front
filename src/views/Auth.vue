<template>
  <v-container class="container--bg-image fill-height pt-0" fluid>
    <v-row :justify="$vuetify.breakpoint.mdAndUp ? 'end' : 'center'" :class="{'my-auto row-margin-top': $vuetify.breakpoint.smAndUp}">
      <v-col cols="12" lg="2" sm="6" md="6" :class="$vuetify.breakpoint.mdAndUp ? ' login-position' : ' pa-0'" v-if="!jumbotron">
          <v-tabs class="signup--login" v-model="tab" grow>
            <v-tab class="title" v-for="(item, i) in items" :key="i">{{ item }}</v-tab>
          </v-tabs>
          <v-tabs-items class="tabs" v-model="tab">
            <v-tab-item>
              <Login />
            </v-tab-item>
            <v-tab-item>
              <Signup v-on:change="changeTab" />
            </v-tab-item>
          </v-tabs-items>
      </v-col>

      <v-col v-else cols="12" lg="4" sm="10" :class="$vuetify.breakpoint.lgAndUp ? 'intro' : 'xs-intro mx-auto'" >
        <h1 class="pa-2">T3CHNIFY</h1>
        <p class="pa-2"
          :class="{'body-1': $vuetify.breakpoint.xs, 'title': $vuetify.breakpoint.smAndUp, 'mt-4': $vuetify.breakpoint.mdAndUp}">
          Technify is a platform that encourages continuing learning and discovering everything that is to come
        </p>
        <p class="pa-2" :class="{'body-1': $vuetify.breakpoint.xs, 'title': $vuetify.breakpoint.smAndUp}">
          Technify brings together all kinds of events related to technology and put them at your fingertips.
          Our hallmark is listening to what you and the company need. Active listening
        </p>
        <p class="pa-2" :class="{'body-1': $vuetify.breakpoint.xs, 'title': $vuetify.breakpoint.smAndUp}">
          Technify is our creation for you
        </p>
        <v-btn class="my-6" to="/events" rounded dark color="cyan accent-4" x-large>GET STARTED</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Login from '../components/Login.vue'
import Signup from '../components/Signup.vue'

export default {
  data () {
    return {
      jumbotron: true,
      tab: null,
      items: ['Login', 'Sign Up']
    }
  },

  methods: {
    changeTab () {
      this.tab = 0
    }
  },
  mounted () {
    this.jumbotron = !this.$route.query.auth
  },
  components: {
    Login,
    Signup
  }
}
</script>

<style lang="scss" scoped>
.container--bg-image {
  background-image: url("../assets/tech.png");
  background-size: cover;
  min-height: calc(100vh - 90px);
  align-items: start;
}

.xs-intro {
  background-color: rgba(255,255,255,0.9);
  text-align: center;
  border-radius: 20px;
}
.intro {
  background-color: rgba(255,255,255,0.9);
  text-align: center;
  border-radius: 20px;
  margin-right: 15vw;
}
h1 {
    background-color: rgba(255,255,255,0.7);
    border-radius: 20px;
    font-weight: 800;
    text-align: center;
  }

.signup--login{
  border-radius: 20px 20px 0 0;
  margin-top: 10vh
}

.tabs{
  border-radius: 0 0 20px 20px;
}

.login-position {
  margin-right: 20vh;
  opacity: 0.95;
}
</style>
