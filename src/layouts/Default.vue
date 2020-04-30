<template>
  <div>
    <Navbar />
    <slot />
    <!-- <Publicity /> -->
    <slot />
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Publicity from "../components/Publicity";

export default {
  components: {
    Navbar,
    Footer,
    Publicity
  }
};
</script>