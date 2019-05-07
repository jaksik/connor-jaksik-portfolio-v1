import React, { Component } from "react";
import Image from "./image"
import { Row, Col } from 'reactstrap';
import SkillContainer from "./skill-container"

class AboutSection extends Component {
    render() {
        return (
            <div
                id="about"
                name="about"
                style={{
                    margin: `0 auto`,
                    maxWidth: 960,
                    padding: `0px 1.0875rem 1.45rem`,
                    paddingTop: 0,
                }}
            >
                <h1 style={{ marginTop: `21.6px` }}>Hi! I'm Connor</h1>
                <Row>
                    <Col xs="12" md="8">
                        <p>I'm a web developer and outdoorsman from Denver, Colorado. Over the past few years coding has become my medium for expressing my artistic side and anxious mind. I really enjoy being able to work with others and create useful, practical, and inovative things that can instantly be shared with anyone in the world. It's exciting that technology is consistently improving allowing us web developers to never get bored and create things today that may of been impossible yesterday. I look forward to meeting and colaborating with new people in the future to see what we can create together. Scroll down to check out my technical skills and some of my projects.</p>
                        <p>Let's build something great together.</p>
                        <h5>Connor Jaksik</h5>
                    </Col>
                    <Col xs="12" md="4" style={{ marginBottom: `1.45rem`, maxWidth: `300px` }}>
                        <Image />
                    </Col>
                </Row>
                <SkillContainer />
            </div>
        )
    }
}


export default AboutSection