import { startCase } from 'lodash'
import state from '../../state'

export default {
  updateName (state, name) {
    state.name = name
  },
  toggleGoal (state, goal) {
    // Convert goal to start case and remove all spaces
    const goalCased = startCase(goal).replace(/\s/g, '')
    const property = 'improve' + goalCased
    // Toggle selected property
    state.goals.data[property].selected = !state.goals.data[property].selected

    // Validate the goals
    // Convert the data into a string and count the number of selected=tru properties
    const strData = JSON.stringify(state.goals.data)
    const matched = strData.match(/"selected":true/g)
    // Save the amount selected
    state.goals.validation.selectedItems = matched ? matched.length : 0
    // Test if it passes validation
    state.goals.validation.isValid = state.goals.validation.selectedItems < state.goals.validation.maxAllowed
  },
  toggleDiet (state, diet) {
    // Set all to unselected except the button that was clicked
    for (const d in state.diets.data) {
      const item = state.diets.data[d]

      // Toggle the button that was clicked
      if (diet !== item.name) {
        item.selected = false
      } else {
        item.selected = !item.selected
      }
    }
    // Validate the diets
    // Convert the data into a string and count the number of selected=true properties
    const strData = JSON.stringify(state.diets.data)
    const matched = strData.match(/"selected":true/g)
    // Save the amount selected
    state.diets.validation.selectedItems = matched ? matched.length : 0
    // Test if it passes validation
    // state.diets.validation.isValid = state.diets.validation.selectedItems <= state.diets.validation.maxAllowed
  },
  toggleGender (state, gender) {
    const g = gender.toLowerCase()
    // Only one gender can be set at a time
    if (g === 'female') {
      state.genders.data.female.selected = !state.genders.data.female.selected
      state.genders.data.male.selected = false
    } else if (g === 'male') {
      state.genders.data.male.selected = !state.genders.data.male.selected
      state.genders.data.female.selected = false
    }
  },
  saveDate (state, dateObj) {
    state.date.day = dateObj.day
    state.date.month = dateObj.month
    state.date.year = dateObj.year
  },
  updateStep (context, step) {
    context.progress.currentStep = step
  }
}
