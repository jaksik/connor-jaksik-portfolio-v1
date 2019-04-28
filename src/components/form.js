import React, { Component } from "react";

class Form extends Component {
    render() {
        return (
            <form
                name="contact"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
            // style={{ width: `80%`, margin: `10px auto`, borderStyle: `ridge`, borderRadius: `25px`, backgroundColor: `white`, padding: `20px`, maxWidth: `600px` }}
            >
                <input style={{ display: `none` }} type="text" /><br />
                <h5 style={{ textAlign: `center`, color: `black` }}>Let's Get Started</h5>
                <label for="name">Name: *</label>
                <input name="name" placeholder="  First and Last Name" type="text" /><br /><br />
                <label for="email">Email: *</label>
                <input name="email" placeholder="  Email" type="email" /><br /><br />
                <label for="phone">Phone: *</label>
                <input name="phone" placeholder="  Phone Number" type="number" /><br /><br />
                <label for="message">What Would You Like Build?</label><br />
                <textarea style={{ width: `100%` }} name="message" placeholder="  Describe the website you would like here" type="textarea" /><br />
                <button style={{ margin: `0px auto`, borderRadius: `10px`, textAlign: `center` }}>Submit</button>
            </form>
        )
    }
}

export default Form