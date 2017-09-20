<template>
  <v-app>
    <v-navigation-drawer temporary v-model="sidebar">
    </v-navigation-drawer>
    <v-toolbar fixed>
      <span class="hidden-sm-and-up">
        <v-toolbar-side-icon @click.stop="sidebar = !sidebar">
        </v-toolbar-side-icon>
      </span>
      <v-toolbar-title>{{ appTitle }}</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <main>
      <v-container fluid>
        <router-view>

        </router-view>
      </v-container>
    </main>

  </v-app>
</template>
<script>
  export default {
    data () {
      return {
        sidebar: false,
        menuItems: [
          { title: 'Home', path: '/home', icon: 'home' },
          { title: 'Sign Up', path: '/signup', icon: 'face' },
          { title: 'Sign In', path: '/signin', icon: 'lock_open' }
        ]
      }
    },
    computed: {
      appTitle () {
        return this.$store.getters.appTitle
      }
    }
  }
</script>
<style lang="stylus">
  @import './stylus/main'
</style>
