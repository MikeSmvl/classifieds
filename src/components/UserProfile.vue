<template>
  <v-layout column>
    <v-flex xs12 class="text-xs-center" mt-5>
      <h3>Home</h3>
    </v-flex>
    <v-flex class="text-xs-center" mt-5>
      <p>Connected user information</p>
      <p>Email: {{getUser.email}}</p>
      <p>Uid: {{getUser.uid}}</p>
    </v-flex>
  </v-layout>
</template>
<script>
  export default {
    computed: {
      getUser () {
        return this.$store.getters.getUser
      }
    }
  }
</script>
