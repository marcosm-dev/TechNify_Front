<template>
  <v-row>
    <v-col v-for="(event,idx) in events" :key="idx">
      <v-card class="mx-auto" max-width="344">
        <v-img :src= "event.cover_img" height="200px"></v-img>

        <v-card-title>{{event.name}}</v-card-title>

        <v-card-subtitle>{{event.place}}</v-card-subtitle>
   <v-card-text>{{event.small_description}}</v-card-text>
        <v-card-actions>
          <v-btn text>Buy</v-btn>

          <v-spacer></v-spacer>
          <v-btn color="purple" text>Add to wish</v-btn>
        </v-card-actions>

            <v-divider></v-divider>


          </div>
      </v-card>
    </v-col>
  </v-row>
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
</style>
