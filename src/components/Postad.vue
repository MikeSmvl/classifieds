<template>
        <v-layout column>
                <v-flex xs12 class="text-xs-center" mt-5>
                  <h3>Post an Ad</h3>
                </v-flex>
                <v-flex xs12 sm6 offset-sm3 mt-3>
                  <form @submit.prevent="createAd">
                    <v-layout column>
                      <v-flex>
                        <v-alert error dismissible v-model="alert">
                          {{ error }}
                        </v-alert>
                      </v-flex>
                      <v-flex>
                        <v-text-field
                          name="title"
                          label="Title"
                          id="title"
                          type="title"
                          v-model="title"
                          required></v-text-field>
                      </v-flex>
                      <v-flex>
                        <v-text-field
                          name="location"
                          label="Location"
                          id="location"
                          type="location"
                          v-model="location"
                          required></v-text-field>
                      </v-flex>
                      <v-flex>
                        <v-text-field
                          name="imageUrl"
                          label="Image URL"
                          id="imageUrl"
                          type="imageUrl"
                          v-model="imageUrl"
                          required></v-text-field>
                      </v-flex>
                      <v-flex>
                        <v-text-field
                          name="description"
                          label="Description"
                          id="description"
                          type="description"
                          v-model="description"
                          required></v-text-field>
                      </v-flex>
                      <v-flex class="text-xs-center" mt-5>
                        <v-btn primary type="submit" :disabled="loading">Post ad</v-btn>
                      </v-flex>
                    </v-layout>
                  </form>
                </v-flex>
              </v-layout>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      location: '',
      imageUrl: '',
      description: '',
      date: '',
      alert: false
    }
  },
  computed: {
    error () {
      return this.$store.getters.getError
    },
    loading () {
      return this.$store.getters.getLoading
    },
    createAd () {
      this.date = new Date()
      this.$store.dispatch('createAd', {title: this.title,
        location: this.location,
        imageUrl: this.imageUrl,
        description: this.description,
        date: this.date.getTime()})
    }
  },
  watch: {
    error (value) {
      if (value) {
        this.alert = true
      }
    },
    alert (value) {
      if (!value) {
        this.$store.dispatch('setError', false)
      }
    }
  }
}
</script>
