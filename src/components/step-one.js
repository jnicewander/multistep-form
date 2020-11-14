import React from 'react'

import TextInput from '../common/text-input'
import Button from '../common/button'

import { textInputData } from '../utils/data-source'

const StepOne = ({ step, setStep, form, setForm }) => {
  
  const handleChange = ({ target }) => {
    setForm({
      type: 'STEP_ONE',
      payload: { [target.name]: target.value },      
    })
  }

  const handleContinue = (e) => {
    e.preventDefault()
    setStep(step + 1)
  }

  return (
    <form onSubmit={handleContinue}>

      <ul>
        {textInputData.map(data => (
          <li key={data.name}>
            <TextInput 
              type={data.type}
              name={data.name}
              value={form[data.name]}
              label={data.label}
              onChange={(e) => handleChange(e)}
            />
          </li>
        ))}
      </ul>      
      <Button type='submit'>Continue</Button>
    </form>
  )
}

export default StepOne