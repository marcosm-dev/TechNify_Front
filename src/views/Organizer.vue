<template>
  <v-row cols="10">
    <v-col v-for="(event, idx) in events" :key="idx" cols="4">
      <v-card class="mx-auto" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="headline mb-1">{{event.name}}</v-list-item-title>
            <v-divider></v-divider>
            <v-list-item-subtitle class="headline mb-1">Type: {{event.event_type.name}}</v-list-item-subtitle>
            <v-list-item-subtitle>
              Date: {{event.date_start}}
              <span v-if="event.date_end">{{event.date_end}}</span>
            </v-list-item-subtitle>
            <v-list-item-subtitle class="headline mb-1">Price: {{event.price}} €</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-card-actions>
          <v-btn text color="blue" @click="editar">Edit</v-btn>
          <v-spacer></v-spacer>
          <v-btn text color="red" @click="eliminar">Delete</v-btn>
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
    editar() {
      this.$route.path("/create", this.event._id);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>