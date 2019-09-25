import React from 'react'
import Img from "gatsby-image"
import { Row, Col } from "reactstrap"

import './page-cover.css'

const PageCoverImg = ({ image, title }) => (
   <div style={{position: `relative`, height: `50vh`, overflow:`hidden`}}>
      <Img fluid={image} style={{position: `absolute`, zIndex:`1`, height: `50vh`, padding: `50vh`, width: `100%`}}/>
      <div style={{width: `100%`}}>
         <h2 style={{position: `absolute`, zIndex:`2`, top: `50%`, textAlign: `center`}}>{title}</h2>
      </div>
   </div>
)

export default PageCoverImg;

