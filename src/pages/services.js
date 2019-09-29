import React from "react"
import { graphql } from 'gatsby'
import { Row, Col } from "reactstrap"
import Layout from "../components/layout"
import PageCoverImg from "../components/page-cover"
import SEO from "../components/seo"
import servicesData from "../data/service-data"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.css'

const ServicesPage = ({ data }) => {
  console.log("data: ", data)
  return (
    <Layout>

        {/* SEO keywords */}
        <SEO title="Home" keywords={[`connor`, `jaksik`, `web`, `developer`, `denver`, `colorado`]} />
        
       <PageCoverImg image={data.file.childImageSharp.fluid} title="What We Do"/>

        {servicesData.map((service, index) => {
          return (
            <>
              <Row className="no-gutters justify-content-center">
                <Col>
                  <h2>{service.category}</h2>
                </Col>
              </Row>
              <Row className="no-gutters">
               {service.services.map((item, i) => {
                  return (
                    <Col xs="12" sm="6">
                        <p style={{textAlign:`center`}}>{item}</p>
                    </Col>
                  )
                })}
              </Row>
            </>
          )
        })}
    </Layout>
  )
}

export default ServicesPage

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