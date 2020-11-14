import React from 'react'

import TextInput from '../common/text-input'
import Button from '../common/button'

import { questionData } from '../utils/data-source'

const questionsPartial = questionData.slice(0, 2)

const StepThree =({ step, setStep, form, setForm }) => {

  const handleChange = ({ target }) => {
    setForm({
      type: 'STEP_THREE',
      payload: { [target.name]: target.value },
    })
  }

  const handleContinue = (e) => {
    e.preventDefault()
    setStep(step + 1)
  }

  const handleBack = (e) => {
    e.preventDefault()
    setStep(step - 1)
  }

  return (
    <form onSubmit={handleContinue}>
      <ul>
        {questionsPartial.map(data => (
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
      <Button onClick={handleBack}>Back</Button>      
      <Button type='submit'>Continue</Button>
    </form>
  )
}

export default StepThree