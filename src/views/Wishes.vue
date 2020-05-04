<template>
<v-container>
  <v-row>
    <v-col v-for="(event, idx) in events" :key="idx" cols="12">
      <v-card :to="{ name: 'BuyTicket', params: { eventId: event._id } }" class="mx-auto" outlined>
       <v-list-item-title class="text-center headline card-title font-weight-regular">{{event.name}}</v-list-item-title>
        <v-list-item three-line>
          <v-row>
            <v-col cols="6">
          <v-list-item-content>
            <v-list-item-subtitle
              v-if="event.event_type"
              class="body-1 mb-1"
            >{{event.small_description}}</v-list-item-subtitle>
          </v-list-item-content>
            </v-col>
            <v-col cols="6" class="text-end">
            <v-list-item-subtitle class="title font-weight-bold">
              {{event.date_start}}
              <span v-if="event.date_end">{{event.date_end}}</span>
            </v-list-item-subtitle>
            </v-col>
          </v-row>
        </v-list-item>
        <v-card-actions class="text-center">

          <v-btn text color="primary" @click="buyEvent(events[idx]._id, events[idx])"><v-icon x-large color="cyan darken-4">mdi-cart</v-icon>Buy now</v-btn>
            <v-list-item-subtitle class="headline">{{event.price}} €</v-list-item-subtitle>
          <v-btn text color="red" @click="deleteById(events[idx]._id, events[idx])"><v-icon x-large>mdi-delete-circle</v-icon>Delete</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
import API from '../services/App'

export default {
  data () {
    return {
      events: []
    }
  },
  created () {
    API.getWishes().then(response => (this.events = response))
  },
  methods: {
    deleteById (eventId, idx) {
      API.deteleWishes(eventId)
      const eventIdx = this.events.findIndex(i => i._id === idx._id)
      if (eventIdx !== -1) {
        this.events.splice(eventIdx, 1)
      }
    },
    buyEvent () {
      alert('GO PAY PAGE')
    }
  }
}
</script>

<style lang="scss" scoped>
.card-title{
  background: rgb(21, 91, 100);
  color: white;
}
</style>
