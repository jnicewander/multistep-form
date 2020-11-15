import React from 'react'
import TextInput from '../common/text-input'
import { questionData } from '../utils/data-source'

// This could be more dynamic, divide the length of the array into equal parts maybe
const questionsPartial = questionData.slice(2, 4)

const StepFour =({ form, setForm }) => {

  const handleChange = ({ target }) => {
    setForm({
      type: 'STEP_FOUR',
      payload: { [target.name]: target.value },
    })
  }

  return (
    <form>
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
    </form>
  )
}

export default StepFour