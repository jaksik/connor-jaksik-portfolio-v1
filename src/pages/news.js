import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import PageHeader from "../components/page-header"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.css'

const ContactPage = ({ data }) => {
  console.log("data: ", data)
  return (
    <Layout>

        {/* SEO keywords */}
        <SEO title="Home" keywords={[`connor`, `jaksik`, `web`, `developer`, `denver`, `colorado`]} />
        
       <PageHeader image={data.newsImage.childImageSharp.fluid} title="Hello World"/>

    </Layout>
  )
}

export default ContactPage

export const query = graphql`
  query {
    newsImage: file(relativePath: { eq: "capital.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`