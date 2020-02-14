/**
 * This file contains utility functions
 */


export const getSelectedGender = genderObj => {
  // Convert to a simple object
  const data = JSON.parse(JSON.stringify(genderObj))
  let result = '';
  // Get the first selected item
  for (const property in data) {
    if (data[property].selected) {
      result = data[property].name
      break
    }
  }

  return result;
}

export const getSelectedDiet = dietsObj => {
  debugger
  // Convert to a simple object
  const data = JSON.parse(JSON.stringify(dietsObj))
  let result = '';
  // Get the first selected item
  for (const property in data) {
    if (data[property].selected) {
      result = data[property].name
      break
    }
  }

  return result;
}

export const getSelectedGoals = goalsObj => {
  const s = 1;
  const data = JSON.parse(JSON.stringify(goalsObj)) 
}
