import React from 'react'
import Img from "gatsby-image"
import './page-header.css'

const PageCoverImg = ({ image, title, subtitle, description }) => (
   <>
      <div style={{position: `relative`, height: `50vh`, overflow:`hidden`}}>
         <Img fluid={image} style={{position: `absolute`, zIndex:`1`, height: `70vh`, padding: `50vh`, width: `100%`}}/>
         <div className="header-overlay"></div>
         <div className="header-title" style={{width: `100%`}}>
            <h5>{title}</h5>
            <h2>{subtitle}</h2>
         </div>
      </div>
      <div className="slant">
         <div className="slant-container">
            <h4 className="slant-title">{title}</h4>
            <p className="slant-text">{description}</p>
         </div>
      </div>
   </>
)

export default PageCoverImg;

