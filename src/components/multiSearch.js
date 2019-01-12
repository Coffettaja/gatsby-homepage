import React from 'react'
import styled from 'styled-components'

const ToggleContainer = styled.div`
  background-color: hsl(15, 5%, 95%);
  display: flex;
  padding: 2rem 3rem;
  margin: 2rem 0;
`

const SearchValueInput = styled.input`
  width: 80%;
  font-size: 2rem;
  padding: .8rem;
  letter-spacing: 1px;
  margin-top: 2rem;
`

const Toggle = ({labelText,  ...rest}) => (
  <label>
    <input {...rest} value={labelText} type="checkbox" />
    {labelText}
  </label>
)

export default class MultiSearch extends React.Component {
  constructor(props) {
    super(props)

    // this.japaneseCharacters = /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/

    this.state = {
      searchValue: '',
      toggles: props.initialSites,
      searchError: '',
    }
  }

  onSubmit = (e) => {
    e.preventDefault()
    if (this.state.searchError.length > 0) {
      return
    }
    Object.keys(this.state.toggles)
       .filter(toggleValue => this.state.toggles[toggleValue].checked)
       .forEach((toggleValue) => {
         window.open(
           this.state.toggles[toggleValue].url
           .replace(this.props.searchTermCode, this.state.searchValue))
    }) 
  }

  onSearchInputChange = (e) => {
    const searchValue = e.target.value
    let searchError = ''
    if (searchValue.length === 0) {
      searchError = "No search term"
    }
    
    this.setState(() => ({
      searchValue,
      searchError
    }))
    
  }

  onToggle = (e) => {
   const toggleToChange = e.target.value
   const newValue = e.target.checked
   const newToggles = this.state.toggles
   newToggles[toggleToChange].checked = newValue
    this.setState(() => ({
      toggles: newToggles
   }))
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <SearchValueInput placeholder="Search a word" onChange={this.onSearchInputChange} value={this.state.searchValue} type="text"/>
        <ToggleContainer>
          {Object.keys(this.state.toggles).map((toggleKey, index) => (
            <Toggle
              labelText={toggleKey}
              onChange={this.onToggle}
              checked={this.state.toggles[toggleKey].checked}
              key={index}
            ></Toggle> 
          ))}
        </ToggleContainer>
        <p>{this.state.searchError}</p>
        <button>MultiSearch</button>
      </form>
      
    )
  }
}