<template>
  <v-col class="bgimg" :class="reverse ? 'bgReversed' : ''">
    <img src="@/assets/Publicity2.png" />
  </v-col>
</template>

<script>
export default {
  props: {
    reverse: Boolean
  }
}
</script>

<style lang="scss" scoped>
.bgimg {
  // background-image: url("../assets/Publicity2.png");
  background-size: contain;
  background-repeat: repeat-y;
}
.bgReversed {
  background-image: url("../assets/Publicity3.png");
  background-size: contain;
  // transform: rotate(-180deg);
}
</style>
