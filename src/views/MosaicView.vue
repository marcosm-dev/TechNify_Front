<template>
<v-container>
  <v-row>
    <v-col class="pa-0" v-for="(event, i) in events" :key="i" cols="12" sm="6" md="6" lg="6">
      <v-card class="mr-1 ml-1 mt-4 card"
              :height="$vuetify.breakpoint.smAndUp ? '750px' : ''"
              background="cover"
              hover
              :to="{ name: 'BuyTicket', params: { eventId: event._id } }"
              >
        <v-col>
        <v-img :max-height="$vuetify.breakpoint.smAndUp ? '300px': ''" :class="$vuetify.breakpoint.mdAndUp ? 'cover-xs' : 'cover-xs'" :src="event.detail_img" ><v-card-title :class="$vuetify.breakpoint.smAndDown ? 'title-head headline font-weight-bold' : 'title-head'">{{event.name}}</v-card-title></v-img>
        </v-col>
        <div :class="$vuetify.breakpoint.mdAndUp ? 'container-card' : ''">
        <v-card-subtitle :class="$vuetify.breakpoint.xsOnly ? 'title mt-n5' : 'title'">{{event.place}}  /  {{event.date_start}}</v-card-subtitle>
        <v-card-text :class="$vuetify.breakpoint.mdAndDown ? 'headline description-sm' : 'title'">{{event.small_description}}</v-card-text>
        </div>
      </v-card>
        <v-card-actions class="mt-n2 mb-n3">
          <v-btn text color="cyan darken-4" outlined><v-icon size="30px" color="cyan darken-4" >mdi-cart</v-icon>Buy now</v-btn>
          <v-spacer></v-spacer>
          <v-btn @click="addWish(events[i]._id)" color="cyan darken-4" outlined text>Add to wish<v-icon size="30px" color="yellow darken-1">mdi-star-outline</v-icon></v-btn>
        </v-card-actions >
    </v-col>
  </v-row>
  <v-row justify="center">
  <v-btn max-height="25px" color="cyan darken-4" class="mt-10 pr-1 pl-1" x-large @click="toTop" dark>Volver al principio <v-icon class="ml-3">mdi-arrow-up-circle</v-icon> </v-btn>
  </v-row>
</v-container>
</template>
<script>
import API from '../services/App'
export default {
  data: () => ({
    events: Array,
    eventType: '',
    dates: null,
    fab: false
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
    },
    onScroll (e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.fab = top > 20
    },
    toTop () {
      this.$vuetify.goTo(0)
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
.card {
  border: 1px solid  rgb(33, 113, 124);
  border-radius: 20px 20px 0 0 !important;
  background: rgb(224, 236, 238);
  text-align: center;
}
.cover-xs {
  border-radius: 20px 20px 0 0 !important;
  border: 1px solid  rgb(33, 113, 124);
}
.title-head{
  color: rgb(20, 63, 68);
  border-radius: 20px 20px 0 0 !important;
  background: rgba(255, 255, 255, 0.747);
  padding: 0px;
  justify-content: center;

}
.description {
  font-size: 16px;
  font-weight: 300;
  text-align: center;
  overflow: hidden;
}
.description-sm {
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 350px;
}
</style>
