<template>
  <v-app>
    <div id="app">
      <component :is="layout">
        <router-view />
      </component>
    </div>
  </v-app>
</template>

<script>
const default_layout = "default";

export default {
  name: "App",
  computed: {
    layout() {
      return (this.$route.meta.layout || default_layout) + "-layout";
    }
  },
  data: () => ({})
  // created() {
  //   document.title = "Events Tech Website";
  // }
};
</script>

<style lang="scss" scoped>
* {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
</style>