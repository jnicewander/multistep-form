import React from 'react'
import styled from 'styled-components'

const FlexRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: .5rem 0;
`
const Divider = styled.div`
  width: 40px;
  height: 5px;
  border-radius: 10px;
  background-color: ${ props => props.fill };
  transition: background-color 1.4s ease-out;
`
const StepMarker = styled.div`
  border-radius: 50%;
  width: ${ props => props.size };
  height: ${ props => props.size };
  border: ${ props => props.border };
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${ props => props.background };
  &::before {
    content: '${ props => props.inner }';
  }
`
const ProgressBar = ({ steps, stepNumber }) => {
  return (
    <FlexRow>
        {
          steps.slice(0, -1).map((currentStep, index) => (
            <>
              {
                index > 0 &&
                <Divider 
                  fill={ stepNumber >= index ? 'lightblue' : 'lightgrey' }
                />
              }
              <StepMarker
                inner={ stepNumber > index ? '\\2713' : index + 1 }
                border={ stepNumber > index ? 'none' : '2px solid lightgrey' }
                background={ stepNumber > index ? 'lightblue' : 'none' }
                size={ stepNumber === index ? '35px' : '25px' }
              />
            </>
          ))
        }
    </FlexRow>
  )}

export default ProgressBar
