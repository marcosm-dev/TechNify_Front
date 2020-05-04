<template>
<v-container :class="$vuetify.breakpoint.lgOnly ? 'container-lg fill-height pt-0' : 'fill-height pt-0'" fluid>
  <v-row class="d-flex justify-center mx-auto">
    <v-col cols="8" md="8" lg="4">
      <h2>ORGANIZER PROFILE</h2>
      <v-form ref="form">
        <v-text-field v-model="first_name" label="Name"></v-text-field>
        <v-text-field v-model="last_name" label="Last Name"></v-text-field>
        <v-text-field v-model="email" label="Email"></v-text-field>
        <v-text-field v-model="mobile" label="Mobile"></v-text-field>
        <v-text-field v-model="social_fb" label="Facebook"></v-text-field>
        <v-text-field v-model="social_it" label="Instagram"></v-text-field>
        <v-text-field v-model="social_lk" label="Linkedin"></v-text-field>
        <v-text-field v-model="vatin" label="VATIN"></v-text-field>
        <v-text-field v-model="business_name" label="business_name"></v-text-field>
        <v-text-field v-model="organizer_info" label="organizer_info"></v-text-field>
        <v-text-field v-model="address" label="address"></v-text-field>
        <v-text-field v-model="zip_code" label="zip_code"></v-text-field>
      </v-form>
      </v-col>
<v-col cols="4">
  <h2>Change Password</h2>
 <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            label="Actual password"
            hint="At least 8 characters"
            @click:append="show1 = !show1"
          ></v-text-field>
           <v-text-field
            v-model="newPassword"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            label="New password"
            hint="At least 8 characters"
            @click:append="show1 = !show1"
          ></v-text-field>
           <v-text-field
            v-model="confirmPassword"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            label="Repeat new password"
            hint="At least 8 characters"
            @click:append="show1 = !show1"
          ></v-text-field>
        <v-btn :class="$vuetify.breakpoint.smAndDown ? 'mt-10' : ''" text color="blue" outlined @click='updatePsw'>Update password</v-btn>
</v-col>
        </v-row>
 <v-row>
        <v-col class="text-center">
        <v-btn text color="blue" outlined class="mx-5" @click ='editProfile'>Edit your information</v-btn>
        <v-btn :class="$vuetify.breakpoint.xsOnly ? 'mt-10' : ''" text color="red" outlined @click='deleteProfile'>Delete your account</v-btn>
          </v-col>
  </v-row>
</v-container>
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
    social_lk: '',
    vatin: '',
    business_name: '',
    organizer_info: '',
    address: '',
    zip_code: '',
    show1: false,
    password: '',
    newPassword: '',
    confirmPassword: '',
    rules: {
      required: value => !!value || 'Required.',
      min: v => v.length >= 8 || 'Min 8 characters'
    }

  }),
  methods: {
    editProfile () {
      if (this.confirmPassOK) {
        this.updatePsw()
      }
      const organizerUpdate = {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        mobile: this.mobile,
        social_fb: this.social_fb,
        social_it: this.social_it,
        social_lk: this.social_lk,
        VATIN: this.vatin,
        business_name: this.business_name,
        organizer_info: this.organizer_info,
        address: this.address,
        zip_code: this.zip_code
      }
      API.editProfileOrganizer(organizerUpdate)
    },
    deleteProfile (user) {
      API.deleteProfile(user)
    },
    updatePsw () {
      const newPassword = {
        actualPassword: this.password,
        newPassword: this.confirmPassOK
      }
      API.changePassword(newPassword)
    },
    confirmPassOK () {
      if (this.newPassword === this.confirmPassword) { return this.confirmPassword }
    }
  }
}

</script>

<style lang="scss" scoped>
.container-lg {
   height: 100vh;
   margin-bottom: 5vh;
}
</style>
