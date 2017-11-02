<template>
  <v-app id="inspire" dark>


    <v-navigation-drawer temporary v-model="sidebar">
      <v-list>
        <v-list-tile v-for="item in menuItems" :key="item.title" :to="item.path">
          <v-list-tile-action>
            <v-icon>
              {{item.icon}}
            </v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            {{item.title}}
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-if="isAuthenticated" @click="userSignOut">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
        <v-list-tile-content>Sign Out</v-list-tile-content>
      </v-list-tile>
      </v-list>
    </v-navigation-drawer>


    <v-toolbar fixed dense dark class="grey darken-4">
      <span class="hidden-sm-and-up">
        <v-toolbar-side-icon @click.stop="sidebar = !sidebar">
        </v-toolbar-side-icon>
      </span>
      <v-toolbar-title>
        <router-link to="/" v-if="!(isAuthenticated) || (getUser.uid==='ORx5UfD5RVNaUXW46QHrc40Puks2')" tag="span" style="cursor: pointer">
          {{appTitle}}
        </router-link>
        <router-link to="/home" v-if="isAuthenticated && !(getUser.uid==='ORx5UfD5RVNaUXW46QHrc40Puks2')" tag="span" style="cursor: pointer">
          {{appTitle}}
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in MenuItems" :key="item.title" :to="item.path">
          <v-icon left dark>
            {{item.icon}}
          </v-icon>
          {{item.title}}
        </v-btn>
        <v-btn to="/signin" @click="guestSignOutSignInPage" flat v-if="!(isAuthenticated && !(getUser.uid==='ORx5UfD5RVNaUXW46QHrc40Puks2'))">Sign in</v-btn>
        <v-btn to="/signup" @click="guestSignOutSignUpPage" flat v-if="!(isAuthenticated) || (getUser.uid==='ORx5UfD5RVNaUXW46QHrc40Puks2')">Register</v-btn>
        <v-btn to="/userProfile" flat v-if="isAuthenticated && !(getUser.uid==='ORx5UfD5RVNaUXW46QHrc40Puks2')">My Profile</v-btn>
        <v-btn to="/postad" class="green accent-4" flat v-if="isAuthenticated && !(getUser.uid==='ORx5UfD5RVNaUXW46QHrc40Puks2')">Post ad</v-btn>
        <v-btn flat v-if="isAuthenticated && !(getUser.uid==='ORx5UfD5RVNaUXW46QHrc40Puks2')" @click="userSignOut">
          <v-icon left>exit_to_app</v-icon>
            Sign Out
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <main>
      <v-container fluid>
        <router-view>
        </router-view>
      </v-container>
    </main>

    <v-footer fixed prominent class="grey darken-4">
      <v-spacer></v-spacer>
      <div>CrashCode © {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<script>
  import VListTile from 'vuetify/src/components/VList/VListTile'
  import VListTileAction from 'vuetify/src/components/VList/VListTileAction'
  import VIcon from '../node_modules/vuetify/src/components/VIcon/VIcon.vue'
  import VToolbar from '../node_modules/vuetify/src/components/VToolbar/VToolbar.vue'
  import VBtn from '../node_modules/vuetify/src/components/VBtn/VBtn.vue'
  import Searchbar from './components/Searchbar.vue'

  export default {
    components: {
      VBtn,
      VToolbar,
      VIcon,
      VListTileAction,
      VListTile,
      Searchbar
    },
    data () {
      return {
        // appTitle: 'Classified Exchange App',
        sidebar: false,
        menuItems () {
          if (this.isAuthenticated) {
            return [
             { title: 'Home', path: '/home', icon: 'home' }
            ]
          } else {
            return [
             { title: 'Sign Up', path: '/signup', icon: 'face' },
             { title: 'Sign In', path: '/signin', icon: 'lock_open' }
            ]
          }
        },
        adminItems: [
          { title: 'Categories', path: '/categories' }
        ]
      }
    },
    computed: {
      appTitle () {
        return this.$store.getters.appTitle
      },
      isAuthenticated () {
        return this.$store.getters.getUser !== null && this.$store.getters.getUser !== undefined
      },
      getUser () {
        return this.$store.getters.getUser
      }
    },
    methods: {
      userSignOut () {
        this.$store.dispatch('userSignOut')
      },
      guestSignOutSignInPage () {
        this.$store.dispatch('guestSignOutSignInPage')
      },
      guestSignOutSignUpPage () {
        this.$store.dispatch('guestSignOutSignUpPage')
      }
    }
  }

</script>

<style lang="stylus">
  @import './stylus/main'
</style>
