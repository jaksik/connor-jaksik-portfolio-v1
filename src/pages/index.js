import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SkillContainer from "../components/skill-container"
import SEO from "../components/seo"
import Form from "../components/form"
import { Row, Col } from 'reactstrap';
import Container from "../components/container"
import Projects from "../components/project-container"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"

const IndexPage = ({ data }) => {
  const { edges: projectImgData } = data.ProjectImgs;
  return (
    <>
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Container>
          <h1 style={{ marginTop: `21.6px` }}>Hi! I'm Connor</h1>
          <Row>
            <Col xs="12" md="8">
              <p>I'm a web developer and outdoorsman from Denver, Colorado. Over the past few years coding has become my medium for expressing my artistic side and anxious mind. I really enjoy being able to work with others and create useful, practical, and inovative things that can instantly be shared with anyone in the world. It's exciting that technology is consistently improving allowing us web developers to never get bored and create things today that may of been impossible yesterday. I look forward to meeting and colaborating with new people in the future to see what we can create together. Scroll down to check out my technical skills and some of my projects.</p>
              <p>Let's build something great together.</p>
              <h5>Connor Jaksik</h5>
            </Col>
            <Col xs="12" md="4" style={{ marginBottom: `1.45rem`, maxWidth: `300px` }}>
              <Image />
            </Col>
          </Row>
          <SkillContainer />
        </Container>
      </Layout>
      <Projects projectImgs={projectImgData}/>
      <h2 style={{ textAlign: `center`, margin: `50px auto` }}>Contact</h2>
      <Form />
      <div style={{height: `100px`, background: `#718190`}}>
      <footer
        style={{
          textAlign: `center`,
          width: `100%`
        }}>
        © {new Date().getFullYear()}, Built by
    {` `}
        Connor Jaksik
      </footer>
      </div>
    </>
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
`;