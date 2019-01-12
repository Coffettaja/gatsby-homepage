import React from 'react'
import styled from 'styled-components'

const ToggleContainer = styled.div`
  background-color: hsl(15, 5%, 95%);
  display: flex;
  padding: 2rem 3rem;
  margin: 2rem 0;
`

const OptionToggle = styled.label`
  background-color: orangered;
  padding: 1rem;
  position: relative;
  display: ${props => props.hidden ? "none" : "flex"};
  justify-content: center;
  align-items: center;
  height: 5.5rem;
  width: 11rem;
  border-radius: 2px;
  margin: 0 1rem;
  color: white;
  font-size: 1.6rem;
  cursor: pointer;

  :hover {
    opacity: .9;
  }

  input {
    width: 2rem;
    height: 2rem;
    position: absolute;
    top: 0;
    left: 0;
    cursor: pointer;
  }
`
const SearchValueInput = styled.input`
  width: 80%;
  font-size: 2rem;
  padding: .8rem;
  letter-spacing: 1px;
  margin-top: 2rem;
`

const Toggle = ({labelText,  ...rest}) => (
  <div>
    <input {...rest} value={labelText} type="checkbox" />
    <label>{labelText}</label>
  </div>
)

export default class MultiSearch extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searchValue: '',
      toggles: props.initialSites,
      // images: true,
      // pronunciation: false,
      // wiki: false,
      // dictionary: true,
      // kanjis: false,
      // definition: false,
    }
  }

  onSubmit = (e) => {
    e.preventDefault()
    const urlsToOpen = Object.keys(this.state.toggles)
      .filter(toggleValue => this.state.toggles[toggleValue].checked)
      .map((toggleValue) => {
      return this.state.toggles[toggleValue].url
    })
    console.log(urlsToOpen)
  }

  onSearchInputChange = (e) => {
    const searchValue = e.target.value
    this.setState(() => ({
      searchValue
    }))
  }

  // Temporary function, TODO fix
  toggleValue = (e) => {
    const valueToChange = e.target.value // Value of the checkbox has to match the property name in the component state.
    const newState = {}
    newState[`${valueToChange}`] = !this.state[valueToChange]
    this.setState(() => newState)
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
        <button>MultiSearch</button>
      </form>
      
    )
  }
}

/*
this.state.toggles.map((toggle, index) => (
            <Toggle
              labelText={toggle.labelText}
              onChange={this.onToggle}
              key={index}
            ></Toggle>
          ))



<ToggleContainer>
          <OptionToggle>
            <input value="dictionary" checked={this.state.dictionary} onChange={this.toggleValue} type="checkbox"/>Dictionary
          </OptionToggle>
          <OptionToggle hidden={this.props.language !== 'jp'}>
            <input value="kanjis" checked={this.state.kanjis} onChange={this.toggleValue} type="checkbox"/>Kanjis
          </OptionToggle>
          <OptionToggle>
            <input value="images" checked={this.state.images} onChange={this.toggleValue} type="checkbox"/>Images
          </OptionToggle>
          <OptionToggle>
            <input value="definition" checked={this.state.definition} onChange={this.toggleValue} type="checkbox"/>Definition
          </OptionToggle>
          <OptionToggle>
            <input value="pronunciation" checked={this.state.pronunciation} onChange={this.toggleValue} type="checkbox"/>Pronunciation
          </OptionToggle>
          <OptionToggle>
            <input value="wiki" checked={this.state.wiki} onChange={this.toggleValue} type="checkbox"/>Wikipedia
          </OptionToggle>
        </ToggleContainer>
*/