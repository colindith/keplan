export const state = () => ({
  snack: ''
})

export const getSnack = state => {
  console.log('in getSnack', state)
  return state.snack
}

export const mutations = {
  setSnack (state, snack) {
    console.log("in set snack")
    state.snack = snack
  }
}