import React from "react"
import { Link } from "gatsby"
import projects from "../data/project-data.json"
import { Container, Row, Col } from 'reactstrap';
import "./projects.css"

const projectContainer = () => (
    <>
    <h2 style={{ textAlign: `center`, marginBottom: `25px` }}>Some of My Work</h2>
    <Row>
        {projects.map(project => (
            <Col xs="12" md="4">
                <div id={project.id}></div>
                <div>
                    <h5>{project.title}</h5>
                    <p>{project.description}</p>
                </div>
            </Col>
        ))}
    </Row>
    </>
)

export default projectContainer

