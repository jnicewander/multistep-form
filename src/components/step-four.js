import React from 'react'
import TextInput from '../common/text-input'
import Button from '../common/button'

import { questionData } from '../utils/data-source'
import { submitForm } from '../utils/fetch'
// This could be more dynamic, divide the length of the array into equal parts maybe
const questionsPartial = questionData.slice(2, 4)

const StepFour =({ step, setStep, form, setForm }) => {

  const handleChange = ({ target }) => {
    setForm({
      type: 'STEP_FOUR',
      payload: { [target.name]: target.value },
    })
  }

  const handleContinue = (e) => {
    e.preventDefault()
    // No validation yet
    submitForm(form)
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
      <Button type='submit'>Submit</Button>
    </form>
  )
}

export default StepFour