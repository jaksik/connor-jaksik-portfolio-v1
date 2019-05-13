import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CoverImg from "../components/cover-img"
import Form from "../components/form"
import About from "../components/about"
import Projects from "../components/project-container"
import Collapsible from "../components/collapse"
import Services from "../components/services-item"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  const { edges: projectImgData } = data.ProjectImgs;
  const { edges: photographyImgData } = data.Photography;

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      {/* <PhotoBox/> */}
      <CoverImg/>
      <About/>
      <Projects projectImgs={projectImgData} />
      {/* <Services/>  */}
      <Collapsible photographyImgs={photographyImgData}/>
      <h2 style={{ textAlign: `center`, margin: `50px auto` }}>Contact</h2>
      <Form />
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