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
            open: true
        }
        console.log("images", this.Images)
    }

    toggle() {
        this.setState(state => ({ open: !state.open }));
        console.log(this.state.open)
    }

    render() {
        const projectImgs = this.props.photographyImgs;
        return (
            <div
                id="photos"
            >
                <div onClick={this.toggle} className={'collapsible ' + (this.state.open ? 'active' : '')}>
                    <h2 style={{ textAlign: `center`}}>Free Photos</h2>
                </div>
                <div className="content" style={(this.state.open ? { height: `0px` } : { height: `auto` })}>
                    <div>
                    <p style={{ color: `white`, backgroundColor: `black`, textAlign: `center`}}>You can't put a price on beauty, feel free to download and use these photos in your next project or how ever you wish.</p>
                    </div>
                    <Row>
                        {photoData.map(photo => {
                            const image = projectImgs.find(n => {
                                return n.node.relativePath === `photography/${photo.file}`;
                            });
                            const imageSizes = image.node.childImageSharp.sizes;
                            console.log(imageSizes)
                            return (
                                <Col xs="12" sm="6" md="4">
                                    <Img
                                        title="hello"
                                        alt="Screenshot of Project"
                                        sizes={imageSizes}
                                        className="card-img_src center-block photography-img"
                                    />
                                    {/* <a href={"../images/photography/" + photo.file} download><button>DownLoad Image</button></a> */}
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