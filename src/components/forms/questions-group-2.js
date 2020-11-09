import React from 'react'
import Input from './input'
import Button from './button'

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
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
    e.preventDefault()
    fetch(AWS_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
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
        value={form.questionsGroup2.question3}
        label='Question Three?'
        onChange={(e) => handleChange(e)}
      />
      <Input 
        type='text'
        name='question4'
        value={form.questionsGroup2.question4}
        label='Question Four?'
        onChange={(e) => handleChange(e)}
      />
      <Button onClick={handleBack}>Back</Button>      
      <Button type='submit'>Submit</Button>
    </form>
  )
}

export default QuestionsGroupTwo