const state = () => ({
  progress: {
    currentStep: 0,
    totalSteps: 5
  },
  name: '',
  date: {
    day: '',
    month: '',
    year: ''
  },
  goals: {
    validation: {
      maxAllowed: 4,
      selectedItems: 0,
      isValid: true
    },
    data: {
      improveEnergy: {
        name: 'Energy',
        selected: false
      },
      improveFitness: {
        name: 'Fitness',
        selected: false
      },
      improveLongTermHealth: {
        name: 'Long-term health',
        selected: false
      },
      improveMood: {
        name: 'Mood',
        selected: false
      },
      improveSleep: {
        name: 'Sleep',
        selected: false
      },
      improveWeight: {
        name: 'Weight',
        selected: false
      }
    }
  },
  diets: {
    validation: {
      maxAllowed: 1,
      selectedItems: 0,
      isValid: true
    },
    data: {
      no: {
        name: 'No',
        selected: false
      },
      coeliac: {
        name: 'Coeliac',
        selected: false
      },
      lowCarbHighFat: {
        name: 'Low-carb, high-fat',
        selected: false
      },
      paleo: {
        name: 'Paleo',
        selected: false
      },
      pescatarian: {
        name: 'Pescatarian',
        selected: false
      },
      plantBased: {
        name: 'Plant-based',
        selected: false
      },
      other: {
        name: 'Other',
        selected: false
      }
    }
  },
  genders: {
    data: {
      male: {
        name: 'Male',
        selected: false
      },
      female: {
        name: 'Female',
        selected: false
      }
    }
  }

})

export default state
