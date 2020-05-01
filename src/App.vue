<template>
  <v-app id="inspire">
    <v-content id="app">
      <component :is="layout">
        <router-view />
      </component>
    </v-content>
  </v-app>
</template>
<script>
const defaultLayout = 'default'

export default {
  name: 'App',
  computed: {
    layout () {
      return (this.$route.meta.layout || defaultLayout) + '-layout'
    }
  },
  data: () => ({})
}
</script>

<style>
* {
  font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
</style>
