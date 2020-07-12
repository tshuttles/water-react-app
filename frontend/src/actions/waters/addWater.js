export const addWater = (data) => {
  return (dispatch) => {
    fetch('http://localhost:3001/api/v1/waters', {
      credentials: "include",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(water => dispatch({type: 'ADD_WATER', payload: water}))
  }
}