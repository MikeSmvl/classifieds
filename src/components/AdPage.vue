<template>
  <v-container>
    <v-flex xs10 offset-xs1>
      <v-card>
        <v-card-media v-bind:src="ad.imageUrl" height="400px">
        </v-card-media>
      </v-card>
    </v-flex>
    <v-flex xs10 offset-xs1>
      <v-card-title primary-title>
        <div>
          <h3 class="headline">{{ad.title}}</h3>
          <div>Location: {{ad.location}}</div>
          <div>Description: {{ad.description}}</div>
        </div>
      </v-card-title>
      <v-layout row justify-center>
        <v-flex xs6>
          <v-card>
            <v-card-actions>
              <v-btn flat block color="orange" @click="">Chat with seller</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs6>
          <v-card>
            <v-card-actions>
              <v-btn flat block color="orange" @click="returnToHome()">Return</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-container>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {
    ad () {
      const adList = this.$store.getters.getAdList
      const key = this.$route.params.id
      const findAd = (adItem) => adItem.key === key
      const ad = adList.find(findAd)
      return ad
    }
  },
  methods: {
    returnToHome () {
      this.$router.go(-1)
    }
  }
}
</script>
