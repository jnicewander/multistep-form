import React from 'react'
import Select from '../common/select'

import { selectData } from '../utils/data-source'

const StepFive = ({ form, setForm }) => {

  const handleChange = ({ target }) => {
    setForm({
      type: 'STEP_FIVE',
      payload: { [target.name]: target.value },
    })
  }

  return (
    <Select 
      label='Choose a color...'
      initValue={form[selectData[0].value]}
      onChange={(e) => handleChange(e)}
      options={selectData}
    />
      
  )
}

export default StepFive
