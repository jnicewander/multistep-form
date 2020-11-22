import React from 'react'
import Checkbox from './checkbox'
import styled from 'styled-components'

const Checkboxes = ({ legend, source, onChange, form, error }) => {
  return (
    <fieldset>
      <legend>{legend}</legend>
      {
        source.map( data => (
          <Checkbox
            key={data.name}
            name={data.name}
            value={data.value}
            label={data.label}
            checked={form[data.name] === data.value}
            onChange={onChange}
          />
        ))
      }
    </fieldset>
  )
}

export default Checkboxes
