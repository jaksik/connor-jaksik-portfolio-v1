import React from "react"
import { graphql } from 'gatsby'
import { Row, Col } from "reactstrap"
import Layout from "../components/layout"
import PageCoverImg from "../components/page-cover"
import SEO from "../components/seo"

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

const IndexPage = ({ data }) => {
  console.log("data: ", data)
  return (
    <Layout>

        {/* SEO keywords */}
        <SEO title="Home" keywords={[`connor`, `jaksik`, `web`, `developer`, `denver`, `colorado`]} />
        
       <PageCoverImg image={data.file.childImageSharp.fluid} title="What We Do"/>


          <div className="slant" style={{background:`white`, color: `black`}}>
          <Row className="no-gutters">
            <Col xs="12">
              <h2>Capabilities and Services</h2>
            </Col>
            <Col xs="12">
              <p style={{textAlign:`center`}}>First thing we do is get to know your business, then we get to work.</p>
            </Col>
          </Row>
        </div>
    </Layout>
  )
}

export default IndexPage

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