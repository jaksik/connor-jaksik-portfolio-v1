import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CoverImg from "../components/cover-img"
import ContactSection from "../components/contact-section"

import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"

const IndexPage = ({ data }) => {

  return (
    <Layout>

      {/* SEO keywords */}
      <SEO title="Home" keywords={[`connor`, `jaksik`, `web`, `developer`, `denver`, `colorado`]} />

      {/* Cover Image */}
      <CoverImg/>


        <div style={{ paddingTop: `70px`}}>
        <ContactSection/>
        </div>

    </Layout>
  )
}

export default IndexPage

