<script>
  import CheckButton from '@/components/Survey/components/CheckButton'
  import ThvButton from '@/components/Shared/Button'

  export default {
    name: 'Diet',
    components: {
      ThvButton,
      CheckButton
    },
    methods: {
      submit () {
        this.$router.push('/dob')
      },
      back () {
        this.$router.push('/goals')
      },
      checkButtonClick (diet) {
        this.$store.dispatch('survey/TOGGLE_DIET', diet)
      }
    },
    computed: {
      diets: {
        get () {
          return this.$store.state.survey.diets.data
        }
      },
      maxAllowed: {
        get () {
          return this.$store.state.survey.diets.validation.maxAllowed
        }
      },
      selectedItems: {
        get () {
          return this.$store.state.survey.diets.validation.selectedItems
        }
      }
    }
  }
</script>

<template lang='pug'>
  .grid-x.grid-x-margin
    .cell.small-12.medium-6.medium-offset-3
      .survey-questions__diet.align-center
        h1 Do you follow a particular diet?
        .spacer.sp__top--sm

        check-button(
          v-for='(diet, key) in diets',
          :key='key',
          :text='diet.name'
          :value='diet.name',
          :selected='diet.selected'
          @checkButtonClick="checkButtonClick"
          :isDisabled='!diet.selected && (selectedItems === 1)'
        )

        .grid-x.button-container
          .cell.auto
            .back-button-container
              .back-button(@click='back') BACK
          .cell.auto.align-right
            thv-button(
              element='button',
              size='large'
              @click='submit'
              :disabled='selectedItems == 0'
            ) Next

</template>
