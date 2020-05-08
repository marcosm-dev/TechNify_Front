<template>
 <v-container fluid>
    <v-row>
      <v-col class="reboot-col" >
      <img src="@/assets/Publicity2.png" class="reboot"/>
      </v-col>
       <v-col cols="10">
    <v-container fluid>
  <v-row justify="center">
    <v-col cols="6">
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
      color="cyan darken-4"
      class="mr-4 text-white"
      @click="validate"
      dark
    >
      Send
    </v-btn>
  </v-form>
    </v-col>
  </v-row>
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
    email: '',
    message: ''
  })
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
