<template>
  <v-layout column>
    <v-flex xs12 class="text-xs-center" mt-5>
      <h3>Home</h3>
    </v-flex>
    <v-flex class="text-xs-center" mt-5>
      <p>This is a user's home page</p>
    </v-flex>
    <ad></ad>
  </v-layout>
</template>
<script>
  import Ad from './Ad.vue'
  export default {
    components: {
      'ad': Ad
    }
  }
</script>
