<template>
  <h1>Hello from the world of {{type}}</h1>
</template>

<script>
  export default {
    layout: 'serverless',
    data () {
      return {
        type: 'Serverless '
      }
    }
  }
</script>

<style scoped>
  h1 {
    color: blueviolet
  }
</style>


