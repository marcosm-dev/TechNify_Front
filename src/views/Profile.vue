<template>
<v-container>
  <v-row class="d-flex justify-center mx-auto">
    <v-col cols="8" sm="6" md="6" lg="4" class="mx-auto text-end">
      <v-col align="start">
      <h2 class="display-1 mb-10 font-weight-medium">EDIT YOUR INFORMATION</h2>
      </v-col>
      <v-btn text @click="activeEdit">Edit</v-btn>
      <v-form ref="form">
        <v-text-field :disabled="edit" v-model="userdb.first_name" label="Name"></v-text-field>
        <v-text-field :disabled="edit" v-model="userdb.last_name" label="Last Name"></v-text-field>
        <v-text-field :disabled="edit" v-model="userdb.email" label="Email"></v-text-field>
        <v-text-field :disabled="edit" v-model="userdb.mobile" label="Mobile"></v-text-field>
        <v-text-field :disabled="edit" v-model="userdb.social_fb" label="Facebook"></v-text-field>
        <v-text-field :disabled="edit" v-model="userdb.social_it" label="Instagram"></v-text-field>
        <v-text-field :disabled="edit" v-model="userdb.social_lk" label="Linkedin"></v-text-field>
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
        <v-btn :disabled="edit" text color="blue" outlined class="mx-5" @click ='editProfile'>Edit your information</v-btn>
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
    show1: false,
    password: '',
    newPassword: '',
    confirmPassword: '',
    edit: true,
    rules: {
      required: value => !!value || 'Required.',
      min: v => v.length >= 8 || 'Min 8 characters'
    }
  }),
  created () {
    API.getUserInfo().then(response => {
      return (this.userdb = response)
    })
  },
  methods: {
    async editProfile () {
      this.edit = true
      const userUpdate = {
        first_name: this.userdb.first_name,
        last_name: this.userdb.last_name,
        email: this.userdb.email,
        mobile: this.userdb.mobile,
        social_fb: this.userdb.social_fb,
        social_it: this.userdb.social_it,
        social_lk: this.userdb.social_lk
      }
      await API.updateProfile(userUpdate)
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
    },
    activeEdit () {
      this.edit = false
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
*{
  font-size: 20px;
}
</style>
