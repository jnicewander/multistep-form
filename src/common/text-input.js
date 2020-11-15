import React from 'react'
import styled from 'styled-components'

const Label = styled.label`
  padding: .2rem;
`
const Input = styled.input`
  display: block;
  min-width: 400px;
  padding: .2rem;
  margin-bottom: .5rem;
`

const TextInput = ({ label, error, ...rest }) => {
  return (
    <>
      <Label>{label}</Label>
      <Input
        {...rest} 
      />
    </>
  )
}

export default TextInput