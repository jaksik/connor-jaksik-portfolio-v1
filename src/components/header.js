import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h2 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#718190`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h2>
      <a href="/contact"
        style={{ padding: "0 5px", color: "#6c8ca5", float: "right" }} title="github" >Contact</a>
      <a href="/about"
        style={{ padding: "0 5px", color: "#6c8ca5", float: "right" }} title="github" >Projects</a>
      <a href="/blog"
        style={{ padding: "0 5px", color: "#6c8ca5", float: "right" }} title="github" >About</a>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
