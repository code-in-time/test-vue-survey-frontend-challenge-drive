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

    // debugger
    // Validate the goals
    // Convert the data into a string and count the number of selected=tru properties
    const strData = JSON.stringify(state.goals.data)
    // Save the amount selected
    state.goals.validation.selectedItems = strData.match(/"selected":true/g).length
    // Test if it passes validation
    state.goals.validation.isValid = state.goals.validation.selectedItems === state.goals.validation.maxAllowed ? false : true

  },
  toggleDiet (state, diet) {
    // Convert diet to start case and remove all non word characters
    const dietCased = startCase(diet).replace(/\W/g, '');
    // Lowercase the first letter
    const property = dietCased[0].toLowerCase() + dietCased.slice(1)
    // Toggle selected property
    state.diets.data[property].selected = !state.diets.data[property].selected;
  },
  toggleGender (state, gender) {
    // Lowercase the first letter
    const property = gender[0].toLowerCase() + gender.slice(1)
    // Toggle selected property
    state.genders.data[property].selected = !state.genders.data[property].selected;
  },
}
