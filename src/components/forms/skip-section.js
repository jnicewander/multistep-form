import React from 'react'
import Input from './input'
import Button from './button'

const SkipSection =({ step, setStep, form, setForm }) => {

  const handleChange = ({ target }) => {
    setForm({
      type: 'SKIP_SECTION',
      payload: { [target.name]: target.value },
    })
  }

  const handleContinue = (e) => {
    e.preventDefault()
    if (form.hasWebsite === "true") {
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
      <Input 
        type='radio'
        name='hasWebsite'
        value={true}
        label='Yes'
        onChange={(e) => handleChange(e)}
      />
      <Input 
        type='radio'
        name='hasWebsite'
        value={false}
        label='No'
        onChange={(e) => handleChange(e)}
      />
      <Button onClick={handleBack}>Back</Button>      
      <Button type='submit'>Continue</Button>
    </form>
  )
}

export default SkipSection