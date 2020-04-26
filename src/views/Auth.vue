<template>
  <v-row class="bgimg">
    <v-col cols="3" class="position justify-center mt-10">
      <v-tabs class="title" v-model="tab" grow>
        <v-tab class="tabs" v-for="(item, i) in items" :key="i">{{ item }}</v-tab>
      </v-tabs>
      <v-tabs-items class="bglogin" v-model="tab">
        <v-tab-item>
          <Login class="card" />
        </v-tab-item>
        <v-tab-item>
          <Signup class="card" />
        </v-tab-item>
      </v-tabs-items>
    </v-col>
  </v-row>
</template>

<script>
import Login from "../components/Login.vue";
import Signup from "../components/Signup.vue";

export default {
  data() {
    return {
      tab: null,
      items: ["Login", "Sign Up"]
    };
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
}
.bglogin {
  background-color: rgba(186, 238, 243, 0.788) !important;
  opacity: 0.5;
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
</style>
