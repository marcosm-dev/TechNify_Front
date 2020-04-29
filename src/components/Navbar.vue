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
        <v-toolbar-title class="title">TechNify</v-toolbar-title>
        <v-row justify="center">
          <v-col class="text-center align">
            <v-btn icon>
              <v-icon x-large>mdi-apps</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon x-large>mdi-format-list-text</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
          </v-col>
        </v-row>
        <v-menu bottom left>
          <template v-slot:activator="{ on }">
            <v-btn dark icon v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item-group active-class="deep-blue--text text--accent-4">
              <v-list-item>
                <v-list-item-icon>
                  <v-list-item-title>Profile</v-list-item-title>
                </v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item>
              <v-list-item @click="logout">
                <v-list-item-icon>
                  <v-list-item-title>Logout</v-list-item-title>
                </v-list-item-icon>
                <v-icon>mdi-logout</v-icon>
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
      items: [{ title: "Profile" }, { title: "Logout" }]
    };
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push("/");
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
  height: 110px;
  max-width: 120px;
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
</style>