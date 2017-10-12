<template>

<v-layout column>
                <v-flex xs12 class="text-xs-center" mt-5>
                  <h3>Add a category</h3>
                </v-flex>
                <v-flex xs12 sm6 offset-sm3 mt-3>
                  <form @submit.prevent="createCategory">
                    <v-layout column>
                      <v-flex>
                        <v-alert error dismissible v-model="alert">
                          {{ error }}
                        </v-alert>
                      </v-flex>
                      <v-flex>
                        <v-text-field
                          name="name"
                          label="Name"
                          id="name"
                          type="name"
                          v-model="name"
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
                        <v-btn primary type="submit" :disabled="loading">Create</v-btn>
                        <v-btn primary to="/categories">Cancel</v-btn>
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
	      name: '',
	      description: '',
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
	    createCategory () {
	      this.date = new Date()
	      this.$store.dispatch('createCategory', {name: this.name, description: this.description})
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
