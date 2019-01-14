import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import DayOfTheWeekCalculator from '../components/dayOfTheWeekCalculator'

const DayOfTheWeekPage = () => (
  <Layout>
    <SEO title="Languages" />
    <h1>This page Can be used to calculate the day of the week</h1>
    <DayOfTheWeekCalculator></DayOfTheWeekCalculator>
  </Layout>
)

export default DayOfTheWeekPage
