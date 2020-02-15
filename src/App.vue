<script>
  import MinimalLayout from './layout/MinimalLayout.vue'
  export default {
    name: 'app',
    components: {
      MinimalLayout
    },
    watch: {
      $route (to, from) {
        // Set the step for the vue
        let step = 0

        switch (to.name) {
          case 'name':
            step = 1
            break
          case 'goals':
            step = 2
            break
          case 'diet':
            step = 3
            break
          case 'dob':
            step = 4
            break
          case 'gender':
            step = 5
            break
          default:
            step = 0
        }
        this.$store.dispatch('survey/UPDATE_STEP', step)
      }
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
