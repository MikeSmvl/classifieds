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
                  :rules="[rules.emailLength, rules.emailValidation]"></v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field
                  name="password"
                  label="Password"
                  id="password"
                  type="password"
          v-model="password"
                  :rules="[rules.passwordLength, rules.passwordValidation]"></v-text-field>
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
  data () {
    return {
      email: '',
      password: '',
      passwordConfirm: '',
      alert: false,
      rules: {
        emailLength: (input) => (input.length > 5 && input.length <= 30) || 'Please use between 6 and 30 characters',
        passwordLength: (input) => input.length >= 8 || 'minimum 8 characters',
        emailValidation: (input) => {
          const pattern = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
          return pattern.test(input) || 'Invalid email'
        },
        passwordValidation: (input) => {
          const pattern = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/
          return pattern.test(input) || 'invalid password, Minimum 8 characters, one uppercase, one lowercase, one number and one special character'
        }
      }
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
