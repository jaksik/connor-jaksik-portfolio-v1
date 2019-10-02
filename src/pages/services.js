import React from "react"
import { graphql } from 'gatsby'
import { Row, Col } from "reactstrap"
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

        {servicesData.map((service, index) => {
          return (
            <>
              <Row className="no-gutters justify-content-center">
                  <h2>{service.category}</h2>
              </Row>
              <Row className="no-gutters justify-content-center">
              <ul>
                {service.services.map((item, i) => {
                    return (
                          <li style={{textAlign:`center`}}>{item}</li>
                    )
                  })}
              </ul>
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
    file(relativePath: { eq: "capital.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`