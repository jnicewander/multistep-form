import React, { useReducer, useState } from 'react'

import { FormReducer, DefaultForm } from '../utils/form-reducer'
import FormSteps from './form-steps'
import Button from '../common/button'
// import { submitForm } from '../utils/fetch'
import styled from 'styled-components'
import ProgressBar from '../components/progress-bar'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 60vh;
`
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

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
    <>
      <Container>
        <h2>{steps[`${step}`].title} - Step {step + 1}/{steps.length}</h2>
        <form>{steps[`${step}`].content}</form>
      </Container>
      <ButtonContainer>
        {step > 0 &&
          <Button onClick={handleBack}>Back</Button>
        }
        <Button onClick={handleContinue}>{step === steps.length - 2 ? 'Submit' : 'Continue'}</Button>
      </ButtonContainer>
      <ProgressBar
        steps={steps}
        stepNumber={step}
      />
    </>
  )
}

export default Form
