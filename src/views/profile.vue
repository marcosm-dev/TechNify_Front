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

        <v-btn text color="blue" @click ='editProfile'>Edit your information</v-btn>
        <v-btn text color="primary" @click='deleteProfile(users[idx]._id, users[idx])'>Delete your account</v-btn>

      </v-form>
    </v-col>
  </v-row>
</template>

<script>
import API from '../services/App'

export default {
  data: () => ({
    first_name: '',
    last_name: '',
    email: '',
    mobile: null,
    social_fb: '',
    social_it: '',
    social_lk: ''
  }),
  methods: {
    editProfile () {
      const updateProfile = {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        mobile: this.mobile,
        social_fb: this.social_fb,
        social_it: this.social_it,
        social_lk: this.social_lk
      }
      API.editProfile(updateProfile)
    },
    deleteProfile (user, idx) {
      API.deleteProfile(user)
      const userIdx = this.users.findIndex(i => i._id === idx._id)
      if (userIdx !== -1) {
        this.users.splice(userIdx, 1)
      }
    }

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
