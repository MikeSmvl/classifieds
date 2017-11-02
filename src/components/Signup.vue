<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap justify-center>
      <v-flex xs12 sm6>
        <v-card class="text-xs-center pa-5">
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
                :append-icon="e1 ? 'visibility' : 'visibility_off'"
                :append-icon-cb="() => (e1 = !e1)"
                :type="e1 ? 'password' : 'text'"
                v-on:input="emitValue($event.target.value)"
                v-model="password"
                class="class"
                v-bind:placeholder="placeholder"
                :rules="[rules.passwordLength, rules.passwordValidation]"></v-text-field>
            </v-flex>
            <v-flex class="Password__badge" v-bind:class="[isSecure ? successClass : '', !isSecure && isActive ? errorClass : '' ]"
                    v-cloak
                    v-if="badge">
              {{ passwordCount }}
            </v-flex>
            <div v-bind:class="[strengthMeterClass]">
              <div v-bind:class="[strengthMeterFillClass]" :data-score="passwordStrength"></div>
            </div>
            <v-flex>
              <v-text-field
                name="confirmPassword"
                label="Confirm Password"
                id="confirmPassword"
                :append-icon="e1 ? 'visibility' : 'visibility_off'"
                :append-icon-cb="() => (e1 = !e1)"
                :type="e1 ? 'password' : 'text'"
                v-model="passwordConfirm"
                :rules="[comparePasswords]"
              ></v-text-field>
            </v-flex>
            <v-flex class="text-xs-center" mt-5>
              <v-btn primary type="submit" :disabled="loading" >Register</v-btn>
            </v-flex>
          </form>
        </v-card>
      </v-flex>
      <v-flex xs12 sm3>
        <v-card>
            <v-flex class="text-xs-center pa-4">
              <h6>Already registered?</h6>
            </v-flex>
            <v-flex class="text-xs-center" pa-4>
              <v-btn to="/signin" primary>Sign in</v-btn>
            </v-flex>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    props: {
      placeholder: {
        type: String,
        default: 'Please enter your password'
      },
      value: {
        type: String
      },
      name: {
        type: String,
        default: 'password'
      },
      secureLength: {
        type: Number,
        default: 8
      },
      errorClass: {
        type: String,
        default: 'has-error'
      },
      successClass: {
        type: String,
        default: 'is-success'
      },
      strengthMeterClass: {
        type: String,
        default: 'Password__strength-meter'
      },
      strengthMeterFillClass: {
        type: String,
        default: 'Password__strength-meter--fill'
      }
    },
    data () {
      return {
        email: '',
        password: '',
        passwordConfirm: '',
        e1: true,
        alert: false,
        rules: {
          emailLength: (input) => (input.length > 5 && input.length <= 30) || 'Please use between 6 and 30 characters',
          passwordLength: (input) => input.length >= 8 || 'Minimum 8 characters',
          emailValidation: (input) => {
            const pattern = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
            return pattern.test(input) || 'Invalid email'
          },
          passwordValidation: (input) => {
            const pattern = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/
            return pattern.test(input) || 'Invalid password: minimum 8 characters with uppercase, lowercase, number, letter and special character'
          }
        }
      }
    },
    computed: {
      passwordStrength () {
        if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{10,}/.test(this.password)) {
          return '4'
        } if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/.test(this.password)) {
          return '3'
        } if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(this.password)) {
          return '2'
        } if (/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/.test(this.password)) {
          return '1'
        } if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(this.password)) {
          return '0'
        }
      },
      isSecure () {
        return this.password ? this.password.length >= this.secureLength : null
      },
      isActive () {
        return this.password && this.password.length > 0
      },
      passwordCount () {
        return this.password && (this.password.length > this.secureLength ? `${this.secureLength}+` : this.password.length)
      },
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
      emitValue (value) {
        this.password = value
        this.$emit('input', value)
      },
      userSignUp () {
        if (this.passwordStrength < 3) {
          return
        }
        if (this.comparePasswords !== true) {
          return
        }
        this.$store.dispatch('userSignUp', { email: this.email, password: this.password })
      }
    }
  }
</script>
<style>
  [v-cloak] {
    display: none;
  }
  .Password {
    max-width:  400px;
    margin:  0 auto;
  }
  .Password__group {
    position: relative;
  }
  .Password__strength-meter {
    position: relative;
    height: 3px;
    background: #DDD;
    margin: 10px auto 20px;
    border-radius: 3px;
  }
  .Password__strength-meter:before, .Password__strength-meter:after {
    content: '';
    height: inherit;
    background: transparent;
    display: block;
    border-color: #FFF;
    border-style: solid;
    border-width: 0 5px 0 5px;
    position: absolute;
    width: 80px;
    z-index: 10;
  }
  .Password__strength-meter:before {
    left: 70px;
  }
  .Password__strength-meter:after {
    right: 70px;
  }
  .Password__strength-meter--fill {
    background: transparent;
    height: inherit;
    position: absolute;
    width: 0;
    border-radius: inherit;
    transition: width 0.5s ease-in-out, background 0.25s;
  }
  .Password__strength-meter--fill[data-score='0'] {
    background: darkred;
    width: 20%;
  }
  .Password__strength-meter--fill[data-score='1'] {
    background: orangered;
    width: 40%;
  }
  .Password__strength-meter--fill[data-score='2'] {
    background: orange;
    width: 60%;
  }
  .Password__strength-meter--fill[data-score='3'] {
    background: yellowgreen;
    width: 80%;
  }
  .Password__strength-meter--fill[data-score='4'] {
    background: green;
    width: 100%;
  }
  .Password__field {
    background-color: #f1f1f1;
    border: 1px solid #f1f1f1;
    border-radius: 2px;
    box-sizing: border-box;
    font-size: 14px;
    padding: 13px;
    width: 100%;
  }
  .Password__badge {
    float: right;
    position: relative;
    bottom: 33px;
    right: 10px;
    color: white;
    border-radius: 6px;
    padding: 3px;
    width: 30px;
    height: 15px;
    font-size: 14px;
    line-height: 1.1;
  }
  .has-error {
    background: red;
  }
  .is-success {
    background: #1bbf1b;
  }

</style>
