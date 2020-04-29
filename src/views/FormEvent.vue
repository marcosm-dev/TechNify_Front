<template>
<<<<<<< HEAD
  <div></div>
  <!--   <ValidationObserver ref="observer" v-slot="{ validate, reset }">
    <form>
      <ValidationProvider v-slot="{ errors }" name="Name" rules="required|max:10">
        <v-text-field
          v-model="name"
          :counter="10"
          :error-messages="errors"
          label="Event's name"
          required
        ></v-text-field>
      </ValidationProvider>
      <ValidationProvider v-slot="{ errors }" name="Place" rules="required|max:10">
        <v-text-field v-model="place" :counter="10" :error-messages="errors" label="Place" required></v-text-field>
      </ValidationProvider>
      <ValidationProvider v-slot="{ errors }" name="Type" rules="required|max:10">
        <v-text-field
          v-model="type"
          :counter="10"
          :error-messages="errors"
          label="Event's type"
          required
        ></v-text-field>
      </ValidationProvider>

      <v-row justify="center">
        <v-date-picker v-model="picker"></v-date-picker>
      </v-row>
      <v-row justify="center">
        <v-date-picker v-model="picker"></v-date-picker>
      </v-row>

      <ValidationProvider v-slot="{ errors }" name="email" rules="required|email">
        <v-text-field v-model="email" :error-messages="errors" label="E-mail" required></v-text-field>
      </ValidationProvider>
      <ValidationProvider v-slot="{ errors }" name="select" rules="required">
=======
  <v-row class="d-flex justify-center" cols="12">
    <v-col cols="4">
      <h2>CREATE YOUR EVENT</h2>
      <v-form ref="form" v-model="valid">
        <v-text-field v-model="name" label="Name"></v-text-field>
        <v-text-field v-model="place" label="Place"></v-text-field>
>>>>>>> 8fb763db6d51c611fe08aa26d1dbb6f1ef672276
        <v-select
          v-model="select"
          :items="items"
          :rules="[v => !!v || 'Item is required']"
          label="Event's Type"
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
<<<<<<< HEAD
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: null,
    picker: new Date().toISOString().substr(0, 10)
  }),
  methods: {
    submit() {
      this.$refs.observer.validate();
    },
    clear() {
      this.name = "";
      this.email = "";
      this.select = null;
      this.checkbox = null;
      this.$refs.observer.reset();
    }
  }
=======
    small: "",
    large: "",
    items: ["UX", "DEVELOPER", "HACKATON", "OTHERS"],
    dates: [],
    menu: true,
    valid: true
  }),
  methods: {}
>>>>>>> 8fb763db6d51c611fe08aa26d1dbb6f1ef672276
};
</script>
<style lang="scss" scoped>
.image {
  width: 170px;
}
</style>