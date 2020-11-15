import React, { useReducer, useState } from 'react'

import { FormReducer, DefaultForm } from '../utils/form-reducer'
import FormSteps from './form-steps'
import Button from '../common/button'
import { submitForm } from '../utils/fetch'

const Form = () => {
  let [step, setStep] = useState(0)
  const [form, setForm] = useReducer(FormReducer, DefaultForm)
  let steps = FormSteps(step, setStep, form, setForm)

  const handleContinue = (e) => {
    e.preventDefault()
    if (form.skipNextStep === "Yes" && step === 1) {
      form.question1 = 'Skipped'
      form.question2 = 'Skipped'
      setStep(step + 2)
    } else if (step === 3) {
      // submitForm(form)
      setStep(step + 1)
    } else {
      setStep(step + 1)
    }


  }

  const handleBack = (e) => {
    e.preventDefault()
    setStep(step - 1)
  }
  
  return (
    <div>
      <div>
        <h2>{steps[`${step}`].title} - Step {step + 1}/{steps.length}</h2>
        <div>{steps[`${step}`].content}</div>
      </div>
      <Button onClick={handleBack}>Back</Button>
      <Button onClick={handleContinue}>{step === 3 ? 'Submit' : 'Continue'}</Button>
    </div>
  )
}

export default Form
