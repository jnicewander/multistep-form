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
    const formURL = process.env.AWS_ENDPOINT
    // AJAX Request
    const xhr = XMLHttpRequest()
    xhr.open('POST', formURL, true)
    xhr.setRequestHeader('Accept', 'application/json; charset=utf-8')
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8')
    // Send data as JSON
    xhr.send(JSON.stringify(form))
    xhr.onloadend = response => {
      if (response.target.status === 200) {
        console.log('Success! Now make a Success page.')
        setStep(step + 1)
      } else {
        console.log('ERROR! Something is wrong.')
        console.log(JSON.parse(response))
      }
    }
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