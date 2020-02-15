<script>
  import MinimalLayout from './layout/MinimalLayout.vue'
  export default {
    name: 'app',
    components: {
      MinimalLayout
    }
  }
</script>

<template lang='pug'>
  #app
    minimal-layout
</template>

<style style lang='stylus'>
  @import url("https://cdn.jsdelivr.net/npm/animate.css@3.5.1")
</style>
