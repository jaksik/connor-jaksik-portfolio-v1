import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CoverImg from "../components/cover-img"
import CoverTwo from "../components/cover-two"
import ScrollAnimate from "../components/scroll-animate"
import Contact from "../components/contact"
import About from "../components/about"
import SkillContainer from "../components/skill-container"
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
      <ScrollAnimate
      speed={6}
      >
      <CoverImg />

      </ScrollAnimate>

      <div style={{ marginTop: `` }}>
      </div>

      <div
        style={{
          width: `100%`,
          backgroundImage: `linear-gradient(rgba(0,0,0,0), rgb(246, 246, 246))`,
          marginBottom: `-25px`,
        }}>
        <About />
        <SkillContainer />
      </div>
      <Projects projectImgs={projectImgData} />
      {/* <Services/>  */}
      {/* <Photos photographyImgs={photographyImgData} /> */}
          <div style={{ background: `white`}}>
          <Contact />

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