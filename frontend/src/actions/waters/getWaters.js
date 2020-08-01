export const getWaters = () => {
  return (dispatch) => {
    fetch('http://localhost:3001/api_v1_user_waters_path', {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => {
      return resp.json()
    })
    .then(waters => dispatch({
      type: 'GET_WATERS',
      payload: waters
    }))
  }
}