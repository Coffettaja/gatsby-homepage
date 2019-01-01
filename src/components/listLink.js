import React from 'react'
import { Link } from 'gatsby'

const ListLink = ({children, to}) => (
  <li>
    <Link to={to}>
      {children}
    </Link>
  </li>
)

export default ListLink