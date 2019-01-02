import React from 'react'
import { graphql } from 'gatsby'

const Template = ({data}) => {
  const post = data.markdownRemark

  return (
    <div>
      asdasd
    </div>
  )
}

export default Template

/*
<h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{__html: post.html}}></div>
       */
// export const postQuery = graphql`
//   query BlogPostByPath($path: String!) {
//     markdownRemark(frontmatter: { path: { eq: $path }}) {
//       html
//       frontmatter {
//         path
//         title
//         description
//         author
//         date
//       }
//     }
//   }
// `