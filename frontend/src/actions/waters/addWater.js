import Water from "../../components/waters/Water"

export const addWater = (data) => {

  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/waters', {
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