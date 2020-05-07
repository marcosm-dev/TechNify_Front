<template>
 <v-card
    class="mx-auto text-center card"
     height="430px"
     max-height="430px">
    <v-card-title class="pa-2 justify-center font-weight-bold pa-0 headline title-head">{{event.name}} </v-card-title>
    <v-img
     :src="event.cover_img[0]"
      class="white--text align-end"
      height="200px"
    >
    </v-img>
    <v-card-text class="pb-0 body-1 description text-card">{{event.small_description}}</v-card-text>
    <v-divider></v-divider>
    <v-card-actions class="title-head">
     <v-btn class="pl-0" color="cyan darken-4" text outlined rounded :to="{ name: 'BuyTicket', params: { eventId: event._id } }" ><v-icon color="primary" class="mr-1" x-large >mdi-view-compact-outline</v-icon> Show Now</v-btn>
     <v-spacer></v-spacer>
      <v-btn color="cyan darken-4" text rounded @click.stop.prevent="addWish(event._id)" outlined> Addd Wishes<v-icon size="21px" color="yellow lighten-1" x-large>mdi-star-outline</v-icon></v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import API from '../services/App'

export default {
  name: 'Event',
  props: {
    event: Object
  },
  methods: {
    addWish (eventId) {
      if (!localStorage.token) {
        this.$router.push('/?auth=login')
      }
      API.addtoWish(eventId)
    }
  }
}
</script>

<style lang="scss" scoped>
.description {
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 189px;
  font-weight: 500;
  text-align: center;
  overflow: hidden;
}
.event-details {
  background-color: rgba(255, 255, 255, 0.4);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
}
.title-head {
  color: rgb(20, 63, 68);
  background: rgba(255, 255, 255, 0.747);
  padding: 10px;
  justify-content: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
}
.card {
  background: rgb(224, 236, 238);
  text-align: center;
}
.title-head {
  color: rgb(20, 63, 68);
  background: rgba(255, 255, 255, 0.747) !important;
  padding: 10px;
}
.text-card{
  height: 130px;
}
</style>
