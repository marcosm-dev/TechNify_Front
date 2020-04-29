<template>
  <v-content class="justify-center">
    <v-row cols="12" class="d-flex mx-auto">
      <v-col v-for="(event,idx) in events" :key="idx" cols="4">
        <v-card class="mx-auto" max-height="700px">
          <v-img :src="event.detail_img" height="200px"></v-img>
          <v-card-title class="my-2 mb-5">{{event.name}}</v-card-title>
          <v-card-subtitle>{{event.place}}</v-card-subtitle>
          <v-card-text>{{event.small_description}}</v-card-text>
          <v-card-actions>
            <v-icon scolor="yellow">mdi-cart</v-icon>
            <v-btn text>Buy now</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="purple" text>Add to wish</v-btn>
            <v-icon scolor="yellow">mdi-star-outline</v-icon>
          </v-card-actions>
          <v-divider></v-divider>
        </v-card>
      </v-col>
    </v-row>
  </v-content>
</template>

<script>
export default {
  data: () => ({
    show: false
  })
};
</script>

<script>
import API from "../services/App";

export default {
  data() {
    return {
      events: []
    };
  },
  created() {
    API.getAllEvents().then(response => {
      return (this.events = response);
    });
  }
};
</script>

<style lang="scss" scoped>
.container {
  height: 78vh;
}
</style>
