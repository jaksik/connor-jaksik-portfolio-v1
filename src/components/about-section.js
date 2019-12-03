import React, { Component } from "react"
import { Row, Col, Button } from "reactstrap"
import Section from "./section"
import ScrollAnimate from "../components/scroll-animate"
import SkillSection from "./skill-section";
import resume from "../data/resume.pdf"
import "./about.css"

class AboutSection extends Component {
    render() {
        return (
            <div id="about-background">
                <Section>
                    <div id="about" name="about">

                        {/* A short bio */}
                        <Row>
                            <Col xs="12" md="8" style={{ background: `#f6f6f6`, borderRadius: `25px` }}>
                                <h1>Hi! I'm Connor</h1>
                                <p>I'm a web developer and outdoorsman from Denver, Colorado. Over the past few years coding has become my medium for expressing my artistic side. I really enjoy being able to work with others and create useful, practical, and inovative things that can instantly be shared with anyone in the world. It's exciting that technology is consistently improving allowing us web developers to never get bored and create things today that may of been impossible yesterday. I look forward to meeting and colaborating with new people in the future to see what we can create together. Scroll down to check out my technical skills and some of my projects.</p>
                                <p>Let's build something great together.</p>
                                <h5>Connor Jaksik</h5>
                            </Col>

                            {/* A profile image */}
                            <Col xs="12" md="4">
                                <div className="pro-img">
                                    {/* <ScrollAnimate speed={8}>
                                        <Image />
                                    </ScrollAnimate> */}

                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <div id="button-container">
                                <a href={resume} download >
                                    <Button color="info" id="resume-button">Resume</Button>
                                </a>
                            </div>
                        </Row>

                        <Row>
                            <Col xs="12">
                                <SkillSection />
                            </Col>
                        </Row>
                    </div>
                </Section>

            </div>
        )
    }
}


export default AboutSection
