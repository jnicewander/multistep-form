import React from 'react'
import UserDetails from './user-details'
import QuestionsGroup1 from './questions-group-1'
import QuestionsGroup2 from './questions-group-2'
import Completed from './completed'

const FormSteps = (step, setStep, form, setForm) => [
  {
    title: 'Client Details',
    content: (
      <UserDetails 
        setStep={setStep}
        step={step}
        form={form}
        setForm={setForm}
      />
    ),    
  },
  {
    title: 'General Info',
    content: (
      <QuestionsGroup1 
        setStep={setStep}
        step={step}
        form={form}
        setForm={setForm}
      />
    ),
  },
  {
    title: 'Site Functionality',
    content: (
      <QuestionsGroup2 
        setStep={setStep}
        step={step}
        form={form}
        setForm={setForm}
      />
    ),
  },
  {
    title: 'Complete!',
    content: (
      <Completed 
        form={form}
      />
    ),
  },
]

export default FormSteps