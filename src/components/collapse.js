import React, { Component } from "react"
import { Row, Col } from 'reactstrap'
import Img from "gatsby-image";
import photoData from "../data/photography"
import "./style.css"

class Collapse extends Component {
    constructor(props) {
        super(props);
        this.Images = this.props.photographyImgs;
        this.toggle = this.toggle.bind(this);
        this.state = {
            open: false
        }
    }

    toggle() {
        this.setState(state => ({ open: !state.open }));
        console.log(this.state.open)
    }

    render() {
        const projectImgs = this.props.photographyImgs;
        return (
            <div onClick={this.toggle} className={'collapsible ' + (this.state.open ? 'active' : '')}>
                <div className="content" style={(this.state.open ? { maxHeight: `0px` } : { maxHeight: `1000px` })}>
                    <div><h2>Free Photos</h2></div>
                    <Row>
                    {photoData.map(photo => {
                        const image = projectImgs.find(n => {
                            return n.node.relativePath === `photography/${photo.file}`;
                        });
                        const imageSizes = image.node.childImageSharp.sizes;
                        return (
                            <Col xs="12" sm="6" md="4">
                                <Img
                                    title="hello"
                                    alt="Screenshot of Project"
                                    sizes={imageSizes}
                                    className="card-img_src center-block"
                                />
                            </Col>
                        )
                    })}
                    </Row>
                </div>
            </div>
        )
    }
}

export default Collapse