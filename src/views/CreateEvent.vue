<template>
  <v-row class="justify-center mx-auto">
    <v-col cols="8">
      <v-col cols="4">
        <h2>CREATE YOUR EVENT</h2>
        <v-form ref="form">
          <v-text-field v-model="name" label="Name"></v-text-field>
          <v-text-field v-model="place" label="Place"></v-text-field>
          <v-text-field v-model="price" label="Price"></v-text-field>

          <v-select
            v-model="select"
            :items="getItems"
            :rules="[v => !!v || 'Item is required']"
            label="Event's Type"
            required
          ></v-select>
          <div class="menu">
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
          </div>
          <v-col>
            <div class="ml-10 image justify-center">
              <h5>Cover Image</h5>
              <v-file-input multiple label="Cover Image"></v-file-input>
              <h5>Detail Image</h5>
              <v-file-input multiple label="Detail Image"></v-file-input>
            </div>
          </v-col>
        </v-form>
      </v-col>
      <v-col cols="4" class="justify-center d-flex"></v-col>
      <v-row cols="12">
        <v-col cols="8">
          <h2>Small Description:</h2>
          <v-container fluid>
            <v-textarea clear-icon="cancel" v-model="small" placeholder="Small Description: "></v-textarea>
          </v-container>
          <h2>Large Description:</h2>

          <v-container fluid>
            <v-textarea v-model="large" clear-icon="cancel" placeholder="Large Description."></v-textarea>
          </v-container>
        </v-col>
        <v-col cols="4">
          <v-btn
            @click="createEvent"
            color="teal darken-4"
            dark
            class="ml-10 mr-10"
            depressed
          >Create Event</v-btn>
          <v-btn color="teal darken-4" dark depressed>Preview</v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import API from '../services/App'

export default {
  data: () => ({
    name: '',
    place: '',
    price: null,
    small: '',
    large: '',
    select: null,
    dates: [],
    menu: false,
    eventTypes: []
  }),
  computed: {
    getItems () {
      return this.eventTypes.map(e => e.name)
    }
  },

  methods: {
    createEvent () {
      const event = {
        name: this.name,
        place: this.place,
        price: this.price,
        date_start: this.dates[0],
        date_end: this.dates[1],
        small_description: this.small,
        large_description: this.large,
        event_type: this.eventTypes.filter(e => e.name === this.select)[0]._id
      }
      API.createEvent(event)
    }
  },
  mounted () {
    API.getTypes().then(types => {
      this.eventTypes = types
    })
  }
}
</script>

<style lang="scss" scoped>
.image {
  width: 170px;
}
.menu {
  width: 220px;
}
</style>
