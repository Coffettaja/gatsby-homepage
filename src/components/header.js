import styled from 'styled-components'
import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'
import ListLink from './listLink'

const Container = styled.div`
  background-color: hsl(241, 98%, 13%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 15%;
  padding: 1.5rem;
  color: white;
`

const StyledLink = styled(Link)`
  text-align: center;
  font-size: 2.2rem;
  position: absolute;
  top: 2rem;
  left: 2.2rem;
  text-decoration: none;
  text-transform: uppercase;
  
  :visited {
    color: white;
  }

  :hover {
    opacity: .75;
  }
`

const Header = ({ siteTitle }) => (
  <Container>
    <StyledLink to="/">
      {siteTitle}
    </StyledLink>
    <nav>
      <ul>
        <ListLink to="/memory">Memory</ListLink>
        <ListLink to="/languages">Languages</ListLink>
        <ListLink to="/dayOfTheWeek">Day of the week calculator</ListLink>
        <ListLink to="#">About me</ListLink>
      </ul>
    </nav>
  </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
