<template>
  <v-row>
    <v-col v-for="(event, i) in events" :key="i" cols="6">
      <v-card hover class="mx-auto" height="405px">
        <v-img :src="event.detail_img" height="150px"></v-img>
        <v-card-title class="display-1 font-weight-bold">{{event.name}}</v-card-title>
        <v-card-subtitle class="mb-10 title">{{event.place}}</v-card-subtitle>
        <v-card-text class="my-n10 textstyles body-1">{{event.small_description}}</v-card-text>
        <v-card-actions>
          <v-icon color="cyan darken-3">mdi-cart</v-icon>
          <v-btn text>Buy now</v-btn>
          <v-spacer></v-spacer>
          <v-btn @click="addWish()" color="purple" text>Add to wish</v-btn>
          <v-icon color="cyan darken-3">mdi-star-outline</v-icon>
        </v-card-actions>
        <v-divider></v-divider>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import API from '../services/App'

export default {
  data: () => ({
    events: []
  }),
  methods: {
    addWish () {
      if (!localStorage.token) {
        this.$router.push('/?auth=login')
      }
    }
  },
  created () {
    API.getAllEvents().then(response => {
      return (this.events = response)
    })
  }
}
</script>

<style lang="scss" scoped>
* {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.textstyles {
  text-overflow: ellipsis;
  height: 139px;
}
</style>
