<template>
  <v-card class="mx-auto" max-height="700px">
    <v-img :src="event.detail_img" height="200px"></v-img>
    <v-card-title class="my-2 mb-5">{{event.name}}</v-card-title>
    <v-card-subtitle>{{event.place}}</v-card-subtitle>
    <v-card-text>{{event.small_description}}</v-card-text>
    <v-card-actions>
      <v-icon scolor="yellow">mdi-cart</v-icon>
      <v-btn text>Buy now</v-btn>
      <v-spacer></v-spacer>
      <v-btn @click="addWish()" color="purple" text>Add to wish</v-btn>
      <v-icon color="yellow">mdi-star-outline</v-icon>
    </v-card-actions>
    <v-divider></v-divider>
  </v-card>
</template>

<script>
export default {
  props: {
    event: Object
  }
};
</script>