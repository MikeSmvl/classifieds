<template>

  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
      
      	<v-toolbar class="cyan" dark>
          <v-toolbar-side-icon></v-toolbar-side-icon>
          <v-toolbar-title>Categories</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon to="/addCategory">
            <v-icon>add</v-icon>
          </v-btn>
        </v-toolbar>
        <v-list two-line>
          <template v-for="category in categoryList">
            <v-divider v-bind:inset="true"></v-divider>
            <v-list-tile avatar v-bind:key="category.name" @click="">
              <v-list-tile-action @click="deleteCategory(category.key)">
                <v-icon color="pink">delete</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title v-html="category.name"></v-list-tile-title>                    
                <v-list-tile-sub-title v-html="category.description"></v-list-tile-sub-title>                
              </v-list-tile-content>
              <v-list-tile-action @click="editCategory(category.key)">
                <v-icon color="pink">edit</v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
  
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
    deleteCategory (key) {
      this.$store.dispatch('deleteCategory', {key: key})
    },
    editCategory (key) {
      this.$store.dispatch('editCategory', {key: key})
    }
  },
  computed: {
    categoryList () {
      this.$store.dispatch('getCategories')
      return this.$store.getters.getCategoryList
    }
  }
}
</script>
