import React from 'react'
import styled from 'styled-components'
import GhostIcon from '../common/ghost-icon'

const FlexRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 2rem 0;
`
const ProgressBar = ({ steps, stepNumber }) => {
  return (
        steps.map((currentStep, index) => (
          <GhostIcon
            key={index}
            fill={ stepNumber >= index ? 'blue' : 'black' }
            height='2.5rem'
            width='2.5rem'
          />
        ))
  )}

export default ProgressBar
