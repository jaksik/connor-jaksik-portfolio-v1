  
import React, { Component } from "react"
import "./style.css"

class ScrollAnimate extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.handleScroll = this.handleScroll.bind(this);
        this.state = {
            animate: null,
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', e => this.handleScroll(e));
    }

    componentWillUnmount() {
        this.state.animate = null
    }

    handleScroll = (e) => {
        this.state.animate = this.refs.animate
        let yPosition = (String(e.currentTarget.scrollY / this.props.speed) + "px")
        this.state.animate.style.bottom = yPosition
    }

    render() {

        return (
            <div className="animate" ref="animate" style={{ position: `relative` }} >

                {/* Where props.children is animated to move */}
                {this.props.children}
                <h1 style={{ color: `transparent`, marginBottom: `-80px` }}> .</h1>
            </div>
        )
    }
}

export default ScrollAnimate;