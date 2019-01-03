import React from 'react'

const RadioOption = ({value, children}) => (
  <label>
    <input value={value} type="radio"/>
    {children}
  </label>
)

export default RadioOption