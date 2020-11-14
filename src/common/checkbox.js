import React from 'react'
import styled from 'styled-components'

const Label = styled.label`
  margin-left: 10px;
`

const Checkbox = ({ label, error, ...rest }) => {
  return (
    <div>
      <input
        type='checkbox' 
        {...rest}
      />    
      <Label>{label}</Label>
    </div>
  )
}


export default Checkbox
