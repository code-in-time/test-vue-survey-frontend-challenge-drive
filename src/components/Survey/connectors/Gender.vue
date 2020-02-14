<script>
  import CheckButton from '@/components/Survey/components/CheckButton'
  import ThvButton from '@/components/Shared/Button'

  export default {
    name: 'Gender',
    components: {
      ThvButton,
      CheckButton
    },
    methods: {
      submit () {
        // Validate data
        // Call the API to Save the data
        this.$store.dispatch('survey/API_SAVE')
        alert('Survey complete!')
      },
      back () {
        this.$router.push('/dob')
      },
      checkButtonClick (gender) {
        this.$store.dispatch('survey/TOGGLE_GENDER', gender)
      }
    },
    computed: {
      genders: {
        get () {
          return this.$store.state.survey.genders.data
        }
      },
      oneGenderSelected: {
        get () {
          const result = this.$store.state.survey.genders.data.female.selected === true || this.$store.state.survey.genders.data.male.selected === true
          return result
        }
      }
    }
  }
</script>

<template lang='pug'>
  .grid-x.grid-x-margin
    .cell.small-12.medium-6.medium-offset-3
      .survey-questions__gender.align-center
        h1 Are you…
        .spacer.sp__top--sm
        p.body--large.question-description We need your biological sex to process your tests
        .spacer.sp__top--sm

        check-button(
          v-for='(gender, key) in genders',
          :key='key',
          :text='gender.name'
          :value='gender.name',
          :selected='gender.selected'
          @checkButtonClick="checkButtonClick"
          :isDisabled='false'
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
              :disabled='!oneGenderSelected'
            ) Next

</template>
