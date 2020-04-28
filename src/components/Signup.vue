<template>
  <v-col class="signup">
    <h4 class="ml-8 mt-5">Name:</h4>
    <v-text-field
      clearable
      class="mt-2 mr-6"
      label="Name"
      v-model="first_name"
      prepend-icon="mdi-account-circle"
      :rules="userRules"
    ></v-text-field>
    <h4 class="ml-8 mt-3">Email:</h4>
    <v-text-field
      class="mt-2 mr-6"
      label="E-mail"
      v-model="email"
      clearable
      :rules="emailRules"
      prepend-icon="mdi-email"
    ></v-text-field>
    <h4 class="ml-8 mt-3">Contraseña:</h4>
    <v-text-field
      class="mt-2 mr-6"
      label="Password"
      v-model="userPassword"
      :type="showPassword ? 'text' : 'password'"
      prepend-icon="mdi-lock"
      :rules="passwordRule"
      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      @click:append="showPassword = !showPassword"
    ></v-text-field>
    <v-card-actions>
      <v-btn class="button mt-2" dark rounded @click="signup" x-large>Sign Up</v-btn>
    </v-card-actions>
  </v-col>
</template>

<script>
import API from "../services/App";

export default {
  data() {
    return {
      showPassword: false,
      userPassword: "",
      passwordRule: [
        v => !!v || "Password is required",
        v => v.length >= 8 || "Password must be more than 8 characters"
      ],
      first_name: "",
      userRules: [v => !!v || "Name is required"],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ]
    };
  },
  methods: {
    signup() {
      const newUser = {
        first_name: this.first_name,
        email: this.email,
        password: this.userPassword
      };
      API.signup(newUser)
        .then(response => {
          localStorage.setItem("token", response.token);
          localStorage.setItem("email", response.email);
        })
        .catch(err => console.error(err));
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  font-size: 20px;
}
.signup {
  height: 440px !important;
}
.button {
  background-color: #0f4243 !important;
  width: 107px;
  height: 40px;
  height: 40px !important;
}
</style>