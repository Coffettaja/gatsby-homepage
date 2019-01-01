import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'
import ListLink from './listLink'

const Header = ({ siteTitle }) => (
  <div>
    <div>
    <Link to="/">
      {siteTitle}
    </Link>
    </div>
    <nav>
      <ul>
        <ListLink to="/memory">Memory</ListLink>
        <ListLink to="/languages">Languages</ListLink>
        <ListLink>Books</ListLink>
        <ListLink>About me</ListLink>
      </ul>
    </nav>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
