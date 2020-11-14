import React from 'react'
import styled from 'styled-components'

const Label = styled.label`
  margin-left: 10px;
`
const Container = styled.div`
  margin-bottom: 10px;
`

const RadioInput = ({ label, error, ...rest }) => {
  return (
    <Container>
      <input 
        type='radio'
        {...rest}
      />
      <Label>{label}</Label>
    </Container>
  )
}

export default RadioInput