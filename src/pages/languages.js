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
          dictionary: {
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
          definition: {
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
        }
      }
    ],
    selectedOption: 'japanese',
    currentSites: {},
  }

  onChange = (e) => {
    const value = e.target.value
    let currentSites = {}

    for (let i = 0; i < this.state.radioOptions.length; i++) {
      if (this.state.radioOptions[i].value === this.state.selectedOption) {
        currentSites = this.state.radioOptions[i].initialSites
        console.log(currentSites)
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
