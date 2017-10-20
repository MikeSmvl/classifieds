<template>
  <v-layout column>
    <v-flex xs12 class="text-xs-center" mt-5>
      <h6>Welcome to Classifieds, a free advertisement website.</h6>
    </v-flex>
    <searchbar></searchbar>
    <v-flex class="text-xs-center" mt-5>
    </v-flex>
    <adList></adList>
  </v-layout>
</template>
<script>
  import AdList from './AdList.vue'
  import Searchbar from '../components/Searchbar.vue'
  export default {
    components: {
      Searchbar,
      'adList': AdList
    }
  }
</script>
