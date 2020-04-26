<template>
  <v-col class="login">
    <div class="texto mt-5">
      <h4 class="ml-8 mt-5">Escribe tu correo</h4>
      <v-text-field
        class="mt-2 mr-6"
        clearable
        :label="errormsg"
        v-model="email"
        prepend-icon="mdi-account-circle"
      ></v-text-field>
      <h4 class="ml-8">Escribe tu contraseña</h4>
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
    </div>
    <v-card-actions>
      <v-btn class="button" rounded dark x-large @click="loginMethod">Login</v-btn>
    </v-card-actions>
  </v-col>
</template>

<script>
export default {
  data() {
    return {
      errormsg: "Email",
      isActive: true,
      hasError: false,
      email: "marcos@marcos.es",
      showPassword: false,
      userPassword: "1234567890",
      passwordRule: [
        v => !!v || "Password is required",
        v => v.length >= 10 || "Password must be more than 10 characters"
      ]
    };
  },
  methods: {
    loginMethod() {
      const user = {
        email: this.email,
        password: this.userPassword
      };
      APIServices.login(user)
        .then(response => {
          if (!response.token) {
            this.errormsg = "Usuario Incorrecto";
          } else {
            localStorage.setItem("token", response.token);
            localStorage.setItem("email", response.email);
            localStorage.setItem("name", response.name);
            this.$router.push("/home");
          }
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
.login {
  height: 300px;
}
.textstyle {
  color: white !important;
}
.button {
  background-color: #0f4243 !important;
  width: 107px;
  height: 40px;
  height: 40px !important;
}
</style>