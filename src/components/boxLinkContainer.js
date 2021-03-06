import React from 'react'
import BoxLink from './boxLink'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const BoxLinkContainer = () => (
  <Container>
    <BoxLink to="#" title="BoxLink 1" description="I don't know what to say about this stupid link"></BoxLink>
    <BoxLink title="BoxLink 2" description="Just more text to see this box link description as well"></BoxLink>
    <BoxLink title="BoxLink 3" description="I am not sure if this helpful at all"></BoxLink>
    <BoxLink title="BoxLink 4" description="Testing descriptions with different lengths just in case, so I will add some more text in this one."></BoxLink>
  </Container>
)

export default BoxLinkContainer