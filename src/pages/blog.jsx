import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from "../layouts/index-6"


class BlogPage extends Component {
  render (){
    return (
    <Layout pageTitle="Post Arimaslab">
      {
        data.allMdx.nodes.map(node => (
          <article key={node.id}>
            <h2>
              <Link to={`/blog/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
          </article>
        ))
      }
    </Layout>)
  }
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

export const Head = () => <Seo title="Post Arimaslab" />

export default BlogPage