<template>
  <v-footer :class="$vuetify.breakpoint.smAndDown ? 'footer-md' : ' footer'" padless app>
    <v-row justify="center" no-gutters>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-btn to="/events" color="white" text rounded class="my-2">Home</v-btn>
      <v-btn to="/" color="white" text rounded class="my-2">About Us</v-btn>
      <v-btn to="/mail" color="white" text rounded class="my-2">Contact Us</v-btn>
      <v-btn to="/?auth=login" color="white" text rounded class="my-2">Sign in</v-btn>
      <v-spacer></v-spacer>
         <a class="gitacc mr-10" href="https://github.com/marcosmm1">@marcosmm1</a><v-icon x-large dark>mdi-github</v-icon> <a class="gitacc ml-10" href="https://github.com/SugarSkull59">@SugarSkull59</a>
    <v-spacer></v-spacer>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
.footer {
     height: 80px;
    background: linear-gradient(
    180deg,
    rgba(1, 20, 29, 1) 10.1%,
    #062e41 39.58%,
    #000f15 100%

  ) !important;
}
.footer-md{
    background: linear-gradient(
    180deg,
    rgba(1, 20, 29, 0.88) 9.9%,
    #062e41 39.58%,
    #000f15 100%
  ) !important;
    height: 45px;
}
.gitacc{
  color: white;
  margin-top: 15px;
}
a:link, a:visited, a:active {
    text-decoration:none;
}
</style>
