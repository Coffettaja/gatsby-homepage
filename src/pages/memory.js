import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import BoxLinkContainer from '../components/boxLinkContainer'

//npm i gatsby-transformer-remark gatsby-plugin-catch-links !!!!
const MemoryIndexPage = ({data}) => (
  <Layout>
    <SEO title="Memory" />
    <h1>Here we will have links to other some stuff and links to other pages</h1>
    <p>Probably 'components' that are cool links to other stuff</p>
    
    <BoxLinkContainer></BoxLinkContainer>
  </Layout>
)


/*
{data.allMarkdownRemark.edges.map(post => (
      <div key={post.node.id}>
        <h3>{post.node.frontmatter.title}</h3>
        <h2>{post.node.frontmatter.description}</h2>
        <Link to={post.node.frontmatter.path}>Read more</Link>
      </div>
    ))}
*/
// export const pageQuery = graphql`
//   query {
//     allMarkdownRemark {
//       edges {
//         node {
//           id
//           frontmatter {
//             path
//             title
//             description
//             date
//             author
//           }
//         }
//       }
//     }
//   }
// `

export default MemoryIndexPage
