import React, { Component } from "react"
import Container from "./container"
import Form from "./form"

class ContactSection extends Component {
    render() {
        return (
            <Container background="white">
                <div id="contact" name="contact">
                    <Form />
                </div>
            </Container>
        )
    }
}

export default ContactSection