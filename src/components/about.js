import React, { Component } from "react";
import Image from "./image"
import { Container, Row, Col } from 'reactstrap';
import SkillContainer from "./skill-container"
import ScrollAnimate from "../components/scroll-animate"

class AboutSection extends Component {
    render() {
        return (
            <div
                id="about"
                name="about"
                style={{
                    margin: `85vh auto 0`,
                    padding: `0px 1.0875rem 1.45rem`,
                    paddingTop: 0,
                    width: `100%`,
                    zIndex: `1`,
                    maxWidth: 960,
                    backgroundImage: `linear-gradient(rgba(0,0,0,0), rgb(246, 246, 246))`,

                }}>
                    
                <Row justify="center">
                    <Col xs="12" md="8" style={{ background: `white` }}>
                   
                    <h1>Hi! I'm Connor</h1>

                        <p>I'm a web developer and outdoorsman from Denver, Colorado. Over the past few years coding has become my medium for expressing my artistic side and anxious mind. I really enjoy being able to work with others and create useful, practical, and inovative things that can instantly be shared with anyone in the world. It's exciting that technology is consistently improving allowing us web developers to never get bored and create things today that may of been impossible yesterday. I look forward to meeting and colaborating with new people in the future to see what we can create together. Scroll down to check out my technical skills and some of my projects.</p>
                        <p>Let's build something great together.</p>
                        <h5>Connor Jaksik</h5>
                    </Col>
                    <Col xs="10" md="4" style={{ marginBottom: `1.45rem`, maxWidth: `300px`, margin: `0 auto`, height: `400px` }}>
                        <ScrollAnimate
                    speed={8}
                    >
                        <Image />

                    </ScrollAnimate>
                    </Col>
                </Row>
            </div>
        )
    }
}


export default AboutSection