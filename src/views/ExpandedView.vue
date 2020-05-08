<template>
<v-container id="background" class="mt-n10" fluid>
  <v-row>
    <v-col cols="1" class="reboot-col">
      <img src="@/assets/Publicity2.png" class="reboot"/>
      </v-col>
      <v-col cols="10">
    <v-container >
    <v-row justify>
      <v-col v-for="(event, i) in events" :key="i" cols="12" class="pa-0">
        <v-card :to="{ name: 'BuyTicket', params: { eventId: event._id } }" class="mb-10 card" hover>
          <v-card-title :class="{'justify-center body-2 pa-1 head-xs': $vuetify.breakpoint.xs, 'justify-center title-head headline pa-1' : $vuetify.breakpoint.sm, 'title-head justify-center display-2 pa-1 mt-10' : $vuetify.breakpoint.lg, 'justify-center display-1 pa-01': $vuetify.breakpoint.md, 'title-head justify-center display-2 pa-0' : $vuetify.breakpoint.xl,}" dark> {{event.name}}</v-card-title>
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
          <v-card-actions class="hidden-xs-only" >
            <v-spacer></v-spacer>

            <v-btn class="mb-4 headline font-weight-medium pb-12" @click.stop.prevent="buyNow" rounded><v-icon color="cyan darken-3" size="50px">mdi-cart</v-icon> Buy now</v-btn>
            <v-spacer></v-spacer>
            <span class="display-2 price">{{event.price}} €</span>
            <v-spacer></v-spacer>
            <v-btn class="mb-4 headline font-weight-medium pb-12" @click.stop.prevent="addWish(events[i]._id)" rounded><v-icon  color="yellow lighten-1" size="50px">mdi-star-outline</v-icon>Add to wish</v-btn>
          <v-spacer></v-spacer>
          </v-card-actions>
           <v-card-actions class="mt-n2 d-sm-none">
           <v-btn max-height="21px" class="caption"><v-icon size="21px" color="cyan darken-3" outlined>mdi-cart</v-icon>Buy now</v-btn>
           <v-spacer></v-spacer>
            <span class="headline price">{{event.price}} €</span>
            <v-spacer></v-spacer>
            <v-btn max-height="21px" class="caption" @click.stop.prevent="(events[i]._id)" color="cyan darken-3" dark outlined><v-icon size="21px" color="yellow lighten-1">mdi-star-outline</v-icon>Add to wish</v-btn>
          </v-card-actions>
        </v-card>
        </v-col>
      </v-row>
        <v-row justify="center">
        <v-btn max-height="25px" color="cyan darken-4" class="mt-10 pr-1 pl-1" x-large @click="toTop" dark>Volver al principio <v-icon class="ml-3">mdi-arrow-up-circle</v-icon> </v-btn>
      </v-row>
      </v-container>
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
    },
    buyNow () {
      console.log('Buy Now')
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
#background{
background-color: rgba(221, 230, 233, 0.657);
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

.headline {
  text-align: start;
  margin-top: 1vh;
}
.card {
  background: rgb(224, 236, 238);
  text-align: center;
}
.textstyles {
  height: 139px;
}
.button{
  display: flex;
  align-self: center;
}

.title-head {
  color: rgb(20, 63, 68);
  background: rgba(255, 255, 255, 0.747) !important;
  padding: 10px;
  justify-content: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
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
  max-height: 90vh;
  margin-bottom: 40px;
}

</style>
