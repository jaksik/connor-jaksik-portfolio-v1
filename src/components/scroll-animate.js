import React, { Component } from "react"
import Cover from "./cover-img"
import "./style.css"

class ScrollAnimate extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.handleScroll = this.handleScroll.bind(this);
        this.state={
            animate: null,
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', e => this.handleScroll(e));
    }

    componentWillUnmount() {
        this.state.animate=null
    }

    handleScroll = (e) => {
        this.state.animate = this.refs.animate
        let yPosition = (String(e.currentTarget.scrollY / this.props.speed) + "px")
        this.state.animate.style.bottom = yPosition
    }

    render() {

        return (
            <div className="animate" ref="animate" style={{ position: `relative`}} >
                <div style={{ position: `absolute`, width: `100%`, height: `120vh` }}>
                    {this.props.children}
                </div>
                <div style={{ width: `100%` }}>
                    <h1>.</h1>
                </div>
            </div>
        )
    }
}

export default ScrollAnimate;