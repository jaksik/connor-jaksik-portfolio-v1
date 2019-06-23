import React, { Component } from "react"
import { Link } from "react-scroll"
import Section from "./section"
import "./navbar.css"

class Header extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.toggle = this.toggle.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.state = {
            open: true,
            animate: null,
        }
    }

    // https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_navbar_hide_scroll

    componentDidMount() {
        window.addEventListener('scroll', e => this.handleScroll(e));
    }

    componentWillUnmount() {
        this.state.animate = null
    }

    handleScroll = (e) => {
        this.state.animate = this.refs.animate
        let yPosition = (String(e.currentTarget.scrollY / this.props.speed) + "px")
        this.state.animate.style.top = yPosition
    }

    toggle() {
        this.setState(state => ({ open: !state.open }));
    }

    render() {
        return (
            <div className="animate" ref="animate">
                <header id="nav-bar">
                    <Section>

                        <h2 id="nav-heading" style={{ margin: 0, padding: 0 }}>
                            <Link
                                href="/"
                                id="heading"
                                className="nav-title"
                            >
                                {this.props.siteTitle}
                            </Link>
                        </h2>

                        <div id="nav-items" className={'nav-items ' + (this.state.open ? '' : 'change')}>
                            <Link
                                activeClass="active"
                                to="contact"
                                className="nav-item"
                                spy={true}
                                smooth={true}
                                offset={-150}
                                duration={500}
                            >
                                Contact
                            </Link>
                            <Link
                                activeClass="active"
                                to="projects"
                                className="nav-item"
                                spy={true}
                                smooth={true}
                                offset={-150}
                                duration={500}
                            >
                                Projects
                            </Link>
                            <Link
                                activeClass="active"
                                to="about"
                                className="nav-item"
                                spy={true}
                                smooth={true}
                                offset={-150}
                                duration={500}
                            >
                                About
                            </Link>
                        </div>

                        <div className={'x-icon ' + (this.state.open ? '' : 'change')} onClick={this.toggle}>
                            <div className="bar1"></div>
                            <div className="bar2"></div>
                            <div className="bar3"></div>
                        </div>

                    </Section>
            </header>
            </div>
        )
    }
}

export default Header