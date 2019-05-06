import React from "react"
import { Link } from "react-scroll";

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
                    style={{
                        color: `#718190`,
                        textDecoration: `none`,
                    }}
                >
                    {siteTitle}
                </Link>
            </h2>
            <Link
                style={{ padding: "0 5px", color: "#6c8ca5", float: "right" }} title="github"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            >
                Contact
        </Link>
            <Link
                style={{ padding: "0 5px", color: "#6c8ca5", float: "right" }} title="github"
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            >
                Projects
        </Link>
            <Link
                style={{ padding: "0 5px", color: "#6c8ca5", float: "right" }} title="github"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={800}
            >
                About
        </Link>
        </div>
    </header>
)

export default header