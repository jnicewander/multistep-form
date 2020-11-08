import React from 'react'
import Input from './input'
import Button from './button'

const QuestionsGroupOne =({ step, setStep, form, setForm }) => {

  const handleChange = ({ target }) => {
    setForm({
      type: 'QUESTIONS_GROUP_ONE',
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
      <Input 
        type='text'
        name='question1'
        value={form.questionsGroup1.question1}
        label='Question One?'
        onChange={(e) => handleChange(e)}
      />
      <Input 
        type='text'
        name='question2'
        value={form.questionsGroup1.question2}
        label='Question Two?'
        onChange={(e) => handleChange(e)}
      />
      <Button onClick={handleBack}>Back</Button>      
      <Button type='submit'>Continue</Button>
    </form>
  )
}

export default QuestionsGroupOne