const initialState = {
  amount: ""
}

export default function manageWaters(state = 
  []
, action) {
  switch (action.type) {
    case 'ADD_WATER':
      return [...state, action.payload]
      // return {
      //   ...state,
      //   waters: [ ...state.waters, water]
      // }
    case "RESET_WATER_FORM":
      return initialState
    case 'GET_WATERS':
      return [...action.payload]
      // return { waters: action.payload }
      
    default:
      return state 
  }
}