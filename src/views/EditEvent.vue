<template>
<v-container>
  <v-row class="justify-center mx-auto ">
    <v-col cols="12">
      <v-col cols="6">
        <h1 class="display-1 mb-10 font-weight-medium">EDIT YOUR EVENT</h1>
        <v-form ref="form">
          <v-text-field v-model="eventdb.name" label="Name"></v-text-field>
          <v-text-field v-model="eventdb.place" label="Place"></v-text-field>
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
        <v-btn text color="cyan darken-4" @click="menu = false">Cancel</v-btn>
        <v-btn text color="cyan darken-4" @click="$refs.menu.save(dates)">OK</v-btn>
          </v-date-picker>
        </v-menu>
          <v-btn  height="20px"  color="cyan darken-4" dark depressed  @click="clearDate">Clear</v-btn>
        </v-col>
         <v-col class="mt-n4" cols="12">
          <h5>Detail Image</h5>
          <input class="input my-5" type="file"  multiple @change="twoFileSelected">
          <v-progress-linear :color="progressbar ? 'blue' : 'white'" height="10px" rounded :value="UploadValue" max="100" id="uploader"></v-progress-linear>
          <h5 class="mt-2">Cover Image</h5>
          <input class="my-5" type="file"  multiple @change="onFileSelected">
          <v-progress-linear :color="progressbar ? 'blue' : 'white'"  height="10px" rounded :value="UploadValue2" max="100" id="uploader"></v-progress-linear>
          <v-btn class="my-5" color="cyan darken-4" dark depressed @click="uploadImg">Upload</v-btn>
      </v-col>
      </v-col>
      <v-col cols="4" class="justify-center d-flex"></v-col>
      <v-row>
        <v-col cols="8">
          <h2>Small Description:</h2>
          <v-container fluid>
            <v-textarea
              clear-icon="cancel"
              v-model="eventdb.small_description"
              placeholder="Small Description: "
            ></v-textarea>
          </v-container>
          <h2>Large Description:</h2>
          <v-container fluid>
            <v-textarea
              v-model="eventdb.large_description"
              clear-icon="cancel"
              placeholder="Large Description."
            ></v-textarea>
          </v-container>
        </v-col>
        <v-col cols="4">
          <v-btn
            @click="editEvent"
            color="cyan darken-4"
            dark
            class="ml-10 mr-10"
            depressed
          >Update Event</v-btn>
          <v-btn @click="preview" color="cyan darken-4" dark depressed>Preview</v-btn>
    <div v-show="showPreview">
    <v-img class="my-10" v-if="pictureTwo" :src="pictureTwo[0]"></v-img>
  <v-img v-if="picture" :src="picture"></v-img>
    </div>
  </v-col>
</v-row>
<div v-show="editedEvent">
<h1 class="display-3 my-6"> EVENT PREVIEW </h1>
 <Preview v-if="editedEvent" :typeEvent="select" :detailImg="pictureTwo" :event="editedEvent" />

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
    eventdb: {},
    showPreview: true,
    progressbar: false,
    select: null,
    dates: [],
    menu: false,
    eventTypes: [],
    selectedFile: null,
    selectedFileTwo: null,
    pictureUpdated: null,
    pictureUpdatedTwo: null,
    UploadValue: 0,
    UploadValue2: 0,
    editedEvent: false
  }),
  components: {
    Preview
  },
  computed: {
    getItems () {
      return this.eventTypes.map(e => e.name)
    },
    picture () {
      if (this.pictureUpdated) { return this.pictureUpdated } else { return this.eventdb.detail_img }
    },
    pictureTwo () {
      if (this.pictureUpdatedTwo) { return this.pictureUpdatedTwo } else { return this.eventdb.cover_img }
    }
  },
  methods: {
    preview () {
      this.showPreview = false
      this.editedEvent = {
        name: this.eventdb.name,
        place: this.eventdb.place,
        price: this.eventdb.price,
        date_start: this.dates[0],
        date_end: this.dates[1],
        detail_img: this.picture,
        cover_img: this.pictureTwo,
        small_description: this.eventdb.small_description,
        large_description: this.eventdb.large_description,
        event_type: this.eventTypes.filter(e => e.name === this.select)[0]._id
      }
    },
    async editEvent () {
      await API.updateEvent(this.$route.params.eventId, this.editedEvent)
    },
    onFileSelected (event) {
      this.selectedFile = event.target.files[0]
    },
    twoFileSelected (event) {
      this.selectedFileTwo = event.target.files[0]
    },
    uploadImg () {
      this.progressbar = true
      if (this.selectedFile) {
        this.onUpload()
      }
      if (this.selectedFileTwo) {
        this.coverUpload()
      }
    },
    clearDate () {
      this.dates = []
    },
    onUpload () {
      const storageRef = firebase.storage().ref(`imagenes/${this.selectedFile.name}`)
      const task = storageRef.put(this.selectedFile)
      task.on('state_changed', snapshot => {
        const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        this.UploadValue = percentage
      }, error => { console.log(error.messsage) },
      () => {
        this.UploadValue = 100
        task.snapshot.ref.getDownloadURL().then((url) => {
          this.pictureUpdated = url
          console.log(this.pictureUpdated)
        })
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
          this.pictureUpdatedTwo = []
          this.pictureUpdatedTwo.push(url, this.picture)
          console.log(this.pictureUpdatedTwo)
        })
      })
    }

  },
  mounted () {
    API.getTypes().then(types => {
      this.eventTypes = types
    })
    API.getInfo(this.$route.params.eventId).then(info => {
      this.eventdb = info
      this.select = info.event_type.name
      this.dates.push(info.date_start, info.date_end)
    })
  }
}
</script>

<style lang="scss" scoped>
*{
  font-size: 25px;
}
.image {
  width: 170px;
}
.menu {
  width: 220px;
}
</style>
