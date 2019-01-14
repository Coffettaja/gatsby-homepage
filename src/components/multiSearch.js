import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

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

/**
 * A component for making simple checkbox in a label tag.
 */
const Toggle = ({labelText,  ...rest}) => (
  <label>
    <input {...rest} value={labelText} type="checkbox" />
    {labelText}
  </label>
)

Toggle.propTypes = {
  labelText: PropTypes.string.isRequired,
}

/**
 *
 * Component that is responsible for opening all the sites selected,
 * using the search value provided in the search input.
 */
export default class MultiSearch extends React.Component {
  constructor(props) {
    super(props)

    // this.japaneseCharacters = /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/

    this.state = {
      searchValue: '',
      searchError: '',
    }
  }

  onSubmit = (e) => {
    e.preventDefault()

    // Don't submit if there is an error
    if (this.state.searchError.length > 0) {
      return
    }

    // Search all the sites that have been checked using the search value provided from state.searchValue
    Object.keys(this.props.initialSites)
       .filter(toggleValue => this.props.initialSites[toggleValue].checked)
       .forEach((toggleValue) => {
         window.open(
           this.props.initialSites[toggleValue].url
           .replace(this.props.searchTermCode, this.state.searchValue))
    }) 
  }

  /**
   * Update the state.searchValue and state.searchError to match the text input.
   */
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
   const newToggles = this.props.initialSites
   newToggles[toggleToChange].checked = newValue
    this.setState(() => ({
      toggles: newToggles
   }))
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <SearchValueInput placeholder={this.props.searchBoxText} onChange={this.onSearchInputChange} value={this.state.searchValue} type="text"/>
        <ToggleContainer>
          {Object.keys(this.props.initialSites).map((toggleKey, index) => (
            <Toggle
              labelText={toggleKey}
              onChange={this.onToggle}
              checked={this.props.initialSites[toggleKey].checked}
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

MultiSearch.defaultProps = {
  searchTermCode: '$searchterm$',
  searchBoxText: 'Search multiple sites',
  initialSites: {}
}

MultiSearch.propTypes = {
  initialSites: PropTypes.objectOf(PropTypes.object),
  searchTermCode: PropTypes.string,
  searchBoxText: PropTypes.string
}