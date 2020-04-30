<template>
  <v-row class="d-flex justify-center mx-auto" cols="12">
    <v-col cols="4">
      <h2>CREATE YOUR EVENT</h2>
      <v-form ref="form" v-model="valid">
        <v-text-field v-model="name" label="Name"></v-text-field>
        <v-text-field v-model="place" label="Place"></v-text-field>
        <v-select
          v-model="select"
          :items="items"
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
      </v-form>
    </v-col>
    <v-col cols="4">
      <div class="ml-10 image justify-center">
        <h5>Cover Image</h5>
        <v-file-input multiple label="Cover Image"></v-file-input>
        <h5>Detail Image</h5>
        <v-file-input multiple label="Detail Image"></v-file-input>
      </div>
      <v-text-field v-model="price" label="Price"></v-text-field>
    </v-col>
    <v-col cols="4" class="justify-center d-flex"></v-col>
    <v-row cols="12">
      <v-col cols="8">
        <v-container fluid>
          <v-textarea
            clear-icon="cancel"
            label="Text"
            v-model="small"
            placeholder="Small Description: "
          ></v-textarea>
        </v-container>
        <v-container fluid>
          <v-textarea clear-icon="cancel" label="Text" placeholder="Large Description."></v-textarea>
        </v-container>
      </v-col>
      <v-col cols="4">
        <v-btn color="teal darken-4" dark class="ml-10 mr-10" depressed>Create</v-btn>
        <v-btn color="teal darken-4" dark depressed>Preview</v-btn>
      </v-col>
    </v-row>
  </v-row>
</template>

  <script>
export default {
  data: () => ({
    name: "",
    place: "",
    price: null,
    select: null,
    small: "",
    large: "",
    items: ["UX", "DEVELOPER", "HACKATON", "OTHERS"],
    dates: [],
    menu: false
  }),
  methods: {}
};
</script>
<style lang="scss" scoped>
.image {
  width: 170px;
}
.menu {
  width: 220px;
}
</style>