import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  color: palevioletred;
  text-decoration: none;
  font-size: 2rem;
  background-color: #111;
  width: 45rem;
  margin-bottom: 2rem;
  min-height: 33rem;
  display: block;
  padding: 2rem 2rem;
  border-radius: 4px;
  box-shadow: 0 2rem 3rem rgba(0,0,0, .3);
`

const Heading = styled.h2`
  font-size: 2.2rem;
  color: white;
`

const Description = styled.p`
  color: #ff9;
`


const BoxLink = ({title, description, to}) => (
  <StyledLink to={to}>
    <Heading>{title}</Heading>
    <Description>{description}</Description>
  </StyledLink>
)

export default BoxLink