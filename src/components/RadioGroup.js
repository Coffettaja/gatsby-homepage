import React from 'react'
import RadioOption from './radioOption'

// name, onChange
const RadioGroup = ({name, onChange, value, children}) => {
  React.Children.map(children, child => {
    if (child.type === RadioOption) {
      return React.cloneElement(child, {
        isChecked: value === child.props.value,
        name,
        onChange
      })
    }
  })
}

export default RadioGroup