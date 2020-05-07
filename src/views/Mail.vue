<template>
 <v-container fluid>
    <v-row>
      <v-col class="reboot-col" >
      <img src="@/assets/Publicity2.png" class="reboot"/>
      </v-col>
       <v-col cols="10">
    <v-container fluid>
   <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

      <v-textarea
      v-model="message"
      label="Text"
      value="This is clearable text."
    ></v-textarea>

    <v-btn
      :disabled="!valid"
      color="blue"
      class="mr-4 text-white"
      @click="validate"
    >
      Send
    </v-btn>
  </v-form>
      </v-container>
  </v-col>
<v-col class="reboot-col">
  <img src="@/assets/Publicity3.png" class="reboot" style="right: 0px"/>
</v-col>
</v-row>
</v-container>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ],
    message: ''
  }),

  methods: {
    validate () {
      this.$refs.form.validate()
    }
  }
}
</script>

<style lang="scss" scoped>
.reboot-col {
  padding: 0px;
  margin-top: -20px;
}
.reboot {
  top: 0px;
  position: fixed;
  height: 100vh;
  width: 8vw;
}
</style>
