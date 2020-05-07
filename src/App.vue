<template>
  <v-app id="app" >
    <component class="background" :is="layout">
      <router-view  />
    </component>
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
  data: () => ({
  })
}
</script>

<style>
* {
  font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.background {
  background-color: rgba(248, 247, 247, 0.979);
}
</style>
