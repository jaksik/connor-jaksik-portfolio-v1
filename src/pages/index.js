import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

const IndexPage = () => {

  return (
    <>

        {/* SEO keywords */}
        <SEO title="Home" keywords={[`connor`, `jaksik`, `web`, `developer`, `denver`, `colorado`]} />

        {/* Cover Video */}
        <div className="cover-container">
          <video autoplay="true" muted loop id="myVideo" style={{position:`fixed`}}>
            <source type="video/mp4" src="https://mynewbucket20202.s3-eu-west-1.amazonaws.com/IMG_6212.mp4"/>
            Your browser does not support HTML5 video.
            </video>
            <div className="overlay"></div>
            <div className="heading" style={{position:`absolute`}}>
              <h4 className="header-text"><b>Hello </b></h4> <br/>
              <h1 className="header-text"><b>World</b></h1>
              <a href="/web-development"><button>Web Development</button></a>
              <a href="/adventuring"><button>Web Development</button></a>
            </div>
        </div>

    </>
  )
}

export default IndexPage

