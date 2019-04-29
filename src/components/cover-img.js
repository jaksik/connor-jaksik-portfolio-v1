import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className }) => (
  <StaticQuery query={graphql`
      query {
        desktop: file(relativePath: { eq: "mountain-top.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
          style={{ minHeight: `700px`, color: `white` }}
        >
          <h1
            style={{
              margin: `6% auto`,
              maxWidth: 960,
              padding: `0px 1.0875rem 1.45rem`,
              paddingTop: 0,
            }}>
            Web Development<br />for the<br />Modern Web by<br />Connor Jaksik
          </h1>
        </BackgroundImage>
      )
    }
    }
  />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  background-repeat: repeat-y;
  background-size: cover;
`

export default StyledBackgroundSection