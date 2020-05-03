<template>
      <v-row>
       <v-col>
        <v-card cols="12">
          <v-card-title v-if="event.name" class="head display-3 my-n2" dark>{{event.name}}</v-card-title>
            <v-img v-if="event.cover_img[0]" height="326px" width="800px" :src="event.cover_img[0]"></v-img>
            <v-img v-if="detailImg" height="326px" width="800px" :src="detailImg[1]"></v-img>
            <v-card-text>{{event.large_description}}</v-card-text>
            <ul>
              <li>
                Type:
                <br />
                <span>{{typeEvent}}</span>
              </li>
              <li>
                Date:
                <br />
                <span>{{event.date_start}} // {{event.date_end}}</span>
              </li>
              <li>
                Place:
                <br />
                <span>{{event.place}}</span>
              </li>
              <li>
                Price:
                <br />
                <span>{{event.price}} €</span>
              </li>
            </ul>
            <div class="justify-end mx-auto">
              <v-img
                height="327px"
                width="900px"
                :src="detailImg[0]"
              ></v-img>
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
