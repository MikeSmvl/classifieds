<template>
  <v-content>
    <section>
      <v-parallax height="600" src="https://raw.githubusercontent.com/vuetifyjs/parallax-starter/master/template/assets/hero.jpeg">
        <v-layout column align-center justify-center>
          <h1 class="black--text">Classifieds</h1>
          <h4 class="black--text">Post your ad today!</h4>
        </v-layout>
        <v-flex class="text-xs-center">
          <v-btn class="light-blue darken-1" to="/signup">Sign Up</v-btn>
          <v-btn to="/signin">Sign In</v-btn>
        </v-flex>
      </v-parallax>
    </section>

    <section>
      <v-layout
        column
        wrap
        class="my-5"
        align-center
      >
        <v-flex xs12 sm4 class="my-3">
          <div class="text-xs-center">
            <h2 class="headline">The best way to trade goods</h2>
            <span class="subheading">
                  Buy & Sell, Fast & Easy
                </span>
          </div>
        </v-flex>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="blue--text text--lighten-2">color_lens</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">User-Friendly Design</div>
                  </v-card-title>
                  <v-card-text>
                    Modern user experience is a black box that has made it easier and easier to consume things, and harder and harder to remake them. We should not give in. We should make better things. For years there was such a huge UX trend toward seamlessness and concealing as much as possible in the interest of making things user-friendly.
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="blue--text text--lighten-2">flash_on</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">Fast Publish</div>
                  </v-card-title>
                  <v-card-text>
                    The methods we use makes our website the fastest in the world at posting ads. Revolutionary
                    is to say the least. Our closest competitor "Team A" takes 97% more time to do the same work.
                    Some terms and conditions may apply and depends on each individual circumstances.
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="blue--text text--lighten-2">build</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">Completely Open Sourced</div>
                  </v-card-title>
                  <v-card-text>
                    The fact that we made our software open source and freely available demonstrates our commitment to taking the advances in using big data sets and data-sharing that we make here and helping other institutions make their own advances.
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>

    <section>
      <v-parallax height="380" src="https://raw.githubusercontent.com/vuetifyjs/parallax-starter/master/template/assets/section.jpeg">
        <v-layout column align-center justify-center>
          <div class="headline white--text mb-3 text-xs-center">Trading has never been easier</div>
          <em>Kick-start your ads today!</em>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-container grid-list-xl>
        <v-layout row wrap justify-center class="my-5">
          <v-flex xs12 sm4>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">Company info</div>
              </v-card-title>
              <v-card-text>
                Our company is working hard and is held to the best industry standards to make sure you can
                buy and sell your goods without hassle. Our headquarters are based in Montreal, and we are currently accepting applications for an internship towards school credits.
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 sm4 offset-sm1>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">Contact us</div>
              </v-card-title>
              <v-card-text>
                Any and all inquiries can be answered by contacting us through:
              </v-card-text>
              <v-list class="transparent">
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">phone</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>514-514-5145</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">place</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>Montréal, QC</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">email</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>group-b@soen341.com</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>

  </v-content>
</template>
<script>
  export default {
  }
</script>
