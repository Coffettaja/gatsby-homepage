import React from 'react'

// Solution 3 from https://techblog.commercetools.com/seven-patterns-by-example-the-many-ways-to-type-radio-in-react-bfe14322bb6f
/**
 * Component that simplifies making radio button groups.
 * name: Name of the radio group.
 * onChange: The function to run when a radio button selection changes.
 * value: The checked radio button by value.
 */
const RadioGroup = ({name, onChange, value, children}) => {
  return React.Children.map(children, child => {
    if (child.type.displayName === "RadioOption") {
      // Creates a new element by cloning the 'child' and gives it the props specified in the following object.
      return React.cloneElement(child, {
        isChecked: value === child.props.value,
        name,
        onChange
      })
    }
      // If the child is not a RadioOption, just return it as is.
      return child
  })
}

export default RadioGroup