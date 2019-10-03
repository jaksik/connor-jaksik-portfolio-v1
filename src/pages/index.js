import React from "react"
import { graphql, Link } from 'gatsby'
import { Container, Row, Col, Button } from "reactstrap"
import Carousel from "../components/carousel"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.css'

const IndexPage = ({ data }) => {
  console.log("data: ", data)
  return (
    <Layout>

        {/* SEO keywords */}
        <SEO title="Home" keywords={[`connor`, `jaksik`, `web`, `developer`, `denver`, `colorado`]} />

        <div style={{position: `relative`, height: `65vh`, overflow:`hidden`}}>
         <Img fluid={data.mobileImage.childImageSharp.fluid} style={{position: `absolute`, zIndex:`1`, height: `65vh`, width: `100%`}}/>
         <div className="header-overlay"></div>
         <div className="header-title" style={{width: `100%`}}>
            <h5>OUR WHY</h5>
            <h1>BUSINESS FIRST. <br/>ONLINE SECOND.</h1>
            <h5>We're an employee only full service agency specializing in ecommerce and strategic digital experiences.</h5>
            <Button style={{marginRight:`25px`}} color="success">Our Work</Button><Button outline color="success">Our Work</Button>
         </div>
        </div>

        <div className="slant">
          <Container>
            <Row className="no-gutters justify-content-center" style={{padding:`30px`}}>
                <h2>How can we help you?</h2>
                <div className="w-100"></div>
                <div style={{maxWidth:`600px`}}>
                  <p>We'll identify your pain points, collaborate with you to define the real problems, and deliver digital solutions that support your business strategies.</p>
                </div>
                <div className="w-100"></div>
                <Link to="/services">
                  <Button color="success">Capabilities & Services</Button>
                </Link>
            </Row>

            <Row className="no-gutters justify-content-center" style={{padding:`30px`}}>
              <Col xs="12" md="4">
                <Img fluid={data.creative.childImageSharp.fluid} className="landing-image"/>
                <h5>Creative</h5>
                <p>Building the functionality, tools, and assets to fashion a look, feel, tone and experience consistent with your brand and your mission.</p>
              </Col>
              <Col xs="12" md="4">
                <Img fluid={data.marketing.childImageSharp.fluid} className="landing-image"/>
                <h5>Marketing</h5>
                <p>Creating seamless, reliable and effective solutions from engagement through post-purchase delight and back again.</p>
              </Col>
              <Col xs="12" md="4">
                <Img fluid={data.technology.childImageSharp.fluid} className="landing-image"/>
                <h5>Technology</h5>
                <p>Smart, strategic thinking that provides a pathway and a plan to successfully grow your business and your brand.</p>
              </Col>
            </Row>

            <Row className="no-gutters justify-content-center" style={{padding:`30px`}}>
              <h6>PORTFOLIO</h6>
              <div className="w-100"></div>

              <h4>Need proof?</h4>
              <div className="w-100"></div>

              <Link to="/projects">
                  <Button color="success">See Our Work</Button>
                </Link>
            </Row>

           
          </Container>

          


          <Row className="no-gutters justify-content-center">
              <div style={{maxWidth:`960px`}}>
              <Carousel/>
              </div>
            </Row>
        </div>
       <div className="">
       <video autoplay="true" muted loop id="">
            <source type="video/mp4" src="https://mynewbucket20202.s3-eu-west-1.amazonaws.com/IMG_6212.mp4"/>
            Your browser does not support HTML5 video.
            </video>
       </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    mobileImage: file(relativePath: { eq: "capital.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    creative: file(relativePath: { eq: "creative.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    marketing: file(relativePath: { eq: "marketing.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    technology: file(relativePath: { eq: "technology.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`