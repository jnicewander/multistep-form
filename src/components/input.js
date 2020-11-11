import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
`
const InputLabel = styled.label`
  padding: .2rem;
`

const InputField = styled.input`
  padding: .2rem;
  margin-bottom: .5rem;
`

const Input = ({ label, error, ...rest }) => {
  return (
    <Container>
      <InputLabel>{label}</InputLabel>
      <InputField {...rest} />
    </Container>
  )
}

export default Input