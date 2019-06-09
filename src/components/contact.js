import React, { Component } from "react";

class Form extends Component {
    render() {
        return (
            <div>

                <h2 style={{ textAlign: `center` }}>Contact</h2>

                <form
                    name="contact"
                    method="post"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    style={{ width: `80%`, margin: `50px auto`, borderStyle: `ridge`, borderRadius: `25px`, backgroundColor: `#718190` }}
                >
                    <input style={{ display: `none` }} type="text" /><br />
                    <h4 style={{ color: `white` }}>Ideas, thoughts, coffee?</h4>
                    <label for="name">Name: *</label>
                    <input name="name" placeholder="  First and Last Name" type="text" /><br />
                    <label for="email">Email: *</label>
                    <input name="email" placeholder="  Email" type="email" /><br />
                    <label for="phone">Phone:</label>
                    <input name="phone" placeholder="  Phone Number" type="number" /><br />
                    <label for="message">Message:</label>
                    <textarea name="message" placeholder="Your Message Here: " type="textarea" /><br />
                    <button style={{ margin: `15px auto`, borderRadius: `10px` }}>Submit</button>
                </form>
            </div>
        )
    }
}

export default Form