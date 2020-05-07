<template>
  <v-container fluid>
    <v-row>
      <v-col class="reboot-col" >
      <img src="@/assets/Publicity2.png" class="reboot"/>
      </v-col>
       <v-col cols="10">
        <v-container fluid>
          <v-row justify>
            <v-col
              class="pa-0"
              v-for="(event, i) in events"
              :key="i"
              cols="12"
              sm="6"
              md="6"
              lg="4"
            >
              <v-card
                class="mr-4 ml-4 mt-4 card mb-8"
                hover
                :to="{ name: 'BuyTicket', params: { eventId: event._id } }"
              >
                <v-img height="300px" :src="event.detail_img">
                  <v-card-title
                    :class="$vuetify.breakpoint.smAndDown ? 'title-head headline font-weight-bold' : 'title-head'"
                  >{{event.name}}</v-card-title>
                </v-img>
                <div :class="$vuetify.breakpoint.mdAndUp ? 'container-card' : ''">
                  <v-card-subtitle
                    :class="$vuetify.breakpoint.xsOnly ? 'title mt-n5 event-details' : 'title event-details'"
                  >{{event.place}} / {{event.date_start}}</v-card-subtitle>
                  <v-card-text
                    :class="$vuetify.breakpoint.mdAndDown ? 'headline description-sm' : 'event-title'"
                  >{{event.small_description}}</v-card-text>
                </div>
                <v-card-actions class="pa-4">
                  <v-spacer></v-spacer>
                  <v-btn class="button" color="cyan darken-4" rounded text outlined>
                    <v-icon size="30px" color="cyan darken-4">mdi-cart</v-icon>Buy now
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn
                    @click.stop.prevent="addWish(events[i]._id)"
                    rounded
                    class="button"
                    color="cyan darken-4"
                    outlined
                    text
                  >
                    Add to wish
                    <v-icon size="30px" color="yellow darken-1">mdi-star-outline</v-icon>
                  </v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-btn
              max-height="25px"
              color="cyan darken-4"
              class="mt-10 pr-1 pl-1"
              x-large
              @click="toTop"
              dark
            >
              Volver al principio
              <v-icon class="ml-3">mdi-arrow-up-circle</v-icon>
            </v-btn>
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
        response => (this.events = response)
      )
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
.reboot-col {
  padding: 0px;
  margin-top: -20px;
  // width: 100px;
}
.reboot {
  top: 0px;
  position: fixed;
  height: 100vh;
  width: 8vw;
}

.card {
  background: rgb(224, 236, 238);
  text-align: center;
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
.event-title {
  height: 190px;
  font-size: 20px !important;
  overflow: hidden;
  padding: 20px;
  margin-bottom: 20px;
}
.description {
  font-size: 16px;
  font-weight: 300;
  text-align: center;
  overflow: hidden;
}
.description-sm {
  text-overflow: ellipsis;
  max-height: 350px;
}
.sidebar {
  margin: 0 !important;
}
.button {
  background-color: rgb(248, 250, 251);
}
</style>
