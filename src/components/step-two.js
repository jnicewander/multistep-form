import React from 'react'
import Button from './button'
import Checkbox from './checkbox'
import RadioInput from './radio-input'

import { checkboxData, radioGroupData } from '../utils/data-source'

const StepTwo =({ step, setStep, form, setForm }) => {
  // TODO: Refactor change handlers into one.
  const handleChange = ({ target }) => {
    setForm({
      type: 'STEP_TWO',
      payload: { [target.name]: target.value },
    })
  }

  const handleCheck = ({ target }) => {
    if (!form[target.name] || form[target.name].length === 0) {
      setForm({
        type: 'STEP_TWO',
        payload: { [target.name]: target.value }
      })
    } else {
      setForm({
        type: 'STEP_TWO',
        payload: { [target.name]: '' }
      })
    }
  }

  const handleContinue = (e) => {
    e.preventDefault()
    if (form.skipNextStep === "Yes") {
      form.question1 = 'Skipped'
      form.question2 = 'Skipped'
      setStep(step + 2)
    } else {
      setStep(step + 1)
    }
  }

  const handleBack = (e) => {
    e.preventDefault()
    setStep(step - 1)
  }

  return (
    <form onSubmit={handleContinue}>

    <span>Choose any checkboxes you're fond of.</span>
      <ul>
        {checkboxData.map(data => (
          <li key={data.name} style={{ listStyle: 'none' }}>
            <Checkbox 
              name={data.name}
              value={data.value}
              label={data.value}
              checked={form[data.name] === data.value}
              onChange={(e) => handleCheck(e)}
            />
          </li>
        ))}
      </ul>

      <span>Would you like to skip the next section?</span>
      <br />
      <small>You can always go back.</small>
      <ul>
        {radioGroupData.map(data => (
          <li key={data.value} style={{ listStyle: 'none' }}>
            <RadioInput 
              name={data.name}
              value={data.value}
              label={data.value}
              checked={form[data.name] === data.value}
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

export default StepTwo