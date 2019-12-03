import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CoverImg from "../components/cover-img"

import About from "../components/about-section"
import Projects from "../components/project-section"
import ContactSection from "../components/contact-section"

import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"

const IndexPage = ({ data }) => {

  //Project Image data from query below
  const { edges: projectImgData } = data.ProjectImgs;

  return (
    <Layout>

      {/* SEO keywords */}
      <SEO title="Home" keywords={[`connor`, `jaksik`, `web`, `developer`, `denver`, `colorado`]} />

      {/* Cover Image */}
      <CoverImg />

      {/* About Section */}
      <div className="section-one">
        <About />
      </div>

      <div style={{ background: `white` }}>

        {/* Projects Section */}
        <Projects projectImgs={projectImgData} />

        <ContactSection />
      </div>

    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query allImgsQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    ProjectImgs: allFile(
      sort: { order: ASC, fields: [absolutePath] }
      filter: { relativePath: { regex: "/projects/.*.png/" } }
    ) {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            sizes(maxWidth: 320) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`