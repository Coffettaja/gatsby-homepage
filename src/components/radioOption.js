import React from 'react'

const RadioOption = ({value, name, isChecked, onChange, children}) => (
  <label>
    <input name={name} value={value} checked={isChecked} onChange={onChange} type="radio"/>
    {children}
  </label>
)

export default RadioOption