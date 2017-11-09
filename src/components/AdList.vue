<template>
  <v-layout column>
    <v-flex xs12 sm12>
      <v-container fluid grid-list-md>
        <v-layout row wrap>
          <v-flex
            xs12 sm4
            v-for="ad in adList"
          >
            <v-card>
              <v-card-media v-bind:src="ad.imageUrl" height="200px">
              </v-card-media>
              <v-card-title primary-title>
                  <h3 class="headline mb-0"><v-list-tile-title v-html="ad.title"></v-list-tile-title></h3>
                  <v-list-tile-sub-title v-html="ad.description"></v-list-tile-sub-title>
              </v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn flat color="orange">Share</v-btn>
                <v-btn flat color="orange" v-bind:key="ad.location" @click="displayAdInfo(ad.key)">Explore</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {}
    },
    computed: {
      adList () {
        return this.$store.getters.getAdList
      }
    },
    methods: {
      displayAdInfo (key) {
        this.$router.push({path: `/home/${key}`})
      }
    }
  }
</script>
