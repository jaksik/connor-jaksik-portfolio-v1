import React from "react"
import { Container, Row, Col } from 'reactstrap'
import data from "../data/skill-data.json"
import "./skills.css"

const skillContainer = () => {
    let counter = 0;
    return (
    <div className="skill-section">
        <Container style={{ background: `rgba(246, 246, 246, 0.9)`, borderRadius: `25px`, marginBottom: `25px` }}>

            <h2>Technical Skills</h2>
            {data.map((category, index) => {
                console.log(data.length)
                return (
                    <>
                        <Row>
                            <Col xs="6" style={{ borderRight: `2px solid black` }}>
                                <h5 style={{ margin: `14% auto`, textAlign: `center` }}>{category.title}</h5>
                            </Col>
                            <Col xs="6">
                                <ul>
                                    {category.items.map(item => (
                                        <li>{item}</li>
                                    ))}
                                </ul>
                            </Col>
                        </Row>
                        <div className={((index + 1) < data.length ? "bottom-border" : "")} style={{ margin: `25px 0px`}}></div>
                    </>
                )
            }
            )}

        </Container>
    </div>
)}

export default skillContainer
