import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import MultiSearch from '../components/multiSearch'

const LanguagesIndexPage = () => (
  <Layout>
    <SEO title="Languages" />
    <h1>Languages page</h1>
    <MultiSearch 
      searchBoxText="Search Japanese"
      searchTermCode="$searchterm$" // marks the place in the URL where the search value should be placed
      initialSites={
        {
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
      }
    ></MultiSearch>
  </Layout>
)

/*
{
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
},}



[
          {
            labelText: 'dictionary',
            url: 'https://jisho.org/search/$searchterm$',
            checked: true
          },
          {
            labelText: 'kanji',
            url: 'https://jisho.org/search/$searchterm$%20%23kanji',
            checked: false
          },
          {
            labelText: 'image',
            url: 'https://www.google.com/search?tbm=isch&q=$searchterm$',
            checked: true
          },
          {
            labelText: 'pronunciation',
            url: 'https://forvo.com/word/$searchterm$/',
            checked: false
          },
          {
            labelText: 'definition',
            url: 'https://dictionary.goo.ne.jp/srch/jn/$searchterm$/m0u/',
            checked: true
          },
          {
            labelText: 'wiki',
            url: 'https://ja.wikipedia.org/wiki/$searchterm$',
            checked: false
          },
          {
            labelText: 'example',
            url: 'https://ejje.weblio.jp/sentence/content/$searchterm$',
            checked: true
          },]
*/

export default LanguagesIndexPage
