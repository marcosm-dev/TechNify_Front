<template>
  <v-row class="bgimg">
    <v-col v-if="jumbotron">
      <v-col cols="3" class="position justify-center mt-10">
        <v-tabs class="title" v-model="tab" grow>
          <v-tab class="tabs" v-for="(item, i) in items" :key="i">{{ item }}</v-tab>
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
    <v-col cols="6" class="present justify-center mt-10" v-else="jumbotron">
      <v-jumbotron>
        <v-container fill-height>
          <v-layout align-center>
            <v-flex>
              <h3 class="font-weight-medium display-3 my-10">Welcome to Event Tech Website</h3>
              <span class="font-regular subtitle-1">
                Event Tech is a company builder created by two Canarian entrepreneurs. Its objective is to make available to everyone the possibility of continuing learning and discovering everything that is to come.
                To do this, we try to bring together on the same website all kinds of events related to the technology world and put them at your fingertips.
                Our hallmark is listening to what you and the company need. Active listening. Event Tech is our creation for you.
              </span>

              <v-divider class="my-3"></v-divider>
              <v-btn class="mt-5" rounded dark color="cyan accent-4" x-large>See more</v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-jumbotron>
    </v-col>
  </v-row>
</template>

<script>
import Login from "../components/Login.vue";
import Signup from "../components/Signup.vue";

export default {
  data() {
    return {
      jumbotron: false,
      tab: null,
      items: ["Login", "Sign Up"]
    };
  },
  methods: {
    changeTab() {
      this.tab = 0;
    }
  },
  components: {
    Login,
    Signup
  }
};
</script>

<style lang="scss" scoped>
* {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.title {
  opacity: 0.4;
  color: #000000;
  width: 83%;
  margin: auto;
}
.tabs {
  background-color: hsl(209, 100, 1%);
  font-weight: 640;
  font-size: 23px;
  margin-bottom: -5px;
}
.bgimg {
  background-image: url("../assets/tech.png");
  background-size: 100vmax;
  height: 91vh;
}
.bglogin {
  background-color: rgba(186, 238, 243, 0.788) !important;
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
  opacity: 0.8;
}
.textpresent {
  opacity: 1 !important;
}
</style>
