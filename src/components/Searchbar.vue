<template>
  <v-layout row>
    <v-flex xs12 sm8 offset-sm2>
      <v-card class="pl-5 pr-5 pt-1 pb-4">
        <v-text-field @keyup.enter.native="search" v-model="value" label="Search..." single-line append-icon="search" hide-details></v-text-field>
        <v-select @change="onCategoryChange"
                  v-bind:items="items"
                  v-model="keyCategory"
                  label=""
                  class="input-group--focused"
                  item-text="name"
                  item-value="key"
        ></v-select>
        <v-select v-if="subItems.length > 0"
                  v-bind:items="subItems"
                  v-model="keySubCategory"
                  label=""
                  class="input-group--focused"
                  item-text="name"
                  item-value="key"
        ></v-select>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  data() {
    return {
      items: this.$store.getters.getCategoryList,
      keyCategory: '',
      keySubCategory: '',
      subItems: '',
      searchInput: ''
    }
  },
  methods: {
    onCategoryChange(value) {
      this.$store.dispatch('filterSubCategory', { keyCategory: value })
      this.subItems = this.$store.getters.getSubCategoryList
      this.keySubCategory = ''
    },
    search() {
      this.$store.dispatch('search', { searchInput: this.value })
    }
  }
}
</script>
