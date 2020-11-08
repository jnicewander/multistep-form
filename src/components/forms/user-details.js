import React from 'react'
import Input from './input'
import Button from './button'

const UserDetails = ({ step, setStep, form, setForm }) => {
  
  const handleChange = ({ target }) => {
    setForm({
      type: 'USER_INFO',
      payload: { [target.name]: target.value },      
    })
  }

  const handleContinue = (e) => {
    e.preventDefault()
    setStep(step + 1)
  }

  return (
    <form onSubmit={handleContinue}>
      <Input 
        type='text'
        name='firstName'
        value={form.firstName}
        label='First Name'
        onChange={(e) => handleChange(e)}
      />
      <Input 
        type='text'
        name='lastName'
        value={form.lastName}
        label='Last Name'
        onChange={(e) => handleChange(e)}
      />
      <Input 
        type='tel'
        name='phoneNumber'
        value={form.phoneNumber}
        label='Phone Number'
        onChange={(e) => handleChange(e)}
      />
      <Input 
        type='email'
        name='email'
        value={form.email}
        label='Email Address'
        onChange={(e) => handleChange(e)}
      />
      <Input 
        type='text'
        name='companyName'
        value={form.companyName}
        label='Company Name'
        onChange={(e) => handleChange(e)}
      />
      <Button type='submit'>Continue</Button>
    </form>
  )
}

export default UserDetails