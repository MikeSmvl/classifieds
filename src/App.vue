<template>
  <v-app>
    
    <navbar></navbar>
    <searchbar></searchbar>

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
  import SearchBar from './components/SearchBar.vue'
  export default {
    components: {
      'navbar': Navbar,
      'searchbar': SearchBar
    }
  }
</script>
<style>
</style>
