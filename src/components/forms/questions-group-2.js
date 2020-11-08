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
    e.preventDefault()
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'web-estimate', ...form })
    })
    .then(() => alert('Success!'))
    .catch(error => alert(error))
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