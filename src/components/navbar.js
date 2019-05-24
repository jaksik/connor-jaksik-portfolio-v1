import React from "react"
import { Link } from "react-scroll";
import "./style.css"

const header = ({ siteTitle }) => (
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
                    href="/"
                    id="heading"
                    className="nav-title"
                    style={{
                        color: `#718190`,
                        textDecoration: `none`,
                    }}
                >
                    {siteTitle}
                </Link>
            </h2>
            <div id="nav-items">
                <Link
                    style={{ padding: "0 5px", color: "#6c8ca5" }}
                    activeClass="active"
                    to="contact"
                    className="nav-item"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1000}
                >
                    Contact
                </Link>
                <Link
                    style={{ padding: "0 5px", color: "#6c8ca5" }}
                    activeClass="active"
                    to="photos"
                    className="nav-item"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={800}
                >
                    Photos
                </Link>
                <Link
                    style={{ padding: "0 5px", color: "#6c8ca5" }}
                    activeClass="active"
                    to="projects"
                    className="nav-item"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >
                    Projects
                </Link>
                <Link
                    style={{ padding: "0 5px", color: "#6c8ca5" }}
                    activeClass="active"
                    to="about"
                    className="nav-item"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >
                    About
                </Link>
            </div>
        </div>
    </header>
)

export default header