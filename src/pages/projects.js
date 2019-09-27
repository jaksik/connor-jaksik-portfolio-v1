import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageCoverImg from "../components/page-cover"

import Projects from "../components/project-section"

import 'bootstrap/dist/css/bootstrap.min.css';

const WorkPage = ({ data }) => {

  //Project Image data from query below
  const { edges: projectImgData } = data.ProjectImgs;

  return (
    <Layout>

      {/* SEO keywords */}
      <SEO title="Home" keywords={[`connor`, `jaksik`, `web`, `developer`, `denver`, `colorado`]} />
      <PageCoverImg image={data.file.childImageSharp.fluid} title="What We Do"/>

      <div style={{ background: `white` }}>

        {/* Projects Section */}
        <Projects projectImgs={projectImgData} />

      </div>

    </Layout>
  )
}

export default WorkPage

export const query = graphql`
  query allImgsQuery {
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
    file(relativePath: { eq: "mountain-top.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;