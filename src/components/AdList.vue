<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-list two-line>
          <template v-for="ad in adList">
            <v-subheader v-if="ad.title" v-text="ad.title"></v-subheader>
            <v-divider v-else-if="ad.divider" v-bind:inset="ad.inset"></v-divider>
            <v-list-tile avatar v-else v-bind:key="ad.location" @click="" download>
              <v-list-tile-avatar>
                <img v-bind:src="ad.imageUrl">
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-html="ad.title"></v-list-tile-title>
                <v-list-tile-sub-title v-html="ad.description"></v-list-tile-sub-title>
              </v-list-tile-content>
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
  computed: {
    adList () {
      return this.$store.getters.getAdList
    }
  }
}
</script>
