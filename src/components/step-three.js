import React from 'react'
import TextInput from '../common/text-input'
import { questionData } from '../utils/data-source'

const questionsPartial = questionData.slice(0, 2)

const StepThree =({ form, setForm, step, setStep }) => {

  const handleChange = ({ target }) => {
    setForm({
      type: 'STEP_THREE',
      payload: { [target.name]: target.value },
    })
  }

  return (
    <>
      <ul>
        {questionsPartial.map(data => (
            <li key={data.name}>
              <TextInput 
                type={data.type}
                name={data.name}
                value={form[data.name]}
                label={data.label}
                onChange={(e) => handleChange(e)}
              />
            </li>
          ))}
      </ul>
    </>
  )
}

export default StepThree