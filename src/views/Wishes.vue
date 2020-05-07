<template >
<v-container fluid>
  <v-row>
      <v-col class="reboot-col" >
      <img src="@/assets/Publicity2.png" class="reboot"/>
      </v-col>
      <v-col cols="10">
    <v-container>
      <h1 class="display-1 mb-5 font-weight-medium">YOUR WISHES</h1>
      <v-divider class="mb-5"></v-divider>
      <v-row>
    <v-col v-for="(event, idx) in events" :key="idx" cols="6">
      <v-card :to="{ name: 'BuyTicket', params: { eventId: event._id } }" class="mx-auto card" outlined>
       <v-list-item-title class="text-center headline title-head font-weight-regular pa-1">{{event.name}}</v-list-item-title>
        <v-list-item three-line>
          <v-row>
            <v-col cols="6">
          <v-list-item-content>
            <v-list-item-subtitle class="font-weight-black title mt-n4">{{event.event_type.name}}</v-list-item-subtitle>
            <v-list-item-subtitle class="headline"
            >{{event.small_description}}</v-list-item-subtitle>
          </v-list-item-content>
            </v-col>
            <v-col cols="6" class="text-end">
              <v-img max-height="100px" max-width="500px" :src="event.cover_img[0]"></v-img>
            <v-list-item-subtitle class="title font-weight-bold">
              {{event.date_start}}
              <span v-if="event.date_end">{{event.date_end}}</span>
            </v-list-item-subtitle>
            </v-col>
          </v-row>
        </v-list-item>
        <v-card-actions class="text-center">
          <v-btn text color="primary" class="headline font-weight-bold" @click="buyEvent(events[idx]._id, events[idx])"><v-icon x-large color="cyan darken-4">mdi-cart</v-icon>Buy now</v-btn>
            <v-list-item-subtitle class="font-weight-bold display-1 color-price">{{event.price}} €</v-list-item-subtitle>
          <v-btn text color="red" class="title font-weight-bold" @click="deleteById(events[idx]._id, events[idx])">Delete<v-icon x-large>mdi-delete-circle</v-icon></v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    </v-row>
     </v-container>
  </v-col>
   <v-col class="reboot-col">
      <img src="@/assets/Publicity3.png" class="reboot" style="right: 0px"/>
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
.reboot-col {
  padding: 0px;
  margin-top: -20px;
  // width: 100px;
}
.reboot {
  top: 0px;
  position: fixed;
  height: 100vh;
  width: 8vw;
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
</style>
