<template>
  <div>
    <slot />
    <div>
      <Footer class="footerposition" />
    </div>
  </div>
</template>

<script>
import Footer from '../components/Footer'
export default {
  components: {
    Footer
  }
}
</script>

<style lang="scss" scoped>
</style>
