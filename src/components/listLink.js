import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  font-size: 1.7rem;
  text-transform: capitalize;

  :visited {
    color: white;
  }
  :hover {
    opacity: .75;
  }
`
const StyledLi = styled.li`
  background-color: orangered;
  margin: 1rem 0;
  padding: .5rem 1rem;
`

const ListLink = ({children, to}) => (
  <StyledLi>
    <StyledLink to={to}>
      {children}
    </StyledLink>
  </StyledLi>
)

export default ListLink