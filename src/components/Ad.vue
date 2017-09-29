<template>
  <button class="Button">
    <slot>{{name}}</slot>
  </button>
</template>

<script>
export default {
  data () {
    return {
      name: 'Ad #1'
    }
  },
  mounted () {
    this.retrieveAdList()
  },
  methods: {
    retrieveAdsList () {
      this.$store.dispatch('retrieveAdList')
    }
  }
}
</script>
