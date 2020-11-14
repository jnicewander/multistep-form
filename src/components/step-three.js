import React from 'react'
import TextInput from './text-input'
import Button from './button'

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
      <TextInput
        name='question1'
        value={form.question1}
        label='Question One?'
        onChange={(e) => handleChange(e)}
      />
      <TextInput
        name='question2'
        value={form.question2}
        label='Question Two?'
        onChange={(e) => handleChange(e)}
      />
      <Button onClick={handleBack}>Back</Button>      
      <Button type='submit'>Continue</Button>
    </form>
  )
}

export default StepThree