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
    state.goals[property].selected = !state.goals[property].selected;
  },
  toggleDiet (state, diet) {
    // Convert diet to start case and remove all non word characters
    const dietCased = startCase(diet).replace(/\W/g, '');
    // Lowercase the first letter
    const property = dietCased[0].toLowerCase() + dietCased.slice(1)
    // Toggle selected property
    state.diets[property].selected = !state.diets[property].selected;
  },
  toggleGender (state, gender) {
    // Lowercase the first letter
    const property = gender[0].toLowerCase() + gender.slice(1)
    // Toggle selected property
    state.genders[property].selected = !state.genders[property].selected;
  },
}
