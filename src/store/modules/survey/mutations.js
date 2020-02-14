import { startCase } from 'lodash'

export default {
  updateName (state, name) {
    state.name = name 
  },
  toggleGoal (state, goal) {
    // Convert goal to start case and remove all spaces
    const goalCased = startCase(goal).replace(/\s/g, '');
    const property = 'improve'+goalCased
    // Toggle selected property
    state.goals.data[property].selected = !state.goals.data[property].selected;

    // Validate the goals
    // Convert the data into a string and count the number of selected=tru properties
    const strData = JSON.stringify(state.goals.data)
    const matched = strData.match(/"selected":true/g)
    // Save the amount selected
    state.goals.validation.selectedItems = matched ? matched.length : 0
    // Test if it passes validation
    state.goals.validation.isValid = state.goals.validation.selectedItems >= state.goals.validation.maxAllowed ? false : true

  },
  toggleDiet (state, diet) {
    // Convert diet to start case and remove all non word characters
    const dietCased = startCase(diet).replace(/\W/g, '');
    // Lowercase the first letter
    const property = dietCased[0].toLowerCase() + dietCased.slice(1)
    // Toggle selected property
    state.diets.data[property].selected = !state.diets.data[property].selected;

    // Validate the diets
    // Convert the data into a string and count the number of selected=true properties
    const strData = JSON.stringify(state.diets.data)
    const matched = strData.match(/"selected":true/g)
    // Save the amount selected
    state.diets.validation.selectedItems = matched ? matched.length : 0
    // Test if it passes validation
    state.diets.validation.isValid = state.diets.validation.selectedItems >= state.diets.validation.maxAllowed ? false : true

  },
  toggleGender (state, gender) {
    // Lowercase the first letter
    const property = gender[0].toLowerCase() + gender.slice(1)
    // Toggle selected property
    state.genders.data[property].selected = !state.genders.data[property].selected

        // Validate the diets
    // Convert the data into a string and count the number of selected=true properties
    const strData = JSON.stringify(state.genders.data)
    const matched = strData.match(/"selected":true/g)
    // Save the amount selected
    state.genders.validation.selectedItems = matched ? matched.length : 0
    // Test if it passes validation
    state.genders.validation.isValid = state.genders.validation.selectedItems >= state.genders.validation.maxAllowed ? false : true
  },
}
