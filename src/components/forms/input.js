import React from 'react'

const Input = ({ label, error, ...rest }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...rest} />
    </div>
  )
}

export default Input