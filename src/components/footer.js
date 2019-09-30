import React from 'react'
import { Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './footer.css'

const Footer = () => (
    <div style={{background:`#93da49`, paddingTop: `50px`}}>

        <Row className="no-gutters">

            <Col xs="12" md="3" className="offset-md-1">
                <h2 style={{textAlign:`center`}}>Go ahead, ask us anything!</h2>
                <p className="header-text">Anything at all.</p>
            </Col>

            <Col xs="12" md="8">
                <Row className="no-gutters">
                    <Form inline>
                        <Col xs="12" md="5">
                            <FormGroup>
                                <input className="footer-input"  type="text" name="first" id="firstName" placeholder="First Name *" className="footer-input"/>
                            </FormGroup>
                        </Col>
                            {' '}
                        <Col xs="12" md="5">
                            <FormGroup>
                                <input type="text" name="last" id="lastName" placeholder="Last Name *" className="footer-input"/>
                            </FormGroup>
                        </Col>
                            {' '}
                        <Col xs="12" md="5">
                            <FormGroup>
                                <input type="email" name="email" id="exampleEmail" placeholder="Email *" className="footer-input"/>
                            </FormGroup>
                        </Col>
                            {' '}
                        <Col xs="12">
                            <Row className="no-gutters justify-content-center justify-content-xs-start">
                                <Button outline color="success">Submit</Button>
                            </Row>
                        </Col>
                    </Form>
                </Row>
            </Col>
           
        </Row>

        <p style={{textAlign:`center`, padding:`50px`}}>© 2019 Connor Jaksik All Rights (and some wrongs) Reserved. For those of you in the Witness Protection Program, here's our Privacy Policy.</p>
    </div>
)

export default Footer