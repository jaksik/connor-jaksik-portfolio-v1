/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Navbar from "./navbar"
import CoverImg from "./cover-img"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Navbar siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            // maxWidth: 960,
            // padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
        </div>
        <div style={{ 
                height: `100px`, 
                background: `#718190`, 
                color: `white`,
                paddingTop: `20px` 
              }}>
          <footer
            style={{
              textAlign: `center`,
              width: `100%`
            }}>
            <strong>
              © {new Date().getFullYear()}, Built by
    {` `}
              Connor Jaksik
            </strong>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
