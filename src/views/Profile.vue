<template>
<v-container>
  <v-row class="d-flex justify-center mx-auto">
    <v-col cols="8" sm="8" lg="4" class="mx-auto">
      <h2>EDIT YOUR INFORMATION</h2>
      <v-form ref="form">
        <v-text-field disabled v-model="userdb.first_name" label="Name"></v-text-field>
        <v-text-field disabled v-model="userdb.last_name" label="Last Name"></v-text-field>
        <v-text-field disabled v-model="userdb.email" label="Email"></v-text-field>
        <v-text-field disabled v-model="userdb.mobile" label="Mobile"></v-text-field>
        <v-text-field disabled v-model="userdb.social_fb" label="Facebook"></v-text-field>
        <v-text-field disabled v-model="userdb.social_it" label="Instagram"></v-text-field>
        <v-text-field disabled v-model="userdb.social_lk" label="Linkedin"></v-text-field>
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
        <v-btn :disabled="checkFormPsw" :class="$vuetify.breakpoint.smAndDown ? 'mt-10' : ''" text color="blue" outlined @click='updatePsw'>Update password</v-btn>
</v-col>
  </v-row>
         <v-row>
        <v-col class="text-center">
        <v-btn text color="blue" outlined class="mx-5" @click ='editProfile'>Edit your information</v-btn>
        <v-btn :class="$vuetify.breakpoint.smAndDown ? 'mt-10' : ''" text color="red" outlined @click='deleteProfile'>Delete your account</v-btn>
        </v-col>
        </v-row>
</v-container>
</template>

<script>
import API from '../services/App'

export default {
  data: () => ({
    userdb: {},
    first_name: '',
    last_name: '',
    email: '',
    mobile: null,
    social_fb: '',
    social_it: '',
    social_lk: '',
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
      const userUpdate = {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        mobile: this.mobile,
        social_fb: this.social_fb,
        social_it: this.social_it,
        social_lk: this.social_lk
      }
      API.updateProfile(userUpdate)
      if (this.newPassword) {
        this.updatePsw()
      }
    },
    deleteProfile () {
      API.deleteProfile()
    },
    updatePsw () {
      const newPassword = {
        actualPassword: this.password,
        newPassword: this.confirmPassword
      }
      API.changePassword(newPassword)
    }
  },
  computed: {
    checkFormPsw () {
      if (this.password.length === 0 ||
        this.newPassword.length === 0 ||
        this.confirmPassword.length === 0 ||
        this.newPassword !== this.confirmPassword) {
        return true
      }
      return false
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
