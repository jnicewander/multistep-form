import React from 'react'

const Select = ({ label, initValue, options, onChange, error, ...rest }) => {
  return (
    <label>
      {label}
      <select 
        value={initValue} 
        onChange={onChange}
      >
        {
          options.map( data => (
            <option
              key={data.value} 
              value={data.value}
            >
              {data.label}
            </option>
          ))
        }
      </select>
    </label>
  )
}

export default Select
