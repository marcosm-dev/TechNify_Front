<template>
<v-container>
    <v-row>
      <v-col v-for="(event, i) in events" :key="i" cols="12" class="pa-0 mt-2">
        <v-card :to="{ name: 'BuyTicket', params: { eventId: event._id } }" class="card" hover>
          <v-card-title :class="{'justify-center body-2 pa-1 head-xs': $vuetify.breakpoint.xs, 'justify-center head headline pa-1' : $vuetify.breakpoint.sm, 'head justify-center display-2 pa-1 mt-10' : $vuetify.breakpoint.lg, 'head justify-center display-1 pa-01': $vuetify.breakpoint.md, 'head justify-center display-12 pa-0' : $vuetify.breakpoint.xl,}" dark> {{event.name}}</v-card-title>
           <v-row>
            <v-col cols="12" sm="5" lg="6" class="pt-0 pb-0">
              <v-img v-if="event.cover_img[0]"
              :height="$vuetify.breakpoint.smAndUp ? '350px' : '120px'"
              :max-height="$vuetify.breakpoint.smAndUp ? '300px' : '120px'"
              :src="event.cover_img[0]"></v-img>
              </v-col>
              <v-col class="hidden-xs-only pt-0 pb-0justify-center" cols="12" sm="7" lg="6">
                <v-card-text :class="{'title font-weight-regular description pb-2': $vuetify.breakpoint.sm, 'title font-weight-regular description-md' : $vuetify.breakpoint.mdAndUp}">{{event.large_description}}</v-card-text>
              </v-col>
            </v-row>
            <v-row class="container pa-0">
            <v-col class="ml-5 pt-5" cols="12" sm="4" lg="6">
            <ul class="hidden-xs-only">
              <li :class="$vuetify.breakpoint.smAndUp ? 'headline' : ''">Type:<br /><span :class="$vuetify.breakpoint.smAndUp ? 'headline' : 'headline'">{{event.event_type.name}}</span></li>
              <li :class="$vuetify.breakpoint.smAndUp ? 'headline' : ''">Date:<br /><span class="headline">{{event.date_start}} {{event.end}}</span></li>
              <li :class="$vuetify.breakpoint.smAndUp ? 'headline' : ''">Place:<br /><span class="headline">{{event.place}}</span></li>
              <br />
            </ul>
             <ul class="d-flex d-sm-none mb-n6 mt-n3">
              <li  class="caption mr-7 font-weight-black">{{event.event_type.name}}</li>
              <li class="caption mr-7 font-italic text-xs">{{event.place}}</li>
              <li class="caption mr-7 font-weight-bold">{{event.date_start}} {{event.end}}</li>
              <br />
            </ul>
            </v-col>
            <v-row>
              <v-card-text class="d-sm-none pl-7 mt-2 text-description text-center body-2">{{event.small_description}}</v-card-text>
            </v-row>
            <v-col cols="6" sm="8" lg="6" class="pb-0 pr-0">
              <v-img
                class="pt-0 hidden-xs-only"
                :max-height="$vuetify.breakpoint.smAndUp ? '300px' : '120px'"
                :height="$vuetify.breakpoint.smAndUp ? '300px' : '120px'"
                 background="cover"
                :src="event.cover_img[1]"
              ></v-img>
            </v-col>
            </v-row>
            <v-divider></v-divider>
        </v-card>
          <v-card-actions class="hidden-xs-only">
            <v-btn class="headline font-weight-medium" text><v-icon color="cyan darken-3" size="50px">mdi-cart</v-icon> Buy now</v-btn>
            <v-spacer></v-spacer>
            <span class="display-2 price">{{event.price}} €</span>
            <v-spacer></v-spacer>
            <v-btn class="headline font-weight-medium" @click="addWish(events[i]._id)" color="cyan darken-3" text><v-icon  color="yellow lighten-1" size="50px">mdi-star-outline</v-icon>Add to wish</v-btn>
          </v-card-actions>
           <v-card-actions class="mt-n2 d-sm-none">
           <v-btn max-height="21px" class="caption"><v-icon size="21px" color="cyan darken-3" outlined>mdi-cart</v-icon>Buy now</v-btn>
           <v-spacer></v-spacer>
            <span class="headline price">{{event.price}} €</span>
            <v-spacer></v-spacer>
            <v-btn max-height="21px" class="caption" @click="addWish(events[i]._id)" color="cyan darken-3" dark outlined><v-icon size="21px" color="yellow lighten-1">mdi-star-outline</v-icon>Add to wish</v-btn>
          </v-card-actions>
      </v-col>
      <v-row justify="center">
  <v-btn max-height="25px" color="cyan darken-4" class="mt-10 pr-1 pl-1" x-large @click="toTop" dark>Volver al principio <v-icon class="ml-3">mdi-arrow-up-circle</v-icon> </v-btn>
  </v-row>
  </v-row>
</v-container>
</template>

<script>
import API from '../services/App'
export default {
  data: () => ({
    events: [],
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
    API.getAllEvents().then(response => {
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
.textstyles {
  height: 139px;
}
.head {
  border-radius: 20px 20px 0 0 !important;
  background: rgb(21, 91, 100);
  color: white;
}
.head-xs {
  border-radius: 20px 20px 0 0 !important;
  background: rgb(21, 91, 100);
  color: white;
}
.card {
  border-radius: 20px 20px 0 0 !important;
  background: rgb(204, 222, 224);
}
.photo {
  max-height: 100px;
}
.description {
  max-width: 350px;
  max-height: 300px;
  overflow: hidden;
}
.description-md {
  max-height: 290px;
  overflow: hidden;
  text-align: justify;
}
.text-lg-description {
  max-height: 100px;
}
.price {
  color: green;
}
.card-container{
  border-radius: 20px 20px 0 0 !important;
  max-height: 90vh;
  margin-bottom: 40px;
}
</style>
