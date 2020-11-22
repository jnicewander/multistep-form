import React from 'react'
import Checkbox from './checkbox'
import styled from 'styled-components'

const Checkboxes = ({ legend, source, error }) => {
  return (
    <fieldset>
      <legend>{legend}</legend>
      {
        source.map( data => (
          <Checkbox
            name={data.name}
            value={data.value}
            label={data.label}
            checked={data.checked}
            onChange={data.onChange}
          />
        ))
      }
    </fieldset>
  )
}

export default Checkboxes
