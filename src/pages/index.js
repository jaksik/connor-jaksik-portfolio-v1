import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CoverImg from "../components/cover-img"

import About from "../components/about-section"
import Projects from "../components/project-section"
import Photos from "../components/photography-section"
import Services from "../components/services-section"
import ContactSection from "../components/contact-section"

import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"

const IndexPage = ({ data }) => {

  //Project Image data from query below
  const { edges: projectImgData } = data.ProjectImgs;

  //Photography Image data from query below
  const { edges: photographyImgData } = data.Photography;

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

        {/* Services I provide for full stack web development */}

        {/* <Photos photographyImgs={photographyImgData} /> */}

        {/* Contact Section */}
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

    Photography: allFile(
      sort: { order: ASC, fields: [absolutePath] }
      filter: { relativePath: { regex: "/photography/.*.jpg/" } }
    ) {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            sizes(maxWidth: 600) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`;