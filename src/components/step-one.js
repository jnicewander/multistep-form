import React from 'react'
import TextInput from './text-input'
import Button from './button'

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
      <TextInput
        name='firstName'
        value={form.firstName}
        label='First Name'
        onChange={(e) => handleChange(e)}
      />
      <TextInput
        name='lastName'
        value={form.lastName}
        label='Last Name'
        onChange={(e) => handleChange(e)}
      />
      <TextInput 
        type='tel'
        name='phoneNumber'
        value={form.phoneNumber}
        label='Phone Number'
        onChange={(e) => handleChange(e)}
      />
      <TextInput 
        type='email'
        name='email'
        value={form.email}
        label='Email Address'
        onChange={(e) => handleChange(e)}
      />
      <TextInput
        name='companyName'
        value={form.companyName}
        label='Company Name'
        onChange={(e) => handleChange(e)}
      />
      <Button type='submit'>Continue</Button>
    </form>
  )
}

export default StepOne