export default {
  UPDATE_NAME (context, name) {
    context.commit('updateName', name)
  },
  TOGGLE_GOAL (context, goal) {
    context.commit('toggleGoal', goal)
  },
  TOGGLE_DIET (context, diet) {
    context.commit('toggleDiet', diet)
  },
  TOGGLE_GENDER (context, gender) {
    context.commit('toggleGender', gender)
  },
  /**
   * Save the date
   * @param {object} context 
   * @param {object} dateObj 
   * example of the dateObj
   * {
      day: number
      month: number
      year: number
    }
   */
  SAVE_DATE (context, dateObj) {
    context.commit('saveDate', dateObj)
  }
}


