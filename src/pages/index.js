import React from "react"
import CardBox from "../components/CardBox"
import PrimaryLayout from "../layouts/PrimaryLayout"
import { graphql } from "gatsby"

export default ({data}) => {
  return(
        <PrimaryLayout>
          {data.allMarkdownRemark.nodes.map(node=> (
            <div key = {node.frontmatter.id}>
            <CardBox
              image={node.frontmatter.image} 
              titleFirst={node.frontmatter.title} 
              descriptionFirst = {node.excerpt}
              readMore= {node.fields.slug}
            />
            </div>
          ))}
    </PrimaryLayout> 
  )
}
export const query = graphql`
{
  allMarkdownRemark{
    nodes{
      frontmatter{
        id
        title
        date
        keywords
        image
      }
      excerpt
      html
      fields{
        slug
      }
    }
  }
}
`