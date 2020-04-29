<template>
  <v-row class="justify-center">
    <v-col cols="8">
      <v-col v-for="(event, i) in events" :key="i" cols="12">
        <v-card class="mx-auto" max-height="700px">
          <v-img :src="event.cover_img[1]" height="200px"></v-img>
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
      </v-col>
    </v-col>
  </v-row>
</template>

<script>
import API from "../services/App";

export default {
  data: () => ({
    events: []
  }),
  methods: {
    addWish() {
      if (!localStorage.token) {
        this.$router.push("/?auth=login");
      }
    }
  },
  created() {
    API.getAllEvents().then(response => {
      return (this.events = response);
    });
  }
};
</script>