import { getSelectedGender, getSelectedDiet, getSelectedGoals, validateSurveySaveObj } from '../../../utils/helper'

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
  },
  API_SAVE (context) {
    return new Promise((resolve, reject) => {
      const obj = {
        name: context.state.name,
        date: {
          day: context.state.date.day,
          month: context.state.date.month,
          year: context.state.date.year
        },
        goals: getSelectedGoals(context.state.goals.data),
        diet: getSelectedDiet(context.state.diets.data),
        gender: getSelectedGender(context.state.genders.data)
      }

      // Validate
      const err = validateSurveySaveObj(obj)

      if (err.length === 0) {
        // There are no errors
        console.log('API save', obj)
        resolve('Success!')
      } else {
        // There are errors
        console.log('errors', err)
        reject(err)
      }
    })
  }
}
