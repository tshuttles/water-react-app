export const addWater = (amount) => {
  return (dispatch) => {
    fetch('http://localhost:3001/api_v1_user_waters_path', {
      credentials: "include",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({ water: amount })
    })
    .then(response => response.json())
    .then(water => {
      dispatch(waterAdd(water))
      dispatch(resetWaterForm())
    })
  }
}

export const waterAdd = (water) => {
  return {
    type: "ADD_WATER",
    water
  }
}

export const resetWaterForm = () => {
  return {
    type: "RESET_WATER_FORM"
  }
}

export const updateWaterForm = (formData) => {
  return {
    type: "UPDATE_WATER_FORM",
    formData
  }
}