import React from 'react'

const BoxOption = ({value, children, getValue}) => { 

  const onClick = () => {
    getValue(value)
  } 

  return (
    <div value={value} onClick={onClick}>
      {children}
    </div>
  )
}

const BoxInput = ({value, onChange, children}) => {
  const getValue = (value) => {
    console.log(value)
  }

  return (
    <div>
      {children}
    </div>
  )
}

export { BoxInput, BoxOption }