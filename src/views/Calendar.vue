<template>
  <v-container id="background" fluid>
  <v-row>
    <v-col class="reboot-col">
    <img src="@/assets/Publicity2.png" class="reboot"/>
    </v-col>
    <v-col cols="10">
      <v-container fluid>
  <v-row class="fill-height">
    <v-col>
      <v-sheet height="64">
        <v-toolbar flat color="white">
        <v-btn color="cyan darken-4" dark class="mr-4" @click="dialog = true">New Event</v-btn>
          <v-btn outlined class="mr-4" @click="setToday">
            Today
          </v-btn>
          <v-btn fab text small @click="prev">
            <v-icon small>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn fab text small @click="next">
            <v-icon small>mdi-chevron-right</v-icon>
          </v-btn>
          <v-toolbar-title>{{ title }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-menu bottom right>
            <template v-slot:activator="{ on }">
              <v-btn
                outlined
                v-on="on"
              >
                <span> {{ typeToLabel[type] }} </span>
                <v-icon right>mdi-menu-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item @click="type = 'day'">
                <v-list-item-title>Day</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = 'week'">
                <v-list-item-title>Week</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = 'month'">
                <v-list-item-title>Month</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = '4day'">
                <v-list-item-title>4 days</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-toolbar>
      </v-sheet>
      <v-sheet height="600">
        <v-calendar
          ref="calendar"
          v-model="focus"
          color="primary"
          :events="events"
          :event-color="getEventColor"
          :event-margin-bottom="3"
          :now="today"
          :type="type"
          @click:event="showEvent"
          @click:more="viewDay"
          @click:date="viewDay"
          @change="updateRange"
          :weekdays="[1, 2, 3, 4, 5, 6, 0]"
          :short-weekdays="false"
        ></v-calendar>

      <v-dialog v-model="dialog" max-width="500">
        <v-card>
          <v-container>
            <v-form @submit.prevent="addEvent">
              <v-text-field v-model="name" type="text" label="Event Name"></v-text-field>
              <v-text-field v-model="place" type="text" label="Event Place"></v-text-field>
               <v-select
                v-model="selectType"
                :items="eventTypes"
                label="Event Type"
                required
              ></v-select>
                    <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="dates"
              transition="scale-transition"
              offset-y
              min-width="290px"
          >
              <template v-slot:activator="{ on }">
                <v-combobox v-model="dates" multiple chips small-chips readonly v-on="on"></v-combobox>
              </template>
              <v-date-picker v-model="dates" multiple no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                <v-btn text color="primary" @click="$refs.menu.save(dates)">OK</v-btn>
              </v-date-picker>
            </v-menu>
              <v-select
                v-model="selectColor"
                :items="colors"
                label="COLOR"
                required
              ></v-select>
              <v-btn type="submit" color="primay" class="mr-4" @click.stop="dialog = false">Create Event</v-btn>
            </v-form>
          </v-container>
        </v-card>
      </v-dialog>
        <v-menu
          v-model="selectedOpen"
          :close-on-content-click="false"
          :activator="selectedElement"
          offset-x
        >
          <v-card
            color="grey lighten-4"
            min-width="350px"
            flat
          >
            <v-card color="grey lighten-4" min-width="350px" flat>
  <v-toolbar :color="selectedEvent.color" dark>
    <v-btn icon @click="deleteEvent(selectedEvent)">
      <v-icon>mdi-delete</v-icon>
    </v-btn>
    <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
    <v-spacer></v-spacer>
  </v-toolbar>
  <v-card-text>
    <v-form v-if="currentlyEditing !== selectedEvent.id">
      {{selectedEvent.name}} - {{selectedEvent.place}}
    </v-form>
    <v-form v-else>
      <v-text-field v-model="selectedEvent.name" type="text" label="name"></v-text-field>
    </v-form>
  </v-card-text>
  <v-card-actions>
    <v-btn text color="secondary" @click="selectedOpen = false">Close</v-btn>
    <v-btn text v-if="currentlyEditing !== selectedEvent.id" @click.prevent="editEvent(selectedEvent)">Edit</v-btn>
    <v-btn text v-else @click.prevent="updateEvent(selectedEvent)">Save</v-btn>
  </v-card-actions>
</v-card>
            <v-toolbar
              :color="selectedEvent.color"
              dark
            >
              <v-btn icon>
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
              <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </v-toolbar>
            <v-card-text>
              <span v-html="selectedEvent.details"></span>
            </v-card-text>
            <v-card-actions>
              <v-btn
                text
                color="secondary"
                @click="selectedOpen = false"
              >
                Cancel
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
      </v-sheet>
    </v-col>
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
import { db } from '../main.js'
import API from '../services/App'
export default {
  data: () => ({
    today: new Date().toISOString().substr(0, 10),
    focus: new Date().toISOString().substr(0, 10),
    type: 'month',
    typeToLabel: {
      month: 'Month',
      week: 'Week',
      day: 'Day',
      '4days': '4 Days'
    },
    name: null,
    selectType: '',
    selectColor: '',
    dates: [],
    place: '',
    colors: ['red darken-3', 'purple ', 'cyan darken-4', 'pink accent-3', 'light-green darken-1', 'deep-orange', 'light-green ', 'lime ', 'purple lighten-1'],
    currentlyEditing: null,
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    events: [],
    eventTypes: [],
    dialog: false
  }),
  async created () {
    await this.getEvents()
  },
  computed: {
    title () {
      const { start, end } = this
      if (!start || !end) {
        return ''
      }
      const startMonth = this.monthFormatter(start)
      const endMonth = this.monthFormatter(end)
      const suffixMonth = startMonth === endMonth ? '' : endMonth
      const startYear = start.year
      const endYear = end.year
      const suffixYear = startYear === endYear ? '' : endYear
      const startDay = start.day + this.nth(start.day)
      const endDay = end.day + this.nth(end.day)
      switch (this.type) {
        case 'month':
          return `${startMonth} ${startYear}`
        case 'week':
        case '4day':
          return `${startMonth} ${startDay} ${startYear} - ${suffixMonth} ${endDay} ${suffixYear}`
        case 'day':
          return `${startMonth} ${startDay} ${startYear}`
      }
      return ''
    },
    monthFormatter () {
      return this.$refs.calendar.getFormatter({
        timeZone: 'UTC', month: 'long'
      })
    }
  },
  mounted () {
    this.$refs.calendar.checkChange()
    API.getTypes().then(types => {
      types.forEach(e => this.eventTypes.push(e.name))
    })
  },
  methods: {
    async getEvents () {
      const snapshot = await db.collection('events').get()
      const events = []
      snapshot.forEach(doc => {
        console.log(doc.id)
        const appData = doc.data()
        appData.id = doc.id
        events.push(appData)
      })
      this.events = events
    },
    editEvent (ev) {
      this.currentlyEditing = ev.id
    },
    async updateEvent (ev) {
      try {
        await db.collection('events').doc(ev.id).update({
          name: ev.name
        })
        this.selectedOpen = false
        this.currentlyEditing = null
      } catch (error) {
        console.log(error)
      }
    },
    async deleteEvent (ev) {
      try {
        await db.collection('events').doc(ev.id).delete()
        this.selectedOpen = false
        this.getEvents()
      } catch (error) {
        console.log(error)
      }
    },
    async addEvent () {
      try {
        if (this.name && this.start && this.end) {
          await db.collection('events').add({
            name: this.name,
            type: this.selectType,
            place: this.place,
            start: this.dates[0],
            end: this.dates[1],
            color: this.selectColor
          })
          this.getEvents()
          this.name = ''
          this.start = ''
          this.end = ''
          this.selectColor = ''
        } else {
          alert('REQUIRED FIELDS')
        }
      } catch (error) {
        console.log(error)
      }
      this.getEvents()
    },
    viewDay ({ date }) {
      this.focus = date
      this.type = 'day'
    },
    getEventColor (event) {
      return event.color
    },
    setToday () {
      this.focus = this.today
    },
    prev () {
      this.$refs.calendar.prev()
    },
    next () {
      this.$refs.calendar.next()
    },
    showEvent ({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event
        this.selectedElement = nativeEvent.target

        // setTimeout(() => this.selectedOpen = true, 10)
      }
      if (this.selectedOpen) {
        this.selectedOpen = false
        setTimeout(open, 10)
      } else {
        open()
      }
      nativeEvent.stopPropagation()
    },
    updateRange ({ start, end }) {
      // You could load events from an outside source (like database) now that we have the start and end dates on the calendar
      this.start = start
      this.end = end
    },
    nth (d) {
      return d > 3 && d < 21
        ? 'th'
        : ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th'][d % 10]
    }
  }
}
</script>
<style lang="scss" scoped>
#background{
background-color: rgba(221, 230, 233, 0.657);
min-height: calc(100vh - 6vh);
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
</style>
