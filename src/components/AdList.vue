<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-list two-line>
          <template v-for="ad in adList">
            <v-divider v-bind:inset="true"></v-divider>
            <v-list-tile avatar v-bind:key="ad.location" @click="displayAdInfo(ad.key)">
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
  },
  methods: {
    displayAdInfo (key) {
      this.$router.push({path: `/home/${key}`})
    }
  }
}
</script>
