<template>
      <v-col cols="12">
        <h1 class="head display-3 my-n2" dark>{{event.name}}</h1>
        <v-card class="mx-auto" max-height="718px" height="718px">
          <div class="d-flex mx-auto">
            <v-img v-if="event.cover_img[0]" height="326px" width="800px" :src="event.cover_img[0]"></v-img>
            <v-card-text class="textstyles headline">{{event.large_description}}</v-card-text>
          </div>
          <div class="d-flex mx-auto title my-3">
            <ul>
              <li v-if="event.event_type">
                Type:
                <br />
                <span>{{event.event_type.name}}</span>
              </li>
              <li>
                Date:
                <br />
                <span>{{event.date_start}} {{event.end}}</span>
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
                v-if="event.cover_img[1]"
                height="327px"
                width="900px"
                :src="event.cover_img[1]"
              ></v-img>
            </div>
          </div>
        </v-card>
      </v-col>
</template>

<script>
export default {
  name: 'Preview',
  props: {
    event: Object
  }
}
</script>
