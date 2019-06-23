import React, { Component } from "react";
import { Row, Col, Collapse } from 'reactstrap'
import Section from "./section"
import Img from "gatsby-image"
import projects from "../data/project-data.json"
import "./style.css"


class ProjectSection extends Component {
    constructor(props) {
        super(props);
        this.categories = ["Show All", "HTML", "React", "MySQL", "Mongo DB"]
        this.state = {
            filterOpen: false,
            displayedProjects: projects
        }
    }

    toggleFilter = () => {
        this.setState(state => ({ filterOpen: !state.filterOpen }));
    }

    handleFiltering = (category) => {
        if (category === "Show All") {
            this.setState({
                displayedProjects: projects
            })
        } else {
            const displayedProjects = projects.filter(project => project.category === category);
            this.setState({ displayedProjects: displayedProjects })
        }

    }

    render() {
        const projectImgs = this.props.projectImgs;
        return (
            <Section background="#f6f6f6">
                <div id="projects" name="projects">
                    <h2>Some of My Work</h2>

                    <Row>
                        <button onClick={this.toggleFilter}>Filter Projects</button>
                    </Row>

                    <Row>
                        <Collapse isOpen={this.state.filterOpen}>
                            <p>Show projects built using:</p>
                            <div>
                                {this.categories.map(category => {
                                    return (
                                        <button onClick={() => this.handleFiltering(category)}>{category}</button>
                                    )
                                })}
                            </div>
                        </Collapse>
                    </Row>

                    <Row style={{ paddingTop: `40px` }}>
                        {this.state.displayedProjects.map(project => {
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
                                        <div style={{ borderTop: `4px solid #718190` }}>
                                            <h5>{project.title}</h5>
                                            <p>{project.description}</p>
                                            <strong><a href={project.url} target="_blank">Demo</a></strong><br />
                                            <strong><a href={project.github} target="_blank">Source Code</a></strong>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>

                </div>
            </Section>
        )
    }
}

export default ProjectSection

