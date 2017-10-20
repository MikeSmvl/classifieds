<template>
  <v-layout row justify-center mb-0>
    <v-flex sm8 mt-5>
      <v-card class="pl-5 pr-5 pt-1 pb-4">
          <v-text-field @keyup.enter.native="search" v-model="value" name="searchInput" id="searchInput" label="Search..." single-line append-icon="search" light hide-details></v-text-field>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      searchInput: ''
    }
  },
  methods: {
    search () {
      this.$store.dispatch('search', {searchInput: this.value})
    }
  }
}
</script>