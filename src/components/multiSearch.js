import React from 'react'

export default class MultiSearch extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searchValue: '',
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

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input onChange={this.onSearchInputChange} value={this.state.searchValue} type="text"/>
        <button>MultiSearch</button>
      </form>
    )
  }
}