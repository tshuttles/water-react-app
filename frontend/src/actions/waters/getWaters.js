export const getWaters = () => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/waters')
    .then(resp => resp.json())
    .then(waters => dispatch({
      type: 'GET_WATERS',
      payload: waters
    }))
  }
}