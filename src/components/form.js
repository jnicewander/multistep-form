import React, { useReducer, useState } from 'react'
import styled from 'styled-components'

import { FormReducer, DefaultForm } from '../utils/form-reducer'
import FormSteps from './form-steps'
import { textInputData, checkboxData, radioGroupData, questionData } from '../utils/data-source'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`


const Form = () => {
  let [step, setStep] = useState(0)
  const [form, setForm] = useReducer(FormReducer, DefaultForm)
  let steps = FormSteps(step, setStep, form, setForm)
  console.log(form)
  
  return (
    <Container>
      <div>
        <h2>{steps[`${step}`].title} - Step {step + 1}/{steps.length}</h2>
        <div>{steps[`${step}`].content}</div>
      </div>
      <div>
        <h3>Current Form Entries</h3>
        <ul>
          {/* Why can't I destructure inside the map callback? */}
          {textInputData.map(data => (
            <li key={data.name}>
              {data.label}: {form[data.name]}
            </li>
          ))}
          {checkboxData.map(data => (
            <li key={data.name}>
              {data.value}: 
              {!form[data.name] || form[data.name].length === 0 
                ? '' 
                : ' Checked'}
            </li>
          ))}
          <li>Skipped: {form[radioGroupData.name]}</li>
          {questionData.map((data, index) => (
            <li key={data.name}>
              Question {index + 1}: {form[data.name]}
            </li>
          ))}
        </ul>
      </div>
    </Container>
  )
}

export default Form
