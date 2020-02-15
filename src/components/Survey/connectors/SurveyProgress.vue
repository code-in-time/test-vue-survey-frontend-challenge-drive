<script>
  import ProgressBar from '@/components/Shared/ProgressBar'

  export default {
    name: 'SurveyProgress',
    components: {
      ProgressBar
    },
    computed: {
      currentStep: {
        get () {
          return this.$store.state.survey.progress.currentStep
        }
      },
      totalSteps: {
        get () {
          return this.$store.state.survey.progress.totalSteps
        }
      }
    }
  }
</script>

<template lang='pug'>
  .progress-bar-container
    progress-bar(:currentStep='currentStep', :totalSteps='totalSteps')

</template>

<style lang='stylus'>
  .progress-bar-container
    display: flex
    flex-wrap: nowrap
    width: 80px
    align-items: center
</style>
