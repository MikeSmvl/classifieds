<template>
  <v-container fluid grid-list-md>
  <v-layout row wrap justify-center>
    <v-flex xs12 sm6>
      <v-card class="text-xs-center pa-5">
        <h3>Sign In</h3>
        <form @submit.prevent="userSignIn">
          <v-layout column>
            <v-flex>
              <v-alert error dismissible v-model="alert">
                {{ error }}
              </v-alert>
            </v-flex>
            <v-flex>
              <v-text-field name="email" label="Email" id="email" type="email" v-model="email" required></v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field name="password" label="Password" id="password" type="password" v-model="password" required></v-text-field>
            </v-flex>
            <v-flex class="text-xs-center" mt-5>
              <v-btn primary type="submit" :disabled="loading">Sign In</v-btn>
            </v-flex>
          </v-layout>
        </form>
      </v-card>
    </v-flex>
    <v-flex xs12 sm3>
      <v-card>
          <v-flex class="text-xs-center" pa-4>
          <h6>Not registered yet?</h6>
        </v-flex>
          <v-flex class="text-xs-center" pa-4>
              <v-btn to="/signup" primary>Register now</v-btn>
          </v-flex>
      </v-card>
    </v-flex>
  </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        email: '',
        password: '',
        alert: false
      }
    },
    computed: {
      error () {
        return this.$store.getters.getError
      },
      loading () {
        return this.$store.getters.getLoading
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
    },
    methods: {
      userSignIn () {
        this.$store.dispatch('userSignIn', { email: this.email, password: this.password })
      }
    }
  }

</script>
