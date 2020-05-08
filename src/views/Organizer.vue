<template>
 <v-container id="background" fluid>
    <v-row>
      <v-col class="reboot-col" >
      <img src="@/assets/Publicity2.png" class="reboot"/>
      </v-col>
       <v-col cols="10">
        <v-row>
          <v-col v-for="(event, idx) in events" :key="idx" cols="12" sm="6" md="6" lg="4" >
            <v-card
          class="mr-4 ml-4 mt-4 card mb-8"
          hover
        >
          <v-img height="150px" :src="event.detail_img">
            <v-card-title
              :class="$vuetify.breakpoint.smAndDown ? 'title-head headline font-weight-bold' : 'font-weight-bold title-head headline'"
            >{{event.name}}</v-card-title>
          </v-img>
                    <v-list-item-subtitle
        v-if="event.event_type"
        class="title mt-4 ml-4"
      >{{event.event_type.name}}</v-list-item-subtitle>
          <div :class="$vuetify.breakpoint.mdAndUp ? 'container-card' : ''">
            <v-card-subtitle
              :class="$vuetify.breakpoint.xsOnly ? 'title mt-n5 event-details' : 'title event-details'"
            >{{event.place}} / {{event.date_start}}</v-card-subtitle>
          </div>
          <v-card-actions class="pa-4">
            <v-spacer></v-spacer>
      <v-btn text color="blue" :to="{ name: 'Edit', params: { eventId: events[idx]._id } }" class=" mr-4 button" ><v-icon class=" mr-4" x-large>mdi-table-edit</v-icon>Edit</v-btn>
            <v-spacer></v-spacer>
      <v-btn text color="red" @click.stop.prevent="deleteById(events[idx]._id, events[idx])" class="ml-4 button" >Delete<v-icon  class="ml-2" x-large>mdi-delete-circle</v-icon></v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
    </v-col>
    </v-row>
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
    API.getOrganizerEvents().then(response => (this.events = response))
  },
  methods: {
    editEvent (eventId) {
      this.$router.push('/create')
      this.$route.params(eventId)
    },
    deleteById (eventId, idx) {
      API.deleteEvent(eventId)
      const eventIdx = this.events.findIndex(i => i._id === idx._id)
      if (eventIdx !== -1) {
        this.events.splice(eventIdx, 1)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#background{
background-color: rgba(221, 230, 233, 0.657);
height: 100vh;
}
.reboot-col {
  padding: 0px;
  margin-top: -20px;
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
.button {
  font-size: 25px;
}
</style>
