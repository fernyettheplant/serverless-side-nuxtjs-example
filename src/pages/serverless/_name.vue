<template>
  <h2>Hey, I think your name is {{ name }} 👋</h2>
</template>

<script>
  export default {
    layout: 'serverless',

    data () {
      return {
        name: this.$route.params.name
      }
    },

    head () {
      return {
        title: `${this.name} Person`,
        meta: [
          { hid: 'description', name: 'description', content: `You are ${this.name} hello 👋` }
        ]
      }
    }
  }
</script>
