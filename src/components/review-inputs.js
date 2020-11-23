import React from 'react'
import { textInputData, checkboxData, radioGroupData, questionData } from '../utils/data-source'

const ReviewInputs = ({ form }) => {
  return (
    <div>
      <ul>
        {
          textInputData.map(data => (
            <li key={data.name}>
              {data.label}: {form[data.name]}
            </li>
          ))
        }
        {
          checkboxData.map(data => (
            <li key={data.name}>
              {data.value}: 
              {
                !form[data.name] || form[data.name].length === 0 
                  ? '' 
                  : ' Checked'
              }
            </li>
          ))
        }
        <li>Skipped: {form[radioGroupData.name]}</li>
        {
          questionData.map((data, index) => (
            <li key={data.name}>
              Question {index + 1}: {form[data.name]}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default ReviewInputs
