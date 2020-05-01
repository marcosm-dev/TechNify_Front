<template>
  <v-container class="container--bg-image fill-height pt-0" fluid>
    <v-row >
      <!-- TODO CHECK THIS JumboMarcos -->
      <v-col v-if="!jumbotron">
        <v-col cols="3" class="position justify-center mt-10">
          <v-tabs class="tabs title" v-model="tab" grow>
            <v-tab class="tab" v-for="(item, i) in items" :key="i">{{ item }}</v-tab>
          </v-tabs>
          <v-tabs-items class="bglogin" v-model="tab">
            <v-tab-item>
              <Login class="card" />
            </v-tab-item>
            <v-tab-item>
              <Signup class="card" v-on:change="changeTab" />
            </v-tab-item>
          </v-tabs-items>
        </v-col>
      </v-col>

      <v-col v-else cols="12" id="intro" class="text-center">
        <h1 class="pa-2">T3CHNIFY</h1>
        <p class="pa-2">
          Event Tech is a company builder created by two Canarian entrepreneurs. Its objective is to make available to everyone the possibility of continuing learning and discovering everything that is to come.
        </p>
        <p class="pa-2">
          To do this, we try to bring together on the same website all kinds of events related to the technology world and put them at your fingertips.
          Our hallmark is listening to what you and the company need. Active listening. Event Tech is our creation for you.
        </p>

        <v-btn class="my-6" to="/events" rounded dark color="cyan accent-4" x-large>See more</v-btn>
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
$footer-height: 90px;

.container--bg-image {
  background-image: url("../assets/tech.png");
  background-size: cover;
  min-height: calc(100vh - 90px);
  align-items: start;
}

#intro {
  background-color: rgba(255,255,255,0.9);
  h1 {
    background-color: rgba(255,255,255,0.7);
    font-weight: 800;
    text-align: center;
  }

  p {

  }
}

.tab {
  background: rgba(255, 255, 255, 0.815);
  font-weight: 640;
  font-size: 23px;
  margin-bottom: -5px;
  border-radius: 10px 10px 0 0 !important;
}

.tabs {
  border-radius: 10px 10px 0 0 !important;
}

.bglogin {
  background-color: rgba(255, 255, 255, 0.835) !important;
  opacity: 1;
  border-radius: 37px;
}

.card {
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.53);
  transform: rotate(0deg);
  background: rgba(255, 255, 255, 0.35);
  border-radius: 37px;
  transform: rotate(0deg);
}

.position {
  margin-left: 55%;
}

.present {
  color: black;
  margin-left: 40%;
  margin-bottom: 20%;
  background-color: white;
  border-radius: 50px;
  opacity: 0.9;
}

</style>
