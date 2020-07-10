import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageWaters(state = {
  waters: []
}, action) {
  switch (action.type) {
    case 'ADD_WATER':
      const water = { amount: action.amount, id: cuidFn() };
      return {
        ...state,
        waters: [ ...state.waters, water]
      }
    case 'GET_WATERS':
      return { waters: action.payload }

    default:
      return state 
  }
}