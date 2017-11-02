<template>
  <v-layout column>
    <v-flex xs12 sm8 md6 offset-sm3>
      <v-card height="900px">
        <v-card-title class="blue white--text">
          <span class="headline">Post an Ad</span>
          <v-spacer></v-spacer>
          <v-menu bottom left>
            <v-btn icon slot="activator" dark>
              <v-icon>more_vert</v-icon>
            </v-btn>
          </v-menu>
        </v-card-title>
        <v-flex xs8 sm8 offset-xs2 offset-sm2 mt-3>
          <form @submit.prevent="createAd">
            <v-layout column>

              <v-flex>
                <v-alert error dismissible v-model="alert">
                  {{ error }}
                </v-alert>
              </v-flex>

              <v-flex>
                <v-text-field
                  box
                  name="title"
                  label="Title"
                  id="title"
                  type="title"
                  v-model="title"
                  :rules="[rules.required, rules.length, rules.pattern]"></v-text-field>
              </v-flex>

              <v-flex>
                <v-text-field
                  box
                  name="location"
                  label="Location"
                  id="location"
                  type="location"
                  v-model="location"
                  :rules="[rules.required, rules.length, rules.pattern]"></v-text-field>
              </v-flex>

              <v-flex>
                <v-btn raised class="primary" @click="onPickFile">Upload Image</v-btn>
                <input
                  type="file"
                  style="display:none"
                  ref="fileInput"
                  accept="image/*"
                  @change="onFilePicked">
              </v-flex>

              <v-flex>
                <img :src="imageUrl" height="150">
              </v-flex>

              <v-flex>
                <v-text-field
                  textarea
                  name="description"
                  label="Description"
                  id="description"
                  type="description"
                  :counter="250"
                  v-model="description"
                  multi-line
                  :rules="[rules.required, rules.length2, rules.pattern]"></v-text-field>
              </v-flex>

              <v-flex xs6>
                <v-select @change="onCategoryChange"
                          v-bind:items="items"
                          v-model="keyCategory"
                          label="Select a category"
                          class="input-group--focused"
                          item-text="name"
                          item-value="key"
                ></v-select>
              </v-flex>

              <v-flex xs6 v-if="subItems.length > 0">
                <v-select
                  v-bind:items="subItems"
                  v-model="keySubCategory"
                  label="Select a sub category"
                  class="input-group--focused"
                  item-text="name"
                  item-value="key"
                ></v-select>
              </v-flex>

              <v-flex class="text-xs-center" mt-5>
                <v-btn primary type="submit" :disabled="loading">Post ad</v-btn>
              </v-flex>
            </v-layout>
          </form>
        </v-flex>
      </v-card>
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
        date: new Date(),
        keyCategory: '',
        keySubCategory: '',
        alert: false,
        items: this.$store.getters.getCategoryList,
        subItems: '',
        image: null,
        rules: {
          required: (value) => value.length > 0 || 'Required field',
          length: (value) => value.length < 51 || 'Max 50 characters',
          length2: (value) => value.length < 251 || 'Max 250 characters',
          pattern: (value) => {
            const pattern = /^[a-zA-Z\u00C0-\u017F0-9\s:\-,.!@#$%^&*()]+$/
            return pattern.test(value) || 'Invalid special characters'
          },
          image: (value) => {
            const pattern = /^[^<>;]+$/
            return pattern.test(value) || 'Not a valid link'
          }
        }
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
        if (!this.image) {
          return
        }
        this.$store.dispatch('createAd', {
          title: this.title,
          location: this.location,
          image: this.image,
          description: this.description,
          date: this.submittableDateTime,
          keyCategory: this.keyCategory + ((this.keySubCategory.length > 0) ? ',' + this.keySubCategory : '')})
      }
    },
    methods: {
      onCategoryChange (value) {
        this.$store.dispatch('filterSubCategory', {keyCategory: value})
        this.subItems = this.$store.getters.getSubCategoryList
        this.keySubCategory = ''
      },
      onPickFile () {
        this.$refs.fileInput.click()
      },
      onFilePicked (event) {
        const files = event.target.files
        let filename = files[0].name
        if (filename.lastIndexOf('.') <= 0) {
          return alert('Please add a valid file!')
        }
        const fileReader = new FileReader()
        fileReader.addEventListener('load', () => {
          this.imageUrl = fileReader.result
        })
        fileReader.readAsDataURL(files[0])
        this.image = files[0]
      },
      submittableDateTime () {
        const date = new Date(this.date)
        if (typeof this.time === 'string') {
          let hours = this.time.match(/^(\d+)/)[1]
          const minutes = this.time.match(/:(\d+)/)[1]
          date.setHours(hours)
          date.setMinutes(minutes)
        } else {
          date.setHours(this.time.getHours())
          date.setMinutes(this.time.getMinutes())
        }
        return date
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
