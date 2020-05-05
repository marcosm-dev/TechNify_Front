<template>
<v-container>
    <v-row>
      <v-col v-for="(event, i) in events" :key="i" cols="12" class="pa-0 mt-2">
        <v-card :to="{ name: 'BuyTicket', params: { eventId: event._id } }" class="mx-auto">
          <v-card-title :class="{'justify-center body-2 head-xs pa-1': $vuetify.breakpoint.sm}" dark> {{event.name}}</v-card-title>
           <v-row>
            <v-col cols="12" md="6" sm="7" lg="6" class="pt-0 pb-0">
              <v-img v-if="event.cover_img[0]" width="" :max-height="{'120px': $vuetify.breakpoint.xs, '400px': $vuetify.breakpoint.sm, '400px' : $vuetify.breakpoint.mdAndUp}" :src="event.cover_img[0]"></v-img>
              </v-col>
              <v-col class="hidden-xs-only">
                <v-card-text :class="{'body-1 text-lg-description': $vuetify.breakpoint.sm, '' : $vuetify.breakpoint.mdAndUp}">{{event.large_description}}</v-card-text>
              </v-col>
            </v-row>
            <v-row class="container-hg">
            <v-col cols="12" sm="4" lg="6">
            <ul class="display-1 ma-8 hidden-xs-only">
              <li :class="$vuetify.breakpoint.smAndUp ? 'title' : ''">Type:<br /><span :class="$vuetify.breakpoint.smAndUp ? 'title' : 'headline'">{{event.event_type.name}}</span></li>
              <li :class="$vuetify.breakpoint.smAndUp ? 'title' : ''">Date:<br /><span class="headline">{{event.date_start}} {{event.end}}</span></li>
              <li :class="$vuetify.breakpoint.smAndUp ? 'title' : ''">Place:<br /><span class="headline">{{event.place}}</span></li>
              <br />
            </ul>
             <ul class="d-flex d-sm-none mb-n6">
              <li class="caption mr-7">{{event.event_type.name}}</li>
              <li class="caption mr-7">{{event.place}}</li>
              <li class="caption mr-7">{{event.date_start}} {{event.end}}</li>
              <br />
            </ul>
            </v-col>
            <v-row class="d-flex justify-center" justify="center">
              <v-card-text class="d-sm-none mt-2 text-description text-center body-2">{{event.small_description}}</v-card-text>
            </v-row>
            <v-col cols="6" sm="8" lg="6" class="pt-0 pb-0">
              <v-img
                class="pt-0 hidden-xs-only"
                :max-height="$vuetify.breakpoint.smAndUp ? '300px' : ''" :width="$vuetify.breakpoint.sm ? '' : ''"
                :src="event.cover_img[1]"
              ></v-img>
            </v-col>
            </v-row>
            <v-divider></v-divider>
          <v-card-actions class="my-n2 text-center hidden-xs-only">
            <v-icon color="cyan darken-3" size="50px">mdi-cart</v-icon>
            <v-btn class="headline font-weight-medium" text>Buy now</v-btn>
            <v-spacer></v-spacer>
            <span class="display-2 price">{{event.price}} €</span>
            <v-spacer></v-spacer>
            <v-btn class="headline font-weight-medium" @click="addWish(events[i]._id)" color="cyan darken-3" text>Add to wish</v-btn>
            <v-icon  color="yellow lighten-1" size="50px">mdi-star-outline</v-icon>
          </v-card-actions>
           <v-card-actions class="my-n3 text-center d-sm-none">
            <v-btn max-height="21px" class="caption"><v-icon size="21px" color="cyan darken-3">mdi-cart</v-icon>
            Buy now</v-btn>
            <v-spacer></v-spacer>
            <span class="headline price">{{event.price}} €</span>
            <v-spacer></v-spacer>
            <v-btn max-height="21px" class="caption" @click="addWish(events[i]._id)" color="cyan darken-3" dark>Add to wish
            <v-icon size="21px" color="yellow lighten-1">mdi-star-outline</v-icon></v-btn>
          </v-card-actions>
          <v-divider></v-divider>
        </v-card>
      </v-col>
  </v-row>
</v-container>
</template>

<script>
import API from '../services/App'
export default {
  data: () => ({
    events: [],
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
  text-overflow: ellipsis;
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
.text-description {
  text-overflow: ellipsis;
  max-width: 350px;
}
.text-lg-description {
  text-overflow: ellipsis;
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
