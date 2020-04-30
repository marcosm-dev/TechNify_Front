<template>
  <div>
    <v-card class="overflow-hidden">
      <v-app-bar
        app
        color="indigo darken-2"
        dark
        prominent
        scroll-target="#scrolling-techniques"
        class="navbar"
      >
        <v-img to="/home" class="img" src="https://i.ibb.co/XYF2k3M/LOGO.png"></v-img>
        <v-toolbar-title class="font display-4 font-weight-regular">TechNify</v-toolbar-title>
        <v-row justify="center">
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
        <v-menu bottom left>
          <template v-slot:activator="{ on }">
            <v-btn class="icon" dark icon v-on="on">
              <v-icon x-large>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item-group active-class="deep-blue--text text--accent-4">
              <v-list-item to="/create">
                <v-list-item-icon>
                  <v-list-item-title class="headline">Create Event</v-list-item-title>
                </v-list-item-icon>
                <v-icon x-large>mdi-account</v-icon>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-list-item-title class="headline">Profile</v-list-item-title>
                </v-list-item-icon>
                <v-icon x-large>mdi-account</v-icon>
              </v-list-item>
              <v-list-item @click="logout">
                <v-list-item-icon>
                  <v-list-item-title class="headline">Logout</v-list-item-title>
                </v-list-item-icon>
                <v-icon x-large>mdi-logout</v-icon>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-menu>
      </v-app-bar>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      select: "",
      select2: ""
    };
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push("/");
    },
    mosaic() {
      this.select = "select";
      this.select2 = "null";
      this.$router.push("/events");
    },
    expand() {
      this.select2 = "select2";
      this.select = "null";
      this.$router.push("/expanded");
    }
  }
};
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
  margin-top: 3%;
}
.font {
  margin-left: 5%;
  margin-right: -4%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif !important;
}
</style>