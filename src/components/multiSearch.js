import React from 'react'

export default class MultiSearch extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searchValue: '',
      language: 'jp',
      images: true,
      pronunciation: false,
      wiki: false,
      dictionary: true,
      kanjis: true,
      definition: false,
    }
  }

  onSubmit = (e) => {
    e.preventDefault()
    window.open(`https://www.google.com/search?tbm=isch&q=${this.state.searchValue}`)
    window.open(`https://forvo.com/word/${this.state.searchValue}/`)
    window.open(`https://ja.wikipedia.org/wiki/${this.state.searchValue}`)
    window.open(`https://jisho.org/search/${this.state.searchValue}`)
    window.open(`https://jisho.org/search/${this.state.searchValue}%20%23kanji`)
    window.open(`https://dictionary.goo.ne.jp/srch/jn/${this.state.searchValue}/m0u/`)
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

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input onChange={this.onSearchInputChange} value={this.state.searchValue} type="text"/>
        <div>
          <label>
            <input value="dictionary" checked={this.state.dictionary} onChange={this.toggleValue} type="checkbox"/>Dictionary
          </label>
          <label>
            <input value="kanjis" checked={this.state.kanjis} onChange={this.toggleValue} type="checkbox"/>Kanjis
          </label>
          <label>
            <input value="images" checked={this.state.images} onChange={this.toggleValue} type="checkbox"/>Images
          </label>
          <label>
            <input value="definition" checked={this.state.definition} onChange={this.toggleValue} type="checkbox"/>Definition
          </label>
          <label>
            <input value="pronunciation" checked={this.state.pronunciation} onChange={this.toggleValue} type="checkbox"/>Pronunciation
          </label>
          <label>
            <input value="wiki" checked={this.state.wiki} onChange={this.toggleValue} type="checkbox"/>Wikipedia
          </label>
        </div>
        <button>MultiSearch</button>
      </form>
      
    )
  }
}