<template>
  <v-layout column>
    <searchbar></searchbar>
    <v-layout row justify-center mt-3>
      <v-flex xs12 sm8>
        <v-card class="pa-5">
          <h6>Search Results</h6>
          <v-list>
          <template v-for="ad in searchList">
            <v-divider></v-divider>
            <v-list-tile avatar v-bind:key="ad.location" @click="displayAdInfo(ad.key)">
              <v-list-tile-avatar>
                <img v-bind:src="ad.imageUrl">
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-html="ad.title"></v-list-tile-title>
                <v-list-tile-sub-title v-html="ad.description"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
          </v-list>
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
    searchList () {
      return this.$store.getters.getSearchList
    }
  },
  methods: {
    displayAdInfo (key) {
      this.$router.push({path: `/searchresults/${key}`})
    }
  }
}
</script>
