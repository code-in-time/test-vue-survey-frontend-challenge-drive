import { startCase } from 'lodash'

export default {
  updateName (state, name) {
    state.name = name 
  },
  toggleGoal (state, goal) {
    //state.name = name 
    // Convert goal to start case and remove all spaces
    const goalCased = startCase(goal).replace(/\s/g, '');
    const property = 'improve'+goalCased
    // Toggle selected property
    state.goals[property].selected = !state.goals[property].selected;
  }
}
