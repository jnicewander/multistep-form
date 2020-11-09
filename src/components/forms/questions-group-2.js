import React from 'react'
import Input from './input'
import Button from './button'

function replacer(name, val) {
  // convert RegExp to string
  if ( val && val.constructor === RegExp ) {
      return val.toString()
  } else if ( name === 'str' ) { // 
      return undefined // remove from result
  } else {
      return val // return as is
  }
}

const QuestionsGroupTwo =({ step, setStep, form, setForm }) => {

  const handleChange = ({ target }) => {
    setForm({
      type: 'QUESTIONS_GROUP_TWO',
      payload: { [target.name]: target.value },
    })
  }

  const handleContinue = (e) => {
    const AWS_ENDPOINT = 'https://hl21ta8q51.execute-api.us-east-1.amazonaws.com/Prod/submitForm'
    const jsonForm = JSON.stringify(form, replacer, 4)
    e.preventDefault()

    fetch(AWS_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: jsonForm,
    })
    .then(setStep(step + 1))
    .catch((error) => console.log('Error:', error))
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

export default QuestionsGroupTwo