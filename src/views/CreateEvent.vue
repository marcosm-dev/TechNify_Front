<template>
<v-container class="bg fill-height pt-0" fluid>
  <v-row>
    <v-col cols="12">
    <v-col cols="6">
      <h1 class="display-1 mb-10 font-weight-medium">CREATE YOUR EVENT</h1>
      <v-form ref="form">
        <v-text-field v-model="name" label="Name"></v-text-field>
        <v-text-field v-model="place" label="Place"></v-text-field>
        <v-text-field v-model="price" label="Price"></v-text-field>
        <v-select
          v-model="select"
          :items="getItems"
          label="Event's Type"
          required
        ></v-select>
      </v-form>
    </v-col>
    <v-col cols="6">
    <v-col cols=6 class="menu">
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
       <v-btn  height="20px"  color="cyan darken-4" class="mb-5" dark depressed  @click="clearDate">Clear</v-btn>
    </v-col>
    <v-col class="mt-n4" cols="12">
          <h5>Detail Image</h5>
          <input class="input my-2" type="file"  multiple @change="twoFileSelected">
          <v-progress-linear :color="progressbar ? 'blue' : 'white'" height="10px" rounded :value="UploadValue" max="100" id="uploader"></v-progress-linear>
          <h5 class="mt-2">Cover Image</h5>
          <input class="my-2" type="file"  multiple @change="onFileSelected">
          <v-progress-linear :color="progressbar ? 'blue' : 'white'"  height="10px" rounded :value="UploadValue2" max="100" id="uploader"></v-progress-linear>
          <v-btn class="my-2" color="cyan darken-4" dark depressed @click="onUpload">Upload</v-btn>
    </v-col>
  </v-col>
<v-row>
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
      color="cyan darken-4"
      dark
      class="mb-10 mx-6"
      depressed
    >Create Event</v-btn>
    <v-btn @click="preview" class="mb-10" color="cyan darken-4" dark depressed>Preview</v-btn>
    <div v-show="showPreview">
    <v-img class="my-10" v-if="pictureTwo" :src="pictureTwo"></v-img>
  <v-img v-if="picture" :src="picture"></v-img>
    </div>
  </v-col>
</v-row>
<div v-show="newEvent">
<h1  class="my-10"> EVENT PREVIEW </h1>
 <Preview v-if="newEvent" :typeEvent="select" :event="newEvent" />
 <pre> {{newEvent}} </pre>
</div>
</v-col>
</v-row>
</v-container>
</template>

<script>
import API from '../services/App'
import firebase from 'firebase'
import Preview from '../components/Preview'

export default {
  data: () => ({
    showPreview: true,
    progressbar: false,
    selectedFile: null,
    selectedFileTwo: null,
    UploadValue: 0,
    UploadValue2: 0,
    picture: null,
    pictureTwo: null,
    name: '',
    place: '',
    price: null,
    small: '',
    large: '',
    select: null,
    dates: [],
    menu: false,
    eventTypes: [],
    newEvent: false
  }),
  components: {
    Preview
  },
  computed: {
    getItems () {
      return this.eventTypes.map(e => e.name)
    }
  },
  methods: {
    onFileSelected (event) {
      this.selectedFile = event.target.files[0]
    },
    twoFileSelected (event) {
      this.selectedFileTwo = event.target.files[0]
    },
    onUpload () {
      this.progressbar = true
      const storageRef = firebase.storage().ref(`imagenes/${this.selectedFile.name}`)
      const task = storageRef.put(this.selectedFile)
      task.on('state_changed', snapshot => {
        const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        this.UploadValue = percentage
      }, error => { console.log(error.messsage) },
      () => {
        this.UploadValue = 100
        task.snapshot.ref.getDownloadURL().then((url) => {
          this.picture = url
          console.log(this.picture)
        })
        this.coverUpload()
      })
    },
    coverUpload () {
      const storageRef = firebase.storage().ref(`imagenes/${this.selectedFileTwo.name}`)
      const task = storageRef.put(this.selectedFileTwo)
      task.on('state_changed', snapshot => {
        const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        this.UploadValue2 = percentage
      }, error => { console.log(error.messsage) },
      () => {
        this.UploadValue2 = 100
        task.snapshot.ref.getDownloadURL().then((url) => {
          this.pictureTwo = url
          console.log(this.pictureTwo)
        })
      })
    },
    preview () {
      this.showPreview = false
      this.newEvent = {
        name: this.name,
        place: this.place,
        price: this.price,
        date_start: this.dates[0],
        date_end: this.dates[1],
        detail_img: this.picture,
        cover_img: [this.picture, this.pictureTwo],
        small_description: this.small,
        large_description: this.large,
        event_type: this.eventTypes.filter(e => e.name === this.select)[0]._id
      }
    },
    createEvent () {
      const newEvent = this.newEvent
      API.createEvent(newEvent)
    },
    clearDate () {
      this.dates = []
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
*{
  font-size: 25px;
}
</style>
