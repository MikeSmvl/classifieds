<template>
  <v-app>
    
    <navbar></navbar>

    <main>
      <v-container fluid>
        <router-view>

        </router-view>
      </v-container>
    </main>

  </v-app>
</template>
<script>
  import Navbar from './components/Navbar.vue'
  export default {
    components: {
      'Navbar': Navbar
    }
  }
</script>
<style>
</style>
