<template>
  <div>
    <h4 class="  ml-8 pt-5">Name</h4>
    <v-text-field
      clearable
      class="mt-2 mr-6 ml-6"
      label="Name"
      v-model="first_name"
      color="cyan darken-4"
      prepend-icon="mdi-account-circle"
      :rules="userRules"
    ></v-text-field>
    <h4 class="ml-8 mt-3">Email</h4>
    <v-text-field
       class="mt-2 mr-6 ml-6"
      label="E-mail"
      v-model="email"
      color="cyan darken-4"
      clearable
      :rules="emailRules"
      prepend-icon="mdi-email"
    ></v-text-field>
    <h4 class="ml-8 mt-3">Contraseña</h4>
    <v-text-field
      class="mt-2 mr-6 ml-6"
      label="Password"
      v-model="userPassword"
      color="cyan darken-4"
      :type="showPassword ? 'text' : 'password'"
      prepend-icon="mdi-lock"
      :rules="passwordRule"
      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      @click:append="showPassword = !showPassword"
    ></v-text-field>´
      <div class="ml-6 mt-n2 d-flex">
      <v-btn max-height="40px" class="mb-4 cyan darken-4" dark rounded @click="signup" x-large>Sign Up</v-btn>
      <h5 class="ml-5 mt-1">Quiero organizar Eventos </h5>
       <v-checkbox class="ml-n5" color="cyan darken-4" v-model="check" input-value="true" value></v-checkbox>
    </div>
  </div>
</template>

<script>
import API from '../services/App'

export default {
  data () {
    return {
      check: false,
      showPassword: false,
      userPassword: '',
      passwordRule: [
        v => !!v || 'Password is required',
        v => v.length >= 8 || 'Password must be more than 8 characters'
      ],
      first_name: '',
      userRules: [v => !!v || 'Name is required'],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ]
    }
  },
  methods: {
    signup () {
      let newUser = {}
      if (this.check) {
        newUser = {
          first_name: this.first_name,
          email: this.email,
          password: this.userPassword,
          role: 'ORGANIZER'
        }
      } else {
        newUser = {
          first_name: this.first_name,
          email: this.email,
          password: this.userPassword
        }
      }
      API.signup(newUser).then(this.$emit('change'))
    }
  }
}
</script>

<style lang="scss" scoped>
.signup {
  height: 100vh !important;
}

</style>
