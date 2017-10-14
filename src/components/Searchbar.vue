<template>
    <v-layout row justify-center mb-0>
        <v-flex sm6 mt-5>
            <v-card class="pl-5 pr-5 pt-1 pb-4">
                <v-text-field label="Search..." single-line append-icon="search" light hide-details></v-text-field>
                <v-select
			              v-bind:items="items"
			              v-model="keyCategory"
			              label="Select a category"
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
  data () {
    return {
      items: this.$store.getters.getCategoryList
    }
  }
}
</script>
