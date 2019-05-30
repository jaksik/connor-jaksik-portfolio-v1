import React, { Component } from "react"
import { Row, Col } from 'reactstrap'
import Img from "gatsby-image";
import photoData from "../data/photography"
import "./style.css"
import Image from "./img-container"

class Photography extends Component {
    constructor(props) {
        super(props);
        this.Images = this.props.photographyImgs;
        this.toggle = this.toggle.bind(this);
        this.state = {
            open: true
        }
    }

    //toggling state between displaying the photos or not
    toggle() {
        this.setState(state => ({ open: !state.open }));
    }

    render() {
        // this is the photo data from the query
        const projectImgs = this.props.photographyImgs;
        return (
            <div id="photos">
                <div className={'photography-header ' + (this.state.open ? 'active' : '')}>
                    <Row>
                        <h2 style={{ textAlign: `center` }}>Photos</h2>
                    </Row>

                    {/* this makes the collapsable x icon */}
                    <Row justify="center" >
                        <Col xs="8" justify="center" style={{ margin: `0 auto`, maxWidth: `none` }}>
                            <div className={'icon x-icon ' + (this.state.open ? '' : 'change')} onClick={this.toggle}>
                                <div className="bar1 bar"></div>
                                <div className="bar2 bar"></div>
                                <div className="bar3 bar"></div>
                            </div>
                        </Col>
                    </Row>
                </div>
                {/* this is where the photos are actually rendered
            It toggles a className which toggles "display"
            */}
                <div className="gallery" style={(this.state.open ? { height: `0px` } : { height: `auto` })}>
                    <Row>
                        <p style={{
                            color: `white`,
                            backgroundColor: `black`,
                            textAlign: `center`,
                            width: `100%`,
                            paddingBottom: `20px`
                        }}
                        >
                            Free Photos
                        </p>
                    </Row>
                    <Row style={{ padding: `0px 1.0875rem 1.45rem` }}>

                        {/* mapping through all of the photos here */}
                        {photoData.map(photo => {
                            const image = projectImgs.find(n => {
                                return n.node.relativePath === `photography/${photo.file}`;
                            });
                            let imgOpen = false;
                            const imageSizes = image.node.childImageSharp.sizes;

                            this.imgeToggle = () => {
                                imgOpen = true;
                            }
                            return (
                                <Col xs="12" sm="6" md="4">
                                    <Image imageSizes={imageSizes}/>
                                    {/* <a href={"../images/photography/" + photo.file} download><button>DownLoad Image</button></a> */}
                                    {/*modal will go here to enlarge imge*/}
                                </Col>
                            )
                        })}
                    </Row>
                </div>
            </div>
        )
    }
}

export default Photography