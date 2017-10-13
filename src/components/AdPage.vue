<template>
  <v-container>
    <v-flex xs10 offset-xs1>
      <v-carousel>
        <v-carousel-item
          v-for="(item,i) in items"
          v-bind:src="item.src"
          v-bind:key="i"
          transition="fade"
          reverseTransition="fade"
        ></v-carousel-item>
      </v-carousel>
    </v-flex>
    <v-flex xs10 offset-xs1>
      <v-card-title primary-title>
        <div>
          <h3 class="headline">Kangaroo Valley Safari</h3>
          <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
        </div>
      </v-card-title>
    </v-flex>
    <v-flex xs6 offset-xs1>
        <v-btn flat color="orange">Return</v-btn>
    </v-flex>
    <v-flex xs6 offset-xs1>
        <v-btn flat color="orange">Chat with seller</v-btn>
    </v-flex>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          src: 'https://i.imgur.com/koCQSPC.jpg'
        },
        {
          src: 'https://i.imgur.com/oXc9Qx2.jpg'
        },
        {
          src: 'https://i.imgur.com/GiGTZJb.jpg'
        }
      ]
    }
  },
  methods: {
    displayAdInfo (key) {
      // this.$router.push({path: `/home/${key}`})
    }
  }
}
</script>
