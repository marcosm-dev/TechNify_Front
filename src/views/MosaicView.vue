<template>
<v-container class="pa-0">
  <v-row>
    <v-col v-for="(event, i) in events" :key="i" :cols="$vuetify.breakpoint.smAndDown ? '12' : '6'">
      <v-card  class="mt-4"
              :to="{ name: 'BuyTicket', params: { eventId: event._id } }"
              :height="$vuetify.breakpoint.smAndUp ? '900px' : '650px'" :max-height="$vuetify.breakpoint.mdAndUp ? '1000px' : '900px'" hover
              >
        <v-col>
        <v-img :width="cover" :max-height="$vuetify.breakpoint.smAndUp ? '450px': '400px'" :class="$vuetify.breakpoint.mdAndUp ? 'cover-img' : ''" :src="event.detail_img" ><v-card-title :class="$vuetify.breakpoint.xsOnly ? 'title' : 'title-head font-weight-bold'">{{event.name}}</v-card-title></v-img>
        </v-col>
        <div :class="$vuetify.breakpoint.mdAndUp ? 'container-card' : ''">
        <v-card-subtitle :class="$vuetify.breakpoint.xsOnly ? 'caption' : 'title'">{{event.place}}</v-card-subtitle>
        <v-card-text :class="$vuetify.breakpoint.xsOnly ? 'caption' : 'title'">{{event.small_description}}</v-card-text>
        <v-card-actions >
          <v-icon color="cyan darken-3">mdi-cart</v-icon>
          <v-btn text >Buy now</v-btn>
          <v-spacer></v-spacer>
          <v-btn @click="addWish(events[i]._id)" color="purple" text>Add to wish</v-btn>
          <v-icon>mdi-star-outline</v-icon>
        </v-card-actions >
        </div>
      </v-card>
    </v-col>
  </v-row >
</v-container>
</template>
<script>
import API from '../services/App'
export default {
  data: () => ({
    events: Array,
    eventType: '',
    dates: null
  }),
  methods: {
    addWish (eventId) {
      if (!localStorage.token) {
        this.$router.push('/?auth=login')
      }
      API.addtoWish(eventId)
    },
    filterTypes () {
      API.getAllEvents(this.eventType, this.dates).then(
        response => (this.events = response))
    }
  },
  created () {
    API.getAllEvents(this.eventType, this.dates).then(response => {
      return (this.events = response)
    })
  },
  mounted () {
    this.$root.$on('searchFunction', (selected, dates) => {
      this.eventType = selected
      this.dates = dates
      this.filterTypes()
    })
  }
}
</script>
<style lang="scss" scoped>
.cover-img{
  max-height: 250px;
  min-height: 250px;
}
.title-head{
  color:white;
}
</style>
