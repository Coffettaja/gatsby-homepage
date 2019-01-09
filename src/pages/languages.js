import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import MultiSearch from '../components/multiSearch'

const LanguagesIndexPage = () => (
  <Layout>
    <SEO title="Languages" />
    <h1>Languages page</h1>
    <MultiSearch language="jp"></MultiSearch>
  </Layout>
)

export default LanguagesIndexPage
