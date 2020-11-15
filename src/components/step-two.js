import React from 'react'
import Checkbox from '../common/checkbox'
import RadioInput from '../common/radio-input'

import { checkboxData, radioGroupData } from '../utils/data-source'

const StepTwo =({ form, setForm }) => {
  // TODO: Refactor change handlers into one.
  const handleChange = ({ target }) => {
    setForm({
      type: 'STEP_TWO',
      payload: { [target.name]: target.value },
    })
  }

  const handleCheck = ({ target }) => {
    if (!form[target.name] || form[target.name].length === 0) {
      setForm({
        type: 'STEP_TWO',
        payload: { [target.name]: target.value }
      })
    } else {
      setForm({
        type: 'STEP_TWO',
        payload: { [target.name]: '' }
      })
    }
  }

  

  

  return (
    <form>
    <span>Choose any checkboxes you're fond of.</span>
      <ul>
        {checkboxData.map(data => (
          <li key={data.name}>
            <Checkbox 
              name={data.name}
              value={data.value}
              label={data.value}
              checked={form[data.name] === data.value}
              onChange={(e) => handleCheck(e)}
            />
          </li>
        ))}
      </ul>
      <span>Would you like to skip the next section?</span>
      <br />
      <small>You can always go back.</small>
      <ul>
        {radioGroupData.values.map(value => (
          <li key={value}>
            <RadioInput 
              name={radioGroupData.name}
              value={value}
              label={value}
              checked={form[radioGroupData.name] === value}
              onChange={(e) => handleChange(e)}
            />
          </li>
        ))}
      </ul>
    </form>
  )
}

export default StepTwo