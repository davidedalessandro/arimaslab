import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../layouts/index-6'
import Seo from '../components/seo'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {
        <h1>Ciao</h1>
          /*<article key={node.id}>
            <h2>
              <Link to={`/blog/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
          </article>*/
      }
    </Layout>
  )
}

/*export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
      }
    }
  }
`*/

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage