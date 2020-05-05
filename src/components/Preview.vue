<template>
<v-container>
    <v-row>
       <v-col cols="12">
        <v-card>
          <v-card-title class="justify-center font-weight-medium head display-3" dark>{{event.name}}</v-card-title>
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
            <ul class="display-1 ma-8">
              <li class="my-2">Type:<br /><span>{{typeEvent}}</span></li>
              <li class="my-2">Date:<br /><span>{{event.date_start}} / {{event.date_end}}</span></li>
              <li class="my-2">Place:<br /><span>{{event.place}}</span></li>
              <li class="my-2">Price: <br /><span>{{event.price}} €</span></li>
            </ul>
            <div class="justify-end mx-auto">
              <v-img
                v-if="detailImg"
                height="327px"
                width="900px"
                :src="detailImg[0]"
              ></v-img>
              <v-img v-else height="326px" width="800px" :src="event.cover_img[1]"></v-img>
            </div>
        </v-card>
       </v-col>
      </v-row>
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
.head {
  opacity: 0.95;
  border-radius: 20px 20px 0 0 !important;
  padding: 30px 20px 20px 20px;
  background: rgb(21, 91, 100);
  color: white;
  font-weight: 500 !important;
}
</style>
