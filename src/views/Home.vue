<template>
  <v-row>
    <v-col v-if="view1" v-for="(event, i) in events" :key="i" cols="4">
      <EventList :event="event" />
    </v-col>
    <v-col v-else>
      <h1>VISTA 2</h1>
    </v-col>
  </v-row>
</template>


<script>
import API from "../services/App";
import EventList from "../components/MosaicView";

export default {
  data() {
    return {
      view1: true,
      events: []
    };
  },
  components: {
    EventList
  },
  methods: {
    addWish() {
      if (!localStorage.token) {
        this.$router.push("/?auth=login");
      }
    }
  },
  created() {
    API.getAllEvents().then(response => {
      return (this.events = response);
    });
  }
};
</script>

<style lang="scss" scoped>
.container {
  height: 78vh;
}
</style>
