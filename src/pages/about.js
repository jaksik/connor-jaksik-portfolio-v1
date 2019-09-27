import React from "react"
import { graphql } from 'gatsby'
import { Button } from "reactstrap"
import Layout from "../components/layout"
import PageCoverImg from "../components/page-cover"
import resume from "../data/resume.pdf"
import SEO from "../components/seo"

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.css'

const AboutPage = ({ data }) => {
  console.log("data: ", data)
  return (
    <Layout>

        {/* SEO keywords */}
        <SEO title="Home" keywords={[`connor`, `jaksik`, `web`, `developer`, `denver`, `colorado`]} />
        
       <PageCoverImg image={data.file.childImageSharp.fluid} title="Our Company"/>
       
       <a href={resume} download >
          <Button color="info" id="resume-button">Resume</Button>
      </a>

    </Layout>
  )
}

export default AboutPage

export const query = graphql`
  query {
    file(relativePath: { eq: "mountain-top.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`