import React from 'react';
import { connect } from 'react-redux';
import { addWater, updateWaterForm } from '../../actions/waters/addWater.js';

const WaterInput = ({ updateWaterForm, addWater, waterForm }) => {
  const handleOnChange = event => {
    const { value } = event.target
    const updatedFormInfo = {
      ...waterForm,
      amount: value
    }
    updateWaterForm(updatedFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault()
    addWater(waterForm)
  }

  return (
    <div className="WaterInputLabel">
      How Much Water Have You Drunk?
      <br/>
      <br/>
        <form onSubmit={handleSubmit}>
          Add Amount of Water (in fluid ounces)<br/>
          <input
            type="number"
            value={waterForm.amount} 
            onChange={handleOnChange}/>
          <input type="submit"/>
        </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    waterForm: state.waterForm
  }
}

export default connect(mapStateToProps, { updateWaterForm, addWater })(WaterInput)