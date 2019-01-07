import React from 'react'

const BoxOption = ({value, onClick, children}) => { 

  return (
    <div value={value} onClick={onClick}>
      {children}
    </div>
  )
}

const BoxInput = ({value, onChange, choices}) => {
  const onClick = (e) => {
    console.log(e.target)
  } 
  
  return (
    <div>
      {choices.map((choice, index) => {
        return (
          <BoxOption value={choice} onClick={onClick} key={index}>
            {`${choice}`}
          </BoxOption>
        )
      })}
    </div>
  )
}

export default BoxInput