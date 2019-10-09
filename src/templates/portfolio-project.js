import React from "react"
import { graphql } from "gatsby"
import Img from 'gatsby-image';
import Layout from "../components/layout"
import Container from "../components/container"
import SEO from "../components/seo"

export default ({ data }) => {
  const info = data.markdownRemark
  console.log("info: ", data.markdownRemark.frontmatter.tags);



  return (
    <Layout>
      <SEO title="About Limitless Wake" keywords={info.frontmatter.tags} />
      <Container className="short-page">

        {/* About Page Title */}
        <h1>{info.frontmatter.title}</h1>
        <p style={{ textAlign: `center`, fontWeight:`bold`}}>{info.frontmatter.description}</p>
        {/* About Page Photo */}
        {/* <div style={{ maxWidth: `50%`, margin: `25px auto` }}>
          <Img fluid={info.frontmatter.image.childImageSharp.fluid} />
        </div> */}

        {/* About Page Body Text */}
        
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title  
        description
        tags
      }
    }
  }
`