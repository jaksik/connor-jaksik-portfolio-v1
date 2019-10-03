import React from "react"
import "./nav.css"

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink } from 'reactstrap';
  
  class Mainnav extends React.Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render() {
      return (
        <div style={{color:`white`}} style={{zIndex:`3`}}>
          <Navbar className="text-white" color="dark" light expand="md">
            <NavbarBrand className="start-navitem" href="/" style={{color:`white`}}>Summit Web</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar >
              <NavItem>
                  <NavLink style={{color:`white`}} href="/work/">Work</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink style={{color:`white`}} href="/services/">Services</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink style={{color:`white`}} href="/process/">Process</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink style={{color:`white`}} href="/company/">Company</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink style={{color:`white`}} href="/news/">News</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="end-navitem" style={{color:`white`}} href="/contact/">Contact</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
  }


export default Mainnav