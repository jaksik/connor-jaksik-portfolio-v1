import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'
import ScrollAnimate from './scroll-animate'

const BackgroundSection = ({ className }) => (
    <StaticQuery query={graphql`
      query {
        desktop: file(relativePath: { eq: "limitless.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
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
                         
          >
             <ScrollAnimate>
             <h1
              style={{
              margin: `150px auto`,
              maxWidth: 960,
              padding: `0px 1.0875rem 1.45rem`,
              paddingTop: 0,
              textAlign: `left`,
              color: `white`
            }}>
            Web Development<br />for the<br />Modern Web by<br />Connor Jaksik
          </h1>
             </ScrollAnimate>
          </BackgroundImage>
       )
     }
     }
    />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  background-position: top center;
  background-repeat: repeat-y;
  background-size: cover;
  position: absolute;
  z-index: -1;
  height: -webkit-fill-available;
`

export default StyledBackgroundSection