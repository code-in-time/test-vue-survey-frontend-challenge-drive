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
