export default {
  UPDATE_NAME (context, name) {
    context.commit('updateName', name)
  },
  TOGGLE_GOAL (context, goal) {
    context.commit('toggleGoal', goal)
  }
}
