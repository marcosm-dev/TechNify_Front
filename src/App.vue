<template>
  <v-app>
    <router-view></router-view>
    <v-footer class="footer" padless>
      <v-row justify="center" no-gutters>
        <v-btn v-for="link in links" :key="link" color="white" text rounded class="my-2">{{ link }}</v-btn>
        <v-col class="mb-1 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} —
          <strong>TechNify</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    links: ["Home", "About Us", "Contact Us"]
  })
};
</script>

<style lang="scss" scoped>
* {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.footer {
  background: linear-gradient(
    180deg,
    rgba(3, 53, 76, 0.88) 9.9%,
    #03354c 39.58%,
    #000f15 100%
  ) !important;
  height: 90px;
}
</style>