<template>
<v-container>
    <v-row>
       <v-col cols="12">
        <v-card class="card">
          <v-card-title class="justify-center font-weight-medium title-head display-3">{{event.name}}</v-card-title>
          <v-row>
            <v-col cols="6" class="pt-0 pb-0">
            <v-img v-if="detailImg" height="400px" background="cover" :src="detailImg[1]"></v-img>
            </v-col>
            <v-col cols="6">
            <v-card-text class="texto headline">{{event.large_description}}</v-card-text>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
            <ul class="title ma-8 headline">
              <li class="my-2">Type:<br /><span>{{typeEvent}}</span></li>
              <li class="my-2">Date:<br /><span>{{event.date_start}} / {{event.date_end}}</span></li>
              <li class="my-2">Place:<br /><span>{{event.place}}</span></li>
              <li class="my-2">Price: <br /><span>{{event.price}} €</span></li>
            </ul>
            </v-col>
          <v-col cols="6">
              <v-img
                v-if="detailImg"
                height="400px"
                background="cover"
                :src="detailImg[0]"
              ></v-img>
              <v-img v-else height="400px" background="cover" :src="event.cover_img[1]"></v-img>
            </v-col>
          </v-row>
        </v-card>
       </v-col>
      </v-row>
</v-container>
</template>

<script>
export default {
  name: 'Preview',
  props: {
    event: Object,
    typeEvent: String,
    detailImg: Array
  }
}
</script>

<style lang="scss" scoped>
.title-head {
  color: rgb(20, 63, 68);
  background: rgba(255, 255, 255, 0.747);
  padding: 10px;
  justify-content: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
}

.headline {
  text-align: start;
  margin-top: 1vh;
}
.card {
  background: rgb(224, 236, 238) !important;
  text-align: center;
}
</style>
