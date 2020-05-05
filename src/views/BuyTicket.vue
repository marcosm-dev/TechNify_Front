<template>
      <v-row>
       <v-col>
        <v-card cols="12">
          <v-card-title v-if="event.name" class="head display-3 my-n2" dark>{{event.name}}</v-card-title>
            <v-img height="326px" width="800px" :src="event.detail_img"></v-img>
            <ul class="my-5">
              <li>Type:<br /><span>{{event.event_type.name}}</span></li>
              <li>Date:<br /><span>{{event.date_start}} // {{event.date_end}}</span></li>
              <li>Place:<br /><span>{{event.place}}</span></li>
              <li>Price:<br /><span>{{event.price}} €</span></li>
            </ul>
            <v-card-text>{{event.large_description}}</v-card-text>
            <div class="justify-end mx-auto">
              <v-img
                height="327px"
                width="900px"
              ></v-img>
            </div>
      <v-card-actions>
      <v-icon color="cyan darken-3" x-large>mdi-arrow-left-circle</v-icon>
      <v-btn text to="/events">Back!</v-btn>
      <v-spacer></v-spacer>
      <v-icon color="cyan darken-3" x-large>mdi-star-outline</v-icon>
      <v-btn text @click="addWish(event._id)">Add my wish</v-btn>
      <v-spacer></v-spacer>
      <v-icon color="cyan darken-3" x-large>mdi-cart</v-icon>
      <v-btn text @click="buy">Buy my ticket</v-btn>
       </v-card-actions>
        </v-card>
       </v-col>
      </v-row>
</template>

<script>
import API from '../services/App'

export default {
  name: 'BuyTicket',
  data () {
    return {
      event: null
    }
  },
  created () {
    API.getInfo(this.$route.params.eventId)
      .then(response => { return (this.event = response) })
  },
  methods: {
    buy () {
      alert('vamos a comprar!')
    },
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
.head {
  opacity: 0.95;
  border-radius: 20px 20px 0 0 !important;
  padding: 30px 20px 20px 20px;
  background: rgb(21, 91, 100);
  color: white;
  font-weight: 500 !important;
}
</style>
