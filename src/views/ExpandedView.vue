<template>
  <v-row class="justify-center">
    <v-col cols="8">
      <v-col v-for="(event, i) in events" :key="i" cols="12">
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
          <v-card-actions class="my-n2">
            <v-icon color="cyan darken-3" x-large>mdi-cart</v-icon>
            <v-btn text>Buy now</v-btn>
            <v-spacer></v-spacer>
            <v-btn @click="addWish()" color="purple" text>Add to wish</v-btn>
            <v-icon color="cyan darken-3" x-large>mdi-star-outline</v-icon>
          </v-card-actions>
          <v-divider></v-divider>
        </v-card>
      </v-col>
    </v-col>
  </v-row>
</template>

<script>
import API from "../services/App";

export default {
  data: () => ({
    events: []
  }),
  methods: {
    addWish() {
      if (!localStorage.token) {
        this.$router.push("/?auth=login");
      }
    }
  },
  created() {
    API.getAllEvents().then(response => {
      return (this.events = response);
    });
  }
};
</script>

<style lang="scss" scoped>
* {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.textstyles {
  text-overflow: ellipsis;
  height: 139px;
}
span {
  font-size: 16px;
}
ul {
  width: 100vw;
  margin-left: 2%;
}
.head {
  opacity: 0.95;
  border-radius: 20px 20px 0 0;
  padding: 30px 20px 20px 20px;
  background: rgb(21, 91, 100);
  color: white;
  font-weight: 500 !important;
}
li {
  margin-bottom: 10px;
}
</style>