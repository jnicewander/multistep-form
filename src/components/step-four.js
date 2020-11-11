import React from 'react'
import Input from './input'
import Button from './button'
import { submitForm } from '../utils/fetch'


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
      <Input 
        type='text'
        name='question3'
        value={form.question3}
        label='Question Three?'
        onChange={(e) => handleChange(e)}
      />
      <Input 
        type='text'
        name='question4'
        value={form.question4}
        label='Question Four?'
        onChange={(e) => handleChange(e)}
      />
      <Button onClick={handleBack}>Back</Button>      
      <Button type='submit'>Submit</Button>
    </form>
  )
}

export default StepFour