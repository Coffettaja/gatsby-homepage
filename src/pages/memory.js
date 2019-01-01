import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import BoxLinkContainer from '../components/boxLinkContainer'

const MemoryIndexPage = () => (
  <Layout>
    <SEO title="Memory" />
    <h1>Here we will have links to other some stuff and links to other pages</h1>
    <p>Probably 'components' that are cool links to other stuff</p>
    <BoxLinkContainer></BoxLinkContainer>
  </Layout>
)

export default MemoryIndexPage
