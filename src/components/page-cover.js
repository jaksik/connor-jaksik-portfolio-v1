import React from 'react'
import Img from "gatsby-image"
import './page-cover.css'

const PageCoverImg = ({ image, title }) => (
   <>
   <div style={{position: `relative`, height: `50vh`, overflow:`hidden`}}>
      <Img fluid={image} style={{position: `absolute`, zIndex:`1`, height: `70vh`, padding: `50vh`, width: `100%`}}/>
      <div style={{width: `100%`}}>
         <h2 className="header-title">{title}</h2>
      </div>
   </div>
   <div className="slant">
         <div className="slant-container">
            <h2 className="slant-title">Capabilities & Services</h2>
            <p className="slant-text">The first thing we do is get know everything about your business. We learn what you do, how you do it, and (most importantly) why you do it. That's B1O2. Then we get busy. Really busy.</p>
         </div>
      </div>
   </>
)

export default PageCoverImg;

