import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { RadioGroup, RadioOption } from '../components/radioGroup'
import MultiSearch from '../components/multiSearch'

class LanguagesIndexPage extends React.Component {
  state = {
    // radioOptions holds the info that each value of a radio button displays,
    // that is, the search engine options that can be used in the MultiSearch.
    radioOptions: {
      'japanese': { // also the label of the created checkbox
        // initialSites are the default sites for that MultiSearch uses
        // for the search.
        sites: {
          // Object property name also used as the label text for the toggles
          // in MultiSearch.
          translation: {
            // The URL to open when searching. $searchterm$ is the default placeholder for the search term that will be inserted into the URL.
            url: 'https://jisho.org/search/$searchterm$',
            checked: true // Whether or not the toggle is 'on' by default.
          },
          kanji: {
            url: 'https://jisho.org/search/$searchterm$%20%23kanji',
            checked: false
          },
          images: {
            url: 'https://www.google.com/search?tbm=isch&q=$searchterm$',
            checked: true
          },
          pronunciation: {
            url: 'https://forvo.com/word/$searchterm$/',
            checked: false
          },
          dictionary: {
            url: 'https://dictionary.goo.ne.jp/srch/jn/$searchterm$/m0u/',
            checked: true
          },
          wiki: {
            url: 'https://ja.wikipedia.org/wiki/$searchterm$',
            checked: false
          },
          example: {
            url: 'https://ejje.weblio.jp/sentence/content/$searchterm$',
            checked: true
          },
        }
      },
      'korean': {
        sites: {
          'in English': {
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
    },
    selectedOption: '',
    currentSites: {},
  }

  /**
   * After mounting, set the initial selection
   */
  componentDidMount = () => {
    const initialSelection = 'japanese' // One of the objects in state.radioOptions
    const initialSites = this.state.radioOptions[initialSelection].sites
    this.setState(() => ({
      selectedOption: initialSelection,
      currentSites: initialSites
    }))
  }

  /**
   * Set the state.currentSites to match the selected radio button.
   */
  onChange = (e) => {
    const value = e.target.value
    let currentSites = this.state.radioOptions[value].sites

    // for (let i = 0; i < this.state.radioOptions.length; i++) {
      // if (this.state.radioOptions[i].value === value) {
        // currentSites = this.state.radioOptions[i].initialSites
      // }
    // }



    this.setState(() => ({
      selectedOption: value,
      currentSites
    }))
  }

  addSite = () => {
    const newToggle = {
      url: '#',
      checked: false
    }
    
  }

  render() {
    return (
      <Layout>
        <SEO title="Languages" />
        <RadioGroup name="search" value={this.state.selectedOption} onChange={this.onChange}>
          {Object.keys(this.state.radioOptions).map((option, index) => {
          return (
            <RadioOption value={option} key={index}>{option}</RadioOption>
          )})}
        </RadioGroup>
        <MultiSearch
          searchBoxText={`Search ${this.state.selectedOption}`}
          sites={this.state.currentSites}
          onAddToggle={this.addSite}
        ></MultiSearch>
      </Layout>
    )
  }
}

export default LanguagesIndexPage
