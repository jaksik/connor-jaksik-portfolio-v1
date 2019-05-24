import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CoverImg from "../components/cover-img"
import Contact from "../components/contact"
import About from "../components/about"
import Projects from "../components/project-container"
import Photos from "../components/photography"
import Services from "../components/services"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {

  //Using the images we queried below
  //Project Images
  const { edges: projectImgData } = data.ProjectImgs;
  //Photography Images
  const { edges: photographyImgData } = data.Photography;

  return (
    <Layout>
      <SEO title="Home" keywords={[`connor`, `jaksik`, `web`, `developer`, `denver`, `colorado`]} />
      <CoverImg/>
      <About/>
      <Projects projectImgs={projectImgData} />
      {/* <Services/>  */}
      <Photos photographyImgs={photographyImgData}/>
      <Contact />
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