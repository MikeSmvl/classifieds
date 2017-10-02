<template>
  <v-layout column>
    <searchbar></searchbar>
    <v-layout row justify-center mt-3>
      <v-flex xs12 sm2 mr-2>
        <v-card>
          <v-layout column pa-5>
            <v-flex>
              <h6>Filters</h6>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 ml-2>
        <v-card class="pa-5">
          <h6>Search Results</h6>
          <template v-for="ad in adList">
            <v-divider v-bind:inset="true"></v-divider>
            <v-list-tile avatar v-bind:key="ad.location" @click="">
              <v-list-tile-avatar>
                <img v-bind:src="ad.imageUrl">
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-html="ad.title"></v-list-tile-title>
                <v-list-tile-sub-title v-html="ad.description"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-card>
      </v-flex>
    </v-layout>
  </v-layout>
</template>

<script>
  import Searchbar from '../components/Searchbar.vue'
  export default
  {
    components: {
      Searchbar
    },
    data () {
      return {}
    },
    computed: {
      adList () {
        return this.$store.getters.getAdList
      }
    }
  }
</script>