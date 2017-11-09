<template>
  <v-layout row wrap>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-media src="https://i.imgur.com/tdi3NGa.png" height="300px">
          <v-layout column class="media">
            <v-card-title>
              <v-spacer></v-spacer>
              <v-btn dark icon class="mr-3">
                <v-icon>edit</v-icon>
              </v-btn>
            </v-card-title>
            <v-spacer></v-spacer>
          </v-layout>
        </v-card-media>
        <v-list two-line>
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon>perm_identity</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{getUser.uid}}</v-list-tile-title>
              <v-list-tile-sub-title>UID</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider inset></v-divider>
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon>mail</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{getUser.email}}</v-list-tile-title>
              <v-list-tile-sub-title>Personal</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon dark>chat</v-icon>
            </v-list-tile-action>
          </v-list-tile>
          <v-divider inset></v-divider>
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon>location_on</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>451 Avenue de Capri</v-list-tile-title>
              <v-list-tile-sub-title>Montreal, QC</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
    <v-flex xs12 sm6 offset-sm3 mt-5>
      <v-toolbar color="indigo" dark>
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title>My Ads</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>search</v-icon>
        </v-btn>
      </v-toolbar>
      <v-container fluid grid-list-md class="grey lighten-4">
        <v-layout row wrap>
          <v-flex
            v-bind="{ ['xs12']: true }"
            v-for="ad in adList"
            :key="ad.title"
          >
            <v-card>
              <v-card-media
                :src="ad.imageUrl"
                height="200px"
              >
                <v-container fill-height fluid>
                  <v-layout fill-height>
                  </v-layout>
                </v-container>
              </v-card-media>
              <v-card-actions class="grey darken-4">
                <span class="headline white--text" v-text="ad.title"></span>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>favorite</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>bookmark</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>share</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {}
    },
    computed: {
      getUser () {
        return this.$store.getters.getUser
      },
      adList () {
        return this.$store.getters.getAdList.filter(item => item.creatorId === this.$store.getters.getUser.uid)
      }
    }
  }
</script>
