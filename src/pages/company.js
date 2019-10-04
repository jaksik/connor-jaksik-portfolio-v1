import React from "react"
import { graphql } from 'gatsby'
import { Button } from "reactstrap"
import Layout from "../components/layout"
import PageHeader from "../components/page-header"
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
        
       <PageHeader 
        image={data.companyImage.childImageSharp.fluid} 
        title="Our Company" 
        subtitle="Our Culture, Team, and Careers" 
        description="Since 2004, we've been beating the Business First. Online Second. drum, and it's more than just a catchy (and trademarked!) saying. It’s a corporate philosophy. It dictates how we work, who we hire, and becomes a personal maxim for every Titan (check out their profiles for proof). We get to know your business, we get to know you, and most importantly, we work with you to eliminate the mystery typically shrouding the interwebs.  "
       />
       
       {/* <a href={resume} download >
          <Button color="info" id="resume-button">Resume</Button>
      </a> */}

      {/* <p>Since 2004, we've been beating the "Business First. Online Second." drum, and it's more than just a catchy (and trademarked!) saying. It’s a corporate philosophy. It dictates how we work, who we hire, and becomes a personal maxim for every Titan (check out their profiles for proof). We get to know your business, we get to know you, and most importantly, we work with you to eliminate the mystery typically shrouding the interwebs.</p> */}

    </Layout>
  )
}

export default AboutPage

export const query = graphql`
  query {
    companyImage: file(relativePath: { eq: "mountain-top.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`