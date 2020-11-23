import React from 'react'
import StepOne from './step-one'
import StepTwo from './step-two'
import StepThree from './step-three'
import StepFour from './step-four'
// import StepFive from './step-five'

import Complete from './complete'

const FormSteps = (step, setStep, form, setForm) => [
  {
    title: 'Basic User Details',
    content: (
      <StepOne
        setStep={setStep}
        step={step} 
        form={form}
        setForm={setForm}
      />
    ),    
  },
  {
    title: 'Skip Step Three?',
    content: (
      <StepTwo
        setStep={setStep}
        step={step} 
        form={form}
        setForm={setForm}
      />
    ),
  },
  {
    title: 'Questions 1 and 2',
    content: (
      <StepThree
        setStep={setStep}
        step={step} 
        form={form}
        setForm={setForm}
      />
    ),
  },
  {
    title: 'Questions 3 and 4',
    content: (
      <StepFour
        setStep={setStep}
        step={step} 
        form={form}
        setForm={setForm}
      />
    ),
  },
  // {
  //   title: 'Select Tag',
  //   content: (
  //     <StepFive
  //       setStep={setStep}
  //       step={step} 
  //       form={form}
  //       setForm={setForm}
  //     />
  //   ),
  // },
  {
    title: 'Form Complete!',
    content: (
      <Complete
        setStep={setStep}
        step={step} 
        form={form}
      />
    ),
  },
]

export default FormSteps