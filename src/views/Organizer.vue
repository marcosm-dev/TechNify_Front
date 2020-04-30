<template>
  <v-row cols="10">
    <v-col v-for="(event, idx) in events" :key="idx" cols="4">
      <v-card class="mx-auto" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="headline mb-1">{{event.name}}</v-list-item-title>
            <v-divider></v-divider>
            <v-list-item-subtitle
              v-if="event.event_type"
              class="headline mb-1"
            >Type: {{event.event_type.name}}</v-list-item-subtitle>
            <v-list-item-subtitle>
              Date: {{event.date_start}}
              <span v-if="event.date_end">{{event.date_end}}</span>
            </v-list-item-subtitle>
            <v-list-item-subtitle class="headline mb-1">Price: {{event.price}} €</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-card-actions>
          <v-btn text color="blue" :to="{ name: 'Edit', params: { eventId: events[idx]._id } }">Edit</v-btn>
          <v-spacer></v-spacer>
          <v-btn text color="red" @click="deleteById(events[idx]._id, events[idx])">Delete</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import API from "../services/App";

export default {
  data() {
    return {
      events: []
    };
  },
  created() {
    API.getOrganizerEvents().then(response => (this.events = response));
  },
  methods: {
    editEvent(eventId) {
      this.$router.push("/create");
      this.$route.params(eventId);
    },
    deleteById(eventId, idx) {
      API.deleteEvent(eventId);
      const eventIdx = this.events.findIndex(i => i._id === idx._id);
      if (eventIdx != -1) {
        this.events.splice(eventIdx, 1);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
