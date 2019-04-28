import React from "react"
import { Row, Col } from 'reactstrap';

const categoryRow = (props) => (
    <div>
        <Row>
            <Col xs="6" style={{ borderRight: `2px solid black` }}>
                <h5 style={{ margin: `14% auto`, textAlign: `center` }}>{props.title}</h5>
            </Col>
            <Col xs="6">
                <ul>
                    {props.items.map(item => (
                        <li>{item}</li>
                    ))}
                </ul>
            </Col>
        </Row>
        <div style={{ margin: `25px 0px`, borderBottom: `2px solid black` }}>
            
        </div>
    </div>
)

export default categoryRow