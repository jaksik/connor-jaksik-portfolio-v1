import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

import 'bootstrap/dist/css/bootstrap.min.css';

const IndexPage = () => {

  return (
    <Layout>

        {/* SEO keywords */}
        <SEO title="Home" keywords={[`connor`, `jaksik`, `web`, `developer`, `denver`, `colorado`]} />

        {/* Cover Image */}
        <div style={{ paddingTop: `70px`}}>
            <h4>Hello</h4>
        </div>

    </Layout>
  )
}

export default IndexPage

