import React from "react"
import { Link } from "gatsby"
import projects from "../data/project-data.json"
import { Row, Col } from 'reactstrap';
import Container from "../components/container"
import "./projects.css"
import Img from "gatsby-image";


const projectContainer = (props) => {
    const projectImgs = props.projectImgs;

    return (
        <div style={{ background: `#f6f6f6` }}>
            <Container>
                <h2 style={{ textAlign: `center`, margin: `50px auto` }}>Some of My Work</h2>
                <Row>
                    {projects.map(project => {
                        const image = projectImgs.find(n => {
                            return n.node.relativePath === `projects/${project.img}`;
                        });
                        const imageSizes = image.node.childImageSharp.sizes;
                        return (
                            <Col xs="12" sm="6" md="4">
                                <div className="project-card">
                                    <Img
                                        title={project.name}
                                        alt="Screenshot of Project"
                                        sizes={imageSizes}
                                        className="card-img_src center-block"
                                    />
                                    <div style={{ borderTop: `4px solid #718190`}}>
                                        <h5>{project.title}</h5>
                                        <p>{project.description}</p>
                                    </div>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </div>
    )
}

export default projectContainer

