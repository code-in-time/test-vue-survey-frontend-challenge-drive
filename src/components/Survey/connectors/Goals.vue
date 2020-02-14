<script>
  import CheckButton from '@/components/Survey/components/CheckButton'
  import ThvButton from '@/components/Shared/Button'

  export default {
    name: 'Goals',
    components: {
      ThvButton,
      CheckButton
    },
    methods: {
      submit () {
        this.$router.push('/diet')
      },
      back () {
        this.$router.push('/name')
      },
      checkButtonClick(goal) {
          this.$store.dispatch('survey/TOGGLE_GOAL', goal)
      }
    },
    computed: {
      name: {
        get () {
          return this.$store.state.survey.name
        },
      },
      goals: {
        get () {
          return this.$store.state.survey.goals.data
        },
      },
      maxAllowed: {
        get () {
          return this.$store.state.survey.goals.validation.maxAllowed
        }
      },
      selectedItems: {
        get () {
          return this.$store.state.survey.goals.validation.selectedItems
        }
      }

    }
  }
</script>

<template lang='pug'>
  .grid-x.grid-x-margin
    .cell.small-12.medium-6.medium-offset-3
      .survey-questions__goals.align-center
        h1 Nice to meet you {{ name }}. What would you like to focus on?
        p.body--large.question-description 
          span(
            :class="{'question-description-invalid' : selectedItems >=maxAllowed }"
          ) Choose up to four
        .spacer.sp__top--sm

        check-button(
          v-for='(goal, key) in goals',
          :key='key',
          :text='goal.name'
          :value='goal.name',
          :selected='goal.selected'
          @checkButtonClick="checkButtonClick"
        )

        .grid-x.button-container
          .cell.auto
            .back-button-container
              .back-button(@click='back') BACK
          .cell.auto.align-right
            thv-button(
              element='button',
              size='large'
              :disabled="this.selectedItems == 0"
              @click='submit'
            ) Next
</template>

<style lang='stylus'>
  .survey-questions__goals
    .question-description-invalid
      color: #fa476f
</style>
