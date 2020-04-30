<template>
  <v-row class="d-flex justify-center mx-auto" cols="12">
    <v-col cols="4">
      <h2>EDIT YOUR INFORMATION</h2>
      <v-form ref="form" v-model="valid">
        <v-text-field v-model="first_name" label="Name"></v-text-field>
        <v-text-field v-model="last_name" label="Last Name"></v-text-field>
        <v-text-field v-model="email" label="Email"></v-text-field>
        <v-text-field v-model="mobile" label="Mobile"></v-text-field>
        <v-text-field v-model="social_fb" label="Facebook"></v-text-field>
        <v-text-field v-model="social_it" label="Instagram"></v-text-field>
        <v-text-field v-model="social_lk" label="Linkedin"></v-text-field>

              <v-spacer></v-spacer>
              <v-btn text color="primary">Edit your information</v-btn>
              <v-btn text color="primary">Edit your information</v-btn>
            </v-date-picker>
          </v-menu>
        </div>
      </v-form>
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