<template>
<div>
<v-card-title class="justify-center font-weight-bold pa-0 display-1 head">{{event.name}} </v-card-title>
 <v-card
    class="mx-auto text-center"
     height="430px"
     max-height="430px">

    <v-img
     :src="event.cover_img[0]"
      class="white--text align-end"
      height="200px"
    >
    </v-img>
    <v-card-text class="pb-0 body-1 description">{{event.small_description}}</v-card-text>
  </v-card>
    <v-card-actions>
     <v-btn class="pl-0" color="cyan darken-4" text outlined  :to="{ name: 'BuyTicket', params: { eventId: event._id } }" ><v-icon color="primary" class="mr-1" x-large >mdi-view-compact-outline</v-icon> Show Now</v-btn>
     <v-spacer></v-spacer>
      <v-btn color="cyan darken-4" text @click="addWish(event._id)" outlined> Addd Wishes<v-icon size="21px" color="yellow lighten-1" x-large>mdi-star-outline</v-icon></v-btn>
    </v-card-actions>
</div>
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
.head {
  border-radius: 20px 20px 0 0 !important;
  background: rgb(21, 91, 100);
  color: white;
}

</style>
