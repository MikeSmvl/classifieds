<template>
  <v-container fluid grid-list-xl>
    <v-layout row justify-center>
      <v-flex xs12 class="text-xs-center">
        <h3>Sign In</h3>
      </v-flex>
    </v-layout>
    <v-layout row justify-center>
      <v-flex xs12 sm12 md8 lg6>
        <form>
            <v-flex>
              <v-text-field
                name="email"
                label="Email"
                id="email"
                type="email"
                required></v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field
                name="password"
                label="Password"
                id="password"
                type="password"
                required></v-text-field>
            </v-flex>
            <v-flex class="text-xs-center" mt-5>
              <v-btn primary type="submit">Sign In</v-btn>
            </v-flex>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {}
</script>
