import React from 'react'
import TextInput from '../common/text-input'
import { textInputData } from '../utils/data-source'

const StepOne = ({ form, setForm }) => {
  
  const handleChange = ({ target }) => {
    setForm({
      type: 'STEP_ONE',
      payload: { [target.name]: target.value },      
    })
  }


  return (
    <form>
      <ul>
        {textInputData.map(data => (
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

export default StepOne