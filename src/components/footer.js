import React from 'react'
import { Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './footer.css'

const Footer = () => (
    <div style={{background:`#228b22`}}>

        <Row className="no-gutters">

            <Col xs="12" md="3" className="offset-md-1">
                <h2 style={{textAlign:`center`}}>Summit</h2>
                <p>remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop pu</p>
            </Col>

            <Col xs="12" md="8">
                <Row className="no-gutters">
                    <Form inline>
                        <Col xs="12" md="5">
                            <FormGroup>
                                <Label for="firstName" hidden>Email</Label>
                                <Input type="text" name="first" id="firstName" placeholder="First Name" />
                            </FormGroup>
                        </Col>
                            {' '}
                        <Col xs="12" md="5">
                            <FormGroup>
                                <Label for="lastName" hidden>Email</Label>
                                <Input type="text" name="last" id="lastName" placeholder="Last Name" />
                            </FormGroup>
                        </Col>
                            {' '}
                        <Col xs="12" md="5">
                            <FormGroup>
                                <Label for="exampleEmail" hidden>Email</Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
                            </FormGroup>
                        </Col>
                            {' '}
                        <Col xs="12">
                            <Row className="no-gutters justify-content-center justify-content-xs-start">
                                <Button>Submit</Button>
                            </Row>
                        </Col>
                    </Form>
                </Row>
            </Col>
           
        </Row>

        <p style={{textAlign:`center`, padding:`50px`}}>© 2019 Irish Titan All Rights (and some wrongs) Reserved. For those of you in the Witness Protection Program, here's our Privacy Policy.</p>
    </div>
)

export default Footer