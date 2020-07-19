const initialState = {
  amount: ""
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_WATER_FORM":
      return action.formData
    case "RESET_WATER_FORM":
      return initialState
    default:
      return state 
  }
}