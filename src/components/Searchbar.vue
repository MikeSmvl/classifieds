<template>
    <v-layout row justify-center mb-0>
        <v-flex sm6 mt-5>
            <v-card class="pl-5 pr-5 pt-1 pb-4">
                <v-text-field label="Search..." single-line append-icon="search" light hide-details></v-text-field>
                <input type = "text" v-model="search"/>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<!--<script>
  import AdList from '../components/AdList.vue'
  export default {
    data () {
      return {
        adListFiltered: [],
        search: ''
      }
    },
    methods: {
    },
    created () {
      this.$http.get('http://crashcode.ca/home').then(function (data) {
        this.filtedAdList = data.body.slice(0, 10)
      })
    },
    computed: {
      theListfilteredAdlist: function () {
        return this.adListFiltered.filter((this.$store.getters.getAdList) => {
          return this.$store.getters.getAdList.title.match(this.search)
        })
      }
    }
  }
</script>-->
