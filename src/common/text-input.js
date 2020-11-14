import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
`
const Label = styled.label`
  padding: .2rem;
`

const Input = styled.input`
  padding: .2rem;
  margin-bottom: .5rem;
`

const TextInput = ({ label, error, ...rest }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Input
        {...rest} 
      />
    </Container>
  )
}

export default TextInput