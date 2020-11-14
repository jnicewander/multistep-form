import React from 'react'
import Button from './button'
import Checkbox from './checkbox'
import RadioInput from './radio-input'

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
      <Checkbox 
        name='checkboxOne'
        value='Checkbox One'
        label='Checkbox One'
        checked={form.checkboxOne === 'Checkbox One'}
        onChange={(e) => handleChange(e)}
      />
      <Checkbox 
        name='checkboxTwo'
        value='Checkbox Two'
        label='Checkbox Two'
        checked={form.checkboxTwo === 'Checkbox Two'}
        onChange={(e) => handleChange(e)}
      />
      <Checkbox 
        name='checkboxThree'
        value='Checkbox Three'
        label='Checkbox Three'
        checked={form.checkboxThree === 'Checkbox Three'}
        onChange={(e) => handleChange(e)}
      />
      <Checkbox 
        name='checkboxFour'
        value='Checkbox Four'
        label='Checkbox Four'
        checked={form.checkboxFour === 'Checkbox Four'}
        onChange={(e) => handleChange(e)}
      />
      <span>Would you like to skip the next section?</span>
      <br />
      <small>You can always go back.</small>      
        <RadioInput           
          name='skipNextStep'
          value='Yes'
          label='Yes'
          checked={form.skipNextStep === 'Yes'}
          onChange={(e) => handleChange(e)}
        />
        <RadioInput 
          name='skipNextStep'
          value='No'
          label='No'
          checked={form.skipNextStep === 'No'}
          onChange={(e) => handleChange(e)}
        />    
      <Button onClick={handleBack}>Back</Button>      
      <Button type='submit'>Continue</Button>
    </form>
  )
}

export default StepTwo