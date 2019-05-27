import React, { Component } from "react"
import Img from "gatsby-image"
import './img.css'

class Photo extends Component {
    constructor(props) {
        super(props);
        this.Images = this.props.photographyImgs;
        this.props = props;
        this.toggle = this.toggle.bind(this);
        this.state = {
            open: true
        }
        console.log("props", props)
    }

    toggle() {
        this.setState(state => ({ open: !state.open }));
        console.log("state:", this.state.open)
    }

    render() {
        return (
            <>
                <div onClick={this.toggle}>
                    <span onClick={this.toggle} class="close">×</span>
                    <Img
                        title="photography"
                        alt="Screenshot of Project"
                        sizes={this.props.imageSizes}
                        className="card-img_src center-block photography-img"
                    />

                </div>
                <div onClick={this.toggle} id="myModal" class="modal" style={this.state.open ? { display: `none` } : { display: `block` }}>
                    <Img
                        title="photography"
                        alt="Screenshot of Project"
                        sizes={this.props.imageSizes}
                        className="card-img_src center-block modal-content"
                    />
                </div>
            </>
        )
    }

}

export default Photo