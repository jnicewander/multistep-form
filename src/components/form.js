import React, { useReducer, useState } from 'react'
import { FormReducer, DefaultForm } from './form-reducer'
import FormSteps from './form-steps'

const Form = () => {
  let [step, setStep] = useState(0)
  const [form, setForm] = useReducer(FormReducer, DefaultForm)
  let steps = FormSteps(step, setStep, form, setForm)
  console.log(form)
  
  return (
    <div>
      <h2>{steps[`${step}`].title} - Step {step + 1}/{steps.length}</h2>
      <div>{steps[`${step}`].content}</div>
    </div>
  )
}

export default Form
