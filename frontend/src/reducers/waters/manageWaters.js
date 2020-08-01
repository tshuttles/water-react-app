export default function manageWaters(state = [], action) {
  switch (action.type) {
    case 'ADD_WATER':
      return [...state, action.water]
      // return {
      //   ...state,
      //   waters: [ ...state.waters, water]
      // }
    case 'GET_WATERS':
      return [...action.payload]
      // return { waters: action.payload }
    default:
      return state 
  }
}