export const addWater = (amount) => {
  return (dispatch) => {
    fetch('http://localhost:3001/api_v1_user_waters_path', {
      credentials: "include",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({ amount })
    })
    .then(response => response.json())
    .then(water => dispatch({type: 'ADD_WATER', payload: water}))
  }
}