import React, { useReducer, useState } from 'react'
import styled from 'styled-components'

import { FormReducer, DefaultForm } from '../utils/form-reducer'
import FormSteps from './form-steps'
import { textInputData, checkboxData, radioGroupData } from '../utils/data-source'
import { check } from 'prettier'

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
          {textInputData.map(dataObject => (
            <li key={dataObject.name}>
              {dataObject.label}: {form[dataObject.name]}
            </li>
          ))}
          {checkboxData.map(dataObject => (
            <li key={dataObject.name}>
              {dataObject.value}: 
              {!form[dataObject.name] || form[dataObject.name].length === 0 
                ? '' 
                : 'Checked'}
            </li>
          ))}
        </ul>
      </div>
    </Container>
  )
}

export default Form
