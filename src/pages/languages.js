import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import MultiSearch from '../components/multiSearch'

const LanguagesIndexPage = () => (
  <Layout>
    <SEO title="Languages" />
    <h1>Languages page</h1>
    <p>Should basically just be a copy of the layout of memory page, but with different contents</p>
    <MultiSearch></MultiSearch>
  </Layout>
)

export default LanguagesIndexPage
