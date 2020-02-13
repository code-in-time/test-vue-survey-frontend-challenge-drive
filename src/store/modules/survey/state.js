const state = () => ({
  name: '',
  goals: {
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
})

export default state
