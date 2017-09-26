<template>
  <v-container fluid grid-list-xl>
    <v-layout row justify-center>
      <v-flex xs6 class="text-xs-center">
        <h3>Sign Up</h3>
      </v-flex>
    </v-layout>
    <v-layout row justify-center>
      <v-flex xs12 sm12 md8 lg6>
        <form @submit.prevent="userSignUp">
          <v-flex>
            <v-alert error dismissible v-model="alert">
              {{ error }}
            </v-alert>
          </v-flex>
            <v-flex>
              <v-text-field
                name="email"
                label="Email"
                id="email"
                type="email"
				v-model="email"
                required></v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field
                name="password"
                label="Password"
                id="password"
                type="password"
				v-model="password"
                required></v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field
                name="confirmPassword"
                label="Confirm Password"
                id="confirmPassword"
                type="password"
				v-model="passwordConfirm"
				:rules="[comparePasswords]"
              ></v-text-field>
            </v-flex>
            <v-flex class="text-xs-center" mt-5>
              <v-btn primary type="submit" :disabled="loading">Sign Up</v-btn>
            </v-flex>
        </form>
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
      passwordConfirm: '',
      alert: false
    }
  },
  computed: {
    comparePasswords () {
      return this.password === this.passwordConfirm ? true : 'Passwords don\'t match'
    },
    error () {
      return this.$store.getters.getError
    },
    loading () {
      return this.$store.getters.getLoading
    }
  },
  methods: {
    userSignUp () {
      if (this.comparePasswords !== true) {
        return
      }
      this.$store.dispatch('userSignUp', { email: this.email, password: this.password })
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
        this.$store.dispatch('setError', null)
      }
    }
  }
}
</script>
