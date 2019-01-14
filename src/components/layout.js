import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'
import styled from 'styled-components'

const Container = styled.div`
  margin: 2.5rem auto;
  width: 65%;
  background-color: hsl(208, 100%, 95%);
  padding: 5rem 6rem;
  box-shadow: 0.2rem 1rem 3rem rgba(0,0,0, 0.2);
`

const Footer = styled.footer`
  background-color: hsl(197, 73%, 41%);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 5rem;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Container>
          {children}
        </Container>
        <Footer>
          © 2019, Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
