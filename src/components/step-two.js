import React from 'react'
import Input from './input'
import Button from './button'

// If the user selects 'yes' here, we skip the next step.
const StepTwo =({ step, setStep, form, setForm }) => {

  const handleChange = ({ target }) => {
    setForm({
      type: 'STEP_TWO',
      payload: { [target.name]: target.value },
    })
  }

  const handleContinue = (e) => {
    e.preventDefault()
    if (form.skipNextStep === "true") {
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
      <span>Would you like to skip the next section?</span>
      <small>You can always go back.</small>
      <Input 
        type='radio'
        name='skipNextStep'
        value={true}
        label='Yes'
        onChange={(e) => handleChange(e)}
      />
      <Input 
        type='radio'
        name='skipNextStep'
        value={false}
        label='No'
        onChange={(e) => handleChange(e)}
      />
      <Button onClick={handleBack}>Back</Button>      
      <Button type='submit'>Continue</Button>
    </form>
  )
}

export default StepTwo