<template>
  <v-layout row>
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
      <ownerAds></ownerAds>
    </v-flex>
  </v-layout>
</template>
<script>
import OwnerAds from './OwnerAds.vue'
export default {
  computed: {
    getUser() {
      return this.$store.getters.getUser
    }
  },
  components: {
    ownerAds: OwnerAds
  }
}
</script>
