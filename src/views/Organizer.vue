<template>
  <v-container>
    <h1 class="display-1 mb-5 font-weight-medium">YOUR EVENTS</h1>
    <v-divider class="mb-5"></v-divider>
  <v-row>
    <v-col v-for="(event, idx) in events" :key="idx" cols="12" sm="6" md="6" lg="4" >
      <v-card height="225px">
        <v-list-item-title class="title card-title pa-1">{{event.name}}</v-list-item-title>
          <v-row>
          <v-col cols="6">
          <v-list-item cols="10" three-line>
            <v-list-item-content>
            <v-list-item-subtitle
              v-if="event.event_type"
              class="title"
            >{{event.event_type.name}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        </v-col>
        <v-col cols="6">
        <v-img max-height="100px"  max-width="200px" :src="event.cover_img[0]"></v-img>
              <v-list-item-subtitle class="text-center">
              {{event.date_start}} /
              <span v-if="event.date_end">{{event.date_end}}</span>
            </v-list-item-subtitle>
        </v-col>
        </v-row>
        <v-card-actions>
          <v-btn text color="blue" :to="{ name: 'Edit', params: { eventId: events[idx]._id } }"><v-icon class="mr-2">mdi-table-edit</v-icon> Edit</v-btn>
          <v-spacer></v-spacer>
          <v-btn text color="red" @click="deleteById(events[idx]._id, events[idx])">Delete<v-icon class="ml-2">mdi-delete-circle</v-icon></v-btn>
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
.card-title{
  background-color: rgb(48, 163, 163);
  text-align: center;
  color:white;
}
</style>
