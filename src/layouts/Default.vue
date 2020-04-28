<template>
  <div>
    <Navbar />
    <slot />
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default {
  components: {
    Navbar,
    Footer
  }
};
</script>