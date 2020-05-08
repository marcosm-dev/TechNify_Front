<template>
  <v-container id="background">
    <v-row>
      <v-col cols="12" class="pa-0 mt-2">
        <v-card v-if="event" class="card">
          <v-card-title
            :class="{'justify-center body-2 pa-1 head-xs': $vuetify.breakpoint.xs, 'justify-center head headline pa-1' : $vuetify.breakpoint.sm, 'title-head justify-center display-1 pa-0  font-weight-bold' : $vuetify.breakpoint.lg, 'title-head justify-center display-1 pa-1 font-weight-regular': $vuetify.breakpoint.md, 'title-head justify-center display-2 ma-0' : $vuetify.breakpoint.xl,}"
            dark
          >{{event.name}}</v-card-title>
          <v-row>
            <v-col cols="12" sm="5" lg="6" class="pt-0 pb-0">
              <v-img
                v-if="event.cover_img[0]"
                :height="$vuetify.breakpoint.smAndUp ? '350px' : '120px'"
                :max-height="$vuetify.breakpoint.smAndUp ? '300px' : '120px'"
                :src="event.cover_img[0]"
              ></v-img>
            </v-col>
            <v-col class="hidden-xs-only pt-0 pb-0 d-flex justify-center" cols="12" sm="7" lg="6">
              <v-card-text
                :class="{'title font-weight-regular description pb-2': $vuetify.breakpoint.sm, 'title font-weight-regular description-md' : $vuetify.breakpoint.mdAndUp}"
              >{{event.large_description}}</v-card-text>
            </v-col>
          </v-row>
          <v-row class="container pa-0">
            <v-col class="ml-5 pt-5" cols="12" sm="4" lg="6">
              <ul class="hidden-xs-only">
                <li :class="$vuetify.breakpoint.smAndUp ? 'headline' : ''">Type:<br />
                <span :class="$vuetify.breakpoint.smAndUp ? 'headline' : 'headline'">{{event.event_type.name}}</span>
                </li>
                <li :class="$vuetify.breakpoint.smAndUp ? 'headline' : ''">Date:<br />
                <span class="headline">{{event.date_start}} {{event.end}}</span>
               </li>
                <li :class="$vuetify.breakpoint.smAndUp ? 'headline' : ''">Place:<br />
                <span class="headline">{{event.place}}</span>
                </li><br />
              </ul>
              <ul class="d-flex d-sm-none mb-n6 mt-n5 bg--card">
                <li class="caption mr-7 font-weight-black">{{event.event_type.name}}</li>
                <li class="caption mr-7 font-italic text-xs">{{event.place}}</li>
                <li class="caption mr-7 font-weight-bold">{{event.date_start}} {{event.end}}</li>
                <br />
              </ul>
            </v-col>
            <v-row>
              <v-card-text
                class="d-sm-none pl-7 mt-2 text-description text-center body-2"
              >{{event.small_description}}</v-card-text>
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
          <v-card-actions class="hidden-xs-only title-head">
            <v-spacer></v-spacer>
            <v-btn
              class="headline font-weight-medium button pb-12"
              @click.stop.prevent="buyEvent(event._id)"
              rounded
            >
              <v-icon color="cyan darken-3" size="50px" class>mdi-cart</v-icon>Buy now
            </v-btn>
            <v-spacer></v-spacer>
            <span class="display-2 price">{{event.price}} €</span>
            <v-spacer></v-spacer>
            <v-btn
              class="headline font-weight-medium button pb-12"
              @click.stop.prevent="addWish(event._id)"
              rounded
            >
              Add  wish
              <v-icon class="ml-2" color="yellow lighten-1" size="50px">mdi-star-outline</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
          <v-card-actions class="mt-n2 d-sm-none">
            <v-btn max-height="30px" class="caption button" @click.stop.prevent="buyEvent" rounded>
              <v-icon size="21px" color="cyan darken-3">mdi-cart</v-icon>Buy now
            </v-btn>
            <v-spacer></v-spacer>
            <span class="headline price">{{event.price}} €</span>
            <v-spacer></v-spacer>
            <v-btn
              max-height="30px"
              class="caption button"
              color="cyan darken-3"
              dark
              rounded
              @click.stop.prevent="buy(event._id)"
            >
              <v-icon size="21px" color="yellow lighten-1">mdi-star-outline</v-icon>Add wish
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <h1 v-if="clicked" class="text-center display-3 my-10 font-weight-bold head-card pa-2">It may interest you</h1>
    <v-row class="justify-center">
      <v-col cols="5">
        <EventCard v-on:eventShow="clicked = false" v-if="eventTwo" :event="eventTwo" />
      </v-col>
      <v-col cols="5">
        <EventCard v-on:eventShow="clicked = false" v-if="eventOne" :event="eventOne" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import API from '../services/App'
import EventCard from '../components/Event.vue'

export default {
  name: 'BuyTicket',
  data () {
    return {
      event: false,
      user: false,
      events: [],
      clicked: true
    }
  },
  components: {
    EventCard
  },
  computed: {
    eventOne () {
      return this.events[Math.floor(Math.random() * this.events.length)]
    },
    eventTwo () {
      return this.events[Math.floor(Math.random() * this.events.length)]
    }
  },
  watch: {
    $route (to, from) {
      this.getEventData()
    }
  },
  async created () {
    await this.getEventData()
    if (localStorage.role !== 'ORGANIZER') {
      this.user = true
    }
  },
  mounted () {
    API.getAllEvents().then(events => {
      this.events = events
    })
  },
  methods: {
    async getEventData () {
      this.event = await API.getInfo(this.$route.params.eventId)
      this.events = API.getAllEvents()
    },
    buyEvent () {
      alert('vamos a comprar!')
    },
    addWish (eventId) {
      if (!localStorage.token) {
        this.$router.push('/?auth=login')
      }
      API.addtoWish(eventId)
    }
  }
}
</script>

<style lang="scss" scoped>
#background {
  background-color: rgba(221, 230, 233, 0.657);
}
.textstyles {
  height: 139px;
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
.bg--card{
  background-color: white !important;
}
.head-xs {
  border-radius: 20px 20px 0 0 !important;
  background: rgb(21, 91, 100);
  color: white;
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
.headline {
  text-align: start;
}
.button {
  background-color: rgb(237, 244, 246) !important;
}
</style>
