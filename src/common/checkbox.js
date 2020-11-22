import React from 'react'
import styled from 'styled-components'

const Label = styled.label`
  margin-left: 10px;
`

const Checkbox = ({ label, error, name, value, checked, onChange }) => {
  return (
    <>
      <input
        type='checkbox'
        name={name}
        value={value}
        checked={checked}
        onChange={onChange} 
      />    
      <Label>{label}</Label>
    </>
  )
}


export default Checkbox
