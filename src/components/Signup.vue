<template>

    <v-layout row justify-center>
      <v-flex xs12 sm5 mr-2>
        <v-card class="pa-5">
          <h3>Register</h3>
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
                <v-btn primary type="submit" :disabled="loading">Register</v-btn>
              </v-flex>
          </form>
        </v-card>
      </v-flex>
      <v-flex xs12 sm3 ml-2>
          <v-card>
            <v-layout column pa-5>
              <v-flex>
              <h6 class="text-sm-center">Already registered?</h6>
            </v-flex>
              <v-flex class="text-xs-center" mt-5>
                  <v-btn to="/signin" primary>Sign in</v-btn>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      passwordConfirm: '',
      alert: false
    }
  },
  computed: {
    comparePasswords() {
      return this.password === this.passwordConfirm ? true : "Passwords don't match"
    },
    error() {
      return this.$store.getters.getError
    },
    loading() {
      return this.$store.getters.getLoading
    }
  },
  methods: {
    userSignUp() {
      if (this.comparePasswords !== true) {
        return
      }
      this.$store.dispatch('userSignUp', { email: this.email, password: this.password })
    }
  },
  watch: {
    error(value) {
      if (value) {
        this.alert = true
      }
    },
    alert(value) {
      if (!value) {
        this.$store.dispatch('setError', null)
      }
    }
  }
}
</script>
