import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { RadioGroup, RadioOption } from '../components/radioGroup'
import MultiSearch from '../components/multiSearch'

class LanguagesIndexPage extends React.Component {
  state = {
    radioOptions: [
      {
        value: 'japanese',
        initialSites: {
          translation: {
            labelText: 'dictionary',
            url: 'https://jisho.org/search/$searchterm$',
            checked: true
          },
          kanji: {
            labelText: 'kanji',
            url: 'https://jisho.org/search/$searchterm$%20%23kanji',
            checked: false
          },
          images: {
            labelText: 'image',
            url: 'https://www.google.com/search?tbm=isch&q=$searchterm$',
            checked: true
          },
          pronunciation: {
            labelText: 'pronunciation',
            url: 'https://forvo.com/word/$searchterm$/',
            checked: false
          },
          dictionary: {
            labelText: 'definition',
            url: 'https://dictionary.goo.ne.jp/srch/jn/$searchterm$/m0u/',
            checked: true
          },
          wiki: {
            labelText: 'wiki',
            url: 'https://ja.wikipedia.org/wiki/$searchterm$',
            checked: false
          },
          example: {
            labelText: 'example',
            url: 'https://ejje.weblio.jp/sentence/content/$searchterm$',
            checked: true
          },
        }
      },
      {
        value: 'korean',
        initialSites: {
          'in English': {
            labelText: 'dictionary',
            url: 'https://endic.naver.com/search.nhn?sLn=en&searchOption=entry_idiom&query=$searchterm$',
            checked: true
          },
          'in Japanese': {
            url: 'http://www.kpedia.jp/s/1/$searchterm$',
            checked: true
          },
          images: {
            labelText: 'image',
            url: 'https://www.google.com/search?tbm=isch&q=$searchterm$',
            checked: true
          },
          pronunciation: {
            labelText: 'pronunciation',
            url: 'https://forvo.com/word/$searchterm$/',
            checked: false
          },
          wiki: {
            labelText: 'wiki',
            url: 'https://ja.wikipedia.org/wiki/$searchterm$',
            checked: false
          },
        }
      }
    ],
    selectedOption: '',
    currentSites: {},
  }

  componentDidMount = () => {
    const initialSelectionIndex = 1
    const {value, initialSites} = this.state.radioOptions[initialSelectionIndex]
    this.setState(() => ({
      selectedOption: value,
      currentSites: initialSites
    }))
  }

  onChange = (e) => {
    const value = e.target.value
    let currentSites = {}

    for (let i = 0; i < this.state.radioOptions.length; i++) {
      if (this.state.radioOptions[i].value === value) {
        currentSites = this.state.radioOptions[i].initialSites
      }
    }

    this.setState(() => ({
      selectedOption: value,
      currentSites
    }))
  }

  render() {
    return (
      <Layout>
        <SEO title="Languages" />
        <h1>Languages page</h1>
        <RadioGroup name="search" value={this.state.selectedOption} onChange={this.onChange}>
          {this.state.radioOptions.map((option, index) => (
            <RadioOption value={option.value} key={index}>{option.value}</RadioOption>
          ))}
        </RadioGroup>
        <MultiSearch
          searchBoxText={`Search ${this.state.selectedOption}`}
          searchTermCode="$searchterm$" // marks the place in the URL where the search value should be placed
          initialSites={this.state.currentSites}
        ></MultiSearch>
      </Layout>
    )
  }
}

export default LanguagesIndexPage
