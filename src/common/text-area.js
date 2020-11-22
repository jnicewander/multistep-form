import React from 'react'

const TextArea = ({ label, error, ...rest }) => {
  return (
    <>
    <label>
      {label}
      <textarea {...rest} />
    </label>
    </>
  )
}

export default TextArea
