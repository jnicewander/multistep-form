import React from 'react'
import StepOne from './step-one'
import StepTwo from './step-two'
import StepThree from './step-three'
import StepFour from './step-four'
import Complete from './complete'

const FormSteps = (form, setForm) => [
  {
    title: 'Basic User Details',
    content: (
      <StepOne 
        form={form}
        setForm={setForm}
      />
    ),    
  },
  {
    title: 'Skip Step Three?',
    content: (
      <StepTwo 
        form={form}
        setForm={setForm}
      />
    ),
  },
  {
    title: 'Questions 1 and 2',
    content: (
      <StepThree 
        form={form}
        setForm={setForm}
      />
    ),
  },
  {
    title: 'Questions 3 and 4',
    content: (
      <StepFour 
        form={form}
        setForm={setForm}
      />
    ),
  },
  {
    title: 'Form Complete!',
    content: (
      <Complete 
        form={form}
      />
    ),
  },
]

export default FormSteps