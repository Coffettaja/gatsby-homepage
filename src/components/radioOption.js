import React from 'react'

/**
 * Component that creates a radio button for RadioGroup component. Should be a 
 * child of a RadioGroup, as it gets 'name', 'onChange' and 'value' values from 
 * RadioGroup parent component.
 */
const RadioOption = ({value, name, isChecked, onChange, children}) => (
  <label>
    <input name={name} value={value} checked={isChecked} onChange={onChange} type="radio"/>
    {children}
  </label>
)

export default RadioOption