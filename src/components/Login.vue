<template>
    <div>
      <h4 class="ml-8 pt-5">Escribe tu correo</h4>
      <v-text-field
        class="mt-2 mr-6 ml-6"
        clearable
        :label="errormsg"
        color="cyan darken-4"
        v-model="email"
        prepend-icon="mdi-account-circle"
      ></v-text-field>
      <h4 class="ml-8">Escribe tu contraseña</h4>
      <v-text-field
        class="mt-2 mr-6 ml-6"
        label="Password"
        color="cyan darken-4"
        v-model="userPassword"
        :type="showPassword ? 'text' : 'password'"
        prepend-icon="mdi-lock"
        :rules="passwordRule"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="showPassword = !showPassword"
      ></v-text-field>
      <v-btn max-height="40px" class="ml-5 mb-5 cyan darken-4" rounded dark x-large @click="loginMethod">Login</v-btn>
   </div>
</template>

<script>
import API from '../services/App'

export default {
  data () {
    return {
      errormsg: 'Email',
      isActive: true,
      hasError: false,
      email: '',
      showPassword: false,
      userPassword: '',
      passwordRule: [
        v => !!v || 'Password is required',
        v => v.length >= 8 || 'Password must be more than 8 characters'
      ]
    }
  },
  methods: {
    loginMethod () {
      const user = {
        email: this.email,
        password: this.userPassword
      }
      API.login(user)
        .then(user => {
          if (!user.token) {
            this.errormsg = 'Email Incorrecto'
          } else {
            localStorage.setItem('token', user.token)
            localStorage.setItem('email', user.email)
            localStorage.setItem('first_name', user.first_name)
            localStorage.setItem('role', user.role)
            this.$router.push('/events')
          }
        })
        .catch(err => console.error(err))
    }
  }
}
</script>
