import React from 'react'
import TextInput from '../common/text-input'
import { questionData } from '../utils/data-source'

const questionsPartial = questionData.slice(0, 2)

const StepThree =({ form, setForm }) => {

  const handleChange = ({ target }) => {
    setForm({
      type: 'STEP_THREE',
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

export default StepThree