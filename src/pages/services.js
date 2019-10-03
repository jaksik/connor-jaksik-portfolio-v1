import React from "react"
import { graphql } from 'gatsby'
import { Row, Col, Container } from "reactstrap"
import Layout from "../components/layout"
import PageHeader from "../components/page-header"
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
        
       <PageHeader image={data.file.childImageSharp.fluid} title="Capabilities and Services" subtitle="What We Do" description="The first thing we do is get know everything about your business. We learn what you do, how you do it, and (most importantly) why you do it. That's B1O2. Then we get busy. Really busy."/>

        <Container>
        {servicesData.map((category, index) => {
          console.log("Category: ", category)
          return (
              <Row className="no-gutters justify-content-center">
                <Col xs="12">
                  <h2>{category.title}</h2>
                </Col>
                {category.subcategories.map((subcategory, i) => {
                    return (
                      <Col xs="12" md="4">
                          <h6>{subcategory.title}</h6>
                          <ul>
                            {subcategory.services.map((service) => (
                              <li>{service}</li>
                            ))}
                          </ul>
                      </Col>
                    )
                  })}
              </Row>
          )
        })}
        </Container>
    </Layout>
  )
}

export default ServicesPage

export const query = graphql`
  query {
    file(relativePath: { eq: "capital.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`