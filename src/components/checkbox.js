import React from 'react'
import styled from 'styled-components'

const Checkbox = ({ label, error, ...rest }) => {
  return (
    <div>
      <input
        type='checkbox' 
        {...rest}
      />    
      <label>{label}</label>
    </div>
  )
}


export default Checkbox
