<template>
  <div>
    <v-card class="overflow-hidden">
      <v-app-bar
        absolute
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
        <v-app-bar-nav-icon class="my-12" x-large></v-app-bar-nav-icon>
      </v-app-bar>
      <v-container style="height: 120px;"></v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Navbar"
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