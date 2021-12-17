import React from 'react'
import Header from "../components/Header"
import FooterMessage from "../components/FooterMessage"
import {graphql} from 'gatsby'

/* 
    calling title data and integrating 
    dangerouslySetInnerHTML so that HTML text renders and not the raw text
    slug is nothing but the new page, here in the below example first-blogpost is a slug
    http://localhost/first-blogpost
*/

const BlogpostLayout = ({data}) => {
    const post = data.markdownRemark;
    return(
        <div>
        <Header/>
                <div className="container">
                <div className="row justify-content-md-center pt-3">
                         <div className="col col-lg-6">
                            <h1>{post.frontmatter.title}</h1>
                            <div dangerouslySetInnerHTML={{__html: post.html}} />
                        </div>
                    </div>
               </div>
        <FooterMessage/>
    </div>   
    )
}
/* calling title data and integrating */
export default BlogpostLayout

export const query = graphql`
  query($slug: String!){
      markdownRemark(fields: {slug: {eq: $slug}}){
          html
          frontmatter {
              title
          }
      }
  }
  `