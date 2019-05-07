import React from "react"
import data from "../data/skill-data.json"
import { Container, Row, Col } from 'reactstrap'

const skillContainer = () => (
    <Container>
        <h2 style={{ textAlign: `center`, marginBottom: `25px` }}>Technical Skills</h2>
        {data.map(category => (
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
                <div style={{ margin: `25px 0px`, borderBottom: `2px solid black` }}></div>
            </>
        ))}

    </Container>
)

export default skillContainer