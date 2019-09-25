import React from "react"
import { graphql, StaticQuery } from 'gatsby'
import { Row, Col } from "reactstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import CoverImg from "../components/cover-img"

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

const IndexPage = ({ data }) => {
  console.log("data: ", data)
  return (
    <Layout>

        {/* SEO keywords */}
        <SEO title="Home" keywords={[`connor`, `jaksik`, `web`, `developer`, `denver`, `colorado`]} />
        

        <div className="img-one">
          <Img fluid={data.mobileImage.childImageSharp.fluid}/>
        </div>

        <div className="slant" style={{background:``,}}>
          <Row>
            <Col xs="12" sm="6">
              <h2>What We Do</h2>
            </Col>
            <Col xs="6" sm="3">
              <ul>
                <li>Web Development</li>
                <li>Web Design</li>
              </ul>
            </Col>
            <Col xs="6" sm="3">
              <ul>
                <li>Consulting</li>
                <li>SEO</li>
              </ul>
            </Col>
          </Row>
        </div>

        <div>
          <h2>Staying on top of tech trends so you dont have to</h2>
        </div>

        <div>
          <Row>
            <Col xs="6" sm="6">
              "also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." -- Chandler            
              </Col>
              <Col xs="6" sm="6">
              "also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." -- Chandler            
              </Col>
              <Col xs="6" sm="6">
              "also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." -- Chandler            
              </Col>
          </Row>
        </div>

        <div className="slant" style={{background:``,}}>
          <Row>
            <Col xs="12" sm="6">
              <h2>What We Do</h2>
            </Col>
            <Col xs="12" sm="6">
              <ul>
                <li>Web Development</li>
                <li>Web Design</li>
              </ul>
            </Col>
          </Row>
        </div>

        {/* <div className="slant">
          <p>Staying on top of the tech trends and creating our own to provide an amazing experience</p>
        </div>

        <div className="">
          <h2>What We Do</h2>
          <ul>
            <li>Web Development</li>
            <li>Web Design</li>
          </ul>
        </div> */}

    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    mobileImage: file(relativePath: { eq: "mountain-top.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`