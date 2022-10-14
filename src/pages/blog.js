import React from 'react'
import { graphq, link } from 'gatsby'
import Layout from '../components/layout'
import { title } from '../../config/config'

export const query = graphql
    query {
        wpgraphql {
            posts {
                nodes {
                    Id
                    title
                    uri
                    exerpt
                }
            }
        }
    }


const Blog = ({ data }) => {

    const post = data.wpgraphql.posts.nodes

    return (
        <layout>
            {posts.map(post =>(
                <article key={post.id}>
                    <h2>
                        <link to={/blog/${post.uri}} dangerouslysetinnerHTML={{ __html: post.title}} />
                        <div dangerouslySetInnerHTML={{ __html: post.exerpt}} />

                    </h2>
                </article>
            ))}
        </layout>
    )
}

export default blog